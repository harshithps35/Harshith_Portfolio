import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent">
              {'<HPS />'}
            </span>
            <p className="text-sm text-slate-500 mt-1">
              Building secure & beautiful web experiences
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
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
                className="p-2.5 rounded-lg text-slate-500 hover:text-accent-400 hover:bg-dark-800/50 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500 flex items-center gap-1">
            © {currentYear} Harshith P S. Made with <FiHeart size={14} className="text-rose-400" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
