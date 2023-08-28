import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

{/* Contains values that determine how the transition component functions. */}
const variants = {
  /* Sets positon lower and sets the opacity to make it not visible. */
  out: {
    opacity: 0, 
    y: 40, 
    transition: {
      duration: 0.75
    },
  },
  /* Sets positon to its default position and sets the opacity to make it fully visible. */
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75
    },
  },
};

{/* Component in charge of animating in the weather data. */}
const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="transition-effect">
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in" // Animates the "in" property in the variants const 
          initial="out" // Sets the initial state to the "out" property in the variants const
          exit="out" // Sets the state back to the property "out" the variants const 
        >
          {children} 
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
