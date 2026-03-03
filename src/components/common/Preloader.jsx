import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }) => {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);

    const dismiss = () => {
        setIsLoading(false);
        // Wait for the exit animation (0.8s) then notify parent
        setTimeout(() => {
            if (onFinish) onFinish();
        }, 850);
    };

    useEffect(() => {
        // Fallback: if video doesn't end within 15 seconds, dismiss preloader anyway
        const fallback = setTimeout(dismiss, 15000);

        // Attempt to play the video (required for some browsers)
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // If autoplay is blocked, dismiss after a short delay
                setTimeout(dismiss, 2000);
            });
        }

        return () => clearTimeout(fallback);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] bg-black overflow-hidden"
                >
                    <video
                        ref={videoRef}
                        src="/preloader_video.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={dismiss}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
