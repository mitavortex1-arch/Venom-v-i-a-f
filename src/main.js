
import "./style.css";

const zones = [
  {
    id: "ingress",
    number: "01",
    name: "FRONT INGRESS",
    subtitle: "CAPTURE / CONDITION / DISTRIBUTE",
    description:
      "The front interface of the aerodynamic architecture. Organizes the nose, splitter region, front bodywork, and proposed cooling-air entry points.",
    functions: [
      "Front-body airflow mapping",
      "Splitter and nose geometry studies",
      "Cooling inlet allocation",
      "Front wheel-wake investigation"
    ],
    outputs: [
      "Inlet flow requirements",
      "Front pressure distribution",
      "Cooling airflow targets"
    ],
    color: "cyan"
  },
  {
    id: "fabric",
    number: "02",
    name: "DISTRIBUTED AERO FABRIC",
    subtitle: "GUIDE / MANAGE / COORDINATE",
    description:
      "The central aerodynamic architecture. Connects the floor, underbody, side surfaces, ducts, and bodywork into a coordinated design model.",
    functions: [
      "Underbody and floor studies",
      "Side-surface airflow mapping",
      "Bodywork and duct coordination",
      "Pressure and flow-field analysis"
    ],
    outputs: [
      "Underbody design envelope",
      "Surface pressure maps",
      "Drag and downforce study targets"
    ],
    color: "blue"
  },
  {
    id: "egress",
    number: "03",
    name: "REAR EGRESS",
    subtitle: "EXTRACT / RECOVER / RELEASE",
    description:
      "The rear airflow interface. Organizes proposed diffuser, rear-body, cooling-exit, and rear-wing studies as one development zone.",
    functions: [
      "Diffuser development studies",
      "Rear-body airflow mapping",
      "Cooling-exit coordination",
      "Rear-wing interaction studies"
    ],
    outputs: [
      "Rear pressure distribution",
      "Exit-flow study results",
      "Rear balance assessment"
    ],
    color: "violet"
  }
];

const workstreams = [
  {
    code: "VIAF-01",
    title: "GEOMETRY REGISTRY",
    detail: "Track nose, floor, side surface, duct, diffuser, and rear-body design revisions.",
    status: "FOUNDATION"
  },
  {
    code: "VIAF-02",
    title: "AIRFLOW STUDY MANAGER",
    detail: "Organize CFD cases, boundary conditions, simulation versions, and results.",
    status: "PLANNED"
  },
  {
    code: "VIAF-03",
    title: "THERMAL INTERFACE",
    detail: "Coordinate cooling-air requirements with the vehicle thermal architecture.",
    status: "PLANNED"
  },
  {
    code: "VIAF-04",
    title: "AERO BALANCE REVIEW",
    detail: "Record front/rear balance targets, test evidence, and engineering decisions.",
    status: "PLANNED"
  },
  {
    code: "VIAF-05",
    title: "VALIDATION GATES",
    detail: "Track simulation, wind-tunnel, and physical test evidence before design approval.",
    status: "PLANNED"
  },
  {
    code: "VIAF-06",
    title: "CHANGE LEDGER",
    detail: "Maintain revision history, owners, approvals, and rationale for design changes.",
    status: "PLANNED"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="viaf-shell">
    <header class="topbar">
      <a class="brand" href="#overview">
        <span class="brand-symbol">V</span>
        <span class="brand-copy">
          <strong>VIAF</strong>
          <small>VENOM AERODYNAMIC SYSTEMS</small>
        </span>
      </a>

      <div class="top-center">
        <span class="online-dot"></span>
        ARCHITECTURE CONSOLE
      </div>

      <div class="top-right">
        <span>SHELBY PREDATOR</span>
        <strong>SP-GT / 427</strong>
      </div>
    </header>

    <main>
      <section class="hero" id="overview">
        <div class="hero-content">
          <div class="eyebrow"><span class="eyebrow-line"></span> VEHICLE AERODYNAMICS / SYSTEM 06</div>

          <div class="hero-kicker">THE AIRFLOW ARCHITECTURE</div>
          <h1>V<span>I</span>AF</h1>
          <h2>VENOM INTEGRATED<br/>AERO-FABRIC</h2>

          <p class="hero-description">
            Three aerodynamic zones. One coordinated airflow architecture.
            The proposed aerodynamic development system for the Shelby Predator GT.
          </p>

          <div class="hero-tags">
            <span>FRONT INGRESS</span>
            <span>DISTRIBUTED AERO FABRIC</span>
            <span>REAR EGRESS</span>
          </div>

          <div class="hero-actions">
            <button class="primary-button" data-scroll="architecture">
              ENTER ARCHITECTURE <span>↗</span>
            </button>
            <button class="outline-button" data-scroll="development">
              DEVELOPMENT SYSTEM
            </button>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-topline">
            <span>VIAF / FLOW MODEL 001</span>
            <span>CONCEPT SCHEMATIC</span>
          </div>

          <div class="schematic-grid"></div>

          <svg class="flow-diagram" viewBox="0 0 760 390" role="img" aria-label="Conceptual top-down airflow architecture showing front ingress, distributed aero fabric and rear egress">
            <defs>
              <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#243f59"/>
                <stop offset="50%" stop-color="#12283c"/>
                <stop offset="100%" stop-color="#091522"/>
              </linearGradient>
              <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#45e5ff" stop-opacity=".15"/>
                <stop offset="50%" stop-color="#45e5ff" stop-opacity=".95"/>
                <stop offset="100%" stop-color="#9b7dff" stop-opacity=".85"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g class="air-streams" fill="none" stroke="url(#flowGradient)" stroke-width="2.4" stroke-linecap="round">
              <path d="M25 110 C140 110 170 135 250 145 S450 145 520 125 S650 110 730 110" stroke-dasharray="10 9"/>
              <path d="M25 145 C130 145 180 160 255 165 S440 165 525 155 S650 145 730 145" stroke-dasharray="10 9"/>
              <path d="M25 195 C130 195 180 195 255 195 S440 195 525 195 S650 195 730 195" stroke-dasharray="10 9"/>
              <path d="M25 245 C130 245 180 230 255 225 S440 225 525 235 S650 245 730 245" stroke-dasharray="10 9"/>
              <path d="M25 280 C140 280 170 255 250 245 S450 245 520 265 S650 280 730 280" stroke-dasharray="10 9"/>
            </g>

            <g class="vehicle-shape">
              <path d="M355 35
                C330 48 315 80 305 112
                L275 155 L275 235
                L305 278 C315 310 330 340 355 355
                L405 355 C430 340 445 310 455 278
                L485 235 L485 155
                L455 112 C445 80 430 48 405 35 Z"
                fill="url(#bodyGradient)"
                stroke="#72dfff"
                stroke-width="2.5"/>

              <path d="M350 95 L410 95 L437 145 L437 245 L410 295 L350 295 L323 245 L323 145 Z"
                fill="#0a1a2a"
                stroke="#3b8da9"
                stroke-width="1.5"/>

              <path d="M350 125 L410 125 L425 165 L425 225 L410 265 L350 265 L335 225 L335 165 Z"
                fill="#122d43"
                stroke="#54d8f4"
                stroke-opacity=".7"/>

              <path d="M380 38 L380 352" stroke="#77e9ff" stroke-width="1" stroke-dasharray="5 7" opacity=".8"/>
              <path d="M275 155 L485 155 M275 235 L485 235" stroke="#72dfff" stroke-opacity=".4" stroke-dasharray="4 6"/>
              <path d="M290 155 L265 145 L265 245 L290 235" fill="none" stroke="#9b7dff" stroke-width="3"/>
              <path d="M470 155 L495 145 L495 245 L470 235" fill="none" stroke="#9b7dff" stroke-width="3"/>

              <g fill="#07101b" stroke="#9ddfff" stroke-width="1.5">
                <rect x="280" y="118" width="18" height="55" rx="7"/>
                <rect x="462" y="118" width="18" height="55" rx="7"/>
                <rect x="280" y="217" width="18" height="55" rx="7"/>
                <rect x="462" y="217" width="18" height="55" rx="7"/>
              </g>

              <path d="M350 35 L410 35" stroke="#c2f4ff" stroke-width="5"/>
              <path d="M350 355 L410 355" stroke="#9b7dff" stroke-width="5"/>
            </g>

            <g class="zone-labels" font-family="Inter, sans-serif">
              <g>
                <path d="M380 25 L380 8 L480 8" stroke="#47e4ff" fill="none"/>
                <text x="490" y="12" fill="#6ceaff" font-size="11" letter-spacing="2">FRONT INGRESS</text>
              </g>
              <g>
                <path d="M485 195 L555 195 L575 175" stroke="#5bafff" fill="none"/>
                <text x="580" y="170" fill="#7bc6ff" font-size="11" letter-spacing="2">AERO FABRIC</text>
              </g>
              <g>
                <path d="M380 355 L380 378 L480 378" stroke="#a48aff" fill="none"/>
                <text x="490" y="382" fill="#b8a3ff" font-size="11" letter-spacing="2">REAR EGRESS</text>
              </g>
            </g>

            <g fill="#d8f7ff" filter="url(#glow)">
              <circle cx="380" cy="35" r="4"/>
              <circle cx="485" cy="195" r="4"/>
              <circle cx="380" cy="355" r="4"/>
            </g>
          </svg>

          <div class="visual-legend">
            <span><i class="legend-cyan"></i> INGRESS</span>
            <span><i class="legend-blue"></i> DISTRIBUTION</span>
            <span><i class="legend-violet"></i> EGRESS</span>
          </div>

          <div class="visual-footer">
            <span>SP-GT / TOP VIEW STUDY</span>
            <span>NOT CFD DATA</span>
          </div>
        </div>
      </section>

      <section class="metrics">
        <div><small>ARCHITECTURE ZONES</small><strong>03</strong></div>
        <div><small>DEVELOPMENT WORKSTREAMS</small><strong>06</strong></div>
        <div><small>VEHICLE PLATFORM</small><strong>SP-GT / 427</strong></div>
        <div><small>VALIDATION STATE</small><strong class="pending">NOT VALIDATED</strong></div>
      </section>

      <section class="section" id="architecture">
        <div class="section-heading">
          <div>
            <div class="eyebrow">01 / THE THREE-ZONE MODEL</div>
            <h2>THE AIRFLOW <span>ARCHITECTURE</span></h2>
          </div>
          <p>
            Select a zone to inspect its purpose, design responsibilities,
            and proposed engineering outputs.
          </p>
        </div>

        <div class="zone-layout">
          <div class="zone-list" id="zoneList"></div>
          <div class="zone-detail" id="zoneDetail"></div>
        </div>
      </section>

      <section class="section fabric-section">
        <div class="section-heading">
          <div>
            <div class="eyebrow">02 / SYSTEM PHILOSOPHY</div>
            <h2>ONE FABRIC. <span>THREE ZONES.</span></h2>
          </div>
          <p>
            VIAF coordinates the aerodynamic design process.
            It does not assume that every surface or airflow path can be optimized independently.
          </p>
        </div>

        <div class="principle-grid">
          <article class="principle-card">
            <span class="principle-number">01</span>
            <div class="principle-icon">↘</div>
            <h3>CAPTURE</h3>
            <p>Define the incoming airflow environment and the vehicle's front-end interfaces.</p>
            <small>FRONT INGRESS</small>
          </article>
          <article class="principle-card">
            <span class="principle-number">02</span>
            <div class="principle-icon">⌁</div>
            <h3>COORDINATE</h3>
            <p>Study how the floor, bodywork, ducts, and side surfaces interact as one system.</p>
            <small>DISTRIBUTED AERO FABRIC</small>
          </article>
          <article class="principle-card">
            <span class="principle-number">03</span>
            <div class="principle-icon">↗</div>
            <h3>RELEASE</h3>
            <p>Evaluate rear pressure recovery, diffuser behavior, and airflow interaction.</p>
            <small>REAR EGRESS</small>
          </article>
        </div>
      </section>

      <section class="section" id="development">
        <div class="section-heading">
          <div>
            <div class="eyebrow">03 / ENGINEERING OPERATIONS</div>
            <h2>THE DEVELOPMENT <span>STACK</span></h2>
          </div>
          <p>
            The software structure for managing VIAF's design revisions,
            engineering studies, and validation evidence.
          </p>
        </div>

        <div class="workstream-grid" id="workstreamGrid"></div>
      </section>

      <section class="section validation-section">
        <div class="section-heading">
          <div>
            <div class="eyebrow">04 / ENGINEERING CONTROL</div>
            <h2>VALIDATION <span>GATES</span></h2>
          </div>
          <p>
            No aerodynamic performance claim should be accepted without
            documented engineering evidence.
          </p>
        </div>

        <div class="gate-list">
          <div class="gate">
            <span>G1</span>
            <div><strong>GEOMETRY DEFINITION</strong><small>Approved CAD geometry and configuration control</small></div>
            <b>REQUIRED</b>
          </div>
          <div class="gate">
            <span>G2</span>
            <div><strong>CFD REVIEW</strong><small>Mesh, boundary conditions, convergence, and repeatability review</small></div>
            <b>REQUIRED</b>
          </div>
          <div class="gate">
            <span>G3</span>
            <div><strong>WIND-TUNNEL CORRELATION</strong><small>Model testing and correlation with simulation results</small></div>
            <b>REQUIRED</b>
          </div>
          <div class="gate">
            <span>G4</span>
            <div><strong>PHYSICAL VEHICLE TEST</strong><small>Controlled track testing and engineering sign-off</small></div>
            <b>REQUIRED</b>
          </div>
          <div class="gate">
            <span>G5</span>
            <div><strong>DESIGN RELEASE</strong><small>Final configuration review and authorized approval</small></div>
            <b>HUMAN APPROVAL</b>
          </div>
        </div>
      </section>

      <section class="integration">
        <div class="eyebrow">05 / SHELBY PREDATOR ENTERPRISE</div>
        <h2>CONNECTED TO THE <span>MACHINE.</span></h2>
        <p>VIAF is one part of the wider Shelby Predator vehicle architecture.</p>

        <div class="integration-nodes">
          <div><strong>VIAF</strong><small>AERODYNAMICS</small></div>
          <div><strong>VEME</strong><small>ENGINEERING & MANUFACTURING</small></div>
          <div><strong>VTSE</strong><small>THERMAL SYSTEMS</small></div>
          <div><strong>COBRA</strong><small>DRIVER INTELLIGENCE</small></div>
          <div><strong>VCON</strong><small>INTEGRATION FRAME</small></div>
        </div>
      </section>

      <section class="closing">
        <div class="closing-symbol">V</div>
        <div class="eyebrow">THE COBRA WAY / 427 PROTOCOL</div>
        <h2>DESIGN THE FLOW.<br/><span>ENGINEER THE MACHINE.</span></h2>
        <p>VIAF — VENOM INTEGRATED AERO-FABRIC ARCHITECTURE</p>
      </section>
    </main>

    <footer>
      <span>VENOM AERODYNAMIC SYSTEMS</span>
      <span>SHELBY PREDATOR GT / LE MANS EDITION</span>
      <span>VIAF / CONCEPT PROTOTYPE</span>
    </footer>
  </div>
`;

const zoneList = document.querySelector("#zoneList");
const zoneDetail = document.querySelector("#zoneDetail");

function renderZone(zoneId) {
  const zone = zones.find(item => item.id === zoneId);
  if (!zone) return;

  zoneList.innerHTML = zones.map(item => `
    <button class="zone-button ${item.id === zoneId ? "active" : ""}" data-zone="${item.id}">
      <span class="zone-index">${item.number}</span>
      <span class="zone-button-copy">
        <strong>${item.name}</strong>
        <small>${item.subtitle}</small>
      </span>
      <span class="zone-arrow">↗</span>
    </button>
  `).join("");

  zoneDetail.innerHTML = `
    <div class="detail-topline">
      <span>ZONE ${zone.number} / VIAF ARCHITECTURE</span>
      <span class="detail-status">DESIGN CONCEPT</span>
    </div>
    <div class="detail-code">VIAF-${zone.number}</div>
    <h3>${zone.name}</h3>
    <p class="detail-description">${zone.description}</p>

    <div class="detail-columns">
      <div>
        <h4>DESIGN RESPONSIBILITIES</h4>
        <ul>${zone.functions.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>PROPOSED OUTPUTS</h4>
        <ul>${zone.outputs.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="detail-footer">
      <span>ENGINEERING OWNER: TO BE ASSIGNED</span>
      <span>STATUS: CONCEPT</span>
    </div>
  `;

  zoneList.querySelectorAll("[data-zone]").forEach(button => {
    button.addEventListener("click", () => renderZone(button.dataset.zone));
  });
}

renderZone("ingress");

document.querySelector("#workstreamGrid").innerHTML =
  workstreams.map((item, index) => `
    <article class="work-card">
      <div class="work-top">
        <span>${item.code}</span>
        <span class="work-number">0${index + 1}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
      <div class="work-status">${item.status}</div>
    </article>
  `).join("");

document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.scroll)?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

