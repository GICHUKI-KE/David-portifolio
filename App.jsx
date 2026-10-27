import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Github,
  Globe2, Layers3, Linkedin, Mail, Menu, MonitorSmartphone, Sparkles, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "GIVICK Enterprise",
    category: "Web application concept",
    description: "An inventory and sales management system concept for tracking products, prices, condition, and user roles.",
    tags: ["React / JavaScript", "Supabase", "UI Design"],
    icon: Layers3,
    link: "",
  },
  {
    number: "02",
    name: "SmartWiFi",
    category: "Technology project",
    description: "A technology project exploring practical ways to make connectivity and digital services more accessible.",
    tags: ["Problem Solving", "Technology", "Research"],
    icon: Globe2,
    link: "",
  },
  {
    number: "03",
    name: "AI & Data Projects",
    category: "Learning and experimentation",
    description: "A growing collection of learning projects related to AI evaluation, data annotation, and digital tools.",
    tags: ["AI", "Data", "Continuous Learning"],
    icon: Sparkles,
    link: "",
  },
];

const skills = [
  { icon: Code2, title: "Web Development", detail: "HTML, CSS, JavaScript, React fundamentals" },
  { icon: MonitorSmartphone, title: "IT & Digital Tools", detail: "Computer systems, troubleshooting, Microsoft tools" },
  { icon: Sparkles, title: "AI & Data", detail: "AI evaluation concepts, data annotation, careful review" },
  { icon: BriefcaseBusiness, title: "Digital Business", detail: "Digital marketing, communication, teamwork" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const email = "givickdach947@gmail.com"; 
  const github = "https://github.com/GICHUKI-KE";
  const linkedin = "https://www.linkedin.com/in/davidg-w-836695340"; 

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#100b1d]/80 backdrop-blur-xl">
        <nav className="container flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2 font-black tracking-tight" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm">DW</span>
            <span>DAVID<span className="text-violet-300">.W</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-[#b7aecb] transition hover:text-white">{label}</a>
            ))}
            <a href="#contact" className="primary-button !px-4 !py-2 text-sm">Let’s talk <ArrowUpRight size={16} /></a>
          </div>
          <button className="rounded-lg border border-white/10 p-2 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="container flex flex-col gap-1 pb-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-[#d9cdee] hover:bg-white/5">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[760px] items-center pt-24 md:min-h-[850px]">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
          <div className="container grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/5 px-4 py-2 text-sm text-violet-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Building ideas into digital solutions
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="mb-3 text-lg font-semibold text-[#b7aecb]">Hello, I’m David Wambui</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}
                className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                IT student. <span className="gradient-text">Creative thinker.</span> Future-focused developer.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} className="muted mt-7 max-w-xl text-base sm:text-lg">
                I’m a second-year Bachelor of Science in Information Technology student at Kirinyaga University, exploring how technology, thoughtful design, and AI can solve real-world problems.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="primary-button">Explore my work <ArrowRight size={17} /></a>
                <a href="#contact" className="outline-button">Contact me <Mail size={17} /></a>
              </motion.div>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#9c91b4]">
                <span className="flex items-center gap-2"><Code2 size={16} className="text-violet-300" /> Web development</span>
                <span className="flex items-center gap-2"><Sparkles size={16} className="text-fuchsia-300" /> AI & digital innovation</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .8 }} className="relative mx-auto w-full max-w-[460px]">
              <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-transparent blur-2xl" />
              <div className="glass relative overflow-hidden rounded-[30px] p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
                  <span className="text-xs tracking-widest text-[#9285aa]">MY DIGITAL SPACE</span>
                </div>
                <div className="grid-pattern relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-violet-200/10 bg-[#171027]">
                  <div className="absolute h-56 w-56 rounded-full border border-violet-300/20" />
                  <div className="absolute h-40 w-40 rounded-full border border-fuchsia-300/20" />
                  <div className="absolute h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute h-64 w-64 rounded-full border border-dashed border-fuchsia-300/30" />
                  <div className="relative grid h-28 w-28 place-items-center rounded-[28px] border border-white/20 bg-gradient-to-br from-violet-500 to-fuchsia-600 text-3xl font-black shadow-2xl shadow-violet-900/60">DW</div>
                  <div className="absolute left-5 top-8 rounded-xl border border-white/10 bg-[#211734]/90 p-3 shadow-xl"><Code2 size={21} className="text-violet-200" /></div>
                  <div className="absolute bottom-8 right-5 rounded-xl border border-white/10 bg-[#211734]/90 p-3 shadow-xl"><Sparkles size={21} className="text-fuchsia-200" /></div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div><p className="text-xl font-extrabold">David Wambui</p><p className="mt-1 text-sm text-[#a89bbb]">Technology • Creativity • Growth</p></div>
                  <span className="rounded-lg border border-violet-300/20 px-3 py-2 text-xs text-violet-200">2026+</span>
                </div>
              </div>
              <div className="glass absolute -left-5 top-1/3 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"><span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/20"><Layers3 size={18} /></span><span className="text-xs font-bold">Building projects</span></div>
              <div className="glass absolute -right-4 bottom-20 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"><span className="grid h-9 w-9 place-items-center rounded-xl bg-fuchsia-500/20"><Globe2 size={18} /></span><span className="text-xs font-bold">Thinking globally</span></div>
            </motion.div>
          </div>
          <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-white/10 p-3 text-[#b7aecb] transition hover:text-white"><ArrowDown size={18} /></a>
        </section>

        <section id="about" className="section">
          <div className="container grid gap-12 md:grid-cols-[.75fr_1.25fr] md:items-center">
            <Reveal>
              <p className="eyebrow">01 / About me</p>
              <h2 className="section-title">Curious by nature.<br /><span className="gradient-text">Driven to build.</span></h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            </Reveal>
            <Reveal delay={.12}>
              <p className="muted text-lg">I’m an Information Technology student at Kirinyaga University with an interest in building useful digital experiences and learning how technology can support people and businesses.</p>
              <p className="muted mt-4">I enjoy exploring web development, AI-related work, digital tools, and practical business ideas. My portfolio is a living record of what I’m learning, creating, and improving.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5"><p className="text-sm text-[#a89bbb]">Education</p><p className="mt-2 font-bold">BSc Information Technology</p><p className="mt-1 text-sm text-[#b7aecb]">Kirinyaga University · Year 2</p></div>
                <div className="glass rounded-2xl p-5"><p className="text-sm text-[#a89bbb]">Current focus</p><p className="mt-2 font-bold">Learn, build, improve</p><p className="mt-1 text-sm text-[#b7aecb]">Projects and practical experience</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section border-y border-white/5 bg-white/[.015]">
          <div className="container">
            <Reveal><p className="eyebrow">02 / What I do</p><h2 className="section-title">Skills I’m <span className="gradient-text">developing.</span></h2><p className="muted max-w-2xl">A growing toolkit for building, analysing, and communicating digital solutions. Update these descriptions as your experience develops.</p></Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({ icon: Icon, title, detail }, i) => (
                <Reveal key={title} delay={i * .08}>
                  <div className="glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-200"><Icon size={23} /></span>
                    <h3 className="mt-5 text-lg font-bold">{title}</h3><p className="muted mt-2 text-sm">{detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Reveal><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">03 / Selected work</p><h2 className="section-title">Ideas becoming <span className="gradient-text">reality.</span></h2></div><p className="muted max-w-md">A selection of projects and areas I’m exploring. Add repository links and screenshots as each project becomes available.</p></div></Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map(({ number, name, category, description, tags, icon: Icon, link }, i) => (
                <Reveal key={name} delay={i * .1}>
                  <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
                    <div className="grid-pattern relative grid h-48 place-items-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-violet-950/70 to-fuchsia-950/30">
                      <div className="absolute h-36 w-36 rounded-full bg-violet-500/15 blur-2xl transition group-hover:bg-fuchsia-500/20" />
                      <Icon size={55} strokeWidth={1.2} className="relative text-violet-200 transition duration-300 group-hover:scale-110" />
                      <span className="absolute left-5 top-5 text-xs font-bold tracking-widest text-[#9587ad]">{number} / PROJECT</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-300">{category}</p><h3 className="mt-2 text-xl font-extrabold">{name}</h3><p className="muted mt-3 flex-1 text-sm">{description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-[#c9bedb]">{tag}</span>)}</div>
                      {link ? <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-200 hover:text-fuchsia-200">View project <ArrowUpRight size={16} /></a> : <p className="mt-6 text-xs text-[#8e819f]">Project link to be added</p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] border border-violet-300/20 bg-gradient-to-br from-violet-950/80 via-[#20102f] to-fuchsia-950/50 px-6 py-14 text-center sm:px-12 sm:py-20">
                <div className="absolute inset-0 grid-pattern opacity-40" /><div className="absolute left-1/2 top-0 h-52 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
                <div className="relative mx-auto max-w-2xl"><p className="eyebrow">04 / Get in touch</p><h2 className="section-title mt-4">Have an idea? Let’s <span className="gradient-text">connect.</span></h2><p className="muted mx-auto mt-4 max-w-xl">I’m open to learning opportunities, collaborations, project discussions, and connecting with people who are building useful things with technology.</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3"><a className="primary-button" href={`mailto:${email}`}><Mail size={17} /> Email me</a><a className="outline-button" href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a className="outline-button" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
                  <p className="mt-5 text-xs text-[#a89bbb]">Remember to replace the sample email and profile links in <code>src/App.jsx</code>.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-7">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-xs text-[#8e819f] sm:flex-row sm:text-left"><p>© {new Date().getFullYear()} David Wambui. Built with curiosity and code.</p><a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
    </div>
  );
}

export default App;