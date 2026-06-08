// pages.jsx — page components for Maine Trumpet Lessons
const { useState } = React;

/* ----------------------------------------------------------- */
/* Shared bits                                                  */
/* ----------------------------------------------------------- */
function Placeholder({ label, style, className }) {
  return (
    <div className={"ph " + (className || "")} style={style}>
      <span>{label}</span>
    </div>);

}

function CTABand({ go }) {
  return (
    <section className="section">
      <div className="wrap">
        <div style={{
          background: "var(--teal)", color: "var(--paper)", borderRadius: 20,
          padding: "clamp(40px, 6vw, 76px)", display: "grid",
          gridTemplateColumns: "1.5fr auto", gap: 40, alignItems: "center"
        }} className="cta-band">
          <div>
            <div className="eyebrow" style={{ color: "var(--accent)" }}>Ready when you are</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 3rem)", marginTop: 18, color: "var(--paper)" }}>
              Take the next step on<br />your trumpet journey.
            </h2>
            <p className="lede" style={{ color: "color-mix(in srgb, var(--paper) 78%, transparent)", marginTop: 18, maxWidth: 460 }}>
              Lessons here are low-pressure — no auditions to pass, no judgment, no rush. Whether you’re starting fresh or picking it back up, I’m just here to help you enjoy playing and get a little better each week.
            </p>
          </div>
          <button className="btn btn-accent btn-lg" onClick={() => go("contact")}>Reach out to get started</button>
        </div>
      </div>
    </section>);

}

function Highlights() {
  const items = [
  { quote: "I really enjoyed studying with Mr. Michel. Lessons were really challenging, but when it came time for auditions and solo contests, I always felt prepared.", author: "Alexa", role: "Former middle & high school student, current band director" },
  { quote: "I’ve known Jimi for a long time as a fantastic trumpet player with a lot of musical insight into performance to offer a trumpet student.", author: "Eric Forman", role: "Band Director (Retired), North Reading High School" },
  { quote: "Jimi is a wonderful musician and educator. It’s always a pleasure to perform together. The joy that he brings to making music is palpable!", author: "Elizabeth England", role: "Boston Ballet & New England Conservatory Prep" },
  { quote: "Jimi Michel is a trumpeter and educator with robust pedagogical training and professional experience. An exceedingly well-rounded musician, he is an ideal teacher for advanced students looking toward professional careers as well as passionate and curious musical beginners looking to build a solid foundation on the trumpet and in music.", author: "Dr. Daniel Bassin", role: "Professional Trumpeter & Director of Orchestras, Idyllwild Arts Academy" },
  { quote: "Lessons with Jimi were great — I wasn’t going to be a professional musician but he found a way to make lessons challenging and fun at the same time. I still play every once in a while and the things he taught keep helping me!", author: "James", role: "Former high school student, currently in med school" }];

  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow" style={{ fontSize: "24px", fontWeight: "400" }}>TESTIMONIALS</div>
        <div className="testimonial-grid" style={{ marginTop: 36 }}>
          {items.map((it, i) =>
          <div key={i} className="card" style={{ padding: 30, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "Georgia, serif", color: "var(--accent)", fontSize: "2.6rem", lineHeight: 0.6, height: "0.7em" }}>&ldquo;</div>
              <p style={{ color: "var(--ink)", marginTop: 14, lineHeight: 1.6, fontSize: "1.02rem" }}>{it.quote}</p>
              <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.98rem" }}>{it.author}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)", marginTop: 5, lineHeight: 1.5 }}>{it.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ----------------------------------------------------------- */
/* WELCOME — three toggleable hero directions                   */
/* ----------------------------------------------------------- */
function HeroEditorial({ go }) {
  return (
    <section style={{ padding: "clamp(56px, 8vw, 104px) 0 72px" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }} className="hero-split">
          <div>
            <div className="eyebrow eyebrow-lg">Welcome!</div>
            <h1 style={{ marginTop: 24, lineHeight: 1.14, fontSize: "40px" }}>
              Picking up the trumpet for the first time?Returning after a long hiatus? <span style={{ color: "var(--accent-deep)" }}>You’re in the right place!</span>
            </h1>
            <p className="lede" style={{ marginTop: 26, fontSize: "24px" }}>I’ve taught trumpet lessons for over two decades. I love teaching because there’s nothing more exciting than seeing a student make progress on the instrument, as a musician, and, most importantly, as a critical thinker. Take a look around and, if you’re interested in starting (or continuing!) your musical journey, reach out and let’s talk!<br /><br /><span style={{ fontWeight: 600, color: "var(--ink)" }}>– Jimi Michel</span>
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <button className="btn btn-accent btn-lg" onClick={() => go("contact")}>Get in touch</button>
              <button className="btn btn-ghost btn-lg" onClick={() => go("pricing")}>See pricing</button>
            </div>
          </div>
          <img src="assets/jimi-trumpet.jpg" alt="Jimi Michel playing the trumpet" style={{ aspectRatio: "4 / 5", width: "100%", objectFit: "cover", objectPosition: "center 30%", borderRadius: "var(--radius)", border: "1px solid var(--line)", display: "block" }} />
        </div>
      </div>
    </section>);
}

function HeroCentered({ go }) {
  return (
    <section style={{ padding: "clamp(64px, 9vw, 120px) 0 56px" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Portland, Maine</div>
        <h1 style={{ fontSize: "clamp(2.7rem, 8vw, 6rem)", marginTop: 26, maxWidth: 14 + "ch", marginLeft: "auto", marginRight: "auto", lineHeight: 1.0 }}>
          The trumpet, taught with care.
        </h1>
        <p className="lede" style={{ marginTop: 28, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
          Private, in-person lessons for every age and stage — from a first buzz on the mouthpiece to polishing a solo.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-accent btn-lg" onClick={() => go("contact")}>Book a trial lesson</button>
          <button className="btn btn-ghost btn-lg" onClick={() => go("about")}>Meet your teacher</button>
        </div>
        <Placeholder label="Wide photo — lesson in session" style={{ aspectRatio: "21 / 9", width: "100%", marginTop: 56 }} />
      </div>
    </section>);

}

function HeroDark({ go }) {
  return (
    <section style={{ background: "var(--teal)", color: "var(--paper)", padding: "clamp(64px, 9vw, 116px) 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="hero-split">
          <div>
            <div className="eyebrow" style={{ color: "var(--accent)" }}>Trumpet lessons in Portland, ME</div>
            <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)", marginTop: 24, color: "var(--paper)" }}>
              Big tone<br />starts with<br />one note.
            </h1>
            <p className="lede" style={{ marginTop: 26, maxWidth: 440, color: "color-mix(in srgb, var(--paper) 80%, transparent)" }}>
              Personal, in-person trumpet coaching for beginners through advancing players. Let's build your sound together.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <button className="btn btn-accent btn-lg" onClick={() => go("contact")}>Book a trial lesson</button>
              <button className="btn btn-lg" style={{ background: "transparent", color: "var(--paper)", border: "1px solid var(--line-dark)" }} onClick={() => go("pricing")}>See pricing</button>
            </div>
          </div>
          <Placeholder label="Trumpet detail — close up" className="ph-dark" style={{ aspectRatio: "1 / 1", width: "100%" }} />
        </div>
      </div>
    </section>);

}

function Welcome({ go, direction }) {
  const Hero = direction === "centered" ? HeroCentered : direction === "dark" ? HeroDark : HeroEditorial;
  return (
    <div className="page">
      <Hero go={go} />
      <Highlights />
      <CTABand go={go} />
    </div>);

}

/* ----------------------------------------------------------- */
/* PRICING                                                      */
/* ----------------------------------------------------------- */
function Pricing({ go }) {
  return (
    <div className="page">
      <section className="section-sm" style={{ paddingTop: 72 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="eyebrow eyebrow-lg">Pricing</div>
          <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.8rem)", marginTop: 20 }}>2025–2026 rates.</h1>

          <div style={{ marginTop: 40, borderTop: "1px solid var(--line)" }}>
            {[["30-minute lessons", "$40"], ["45-minute lessons", "$55"], ["60-minute lessons", "$70"]].map(([l, p]) =>
            <div key={l} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, padding: "22px 4px", borderBottom: "1px solid var(--line)" }}>
                <span style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)", fontWeight: 600 }}>{l}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)", fontWeight: 700, color: "var(--accent-deep)" }}>{p}</span>
              </div>
            )}
          </div>

          <p className="lede" style={{ marginTop: 32, maxWidth: 640 }}>
            I do not raise prices on existing students, so the price you pay for your first lesson will be the price you always pay.
          </p>

          <div className="card" style={{ marginTop: 30, padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: 22, alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ maxWidth: 520, lineHeight: 1.6, color: "var(--ink)", fontSize: "1.02rem" }}>Price shouldn't be a barrier to learning about music. If you or your child would like lessons but are worried about the cost, please reach out. In most cases, I am able to offer need-based discounts.

            </p>
            <button className="btn btn-accent btn-lg" onClick={() => go("contact")}>Get in touch</button>
          </div>
        </div>
      </section>

      <CTABand go={go} />
    </div>);

}

/* ----------------------------------------------------------- */
/* FAQ                                                          */
/* ----------------------------------------------------------- */
function FAQ({ go }) {
  const faqs = [
  { q: "Do I need to read music already?", a: "Not at all. Plenty of students start with zero music-reading. We build note-reading and rhythm right alongside playing, at a pace that feels comfortable." },
  { q: "What age do you teach?", a: "Roughly age 8 through adult. Younger players need enough lung capacity and front teeth to form an embouchure — a trial lesson is the easiest way to tell if it's a good time to start." },
  { q: "Do I need my own trumpet?", a: "Eventually, yes, but not for your first lesson. I can point you toward affordable rentals and trustworthy used instruments, and help you avoid the 'trumpet-shaped object' bargains online." },
  { q: "Where do lessons take place?", a: "In person at my home studio on Portland's East End. There's street parking nearby and the room is set up with a stand, mirror, and metronome ready to go." },
  { q: "How long are lessons and how often?", a: "Most students do a 45-minute lesson once a week — that's the sweet spot for steady progress. Every-other-week and 30-minute lessons work well for younger or busier players." },
  { q: "What's your cancellation policy?", a: "Life happens. Just give me 24 hours' notice and we'll reschedule with no charge. Same-day cancellations are billed for the reserved time." },
  { q: "Can you help with band auditions or solos?", a: "Absolutely. I coach chair auditions, all-state prep, solo & ensemble pieces, and audition excerpts — bring your music and we'll get it performance-ready." }];

  const [open, setOpen] = useState(0);
  return (
    <div className="page">
      <section className="section-sm" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.8rem)", marginTop: 20, maxWidth: "16ch" }}>Questions, answered.</h1>
        </div>
      </section>
      <section style={{ paddingBottom: 40 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: "100%", background: "transparent", border: "none", textAlign: "left",
                    padding: "26px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24
                  }}>
                    <span style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>{f.q}</span>
                    <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--accent-deep)", fontSize: "1.2rem", transition: "transform .25s, background .2s", transform: isOpen ? "rotate(45deg)" : "none", background: isOpen ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "transparent" }}>+</span>
                  </button>
                  <div style={{ overflow: "hidden", maxHeight: isOpen ? 260 : 0, transition: "max-height .35s ease, opacity .3s", opacity: isOpen ? 1 : 0 }}>
                    <p style={{ color: "var(--muted)", lineHeight: 1.65, fontSize: "1.02rem", paddingBottom: 28, maxWidth: "62ch" }}>{f.a}</p>
                  </div>
                </div>);

            })}
          </div>
          <div style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <p style={{ color: "var(--muted)" }}>Still wondering about something?</p>
            <button className="btn btn-accent" onClick={() => go("contact")}>Ask me directly</button>
          </div>
        </div>
      </section>
    </div>);

}

/* ----------------------------------------------------------- */
/* ABOUT — Bio, Instruments, Links                              */
/* ----------------------------------------------------------- */
function About({ go }) {
  const instruments = [
  { n: "Bb Trumpet", d: "Lorem ipsum dolor sit amet, the everyday workhorse for lessons and most repertoire." },
  { n: "Cornet", d: "Consectetur adipiscing elit, warmer and rounder — lovely for brass band and lyrical playing." },
  { n: "Flugelhorn", d: "Sed do eiusmod tempor, that dark velvet tone for ballads and jazz." },
  { n: "Piccolo Trumpet", d: "Ut labore et dolore magna, for Baroque and high-register showpieces." }];

  const links = [
  { label: "YouTube", sub: "Lesson clips & performances", href: "#" },
  { label: "Instagram", sub: "@mainetrumpet", href: "#" },
  { label: "SoundCloud", sub: "Recordings & demos", href: "#" },
  { label: "Portland Brass Collective", sub: "Ensemble I play with", href: "#" }];

  return (
    <div className="page">
      {/* Bio */}
      <section className="section-sm" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-lg">About</div>
          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, marginTop: 28, alignItems: "start" }} className="bio-grid">
            <img src="assets/jimi-trumpet.jpg" alt="Jimi Michel playing the trumpet" style={{ aspectRatio: "4 / 5", width: "100%", objectFit: "cover", objectPosition: "center 30%", borderRadius: "var(--radius)", border: "1px solid var(--line)", display: "block", position: "sticky", top: 100 }} />
            <div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>Jimi Michel, trumpet</h1>
              <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 18, color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "62ch" }}>
                <p>Jimi Michel is a Maine-based musician, educator, and musicologist who has played in orchestras, jazz bands, theatre pits, and churches throughout the United States. He has performed as Principal Trumpet of the New York String Orchestra and the Bloomington (MN) Symphony Orchestra, as a substitute with the Syracuse Symphony, and with members of the Sacramento Philharmonic. As a musicologist, he has lectured throughout the United States and has written program notes for the St. Paul Chamber Orchestra, as well as for performances including members of the Boston Symphony, Chicago Symphony, New York Philharmonic, and Cleveland Orchestra. Jimi holds degrees from the Interlochen Arts Academy and the New England Conservatory. His principal teachers were Charlie Schlueter, Gary Bordner, and Terry Caviness, with additional studies with Stanley Friedman, Steve Emory, and John Raschella.</p>
                <p>Jimi also has a second career in public health and technology. He has worked on five continents developing digital and mobile solutions to address a wide variety of global health challenges. From 2017–2020 he served as the mHealth Innovation Lead at the UC Davis Center for Health and Technology and previously worked for MEDITECH, Pathfinder International, the Rollins School of Public Health (Emory University), the University of Copenhagen, and Aetna/CVS Health. Collaborators have included WHO, UNICEF, World Bank, Water Aid, World Vision and the Ministries of Health in Vietnam, Malawi, Uganda, and Cambodia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="section-sm">
        <div className="wrap">
          <div className="eyebrow">Instruments</div>
          <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)", marginTop: 18 }}>What I play & teach</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 34 }} className="inst-grid">
            {instruments.map((it) =>
            <div key={it.n} className="card" style={{ padding: 26, display: "flex", gap: 20, alignItems: "center" }}>
                <Placeholder label="icon" style={{ width: 76, height: 76, flexShrink: 0, borderRadius: 12 }} />
                <div>
                  <h3 style={{ fontSize: "1.15rem" }}>{it.n}</h3>
                  <p style={{ color: "var(--muted)", marginTop: 7, lineHeight: 1.55, fontSize: "0.92rem" }}>{it.d}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="section-sm" style={{ paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow">Links</div>
          <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)", marginTop: 18 }}>Listen & follow along</h2>
          <div style={{ marginTop: 30, borderTop: "1px solid var(--line)" }}>
            {links.map((l) =>
            <a key={l.label} href={l.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 4px", borderBottom: "1px solid var(--line)", transition: "padding .2s" }}
            onMouseEnter={(e) => e.currentTarget.style.paddingLeft = "16px"}
            onMouseLeave={(e) => e.currentTarget.style.paddingLeft = "4px"}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
                  <span style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>{l.label}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.04em" }}>{l.sub}</span>
                </div>
                <span style={{ color: "var(--accent-deep)", fontSize: "1.4rem" }}>↗</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>);

}

/* ----------------------------------------------------------- */
/* CONTACT                                                      */
/* ----------------------------------------------------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Please tell me your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email.";
    if (form.message.trim().length < 8) er.message = "A sentence or two helps.";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <div className="page">
      <section className="section-sm" style={{ paddingTop: 72, paddingBottom: 90 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "start" }} className="contact-grid">
            <div>
              <div className="eyebrow eyebrow-lg">Contact</div>
              <h1 style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", marginTop: 20 }}>Let's set up<br />your first lesson.</h1>
              <p className="lede" style={{ marginTop: 22, maxWidth: 420 }}>
                Send a note and I'll get back to you within a day or two to find a time that works.
              </p>
              <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 18 }}>
                {[["Email", "hello@mainetrumpetlessons.com"], ["Studio", "Deering Center, Portland (ME)"]].map(([k, v]) =>
                <div key={k} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", width: 64, flexShrink: 0 }}>{k}</span>
                    <span style={{ fontSize: "1rem", color: "var(--ink)" }}>{v}</span>
                  </div>
                )}
              </div>
              <a href="https://www.google.com/maps/place/Deering+Center,+Portland,+ME" target="_blank" rel="noopener" style={{ display: "block", marginTop: 28, borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--line)" }}>
                <img src="assets/deering-map.png" alt="Map showing the Deering Center neighborhood of Portland, Maine" style={{ display: "block", width: "100%", height: "auto" }} />
              </a>
            </div>

            <div className="card" style={{ padding: "clamp(28px, 4vw, 44px)" }}>
              {sent ?
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "color-mix(in srgb, var(--accent) 16%, transparent)", color: "var(--accent-deep)", display: "grid", placeItems: "center", margin: "0 auto", fontSize: "1.8rem" }}>✓</div>
                  <h3 style={{ fontSize: "1.5rem", marginTop: 22 }}>Thank you, {form.name.split(" ")[0]}!</h3>
                  <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.6, maxWidth: "40ch", marginLeft: "auto", marginRight: "auto" }}>
                    Your message is on its way. I'll reply to <b style={{ color: "var(--ink)" }}>{form.email}</b> soon to get your trial lesson scheduled.
                  </p>
                  <button className="btn btn-ghost" style={{ marginTop: 28 }} onClick={() => {setSent(false);setForm({ name: "", email: "", message: "" });}}>Send another</button>
                </div> :

              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div className={"field" + (errors.name ? " err" : "")}>
                    <label htmlFor="c-name">Your name</label>
                    <input id="c-name" value={form.name} onChange={set("name")} placeholder="Jane Cornet" />
                    <span className="msg">{errors.name}</span>
                  </div>
                  <div className={"field" + (errors.email ? " err" : "")}>
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" value={form.email} onChange={set("email")} placeholder="jane@email.com" />
                    <span className="msg">{errors.email}</span>
                  </div>
                  <div className={"field" + (errors.message ? " err" : "")}>
                    <label htmlFor="c-msg">Message</label>
                    <textarea id="c-msg" rows="5" value={form.message} onChange={set("message")} placeholder="A bit about you — your experience, goals, and when you'd like to start." style={{ resize: "vertical" }}></textarea>
                    <span className="msg">{errors.message}</span>
                  </div>
                  <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%" }}>Send message</button>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--muted)", textAlign: "center", letterSpacing: "0.04em" }}>I'll never share your details. Promise.</p>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    </div>);

}

/* ----------------------------------------------------------- */
/* TEACHING PHILOSOPHY                                          */
/* ----------------------------------------------------------- */
function Philosophy({ go }) {
  const pillars = [
  { k: "01", t: "Developing technique.", d: "We’ll work together to develop the fundamentals, from producing a good tone and clear articulation to double-tonguing and range extension through a mix of accepted methodologies and individualized exercises that are tailored to each student’s strengths and gaps." },
  { k: "02", t: "Thinking musically.", d: "The trumpet is a means to an end, and the “end” is to make music! Lessons will include the building blocks of musicianship — listening sessions, sight-singing, and, for more advanced students, discussions of music theory, phrasing, style, and form." },
  { k: "03", t: "Thinking critically.", d: "Most importantly, we will work together to build a framework to approach problem-solving. We’ll build these frameworks by learning music together, sight-reading, and developing an approach to problem-solving that will help you both in music and in life." }];

  return (
    <div className="page">
      <section className="section-sm" style={{ paddingTop: 72 }}>
        <div className="wrap" style={{ maxWidth: 880 }}>
          <div className="eyebrow eyebrow-lg">LESSONS</div>
          <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.8rem)", marginTop: 20 }}>Teaching philosophy.</h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: 700 }}>
            My teaching style and philosophy has been (and continues to be) influenced by the many wonderful musicians I have studied and worked with. I do my best to adapt my approach to the needs, interests, and priorities of each student, but my teaching centers around three fundamental pillars:
          </p>

          <div style={{ marginTop: 44, borderTop: "1px solid var(--line)" }}>
            {pillars.map((p) =>
            <div key={p.k} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(24px, 4vw, 56px)", padding: "32px 0", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
                <div style={{ fontWeight: 700, color: "var(--accent-deep)", fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{p.k}</div>
                <div>
                  <h3 style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)" }}>{p.t}</h3>
                  <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.65, fontSize: "1.05rem", maxWidth: "64ch" }}>{p.d}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <CTABand go={go} />
    </div>);

}

/* ----------------------------------------------------------- */
/* STUDIO POLICIES                                              */
/* ----------------------------------------------------------- */
function PolicyBlock({ n, title, children }) {
  return (
    <div style={{ marginTop: 50, paddingTop: 38, borderTop: "1px solid var(--line)" }}>
      <div style={{ fontFamily: "var(--mono)", color: "var(--accent-deep)", fontSize: "0.8rem", letterSpacing: "0.12em" }}>{n}</div>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", marginTop: 12 }}>{title}</h2>
      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 16, color: "var(--muted)", lineHeight: 1.7, fontSize: "1.05rem" }}>
        {children}
      </div>
    </div>);

}

function PolicyList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "2px 0", display: "flex", flexDirection: "column", gap: 13 }}>
      {items.map((it, i) =>
      <li key={i} style={{ display: "flex", gap: 13 }}>
          <span style={{ color: "var(--accent-deep)", fontWeight: 700, flexShrink: 0 }}>—</span>
          <span>{it}</span>
        </li>
      )}
    </ul>);

}

function Policies({ go }) {
  return (
    <div className="page">
      <section className="section-sm" style={{ paddingTop: 72 }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="eyebrow eyebrow-lg">Studio policies</div>
          <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.8rem)", marginTop: 20 }}>What to expect.</h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Congratulations on taking trumpet lessons! I teach because I really enjoy sharing my love for music, and the trumpet. The guidelines below outline what I expect from my students, and what my students should expect from me. If you have any questions or anticipate issues with any of my policies, please let me know and we’ll work together to address your concerns.
          </p>

          <PolicyBlock n="01" title="Practice expectations">
            <p>I’m a strong believer that the quality of your practice is more important than the quantity of your practice. So, the quick (and perhaps frustratingly vague!) answer to how much students are expected to practice is simply: as much time as it takes to prepare your assignments and be ready for lessons and rehearsals!</p>
            <p>That having been said, beginners may find that 20–30 minutes a day, 5 days a week is sufficient to prepare their assignments. Middle school students often practice every day for 45 minutes to an hour, and high school students over an hour each day (especially when preparing for concerts or auditions).</p>
          </PolicyBlock>

          <PolicyBlock n="02" title="Required materials">
            <p>Students are expected to come with appropriate equipment each week. This includes:</p>
            <PolicyList items={[
            "An instrument (and mouthpiece) in good, working condition",
            "Assigned sheet music, etude books, solos, and method books",
            "Valve oil",
            "A pencil (or stylus if you are using a tablet device)",
            "Mutes (depending on assignments)"]} />
          </PolicyBlock>

          <PolicyBlock n="03" title="Billing and attendance">
            <p>Payment is due with each lesson and can be made via cash, check, or Venmo. Failure to pay on time may result in the suspension of lessons.</p>
            <p>It’s important that you show up to lessons on time and prepared. I understand that students often juggle many responsibilities, and sometimes those responsibilities can cause scheduling conflicts. My official attendance policy is:</p>
            <PolicyList items={[
            "Illness or family emergencies will always be accommodated, but I ask that you give me as much notice as possible (48 hours is preferable).",
            "I will do my best to accommodate scheduling issues related to school or other extracurricular activities if enough notice is given (1 week is preferable here). With enough notice, family vacations also fall into this category.",
            "Students will be given one “unexcused” absence per year. An unexcused absence is a last-second cancellation for non-emergency reasons or any kind of no-show. These lessons will be made up the first time, but will not be made up a second time."]} />
            <p>Please note that this is a very generous attendance policy. Any abuse of this policy will be grounds for terminating private lessons.</p>
          </PolicyBlock>

          <PolicyBlock n="04" title="Terminating lessons">
            <p>Private lessons are “at-will” and may be terminated at any time by the parent or student. The instructor may also terminate lessons for the following reasons:</p>
            <PolicyList items={[
            "Failure to pay lesson fees, or frequent late payments",
            "Frequent unexcused absences",
            "Lack of effort or preparation for lessons",
            "Repeated disrespectful or offensive behavior"]} />
            <p>Please note that, in most cases, refunds will not be provided if lessons are terminated, although exceptions can be made at my discretion for extenuating circumstances.</p>
          </PolicyBlock>

          <PolicyBlock n="05" title="Switching teachers">
            <p>Not every teacher is a perfect fit for every student. If you are currently studying with me and don’t feel lessons are going well, please let me know how we can be more productive! I will do my best to accommodate all reasonable requests and if things still aren’t going great, I would be happy to recommend and introduce you to other teachers in the area who might be a better fit.</p>
            <p>Similarly, I don’t teach students who currently study with another teacher unless that teacher knows about it. If you’re looking to switch teachers, please have that conversation with your current teacher before reaching out to me.</p>
          </PolicyBlock>
        </div>
      </section>
      <CTABand go={go} />
    </div>);

}

Object.assign(window, { Welcome, Pricing, Philosophy, About, Contact, Policies, Placeholder });