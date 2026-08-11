import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiCode, FiDatabase, FiTool, FiShield, FiMonitor, FiGlobe
} from 'react-icons/fi'
import {
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiTailwindcss, SiHtml5, SiCss, SiGit, SiGithub, SiPostman, SiVite, SiThreedotjs
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    icon: FiCode,
    color: 'from-accent-500 to-accent-400',
    borderColor: 'border-accent-500/20',
    skills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'SQL', icon: FiDatabase, color: '#00d4aa' },
      { name: 'C', icon: FiCode, color: '#a8b9cc' },
    ]
  },
  {
    title: 'Frontend',
    icon: FiMonitor,
    color: 'from-cyan-500 to-cyan-400',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'Vite', icon: SiVite, color: '#646cff' },
    ]
  },
  {
    title: 'Backend & Databases',
    icon: FiDatabase,
    color: 'from-emerald-500 to-emerald-400',
    borderColor: 'border-emerald-500/20',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'RESTful APIs', icon: FiGlobe, color: '#ff6b6b' },
    ]
  },
  {
    title: 'Developer Tools',
    icon: FiTool,
    color: 'from-amber-500 to-amber-400',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', icon: FiCode, color: '#007acc' },
    ]
  },
  {
    title: 'Cybersecurity',
    icon: FiShield,
    color: 'from-rose-500 to-rose-400',
    borderColor: 'border-rose-500/20',
    skills: [
      { name: 'App Security', icon: FiShield, color: '#f43f5e' },
      { name: 'Secure Coding', icon: FiCode, color: '#f97316' },
      { name: 'Vulnerability Assessment', icon: FiShield, color: '#ec4899' },
    ]
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">What I Work With</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-card rounded-2xl p-6 ${category.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge flex items-center gap-2 px-3 py-2 rounded-lg cursor-default"
                  >
                    <skill.icon size={16} style={{ color: skill.color }} />
                    <span className="text-sm text-slate-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
