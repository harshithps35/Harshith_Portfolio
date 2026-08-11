import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub, FiGlobe, FiDatabase, FiLayers, FiCpu, FiBarChart2 } from 'react-icons/fi'

const projects = [
  {
    title: 'AquaTrace',
    subtitle: 'North Bangalore Groundwater Intelligence System',
    stack: ['MERN Stack', 'Leaflet.js', 'Recharts'],
    color: 'from-cyan-500 to-blue-500',
    icon: '🌊',
    github: 'https://github.com/harshithps35/new-ground-water-files-',
    highlights: [
      'Engineered a full-stack geospatial application monitoring groundwater levels across 12 zones in North Bangalore by synthesizing GRACE satellite data and simulated IoT sensor streams.',
      'Architected and deployed 9 RESTful API endpoints (Node.js/Express) handling satellite time-series analysis, rainfall metrics, and recharge-zone identification.',
      'Developed interactive mapping & analytics dashboards (Leaflet.js/Recharts) visualizing water-table depth across 6 critical severity thresholds.',
      'Integrated an algorithmic recommendation engine to evaluate zone metrics and generate automated site-specific interventions (percolation ponds, recharge shafts).',
    ],
    features: [
      { icon: FiGlobe, text: 'Geospatial Mapping' },
      { icon: FiDatabase, text: '9 REST APIs' },
      { icon: FiLayers, text: '12 Zone Monitoring' },
    ],
  },
  {
    title: 'PitchVision 3D',
    subtitle: 'Cricket Pitch Analysis Platform',
    stack: ['MERN Stack', 'Three.js'],
    color: 'from-emerald-500 to-teal-500',
    icon: '🏏',
    github: 'https://github.com/harshithps35/frontend',
    highlights: [
      'Built an interactive 3D terrain visualization system using Three.js to render uploaded pitch images for spatial surface inspection.',
      'Developed an Express.js automated analysis backend to assess pitch moisture, grass coverage, surface hardness, and crack propagation patterns.',
      'Implemented predictive match-strategy logic calculating toss recommendations, pace/spin advantage scores, and session-by-session forecasts.',
      'Designed a searchable MongoDB report repository for venue-level historical pitch analysis lookups.',
    ],
    features: [
      { icon: FiLayers, text: '3D Visualization' },
      { icon: FiDatabase, text: 'MongoDB Reports' },
      { icon: FiGlobe, text: 'Predictive Analytics' },
    ],
  },
  {
    title: 'PredictXY',
    subtitle: 'Data Prediction & Analysis Tool',
    stack: ['JavaScript'],
    color: 'from-violet-500 to-purple-500',
    icon: '📊',
    github: 'https://github.com/harshithps35/PredictXY',
    highlights: [
      'Built a prediction and data analysis tool for exploring and forecasting data patterns.',
    ],
    features: [
      { icon: FiBarChart2, text: 'Data Analysis' },
      { icon: FiCpu, text: 'Predictions' },
    ],
  },
  {
    title: 'My First Complete Project',
    subtitle: 'Full-Stack Web Application — Deployed on Vercel',
    stack: ['JavaScript', 'Vercel'],
    color: 'from-amber-500 to-orange-500',
    icon: '🚀',
    github: 'https://github.com/harshithps35/my-first-complete-project',
    liveUrl: 'https://my-first-complete-project.vercel.app',
    highlights: [
      'End-to-end web application built and deployed as a complete production project.',
      'Deployed live on Vercel with continuous integration for seamless updates.',
    ],
    features: [
      { icon: FiGlobe, text: 'Live on Vercel' },
      { icon: FiLayers, text: 'Full-Stack' },
    ],
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">What I've Built</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">Featured Projects</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Across <span className="text-white font-medium">9 public repositories</span> on GitHub — here are the highlights.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              {/* Project header */}
              <div className={`bg-gradient-to-r ${project.color} p-[1px]`}>
                <div className="bg-dark-900/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{project.icon}</span>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                            <p className="text-slate-400 text-sm mt-0.5">{project.subtitle}</p>
                          </div>
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl bg-dark-800/50 border border-dark-700/50 text-slate-400 hover:text-white hover:border-accent-500/30 transition-all duration-300"
                              aria-label="View source code on GitHub"
                            >
                              <FiGithub size={18} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl bg-dark-800/50 border border-dark-700/50 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                              aria-label="View live demo"
                            >
                              <FiExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800/80 text-slate-300 border border-dark-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Feature chips */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.features.map((feature) => (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800/50 border border-dark-700/50"
                          >
                            <feature.icon size={16} className="text-accent-400" />
                            <span className="text-sm text-slate-300">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: idx * 0.15 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
                            <p className="text-slate-400 text-sm leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
