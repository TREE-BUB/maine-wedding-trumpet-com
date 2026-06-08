// app.jsx — shell, nav, footer, routing + tweaks
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "welcome": "editorial",
  "accent": "#e0843c",
  "showNavRule": true
} /*EDITMODE-END*/;

const PAGES = [
{ id: "welcome", label: "Home" },
{ id: "philosophy", label: "Lessons" },
{ id: "policies", label: "Policies" },
{ id: "pricing", label: "Pricing" },
{ id: "about", label: "About" }];


function Nav({ page, go }) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="wordmark" onClick={() => go("welcome")}>
          Maine Trumpet Lessons
          <small>Deering Center, Portland</small>
        </div>
        <div className="nav-links">
          {PAGES.map((p) =>
          <a key={p.id} className={"nav-link" + (page === p.id ? " active" : "")} onClick={() => go(p.id)}>{p.label}</a>
          )}
          <button className="btn btn-accent nav-cta contact-keep" style={{ marginLeft: 10 }} onClick={() => go("contact")}>CONTACT</button>
        </div>
      </div>
    </nav>);

}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ cursor: "default" }}>
              <div className="brand-name" style={{ color: "var(--paper)" }}>Maine Trumpet Lessons</div>
            </div>
            <p style={{ color: "color-mix(in srgb, var(--paper) 70%, transparent)", marginTop: 18, maxWidth: 320, lineHeight: 1.6, fontSize: "0.95rem" }}>Private, in-person trumpet lessons for comeback players, beginners, intermediate, and advanced students of all ages, taught with patience in Deering Center.

            </p>
            <button className="btn btn-accent" style={{ marginTop: 22 }} onClick={() => go("contact")}>Get more info or schedule your first lesson</button>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            {PAGES.map((p) => <a key={p.id} onClick={() => go(p.id)} style={{ cursor: "pointer" }}>{p.label}</a>)}
            <a onClick={() => go("contact")} style={{ cursor: "pointer" }}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="made-love">Made with <b>♥</b> in Deering Center, Portland</span>
          <span>© {new Date().getFullYear()} Maine Trumpet Lessons</span>
        </div>
      </div>
    </footer>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useStateApp(() => {
    try {return localStorage.getItem("mtl_page") || "welcome";} catch (e) {return "welcome";}
  });

  const go = (p) => {
    setPage(p);
    try {localStorage.setItem("mtl_page", p);} catch (e) {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // apply accent tweak
  useEffectApp(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    // derive a deeper shade for hover/ink text
    document.documentElement.style.setProperty("--accent-deep",
    "color-mix(in srgb, " + t.accent + " 78%, #4a1f00)");
  }, [t.accent]);

  // Opt-in entrance fade — only when the tab is actually visible, so a paused or
  // hidden capture iframe never freezes content on the hidden start-frame.
  useEffectApp(() => {
    if (typeof document === "undefined" || document.visibilityState !== "visible") return;
    const el = document.querySelector("main .page");
    if (!el) return;
    el.classList.remove("in");
    void el.offsetWidth;
    el.classList.add("in");
  }, [page, t.welcome]);

  let view;
  if (page === "pricing") view = <Pricing go={go} />;else
  if (page === "philosophy") view = <Philosophy go={go} />;else
  if (page === "policies") view = <Policies go={go} />;else
  if (page === "about") view = <About go={go} />;else
  if (page === "contact") view = <Contact go={go} />;else
  view = <Welcome go={go} direction={t.welcome} />;

  return (
    <React.Fragment>
      <Nav page={page} go={go} />
      <main key={page + t.welcome}>{view}</main>
      <Footer go={go} />

      <TweaksPanel>
        <TweakSection label="Welcome page" />
        <TweakRadio label="Hero direction" value={t.welcome}
        options={["editorial", "centered", "dark"]}
        onChange={(v) => {if (page !== "welcome") go("welcome");setTweak("welcome", v);}} />
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
        options={["#e0843c", "#c0392b", "#caa23a", "#2f7d6b", "#9c6cd4"]}
        onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);