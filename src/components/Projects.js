import React from 'react';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projects = () => {
      const projects = [
    {
      title: "AI-Powered Process Control",
      description: "Developing machine learning algorithms to enhance industrial process control accuracy and efficiency, particularly in chemical and manufacturing processes.",
      tags: ["Artificial Intelligence", "Process Control", "Manufacturing", "Machine Learning"],
      status: "Active",
      year: "2024",
      team: "8 engineers",
      link: "#"
    },
    {
      title: "Advanced PID Controllers",
      description: "Creating adaptive PID control systems for industrial processes based on real-time system identification and parameter optimization techniques.",
      tags: ["PID Control", "System ID", "Optimization", "Industrial"],
      status: "Active",
      year: "2023",
      team: "12 engineers",
      link: "#"
    },
    {
      title: "Smart Manufacturing Analytics",
      description: "Analyzing industrial data patterns to identify optimization opportunities and develop predictive models for manufacturing efficiency.",
      tags: ["Industry 4.0", "Data Analytics", "Manufacturing", "Predictive Control"],
      status: "Completed",
      year: "2023",
      team: "6 engineers",
      link: "#"
    },
    {
      title: "IoT Control Platform Development",
      description: "Building secure, scalable IoT control solutions for distributed industrial systems, focusing on remote monitoring and autonomous operation.",
      tags: ["IoT", "Distributed Control", "Automation", "Remote Systems"],
      status: "Active",
      year: "2024",
      team: "10 engineers",
      link: "#"
    },
    {
      title: "Robotic Control Systems",
      description: "Developing advanced control algorithms for industrial robotics applications using modern control theory and adaptive techniques.",
      tags: ["Robotics", "Control Theory", "Adaptive Control", "Automation"],
      status: "Active",
      year: "2023",
      team: "15 engineers",
      link: "#"
    },
    {
      title: "Energy Management Systems",
      description: "Designing comprehensive control systems to optimize energy consumption and efficiency in industrial and residential applications.",
      tags: ["Energy Control", "Optimization", "Sustainability", "Smart Grid"],
      status: "Active",
      year: "2024",
      team: "9 engineers",
      link: "#"
    }
  ];

    return (
        <section id="projects" className="section">
            <div className="container">
                        <h2 className="section-title">Our Engineering Projects</h2>
        <p className="section-subtitle">
          Explore our current and completed engineering initiatives that are pushing the boundaries 
          of control engineering and improving industrial automation worldwide.
        </p>

                <div className="grid grid-3">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{
                                    background: project.status === 'Active' ? '#dcfce7' : '#e0e7ff',
                                    color: project.status === 'Active' ? '#166534' : '#3730a3',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '500'
                                }}>
                                    {project.status}
                                </span>
                                <a href={project.link} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.9rem',
                                color: '#6b7280',
                                marginTop: 'auto'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={16} />
                                    {project.year}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Users size={16} />
                                    {project.team}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="#contact" className="btn btn-primary">
                        <ExternalLink size={20} />
                        Collaborate With Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects; 