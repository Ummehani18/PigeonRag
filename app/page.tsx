"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  FileSearch,
  FileText,
  Github,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const LINKS = {
  github: "https://github.com/Ummehani18/VaultRAG",
  email: "mailto:ummehani01072002@gmail.com",
  slack: "https://connect-for-pigeonrag.slack.com/",
  collaborate:
    "mailto:ummehani01072002@gmail.com?subject=Interested%20in%20PigeonRAG",
};

type Page =
  | "Overview"
  | "Product"
  | "Architecture"
  | "Technology"
  | "About";

const pages: Page[] = [
  "Overview",
  "Product",
  "Architecture",
  "Technology",
  "About",
];

function SlackMark({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <g strokeWidth="3.2" strokeLinecap="round">
        <path d="M8 3.8v5.1" stroke="#36C5F0" />
        <path d="M3.8 8h5.1" stroke="#36C5F0" />
        <path d="M16 20.2v-5.1" stroke="#2EB67D" />
        <path d="M20.2 16h-5.1" stroke="#2EB67D" />
        <path d="M20.2 8h-5.1" stroke="#ECB22E" />
        <path d="M16 3.8v5.1" stroke="#ECB22E" />
        <path d="M3.8 16h5.1" stroke="#E01E5A" />
        <path d="M8 20.2v-5.1" stroke="#E01E5A" />
      </g>
    </svg>
  );
}

function Brand() {
  return (
    <span className="brand">
      <span className="brand-icon">
        <Image
          src="/pigeon-icon.png"
          alt="PigeonRAG"
          width={29}
          height={29}
          priority
        />
      </span>

      <span className="brand-word">
        Pigeon<span>RAG</span>
      </span>
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: React.ReactNode;
  detail?: string;
}) {
  return (
    <div className="section-title">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {detail && <p>{detail}</p>}
    </div>
  );
}

/* =========================
   OVERVIEW
========================= */

function Overview({
  onNavigate,
}: {
  onNavigate: (page: Page) => void;
}) {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="hero-copy">
          <div className="prelaunch">
            <span className="pulse" /> IN ACTIVE DEVELOPMENT <i /> PRE-LAUNCH
          </div>

          <h1>
            Private knowledge.
            <br />
            <span>Precisely retrieved.</span>
          </h1>

          <p className="hero-lead">
            PigeonRAG is a locally hosted RAG platform designed to help teams
            search sensitive organizational documents and get answers grounded
            in the information they already own.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore the project <ArrowUpRight size={16} />
            </a>

            <button
              className="button button-quiet"
              onClick={() => onNavigate("Architecture")}
            >
              View architecture <ArrowDownRight size={16} />
            </button>
          </div>

          <div className="hero-foot">
            <ShieldCheck size={15} />
            Local-first by design. Production validation is ongoing.
          </div>
        </div>

        {/* STATIC WORKSPACE UI */}
        <div
          className="hero-visual"
          aria-label="Illustration of a private document question-answering interface"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-glow" />

          <div className="floating-label label-top">
            <LockKeyhole size={13} /> LOCAL-FIRST
          </div>

          <div className="floating-label label-bottom">
            <span className="mini-live-dot" /> RETRIEVAL ACTIVE
          </div>

          <div className="product-window">
            <div className="window-top">
              <div className="window-brand">
                <span className="window-brand-icon">
                  <Image
                    src="/pigeon-icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="pigeon-mark pigeon-mark-light"
                  />

                  <Image
                    src="/pigeon-icon-white.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="pigeon-mark pigeon-mark-dark"
                  />
                </span>

                <span>PigeonRAG</span>
              </div>

              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="window-content">
              <div className="window-sidebar">
                <div className="sidebar-icon active">
                  <BookOpen size={15} />
                </div>

                <div className="sidebar-icon">
                  <FileSearch size={15} />
                </div>

                <div className="sidebar-icon">
                  <Database size={15} />
                </div>

                <div className="sidebar-icon">
                  <LockKeyhole size={15} />
                </div>
              </div>

              <div className="mock-workspace">
                <div className="mock-kicker">KNOWLEDGE WORKSPACE</div>

                <div className="mock-heading">Ask your documents</div>

                <div className="mock-subheading">
                  Search across your connected knowledge.
                </div>

                <div className="mock-question">
                  <span>What is the reimbursement process?</span>

                  <span className="mock-send">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="answer-card">
                  <div className="answer-label">
                    <Sparkles size={12} />
                    GENERATED FROM YOUR SOURCES
                  </div>

                  <div className="answer-line answer-line-long" />
                  <div className="answer-line answer-line-medium" />
                  <div className="answer-line answer-line-short" />

                  <div className="source-chip">
                    <FileText size={11} />
                    Claims_Guidelines.pdf
                    <span>p. 12</span>
                  </div>
                </div>

                <div className="mock-footer">
                  <span>
                    <i /> LOCAL MODEL
                  </span>
                  <span>ILLUSTRATIVE PREVIEW</span>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-caption">
            A quieter way to work with sensitive knowledge.
          </div>
        </div>
      </section>

      <section className="signal-row">
        <span>BUILT AROUND</span>
        <div>
          <Server size={16} /> Local models
        </div>
        <div>
          <Database size={16} /> Vector search
        </div>
        <div>
          <FileSearch size={16} /> Document retrieval
        </div>
        <div>
          <ShieldCheck size={16} /> Controlled environments
        </div>
      </section>

      <section className="overview-lower">
        <div>
          <Eyebrow>THE PROBLEM</Eyebrow>
          <h2>
            Your organization's data should 
            <br />
            stay within your organization.
          </h2>
        </div>

        <div className="overview-text">
          <p>
            Sensitive documents, internal policies, business records and confidential information shouldn't have to leave your organization's controlled environment just to use AI.



          </p>

          <p>Yet many AI-powered tools rely on external cloud infrastructure, creating concerns around data exposure, confidentiality and control.
</p>

          <p>
            PigeonRAG is being developed as a privacy-first, locally hosted RAG platform — enabling organizations to use AI with their internal knowledge while keeping document processing and retrieval within their own environment.
          </p>

          <button
            className="inline-link"
            onClick={() => onNavigate("Product")}
          >
            Explore the product <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}

/* =========================
   PRODUCT
========================= */

function Product() {
  const items = [
    [
      FileText,
      "Document ingestion",
      "Extract text from PDF documents and prepare content for indexing.",
    ],
    [
      Layers3,
      "Chunking & embeddings",
      "Split content into retrievable passages and generate embeddings locally.",
    ],
    [
      Search,
      "Semantic retrieval",
      "Find contextually relevant passages through vector similarity search.",
    ],
    [
      Atom,
      "Local generation",
      "Pass retrieved context to a locally hosted language model through Ollama.",
    ],
    [
      FileSearch,
      "Source metadata",
      "Return document and page metadata alongside retrieved passages.",
    ],
    [
      LockKeyhole,
      "Scoped retrieval",
      "Support document- and user-scoped retrieval flows, with security coverage still under validation.",
    ],
  ] as const;

  return (
    <div className="page-enter inner-page">
      <SectionTitle
        eyebrow="PRODUCT / CAPABILITIES"
        title={
          <>
            A focused system for
            <br />
            <span>document-grounded AI.</span>
          </>
        }
        detail="PigeonRAG connects document processing, semantic retrieval and local generation in one workflow."
      />

      <div className="capability-grid">
        {items.map(([Icon, title, desc], i) => (
          <article className="capability" key={title}>
            <div className="cap-top">
              <span className="cap-icon">
                <Icon size={19} />
              </span>
              <span>0{i + 1}</span>
            </div>

            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>

      <div className="note-panel">
        <CircleDot size={16} />
        <p>
          <strong>Scope:</strong> PigeonRAG is a document knowledge and
          retrieval tool. It does not make operational decisions or replace an
          organization's core systems.
        </p>
      </div>
    </div>
  );
}

/* =========================
   ARCHITECTURE
========================= */

function Architecture() {
  const stages = [
    ["01", "Document", "PDF source files", FileText],
    ["02", "Extraction", "Text processing & chunking", Workflow],
    ["03", "Embedding", "Ollama · all-minilm", Atom],
    ["04", "Index", "PostgreSQL + pgvector", Database],
    ["05", "Retrieval", "Similarity + scoped context", Search],
    ["06", "Generation", "Ollama · llama3.2:1b", Zap],
  ] as const;

  return (
    <div className="page-enter inner-page">
      <SectionTitle
        eyebrow="SYSTEM / ARCHITECTURE"
        title={
          <>
            A retrieval pipeline
            <br />
            <span>built around your data.</span>
          </>
        }
        detail="A high-level view of the current prototype. The system is designed to keep document processing, retrieval and inference inside the deployment environment."
      />

      <div className="architecture">
        <div className="arch-topline">
          <span>DOCUMENT-TO-ANSWER FLOW</span>
          <span>LOCAL EXECUTION PATH</span>
        </div>

        <div className="arch-flow">
          {stages.map(([num, title, desc, Icon], i) => (
            <div className="arch-stage" key={num}>
              <div className="arch-number">{num}</div>
              <div className="arch-icon">
                <Icon size={21} />
              </div>

              <h3>{title}</h3>
              <p>{desc}</p>

              {i < stages.length - 1 && (
                <div className="arch-arrow">
                  <ChevronRight size={17} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="arch-result">
          <div className="result-icon">
            <FileSearch size={18} />
          </div>

          <div>
            <strong>Answer + retrieved source metadata</strong>
            <span>
              Users can inspect the source material behind the response.
            </span>
          </div>

          <span className="result-status">OUTPUT</span>
        </div>
      </div>

      <div className="architecture-foot">
        <span>
          <span className="legend-dot" /> Current implementation direction
        </span>
        <span>Not a security certification or air-gap guarantee.</span>
      </div>
    </div>
  );
}

/* =========================
   TECHNOLOGY
========================= */

function Technology() {
  const groups = [
    ["Frontend", "Next.js", "React", "TypeScript"],
    ["Backend", "Java 17", "Spring Boot", "Spring REST"],
    ["Data layer", "PostgreSQL", "pgvector", "Spring Data JPA"],
    ["AI runtime", "Ollama", "all-minilm", "llama3.2:1b"],
    ["Document processing", "Apache Tika", "Apache PDFBox", "PDF extraction"],
    ["Security & delivery", "Spring Security", "JWT", "Docker configuration"],
  ];

  return (
    <div className="page-enter inner-page">
      <SectionTitle
        eyebrow="ENGINEERING / STACK"
        title={
          <>
            Built with familiar,
            <br />
            <span>composable technologies.</span>
          </>
        }
        detail="The current prototype uses a Java backend, a web frontend, vector storage and locally hosted AI models."
      />

      <div className="tech-grid">
        {groups.map(([name, ...tags], i) => (
          <article className="tech-card" key={name}>
            <div className="tech-card-head">
              <span>0{i + 1}</span>
              <h3>{name}</h3>
            </div>

            <div className="tech-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="status-box">
        <div className="status-head">
          <span className="status-indicator" /> IMPLEMENTATION STATUS
        </div>

        <div className="status-columns">
          <div>
            <Check size={15} />
            <span>Core ingestion and retrieval flow implemented</span>
          </div>

          <div>
            <Check size={15} />
            <span>Local Ollama integration operational</span>
          </div>

          <div>
            <Check size={15} />
            <span>Streamed answer responses operational</span>
          </div>

          <div>
            <CircleDot size={15} />
            <span>
              Retrieval quality and answer grounding under improvement
            </span>
          </div>

          <div>
            <CircleDot size={15} />
            <span>Security validation and production readiness pending</span>
          </div>

          <div>
            <CircleDot size={15} />
            <span>End-to-end air-gapped deployment remains a goal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   ABOUT
========================= */

function About() {
  return (
    <div className="page-enter inner-page about-page">
      <SectionTitle
        eyebrow="PROJECT / ABOUT"
        title={
          <>
            A practical exploration
            <br />
            <span>of private AI retrieval.</span>
          </>
        }
        detail="PigeonRAG is an independent full-stack project being developed in public. The goal is to explore how teams can work with sensitive organizational knowledge using locally hosted AI."
      />

      <div className="about-columns">
        <div className="about-card">
          <div className="about-card-icon">
            <Code2 size={20} />
          </div>

          <h3>Built in the open</h3>

          <p>
            The project is evolving through implementation, testing and
            iteration. The repository is the best place to follow technical
            progress and inspect the code.
          </p>

          <a href={LINKS.github} target="_blank" rel="noreferrer">
            View source repository <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <Network size={20} />
          </div>

          <h3>Open to collaboration</h3>

          <p>
            Interested in RAG systems, local inference, document workflows or
            helping test an early prototype? Let's start a conversation.
          </p>

          <a href={LINKS.collaborate}>
            Discuss collaboration <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="about-disclaimer">
        PigeonRAG is a working prototype under active development. Features
        and safeguards should not be treated as production-ready until
        independently tested and validated.
      </div>
    </div>
  );
}

/* =========================
   MAIN PAGE
========================= */

export default function Home() {
  const [active, setActive] = useState<Page>("Overview");
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(page: Page) {
    setActive(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="app-shell">
      <div className="topline">
        <span>
          <i /> INDEPENDENT PROJECT / PRE-LAUNCH
        </span>

        <a href={LINKS.github} target="_blank" rel="noreferrer">
          SOURCE CODE <ArrowUpRight size={12} />
        </a>
      </div>

      <header className="header">
        <button
          className="brand-button"
          onClick={() => navigate("Overview")}
          aria-label="PigeonRAG home"
        >
          <Brand />
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={menuOpen ? "navigation navigation-open" : "navigation"}
          aria-label="Main navigation"
        >
          {pages.map((page) => (
            <button
              key={page}
              className={active === page ? "nav-item active" : "nav-item"}
              onClick={() => navigate(page)}
            >
              {page}
            </button>
          ))}

          <a
            className="nav-github"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub <ArrowUpRight size={12} />
          </a>
        </nav>
      </header>

      <div className="content" key={active}>
        {active === "Overview" && <Overview onNavigate={navigate} />}
        {active === "Product" && <Product />}
        {active === "Architecture" && <Architecture />}
        {active === "Technology" && <Technology />}
        {active === "About" && <About />}
      </div>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand-wrap">
            <Brand />
            <p>Private knowledge. Local intelligence.</p>
          </div>

          <div className="footer-connect">
            <span>CONNECT</span>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href={LINKS.slack}
              target="_blank"
              rel="noreferrer"
              aria-label="Slack"
            >
              <SlackMark size={17} />
            </a>

            <a href={LINKS.email} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PigeonRAG · Built in the open.
          </span>

          <span>Working prototype / Active development</span>

          <button onClick={() => navigate("Overview")}>
            BACK TO OVERVIEW <ArrowUpRight size={12} />
          </button>
        </div>
      </footer>
    </main>
  );
}
