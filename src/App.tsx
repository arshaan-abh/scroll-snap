import { type FC } from "react";
import ScrollSnap from "./components/scroll-snap";
import BezierEasing from "bezier-easing";

const App: FC = () => {
  return (
    <ScrollSnap duration={1000} cubicBezier={BezierEasing(0.4, 0, 0.2, 1)}>
      <div className="bg-red-500" />
      <div className="bg-amber-500" />
      <div className="bg-lime-500" />
      <div className="bg-emerald-500" />
      <div className="bg-cyan-500" />
      <div className="bg-blue-500" />
      <div className="bg-violet-500" />
      <div className="bg-fuchsia-500" />
      <div className="bg-rose-500" />
    </ScrollSnap>
  );
};

export default App;
