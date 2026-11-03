import{i as Y1,a as K1}from"./main-CH2MBcvm.js";const zs="180",Z1=0,sa=1,$1=2,u1=1,j1=2,Qt=3,pn=0,yt=1,en=2,fn=0,jn=1,Kr=2,aa=3,oa=4,J1=5,An=100,Q1=101,eo=102,to=103,no=104,io=200,ro=201,so=202,ao=203,Zr=204,$r=205,oo=206,lo=207,co=208,uo=209,ho=210,fo=211,po=212,mo=213,_o=214,jr=0,Jr=1,Qr=2,Qn=3,es=4,ts=5,ns=6,is=7,Hs=0,go=1,vo=2,dn=0,xo=1,Mo=2,So=3,Eo=4,yo=5,To=6,Ao=7,h1=300,ei=301,ti=302,rs=303,ss=304,fr=306,as=1e3,wn=1001,os=1002,zt=1003,bo=1004,Pi=1005,Gt=1006,gr=1007,Rn=1008,Xt=1009,f1=1010,d1=1011,gi=1012,Vs=1013,Cn=1014,tn=1015,yi=1016,Gs=1017,ks=1018,vi=1020,p1=35902,m1=35899,_1=1021,g1=1022,Bt=1023,xi=1026,Mi=1027,v1=1028,Ws=1029,x1=1030,Xs=1031,qs=1033,tr=33776,nr=33777,ir=33778,rr=33779,ls=35840,cs=35841,us=35842,hs=35843,fs=36196,ds=37492,ps=37496,ms=37808,_s=37809,gs=37810,vs=37811,xs=37812,Ms=37813,Ss=37814,Es=37815,ys=37816,Ts=37817,As=37818,bs=37819,ws=37820,Rs=37821,Cs=36492,Ps=36494,Ds=36495,Ls=36283,Us=36284,Is=36285,Ns=36286,wo=3200,Ro=3201,M1=0,Co=1,hn="",Et="srgb",ni="srgb-linear",ar="linear",$e="srgb",Un=7680,la=519,Po=512,Do=513,Lo=514,S1=515,Uo=516,Io=517,No=518,Fo=519,ca=35044,ua="300 es",kt=2e3,or=2001;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ha=1234567;const pi=Math.PI/180,Si=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Ys(i,e){return(i%e+e)%e}function Oo(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Bo(i,e,t){return i!==e?(t-i)/(e-i):0}function mi(i,e,t){return(1-t)*i+t*e}function zo(i,e,t,n){return mi(i,e,1-Math.exp(-t*n))}function Ho(i,e=1){return e-Math.abs(Ys(i,e*2)-e)}function Vo(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Go(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ko(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wo(i,e){return i+Math.random()*(e-i)}function Xo(i){return i*(.5-Math.random())}function qo(i){i!==void 0&&(ha=i);let e=ha+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yo(i){return i*pi}function Ko(i){return i*Si}function Zo(i){return(i&i-1)===0&&i!==0}function $o(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jo(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:pi,RAD2DEG:Si,generateUUID:si,clamp:He,euclideanModulo:Ys,mapLinear:Oo,inverseLerp:Bo,lerp:mi,damp:zo,pingpong:Ho,smoothstep:Vo,smootherstep:Go,randInt:ko,randFloat:Wo,randFloatSpread:Xo,seededRandom:qo,degToRad:Yo,radToDeg:Ko,isPowerOfTwo:Zo,ceilPowerOfTwo:$o,floorPowerOfTwo:jo,setQuaternionFromProperEuler:Jo,normalize:vt,denormalize:Kn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==p||h!==g){let m=1-o;const u=c*d+l*p+h*g+f*x,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const C=Math.sqrt(T),w=Math.atan2(C,u*b);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const y=o*b;if(c=c*m+d*y,l=l*m+p*y,h=h*m+g*y,f=f*m+x*y,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*p-l*d,e[t+1]=c*g+h*d+l*f-o*p,e[t+2]=l*g+h*p+o*d-c*f,e[t+3]=h*g-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f+d*p*g;break;case"YZX":this._x=d*h*f+l*p*g,this._y=l*p*f+d*h*g,this._z=l*h*g-d*p*f,this._w=l*h*f-d*p*g;break;case"XZY":this._x=d*h*f-l*p*g,this._y=l*p*f-d*h*g,this._z=l*h*g+d*p*f,this._w=l*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new N,fa=new Ti;class Fe{constructor(e,t,n,r,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=r[0],m=r[3],u=r[6],b=r[1],T=r[4],y=r[7],C=r[2],w=r[5],D=r[8];return s[0]=a*x+o*b+c*C,s[3]=a*m+o*T+c*w,s[6]=a*u+o*y+c*D,s[1]=l*x+h*b+f*C,s[4]=l*m+h*T+f*w,s[7]=l*u+h*y+f*D,s[2]=d*x+p*b+g*C,s[5]=d*m+p*T+g*w,s[8]=d*u+p*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,p=l*s-a*c,g=t*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Fe;function E1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qo(){const i=lr("canvas");return i.style.display="block",i}const da={};function Ei(i){i in da||(da[i]=!0,console.warn(i))}function e0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const pa=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ma=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=nn(r.r),r.g=nn(r.g),r.b=nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hn?ar:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:ar,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const qe=t0();function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Nn;class n0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nn===void 0&&(Nn=lr("canvas")),Nn.width=e.width,Nn.height=e.height;const r=Nn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Nn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Ks{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mr(r[a].image)):s.push(Mr(r[a]))}else s=Mr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r0=0;const Sr=new N;class Mt extends ri{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=wn,r=wn,s=Gt,a=Rn,o=Bt,c=Xt,l=Mt.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=si(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sr).x}get height(){return this.source.getSize(Sr).y}get depth(){return this.source.getSize(Sr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=h1;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(p+1)/2,C=(u+1)/2,w=(h+d)/4,D=(f+x)/4,F=(g+m)/4;return T>y&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=D/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=F/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=D/s,r=F/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s0 extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Mt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends s0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class y1 extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,It):It.fromBufferAttribute(s,a),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(e.matrixWorld),this.union(Di)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(li),Li.subVectors(this.max,li),Fn.subVectors(e.a,li),On.subVectors(e.b,li),Bn.subVectors(e.c,li),sn.subVectors(On,Fn),an.subVectors(Bn,On),gn.subVectors(Fn,Bn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-gn.z,gn.y,sn.z,0,-sn.x,an.z,0,-an.x,gn.z,0,-gn.x,-sn.y,sn.x,0,-an.y,an.x,0,-gn.y,gn.x,0];return!Er(t,Fn,On,Bn,Li)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Fn,On,Bn,Li))?!1:(Ui.crossVectors(sn,an),t=[Ui.x,Ui.y,Ui.z],Er(t,Fn,On,Bn,Li))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kt=[new N,new N,new N,new N,new N,new N,new N,new N],It=new N,Di=new Ai,Fn=new N,On=new N,Bn=new N,sn=new N,an=new N,gn=new N,li=new N,Li=new N,Ui=new N,vn=new N;function Er(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){vn.fromArray(i,s);const o=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),c=e.dot(vn),l=t.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const o0=new Ai,ci=new N,yr=new N;class bi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):o0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ci.subVectors(e,this.center);const t=ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ci.copy(e.center).add(yr)),this.expandByPoint(ci.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zt=new N,Tr=new N,Ii=new N,on=new N,Ar=new N,Ni=new N,br=new N;class Zs{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Tr.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Tr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ii),o=on.dot(this.direction),c=-on.dot(Ii),l=on.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){const x=1/h;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tr).addScaledVector(Ii,d),p}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,s){Ar.subVectors(t,e),Ni.subVectors(n,e),br.crossVectors(Ar,Ni);let a=this.direction.dot(br),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);const c=o*this.direction.dot(Ni.crossVectors(on,Ni));if(c<0)return null;const l=o*this.direction.dot(Ar.cross(on));if(l<0||c+l>a)return null;const h=-o*on.dot(br);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,a,o,c,l,h,f,d,p,g,x,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,d,p,g,x,m)}set(e,t,n,r,s,a,o,c,l,h,f,d,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*f,g=l*h,x=l*f;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*f,g=l*h,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),ln.crossVectors(n,wt),ln.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),ln.crossVectors(n,wt)),ln.normalize(),Fi.crossVectors(wt,ln),r[0]=ln.x,r[4]=Fi.x,r[8]=wt.x,r[1]=ln.y,r[5]=Fi.y,r[9]=wt.y,r[2]=ln.z,r[6]=Fi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],T=n[7],y=n[11],C=n[15],w=r[0],D=r[4],F=r[8],E=r[12],S=r[1],P=r[5],H=r[9],V=r[13],W=r[2],Y=r[6],X=r[10],J=r[14],z=r[3],re=r[7],ue=r[11],ve=r[15];return s[0]=a*w+o*S+c*W+l*z,s[4]=a*D+o*P+c*Y+l*re,s[8]=a*F+o*H+c*X+l*ue,s[12]=a*E+o*V+c*J+l*ve,s[1]=h*w+f*S+d*W+p*z,s[5]=h*D+f*P+d*Y+p*re,s[9]=h*F+f*H+d*X+p*ue,s[13]=h*E+f*V+d*J+p*ve,s[2]=g*w+x*S+m*W+u*z,s[6]=g*D+x*P+m*Y+u*re,s[10]=g*F+x*H+m*X+u*ue,s[14]=g*E+x*V+m*J+u*ve,s[3]=b*w+T*S+y*W+C*z,s[7]=b*D+T*P+y*Y+C*re,s[11]=b*F+T*H+y*X+C*ue,s[15]=b*E+T*V+y*J+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+x*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+m*(+t*l*f-t*o*p-s*a*f+n*a*p+s*o*h-n*l*h)+u*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=f*m*l-x*d*l+x*c*p-o*m*p-f*c*u+o*d*u,T=g*d*l-h*m*l-g*c*p+a*m*p+h*c*u-a*d*u,y=h*x*l-g*f*l+g*o*p-a*x*p-h*o*u+a*f*u,C=g*f*c-h*x*c-g*o*d+a*x*d+h*o*m-a*f*m,w=t*b+n*T+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/w;return e[0]=b*D,e[1]=(x*d*s-f*m*s-x*r*p+n*m*p+f*r*u-n*d*u)*D,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*u+n*c*u)*D,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*D,e[4]=T*D,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*u+t*d*u)*D,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*D,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*D,e[8]=y*D,e[9]=(g*f*s-h*x*s-g*n*p+t*x*p+h*n*u-t*f*u)*D,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*u+t*o*u)*D,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*p-t*o*p)*D,e[12]=C*D,e[13]=(h*x*r-g*f*r+g*n*d-t*x*d-h*n*m+t*f*m)*D,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*m-t*o*m)*D,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,d=s*l,p=s*h,g=s*f,x=a*h,m=a*f,u=o*f,b=c*l,T=c*h,y=c*f,C=n.x,w=n.y,D=n.z;return r[0]=(1-(x+u))*C,r[1]=(p+y)*C,r[2]=(g-T)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+u))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+T)*D,r[9]=(m-b)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zn.set(r[0],r[1],r[2]).length();const a=zn.set(r[4],r[5],r[6]).length(),o=zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const l=1/s,h=1/a,f=1/o;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=kt,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===kt)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===or)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=kt,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===kt)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===or)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new N,Nt=new rt,l0=new N(0,0,0),c0=new N(1,1,1),ln=new N,Fi=new N,wt=new N,_a=new rt,ga=new Ti;class qt{constructor(e=0,t=0,n=0,r=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _a.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class T1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const va=new N,Hn=new Ti,$t=new rt,Oi=new N,ui=new N,h0=new N,f0=new Ti,xa=new N(1,0,0),Ma=new N(0,1,0),Sa=new N(0,0,1),Ea={type:"added"},d0={type:"removed"},Vn={type:"childadded",child:null},wr={type:"childremoved",child:null};class dt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new qt,n=new Ti,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Fe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(Ma,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(Ma,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(ui,Oi,this.up):$t.lookAt(Oi,ui,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Hn.setFromRotationMatrix($t),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ea),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),wr.child=e,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ea),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new N,jt=new N,Rr=new N,Jt=new N,Gn=new N,kn=new N,ya=new N,Cr=new N,Pr=new N,Dr=new N,Lr=new at,Ur=new at,Ir=new at;class Ot{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),jt.subVectors(n,t),Rr.subVectors(e,t);const a=Ft.dot(Ft),o=Ft.dot(jt),c=Ft.dot(Rr),l=jt.dot(jt),h=jt.dot(Rr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Jt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jt.x),c.addScaledVector(a,Jt.y),c.addScaledVector(o,Jt.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Lr.setScalar(0),Ur.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(e,t),Ur.fromBufferAttribute(e,n),Ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Lr,s.x),a.addScaledVector(Ur,s.y),a.addScaledVector(Ir,s.z),a}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),jt.subVectors(e,t),Ft.cross(jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ft.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Gn.subVectors(r,n),kn.subVectors(s,n),Cr.subVectors(e,n);const c=Gn.dot(Cr),l=kn.dot(Cr);if(c<=0&&l<=0)return t.copy(n);Pr.subVectors(e,r);const h=Gn.dot(Pr),f=kn.dot(Pr);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gn,a);Dr.subVectors(e,s);const p=Gn.dot(Dr),g=kn.dot(Dr);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(kn,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return ya.subVectors(s,r),o=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(ya,o);const u=1/(m+x+d);return a=x*u,o=d*u,t.copy(n).addScaledVector(Gn,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=Ys(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nr(a,s,e+1/3),this.g=Nr(a,s,e),this.b=Nr(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=A1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return qe.workingToColorSpace(_t.copy(this),e),Math.round(He(_t.r*255,0,255))*65536+Math.round(He(_t.g*255,0,255))*256+Math.round(He(_t.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Et){qe.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Bi);const n=mi(cn.h,Bi.h,t),r=mi(cn.s,Bi.s,t),s=mi(cn.l,Bi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ge;Ge.NAMES=A1;let p0=0;class Dn extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=si(),this.name="",this.type="Material",this.blending=jn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=$r,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Un&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Un&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Un&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cr extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new N,zi=new Ye;let m0=0;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class b1 extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class w1 extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _0=0;const Lt=new rt,Fr=new dt,Wn=new N,Rt=new Ai,hi=new Ai,ft=new N;class Tt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?w1:b1)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Rt.min,hi.min),Rt.expandByPoint(ft),ft.addVectors(Rt.max,hi.max),Rt.expandByPoint(ft)):(Rt.expandByPoint(hi.min),Rt.expandByPoint(hi.max))}Rt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ft.fromBufferAttribute(o,l),c&&(Wn.fromBufferAttribute(e,l),ft.add(Wn)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new N,c[F]=new N;const l=new N,h=new N,f=new N,d=new Ye,p=new Ye,g=new Ye,x=new N,m=new N;function u(F,E,S){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(l),f.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[F].add(x),o[E].add(x),o[S].add(x),c[F].add(m),c[E].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,E=b.length;F<E;++F){const S=b[F],P=S.start,H=S.count;for(let V=P,W=P+H;V<W;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new N,y=new N,C=new N,w=new N;function D(F){C.fromBufferAttribute(r,F),w.copy(C);const E=o[F];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(w,E);const P=y.dot(c[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,P)}for(let F=0,E=b.length;F<E;++F){const S=b[F],P=S.start,H=S.count;for(let V=P,W=P+H;V<W;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let u=0;u<h;u++)d[g++]=l[p++]}return new Wt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new rt,xn=new Zs,Hi=new bi,Aa=new N,Vi=new N,Gi=new N,ki=new N,Or=new N,Wi=new N,ba=new N,Xi=new N;class Ct extends dt{constructor(e=new Tt,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Or.fromBufferAttribute(f,e),a?Wi.addScaledVector(Or,h):Wi.addScaledVector(Or.sub(t),h))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(Hi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Hi,Aa)===null||xn.origin.distanceToSquared(Aa)>(e.far-e.near)**2))&&(Ta.copy(s).invert(),xn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,C=T;y<C;y+=3){const w=o.getX(y),D=o.getX(y+1),F=o.getX(y+2);r=qi(this,u,e,n,l,h,f,w,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=qi(this,a,e,n,l,h,f,b,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],u=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,C=T;y<C;y+=3){const w=y,D=y+1,F=y+2;r=qi(this,u,e,n,l,h,f,w,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=m,T=m+1,y=m+2;r=qi(this,a,e,n,l,h,f,b,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function g0(i,e,t,n,r,s,a,o){let c;if(e.side===yt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===pn,o),c===null)return null;Xi.copy(o),Xi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xi);return l<t.near||l>t.far?null:{distance:l,point:Xi.clone(),object:i}}function qi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Vi),i.getVertexPosition(c,Gi),i.getVertexPosition(l,ki);const h=g0(i,e,t,n,Vi,Gi,ki,ba);if(h){const f=new N;Ot.getBarycoord(ba,Vi,Gi,ki,f),r&&(h.uv=Ot.getInterpolatedAttribute(r,o,c,l,f,new Ye)),s&&(h.uv1=Ot.getInterpolatedAttribute(s,o,c,l,f,new Ye)),a&&(h.normal=Ot.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Ot.getNormal(Vi,Gi,ki,d.normal),h.face=d,h.barycoord=f}return h}class wi extends Tt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function g(x,m,u,b,T,y,C,w,D,F,E){const S=y/D,P=C/F,H=y/2,V=C/2,W=w/2,Y=D+1,X=F+1;let J=0,z=0;const re=new N;for(let ue=0;ue<X;ue++){const ve=ue*P-V;for(let De=0;De<Y;De++){const ke=De*S-H;re[x]=ke*b,re[m]=ve*T,re[u]=W,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[u]=w>0?1:-1,h.push(re.x,re.y,re.z),f.push(De/D),f.push(1-ue/F),J+=1}}for(let ue=0;ue<F;ue++)for(let ve=0;ve<D;ve++){const De=d+ve+Y*ue,ke=d+ve+Y*(ue+1),We=d+(ve+1)+Y*(ue+1),Ve=d+(ve+1)+Y*ue;c.push(De,ke,Ve),c.push(ke,We,Ve),z+=6}o.addGroup(p,z,E),p+=z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=ii(i[t]);for(const r in n)e[r]=n[r]}return e}function v0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function R1(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const x0={clone:ii,merge:xt};var M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class C1 extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new N,wa=new Ye,Ra=new Ye;class Ut extends C1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Si*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Si*2*Math.atan(Math.tan(pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,wa,Ra),t.subVectors(Ra,wa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xn=-90,qn=1;class E0 extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(Xn,qn,e,t);r.layers=this.layers,this.add(r);const s=new Ut(Xn,qn,e,t);s.layers=this.layers,this.add(s);const a=new Ut(Xn,qn,e,t);a.layers=this.layers,this.add(a);const o=new Ut(Xn,qn,e,t);o.layers=this.layers,this.add(o);const c=new Ut(Xn,qn,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Xn,qn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===kt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class P1 extends Mt{constructor(e=[],t=ei,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y0 extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new P1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:fn});s.uniforms.tEquirect.value=t;const a=new Ct(r,s),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Gt),new E0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Zn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A0 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zr=new N,b0=new N,w0=new Fe;class yn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zr.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w0.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new bi,R0=new Ye(.5,.5),Yi=new N;class $s{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],u=s[11],b=s[12],T=s[13],y=s[14],C=s[15];if(r[0].setComponents(l-a,p-h,u-g,C-b).normalize(),r[1].setComponents(l+a,p+h,u+g,C+b).normalize(),r[2].setComponents(l+o,p+f,u+x,C+T).normalize(),r[3].setComponents(l-o,p-f,u-x,C-T).normalize(),n)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,p-d,u-m,C-y).normalize();else if(r[4].setComponents(l-c,p-d,u-m,C-y).normalize(),t===kt)r[5].setComponents(l+c,p+d,u+m,C+y).normalize();else if(t===or)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){Mn.center.set(0,0,0);const t=R0.distanceTo(e.center);return Mn.radius=.7071067811865476+t,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yi.x=r.normal.x>0?e.max.x:e.min.x,Yi.y=r.normal.y>0?e.max.y:e.min.y,Yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D1 extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ur=new N,hr=new N,Ca=new rt,fi=new Zs,Ki=new bi,Hr=new N,Pa=new N;class C0 extends dt{constructor(e=new Tt,t=new D1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ur.fromBufferAttribute(t,r-1),hr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ur.distanceTo(hr);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;Ca.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Ca);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=h.getX(x),b=h.getX(x+1),T=Zi(this,e,fi,c,u,b,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),u=Zi(this,e,fi,c,x,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=Zi(this,e,fi,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Zi(this,e,fi,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(ur.fromBufferAttribute(o,r),hr.fromBufferAttribute(o,s),t.distanceSqToSegment(ur,hr,Hr,Pa)>n)return;Hr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hr);if(!(l<e.near||l>e.far))return{distance:l,point:Pa.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Da=new N,La=new N;class P0 extends C0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Da.fromBufferAttribute(t,r),La.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Da.distanceTo(La);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fs extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ua=new rt,Os=new Zs,$i=new bi,ji=new N;class Ia extends dt{constructor(e=new Tt,t=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=s,e.ray.intersectsSphere($i)===!1)return;Ua.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Ua);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=l.getX(g);ji.fromBufferAttribute(f,m),Na(ji,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,x=p;g<x;g++)ji.fromBufferAttribute(f,g),Na(ji,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Na(i,e,t,n,r,s,a){const o=Os.distanceSqToPoint(i);if(o<t){const c=new N;Os.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class D0 extends Mt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class L1 extends Mt{constructor(e,t,n=Cn,r,s,a,o=zt,c=zt,l,h=xi,f=1){if(h!==xi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U1 extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dr extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,d=t/c,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const b=u*d-a;for(let T=0;T<l;T++){const y=T*f-s;g.push(y,-b,0),x.push(0,0,1),m.push(T/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const T=b+l*u,y=b+l*(u+1),C=b+1+l*(u+1),w=b+1+l*u;p.push(T,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class _i extends Tt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new N,d=new N,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){const b=[],T=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(r+w*s)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-T),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const T=h[u][b+1],y=h[u][b],C=h[u+1][b],w=h[u+1][b+1];(u!==0||a>0)&&p.push(T,y,w),(u!==n-1||c<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends Tt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new N,f=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,b=(r+1)*p+g;a.push(x,m,b),a.push(m,u,b)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class L0 extends Dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=M1,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class I1 extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vr=new rt,Fa=new N,Oa=new N;class N0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fa),Oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oa),t.updateMatrixWorld(),Vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N1 extends C1{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class F0 extends N0{constructor(){super(new N1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends I1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new F0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O0 extends I1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class B0 extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function za(i,e,t,n){const r=z0(n);switch(t){case _1:return i*e;case v1:return i*e/r.components*r.byteLength;case Ws:return i*e/r.components*r.byteLength;case x1:return i*e*2/r.components*r.byteLength;case Xs:return i*e*2/r.components*r.byteLength;case g1:return i*e*3/r.components*r.byteLength;case Bt:return i*e*4/r.components*r.byteLength;case qs:return i*e*4/r.components*r.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cs:case hs:return Math.max(i,16)*Math.max(e,8)/4;case ls:case us:return Math.max(i,8)*Math.max(e,8)/2;case fs:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ms:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ys:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ws:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cs:case Ps:case Ds:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ls:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Is:case Ns:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(i){switch(i){case Xt:case f1:return{byteLength:1,components:1};case gi:case d1:case yi:return{byteLength:2,components:1};case Gs:case ks:return{byteLength:2,components:4};case Cn:case Vs:case tn:return{byteLength:4,components:1};case p1:case m1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);function F1(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function H0(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,el=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,il=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,al=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ol=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ll=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ul=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ml=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_l=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gl="gl_FragColor = linearToOutputTexel( gl_FragColor );",vl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ml=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Al=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ll=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ul=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Il=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ol=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ql=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$l=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ql=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ec=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ic=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ac=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_c=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ec=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ac=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ic=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:k0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:K0,batching_pars_vertex:Z0,batching_vertex:$0,begin_vertex:j0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:el,bumpmap_pars_fragment:tl,clipping_planes_fragment:nl,clipping_planes_pars_fragment:il,clipping_planes_pars_vertex:rl,clipping_planes_vertex:sl,color_fragment:al,color_pars_fragment:ol,color_pars_vertex:ll,color_vertex:cl,common:ul,cube_uv_reflection_fragment:hl,defaultnormal_vertex:fl,displacementmap_pars_vertex:dl,displacementmap_vertex:pl,emissivemap_fragment:ml,emissivemap_pars_fragment:_l,colorspace_fragment:gl,colorspace_pars_fragment:vl,envmap_fragment:xl,envmap_common_pars_fragment:Ml,envmap_pars_fragment:Sl,envmap_pars_vertex:El,envmap_physical_pars_fragment:Ul,envmap_vertex:yl,fog_vertex:Tl,fog_pars_vertex:Al,fog_fragment:bl,fog_pars_fragment:wl,gradientmap_pars_fragment:Rl,lightmap_pars_fragment:Cl,lights_lambert_fragment:Pl,lights_lambert_pars_fragment:Dl,lights_pars_begin:Ll,lights_toon_fragment:Il,lights_toon_pars_fragment:Nl,lights_phong_fragment:Fl,lights_phong_pars_fragment:Ol,lights_physical_fragment:Bl,lights_physical_pars_fragment:zl,lights_fragment_begin:Hl,lights_fragment_maps:Vl,lights_fragment_end:Gl,logdepthbuf_fragment:kl,logdepthbuf_pars_fragment:Wl,logdepthbuf_pars_vertex:Xl,logdepthbuf_vertex:ql,map_fragment:Yl,map_pars_fragment:Kl,map_particle_fragment:Zl,map_particle_pars_fragment:$l,metalnessmap_fragment:jl,metalnessmap_pars_fragment:Jl,morphinstance_vertex:Ql,morphcolor_vertex:ec,morphnormal_vertex:tc,morphtarget_pars_vertex:nc,morphtarget_vertex:ic,normal_fragment_begin:rc,normal_fragment_maps:sc,normal_pars_fragment:ac,normal_pars_vertex:oc,normal_vertex:lc,normalmap_pars_fragment:cc,clearcoat_normal_fragment_begin:uc,clearcoat_normal_fragment_maps:hc,clearcoat_pars_fragment:fc,iridescence_pars_fragment:dc,opaque_fragment:pc,packing:mc,premultiplied_alpha_fragment:_c,project_vertex:gc,dithering_fragment:vc,dithering_pars_fragment:xc,roughnessmap_fragment:Mc,roughnessmap_pars_fragment:Sc,shadowmap_pars_fragment:Ec,shadowmap_pars_vertex:yc,shadowmap_vertex:Tc,shadowmask_pars_fragment:Ac,skinbase_vertex:bc,skinning_pars_vertex:wc,skinning_vertex:Rc,skinnormal_vertex:Cc,specularmap_fragment:Pc,specularmap_pars_fragment:Dc,tonemapping_fragment:Lc,tonemapping_pars_fragment:Uc,transmission_fragment:Ic,transmission_pars_fragment:Nc,uv_pars_fragment:Fc,uv_pars_vertex:Oc,uv_vertex:Bc,worldpos_vertex:zc,background_vert:Hc,background_frag:Vc,backgroundCube_vert:Gc,backgroundCube_frag:kc,cube_vert:Wc,cube_frag:Xc,depth_vert:qc,depth_frag:Yc,distanceRGBA_vert:Kc,distanceRGBA_frag:Zc,equirect_vert:$c,equirect_frag:jc,linedashed_vert:Jc,linedashed_frag:Qc,meshbasic_vert:e2,meshbasic_frag:t2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:a2,meshnormal_frag:o2,meshphong_vert:l2,meshphong_frag:c2,meshphysical_vert:u2,meshphysical_frag:h2,meshtoon_vert:f2,meshtoon_frag:d2,points_vert:p2,points_frag:m2,shadow_vert:_2,shadow_frag:g2,sprite_vert:v2,sprite_frag:x2},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Vt={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Vt.physical={uniforms:xt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ji={r:0,b:0,g:0},Sn=new qt,M2=new rt;function S2(i,e,t,n,r,s,a){const o=new Ge(0);let c=s===!0?0:1,l,h,f=null,d=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function x(T){let y=!1;const C=g(T);C===null?u(o,c):C&&C.isColor&&(u(C,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===fr)?(h===void 0&&(h=new Ct(new wi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ii(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Sn.copy(y.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Sn)),h.material.toneMapped=qe.getTransfer(C.colorSpace)!==$e,(f!==C||d!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ct(new dr(2,2),new rn({name:"BackgroundMaterial",uniforms:ii(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(C.colorSpace)!==$e,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=C,d=C.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,y){T.getRGB(Ji,R1(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:x,addToRenderList:m,dispose:b}}function E2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,P,H,V,W){let Y=!1;const X=f(V,H,P);s!==X&&(s=X,l(s.object)),Y=p(S,V,H,W),Y&&g(S,V,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(S,P,H,V),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,P,H){const V=H.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let X=Y[V];return X===void 0&&(X=d(c()),Y[V]=X),X}function d(S){const P=[],H=[],V=[];for(let W=0;W<t;W++)P[W]=0,H[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,P,H,V){const W=s.attributes,Y=P.attributes;let X=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){const ue=W[z];let ve=Y[z];if(ve===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function g(S,P,H,V){const W={},Y=P.attributes;let X=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){let ue=Y[z];ue===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),W[z]=ve,X++}s.attributes=W,s.attributesNum=X,s.index=V}function x(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){u(S,0)}function u(S,P){const H=s.newAttributes,V=s.enabledAttributes,W=s.attributeDivisors;H[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),W[S]!==P&&(i.vertexAttribDivisor(S,P),W[S]=P)}function b(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,V=P.length;H<V;H++)P[H]!==S[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function T(S,P,H,V,W,Y,X){X===!0?i.vertexAttribIPointer(S,P,H,W,Y):i.vertexAttribPointer(S,P,H,V,W,Y)}function y(S,P,H,V){x();const W=V.attributes,Y=H.getAttributes(),X=P.defaultAttributeValues;for(const J in Y){const z=Y[J];if(z.location>=0){let re=W[J];if(re===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const ue=re.normalized,ve=re.itemSize,De=e.get(re);if(De===void 0)continue;const ke=De.buffer,We=De.type,Ve=De.bytesPerElement,q=We===i.INT||We===i.UNSIGNED_INT||re.gpuType===Vs;if(re.isInterleavedBufferAttribute){const Z=re.data,he=Z.stride,we=re.offset;if(Z.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)u(z.location+xe,Z.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let xe=0;xe<z.locationSize;xe++)T(z.location+xe,ve/z.locationSize,We,ue,he*Ve,(we+ve/z.locationSize*xe)*Ve,q)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)u(z.location+Z,re.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Z=0;Z<z.locationSize;Z++)T(z.location+Z,ve/z.locationSize,We,ue,ve*Ve,ve/z.locationSize*Z*Ve,q)}}else if(X!==void 0){const ue=X[J];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}b()}function C(){F();for(const S in n){const P=n[S];for(const H in P){const V=P[H];for(const W in V)h(V[W].object),delete V[W];delete P[H]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const H in P){const V=P[H];for(const W in V)h(V[W].object),delete V[W];delete P[H]}delete n[S.id]}function D(S){for(const P in n){const H=n[P];if(H[S.id]===void 0)continue;const V=H[S.id];for(const W in V)h(V[W].object),delete V[W];delete H[S.id]}}function F(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function y2(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function c(l,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function T2(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Bt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const F=D===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Xt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==tn&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function A2(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new yn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const b=s?0:n,T=b*4;let y=u.clippingState||null;c.value=y,y=h(g,d,T,p);for(let C=0;C!==T;++C)y[C]=t[C];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const u=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,y=p;T!==x;++T,y+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function b2(i){let e=new WeakMap;function t(a,o){return o===rs?a.mapping=ei:o===ss&&(a.mapping=ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===rs||o===ss)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new y0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $n=4,Ha=[.125,.215,.35,.446,.526,.582],bn=20,Gr=new N1,Va=new Ge;let kr=null,Wr=0,Xr=0,qr=!1;const Tn=(1+Math.sqrt(5))/2,Yn=1/Tn,Ga=[new N(-Tn,Yn,0),new N(Tn,Yn,0),new N(-Yn,0,Tn),new N(Yn,0,Tn),new N(0,Tn,-Yn),new N(0,Tn,Yn),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],w2=new N;class ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=w2}=s;kr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kr,Wr,Xr),this._renderer.xr.enabled=qr,e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:yi,format:Bt,colorSpace:ni,depthBuffer:!1},r=Wa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R2(s)),this._blurMaterial=C2(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,r,s){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Va),f.toneMapping=dn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new cr({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new Ct(new wi,x);let u=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(Va),u=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const C=this._cubeSize;Qi(r,y*C,T>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ei||e.mapping===ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ga[(r-s-1)%Ga.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ct(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):bn;m>bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bn}`);const u=[];let b=0;for(let D=0;D<bn;++D){const F=D/x,E=Math.exp(-F*F/2);u.push(E),D===0?b+=E:D<m&&(b+=2*E)}for(let D=0;D<u.length;D++)u[D]=u[D]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const y=this._sizeLods[r],C=3*y*(r>T-$n?r-T+$n:0),w=4*(this._cubeSize-y);Qi(t,C,w,3*y,2*y),c.setRenderTarget(t),c.render(f,Gr)}}function R2(i){const e=[],t=[],n=[];let r=i;const s=i-$n+1+Ha.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-$n?c=Ha[a-i+$n-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),T=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let w=0;w<p;w++){const D=w%3*2/3-1,F=w>2?0:-1,E=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];b.set(E,x*g*w),T.set(d,m*g*w);const S=[w,w,w,w,w,w];y.set(S,u*g*w)}const C=new Tt;C.setAttribute("position",new Wt(b,x)),C.setAttribute("uv",new Wt(T,m)),C.setAttribute("faceIndex",new Wt(y,u)),e.push(C),r>$n&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wa(i,e,t){const n=new Pn(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C2(i,e,t){const n=new Float32Array(bn),r=new N(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Xa(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function qa(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===rs||c===ss,h=c===ei||c===ti;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ka(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ka(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function L2(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let T=0,y=b.length;T<y;T+=3){const C=b[T+0],w=b[T+1],D=b[T+2];d.push(C,w,w,D,D,C)}}else if(g!==void 0){const b=g.array;x=g.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const C=T+0,w=T+1,D=T+2;d.push(C,w,w,D,D,C)}}else return;const m=new(E1(d)?w1:b1)(d,1);m.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function U2(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function I2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function N2(i,e,t){const n=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*C*4*f),D=new y1(w,y,C,f);D.type=tn,D.needsUpdate=!0;const F=T*4;for(let S=0;S<f;S++){const P=m[S],H=u[S],V=b[S],W=y*C*4*S;for(let Y=0;Y<P.count;Y++){const X=Y*F;p===!0&&(r.fromBufferAttribute(P,Y),w[W+X+0]=r.x,w[W+X+1]=r.y,w[W+X+2]=r.z,w[W+X+3]=0),g===!0&&(r.fromBufferAttribute(H,Y),w[W+X+4]=r.x,w[W+X+5]=r.y,w[W+X+6]=r.z,w[W+X+7]=0),x===!0&&(r.fromBufferAttribute(V,Y),w[W+X+8]=r.x,w[W+X+9]=r.y,w[W+X+10]=r.z,w[W+X+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Ye(y,C)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function F2(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const O1=new Mt,Ya=new L1(1,1),B1=new y1,z1=new a0,H1=new P1,Ka=[],Za=[],$a=new Float32Array(16),ja=new Float32Array(9),Ja=new Float32Array(4);function ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ka[r];if(s===void 0&&(s=new Float32Array(r),Ka[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pr(i,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function z2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function H2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function V2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Ja.set(n),i.uniformMatrix2fv(this.addr,!1,Ja),ht(t,n)}}function G2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;ja.set(n),i.uniformMatrix3fv(this.addr,!1,ja),ht(t,n)}}function k2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;$a.set(n),i.uniformMatrix4fv(this.addr,!1,$a),ht(t,n)}}function W2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function X2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function q2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Y2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function K2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function $2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function j2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function J2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=S1,s=Ya):s=O1,t.setTexture2D(e||s,r)}function Q2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||z1,r)}function e5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||H1,r)}function t5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||B1,r)}function n5(i){switch(i){case 5126:return O2;case 35664:return B2;case 35665:return z2;case 35666:return H2;case 35674:return V2;case 35675:return G2;case 35676:return k2;case 5124:case 35670:return W2;case 35667:case 35671:return X2;case 35668:case 35672:return q2;case 35669:case 35673:return Y2;case 5125:return K2;case 36294:return Z2;case 36295:return $2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return e5;case 36289:case 36303:case 36311:case 36292:return t5}}function i5(i,e){i.uniform1fv(this.addr,e)}function r5(i,e){const t=ai(e,this.size,2);i.uniform2fv(this.addr,t)}function s5(i,e){const t=ai(e,this.size,3);i.uniform3fv(this.addr,t)}function a5(i,e){const t=ai(e,this.size,4);i.uniform4fv(this.addr,t)}function o5(i,e){const t=ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l5(i,e){const t=ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c5(i,e){const t=ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u5(i,e){i.uniform1iv(this.addr,e)}function h5(i,e){i.uniform2iv(this.addr,e)}function f5(i,e){i.uniform3iv(this.addr,e)}function d5(i,e){i.uniform4iv(this.addr,e)}function p5(i,e){i.uniform1uiv(this.addr,e)}function m5(i,e){i.uniform2uiv(this.addr,e)}function _5(i,e){i.uniform3uiv(this.addr,e)}function g5(i,e){i.uniform4uiv(this.addr,e)}function v5(i,e,t){const n=this.cache,r=e.length,s=pr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||O1,s[a])}function x5(i,e,t){const n=this.cache,r=e.length,s=pr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||z1,s[a])}function M5(i,e,t){const n=this.cache,r=e.length,s=pr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||H1,s[a])}function S5(i,e,t){const n=this.cache,r=e.length,s=pr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||B1,s[a])}function E5(i){switch(i){case 5126:return i5;case 35664:return r5;case 35665:return s5;case 35666:return a5;case 35674:return o5;case 35675:return l5;case 35676:return c5;case 5124:case 35670:return u5;case 35667:case 35671:return h5;case 35668:case 35672:return f5;case 35669:case 35673:return d5;case 5125:return p5;case 36294:return m5;case 36295:return _5;case 36296:return g5;case 35678:case 36198:case 36298:case 36306:case 35682:return v5;case 35679:case 36299:case 36307:return x5;case 35680:case 36300:case 36308:case 36293:return M5;case 36289:case 36303:case 36311:case 36292:return S5}}class y5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n5(t.type)}}class T5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E5(t.type)}}class A5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Qa(i,e){i.seq.push(e),i.map[e.id]=e}function b5(i,e,t){const n=i.name,r=n.length;for(Yr.lastIndex=0;;){const s=Yr.exec(n),a=Yr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Qa(t,l===void 0?new y5(o,i,e):new T5(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new A5(o),Qa(t,f)),t=f}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);b5(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function e1(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const w5=37297;let R5=0;function C5(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const t1=new Fe;function P5(i){qe._getMatrix(t1,qe.workingColorSpace,i);const e=`mat3( ${t1.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case ar:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function n1(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+C5(i.getShaderSource(e),o)}else return s}function D5(i,e){const t=P5(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L5(i,e){let t;switch(e){case xo:t="Linear";break;case Mo:t="Reinhard";break;case So:t="Cineon";break;case Eo:t="ACESFilmic";break;case To:t="AgX";break;case Ao:t="Neutral";break;case yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new N;function U5(){qe.getLuminanceCoefficients(er);const i=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I5(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(di).join(`
`)}function N5(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F5(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function di(i){return i!==""}function i1(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r1(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(i){return i.replace(O5,z5)}const B5=new Map;function z5(i,e){let t=Oe[e];if(t===void 0){const n=B5.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bs(t)}const H5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s1(i){return i.replace(H5,V5)}function V5(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function a1(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G5(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===u1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===j1?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function k5(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W5(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ti&&(e="ENVMAP_MODE_REFRACTION"),e}function X5(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hs:e="ENVMAP_BLENDING_MULTIPLY";break;case go:e="ENVMAP_BLENDING_MIX";break;case vo:e="ENVMAP_BLENDING_ADD";break}return e}function q5(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y5(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=G5(t),l=k5(t),h=W5(t),f=X5(t),d=q5(t),p=I5(t),g=N5(s),x=r.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(di).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(di).join(`
`),u.length>0&&(u+=`
`)):(m=[a1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),u=[a1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==dn?L5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,D5("linearToOutputTexel",t.outputColorSpace),U5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),a=Bs(a),a=i1(a,t),a=r1(a,t),o=Bs(o),o=i1(o,t),o=r1(o,t),a=s1(a),o=s1(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+m+a,y=b+u+o,C=e1(r,r.VERTEX_SHADER,T),w=e1(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(P){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(w)||"",Y=H.trim(),X=V.trim(),J=W.trim();let z=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,w);else{const ue=n1(r,C,"vertex"),ve=n1(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ue+`
`+ve)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||J==="")&&(re=!1);re&&(P.diagnostics={runnable:z,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:J,prefix:u}})}r.deleteShader(C),r.deleteShader(w),F=new sr(r,x),E=F5(r,x)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,w5)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R5++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let K5=0;class Z5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $5(e),t.set(e,n)),n}}class $5{constructor(e){this.id=K5++,this.code=e,this.usedTimes=0}}function j5(i,e,t,n,r,s,a){const o=new T1,c=new Z5,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,H,V){const W=H.fog,Y=V.geometry,X=E.isMeshStandardMaterial?H.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),z=J&&J.mapping===fr?J.image.height:null,re=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=ue!==void 0?ue.length:0;let De=0;Y.morphAttributes.position!==void 0&&(De=1),Y.morphAttributes.normal!==void 0&&(De=2),Y.morphAttributes.color!==void 0&&(De=3);let ke,We,Ve,q;if(re){const Ke=Vt[re];ke=Ke.vertexShader,We=Ke.fragmentShader}else ke=E.vertexShader,We=E.fragmentShader,c.update(E),Ve=c.getVertexShaderID(E),q=c.getFragmentShaderID(E);const Z=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),we=V.isInstancedMesh===!0,xe=V.isBatchedMesh===!0,Be=!!E.map,ct=!!E.matcap,A=!!J,je=!!E.aoMap,Re=!!E.lightMap,Ae=!!E.bumpMap,pe=!!E.normalMap,Je=!!E.displacementMap,me=!!E.emissiveMap,Ue=!!E.metalnessMap,ot=!!E.roughnessMap,j=E.anisotropy>0,M=E.clearcoat>0,_=E.dispersion>0,I=E.iridescence>0,G=E.sheen>0,$=E.transmission>0,k=j&&!!E.anisotropyMap,ye=M&&!!E.clearcoatMap,ie=M&&!!E.clearcoatNormalMap,Me=M&&!!E.clearcoatRoughnessMap,Se=I&&!!E.iridescenceMap,te=I&&!!E.iridescenceThicknessMap,ce=G&&!!E.sheenColorMap,Pe=G&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,oe=!!E.specularColorMap,Ne=!!E.specularIntensityMap,R=$&&!!E.transmissionMap,ne=$&&!!E.thicknessMap,se=!!E.gradientMap,de=!!E.alphaMap,Q=E.alphaTest>0,K=!!E.alphaHash,ge=!!E.extensions;let Ie=dn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const et={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:We,defines:E.defines,customVertexShaderID:Ve,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:xe,batchingColor:xe&&V._colorsTexture!==null,instancing:we,instancingColor:we&&V.instanceColor!==null,instancingMorph:we&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ni,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:ct,envMap:A,envMapMode:A&&J.mapping,envMapCubeUVHeight:z,aoMap:je,lightMap:Re,bumpMap:Ae,normalMap:pe,displacementMap:d&&Je,emissiveMap:me,normalMapObjectSpace:pe&&E.normalMapType===Co,normalMapTangentSpace:pe&&E.normalMapType===M1,metalnessMap:Ue,roughnessMap:ot,anisotropy:j,anisotropyMap:k,clearcoat:M,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:_,iridescence:I,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:G,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:oe,specularIntensityMap:Ne,transmission:$,transmissionMap:R,thicknessMap:ne,gradientMap:se,opaque:E.transparent===!1&&E.blending===jn&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:K,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:je&&x(E.aoMap.channel),lightMapUv:Re&&x(E.lightMap.channel),bumpMapUv:Ae&&x(E.bumpMap.channel),normalMapUv:pe&&x(E.normalMap.channel),displacementMapUv:Je&&x(E.displacementMap.channel),emissiveMapUv:me&&x(E.emissiveMap.channel),metalnessMapUv:Ue&&x(E.metalnessMap.channel),roughnessMapUv:ot&&x(E.roughnessMap.channel),anisotropyMapUv:k&&x(E.anisotropyMap.channel),clearcoatMapUv:ye&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(E.sheenRoughnessMap.channel),specularMapUv:Ee&&x(E.specularMap.channel),specularColorMapUv:oe&&x(E.specularColorMap.channel),specularIntensityMapUv:Ne&&x(E.specularIntensityMap.channel),transmissionMapUv:R&&x(E.transmissionMap.channel),thicknessMapUv:ne&&x(E.thicknessMap.channel),alphaMapUv:de&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(pe||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Be||de),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:me&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(S,E),T(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const S=g[E.type];let P;if(S){const H=Vt[S];P=x0.clone(H.uniforms)}else P=E.uniforms;return P}function C(E,S){let P;for(let H=0,V=h.length;H<V;H++){const W=h[H];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Y5(i,S,E,s),h.push(P)),P}function w(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function D(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:D,programs:h,dispose:F}}function J5(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Q5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function o1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function l1(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,p,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function o(f,d,p,g,x,m){const u=a(f,d,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(f,d,p,g,x,m){const u=a(f,d,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||Q5),n.length>1&&n.sort(d||o1),r.length>1&&r.sort(d||o1)}function h(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function e3(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new l1,i.set(n,[a])):r>=s.length?(a=new l1,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function n3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let i3=0;function r3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s3(i){const e=new t3,t=n3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new rt,a=new rt;function o(l){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,T=0,y=0,C=0,w=0,D=0;l.sort(r3);for(let E=0,S=l.length;E<S;E++){const P=l[E],H=P.color,V=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*V,f+=H.g*V,d+=H.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],V);D++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=J.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Y,y++}x++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(H).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const J=P.shadow,z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[u]=X,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==y||F.numSpotMaps!==C||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=D,F.directionalLength=p,F.pointLength=g,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=y,F.numSpotMaps=C,F.numLightProbes=D,n.version=i3++)}function c(l,h){let f=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const T=l[u];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function c1(i){const e=new s3(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function a3(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new c1(i),e.set(r,[o])):s>=a.length?(o=new c1(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const o3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c3(i,e,t){let n=new $s;const r=new Ye,s=new Ye,a=new at,o=new U0({depthPacking:Ro}),c=new I0,l={},h=t.maxTextureSize,f={[pn]:yt,[yt]:pn,[en]:en},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:o3,fragmentShader:l3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u1;let u=this.type;this.render=function(w,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(fn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=u!==Qt&&this.type===Qt,W=u===Qt&&this.type!==Qt;for(let Y=0,X=w.length;Y<X;Y++){const J=w[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const re=z.getFrameExtents();if(r.multiply(re),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,z.mapSize.y=s.y)),z.map===null||V===!0||W===!0){const ve=this.type!==Qt?{minFilter:zt,magFilter:zt}:{};z.map!==null&&z.map.dispose(),z.map=new Pn(r.x,r.y,ve),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let ve=0;ve<ue;ve++){const De=z.getViewport(ve);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),H.viewport(a),z.updateMatrices(J,ve),n=z.getFrustum(),y(D,F,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Qt&&b(z,F),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,P)};function b(w,D){const F=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(D,null,F,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(D,null,F,p,x,null)}function T(w,D,F,E){let S=null;const P=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=S.uuid,V=D.uuid;let W=l[H];W===void 0&&(W={},l[H]=W);let Y=W[V];Y===void 0&&(Y=S.clone(),W[V]=Y,D.addEventListener("dispose",C)),S=Y}if(S.visible=D.visible,S.wireframe=D.wireframe,E===Qt?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=F}return S}function y(w,D,F,E,S){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Qt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const V=e.update(w),W=w.material;if(Array.isArray(W)){const Y=V.groups;for(let X=0,J=Y.length;X<J;X++){const z=Y[X],re=W[z.materialIndex];if(re&&re.visible){const ue=T(w,re,E,S);w.onBeforeShadow(i,w,D,F,V,ue,z),i.renderBufferDirect(F,null,V,ue,w,z),w.onAfterShadow(i,w,D,F,V,ue,z)}}}else if(W.visible){const Y=T(w,W,E,S);w.onBeforeShadow(i,w,D,F,V,Y,null),i.renderBufferDirect(F,null,V,Y,w,null),w.onAfterShadow(i,w,D,F,V,Y,null)}}const H=w.children;for(let V=0,W=H.length;V<W;V++)y(H[V],D,F,E,S)}function C(w){w.target.removeEventListener("dispose",C);for(const F in l){const E=l[F],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const u3={[jr]:Jr,[Qr]:ns,[es]:is,[Qn]:ts,[Jr]:jr,[ns]:Qr,[is]:es,[ts]:Qn};function h3(i,e){function t(){let R=!1;const ne=new at;let se=null;const de=new at(0,0,0,0);return{setMask:function(Q){se!==Q&&!R&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){R=Q},setClear:function(Q,K,ge,Ie,et){et===!0&&(Q*=Ie,K*=Ie,ge*=Ie),ne.set(Q,K,ge,Ie),de.equals(ne)===!1&&(i.clearColor(Q,K,ge,Ie),de.copy(ne))},reset:function(){R=!1,se=null,de.set(-1,0,0,0)}}}function n(){let R=!1,ne=!1,se=null,de=null,Q=null;return{setReversed:function(K){if(ne!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return ne},setTest:function(K){K?Z(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(K){se!==K&&!R&&(i.depthMask(K),se=K)},setFunc:function(K){if(ne&&(K=u3[K]),de!==K){switch(K){case jr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case Qn:i.depthFunc(i.LEQUAL);break;case es:i.depthFunc(i.EQUAL);break;case ts:i.depthFunc(i.GEQUAL);break;case ns:i.depthFunc(i.GREATER);break;case is:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=K}},setLocked:function(K){R=K},setClear:function(K){Q!==K&&(ne&&(K=1-K),i.clearDepth(K),Q=K)},reset:function(){R=!1,se=null,de=null,Q=null,ne=!1}}}function r(){let R=!1,ne=null,se=null,de=null,Q=null,K=null,ge=null,Ie=null,et=null;return{setTest:function(Ke){R||(Ke?Z(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!R&&(i.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,Yt,Ht){(se!==Ke||de!==Yt||Q!==Ht)&&(i.stencilFunc(Ke,Yt,Ht),se=Ke,de=Yt,Q=Ht)},setOp:function(Ke,Yt,Ht){(K!==Ke||ge!==Yt||Ie!==Ht)&&(i.stencilOp(Ke,Yt,Ht),K=Ke,ge=Yt,Ie=Ht)},setLocked:function(Ke){R=Ke},setClear:function(Ke){et!==Ke&&(i.clearStencil(Ke),et=Ke)},reset:function(){R=!1,ne=null,se=null,de=null,Q=null,K=null,ge=null,Ie=null,et=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,T=null,y=null,C=null,w=null,D=new Ge(0,0,0),F=0,E=!1,S=null,P=null,H=null,V=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=J>=2);let re=null,ue={};const ve=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),ke=new at().fromArray(ve),We=new at().fromArray(De);function Ve(R,ne,se,de){const Q=new Uint8Array(4),K=i.createTexture();i.bindTexture(R,K),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<se;ge++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return K}const q={};q[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Qn),Ae(!1),pe(sa),Z(i.CULL_FACE),je(fn);function Z(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function he(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function we(R,ne){return f[R]!==ne?(i.bindFramebuffer(R,ne),f[R]=ne,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ne),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function xe(R,ne){let se=p,de=!1;if(R){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));const Q=R.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ge=Q.length;K<ge;K++)se[K]=i.COLOR_ATTACHMENT0+K;se.length=Q.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function Be(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const ct={[An]:i.FUNC_ADD,[Q1]:i.FUNC_SUBTRACT,[eo]:i.FUNC_REVERSE_SUBTRACT};ct[to]=i.MIN,ct[no]=i.MAX;const A={[io]:i.ZERO,[ro]:i.ONE,[so]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[ho]:i.SRC_ALPHA_SATURATE,[co]:i.DST_COLOR,[oo]:i.DST_ALPHA,[ao]:i.ONE_MINUS_SRC_COLOR,[$r]:i.ONE_MINUS_SRC_ALPHA,[uo]:i.ONE_MINUS_DST_COLOR,[lo]:i.ONE_MINUS_DST_ALPHA,[fo]:i.CONSTANT_COLOR,[po]:i.ONE_MINUS_CONSTANT_COLOR,[mo]:i.CONSTANT_ALPHA,[_o]:i.ONE_MINUS_CONSTANT_ALPHA};function je(R,ne,se,de,Q,K,ge,Ie,et,Ke){if(R===fn){x===!0&&(he(i.BLEND),x=!1);return}if(x===!1&&(Z(i.BLEND),x=!0),R!==J1){if(R!==m||Ke!==E){if((u!==An||y!==An)&&(i.blendEquation(i.FUNC_ADD),u=An,y=An),Ke)switch(R){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case aa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,T=null,C=null,w=null,D.set(0,0,0),F=0,m=R,E=Ke}return}Q=Q||ne,K=K||se,ge=ge||de,(ne!==u||Q!==y)&&(i.blendEquationSeparate(ct[ne],ct[Q]),u=ne,y=Q),(se!==b||de!==T||K!==C||ge!==w)&&(i.blendFuncSeparate(A[se],A[de],A[K],A[ge]),b=se,T=de,C=K,w=ge),(Ie.equals(D)===!1||et!==F)&&(i.blendColor(Ie.r,Ie.g,Ie.b,et),D.copy(Ie),F=et),m=R,E=!1}function Re(R,ne){R.side===en?he(i.CULL_FACE):Z(i.CULL_FACE);let se=R.side===yt;ne&&(se=!se),Ae(se),R.blending===jn&&R.transparent===!1?je(fn):je(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const de=R.stencilWrite;o.setTest(de),de&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(R){S!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),S=R)}function pe(R){R!==Z1?(Z(i.CULL_FACE),R!==P&&(R===sa?i.cullFace(i.BACK):R===$1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),P=R}function Je(R){R!==H&&(X&&i.lineWidth(R),H=R)}function me(R,ne,se){R?(Z(i.POLYGON_OFFSET_FILL),(V!==ne||W!==se)&&(i.polygonOffset(ne,se),V=ne,W=se)):he(i.POLYGON_OFFSET_FILL)}function Ue(R){R?Z(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function ot(R){R===void 0&&(R=i.TEXTURE0+Y-1),re!==R&&(i.activeTexture(R),re=R)}function j(R,ne,se){se===void 0&&(re===null?se=i.TEXTURE0+Y-1:se=re);let de=ue[se];de===void 0&&(de={type:void 0,texture:void 0},ue[se]=de),(de.type!==R||de.texture!==ne)&&(re!==se&&(i.activeTexture(se),re=se),i.bindTexture(R,ne||q[R]),de.type=R,de.texture=ne)}function M(){const R=ue[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{i.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(R){ke.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ke.copy(R))}function Pe(R){We.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),We.copy(R))}function Ee(R,ne){let se=l.get(ne);se===void 0&&(se=new WeakMap,l.set(ne,se));let de=se.get(R);de===void 0&&(de=i.getUniformBlockIndex(ne,R.name),se.set(R,de))}function oe(R,ne){const de=l.get(ne).get(R);c.get(ne)!==de&&(i.uniformBlockBinding(ne,de,R.__bindingPointIndex),c.set(ne,de))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ue={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,T=null,y=null,C=null,w=null,D=new Ge(0,0,0),F=0,E=!1,S=null,P=null,H=null,V=null,W=null,ke.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:he,bindFramebuffer:we,drawBuffers:xe,useProgram:Be,setBlending:je,setMaterial:Re,setFlipSided:Ae,setCullFace:pe,setLineWidth:Je,setPolygonOffset:me,setScissorTest:Ue,activeTexture:ot,bindTexture:j,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Se,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Me,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:ye,scissor:ce,viewport:Pe,reset:Ne}}function f3(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):lr("canvas")}function x(M,_,I){let G=1;const $=j(M);if(($.width>I||$.height>I)&&(G=I/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const k=Math.floor(G*$.width),ye=Math.floor(G*$.height);f===void 0&&(f=g(k,ye));const ie=_?g(k,ye):f;return ie.width=k,ie.height=ye,ie.getContext("2d").drawImage(M,0,0,k,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+ye+")."),ie}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function m(M){return M.generateMipmaps}function u(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(M,_,I,G,$=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=_;if(_===i.RED&&(I===i.FLOAT&&(k=i.R32F),I===i.HALF_FLOAT&&(k=i.R16F),I===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.R8UI),I===i.UNSIGNED_SHORT&&(k=i.R16UI),I===i.UNSIGNED_INT&&(k=i.R32UI),I===i.BYTE&&(k=i.R8I),I===i.SHORT&&(k=i.R16I),I===i.INT&&(k=i.R32I)),_===i.RG&&(I===i.FLOAT&&(k=i.RG32F),I===i.HALF_FLOAT&&(k=i.RG16F),I===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RG8UI),I===i.UNSIGNED_SHORT&&(k=i.RG16UI),I===i.UNSIGNED_INT&&(k=i.RG32UI),I===i.BYTE&&(k=i.RG8I),I===i.SHORT&&(k=i.RG16I),I===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGB8UI),I===i.UNSIGNED_SHORT&&(k=i.RGB16UI),I===i.UNSIGNED_INT&&(k=i.RGB32UI),I===i.BYTE&&(k=i.RGB8I),I===i.SHORT&&(k=i.RGB16I),I===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),I===i.UNSIGNED_INT&&(k=i.RGBA32UI),I===i.BYTE&&(k=i.RGBA8I),I===i.SHORT&&(k=i.RGBA16I),I===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){const ye=$?ar:qe.getTransfer(G);I===i.FLOAT&&(k=i.RGBA32F),I===i.HALF_FLOAT&&(k=i.RGBA16F),I===i.UNSIGNED_BYTE&&(k=ye===$e?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(M,_){let I;return M?_===null||_===Cn||_===vi?I=i.DEPTH24_STENCIL8:_===tn?I=i.DEPTH32F_STENCIL8:_===gi&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===vi?I=i.DEPTH_COMPONENT24:_===tn?I=i.DEPTH_COMPONENT32F:_===gi&&(I=i.DEPTH_COMPONENT16),I}function C(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==zt&&M.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function w(M){const _=M.target;_.removeEventListener("dispose",w),F(_),_.isVideoTexture&&h.delete(_)}function D(M){const _=M.target;_.removeEventListener("dispose",D),S(_)}function F(M){const _=n.get(M);if(_.__webglInit===void 0)return;const I=M.source,G=d.get(I);if(G){const $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(M),Object.keys(G).length===0&&d.delete(I)}n.remove(M)}function E(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const I=M.source,G=d.get(I);delete G[_.__cacheKey],a.memory.textures--}function S(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[G][$]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=M.textures;for(let G=0,$=I.length;G<$;G++){const k=n.get(I[G]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(I[G])}n.remove(M)}let P=0;function H(){P=0}function V(){const M=P;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),P+=1,M}function W(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Y(M,_){const I=n.get(M);if(M.isVideoTexture&&Ue(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,M,_);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function X(M,_){const I=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){q(I,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function J(M,_){const I=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){q(I,M,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function z(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Z(I,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const re={[as]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[os]:i.MIRRORED_REPEAT},ue={[zt]:i.NEAREST,[bo]:i.NEAREST_MIPMAP_NEAREST,[Pi]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[gr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},ve={[Po]:i.NEVER,[Fo]:i.ALWAYS,[Do]:i.LESS,[S1]:i.LEQUAL,[Lo]:i.EQUAL,[No]:i.GEQUAL,[Uo]:i.GREATER,[Io]:i.NOTEQUAL};function De(M,_){if(_.type===tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===gr||_.magFilter===Pi||_.magFilter===Rn||_.minFilter===Gt||_.minFilter===gr||_.minFilter===Pi||_.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,re[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==Pi&&_.minFilter!==Rn||_.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ke(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",w));const G=_.source;let $=d.get(G);$===void 0&&($={},d.set(G,$));const k=W(_);if(k!==M.__cacheKey){$[k]===void 0&&($[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[k].usedTimes++;const ye=$[M.__cacheKey];ye!==void 0&&($[M.__cacheKey].usedTimes--,ye.usedTimes===0&&E(_)),M.__cacheKey=k,M.__webglTexture=$[k].texture}return I}function We(M,_,I){return Math.floor(Math.floor(M/I)/_)}function Ve(M,_,I,G){const k=M.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,G,_.data);else{k.sort((te,ce)=>te.start-ce.start);let ye=0;for(let te=1;te<k.length;te++){const ce=k[ye],Pe=k[te],Ee=ce.start+ce.count,oe=We(Pe.start,_.width,4),Ne=We(ce.start,_.width,4);Pe.start<=Ee+1&&oe===Ne&&We(Pe.start+Pe.count-1,_.width,4)===oe?ce.count=Math.max(ce.count,Pe.start+Pe.count-ce.start):(++ye,k[ye]=Pe)}k.length=ye+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,ce=k.length;te<ce;te++){const Pe=k[te],Ee=Math.floor(Pe.start/4),oe=Math.ceil(Pe.count/4),Ne=Ee%_.width,R=Math.floor(Ee/_.width),ne=oe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ne,R,ne,se,I,G,_.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function q(M,_,I){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const $=ke(M,_),k=_.source;t.bindTexture(G,M.__webglTexture,i.TEXTURE0+I);const ye=n.get(k);if(k.version!==ye.__version||$===!0){t.activeTexture(i.TEXTURE0+I);const ie=qe.getPrimaries(qe.workingColorSpace),Me=_.colorSpace===hn?null:qe.getPrimaries(_.colorSpace),Se=_.colorSpace===hn||ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=x(_.image,!1,r.maxTextureSize);te=ot(_,te);const ce=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ee=T(_.internalFormat,ce,Pe,_.colorSpace,_.isVideoTexture);De(G,_);let oe;const Ne=_.mipmaps,R=_.isVideoTexture!==!0,ne=ye.__version===void 0||$===!0,se=k.dataReady,de=C(_,te);if(_.isDepthTexture)Ee=y(_.format===Mi,_.type),ne&&(R?t.texStorage2D(i.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ce,Pe,null));else if(_.isDataTexture)if(Ne.length>0){R&&ne&&t.texStorage2D(i.TEXTURE_2D,de,Ee,Ne[0].width,Ne[0].height);for(let Q=0,K=Ne.length;Q<K;Q++)oe=Ne[Q],R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Pe,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,oe.width,oe.height,0,ce,Pe,oe.data);_.generateMipmaps=!1}else R?(ne&&t.texStorage2D(i.TEXTURE_2D,de,Ee,te.width,te.height),se&&Ve(_,te,ce,Pe)):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ce,Pe,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){R&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ee,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,K=Ne.length;Q<K;Q++)if(oe=Ne[Q],_.format!==Bt)if(ce!==null)if(R){if(se)if(_.layerUpdates.size>0){const ge=za(oe.width,oe.height,_.format,_.type);for(const Ie of _.layerUpdates){const et=oe.data.subarray(Ie*ge/oe.data.BYTES_PER_ELEMENT,(Ie+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ie,oe.width,oe.height,1,ce,et)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,Pe,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,oe.width,oe.height,te.depth,0,ce,Pe,oe.data)}else{R&&ne&&t.texStorage2D(i.TEXTURE_2D,de,Ee,Ne[0].width,Ne[0].height);for(let Q=0,K=Ne.length;Q<K;Q++)oe=Ne[Q],_.format!==Bt?ce!==null?R?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Pe,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,oe.width,oe.height,0,ce,Pe,oe.data)}else if(_.isDataArrayTexture)if(R){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ee,te.width,te.height,te.depth),se)if(_.layerUpdates.size>0){const Q=za(te.width,te.height,_.format,_.type);for(const K of _.layerUpdates){const ge=te.data.subarray(K*Q/te.data.BYTES_PER_ELEMENT,(K+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ce,Pe,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,ce,Pe,te.data);else if(_.isData3DTexture)R?(ne&&t.texStorage3D(i.TEXTURE_3D,de,Ee,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,ce,Pe,te.data);else if(_.isFramebufferTexture){if(ne)if(R)t.texStorage2D(i.TEXTURE_2D,de,Ee,te.width,te.height);else{let Q=te.width,K=te.height;for(let ge=0;ge<de;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ee,Q,K,0,ce,Pe,null),Q>>=1,K>>=1}}else if(Ne.length>0){if(R&&ne){const Q=j(Ne[0]);t.texStorage2D(i.TEXTURE_2D,de,Ee,Q.width,Q.height)}for(let Q=0,K=Ne.length;Q<K;Q++)oe=Ne[Q],R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce,Pe,oe):t.texImage2D(i.TEXTURE_2D,Q,Ee,ce,Pe,oe);_.generateMipmaps=!1}else if(R){if(ne){const Q=j(te);t.texStorage2D(i.TEXTURE_2D,de,Ee,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ce,Pe,te);m(_)&&u(G),ye.__version=k.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Z(M,_,I){if(_.image.length!==6)return;const G=ke(M,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+I);const k=n.get($);if($.version!==k.__version||G===!0){t.activeTexture(i.TEXTURE0+I);const ye=qe.getPrimaries(qe.workingColorSpace),ie=_.colorSpace===hn?null:qe.getPrimaries(_.colorSpace),Me=_.colorSpace===hn||ye===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Se&&!te?ce[K]=x(_.image[K],!0,r.maxCubemapSize):ce[K]=te?_.image[K].image:_.image[K],ce[K]=ot(_,ce[K]);const Pe=ce[0],Ee=s.convert(_.format,_.colorSpace),oe=s.convert(_.type),Ne=T(_.internalFormat,Ee,oe,_.colorSpace),R=_.isVideoTexture!==!0,ne=k.__version===void 0||G===!0,se=$.dataReady;let de=C(_,Pe);De(i.TEXTURE_CUBE_MAP,_);let Q;if(Se){R&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ne,Pe.width,Pe.height);for(let K=0;K<6;K++){Q=ce[K].mipmaps;for(let ge=0;ge<Q.length;ge++){const Ie=Q[ge];_.format!==Bt?Ee!==null?R?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ie.width,Ie.height,Ee,oe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ne,Ie.width,Ie.height,0,Ee,oe,Ie.data)}}}else{if(Q=_.mipmaps,R&&ne){Q.length>0&&de++;const K=j(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(te){R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Ee,oe,ce[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,ce[K].width,ce[K].height,0,Ee,oe,ce[K].data);for(let ge=0;ge<Q.length;ge++){const et=Q[ge].image[K].image;R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,et.width,et.height,Ee,oe,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ne,et.width,et.height,0,Ee,oe,et.data)}}else{R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,oe,ce[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Ee,oe,ce[K]);for(let ge=0;ge<Q.length;ge++){const Ie=Q[ge];R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ee,oe,Ie.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ne,Ee,oe,Ie.image[K])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),k.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function he(M,_,I,G,$,k){const ye=s.convert(I.format,I.colorSpace),ie=s.convert(I.type),Me=T(I.internalFormat,ye,ie,I.colorSpace),Se=n.get(_),te=n.get(I);if(te.__renderTarget=_,!Se.__hasExternalTextures){const ce=Math.max(1,_.width>>k),Pe=Math.max(1,_.height>>k);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,k,Me,ce,Pe,_.depth,0,ye,ie,null):t.texImage2D($,k,Me,ce,Pe,0,ye,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,te.__webglTexture,0,Je(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,te.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(M,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,k=y(_.stencilBuffer,$),ye=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=Je(_);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,k,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,M)}else{const G=_.textures;for(let $=0;$<G.length;$++){const k=G[$],ye=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),Me=T(k.internalFormat,ye,ie,k.colorSpace),Se=Je(_);I&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,_.width,_.height):me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const $=G.__webglTexture,k=Je(_);if(_.depthTexture.format===xi)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Mi)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(M){const _=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const G=M.texture.mipmaps;G&&G.length>0?xe(_.__webglFramebuffer[0],M):xe(_.__webglFramebuffer,M)}else if(I){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),we(_.__webglDepthbuffer[G],M,!1);else{const $=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}else{const G=M.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),we(_.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(M,_,I){const G=n.get(M);_!==void 0&&he(G.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Be(M)}function A(M){const _=M.texture,I=n.get(M),G=n.get(_);M.addEventListener("dispose",D);const $=M.textures,k=M.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),k){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let Me=0;Me<_.mipmaps.length;Me++)I.__webglFramebuffer[ie][Me]=i.createFramebuffer()}else I.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)I.__webglFramebuffer[ie]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ye)for(let ie=0,Me=$.length;ie<Me;ie++){const Se=n.get($[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&me(M)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const Me=$[ie];I.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const Se=s.convert(Me.format,Me.colorSpace),te=s.convert(Me.type),ce=T(Me.internalFormat,Se,te,Me.colorSpace,M.isXRRenderTarget===!0),Pe=Je(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),we(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),De(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)he(I.__webglFramebuffer[ie][Me],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me);else he(I.__webglFramebuffer[ie],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,Me=$.length;ie<Me;ie++){const Se=$[ie],te=n.get(Se);let ce=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),De(ce,Se),he(I.__webglFramebuffer,M,Se,i.COLOR_ATTACHMENT0+ie,ce,0),m(Se)&&u(ce)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ie=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),De(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)he(I.__webglFramebuffer[Me],M,_,i.COLOR_ATTACHMENT0,ie,Me);else he(I.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,ie,0);m(_)&&u(ie),t.unbindTexture()}M.depthBuffer&&Be(M)}function je(M){const _=M.textures;for(let I=0,G=_.length;I<G;I++){const $=_[I];if(m($)){const k=b(M),ye=n.get($).__webglTexture;t.bindTexture(k,ye),u(k),t.unbindTexture()}}}const Re=[],Ae=[];function pe(M){if(M.samples>0){if(me(M)===!1){const _=M.textures,I=M.width,G=M.height;let $=i.COLOR_BUFFER_BIT;const k=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(M),ie=_.length>1;if(ie)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Me=M.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,I,G,0,0,I,G,$,i.NEAREST),c===!0&&(Re.length=0,Ae.length=0,Re.push(i.COLOR_ATTACHMENT0+Se),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Re.push(k),Ae.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Je(M){return Math.min(r.maxSamples,M.samples)}function me(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ue(M){const _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function ot(M,_){const I=M.colorSpace,G=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==ni&&I!==hn&&(qe.getTransfer(I)===$e?(G!==Bt||$!==Xt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}function j(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=A,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=me}function d3(i,e){function t(n,r=hn){let s;const a=qe.getTransfer(r);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Gs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ks)return i.UNSIGNED_SHORT_5_5_5_1;if(n===p1)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===m1)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===f1)return i.BYTE;if(n===d1)return i.SHORT;if(n===gi)return i.UNSIGNED_SHORT;if(n===Vs)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===_1)return i.ALPHA;if(n===g1)return i.RGB;if(n===Bt)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===v1)return i.RED;if(n===Ws)return i.RED_INTEGER;if(n===x1)return i.RG;if(n===Xs)return i.RG_INTEGER;if(n===qs)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===rr)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ls||n===cs||n===us||n===hs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ls)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===us)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fs||n===ds||n===ps)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fs||n===ds)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ps)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ms||n===_s||n===gs||n===vs||n===xs||n===Ms||n===Ss||n===Es||n===ys||n===Ts||n===As||n===bs||n===ws||n===Rs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ms)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_s)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ms)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ss)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Es)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ys)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ts)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===As)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ws)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===Ps||n===Ds)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cs)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ps)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ds)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ls||n===Us||n===Is||n===Ns)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ls)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Us)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Is)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ns)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const p3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new U1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:p3,fragmentShader:m3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g3 extends ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new _3,u={},b=t.getContextAttributes();let T=null,y=null;const C=[],w=[],D=new Ye;let F=null;const E=new Ut;E.viewport=new at;const S=new Ut;S.viewport=new at;const P=[E,S],H=new B0;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=C[q];return Z===void 0&&(Z=new Br,C[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=C[q];return Z===void 0&&(Z=new Br,C[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=C[q];return Z===void 0&&(Z=new Br,C[q]=Z),Z.getHandSpace()};function Y(q){const Z=w.indexOf(q.inputSource);if(Z===-1)return;const he=C[Z];he!==void 0&&(he.update(q.inputSource,q.frame,l||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let q=0;q<C.length;q++){const Z=w[q];Z!==null&&(w[q]=null,C[q].disconnect(Z))}V=null,W=null,m.reset();for(const q in u)delete u[q];e.setRenderTarget(T),p=null,d=null,f=null,r=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,we=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?Mi:xi,we=b.stencil?vi:Cn);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Pn(d.textureWidth,d.textureHeight,{format:Bt,type:Xt,depthTexture:new L1(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pn(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(q){for(let Z=0;Z<q.removed.length;Z++){const he=q.removed[Z],we=w.indexOf(he);we>=0&&(w[we]=null,C[we].disconnect(he))}for(let Z=0;Z<q.added.length;Z++){const he=q.added[Z];let we=w.indexOf(he);if(we===-1){for(let Be=0;Be<C.length;Be++)if(Be>=w.length){w.push(he),we=Be;break}else if(w[Be]===null){w[Be]=he,we=Be;break}if(we===-1)break}const xe=C[we];xe&&xe.connect(he)}}const z=new N,re=new N;function ue(q,Z,he){z.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const we=z.distanceTo(re),xe=Z.projectionMatrix.elements,Be=he.projectionMatrix.elements,ct=xe[14]/(xe[10]-1),A=xe[14]/(xe[10]+1),je=(xe[9]+1)/xe[5],Re=(xe[9]-1)/xe[5],Ae=(xe[8]-1)/xe[0],pe=(Be[8]+1)/Be[0],Je=ct*Ae,me=ct*pe,Ue=we/(-Ae+pe),ot=Ue*-Ae;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const j=ct+Ue,M=A+Ue,_=Je-ot,I=me+(we-ot),G=je*A/M*j,$=Re*A/M*j;q.projectionMatrix.makePerspective(_,I,G,$,j,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ve(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,he=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),H.near=S.near=E.near=Z,H.far=S.far=E.far=he,(V!==H.near||W!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,W=H.far),H.layers.mask=q.layers.mask|6,E.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;const we=q.parent,xe=H.cameras;ve(H,we);for(let Be=0;Be<xe.length;Be++)ve(xe[Be],we);xe.length===2?ue(H,E,S):H.projectionMatrix.copy(E.projectionMatrix),De(q,H,we)};function De(q,Z,he){he===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Si*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return u[q]};let ke=null;function We(q,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let we=!1;he.length!==H.cameras.length&&(H.cameras.length=0,we=!0);for(let A=0;A<he.length;A++){const je=he[A];let Re=null;if(p!==null)Re=p.getViewport(je);else{const pe=f.getViewSubImage(d,je);Re=pe.viewport,A===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let Ae=P[A];Ae===void 0&&(Ae=new Ut,Ae.layers.enable(A),Ae.viewport=new at,P[A]=Ae),Ae.matrix.fromArray(je.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(je.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Re.x,Re.y,Re.width,Re.height),A===0&&(H.matrix.copy(Ae.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),we===!0&&H.cameras.push(Ae)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const A=f.getDepthInformation(he[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<he.length;A++){const je=he[A].camera;if(je){let Re=u[je];Re||(Re=new U1,u[je]=Re);const Ae=f.getCameraImage(je);Re.sourceTexture=Ae}}}}for(let he=0;he<C.length;he++){const we=w[he],xe=C[he];we!==null&&xe!==void 0&&xe.update(we,Z,l||a)}ke&&ke(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ve=new F1;Ve.setAnimationLoop(We),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}}const En=new qt,v3=new rt;function x3(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,R1(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,b,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,b,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,y=b.envMapRotation;T&&(m.envMap.value=T,En.copy(y),En.x*=-1,En.y*=-1,En.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),m.envMapRotation.value.setFromMatrix4(v3.makeRotationFromEuler(En)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M3(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function l(b,T){let y=r[b.id];y===void 0&&(g(b),y=h(b),r[b.id]=y,b.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(b,C);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function h(b){const T=f();b.__bindingPointIndex=T;const y=i.createBuffer(),C=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],y=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,D=y.length;w<D;w++){const F=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=F.length;E<S;E++){const P=F[E];if(p(P,w,E,C)===!0){const H=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<V.length;Y++){const X=V[Y],J=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,y,C){const w=b.value,D=T+"_"+y;if(C[D]===void 0)return typeof w=="number"||typeof w=="boolean"?C[D]=w:C[D]=w.clone(),!0;{const F=C[D];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return C[D]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function g(b){const T=b.uniforms;let y=0;const C=16;for(let D=0,F=T.length;D<F;D++){const E=Array.isArray(T[D])?T[D]:[T[D]];for(let S=0,P=E.length;S<P;S++){const H=E[S],V=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Y=V.length;W<Y;W++){const X=V[W],J=x(X),z=y%C,re=z%J.boundary,ue=z+re;y+=re,ue!==0&&C-ue<J.storage&&(y+=C-ue),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=J.storage}}}const w=y%C;return w>0&&(y+=C-w),b.__size=y,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class S3{constructor(e={}){const{canvas:t=Qo(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Et;let w=0,D=0,F=null,E=-1,S=null;const P=new at,H=new at;let V=null;const W=new Ge(0);let Y=0,X=t.width,J=t.height,z=1,re=null,ue=null;const ve=new at(0,0,X,J),De=new at(0,0,X,J);let ke=!1;const We=new $s;let Ve=!1,q=!1;const Z=new rt,he=new N,we=new at,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ct(){return F===null?z:1}let A=n;function je(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zs}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),A===null){const L="webgl2";if(A=je(L,v),A===null)throw je(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Re,Ae,pe,Je,me,Ue,ot,j,M,_,I,G,$,k,ye,ie,Me,Se,te,ce,Pe,Ee,oe,Ne;function R(){Re=new D2(A),Re.init(),Ee=new d3(A,Re),Ae=new T2(A,Re,e,Ee),pe=new h3(A,Re),Ae.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Je=new I2(A),me=new J5,Ue=new f3(A,Re,pe,me,Ae,Ee,Je),ot=new b2(y),j=new P2(y),M=new H0(A),oe=new E2(A,M),_=new L2(A,M,Je,oe),I=new F2(A,_,M,Je),te=new N2(A,Ae,Ue),ie=new A2(me),G=new j5(y,ot,j,Re,Ae,oe,ie),$=new x3(y,me),k=new e3,ye=new a3(Re),Se=new S2(y,ot,j,pe,I,p,c),Me=new c3(y,I,Ae),Ne=new M3(A,Je,Ae,pe),ce=new y2(A,Re,Je),Pe=new U2(A,Re,Je),Je.programs=G.programs,y.capabilities=Ae,y.extensions=Re,y.properties=me,y.renderLists=k,y.shadowMap=Me,y.state=pe,y.info=Je}R();const ne=new g3(y,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(X,J,!1))},this.getSize=function(v){return v.set(X,J)},this.setSize=function(v,L,O=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,J=L,t.width=Math.floor(v*z),t.height=Math.floor(L*z),O===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(X*z,J*z).floor()},this.setDrawingBufferSize=function(v,L,O){X=v,J=L,z=O,t.width=Math.floor(v*O),t.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,L,O,B){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,L,O,B),pe.viewport(P.copy(ve).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,L,O,B){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,L,O,B),pe.scissor(H.copy(De).multiplyScalar(z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(v){pe.setScissorTest(ke=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,O=!0){let B=0;if(v){let U=!1;if(F!==null){const ee=F.texture.format;U=ee===qs||ee===Xs||ee===Ws}if(U){const ee=F.texture.type,le=ee===Xt||ee===Cn||ee===gi||ee===vi||ee===Gs||ee===ks,_e=Se.getClearColor(),fe=Se.getClearAlpha(),Ce=_e.r,Le=_e.g,Te=_e.b;le?(g[0]=Ce,g[1]=Le,g[2]=Te,g[3]=fe,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Ce,x[1]=Le,x[2]=Te,x[3]=fe,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}L&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),k.dispose(),ye.dispose(),me.dispose(),ot.dispose(),j.dispose(),I.dispose(),oe.dispose(),Ne.dispose(),G.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ht),ne.removeEventListener("sessionend",Qs),mn.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=Je.autoReset,L=Me.enabled,O=Me.autoUpdate,B=Me.needsUpdate,U=Me.type;R(),Je.autoReset=v,Me.enabled=L,Me.autoUpdate=O,Me.needsUpdate=B,Me.type=U}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){const L=v.target;L.removeEventListener("dispose",K),ge(L)}function ge(v){Ie(v),me.remove(v)}function Ie(v){const L=me.get(v).programs;L!==void 0&&(L.forEach(function(O){G.releaseProgram(O)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,B,U,ee){L===null&&(L=xe);const le=U.isMesh&&U.matrixWorld.determinant()<0,_e=V1(v,L,O,B,U);pe.setMaterial(B,le);let fe=O.index,Ce=1;if(B.wireframe===!0){if(fe=_.getWireframeAttribute(O),fe===void 0)return;Ce=2}const Le=O.drawRange,Te=O.attributes.position;let ze=Le.start*Ce,Ze=(Le.start+Le.count)*Ce;ee!==null&&(ze=Math.max(ze,ee.start*Ce),Ze=Math.min(Ze,(ee.start+ee.count)*Ce)),fe!==null?(ze=Math.max(ze,0),Ze=Math.min(Ze,fe.count)):Te!=null&&(ze=Math.max(ze,0),Ze=Math.min(Ze,Te.count));const st=Ze-ze;if(st<0||st===1/0)return;oe.setup(U,B,_e,O,fe);let tt,Qe=ce;if(fe!==null&&(tt=M.get(fe),Qe=Pe,Qe.setIndex(tt)),U.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*ct()),Qe.setMode(A.LINES)):Qe.setMode(A.TRIANGLES);else if(U.isLine){let be=B.linewidth;be===void 0&&(be=1),pe.setLineWidth(be*ct()),U.isLineSegments?Qe.setMode(A.LINES):U.isLineLoop?Qe.setMode(A.LINE_LOOP):Qe.setMode(A.LINE_STRIP)}else U.isPoints?Qe.setMode(A.POINTS):U.isSprite&&Qe.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,nt=U._multiDrawCounts,Xe=U._multiDrawCount,At=fe?M.get(fe).bytesPerElement:1,Ln=me.get(B).currentProgram.getUniforms();for(let bt=0;bt<Xe;bt++)Ln.setValue(A,"_gl_DrawID",bt),Qe.render(be[bt]/At,nt[bt])}else if(U.isInstancedMesh)Qe.renderInstances(ze,st,U.count);else if(O.isInstancedBufferGeometry){const be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,nt=Math.min(O.instanceCount,be);Qe.renderInstances(ze,st,nt)}else Qe.render(ze,st)};function et(v,L,O){v.transparent===!0&&v.side===en&&v.forceSinglePass===!1?(v.side=yt,v.needsUpdate=!0,Ci(v,L,O),v.side=pn,v.needsUpdate=!0,Ci(v,L,O),v.side=en):Ci(v,L,O)}this.compile=function(v,L,O=null){O===null&&(O=v),u=ye.get(O),u.init(L),T.push(u),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==O&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const B=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const _e=ee[le];et(_e,O,U),B.add(_e)}else et(ee,O,U),B.add(ee)}),u=T.pop(),B},this.compileAsync=function(v,L,O=null){const B=this.compile(v,L,O);return new Promise(U=>{function ee(){if(B.forEach(function(le){me.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){U(v);return}setTimeout(ee,10)}Re.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ke=null;function Yt(v){Ke&&Ke(v)}function Ht(){mn.stop()}function Qs(){mn.start()}const mn=new F1;mn.setAnimationLoop(Yt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(v){Ke=v,ne.setAnimationLoop(v),v===null?mn.stop():mn.start()},ne.addEventListener("sessionstart",Ht),ne.addEventListener("sessionend",Qs),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(L),L=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,L,F),u=ye.get(v,T.length),u.init(L),T.push(u),Z.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),We.setFromProjectionMatrix(Z,kt,L.reversedDepth),q=this.localClippingEnabled,Ve=ie.init(this.clippingPlanes,q),m=k.get(v,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&mr(ee,L,-1/0,y.sortObjects)}mr(v,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ue),Be=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Be&&Se.addToRenderList(m,v),this.info.render.frame++,Ve===!0&&ie.beginShadows();const O=u.state.shadowsArray;Me.render(O,v,L),Ve===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(u.setupLights(),L.isArrayCamera){const ee=L.cameras;if(U.length>0)for(let le=0,_e=ee.length;le<_e;le++){const fe=ee[le];ta(B,U,v,fe)}Be&&Se.render(v);for(let le=0,_e=ee.length;le<_e;le++){const fe=ee[le];ea(m,v,fe,fe.viewport)}}else U.length>0&&ta(B,U,v,L),Be&&Se.render(v),ea(m,v,L);F!==null&&D===0&&(Ue.updateMultisampleRenderTarget(F),Ue.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(y,v,L),oe.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(u=T[T.length-1],Ve===!0&&ie.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function mr(v,L,O,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||We.intersectsSprite(v)){B&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const le=I.update(v),_e=v.material;_e.visible&&m.push(v,le,_e,O,we.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||We.intersectsObject(v))){const le=I.update(v),_e=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),we.copy(le.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(_e)){const fe=le.groups;for(let Ce=0,Le=fe.length;Ce<Le;Ce++){const Te=fe[Ce],ze=_e[Te.materialIndex];ze&&ze.visible&&m.push(v,le,ze,O,we.z,Te)}}else _e.visible&&m.push(v,le,_e,O,we.z,null)}}const ee=v.children;for(let le=0,_e=ee.length;le<_e;le++)mr(ee[le],L,O,B)}function ea(v,L,O,B){const U=v.opaque,ee=v.transmissive,le=v.transparent;u.setupLightsView(O),Ve===!0&&ie.setGlobalState(y.clippingPlanes,O),B&&pe.viewport(P.copy(B)),U.length>0&&Ri(U,L,O),ee.length>0&&Ri(ee,L,O),le.length>0&&Ri(le,L,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ta(v,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Pn(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?yi:Xt,minFilter:Rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=u.state.transmissionRenderTarget[B.id],le=B.viewport||P;ee.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),fe=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ee),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Be&&Se.render(O);const Le=y.toneMapping;y.toneMapping=dn;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),Ve===!0&&ie.setGlobalState(y.clippingPlanes,B),Ri(v,O,B),Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee),Re.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ze=0,st=L.length;Ze<st;Ze++){const tt=L[Ze],Qe=tt.object,be=tt.geometry,nt=tt.material,Xe=tt.group;if(nt.side===en&&Qe.layers.test(B.layers)){const At=nt.side;nt.side=yt,nt.needsUpdate=!0,na(Qe,O,B,be,nt,Xe),nt.side=At,nt.needsUpdate=!0,ze=!0}}ze===!0&&(Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e,fe,Ce),y.setClearColor(W,Y),Te!==void 0&&(B.viewport=Te),y.toneMapping=Le}function Ri(v,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ee=v.length;U<ee;U++){const le=v[U],_e=le.object,fe=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&B!==null&&(Le=B),_e.layers.test(O.layers)&&na(_e,L,O,fe,Le,Ce)}}function na(v,L,O,B,U,ee){v.onBeforeRender(y,L,O,B,U,ee),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,L,O,B,v,ee),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=yt,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,v,ee),U.side=pn,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,v,ee),U.side=en):y.renderBufferDirect(O,L,B,U,v,ee),v.onAfterRender(y,L,O,B,U,ee)}function Ci(v,L,O){L.isScene!==!0&&(L=xe);const B=me.get(v),U=u.state.lights,ee=u.state.shadowsArray,le=U.state.version,_e=G.getParameters(v,U.state,ee,L,O),fe=G.getProgramCacheKey(_e);let Ce=B.programs;B.environment=v.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(v.isMeshStandardMaterial?j:ot).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",K),Ce=new Map,B.programs=Ce);let Le=Ce.get(fe);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===le)return ra(v,_e),Le}else _e.uniforms=G.getUniforms(v),v.onBeforeCompile(_e,y),Le=G.acquireProgram(_e,fe),Ce.set(fe,Le),B.uniforms=_e.uniforms;const Te=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=ie.uniform),ra(v,_e),B.needsLights=k1(v),B.lightsStateVersion=le,B.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function ia(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=sr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ra(v,L){const O=me.get(v);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function V1(v,L,O,B,U){L.isScene!==!0&&(L=xe),Ue.resetTextureUnits();const ee=L.fog,le=B.isMeshStandardMaterial?L.environment:null,_e=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ni,fe=(B.isMeshStandardMaterial?j:ot).get(B.envMap||le),Ce=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!O.morphAttributes.position,ze=!!O.morphAttributes.normal,Ze=!!O.morphAttributes.color;let st=dn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(st=y.toneMapping);const tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qe=tt!==void 0?tt.length:0,be=me.get(B),nt=u.state.lights;if(Ve===!0&&(q===!0||v!==S)){const gt=v===S&&B.id===E;ie.setState(B,v,gt)}let Xe=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==nt.state.version||be.outputColorSpace!==_e||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==fe||B.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Ce||be.vertexTangents!==Le||be.morphTargets!==Te||be.morphNormals!==ze||be.morphColors!==Ze||be.toneMapping!==st||be.morphTargetsCount!==Qe)&&(Xe=!0):(Xe=!0,be.__version=B.version);let At=be.currentProgram;Xe===!0&&(At=Ci(B,L,U));let Ln=!1,bt=!1,oi=!1;const it=At.getUniforms(),Pt=be.uniforms;if(pe.useProgram(At.program)&&(Ln=!0,bt=!0,oi=!0),B.id!==E&&(E=B.id,bt=!0),Ln||S!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(A,"projectionMatrix",v.projectionMatrix),it.setValue(A,"viewMatrix",v.matrixWorldInverse);const St=it.map.cameraPosition;St!==void 0&&St.setValue(A,he.setFromMatrixPosition(v.matrixWorld)),Ae.logarithmicDepthBuffer&&it.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,bt=!0,oi=!0)}if(U.isSkinnedMesh){it.setOptional(A,U,"bindMatrix"),it.setOptional(A,U,"bindMatrixInverse");const gt=U.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),it.setValue(A,"boneTexture",gt.boneTexture,Ue))}U.isBatchedMesh&&(it.setOptional(A,U,"batchingTexture"),it.setValue(A,"batchingTexture",U._matricesTexture,Ue),it.setOptional(A,U,"batchingIdTexture"),it.setValue(A,"batchingIdTexture",U._indirectTexture,Ue),it.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&it.setValue(A,"batchingColorTexture",U._colorsTexture,Ue));const Dt=O.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&te.update(U,O,At),(bt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,it.setValue(A,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Pt.envMap.value=fe,Pt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Pt.envMapIntensity.value=L.environmentIntensity),bt&&(it.setValue(A,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&G1(Pt,oi),ee&&B.fog===!0&&$.refreshFogUniforms(Pt,ee),$.refreshMaterialUniforms(Pt,B,z,J,u.state.transmissionRenderTarget[v.id]),sr.upload(A,ia(be),Pt,Ue)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(sr.upload(A,ia(be),Pt,Ue),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(A,"center",U.center),it.setValue(A,"modelViewMatrix",U.modelViewMatrix),it.setValue(A,"normalMatrix",U.normalMatrix),it.setValue(A,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const gt=B.uniformsGroups;for(let St=0,_r=gt.length;St<_r;St++){const _n=gt[St];Ne.update(_n,At),Ne.bind(_n,At)}}return At}function G1(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function k1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,L,O){const B=me.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),me.get(v.texture).__webglTexture=L,me.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const O=me.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const W1=A.createFramebuffer();this.setRenderTarget=function(v,L=0,O=0){F=v,w=L,D=O;let B=!0,U=null,ee=!1,le=!1;if(v){const fe=me.get(v);if(fe.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)Ue.setupRenderTarget(v);else if(fe.__hasExternalTextures)Ue.rebindTextures(v,me.get(v.texture).__webglTexture,me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Te=v.depthTexture;if(fe.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(v.width!==Te.image.width||v.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[L])?U=Le[L][O]:U=Le[L],ee=!0):v.samples>0&&Ue.useMultisampledRTT(v)===!1?U=me.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[O]:U=Le,P.copy(v.viewport),H.copy(v.scissor),V=v.scissorTest}else P.copy(ve).multiplyScalar(z).floor(),H.copy(De).multiplyScalar(z).floor(),V=ke;if(O!==0&&(U=W1),pe.bindFramebuffer(A.FRAMEBUFFER,U)&&B&&pe.drawBuffers(v,U),pe.viewport(P),pe.scissor(H),pe.setScissorTest(V),ee){const fe=me.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,fe.__webglTexture,O)}else if(le){const fe=L;for(let Ce=0;Ce<v.textures.length;Ce++){const Le=me.get(v.textures[Ce]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,O,fe)}}else if(v!==null&&O!==0){const fe=me.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,O)}E=-1},this.readRenderTargetPixels=function(v,L,O,B,U,ee,le,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){pe.bindFramebuffer(A.FRAMEBUFFER,fe);try{const Ce=v.textures[_e],Le=Ce.format,Te=Ce.type;if(!Ae.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&O>=0&&O<=v.height-U&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(L,O,B,U,Ee.convert(Le),Ee.convert(Te),ee))}finally{const Ce=F!==null?me.get(F).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,L,O,B,U,ee,le,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(L>=0&&L<=v.width-B&&O>=0&&O<=v.height-U){pe.bindFramebuffer(A.FRAMEBUFFER,fe);const Ce=v.textures[_e],Le=Ce.format,Te=Ce.type;if(!Ae.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+_e),A.readPixels(L,O,B,U,Ee.convert(Le),Ee.convert(Te),0);const Ze=F!==null?me.get(F).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,Ze);const st=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await e0(A,st,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(ze),A.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,O=0){const B=Math.pow(2,-O),U=Math.floor(v.image.width*B),ee=Math.floor(v.image.height*B),le=L!==null?L.x:0,_e=L!==null?L.y:0;Ue.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,le,_e,U,ee),pe.unbindTexture()};const X1=A.createFramebuffer(),q1=A.createFramebuffer();this.copyTextureToTexture=function(v,L,O=null,B=null,U=0,ee=null){ee===null&&(U!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let le,_e,fe,Ce,Le,Te,ze,Ze,st;const tt=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(O!==null)le=O.max.x-O.min.x,_e=O.max.y-O.min.y,fe=O.isBox3?O.max.z-O.min.z:1,Ce=O.min.x,Le=O.min.y,Te=O.isBox3?O.min.z:0;else{const Dt=Math.pow(2,-U);le=Math.floor(tt.width*Dt),_e=Math.floor(tt.height*Dt),v.isDataArrayTexture?fe=tt.depth:v.isData3DTexture?fe=Math.floor(tt.depth*Dt):fe=1,Ce=0,Le=0,Te=0}B!==null?(ze=B.x,Ze=B.y,st=B.z):(ze=0,Ze=0,st=0);const Qe=Ee.convert(L.format),be=Ee.convert(L.type);let nt;L.isData3DTexture?(Ue.setTexture3D(L,0),nt=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ue.setTexture2DArray(L,0),nt=A.TEXTURE_2D_ARRAY):(Ue.setTexture2D(L,0),nt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const Xe=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ln=A.getParameter(A.UNPACK_SKIP_PIXELS),bt=A.getParameter(A.UNPACK_SKIP_ROWS),oi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(A.UNPACK_SKIP_ROWS,Le),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te);const it=v.isDataArrayTexture||v.isData3DTexture,Pt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Dt=me.get(v),gt=me.get(L),St=me.get(Dt.__renderTarget),_r=me.get(gt.__renderTarget);pe.bindFramebuffer(A.READ_FRAMEBUFFER,St.__webglFramebuffer),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let _n=0;_n<fe;_n++)it&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(v).__webglTexture,U,Te+_n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(L).__webglTexture,ee,st+_n)),A.blitFramebuffer(Ce,Le,le,_e,ze,Ze,le,_e,A.DEPTH_BUFFER_BIT,A.NEAREST);pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||me.has(v)){const Dt=me.get(v),gt=me.get(L);pe.bindFramebuffer(A.READ_FRAMEBUFFER,X1),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,q1);for(let St=0;St<fe;St++)it?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dt.__webglTexture,U,Te+St):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dt.__webglTexture,U),Pt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.__webglTexture,ee,st+St):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,gt.__webglTexture,ee),U!==0?A.blitFramebuffer(Ce,Le,le,_e,ze,Ze,le,_e,A.COLOR_BUFFER_BIT,A.NEAREST):Pt?A.copyTexSubImage3D(nt,ee,ze,Ze,st+St,Ce,Le,le,_e):A.copyTexSubImage2D(nt,ee,ze,Ze,Ce,Le,le,_e);pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(nt,ee,ze,Ze,st,le,_e,fe,Qe,be,tt.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(nt,ee,ze,Ze,st,le,_e,fe,Qe,tt.data):A.texSubImage3D(nt,ee,ze,Ze,st,le,_e,fe,Qe,be,tt):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,ze,Ze,le,_e,Qe,be,tt.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,ze,Ze,tt.width,tt.height,Qe,tt.data):A.texSubImage2D(A.TEXTURE_2D,ee,ze,Ze,le,_e,Qe,be,tt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Xe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ln),A.pixelStorei(A.UNPACK_SKIP_ROWS,bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,oi),ee===0&&L.generateMipmaps&&A.generateMipmap(nt),pe.unbindTexture()},this.initRenderTarget=function(v){me.get(v).__webglFramebuffer===void 0&&Ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ue.setTextureCube(v,0):v.isData3DTexture?Ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ue.setTexture2DArray(v,0):Ue.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){w=0,D=0,F=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const E3=JSON.parse("[[[-59.57,-80.04],[-59.87,-80.55],[-60.16,-81],[-62.26,-80.86],[-64.49,-80.92],[-65.74,-80.59],[-65.74,-80.55],[-66.29,-80.26],[-64.04,-80.29],[-61.88,-80.39],[-61.14,-79.98],[-60.61,-79.63],[-59.57,-80.04]],[[-159.21,-79.5],[-161.13,-79.63],[-162.44,-79.28],[-163.03,-78.93],[-163.07,-78.87],[-163.71,-78.6],[-163.71,-78.6],[-163.11,-78.22],[-161.25,-78.38],[-160.25,-78.69],[-159.48,-79.05],[-159.21,-79.5]],[[-45.15,-78.05],[-43.92,-78.48],[-43.49,-79.09],[-43.37,-79.52],[-43.33,-80.03],[-44.88,-80.34],[-46.51,-80.59],[-48.39,-80.83],[-50.48,-81.03],[-52.85,-80.97],[-54.16,-80.63],[-53.99,-80.22],[-51.85,-79.95],[-50.99,-79.61],[-50.36,-79.18],[-49.91,-78.81],[-49.31,-78.46],[-48.66,-78.05],[-48.66,-78.05],[-48.15,-78.05],[-46.66,-77.83],[-45.15,-78.05]],[[-121.21,-73.5],[-119.92,-73.66],[-118.72,-73.48],[-119.29,-73.83],[-120.23,-74.09],[-121.62,-74.01],[-122.62,-73.66],[-122.62,-73.66],[-122.41,-73.32],[-121.21,-73.5]],[[-125.56,-73.48],[-124.03,-73.87],[-124.62,-73.83],[-125.91,-73.74],[-127.28,-73.46],[-127.28,-73.46],[-126.56,-73.25],[-125.56,-73.48]],[[-98.98,-71.93],[-97.88,-72.07],[-96.79,-71.95],[-96.2,-72.52],[-96.98,-72.44],[-98.2,-72.48],[-99.43,-72.44],[-100.78,-72.5],[-101.8,-72.31],[-102.33,-71.89],[-102.33,-71.89],[-101.7,-71.72],[-100.43,-71.85],[-98.98,-71.93]],[[-68.45,-70.96],[-68.33,-71.41],[-68.51,-71.8],[-68.78,-72.17],[-69.96,-72.31],[-71.08,-72.5],[-72.39,-72.48],[-71.9,-72.09],[-73.07,-72.23],[-74.19,-72.37],[-74.95,-72.07],[-75.01,-71.66],[-73.92,-71.27],[-73.92,-71.27],[-73.23,-71.15],[-72.07,-71.19],[-71.78,-70.68],[-71.72,-70.31],[-71.74,-69.51],[-71.17,-69.04],[-70.25,-68.88],[-69.72,-69.25],[-69.49,-69.62],[-69.06,-70.07],[-68.73,-70.51],[-68.45,-70.96]],[[-58.61,-64.15],[-59.05,-64.37],[-59.79,-64.21],[-60.61,-64.31],[-61.3,-64.54],[-62.02,-64.8],[-62.51,-65.09],[-62.65,-65.48],[-62.59,-65.86],[-62.12,-66.19],[-62.81,-66.43],[-63.75,-66.5],[-64.29,-66.84],[-64.88,-67.15],[-65.51,-67.58],[-65.67,-67.95],[-65.31,-68.37],[-64.78,-68.68],[-63.96,-68.91],[-63.2,-69.23],[-62.79,-69.62],[-62.57,-69.99],[-62.28,-70.38],[-61.81,-70.72],[-61.51,-71.09],[-61.38,-72.01],[-61.08,-72.38],[-61,-72.77],[-60.69,-73.17],[-60.83,-73.7],[-61.38,-74.11],[-61.96,-74.44],[-63.3,-74.58],[-63.75,-74.93],[-64.35,-75.26],[-65.86,-75.64],[-67.19,-75.79],[-68.45,-76.01],[-69.8,-76.22],[-70.6,-76.63],[-72.21,-76.67],[-73.97,-76.63],[-75.56,-76.71],[-77.24,-76.71],[-76.93,-77.1],[-75.4,-77.28],[-74.28,-77.56],[-73.66,-77.91],[-74.77,-78.22],[-76.5,-78.12],[-77.93,-78.38],[-77.98,-78.79],[-78.02,-79.18],[-76.85,-79.51],[-76.63,-79.89],[-75.36,-80.26],[-73.24,-80.42],[-71.44,-80.69],[-70.01,-81],[-68.19,-81.32],[-65.7,-81.47],[-63.26,-81.75],[-61.55,-82.04],[-59.69,-82.38],[-58.71,-82.85],[-58.22,-83.22],[-57.01,-82.87],[-55.36,-82.57],[-53.62,-82.26],[-51.54,-82],[-49.76,-81.73],[-47.27,-81.71],[-44.83,-81.85],[-42.81,-82.08],[-42.16,-81.65],[-40.77,-81.36],[-38.24,-81.34],[-36.27,-81.12],[-34.39,-80.91],[-32.31,-80.77],[-30.1,-80.59],[-28.55,-80.34],[-29.25,-79.99],[-29.69,-79.63],[-29.69,-79.26],[-31.62,-79.3],[-33.68,-79.46],[-35.64,-79.46],[-35.91,-79.08],[-35.78,-78.34],[-35.33,-78.12],[-33.9,-77.89],[-32.21,-77.65],[-31,-77.36],[-29.78,-77.07],[-28.88,-76.67],[-27.51,-76.5],[-26.16,-76.36],[-25.47,-76.28],[-23.93,-76.24],[-22.46,-76.11],[-21.22,-75.91],[-20.01,-75.67],[-18.91,-75.44],[-17.52,-75.13],[-16.64,-74.79],[-15.7,-74.5],[-15.41,-74.11],[-16.47,-73.87],[-16.11,-73.46],[-15.45,-73.15],[-14.41,-72.95],[-13.31,-72.72],[-12.29,-72.4],[-11.51,-72.01],[-11.02,-71.54],[-10.3,-71.27],[-9.1,-71.32],[-8.61,-71.66],[-7.42,-71.7],[-7.38,-71.32],[-6.87,-70.93],[-5.79,-71.03],[-5.54,-71.4],[-4.34,-71.46],[-3.05,-71.29],[-1.8,-71.17],[-0.66,-71.23],[-0.23,-71.64],[0.87,-71.3],[1.89,-71.13],[3.02,-70.99],[4.14,-70.85],[5.16,-70.62],[6.27,-70.46],[7.14,-70.25],[7.74,-69.89],[8.49,-70.15],[9.53,-70.01],[10.25,-70.48],[10.82,-70.83],[11.95,-70.64],[12.4,-70.25],[13.42,-69.97],[14.73,-70.03],[15.13,-70.4],[15.95,-70.03],[17.03,-69.91],[18.2,-69.87],[19.26,-69.89],[20.38,-70.01],[21.45,-70.07],[21.92,-70.4],[22.57,-70.7],[23.67,-70.52],[24.84,-70.48],[25.98,-70.48],[27.09,-70.46],[28.09,-70.32],[29.15,-70.21],[30.03,-69.93],[30.97,-69.76],[31.99,-69.66],[32.75,-69.38],[33.3,-68.84],[33.87,-68.5],[34.91,-68.66],[35.3,-69.01],[36.16,-69.25],[37.2,-69.17],[37.91,-69.52],[38.65,-69.78],[39.67,-69.54],[40.02,-69.11],[40.92,-68.93],[41.96,-68.6],[42.94,-68.46],[44.11,-68.27],[44.9,-68.05],[45.72,-67.82],[46.5,-67.6],[47.44,-67.72],[48.34,-67.37],[48.99,-67.09],[49.93,-67.11],[50.75,-66.88],[50.95,-66.52],[51.79,-66.25],[52.61,-66.05],[53.61,-65.9],[54.53,-65.82],[55.41,-65.88],[56.36,-65.97],[57.16,-66.25],[57.26,-66.68],[58.14,-67.01],[58.74,-67.29],[59.94,-67.41],[60.61,-67.68],[61.43,-67.95],[62.39,-68.01],[63.19,-67.82],[64.05,-67.41],[64.99,-67.62],[65.97,-67.74],[66.91,-67.86],[67.89,-67.93],[68.89,-67.93],[69.71,-68.97],[69.67,-69.23],[69.56,-69.68],[68.6,-69.93],[67.81,-70.31],[67.95,-70.7],[69.07,-70.68],[68.93,-71.07],[68.42,-71.44],[67.95,-71.85],[68.71,-72.17],[69.87,-72.26],[71.02,-72.09],[71.57,-71.7],[71.91,-71.32],[72.45,-71.01],[73.08,-70.72],[73.34,-70.36],[73.86,-69.87],[74.49,-69.78],[75.63,-69.74],[76.63,-69.62],[77.64,-69.46],[78.13,-69.07],[78.43,-68.7],[79.11,-68.33],[80.09,-68.07],[80.94,-67.88],[81.48,-67.54],[82.05,-67.37],[82.78,-67.21],[83.78,-67.31],[84.68,-67.21],[85.66,-67.09],[86.75,-67.15],[87.48,-66.88],[87.99,-66.21],[88.36,-66.48],[88.83,-66.95],[89.67,-67.15],[90.63,-67.23],[91.59,-67.11],[92.61,-67.19],[93.55,-67.21],[94.18,-67.11],[95.02,-67.17],[95.78,-67.39],[96.68,-67.25],[97.76,-67.25],[98.68,-67.11],[99.72,-67.25],[100.38,-66.92],[100.89,-66.58],[101.58,-66.31],[102.83,-65.56],[103.48,-65.7],[104.24,-65.97],[104.91,-66.33],[106.18,-66.93],[107.16,-66.95],[108.08,-66.95],[109.16,-66.84],[110.24,-66.7],[111.06,-66.43],[111.74,-66.13],[112.86,-66.09],[113.6,-65.88],[114.39,-66.07],[114.9,-66.39],[115.6,-66.7],[116.7,-66.66],[117.38,-66.92],[118.58,-67.17],[119.83,-67.27],[120.87,-67.19],[121.65,-66.88],[122.32,-66.56],[123.22,-66.48],[124.12,-66.62],[125.16,-66.72],[126.1,-66.56],[127,-66.56],[127.88,-66.66],[128.8,-66.76],[129.7,-66.58],[130.78,-66.43],[131.8,-66.39],[132.94,-66.39],[133.86,-66.29],[134.76,-66.21],[135.03,-65.72],[135.07,-65.31],[135.7,-65.58],[135.87,-66.03],[136.21,-66.45],[136.62,-66.78],[137.46,-66.95],[138.6,-66.9],[139.91,-66.88],[140.81,-66.82],[142.12,-66.82],[143.06,-66.8],[144.37,-66.84],[145.49,-66.92],[146.2,-67.23],[146,-67.6],[146.65,-67.9],[147.72,-68.13],[148.84,-68.39],[150.13,-68.56],[151.48,-68.72],[152.5,-68.87],[153.64,-68.89],[154.28,-68.56],[155.17,-68.84],[155.93,-69.15],[156.81,-69.38],[158.03,-69.48],[159.18,-69.6],[159.67,-69.99],[160.81,-70.23],[161.57,-70.58],[162.69,-70.74],[163.84,-70.72],[164.92,-70.78],[166.11,-70.76],[167.31,-70.83],[168.43,-70.97],[169.46,-71.21],[170.5,-71.4],[171.21,-71.7],[171.09,-72.09],[170.56,-72.44],[170.11,-72.89],[169.76,-73.24],[169.29,-73.66],[167.98,-73.81],[167.39,-74.17],[166.09,-74.38],[165.64,-74.77],[164.96,-75.15],[164.23,-75.46],[163.82,-75.87],[163.57,-76.24],[163.47,-76.69],[163.49,-77.07],[164.06,-77.46],[164.27,-77.83],[164.74,-78.18],[166.6,-78.32],[167,-78.75],[165.19,-78.91],[163.67,-79.12],[161.77,-79.16],[160.92,-79.73],[160.75,-80.2],[160.32,-80.57],[159.79,-80.95],[161.12,-81.28],[161.63,-81.69],[162.49,-82.06],[163.71,-82.4],[165.1,-82.71],[166.6,-83.02],[168.9,-83.34],[169.4,-83.83],[172.28,-84.04],[172.48,-84.12],[173.22,-84.41],[175.99,-84.16],[178.28,-84.47],[180,-84.71],[180,-90],[-180,-90],[-180,-84.71],[-179.94,-84.72],[-179.06,-84.14],[-177.26,-84.45],[-177.14,-84.42],[-176.86,-84.33],[-176.52,-84.23],[-176.23,-84.14],[-176.08,-84.1],[-175.93,-84.1],[-175.83,-84.12],[-174.38,-84.53],[-173.12,-84.12],[-172.89,-84.06],[-169.95,-83.88],[-169,-84.12],[-168.53,-84.24],[-167.02,-84.57],[-164.18,-84.83],[-161.93,-85.14],[-158.07,-85.37],[-155.19,-85.1],[-150.94,-85.3],[-148.53,-85.61],[-145.89,-85.32],[-143.11,-85.04],[-142.89,-84.57],[-146.83,-84.53],[-150.06,-84.3],[-150.9,-83.9],[-153.59,-83.69],[-153.41,-83.24],[-153.04,-82.83],[-152.67,-82.45],[-152.86,-82.04],[-154.53,-81.77],[-155.29,-81.42],[-156.84,-81.1],[-154.41,-81.16],[-152.1,-81],[-150.65,-81.34],[-148.87,-81.04],[-147.22,-80.67],[-146.42,-80.34],[-146.77,-79.93],[-148.06,-79.65],[-149.53,-79.36],[-151.59,-79.3],[-153.39,-79.16],[-155.33,-79.06],[-155.98,-78.69],[-157.27,-78.38],[-158.05,-78.03],[-158.37,-76.89],[-157.88,-76.99],[-156.97,-77.3],[-155.33,-77.2],[-153.74,-77.07],[-152.92,-77.5],[-151.33,-77.4],[-150,-77.18],[-148.75,-76.91],[-147.61,-76.58],[-146.1,-76.48],[-146.14,-76.11],[-146.5,-75.73],[-146.2,-75.38],[-144.91,-75.2],[-144.32,-75.54],[-142.79,-75.34],[-141.64,-75.09],[-140.21,-75.07],[-138.86,-74.97],[-137.51,-74.73],[-136.43,-74.52],[-135.21,-74.3],[-134.43,-74.36],[-133.75,-74.44],[-132.26,-74.3],[-130.93,-74.48],[-129.55,-74.46],[-128.24,-74.32],[-126.89,-74.42],[-125.4,-74.52],[-124.01,-74.48],[-122.56,-74.5],[-121.07,-74.52],[-119.7,-74.48],[-118.68,-74.19],[-117.47,-74.03],[-116.22,-74.24],[-115.02,-74.07],[-113.94,-73.71],[-113.3,-74.03],[-112.95,-74.38],[-112.3,-74.71],[-111.26,-74.42],[-110.07,-74.79],[-108.71,-74.91],[-107.56,-75.18],[-106.15,-75.13],[-104.88,-74.95],[-103.37,-74.99],[-102.02,-75.13],[-100.65,-75.3],[-100.12,-74.87],[-100.76,-74.54],[-101.25,-74.19],[-102.55,-74.11],[-103.11,-73.73],[-103.33,-73.36],[-103.68,-72.62],[-102.92,-72.75],[-101.61,-72.81],[-100.31,-72.75],[-99.14,-72.91],[-98.12,-73.21],[-97.69,-73.56],[-96.34,-73.62],[-95.04,-73.48],[-93.67,-73.28],[-92.44,-73.17],[-91.42,-73.4],[-90.09,-73.32],[-89.23,-72.56],[-88.42,-73.01],[-87.27,-73.19],[-86.01,-73.09],[-85.19,-73.48],[-83.88,-73.52],[-82.67,-73.64],[-81.47,-73.85],[-80.69,-73.48],[-80.3,-73.13],[-79.3,-73.52],[-77.93,-73.42],[-76.91,-73.64],[-76.22,-73.97],[-74.89,-73.87],[-73.85,-73.66],[-72.83,-73.4],[-71.62,-73.26],[-70.21,-73.15],[-68.94,-73.01],[-67.96,-72.79],[-67.37,-72.48],[-67.13,-72.05],[-67.25,-71.64],[-67.56,-71.25],[-67.92,-70.85],[-68.23,-70.46],[-68.49,-70.11],[-68.54,-69.72],[-68.45,-69.33],[-67.98,-68.95],[-67.58,-68.54],[-67.43,-68.15],[-67.62,-67.72],[-67.74,-67.33],[-67.25,-66.88],[-66.7,-66.58],[-66.06,-66.21],[-65.37,-65.9],[-64.57,-65.6],[-64.18,-65.17],[-63.63,-64.9],[-63,-64.64],[-62.04,-64.58],[-61.41,-64.27],[-60.71,-64.07],[-59.89,-63.96],[-59.16,-63.7],[-58.59,-63.39],[-57.81,-63.27],[-57.22,-63.53],[-57.6,-63.86],[-58.61,-64.15]],[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.9],[-67.29,-55.3],[-68.15,-55.61],[-69.23,-55.5],[-69.96,-55.2],[-71.01,-55.05],[-72.26,-54.5],[-73.29,-53.96],[-74.66,-52.84],[-73.84,-53.05],[-72.43,-53.72],[-71.11,-54.07],[-70.59,-53.62],[-70.27,-52.93],[-69.35,-52.52],[-68.63,-52.64],[-68.63,-52.64],[-68.25,-53.1],[-67.75,-53.85]],[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]],[[70.28,-49.71],[68.75,-49.77],[68.72,-49.24],[68.87,-48.83],[68.94,-48.62],[69.58,-48.94],[70.53,-49.06],[70.56,-49.26],[70.28,-49.71]],[[145.4,-40.79],[146.36,-41.14],[146.91,-41],[147.69,-40.81],[148.29,-40.88],[148.36,-42.06],[148.02,-42.41],[147.91,-43.21],[147.56,-42.94],[146.87,-43.63],[146.66,-43.58],[146.05,-43.55],[145.43,-42.69],[145.3,-42.03],[144.72,-41.16],[144.74,-40.7],[145.4,-40.79]],[[173.02,-40.92],[173.25,-41.33],[173.96,-40.93],[174.25,-41.35],[174.25,-41.77],[173.88,-42.23],[173.22,-42.97],[172.71,-43.37],[173.08,-43.85],[172.31,-43.87],[171.45,-44.24],[171.19,-44.9],[170.62,-45.91],[169.83,-46.36],[169.33,-46.64],[168.41,-46.62],[167.76,-46.29],[166.68,-46.22],[166.51,-45.85],[167.05,-45.11],[168.3,-44.12],[168.95,-43.94],[169.67,-43.56],[170.52,-43.03],[171.13,-42.51],[171.57,-41.77],[171.95,-41.51],[172.1,-40.96],[172.8,-40.49],[173.02,-40.92]],[[174.61,-36.16],[175.34,-37.21],[175.36,-36.53],[175.81,-36.8],[175.96,-37.56],[176.76,-37.88],[177.44,-37.96],[178.01,-37.58],[178.52,-37.7],[178.27,-38.58],[177.97,-39.17],[177.21,-39.15],[176.94,-39.45],[177.03,-39.88],[176.89,-40.07],[176.51,-40.6],[176.01,-41.29],[175.24,-41.69],[175.07,-41.43],[174.65,-41.28],[175.23,-40.46],[174.9,-39.91],[173.82,-39.51],[173.85,-39.15],[174.57,-38.8],[174.74,-38.03],[174.7,-37.38],[174.29,-36.71],[174.32,-36.53],[173.84,-36.12],[173.05,-35.24],[172.64,-34.53],[173.01,-34.45],[173.55,-35.01],[174.33,-35.27],[174.61,-36.16]],[[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.47,-21.68],[164.83,-21.15],[164.17,-20.44],[164.03,-20.11],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08],[166.6,-21.7],[167.12,-22.16]],[[178.37,-17.34],[178.72,-17.63],[178.55,-18.15],[177.93,-18.29],[177.38,-18.16],[177.29,-17.72],[177.67,-17.38],[178.13,-17.5],[178.37,-17.34]],[[179.36,-16.8],[178.73,-17.01],[178.6,-16.64],[179.1,-16.43],[179.41,-16.38],[180,-16.07],[180,-16.56],[179.36,-16.8]],[[50.06,-13.56],[50.22,-14.76],[50.48,-15.23],[50.38,-15.71],[50.2,-16],[49.86,-15.41],[49.67,-15.71],[49.86,-16.45],[49.77,-16.88],[49.5,-17.11],[49.44,-17.95],[49.04,-19.12],[48.55,-20.5],[47.93,-22.39],[47.55,-23.78],[47.1,-24.94],[46.28,-25.18],[45.41,-25.6],[44.83,-25.35],[44.04,-24.99],[43.76,-24.46],[43.7,-23.57],[43.35,-22.78],[43.25,-22.06],[43.43,-21.34],[43.89,-21.16],[43.9,-20.83],[44.37,-20.07],[44.46,-19.44],[44.23,-18.96],[44.04,-18.33],[43.96,-17.41],[44.31,-16.85],[44.45,-16.22],[44.94,-16.18],[45.5,-15.97],[45.87,-15.79],[46.31,-15.78],[46.88,-15.21],[47.71,-14.59],[48.01,-14.09],[47.87,-13.66],[48.29,-13.78],[48.85,-13.09],[48.86,-12.49],[49.19,-12.04],[49.54,-12.47],[49.81,-12.9],[50.06,-13.56]],[[143.56,-13.76],[143.92,-14.55],[144.56,-14.17],[144.89,-14.59],[145.37,-14.98],[145.27,-15.43],[145.49,-16.29],[145.64,-16.78],[145.89,-16.91],[146.16,-17.76],[146.06,-18.28],[146.39,-18.96],[147.47,-19.48],[148.18,-19.96],[148.85,-20.39],[148.72,-20.63],[149.29,-21.26],[149.68,-22.34],[150.08,-22.12],[150.48,-22.56],[150.73,-22.4],[150.9,-23.46],[151.61,-24.08],[152.07,-24.46],[152.86,-25.27],[153.14,-26.07],[153.16,-26.64],[153.09,-27.26],[153.57,-28.11],[153.51,-29],[153.34,-29.46],[153.07,-30.35],[153.09,-30.92],[152.89,-31.64],[152.45,-32.55],[151.71,-33.04],[151.34,-33.82],[151.01,-34.31],[150.71,-35.17],[150.33,-35.67],[150.08,-36.42],[149.95,-37.11],[150,-37.43],[149.42,-37.77],[148.3,-37.81],[147.38,-38.22],[146.92,-38.61],[146.32,-39.04],[145.49,-38.59],[144.88,-38.42],[145.03,-37.9],[144.49,-38.09],[143.61,-38.81],[142.75,-38.54],[142.18,-38.38],[141.61,-38.31],[140.64,-38.02],[139.99,-37.4],[139.81,-36.64],[139.57,-36.14],[139.08,-35.73],[138.12,-35.61],[138.45,-35.13],[138.21,-34.38],[137.72,-35.08],[136.83,-35.26],[137.35,-34.71],[137.5,-34.13],[137.89,-33.64],[137.81,-32.9],[137,-33.75],[136.37,-34.09],[135.99,-34.89],[135.21,-34.48],[135.24,-33.95],[134.61,-33.22],[134.09,-32.85],[134.27,-32.62],[132.99,-32.01],[132.29,-31.98],[131.33,-31.5],[129.54,-31.59],[128.24,-31.95],[127.1,-32.28],[126.15,-32.22],[125.09,-32.73],[124.22,-32.96],[124.03,-33.48],[123.66,-33.89],[122.81,-33.91],[122.18,-34],[121.3,-33.82],[120.58,-33.93],[119.89,-33.98],[119.3,-34.51],[119.01,-34.46],[118.51,-34.75],[118.02,-35.06],[117.3,-35.03],[116.63,-35.03],[115.56,-34.39],[115.03,-34.2],[115.05,-33.62],[115.55,-33.49],[115.71,-33.26],[115.68,-32.9],[115.8,-32.21],[115.69,-31.61],[115.16,-30.6],[115,-30.03],[115.04,-29.46],[114.64,-28.81],[114.62,-28.52],[114.17,-28.12],[114.05,-27.33],[113.48,-26.54],[113.34,-26.12],[113.78,-26.55],[113.44,-25.62],[113.94,-25.91],[114.23,-26.3],[114.22,-25.79],[113.72,-25],[113.63,-24.68],[113.39,-24.38],[113.5,-23.81],[113.71,-23.56],[113.84,-23.06],[113.74,-22.48],[114.15,-21.76],[114.23,-22.52],[114.65,-21.83],[115.46,-21.5],[115.95,-21.07],[116.71,-20.7],[117.17,-20.62],[117.44,-20.75],[118.23,-20.37],[118.84,-20.26],[118.99,-20.04],[119.25,-19.95],[119.81,-19.98],[120.86,-19.68],[121.4,-19.24],[121.66,-18.71],[122.24,-18.2],[122.29,-17.8],[122.31,-17.25],[123.01,-16.41],[123.43,-17.27],[123.86,-17.07],[123.5,-16.6],[123.82,-16.11],[124.26,-16.33],[124.38,-15.57],[124.93,-15.08],[125.17,-14.68],[125.67,-14.51],[125.69,-14.23],[126.13,-14.35],[126.14,-14.1],[126.58,-13.95],[127.07,-13.82],[127.8,-14.28],[128.36,-14.87],[128.99,-14.88],[129.62,-14.97],[129.41,-14.42],[129.89,-13.62],[130.34,-13.36],[130.18,-13.11],[130.62,-12.54],[131.22,-12.18],[131.74,-12.3],[132.58,-12.11],[132.56,-11.6],[131.82,-11.27],[132.36,-11.13],[133.02,-11.38],[133.55,-11.79],[134.39,-12.04],[134.68,-11.94],[135.3,-12.25],[135.88,-11.96],[136.26,-12.05],[136.49,-11.86],[136.95,-12.35],[136.69,-12.89],[136.31,-13.29],[135.96,-13.32],[136.08,-13.72],[135.78,-14.22],[135.43,-14.72],[135.5,-15],[136.3,-15.55],[137.07,-15.87],[137.58,-16.22],[138.3,-16.81],[138.59,-16.81],[139.11,-17.06],[139.26,-17.37],[140.22,-17.71],[140.88,-17.37],[141.07,-16.83],[141.27,-16.39],[141.4,-15.84],[141.7,-15.04],[141.56,-14.56],[141.64,-14.27],[141.52,-13.7],[141.65,-12.94],[141.84,-12.74],[141.69,-12.41],[141.93,-11.88],[142.12,-11.33],[142.14,-11.04],[142.52,-10.67],[142.8,-11.16],[142.87,-11.78],[143.12,-11.91],[143.16,-12.33],[143.52,-12.83],[143.6,-13.4],[143.56,-13.76]],[[160.85,-9.87],[160.46,-9.9],[159.85,-9.79],[159.64,-9.64],[159.7,-9.24],[160.36,-9.4],[160.69,-9.61],[160.85,-9.87]],[[124.44,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.97,-8.89],[125.09,-8.66],[125.95,-8.43],[126.64,-8.4],[126.96,-8.27],[127.34,-8.4],[126.97,-8.67],[125.93,-9.11],[125.09,-9.39],[124.44,-10.14]],[[117.9,-8.1],[118.26,-8.36],[118.88,-8.28],[119.13,-8.71],[117.97,-8.91],[117.28,-9.04],[116.74,-9.03],[117.08,-8.46],[117.63,-8.45],[117.9,-8.1]],[[122.9,-8.09],[122.76,-8.65],[121.25,-8.93],[119.92,-8.81],[119.92,-8.44],[120.72,-8.24],[121.34,-8.54],[122.01,-8.46],[122.9,-8.09]],[[159.88,-8.34],[159.92,-8.54],[159.13,-8.11],[158.59,-7.75],[158.21,-7.42],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.88,-8.34]],[[108.62,-6.78],[110.54,-6.88],[110.76,-6.47],[112.61,-6.95],[112.98,-7.59],[114.48,-7.78],[115.71,-8.37],[114.56,-8.75],[113.46,-8.35],[112.56,-8.38],[111.52,-8.3],[110.59,-8.12],[109.43,-7.74],[108.69,-7.64],[108.28,-7.77],[106.45,-7.35],[106.28,-6.92],[105.37,-6.85],[106.05,-5.9],[107.27,-5.95],[108.07,-6.35],[108.49,-6.42],[108.62,-6.78]],[[155.88,-6.82],[155.6,-6.92],[155.17,-6.54],[154.73,-5.9],[154.51,-5.14],[154.65,-5.04],[154.76,-5.34],[155.06,-5.57],[155.55,-6.2],[156.02,-6.54],[155.88,-6.82]],[[151.98,-5.48],[151.46,-5.56],[151.3,-5.84],[150.75,-6.08],[150.24,-6.32],[149.71,-6.32],[148.89,-6.03],[148.32,-5.75],[148.4,-5.44],[149.3,-5.58],[149.85,-5.51],[150,-5.03],[150.14,-5],[150.24,-5.53],[150.81,-5.46],[151.09,-5.11],[151.65,-4.76],[151.54,-4.17],[152.14,-4.15],[152.34,-4.31],[152.32,-4.87],[151.98,-5.48]],[[130.47,-3.09],[130.83,-3.86],[129.99,-3.45],[129.16,-3.36],[128.59,-3.43],[127.9,-3.39],[128.14,-2.84],[129.37,-2.8],[130.47,-3.09]],[[153.14,-4.5],[152.83,-4.77],[152.64,-4.18],[152.41,-3.79],[151.95,-3.46],[151.38,-3.04],[150.66,-2.74],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]],[[134.14,-1.15],[134.42,-2.77],[135.46,-3.37],[136.29,-2.31],[137.44,-1.7],[138.33,-1.7],[139.18,-2.05],[139.93,-2.41],[141,-2.6],[142.74,-3.29],[144.58,-3.86],[145.27,-4.37],[145.83,-4.88],[145.98,-5.47],[147.65,-6.08],[147.89,-6.61],[146.97,-6.72],[147.19,-7.39],[148.08,-8.04],[148.73,-9.1],[149.31,-9.07],[149.27,-9.51],[150.04,-9.68],[149.74,-9.87],[150.8,-10.29],[150.69,-10.58],[150.03,-10.65],[149.78,-10.39],[148.92,-10.28],[147.91,-10.13],[147.14,-9.49],[146.57,-8.94],[146.05,-8.07],[144.74,-7.63],[143.9,-7.92],[143.29,-8.25],[143.41,-8.98],[142.63,-9.33],[142.07,-9.16],[141.03,-9.12],[140.14,-8.3],[139.13,-8.1],[138.88,-8.38],[137.61,-8.41],[138.04,-7.6],[138.67,-7.32],[138.41,-6.23],[137.93,-5.39],[135.99,-4.55],[135.16,-4.46],[133.66,-3.54],[133.37,-4.02],[132.98,-4.11],[132.76,-3.75],[132.75,-3.31],[131.99,-2.82],[133.07,-2.46],[133.78,-2.48],[133.7,-2.21],[132.23,-2.21],[131.84,-1.62],[130.94,-1.43],[130.52,-0.94],[131.87,-0.7],[132.38,-0.37],[133.99,-0.78],[134.14,-1.15]],[[125.24,1.42],[124.44,0.43],[123.69,0.24],[122.72,0.43],[121.06,0.38],[120.18,0.24],[120.04,-0.52],[120.94,-1.41],[121.48,-0.96],[123.34,-0.62],[123.26,-1.08],[122.82,-0.93],[122.39,-1.52],[121.51,-1.9],[122.45,-3.19],[122.27,-3.53],[123.17,-4.68],[123.16,-5.34],[122.63,-5.63],[122.24,-5.28],[122.72,-4.46],[121.74,-4.85],[121.49,-4.57],[121.62,-4.19],[120.9,-3.6],[120.97,-2.63],[120.31,-2.93],[120.39,-4.1],[120.43,-5.53],[119.8,-5.67],[119.37,-5.38],[119.65,-4.46],[119.5,-3.49],[119.08,-3.49],[118.77,-2.8],[119.18,-2.15],[119.32,-1.35],[119.83,0.15],[120.04,0.57],[120.89,1.31],[121.67,1.01],[122.93,0.88],[124.08,0.92],[125.07,1.64],[125.24,1.42]],[[128.69,1.13],[128.64,0.26],[128.12,0.36],[127.97,-0.25],[128.38,-0.78],[128.1,-0.9],[127.7,-0.27],[127.4,1.01],[127.6,1.81],[127.93,2.17],[128,1.63],[128.59,1.54],[128.69,1.13]],[[105.82,-5.85],[104.71,-5.87],[103.87,-5.04],[102.58,-4.22],[102.16,-3.61],[101.4,-2.8],[100.9,-2.05],[100.14,-0.65],[99.26,0.18],[98.97,1.04],[98.6,1.82],[97.7,2.45],[97.18,3.31],[96.42,3.87],[95.38,4.97],[95.29,5.48],[95.94,5.44],[97.48,5.25],[98.37,4.27],[99.14,3.59],[99.69,3.17],[100.64,2.1],[101.66,2.08],[102.5,1.4],[103.08,0.56],[103.84,0.1],[103.44,-0.71],[104.01,-1.06],[104.37,-1.08],[104.54,-1.78],[104.89,-2.34],[105.62,-2.43],[106.11,-3.06],[105.86,-4.31],[105.82,-5.85]],[[117.88,1.83],[119,0.9],[117.81,0.78],[117.48,0.1],[117.52,-0.8],[116.56,-1.49],[116.53,-2.48],[116.15,-4.01],[116,-3.66],[114.86,-4.11],[114.47,-3.5],[113.76,-3.44],[113.26,-3.12],[112.07,-3.48],[111.7,-2.99],[111.05,-3.05],[110.22,-2.93],[110.07,-1.59],[109.57,-1.31],[109.09,-0.46],[108.95,0.42],[109.07,1.34],[109.66,2.01],[110.4,1.66],[111.17,1.85],[111.37,2.7],[111.8,2.89],[113,3.1],[113.71,3.89],[114.2,4.53],[114.6,4.9],[115.45,5.45],[116.22,6.14],[116.73,6.92],[117.13,6.93],[117.64,6.42],[117.69,5.99],[118.35,5.71],[119.18,5.41],[119.11,5.02],[118.44,4.97],[118.62,4.48],[117.88,4.14],[117.31,3.23],[118.05,2.29],[117.88,1.83]],[[126.38,8.41],[126.48,7.75],[126.54,7.19],[126.2,6.27],[125.83,7.29],[125.36,6.79],[125.68,6.05],[125.4,5.58],[124.22,6.16],[123.94,6.89],[124.24,7.36],[123.61,7.83],[123.3,7.42],[122.83,7.46],[122.09,6.9],[121.92,7.19],[122.31,8.03],[122.94,8.32],[123.49,8.69],[123.84,8.24],[124.6,8.51],[124.76,8.96],[125.47,8.99],[125.41,9.76],[126.22,9.29],[126.31,8.78],[126.38,8.41]],[[81.22,6.2],[80.35,5.97],[79.87,6.76],[79.7,8.2],[80.15,9.82],[80.84,9.27],[81.3,8.56],[81.79,7.52],[81.64,6.48],[81.22,6.2]],[[-60.94,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.37],[-61.68,10.76],[-61.1,10.89],[-60.9,10.86],[-60.94,10.11]],[[123.98,10.28],[123.62,9.95],[123.31,9.32],[123,9.02],[122.38,9.71],[122.59,9.98],[122.84,10.26],[122.95,10.88],[123.5,10.94],[123.34,10.27],[124.08,11.23],[123.98,10.28]],[[118.5,9.32],[117.17,8.37],[117.66,9.07],[118.39,9.68],[118.99,10.38],[119.51,11.37],[119.69,10.55],[119.03,10],[118.5,9.32]],[[121.88,11.89],[122.48,11.58],[123.12,11.58],[123.1,11.17],[122.64,10.74],[122,10.44],[121.97,10.91],[122.04,11.42],[121.88,11.89]],[[125.5,12.16],[125.78,11.05],[125.01,11.31],[125.03,10.98],[125.28,10.36],[124.8,10.13],[124.76,10.84],[124.46,10.89],[124.3,11.5],[124.89,11.42],[124.88,11.79],[124.27,12.56],[125.23,12.54],[125.5,12.16]],[[121.32,18.5],[121.94,18.22],[122.25,18.48],[122.34,18.22],[122.17,17.81],[122.52,17.09],[122.25,16.26],[121.66,15.93],[121.51,15.12],[121.73,14.33],[122.26,14.22],[122.7,14.34],[123.95,13.78],[123.86,13.24],[124.18,13],[124.08,12.54],[123.3,13.03],[122.93,13.55],[122.67,13.19],[122.03,13.78],[121.13,13.64],[120.63,13.86],[120.68,14.27],[120.99,14.53],[120.69,14.76],[120.56,14.4],[120.07,14.97],[119.92,15.41],[119.88,16.36],[120.29,16.03],[120.39,17.6],[120.72,18.51],[121.32,18.5]],[[-65.59,18.23],[-65.85,17.98],[-66.6,17.98],[-67.18,17.95],[-67.24,18.37],[-67.1,18.52],[-66.28,18.51],[-65.77,18.43],[-65.59,18.23]],[[-76.9,17.87],[-77.21,17.7],[-77.77,17.86],[-78.34,18.23],[-78.22,18.45],[-77.8,18.52],[-77.57,18.49],[-76.9,18.4],[-76.37,18.16],[-76.2,17.89],[-76.9,17.87]],[[-72.58,19.87],[-71.71,19.71],[-71.59,19.88],[-70.81,19.88],[-70.21,19.62],[-69.95,19.65],[-69.77,19.29],[-69.22,19.31],[-69.25,19.02],[-68.81,18.98],[-68.32,18.61],[-68.69,18.21],[-69.16,18.42],[-69.62,18.38],[-69.95,18.43],[-70.13,18.25],[-70.52,18.18],[-70.67,18.43],[-71,18.28],[-71.4,17.6],[-71.66,17.76],[-71.71,18.04],[-72.37,18.21],[-72.84,18.15],[-73.45,18.22],[-73.92,18.03],[-74.46,18.34],[-74.37,18.66],[-73.45,18.53],[-72.69,18.45],[-72.33,18.67],[-72.79,19.1],[-72.78,19.48],[-73.42,19.64],[-73.19,19.92],[-72.58,19.87]],[[110.34,18.68],[109.48,18.2],[108.66,18.51],[108.63,19.37],[109.12,19.82],[110.21,20.1],[110.79,20.08],[111.01,19.7],[110.57,19.26],[110.34,18.68]],[[-155.54,19.08],[-155.69,18.92],[-155.94,19.06],[-155.91,19.34],[-156.07,19.7],[-156.02,19.81],[-155.85,19.98],[-155.92,20.17],[-155.86,20.27],[-155.79,20.25],[-155.4,20.08],[-155.22,19.99],[-155.06,19.86],[-154.81,19.51],[-154.83,19.45],[-155.22,19.24],[-155.54,19.08]],[[-156.08,20.64],[-156.41,20.57],[-156.59,20.78],[-156.7,20.86],[-156.71,20.93],[-156.61,21.01],[-156.26,20.92],[-156,20.76],[-156.08,20.64]],[[-157.65,21.32],[-157.71,21.26],[-157.78,21.28],[-158.13,21.31],[-158.25,21.54],[-158.29,21.58],[-158.03,21.72],[-157.94,21.65],[-157.65,21.32]],[[-79.68,22.77],[-79.28,22.4],[-78.35,22.51],[-77.99,22.28],[-77.15,21.66],[-76.52,21.21],[-76.19,21.22],[-75.6,21.02],[-75.67,20.74],[-74.93,20.69],[-74.18,20.28],[-74.3,20.05],[-74.96,19.92],[-75.63,19.87],[-76.32,19.95],[-77.76,19.86],[-77.09,20.41],[-77.49,20.67],[-78.14,20.74],[-78.48,21.03],[-78.72,21.6],[-79.28,21.56],[-80.22,21.83],[-80.52,22.04],[-81.82,22.19],[-82.17,22.39],[-81.8,22.64],[-82.78,22.69],[-83.49,22.17],[-83.91,22.15],[-84.05,21.91],[-84.55,21.8],[-84.97,21.9],[-84.45,22.2],[-84.23,22.57],[-83.78,22.79],[-83.27,22.98],[-82.51,23.08],[-82.27,23.19],[-81.4,23.12],[-80.62,23.11],[-79.68,22.77]],[[-77.53,23.76],[-77.78,23.71],[-78.03,24.29],[-78.41,24.58],[-78.19,25.21],[-77.89,25.17],[-77.54,24.34],[-77.53,23.76]],[[121.18,22.79],[120.75,21.97],[120.22,22.81],[120.11,23.56],[120.69,24.54],[121.5,25.3],[121.95,25],[121.78,24.39],[121.18,22.79]],[[134.64,34.15],[134.77,33.81],[134.2,33.2],[133.79,33.52],[133.28,33.29],[133.01,32.7],[132.36,32.99],[132.37,33.46],[132.92,34.06],[133.49,33.94],[133.9,34.36],[134.64,34.15]],[[34.58,35.67],[33.9,35.25],[33.97,35.06],[34,34.98],[32.98,34.57],[32.49,34.7],[32.26,35.1],[32.73,35.14],[32.8,35.15],[32.95,35.39],[33.67,35.37],[34.58,35.67]],[[23.7,35.71],[24.25,35.37],[25.03,35.42],[25.77,35.35],[25.75,35.18],[26.29,35.3],[26.16,35],[24.72,34.92],[24.74,35.08],[23.51,35.28],[23.7,35.71]],[[15.52,38.23],[15.16,37.44],[15.31,37.13],[15.1,36.62],[14.34,37],[13.83,37.1],[12.43,37.61],[12.57,38.13],[13.74,38.03],[14.76,38.14],[15.52,38.23]],[[9.21,41.21],[9.81,40.5],[9.67,39.18],[9.21,39.24],[8.81,38.91],[8.43,39.17],[8.39,40.38],[8.16,40.95],[8.71,40.9],[9.21,41.21]],[[140.98,37.14],[140.6,36.34],[140.77,35.84],[140.25,35.14],[138.98,34.67],[137.22,34.61],[135.79,33.46],[135.12,33.85],[135.08,34.6],[133.34,34.38],[132.16,33.9],[130.99,33.89],[132,33.15],[131.33,31.45],[130.69,31.03],[130.2,31.42],[130.45,32.32],[129.81,32.61],[129.41,33.3],[130.35,33.6],[130.88,34.23],[131.88,34.75],[132.62,35.43],[134.61,35.73],[135.68,35.53],[136.72,37.3],[137.39,36.83],[138.86,37.83],[139.43,38.22],[140.05,39.44],[139.88,40.56],[140.31,41.2],[141.37,41.38],[141.91,39.99],[141.88,39.18],[140.96,38.17],[140.98,37.14]],[[143.91,44.17],[144.61,43.96],[145.32,44.38],[145.54,43.26],[144.06,42.99],[143.18,42],[141.61,42.68],[141.07,41.58],[139.96,41.57],[139.82,42.56],[140.31,43.33],[141.38,43.39],[141.67,44.77],[141.97,45.55],[143.14,44.51],[143.91,44.17]],[[-63.66,46.55],[-62.94,46.42],[-62.01,46.44],[-62.5,46.03],[-62.87,45.97],[-64.14,46.39],[-64.39,46.73],[-64.01,47.04],[-63.66,46.55]],[[-61.81,49.11],[-62.29,49.09],[-63.59,49.4],[-64.52,49.87],[-64.17,49.96],[-62.86,49.71],[-61.84,49.29],[-61.81,49.11]],[[-123.51,48.51],[-124.01,48.37],[-125.66,48.83],[-125.95,49.18],[-126.85,49.53],[-127.03,49.81],[-128.06,49.99],[-128.44,50.54],[-128.36,50.77],[-127.31,50.55],[-126.7,50.4],[-125.76,50.3],[-125.42,49.95],[-124.92,49.48],[-123.92,49.06],[-123.51,48.51]],[[-56.13,50.69],[-56.8,49.81],[-56.14,50.15],[-55.47,49.94],[-55.82,49.59],[-54.94,49.31],[-54.47,49.56],[-53.48,49.25],[-53.79,48.52],[-53.09,48.69],[-52.96,48.16],[-52.65,47.54],[-53.07,46.66],[-53.52,46.62],[-54.18,46.81],[-53.96,47.63],[-54.24,47.75],[-55.4,46.88],[-56,46.92],[-55.29,47.39],[-56.25,47.63],[-57.33,47.57],[-59.27,47.6],[-59.42,47.9],[-58.8,48.25],[-59.23,48.52],[-58.39,49.13],[-57.36,50.72],[-56.74,51.29],[-55.87,51.63],[-55.41,51.59],[-55.6,51.32],[-56.13,50.69]],[[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-132.71,54.04],[-131.75,54.12],[-132.05,52.98],[-131.18,52.18],[-131.58,52.18],[-132.18,52.64],[-132.55,53.1],[-133.05,53.41],[-133.24,53.85],[-133.18,54.17],[-132.71,54.04]],[[143.65,50.75],[144.65,48.98],[143.17,49.31],[142.56,47.86],[143.53,46.84],[143.51,46.14],[142.75,46.74],[142.09,45.97],[141.91,46.81],[142.02,47.78],[141.9,48.86],[142.14,49.62],[142.18,50.95],[141.59,51.94],[141.68,53.3],[142.61,53.76],[142.21,54.23],[142.65,54.37],[142.91,53.7],[143.26,52.74],[143.24,51.76],[143.65,50.75]],[[-6.79,52.26],[-8.56,51.67],[-9.98,51.82],[-9.17,52.86],[-9.69,53.88],[-8.33,54.66],[-7.57,55.13],[-6.73,55.17],[-5.66,54.55],[-6.2,53.87],[-6.03,53.15],[-6.79,52.26]],[[-153.01,57.12],[-154.01,56.73],[-154.52,56.99],[-154.67,57.46],[-153.76,57.82],[-153.23,57.97],[-152.56,57.9],[-152.14,57.59],[-153.01,57.12]],[[-3.01,58.63],[-4.07,57.55],[-3.06,57.69],[-1.96,57.68],[-2.22,56.87],[-3.12,55.97],[-2.09,55.91],[-1.11,54.62],[-0.43,54.46],[0.18,53.33],[0.47,52.93],[1.68,52.74],[1.56,52.1],[1.05,51.81],[1.45,51.29],[0.55,50.77],[-0.79,50.77],[-2.49,50.5],[-2.96,50.7],[-3.62,50.23],[-4.54,50.34],[-5.25,49.96],[-5.78,50.16],[-4.31,51.21],[-3.41,51.43],[-4.98,51.59],[-5.27,51.99],[-4.22,52.3],[-4.77,52.84],[-4.58,53.5],[-3.09,53.4],[-2.95,53.98],[-3.63,54.62],[-4.84,54.79],[-5.08,55.06],[-4.72,55.51],[-5.05,55.78],[-5.59,55.31],[-5.64,56.28],[-6.15,56.79],[-5.79,57.82],[-5.01,58.63],[-4.21,58.55],[-3.01,58.63]],[[-79.27,62.16],[-79.66,61.63],[-80.1,61.72],[-80.36,62.02],[-80.32,62.09],[-79.93,62.39],[-79.52,62.36],[-79.27,62.16]],[[-171.73,63.78],[-171.11,63.59],[-170.49,63.69],[-169.68,63.43],[-168.69,63.3],[-168.77,63.19],[-169.53,62.98],[-170.29,63.19],[-170.67,63.38],[-171.55,63.32],[-171.79,63.41],[-171.73,63.78]],[[-85.16,65.66],[-84.98,65.22],[-84.46,65.37],[-83.88,65.11],[-82.79,64.77],[-81.64,64.46],[-81.55,63.98],[-80.82,64.06],[-80.1,63.73],[-80.99,63.41],[-82.55,63.65],[-83.11,64.1],[-84.1,63.57],[-85.52,63.05],[-85.87,63.64],[-87.22,63.54],[-86.35,64.04],[-86.22,64.82],[-85.88,65.74],[-85.16,65.66]],[[-14.51,66.46],[-14.74,65.81],[-13.61,65.13],[-14.91,64.36],[-17.79,63.68],[-18.66,63.5],[-19.97,63.64],[-22.76,63.96],[-21.78,64.4],[-23.96,64.89],[-22.18,65.08],[-22.23,65.38],[-24.33,65.61],[-23.65,66.26],[-22.13,66.41],[-20.58,65.73],[-19.06,66.28],[-17.8,65.99],[-16.17,66.53],[-14.51,66.46]],[[-75.87,67.15],[-76.99,67.1],[-77.24,67.59],[-76.81,68.15],[-75.9,68.29],[-75.11,68.01],[-75.1,67.58],[-75.22,67.44],[-75.87,67.15]],[[-175.01,66.58],[-174.34,66.34],[-174.57,67.06],[-171.86,66.91],[-169.9,65.98],[-170.89,65.54],[-172.53,65.44],[-172.56,64.46],[-172.96,64.25],[-173.89,64.28],[-174.65,64.63],[-175.98,64.92],[-176.21,65.36],[-177.22,65.52],[-178.36,65.39],[-178.9,65.74],[-178.69,66.11],[-179.88,65.87],[-179.43,65.4],[-180,64.98],[-180,68.96],[-177.55,68.2],[-174.93,67.21],[-175.01,66.58]],[[-95.65,69.11],[-96.27,68.76],[-97.62,69.06],[-98.43,68.95],[-99.8,69.4],[-98.92,69.71],[-98.22,70.14],[-97.16,69.86],[-96.56,69.68],[-96.26,69.49],[-95.65,69.11]],[[-178.69,70.89],[-180,70.83],[-180,71.52],[-179.87,71.56],[-179.02,71.56],[-177.58,71.27],[-177.66,71.13],[-178.69,70.89]],[[-90.55,69.5],[-90.55,68.48],[-89.22,69.26],[-88.02,68.62],[-88.32,67.87],[-87.35,67.2],[-86.31,67.92],[-85.58,68.78],[-85.52,69.88],[-84.1,69.81],[-82.62,69.66],[-81.28,69.16],[-81.22,68.67],[-81.96,68.13],[-81.26,67.6],[-81.39,67.11],[-83.34,66.41],[-84.74,66.26],[-85.77,66.56],[-86.07,66.06],[-87.03,65.21],[-87.32,64.78],[-88.48,64.1],[-89.91,64.03],[-90.7,63.61],[-90.77,62.96],[-91.93,62.84],[-93.16,62.02],[-94.24,60.9],[-94.63,60.11],[-94.68,58.95],[-93.22,58.78],[-92.76,57.85],[-92.3,57.09],[-90.9,57.28],[-89.04,56.85],[-88.04,56.47],[-87.32,56],[-86.07,55.72],[-85.01,55.3],[-83.36,55.24],[-82.27,55.15],[-82.44,54.28],[-82.12,53.28],[-81.4,52.16],[-79.91,51.21],[-79.14,51.53],[-78.6,52.56],[-79.12,54.14],[-79.83,54.67],[-78.23,55.14],[-77.1,55.84],[-76.54,56.53],[-76.62,57.2],[-77.3,58.05],[-78.52,58.8],[-77.34,59.85],[-77.77,60.76],[-78.11,62.32],[-77.41,62.55],[-75.7,62.28],[-74.67,62.18],[-73.84,62.44],[-72.91,62.11],[-71.68,61.53],[-71.37,61.14],[-69.59,61.06],[-69.62,60.22],[-69.29,58.96],[-68.37,58.8],[-67.65,58.21],[-66.2,58.77],[-65.25,59.87],[-64.58,60.34],[-63.8,59.44],[-62.5,58.17],[-61.4,56.97],[-61.8,56.34],[-60.47,55.78],[-59.57,55.2],[-57.98,54.95],[-57.33,54.63],[-56.94,53.78],[-56.16,53.65],[-55.76,53.27],[-55.68,52.15],[-56.41,51.77],[-57.13,51.42],[-58.77,51.06],[-60.03,50.24],[-61.72,50.08],[-63.86,50.29],[-65.36,50.3],[-66.4,50.23],[-67.24,49.51],[-68.51,49.07],[-69.95,47.74],[-71.1,46.82],[-70.26,46.99],[-68.65,48.3],[-66.55,49.13],[-65.06,49.23],[-64.17,48.74],[-65.12,48.07],[-64.8,46.99],[-64.47,46.24],[-63.17,45.74],[-61.52,45.88],[-60.52,47.01],[-60.45,46.28],[-59.8,45.92],[-61.04,45.27],[-63.25,44.67],[-64.25,44.27],[-65.36,43.55],[-66.12,43.62],[-66.16,44.47],[-64.43,45.29],[-66.03,45.26],[-67.14,45.14],[-66.96,44.81],[-68.03,44.33],[-69.06,43.98],[-70.12,43.68],[-70.69,43.03],[-70.81,42.87],[-70.83,42.34],[-70.49,41.81],[-70.08,41.78],[-70.18,42.15],[-69.88,41.92],[-69.97,41.64],[-70.64,41.48],[-71.12,41.49],[-71.86,41.32],[-72.29,41.27],[-72.88,41.22],[-73.71,40.93],[-72.24,41.12],[-71.95,40.93],[-73.34,40.63],[-73.98,40.63],[-73.95,40.75],[-74.26,40.47],[-73.96,40.43],[-74.18,39.71],[-74.91,38.94],[-74.98,39.2],[-75.2,39.25],[-75.53,39.5],[-75.32,38.96],[-75.08,38.78],[-75.06,38.4],[-75.38,38.02],[-75.94,37.22],[-76.03,37.26],[-75.72,37.94],[-76.23,38.32],[-76.35,39.15],[-76.54,38.72],[-76.33,38.08],[-76.96,38.23],[-76.3,37.92],[-76.26,36.97],[-75.97,36.9],[-75.87,36.55],[-75.73,35.55],[-76.36,34.81],[-77.4,34.51],[-78.05,33.93],[-78.55,33.86],[-79.06,33.49],[-79.2,33.16],[-80.3,32.51],[-80.86,32.03],[-81.34,31.44],[-81.49,30.73],[-81.31,30.04],[-80.98,29.18],[-80.54,28.47],[-80.53,28.04],[-80.06,26.88],[-80.09,26.21],[-80.13,25.82],[-80.38,25.21],[-80.68,25.08],[-81.17,25.2],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.71,27.5],[-82.86,27.89],[-82.65,28.55],[-82.93,29.1],[-83.71,29.94],[-84.1,30.09],[-85.11,29.64],[-85.29,29.69],[-85.77,30.15],[-86.4,30.4],[-87.53,30.27],[-88.42,30.38],[-89.18,30.32],[-89.6,30.18],[-89.41,29.89],[-89.43,29.49],[-89.22,29.29],[-89.41,29.16],[-89.78,29.31],[-90.15,29.12],[-90.88,29.15],[-91.63,29.68],[-92.5,29.55],[-93.23,29.78],[-93.85,29.71],[-94.69,29.48],[-95.6,28.74],[-96.59,28.31],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.14,25.87],[-97.14,25.87],[-97.53,24.99],[-97.7,24.27],[-97.78,22.93],[-97.87,22.44],[-97.7,21.9],[-97.39,21.41],[-97.19,20.64],[-96.53,19.89],[-96.29,19.32],[-95.9,18.83],[-94.84,18.56],[-94.43,18.14],[-93.55,18.42],[-92.79,18.52],[-92.04,18.7],[-91.41,18.88],[-90.77,19.28],[-90.53,19.87],[-90.45,20.71],[-90.28,21],[-89.6,21.26],[-88.54,21.49],[-87.66,21.46],[-87.05,21.54],[-86.81,21.33],[-86.85,20.85],[-87.38,20.26],[-87.62,19.65],[-87.44,19.47],[-87.59,19.04],[-87.84,18.26],[-88.09,18.52],[-88.3,18.5],[-88.3,18.35],[-88.11,18.35],[-88.12,18.08],[-88.29,17.64],[-88.2,17.49],[-88.3,17.13],[-88.24,17.04],[-88.36,16.53],[-88.55,16.27],[-88.73,16.23],[-88.93,15.89],[-88.6,15.71],[-88.52,15.86],[-88.22,15.73],[-88.12,15.69],[-87.9,15.86],[-87.62,15.88],[-87.52,15.8],[-87.37,15.85],[-86.9,15.76],[-86.44,15.78],[-86.12,15.89],[-86,16.01],[-85.68,15.95],[-85.44,15.89],[-85.18,15.91],[-84.98,16],[-84.53,15.86],[-84.37,15.84],[-84.06,15.65],[-83.77,15.42],[-83.41,15.27],[-83.15,15],[-83.23,14.9],[-83.28,14.68],[-83.18,14.31],[-83.41,13.97],[-83.52,13.57],[-83.55,13.13],[-83.5,12.87],[-83.47,12.42],[-83.63,12.32],[-83.72,11.89],[-83.65,11.63],[-83.86,11.37],[-83.81,11.1],[-83.66,10.94],[-83.4,10.4],[-83.02,9.99],[-82.55,9.57],[-82.19,9.21],[-82.21,9],[-81.81,8.95],[-81.71,9.03],[-81.44,8.79],[-80.95,8.86],[-80.52,9.11],[-79.91,9.31],[-79.57,9.61],[-79.02,9.55],[-79.06,9.45],[-78.5,9.42],[-78.06,9.25],[-77.73,8.95],[-77.35,8.67],[-76.84,8.64],[-76.09,9.34],[-75.67,9.44],[-75.66,9.77],[-75.48,10.62],[-74.91,11.08],[-74.28,11.1],[-74.2,11.31],[-73.41,11.23],[-72.63,11.73],[-72.24,11.96],[-71.75,12.44],[-71.4,12.38],[-71.14,12.11],[-71.33,11.78],[-71.36,11.54],[-71.95,11.42],[-71.62,10.97],[-71.63,10.45],[-72.07,9.87],[-71.7,9.07],[-71.26,9.14],[-71.04,9.86],[-71.35,10.21],[-71.4,10.97],[-70.16,11.38],[-70.29,11.85],[-69.94,12.16],[-69.58,11.46],[-68.88,11.44],[-68.23,10.89],[-68.19,10.55],[-67.3,10.55],[-66.23,10.65],[-65.66,10.2],[-64.89,10.08],[-64.33,10.39],[-64.32,10.64],[-63.08,10.7],[-61.88,10.72],[-62.73,10.42],[-62.39,9.95],[-61.59,9.87],[-60.83,9.38],[-60.67,8.58],[-60.15,8.6],[-59.76,8.37],[-59.1,8],[-58.48,7.35],[-58.45,6.83],[-58.08,6.81],[-57.54,6.32],[-57.15,5.97],[-55.95,5.77],[-55.84,5.95],[-55.03,6.03],[-53.96,5.76],[-53.62,5.65],[-52.88,5.41],[-51.82,4.57],[-51.66,4.16],[-51.32,4.2],[-51.07,3.65],[-50.51,1.9],[-49.97,1.74],[-49.95,1.05],[-50.7,0.22],[-50.39,-0.08],[-48.62,-0.24],[-48.58,-1.24],[-47.82,-0.58],[-46.57,-0.94],[-44.91,-1.55],[-44.42,-2.14],[-44.58,-2.69],[-43.42,-2.38],[-41.47,-2.91],[-39.98,-2.87],[-38.5,-3.7],[-37.22,-4.82],[-36.45,-5.11],[-35.6,-5.15],[-35.24,-5.46],[-34.9,-6.74],[-34.73,-7.34],[-35.13,-9],[-35.64,-9.65],[-37.05,-11.04],[-37.68,-12.17],[-38.42,-13.04],[-38.67,-13.06],[-38.95,-13.79],[-38.88,-15.67],[-39.16,-17.21],[-39.27,-17.87],[-39.58,-18.26],[-39.76,-19.6],[-40.77,-20.9],[-40.94,-21.94],[-41.75,-22.37],[-41.99,-22.97],[-43.07,-22.97],[-44.65,-23.35],[-45.35,-23.8],[-46.47,-24.09],[-47.65,-24.89],[-48.5,-25.88],[-48.64,-26.62],[-48.47,-27.18],[-48.66,-28.19],[-48.89,-28.67],[-49.59,-29.22],[-50.7,-30.98],[-51.58,-31.78],[-52.26,-32.25],[-52.71,-33.2],[-53.37,-33.77],[-53.81,-34.4],[-54.94,-34.95],[-55.67,-34.75],[-56.22,-34.86],[-57.14,-34.43],[-57.82,-34.46],[-58.43,-33.91],[-58.5,-34.43],[-57.23,-35.29],[-57.36,-35.98],[-56.74,-36.41],[-56.79,-36.9],[-57.75,-38.18],[-59.23,-38.72],[-61.24,-38.93],[-62.34,-38.83],[-62.13,-39.42],[-62.33,-40.17],[-62.15,-40.68],[-62.75,-41.03],[-63.77,-41.17],[-64.73,-40.8],[-65.12,-41.06],[-64.98,-42.06],[-64.3,-42.36],[-63.76,-42.04],[-63.46,-42.56],[-64.38,-42.87],[-65.18,-43.5],[-65.33,-44.5],[-65.57,-45.04],[-66.51,-45.04],[-67.29,-45.55],[-67.58,-46.3],[-66.6,-47.03],[-65.64,-47.24],[-65.99,-48.13],[-67.17,-48.7],[-67.82,-49.87],[-68.73,-50.26],[-69.14,-50.73],[-68.82,-51.77],[-68.15,-52.35],[-68.57,-52.3],[-69.46,-52.29],[-69.94,-52.54],[-70.85,-52.9],[-71.01,-53.83],[-71.43,-53.86],[-72.56,-53.53],[-73.7,-52.84],[-74.95,-52.26],[-75.26,-51.63],[-74.98,-51.04],[-75.48,-50.38],[-75.61,-48.67],[-75.18,-47.71],[-74.13,-46.94],[-75.64,-46.65],[-74.69,-45.76],[-74.35,-44.1],[-73.24,-44.45],[-72.72,-42.38],[-73.39,-42.12],[-73.7,-43.37],[-74.33,-43.22],[-74.02,-41.79],[-73.68,-39.94],[-73.22,-39.26],[-73.51,-38.28],[-73.59,-37.16],[-73.17,-37.12],[-72.55,-35.51],[-71.86,-33.91],[-71.44,-32.42],[-71.67,-30.92],[-71.37,-30.1],[-71.49,-28.86],[-70.91,-27.64],[-70.72,-25.71],[-70.4,-23.63],[-70.09,-21.39],[-70.16,-19.76],[-70.37,-18.35],[-71.38,-17.77],[-71.46,-17.36],[-73.44,-16.36],[-75.24,-15.27],[-76.01,-14.65],[-76.42,-13.82],[-76.26,-13.53],[-77.11,-12.22],[-78.09,-10.38],[-79.04,-8.39],[-79.45,-7.93],[-79.76,-7.19],[-80.54,-6.54],[-81.25,-6.14],[-80.93,-5.69],[-81.41,-4.74],[-81.1,-4.04],[-80.3,-3.4],[-79.77,-2.66],[-79.99,-2.22],[-80.37,-2.69],[-80.97,-2.25],[-80.76,-1.97],[-80.93,-1.06],[-80.58,-0.91],[-80.4,-0.28],[-80.02,0.36],[-80.09,0.77],[-79.54,0.98],[-78.86,1.38],[-78.99,1.69],[-78.62,1.77],[-78.66,2.27],[-78.43,2.63],[-77.93,2.7],[-77.51,3.33],[-77.13,3.85],[-77.5,4.09],[-77.31,4.67],[-77.53,5.58],[-77.32,5.85],[-77.48,6.69],[-77.88,7.22],[-78.21,7.51],[-78.43,8.05],[-78.18,8.32],[-78.44,8.39],[-78.62,8.72],[-79.12,9],[-79.56,8.93],[-79.76,8.58],[-80.16,8.33],[-80.38,8.3],[-80.48,8.09],[-80,7.55],[-80.28,7.42],[-80.42,7.27],[-80.89,7.22],[-81.06,7.82],[-81.19,7.65],[-81.52,7.71],[-81.72,8.11],[-82.13,8.18],[-82.39,8.29],[-82.82,8.29],[-82.85,8.07],[-82.97,8.23],[-83.51,8.45],[-83.71,8.66],[-83.6,8.83],[-83.63,9.05],[-83.91,9.29],[-84.3,9.49],[-84.65,9.62],[-84.71,9.91],[-84.98,10.09],[-84.91,9.8],[-85.11,9.56],[-85.34,9.83],[-85.66,9.93],[-85.8,10.13],[-85.79,10.44],[-85.66,10.75],[-85.94,10.9],[-85.71,11.09],[-86.06,11.4],[-86.53,11.81],[-86.75,12.14],[-87.17,12.46],[-87.67,12.91],[-87.56,13.06],[-87.39,12.91],[-87.32,12.98],[-87.49,13.3],[-87.79,13.38],[-87.9,13.15],[-88.48,13.16],[-88.84,13.26],[-89.26,13.46],[-89.81,13.52],[-90.1,13.74],[-90.61,13.91],[-91.23,13.93],[-91.69,14.13],[-92.23,14.54],[-93.36,15.62],[-93.88,15.94],[-94.69,16.2],[-95.25,16.13],[-96.05,15.75],[-96.56,15.65],[-97.26,15.92],[-98.01,16.11],[-98.95,16.57],[-99.7,16.71],[-100.83,17.17],[-101.67,17.65],[-101.92,17.92],[-102.48,17.98],[-103.5,18.29],[-103.92,18.75],[-104.99,19.32],[-105.49,19.95],[-105.73,20.43],[-105.4,20.53],[-105.5,20.82],[-105.27,21.08],[-105.27,21.42],[-105.6,21.87],[-105.69,22.27],[-106.03,22.77],[-106.91,23.77],[-107.92,24.55],[-108.4,25.17],[-109.26,25.58],[-109.44,25.82],[-109.29,26.44],[-109.8,26.68],[-110.39,27.16],[-110.64,27.86],[-111.18,27.94],[-111.76,28.47],[-112.23,28.95],[-112.27,29.27],[-112.81,30.02],[-113.16,30.79],[-113.15,31.17],[-113.87,31.57],[-114.21,31.52],[-114.78,31.8],[-114.94,31.39],[-114.77,30.91],[-114.67,30.16],[-114.33,29.75],[-113.59,29.06],[-113.42,28.83],[-113.27,28.75],[-113.14,28.41],[-112.96,28.43],[-112.76,27.78],[-112.46,27.53],[-112.24,27.17],[-111.62,26.66],[-111.28,25.73],[-110.99,25.29],[-110.71,24.83],[-110.66,24.3],[-110.17,24.27],[-109.77,23.81],[-109.41,23.36],[-109.43,23.19],[-109.85,22.82],[-110.03,22.82],[-110.29,23.43],[-110.95,24],[-111.67,24.48],[-112.18,24.74],[-112.15,25.47],[-112.3,26.01],[-112.78,26.32],[-113.46,26.77],[-113.6,26.64],[-113.85,26.9],[-114.47,27.14],[-115.06,27.72],[-114.98,27.8],[-114.57,27.74],[-114.2,28.12],[-114.16,28.57],[-114.93,29.28],[-115.52,29.56],[-115.89,30.18],[-116.26,30.84],[-116.72,31.64],[-117.13,32.54],[-117.3,33.05],[-117.94,33.62],[-118.41,33.74],[-118.52,34.03],[-119.08,34.08],[-119.44,34.35],[-120.37,34.45],[-120.62,34.61],[-120.74,35.16],[-121.71,36.16],[-122.55,37.55],[-122.51,37.78],[-122.95,38.11],[-123.73,38.95],[-123.87,39.77],[-124.4,40.31],[-124.18,41.14],[-124.21,42],[-124.53,42.77],[-124.14,43.71],[-123.9,45.52],[-124.08,46.86],[-124.4,47.72],[-124.69,48.18],[-124.57,48.38],[-123.12,48.04],[-122.59,47.1],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-122.97,49],[-124.91,49.98],[-125.62,50.42],[-127.44,50.83],[-127.99,51.72],[-127.85,52.33],[-129.13,52.76],[-129.31,53.56],[-130.51,54.29],[-130.54,54.8],[-131.09,55.18],[-131.97,55.5],[-132.25,56.37],[-133.54,57.18],[-134.08,58.12],[-135.04,58.19],[-136.63,58.21],[-137.8,58.5],[-139.87,59.54],[-140.83,59.73],[-142.57,60.08],[-143.96,60],[-145.93,60.46],[-147.11,60.88],[-148.22,60.67],[-148.02,59.98],[-148.57,59.91],[-149.73,59.71],[-150.61,59.37],[-151.72,59.16],[-151.86,59.75],[-151.41,60.73],[-150.35,61.03],[-150.62,61.28],[-151.9,60.73],[-152.58,60.06],[-154.02,59.35],[-153.29,58.86],[-154.23,58.15],[-155.31,57.73],[-156.31,57.42],[-156.56,56.98],[-158.12,56.46],[-158.43,55.99],[-159.6,55.57],[-160.29,55.64],[-161.22,55.36],[-162.24,55.02],[-163.07,54.69],[-164.79,54.4],[-164.94,54.57],[-163.85,55.04],[-162.87,55.35],[-161.8,55.9],[-160.56,56.01],[-160.07,56.42],[-158.68,57.02],[-158.46,57.22],[-157.72,57.57],[-157.55,58.33],[-157.04,58.92],[-158.19,58.62],[-158.52,58.79],[-159.06,58.42],[-159.71,58.93],[-159.98,58.57],[-160.36,59.07],[-161.35,58.67],[-161.97,58.67],[-162.05,59.27],[-161.87,59.63],[-162.52,59.99],[-163.82,59.8],[-164.66,60.27],[-165.35,60.51],[-165.35,61.07],[-166.12,61.5],[-165.73,62.08],[-164.92,62.63],[-164.56,63.15],[-163.75,63.22],[-163.07,63.06],[-162.26,63.54],[-161.53,63.46],[-160.77,63.77],[-160.96,64.22],[-161.52,64.4],[-160.78,64.79],[-161.39,64.78],[-162.45,64.56],[-162.76,64.34],[-163.55,64.56],[-164.96,64.45],[-166.43,64.69],[-166.84,65.09],[-168.11,65.67],[-166.71,66.09],[-164.47,66.58],[-163.65,66.58],[-163.79,66.08],[-161.68,66.12],[-162.49,66.74],[-163.72,67.12],[-164.43,67.62],[-165.39,68.04],[-166.76,68.36],[-166.2,68.88],[-164.43,68.92],[-163.17,69.37],[-162.93,69.86],[-161.91,70.33],[-160.93,70.45],[-159.04,70.89],[-158.12,70.82],[-156.58,71.36],[-155.07,71.15],[-154.34,70.7],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.61,70.21],[-145.69,70.12],[-144.92,69.99],[-143.59,70.15],[-142.07,69.85],[-140.99,69.71],[-139.12,69.47],[-137.55,68.99],[-136.5,68.9],[-135.63,69.32],[-134.41,69.63],[-132.93,69.51],[-131.43,69.94],[-129.79,70.19],[-129.11,69.78],[-128.36,70.01],[-128.14,70.48],[-127.45,70.38],[-125.76,69.48],[-124.42,70.16],[-124.29,69.4],[-123.06,69.56],[-122.68,69.86],[-121.47,69.8],[-119.94,69.38],[-117.6,69.01],[-116.23,68.84],[-115.25,68.91],[-113.9,68.4],[-115.3,67.9],[-113.5,67.69],[-110.8,67.81],[-109.95,67.98],[-108.88,67.38],[-107.79,67.89],[-108.81,68.31],[-108.17,68.65],[-106.95,68.7],[-106.15,68.8],[-105.34,68.56],[-104.34,68.02],[-103.22,68.1],[-101.45,67.65],[-99.9,67.81],[-98.44,67.78],[-98.56,68.4],[-97.67,68.58],[-96.12,68.24],[-96.13,67.29],[-95.49,68.09],[-94.68,68.06],[-94.23,69.07],[-95.3,69.69],[-96.47,70.09],[-96.39,71.19],[-95.21,71.92],[-93.89,71.76],[-92.88,71.32],[-91.52,70.19],[-92.41,69.7],[-90.55,69.5]],[[-114.17,73.12],[-114.67,72.65],[-112.44,72.96],[-111.05,72.45],[-109.92,72.96],[-109.01,72.63],[-108.19,71.65],[-107.69,72.07],[-108.4,73.09],[-107.52,73.24],[-106.52,73.08],[-105.4,72.67],[-104.77,71.7],[-104.46,70.99],[-102.79,70.5],[-100.98,70.02],[-101.09,69.58],[-102.73,69.5],[-102.09,69.12],[-102.43,68.75],[-104.24,68.91],[-105.96,69.18],[-107.12,69.12],[-109,68.78],[-111.97,68.6],[-113.31,68.54],[-113.85,69.01],[-115.22,69.28],[-116.11,69.17],[-117.34,69.96],[-116.67,70.07],[-115.13,70.24],[-113.72,70.19],[-112.42,70.37],[-114.35,70.6],[-116.49,70.52],[-117.9,70.54],[-118.43,70.91],[-116.11,71.31],[-117.66,71.3],[-119.4,71.56],[-118.56,72.31],[-117.87,72.71],[-115.19,73.31],[-114.17,73.12]],[[-76.34,73.1],[-76.25,72.83],[-77.31,72.86],[-78.39,72.88],[-79.49,72.74],[-79.78,72.8],[-80.88,73.33],[-80.83,73.69],[-80.35,73.76],[-78.06,73.65],[-76.34,73.1]],[[-86.56,73.16],[-85.77,72.53],[-84.85,73.34],[-82.32,73.75],[-80.6,72.72],[-80.75,72.06],[-78.77,72.35],[-77.82,72.75],[-75.61,72.24],[-74.23,71.77],[-74.1,71.33],[-72.24,71.56],[-71.2,70.92],[-68.79,70.53],[-67.91,70.12],[-66.97,69.19],[-68.81,68.72],[-66.45,68.07],[-64.86,67.85],[-63.42,66.93],[-61.85,66.86],[-62.16,66.16],[-63.92,65],[-65.15,65.43],[-66.72,66.39],[-68.02,66.26],[-68.14,65.69],[-67.09,65.11],[-65.73,64.65],[-65.32,64.38],[-64.67,63.39],[-65.01,62.67],[-66.28,62.95],[-68.78,63.75],[-67.37,62.88],[-66.33,62.28],[-66.17,61.93],[-68.88,62.33],[-71.02,62.91],[-72.24,63.4],[-71.89,63.68],[-73.38,64.19],[-74.83,64.68],[-74.82,64.39],[-77.71,64.23],[-78.56,64.57],[-77.9,65.31],[-76.02,65.33],[-73.96,65.45],[-74.29,65.81],[-73.94,66.31],[-72.65,67.28],[-72.93,67.73],[-73.31,68.07],[-74.84,68.55],[-76.87,68.89],[-76.23,69.15],[-77.29,69.77],[-78.17,69.83],[-78.96,70.17],[-79.49,69.87],[-81.31,69.74],[-84.94,69.97],[-87.06,70.26],[-88.68,70.41],[-89.51,70.76],[-88.47,71.22],[-89.89,71.22],[-90.21,72.24],[-89.44,73.13],[-88.41,73.54],[-85.83,73.8],[-86.56,73.16]],[[-100.36,73.84],[-99.16,73.63],[-97.38,73.76],[-97.12,73.47],[-98.05,72.99],[-96.54,72.56],[-96.72,71.66],[-98.36,71.27],[-99.32,71.36],[-100.01,71.74],[-102.5,72.51],[-102.48,72.83],[-100.44,72.71],[-101.54,73.36],[-100.36,73.84]],[[143.6,73.21],[142.09,73.21],[140.04,73.32],[139.86,73.37],[140.81,73.77],[142.06,73.86],[143.48,73.48],[143.6,73.21]],[[-93.2,72.77],[-94.27,72.02],[-95.41,72.06],[-96.03,72.94],[-96.02,73.44],[-95.5,73.86],[-94.5,74.13],[-92.42,74.1],[-90.51,73.86],[-92,72.97],[-93.2,72.77]],[[-120.46,71.4],[-123.09,70.9],[-123.62,71.34],[-125.93,71.87],[-125.59,72.19],[-124.81,73.02],[-123.94,73.68],[-124.92,74.29],[-121.54,74.45],[-120.11,74.24],[-117.56,74.19],[-116.58,73.9],[-115.51,73.48],[-116.77,73.22],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]],[[-93.61,74.98],[-94.16,74.59],[-95.61,74.67],[-96.82,74.93],[-96.29,75.38],[-94.85,75.65],[-93.98,75.3],[-93.61,74.98]],[[145.09,75.56],[144.3,74.82],[140.61,74.85],[138.96,74.61],[136.97,75.26],[137.51,75.95],[138.83,76.14],[141.47,76.09],[145.09,75.56]],[[-98.5,76.72],[-97.74,76.26],[-97.7,75.74],[-98.16,75],[-99.81,74.9],[-100.88,75.06],[-100.86,75.64],[-102.5,75.56],[-102.57,76.34],[-101.49,76.31],[-99.98,76.65],[-98.58,76.59],[-98.5,76.72]],[[-108.21,76.2],[-107.82,75.85],[-106.93,76.01],[-105.88,75.97],[-105.7,75.48],[-106.31,75.01],[-109.7,74.85],[-112.22,74.42],[-113.74,74.39],[-113.87,74.72],[-111.79,75.16],[-116.31,75.04],[-117.71,75.22],[-116.35,76.2],[-115.4,76.48],[-112.59,76.14],[-110.81,75.55],[-109.07,75.47],[-110.5,76.43],[-109.58,76.79],[-108.55,76.68],[-108.21,76.2]],[[57.54,70.72],[56.94,70.63],[53.68,70.76],[53.41,71.21],[51.6,71.47],[51.46,72.01],[52.48,72.23],[52.44,72.77],[54.43,73.63],[53.51,73.75],[55.9,74.63],[55.63,75.08],[57.87,75.61],[61.17,76.25],[64.5,76.44],[66.21,76.81],[68.16,76.94],[68.85,76.54],[68.18,76.23],[64.64,75.74],[61.58,75.26],[58.48,74.31],[56.99,73.33],[55.42,72.37],[55.62,71.54],[57.54,70.72]],[[-94.68,77.1],[-93.57,76.78],[-91.61,76.78],[-90.74,76.45],[-90.97,76.07],[-89.82,75.85],[-89.19,75.61],[-87.84,75.57],[-86.38,75.48],[-84.79,75.7],[-82.75,75.78],[-81.13,75.71],[-80.06,75.34],[-79.83,74.92],[-80.46,74.66],[-81.95,74.44],[-83.23,74.56],[-86.1,74.41],[-88.15,74.39],[-89.76,74.52],[-92.42,74.84],[-92.77,75.39],[-92.89,75.88],[-93.89,76.32],[-95.96,76.44],[-97.12,76.75],[-96.75,77.16],[-94.68,77.1]],[[-116.2,77.65],[-116.34,76.88],[-117.11,76.53],[-118.04,76.48],[-119.9,76.05],[-121.5,75.9],[-122.85,76.12],[-122.85,76.12],[-121.16,76.86],[-119.1,77.51],[-117.57,77.5],[-116.2,77.65]],[[106.97,76.97],[107.24,76.48],[108.15,76.72],[111.08,76.71],[113.33,76.22],[114.13,75.85],[113.89,75.33],[112.78,75.03],[110.15,74.48],[109.4,74.18],[110.64,74.04],[112.12,73.79],[113.02,73.98],[113.53,73.34],[113.97,73.59],[115.57,73.75],[118.78,73.59],[119.02,73.12],[123.2,72.97],[123.26,73.74],[125.38,73.56],[126.98,73.57],[128.59,73.04],[129.05,72.4],[128.46,71.98],[129.72,71.19],[131.29,70.79],[132.25,71.84],[133.86,71.39],[135.56,71.66],[137.5,71.35],[138.23,71.63],[139.87,71.49],[139.15,72.42],[140.47,72.85],[149.5,72.2],[150.35,71.61],[152.97,70.84],[157.01,71.03],[159,70.87],[159.83,70.45],[159.71,69.72],[160.94,69.44],[162.28,69.64],[164.05,69.67],[165.94,69.47],[167.84,69.58],[169.58,68.69],[170.82,69.01],[170.01,69.65],[170.45,70.1],[173.64,69.82],[175.72,69.88],[178.6,69.4],[180,68.96],[180,64.98],[179.99,64.97],[178.71,64.53],[177.41,64.61],[178.31,64.08],[178.91,63.25],[179.37,62.98],[179.49,62.57],[179.23,62.3],[177.36,62.52],[174.57,61.77],[173.68,61.65],[172.15,60.95],[170.7,60.34],[170.33,59.88],[168.9,60.57],[166.3,59.79],[165.84,60.16],[164.88,59.73],[163.54,59.87],[163.22,59.21],[162.02,58.24],[162.05,57.84],[163.19,57.62],[163.06,56.16],[162.13,56.12],[161.7,55.29],[162.12,54.86],[160.37,54.34],[160.02,53.2],[158.53,52.96],[158.23,51.94],[156.79,51.01],[156.42,51.7],[155.99,53.16],[155.43,55.38],[155.91,56.77],[156.76,57.36],[156.81,57.83],[158.36,58.06],[160.15,59.31],[161.87,60.34],[163.67,61.14],[164.47,62.55],[163.26,62.47],[162.66,61.64],[160.12,60.54],[159.3,61.77],[156.72,61.43],[154.22,59.76],[155.04,59.15],[152.81,58.88],[151.27,58.78],[151.34,59.5],[149.78,59.66],[148.54,59.16],[145.49,59.34],[142.2,59.04],[138.96,57.09],[135.13,54.73],[136.7,54.6],[137.19,53.98],[138.16,53.76],[138.8,54.25],[139.9,54.19],[141.35,53.09],[141.38,52.24],[140.6,51.24],[140.51,50.05],[140.06,48.45],[138.55,47],[138.22,46.31],[136.86,45.14],[135.52,43.99],[134.87,43.4],[133.54,42.81],[132.91,42.8],[132.28,43.28],[130.94,42.55],[130.78,42.22],[130.4,42.28],[129.97,41.94],[129.67,41.6],[129.71,40.88],[129.19,40.66],[129.01,40.49],[128.63,40.19],[127.97,40.03],[127.53,39.76],[127.5,39.32],[127.39,39.21],[127.78,39.05],[128.35,38.61],[129.21,37.43],[129.46,36.78],[129.47,35.63],[129.09,35.08],[128.19,34.89],[127.39,34.48],[126.49,34.39],[126.37,34.93],[126.56,35.68],[126.12,36.73],[126.86,36.89],[126.17,37.75],[125.69,37.94],[125.57,37.75],[125.28,37.67],[125.24,37.86],[124.98,37.95],[124.71,38.11],[124.99,38.55],[125.22,38.67],[125.13,38.85],[125.39,39.39],[125.32,39.55],[124.74,39.66],[124.27,39.93],[122.87,39.64],[122.13,39.17],[121.05,38.9],[121.59,39.36],[121.38,39.75],[122.17,40.42],[121.64,40.95],[120.77,40.59],[119.64,39.9],[119.02,39.25],[118.04,39.2],[117.53,38.74],[118.06,38.06],[118.88,37.9],[118.91,37.45],[119.7,37.16],[120.82,37.87],[121.71,37.48],[122.36,37.45],[122.52,36.93],[121.1,36.65],[120.64,36.11],[119.66,35.61],[119.15,34.91],[120.23,34.36],[120.62,33.38],[121.23,32.46],[121.91,31.69],[121.89,30.95],[121.26,30.68],[121.5,30.14],[122.09,29.83],[121.94,29.02],[121.68,28.23],[121.13,28.14],[120.4,27.05],[119.59,25.74],[118.66,24.55],[117.28,23.62],[115.89,22.78],[114.76,22.67],[114.15,22.22],[113.81,22.55],[113.24,22.05],[111.84,21.55],[110.79,21.4],[110.44,20.34],[109.89,20.28],[109.63,21.01],[109.86,21.4],[108.52,21.72],[108.05,21.55],[106.72,20.7],[105.88,19.75],[105.66,19.06],[106.43,18],[107.36,16.7],[108.27,16.08],[108.88,15.28],[109.34,13.43],[109.2,11.67],[108.37,11.01],[107.22,10.36],[106.41,9.53],[105.16,8.6],[104.8,9.24],[105.08,9.92],[104.33,10.49],[103.5,10.63],[103.09,11.15],[102.59,12.19],[101.69,12.65],[100.83,12.63],[100.98,13.41],[100.1,13.41],[100.02,12.31],[99.48,10.85],[99.15,9.96],[99.22,9.24],[99.87,9.21],[100.28,8.3],[100.46,7.43],[101.02,6.86],[101.62,6.74],[102.14,6.22],[102.37,6.13],[102.96,5.52],[103.38,4.86],[103.44,4.18],[103.33,3.73],[103.43,3.38],[103.5,2.79],[103.85,2.52],[104.25,1.63],[104.23,1.29],[103.52,1.23],[102.57,1.97],[101.39,2.76],[101.27,3.27],[100.7,3.94],[100.56,4.77],[100.2,5.31],[100.31,6.04],[100.09,6.46],[99.69,6.85],[99.52,7.34],[98.99,7.91],[98.5,8.38],[98.34,7.79],[98.15,8.35],[98.26,8.97],[98.55,9.93],[98.46,10.68],[98.76,11.44],[98.43,12.03],[98.51,13.12],[98.1,13.64],[97.78,14.84],[97.6,16.1],[97.16,16.93],[96.51,16.43],[95.37,15.71],[94.81,15.8],[94.19,16.04],[94.53,17.28],[94.32,18.21],[93.54,19.37],[93.66,19.73],[93.08,19.86],[92.37,20.67],[92.08,21.19],[92.03,21.7],[91.83,22.18],[91.42,22.77],[90.5,22.81],[90.59,22.39],[90.27,21.84],[89.85,22.04],[89.7,21.86],[89.42,21.97],[89.03,22.06],[88.89,21.69],[88.21,21.7],[86.98,21.5],[87.03,20.74],[86.5,20.15],[85.06,19.48],[83.94,18.3],[83.19,17.67],[82.19,17.02],[82.19,16.56],[81.69,16.31],[80.79,15.95],[80.32,15.9],[80.03,15.14],[80.23,13.84],[80.29,13.01],[79.86,12.06],[79.86,10.36],[79.34,10.31],[78.89,9.55],[79.19,9.22],[78.28,8.93],[77.94,8.25],[77.54,7.97],[76.59,8.9],[76.13,10.3],[75.75,11.31],[75.4,11.78],[74.86,12.74],[74.62,13.99],[74.44,14.62],[73.53,15.99],[73.12,17.93],[72.82,19.21],[72.82,20.42],[72.63,21.36],[71.18,20.76],[70.47,20.88],[69.16,22.09],[69.64,22.45],[69.35,22.84],[68.18,23.69],[67.44,23.94],[67.15,24.66],[66.37,25.43],[64.53,25.24],[62.91,25.22],[61.5,25.08],[59.62,25.38],[58.53,25.61],[57.4,25.74],[56.97,26.97],[56.49,27.14],[55.72,26.96],[54.72,26.48],[53.49,26.81],[52.48,27.58],[51.52,27.87],[50.85,28.81],[50.12,30.15],[49.58,29.99],[48.94,30.32],[48.57,29.93],[47.97,29.98],[48.18,29.53],[48.09,29.31],[48.42,28.55],[48.81,27.69],[49.3,27.46],[49.47,27.11],[50.15,26.69],[50.21,26.28],[50.11,25.94],[50.24,25.61],[50.53,25.33],[50.66,25],[50.81,24.75],[50.74,25.48],[51.01,26.01],[51.29,26.11],[51.59,25.8],[51.61,25.22],[51.39,24.63],[51.58,24.25],[51.76,24.29],[51.79,24.02],[52.58,24.18],[53.4,24.15],[54.01,24.12],[54.69,24.8],[55.44,25.44],[56.07,26.06],[56.36,26.4],[56.49,26.31],[56.39,25.9],[56.26,25.71],[56.4,24.92],[56.85,24.24],[57.4,23.88],[58.14,23.75],[58.73,23.57],[59.18,22.99],[59.45,22.66],[59.81,22.53],[59.81,22.31],[59.44,21.71],[59.28,21.43],[58.86,21.11],[58.49,20.43],[58.03,20.48],[57.83,20.24],[57.67,19.74],[57.79,19.07],[57.69,18.94],[57.23,18.95],[56.61,18.57],[56.51,18.09],[56.28,17.88],[55.66,17.88],[55.27,17.63],[55.27,17.23],[54.79,16.95],[54.24,17.05],[53.57,16.71],[53.11,16.65],[52.39,16.38],[52.19,15.94],[52.17,15.6],[51.17,15.18],[49.57,14.71],[48.68,14],[48.24,13.95],[47.94,14.01],[47.35,13.59],[46.72,13.4],[45.88,13.35],[45.63,13.29],[45.41,13.03],[45.14,12.95],[44.99,12.7],[44.49,12.72],[44.18,12.59],[43.48,12.64],[43.22,13.22],[43.25,13.77],[43.09,14.06],[42.89,14.8],[42.6,15.21],[42.81,15.26],[42.7,15.72],[42.82,15.91],[42.78,16.35],[42.65,16.77],[42.35,17.08],[42.27,17.47],[41.75,17.83],[41.22,18.67],[40.94,19.49],[40.25,20.17],[39.8,20.34],[39.14,21.29],[39.02,21.99],[39.07,22.58],[38.49,23.69],[38.02,24.08],[37.48,24.29],[37.15,24.86],[37.21,25.08],[36.93,25.6],[36.64,25.83],[36.25,26.57],[35.64,27.38],[35.13,28.06],[34.63,28.06],[34.79,28.61],[34.83,28.96],[34.96,29.36],[34.92,29.5],[34.64,29.1],[34.43,28.34],[34.15,27.82],[33.92,27.65],[33.59,27.97],[33.14,28.42],[32.42,29.85],[32.32,29.76],[32.73,28.71],[33.35,27.7],[34.1,26.14],[34.47,25.6],[34.8,25.03],[35.69,23.93],[35.49,23.75],[35.53,23.1],[36.69,22.2],[36.87,22],[37.19,21.02],[36.97,20.84],[37.11,19.81],[37.48,18.61],[37.86,18.37],[38.41,18],[38.99,16.84],[39.27,15.92],[39.81,15.44],[41.18,14.49],[41.73,13.92],[42.28,13.34],[42.59,13],[43.08,12.7],[43.32,12.39],[43.29,11.97],[42.72,11.74],[43.15,11.46],[43.47,11.28],[43.67,10.86],[44.12,10.45],[44.61,10.44],[45.56,10.7],[46.65,10.82],[47.53,11.13],[48.02,11.19],[48.38,11.38],[48.95,11.41],[49.27,11.43],[49.73,11.58],[50.26,11.68],[50.73,12.02],[51.11,12.02],[51.13,11.75],[51.04,11.17],[51.05,10.64],[50.83,10.28],[50.55,9.2],[50.07,8.08],[49.45,6.8],[48.59,5.34],[47.74,4.22],[46.56,2.86],[45.56,2.05],[44.07,1.05],[43.14,0.29],[42.04,-0.92],[41.81,-1.45],[41.59,-1.68],[40.88,-2.08],[40.64,-2.5],[40.26,-2.57],[40.12,-3.28],[39.8,-3.68],[39.6,-4.35],[39.2,-4.68],[38.74,-5.91],[38.8,-6.48],[39.44,-6.84],[39.47,-7.1],[39.19,-7.7],[39.25,-8.01],[39.19,-8.49],[39.54,-9.11],[39.95,-10.1],[40.32,-10.32],[40.48,-10.77],[40.44,-11.76],[40.56,-12.64],[40.6,-14.2],[40.78,-14.69],[40.48,-15.41],[40.09,-16.1],[39.45,-16.72],[38.54,-17.1],[37.41,-17.59],[36.28,-18.66],[35.9,-18.84],[35.2,-19.55],[34.79,-19.78],[34.7,-20.5],[35.18,-21.25],[35.37,-21.84],[35.39,-22.14],[35.56,-22.09],[35.53,-23.07],[35.37,-23.54],[35.61,-23.71],[35.46,-24.12],[35.04,-24.48],[34.22,-24.82],[33.01,-25.36],[32.57,-25.73],[32.66,-26.15],[32.92,-26.22],[32.83,-26.74],[32.58,-27.47],[32.46,-28.3],[32.2,-28.75],[31.52,-29.26],[31.33,-29.4],[30.9,-29.91],[30.62,-30.42],[30.06,-31.14],[28.93,-32.17],[28.22,-32.77],[27.46,-33.23],[26.42,-33.61],[25.91,-33.67],[25.78,-33.94],[25.17,-33.8],[24.68,-33.99],[23.59,-33.79],[22.99,-33.92],[22.57,-33.86],[21.54,-34.26],[20.69,-34.42],[20.07,-34.8],[19.62,-34.82],[19.19,-34.46],[18.86,-34.44],[18.42,-34],[18.38,-34.14],[18.24,-33.87],[18.25,-33.28],[17.93,-32.61],[18.25,-32.43],[18.22,-31.66],[17.57,-30.73],[17.06,-29.88],[17.06,-29.88],[16.35,-28.58],[15.6,-27.82],[15.21,-27.09],[14.99,-26.12],[14.74,-25.39],[14.41,-23.85],[14.39,-22.66],[14.26,-22.11],[13.87,-21.7],[13.35,-20.87],[12.83,-19.67],[12.61,-19.05],[11.79,-18.07],[11.73,-17.3],[11.64,-16.67],[11.78,-15.79],[12.12,-14.88],[12.18,-14.45],[12.5,-13.55],[12.74,-13.14],[13.31,-12.48],[13.63,-12.04],[13.74,-11.3],[13.69,-10.73],[13.39,-10.37],[13.12,-9.77],[12.88,-9.17],[12.93,-8.96],[13.24,-8.56],[12.93,-7.6],[12.73,-6.93],[12.23,-6.29],[12.32,-6.1],[12.18,-5.79],[11.92,-5.04],[11.09,-3.98],[10.07,-2.97],[9.41,-2.14],[8.8,-1.11],[8.83,-0.78],[9.05,-0.46],[9.29,0.27],[9.49,1.01],[9.31,1.16],[9.65,2.28],[9.8,3.07],[9.4,3.73],[8.95,3.9],[8.74,4.35],[8.49,4.5],[8.5,4.77],[7.46,4.41],[7.08,4.46],[6.7,4.24],[5.9,4.26],[5.36,4.89],[5.03,5.61],[4.33,6.27],[3.57,6.26],[2.69,6.26],[1.87,6.14],[1.06,5.93],[-0.51,5.34],[-1.06,5],[-1.96,4.71],[-2.86,4.99],[-3.31,4.98],[-4.01,5.18],[-4.65,5.17],[-5.83,4.99],[-6.53,4.71],[-7.52,4.34],[-7.71,4.36],[-7.97,4.36],[-9,4.83],[-9.91,5.59],[-10.77,6.14],[-11.44,6.79],[-11.71,6.86],[-12.43,7.26],[-12.95,7.8],[-13.12,8.16],[-13.25,8.9],[-13.69,9.49],[-14.07,9.89],[-14.33,10.02],[-14.58,10.21],[-14.69,10.66],[-14.84,10.88],[-15.13,11.04],[-15.66,11.46],[-16.09,11.52],[-16.31,11.81],[-16.31,11.96],[-16.61,12.17],[-16.68,12.38],[-16.84,13.15],[-16.71,13.6],[-17.13,14.37],[-17.62,14.73],[-17.19,14.92],[-16.7,15.62],[-16.46,16.14],[-16.55,16.67],[-16.27,17.17],[-16.15,18.11],[-16.26,19.1],[-16.38,19.59],[-16.28,20.09],[-16.54,20.57],[-17.06,21],[-17.02,21.42],[-16.97,21.89],[-16.59,22.16],[-16.26,22.68],[-16.33,23.02],[-15.98,23.72],[-15.43,24.36],[-15.09,24.52],[-14.82,25.1],[-14.8,25.64],[-14.44,26.25],[-13.77,26.62],[-13.14,27.64],[-12.62,28.04],[-11.69,28.15],[-10.9,28.83],[-10.4,29.1],[-9.56,29.93],[-9.81,31.18],[-9.43,32.04],[-9.3,32.56],[-8.66,33.24],[-7.65,33.7],[-6.91,34.11],[-6.24,35.15],[-5.93,35.76],[-5.19,35.76],[-4.59,35.33],[-3.64,35.4],[-2.6,35.18],[-2.17,35.17],[-1.21,35.71],[-0.13,35.89],[0.5,36.3],[1.47,36.61],[3.16,36.78],[4.82,36.87],[5.32,36.72],[6.26,37.11],[7.33,37.12],[7.74,36.89],[8.42,36.95],[9.51,37.35],[10.21,37.23],[10.18,36.72],[11.03,37.09],[11.1,36.9],[10.6,36.41],[10.59,35.95],[10.94,35.7],[10.81,34.83],[10.15,34.33],[10.34,33.79],[10.86,33.77],[11.11,33.29],[11.49,33.14],[12.66,32.79],[13.08,32.88],[13.92,32.71],[15.25,32.27],[15.71,31.38],[16.61,31.18],[18.02,30.76],[19.09,30.27],[19.57,30.53],[20.05,30.99],[19.82,31.75],[20.13,32.24],[20.85,32.71],[21.54,32.84],[22.9,32.64],[23.24,32.19],[23.61,32.19],[23.93,32.02],[24.92,31.9],[25.16,31.57],[26.5,31.59],[27.46,31.32],[28.45,31.03],[28.91,30.87],[29.68,31.19],[30.1,31.47],[30.98,31.56],[31.69,31.43],[31.96,30.93],[32.19,31.26],[32.99,31.02],[33.77,30.97],[34.27,31.22],[34.56,31.55],[34.49,31.61],[34.75,32.07],[34.96,32.83],[35.1,33.08],[35.13,33.09],[35.48,33.91],[35.98,34.61],[36,34.64],[35.91,35.41],[36.15,35.82],[35.78,36.28],[36.16,36.65],[35.55,36.57],[34.71,36.8],[34.03,36.22],[32.51,36.11],[31.7,36.64],[30.62,36.68],[30.39,36.26],[29.7,36.14],[28.73,36.68],[27.64,36.66],[27.05,37.65],[26.32,38.21],[26.8,38.99],[26.17,39.46],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.15,41.09],[32.35,41.74],[33.51,42.02],[35.17,42.04],[36.91,41.34],[38.35,40.95],[39.51,41.1],[40.37,41.01],[41.55,41.54],[41.7,41.96],[41.45,42.65],[40.88,43.01],[40.32,43.13],[39.96,43.44],[38.68,44.28],[37.54,44.66],[36.68,45.24],[37.4,45.4],[38.23,46.24],[37.67,46.64],[39.15,47.04],[39.12,47.26],[38.22,47.1],[37.43,47.02],[36.76,46.7],[35.82,46.65],[34.96,46.27],[35.02,45.65],[35.51,45.41],[36.53,45.47],[36.33,45.11],[35.24,44.94],[33.88,44.36],[33.33,44.56],[33.55,45.03],[32.45,45.33],[32.63,45.52],[33.59,45.85],[33.3,46.08],[31.74,46.33],[31.68,46.71],[30.75,46.58],[30.38,46.03],[29.6,45.29],[29.63,45.04],[29.14,44.82],[28.84,44.91],[28.56,43.71],[28.04,43.29],[27.67,42.58],[28,42.01],[28.12,41.62],[28.99,41.3],[28.81,41.05],[27.62,41],[27.19,40.69],[26.36,40.15],[26.04,40.62],[26.06,40.82],[25.45,40.85],[24.93,40.95],[23.71,40.69],[24.41,40.13],[23.9,39.96],[23.34,39.96],[22.81,40.48],[22.63,40.26],[22.85,39.66],[23.35,39.19],[22.97,38.97],[23.53,38.51],[24.03,38.22],[24.04,37.66],[23.12,37.92],[23.41,37.41],[22.78,37.31],[23.15,36.42],[22.49,36.41],[21.67,36.85],[21.3,37.65],[21.12,38.31],[20.73,38.77],[20.22,39.34],[20.15,39.63],[19.98,39.7],[19.96,39.92],[19.41,40.25],[19.32,40.73],[19.4,41.41],[19.54,41.72],[19.37,41.88],[19.16,41.96],[18.88,42.28],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.02,43.51],[15.17,44.24],[15.38,44.32],[14.92,44.74],[14.9,45.08],[14.26,45.23],[13.95,44.8],[13.66,45.14],[13.68,45.48],[13.72,45.5],[13.94,45.59],[13.14,45.74],[12.33,45.38],[12.38,44.89],[12.26,44.6],[12.59,44.09],[13.53,43.59],[14.03,42.76],[15.14,41.96],[15.93,41.96],[16.17,41.74],[15.89,41.54],[16.79,41.18],[17.52,40.88],[18.38,40.36],[18.48,40.17],[18.29,39.81],[17.74,40.28],[16.87,40.44],[16.45,39.8],[17.17,39.42],[17.05,38.9],[16.64,38.84],[16.1,37.99],[15.68,37.91],[15.69,38.21],[15.89,38.75],[16.11,38.96],[15.72,39.54],[15.41,40.05],[15,40.17],[14.7,40.6],[14.06,40.79],[13.63,41.19],[12.89,41.25],[12.11,41.7],[11.19,42.36],[10.51,42.93],[10.2,43.92],[9.7,44.04],[8.89,44.37],[8.43,44.23],[7.85,43.77],[7.44,43.69],[6.53,43.13],[4.56,43.4],[3.1,43.08],[2.99,42.47],[3.04,41.89],[2.09,41.23],[0.81,41.01],[0.72,40.68],[0.11,40.12],[-0.28,39.31],[0.11,38.74],[-0.47,38.29],[-0.68,37.64],[-1.44,37.44],[-2.15,36.67],[-3.42,36.66],[-4.37,36.68],[-5,36.32],[-5.38,35.95],[-5.87,36.03],[-6.24,36.37],[-6.52,36.94],[-7.45,37.1],[-7.86,36.84],[-8.38,36.98],[-8.9,36.87],[-8.75,37.65],[-8.84,38.27],[-9.29,38.36],[-9.53,38.74],[-9.45,39.39],[-9.05,39.76],[-8.98,40.16],[-8.77,40.76],[-8.79,41.18],[-8.99,41.54],[-9.03,41.88],[-8.98,42.59],[-9.39,43.03],[-7.98,43.75],[-6.75,43.57],[-5.41,43.57],[-4.35,43.4],[-3.52,43.46],[-1.9,43.42],[-1.38,44.02],[-1.19,46.01],[-2.23,47.06],[-2.96,47.57],[-4.49,47.96],[-4.59,48.68],[-3.3,48.9],[-1.62,48.64],[-1.93,49.78],[-0.99,49.35],[1.34,50.13],[1.64,50.95],[2.51,51.15],[3.32,51.35],[3.83,51.62],[4.71,53.09],[6.07,53.51],[6.91,53.48],[7.1,53.69],[7.94,53.75],[8.12,53.53],[8.8,54.02],[8.57,54.4],[8.53,54.96],[8.12,55.52],[8.09,56.54],[8.26,56.81],[8.54,57.11],[9.42,57.17],[9.78,57.45],[10.58,57.73],[10.55,57.22],[10.25,56.89],[10.37,56.61],[10.91,56.46],[10.67,56.08],[10.37,56.19],[9.65,55.47],[9.92,54.98],[9.94,54.6],[10.95,54.36],[10.94,54.01],[11.96,54.2],[12.52,54.47],[13.65,54.08],[14.12,53.76],[14.8,54.05],[16.36,54.51],[17.62,54.85],[18.62,54.68],[18.7,54.44],[19.66,54.43],[19.89,54.87],[21.27,55.19],[21.06,56.03],[21.09,56.78],[21.58,57.41],[22.52,57.75],[23.32,57.01],[24.12,57.03],[24.31,57.79],[24.43,58.38],[24.06,58.26],[23.43,58.61],[23.34,59.19],[24.6,59.47],[25.86,59.61],[26.95,59.45],[27.98,59.48],[29.12,60.03],[28.07,60.5],[26.26,60.42],[24.5,60.06],[22.87,59.85],[22.29,60.39],[21.32,60.72],[21.54,61.71],[21.06,62.61],[21.54,63.19],[22.44,63.82],[24.73,64.9],[25.4,65.11],[25.29,65.53],[23.9,66.01],[22.18,65.72],[21.21,65.03],[21.37,64.41],[19.78,63.61],[17.85,62.75],[17.12,61.34],[17.83,60.64],[18.79,60.08],[17.87,58.95],[16.83,58.72],[16.45,57.04],[15.88,56.1],[14.67,56.2],[14.1,55.41],[12.94,55.36],[12.63,56.31],[11.79,57.44],[11.03,58.86],[10.36,59.47],[8.38,58.31],[7.05,58.08],[5.67,58.59],[5.31,59.66],[4.99,61.97],[5.91,62.61],[8.55,63.45],[10.53,64.49],[12.36,65.88],[14.76,67.81],[16.44,68.56],[19.18,69.82],[21.38,70.26],[23.02,70.2],[24.55,71.03],[26.37,70.99],[28.17,71.19],[31.29,70.45],[30.01,70.19],[31.1,69.56],[32.13,69.91],[33.78,69.3],[36.51,69.06],[40.29,67.93],[41.06,67.46],[41.13,66.79],[40.02,66.27],[38.38,66],[33.92,66.76],[33.18,66.63],[34.81,65.9],[34.94,64.41],[36.23,64.11],[37.01,63.85],[37.14,64.33],[36.52,64.78],[37.18,65.14],[39.59,64.52],[40.44,64.76],[39.76,65.5],[42.09,66.48],[43.02,66.42],[43.95,66.07],[44.53,66.76],[43.7,67.35],[44.19,67.95],[43.45,68.57],[46.25,68.25],[46.82,67.69],[45.56,67.57],[45.56,67.01],[46.35,66.67],[47.89,66.88],[48.14,67.52],[50.23,68],[53.72,68.86],[54.47,68.81],[53.49,68.2],[54.73,68.1],[55.44,68.44],[57.32,68.47],[58.8,68.88],[59.94,68.28],[61.08,68.94],[60.03,69.52],[60.55,69.85],[63.5,69.55],[64.89,69.23],[68.51,68.09],[69.18,68.62],[68.16,69.14],[68.14,69.36],[66.93,69.45],[67.26,69.93],[66.72,70.71],[66.69,71.03],[68.54,71.93],[69.2,72.84],[69.94,73.04],[72.59,72.78],[72.8,72.22],[71.85,71.41],[72.47,71.09],[72.79,70.39],[72.56,69.02],[73.67,68.41],[73.24,67.74],[71.28,66.32],[72.42,66.17],[72.82,66.53],[73.92,66.79],[74.19,67.28],[75.05,67.76],[74.47,68.33],[74.94,68.99],[73.84,69.07],[73.6,69.63],[74.4,70.63],[73.1,71.45],[74.89,72.12],[74.66,72.83],[75.16,72.86],[75.68,72.3],[75.29,71.34],[76.36,71.15],[75.9,71.87],[77.58,72.27],[79.65,72.32],[81.5,71.75],[80.61,72.58],[80.51,73.65],[82.25,73.85],[84.66,73.81],[86.82,73.94],[86.01,74.46],[87.17,75.12],[88.32,75.14],[90.26,75.64],[92.9,75.77],[93.23,76.05],[95.86,76.14],[96.68,75.92],[98.92,76.45],[100.76,76.43],[101.04,76.86],[101.99,77.29],[104.35,77.7],[106.07,77.37],[104.71,77.13],[106.97,76.97]],[[24.72,77.85],[22.49,77.44],[20.73,77.68],[21.42,77.94],[20.81,78.25],[22.88,78.45],[23.28,78.08],[24.72,77.85]],[[-95.83,78.06],[-97.31,77.85],[-98.12,78.08],[-98.55,78.46],[-98.63,78.87],[-97.34,78.83],[-96.75,78.77],[-95.56,78.42],[-95.83,78.06]],[[-100.06,78.32],[-99.67,77.91],[-101.3,78.02],[-102.95,78.34],[-105.18,78.38],[-104.21,78.68],[-105.42,78.92],[-105.49,79.3],[-103.53,79.17],[-100.83,78.8],[-100.06,78.32]],[[18.25,79.7],[21.54,78.96],[19.03,78.56],[18.47,77.83],[17.59,77.64],[17.12,76.81],[15.91,76.77],[13.76,77.38],[14.67,77.74],[13.17,78.02],[11.22,78.87],[10.44,79.65],[13.17,80.01],[13.72,79.66],[15.14,79.67],[15.52,80.02],[16.99,80.05],[18.25,79.7]],[[25.45,80.41],[27.41,80.06],[25.92,79.52],[23.02,79.4],[20.08,79.57],[19.9,79.84],[18.46,79.86],[17.37,80.32],[20.46,80.6],[21.91,80.36],[22.92,80.66],[25.45,80.41]],[[51.14,80.55],[49.79,80.42],[48.89,80.34],[48.75,80.18],[47.59,80.01],[46.5,80.25],[47.07,80.56],[44.85,80.59],[46.8,80.77],[48.32,80.78],[48.52,80.51],[49.1,80.75],[50.04,80.92],[51.52,80.7],[51.14,80.55]],[[99.94,78.88],[97.76,78.76],[94.97,79.04],[93.31,79.43],[92.55,80.14],[91.18,80.34],[93.78,81.02],[95.94,81.25],[97.88,80.75],[100.19,79.78],[99.94,78.88]],[[-87.02,79.66],[-85.81,79.34],[-87.19,79.04],[-89.04,78.29],[-90.8,78.22],[-92.88,78.34],[-93.95,78.75],[-93.94,79.11],[-93.15,79.38],[-94.97,79.37],[-96.08,79.71],[-96.71,80.16],[-96.02,80.6],[-95.32,80.91],[-94.3,80.98],[-94.74,81.21],[-92.41,81.26],[-91.13,80.72],[-89.45,80.51],[-87.81,80.32],[-87.02,79.66]],[[-68.5,83.11],[-65.83,83.03],[-63.68,82.9],[-61.85,82.63],[-61.89,82.36],[-64.33,81.93],[-66.75,81.73],[-67.66,81.5],[-65.48,81.51],[-67.84,80.9],[-69.47,80.62],[-71.18,79.8],[-73.24,79.63],[-73.88,79.43],[-76.91,79.32],[-75.53,79.2],[-76.22,79.02],[-75.39,78.53],[-76.34,78.18],[-77.89,77.9],[-78.36,77.51],[-79.76,77.21],[-79.62,76.98],[-77.91,77.02],[-77.89,76.78],[-80.56,76.18],[-83.17,76.45],[-86.11,76.3],[-87.6,76.42],[-89.49,76.47],[-89.62,76.95],[-87.77,77.18],[-88.26,77.9],[-87.65,77.97],[-84.98,77.54],[-86.34,78.18],[-87.96,78.37],[-87.15,78.76],[-85.38,79],[-85.09,79.35],[-86.51,79.74],[-86.93,80.25],[-84.2,80.21],[-83.41,80.1],[-81.85,80.46],[-84.1,80.58],[-87.6,80.52],[-89.37,80.86],[-90.2,81.26],[-91.37,81.55],[-91.59,81.89],[-90.1,82.08],[-88.93,82.12],[-86.97,82.28],[-85.5,82.65],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.31,83.13],[-76.25,83.17],[-75.72,83.06],[-72.83,83.23],[-70.67,83.17],[-68.5,83.11]],[[-27.1,83.52],[-20.85,82.73],[-22.69,82.34],[-26.52,82.3],[-31.9,82.2],[-31.4,82.02],[-27.86,82.13],[-24.84,81.79],[-22.9,82.09],[-22.07,81.73],[-23.17,81.15],[-20.62,81.52],[-15.77,81.91],[-12.77,81.72],[-12.21,81.29],[-16.29,80.58],[-16.85,80.35],[-20.05,80.18],[-17.73,80.13],[-18.9,79.4],[-19.7,78.75],[-19.67,77.64],[-18.47,76.99],[-20.04,76.94],[-21.68,76.63],[-19.83,76.1],[-19.6,75.25],[-20.67,75.16],[-19.37,74.3],[-21.59,74.22],[-20.43,73.82],[-20.76,73.46],[-22.17,73.31],[-23.57,73.31],[-22.31,72.63],[-22.3,72.18],[-24.28,72.6],[-24.79,72.33],[-23.44,72.08],[-22.13,71.47],[-21.75,70.66],[-23.54,70.47],[-24.31,70.86],[-25.54,71.43],[-25.2,70.75],[-26.36,70.23],[-23.73,70.18],[-22.35,70.13],[-25.03,69.26],[-27.75,68.47],[-30.67,68.13],[-31.78,68.12],[-32.81,67.74],[-34.2,66.68],[-36.35,65.98],[-37.04,65.94],[-38.38,65.69],[-39.81,65.46],[-40.67,64.84],[-40.68,64.14],[-41.19,63.48],[-42.82,62.68],[-42.42,61.9],[-42.87,61.07],[-43.38,60.1],[-44.79,60.04],[-46.26,60.85],[-48.26,60.86],[-49.23,61.41],[-49.9,62.38],[-51.63,63.63],[-52.14,64.28],[-52.28,65.18],[-53.66,66.1],[-53.3,66.84],[-53.97,67.19],[-52.98,68.36],[-51.48,68.73],[-51.08,69.15],[-50.87,69.93],[-52.01,69.57],[-52.56,69.43],[-53.46,69.28],[-54.68,69.61],[-54.75,70.29],[-54.36,70.82],[-53.43,70.84],[-51.39,70.57],[-53.11,71.2],[-54,71.55],[-55,71.41],[-55.83,71.65],[-54.72,72.59],[-55.33,72.96],[-56.12,73.65],[-57.32,74.71],[-58.6,75.1],[-58.59,75.52],[-61.27,76.1],[-63.39,76.18],[-66.06,76.13],[-68.5,76.06],[-69.66,76.38],[-71.4,77.01],[-68.78,77.32],[-66.76,77.38],[-71.04,77.64],[-73.3,78.04],[-73.16,78.43],[-69.37,78.91],[-65.71,79.39],[-65.32,79.76],[-68.02,80.12],[-67.15,80.52],[-63.69,81.21],[-62.23,81.32],[-62.65,81.77],[-60.28,82.03],[-57.21,82.19],[-54.13,82.2],[-53.04,81.89],[-50.39,82.44],[-48,82.06],[-46.6,81.99],[-44.52,81.66],[-46.9,82.2],[-46.76,82.63],[-43.41,83.23],[-39.9,83.18],[-38.62,83.55],[-35.09,83.65],[-27.1,83.52]]]"),y3=JSON.parse("[-0.6313,-1.5063,0.3079,-0.6399,-1.4809,0.3998,-0.8958,-1.3614,0.326,-0.8839,-1.3614,0.3571,-0.8709,-1.3614,0.3877,-0.9615,-1.3273,0.2757,-0.9513,-1.3273,0.3091,-0.9399,-1.3273,0.3421,-1.0054,-1.2916,0.2883,-0.9947,-1.2916,0.3232,-0.9829,-1.2916,0.3577,-0.9058,-1.2916,0.523,-1.058,-1.2543,0.2638,-1.0481,-1.2543,0.3005,-1.037,-1.2543,0.3369,-1.0246,-1.2543,0.3729,-1.011,-1.2543,0.4085,1.0246,-1.2543,0.3729,-1.0896,-1.2155,0.3124,-1.078,-1.2155,0.3503,-1.0651,-1.2155,0.3877,-1.0509,-1.2155,0.4246,-1.0355,-1.2155,0.461,-1.1297,-1.1752,0.3239,-1.1177,-1.1752,0.3632,-1.1043,-1.1752,0.4019,-1.0896,-1.1752,0.4402,-1.0736,-1.1752,0.478,0.2443,-1.1752,-1.1495,0.2041,-1.1752,-1.1574,-1.1684,-1.1335,0.335,-1.156,-1.1335,0.3756,-1.1422,-1.1335,0.4157,-1.127,-1.1335,0.4553,-1.1104,-1.1335,0.4944,0.6797,-1.1335,-1.0077,0.1692,-1.1335,-1.2037,-1.2057,-1.0904,0.3457,-1.1929,-1.0904,0.3876,-1.1787,-1.0904,0.429,-1.163,-1.0904,0.4699,-1.1459,-1.0904,0.5102,-1.1274,-1.0904,0.5499,0.7014,-1.0904,-1.0399,0.6647,-1.0904,-1.0637,0.1746,-1.0904,-1.2421,0.1311,-1.0904,-1.2475,0.0875,-1.0904,-1.2513,-1.2284,-1.0459,0.3991,-1.2137,-1.0459,0.4418,-1.1976,-1.0459,0.4838,-1.18,-1.0459,0.5253,-1.1609,-1.0459,0.5662,0.7223,-1.0459,-1.0708,0.135,-1.0459,-1.2845,0.0901,-1.0459,-1.2885,-1.2759,-1.0002,0.3659,-1.2624,-1.0002,0.4102,-1.2473,-1.0002,0.454,-1.2307,-1.0002,0.4972,-1.2126,-1.0002,0.5399,-1.193,-1.0002,0.5819,-1.172,-1.0002,0.6231,-1.1495,-1.0002,0.6637,-1.1256,-1.0002,0.7034,0.8532,-1.0002,-1.0168,0.8172,-1.0002,-1.046,0.7802,-1.0002,-1.0738,0.7422,-1.0002,-1.1004,0.7034,-1.0002,-1.1256,0.6637,-1.0002,-1.1495,-1.2948,-0.9533,0.4207,-1.2793,-0.9533,0.4656,-1.2623,-0.9533,0.51,-1.2437,-0.9533,0.5537,-1.2236,-0.9533,0.5968,-1.2021,-0.9533,0.6392,-1.179,-0.9533,0.6807,-1.1546,-0.9533,0.7214,1.2021,-0.9533,-0.6392,0.911,-0.9533,-1.0117,0.8751,-0.9533,-1.0429,0.8382,-0.9533,-1.0728,0.8002,-0.9533,-1.1014,0.7613,-0.9533,-1.1287,0.7214,-0.9533,-1.1546,0.6807,-0.9533,-1.179,0.1423,-0.9533,-1.354,-1.3256,-0.9052,0.4307,-1.3098,-0.9052,0.4767,-1.2924,-0.9052,0.5222,-1.2734,-0.9052,0.5669,-1.2528,-0.9052,0.611,-1.2307,-0.9052,0.6544,-1.2071,-0.9052,0.6969,-1.1821,-0.9052,0.7386,-1.1556,-0.9052,0.7794,-1.1277,-0.9052,0.8193,0.4307,-0.9052,1.3256,0.4767,-0.9052,1.3098,0.5222,-0.9052,1.2924,0.5669,-0.9052,1.2734,0.611,-0.9052,1.2528,1.2528,-0.9052,-0.611,1.2307,-0.9052,-0.6544,1.2071,-0.9052,-0.6969,1.1821,-0.9052,-0.7386,1.1556,-0.9052,-0.7794,0.9683,-0.9052,-1.0027,0.9327,-0.9052,-1.0358,0.896,-0.9052,-1.0678,0.8582,-0.9052,-1.0984,0.8193,-0.9052,-1.1277,0.7794,-0.9052,-1.1556,0.7386,-0.9052,-1.1821,0.6969,-0.9052,-1.2071,-1.3549,-0.856,0.4402,-1.3387,-0.856,0.4872,-1.3209,-0.856,0.5337,-1.3014,-0.856,0.5794,-1.2804,-0.856,0.6245,-1.2579,-0.856,0.6688,-1.2338,-0.856,0.7123,-1.2081,-0.856,0.7549,-1.1811,-0.856,0.7966,-1.1525,-0.856,0.8374,-1.1226,-0.856,0.8771,0.4402,-0.856,1.3549,0.4872,-0.856,1.3387,0.5337,-0.856,1.3209,0.5794,-0.856,1.3014,0.6245,-0.856,1.2804,0.6688,-0.856,1.2579,0.7123,-0.856,1.2338,1.2804,-0.856,-0.6245,1.2579,-0.856,-0.6688,1.2338,-0.856,-0.7123,1.2081,-0.856,-0.7549,1.1811,-0.856,-0.7966,1.1525,-0.856,-0.8374,1.1226,-0.856,-0.8771,1.0913,-0.856,-0.9157,1.0587,-0.856,-0.9533,1.0248,-0.856,-0.9896,0.9896,-0.856,-1.0248,0.9533,-0.856,-1.0587,0.9157,-0.856,-1.0913,0.8771,-0.856,-1.1226,0.8374,-0.856,-1.1525,0.7966,-0.856,-1.1811,0.7549,-0.856,-1.2081,0.7123,-0.856,-1.2338,0.6688,-0.856,-1.2579,-1.366,-0.8058,0.4972,-1.3478,-0.8058,0.5445,-1.3279,-0.8058,0.5912,-1.3065,-0.8058,0.6372,-1.2835,-0.8058,0.6824,-1.2589,-0.8058,0.7268,-1.2327,-0.8058,0.7703,-1.2051,-0.8058,0.8129,-1.176,-0.8058,0.8544,-1.1455,-0.8058,0.8949,-1.1135,-0.8058,0.9344,0.4492,-0.8058,1.3825,0.4972,-0.8058,1.366,0.5445,-0.8058,1.3478,0.5912,-0.8058,1.3279,0.6372,-0.8058,1.3065,0.6824,-0.8058,1.2835,0.7268,-0.8058,1.2589,1.3065,-0.8058,-0.6372,1.2835,-0.8058,-0.6824,1.2589,-0.8058,-0.7268,1.2327,-0.8058,-0.7703,1.2051,-0.8058,-0.8129,1.176,-0.8058,-0.8544,1.1455,-0.8058,-0.8949,1.1135,-0.8058,-0.9344,1.0802,-0.8058,-0.9727,1.0456,-0.8058,-1.0098,1.0098,-0.8058,-1.0456,0.9727,-0.8058,-1.0802,0.9344,-0.8058,-1.1135,0.8949,-0.8058,-1.1455,0.8544,-0.8058,-1.176,0.8129,-0.8058,-1.2051,0.7703,-0.8058,-1.2327,0.7268,-0.8058,-1.2589,0.6824,-0.8058,-1.2835,-1.3915,-0.7545,0.5065,-1.373,-0.7545,0.5547,-1.3528,-0.7545,0.6023,-1.331,-0.7545,0.6492,-1.3075,-0.7545,0.6952,-1.2825,-0.7545,0.7404,-1.2558,-0.7545,0.7847,-1.2277,-0.7545,0.8281,-1.198,-0.7545,0.8704,-1.1669,-0.7545,0.9117,-1.1344,-0.7545,0.9519,0.4082,-0.7545,1.4235,0.4576,-0.7545,1.4084,0.5065,-0.7545,1.3915,0.5547,-0.7545,1.373,0.6023,-0.7545,1.3528,0.6492,-0.7545,1.331,0.6952,-0.7545,1.3075,0.7404,-0.7545,1.2825,0.7847,-0.7545,1.2558,1.3528,-0.7545,-0.6023,1.331,-0.7545,-0.6492,1.3075,-0.7545,-0.6952,1.2825,-0.7545,-0.7404,1.2558,-0.7545,-0.7847,1.2277,-0.7545,-0.8281,1.198,-0.7545,-0.8704,1.1669,-0.7545,-0.9117,1.1344,-0.7545,-0.9519,1.1005,-0.7545,-0.9909,1.0652,-0.7545,-1.0287,1.0287,-0.7545,-1.0652,0.9909,-0.7545,-1.1005,0.9519,-0.7545,-1.1344,0.9117,-0.7545,-1.1669,0.8704,-0.7545,-1.198,0.8281,-0.7545,-1.2277,0.7847,-0.7545,-1.2558,0.7404,-0.7545,-1.2825,0.6952,-0.7545,-1.3075,-1.4154,-0.7024,0.5152,-1.3966,-0.7024,0.5643,-1.3761,-0.7024,0.6127,-1.3538,-0.7024,0.6603,-1.33,-0.7024,0.7072,-1.3045,-0.7024,0.7531,-1.2774,-0.7024,0.7982,-1.2488,-0.7024,0.8423,-1.2186,-0.7024,0.8854,-1.187,-0.7024,0.9274,-1.1539,-0.7024,0.9682,0.4152,-0.7024,1.4479,0.4655,-0.7024,1.4326,0.5152,-0.7024,1.4154,0.5643,-0.7024,1.3966,0.6127,-0.7024,1.3761,0.6603,-0.7024,1.3538,0.7072,-0.7024,1.33,0.7531,-0.7024,1.3045,0.7982,-0.7024,1.2774,1.0835,-0.7024,1.0464,1.3761,-0.7024,-0.6127,1.3538,-0.7024,-0.6603,1.33,-0.7024,-0.7072,1.3045,-0.7024,-0.7531,1.2774,-0.7024,-0.7982,1.2488,-0.7024,-0.8423,1.2186,-0.7024,-0.8854,1.187,-0.7024,-0.9274,1.1539,-0.7024,-0.9682,1.1194,-0.7024,-1.0079,1.0835,-0.7024,-1.0464,1.0464,-0.7024,-1.0835,1.0079,-0.7024,-1.1194,0.9682,-0.7024,-1.1539,0.9274,-0.7024,-1.187,0.8854,-0.7024,-1.2186,0.8423,-0.7024,-1.2488,0.7982,-0.7024,-1.2774,0.7531,-0.7024,-1.3045,0.7072,-0.7024,-1.33,-1.4376,-0.6494,0.5232,-1.4185,-0.6494,0.5731,-1.3976,-0.6494,0.6223,-1.375,-0.6494,0.6707,-1.3508,-0.6494,0.7182,-1.3249,-0.6494,0.7649,-1.2974,-0.6494,0.8107,-1.2683,-0.6494,0.8555,-1.2377,-0.6494,0.8992,-1.2056,-0.6494,0.9419,-1.172,-0.6494,0.9834,-1.1369,-0.6494,1.0237,-1.1005,-0.6494,1.0627,0.3701,-0.6494,1.4844,0.4217,-0.6494,1.4706,0.4728,-0.6494,1.455,0.5232,-0.6494,1.4376,0.5731,-0.6494,1.4185,0.6223,-0.6494,1.3976,0.6707,-0.6494,1.375,0.7182,-0.6494,1.3508,0.7649,-0.6494,1.3249,0.8107,-0.6494,1.2974,0.8555,-0.6494,1.2683,1.0627,-0.6494,1.1005,1.1005,-0.6494,1.0627,1.3976,-0.6494,-0.6223,1.375,-0.6494,-0.6707,1.3508,-0.6494,-0.7182,1.3249,-0.6494,-0.7649,1.2974,-0.6494,-0.8107,1.2683,-0.6494,-0.8555,1.2377,-0.6494,-0.8992,1.2056,-0.6494,-0.9419,1.172,-0.6494,-0.9834,1.1369,-0.6494,-1.0237,1.1005,-0.6494,-1.0627,1.0627,-0.6494,-1.1005,1.0237,-0.6494,-1.1369,0.9834,-0.6494,-1.172,0.9419,-0.6494,-1.2056,0.8992,-0.6494,-1.2377,0.8555,-0.6494,-1.2683,0.8107,-0.6494,-1.2974,0.7649,-0.6494,-1.3249,-1.458,-0.5956,0.5307,-1.4386,-0.5956,0.5812,-1.4175,-0.5956,0.6311,-1.3946,-0.5956,0.6802,-1.37,-0.5956,0.7284,-1.3437,-0.5956,0.7758,-1.3158,-0.5956,0.8222,-1.2863,-0.5956,0.8676,-1.2553,-0.5956,0.912,-1.2227,-0.5956,0.9553,-1.1886,-0.5956,0.9974,-1.1531,-0.5956,1.0382,-1.1161,-0.5956,1.0778,-1.0778,-0.5956,1.1161,-1.0382,-0.5956,1.1531,0.3754,-0.5956,1.5055,0.4277,-0.5956,1.4915,0.4795,-0.5956,1.4757,0.5307,-0.5956,1.458,0.5812,-0.5956,1.4386,0.6311,-0.5956,1.4175,0.6802,-0.5956,1.3946,0.7284,-0.5956,1.37,0.7758,-0.5956,1.3437,0.8222,-0.5956,1.3158,0.8676,-0.5956,1.2863,1.0778,-0.5956,1.1161,1.1161,-0.5956,1.0778,1.1531,-0.5956,1.0382,1.3946,-0.5956,-0.6802,1.37,-0.5956,-0.7284,1.3437,-0.5956,-0.7758,1.3158,-0.5956,-0.8222,1.2863,-0.5956,-0.8676,1.2553,-0.5956,-0.912,1.2227,-0.5956,-0.9553,1.1886,-0.5956,-0.9974,1.1531,-0.5956,-1.0382,1.1161,-0.5956,-1.0778,1.0778,-0.5956,-1.1161,1.0382,-0.5956,-1.1531,0.9974,-0.5956,-1.1886,0.9553,-0.5956,-1.2227,0.912,-0.5956,-1.2553,0.8676,-0.5956,-1.2863,0.8222,-0.5956,-1.3158,-1.4767,-0.5411,0.5375,-1.457,-0.5411,0.5887,-1.4356,-0.5411,0.6392,-1.4124,-0.5411,0.6889,-1.3875,-0.5411,0.7378,-1.3609,-0.5411,0.7857,-1.3327,-0.5411,0.8327,-1.3028,-0.5411,0.8787,-1.2713,-0.5411,0.9237,-1.2383,-0.5411,0.9675,-1.2038,-0.5411,1.0101,-1.1678,-0.5411,1.0515,-1.1304,-0.5411,1.0916,-1.0916,-0.5411,1.1304,-1.0515,-0.5411,1.1678,-1.0101,-0.5411,1.2038,0.3802,-0.5411,1.5248,0.4332,-0.5411,1.5106,0.4856,-0.5411,1.4945,0.5375,-0.5411,1.4767,0.5887,-0.5411,1.457,0.6392,-0.5411,1.4356,0.6889,-0.5411,1.4124,0.7378,-0.5411,1.3875,0.7857,-0.5411,1.3609,0.8327,-0.5411,1.3327,0.8787,-0.5411,1.3028,1.0916,-0.5411,1.1304,1.1304,-0.5411,1.0916,1.1678,-0.5411,1.0515,1.3327,-0.5411,-0.8327,1.3028,-0.5411,-0.8787,1.2713,-0.5411,-0.9237,1.2383,-0.5411,-0.9675,1.2038,-0.5411,-1.0101,1.1678,-0.5411,-1.0515,1.1304,-0.5411,-1.0916,1.0916,-0.5411,-1.1304,1.0515,-0.5411,-1.1678,1.0101,-0.5411,-1.2038,0.9675,-0.5411,-1.2383,0.9237,-0.5411,-1.2713,0.8787,-0.5411,-1.3028,-1.4935,-0.4859,0.5436,-1.4736,-0.4859,0.5954,-1.452,-0.4859,0.6465,-1.4285,-0.4859,0.6967,-1.4033,-0.4859,0.7462,-1.3764,-0.4859,0.7947,-1.3479,-0.4859,0.8422,-1.3177,-0.4859,0.8888,-1.2858,-0.4859,0.9342,-1.2524,-0.4859,0.9785,-1.2175,-0.4859,1.0216,-1.1811,-0.4859,1.0635,-1.1433,-0.4859,1.1041,-1.1041,-0.4859,1.1433,-1.0635,-0.4859,1.1811,-1.0216,-0.4859,1.2175,0.3305,-0.4859,1.5546,0.3845,-0.4859,1.5422,0.4381,-0.4859,1.5278,0.4911,-0.4859,1.5116,0.5436,-0.4859,1.4935,0.5954,-0.4859,1.4736,0.6465,-0.4859,1.452,0.6967,-0.4859,1.4285,0.7462,-0.4859,1.4033,0.7947,-0.4859,1.3764,0.8422,-0.4859,1.3479,0.8888,-0.4859,1.3177,0.9342,-0.4859,1.2858,0.9785,-0.4859,1.2524,1.1041,-0.4859,1.1433,1.1433,-0.4859,1.1041,1.1811,-0.4859,1.0635,1.3479,-0.4859,-0.8422,1.3177,-0.4859,-0.8888,1.2858,-0.4859,-0.9342,1.2524,-0.4859,-0.9785,1.2175,-0.4859,-1.0216,1.1811,-0.4859,-1.0635,1.1433,-0.4859,-1.1041,1.1041,-0.4859,-1.1433,1.0635,-0.4859,-1.1811,0.9785,-0.4859,-1.2524,0.9342,-0.4859,-1.2858,0.0555,-0.4859,-1.5884,-1.5432,-0.4302,0.4425,-1.5268,-0.4302,0.4961,-1.5086,-0.4302,0.5491,-1.4885,-0.4302,0.6014,-1.4666,-0.4302,0.653,-1.4429,-0.4302,0.7037,-1.4175,-0.4302,0.7537,-1.3903,-0.4302,0.8027,-1.3614,-0.4302,0.8507,-1.3309,-0.4302,0.8977,-1.2988,-0.4302,0.9436,-1.265,-0.4302,0.9884,-1.2298,-0.4302,1.0319,-1.193,-0.4302,1.0742,-1.1548,-0.4302,1.1152,-1.1152,-0.4302,1.1548,-1.0742,-0.4302,1.193,-1.0319,-0.4302,1.2298,0.3338,-0.4302,1.5703,0.3884,-0.4302,1.5577,0.4425,-0.4302,1.5432,0.4961,-0.4302,1.5268,0.5491,-0.4302,1.5086,0.6014,-0.4302,1.4885,0.653,-0.4302,1.4666,0.7037,-0.4302,1.4429,0.7537,-0.4302,1.4175,0.8027,-0.4302,1.3903,0.8507,-0.4302,1.3614,0.8977,-0.4302,1.3309,0.9436,-0.4302,1.2988,0.9884,-0.4302,1.265,1.0319,-0.4302,1.2298,1.193,-0.4302,1.0742,1.2298,-0.4302,1.0319,1.2988,-0.4302,-0.9436,1.265,-0.4302,-0.9884,1.2298,-0.4302,-1.0319,1.193,-0.4302,-1.0742,1.1548,-0.4302,-1.1152,0.9884,-0.4302,-1.265,0.9436,-0.4302,-1.2988,-1.5713,-0.3739,0.3918,-1.5567,-0.3739,0.4464,-1.5401,-0.3739,0.5004,-1.5217,-0.3739,0.5539,-1.5015,-0.3739,0.6066,-1.4794,-0.3739,0.6587,-1.4555,-0.3739,0.7099,-1.4298,-0.3739,0.7603,-1.4024,-0.3739,0.8097,-1.3733,-0.3739,0.8582,-1.3425,-0.3739,0.9056,-1.3101,-0.3739,0.9519,-1.2761,-0.3739,0.997,-1.2405,-0.3739,1.0409,-1.2035,-0.3739,1.0836,-1.1649,-0.3739,1.1249,-1.1249,-0.3739,1.1649,-1.0836,-0.3739,1.2035,-1.0409,-0.3739,1.2405,0.3918,-0.3739,1.5713,0.4464,-0.3739,1.5567,0.5004,-0.3739,1.5401,0.5539,-0.3739,1.5217,0.6066,-0.3739,1.5015,0.6587,-0.3739,1.4794,0.7099,-0.3739,1.4555,0.7603,-0.3739,1.4298,0.8097,-0.3739,1.4024,0.8582,-0.3739,1.3733,0.9056,-0.3739,1.3425,0.9519,-0.3739,1.3101,0.997,-0.3739,1.2761,1.0409,-0.3739,1.2405,1.2405,-0.3739,-1.0409,1.2035,-0.3739,-1.0836,1.1649,-0.3739,-1.1249,1.1249,-0.3739,-1.1649,0.997,-0.3739,-1.2761,-1.5958,-0.3171,0.3392,-1.583,-0.3171,0.3947,-1.5683,-0.3171,0.4497,-1.5516,-0.3171,0.5042,-1.5331,-0.3171,0.558,-1.5127,-0.3171,0.6112,-1.4904,-0.3171,0.6636,-1.4664,-0.3171,0.7152,-1.4405,-0.3171,0.7659,-1.4129,-0.3171,0.8157,-1.3836,-0.3171,0.8645,-1.3525,-0.3171,0.9123,-1.3199,-0.3171,0.959,-1.2856,-0.3171,1.0044,-1.2498,-0.3171,1.0487,-1.2124,-0.3171,1.0917,-1.1736,-0.3171,1.1333,-1.1333,-0.3171,1.1736,-1.0917,-0.3171,1.2124,-1.0487,-0.3171,1.2498,-1.0044,-0.3171,1.2856,0.3947,-0.3171,1.583,0.4497,-0.3171,1.5683,0.5042,-0.3171,1.5516,0.558,-0.3171,1.5331,0.6112,-0.3171,1.5127,0.6636,-0.3171,1.4904,0.7152,-0.3171,1.4664,0.7659,-0.3171,1.4405,0.8157,-0.3171,1.4129,0.8645,-0.3171,1.3836,0.9123,-0.3171,1.3525,0.959,-0.3171,1.3199,1.0044,-0.3171,1.2856,1.0487,-0.3171,1.2498,1.2124,-0.3171,-1.0917,1.0044,-0.3171,-1.2856,-1.6057,-0.26,0.3413,-1.5928,-0.26,0.3971,-1.5779,-0.26,0.4525,-1.5612,-0.26,0.5073,-1.5425,-0.26,0.5614,-1.522,-0.26,0.6149,-1.4996,-0.26,0.6677,-1.4754,-0.26,0.7196,-1.4494,-0.26,0.7707,-1.4216,-0.26,0.8208,-1.3921,-0.26,0.8699,-1.3609,-0.26,0.9179,-1.328,-0.26,0.9649,-1.2935,-0.26,1.0106,-1.2575,-0.26,1.0552,-1.2199,-0.26,1.0984,-1.1808,-0.26,1.1403,-1.1403,-0.26,1.1808,-1.0984,-0.26,1.2199,-1.0552,-0.26,1.2575,-1.0106,-0.26,1.2935,-0.9649,-0.26,1.328,0.3971,-0.26,1.5928,0.4525,-0.26,1.5779,0.5073,-0.26,1.5612,0.5614,-0.26,1.5425,0.6149,-0.26,1.522,0.6677,-0.26,1.4996,0.7196,-0.26,1.4754,0.7707,-0.26,1.4494,0.8208,-0.26,1.4216,0.8699,-0.26,1.3921,0.9179,-0.26,1.3609,0.9649,-0.26,1.328,1.0106,-0.26,1.2935,1.3609,-0.26,-0.9179,1.0106,-0.26,-1.2935,0.8699,-0.26,-1.3921,0.5614,-0.26,-1.5425,-1.6246,-0.2025,0.2865,-1.6136,-0.2025,0.343,-1.6006,-0.2025,0.3991,-1.5857,-0.2025,0.4547,-1.5689,-0.2025,0.5098,-1.5501,-0.2025,0.5642,-1.5295,-0.2025,0.618,-1.507,-0.2025,0.671,-1.4827,-0.2025,0.7231,-1.4565,-0.2025,0.7744,-1.4286,-0.2025,0.8248,-1.399,-0.2025,0.8742,-1.3676,-0.2025,0.9225,-1.3346,-0.2025,0.9696,-1.2999,-0.2025,1.0156,-1.2637,-0.2025,1.0603,-1.2259,-0.2025,1.1038,-1.1866,-0.2025,1.1459,-1.1459,-0.2025,1.1866,-1.1038,-0.2025,1.2259,-1.0603,-0.2025,1.2637,-1.0156,-0.2025,1.2999,-0.9696,-0.2025,1.3346,0.3991,-0.2025,1.6006,0.4547,-0.2025,1.5857,0.5098,-0.2025,1.5689,0.5642,-0.2025,1.5501,0.618,-0.2025,1.5295,0.671,-0.2025,1.507,0.7231,-0.2025,1.4827,0.7744,-0.2025,1.4565,0.8248,-0.2025,1.4286,0.8742,-0.2025,1.399,0.9225,-0.2025,1.3676,0.9696,-0.2025,1.3346,1.0156,-0.2025,1.2999,1.5857,-0.2025,-0.4547,1.5689,-0.2025,-0.5098,1.5501,-0.2025,-0.5642,1.5295,-0.2025,-0.618,1.0603,-0.2025,-1.2637,1.0156,-0.2025,-1.2999,0.9696,-0.2025,-1.3346,0.9225,-0.2025,-1.3676,0.618,-0.2025,-1.5295,-1.6305,-0.1449,0.2875,-1.6195,-0.1449,0.3442,-1.6065,-0.1449,0.4005,-1.5915,-0.1449,0.4564,-1.5746,-0.1449,0.5116,-1.5558,-0.1449,0.5663,-1.5351,-0.1449,0.6202,-1.5125,-0.1449,0.6734,-1.4881,-0.1449,0.7258,-1.4619,-0.1449,0.7773,-1.4339,-0.1449,0.8278,-1.4041,-0.1449,0.8774,-1.3726,-0.1449,0.9258,-1.3395,-0.1449,0.9732,-1.3047,-0.1449,1.0193,-1.2683,-0.1449,1.0642,-1.2304,-0.1449,1.1079,-1.191,-0.1449,1.1501,-1.1501,-0.1449,1.191,-1.1079,-0.1449,1.2304,-1.0642,-0.1449,1.2683,-1.0193,-0.1449,1.3047,-0.9732,-0.1449,1.3395,0.3442,-0.1449,1.6195,0.4005,-0.1449,1.6065,0.4564,-0.1449,1.5915,0.5116,-0.1449,1.5746,0.5663,-0.1449,1.5558,0.6202,-0.1449,1.5351,0.6734,-0.1449,1.5125,0.7258,-0.1449,1.4881,0.7773,-0.1449,1.4619,0.8278,-0.1449,1.4339,0.8774,-0.1449,1.4041,0.9258,-0.1449,1.3726,0.9732,-0.1449,1.3395,1.0193,-0.1449,1.3047,1.6065,-0.1449,-0.4005,1.4339,-0.1449,-0.8278,1.4041,-0.1449,-0.8774,1.1079,-0.1449,-1.2304,1.0642,-0.1449,-1.2683,1.0193,-0.1449,-1.3047,0.9732,-0.1449,-1.3395,0.8774,-0.1449,-1.4041,0.8278,-0.1449,-1.4339,-1.6345,-0.087,0.2882,-1.6235,-0.087,0.3451,-1.6104,-0.087,0.4015,-1.5954,-0.087,0.4575,-1.5785,-0.087,0.5129,-1.5596,-0.087,0.5677,-1.5389,-0.087,0.6217,-1.5162,-0.087,0.6751,-1.4917,-0.087,0.7276,-1.4654,-0.087,0.7792,-1.4374,-0.087,0.8299,-1.4075,-0.087,0.8795,-1.376,-0.087,0.9281,-1.3427,-0.087,0.9756,-1.3079,-0.087,1.0218,-1.2714,-0.087,1.0668,-1.2334,-0.087,1.1106,-1.1939,-0.087,1.1529,-1.1529,-0.087,1.1939,-1.1106,-0.087,1.2334,-1.0668,-0.087,1.2714,0.3451,-0.087,1.6235,0.4015,-0.087,1.6104,0.4575,-0.087,1.5954,0.5129,-0.087,1.5785,0.5677,-0.087,1.5596,0.6217,-0.087,1.5389,0.6751,-0.087,1.5162,0.7276,-0.087,1.4917,0.7792,-0.087,1.4654,0.8299,-0.087,1.4374,0.8795,-0.087,1.4075,0.9281,-0.087,1.376,0.9756,-0.087,1.3427,1.0218,-0.087,1.3079,1.0668,-0.087,1.2714,1.6235,-0.087,-0.3451,1.6104,-0.087,-0.4015,1.5954,-0.087,-0.4575,1.5389,-0.087,-0.6217,1.5162,-0.087,-0.6751,1.4917,-0.087,-0.7276,1.4374,-0.087,-0.8299,1.4075,-0.087,-0.8795,1.3079,-0.087,-1.0218,1.2714,-0.087,-1.0668,1.1939,-0.087,-1.1529,1.1529,-0.087,-1.1939,1.1106,-0.087,-1.2334,1.0668,-0.087,-1.2714,1.0218,-0.087,-1.3079,0.7792,-0.087,-1.4654,-1.6365,-0.029,0.2886,-1.6254,-0.029,0.3455,-1.6124,-0.029,0.402,-1.5974,-0.029,0.458,-1.5804,-0.029,0.5135,-1.5615,-0.029,0.5684,-1.5407,-0.029,0.6225,-1.5181,-0.029,0.6759,-1.4936,-0.029,0.7285,-1.4672,-0.029,0.7801,-1.4391,-0.029,0.8309,-1.4092,-0.029,0.8806,-1.3777,-0.029,0.9292,-1.3444,-0.029,0.9768,-1.3095,-0.029,1.0231,-1.273,-0.029,1.0682,-1.2349,-0.029,1.1119,-1.1954,-0.029,1.1543,0.2886,-0.029,1.6365,0.3455,-0.029,1.6254,0.402,-0.029,1.6124,0.458,-0.029,1.5974,0.5135,-0.029,1.5804,0.5684,-0.029,1.5615,0.6225,-0.029,1.5407,0.6759,-0.029,1.5181,0.7285,-0.029,1.4936,0.7801,-0.029,1.4672,0.8309,-0.029,1.4391,0.8806,-0.029,1.4092,0.9292,-0.029,1.3777,0.9768,-0.029,1.3444,1.0231,-0.029,1.3095,1.0682,-0.029,1.273,1.6365,-0.029,-0.2886,1.6254,-0.029,-0.3455,1.6124,-0.029,-0.402,1.5615,-0.029,-0.5684,1.5407,-0.029,-0.6225,1.5181,-0.029,-0.6759,1.4936,-0.029,-0.7285,1.4391,-0.029,-0.8309,1.4092,-0.029,-0.8806,1.2349,-0.029,-1.1119,1.1954,-0.029,-1.1543,-1.6365,0.029,0.2886,-1.6254,0.029,0.3455,-1.6124,0.029,0.402,-1.5974,0.029,0.458,-1.5804,0.029,0.5135,-1.5615,0.029,0.5684,-1.5407,0.029,0.6225,-1.5181,0.029,0.6759,-1.4936,0.029,0.7285,-1.4672,0.029,0.7801,-1.4391,0.029,0.8309,-1.4092,0.029,0.8806,-1.3777,0.029,0.9292,-1.3444,0.029,0.9768,-1.3095,0.029,1.0231,0.2886,0.029,1.6365,0.3455,0.029,1.6254,0.402,0.029,1.6124,0.458,0.029,1.5974,0.5135,0.029,1.5804,0.5684,0.029,1.5615,0.6225,0.029,1.5407,0.6759,0.029,1.5181,0.7285,0.029,1.4936,0.7801,0.029,1.4672,0.8309,0.029,1.4391,0.8806,0.029,1.4092,0.9292,0.029,1.3777,0.9768,0.029,1.3444,1.0231,0.029,1.3095,1.0682,0.029,1.273,1.1119,0.029,1.2349,1.6365,0.029,-0.2886,1.6254,0.029,-0.3455,1.5615,0.029,-0.5684,1.5407,0.029,-0.6225,1.5181,0.029,-0.6759,1.4936,0.029,-0.7285,1.4672,0.029,-0.7801,1.4391,0.029,-0.8309,1.4092,0.029,-0.8806,1.3777,0.029,-0.9292,1.3095,0.029,-1.0231,-1.6235,0.087,0.3451,-1.6104,0.087,0.4015,-1.5954,0.087,0.4575,-1.5785,0.087,0.5129,-1.5596,0.087,0.5677,-1.5389,0.087,0.6217,-1.5162,0.087,0.6751,-1.4917,0.087,0.7276,-1.4654,0.087,0.7792,-1.4374,0.087,0.8299,-1.4075,0.087,0.8795,-1.376,0.087,0.9281,-1.3427,0.087,0.9756,-1.3079,0.087,1.0218,0.2882,0.087,1.6345,0.3451,0.087,1.6235,0.4015,0.087,1.6104,0.4575,0.087,1.5954,0.5129,0.087,1.5785,0.5677,0.087,1.5596,0.6217,0.087,1.5389,0.6751,0.087,1.5162,0.7276,0.087,1.4917,0.7792,0.087,1.4654,0.8299,0.087,1.4374,0.8795,0.087,1.4075,0.9281,0.087,1.376,0.9756,0.087,1.3427,1.0218,0.087,1.3079,1.0668,0.087,1.2714,1.1106,0.087,1.2334,1.1529,0.087,1.1939,1.1939,0.087,1.1529,1.6436,0.087,-0.231,1.6345,0.087,-0.2882,1.6235,0.087,-0.3451,1.5389,0.087,-0.6217,1.5162,0.087,-0.6751,1.4917,0.087,-0.7276,-1.6065,0.1449,0.4005,-1.5915,0.1449,0.4564,-1.5746,0.1449,0.5116,-1.5558,0.1449,0.5663,-1.5351,0.1449,0.6202,-1.5125,0.1449,0.6734,-1.4881,0.1449,0.7258,-1.4619,0.1449,0.7773,-1.4339,0.1449,0.8278,-1.4041,0.1449,0.8774,-1.3726,0.1449,0.9258,-1.3395,0.1449,0.9732,-1.3047,0.1449,1.0193,-0.2304,0.1449,1.6396,-0.1731,0.1449,1.6466,-0.0578,0.1449,1.6547,0.1731,0.1449,1.6466,0.2304,0.1449,1.6396,0.2875,0.1449,1.6305,0.3442,0.1449,1.6195,0.4005,0.1449,1.6065,0.4564,0.1449,1.5915,0.5116,0.1449,1.5746,0.5663,0.1449,1.5558,0.6202,0.1449,1.5351,0.6734,0.1449,1.5125,0.7258,0.1449,1.4881,0.7773,0.1449,1.4619,0.8278,0.1449,1.4339,0.8774,0.1449,1.4041,0.9258,0.1449,1.3726,0.9732,0.1449,1.3395,1.0193,0.1449,1.3047,1.0642,0.1449,1.2683,1.1079,0.1449,1.2304,1.1501,0.1449,1.191,1.191,0.1449,1.1501,1.2304,0.1449,1.1079,1.6466,0.1449,-0.1731,1.6195,0.1449,-0.3442,1.5125,0.1449,-0.6734,1.4881,0.1449,-0.7258,1.4619,0.1449,-0.7773,-1.6006,0.2025,0.3991,-1.5857,0.2025,0.4547,-1.5689,0.2025,0.5098,-1.5501,0.2025,0.5642,-1.5295,0.2025,0.618,-1.507,0.2025,0.671,-1.4827,0.2025,0.7231,-1.4565,0.2025,0.7744,-1.4286,0.2025,0.8248,-0.343,0.2025,1.6136,-0.2865,0.2025,1.6246,-0.2296,0.2025,1.6336,-0.1724,0.2025,1.6406,-0.1151,0.2025,1.6456,-0.0576,0.2025,1.6486,0,0.2025,1.6496,0.0576,0.2025,1.6486,0.1151,0.2025,1.6456,0.1724,0.2025,1.6406,0.2296,0.2025,1.6336,0.2865,0.2025,1.6246,0.343,0.2025,1.6136,0.3991,0.2025,1.6006,0.4547,0.2025,1.5857,0.5098,0.2025,1.5689,0.5642,0.2025,1.5501,0.618,0.2025,1.5295,0.671,0.2025,1.507,0.7231,0.2025,1.4827,0.7744,0.2025,1.4565,0.8248,0.2025,1.4286,0.8742,0.2025,1.399,0.9225,0.2025,1.3676,0.9696,0.2025,1.3346,1.0156,0.2025,1.2999,1.0603,0.2025,1.2637,1.1038,0.2025,1.2259,1.1459,0.2025,1.1866,1.1866,0.2025,1.1459,1.2259,0.2025,1.1038,1.6246,0.2025,0.2865,1.6246,0.2025,-0.2865,1.399,0.2025,-0.8742,1.3676,0.2025,-0.9225,1.3346,0.2025,-0.9696,-1.6325,0.26,0.1716,-1.6256,0.26,0.2285,-1.6166,0.26,0.2851,-1.6057,0.26,0.3413,-1.5928,0.26,0.3971,-1.5779,0.26,0.4525,-1.5612,0.26,0.5073,-1.5425,0.26,0.5614,-1.522,0.26,0.6149,-1.4996,0.26,0.6677,-1.4754,0.26,0.7196,-1.4494,0.26,0.7707,-0.3413,0.26,1.6057,-0.2851,0.26,1.6166,-0.2285,0.26,1.6256,-0.1716,0.26,1.6325,-0.1145,0.26,1.6375,-0.0573,0.26,1.6405,0,0.26,1.6415,0.0573,0.26,1.6405,0.1145,0.26,1.6375,0.1716,0.26,1.6325,0.2285,0.26,1.6256,0.2851,0.26,1.6166,0.3413,0.26,1.6057,0.3971,0.26,1.5928,0.4525,0.26,1.5779,0.5073,0.26,1.5612,0.5614,0.26,1.5425,0.6149,0.26,1.522,0.6677,0.26,1.4996,0.7196,0.26,1.4754,0.7707,0.26,1.4494,0.8208,0.26,1.4216,0.8699,0.26,1.3921,0.9179,0.26,1.3609,0.9649,0.26,1.328,1.0106,0.26,1.2935,1.0552,0.26,1.2575,1.0984,0.26,1.2199,1.1403,0.26,1.1808,1.1808,0.26,1.1403,1.2199,0.26,1.0984,1.2575,0.26,1.0552,1.6057,0.26,0.3413,1.6166,0.26,0.2851,1.6256,0.26,-0.2285,1.328,0.26,-0.9649,-1.6275,0.3171,0.1138,-1.6225,0.3171,0.1705,-1.5683,0.3171,0.4497,-1.5516,0.3171,0.5042,-1.5331,0.3171,0.558,-1.5127,0.3171,0.6112,-1.4664,0.3171,0.7152,-1.4405,0.3171,0.7659,-0.3947,0.3171,1.583,-0.3392,0.3171,1.5958,-0.2833,0.3171,1.6067,-0.2271,0.3171,1.6156,-0.1705,0.3171,1.6225,-0.1138,0.3171,1.6275,-0.0569,0.3171,1.6305,0,0.3171,1.6315,0.0569,0.3171,1.6305,0.1138,0.3171,1.6275,0.1705,0.3171,1.6225,0.2271,0.3171,1.6156,0.2833,0.3171,1.6067,0.3392,0.3171,1.5958,0.3947,0.3171,1.583,0.4497,0.3171,1.5683,0.5042,0.3171,1.5516,0.558,0.3171,1.5331,0.6112,0.3171,1.5127,0.6636,0.3171,1.4904,0.7152,0.3171,1.4664,0.7659,0.3171,1.4405,0.8157,0.3171,1.4129,0.8645,0.3171,1.3836,0.9123,0.3171,1.3525,0.959,0.3171,1.3199,1.0044,0.3171,1.2856,1.0487,0.3171,1.2498,1.0917,0.3171,1.2124,1.1736,0.3171,1.1333,1.2124,0.3171,1.0917,1.2498,0.3171,1.0487,1.583,0.3171,0.3947,1.5958,0.3171,0.3392,1.6156,0.3171,-0.2271,1.583,0.3171,-0.3947,1.5683,0.3171,-0.4497,1.3836,0.3171,-0.8645,1.3525,0.3171,-0.9123,-1.6184,0.3739,0.0565,-1.6155,0.3739,0.113,-1.6105,0.3739,0.1693,-0.4464,0.3739,1.5567,-0.3918,0.3739,1.5713,-0.3367,0.3739,1.584,-0.2812,0.3739,1.5948,-0.2254,0.3739,1.6036,-0.1693,0.3739,1.6105,-0.113,0.3739,1.6155,-0.0565,0.3739,1.6184,0,0.3739,1.6194,0.0565,0.3739,1.6184,0.113,0.3739,1.6155,0.1693,0.3739,1.6105,0.2254,0.3739,1.6036,0.2812,0.3739,1.5948,0.3367,0.3739,1.584,0.3918,0.3739,1.5713,0.4464,0.3739,1.5567,0.5004,0.3739,1.5401,0.5539,0.3739,1.5217,0.6066,0.3739,1.5015,0.6587,0.3739,1.4794,0.7099,0.3739,1.4555,0.7603,0.3739,1.4298,0.8097,0.3739,1.4024,0.8582,0.3739,1.3733,0.9056,0.3739,1.3425,0.9519,0.3739,1.3101,0.997,0.3739,1.2761,1.0409,0.3739,1.2405,1.0836,0.3739,1.2035,1.1249,0.3739,1.1649,1.5713,0.3739,0.3918,1.584,0.3739,0.3367,1.5948,0.3739,-0.2812,1.584,0.3739,-0.3367,1.5713,0.3739,-0.3918,1.5567,0.3739,-0.4464,1.5401,0.3739,-0.5004,1.3425,0.3739,-0.9056,-1.6044,0.4302,-0.056,-1.6054,0.4302,0,-1.6044,0.4302,0.056,-1.6015,0.4302,0.112,-1.5966,0.4302,0.1678,-0.4961,0.4302,1.5268,-0.4425,0.4302,1.5432,-0.3884,0.4302,1.5577,-0.3338,0.4302,1.5703,-0.2788,0.4302,1.581,-0.2234,0.4302,1.5897,-0.1678,0.4302,1.5966,-0.112,0.4302,1.6015,-0.056,0.4302,1.6044,0,0.4302,1.6054,0.056,0.4302,1.6044,0.112,0.4302,1.6015,0.1678,0.4302,1.5966,0.2234,0.4302,1.5897,0.2788,0.4302,1.581,0.3338,0.4302,1.5703,0.3884,0.4302,1.5577,0.4425,0.4302,1.5432,0.4961,0.4302,1.5268,0.5491,0.4302,1.5086,0.6014,0.4302,1.4885,0.653,0.4302,1.4666,0.7037,0.4302,1.4429,0.7537,0.4302,1.4175,0.8027,0.4302,1.3903,0.8507,0.4302,1.3614,0.8977,0.4302,1.3309,0.9436,0.4302,1.2988,0.9884,0.4302,1.265,1.0319,0.4302,1.2298,1.1152,0.4302,1.1548,1.1548,0.4302,1.1152,1.193,0.4302,1.0742,1.5432,0.4302,0.4425,1.5577,0.4302,0.3884,1.5703,0.4302,0.3338,1.581,0.4302,0.2788,1.5897,0.4302,-0.2234,1.581,0.4302,-0.2788,1.5703,0.4302,-0.3338,1.5577,0.4302,-0.3884,1.5432,0.4302,-0.4425,1.5268,0.4302,-0.4961,1.3903,0.4302,-0.8027,-1.5652,0.4859,-0.276,-1.5739,0.4859,-0.2212,-1.5807,0.4859,-0.1661,-1.5855,0.4859,-0.1109,-1.5884,0.4859,-0.0555,-1.5894,0.4859,0,-0.4381,0.4859,1.5278,-0.3845,0.4859,1.5422,-0.3305,0.4859,1.5546,-0.276,0.4859,1.5652,-0.2212,0.4859,1.5739,-0.1661,0.4859,1.5807,-0.1109,0.4859,1.5855,-0.0555,0.4859,1.5884,0,0.4859,1.5894,0.0555,0.4859,1.5884,0.1109,0.4859,1.5855,0.1661,0.4859,1.5807,0.2212,0.4859,1.5739,0.276,0.4859,1.5652,0.3305,0.4859,1.5546,0.3845,0.4859,1.5422,0.4381,0.4859,1.5278,0.4911,0.4859,1.5116,0.5436,0.4859,1.4935,0.5954,0.4859,1.4736,0.6465,0.4859,1.452,0.6967,0.4859,1.4285,0.7462,0.4859,1.4033,0.7947,0.4859,1.3764,0.8422,0.4859,1.3479,0.8888,0.4859,1.3177,0.9342,0.4859,1.2858,0.9785,0.4859,1.2524,1.1041,0.4859,1.1433,1.1433,0.4859,1.1041,1.1811,0.4859,1.0635,1.2175,0.4859,1.0216,1.2524,0.4859,0.9785,1.5278,0.4859,0.4381,1.5422,0.4859,0.3845,1.5546,0.4859,0.3305,1.5652,0.4859,0.276,1.5739,0.4859,0.2212,1.5807,0.4859,-0.1661,1.5739,0.4859,-0.2212,1.5652,0.4859,-0.276,1.5546,0.4859,-0.3305,1.5422,0.4859,-0.3845,1.5278,0.4859,-0.4381,1.3764,0.4859,-0.7947,1.3479,0.4859,-0.8422,-0.6392,0.5411,-1.4356,-1.5248,0.5411,-0.3802,-1.5371,0.5411,-0.3267,-1.5476,0.5411,-0.2729,-1.5562,0.5411,-0.2187,-1.5628,0.5411,-0.1643,-1.5705,0.5411,-0.0548,-1.5715,0.5411,0,-1.5705,0.5411,0.0548,-1.5371,0.5411,0.3267,-1.5106,0.5411,0.4332,-1.4945,0.5411,0.4856,-1.4767,0.5411,0.5375,-0.4332,0.5411,1.5106,-0.3802,0.5411,1.5248,-0.3267,0.5411,1.5371,-0.2729,0.5411,1.5476,-0.2187,0.5411,1.5562,-0.1643,0.5411,1.5628,-0.1096,0.5411,1.5676,-0.0548,0.5411,1.5705,0,0.5411,1.5715,0.0548,0.5411,1.5705,0.1096,0.5411,1.5676,0.1643,0.5411,1.5628,0.2187,0.5411,1.5562,0.2729,0.5411,1.5476,0.3267,0.5411,1.5371,0.3802,0.5411,1.5248,0.4332,0.5411,1.5106,0.4856,0.5411,1.4945,0.5375,0.5411,1.4767,0.5887,0.5411,1.457,0.6392,0.5411,1.4356,0.6889,0.5411,1.4124,0.7378,0.5411,1.3875,0.7857,0.5411,1.3609,0.8327,0.5411,1.3327,0.8787,0.5411,1.3028,0.9237,0.5411,1.2713,1.0515,0.5411,1.1678,1.0916,0.5411,1.1304,1.1304,0.5411,1.0916,1.1678,0.5411,1.0515,1.2038,0.5411,1.0101,1.2383,0.5411,0.9675,1.2713,0.5411,0.9237,1.3028,0.5411,0.8787,1.5106,0.5411,0.4332,1.5248,0.5411,0.3802,1.5371,0.5411,0.3267,1.5476,0.5411,0.2729,1.5562,0.5411,0.2187,1.5628,0.5411,0.1643,1.5676,0.5411,-0.1096,1.5628,0.5411,-0.1643,1.5562,0.5411,-0.2187,1.5476,0.5411,-0.2729,1.5371,0.5411,-0.3267,1.5248,0.5411,-0.3802,1.4767,0.5411,-0.5375,-0.6311,0.5956,-1.4175,-1.5055,0.5956,-0.3754,-1.5177,0.5956,-0.3226,-1.528,0.5956,-0.2694,-1.5365,0.5956,-0.2159,-1.5516,0.5956,0,-1.5507,0.5956,0.0542,-1.5177,0.5956,0.3226,-1.5055,0.5956,0.3754,-0.4277,0.5956,1.4915,-0.3754,0.5956,1.5055,-0.3226,0.5956,1.5177,-0.2694,0.5956,1.528,-0.2159,0.5956,1.5365,-0.1622,0.5956,1.5431,-0.1082,0.5956,1.5478,-0.0542,0.5956,1.5507,0,0.5956,1.5516,0.0542,0.5956,1.5507,0.1082,0.5956,1.5478,0.1622,0.5956,1.5431,0.2159,0.5956,1.5365,0.2694,0.5956,1.528,0.3226,0.5956,1.5177,0.3754,0.5956,1.5055,0.4277,0.5956,1.4915,0.4795,0.5956,1.4757,0.5307,0.5956,1.458,0.5812,0.5956,1.4386,0.6311,0.5956,1.4175,0.6802,0.5956,1.3946,0.7284,0.5956,1.37,0.7758,0.5956,1.3437,0.8222,0.5956,1.3158,0.8676,0.5956,1.2863,0.912,0.5956,1.2553,0.9974,0.5956,1.1886,1.0382,0.5956,1.1531,1.0778,0.5956,1.1161,1.1161,0.5956,1.0778,1.1531,0.5956,1.0382,1.1886,0.5956,0.9974,1.2227,0.5956,0.9553,1.2553,0.5956,0.912,1.2863,0.5956,0.8676,1.3158,0.5956,0.8222,1.458,0.5956,0.5307,1.4915,0.5956,0.4277,1.5055,0.5956,0.3754,1.5177,0.5956,0.3226,1.528,0.5956,0.2694,1.5365,0.5956,0.2159,1.5431,0.5956,0.1622,1.5478,0.5956,0.1082,1.5507,0.5956,-0.0542,1.5478,0.5956,-0.1082,1.5431,0.5956,-0.1622,1.5365,0.5956,-0.2159,1.528,0.5956,-0.2694,1.5177,0.5956,-0.3226,1.5055,0.5956,-0.3754,1.4915,0.5956,-0.4277,1.458,0.5956,-0.5307,-1.4376,0.6494,-0.5232,-1.4706,0.6494,-0.4217,-1.4844,0.6494,-0.3701,-1.4964,0.6494,-0.3181,-1.5066,0.6494,-0.2657,-1.515,0.6494,-0.2129,-1.5215,0.6494,0.1599,-1.515,0.6494,0.2129,-1.5066,0.6494,0.2657,-0.4217,0.6494,1.4706,-0.3701,0.6494,1.4844,-0.3181,0.6494,1.4964,-0.2657,0.6494,1.5066,-0.2129,0.6494,1.515,-0.1599,0.6494,1.5215,-0.1067,0.6494,1.5262,-0.0534,0.6494,1.5289,0,0.6494,1.5299,0.0534,0.6494,1.5289,0.1067,0.6494,1.5262,0.1599,0.6494,1.5215,0.2129,0.6494,1.515,0.2657,0.6494,1.5066,0.3181,0.6494,1.4964,0.3701,0.6494,1.4844,0.4217,0.6494,1.4706,0.4728,0.6494,1.455,0.5232,0.6494,1.4376,0.5731,0.6494,1.4185,0.6223,0.6494,1.3976,0.6707,0.6494,1.375,0.7182,0.6494,1.3508,0.7649,0.6494,1.3249,0.8107,0.6494,1.2974,0.8555,0.6494,1.2683,0.8992,0.6494,1.2377,0.9834,0.6494,1.172,1.0237,0.6494,1.1369,1.0627,0.6494,1.1005,1.1005,0.6494,1.0627,1.1369,0.6494,1.0237,1.172,0.6494,0.9834,1.2056,0.6494,0.9419,1.2377,0.6494,0.8992,1.2683,0.6494,0.8555,1.2974,0.6494,0.8107,1.4376,0.6494,0.5232,1.455,0.6494,0.4728,1.4706,0.6494,0.4217,1.4844,0.6494,0.3701,1.4964,0.6494,0.3181,1.5066,0.6494,0.2657,1.515,0.6494,0.2129,1.5215,0.6494,0.1599,1.5262,0.6494,0.1067,1.5289,0.6494,0.0534,1.5299,0.6494,0,1.5289,0.6494,-0.0534,1.5262,0.6494,-0.1067,1.5215,0.6494,-0.1599,1.515,0.6494,-0.2129,1.5066,0.6494,-0.2657,1.4964,0.6494,-0.3181,1.4844,0.6494,-0.3701,1.4706,0.6494,-0.4217,1.455,0.6494,-0.4728,1.4376,0.6494,-0.5232,1.4185,0.6494,-0.5731,1.3976,0.6494,-0.6223,1.3249,0.6494,-0.7649,-1.3966,0.7024,-0.5643,-1.4326,0.7024,-0.4655,-1.4479,0.7024,-0.4152,-1.4615,0.7024,-0.3644,-1.4734,0.7024,-0.3132,-1.4834,0.7024,-0.2616,-1.4916,0.7024,-0.2096,-1.4734,0.7024,0.3132,-0.3644,0.7024,1.4615,-0.3132,0.7024,1.4734,-0.2616,0.7024,1.4834,-0.2096,0.7024,1.4916,-0.1574,0.7024,1.498,-0.1051,0.7024,1.5026,-0.0526,0.7024,1.5054,0,0.7024,1.5063,0.0526,0.7024,1.5054,0.1051,0.7024,1.5026,0.1574,0.7024,1.498,0.2096,0.7024,1.4916,0.2616,0.7024,1.4834,0.3132,0.7024,1.4734,0.3644,0.7024,1.4615,0.4152,0.7024,1.4479,0.4655,0.7024,1.4326,0.5152,0.7024,1.4154,0.5643,0.7024,1.3966,0.6127,0.7024,1.3761,0.6603,0.7024,1.3538,0.7072,0.7024,1.33,0.7531,0.7024,1.3045,0.7982,0.7024,1.2774,0.8423,0.7024,1.2488,0.9274,0.7024,1.187,0.9682,0.7024,1.1539,1.0079,0.7024,1.1194,1.0464,0.7024,1.0835,1.0835,0.7024,1.0464,1.1194,0.7024,1.0079,1.1539,0.7024,0.9682,1.2488,0.7024,0.8423,1.3966,0.7024,0.5643,1.4154,0.7024,0.5152,1.4326,0.7024,0.4655,1.4479,0.7024,0.4152,1.4615,0.7024,0.3644,1.4734,0.7024,0.3132,1.4834,0.7024,0.2616,1.4916,0.7024,0.2096,1.498,0.7024,0.1574,1.5026,0.7024,0.1051,1.5054,0.7024,0.0526,1.5063,0.7024,0,1.5054,0.7024,-0.0526,1.5026,0.7024,-0.1051,1.498,0.7024,-0.1574,1.4916,0.7024,-0.2096,1.4834,0.7024,-0.2616,1.4734,0.7024,-0.3132,1.4615,0.7024,-0.3644,1.4479,0.7024,-0.4152,1.4326,0.7024,-0.4655,1.4154,0.7024,-0.5152,1.3966,0.7024,-0.5643,1.3761,0.7024,-0.6127,1.3538,0.7024,-0.6603,1.33,0.7024,-0.7072,-1.3528,0.7545,-0.6023,-1.373,0.7545,-0.5547,-1.3915,0.7545,-0.5065,-1.4084,0.7545,-0.4576,-1.4235,0.7545,-0.4082,-1.4369,0.7545,-0.3583,-1.4485,0.7545,-0.3079,-1.4584,0.7545,-0.2571,-1.4664,0.7545,-0.2061,-1.4664,0.7545,0.2061,-0.3583,0.7545,1.4369,-0.3079,0.7545,1.4485,-0.2571,0.7545,1.4584,-0.2061,0.7545,1.4664,-0.1548,0.7545,1.4727,-0.1033,0.7545,1.4772,-0.0517,0.7545,1.48,0,0.7545,1.4809,0.0517,0.7545,1.48,0.1033,0.7545,1.4772,0.1548,0.7545,1.4727,0.2061,0.7545,1.4664,0.2571,0.7545,1.4584,0.3079,0.7545,1.4485,0.3583,0.7545,1.4369,0.4082,0.7545,1.4235,0.4576,0.7545,1.4084,0.5065,0.7545,1.3915,0.5547,0.7545,1.373,0.6023,0.7545,1.3528,0.6492,0.7545,1.331,0.6952,0.7545,1.3075,0.7404,0.7545,1.2825,0.7847,0.7545,1.2558,0.8704,0.7545,1.198,0.9117,0.7545,1.1669,0.9519,0.7545,1.1344,0.9909,0.7545,1.1005,1.0287,0.7545,1.0652,1.0652,0.7545,1.0287,1.1005,0.7545,0.9909,1.1344,0.7545,0.9519,1.198,0.7545,0.8704,1.2558,0.7545,0.7847,1.2825,0.7545,0.7404,1.3075,0.7545,0.6952,1.331,0.7545,0.6492,1.3528,0.7545,0.6023,1.373,0.7545,0.5547,1.3915,0.7545,0.5065,1.4084,0.7545,0.4576,1.4235,0.7545,0.4082,1.4369,0.7545,0.3583,1.4485,0.7545,0.3079,1.4584,0.7545,0.2571,1.4664,0.7545,0.2061,1.4727,0.7545,0.1548,1.4772,0.7545,0.1033,1.48,0.7545,0.0517,1.4809,0.7545,0,1.48,0.7545,-0.0517,1.4772,0.7545,-0.1033,1.4727,0.7545,-0.1548,1.4664,0.7545,-0.2061,1.4584,0.7545,-0.2571,1.4485,0.7545,-0.3079,1.4369,0.7545,-0.3583,1.4235,0.7545,-0.4082,1.4084,0.7545,-0.4576,1.3915,0.7545,-0.5065,1.373,0.7545,-0.5547,1.3528,0.7545,-0.6023,1.331,0.7545,-0.6492,1.3075,0.7545,-0.6952,1.2825,0.7545,-0.7404,-1.3279,0.8058,-0.5912,-1.3478,0.8058,-0.5445,-1.366,0.8058,-0.4972,-1.3825,0.8058,-0.4492,-1.3973,0.8058,-0.4007,-1.4104,0.8058,-0.3517,-1.4219,0.8058,-0.3022,-1.4315,0.8058,-0.2524,-1.4395,0.8058,-0.2023,-1.4457,0.8058,-0.1519,-1.4395,0.8058,0.2023,-0.2524,0.8058,1.4315,-0.2023,0.8058,1.4395,-0.1519,0.8058,1.4457,-0.1014,0.8058,1.4501,-0.0507,0.8058,1.4527,0,0.8058,1.4536,0.0507,0.8058,1.4527,0.1014,0.8058,1.4501,0.1519,0.8058,1.4457,0.2023,0.8058,1.4395,0.2524,0.8058,1.4315,0.3022,0.8058,1.4219,0.3517,0.8058,1.4104,0.4007,0.8058,1.3973,0.4492,0.8058,1.3825,0.4972,0.8058,1.366,0.5445,0.8058,1.3478,0.5912,0.8058,1.3279,0.6372,0.8058,1.3065,0.6824,0.8058,1.2835,0.7268,0.8058,1.2589,0.7703,0.8058,1.2327,0.8129,0.8058,1.2051,0.8544,0.8058,1.176,0.8949,0.8058,1.1455,0.9344,0.8058,1.1135,0.9727,0.8058,1.0802,1.0098,0.8058,1.0456,1.0456,0.8058,1.0098,1.0802,0.8058,0.9727,1.1455,0.8058,0.8949,1.176,0.8058,0.8544,1.2051,0.8058,0.8129,1.2327,0.8058,0.7703,1.2589,0.8058,0.7268,1.2835,0.8058,0.6824,1.3065,0.8058,0.6372,1.3279,0.8058,0.5912,1.3478,0.8058,0.5445,1.366,0.8058,0.4972,1.3825,0.8058,0.4492,1.3973,0.8058,0.4007,1.4104,0.8058,0.3517,1.4219,0.8058,0.3022,1.4315,0.8058,0.2524,1.4395,0.8058,0.2023,1.4457,0.8058,0.1519,1.4501,0.8058,0.1014,1.4527,0.8058,0.0507,1.4536,0.8058,0,1.4527,0.8058,-0.0507,1.4501,0.8058,-0.1014,1.4457,0.8058,-0.1519,1.4395,0.8058,-0.2023,1.4315,0.8058,-0.2524,1.4219,0.8058,-0.3022,1.4104,0.8058,-0.3517,1.3973,0.8058,-0.4007,1.3825,0.8058,-0.4492,1.366,0.8058,-0.4972,1.3478,0.8058,-0.5445,1.3279,0.8058,-0.5912,1.3065,0.8058,-0.6372,1.2835,0.8058,-0.6824,1.2589,0.8058,-0.7268,-1.2804,0.856,-0.6245,-1.3209,0.856,-0.5337,-1.3387,0.856,-0.4872,-1.3549,0.856,-0.4402,-1.3694,0.856,-0.3927,-1.3823,0.856,-0.3446,-1.3935,0.856,-0.2962,-1.403,0.856,-0.2474,-1.4107,0.856,-0.1983,-1.4168,0.856,-0.1489,-1.4211,0.856,-0.0994,-1.4237,0.856,-0.0497,-1.4246,0.856,0,-1.4237,0.856,0.0497,-1.4211,0.856,0.0994,-1.4168,0.856,0.1489,-1.4107,0.856,0.1983,-0.2474,0.856,1.403,-0.1983,0.856,1.4107,-0.1489,0.856,1.4168,-0.0994,0.856,1.4211,-0.0497,0.856,1.4237,0,0.856,1.4246,0.0497,0.856,1.4237,0.0994,0.856,1.4211,0.1489,0.856,1.4168,0.1983,0.856,1.4107,0.2474,0.856,1.403,0.2962,0.856,1.3935,0.3446,0.856,1.3823,0.3927,0.856,1.3694,0.4402,0.856,1.3549,0.4872,0.856,1.3387,0.5337,0.856,1.3209,0.5794,0.856,1.3014,0.6245,0.856,1.2804,0.6688,0.856,1.2579,0.7123,0.856,1.2338,0.7549,0.856,1.2081,0.7966,0.856,1.1811,0.8374,0.856,1.1525,0.8771,0.856,1.1226,0.9157,0.856,1.0913,0.9533,0.856,1.0587,0.9896,0.856,1.0248,1.0248,0.856,0.9896,1.0587,0.856,0.9533,1.0913,0.856,0.9157,1.1226,0.856,0.8771,1.1525,0.856,0.8374,1.1811,0.856,0.7966,1.2081,0.856,0.7549,1.2338,0.856,0.7123,1.2579,0.856,0.6688,1.2804,0.856,0.6245,1.3014,0.856,0.5794,1.3209,0.856,0.5337,1.3387,0.856,0.4872,1.3549,0.856,0.4402,1.3694,0.856,0.3927,1.3823,0.856,0.3446,1.3935,0.856,0.2962,1.403,0.856,0.2474,1.4107,0.856,0.1983,1.4168,0.856,0.1489,1.4211,0.856,0.0994,1.4237,0.856,0.0497,1.4246,0.856,0,1.4237,0.856,-0.0497,1.4211,0.856,-0.0994,1.4168,0.856,-0.1489,1.4107,0.856,-0.1983,1.403,0.856,-0.2474,1.3935,0.856,-0.2962,1.3823,0.856,-0.3446,1.3694,0.856,-0.3927,1.3549,0.856,-0.4402,1.3387,0.856,-0.4872,1.3209,0.856,-0.5337,1.3014,0.856,-0.5794,1.2804,0.856,-0.6245,1.2579,0.856,-0.6688,1.2338,0.856,-0.7123,-1.2528,0.9052,-0.611,-1.2734,0.9052,-0.5669,-1.2924,0.9052,-0.5222,-1.3098,0.9052,-0.4767,-1.3256,0.9052,-0.4307,-1.3399,0.9052,-0.3842,-1.3525,0.9052,-0.3372,-1.3634,0.9052,-0.2898,-1.3727,0.9052,-0.242,-1.3803,0.9052,-0.194,-1.3862,0.9052,-0.1457,-1.3905,0.9052,-0.0972,-1.393,0.9052,-0.0486,-1.3939,0.9052,0,-1.393,0.9052,0.0486,-1.3905,0.9052,0.0972,-1.3862,0.9052,0.1457,-1.3803,0.9052,0.194,-0.194,0.9052,1.3803,-0.1457,0.9052,1.3862,-0.0972,0.9052,1.3905,-0.0486,0.9052,1.393,0,0.9052,1.3939,0.0486,0.9052,1.393,0.0972,0.9052,1.3905,0.1457,0.9052,1.3862,0.194,0.9052,1.3803,0.242,0.9052,1.3727,0.2898,0.9052,1.3634,0.5222,0.9052,1.2924,0.8193,0.9052,1.1277,0.8582,0.9052,1.0984,0.896,0.9052,1.0678,0.9327,0.9052,1.0358,0.9683,0.9052,1.0027,1.0027,0.9052,0.9683,1.0358,0.9052,0.9327,1.0678,0.9052,0.896,1.0984,0.9052,0.8582,1.1277,0.9052,0.8193,1.1556,0.9052,0.7794,1.1821,0.9052,0.7386,1.2071,0.9052,0.6969,1.2307,0.9052,0.6544,1.2528,0.9052,0.611,1.2734,0.9052,0.5669,1.2924,0.9052,0.5222,1.3098,0.9052,0.4767,1.3256,0.9052,0.4307,1.3399,0.9052,0.3842,1.3525,0.9052,0.3372,1.3634,0.9052,0.2898,1.3727,0.9052,0.242,1.3803,0.9052,0.194,1.3862,0.9052,0.1457,1.3905,0.9052,0.0972,1.393,0.9052,0.0486,1.3939,0.9052,0,1.393,0.9052,-0.0486,1.3905,0.9052,-0.0972,1.3862,0.9052,-0.1457,1.3803,0.9052,-0.194,1.3727,0.9052,-0.242,1.3634,0.9052,-0.2898,1.3525,0.9052,-0.3372,1.3399,0.9052,-0.3842,1.3256,0.9052,-0.4307,1.3098,0.9052,-0.4767,1.2924,0.9052,-0.5222,1.2734,0.9052,-0.5669,1.2528,0.9052,-0.611,1.2307,0.9052,-0.6544,1.2071,0.9052,-0.6969,1.0678,0.9052,-0.896,1.0358,0.9052,-0.9327,-1.179,0.9533,-0.6807,-1.2021,0.9533,-0.6392,-1.2236,0.9533,-0.5968,-1.2437,0.9533,-0.5537,-1.2623,0.9533,-0.51,-1.2793,0.9533,-0.4656,-1.2948,0.9533,-0.4207,-1.3087,0.9533,-0.3753,-1.321,0.9533,-0.3294,-1.3317,0.9533,-0.2831,-1.3407,0.9533,-0.2364,-1.3482,0.9533,-0.1895,-1.354,0.9533,-0.1423,-1.3581,0.9533,-0.095,-1.3606,0.9533,-0.0475,-1.3614,0.9533,0,-1.3606,0.9533,0.0475,-1.3581,0.9533,0.095,-1.354,0.9533,0.1423,-1.3482,0.9533,0.1895,-1.3407,0.9533,0.2364,-1.3317,0.9533,0.2831,-0.1423,0.9533,1.354,-0.095,0.9533,1.3581,-0.0475,0.9533,1.3606,0,0.9533,1.3614,0.0475,0.9533,1.3606,0.095,0.9533,1.3581,0.1423,0.9533,1.354,0.1895,0.9533,1.3482,0.2364,0.9533,1.3407,0.5968,0.9533,1.2236,0.7214,0.9533,1.1546,0.7613,0.9533,1.1287,0.8002,0.9533,1.1014,0.8382,0.9533,1.0728,0.8751,0.9533,1.0429,0.911,0.9533,1.0117,0.9457,0.9533,0.9793,0.9793,0.9533,0.9457,1.0117,0.9533,0.911,1.0429,0.9533,0.8751,1.0728,0.9533,0.8382,1.1014,0.9533,0.8002,1.1287,0.9533,0.7613,1.1546,0.9533,0.7214,1.179,0.9533,0.6807,1.2021,0.9533,0.6392,1.2236,0.9533,0.5968,1.2437,0.9533,0.5537,1.2623,0.9533,0.51,1.2793,0.9533,0.4656,1.2948,0.9533,0.4207,1.3087,0.9533,0.3753,1.321,0.9533,0.3294,1.3317,0.9533,0.2831,1.3407,0.9533,0.2364,1.3482,0.9533,0.1895,1.354,0.9533,0.1423,1.3581,0.9533,0.095,1.3606,0.9533,0.0475,1.3614,0.9533,0,1.3606,0.9533,-0.0475,1.3581,0.9533,-0.095,1.354,0.9533,-0.1423,1.3482,0.9533,-0.1895,1.3407,0.9533,-0.2364,1.3317,0.9533,-0.2831,1.321,0.9533,-0.3294,1.3087,0.9533,-0.3753,1.2948,0.9533,-0.4207,1.2793,0.9533,-0.4656,1.2623,0.9533,-0.51,1.2437,0.9533,-0.5537,1.2236,0.9533,-0.5968,1.2021,0.9533,-0.6392,1.1014,0.9533,-0.8002,1.0728,0.9533,-0.8382,1.0117,0.9533,-0.911,0.9793,0.9533,-0.9457,0.9457,0.9533,-0.9793,0.911,0.9533,-1.0117,-1.1256,1.0002,-0.7034,-1.1495,1.0002,-0.6637,-1.172,1.0002,-0.6231,-1.193,1.0002,-0.5819,-1.2126,1.0002,-0.5399,-1.2307,1.0002,-0.4972,-1.2473,1.0002,-0.454,-1.2624,1.0002,-0.4102,-1.2759,1.0002,-0.3659,-1.2879,1.0002,-0.3211,-1.2983,1.0002,-0.276,-1.3072,1.0002,-0.2305,-1.3144,1.0002,-0.1847,-1.3201,1.0002,-0.1387,-1.3241,1.0002,-0.0926,-1.3265,1.0002,-0.0463,-1.3273,1.0002,0,-1.3265,1.0002,0.0463,-1.3241,1.0002,0.0926,-1.3201,1.0002,0.1387,-1.3144,1.0002,0.1847,-1.3072,1.0002,0.2305,-1.2983,1.0002,0.276,-1.2879,1.0002,0.3211,-0.1847,1.0002,1.3144,-0.1387,1.0002,1.3201,-0.0926,1.0002,1.3241,0.0463,1.0002,1.3265,0.0926,1.0002,1.3241,0.1387,1.0002,1.3201,0.1847,1.0002,1.3144,0.2305,1.0002,1.3072,0.3211,1.0002,1.2879,0.4972,1.0002,1.2307,0.6231,1.0002,1.172,0.6637,1.0002,1.1495,0.7034,1.0002,1.1256,0.7422,1.0002,1.1004,0.7802,1.0002,1.0738,0.8172,1.0002,1.046,0.8532,1.0002,1.0168,0.8882,1.0002,0.9864,0.922,1.0002,0.9548,0.9548,1.0002,0.922,0.9864,1.0002,0.8882,1.0168,1.0002,0.8532,1.046,1.0002,0.8172,1.0738,1.0002,0.7802,1.1004,1.0002,0.7422,1.1256,1.0002,0.7034,1.1495,1.0002,0.6637,1.172,1.0002,0.6231,1.193,1.0002,0.5819,1.2126,1.0002,0.5399,1.2307,1.0002,0.4972,1.2473,1.0002,0.454,1.2624,1.0002,0.4102,1.2759,1.0002,0.3659,1.2879,1.0002,0.3211,1.2983,1.0002,0.276,1.3072,1.0002,0.2305,1.3144,1.0002,0.1847,1.3201,1.0002,0.1387,1.3241,1.0002,0.0926,1.3265,1.0002,0.0463,1.3273,1.0002,0,1.3265,1.0002,-0.0463,1.3241,1.0002,-0.0926,1.3201,1.0002,-0.1387,1.3144,1.0002,-0.1847,1.3072,1.0002,-0.2305,1.2983,1.0002,-0.276,1.2879,1.0002,-0.3211,1.2759,1.0002,-0.3659,1.2624,1.0002,-0.4102,1.2473,1.0002,-0.454,1.2307,1.0002,-0.4972,1.2126,1.0002,-0.5399,1.193,1.0002,-0.5819,1.172,1.0002,-0.6231,1.1495,1.0002,-0.6637,1.1256,1.0002,-0.7034,1.0738,1.0002,-0.7802,1.046,1.0002,-0.8172,0.922,1.0002,-0.9548,0.8882,1.0002,-0.9864,0.8532,1.0002,-1.0168,-1.0708,1.0459,-0.7223,-1.0954,1.0459,-0.6845,-1.1186,1.0459,-0.6458,-1.1404,1.0459,-0.6064,-1.1609,1.0459,-0.5662,-1.18,1.0459,-0.5253,-1.1976,1.0459,-0.4838,-1.2137,1.0459,-0.4418,-1.2284,1.0459,-0.3991,-1.2416,1.0459,-0.356,-1.2533,1.0459,-0.3125,-1.2634,1.0459,-0.2685,-1.272,1.0459,-0.2243,-1.279,1.0459,-0.1798,-1.2845,1.0459,-0.135,-1.2885,1.0459,-0.0901,-1.2908,1.0459,-0.0451,-1.2916,1.0459,0,-1.2908,1.0459,0.0451,-1.2885,1.0459,0.0901,-1.2845,1.0459,0.135,-1.279,1.0459,0.1798,-1.272,1.0459,0.2243,-1.2634,1.0459,0.2685,-1.2533,1.0459,0.3125,-0.2243,1.0459,1.272,-0.1798,1.0459,1.279,-0.135,1.0459,1.2845,-0.0901,1.0459,1.2885,-0.0451,1.0459,1.2908,0,1.0459,1.2916,0.356,1.0459,1.2416,0.4838,1.0459,1.1976,0.6064,1.0459,1.1404,0.6458,1.0459,1.1186,0.6845,1.0459,1.0954,0.7223,1.0459,1.0708,0.7592,1.0459,1.0449,0.7952,1.0459,1.0178,0.8302,1.0459,0.9894,0.8643,1.0459,0.9599,0.8972,1.0459,0.9291,0.9291,1.0459,0.8972,0.9599,1.0459,0.8643,0.9894,1.0459,0.8302,1.0178,1.0459,0.7952,1.0449,1.0459,0.7592,1.0708,1.0459,0.7223,1.0954,1.0459,0.6845,1.1186,1.0459,0.6458,1.1404,1.0459,0.6064,1.1609,1.0459,0.5662,1.18,1.0459,0.5253,1.1976,1.0459,0.4838,1.2137,1.0459,0.4418,1.2284,1.0459,0.3991,1.2416,1.0459,0.356,1.2533,1.0459,0.3125,1.2634,1.0459,0.2685,1.272,1.0459,0.2243,1.279,1.0459,0.1798,1.2845,1.0459,0.135,1.2885,1.0459,0.0901,1.2908,1.0459,0.0451,1.2916,1.0459,0,1.2908,1.0459,-0.0451,1.2885,1.0459,-0.0901,1.2845,1.0459,-0.135,1.279,1.0459,-0.1798,1.272,1.0459,-0.2243,1.2634,1.0459,-0.2685,1.2533,1.0459,-0.3125,1.2416,1.0459,-0.356,1.2284,1.0459,-0.3991,1.2137,1.0459,-0.4418,1.1976,1.0459,-0.4838,1.18,1.0459,-0.5253,1.1609,1.0459,-0.5662,1.0449,1.0459,-0.7592,1.0178,1.0459,-0.7952,0.8302,1.0459,-0.9894,-1.0399,1.0904,-0.7014,-1.0637,1.0904,-0.6647,-1.0863,1.0904,-0.6272,-1.1075,1.0904,-0.5889,-1.1274,1.0904,-0.5499,-1.1459,1.0904,-0.5102,-1.163,1.0904,-0.4699,-1.1787,1.0904,-0.429,-1.1929,1.0904,-0.3876,-1.2057,1.0904,-0.3457,-1.2171,1.0904,-0.3034,-1.2269,1.0904,-0.2608,-1.2353,1.0904,-0.2178,-1.2421,1.0904,-0.1746,-1.2475,1.0904,-0.1311,-1.2513,1.0904,-0.0875,-1.2536,1.0904,-0.0438,-1.2543,1.0904,0,-1.2536,1.0904,0.0438,-1.2513,1.0904,0.0875,-1.2475,1.0904,0.1311,-1.2421,1.0904,0.1746,-1.2353,1.0904,0.2178,-1.2269,1.0904,0.2608,-1.2171,1.0904,0.3034,-1.2057,1.0904,0.3457,-1.1929,1.0904,0.3876,-0.1746,1.0904,1.2421,-0.1311,1.0904,1.2475,-0.0875,1.0904,1.2513,-0.0438,1.0904,1.2536,0,1.0904,1.2543,0.1746,1.0904,1.2421,0.3034,1.0904,1.2171,0.3457,1.0904,1.2057,0.429,1.0904,1.1787,0.4699,1.0904,1.163,0.5102,1.0904,1.1459,0.5499,1.0904,1.1274,0.6272,1.0904,1.0863,0.6647,1.0904,1.0637,0.7014,1.0904,1.0399,0.7373,1.0904,1.0148,0.7722,1.0904,0.9884,0.8063,1.0904,0.9609,0.8393,1.0904,0.9321,0.8713,1.0904,0.9023,0.9023,1.0904,0.8713,0.9321,1.0904,0.8393,0.9609,1.0904,0.8063,0.9884,1.0904,0.7722,1.0148,1.0904,0.7373,1.0399,1.0904,0.7014,1.0637,1.0904,0.6647,1.0863,1.0904,0.6272,1.1075,1.0904,0.5889,1.1274,1.0904,0.5499,1.1459,1.0904,0.5102,1.163,1.0904,0.4699,1.1787,1.0904,0.429,1.1929,1.0904,0.3876,1.2057,1.0904,0.3457,1.2171,1.0904,0.3034,1.2269,1.0904,0.2608,1.2353,1.0904,0.2178,1.2421,1.0904,0.1746,1.2475,1.0904,0.1311,1.2513,1.0904,0.0875,1.2536,1.0904,0.0438,1.2543,1.0904,0,1.2536,1.0904,-0.0438,1.2513,1.0904,-0.0875,1.2475,1.0904,-0.1311,1.2421,1.0904,-0.1746,1.2353,1.0904,-0.2178,1.2269,1.0904,-0.2608,1.2171,1.0904,-0.3034,1.2057,1.0904,-0.3457,1.1929,1.0904,-0.3876,1.1787,1.0904,-0.429,1.163,1.0904,-0.4699,1.1459,1.0904,-0.5102,1.1274,1.0904,-0.5499,1.1075,1.0904,-0.5889,1.0863,1.0904,-0.6272,1.0637,1.0904,-0.6647,1.0399,1.0904,-0.7014,1.0148,1.0904,-0.7373,0.9884,1.0904,-0.7722,0.8063,1.0904,-0.9609,-1.0077,1.1335,-0.6797,-1.0308,1.1335,-0.6441,-1.0527,1.1335,-0.6078,-1.0732,1.1335,-0.5706,-1.0925,1.1335,-0.5328,-1.1104,1.1335,-0.4944,-1.127,1.1335,-0.4553,-1.1422,1.1335,-0.4157,-1.156,1.1335,-0.3756,-1.1684,1.1335,-0.335,-1.1794,1.1335,-0.2941,-1.1889,1.1335,-0.2527,-1.197,1.1335,-0.2111,-1.2037,1.1335,-0.1692,-1.2089,1.1335,-0.1271,-1.2125,1.1335,-0.0848,-1.2148,1.1335,-0.0424,-1.2155,1.1335,0,-1.2148,1.1335,0.0424,-1.2125,1.1335,0.0848,-1.2089,1.1335,0.1271,-1.2037,1.1335,0.1692,-1.197,1.1335,0.2111,-1.1889,1.1335,0.2527,-1.1794,1.1335,0.2941,-1.1684,1.1335,0.335,-1.156,1.1335,0.3756,-0.1692,1.1335,1.2037,-0.1271,1.1335,1.2089,-0.0848,1.1335,1.2125,-0.0424,1.1335,1.2148,0,1.1335,1.2155,0.0424,1.1335,1.2148,0.2527,1.1335,1.1889,0.2941,1.1335,1.1794,0.3756,1.1335,1.156,0.4157,1.1335,1.1422,0.4553,1.1335,1.127,0.4944,1.1335,1.1104,0.5328,1.1335,1.0925,0.8133,1.1335,0.9033,0.8444,1.1335,0.8744,0.8744,1.1335,0.8444,0.9033,1.1335,0.8133,0.9311,1.1335,0.7813,0.9578,1.1335,0.7483,0.9834,1.1335,0.7145,1.0077,1.1335,0.6797,1.0308,1.1335,0.6441,1.0527,1.1335,0.6078,1.0732,1.1335,0.5706,1.0925,1.1335,0.5328,1.1104,1.1335,0.4944,1.127,1.1335,0.4553,1.1422,1.1335,0.4157,1.156,1.1335,0.3756,1.1684,1.1335,0.335,1.1794,1.1335,0.2941,1.1889,1.1335,0.2527,1.197,1.1335,0.2111,1.2037,1.1335,0.1692,1.2089,1.1335,0.1271,1.2125,1.1335,0.0848,1.2148,1.1335,0.0424,1.2155,1.1335,0,1.2148,1.1335,-0.0424,1.2125,1.1335,-0.0848,1.2089,1.1335,-0.1271,1.2037,1.1335,-0.1692,1.197,1.1335,-0.2111,1.1889,1.1335,-0.2527,1.1794,1.1335,-0.2941,1.1684,1.1335,-0.335,1.156,1.1335,-0.3756,1.1422,1.1335,-0.4157,1.127,1.1335,-0.4553,1.1104,1.1335,-0.4944,1.0925,1.1335,-0.5328,1.0732,1.1335,-0.5706,1.0527,1.1335,-0.6078,1.0308,1.1335,-0.6441,1.0077,1.1335,-0.6797,0.9834,1.1335,-0.7145,0.9578,1.1335,-0.7483,0.9311,1.1335,-0.7813,0.7813,1.1335,-0.9311,0.7483,1.1335,-0.9578,0.7145,1.1335,-0.9834,-0.9743,1.1752,-0.6572,-0.9966,1.1752,-0.6228,-1.0178,1.1752,-0.5876,-1.0377,1.1752,-0.5517,-1.0563,1.1752,-0.5152,-1.0736,1.1752,-0.478,-1.0896,1.1752,-0.4402,-1.1043,1.1752,-0.4019,-1.1177,1.1752,-0.3632,-1.1297,1.1752,-0.3239,-1.1403,1.1752,-0.2843,-1.1495,1.1752,-0.2443,-1.1574,1.1752,-0.2041,-1.1638,1.1752,-0.1636,-1.1688,1.1752,-0.1228,-1.1723,1.1752,-0.082,-1.1745,1.1752,-0.041,-1.1752,1.1752,0,-1.1745,1.1752,0.041,-1.1723,1.1752,0.082,-1.1688,1.1752,0.1228,-1.1638,1.1752,0.1636,-1.1574,1.1752,0.2041,-1.1495,1.1752,0.2443,-1.1403,1.1752,0.2843,-1.1297,1.1752,0.3239,-1.1177,1.1752,0.3632,-1.1043,1.1752,0.4019,-1.0896,1.1752,0.4402,-1.0563,1.1752,0.5152,0,1.1752,1.1752,0.041,1.1752,1.1745,0.082,1.1752,1.1723,0.1228,1.1752,1.1688,0.1636,1.1752,1.1638,0.2041,1.1752,1.1574,0.2443,1.1752,1.1495,0.3239,1.1752,1.1297,0.3632,1.1752,1.1177,0.4019,1.1752,1.1043,0.4402,1.1752,1.0896,0.478,1.1752,1.0736,0.5152,1.1752,1.0563,0.5517,1.1752,1.0377,0.6572,1.1752,0.9743,0.7235,1.1752,0.9261,0.7554,1.1752,0.9003,0.7864,1.1752,0.8734,0.8164,1.1752,0.8454,0.8454,1.1752,0.8164,0.8734,1.1752,0.7864,0.9003,1.1752,0.7554,0.9261,1.1752,0.7235,0.9508,1.1752,0.6908,0.9743,1.1752,0.6572,0.9966,1.1752,0.6228,1.0178,1.1752,0.5876,1.0377,1.1752,0.5517,1.0563,1.1752,0.5152,1.0736,1.1752,0.478,1.0896,1.1752,0.4402,1.1043,1.1752,0.4019,1.1177,1.1752,0.3632,1.1297,1.1752,0.3239,1.1403,1.1752,0.2843,1.1495,1.1752,0.2443,1.1574,1.1752,0.2041,1.1638,1.1752,0.1636,1.1688,1.1752,0.1228,1.1723,1.1752,0.082,1.1745,1.1752,0.041,1.1752,1.1752,0,1.1745,1.1752,-0.041,1.1723,1.1752,-0.082,1.1688,1.1752,-0.1228,1.1638,1.1752,-0.1636,1.1574,1.1752,-0.2041,1.1495,1.1752,-0.2443,1.1403,1.1752,-0.2843,1.1297,1.1752,-0.3239,1.1177,1.1752,-0.3632,1.1043,1.1752,-0.4019,1.0896,1.1752,-0.4402,1.0736,1.1752,-0.478,1.0563,1.1752,-0.5152,1.0377,1.1752,-0.5517,1.0178,1.1752,-0.5876,0.9966,1.1752,-0.6228,0.9743,1.1752,-0.6572,0.9508,1.1752,-0.6908,0.9261,1.1752,-0.7235,0.9003,1.1752,-0.7554,0.8734,1.1752,-0.7864,0.8454,1.1752,-0.8164,0.8164,1.1752,-0.8454,0.7235,1.1752,-0.9261,-0.9397,1.2155,-0.6338,-0.9612,1.2155,-0.6007,-0.9816,1.2155,-0.5667,-1.0008,1.2155,-0.5321,-1.0188,1.2155,-0.4969,-1.0355,1.2155,-0.461,-1.0509,1.2155,-0.4246,-1.0651,1.2155,-0.3877,-1.078,1.2155,-0.3503,-1.0896,1.2155,-0.3124,-1.0998,1.2155,-0.2742,-1.1087,1.2155,-0.2357,-1.1163,1.2155,-0.1968,-1.1225,1.2155,-0.1578,-1.1273,1.2155,-0.1185,-1.1307,1.2155,-0.0791,-1.1328,1.2155,-0.0396,-1.1335,1.2155,0,-1.1328,1.2155,0.0396,-1.1307,1.2155,0.0791,-1.1273,1.2155,0.1185,-1.1225,1.2155,0.1578,-1.1163,1.2155,0.1968,-1.1087,1.2155,0.2357,-1.0998,1.2155,0.2742,-1.0896,1.2155,0.3124,-1.078,1.2155,0.3503,-1.0651,1.2155,0.3877,-1.0509,1.2155,0.4246,-1.0355,1.2155,0.461,-1.0188,1.2155,0.4969,-0.9397,1.2155,0.6338,-0.917,1.2155,0.6662,-0.0396,1.2155,1.1328,0,1.2155,1.1335,0.0396,1.2155,1.1328,0.0791,1.2155,1.1307,0.1185,1.2155,1.1273,0.1578,1.2155,1.1225,0.1968,1.2155,1.1163,0.2357,1.2155,1.1087,0.2742,1.2155,1.0998,0.3124,1.2155,1.0896,0.3503,1.2155,1.078,0.3877,1.2155,1.0651,0.4246,1.2155,1.0509,0.461,1.2155,1.0355,0.4969,1.2155,1.0188,0.5321,1.2155,1.0008,0.5667,1.2155,0.9816,0.6007,1.2155,0.9612,0.6338,1.2155,0.9397,0.6662,1.2155,0.917,0.6978,1.2155,0.8932,0.7286,1.2155,0.8683,0.7584,1.2155,0.8423,0.7874,1.2155,0.8154,0.8154,1.2155,0.7874,0.8423,1.2155,0.7584,0.8683,1.2155,0.7286,0.8932,1.2155,0.6978,0.917,1.2155,0.6662,0.9397,1.2155,0.6338,0.9612,1.2155,0.6007,0.9816,1.2155,0.5667,1.0008,1.2155,0.5321,1.0188,1.2155,0.4969,1.0355,1.2155,0.461,1.0509,1.2155,0.4246,1.0651,1.2155,0.3877,1.078,1.2155,0.3503,1.0896,1.2155,0.3124,1.0998,1.2155,0.2742,1.1087,1.2155,0.2357,1.1163,1.2155,0.1968,1.1225,1.2155,0.1578,1.1273,1.2155,0.1185,1.1307,1.2155,0.0791,1.1328,1.2155,0.0396,1.1335,1.2155,0,1.1328,1.2155,-0.0396,1.1307,1.2155,-0.0791,1.1273,1.2155,-0.1185,1.1225,1.2155,-0.1578,1.1163,1.2155,-0.1968,1.1087,1.2155,-0.2357,1.0998,1.2155,-0.2742,1.0896,1.2155,-0.3124,1.078,1.2155,-0.3503,1.0651,1.2155,-0.3877,1.0509,1.2155,-0.4246,1.0355,1.2155,-0.461,1.0188,1.2155,-0.4969,1.0008,1.2155,-0.5321,0.9816,1.2155,-0.5667,0.9612,1.2155,-0.6007,0.9397,1.2155,-0.6338,0.917,1.2155,-0.6662,0.8932,1.2155,-0.6978,0.8683,1.2155,-0.7286,0.8423,1.2155,-0.7584,0.8154,1.2155,-0.7874,0.7874,1.2155,-0.8154,0.7584,1.2155,-0.8423,0.6978,1.2155,-0.8932,-0.8821,1.2543,-0.6409,-0.904,1.2543,-0.6097,-0.9247,1.2543,-0.5778,-0.9443,1.2543,-0.5452,-0.9627,1.2543,-0.5119,-0.98,1.2543,-0.478,-0.9961,1.2543,-0.4435,-1.011,1.2543,-0.4085,-1.0246,1.2543,-0.3729,-1.037,1.2543,-0.3369,-1.0481,1.2543,-0.3005,-1.058,1.2543,-0.2638,-1.0665,1.2543,-0.2267,-1.0738,1.2543,-0.1893,-1.0798,1.2543,-0.1518,-1.0844,1.2543,-0.114,-1.0877,1.2543,-0.0761,-1.0897,1.2543,-0.0381,-1.0904,1.2543,0,-1.0897,1.2543,0.0381,-1.0877,1.2543,0.0761,-1.0844,1.2543,0.114,-1.0798,1.2543,0.1518,-1.0738,1.2543,0.1893,-1.0665,1.2543,0.2267,-1.058,1.2543,0.2638,-1.0481,1.2543,0.3005,-1.037,1.2543,0.3369,-1.0246,1.2543,0.3729,-1.011,1.2543,0.4085,-0.9961,1.2543,0.4435,-0.9247,1.2543,0.5778,-0.904,1.2543,0.6097,-0.8821,1.2543,0.6409,-0.0761,1.2543,1.0877,-0.0381,1.2543,1.0897,0,1.2543,1.0904,0.0381,1.2543,1.0897,0.0761,1.2543,1.0877,0.114,1.2543,1.0844,0.1518,1.2543,1.0798,0.1893,1.2543,1.0738,0.2267,1.2543,1.0665,0.2638,1.2543,1.058,0.3005,1.2543,1.0481,0.3369,1.2543,1.037,0.3729,1.2543,1.0246,0.4085,1.2543,1.011,0.4435,1.2543,0.9961,0.478,1.2543,0.98,0.5119,1.2543,0.9627,0.5452,1.2543,0.9443,0.5778,1.2543,0.9247,0.6097,1.2543,0.904,0.6409,1.2543,0.8821,0.6713,1.2543,0.8592,0.7009,1.2543,0.8353,0.7296,1.2543,0.8103,0.7574,1.2543,0.7843,0.7843,1.2543,0.7574,0.8103,1.2543,0.7296,0.8353,1.2543,0.7009,0.8592,1.2543,0.6713,0.8821,1.2543,0.6409,0.904,1.2543,0.6097,0.9247,1.2543,0.5778,0.9443,1.2543,0.5452,0.9627,1.2543,0.5119,0.98,1.2543,0.478,0.9961,1.2543,0.4435,1.011,1.2543,0.4085,1.0246,1.2543,0.3729,1.037,1.2543,0.3369,1.0481,1.2543,0.3005,1.058,1.2543,0.2638,1.0665,1.2543,0.2267,1.0738,1.2543,0.1893,1.0798,1.2543,0.1518,1.0844,1.2543,0.114,1.0877,1.2543,0.0761,1.0897,1.2543,0.0381,1.0904,1.2543,0,1.0897,1.2543,-0.0381,1.0877,1.2543,-0.0761,1.0844,1.2543,-0.114,1.0798,1.2543,-0.1518,1.0738,1.2543,-0.1893,1.0665,1.2543,-0.2267,1.058,1.2543,-0.2638,1.0481,1.2543,-0.3005,1.037,1.2543,-0.3369,1.0246,1.2543,-0.3729,1.011,1.2543,-0.4085,0.9961,1.2543,-0.4435,0.98,1.2543,-0.478,0.9627,1.2543,-0.5119,0.9443,1.2543,-0.5452,0.9247,1.2543,-0.5778,0.904,1.2543,-0.6097,0.8821,1.2543,-0.6409,0.8592,1.2543,-0.6713,0.8353,1.2543,-0.7009,0.8103,1.2543,-0.7296,0.7843,1.2543,-0.7574,0.7574,1.2543,-0.7843,0.7296,1.2543,-0.8103,0.7009,1.2543,-0.8353,0.6713,1.2543,-0.8592,-0.8242,1.2916,-0.6439,-0.8462,1.2916,-0.6148,-0.8671,1.2916,-0.5849,-0.887,1.2916,-0.5543,-0.9058,1.2916,-0.523,-0.9235,1.2916,-0.491,-0.9401,1.2916,-0.4585,-0.9555,1.2916,-0.4254,-0.9698,1.2916,-0.3918,-0.9829,1.2916,-0.3577,-0.9947,1.2916,-0.3232,-1.0054,1.2916,-0.2883,-1.0149,1.2916,-0.253,-1.0231,1.2916,-0.2175,-1.03,1.2916,-0.1816,-1.0358,1.2916,-0.1456,-1.0402,1.2916,-0.1093,-1.0434,1.2916,-0.073,-1.0453,1.2916,-0.0365,-1.0459,1.2916,0,-1.0453,1.2916,0.0365,-1.0434,1.2916,0.073,-1.0402,1.2916,0.1093,-1.0358,1.2916,0.1456,-1.03,1.2916,0.1816,-1.0231,1.2916,0.2175,-1.0149,1.2916,0.253,-1.0054,1.2916,0.2883,-0.9947,1.2916,0.3232,-0.9829,1.2916,0.3577,-0.9698,1.2916,0.3918,-0.9555,1.2916,0.4254,-0.9401,1.2916,0.4585,-0.9235,1.2916,0.491,-0.9058,1.2916,0.523,-0.073,1.2916,1.0434,-0.0365,1.2916,1.0453,0,1.2916,1.0459,0.0365,1.2916,1.0453,0.073,1.2916,1.0434,0.1093,1.2916,1.0402,0.1456,1.2916,1.0358,0.1816,1.2916,1.03,0.2175,1.2916,1.0231,0.253,1.2916,1.0149,0.2883,1.2916,1.0054,0.3232,1.2916,0.9947,0.3577,1.2916,0.9829,0.3918,1.2916,0.9698,0.4254,1.2916,0.9555,0.4585,1.2916,0.9401,0.491,1.2916,0.9235,0.523,1.2916,0.9058,0.5543,1.2916,0.887,0.5849,1.2916,0.8671,0.6148,1.2916,0.8462,0.6439,1.2916,0.8242,0.6723,1.2916,0.8012,0.6999,1.2916,0.7773,0.7266,1.2916,0.7524,0.7524,1.2916,0.7266,0.7773,1.2916,0.6999,0.8012,1.2916,0.6723,0.8242,1.2916,0.6439,0.8462,1.2916,0.6148,0.8671,1.2916,0.5849,0.887,1.2916,0.5543,0.9058,1.2916,0.523,0.9235,1.2916,0.491,0.9401,1.2916,0.4585,0.9555,1.2916,0.4254,0.9698,1.2916,0.3918,0.9829,1.2916,0.3577,0.9947,1.2916,0.3232,1.0054,1.2916,0.2883,1.0149,1.2916,0.253,1.0231,1.2916,0.2175,1.03,1.2916,0.1816,1.0358,1.2916,0.1456,1.0402,1.2916,0.1093,1.0434,1.2916,0.073,1.0453,1.2916,0.0365,1.0459,1.2916,0,1.0453,1.2916,-0.0365,1.0434,1.2916,-0.073,1.0402,1.2916,-0.1093,1.0358,1.2916,-0.1456,1.03,1.2916,-0.1816,1.0231,1.2916,-0.2175,1.0149,1.2916,-0.253,1.0054,1.2916,-0.2883,0.9947,1.2916,-0.3232,0.9829,1.2916,-0.3577,0.9698,1.2916,-0.3918,0.9555,1.2916,-0.4254,0.9401,1.2916,-0.4585,0.9235,1.2916,-0.491,0.9058,1.2916,-0.523,0.887,1.2916,-0.5543,0.8671,1.2916,-0.5849,0.8462,1.2916,-0.6148,0.8242,1.2916,-0.6439,0.8012,1.2916,-0.6723,0.7773,1.2916,-0.6999,0.7524,1.2916,-0.7266,0.7266,1.2916,-0.7524,0.6999,1.2916,-0.7773,0.6723,1.2916,-0.8012,0.6439,1.2916,-0.8242,-0.7882,1.3273,-0.6158,-0.8092,1.3273,-0.5879,-0.8292,1.3273,-0.5593,-0.8482,1.3273,-0.53,-0.8662,1.3273,-0.5001,-0.8831,1.3273,-0.4696,-0.899,1.3273,-0.4385,-0.9137,1.3273,-0.4068,-0.9274,1.3273,-0.3747,-0.9399,1.3273,-0.3421,-0.9513,1.3273,-0.3091,-0.9615,1.3273,-0.2757,-0.9705,1.3273,-0.242,-0.9784,1.3273,-0.208,-0.985,1.3273,-0.1737,-0.9905,1.3273,-0.1392,-0.9947,1.3273,-0.1046,-0.9978,1.3273,-0.0698,-0.9996,1.3273,-0.0349,-1.0002,1.3273,0,-0.9996,1.3273,0.0349,-0.9978,1.3273,0.0698,-0.9947,1.3273,0.1046,-0.9905,1.3273,0.1392,-0.9784,1.3273,0.208,-0.9705,1.3273,0.242,-0.9615,1.3273,0.2757,-0.9513,1.3273,0.3091,-0.9399,1.3273,0.3421,-0.9274,1.3273,0.3747,-0.9137,1.3273,0.4068,-0.899,1.3273,0.4385,-0.8831,1.3273,0.4696,-0.8662,1.3273,0.5001,-0.8482,1.3273,0.53,-0.8292,1.3273,0.5593,-0.1392,1.3273,0.9905,-0.0698,1.3273,0.9978,-0.0349,1.3273,0.9996,0,1.3273,1.0002,0.0698,1.3273,0.9978,0.1046,1.3273,0.9947,0.1392,1.3273,0.9905,0.1737,1.3273,0.985,0.208,1.3273,0.9784,0.242,1.3273,0.9705,0.2757,1.3273,0.9615,0.3091,1.3273,0.9513,0.3421,1.3273,0.9399,0.3747,1.3273,0.9274,0.4068,1.3273,0.9137,0.4385,1.3273,0.899,0.4696,1.3273,0.8831,0.5001,1.3273,0.8662,0.53,1.3273,0.8482,0.5593,1.3273,0.8292,0.5879,1.3273,0.8092,0.6158,1.3273,0.7882,0.6429,1.3273,0.7662,0.6693,1.3273,0.7433,0.6948,1.3273,0.7195,0.7195,1.3273,0.6948,0.7433,1.3273,0.6693,0.7662,1.3273,0.6429,0.7882,1.3273,0.6158,0.8092,1.3273,0.5879,0.8292,1.3273,0.5593,0.8482,1.3273,0.53,0.8662,1.3273,0.5001,0.8831,1.3273,0.4696,0.899,1.3273,0.4385,0.9137,1.3273,0.4068,0.9274,1.3273,0.3747,0.9399,1.3273,0.3421,0.9513,1.3273,0.3091,0.9615,1.3273,0.2757,0.9705,1.3273,0.242,0.9784,1.3273,0.208,0.985,1.3273,0.1737,0.9905,1.3273,0.1392,0.9947,1.3273,0.1046,0.9978,1.3273,0.0698,0.9996,1.3273,0.0349,1.0002,1.3273,0,0.9996,1.3273,-0.0349,0.9978,1.3273,-0.0698,0.9947,1.3273,-0.1046,0.9905,1.3273,-0.1392,0.985,1.3273,-0.1737,0.9784,1.3273,-0.208,0.9705,1.3273,-0.242,0.9615,1.3273,-0.2757,0.9513,1.3273,-0.3091,0.9399,1.3273,-0.3421,0.9274,1.3273,-0.3747,0.9137,1.3273,-0.4068,0.899,1.3273,-0.4385,0.8831,1.3273,-0.4696,0.8662,1.3273,-0.5001,0.8482,1.3273,-0.53,0.8292,1.3273,-0.5593,0.8092,1.3273,-0.5879,0.7882,1.3273,-0.6158,0.7662,1.3273,-0.6429,0.7433,1.3273,-0.6693,0.7195,1.3273,-0.6948,0.6948,1.3273,-0.7195,0.6693,1.3273,-0.7433,0.6429,1.3273,-0.7662,0.6158,1.3273,-0.7882,0.4068,1.3273,-0.9137,0.3747,1.3273,-0.9274,-0.2628,1.3614,-0.9164,-0.7303,1.3614,-0.6128,-0.7512,1.3614,-0.5869,-0.7712,1.3614,-0.5603,-0.7903,1.3614,-0.5331,-0.8084,1.3614,-0.5052,-0.8256,1.3614,-0.4766,-0.8417,1.3614,-0.4475,-0.8568,1.3614,-0.4179,-0.8709,1.3614,-0.3877,-0.8839,1.3614,-0.3571,-0.8958,1.3614,-0.326,-0.9066,1.3614,-0.2946,-0.9164,1.3614,-0.2628,-0.925,1.3614,-0.2306,-0.9325,1.3614,-0.1982,-0.9388,1.3614,-0.1655,-0.944,1.3614,-0.1327,-0.9481,1.3614,-0.0996,-0.951,1.3614,-0.0665,-0.9527,1.3614,-0.0333,-0.9533,1.3614,0,-0.9527,1.3614,0.0333,-0.951,1.3614,0.0665,-0.9481,1.3614,0.0996,-0.9388,1.3614,0.1655,-0.9325,1.3614,0.1982,-0.925,1.3614,0.2306,-0.9164,1.3614,0.2628,-0.9066,1.3614,0.2946,-0.8958,1.3614,0.326,-0.8839,1.3614,0.3571,-0.8709,1.3614,0.3877,-0.8568,1.3614,0.4179,-0.8417,1.3614,0.4475,-0.8256,1.3614,0.4766,-0.8084,1.3614,0.5052,-0.1327,1.3614,0.944,-0.0996,1.3614,0.9481,-0.0665,1.3614,0.951,-0.0333,1.3614,0.9527,0.2628,1.3614,0.9164,0.2946,1.3614,0.9066,0.326,1.3614,0.8958,0.3571,1.3614,0.8839,0.3877,1.3614,0.8709,0.4179,1.3614,0.8568,0.4475,1.3614,0.8417,0.4766,1.3614,0.8256,0.5052,1.3614,0.8084,0.5331,1.3614,0.7903,0.5603,1.3614,0.7712,0.5869,1.3614,0.7512,0.6128,1.3614,0.7303,0.6379,1.3614,0.7084,0.6622,1.3614,0.6857,0.6857,1.3614,0.6622,0.7084,1.3614,0.6379,0.7303,1.3614,0.6128,0.7512,1.3614,0.5869,0.7712,1.3614,0.5603,0.7903,1.3614,0.5331,0.8084,1.3614,0.5052,0.8256,1.3614,0.4766,0.8417,1.3614,0.4475,0.8568,1.3614,0.4179,0.8709,1.3614,0.3877,0.8839,1.3614,0.3571,0.8958,1.3614,0.326,0.9066,1.3614,0.2946,0.9164,1.3614,0.2628,0.925,1.3614,0.2306,0.9325,1.3614,0.1982,0.9388,1.3614,0.1655,0.944,1.3614,0.1327,0.9481,1.3614,0.0996,0.951,1.3614,0.0665,0.9527,1.3614,0.0333,0.9533,1.3614,0,0.9527,1.3614,-0.0333,0.951,1.3614,-0.0665,0.9481,1.3614,-0.0996,0.944,1.3614,-0.1327,0.9388,1.3614,-0.1655,0.9325,1.3614,-0.1982,0.925,1.3614,-0.2306,0.9164,1.3614,-0.2628,0.9066,1.3614,-0.2946,0.8958,1.3614,-0.326,0.8839,1.3614,-0.3571,0.8709,1.3614,-0.3877,0.8568,1.3614,-0.4179,0.8417,1.3614,-0.4475,0.8256,1.3614,-0.4766,0.8084,1.3614,-0.5052,0.7903,1.3614,-0.5331,0.7712,1.3614,-0.5603,0.7512,1.3614,-0.5869,0.7303,1.3614,-0.6128,0.7084,1.3614,-0.6379,0.6857,1.3614,-0.6622,0.6622,1.3614,-0.6857,0.3877,1.3614,-0.8709,0.3571,1.3614,-0.8839,0.326,1.3614,-0.8958,0.2946,1.3614,-0.9066,-0.3391,1.3939,-0.8393,-0.6727,1.3939,-0.6057,-0.6934,1.3939,-0.5818,-0.7133,1.3939,-0.5573,-0.7323,1.3939,-0.5321,-0.7504,1.3939,-0.5062,-0.7676,1.3939,-0.4797,-0.7839,1.3939,-0.4526,-0.7992,1.3939,-0.425,-0.8136,1.3939,-0.3968,-0.8269,1.3939,-0.3682,-0.8393,1.3939,-0.3391,-0.8506,1.3939,-0.3096,-0.8609,1.3939,-0.2797,-0.8701,1.3939,-0.2495,-0.8783,1.3939,-0.219,-0.8854,1.3939,-0.1882,-0.8914,1.3939,-0.1572,-0.8964,1.3939,-0.126,-0.9002,1.3939,-0.0946,-0.903,1.3939,-0.0631,-0.9046,1.3939,-0.0316,-0.9052,1.3939,0,-0.8783,1.3939,0.219,-0.8701,1.3939,0.2495,-0.8609,1.3939,0.2797,-0.8506,1.3939,0.3096,-0.8393,1.3939,0.3391,-0.8269,1.3939,0.3682,-0.8136,1.3939,0.3968,-0.7992,1.3939,0.425,-0.0946,1.3939,0.9002,-0.0631,1.3939,0.903,0.126,1.3939,0.8964,0.1572,1.3939,0.8914,0.1882,1.3939,0.8854,0.219,1.3939,0.8783,0.3391,1.3939,0.8393,0.3682,1.3939,0.8269,0.3968,1.3939,0.8136,0.425,1.3939,0.7992,0.4526,1.3939,0.7839,0.4797,1.3939,0.7676,0.5062,1.3939,0.7504,0.5321,1.3939,0.7323,0.5573,1.3939,0.7133,0.5818,1.3939,0.6934,0.6057,1.3939,0.6727,0.6288,1.3939,0.6511,0.6511,1.3939,0.6288,0.6727,1.3939,0.6057,0.6934,1.3939,0.5818,0.7133,1.3939,0.5573,0.7323,1.3939,0.5321,0.7504,1.3939,0.5062,0.7676,1.3939,0.4797,0.7839,1.3939,0.4526,0.7992,1.3939,0.425,0.8136,1.3939,0.3968,0.8269,1.3939,0.3682,0.8393,1.3939,0.3391,0.8506,1.3939,0.3096,0.8609,1.3939,0.2797,0.8701,1.3939,0.2495,0.8783,1.3939,0.219,0.8854,1.3939,0.1882,0.8914,1.3939,0.1572,0.8964,1.3939,0.126,0.9002,1.3939,0.0946,0.903,1.3939,0.0631,0.9046,1.3939,0.0316,0.9052,1.3939,0,0.9046,1.3939,-0.0316,0.903,1.3939,-0.0631,0.9002,1.3939,-0.0946,0.8964,1.3939,-0.126,0.8914,1.3939,-0.1572,0.8854,1.3939,-0.1882,0.8783,1.3939,-0.219,0.8701,1.3939,-0.2495,0.8609,1.3939,-0.2797,0.8506,1.3939,-0.3096,0.8393,1.3939,-0.3391,0.8269,1.3939,-0.3682,0.8136,1.3939,-0.3968,0.7992,1.3939,-0.425,0.7839,1.3939,-0.4526,0.7676,1.3939,-0.4797,0.7504,1.3939,-0.5062,0.7323,1.3939,-0.5321,0.7133,1.3939,-0.5573,0.6934,1.3939,-0.5818,0.6727,1.3939,-0.6057,0.6511,1.3939,-0.6288,0.6288,1.3939,-0.6511,0.6057,1.3939,-0.6727,0.3682,1.3939,-0.8269,0.3391,1.3939,-0.8393,0.3096,1.3939,-0.8506,0.2797,1.3939,-0.8609,-0.2645,1.4246,-0.8141,-0.2928,1.4246,-0.8044,-0.3207,1.4246,-0.7937,-0.3482,1.4246,-0.782,-0.3752,1.4246,-0.7694,-0.5728,1.4246,-0.6361,-0.5946,1.4246,-0.6158,-0.6158,1.4246,-0.5946,-0.6361,1.4246,-0.5728,-0.6557,1.4246,-0.5502,-0.6745,1.4246,-0.527,-0.6925,1.4246,-0.5031,-0.7097,1.4246,-0.4787,-0.7259,1.4246,-0.4536,-0.7413,1.4246,-0.428,-0.7558,1.4246,-0.4019,-0.7694,1.4246,-0.3752,-0.782,1.4246,-0.3482,-0.7937,1.4246,-0.3207,-0.8044,1.4246,-0.2928,-0.8141,1.4246,-0.2645,-0.8228,1.4246,-0.2359,-0.8306,1.4246,-0.2071,-0.8373,1.4246,-0.178,-0.843,1.4246,-0.1486,-0.8477,1.4246,-0.1191,-0.8513,1.4246,-0.0895,-0.8539,1.4246,-0.0597,-0.8373,1.4246,0.178,-0.8306,1.4246,0.2071,-0.8228,1.4246,0.2359,-0.8141,1.4246,0.2645,-0.8044,1.4246,0.2928,-0.782,1.4246,0.3482,-0.7694,1.4246,0.3752,-0.0597,1.4246,0.8539,0.0895,1.4246,0.8513,0.1191,1.4246,0.8477,0.178,1.4246,0.8373,0.2071,1.4246,0.8306,0.2359,1.4246,0.8228,0.3482,1.4246,0.782,0.3752,1.4246,0.7694,0.4019,1.4246,0.7558,0.428,1.4246,0.7413,0.4536,1.4246,0.7259,0.4787,1.4246,0.7097,0.5031,1.4246,0.6925,0.527,1.4246,0.6745,0.5502,1.4246,0.6557,0.5728,1.4246,0.6361,0.5946,1.4246,0.6158,0.6158,1.4246,0.5946,0.6361,1.4246,0.5728,0.6557,1.4246,0.5502,0.6745,1.4246,0.527,0.6925,1.4246,0.5031,0.7097,1.4246,0.4787,0.7259,1.4246,0.4536,0.7413,1.4246,0.428,0.7558,1.4246,0.4019,0.7694,1.4246,0.3752,0.782,1.4246,0.3482,0.7937,1.4246,0.3207,0.8044,1.4246,0.2928,0.8141,1.4246,0.2645,0.8228,1.4246,0.2359,0.8306,1.4246,0.2071,0.8373,1.4246,0.178,0.843,1.4246,0.1486,0.8477,1.4246,0.1191,0.8513,1.4246,0.0895,0.8539,1.4246,0.0597,0.8555,1.4246,0.0299,0.856,1.4246,0,0.8555,1.4246,-0.0299,0.8539,1.4246,-0.0597,0.8513,1.4246,-0.0895,0.8477,1.4246,-0.1191,0.843,1.4246,-0.1486,0.8373,1.4246,-0.178,0.8306,1.4246,-0.2071,0.8228,1.4246,-0.2359,0.8141,1.4246,-0.2645,0.8044,1.4246,-0.2928,0.7937,1.4246,-0.3207,0.782,1.4246,-0.3482,0.7694,1.4246,-0.3752,0.7558,1.4246,-0.4019,0.7413,1.4246,-0.428,0.7259,1.4246,-0.4536,0.7097,1.4246,-0.4787,0.6925,1.4246,-0.5031,0.6745,1.4246,-0.527,0.6557,1.4246,-0.5502,0.6361,1.4246,-0.5728,0.6158,1.4246,-0.5946,0.5946,1.4246,-0.6158,0.5728,1.4246,-0.6361,0.5502,1.4246,-0.6557,0.4019,1.4246,-0.7558,0.2928,1.4246,-0.8044,0.2645,1.4246,-0.8141,-0.2221,1.4536,-0.7745,-0.249,1.4536,-0.7663,-0.2756,1.4536,-0.7572,-0.3018,1.4536,-0.7471,-0.3277,1.4536,-0.7361,-0.3532,1.4536,-0.7242,-0.3783,1.4536,-0.7114,-0.4029,1.4536,-0.6978,-0.427,1.4536,-0.6833,-0.4506,1.4536,-0.668,-0.4736,1.4536,-0.6519,-0.4961,1.4536,-0.6349,-0.5179,1.4536,-0.6172,-0.5392,1.4536,-0.5988,-0.5597,1.4536,-0.5796,-0.5796,1.4536,-0.5597,-0.5988,1.4536,-0.5392,-0.6172,1.4536,-0.5179,-0.6349,1.4536,-0.4961,-0.6519,1.4536,-0.4736,-0.668,1.4536,-0.4506,-0.6833,1.4536,-0.427,-0.6978,1.4536,-0.4029,-0.7114,1.4536,-0.3783,-0.7242,1.4536,-0.3532,-0.7361,1.4536,-0.3277,-0.7471,1.4536,-0.3018,-0.7572,1.4536,-0.2756,-0.7663,1.4536,-0.249,-0.7745,1.4536,-0.2221,-0.7818,1.4536,-0.1949,-0.7881,1.4536,-0.1675,-0.7935,1.4536,-0.1399,-0.7979,1.4536,-0.1121,-0.8013,1.4536,-0.0842,-0.7881,1.4536,0.1675,-0.7818,1.4536,0.1949,-0.7745,1.4536,0.2221,-0.7663,1.4536,0.249,-0.7572,1.4536,0.2756,-0.5988,1.4536,0.5392,-0.5796,1.4536,0.5597,-0.5597,1.4536,0.5796,0.0842,1.4536,0.8013,0.1121,1.4536,0.7979,0.1399,1.4536,0.7935,0.1675,1.4536,0.7881,0.1949,1.4536,0.7818,0.2221,1.4536,0.7745,0.3018,1.4536,0.7471,0.3277,1.4536,0.7361,0.3532,1.4536,0.7242,0.3783,1.4536,0.7114,0.4029,1.4536,0.6978,0.427,1.4536,0.6833,0.4506,1.4536,0.668,0.4736,1.4536,0.6519,0.4961,1.4536,0.6349,0.5179,1.4536,0.6172,0.5392,1.4536,0.5988,0.5597,1.4536,0.5796,0.5796,1.4536,0.5597,0.5988,1.4536,0.5392,0.6172,1.4536,0.5179,0.6349,1.4536,0.4961,0.6519,1.4536,0.4736,0.668,1.4536,0.4506,0.6833,1.4536,0.427,0.6978,1.4536,0.4029,0.7114,1.4536,0.3783,0.7242,1.4536,0.3532,0.7361,1.4536,0.3277,0.7471,1.4536,0.3018,0.7572,1.4536,0.2756,0.7663,1.4536,0.249,0.7745,1.4536,0.2221,0.7818,1.4536,0.1949,0.7881,1.4536,0.1675,0.7935,1.4536,0.1399,0.7979,1.4536,0.1121,0.8013,1.4536,0.0842,0.8038,1.4536,0.0562,0.8053,1.4536,0.0281,0.8058,1.4536,0,0.8053,1.4536,-0.0281,0.8038,1.4536,-0.0562,0.8013,1.4536,-0.0842,0.7979,1.4536,-0.1121,0.7935,1.4536,-0.1399,0.7881,1.4536,-0.1675,0.7818,1.4536,-0.1949,0.7745,1.4536,-0.2221,0.7663,1.4536,-0.249,0.7572,1.4536,-0.2756,0.7471,1.4536,-0.3018,0.7361,1.4536,-0.3277,0.7242,1.4536,-0.3532,0.7114,1.4536,-0.3783,0.6978,1.4536,-0.4029,0.6833,1.4536,-0.427,0.668,1.4536,-0.4506,0.6519,1.4536,-0.4736,0.6349,1.4536,-0.4961,0.6172,1.4536,-0.5179,0.5988,1.4536,-0.5392,0.5796,1.4536,-0.5597,0.5597,1.4536,-0.5796,0.5392,1.4536,-0.5988,0.5179,1.4536,-0.6172,0.4961,1.4536,-0.6349,0.4736,1.4536,-0.6519,0.4506,1.4536,-0.668,0.427,1.4536,-0.6833,0.4029,1.4536,-0.6978,0.3783,1.4536,-0.7114,0.3532,1.4536,-0.7242,0.2756,1.4536,-0.7572,0.2221,1.4536,-0.7745,0.1949,1.4536,-0.7818,0.1675,1.4536,-0.7881,0.1399,1.4536,-0.7935,0.1121,1.4536,-0.7979,-0.131,1.4809,-0.7431,-0.208,1.4809,-0.7253,-0.2332,1.4809,-0.7176,-0.2581,1.4809,-0.709,-0.2827,1.4809,-0.6996,-0.3069,1.4809,-0.6893,-0.3308,1.4809,-0.6782,-0.3542,1.4809,-0.6662,-0.3773,1.4809,-0.6534,-0.3998,1.4809,-0.6399,-0.4219,1.4809,-0.6255,-0.4435,1.4809,-0.6104,-0.4645,1.4809,-0.5946,-0.485,1.4809,-0.578,-0.5049,1.4809,-0.5607,-0.5241,1.4809,-0.5428,-0.5428,1.4809,-0.5241,-0.5607,1.4809,-0.5049,-0.578,1.4809,-0.485,-0.5946,1.4809,-0.4645,-0.6104,1.4809,-0.4435,-0.6255,1.4809,-0.4219,-0.6399,1.4809,-0.3998,-0.6534,1.4809,-0.3773,-0.6662,1.4809,-0.3542,-0.6782,1.4809,-0.3308,-0.6893,1.4809,-0.3069,-0.6996,1.4809,-0.2827,-0.709,1.4809,-0.2581,-0.7176,1.4809,-0.2332,-0.7253,1.4809,-0.208,-0.7321,1.4809,-0.1825,-0.738,1.4809,-0.1569,-0.7431,1.4809,-0.131,-0.7472,1.4809,-0.105,-0.7504,1.4809,-0.0789,-0.7527,1.4809,-0.0526,-0.7541,1.4809,-0.0263,-0.709,1.4809,0.2581,-0.6996,1.4809,0.2827,-0.6893,1.4809,0.3069,-0.578,1.4809,0.485,-0.5607,1.4809,0.5049,-0.5428,1.4809,0.5241,-0.5241,1.4809,0.5428,0.0789,1.4809,0.7504,0.105,1.4809,0.7472,0.131,1.4809,0.7431,0.1569,1.4809,0.738,0.1825,1.4809,0.7321,0.208,1.4809,0.7253,0.2827,1.4809,0.6996,0.3069,1.4809,0.6893,0.3308,1.4809,0.6782,0.3542,1.4809,0.6662,0.3773,1.4809,0.6534,0.3998,1.4809,0.6399,0.4219,1.4809,0.6255,0.4435,1.4809,0.6104,0.4645,1.4809,0.5946,0.485,1.4809,0.578,0.5049,1.4809,0.5607,0.5241,1.4809,0.5428,0.5428,1.4809,0.5241,0.5607,1.4809,0.5049,0.578,1.4809,0.485,0.5946,1.4809,0.4645,0.6104,1.4809,0.4435,0.6255,1.4809,0.4219,0.6399,1.4809,0.3998,0.6534,1.4809,0.3773,0.6662,1.4809,0.3542,0.6782,1.4809,0.3308,0.6893,1.4809,0.3069,0.6996,1.4809,0.2827,0.709,1.4809,0.2581,0.7176,1.4809,0.2332,0.7253,1.4809,0.208,0.7321,1.4809,0.1825,0.738,1.4809,0.1569,0.7431,1.4809,0.131,0.7472,1.4809,0.105,0.7504,1.4809,0.0789,0.7527,1.4809,0.0526,0.7541,1.4809,0.0263,0.7545,1.4809,0,0.7541,1.4809,-0.0263,0.7527,1.4809,-0.0526,0.7504,1.4809,-0.0789,0.7472,1.4809,-0.105,0.7431,1.4809,-0.131,0.738,1.4809,-0.1569,0.7321,1.4809,-0.1825,0.7253,1.4809,-0.208,0.7176,1.4809,-0.2332,0.709,1.4809,-0.2581,0.6996,1.4809,-0.2827,0.6893,1.4809,-0.3069,0.6782,1.4809,-0.3308,0.6662,1.4809,-0.3542,0.6534,1.4809,-0.3773,0.6399,1.4809,-0.3998,0.6255,1.4809,-0.4219,0.6104,1.4809,-0.4435,0.5946,1.4809,-0.4645,0.578,1.4809,-0.485,0.5607,1.4809,-0.5049,0.5428,1.4809,-0.5241,0.5241,1.4809,-0.5428,0.5049,1.4809,-0.5607,0.485,1.4809,-0.578,0.4645,1.4809,-0.5946,0.4435,1.4809,-0.6104,0.4219,1.4809,-0.6255,0.3998,1.4809,-0.6399,0.3773,1.4809,-0.6534,0.3542,1.4809,-0.6662,0.3308,1.4809,-0.6782,0.3069,1.4809,-0.6893,0.2827,1.4809,-0.6996,0.2581,1.4809,-0.709,0.2332,1.4809,-0.7176,0.208,1.4809,-0.7253,0.1825,1.4809,-0.7321,0.1569,1.4809,-0.738,0.131,1.4809,-0.7431,0.105,1.4809,-0.7472,0.0789,1.4809,-0.7504,0.0526,1.4809,-0.7527,0.0263,1.4809,-0.7541,0,1.5063,-0.7024,-0.049,1.5063,-0.7007,-0.0734,1.5063,-0.6985,-0.1699,1.5063,-0.6815,-0.1936,1.5063,-0.6752,-0.2171,1.5063,-0.668,-0.2402,1.5063,-0.66,-0.2631,1.5063,-0.6512,-0.2857,1.5063,-0.6417,-0.3079,1.5063,-0.6313,-0.3298,1.5063,-0.6202,-0.3512,1.5063,-0.6083,-0.3722,1.5063,-0.5957,-0.3928,1.5063,-0.5823,-0.4129,1.5063,-0.5682,-0.4324,1.5063,-0.5535,-0.4515,1.5063,-0.5381,-0.47,1.5063,-0.522,-0.4879,1.5063,-0.5053,-0.5053,1.5063,-0.4879,-0.522,1.5063,-0.47,-0.5381,1.5063,-0.4515,-0.5535,1.5063,-0.4324,-0.5682,1.5063,-0.4129,-0.5823,1.5063,-0.3928,-0.5957,1.5063,-0.3722,-0.6083,1.5063,-0.3512,-0.6202,1.5063,-0.3298,-0.6313,1.5063,-0.3079,-0.6417,1.5063,-0.2857,-0.6512,1.5063,-0.2631,-0.66,1.5063,-0.2402,-0.668,1.5063,-0.2171,-0.6752,1.5063,-0.1936,-0.6815,1.5063,-0.1699,-0.687,1.5063,-0.146,-0.6917,1.5063,-0.122,-0.6956,1.5063,-0.0978,-0.6985,1.5063,-0.0734,-0.7007,1.5063,-0.049,-0.702,1.5063,-0.0245,-0.7024,1.5063,0,-0.702,1.5063,0.0245,-0.7007,1.5063,0.049,-0.6985,1.5063,0.0734,-0.687,1.5063,0.146,-0.6815,1.5063,0.1699,-0.6752,1.5063,0.1936,-0.668,1.5063,0.2171,-0.66,1.5063,0.2402,-0.6512,1.5063,0.2631,-0.6417,1.5063,0.2857,-0.6313,1.5063,0.3079,-0.5535,1.5063,0.4324,-0.5381,1.5063,0.4515,-0.522,1.5063,0.47,-0.5053,1.5063,0.4879,-0.4879,1.5063,0.5053,-0.47,1.5063,0.522,-0.2857,1.5063,0.6417,-0.2631,1.5063,0.6512,-0.2402,1.5063,0.66,-0.2171,1.5063,0.668,-0.1936,1.5063,0.6752,0.146,1.5063,0.687,0.1699,1.5063,0.6815,0.1936,1.5063,0.6752,0.2171,1.5063,0.668,0.2402,1.5063,0.66,0.3079,1.5063,0.6313,0.3298,1.5063,0.6202,0.3512,1.5063,0.6083,0.3722,1.5063,0.5957,0.3928,1.5063,0.5823,0.4324,1.5063,0.5535,0.4515,1.5063,0.5381,0.47,1.5063,0.522,0.4879,1.5063,0.5053,0.5053,1.5063,0.4879,0.522,1.5063,0.47,0.5381,1.5063,0.4515,0.5535,1.5063,0.4324,0.5682,1.5063,0.4129,0.5823,1.5063,0.3928,0.5957,1.5063,0.3722,0.6083,1.5063,0.3512,0.6202,1.5063,0.3298,0.6313,1.5063,0.3079,0.6417,1.5063,0.2857,0.6512,1.5063,0.2631,0.66,1.5063,0.2402,0.668,1.5063,0.2171,0.6752,1.5063,0.1936,0.6815,1.5063,0.1699,0.687,1.5063,0.146,0.6917,1.5063,0.122,0.6956,1.5063,0.0978,0.6985,1.5063,0.0734,0.7007,1.5063,0.049,0.702,1.5063,0.0245,0.7024,1.5063,0,0.702,1.5063,-0.0245,0.7007,1.5063,-0.049,0.6985,1.5063,-0.0734,0.6956,1.5063,-0.0978,0.6917,1.5063,-0.122,0.687,1.5063,-0.146,0.6815,1.5063,-0.1699,0.6752,1.5063,-0.1936,0.668,1.5063,-0.2171,0.66,1.5063,-0.2402,0.6512,1.5063,-0.2631,0.6417,1.5063,-0.2857,0.6313,1.5063,-0.3079,0.6202,1.5063,-0.3298,0.6083,1.5063,-0.3512,0.5957,1.5063,-0.3722,0.5823,1.5063,-0.3928,0.5682,1.5063,-0.4129,0.5535,1.5063,-0.4324,0.5381,1.5063,-0.4515,0.522,1.5063,-0.47,0.5053,1.5063,-0.4879,0.4879,1.5063,-0.5053,0.47,1.5063,-0.522,0.4515,1.5063,-0.5381,0.4324,1.5063,-0.5535,0.4129,1.5063,-0.5682,0.3928,1.5063,-0.5823,0.3722,1.5063,-0.5957,0.3512,1.5063,-0.6083,0.3298,1.5063,-0.6202,0.3079,1.5063,-0.6313,0.2857,1.5063,-0.6417,0.2631,1.5063,-0.6512,0.2402,1.5063,-0.66,0.2171,1.5063,-0.668,0.1936,1.5063,-0.6752,0.1699,1.5063,-0.6815,0.146,1.5063,-0.687,0.122,1.5063,-0.6917,0.0978,1.5063,-0.6956,0.0734,1.5063,-0.6985,0.049,1.5063,-0.7007,0.0245,1.5063,-0.702,0,1.5299,-0.6494,-0.0227,1.5299,-0.649,-0.0453,1.5299,-0.6478,-0.0679,1.5299,-0.6458,-0.0904,1.5299,-0.6431,-0.179,1.5299,-0.6242,-0.2007,1.5299,-0.6176,-0.2221,1.5299,-0.6102,-0.2433,1.5299,-0.6021,-0.2641,1.5299,-0.5933,-0.2847,1.5299,-0.5837,-0.3049,1.5299,-0.5734,-0.3247,1.5299,-0.5624,-0.3441,1.5299,-0.5507,-0.3631,1.5299,-0.5384,-0.3817,1.5299,-0.5254,-0.3998,1.5299,-0.5117,-0.4174,1.5299,-0.4975,-0.4345,1.5299,-0.4826,-0.4511,1.5299,-0.4671,-0.4671,1.5299,-0.4511,-0.4826,1.5299,-0.4345,-0.4975,1.5299,-0.4174,-0.5117,1.5299,-0.3998,-0.5254,1.5299,-0.3817,-0.5384,1.5299,-0.3631,-0.5507,1.5299,-0.3441,-0.5624,1.5299,-0.3247,-0.5734,1.5299,-0.3049,-0.5837,1.5299,-0.2847,-0.5933,1.5299,-0.2641,-0.6021,1.5299,-0.2433,-0.6102,1.5299,-0.2221,-0.6176,1.5299,-0.2007,-0.6242,1.5299,-0.179,-0.6301,1.5299,-0.1571,-0.6352,1.5299,-0.135,-0.6395,1.5299,-0.1128,-0.6431,1.5299,-0.0904,-0.6458,1.5299,-0.0679,-0.6478,1.5299,-0.0453,-0.649,1.5299,-0.0227,-0.6494,1.5299,0,-0.649,1.5299,0.0227,-0.6478,1.5299,0.0453,-0.6458,1.5299,0.0679,-0.6176,1.5299,0.2007,-0.6102,1.5299,0.2221,-0.6021,1.5299,0.2433,-0.5933,1.5299,0.2641,-0.5837,1.5299,0.2847,-0.5734,1.5299,0.3049,-0.5117,1.5299,0.3998,-0.4975,1.5299,0.4174,-0.4826,1.5299,0.4345,-0.4671,1.5299,0.4511,-0.4511,1.5299,0.4671,-0.4345,1.5299,0.4826,-0.4174,1.5299,0.4975,-0.3998,1.5299,0.5117,-0.3817,1.5299,0.5254,0.1571,1.5299,0.6301,0.179,1.5299,0.6242,0.2007,1.5299,0.6176,0.2221,1.5299,0.6102,0.2433,1.5299,0.6021,0.2641,1.5299,0.5933,0.2847,1.5299,0.5837,0.3049,1.5299,0.5734,0.3247,1.5299,0.5624,0.3441,1.5299,0.5507,0.3631,1.5299,0.5384,0.3817,1.5299,0.5254,0.3998,1.5299,0.5117,0.4174,1.5299,0.4975,0.4671,1.5299,0.4511,0.4826,1.5299,0.4345,0.4975,1.5299,0.4174,0.5117,1.5299,0.3998,0.5254,1.5299,0.3817,0.5384,1.5299,0.3631,0.5507,1.5299,0.3441,0.5624,1.5299,0.3247,0.5734,1.5299,0.3049,0.5837,1.5299,0.2847,0.5933,1.5299,0.2641,0.6021,1.5299,0.2433,0.6102,1.5299,0.2221,0.6242,1.5299,0.179,0.6301,1.5299,0.1571,0.6352,1.5299,0.135,0.6395,1.5299,0.1128,0.6431,1.5299,0.0904,0.6458,1.5299,0.0679,0.6478,1.5299,0.0453,0.649,1.5299,0.0227,0.6494,1.5299,0,0.649,1.5299,-0.0227,0.6478,1.5299,-0.0453,0.6458,1.5299,-0.0679,0.6431,1.5299,-0.0904,0.6395,1.5299,-0.1128,0.6352,1.5299,-0.135,0.6301,1.5299,-0.1571,0.6242,1.5299,-0.179,0.6176,1.5299,-0.2007,0.6102,1.5299,-0.2221,0.6021,1.5299,-0.2433,0.5933,1.5299,-0.2641,0.5837,1.5299,-0.2847,0.5734,1.5299,-0.3049,0.5624,1.5299,-0.3247,0.5507,1.5299,-0.3441,0.5384,1.5299,-0.3631,0.5254,1.5299,-0.3817,0.5117,1.5299,-0.3998,0.4975,1.5299,-0.4174,0.4826,1.5299,-0.4345,0.4671,1.5299,-0.4511,0.4511,1.5299,-0.4671,0.4345,1.5299,-0.4826,0.4174,1.5299,-0.4975,0.3998,1.5299,-0.5117,0.3817,1.5299,-0.5254,0.3631,1.5299,-0.5384,0.3441,1.5299,-0.5507,0.3247,1.5299,-0.5624,0.3049,1.5299,-0.5734,0.2847,1.5299,-0.5837,0.2641,1.5299,-0.5933,0.2433,1.5299,-0.6021,0.2221,1.5299,-0.6102,0.2007,1.5299,-0.6176,0.179,1.5299,-0.6242,0.1571,1.5299,-0.6301,0.135,1.5299,-0.6352,0.1128,1.5299,-0.6395,0.0904,1.5299,-0.6431,0.0679,1.5299,-0.6458,0.0453,1.5299,-0.6478,0.0227,1.5299,-0.649,0,1.5516,-0.5956,-0.1441,1.5516,-0.5779,-0.1642,1.5516,-0.5725,-0.1841,1.5516,-0.5665,-0.2037,1.5516,-0.5597,-0.2231,1.5516,-0.5522,-0.2423,1.5516,-0.5441,-0.2611,1.5516,-0.5353,-0.2796,1.5516,-0.5259,-0.2978,1.5516,-0.5158,-0.3156,1.5516,-0.5051,-0.3331,1.5516,-0.4938,-0.3501,1.5516,-0.4819,-0.3667,1.5516,-0.4693,-0.3828,1.5516,-0.4563,-0.3985,1.5516,-0.4426,-0.4137,1.5516,-0.4284,-0.4284,1.5516,-0.4137,-0.4426,1.5516,-0.3985,-0.4563,1.5516,-0.3828,-0.4693,1.5516,-0.3667,-0.4819,1.5516,-0.3501,-0.4938,1.5516,-0.3331,-0.5051,1.5516,-0.3156,-0.5158,1.5516,-0.2978,-0.5259,1.5516,-0.2796,-0.5353,1.5516,-0.2611,-0.5522,1.5516,-0.2231,-0.5597,1.5516,-0.2037,-0.5665,1.5516,-0.1841,-0.5725,1.5516,-0.1642,-0.5779,1.5516,-0.1441,-0.5898,1.5516,-0.0829,-0.5942,1.5516,-0.0415,-0.5952,1.5516,-0.0208,-0.5956,1.5516,0,-0.5942,1.5516,0.0415,-0.5923,1.5516,0.0623,-0.5898,1.5516,0.0829,-0.5779,1.5516,0.1441,-0.5725,1.5516,0.1642,-0.5665,1.5516,0.1841,-0.5597,1.5516,0.2037,-0.4563,1.5516,0.3828,-0.4426,1.5516,0.3985,-0.4284,1.5516,0.4137,-0.4137,1.5516,0.4284,-0.3985,1.5516,0.4426,-0.3828,1.5516,0.4563,-0.3667,1.5516,0.4693,-0.3501,1.5516,0.4819,-0.3331,1.5516,0.4938,-0.3156,1.5516,0.5051,-0.2978,1.5516,0.5158,-0.2796,1.5516,0.5259,0.1642,1.5516,0.5725,0.1841,1.5516,0.5665,0.2037,1.5516,0.5597,0.2231,1.5516,0.5522,0.2423,1.5516,0.5441,0.2611,1.5516,0.5353,0.2796,1.5516,0.5259,0.2978,1.5516,0.5158,0.3156,1.5516,0.5051,0.3331,1.5516,0.4938,0.3501,1.5516,0.4819,0.4819,1.5516,0.3501,0.5259,1.5516,0.2796,0.5353,1.5516,0.2611,0.5441,1.5516,0.2423,0.5597,1.5516,0.2037,0.5665,1.5516,0.1841,0.5779,1.5516,0.1441,0.5826,1.5516,0.1238,0.5866,1.5516,0.1034,0.5898,1.5516,0.0829,0.5923,1.5516,0.0623,0.5942,1.5516,0.0415,0.5952,1.5516,0.0208,0.5956,1.5516,0,0.5952,1.5516,-0.0208,0.5942,1.5516,-0.0415,0.5923,1.5516,-0.0623,0.5898,1.5516,-0.0829,0.5866,1.5516,-0.1034,0.5826,1.5516,-0.1238,0.5779,1.5516,-0.1441,0.5725,1.5516,-0.1642,0.5665,1.5516,-0.1841,0.5597,1.5516,-0.2037,0.5522,1.5516,-0.2231,0.5441,1.5516,-0.2423,0.5353,1.5516,-0.2611,0.5259,1.5516,-0.2796,0.5158,1.5516,-0.2978,0.5051,1.5516,-0.3156,0.4938,1.5516,-0.3331,0.4819,1.5516,-0.3501,0.4693,1.5516,-0.3667,0.4563,1.5516,-0.3828,0.4426,1.5516,-0.3985,0.4284,1.5516,-0.4137,0.4137,1.5516,-0.4284,0.3985,1.5516,-0.4426,0.3828,1.5516,-0.4563,0.3667,1.5516,-0.4693,0.3501,1.5516,-0.4819,0.3331,1.5516,-0.4938,0.3156,1.5516,-0.5051,0.2978,1.5516,-0.5158,0.2796,1.5516,-0.5259,0.2611,1.5516,-0.5353,0.2423,1.5516,-0.5441,0.2231,1.5516,-0.5522,0.2037,1.5516,-0.5597,0.1841,1.5516,-0.5665,0.1642,1.5516,-0.5725,0.1441,1.5516,-0.5779,0.1238,1.5516,-0.5826,0.1034,1.5516,-0.5866,0.0829,1.5516,-0.5898,0.0623,1.5516,-0.5923,0.0415,1.5516,-0.5942,0.0208,1.5516,-0.5952,0,1.5715,-0.5411,-0.2027,1.5715,-0.5017,-0.2201,1.5715,-0.4943,-0.2372,1.5715,-0.4863,-0.2705,1.5715,-0.4686,-0.4778,1.5715,-0.254,-0.4863,1.5715,-0.2372,-0.4943,1.5715,-0.2201,-0.5017,1.5715,-0.2027,-0.5085,1.5715,-0.1851,-0.5146,1.5715,-0.1672,-0.5201,1.5715,-0.1491,-0.5381,1.5715,-0.0566,-0.5398,1.5715,-0.0377,-0.5411,1.5715,0,-0.5408,1.5715,0.0189,-0.5398,1.5715,0.0377,-0.5381,1.5715,0.0566,-0.5358,1.5715,0.0753,-0.5329,1.5715,0.094,-0.5293,1.5715,0.1125,-0.525,1.5715,0.1309,-0.5201,1.5715,0.1491,-0.5146,1.5715,0.1672,-0.5085,1.5715,0.1851,-0.4378,1.5715,0.318,-0.4264,1.5715,0.3331,-0.4145,1.5715,0.3478,-0.4021,1.5715,0.3621,-0.3892,1.5715,0.3759,-0.3759,1.5715,0.3892,-0.3621,1.5715,0.4021,-0.3478,1.5715,0.4145,-0.3331,1.5715,0.4264,-0.318,1.5715,0.4378,-0.3026,1.5715,0.4486,-0.2867,1.5715,0.4589,-0.2705,1.5715,0.4686,-0.254,1.5715,0.4778,-0.2372,1.5715,0.4863,-0.2201,1.5715,0.4943,-0.2027,1.5715,0.5017,0.2201,1.5715,0.4943,0.2372,1.5715,0.4863,0.254,1.5715,0.4778,0.4378,1.5715,0.318,0.4486,1.5715,0.3026,0.5017,1.5715,0.2027,0.5085,1.5715,0.1851,0.5146,1.5715,0.1672,0.5201,1.5715,0.1491,0.525,1.5715,0.1309,0.5293,1.5715,0.1125,0.5329,1.5715,0.094,0.5358,1.5715,0.0753,0.5381,1.5715,0.0566,0.5398,1.5715,0.0377,0.5408,1.5715,0.0189,0.5411,1.5715,0,0.5408,1.5715,-0.0189,0.5398,1.5715,-0.0377,0.5381,1.5715,-0.0566,0.5358,1.5715,-0.0753,0.5329,1.5715,-0.094,0.5293,1.5715,-0.1125,0.525,1.5715,-0.1309,0.5201,1.5715,-0.1491,0.5146,1.5715,-0.1672,0.5085,1.5715,-0.1851,0.5017,1.5715,-0.2027,0.4943,1.5715,-0.2201,0.4863,1.5715,-0.2372,0.4778,1.5715,-0.254,0.4686,1.5715,-0.2705,0.4589,1.5715,-0.2867,0.4486,1.5715,-0.3026,0.4378,1.5715,-0.318,0.4264,1.5715,-0.3331,0.4145,1.5715,-0.3478,0.4021,1.5715,-0.3621,0.3892,1.5715,-0.3759,0.3759,1.5715,-0.3892,0.3621,1.5715,-0.4021,0.3478,1.5715,-0.4145,0.3331,1.5715,-0.4264,0.318,1.5715,-0.4378,0.3026,1.5715,-0.4486,0.2867,1.5715,-0.4589,0.2705,1.5715,-0.4686,0.254,1.5715,-0.4778,0.2372,1.5715,-0.4863,0.2201,1.5715,-0.4943,0.2027,1.5715,-0.5017,-0.4028,1.5894,-0.2717,-0.4121,1.5894,-0.2575,-0.4208,1.5894,-0.243,-0.429,1.5894,-0.2281,-0.4367,1.5894,-0.213,-0.4439,1.5894,-0.1976,-0.4566,1.5894,-0.1662,-0.4621,1.5894,-0.1502,-0.4671,1.5894,-0.1339,-0.4753,1.5894,-0.101,-0.4785,1.5894,-0.0844,-0.4812,1.5894,-0.0676,-0.4833,1.5894,-0.0508,-0.4847,1.5894,-0.0339,-0.4856,1.5894,-0.017,-0.4859,1.5894,0,-0.4856,1.5894,0.017,-0.4847,1.5894,0.0339,-0.4833,1.5894,0.0508,-0.4812,1.5894,0.0676,-0.4785,1.5894,0.0844,-0.4753,1.5894,0.101,-0.3931,1.5894,0.2856,-0.3829,1.5894,0.2992,-0.3722,1.5894,0.3123,-0.3611,1.5894,0.3251,-0.3495,1.5894,0.3375,-0.3375,1.5894,0.3495,-0.3251,1.5894,0.3611,-0.3123,1.5894,0.3722,-0.2992,1.5894,0.3829,-0.2856,1.5894,0.3931,-0.2717,1.5894,0.4028,-0.2575,1.5894,0.4121,-0.243,1.5894,0.4208,-0.2281,1.5894,0.429,-0.213,1.5894,0.4367,-0.1976,1.5894,0.4439,0.3829,1.5894,0.2992,0.3931,1.5894,0.2856,0.4566,1.5894,0.1662,0.4621,1.5894,0.1502,0.4812,1.5894,0.0676,0.4833,1.5894,0.0508,0.4847,1.5894,0.0339,0.4856,1.5894,0.017,0.4859,1.5894,0,0.4856,1.5894,-0.017,0.4847,1.5894,-0.0339,0.4833,1.5894,-0.0508,0.4812,1.5894,-0.0676,0.4785,1.5894,-0.0844,0.4753,1.5894,-0.101,0.4715,1.5894,-0.1176,0.4671,1.5894,-0.1339,0.4621,1.5894,-0.1502,0.4566,1.5894,-0.1662,0.4505,1.5894,-0.182,0.4439,1.5894,-0.1976,0.4367,1.5894,-0.213,0.429,1.5894,-0.2281,0.4208,1.5894,-0.243,0.4121,1.5894,-0.2575,0.4028,1.5894,-0.2717,0.3931,1.5894,-0.2856,0.3829,1.5894,-0.2992,0.3123,1.5894,-0.3722,-0.393,1.6054,-0.175,-0.3988,1.6054,-0.1611,-0.4042,1.6054,-0.1471,-0.4236,1.6054,-0.0747,-0.4278,1.6054,-0.045,-0.4291,1.6054,-0.03,-0.4299,1.6054,-0.015,-0.4302,1.6054,0,-0.4299,1.6054,0.015,-0.4291,1.6054,0.03,-0.4278,1.6054,0.045,-0.426,1.6054,0.0599,-0.4236,1.6054,0.0747,-0.3566,1.6054,0.2405,-0.348,1.6054,0.2528,-0.339,1.6054,0.2648,-0.3295,1.6054,0.2765,-0.3197,1.6054,0.2878,-0.3094,1.6054,0.2988,-0.2988,1.6054,0.3094,-0.2878,1.6054,0.3197,-0.2765,1.6054,0.3295,-0.2648,1.6054,0.339,-0.2528,1.6054,0.348,-0.2405,1.6054,0.3566,-0.2279,1.6054,0.3648,-0.2151,1.6054,0.3725,-0.2019,1.6054,0.3798,-0.1886,1.6054,0.3866,-0.175,1.6054,0.393,-0.1611,1.6054,0.3988,0.3566,1.6054,0.2405,0.3648,1.6054,0.2279,0.4299,1.6054,0.015,0.4302,1.6054,0,0.4299,1.6054,-0.015,0.4291,1.6054,-0.03,0.4278,1.6054,-0.045,0.426,1.6054,-0.0599,0.4236,1.6054,-0.0747,0.4208,1.6054,-0.0894,0.4174,1.6054,-0.1041,0.4135,1.6054,-0.1186,0.4091,1.6054,-0.1329,0.4042,1.6054,-0.1471,0.2765,1.6054,-0.3295,0.2648,1.6054,-0.339,0.2528,1.6054,-0.348,-0.3238,1.6194,-0.1869,-0.3301,1.6194,-0.1755,-0.3513,1.6194,-0.1279,-0.3682,1.6194,-0.0649,-0.3718,1.6194,-0.0391,-0.373,1.6194,-0.0261,-0.3736,1.6194,-0.013,-0.3739,1.6194,0,-0.3736,1.6194,0.013,-0.373,1.6194,0.0261,-0.3718,1.6194,0.0391,-0.3702,1.6194,0.052,-0.3682,1.6194,0.0649,-0.3657,1.6194,0.0777,-0.3513,1.6194,0.1279,-0.3466,1.6194,0.1401,-0.3415,1.6194,0.1521,-0.336,1.6194,0.1639,-0.3301,1.6194,0.1755,-0.3238,1.6194,0.1869,-0.3171,1.6194,0.1981,-0.31,1.6194,0.2091,-0.3025,1.6194,0.2198,-0.2946,1.6194,0.2302,-0.2864,1.6194,0.2403,-0.2778,1.6194,0.2502,-0.2689,1.6194,0.2597,-0.2597,1.6194,0.2689,-0.2502,1.6194,0.2778,-0.2403,1.6194,0.2864,-0.2302,1.6194,0.2946,-0.2198,1.6194,0.3025,-0.2091,1.6194,0.31,-0.1981,1.6194,0.3171,-0.1869,1.6194,0.3238,-0.1755,1.6194,0.3301,-0.1639,1.6194,0.336,-0.1521,1.6194,0.3415,-0.1401,1.6194,0.3466,-0.1279,1.6194,0.3513,0.1031,1.6194,0.3594,0.3415,1.6194,0.1521,0.3466,1.6194,0.1401,0.3657,1.6194,-0.0777,0.3628,1.6194,-0.0904,0.3594,1.6194,-0.1031,0.3556,1.6194,-0.1155,0.3513,1.6194,-0.1279,-0.3077,1.6315,-0.0767,-0.3102,1.6315,-0.0659,-0.314,1.6315,-0.0441,-0.3164,1.6315,-0.0221,-0.3169,1.6315,-0.0111,-0.3171,1.6315,0,-0.3164,1.6315,0.0221,-0.3154,1.6315,0.0331,-0.314,1.6315,0.0441,-0.3123,1.6315,0.0551,-0.3102,1.6315,0.0659,-0.3077,1.6315,0.0767,-0.294,1.6315,0.1188,-0.2897,1.6315,0.129,-0.285,1.6315,0.139,-0.28,1.6315,0.1489,-0.2746,1.6315,0.1586,-0.2689,1.6315,0.1681,-0.2629,1.6315,0.1773,-0.2566,1.6315,0.1864,-0.2499,1.6315,0.1952,-0.2429,1.6315,0.2038,-0.2357,1.6315,0.2122,-0.2281,1.6315,0.2203,-0.2203,1.6315,0.2281,-0.2122,1.6315,0.2357,-0.2038,1.6315,0.2429,-0.1952,1.6315,0.2499,-0.1864,1.6315,0.2566,-0.1773,1.6315,0.2629,-0.1681,1.6315,0.2689,-0.1586,1.6315,0.2746,-0.1489,1.6315,0.28,-0.139,1.6315,0.285,-0.129,1.6315,0.2897,-0.1188,1.6315,0.294,-0.1085,1.6315,0.298,0.0659,1.6315,0.3102,0.0767,1.6315,0.3077,0.0874,1.6315,0.3048,0.098,1.6315,0.3016,0.1085,1.6315,0.298,0.314,1.6315,-0.0441]");async function A3(i){const e=i.closest(".globe-stage"),t=document.querySelector("#globe-status"),n=document.querySelector("#motion-toggle"),r=document.querySelector("#globe-reset"),s=matchMedia("(prefers-reduced-motion: reduce)"),a=new S3({canvas:i,alpha:!0,antialias:!1,powerPreference:"low-power"});a.setClearColor(0,0),a.outputColorSpace=Et;const o=new A0,c=new Ut(38,1,.1,40);c.position.set(0,.32,7.7),c.lookAt(0,0,0);const l=new Zn;l.rotation.set(.13,1.07,-.13),o.add(l),o.add(new O0(5864905,2));const h=new Ba(7725055,4);h.position.set(-3,4,5),o.add(h);const f=new Ba(9983725,3);f.position.set(4,-1,-2),o.add(f);const d=document.createElement("canvas");d.width=1024,d.height=512;const p=d.getContext("2d");p.fillStyle="#06152d",p.fillRect(0,0,1024,512),p.fillStyle="#124567",p.strokeStyle="#60cde9",p.lineWidth=.7;for(const j of E3)p.beginPath(),j.forEach(([M,_],I)=>{const G=(M+180)/360*1024,$=(90-_)/180*512;I?p.lineTo(G,$):p.moveTo(G,$)}),p.closePath(),p.fill(),p.stroke();const g=new D0(d);g.colorSpace=Et;const x=new Ct(new _i(1.65,64,48),new L0({map:g,shininess:45,specular:2444668}));x.rotation.y=-Math.PI/2,l.add(x);const m=new Tt;m.setAttribute("position",new pt(y3,3)),l.add(new Ia(m,new Fs({color:7002111,size:.014,transparent:!0,opacity:.7,sizeAttenuation:!0})));const u=[],b=(j,M,_=1.659)=>{const I=j*Math.PI/180,G=M*Math.PI/180;return new N(Math.cos(I)*Math.sin(G)*_,Math.sin(I)*_,Math.cos(I)*Math.cos(G)*_)},T=(j,M)=>u.push(j.x,j.y,j.z,M.x,M.y,M.z);for(let j=-75;j<=75;j+=15)for(let M=-180;M<180;M+=3)T(b(j,M),b(j,M+3));for(let j=-180;j<180;j+=15)for(let M=-90;M<90;M+=3)T(b(M,j),b(M+3,j));const y=new Tt;y.setAttribute("position",new pt(u,3)),l.add(new P0(y,new D1({color:3246018,transparent:!0,opacity:.32})));const C=new Ct(new _i(1.71,48,32),new rn({uniforms:{glowColor:{value:new Ge(2531071)}},vertexShader:"varying vec3 vNormal; varying vec3 vView; void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform vec3 glowColor; varying vec3 vNormal; varying vec3 vView; void main(){float intensity=pow(1.-abs(dot(normalize(vNormal),normalize(vView))),3.);gl_FragColor=vec4(glowColor,intensity*.65);}",transparent:!0,depthWrite:!1,blending:Kr}));l.add(C);const w=new Zn;o.add(w);for(let j=0;j<3;j++){const M=new Ct(new js(2.02+j*.13,.005,5,180),new cr({color:[5103871,10652671,2781109][j],transparent:!0,opacity:j===2?.35:.8}));M.rotation.set(1.05+j*.23,.25+j*.3,-.3+j*.65),w.add(M)}const D=b(-32,-60.3,1.69),F=new Ct(new _i(.025,12,8),new cr({color:13237247}));F.position.copy(D),l.add(F);const E=[];let S=31415;const P=()=>(S=S*1664525+1013904223>>>0,S/4294967296);for(let j=0;j<150;j++)E.push((P()-.5)*12,(P()-.5)*9,-2-P()*5);const H=new Tt;H.setAttribute("position",new pt(E,3)),o.add(new Ia(H,new Fs({color:7576533,size:.016,transparent:!0,opacity:.65}))),await a.compileAsync(o,c);let V=Y1(innerWidth,navigator.deviceMemory),W=s.matches||matchMedia("(max-width:760px)").matches,Y=!0,X=!1,J=!1,z=0,re=!1,ue=0,ve=0,De=.13,ke=1.07,We=7.7,Ve=0,q=0,Z=0,he=0,we=!1,xe="";function Be(){const j=e.getBoundingClientRect();if(!j.width||!j.height)return;const M=`${j.width}:${j.height}:${V}`;M!==xe&&(xe=M,c.aspect=j.width/j.height,c.updateProjectionMatrix(),a.setPixelRatio(Math.min(devicePixelRatio,V)),a.setSize(j.width,j.height,!1),e.dataset.quality=String(V),we&&A())}function ct(j=0){if(J||X)return;!W&&!re&&(ke+=j*.055);const M=W?1:1-Math.exp(-j*9);l.rotation.x=In.lerp(l.rotation.x,De,M),l.rotation.y=In.lerp(l.rotation.y,ke,M),c.position.z=In.lerp(c.position.z,We,W?1:.12),a.render(o,c),we||(we=!0,e.classList.add("is-ready"),i.hidden=!1,n.hidden=!1,r.hidden=!1,t.textContent="Arrastrá para girar · Flechas y + / − con teclado",e.dataset.renderer="webgl2")}function A(){!X&&!J&&Y&&!document.hidden&&ct(.016)}function je(j){if(z=0,J||X||W||!Y||document.hidden)return;const M=Ve?j-Ve:16.7;if(Ve=j,ct(Math.min(M/1e3,.05)),Z++,he+=M,q||(q=j),j-q>3e3){const _=he/Z;e.dataset.frameMs=_.toFixed(2),e.dataset.fps=(1e3/_).toFixed(1);const I=K1(V,_);Z=0,he=0,q=j,I!==V&&(V=I,Be())}z=requestAnimationFrame(je)}function Re(){cancelAnimationFrame(z),z=0,Ve=0,Z=0,he=0,q=0,!(J||X||!Y||document.hidden)&&(A(),W||(z=requestAnimationFrame(je)))}function Ae(){n.textContent=W?"Reanudar movimiento":"Pausar movimiento",n.setAttribute("aria-pressed",String(W))}n.addEventListener("click",()=>{W=!W,Ae(),Re()}),r.addEventListener("click",()=>{De=.13,ke=1.07,We=7.7,A()}),i.addEventListener("pointerdown",j=>{re=!0,ue=j.clientX,ve=j.clientY,i.setPointerCapture(j.pointerId)}),i.addEventListener("pointermove",j=>{re&&(ke+=(j.clientX-ue)*.006,De=In.clamp(De+(j.clientY-ve)*.003,-.7,.7),ue=j.clientX,ve=j.clientY,A())});for(const j of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(j,()=>{re=!1});i.addEventListener("keydown",j=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","-","=","Home"].includes(j.key)&&(j.preventDefault(),j.key==="ArrowLeft"&&(ke-=.18),j.key==="ArrowRight"&&(ke+=.18),j.key==="ArrowUp"&&(De-=.1),j.key==="ArrowDown"&&(De+=.1),(j.key==="+"||j.key==="=")&&(We-=.3),j.key==="-"&&(We+=.3),j.key==="Home"&&(De=.13,ke=1.07,We=7.7),De=In.clamp(De,-.7,.7),We=In.clamp(We,6.5,9),A())});const pe=new IntersectionObserver(j=>{Y!==j[0].isIntersecting&&(Y=j[0].isIntersecting,Re())});pe.observe(e);const Je=new ResizeObserver(Be);Je.observe(e);const me=()=>Re();document.addEventListener("visibilitychange",me);const Ue=()=>{W=s.matches,Ae(),Re()};s.addEventListener("change",Ue),i.addEventListener("webglcontextlost",j=>{j.preventDefault(),X=!0,cancelAnimationFrame(z),i.hidden=!0,e.classList.remove("is-ready"),n.hidden=!0,r.hidden=!0,t.textContent="Vista estática · La escena 3D no está disponible"});const ot=()=>{J||(J=!0,cancelAnimationFrame(z),pe.disconnect(),Je.disconnect(),document.removeEventListener("visibilitychange",me),s.removeEventListener("change",Ue),o.traverse(j=>{const M=j;if(M.geometry&&M.geometry.dispose(),M.material)for(const _ of Array.isArray(M.material)?M.material:[M.material])_.dispose()}),g.dispose(),a.dispose())};window.addEventListener("pagehide",j=>{j.persisted?(cancelAnimationFrame(z),z=0):ot()},{once:!1}),window.addEventListener("pageshow",()=>{J||Re()}),Ae(),i.hidden=!1,Be(),Re()}export{A3 as mountGlobe};
//# sourceMappingURL=globe-Cm3NaH52.js.map
