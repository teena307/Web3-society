import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const topics = [
    {
      icon: "⛓",
      title: "Blockchain",
      text: "Understand decentralized networks and how they power Web3."
    },
    {
      icon: "◈",
      title: "Smart Contracts",
      text: "Explore programmable agreements and on-chain logic."
    },
    {
      icon: "⌁",
      title: "dApps",
      text: "Build applications that connect users to decentralized technology."
    },
    {
      icon: "✦",
      title: "Web3",
      text: "Learn how the next generation of the internet is being built."
    }
  ];

  return (
    <div className="page">

      <nav className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">W3</span>
          <span>
            WEB3<span className="muted"> SOCIETY</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
          <a href="#join">Join</a>
        </div>
      </nav>

      <main id="home">

        <section className="hero">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="hero-copy">
            <p className="eyebrow">
              <span></span> TECH • INNOVATION • WEB3
            </p>

            <h1>
              Build the web
              <br />
              <em>of tomorrow.</em>
            </h1>

            <p className="hero-text">
              A community for curious minds who want to learn, experiment,
              and build with decentralized technologies.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#explore">
                Explore Web3 <span>↗</span>
              </a>

              <a className="button secondary" href="#about">
                Learn more
              </a>
            </div>
          </div>

          <div className="orbital" aria-hidden="true">
            <div className="orbit orbit-a">
              <span>◆</span>
            </div>

            <div className="orbit orbit-b">
              <span>◈</span>
            </div>

            <div className="core">W3</div>
          </div>
        </section>

        <section className="intro" id="about">
          <p className="section-label">01 / ABOUT</p>

          <div>
            <h2>
              Learn. Build.
              <br />
              <span>Decentralize.</span>
            </h2>

            <p>
              We bring together students and developers interested in
              blockchain, smart contracts, decentralized applications,
              and the ideas shaping Web3. No matter where you start,
              there is always something new to build.
            </p>
          </div>
        </section>

        <section className="explore" id="explore">

          <div className="section-heading">
            <div>
              <p className="section-label">02 / EXPLORE</p>

              <h2>
                What we <span>build with.</span>
              </h2>
            </div>

            <p>Four building blocks. Endless possibilities.</p>
          </div>

          <div className="cards">

            {topics.map((topic, index) => (
              <article className="card" key={topic.title}>

                <div className="card-top">
                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <span className="card-icon">
                    {topic.icon}
                  </span>
                </div>

                <h3>{topic.title}</h3>

                <p>{topic.text}</p>

                <span className="arrow">↗</span>

              </article>
            ))}

          </div>
        </section>

        <section className="join" id="join">

          <div>
            <p className="section-label">
              03 / JOIN THE COMMUNITY
            </p>

            <h2>
              Curious?
              <br />
              <span>Start exploring.</span>
            </h2>
          </div>

          <div className="join-box">

            <p>
              Web3 is still being written. Come learn and help
              write the next chapter.
            </p>

            <button
              className="button primary"
              onClick={() => setShowMessage(true)}
            >
              Join the Society <span>→</span>
            </button>

            {showMessage && (
              <p className="notice">
                ✨ You're in! Add your society's application/contact
                link here.
              </p>
            )}

          </div>
        </section>

      </main>

      <footer>
        <span>WEB3 SOCIETY</span>
        <span>BUILD • LEARN • CONNECT</span>
        <span>© 2026</span>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
