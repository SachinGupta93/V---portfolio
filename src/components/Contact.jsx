import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Card3D from './Card3D';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-label">Let's Connect</span>
                    <h2 className="section-heading">Start a <span>Conversation</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Whether you have a <span className="gold">project</span> in mind or just want to say hello,
                        I'm always open to discussing <span className="gold">new opportunities</span> and ideas.
                    </p>
                </motion.div>

                <div className="contact-grid">

                    <motion.a
                        href="mailto:vivekyandrathi@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card3D className="contact-card-3d">
                            <div style={{ textAlign: 'center' }}>
                                <FaEnvelope className="contact-icon" />
                                <h3 className="contact-label white">Email</h3>
                                <span className="contact-value">vivekyandrathi@gmail.com</span>
                            </div>
                        </Card3D>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/919177048020"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card3D className="contact-card-3d">
                            <div style={{ textAlign: 'center' }}>
                                <FaWhatsapp className="contact-icon" />
                                <h3 className="contact-label white">WhatsApp</h3>
                                <span className="contact-value">+91 91770 48020</span>
                            </div>
                        </Card3D>
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/yandrathi-vivek"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card3D className="contact-card-3d">
                            <div style={{ textAlign: 'center' }}>
                                <FaLinkedin className="contact-icon" />
                                <h3 className="contact-label white">LinkedIn</h3>
                                <span className="contact-value">/in/yandrathi-vivek</span>
                            </div>
                        </Card3D>
                    </motion.a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
