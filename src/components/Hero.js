import React, { useCallback } from 'react';
import { BookOpen, Users } from 'lucide-react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#06b6d4", "#8b5cf6", "#ffffff"],
      },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: {
          polygon: {
            sides: 6,
          },
        },
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="hero-section" style={{ marginTop: '80px', position: 'relative' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero-title">
          Control Engineering<br />
          Electrical Engineering
        </h1>
        <p className="hero-subtitle">
          SINCRO - Universidad Nacional de Colombia - Facultad de Minas Strengthen students' research, innovation, professional and knowledge transmission skills through the execution of formative research projects, courses, conferences and participation in events and competitions.
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