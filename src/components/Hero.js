import React from 'react';
import { BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ marginTop: '80px' }}>
      <div className="container">
        <h1 className="hero-title">
          Control Engineering<br />
          Electrical Engineering
        </h1>
        <p className="hero-subtitle">
          SINCRO - Universidad Nacional de Colombia - Facultad de Minas. Strengthen students' research, innovation, professional and knowledge transmission skills through the execution of formative research projects, courses, conferences and participation in events and competitions.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            <BookOpen size={20} />
            View Our Projects
          </a>
          <a href="#team" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.2)', borderColor: 'white', color: 'white' }}>
            <Users size={20} />
            Meet Our Team
          </a>
        </div>

        <div className="stats-grid" style={{ marginTop: '4rem' }}>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Active Engineering Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">35+</span>
            <span className="stat-label">Published Papers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Control Areas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Team Members</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 