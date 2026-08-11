import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi'
import profileImg from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20 mb-6">
                🔒 Cybersecurity Engineering Student
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="glow-text bg-gradient-to-r from-accent-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Harshith P S
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Full-Stack MERN Developer crafting production-style web applications 
              with a focus on security, interactive 3D experiences, and geospatial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-accent-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3.5 rounded-xl font-semibold border border-dark-600 text-slate-300 hover:border-accent-500/50 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/harshithps35', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/harshith-p-s-8473b6383', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:harshithharshith06042006@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-slate-400 hover:text-accent-400 hover:border-accent-500/30 hover:bg-accent-500/10 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0 z-10"
          >
            {/* Animated ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full profile-ring p-[3px]">
                <div className="w-full h-full rounded-full bg-dark-950 p-1">
                  <img
                    src={profileImg}
                    alt="Harshith P S"
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-accent-500/10 blur-3xl -z-10" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-card text-sm font-medium text-emerald-400"
            >
              ⚡ MERN Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-card text-sm font-medium text-cyan-400"
            >
              🛡️ Cybersecurity
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <FiChevronDown size={20} />
      </motion.div>
    </section>
  )
}

export default Hero
