import { motion } from 'framer-motion';
import Card3D from './Card3D';

const About = () => {
    const stats = [
        { number: "3+", label: "Months Internship" },
        { number: "10+", label: "Skills Mastered" },
        { number: "5+", label: "Certifications" },
        { number: "3+", label: "Projects Delivered" },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-grid">

                    {/* Left - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Who I Am</span>
                        <h2 className="section-heading">
                            Where <span>Strategy</span><br />
                            Meets Security
                        </h2>

                        <div className="about-stats">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card3D className="stat-card-3d">
                                        <div style={{ textAlign: 'center' }}>
                                            <div className="stat-number">{stat.number}</div>
                                            <div className="stat-label">{stat.label}</div>
                                        </div>
                                    </Card3D>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Text */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I'm a <span className="gold">B.Tech Cyber Security</span> student at Vignana Bharathi Institute of Technology
                            with a passion that extends far beyond the classroom. My journey began with
                            a curiosity for how systems work—and evolved into a mission to make them
                            work <span className="white">better</span> and <span className="white">safer</span>.
                        </p>
                        <p>
                            As a former <span className="gold">Digital Marketing Intern</span> at Hashnod, I mastered the art of
                            driving organic growth through <span className="gold">SEO</span>, <span className="gold">SEM</span>, and strategic content.
                            Now, I combine that marketing acumen with my security mindset to
                            build digital experiences that are both impactful and secure.
                        </p>
                        <p>
                            Whether it's optimizing a campaign for maximum reach or analyzing
                            network vulnerabilities, I approach every challenge with <span className="white">data</span>,
                            <span className="white"> precision</span>, and a relentless drive to excel.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
