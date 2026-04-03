export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};