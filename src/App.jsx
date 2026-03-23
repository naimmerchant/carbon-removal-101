import { useState, useEffect } from "react";

const PUBLICATIONS = [{"topic":"Overview","solutions":"All","source":"Carbon Removal","link":"https://mitpress.mit.edu/9780262551366/carbon-removal/","type":"Book","level":2,"year":2026,"authors":"Howard Herzog and Niall MacDowell","description":"An overview of the science behind why CDR is necessary to meet climate goals, an overview of leading CDR approaches, and discussion on current policy and market frameworks"},{"topic":"Overview","solutions":"All","source":"CDR Primer","link":"https://cdrprimer.org","type":"Book","level":2,"year":2021,"authors":"Jen Wilcox, Ben Koloz, Jeremy Freeman, et al","description":"An overview of the science behind why CDR is necessary to meet climate goals, an overview of leading CDR approaches, a discussion on current policy and market frameworks, and discussion of social science behind scaling up removals"},{"topic":"Overview","solutions":"All","source":"Ending Fossil Fuels: Why Net Zero is Not Enough","link":"https://www.versobooks.com/products/2735-ending-fossil-fuels","type":"Book","level":1,"year":2021,"authors":"Holly Buck","description":"Exploration of how to think about removals beyond the conventional paradigm of net-zero and carbon markets"},{"topic":"Overview","solutions":"All","source":"State of CDR 2nd Edition","link":"#","type":"Report","level":2,"year":2024,"authors":"State of CDR","description":"Current status of CDR science and deployments"},{"topic":"Overview","solutions":"CCUS","source":"Global CCUS Status Report 2025","link":"https://www.globalccsinstitute.com/global-status-of-ccs/","type":"Report","level":1,"year":2025,"authors":"Global CCS Institute","description":"Current status of CCUS deployments and policy"},{"topic":"Science and innovation","solutions":"All","source":"A list of every CDR company in the world","link":"https://carbonbasedcommentary.substack.com/p/a-list-of-every-carbon-dioxide-removal","type":"Database","level":1,"year":2026,"authors":"Grant Faber","description":"Who is developing CDR solutions"},{"topic":"Science and innovation","solutions":"All","source":"GENIE - CDR Knowledge Hub","link":"https://cdr.apps.ece.iiasa.ac.at","type":"Database","level":5,"year":2026,"authors":"GENIE Project — IIASA","description":"Repository of scientific information related to removals"},{"topic":"Science and innovation","solutions":"All","source":"IPCC Assessment Report 6 Working Group 3","link":"https://www.ipcc.ch/report/ar6/wg3/","type":"Report","level":3,"year":2022,"authors":"IPCC","description":"Most comprehensive and authoritative source summarizing the research behind why CDR is necessary for meeting climate goals"},{"topic":"Science and innovation","solutions":"CCUS","source":"Carbon Capture","link":"#","type":"Textbook","level":5,"year":2012,"authors":"Jen Wilcox","description":"If you really want to know how carbon capture works, this is the place to start"},{"topic":"Science and innovation","solutions":"DAC","source":"Comparative review of Direct air capture technologies","link":"https://www.sciencedirect.com/science/article/pii/S1385894724008969","type":"Academic paper","level":5,"year":2024,"authors":"Houssam Bouaboula et al","description":"Technical comparison of different DAC approaches"},{"topic":"Science and innovation","solutions":"Durable","source":"Dataset on the adoption of historical technologies informs the scale-up of emerging CDR measures","link":"https://www.nature.com/articles/s43247-023-01056-1","type":"Academic paper","level":3,"year":2023,"authors":"Greg Nemet et al","description":"What it will take to scale technological CDR using historical analogs of other technology scale up efforts"},{"topic":"Science and innovation","solutions":"Durable","source":"The Applied Innovation Roadmap for CDR","link":"https://rmi.org/insight/the-applied-innovation-roadmap-for-cdr/","type":"Report","level":3,"year":2023,"authors":"RMI","description":"What R&D is needed to get a portfolio of solutions to 10+ Gt/year scale by 2050"},{"topic":"Science and innovation","solutions":"mCDR","source":"A Research Strategy for Ocean CDR and Sequestration","link":"https://www.nationalacademies.org/projects/DELS-OSB-20-02","type":"Report","level":4,"year":2019,"authors":"National Academies of Sciences","description":"Overview of mCDR approaches, and what research is needed to commercialize these solutions"},{"topic":"Science and innovation","solutions":"OAE","source":"A framework for techno-economic and lifecycle assessment in OAE","link":"#","type":"Academic paper","level":5,"year":2025,"authors":"Heriot Watt","description":"In-depth technoeconomics for OAE, as a model for how technoeconomics can be done for other CDR solutions"},{"topic":"Science and innovation","solutions":"OAE","source":"OAE Primer","link":"https://frontierclimate.com/assets/ocean-alkalinity-enhancement-primer.pdf","type":"White paper","level":2,"year":2025,"authors":"Frontier","description":"OAE 101, with links to additional sources for further reading"},{"topic":"Science and innovation","solutions":"Terrestrial","source":"Negative Emissions Technologies and Reliable Sequestration: A Research Agenda","link":"https://www.nationalacademies.org/projects/DELS-BASCPR-16-01","type":"Report","level":4,"year":2019,"authors":"National Academies of Sciences","description":"What R&D is needed to get a portfolio of solutions to Gt/year scale by 2050"},{"topic":"Policy","solutions":"All","source":"Carbon Capture Coalition Federal Policy Blueprint","link":"https://carboncapturecoalition.org/federal-policy-blueprint-2025/","type":"Report","level":1,"year":2025,"authors":"Carbon Capture Coalition","description":"US consensus position on federal policy changes to advance CCUS projects"},{"topic":"Policy","solutions":"All","source":"Carbon removal policy tracker","link":"https://carbon180.org/carbon-removal-policy-tracker/","type":"Database","level":1,"year":2025,"authors":"Carbon180","description":"Database of US federal policies related to removals"},{"topic":"Policy","solutions":"All","source":"Roads to Removals","link":"https://roads2removal.org","type":"Report","level":2,"year":2023,"authors":"Lawrence Livermore National Lab","description":"Spatially resolved exploration of carbon removal potential across the US"},{"topic":"Policy","solutions":"All","source":"US Department of Energy Carbon Removal Strategy","link":"#","type":"Report","level":2,"year":2025,"authors":"US Department of Energy","description":"What the Biden Administration was planning to do to advance carbon removal at the beginning of 2025"},{"topic":"Policy","solutions":"Durable","source":"Carbon Removal Alliance FY26 Appropriations Requests","link":"https://www.carbonremovalalliance.org/policy-work/fy26-appropriations-requests","type":"Report","level":1,"year":2025,"authors":"Carbon Removal Alliance","description":"What the US CDR industry thinks is possible for Congress to fund"},{"topic":"Policy","solutions":"Durable","source":"C-QuIP Database","link":"https://carbonremovalstandards.org/introducing-carbon-removal-quantification-integration-policy-database/","type":"Database","level":1,"year":2026,"authors":"Carbon Removal Standards Initiative","description":"Global policy database on embedded carbon removal"},{"topic":"Policy","solutions":"Durable","source":"Establishing Quality in Carbon Removal: A Roadmap for MMRV","link":"https://www.carbonremovalalliance.org/policy-work/establishing-quality-in-carbon-removal","type":"White paper","level":1,"year":2024,"authors":"Carbon Removal Alliance","description":"Overview of what it will take to advance MMRV"},{"topic":"Policy","solutions":"Durable","source":"What do we mean when we say we need to integrate CDR into industry?","link":"https://carbonremovalstandards.org/what-do-we-mean-when-we-say-we-need-to-integrate-cdr-into-industry/","type":"White paper","level":1,"year":2025,"authors":"Carbon Removal Standards Initiative","description":"Overview of what embedded CDR policy means"},{"topic":"Carbon markets","solutions":"All","source":"2026 State of the Voluntary Carbon Markets","link":"https://www.carbon-direct.com/voluntary-carbon-market/2026","type":"Report","level":1,"year":2026,"authors":"Carbon Direct","description":"What is the voluntary carbon market, and how does it relate to removals?"},{"topic":"Carbon markets","solutions":"All","source":"Article 6 of the Paris Agreement: A Practical Primer","link":"https://www.carbon-direct.com/research-and-reports/article-6-of-the-paris-agreement-a-practical-primer","type":"White paper","level":1,"year":2026,"authors":"Carbon Direct","description":"What is Article 6, and how does it related to removals?"},{"topic":"Carbon markets","solutions":"All","source":"CDR 2.0: Five Pillars of Successful Project Deployment","link":"#","type":"White paper","level":1,"year":2026,"authors":"Carbon Direct","description":"What will it take for CDR suppliers to scale in the near future?"},{"topic":"Carbon markets","solutions":"All","source":"CDR.FYI","link":"https://www.cdr.fyi","type":"Website","level":1,"year":2026,"authors":"CDR.FYI","description":"Who is buying CDR credits? Who is selling CDR credits?"},{"topic":"Carbon markets","solutions":"All","source":"Criteria for high quality carbon removal","link":"https://www.carbon-direct.com/criteria/2025-edition","type":"White paper","level":1,"year":2025,"authors":"Microsoft and Carbon Direct","description":"What does high-quality carbon removal purchasing look like?"},{"topic":"Carbon markets","solutions":"All","source":"Frontier CDR credit purchase offtake template","link":"https://frontierclimate.com/writing/offtake-agreement-template","type":"White paper","level":2,"year":2024,"authors":"Frontier","description":"How can a purchaser write a good CDR offtake contract?"},{"topic":"Carbon markets","solutions":"All","source":"The CDR Buyer's Guide","link":"https://www.cdr.fyi/resources/buyers-guide/","type":"White paper","level":1,"year":2026,"authors":"CDR.FYI","description":"How can an interested CDR purchaser get started with buying credits?"},{"topic":"Carbon markets","solutions":"All","source":"The Open Standard Carbon Removal Agreement","link":"https://www.cdr.fyi/resources/oscar","type":"White paper","level":2,"year":2026,"authors":"CDR.FYI","description":"How can a purchaser write a good CDR offtake contract?"},{"topic":"Carbon markets","solutions":"All","source":"World Bank State and Trends of Carbon Pricing","link":"https://www.worldbank.org/en/publication/state-and-trends-of-carbon-pricing","type":"Report","level":1,"year":2025,"authors":"World Bank","description":"Overview of the state of compliance carbon pricing mechanisms globally"},{"topic":"Carbon markets","solutions":"Biomass","source":"Frontier Biomass Sourcing Principles","link":"#","type":"White paper","level":2,"year":2024,"authors":"Frontier","description":"How to ensure biomass CDR projects deliver removals and avoid negative unintended consequences"},{"topic":"Carbon markets","solutions":"Durable","source":"Absolute Climate draft standard","link":"https://docs.absoluteclimate.com","type":"Technical document","level":5,"year":2026,"authors":"Absolute Climate","description":"Frontier of the MMRV conversation for removals"},{"topic":"Carbon markets","solutions":"Durable","source":"CDR Clean Energy Purchasing Principles","link":"#","type":"White paper","level":2,"year":2025,"authors":"Frontier","description":"How to source clean energy for CDR in ways that balance carbon removal and innovation"},{"topic":"Carbon markets","solutions":"Durable","source":"Primer on Carbon Dioxide Removal Credits","link":"#","type":"Report","level":2,"year":2024,"authors":"US Department of Energy","description":"Introduction to CDR credit markets"},{"topic":"Community benefits","solutions":"All","source":"Removing Forward: Centering Equity and Justice in a Carbon-Removing Future","link":"https://carbon180.org/wp-content/uploads/2024/01/Carbon180-RemovingForward.pdf","type":"White paper","level":1,"year":2021,"authors":"Carbon180","description":"Overview of carbon removal and environmental justice"},{"topic":"Community benefits","solutions":"All","source":"The politics of negative emissions technologies and decarbonization in rural communities","link":"#","type":"Academic paper","level":2,"year":2018,"authors":"Holly Buck","description":"Academic survey of politics of removal at local level"},{"topic":"Community benefits","solutions":"Durable","source":"Frontier community benefit plan template","link":"#","type":"White paper","level":1,"year":2023,"authors":"Frontier","description":"How to incorporate community benefits into project development and CDR offtakes"},{"topic":"Investment","solutions":"All","source":"Climatetech investment trends 2025","link":"#","type":"Report","level":1,"year":2026,"authors":"Sightline Climate","description":"How carbon removal fits into broader cleantech investment trends"}];

const ORGS = [{"name":"American University Institute for Responsible Carbon Removal","scope":"All","type":"Academia","link":"https://www.american.edu/sis/centers/carbon-removal/","geography":""},{"name":"Arizona State University New Carbon Economy Consortium","scope":"All","type":"Academia","link":"https://www.newcarboneconomy.org","geography":""},{"name":"Columbia University Center on Global Energy Policy","scope":"All","type":"Academia","link":"https://www.energypolicy.columbia.edu","geography":""},{"name":"Heriot Watt University","scope":"All","type":"Academia","link":"#","geography":""},{"name":"Imperial College","scope":"All","type":"Academia","link":"#","geography":""},{"name":"Oxford University Net Zero Initiative","scope":"All","type":"Academia","link":"https://netzeroclimate.org/about-us/","geography":""},{"name":"Stanford University Greenhouse Gas Removal Initiative","scope":"All","type":"Academia","link":"https://sustainability-accelerator.stanford.edu","geography":""},{"name":"UCLA Institute for Carbon Management","scope":"All","type":"Academia","link":"https://icm.ucla.edu","geography":""},{"name":"University of Pennsylvania Kleinman Center","scope":"All","type":"Academia","link":"https://kleinmanenergy.upenn.edu/","geography":""},{"name":"University of Virginia Climate Restoration Initiative","scope":"All","type":"Academia","link":"https://environment.virginia.edu/restore","geography":""},{"name":"Yale Center for Natural Carbon Capture","scope":"All","type":"Academia","link":"https://naturalcarboncapture.yale.edu","geography":""},{"name":"Beyond Alliance","scope":"Carbon credits","type":"Corporate coalition","link":"https://beyond-alliance.org","geography":"Global"},{"name":"Symbiosis Coalition","scope":"Land","type":"Corporate coalition","link":"https://www.symbiosiscoalition.org","geography":"Global"},{"name":"City CDR Initiative","scope":"All","type":"International partnership","link":"https://carbonsinkcities.com","geography":"Global"},{"name":"Group of Negative Emitters","scope":"All","type":"International partnership","link":"#","geography":"Global"},{"name":"Mission Innovation","scope":"Durable","type":"International partnership","link":"https://www.mission-innovation.net/missions/carbon-dioxide-removal/","geography":"Global"},{"name":"Bellona","scope":"Durable","type":"Think tank","link":"https://bellona.org/publications-and-archive","geography":"Europe"},{"name":"Bipartisan Policy Center","scope":"Durable","type":"Think tank","link":"https://bipartisanpolicy.org/policy-area/energy/carbon-management/","geography":"US"},{"name":"Carbon Gap","scope":"Durable","type":"Think tank","link":"https://carbongap.org/resources/","geography":"Europe"},{"name":"Carbon Plan","scope":"All","type":"Think tank","link":"https://carbonplan.org","geography":"US"},{"name":"Carbon Removal Canada","scope":"Durable","type":"Think tank","link":"https://carbonremoval.ca","geography":"Canada"},{"name":"Carbon Removal Standards Initiative","scope":"Durable","type":"Think tank","link":"#","geography":"Global"},{"name":"Carbon to Sea","scope":"OAE","type":"Think tank","link":"https://www.carbontosea.org","geography":"Global"},{"name":"Carbon180","scope":"All","type":"Think tank","link":"https://carbon180.org/search","geography":"US"},{"name":"Cascade Climate","scope":"ERW","type":"Think tank","link":"https://cascadeclimate.org","geography":"Global"},{"name":"CCS Brazil","scope":"CCUS","type":"Think tank","link":"https://www.ccsbr.com.br","geography":"Brazil"},{"name":"CDR.FYI","scope":"Carbon credits","type":"Think tank","link":"https://www.cdr.fyi","geography":"Global"},{"name":"Clean Air Task Force","scope":"CCUS","type":"Think tank","link":"https://www.catf.us/carbon-capture/","geography":"Global"},{"name":"ClearPath","scope":"CCUS","type":"Think tank","link":"https://clearpath.org/reports/","geography":"US"},{"name":"Climate Recovery Institute","scope":"Durable","type":"Think tank","link":"https://climaterecoveryinstitute.org","geography":"Australia"},{"name":"Ecologic Institute","scope":"All","type":"Think tank","link":"https://www.ecologic.eu/","geography":"Europe"},{"name":"Environmental Defense Fund","scope":"All","type":"Think tank","link":"https://www.edf.org/our-work","geography":"Global"},{"name":"Green Finance Institute","scope":"Carbon markets","type":"Think tank","link":"https://www.greenfinanceinstitute.com/programmes/carbon-dioxide-removals/","geography":"UK"},{"name":"Hourglass Climate","scope":"OAE","type":"Think tank","link":"https://hourglassclimate.org","geography":"US"},{"name":"International Energy Agency","scope":"Durable","type":"Think tank","link":"https://www.iea.org/energy-system/carbon-capture-utilisation-and-storage/direct-air-capture","geography":"Global"},{"name":"National Wildlife Federation","scope":"All","type":"Think tank","link":"#","geography":"US"},{"name":"Ocean Visions","scope":"mCDR","type":"Think tank","link":"https://oceanvisions.org/publications/","geography":"Global"},{"name":"PRIME Coalition","scope":"Investment","type":"Think tank","link":"https://www.primecoalition.org/research","geography":"Global"},{"name":"Project 2030","scope":"Durable","type":"Think tank","link":"https://project2030.blog","geography":"California"},{"name":"Rethinking Removals","scope":"Durable","type":"Think tank","link":"https://rethinkingremovals.org/focus-areas/","geography":"Global"},{"name":"Rocky Mountain Institute","scope":"Durable","type":"Think tank","link":"https://rmi.org/carbon-dioxide-removal/","geography":"Global"},{"name":"State of CDR","scope":"All","type":"Think tank","link":"https://www.stateofcdr.org","geography":"Global"},{"name":"The Nature Conservancy","scope":"All","type":"Think tank","link":"#","geography":"Global"},{"name":"Third Way","scope":"Durable","type":"Think tank","link":"https://www.thirdway.org/issue/climate-and-energy","geography":"Global"},{"name":"World Resources Institute","scope":"Durable","type":"Think tank","link":"https://www.wri.org/research","geography":"Global"},{"name":"ZERO","scope":"Durable","type":"Think tank","link":"https://zero.no","geography":"Norway"},{"name":"AFEN","scope":"Durable","type":"Trade Association","link":"https://afen.fr/en/ressources-and-events/","geography":"France"},{"name":"Carbon Business Council","scope":"All","type":"Trade Association","link":"https://www.carbonbusinesscouncil.org/resources","geography":"Global"},{"name":"Carbon Capture and Storage Association","scope":"CCUS","type":"Trade Association","link":"https://www.ccsassociation.org/resources/","geography":"UK"},{"name":"Carbon Capture Coalition","scope":"CCUS","type":"Trade Association","link":"https://carboncapturecoalition.org/resources/","geography":"US"},{"name":"Carbon Removal Alliance","scope":"Durable","type":"Trade Association","link":"https://www.carbonremovalalliance.org/policy-work/","geography":"US"},{"name":"Carbon Removal India Alliance","scope":"Durable","type":"Trade Association","link":"https://www.cria.earth","geography":"India"},{"name":"Carbon Removal Kenya","scope":"All","type":"Trade Association","link":"https://carbonremovalkenya.com","geography":"Kenya"},{"name":"DVNE","scope":"Durable","type":"Trade Association","link":"https://dvne.org/en/news-insights/","geography":"Germany"},{"name":"Global CCS Institute","scope":"CCUS","type":"Trade Association","link":"https://www.globalccsinstitute.com/global-status-of-ccs/","geography":"Global"},{"name":"Japan CDR Coalition","scope":"Durable","type":"Trade Association","link":"#","geography":"Japan"},{"name":"Negative Emissions Platform","scope":"Durable","type":"Trade Association","link":"https://www.negative-emissions.org/reports-negative-emissions-platform","geography":"Europe"},{"name":"Nordic CDR Association","scope":"Durable","type":"Trade Association","link":"https://nordiccarbon.org/resources/","geography":"Nordics"}];

const ROADMAPS = [{"geography":"US","title":"Roads to Removals","link":"https://roads2removal.org","year":2023,"org":"Lawrence Livermore National Lab"},{"geography":"US","title":"US Department of Energy Carbon Removal Strategy","link":"#","year":2025,"org":"US Department of Energy"},{"geography":"Canada","title":"The Billion Tonne Blueprint","link":"https://carbonremoval.ca/reports-resources/","year":2026,"org":"Carbon Removal Canada"},{"geography":"Australia","title":"Australian Carbon Dioxide Removal Blueprint","link":"#","year":2025,"org":"CSIRO"},{"geography":"Europe","title":"Envisioning a carbon removal strategy for Europe","link":"https://carbongap.org/eu-cdr-strategy/","year":2024,"org":"Carbon Gap"},{"geography":"Europe","title":"European carbon removal policy tracker","link":"https://tracker.carbongap.org/regional-analyses/","year":2025,"org":"Carbon Gap"},{"geography":"UK","title":"Greenhouse gas removals (GGRs): independent review","link":"https://www.gov.uk/government/publications/greenhouse-gas-removals-ggrs-independent-review","year":2025,"org":"UK DESNZ"},{"geography":"Nordics","title":"The Nordics as Europe\u2019s Carbon Removal Hub","link":"https://nordiccarbon.org/ncra_resource/the-nordics-as-europes-carbon-removal-hub-a-blueprint-for-nordic-action/","year":2025,"org":"Nordic Carbon Removal Association"}];

const TOPICS = ["All","Overview","Science and innovation","Policy","Carbon markets","Community benefits","Investment"];
const ORG_TYPES = ["All","Academia","Corporate coalition","International partnership","Think tank","Trade Association"];
const PUB_TYPES = ["All","Book","Report","Database","Textbook","Academic paper","White paper","Website","Technical document"];

const TYPE_COLORS = {
  "Book": { bg: "#3b6b1e", text: "#fff" },
  "Report": { bg: "#e8e2d4", text: "#5a5340" },
  "Database": { bg: "#c4d8f0", text: "#2a4a6b" },
  "Textbook": { bg: "#3b6b1e", text: "#fff" },
  "Academic paper": { bg: "#f0e4c8", text: "#6b5a2a" },
  "White paper": { bg: "#e0ddd4", text: "#5a5647" },
  "Website": { bg: "#d4e8d4", text: "#2d5016" },
  "Technical document": { bg: "#e8d4d4", text: "#6b2a2a" },
};

function LevelDots({ level }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px", alignItems: "center" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{
          width: 8, height: 8, borderRadius: "50%",
          background: i <= level ? "#3b6b1e" : "#e0ddd4",
          transition: "background 0.2s"
        }} />
      ))}
    </span>
  );
}

function Pill({ children, active, onClick }) {
  return (
    <button onClick={onClick} className="pill" style={{
      padding: "7px 16px", borderRadius: "100px", border: "none",
      background: active ? "#1a1a1a" : "transparent",
      color: active ? "#faf8f4" : "#7a7668",
      fontSize: "13px", fontFamily: "'DM Sans', sans-serif",
      cursor: "pointer", fontWeight: active ? 600 : 400,
      transition: "all 0.2s",
      outline: active ? "none" : "1px solid #d4d0c8",
      whiteSpace: "nowrap", flexShrink: 0,
    }}>
      {children}
    </button>
  );
}

function TypeTag({ type }) {
  const c = TYPE_COLORS[type] || { bg: "#e0ddd4", text: "#5a5647" };
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
      color: c.text, background: c.bg, padding: "4px 12px", borderRadius: 6,
      display: "inline-block",
    }}>{type}</span>
  );
}

export default function App() {
  const [page, setPage] = useState("about");
  const [topicFilter, setTopicFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [orgTypeFilter, setOrgTypeFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const filteredPubs = PUBLICATIONS.filter(p =>
    (topicFilter === "All" || p.topic === topicFilter) &&
    (typeFilter === "All" || p.type === typeFilter) &&
    (searchQuery === "" || p.source.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()) || p.authors.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const filteredOrgs = ORGS.filter(o =>
    (orgTypeFilter === "All" || o.type === orgTypeFilter) &&
    (searchQuery === "" || o.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const topicCounts = {};
  TOPICS.forEach(t => { topicCounts[t] = t === "All" ? PUBLICATIONS.length : PUBLICATIONS.filter(p => p.topic === t).length; });

  const navItems = [
    { key: "about", label: "About" },
    { key: "publications", label: "Publications" },
    { key: "organizations", label: "Organizations" },
    { key: "roadmaps", label: "Roadmaps" },
  ];

  const navigate = (key) => {
    setPage(key);
    setSearchQuery("");
    setMenuOpen(false);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif", background: "#faf8f4", minHeight: "100dvh",
      color: "#2a2822", opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(250,248,244,0.88)", backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid #e4e0d7",
      }}>
        <div className="nav-container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, cursor: "pointer" }} onClick={() => navigate("about")}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700,
              color: "#1a1a1a", letterSpacing: "-0.02em",
            }}>
              Carbon Removal 101
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            {navItems.map(item => (
              <button key={item.key} onClick={() => navigate(item.key)} className="nav-btn" style={{
                padding: "7px 16px", background: page === item.key ? "#1a1a1a" : "none",
                border: "none", borderRadius: 100,
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                color: page === item.key ? "#faf8f4" : "#8a8577",
                fontWeight: page === item.key ? 500 : 400,
                cursor: "pointer", transition: "all 0.2s",
              }}>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={{
              display: "block", width: 20, height: 2, background: "#1a1a1a",
              borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }} />
            <span style={{
              display: "block", width: 20, height: 2, background: "#1a1a1a",
              borderRadius: 2, transition: "all 0.3s", marginTop: 5,
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 20, height: 2, background: "#1a1a1a",
              borderRadius: 2, transition: "all 0.3s", marginTop: 5,
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button key={item.key} onClick={() => navigate(item.key)} style={{
                display: "block", width: "100%", padding: "14px 24px",
                background: page === item.key ? "#f0ede6" : "transparent",
                border: "none", textAlign: "left",
                fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                color: page === item.key ? "#1a1a1a" : "#8a8577",
                fontWeight: page === item.key ? 600 : 400,
                cursor: "pointer", transition: "background 0.15s",
              }}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="main-content">

        {/* ===== ABOUT ===== */}
        {page === "about" && (
          <div style={{ animation: "fadeUp 0.5s ease both" }}>
            {/* Hero */}
            <section className="hero">
              <div style={{
                position: "absolute", top: -60, right: -40, width: 320, height: 320,
                borderRadius: "50%", background: "radial-gradient(circle, #3b6b1e22 0%, transparent 70%)",
              }} />
              <div style={{
                position: "absolute", bottom: -80, left: 100, width: 400, height: 400,
                borderRadius: "50%", background: "radial-gradient(circle, #3b6b1e15 0%, transparent 70%)",
              }} />
              <div style={{ position: "relative", maxWidth: 640 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(59,107,30,0.2)", padding: "6px 16px", borderRadius: 100,
                  fontSize: 12, color: "#7cc75e", fontWeight: 500, marginBottom: 28,
                  border: "1px solid rgba(59,107,30,0.3)",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7cc75e" }} />
                  Open educational resource
                </div>
                <h1 className="hero-title">
                  A curated guide to carbon removal.
                </h1>
                <p className="hero-subtitle">
                  The publications, organizations, and regional roadmaps you need to understand carbon dioxide removal — from beginner overviews to advanced research.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => navigate("publications")} className="btn-primary">
                    Explore resources
                  </button>
                  <button onClick={() => window.open("https://forms.gle/Cf82fBWwGP6Swfyv9")} className="btn-secondary">
                    Suggest a resource
                  </button>
                </div>
              </div>
            </section>

            {/* Stats */}
            <div className="stats-grid">
              {[
                { n: "40+", label: "Publications", sub: "books, reports & more" },
                { n: "58", label: "Organizations", sub: "across 5 categories" },
                { n: "8", label: "Roadmaps", sub: "regional strategies" },
                { n: "6", label: "Topics", sub: "policy to investment" },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 800,
                    color: "#1a1a1a", letterSpacing: "-0.03em",
                    fontVariantNumeric: "tabular-nums",
                  }}>{s.n}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#2a2822", marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#a09e94", marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Browse by module */}
            <div style={{ marginTop: 56 }}>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 700,
                letterSpacing: "-0.02em", marginBottom: 20,
              }}>Browse by module</h2>
              <div className="modules-grid">
                {["Overview","Science and innovation","Policy","Carbon markets","Community benefits","Investment"].map((t, i) => (
                  <button key={t} onClick={() => { setTopicFilter(t); navigate("publications"); }}
                    className="module-card"
                  >
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 48, fontWeight: 800,
                      color: "#f0ede6", position: "absolute", top: 8, right: 16, lineHeight: 1,
                    }}>{String(i+1).padStart(2,"0")}</div>
                    <div style={{
                      fontSize: 17, fontWeight: 600, color: "#1a1a1a", position: "relative",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>{t}</div>
                    <div style={{ fontSize: 13, color: "#a09e94", marginTop: 6, position: "relative" }}>
                      {topicCounts[t]} resources
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== PUBLICATIONS ===== */}
        {page === "publications" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{ paddingTop: 40, marginBottom: 24 }}>
              <h1 className="page-title">Publications</h1>
              <p style={{ color: "#8a8577", fontSize: 15, marginTop: 8 }}>
                {filteredPubs.length} resources — books, reports, databases, and more.
              </p>
            </div>

            {/* Search */}
            <div style={{ marginBottom: 16 }}>
              <input
                type="text" placeholder="Search by title, author, or keyword..."
                value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Topic filters */}
            <div className="filter-row">
              <span className="filter-label">Topic</span>
              {TOPICS.map(t => <Pill key={t} active={topicFilter === t} onClick={() => setTopicFilter(t)}>{t === "All" ? `All (${PUBLICATIONS.length})` : t}</Pill>)}
            </div>
            <div className="filter-row" style={{ marginBottom: 32 }}>
              <span className="filter-label">Type</span>
              {PUB_TYPES.map(t => <Pill key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>{t}</Pill>)}
            </div>

            {/* Resource list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {filteredPubs.map((p, i) => (
                <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="pub-card">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                      <TypeTag type={p.type} />
                      <span style={{ fontSize: 12, color: "#a09e94", fontWeight: 500 }}>{p.year}</span>
                      <span style={{ fontSize: 12, color: "#c4c0b8" }}>·</span>
                      <span style={{ fontSize: 12, color: "#a09e94" }}>{p.topic}</span>
                      {p.solutions !== "All" && (
                        <span style={{ fontSize: 11, color: "#8a8577", background: "#f5f3ee", padding: "2px 8px", borderRadius: 4 }}>{p.solutions}</span>
                      )}
                    </div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 18, fontWeight: 600, color: "#1a1a1a", marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}>{p.source}</div>
                    <div style={{ fontSize: 14, color: "#6a6658", lineHeight: 1.6, fontWeight: 300 }}>{p.description}</div>
                    <div style={{ fontSize: 13, color: "#a09e94", marginTop: 8, fontWeight: 400 }}>{p.authors}</div>
                  </div>
                  <div className="pub-difficulty">
                    <div style={{ fontSize: 10, color: "#a09e94", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Difficulty</div>
                    <LevelDots level={p.level} />
                  </div>
                </a>
              ))}
              {filteredPubs.length === 0 && (
                <div style={{ padding: 40, textAlign: "center", color: "#a09e94", fontSize: 15 }}>
                  No resources match your current filters.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== ORGANIZATIONS ===== */}
        {page === "organizations" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{ paddingTop: 40, marginBottom: 24 }}>
              <h1 className="page-title">Organizations</h1>
              <p style={{ color: "#8a8577", fontSize: 15, marginTop: 8 }}>
                {filteredOrgs.length} organizations — academic institutions, think tanks, trade associations, and coalitions.
              </p>
            </div>

            <div style={{ marginBottom: 16 }}>
              <input
                type="text" placeholder="Search organizations..."
                value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-row" style={{ marginBottom: 28 }}>
              <span className="filter-label">Type</span>
              {ORG_TYPES.map(t => <Pill key={t} active={orgTypeFilter === t} onClick={() => setOrgTypeFilter(t)}>{t}</Pill>)}
            </div>

            <div className="orgs-grid">
              {filteredOrgs.map((o, i) => (
                <a href={o.link} target="_blank" rel="noopener noreferrer" key={i} className="org-card">
                  <div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 10,
                    }}>{o.name}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, background: "#f0ede6", padding: "3px 10px", borderRadius: 6, color: "#6a6658", fontWeight: 500 }}>{o.type}</span>
                      <span style={{ fontSize: 11, background: "#f0ede6", padding: "3px 10px", borderRadius: 6, color: "#6a6658" }}>{o.scope}</span>
                      {o.geography && <span style={{ fontSize: 11, background: "#e8f0e2", padding: "3px 10px", borderRadius: 6, color: "#3b6b1e" }}>{o.geography}</span>}
                    </div>
                  </div>
                  <span style={{ color: "#c4c0b8", fontSize: 18, marginTop: 2, flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ===== ROADMAPS ===== */}
        {page === "roadmaps" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{ paddingTop: 40, marginBottom: 28 }}>
              <h1 className="page-title">Regional roadmaps</h1>
              <p style={{ color: "#8a8577", fontSize: 15, marginTop: 8 }}>
                Country and region-specific strategies for scaling carbon removal.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ROADMAPS.map((r, i) => (
                <a href={r.link} target="_blank" rel="noopener noreferrer" key={i} className="roadmap-card">
                  <div className="roadmap-geo">
                    {r.geography}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 17, fontWeight: 600, color: "#1a1a1a",
                    }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "#a09e94", marginTop: 4 }}>{r.org} · {r.year}</div>
                  </div>
                  <span className="roadmap-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#a09e94" }}>
            <strong style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#6a6658" }}>Carbon Removal 101</strong> — An open educational resource
          </span>
          <a href="https://forms.gle/Cf82fBWwGP6Swfyv9" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: "#3b6b1e", textDecoration: "none", fontWeight: 600 }}>
            Submit a suggestion →
          </a>
        </div>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; }
        html { scroll-behavior: smooth; }

        /* Focus states */
        :focus-visible {
          outline: 2px solid #3b6b1e;
          outline-offset: 2px;
        }
        button:focus:not(:focus-visible), a:focus:not(:focus-visible) {
          outline: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        input:focus { border-color: #3b6b1e !important; box-shadow: 0 0 0 3px rgba(59,107,30,0.08) !important; }

        /* NAV */
        .nav-container {
          max-width: 1140px; margin: 0 auto; padding: 0 36px;
          display: flex; align-items: center; justify-content: space-between;
          height: 60px;
        }
        .desktop-nav { display: flex; gap: 2px; align-items: center; }
        .hamburger { display: none; background: none; border: none; padding: 8px; cursor: pointer; }
        .mobile-menu { display: none; }
        .nav-btn:active { transform: scale(0.96); }

        /* MAIN */
        .main-content { max-width: 1140px; margin: 0 auto; padding: 0 36px 100px; }

        /* HERO */
        .hero {
          background: #1a1a1a; border-radius: 24px; padding: 72px 60px;
          margin-top: 32px; position: relative; overflow: hidden;
        }
        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 56px; font-weight: 800;
          line-height: 1.05; margin: 0; color: #fff; letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #999; margin-top: 24px;
          font-weight: 300; max-width: 520px;
        }
        .hero-buttons { display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap; }
        .btn-primary {
          padding: 14px 32px; background: #3b6b1e; color: #fff;
          border: none; border-radius: 100px; font-size: 15px;
          font-family: 'DM Sans', sans-serif; font-weight: 600;
          cursor: pointer; transition: transform 0.15s, background 0.2s;
        }
        .btn-primary:hover { background: #4a7d28; }
        .btn-primary:active { transform: scale(0.97); }
        .btn-secondary {
          padding: 14px 32px; background: transparent; color: #999;
          border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; font-size: 15px;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          cursor: pointer; transition: border-color 0.2s, color 0.2s;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.35); color: #ccc; }
        .btn-secondary:active { transform: scale(0.97); }

        /* STATS */
        .stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px;
        }
        .stat-card {
          background: #fff; border-radius: 16px; padding: 28px 24px;
          border: 1px solid #e8e4dc;
        }

        /* MODULES */
        .modules-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        .module-card {
          padding: 28px 24px; background: #fff; border: 1px solid #e8e4dc;
          border-radius: 16px; text-align: left; cursor: pointer;
          font-family: 'DM Sans', sans-serif; transition: all 0.2s;
          position: relative; overflow: hidden;
        }
        .module-card:hover {
          border-color: #3b6b1e; transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .module-card:active { transform: translateY(-1px); }

        /* PAGE TITLE */
        .page-title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 40px; font-weight: 800;
          margin: 0; letter-spacing: -0.03em;
        }

        /* SEARCH */
        .search-input {
          width: 100%; padding: 13px 18px; border-radius: 12px;
          border: 1px solid #e4e0d7; background: #fff;
          font-size: 14px; font-family: 'DM Sans', sans-serif; color: #2a2822;
          outline: none;
        }

        /* FILTERS */
        .filter-row {
          display: flex; gap: 8px; flex-wrap: nowrap; margin-bottom: 8px;
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          scrollbar-width: none; padding-bottom: 4px;
        }
        .filter-row::-webkit-scrollbar { display: none; }
        .filter-label {
          font-size: 11px; color: #a09e94; align-self: center; margin-right: 2px;
          text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;
          flex-shrink: 0;
        }

        /* PUBLICATION CARDS */
        .pub-card {
          background: #fff; padding: 24px 28px; text-decoration: none;
          border-radius: 14px; border: 1px solid #e8e4dc;
          display: grid; grid-template-columns: 1fr 90px; gap: 20px;
          cursor: pointer; transition: all 0.15s; color: inherit;
        }
        .pub-card:hover {
          border-color: #3b6b1e; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
        }
        .pub-card:active { transform: translateY(0); }
        .pub-difficulty {
          display: flex; flex-direction: column; align-items: flex-end;
          justify-content: center; gap: 8px; min-width: 90px;
        }

        /* ORG CARDS */
        .orgs-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
        }
        .org-card {
          background: #fff; border: 1px solid #e8e4dc; border-radius: 14px;
          padding: 22px 24px; text-decoration: none; transition: all 0.2s;
          cursor: pointer; display: flex; justify-content: space-between;
          align-items: flex-start; color: inherit;
        }
        .org-card:hover {
          border-color: #3b6b1e; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
        }
        .org-card:active { transform: translateY(0); }

        /* ROADMAP CARDS */
        .roadmap-card {
          background: #fff; border: 1px solid #e8e4dc; border-radius: 14px;
          padding: 28px 32px; text-decoration: none;
          display: grid; grid-template-columns: 100px 1fr auto; gap: 24px;
          align-items: center; transition: all 0.2s; cursor: pointer; color: inherit;
        }
        .roadmap-card:hover {
          border-color: #3b6b1e; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
        }
        .roadmap-card:active { transform: translateY(0); }
        .roadmap-geo {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 700;
          color: #3b6b1e; background: #e8f0e2; padding: 8px 0; border-radius: 8px;
          text-align: center; letter-spacing: 0.02em;
        }
        .roadmap-arrow { color: #c4c0b8; font-size: 20px; flex-shrink: 0; }

        /* FOOTER */
        .site-footer {
          border-top: 1px solid #e8e4dc; padding: 28px 36px;
          max-width: 1140px; margin: 0 auto;
        }

        /* PILL HOVER */
        .pill:hover { opacity: 0.85; }
        .pill:active { transform: scale(0.96); }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .modules-grid { grid-template-columns: repeat(2, 1fr); }
          .orgs-grid { grid-template-columns: 1fr; }
          .hero { padding: 56px 40px; }
          .hero-title { font-size: 44px; }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 640px) {
          .nav-container { padding: 0 20px; }
          .desktop-nav { display: none; }
          .hamburger { display: block; }
          .mobile-menu {
            display: flex; flex-direction: column;
            border-top: 1px solid #e8e4dc;
            padding: 8px 0;
          }

          .main-content { padding: 0 20px 80px; }
          .site-footer { padding: 24px 20px; }

          .hero { padding: 40px 24px; border-radius: 16px; margin-top: 20px; }
          .hero-title { font-size: 32px; line-height: 1.1; }
          .hero-subtitle { font-size: 15px; margin-top: 16px; }
          .hero-buttons { margin-top: 28px; }
          .btn-primary, .btn-secondary { padding: 12px 24px; font-size: 14px; width: 100%; text-align: center; }

          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 16px; }
          .stat-card { padding: 20px 16px; }
          .stat-card > div:first-child { font-size: 28px !important; }

          .modules-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .module-card { padding: 20px 16px; }

          .page-title { font-size: 28px; }

          .search-input { font-size: 16px; padding: 12px 16px; }

          .filter-row { gap: 6px; }

          .pub-card {
            grid-template-columns: 1fr; gap: 12px; padding: 20px;
          }
          .pub-difficulty {
            flex-direction: row; align-items: center; justify-content: flex-start;
            gap: 10px; min-width: 0;
          }

          .org-card { padding: 18px 20px; }

          .roadmap-card {
            grid-template-columns: 1fr; gap: 12px; padding: 20px;
          }
          .roadmap-geo { width: fit-content; padding: 6px 16px; }
          .roadmap-arrow { display: none; }
        }

        /* ===== SMALL MOBILE ===== */
        @media (max-width: 380px) {
          .hero-title { font-size: 28px; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .modules-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
