import { FaSearch, FaChartLine, FaBullhorn, FaShieldAlt, FaPython, FaWordpress, FaHtml5, FaReact, FaGoogle, FaCode } from 'react-icons/fa';

const skills = [
    { name: "SEO Strategy", icon: <FaSearch /> },
    { name: "Google Ads", icon: <FaGoogle /> },
    { name: "Social Media Marketing", icon: <FaChartLine /> },
    { name: "Affiliate Marketing", icon: <FaBullhorn /> },
    { name: "Google Analytics", icon: <FaChartLine /> },
    { name: "Content Strategy", icon: <FaBullhorn /> },
    { name: "Python", icon: <FaPython /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Cyber Security", icon: <FaShieldAlt /> },
    { name: "Web Development", icon: <FaCode /> },
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
