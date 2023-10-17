import {
  motion,
  wrap,
  useScroll,
  useMotionValue,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import DisplayText from "./DisplayText";
import { useRef } from "react";

export default function ParallaxText({ baseVelocity = -5 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden pb-5 flex flex-nowrap whitespace-nowrap m-0">
      <motion.div className="text-[#f5f5f5] flex flex-nowrap whitespace-nowrap gap-x-5" style={{x}}>
        <DisplayText />
        <DisplayText />
      </motion.div>
    </div>
  );
}
