import React from 'react';
import { Mail, Linkedin, BookOpen, Award, Users } from 'lucide-react';
import teamData from '../data/team.json';

const Team = () => {
    // Generate initials from full name
    const generateInitials = (fullName) => {
        return fullName
            .split(' ')
            .filter(name => name.length > 0)
            .map(name => name.charAt(0).toUpperCase())
            .slice(0, 2) // Take first two initials
            .join('');
    };

    // Transform JSON data to include initials
    const teamMembers = teamData.map(member => ({
        name: member.full_name,
        role: member.profession,
        initials: generateInitials(member.full_name),
        bio: member.bio,
        email: member.email,
        linkedin: member.linkedin
    }));

    const stats = [
        { icon: <Award size={24} />, label: "Awards Received", value: "12+" },
        { icon: <BookOpen size={24} />, label: "Publications", value: "200+" },
        { icon: <Users size={24} />, label: "Collaborations", value: "30+" },
    ];

    return (
        <section id="team" className="section about-section">
            <div className="container">
                <h2 className="section-title">Meet Our Team</h2>
                <p className="section-subtitle">
                    Our diverse, interdisciplinary team brings together expertise from control engineering, data science,
                    automation, and industrial systems to drive innovative engineering solutions.
                </p>

                {/* Team Stats */}
                <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center' }}>
                            <div style={{
                                color: '#3b82f6',
                                marginBottom: '1rem',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {stat.icon}
                            </div>
                            <div className="stat-number" style={{ fontSize: '2rem' }}>{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team Members */}
                <div className="grid grid-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card team-member">
                            <div className="member-photo">
                                {member.initials}
                            </div>
                            <div className="member-name">{member.name}</div>
                            <div className="member-role">{member.role}</div>
                            <p className="member-bio">{member.bio}</p>

                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                marginTop: '1.5rem'
                            }}>
                                <a
                                    href={`mailto:${member.email}`}
                                    style={{
                                        color: '#3b82f6',
                                        textDecoration: 'none',
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    <Mail size={20} />
                                </a>
                                <a
                                    href={member.linkedin}
                                    style={{
                                        color: '#3b82f6',
                                        textDecoration: 'none',
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '2rem',
                    background: '#1a1a1a',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                        Join Our Engineering Team
                    </h3>
                    <p style={{ color: '#cccccc', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        We're always looking for talented engineers, students, and collaborators who share our passion
                        for advancing control engineering. Explore opportunities to contribute to cutting-edge automation.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        View Open Positions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Team; 