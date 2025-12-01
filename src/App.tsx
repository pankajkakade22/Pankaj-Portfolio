import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiMapPin,
  FiArrowUpRight,
  FiDownloadCloud,
} from 'react-icons/fi'
import { profile } from './data/profile'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: 'easeOut' },
  }),
}

const SectionShell = ({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="glass rounded-3xl border border-white/5 p-8 shadow-soft"
  >
    <div className="mb-6">
      <p className="text-sm tracking-[0.4em] uppercase text-aurora">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl tracking-tight text-champagne">{title}</h2>
    </div>
    {children}
  </motion.section>
)

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof profile.experience)[number]
  index: number
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    className="relative border-l border-white/10 pl-8"
  >
    <span className="absolute -left-[11px] top-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-aurora/40 bg-night text-aurora shadow-glow">
      ●
    </span>
    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{experience.period}</p>
    <h3 className="mt-1 text-xl font-semibold text-white">{experience.title}</h3>
    <p className="text-sm text-slate-300">
      {experience.company} · {experience.location}
    </p>
    <ul className="mt-4 space-y-2 text-sm text-slate-200">
      {experience.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora/80" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const ProjectCard = ({ project }: { project: (typeof profile.projects)[number] }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 backdrop-blur"
  >
    <div className="flex items-center justify-between text-sm text-slate-300">
      <p>{project.focus}</p>
      <span className="font-semibold text-aurora">{project.year}</span>
    </div>
    <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
    <ul className="mt-4 space-y-2 text-sm text-slate-200">
      {project.outcomes.map((outcome) => (
        <li key={outcome} className="flex gap-2">
          <FiArrowUpRight className="mt-0.5 text-aurora" />
          <span>{outcome}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const SkillCard = ({ skill }: { skill: (typeof profile.skills)[number] }) => (
  <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
    <p className="text-sm uppercase tracking-[0.4em] text-aurora">{skill.title}</p>
    <div className="mt-4 flex flex-wrap gap-3">
      {skill.items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-black/30 px-4 py-1 text-sm text-slate-100"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)

const contactButtons = [
  {
    label: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s+/g, '')}`,
    icon: <FiPhone />,
  },
  {
    label: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: <FiMail />,
  },
  {
    label: 'LinkedIn',
    href: profile.contact.linkedin,
    icon: <FiLinkedin />,
  },
  {
    label: profile.location,
    href: 'https://maps.google.com/?q=Kopargaon,+Maharashtra,+India',
    icon: <FiMapPin />,
  },
]

function App() {
  return (
    <div className="luxury-noise relative overflow-hidden bg-night text-slate-100">
      <div className="aurora-glow" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:py-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl border border-white/5 p-8 shadow-soft lg:p-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="order-2 max-w-3xl lg:order-1">
              <p className="text-sm uppercase tracking-[0.6em] text-aurora">Portfolio</p>
              <h1 className="mt-2 font-display text-4xl tracking-tight text-champagne lg:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-slate-300">{profile.title}</p>
              <p className="mt-4 max-w-2xl text-base text-slate-200">{profile.summary}</p>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative h-40 w-40 overflow-hidden rounded-[32px] border border-aurora/50 shadow-glow sm:h-48 sm:w-48">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora/25 via-transparent to-amethyst/35" />
                <img
                  src="/Pankaj-pfp.jpeg"
                  alt="Portrait of Pankaj D. Kakade"
                  className="relative h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-aurora/40 hover:bg-aurora/10"
              >
                <span className="text-aurora">{button.icon}</span>
                {button.label}
                {button.href.startsWith('http') && (
                  <FiArrowUpRight className="transition group-hover:translate-x-1" />
                )}
              </a>
            ))}
            <a
              href="mailto:pankajkakade89@gmail.com?subject=Resume%20Request%20from%20Portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-2 font-semibold text-night shadow-glow transition hover:scale-[1.02]"
            >
              <FiDownloadCloud />
              Request Resume PDF
            </a>
          </div>
        </motion.header>

        <SectionShell eyebrow="Signature Presence" title="The Objective">
          <div className="text-lg text-slate-200">{profile.objective}</div>
        </SectionShell>

        <SectionShell eyebrow="Experience" title="Client-Facing Excellence">
          <div className="space-y-10">
            {profile.experience.map((experience, index) => (
              <ExperienceCard experience={experience} index={index} key={experience.title} />
            ))}
          </div>
        </SectionShell>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionShell eyebrow="Education" title="Foundations in Business">
            <div className="space-y-5">
              {profile.education.map((edu) => (
                <div key={edu.program} className="rounded-2xl border border-white/10 p-5">
                  <p className="text-sm text-aurora">{edu.timeline}</p>
                  <h3 className="mt-2 text-xl font-semibold">{edu.program}</h3>
                  <p className="text-sm text-slate-300">{edu.institution}</p>
                  <p className="mt-3 text-sm text-slate-200">{edu.details}</p>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell eyebrow="Projects" title="Insight-Led Research">
            <div className="space-y-5">
              {profile.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </SectionShell>
        </div>

        <SectionShell eyebrow="Capabilities" title="Skills with Luxury Service DNA">
          <div className="grid gap-6 md:grid-cols-3">
            {profile.skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </SectionShell>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-aurora/20 bg-gradient-to-br from-aurora/10 via-transparent to-amethyst/20 p-10 shadow-glow"
        >
          <div className="absolute inset-0 opacity-30 mix-blend-screen bg-luxury-grid bg-[length:120px_120px]" />
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.5em] text-aurora">Let’s collaborate</p>
            <h2 className="mt-4 font-display text-3xl text-champagne">
              Elevate your customer journey with a storyteller who sells.
            </h2>
            <p className="mt-3 max-w-3xl text-slate-100">
              I blend data-backed insights with luxe experiences to delight customers and move
              numbers. If you’re seeking someone who can represent your brand with warmth, teach
              complex products, and uncover new growth pockets—I’d love to connect.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-night shadow-soft transition hover:scale-[1.02]"
              >
                <FiMail /> Schedule a conversation
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-slate-100 transition hover:border-aurora/60 hover:text-aurora"
              >
                <FiLinkedin /> View LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}

export default App

