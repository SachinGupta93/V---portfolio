import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', to: '#home' },
        { name: 'About', to: '#about' },
        { name: 'Experience', to: '#experience' },
        { name: 'Projects', to: '#projects' },
        { name: 'Certifications', to: '#certifications' },
        { name: 'Contact', to: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                <a href="#home" className="logo">
                    Vivek<span>.</span>
                </a>

                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.to} className="nav-link">{link.name}</a>
                        </li>
                    ))}
                </ul>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'var(--bg-primary)',
                            borderBottom: '1px solid var(--border-subtle)',
                            padding: '2rem'
                        }}
                    >
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a href={link.to} onClick={() => setIsOpen(false)} className="nav-link">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
