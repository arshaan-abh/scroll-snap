/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const raf =
  window.requestAnimationFrame ||
  (window as any).webkitRequestAnimationFrame ||
  (window as any).mozRequestAnimationFrame ||
  (window as any).msRequestAnimationFrame ||
  (window as any).oRequestAnimationFrame ||
  function (callback: (time: number) => void) {
    return window.setTimeout(() => {
      callback(Date.now());
    }, 1);
  };

export const caf =
  window.cancelAnimationFrame ||
  (window as any).webkitCancelAnimationFrame ||
  (window as any).webkitCancelRequestAnimationFrame ||
  (window as any).mozCancelAnimationFrame ||
  (window as any).mozCancelRequestAnimationFrame ||
  (window as any).msCancelAnimationFrame ||
  (window as any).msCancelRequestAnimationFrame ||
  (window as any).oCancelAnimationFrame ||
  (window as any).oCancelRequestAnimationFrame ||
  function (handle: number) {
    window.clearTimeout(handle);
  };
