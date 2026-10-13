import React, { Suspense, lazy, useEffect, useRef } from 'react';
import Home from './pages/Home';
import './App.css';

const Scene3D = lazy(() => import('./components/Scene3D'));

function App() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        // Delegate from the document so elements rendered after the profile
        // loads (skill tags, project cards) also get the hover effect
        const handleMouseOver = (e) => {
            const target = e.target instanceof Element ? e.target : null;
            cursor.classList.toggle('hover', !!target?.closest('a, button, .skill-tag, .project-card'));
            // Hide custom cursor on form elements
            cursor.classList.toggle('hidden', !!target?.closest('input, textarea, select, label'));
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="App">
            <div className="custom-cursor" ref={cursorRef}></div>

            {/* F1 Car - Highlighted on one side */}
            <Suspense fallback={null}>
                <Scene3D />
            </Suspense>

            {/* No background effects - clean, minimal */}

            <Home />
        </div>
    );
}

export default App;
