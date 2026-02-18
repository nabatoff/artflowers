import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonProps {
  magnetic?: boolean;
  magneticStrength?: number;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, magnetic = true, magneticStrength = 0.3, children, ...props }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magnetic) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      x.set(distanceX * magneticStrength);
      y.set(distanceY * magneticStrength);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Button ref={ref} className={cn(className)} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export { MagneticButton };
