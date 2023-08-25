import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ message, onClose }) => {
  return (
    <AnimatePresence>
    {message && (
      <motion.div
        className="modal"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, y:40 }}
          animate={{ scale: 1, opacity: 1, y:0 }}
          exit={{ scale: .8, opacity: 0, y:40 }}
        >
          <p>{message}</p>
          <motion.button className='items-center text-lg w-40  p-1 bg-blue-300 border border-gray-300 text-black rounded-2xl hover:bg-blue-400' onClick={onClose} whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.95 }}>Close</motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default Modal;