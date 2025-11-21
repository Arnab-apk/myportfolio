import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.15,
                    ease: 'easeOut'
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
