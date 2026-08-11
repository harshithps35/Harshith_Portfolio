import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'harshithharshith06042006@gmail.com',
    href: 'mailto:harshithharshith06042006@gmail.com',
    color: 'from-accent-500 to-cyan-500',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 6360667326',
    href: 'tel:+916360667326',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/harshithps35',
    href: 'https://github.com/harshithps35',
    color: 'from-slate-400 to-slate-300',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Harshith P S',
    href: 'https://www.linkedin.com/in/harshith-p-s-8473b6383',
    color: 'from-blue-500 to-blue-400',
  },
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`mailto:harshithharshith06042006@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">Let's Connect</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 section-heading">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-500 text-white">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Bengaluru, Karnataka</h3>
                  <p className="text-slate-400 text-sm">India</p>
                </div>
              </div>
            </div>

            {contactInfo.map((info, idx) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group cursor-pointer block"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <info.icon size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{info.label}</span>
                  <p className="text-white font-medium text-sm truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-white placeholder-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-white placeholder-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-white placeholder-slate-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-accent-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>✓ Opening Email Client</>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
