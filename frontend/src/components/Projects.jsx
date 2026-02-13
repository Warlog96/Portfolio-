import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = ({ projects, loading }) => {
    const [visibleCards, setVisibleCards] = useState([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardsRef.current.indexOf(entry.target);
                        if (index !== -1 && !visibleCards.includes(index)) {
                            setVisibleCards(prev => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        // Add mouse tracking for spotlight effect
        const handleMouseMove = (e, card) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        };

        cardsRef.current.forEach((card) => {
            if (card) {
                const mouseMoveHandler = (e) => handleMouseMove(e, card);
                card.addEventListener('mousemove', mouseMoveHandler);
                card.mouseMoveHandler = mouseMoveHandler;
            }
        });

        return () => {
            cardsRef.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                    if (card.mouseMoveHandler) {
                        card.removeEventListener('mousemove', card.mouseMoveHandler);
                    }
                }
            });
        };
    }, [projects]);
    if (loading) {
        return (
            <section id="projects" className="projects">
                <div className="projects-container">
                    <div className="loading">Loading projects...</div>
                </div>
            </section>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <section id="projects" className="projects">
                <div className="projects-container">
                    <h2>Projects</h2>
                    <p className="no-projects">No projects available</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => cardsRef.current[index] = el}
                            className={`project-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                            style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="project-links">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link github"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
