import { motion } from 'framer-motion';
import Card3D from './Card3D';

const experiences = [
    {
        role: "Digital Marketing Intern",
        company: "Hashnod Company",
        date: "Aug 2024 - Oct 2024",
        points: [
            "Executed comprehensive <span class='gold'>SEO strategies</span> to boost organic traffic and improve search engine rankings.",
            "Managed <span class='gold'>SMM campaigns</span> across platforms, crafting engaging content and analyzing performance metrics.",
            "Administered <span class='gold'>WordPress</span> websites, implementing SEO-optimized configurations and plugin management.",
            "Conducted in-depth <span class='gold'>keyword research</span> and competitive analysis to inform content strategies.",
            "Supported <span class='gold'>email marketing</span> and affiliate marketing initiatives to drive conversions."
        ]
    },
    {
        role: "Student Coordinator",
        company: "VBIT Technical Committee",
        date: "Jun 2024 - Present",
        points: [
            "Leading organization of <span class='gold'>technical events</span>, workshops, and seminars for the department.",
            "Managing event logistics, promotional activities, and <span class='gold'>team coordination</span>.",
            "Driving student engagement through innovative <span class='gold'>event planning</span> and execution."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-label">Career Journey</span>
                    <h2 className="section-heading">Professional <span>Experience</span></h2>
                </motion.div>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            style={{ marginBottom: '2rem' }}
                        >
                            <Card3D className="exp-card-3d">
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <span className="exp-company">{exp.company}</span>
                                    </div>
                                    <span className="exp-date">{exp.date}</span>
                                </div>
                                <ul className="exp-desc">
                                    {exp.points.map((point, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                                    ))}
                                </ul>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
