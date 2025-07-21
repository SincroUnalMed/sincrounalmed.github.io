import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
                  background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #333333'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#ffffff' 
          }}>
            Sincro - Universidad Nacional de Colombia
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem' }}>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                                          style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
                            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: window.innerWidth <= 768 ? 'block' : 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                        <div style={{
          background: 'black',
          borderTop: '1px solid #333333',
                    padding: '1rem 0'
                }}>
                    <div className="container">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                style={{
                                    display: 'block',
                                    padding: '0.75rem 0',
                                    textDecoration: 'none',
                                                      color: '#ffffff',
                  fontWeight: '500',
                  borderBottom: '1px solid #333333'
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 