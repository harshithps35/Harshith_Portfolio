import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiAward, FiExternalLink, FiX } from 'react-icons/fi'
import { 
  SiCplusplus 
} from 'react-icons/si'
import { FaJava, FaDatabase, FaShieldAlt, FaReact, FaRobot, FaCode } from 'react-icons/fa'

const certificates = [
  {
    name: 'Java with Data Structures & Algorithms',
    icon: FaJava,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    pdfPath: '/certificates/Java with Dsa.pdf',
  },
  {
    name: 'Full Stack MERN Developer',
    icon: FaReact,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    pdfPath: '/certificates/Full stack mern developer.pdf',
  },
  {
    name: 'Frontend Development',
    icon: FaCode,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    textColor: 'text-violet-400',
    pdfPath: '/certificates/Frontend development.pdf',
  },
  {
    name: 'C++ Programming',
    icon: SiCplusplus,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    pdfPath: '/certificates/C++ certificate.pdf',
  },
  {
    name: 'Relational Databases & SQL Mastery',
    icon: FaDatabase,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    pdfPath: '/certificates/sql.pdf',
  },
  {
    name: 'Cybersecurity Fundamentals (Deloitte)',
    icon: FaShieldAlt,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/10',
    textColor: 'text-rose-400',
    pdfPath: '/certificates/Cyber deliote.pdf',
  },
  {
    name: 'Generative AI Certificate',
    icon: FaRobot,
    color: 'from-fuchsia-500 to-purple-500',
    bgColor: 'bg-fuchsia-500/10',
    textColor: 'text-fuchsia-400',
    pdfPath: '/certificates/GEN AI Certificate.pdf',
  },
]

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [viewingCert, setViewingCert] = useState(null)

  return (
    <section id="certificates" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">Achievements</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">Certifications</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Professional certifications demonstrating continuous learning across full-stack development, cybersecurity, and emerging technologies. 
            <span className="text-accent-400 font-medium"> Click any certificate to view it.</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setViewingCert(cert)}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2">{cert.name}</h3>
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cert.bgColor} ${cert.textColor}`}>
                      <FiAward size={12} />
                      Certified
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-accent-400 transition-colors">
                      <FiExternalLink size={12} />
                      View
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate PDF Viewer Modal */}
      {viewingCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setViewingCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-5xl h-[85vh] bg-dark-900 rounded-2xl border border-dark-700/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700/50 bg-dark-800/50">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${viewingCert.color} text-white`}>
                  <viewingCert.icon size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{viewingCert.name}</h3>
                  <p className="text-slate-500 text-xs">Certificate</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={viewingCert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20 hover:bg-accent-500/20 transition-colors"
                >
                  Open in New Tab
                </a>
                <button
                  onClick={() => setViewingCert(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700/50 transition-colors"
                  aria-label="Close viewer"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* PDF embed */}
            <div className="w-full h-[calc(100%-65px)]">
              <iframe
                src={viewingCert.pdfPath}
                title={viewingCert.name}
                className="w-full h-full border-none"
                style={{ background: '#fff' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Certificates
