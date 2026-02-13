import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import Scene3D from './components/Scene3D';
import './App.css';

function App() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const handleMouseEnter = () => {
            cursor.classList.add('hover');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('hover');
        };

        window.addEventListener('mousemove', moveCursor);

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Hide custom cursor on form elements
        const formElements = document.querySelectorAll('input, textarea, select, label');
        const handleFormEnter = () => cursor.classList.add('hidden');
        const handleFormLeave = () => cursor.classList.remove('hidden');

        formElements.forEach(el => {
            el.addEventListener('mouseenter', handleFormEnter);
            el.addEventListener('mouseleave', handleFormLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });

            formElements.forEach(el => {
                el.removeEventListener('mouseenter', handleFormEnter);
                el.removeEventListener('mouseleave', handleFormLeave);
            });
        };
    }, []);

    return (
        <div className="App">
            <div className="custom-cursor" ref={cursorRef}></div>

            {/* F1 Car - Highlighted on one side */}
            <Scene3D />

            {/* No background effects - clean, minimal */}

            <Home />
        </div>
    );
}

export default App;
