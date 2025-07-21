import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: "Address",
            details: ["Engineering Building", "Universidad Nacional de Colombia", "Medellín, Antioquia, Colombia"]
        },
        {
            icon: <Mail size={24} />,
            title: "Email",
            details: ["sincro@unal.edu.co", "collaborations@unal.edu.co"]
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
        },
        {
            icon: <Clock size={24} />,
            title: "Office Hours",
            details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in collaborating, joining our team, or learning more about our control engineering projects? 
          We'd love to hear from you. Reach out to explore partnership opportunities.
        </p>

                <div className="grid grid-2" style={{ gap: '3rem' }}>
                    {/* Contact Information */}
                    <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ffffff' }}>
              Contact Information
            </h3>

                        <div className="grid" style={{ gap: '2rem' }}>
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-info">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem'
                                    }}>
                                        <div style={{ color: '#3b82f6', marginTop: '0.25rem' }}>
                                            {info.icon}
                                        </div>
                                        <div>
                                                                  <h4 style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem',
                        color: '#ffffff'
                      }}>
                        {info.title}
                      </h4>
                                            {info.details.map((detail, detailIndex) => (
                                                                        <p key={detailIndex} style={{ 
                          color: '#cccccc', 
                          margin: '0.25rem 0',
                          lineHeight: '1.5'
                        }}>
                          {detail}
                        </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Research Areas */}
                        <div style={{ marginTop: '3rem' }}>
                                          <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Engineering Collaboration Areas
              </h4>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            }}>
                                                {[
                  'Process Control',
                  'AI in Engineering',
                  'Industrial Automation',
                  'System Optimization',
                  'Smart Manufacturing',
                  'IoT Control Systems',
                  'Data Analytics',
                  'Robotic Control'
                ].map((area, index) => (
                                    <span key={index} className="project-tag" style={{ fontSize: '0.9rem' }}>
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-info">
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Send Us a Message
            </h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ffffff'
                }}>
                  Name *
                </label>
                                <input
                                    type="text"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ffffff'
                }}>
                  Email *
                </label>
                                <input
                                    type="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ffffff'
                }}>
                  Subject
                </label>
                                <input
                                    type="text"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#ffffff'
                }}>
                  Message *
                </label>
                                <textarea
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 