import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoArtflowers from '@/assets/logo-artflowers.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Ускоренная загрузка
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 200);
          return 100;
        }
        return prev + 10;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <img src={logoArtflowers} alt="Art Flowers" className="h-12 w-auto mx-auto" />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
