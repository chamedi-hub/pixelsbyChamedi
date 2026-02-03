import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Led the complete redesign of a multi-million dollar e-commerce platform, improving conversion rates by 35%.",
      tags: ["UI/UX", "React", "Figma", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Healthcare Dashboard",
      description: "Designed and developed an intuitive dashboard for healthcare professionals to manage patient data and appointments.",
      tags: ["Dashboard", "TypeScript", "Data Viz", "Accessibility"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Created a seamless mobile banking experience with focus on security and user-friendly interactions.",
      tags: ["Mobile", "React Native", "UX Research", "Prototyping"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "SaaS Design System",
      description: "Built a comprehensive design system from scratch, ensuring consistency across 20+ product features.",
      tags: ["Design System", "Component Library", "Documentation", "Storybook"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop"
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Designed the interface for a machine learning analytics platform used by Fortune 500 companies.",
      tags: ["AI/ML", "Data Visualization", "Enterprise", "Vue.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Social Media Management Platform",
      description: "Developed a comprehensive social media management tool with real-time collaboration features.",
      tags: ["Real-time", "WebSockets", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
    }
  ];

  const skills = [
    { name: "UI/UX Design", level: 95, icon: Palette },
    { name: "React & Frontend", level: 90, icon: Code },
    { name: "Prototyping", level: 88, icon: Zap },
    { name: "Design Systems", level: 92, icon: Palette },
    { name: "User Research", level: 85, icon: Zap },
    { name: "Accessibility", level: 87, icon: Code }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CW
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Chamedi Warnasuriya
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">UI/UX Engineer</p>
            <p className="text-lg text-gray-400">10 Years of Crafting Digital Experiences</p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transforming complex problems into elegant, user-centered solutions through design and code.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6">
              With a decade of experience in UI/UX engineering, I bridge the gap between beautiful design and functional code. My journey has taken me through startups to enterprise organizations, where I've consistently delivered solutions that users love and businesses thrive on.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I specialize in creating design systems, building responsive web applications, and conducting user research to ensure every pixel serves a purpose. My approach combines data-driven insights with creative problem-solving.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not pushing pixels or writing code, you'll find me mentoring junior designers, contributing to open-source projects, or exploring the latest trends in web technologies and human-computer interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Icon size={20} className="text-purple-400 mr-3" />
                      <span className="text-lg font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Chamedi Warnasuriya. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
}
