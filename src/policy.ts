export function initialQuality(
  width: number,
  memory = 8,
  saveData = false,
): number {
  return saveData || memory <= 4 || width < 700 ? 1 : 1.5;
}
export function adaptiveQuality(
  current: number,
  averageFrameMs: number,
): number {
  return averageFrameMs > 28 ? Math.max(0.75, current - 0.25) : current;
}
export const whatsapp = (topic: string) =>
  `https://wa.me/543436959552?text=${encodeURIComponent(`Hola MJON TECH. Me interesa ${topic}.`)}`;
