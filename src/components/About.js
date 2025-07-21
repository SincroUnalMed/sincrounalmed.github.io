import React from 'react';
import { Target, Lightbulb, Cpu, Award } from 'lucide-react';

const About = () => {
      const focusAreas = [
    {
      icon: <Target size={40} />,
      title: "Process Control",
      description: "Developing advanced control strategies for industrial processes, optimizing efficiency and stability in manufacturing systems."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Automation Innovation",
      description: "Creating cutting-edge automation technologies and methodologies to advance industrial and robotic systems."
    },
    {
      icon: <Cpu size={40} />,
      title: "Smart Systems",
      description: "Designing intelligent control systems that integrate IoT, AI, and machine learning for autonomous operation."
    },
    {
      icon: <Award size={40} />,
      title: "Industrial Excellence",
      description: "Bridging the gap between theoretical control concepts and practical industrial applications through rigorous engineering."
    }
  ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                        <h2 className="section-title">About Sincro - Universidad Nacional de Colombia</h2>
        <p className="section-subtitle">
          Our engineering group is committed to advancing control engineering through interdisciplinary 
          collaboration, innovative control methodologies, and an industry-centered approach to automation excellence.
        </p>

                <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
                    <div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc', marginBottom: '2rem' }}>
              To conduct world-class control engineering and electrical engineering research that translates into meaningful improvements 
              in industrial automation, process optimization, and smart systems. We strive to be 
              at the forefront of engineering innovation while maintaining the highest technical standards.
            </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                                'Conduct innovative, high-impact engineering research',
                'Foster collaborative industrial partnerships',
                'Train the next generation of control engineers',
                'Translate findings into industrial applications'
                            ].map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '0.75rem',
                                    fontSize: '1rem',
                                    color: '#cccccc'
                                }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        background: '#3b82f6',
                                        borderRadius: '50%',
                                        marginRight: '1rem'
                                    }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Engineering Philosophy
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc' }}>
              We believe in the power of interdisciplinary collaboration and evidence-based engineering. 
              Our approach combines rigorous engineering methodology with innovative thinking to tackle 
              complex control challenges. We are committed to open knowledge sharing, ethical engineering practices, 
              and making our findings accessible to the global engineering community.
            </p>
                    </div>
                </div>

                        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '3rem', color: '#ffffff' }}>
          Our Focus Areas
        </h3>

                <div className="grid grid-2">
                    {focusAreas.map((area, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center' }}>
                            <div style={{
                                color: '#3b82f6',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {area.icon}
                            </div>
                                          <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#ffffff' }}>
                {area.title}
              </h4>
              <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
                {area.description}
              </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About; 