import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUser, FiCode, FiShield, FiAward, FiGithub } from 'react-icons/fi'

const stats = [
  { icon: FiGithub, value: '9', label: 'GitHub Repos', color: 'text-accent-400' },
  { icon: FiShield, value: '8.66', label: 'CGPA', color: 'text-cyan-400' },
  { icon: FiAward, value: '7', label: 'Certifications', color: 'text-emerald-400' },
  { icon: FiCode, value: '5+', label: 'Tech Stacks', color: 'text-amber-400' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">Get To Know Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm <span className="text-white font-semibold">Harshith P S</span>, a passionate 
                <span className="text-accent-400 font-medium"> Cybersecurity Engineering</span> student at 
                Cambridge Institute of Technology, North Campus, Bengaluru.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                As a Full-Stack Developer with hands-on experience in the <span className="text-cyan-400">MERN stack</span> (React, Node.js, Express, MongoDB), 
                I've shipped end-to-end web applications under tight hackathon timelines. I specialize in 
                RESTful API design, interactive 3D/geospatial frontend development, and secure software development lifecycles.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                My expertise spans across <span className="text-emerald-400">Java, Python, C, JavaScript, SQL</span>, and Web Security fundamentals. 
                I'm an active hackathon participant and have served as cross-functional team lead for frontend & API architecture.
              </p>
            </div>

            {/* Personal Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Harshith P S' },
                { label: 'Location', value: 'Bengaluru, Karnataka' },
                { label: 'Degree', value: 'B.E. Cybersecurity' },
                { label: 'Languages', value: 'English, Kannada, Hindi' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label}</span>
                  <p className="text-white font-medium mt-1 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-default"
              >
                <div className={`inline-flex p-3 rounded-xl bg-dark-800/50 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
