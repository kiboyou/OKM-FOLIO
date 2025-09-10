import { useState } from 'react';
import useLanguage from '../context/useLanguage.js';

const Resume = () => {
    // Mise en avant : PCAP
    const { t } = useLanguage();
    const highlightCert = {
        title: '[PCAP-31-03] PCAP™ – Certified Associate Python Programmer',
        year: '2024',
        desc: t.resume.highlightDesc,
        link: 'https://www.credly.com/badges/7029cebc-1877-4ce5-88ff-e35d02270601'
    };

    // Autres certifications depuis les traductions
    const otherCerts = t.resume.otherCerts || [];

    const [showAll, setShowAll] = useState(false);

    return (
                <section id="cv" className="resume section">
                        <div className="container section-title">
                                <h2>{t.resume.title}</h2>
            </div>
            <div className="container">
                <div className="row g-4">
                    {/* Colonne Formation (garde le style ancien) */}
                    <div className="col-lg-6">
                                                <h3 className="resume-title">{t.resume.formation}</h3>
                                                {t.resume.formationItems.map((f, idx) => (
                                                    <div className="resume-item" key={idx}>
                                                        <h4>{f.title}</h4>
                                                        <h5>{f.period}</h5>
                                                        <p><em>{f.school}</em></p>
                                                    </div>
                                                ))}
                    </div>

                    {/* Colonne Certifications avec PCAP en premier */}
                    <div className="col-lg-6">
                        <h3 className="resume-title">{t.resume.certifications}</h3>
                        <div className="resume-item border rounded p-3 mb-3" style={{ borderColor: 'var(--accent-color)' }}>
                            <h4 className="mb-1">{highlightCert.title}</h4>
                            <h5 className="text-muted">{highlightCert.year}</h5>
                            <p><em>{highlightCert.desc}</em></p>
                                <a href={highlightCert.link} target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm">{t.resume.badge}</a>
                        </div>
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                            onClick={() => setShowAll(prev => !prev)}
                            aria-expanded={showAll}
                            aria-controls="other-certs-grid"
                        >
                            {showAll ? t.resume.hideAll : t.resume.showAll}
                        </button>
                    </div>
                </div>

                {/* Grille pleine largeur des autres certifs quand ouvert */}
                <div className={`row mt-4 ${showAll ? '' : 'd-none'}`} id="other-certs-grid">
                    {otherCerts.map((c, idx) => (
                        <div key={idx} className="col-sm-6 col-lg-4 mb-3">
                            <div className="resume-item h-100 p-3 border rounded" style={{ borderColor: '#e5e5e5' }}>
                                <h4 className="mb-1" style={{ fontSize: '1rem' }}>{c.title}</h4>
                                <h5 className="text-muted mb-2" style={{ fontSize: '.8rem' }}>{c.year}</h5>
                                <p className="mb-2" style={{ fontSize: '.8rem' }}><em>{c.desc}</em></p>
                                <a href={c.link} target="_blank" rel="noreferrer" className="text-success small">{t.resume.otherCertLink}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Boutons téléchargement CV */}
            <div className="text-center mt-4">
                <a href="/assets/cv/cv-okm_FR.pdf" download>
                    <button className="see-more-btn btn btn-success mt-10">{t.resume.cvFr}</button>
                </a>
                <a href="/assets/cv/cv-okm_EN.pdf" download>
                    <button className="see-more-btn btn btn-success ms-2">{t.resume.cvEn}</button>
                </a>
            </div>
        </section>
    );
};

export default Resume;
