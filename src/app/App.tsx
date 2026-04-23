import { useState } from 'react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import {
  Code2,
  Network,
  Cpu,
  Shield,
  Gamepad2,
  Send,
  GraduationCap,
  Briefcase,
  Palette,
  Monitor,
  WrenchIcon,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const homeRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      if (homeRef.current) {
        const rect = homeRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: 'HTML/CSS', icon: Code2, level: 90 },
    { name: 'JavaScript', icon: Code2, level: 85 },
    { name: 'Networking', icon: Network, level: 88 },
    { name: 'Arduino/IoT', icon: Cpu, level: 82 },
    { name: 'Cybersecurity', icon: Shield, level: 80 },
    { name: 'Gaming Tech', icon: Gamepad2, level: 85 }
  ];

  const projects = [
    {
      title: 'Mihidum Saluwen Music Video',
      description: 'Mihidum Saluwen Music Video',
      tags: ['UI/UX', 'Design', 'Figma'],
      image: '/images/5.jpeg',
      link: 'https://youtu.be/UOP_H88BJFI?si=VYWxFmlvo5hI69tB',
      type: 'design'
    },
    {
      title: 'Aurudu Nakath Seettuwa',
      description: 'Professional video edits and transitions compilation',
      tags: ['Video Editing', 'Motion', 'Production'],
      image: '/images/aurudu1.jpg',
      link: 'https://youtu.be/NY1Pul1Zhr4?si=ZH65zJww5WOhfJj2',
      type: 'video'
    },
    {
      title: 'Ecopal Podcast Video',
      description: 'Creative branding and graphic design projects',
      tags: ['Branding', 'Creative', 'Design'],
      image: '/images/evideo.jpg',
      link: 'https://youtu.be/90ALHXJc8u4?si=jZiuFEVEoFmG74-8',
      type: 'design'
    }
  ];

  const timeline = [
    {
      year: '2024 - Present',
      title: 'HND in Computing',
      organization: 'Advanced Technological Institute',
      description: 'Specialized in software development, networking, and emerging technologies'
    },
    {
      year: '2023',
      title: 'Tech Internship',
      organization: 'Local IT Solutions',
      description: 'Hands-on experience in network administration and web development'
    },
    {
      year: '2022',
      title: 'Tech Content Creator',
      organization: 'YouTube Channel',
      description: 'Creating tech tutorials and reviews for gaming and IoT projects'
    }
  ];

  const services = [
    {
      icon: Monitor,
      title: 'Graphic Designs',
      description: 'Professional graphic design services for your business and personal needs',
      pricing: [
        { name: 'Logo Design', price: 'LKR 5000' },
        { name: 'Banner Design', price: 'LKR 2000' },
        { name: 'Social Media Post', price: 'LKR 1000' },
        { name: 'Business Card', price: 'LKR 1500' }
      ]
    },
    {
      icon: Palette,
      title: 'Video Editing',
      description: 'Professional video editing services for your content',
      pricing: [
        { name: 'Short Video (1-2 min)', price: 'LKR 5000' },
        { name: 'Short Video (3-10 min)', price: 'LKR 7000' },
        { name: 'Medium Video (10 - 30 min)', price: 'LKR 10,000' },
        { name: 'Long Video (30 min - 1 hour)', price: 'LKR 20,000' },
        { name: 'Thumbnail Design', price: 'LKR 1000' }
      ]
    },
    {
      icon: Palette,
      title: 'Live Streaming setup',
      description: 'Setup your live stream with professional quality and engaging visuals',
      pricing: [
        { name: 'Basic Setup', price: 'LKR 6000' },
        { name: 'Advanced Setup', price: 'LKR 12,000' },
        { name: 'Full Production', price: 'LKR 50,000' }
      ]
    },
    {
      icon: WrenchIcon,
      title: 'Content Creation',
      description: 'Creating engaging tech content for YouTube and social media platforms',
      pricing: [
        { name: 'YouTube Script', price: 'null' },
        { name: 'Social Media Post', price: 'null' },
        { name: 'Blog Article', price: 'null' },
        { name: 'Content Strategy', price: 'null' }
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/mudithamahendraweli@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Cursor Dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="dust-particle" style={{ top: '10%', left: '12%', width: '10px', height: '10px', animationDelay: '0s', animationDuration: '12s' }} />
        <span className="dust-particle" style={{ top: '25%', left: '40%', width: '8px', height: '8px', animationDelay: '1.8s', animationDuration: '14s' }} />
        <span className="dust-particle" style={{ top: '40%', left: '70%', width: '12px', height: '12px', animationDelay: '3.2s', animationDuration: '16s' }} />
        <span className="dust-particle" style={{ top: '55%', left: '20%', width: '6px', height: '6px', animationDelay: '2.5s', animationDuration: '11s' }} />
        <span className="dust-particle" style={{ top: '65%', left: '80%', width: '9px', height: '9px', animationDelay: '4.7s', animationDuration: '13s' }} />
        <span className="dust-particle" style={{ top: '75%', left: '50%', width: '7px', height: '7px', animationDelay: '1.2s', animationDuration: '15s' }} />
        <span className="dust-particle" style={{ top: '30%', left: '85%', width: '11px', height: '11px', animationDelay: '5.6s', animationDuration: '18s' }} />
        <span className="dust-particle" style={{ top: '80%', left: '10%', width: '8px', height: '8px', animationDelay: '3.8s', animationDuration: '12.5s' }} />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm" style={{ fontWeight: 700 }}>M</span>
                </div>
                <span className="text-lg text-white" style={{ fontWeight: 600 }}>
                  Muditha Welivita
                </span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center gap-10"
            >
              <a href="#home" className="text-white hover:text-pink-500 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-white hover:text-pink-500 transition-colors text-sm">
                About Me
              </a>
              <a href="#services" className="text-white hover:text-pink-500 transition-colors text-sm">
                Service
              </a>
              <a href="#projects" className="text-white hover:text-pink-500 transition-colors text-sm">
                Projects
              </a>
              <a href="#youtube" className="text-white hover:text-pink-500 transition-colors text-sm">
                Videos
              </a>
              <a href="#contact" className="text-white hover:text-pink-500 transition-colors text-sm">
                Connect
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-white hover:text-pink-500 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-white hover:text-pink-500 transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-white hover:text-pink-500 transition-colors">
                Service
              </a>
              <a href="#projects" className="block text-white hover:text-pink-500 transition-colors">
                Projects
              </a>
              <a href="#youtube" className="block text-white hover:text-pink-500 transition-colors">
                Videos
              </a>
              <a href="#contact" className="block text-white hover:text-pink-500 transition-colors">
                Connect
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={homeRef}>
        {/* Mouse-reactive dust particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const baseX = Math.random() * 100;
            const duration = 8 + Math.random() * 4;
            const swayDuration = 4 + Math.random() * 2;
            const swayAmount = 30 + Math.random() * 20;

            const distance = Math.hypot(mousePos.x - baseX * 3.5, mousePos.y - baseX * 3.5);
            const angle = Math.atan2(mousePos.y - baseX * 3.5, mousePos.x - baseX * 3.5);
            const repelDistance = Math.min(150, Math.max(0, 150 - distance));
            const offsetX = Math.cos(angle) * repelDistance * 0.5;
            const offsetY = Math.sin(angle) * repelDistance * 0.5;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                animate={{
                  y: [0, window.innerHeight + 100],
                  x: [0, Math.sin(i) * swayAmount]
                }}
                transition={{
                  y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: 'linear'
                  },
                  x: {
                    duration: swayDuration,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
                style={{
                  left: `${baseX}%`,
                  top: '-10px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  filter: 'blur(1px)',
                  translateX: -offsetX,
                  translateY: -offsetY
                }}
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1 }}
              >
                Hi, I'm Muditha Welivita
                <span className="text-white"></span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-10 text-slate-400 text-base leading-relaxed max-w-lg"
              >
                I'm a graphic designer, Video Editor, and Content Creator. also i'm undergradguate student. if you need any of these services, please contact me. I create visually stunning designs, edit captivating videos, and produce engaging content to help you stand out in the digital world.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Hire me
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-white/30 rounded hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Latest Works
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <img
                  src="/images/mudithabg2.png"
                  alt="Muditha Welivita"
                  className="w-full h-auto object-cover grayscale"
                  style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Vertical Social Media Bar - Right Side */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href="https://www.youtube.com/@mudiyascafe"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/40 transition-all duration-300 hover:bg-white/20"
                >
                  <img
                    src="/images/youtube.png"
                    alt="YouTube"
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/muditha-welivita-23b6b4363"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/40 transition-all duration-300 hover:bg-white/20"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="https://www.tiktok.com/@mudiyaofficial?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/40 transition-all duration-300 hover:bg-white/20"
                >
                  <img
                    src="/images/tiktok.png"
                    alt="TikTok"
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="https://www.facebook.com/muditha.welivita.9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/40 transition-all duration-300 hover:bg-white/20"
                >
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a
                href="mailto:mudithamahendraweli@gmail.com"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/40 transition-all duration-300 hover:bg-white/20"
                >
                  <img
                    src="/images/email.png"
                    alt="Email"
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              About Me
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Hi! I'm Muditha Welivita, a computing student with a deep passion for technology and innovation.
                I specialize in Networking & cloud security solutions,
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                My journey in tech spans across multiple domains including <span className="text-pink-400">Networking</span>,
                <span className="text-purple-400">Graphic Designs</span>, <span className="text-cyan-400">Video Editing</span>,
                and <span className="text-blue-400">Content Creation</span>. I love exploring New technologies and sharing my knowledge
                through my YouTube channel.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">

              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Featured Video Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                >
                  {/* Image or Icon Container */}
                  <div className="relative h-48 bg-gradient-to-br from-pink-600/20 to-purple-600/20 flex items-center justify-center text-7xl overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                    {typeof project.image === 'string' && (project.image.startsWith('Img/') || project.image.startsWith('http') || project.image.startsWith('/images/')) ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{project.image}</span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <span className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold text-sm">
                        Click to Preview
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="mb-3 text-xl text-white group-hover:text-pink-400 transition-colors" style={{ fontWeight: 600 }}>
                      {project.title}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
                        style={{ fontWeight: 500 }}
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Gallery Section */}
      <section className="py-16 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 700 }}>
              Design Gallery
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore my creative design work and visual projects
            </p>
          </motion.div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="marquee-wrapper overflow-hidden">
              <div className="marquee-content flex animate-marquee">
                {/* First set of images */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/1.jpeg" alt="Design 1" onClick={() => setSelectedImage('/images/1.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/5.jpeg" alt="Design 2" onClick={() => setSelectedImage('/images/5.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/wahi.jpeg" alt="Design 3" onClick={() => setSelectedImage('/images/wahi.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/7.jpeg" alt="Design 4" onClick={() => setSelectedImage('/images/7.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/9.jpeg" alt="Design 5" onClick={() => setSelectedImage('/images/9.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/1.jpeg" alt="Design 1" onClick={() => setSelectedImage('/images/1.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/5.jpeg" alt="Design 2" onClick={() => setSelectedImage('/images/5.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/wahi.jpeg" alt="Design 3" onClick={() => setSelectedImage('/images/wahi.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/7.jpeg" alt="Design 4" onClick={() => setSelectedImage('/images/7.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/9.jpeg" alt="Design 5" onClick={() => setSelectedImage('/images/9.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>

          {/* Reverse marquee for variety */}
          <div className="relative mt-8">
            <div className="marquee-wrapper overflow-hidden">
              <div className="marquee-content-reverse flex animate-marquee-reverse">
                {/* First set of images */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/10.jpeg" alt="Design 4" onClick={() => setSelectedImage('/images/10.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/lpapost.jpg" alt="Design 3" onClick={() => setSelectedImage('/images/lpapost.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/2.jpeg" alt="Design 2" onClick={() => setSelectedImage('/images/2.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/new.jpg" alt="Design 1" onClick={() => setSelectedImage('/images/new.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/cmm.jpg" alt="Design 5" onClick={() => setSelectedImage('/images/cmm.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/10.jpeg" alt="Design 4" onClick={() => setSelectedImage('/images/10.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/lpapost.jpg" alt="Design 3" onClick={() => setSelectedImage('/images/lpapost.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/2.jpeg" alt="Design 2" onClick={() => setSelectedImage('/images/2.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/new.jpg" alt="Design 1" onClick={() => setSelectedImage('/images/new.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/cmm.jpg" alt="Design 5" onClick={() => setSelectedImage('/images/cmm.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/10.jpeg" alt="Design 4" onClick={() => setSelectedImage('/images/10.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/lpapost.jpg" alt="Design 3" onClick={() => setSelectedImage('/images/lpapost.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/2.jpeg" alt="Design 2" onClick={() => setSelectedImage('/images/2.jpeg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/new.jpg" alt="Design 1" onClick={() => setSelectedImage('/images/new.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/images/cmm.jpg" alt="Design 5" onClick={() => setSelectedImage('/images/cmm.jpg')} className="w-64 h-40 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 text-center cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl mb-4">
                    <service.icon className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="mb-3 text-xl text-white" style={{ fontWeight: 600 }}>{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="youtube" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Latest Videos
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Check out my latest YouTube videos on technology, and creative content.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/qbXdbJvSXeU?si=NeGNM80wTj7Spexp"
                      title="Latest YouTube Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="mt-6 text-xl text-white" style={{ fontWeight: 600 }}>
                  {/*Your Latest Video Title*/}
                </h3>
                <p className="mt-2 text-slate-400">
                  {/*Update this with your latest YouTube video ID and title*/}
                </p>
              </motion.div>

              {/* Video Stats / Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
                    <h4 className="text-lg text-white" style={{ fontWeight: 600 }}>Subscribe</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    Get notified when I upload new content about Technology
                  </p>
                  <a
                    href="https://youtube.com/@mudiyascafe?si=ivu3Tg8px1xFRrWS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    Visit Channel
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-lg text-white mb-4" style={{ fontWeight: 600 }}>Popular Topics</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-2 h-2 bg-pink-500 rounded-full" />
                      Streaming & Recordings
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full" />
                      Graphic Designing & Video Editing
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                      Tech Reviews
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-2 h-2 bg-pink-500 rounded-full" />
                      Vlogs
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-slate-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-slate-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-slate-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-slate-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-slate-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-slate-500 transition-all"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-slate-300">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-slate-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>

                  {submitMessage && (
                    <p className={`mt-4 text-center ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="mb-6 text-xl text-white" style={{ fontWeight: 600 }}>Contact Information</h3>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                      <img src="/images/email.png" alt="Email" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white">mudithamahendraweli@gmail.com</p>
                    </div>
                  </div>

                  <h4 className="mb-4 text-lg text-white" style={{ fontWeight: 600 }}>Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://youtube.com/@mudiyascafe?si=Wy6NZRwE9ia8Oh8a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300"
                    >
                      <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muditha-welivita-23b6b4363"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/muditha.welivita.9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600/20 hover:border-blue-600/50 transition-all duration-300"
                    >
                      <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@mudiyaofficial?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-black/40 hover:border-white/50 transition-all duration-300"
                    >
                      <img src="/images/tik-tok.png" alt="TikTok" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2026 Muditha Welivita. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a href="#about" className="text-slate-400 hover:text-pink-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="text-slate-400 hover:text-pink-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#youtube" className="text-slate-400 hover:text-pink-400 transition-colors text-sm">
                Videos
              </a>
              <a href="#services" className="text-slate-400 hover:text-pink-400 transition-colors text-sm">
                Services
              </a>
              <a href="#contact" className="text-slate-400 hover:text-pink-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Service Pricing Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="relative max-w-md w-full bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl text-white mb-6 font-semibold">{selectedService.title} Pricing</h3>
            <div className="space-y-4">
              {selectedService.pricing.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                  <span className="text-slate-300">{item.name}</span>
                  <span className="text-pink-400 font-semibold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Contact for Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
