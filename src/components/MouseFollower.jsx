import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0.6,
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 2.5,
            opacity: 0.3,
            backgroundColor: "var(--accent)"
        }
    };

    return (
        <motion.div
            className="mouse-follower"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 400,
                mass: 0.5
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "transparent",
                border: "2px solid var(--accent)",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "difference"
            }}
        />
    );
};

export default MouseFollower;
