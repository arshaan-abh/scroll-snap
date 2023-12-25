import {
  type FC,
  useRef,
  useState,
  useCallback,
  useEffect,
  Children,
} from "react";
import HTMLProps from "../interfaces/html-props";
import cubicBezierInterpolation from "../utilities/cubic-bezier-interpolation";
import defaultListenerOptions from "../utilities/default-listener-options";
import { raf, caf } from "../utilities/animation-frame";
import "./scroll-snap.css";

interface ScrollSnapProps extends HTMLProps<HTMLDivElement> {
  duration: number;
  cubicBezier: (t: number) => number;
}

const ScrollSnap: FC<ScrollSnapProps> = (props) => {
  const { duration, cubicBezier, className, ...otherProps } = props;

  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const [index, setIndex] = useState(0); // TODO get latest index

  const firstTimeStamp = useRef<number | null>(null);
  const previousTimeStamp = useRef<number | null>(null);
  const midAnimation = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const cubicBeziers = useRef<number[] | null>(null);

  const animate = useCallback(
    (timeStamp: number, next: boolean) => {
      if (!windowHeight) return;
      if (!cubicBeziers.current) return;

      midAnimation.current = true;
      if (firstTimeStamp.current === null) firstTimeStamp.current = timeStamp;
      const elapsed = timeStamp - firstTimeStamp.current;

      if (elapsed < duration) {
        if (previousTimeStamp.current !== timeStamp) {
          const top =
            (next ? 1 : -1) * cubicBeziers.current[Math.floor(elapsed)] +
            index * windowHeight; // TODO should round?
          scrollTo({ top, behavior: "instant" }); // TODO use scrollBy
          previousTimeStamp.current = timeStamp;
        }
        animationFrame.current = raf((timeStamp) => {
          animate(timeStamp, next);
        });
      } else {
        if (animationFrame.current) caf(animationFrame.current);
        if (next) setIndex((currentIndex) => currentIndex + 1);
        else setIndex((currentIndex) => currentIndex - 1);
        firstTimeStamp.current = null;
        previousTimeStamp.current = null;
        midAnimation.current = false;
        animationFrame.current = null;
      }
    },
    [duration, index, windowHeight],
  );

  const wheelHandler = useCallback(
    (event: WheelEvent) => {
      if (!midAnimation.current)
        animationFrame.current = raf((timeStamp) => {
          const next = event.deltaY > 0;
          if (next && index < Children.count(props.children) - 1)
            animate(timeStamp, true);
          else if (!next && index > 0) animate(timeStamp, false);
        });
    },
    [animate, index, props.children],
  );

  const resizeHandler = useCallback(() => {
    setWindowHeight(innerHeight); // TODO what if has horizontal scrollbar

    if (!windowHeight) return;
    scrollTo({
      top: index * windowHeight, // TODO should round?
      behavior: "instant",
    });
  }, [index, windowHeight]);

  useEffect(() => {
    resizeHandler();
    addEventListener("resize", resizeHandler, defaultListenerOptions);
    return () => {
      removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  useEffect(() => {
    addEventListener("wheel", wheelHandler, defaultListenerOptions); // TODO make compatible: wheel, onWheel, onMouseWheel, DOMMouseScroll, ...
    return () => {
      removeEventListener("wheel", wheelHandler);
    };
  }, [wheelHandler]);

  useEffect(() => {
    if (!windowHeight) return;

    cubicBeziers.current = cubicBezierInterpolation({
      cubicBezier,
      duration,
      startNumber: 0,
      endNumber: windowHeight,
    });
  }, [cubicBezier, duration, windowHeight]);

  return <div className={`*:h-svh ${className}`} {...otherProps} />; // TODO make svh compatible
};

export default ScrollSnap;

// TODO list:
// what if user resizes mid animation (+ this kind of twisted stuff)
// scroll multiple sections at once
// add scrollbar later
// pixel perfect
// should round?
// add features
