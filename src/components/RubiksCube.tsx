import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = {
  front: '#ff69b4',  // pink
  back: '#4169e1',   // blue
  top: '#9370db',    // purple
  bottom: '#40e0d0', // turquoise
  left: '#ba55d3',   // medium orchid
  right: '#00ced1'   // dark turquoise
};

function Face({ color, rotateX = 0, rotateY = 0, translateZ, position }: { 
  color: string;
  rotateX?: number;
  rotateY?: number;
  translateZ: number;
  position: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
}) {
  return (
    <div
      className="absolute w-[150px] h-[150px] preserve-3d"
      style={{
        transform: `${position === 'back' ? `translateZ(${-translateZ}px) rotateY(180deg)` :
                    position === 'right' ? `translateX(${translateZ}px) rotateY(90deg)` :
                    position === 'left' ? `translateX(${-translateZ}px) rotateY(-90deg)` :
                    position === 'top' ? `translateY(${-translateZ}px) rotateX(90deg)` :
                    position === 'bottom' ? `translateY(${translateZ}px) rotateX(-90deg)` :
                    `translateZ(${translateZ}px)`}`,
      }}
    >
      <div className="w-full h-full grid grid-cols-3 gap-[2px] p-[2px]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            className="w-full h-full transition-colors duration-300 rounded-sm"
            style={{ 
              backgroundColor: color,
              border: '2px solid rgba(0,0,0,0.2)',
              boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function RubiksCube() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          rotateY: 360,
          transition: { duration: 2, ease: "easeInOut" }
        });
        await controls.start({
          rotateX: 360,
          transition: { duration: 2, ease: "easeInOut" }
        });
        await controls.start({
          rotateZ: 360,
          transition: { duration: 2, ease: "easeInOut" }
        });
        await controls.start({
          rotateY: [0, 90, 180, 270, 360],
          transition: { duration: 4, ease: "linear" }
        });
        await controls.start({
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          transition: { duration: 0.1 }
        });
      }
    };
    animate();
  }, [controls]);

  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="perspective-1000">
        <motion.div
          animate={controls}
          className="relative w-[150px] h-[150px] preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Face color={COLORS.front} translateZ={75} position="front" />
          <Face color={COLORS.back} translateZ={75} position="back" />
          <Face color={COLORS.right} translateZ={75} position="right" />
          <Face color={COLORS.left} translateZ={75} position="left" />
          <Face color={COLORS.top} translateZ={75} position="top" />
          <Face color={COLORS.bottom} translateZ={75} position="bottom" />
        </motion.div>
      </div>
    </div>
  );
}