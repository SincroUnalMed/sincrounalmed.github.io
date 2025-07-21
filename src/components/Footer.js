import React from 'react';
import { Settings, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    {/* Logo and Description */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                padding: '8px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Settings size={24} color="white" />
                            </div>
                            <span style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: 'white'
                            }}>
                                SINCRO - UNAL
                            </span>
                        </div>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Advancing control engineering through innovative automation,
                            collaborative partnerships, and a commitment to improving industrial outcomes.
                        </p>

                        {/* Social Media Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
                                { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
                                { icon: <Github size={20} />, href: '#', label: 'GitHub' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    style={{
                                        color: '#9ca3af',
                                        textDecoration: 'none',
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#3b82f6';
                                        e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#9ca3af';
                                        e.target.style.backgroundColor = 'transparent';
                                    }}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            color: 'white'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                { label: 'About Us', href: '#about' },
                                { label: 'Engineering Projects', href: '#projects' },
                                { label: 'Our Team', href: '#team' },
                                { label: 'Publications', href: 'https://scholar.google.com' },
                                { label: 'News & Updates', href: 'https://unal.edu.co' },
                                { label: 'Careers', href: '#contact' }
                            ].map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <a
                                        href={link.href}
                                        style={{
                                            color: '#9ca3af',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                                        onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            color: 'white'
                        }}>
                            Contact Information
                        </h4>
                        <div style={{ color: '#9ca3af' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <MapPin size={16} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                                <div>
                                    <div>Engineering Building</div>
                                    <div>Universidad Nacional de Colombia</div>
                                    <div>Medellín, Antioquia, Colombia</div>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.75rem'
                            }}>
                                <Mail size={16} />
                                <a
                                    href="mailto:sincro@unal.edu.co"
                                    style={{
                                        color: '#9ca3af',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                                >
                                    sincro@unal.edu.co
                                </a>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #374151',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                        © {currentYear} SINCRO - Universidad Nacional de Colombia. All rights reserved.
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                                    {[
              { label: 'Privacy Policy', href: 'https://unal.edu.co/privacy' },
              { label: 'Terms of Service', href: 'https://unal.edu.co/terms' },
              { label: 'Cookie Policy', href: 'https://unal.edu.co/cookies' }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                {link.label}
              </a>
            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 