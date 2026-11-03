import * as THREE from "three";
import land from "./land.json";
import dots from "./land-points.json";
import { initialQuality, adaptiveQuality } from "./policy";

export async function mountGlobe(canvas: HTMLCanvasElement) {
  const stage = canvas.closest<HTMLElement>(".globe-stage")!;
  const status = document.querySelector<HTMLElement>("#globe-status")!;
  const toggle = document.querySelector<HTMLButtonElement>("#motion-toggle")!;
  const reset = document.querySelector<HTMLButtonElement>("#globe-reset")!;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 40);
  camera.position.set(0, 0.32, 7.7);
  camera.lookAt(0, 0, 0);
  const world = new THREE.Group();
  world.rotation.set(0.13, 1.07, -0.13);
  scene.add(world);
  scene.add(new THREE.AmbientLight(0x597dc9, 2));
  const light = new THREE.DirectionalLight(0x75dfff, 4);
  light.position.set(-3, 4, 5);
  scene.add(light);
  const purple = new THREE.DirectionalLight(0x9856ed, 3);
  purple.position.set(4, -1, -2);
  scene.add(purple);
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 1024;
  textureCanvas.height = 512;
  const ctx = textureCanvas.getContext("2d")!;
  ctx.fillStyle = "#06152d";
  ctx.fillRect(0, 0, 1024, 512);
  ctx.fillStyle = "#124567";
  ctx.strokeStyle = "#60cde9";
  ctx.lineWidth = 0.7;
  for (const ring of land) {
    ctx.beginPath();
    ring.forEach(([lon, lat], i) => {
      const x = ((lon + 180) / 360) * 1024,
        y = ((90 - lat) / 180) * 512;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Geometry UV orientation differs from the explicit longitude convention; rotate the textured body to match.
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1.65, 64, 48),
    new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 45,
      specular: 0x254d7c,
    }),
  );
  earth.rotation.y = -Math.PI / 2;
  world.add(earth);
  const dotGeometry = new THREE.BufferGeometry();
  dotGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(dots, 3),
  );
  world.add(
    new THREE.Points(
      dotGeometry,
      new THREE.PointsMaterial({
        color: 0x6ad7ff,
        size: 0.014,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
      }),
    ),
  );
  const gridPositions: number[] = [];
  const point = (lat: number, lon: number, r = 1.659) => {
    const a = (lat * Math.PI) / 180,
      b = (lon * Math.PI) / 180;
    return new THREE.Vector3(
      Math.cos(a) * Math.sin(b) * r,
      Math.sin(a) * r,
      Math.cos(a) * Math.cos(b) * r,
    );
  };
  const segment = (a: THREE.Vector3, b: THREE.Vector3) =>
    gridPositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
  for (let lat = -75; lat <= 75; lat += 15)
    for (let lon = -180; lon < 180; lon += 3)
      segment(point(lat, lon), point(lat, lon + 3));
  for (let lon = -180; lon < 180; lon += 15)
    for (let lat = -90; lat < 90; lat += 3)
      segment(point(lat, lon), point(lat + 3, lon));
  const gridGeometry = new THREE.BufferGeometry();
  gridGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(gridPositions, 3),
  );
  world.add(
    new THREE.LineSegments(
      gridGeometry,
      new THREE.LineBasicMaterial({
        color: 0x3187c2,
        transparent: true,
        opacity: 0.32,
      }),
    ),
  );
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.71, 48, 32),
    new THREE.ShaderMaterial({
      uniforms: { glowColor: { value: new THREE.Color(0x269eff) } },
      vertexShader:
        "varying vec3 vNormal; varying vec3 vView; void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",
      fragmentShader:
        "uniform vec3 glowColor; varying vec3 vNormal; varying vec3 vView; void main(){float intensity=pow(1.-abs(dot(normalize(vNormal),normalize(vView))),3.);gl_FragColor=vec4(glowColor,intensity*.65);}",
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  world.add(atmosphere);
  const orbitGroup = new THREE.Group();
  scene.add(orbitGroup);
  for (let i = 0; i < 3; i++) {
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(2.02 + i * 0.13, 0.005, 5, 180),
      new THREE.MeshBasicMaterial({
        color: [0x4de0ff, 0xa28bff, 0x2a6fb5][i],
        transparent: true,
        opacity: i === 2 ? 0.35 : 0.8,
      }),
    );
    orbit.rotation.set(1.05 + i * 0.23, 0.25 + i * 0.3, -0.3 + i * 0.65);
    orbitGroup.add(orbit);
  }
  const arg = point(-32, -60.3, 1.69);
  const marker = new THREE.Mesh(
    new THREE.SphereGeometry(0.025, 12, 8),
    new THREE.MeshBasicMaterial({ color: 0xc9fbff }),
  );
  marker.position.copy(arg);
  world.add(marker);
  const starPositions: number[] = [];
  let seed = 31415;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 150; i++)
    starPositions.push((rnd() - 0.5) * 12, (rnd() - 0.5) * 9, -2 - rnd() * 5);
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starPositions, 3),
  );
  scene.add(
    new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0x739bd5,
        size: 0.016,
        transparent: true,
        opacity: 0.65,
      }),
    ),
  );
  // Compile GPU programs before the first draw without synchronously waiting on every shader.
  await renderer.compileAsync(scene, camera);

  let quality = initialQuality(
    innerWidth,
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory,
  );
  let paused = reduce.matches || matchMedia("(max-width:760px)").matches,
    visible = true,
    lost = false,
    disposed = false,
    raf = 0,
    drag = false,
    lastX = 0,
    lastY = 0,
    targetX = 0.13,
    targetY = 1.07,
    targetZoom = 7.7,
    lastTime = 0,
    sampleStart = 0,
    frames = 0,
    totalMs = 0,
    shown = false;
  let lastSize = "";
  function resize() {
    const r = stage.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const sizeKey = `${r.width}:${r.height}:${quality}`;
    if (sizeKey === lastSize) return;
    lastSize = sizeKey;
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio, quality));
    renderer.setSize(r.width, r.height, false);
    stage.dataset.quality = String(quality);
    if (shown) drawOnce();
  }
  function render(dt = 0) {
    if (disposed || lost) return;
    if (!paused && !drag) targetY += dt * 0.055;
    const smoothing = paused ? 1 : 1 - Math.exp(-dt * 9);
    world.rotation.x = THREE.MathUtils.lerp(
      world.rotation.x,
      targetX,
      smoothing,
    );
    world.rotation.y = THREE.MathUtils.lerp(
      world.rotation.y,
      targetY,
      smoothing,
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetZoom,
      paused ? 1 : 0.12,
    );
    renderer.render(scene, camera);
    if (!shown) {
      shown = true;
      stage.classList.add("is-ready");
      canvas.hidden = false;
      toggle.hidden = false;
      reset.hidden = false;
      status.textContent = "Arrastrá para girar · Flechas y + / − con teclado";
      stage.dataset.renderer = "webgl2";
    }
  }
  function drawOnce() {
    if (!lost && !disposed && visible && !document.hidden) render(0.016);
  }
  function tick(time: number) {
    raf = 0;
    if (disposed || lost || paused || !visible || document.hidden) return;
    const elapsed = lastTime ? time - lastTime : 16.7;
    lastTime = time;
    render(Math.min(elapsed / 1000, 0.05));
    frames++;
    totalMs += elapsed;
    if (!sampleStart) sampleStart = time;
    if (time - sampleStart > 3000) {
      const avg = totalMs / frames;
      stage.dataset.frameMs = avg.toFixed(2);
      stage.dataset.fps = (1000 / avg).toFixed(1);
      const next = adaptiveQuality(quality, avg);
      frames = 0;
      totalMs = 0;
      sampleStart = time;
      if (next !== quality) {
        quality = next;
        resize();
      }
    }
    raf = requestAnimationFrame(tick);
  }
  function schedule() {
    cancelAnimationFrame(raf);
    raf = 0;
    lastTime = 0;
    frames = 0;
    totalMs = 0;
    sampleStart = 0;
    if (disposed || lost || !visible || document.hidden) return;
    drawOnce();
    if (!paused) raf = requestAnimationFrame(tick);
  }
  function syncToggle() {
    toggle.textContent = paused ? "Reanudar movimiento" : "Pausar movimiento";
    toggle.setAttribute("aria-pressed", String(paused));
  }
  toggle.addEventListener("click", () => {
    paused = !paused;
    syncToggle();
    schedule();
  });
  reset.addEventListener("click", () => {
    targetX = 0.13;
    targetY = 1.07;
    targetZoom = 7.7;
    drawOnce();
  });
  canvas.addEventListener("pointerdown", (e) => {
    drag = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drag) return;
    targetY += (e.clientX - lastX) * 0.006;
    targetX = THREE.MathUtils.clamp(
      targetX + (e.clientY - lastY) * 0.003,
      -0.7,
      0.7,
    );
    lastX = e.clientX;
    lastY = e.clientY;
    drawOnce();
  });
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
    canvas.addEventListener(event, () => {
      drag = false;
    });
  canvas.addEventListener("keydown", (e) => {
    if (
      ![
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "+",
        "-",
        "=",
        "Home",
      ].includes(e.key)
    )
      return;
    e.preventDefault();
    if (e.key === "ArrowLeft") targetY -= 0.18;
    if (e.key === "ArrowRight") targetY += 0.18;
    if (e.key === "ArrowUp") targetX -= 0.1;
    if (e.key === "ArrowDown") targetX += 0.1;
    if (e.key === "+" || e.key === "=") targetZoom -= 0.3;
    if (e.key === "-") targetZoom += 0.3;
    if (e.key === "Home") {
      targetX = 0.13;
      targetY = 1.07;
      targetZoom = 7.7;
    }
    targetX = THREE.MathUtils.clamp(targetX, -0.7, 0.7);
    targetZoom = THREE.MathUtils.clamp(targetZoom, 6.5, 9);
    drawOnce();
  });
  const observer = new IntersectionObserver((entries) => {
    if (visible === entries[0].isIntersecting) return;
    visible = entries[0].isIntersecting;
    schedule();
  });
  observer.observe(stage);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  const visibility = () => schedule();
  document.addEventListener("visibilitychange", visibility);
  const reducedChanged = () => {
    paused = reduce.matches;
    syncToggle();
    schedule();
  };
  reduce.addEventListener("change", reducedChanged);
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(raf);
    canvas.hidden = true;
    stage.classList.remove("is-ready");
    toggle.hidden = true;
    reset.hidden = true;
    status.textContent = "Vista estática · La escena 3D no está disponible";
  });
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    observer.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", visibility);
    reduce.removeEventListener("change", reducedChanged);
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) {
        for (const material of Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material])
          material.dispose();
      }
    });
    texture.dispose();
    renderer.dispose();
  };
  window.addEventListener(
    "pagehide",
    (e) => {
      if (!e.persisted) dispose();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    },
    { once: false },
  );
  window.addEventListener("pageshow", () => {
    if (!disposed) schedule();
  });
  syncToggle();
  canvas.hidden = false;
  resize();
  schedule();
}
