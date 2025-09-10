import useLanguage from '../context/useLanguage.js';

const Skills = () => {
    const { t } = useLanguage();
    const skillsData = (t.skills && t.skills.items) || [];
    return (
        <div className="about-me">
            <h4>{t.skills.title}</h4>
            <div className="row gy-8">
                {skillsData.map((skill, index) => (
                    <div className="col-md-6 skills-content skills-animation" key={index}>
                        <div className="skill-item">
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon || ''}</span>
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
            {/* <div className="legend">
    
                <ul>
                    <li><span className="legend-color" style={{ backgroundColor: '#f44336' }}></span> Niveau Bas (0-50%)</li>
                    <li><span className="legend-color" style={{ backgroundColor: '#ff9800' }}></span> Niveau Moyen (51-70%)</li>
                    <li><span className="legend-color" style={{ backgroundColor: '#4caf50' }}></span> Niveau Bon (71-100%)</li>
                </ul>
            </div> */}
        </div>
    );
};

export default Skills;
