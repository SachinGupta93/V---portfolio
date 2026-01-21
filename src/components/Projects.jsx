import { motion } from 'framer-motion';
import { FaRobot, FaCalendarCheck, FaWordpress } from 'react-icons/fa';
import Card3D from './Card3D';

const projects = [
    {
        title: "Auto Email Generator",
        desc: "Python-powered system for automating professional marketing emails. Streamlines mass outreach with customizable templates and SMTP integration.",
        tags: ["Python", "Automation", "SMTP"],
        icon: <FaRobot />
    },
    {
        title: "Task Booking Platform",
        desc: "Web application for college resource management. Enables students and admins to seamlessly book and manage campus resources.",
        tags: ["Web Development", "UI/UX", "Full Stack"],
        icon: <FaCalendarCheck />
    },
    {
        title: "SEO-Optimized Portfolios",
        desc: "Designed and managed WordPress sites with a focus on Technical SEO, Core Web Vitals, and mobile-first responsiveness.",
        tags: ["WordPress", "SEO", "Performance"],
        icon: <FaWordpress />
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-label">Selected Work</span>
                    <h2 className="section-heading">Featured <span>Projects</span></h2>
                </motion.div>

                <div className="projects-bento">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card3D>
                                <div className="project-icon">{project.icon}</div>
                                <h3 className="project-title white">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag gold">{tag}</span>
                                    ))}
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
