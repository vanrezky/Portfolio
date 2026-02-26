import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Terminal,
  Cpu,
  Database,
  Network,
  Server,
  Menu,
  X
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string, title: string }) => (
  <div className="flex items-center space-x-4 mb-8 md:mb-12">
    <span className="font-mono text-emerald-500 text-sm tracking-widest">{number}.</span>
    <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">{title}</h2>
    <div className="h-px bg-zinc-800 flex-grow ml-4 md:ml-6"></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. ABOUT', href: '#about' },
    { name: '02. ARCHITECTURE', href: '#architecture' },
    { name: '03. EXPERIENCE', href: '#experience' },
    { name: '04. CASE STUDIES', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f1115]/90 backdrop-blur-sm border-b border-zinc-800/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="font-mono text-lg font-bold text-zinc-100 tracking-tighter">
              VR<span className="text-emerald-500">_</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors px-3 py-2">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-400 hover:text-emerald-400 p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1115] border-b border-zinc-800/50">
          <div className="px-6 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-2">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 border-b border-zinc-800/50">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="font-mono text-emerald-500 text-sm mb-6 tracking-widest">
            &gt; SYSTEM_INIT
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
            Van Rezky Nababan.<br />
            <span className="text-zinc-500">Backend Engineer.</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 md:mb-12 leading-relaxed"
        >
          Specializing in scalable backend architectures (.NET CQRS, Laravel) and responsive frontend interfaces (Vue.js). Passionate about building high-performance applications for the healthcare, travel, and EdTech sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6"
        >
          <a href="#projects" className="group flex items-center space-x-2 font-mono text-sm text-emerald-500 hover:text-emerald-400 transition-colors">
            <span>[ VIEW_SYSTEMS ]</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:vanrezkysadewa77@gmail.com" className="font-mono text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
            [ CONTACT_NODE ]
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader number="01" title="SYSTEM_OVERVIEW" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="prose prose-invert prose-zinc max-w-none">
              <p className="text-lg leading-relaxed text-zinc-400">
                I am a dedicated Software Engineer with a proven track record of modernizing and optimizing complex systems. My journey includes spearheading the transition of legacy EdTech platforms at Garuda Cyber, achieving a <span className="text-emerald-400 font-mono text-sm bg-emerald-400/10 px-1 py-0.5 rounded">70% performance boost</span>.
              </p>
              <p className="text-lg leading-relaxed text-zinc-400 mt-6">
                Currently, at Opsigo Asia, I focus on optimizing large-scale B2C travel and healthcare platforms, successfully reducing critical load times from <span className="text-emerald-400 font-mono text-sm bg-emerald-400/10 px-1 py-0.5 rounded">60s to 1-3s</span>. Beyond coding, I am passionate about leadership and have spent 2 years mentoring tech interns, fostering the next generation of developers.
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="border border-zinc-800 p-6 bg-zinc-900/50">
              <div className="font-mono text-xs text-zinc-500 mb-4 uppercase tracking-widest">Current Status</div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-zinc-300">Active / Opsigo Asia</span>
              </div>
              <div className="h-px bg-zinc-800 my-4"></div>
              <div className="font-mono text-xs text-zinc-500 mb-4 uppercase tracking-widest">Location</div>
              <div className="font-mono text-sm text-zinc-300">Pekanbaru, ID</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 md:py-32 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader number="02" title="ARCHITECTURE_&_STACK" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-mono text-emerald-500 text-sm mb-6 flex items-center">
              <Server className="w-4 h-4 mr-2" /> BACKEND_INFRASTRUCTURE
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">.NET (CQRS, MediatR)</div>
                <div className="text-sm text-zinc-500">High-performance enterprise architecture</div>
              </div>
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">Laravel & CodeIgniter</div>
                <div className="text-sm text-zinc-500">Rapid API development & monolithic systems</div>
              </div>
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">RabbitMQ</div>
                <div className="text-sm text-zinc-500">Asynchronous message queuing</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-emerald-500 text-sm mb-6 flex items-center">
              <Database className="w-4 h-4 mr-2" /> DATA_&_STORAGE
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">PostgreSQL & MySQL</div>
                <div className="text-sm text-zinc-500">Relational data modeling & optimization</div>
              </div>
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">Redis</div>
                <div className="text-sm text-zinc-500">In-memory caching & session management</div>
              </div>
              <div className="border-l-2 border-zinc-800 pl-4">
                <div className="font-bold text-zinc-200 mb-1">AWS S3</div>
                <div className="text-sm text-zinc-500">Scalable object storage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-800/50">
          <div>
            <h3 className="font-mono text-emerald-500 text-sm mb-6 flex items-center">
              <Terminal className="w-4 h-4 mr-2" /> WORKSPACE
            </h3>
            <ul className="font-mono text-sm text-zinc-400 space-y-3">
              <li>&gt; MacBook M1 Pro 14"</li>
              <li>&gt; 1x External Monitor</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-emerald-500 text-sm mb-6 flex items-center">
              <Cpu className="w-4 h-4 mr-2" /> TOOLING
            </h3>
            <ul className="font-mono text-sm text-zinc-400 space-y-3">
              <li>&gt; Visual Studio Code / JetBrains Rider</li>
              <li>&gt; TablePlus / DBeaver</li>
              <li>&gt; iTerm</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Opsigo Asia (PT Teknologia Digital Kreasi)",
      role: "Software Engineer",
      period: "Present",
      highlights: [
        "Engineered .NET/Laravel backend systems.",
        "Optimized load times drastically from 60s to 1s.",
        "Integrated Zoho Sign, Maps API, and Espay (zero-redirect virtual accounts).",
        "Managed RabbitMQ queues for asynchronous processing."
      ]
    },
    {
      company: "Garuda Cyber Indonesia",
      role: "Fullstack Developer",
      period: "Previous",
      highlights: [
        "Spearheaded SaaS academic platform 'MiniPack Smart Campus' replacing legacy systems, achieving a 70% performance boost.",
        "Integrated Ministry of Education's Feeder system.",
        "Implemented dynamic Role-Based Access Control (RBAC).",
        "Mentored tech interns for 2 years, guiding them in modern development practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader number="03" title="EXECUTION_LOG" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-3 mb-2 md:mb-0">
                <div className="font-mono text-sm text-zinc-500 mb-2">{exp.period}</div>
                <div className="font-mono text-xs text-emerald-500 uppercase tracking-widest">{exp.company}</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold text-zinc-100 mb-6">{exp.role}</h3>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-zinc-400">
                      <span className="font-mono text-emerald-500 mr-4 mt-1">-</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Filld.com.au",
      domain: "Healthcare",
      problem: "Healthcare platform requiring robust document automation, mapping, and high-performance data retrieval.",
      architecture: ".NET CQRS MediatR architecture with RabbitMQ for async tasks and PostgreSQL for data persistence.",
      decisions: "Implemented CQRS to separate read/write operations, drastically reducing system load times and improving scalability.",
      tags: [".NET", "CQRS", "RabbitMQ", "PostgreSQL", "Zoho Sign"],
      link: "https://filld.com.au"
    },
    {
      title: "CityTours B2C",
      domain: "Travel",
      problem: "Large-scale travel booking platform needing a seamless, high-conversion checkout experience without redirects.",
      architecture: "Laravel monolithic backend with MySQL. Integrated Espay Gateway for payment processing.",
      decisions: "Engineered zero-redirect virtual accounts via Espay, keeping users within the platform to reduce drop-off rates.",
      tags: ["Laravel", "MySQL", "Espay Gateway", "Payment Integration"],
      link: "https://citytours.sg"
    },
    {
      title: "Arrangge",
      domain: "Advanced Booking",
      problem: "Complex multi-booking requirements (flights, eSIM, insurance) needing a unified engine and AI integration.",
      architecture: "Robust Laravel backend serving a responsive Vue.js admin dashboard.",
      decisions: "Centralized booking logic to handle disparate external APIs, ensuring transactional integrity across multiple services.",
      tags: ["Laravel", "Vue.js", "AI Integration", "Multi-booking"],
      link: "https://arr-stag.idteknologia.net"
    },
    {
      title: "MiniPack Smart Campus",
      domain: "EdTech SaaS",
      problem: "Legacy academic systems suffering from poor performance and lack of integration with national databases.",
      architecture: "Fullstack SaaS platform with dynamic Role-Based Access Control (RBAC).",
      decisions: "Re-architected the core system, achieving a 70% performance boost. Built automated sync with the Ministry of Education's Feeder system.",
      tags: ["Fullstack", "SaaS", "RBAC", "API Integration"],
      link: "https://smartminipack.garudacyber.co.id"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader number="04" title="CASE_STUDIES" />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="border border-zinc-800 bg-[#13151a] p-6 sm:p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 md:mb-8">
                <div>
                  <div className="font-mono text-xs text-emerald-500 mb-3 uppercase tracking-widest">[{project.domain}]</div>
                  <h3 className="text-3xl font-bold text-zinc-100 mb-4">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center">
                        {project.title}
                        <ExternalLink className="w-5 h-5 ml-3 text-zinc-600" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                <div>
                  <h4 className="font-mono text-sm text-zinc-500 mb-3 uppercase tracking-widest border-b border-zinc-800 pb-2">Problem Statement</h4>
                  <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-zinc-500 mb-3 uppercase tracking-widest border-b border-zinc-800 pb-2">Architecture</h4>
                  <p className="text-zinc-400 leading-relaxed">{project.architecture}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-mono text-sm text-zinc-500 mb-3 uppercase tracking-widest border-b border-zinc-800 pb-2">Key Decisions</h4>
                  <p className="text-zinc-400 leading-relaxed">{project.decisions}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-zinc-800/50">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="font-mono text-xs text-zinc-500 bg-zinc-900 px-3 py-1 border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0b0e] py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="font-mono text-sm text-zinc-500 mb-6 md:mb-0">
          SYSTEM_TERMINATED // {new Date().getFullYear()}
        </div>
        
        <div className="flex flex-wrap gap-6 md:gap-8 mt-4 md:mt-0">
          <a href="http://github.com/vanrezky/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center">
            <Github className="w-4 h-4 mr-2" /> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/vanrezky/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center">
            <Linkedin className="w-4 h-4 mr-2" /> LINKEDIN
          </a>
          <a href="mailto:vanrezkysadewa77@gmail.com" className="font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center">
            <Mail className="w-4 h-4 mr-2" /> EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Architecture />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
