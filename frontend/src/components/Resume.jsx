import React from 'react';
import './Resume.css';

const Resume = ({ profile, loading }) => {
    if (loading || !profile) return null;

    return (
        <section className="resume-section" id="resume">
            <div className="resume-container">
                <h2 className="section-title">Career & Experience</h2>

                {/* Experience & Education Grid */}
                <div className="resume-grid">

                    {/* Experience Column */}
                    <div className="resume-column">
                        <h3>
                            <span className="icon">🚀</span> Experience
                        </h3>
                        {profile.experience?.map((exp, index) => (
                            <div key={index} className="resume-item">
                                <div className="item-header">
                                    <div className="item-title">{exp.role}</div>
                                    <span className="item-duration">{exp.duration}</span>
                                </div>
                                <div className="item-subtitle">{exp.company}</div>
                                <ul className="item-description">
                                    {exp.description?.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Column */}
                    <div className="resume-column">
                        <h3>
                            <span className="icon">🎓</span> Education
                        </h3>
                        {profile.education?.map((edu, index) => (
                            <div key={index} className="resume-item">
                                <div className="item-header">
                                    <div className="item-title">{edu.degree}</div>
                                    <span className="item-duration">{edu.year}</span>
                                </div>
                                <div className="item-subtitle">{edu.institution}</div>
                            </div>
                        ))}

                        <h3>
                            <span className="icon">🛠️</span> Workshops
                        </h3>
                        {profile.workshops?.map((ws, index) => (
                            <div key={index} className="resume-item">
                                <div className="item-title">{ws.title}</div>
                                <p className="item-description">{ws.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements & Patents */}
                <h2 className="section-title">Awards & Innovation</h2>
                <div className="achievements-grid">
                    {/* Achievements */}
                    <div className="achievement-card">
                        <h4>🏆 Achievements</h4>
                        <ul className="achievement-list">
                            {profile.achievements?.map((ach, index) => (
                                <li key={index}>
                                    <span className="icon">🏅</span> {ach}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Patents */}
                    <div className="achievement-card">
                        <h4>💡 Patents Filed</h4>
                        <ul className="achievement-list">
                            {profile.patents?.map((pat, index) => (
                                <li key={index}>
                                    <span className="icon">📜</span> {pat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="achievement-card">
                        <h4>🗣️ Languages</h4>
                        <div className="skills-tags">
                            {profile.languages?.map((lang, index) => (
                                <span key={index} className="skill-tag" style={{ border: '1px solid var(--accent-secondary)', display: 'inline-block', margin: '0.2rem' }}>
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;
