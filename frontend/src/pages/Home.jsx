import React, { useState, useEffect } from 'react';
import { getProfile } from '../api/profileApi';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setLoading(true);
                const response = await getProfile();

                if (response.success) {
                    setProfile(response.data);
                } else {
                    setError('Failed to load profile');
                }
            } catch (err) {
                setError(err.message || 'An error occurred');
                console.error('Error fetching profile:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div className="home">
            <Navbar />
            <Hero profile={profile} loading={loading} />
            <Resume profile={profile} loading={loading} />
            <Projects projects={profile?.projects} loading={loading} />
            <Contact email={profile?.email} loading={loading} />

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
        </div>
    );
};

export default Home;
