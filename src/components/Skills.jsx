import React from 'react';

const skillsData = [
    { name: "Python", percentage: 70, icon: "🐍" },
    { name: "Django / DRF", percentage: 65, icon: "🐍" },
    { name: "React.js / React Native", percentage: 70, icon: "⚛️" },
    { name: "JavaScript", percentage: 60, icon: "💻" },
    { name: "HTML/CSS", percentage: 80, icon: "🌐" },
    { name: "Java / SpringBoot", percentage: 60, icon: "☕" },
    { name: "SQL / Bases de Données (UML)", percentage: 75, icon: "🗃️" },
    { name: "Git / GitHub / GitLab", percentage: 75, icon: "🧑‍💻" },
    { name: "Docker", percentage: 50, icon: "🐳" },
    { name: "AWS", percentage: 50, icon: "☁️" },
    { name: "SCRUM", percentage: 70, icon: "📋" },
    { name: "Conception UX/UI", percentage: 65, icon: "🎨" },
    { name: "DevOps", percentage: 50, icon: "⚙️" },
    { name: "Machine Learning", percentage: 50, icon: "🤖" },
    { name: "Big Data", percentage: 50, icon: "📊" },
    { name: "Data Science", percentage: 50, icon: "📈" },
];

const Skills = () => {
    return (
        <div className="about-me">
            <h4>Compétences Techniques (Estimations)</h4>
            <div className="row gy-8">
                {skillsData.map((skill, index) => (
                    <div className="col-md-6 skills-content skills-animation" key={index}>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                                <span>{`${skill.percentage}%`}</span>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={skill.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: `${skill.percentage}%` }}
                                    data-percentage={skill.percentage}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Légende pour expliquer les couleurs */}
            <div className="legend">
                {/*<h5>Légende des couleurs : </h5>*/}
                <ul>
                    <li><span className="legend-color" style={{ backgroundColor: '#f44336' }}></span> Niveau Bas (0-50%)</li>
                    <li><span className="legend-color" style={{ backgroundColor: '#ff9800' }}></span> Niveau Moyen (51-70%)</li>
                    <li><span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span> Niveau Bon (71-100%)</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
