import {
    FaSearch, FaChartLine, FaBullhorn, FaShieldAlt, FaPython,
    FaWordpress, FaHtml5, FaReact, FaGoogle, FaCode,
    FaLock, FaNetworkWired, FaUserSecret, FaBug, FaSearchPlus, FaCloud, FaServer
} from 'react-icons/fa';

const skills = [
    // Digital Marketing
    { name: "SEO Strategy", icon: <FaSearch /> },
    { name: "Google Ads", icon: <FaGoogle /> },
    { name: "Social Media Marketing", icon: <FaChartLine /> },
    { name: "Affiliate Marketing", icon: <FaBullhorn /> },
    { name: "Google Analytics", icon: <FaChartLine /> },
    { name: "Content Strategy", icon: <FaBullhorn /> },
    { name: "WordPress", icon: <FaWordpress /> },

    // Cyber Security
    { name: "Network Security", icon: <FaNetworkWired /> },
    { name: "Vulnerability Assessment", icon: <FaSearchPlus /> },
    { name: "Ethical Hacking", icon: <FaUserSecret /> },
    { name: "Cryptography", icon: <FaLock /> },
    { name: "Web Application Security", icon: <FaShieldAlt /> },
    { name: "Pentesting", icon: <FaBug /> },
    { name: "Cloud Security", icon: <FaCloud /> },

    // Development
    { name: "Python", icon: <FaPython /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
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
