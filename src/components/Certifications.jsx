import { motion } from 'framer-motion';
import { FaCertificate, FaArrowRight } from 'react-icons/fa';
import Card3D from './Card3D';

const certs = [
    {
        title: "Internship Completion",
        issuer: "Hashnod",
        link: "https://drive.google.com/file/d/1M3EYatqRjvqxOuS_jZmRQIub6lFcONsp/view"
    },
    {
        title: "Digital Marketing Associate",
        issuer: "Meta",
        link: "https://drive.google.com/file/d/1aftTW3Y9Xg1mUSMEYjSlvoSRhthB4ymX/view"
    },
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        link: "https://drive.google.com/file/d/1e1_sAp7zumynJh0NHMgVeM_vp_jDJJes/view"
    },
    {
        title: "Python Programming",
        issuer: "Udemy",
        link: "https://drive.google.com/file/d/1OQhBpteWL2ZxYn5SL9mJA_-iFZkiqpK1/view"
    },
    {
        title: "Business Marketing Strategy",
        issuer: "Meta",
        link: "https://drive.google.com/file/d/1e5NtZc533cLCV-pxzP6aJVTubBXrCsmp/view"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-label">Achievements</span>
                    <h2 className="section-heading">Professional <span>Certifications</span></h2>
                </motion.div>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card3D className="cert-card-3d">
                                <div style={{ textAlign: 'center' }}>
                                    <FaCertificate className="cert-icon" />
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-issuer">Issued by {cert.issuer}</p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        Verify Credential <FaArrowRight />
                                    </a>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
