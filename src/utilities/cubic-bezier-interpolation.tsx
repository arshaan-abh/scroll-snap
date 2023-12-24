export default function cubicBezierInterpolation({
  cubicBezier,
  duration,
  startNumber,
  endNumber,
}: {
  cubicBezier: (t: number) => number;
  duration: number;
  startNumber: number;
  endNumber: number;
}): number[] {
  const result: number[] = [];
  const stepSize = 1 / duration;

  for (let i = 0; i < duration; i++) {
    const normalizedTime = i * stepSize;
    const easing = cubicBezier(normalizedTime);
    const interpolatedValue = startNumber + (endNumber - startNumber) * easing;
    result.push(interpolatedValue);
  }

  result[result.length - 1] = endNumber;
  return result;
}
