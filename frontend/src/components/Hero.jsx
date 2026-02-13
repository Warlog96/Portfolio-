import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = ({ profile, loading }) => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Intersection Observer for fade-in animation
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        // Parallax scroll effect
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (loading) {
        return (
            <section id="hero" className="hero">
                <div className="hero-container">
                    <div className="loading">Loading...</div>
                </div>
            </section>
        );
    }

    if (!profile) {
        return (
            <section id="hero" className="hero">
                <div className="hero-container">
                    <div className="error">Failed to load profile data</div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="hero"
            className="hero"
            ref={heroRef}
        >

            <div className="hero-container">
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <div className="hero-layout">
                        {/* Profile Photo Section */}
                        <div className="hero-photo-section">
                            <div className="photo-wrapper">
                                <div className="photo-frame">
                                    <img
                                        src="/images/profile.jpg"
                                        alt={profile.name}
                                        className="profile-photo"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('fallback');
                                        }}
                                    />
                                    <div className="photo-placeholder fallback-content">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 18.5C6 16.0147 8.68629 14 12 14C15.3137 14 18 16.0147 18 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <p>Photo Missing</p>
                                    </div>
                                </div>
                                <div className="photo-glow"></div>
                            </div>

                            {/* Social Links */}
                            <div className="social-links">
                                <a href="https://github.com/Warlog96" target="_blank" rel="noopener noreferrer" className="social-btn github" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/avaneesh-parmaj-a97a21293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/a_avaneesh_4611?igsh=Y3RvcTIxeWxpbjV0" target="_blank" rel="noopener noreferrer" className="social-btn instagram" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer" className="social-btn email" aria-label="Email">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </a>

                            </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="hero-text-section">
                            <h1 className="hero-title">{profile.name}</h1>
                            <h2 className="hero-role">{profile.role}</h2>
                            <p className="hero-about">{profile.about}</p>

                            <div className="skills-container">
                                <h3>Technical Expertise</h3>
                                <div className="skills-grid">
                                    {profile.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="skill-tag"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
