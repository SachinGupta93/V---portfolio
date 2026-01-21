import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile2.jpg';

// Wave text animation component
const WaveText = ({ text, delay = 0 }) => {
    return (
        <span className="wave-text">
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    className="wave-char"
                    style={{
                        animationDelay: `${delay + index * 0.08}s`,
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-grid">

                    {/* Text Content */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="hero-eyebrow"><span className="gold">Digital Marketing Associate</span>  <span className="gold">Digital Marketing Expert</span></span>

                        <h1 className="hero-title">
                            <WaveText text="Vivek" delay={0} />
                            <span className="highlight">
                                <WaveText text="Yandrathi" delay={0.4} />
                            </span>
                        </h1>

                        <p className="hero-desc">
                            I design <span className="gold">growth strategies</span> that don't just reach audiences—they resonate.
                            My dual expertise in <span className="gold">digital marketing</span> and <span className="gold">cybersecurity</span> ensures your brand
                            is both visible and protected.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                View My Work <FaArrowRight />
                            </a>
                            <a
                                href="/Vivek_Resume.pdf"
                                download="Vivek_Yandrathi_Resume.pdf"
                                className="btn btn-ghost"
                            >
                                <FaDownload /> Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-image-wrapper">
                            <img src={profileImg} alt="Vivek Yandrathi" className="hero-image" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
