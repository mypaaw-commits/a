import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content',
  delay = 0.25,
  duration = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth ease-out
      }
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};