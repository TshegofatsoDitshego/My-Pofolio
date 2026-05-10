/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  LineChart, 
  BrainCircuit, 
  Terminal, 
  Cpu, 
  Rocket,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Layers
} from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeSegment, setActiveSegment] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Trade Copier",
      category: "fintech",
      description: "Real-time automation tool for forex trading across multiple accounts using Python and data analysis. Built for high performance and reliability.",
      tags: ["Python", "Data Analysis", "Trading API", "Automation"],
      icon: <LineChart className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "FinTrack Engine",
      category: "software",
      description: "A robust back-end engine for financial data processing and real-time ledger management. Optimized for concurrency and scale.",
      tags: ["Python", "SQL", "Flask", "Fintech"],
      icon: <Database className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "Pulse Predictor",
      category: "data-science",
      description: "Predictive model for financial market trends using machine learning techniques and historical data sentiment analysis.",
      tags: ["Data Science", "Machine Learning", "Git", "ALX"],
      icon: <BrainCircuit className="w-6 h-6" />,
      link: "#"
    }
  ];

  const skills = [
    { name: "Python", category: "Languages", icon: <Terminal /> },
    { name: "Data Science", category: "Analytics", icon: <LineChart /> },
    { name: "Software Engineering", category: "Engineering", icon: <Code2 /> },
    { name: "Data Engineering", category: "Big Data", icon: <Database /> },
    { name: "Flask/SQL", category: "Web/DB", icon: <Layers /> },
    { name: "Git", category: "Tools", icon: <Github /> },
    { name: "AWS (In Progress)", category: "Cloud", icon: <Cpu /> },
    { name: "AI Engineering", category: "Advanced", icon: <BrainCircuit /> },
  ];

  const experience = [
    {
      role: "Coding Facilitator",
      company: "WeThinkCode_",
      period: "2024 - Present",
      description: "Guiding future engineers in software development principles and best practices."
    },
    {
      role: "Hackathon Organiser & Mentor",
      company: "Community Tech",
      period: "2025",
      description: "Coordinating events and mentoring participants to build innovative solutions."
    },
    {
      role: "Virtual Assistant (Finance Focus)",
      company: "Remote",
      period: "2023 - 2024",
      description: "Managing administrative and technical tasks for financial workflows."
    }
  ];

  const education = [
    {
      degree: "Data Science Programme",
      school: "ALX",
      year: "2026",
      details: "Specializing in advanced analytics and intelligent systems."
    },
    {
      degree: "Software Engineering",
      school: "WeThinkCode_",
      year: "2024 - 2025",
      details: "Comprehensive training in full-stack development and system architecture."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-mono font-bold text-white group-hover:scale-110 transition-transform">
              TB
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:block">/dev/portfolio</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors text-blue-400">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block py-1 px-3 glass rounded-full text-xs font-semibold text-blue-400 mb-6 tracking-widest uppercase">
              Available for New Opportunities
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              Tshegofatso <span className="text-slate-500 font-medium">Boitumelo</span> <br />
              <span className="text-slate-500 font-medium">Mamothibe</span> <span className="text-gradient">Ditshego</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Software Engineer & Aspiring Data Scientist building <br className="hidden md:block" />
              <span className="text-slate-200">intelligent fintech solutions</span> to automate the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 glass hover:bg-slate-800/60 text-white rounded-xl font-semibold transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-blue-500 text-base font-mono">01.</span>
              About Me
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                Hello! I'm Tshegofatso, a <span className="text-slate-200">Recent WeThinkCode_ Software Engineering graduate</span> currently deepening my expertise in <span className="text-slate-200">Data Science with the ALX Programme</span>. 
              </p>
              <p>
                My background is uniquely shaped by a blend of rigorous technical training and hands-on experience in the trading world. This intersection has fueled my passion for building automation tools that bring intelligence and efficiency to the fintech sector.
              </p>
              <p>
                Whether it's orchestrating complex data pipelines or developing real-time trading engines, I thrive on solving high-stakes problems with elegant, scalable code.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center text-slate-700 bg-slate-900/40 border-slate-800">
                <Rocket className="w-32 h-32 text-blue-500/20" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-4 rounded-xl border-slate-700">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-slate-400 tracking-wider uppercase italic">Current Status</span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">Studying Data Science @ ALX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-blue-500 text-base font-mono">02.</span>
                Selected Projects
              </h2>
              <p className="text-slate-400">A collection of systems I've built from the ground up.</p>
            </div>
            
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
              {['all', 'fintech', 'software', 'data-science'].map((seg) => (
                <button
                  key={seg}
                  onClick={() => setActiveSegment(seg)}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all capitalize ${
                    activeSegment === seg 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {seg.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {projects
                .filter(p => activeSegment === 'all' || p.category === activeSegment)
                .map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="h-full glass p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 flex justify-between items-center">
                      {project.title}
                      <a href={project.link} className="text-slate-500 hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono font-medium px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-500 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-blue-500 text-base font-mono">03.</span>
              Technical Toolkit
            </h2>
            <p className="text-slate-400 italic">Specialized in systems that scale and models that perform.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center group cursor-default"
              >
                <div className="text-slate-400 mb-4 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{skill.name}</h4>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <Briefcase className="text-blue-500 w-5 h-5" />
                Work Experience
              </h2>
              <div className="space-y-10 relative">
                <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-800" />
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-16">
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-600 z-10" />
                    <h4 className="text-white font-bold">{exp.role}</h4>
                    <p className="text-blue-400 font-mono text-sm mb-2 uppercase tracking-wide">{exp.company} | {exp.period}</p>
                    <p className="text-slate-400 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <GraduationCap className="text-blue-500 w-6 h-6" />
                Academic Growth
              </h2>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                      <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">{edu.year}</span>
                    </div>
                    <p className="text-slate-200 text-sm mb-1">{edu.school}</p>
                    <p className="text-slate-500 text-xs italic">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <br /><span className="text-gradient uppercase italic tracking-tighter">Intelligent</span></h2>
          <p className="text-slate-400 mb-12 text-lg">
            I'm currently looking for new opportunities in <span className="text-blue-400">fintech, data science, and AI engineering</span>. 
            If you have a challenge for me, let's talk.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:TDitshego70@gmail.com" 
              className="flex items-center gap-3 glass px-8 py-4 rounded-2xl hover:bg-slate-800 transition-colors group"
            >
              <Mail className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-white">Email Me</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 glass px-8 py-4 rounded-2xl hover:bg-slate-800 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-white">LinkedIn</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 glass px-8 py-4 rounded-2xl hover:bg-slate-800 transition-colors group"
            >
              <Github className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-white">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-mono">
          <p>© 2026 Tshegofatso Ditshego. Designed for the future.</p>
          <div className="flex gap-6">
            <span>Built with React + Vite</span>
            <span>Deployed via AI Studio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

