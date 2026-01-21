import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Card3D = ({ children, className = "", glowColor = "rgba(59, 130, 246, 0.3)" }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateXValue = (mouseY / (rect.height / 2)) * -10;
        const rotateYValue = (mouseX / (rect.width / 2)) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);

        // Calculate glow position
        const glowX = ((e.clientX - rect.left) / rect.width) * 100;
        const glowY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlowPosition({ x: glowX, y: glowY });
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlowPosition({ x: 50, y: 50 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotateX,
                rotateY: rotateY,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className={`card-3d ${className}`}
        >
            {/* Glow effect that follows mouse */}
            <div
                className="card-3d-glow"
                style={{
                    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor} 0%, transparent 60%)`,
                }}
            />

            {/* Card content with slight Z offset for depth */}
            <div
                className="card-3d-content"
                style={{ transform: "translateZ(20px)" }}
            >
                {children}
            </div>
        </motion.div>
    );
};

export default Card3D;
