import { motion } from 'framer-motion';
import Card3D from './Card3D';

const About = () => {
    const stats = [
        { number: "6+", label: "Months Internship" },
        { number: "10+", label: "Skills Mastered" },
        { number: "5+", label: "Certifications" },
        { number: "15+", label: "Projects Delivered" },
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
                            Meets Performance
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
                            I'm a <span className="gold">Digital Marketing Professional</span> with a strong technical background in B.Tech Cyber Security.
                            My unique perspective allows me to build marketing strategies that are not only <span className="white">impactful</span>
                            but also <span className="white">analytically sound</span> and <span className="white">secure</span>.
                        </p>
                        <p>
                            During my tenures as a <span className="gold">Digital Marketing Intern</span> at Hashnod and other collaborations, I mastered
                            the art of driving organic growth through <span className="gold">SEO</span>, <span className="gold">SEM</span>, and strategic
                            content development. I focus on creating digital experiences that bridge the gap between business goals and user needs.
                        </p>
                        <p>
                            Whether it's optimizing search rankings or crafting conversion-led campaigns, I approach every challenge with
                            <span className="white"> data precision</span> and a relentless drive to deliver measurable results.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
