import { FaShieldAlt, FaLock, FaNetworkWired, FaUserSecret, FaBug, FaSearchPlus, FaCloud, FaServer } from 'react-icons/fa';

const skills = [
    { name: "Network Security", icon: <FaNetworkWired /> },
    { name: "Vulnerability Assessment", icon: <FaSearchPlus /> },
    { name: "Ethical Hacking", icon: <FaUserSecret /> },
    { name: "Cryptography", icon: <FaLock /> },
    { name: "Web Application Security", icon: <FaShieldAlt /> },
    { name: "Pentesting", icon: <FaBug /> },
    { name: "Cloud Security", icon: <FaCloud /> },
    { name: "Identity Management", icon: <FaServer /> },
    { name: "SIEM/SOC Operations", icon: <FaShieldAlt /> },
    { name: "Incident Response", icon: <FaLock /> },
];

// Duplicate for seamless loop
const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
    return (
        <div className="skills-marquee-wrapper">
            <div className="skills-marquee">
                {duplicatedSkills.map((skill, index) => (
                    <div key={index} className="skill-pill">
                        {skill.icon}
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
