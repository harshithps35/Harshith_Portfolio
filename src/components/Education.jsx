import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBookOpen, FiAward, FiMapPin } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Cybersecurity Engineering',
    institution: 'Cambridge Institute of Technology — North Campus',
    location: 'Bengaluru, Karnataka',
    score: 'CGPA: 8.66 / 10.0',
    status: 'Upto 4th Semester',
    period: 'Currently Pursuing',
    color: 'from-accent-500 to-cyan-500',
    dotColor: 'bg-accent-500',
    current: true,
  },
  {
    degree: 'Pre-University Course (PUC)',
    field: '12th Education',
    institution: 'Vishwa Prajna SVG Institutions',
    location: 'Mysuru, Karnataka',
    score: 'Percentage: 86%',
    status: 'Completed',
    period: 'Completed',
    color: 'from-cyan-500 to-emerald-500',
    dotColor: 'bg-cyan-500',
    current: false,
  },
  {
    degree: 'SSLC (10th)',
    field: '10th Education — CBSE',
    institution: 'Pushpa English Medium School',
    location: 'Karnataka',
    score: 'Percentage: 76%',
    status: 'Completed',
    period: 'Completed',
    color: 'from-emerald-500 to-amber-500',
    dotColor: 'bg-emerald-500',
    current: false,
  },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">My Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line md:-translate-x-px" />

          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${edu.dotColor} ring-4 ring-dark-950`}>
                  {edu.current && (
                    <div className={`absolute inset-0 rounded-full ${edu.dotColor} animate-ping opacity-40`} />
                  )}
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                <div className="glass-card rounded-2xl p-6 hover:!transform-none">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${edu.color} text-white flex-shrink-0`}>
                      <FiBookOpen size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-accent-400 text-sm font-medium">{edu.field}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <FiMapPin size={14} /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <FiAward size={14} /> {edu.score}
                    </span>
                  </div>

                  {edu.current && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                      Currently Pursuing
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
