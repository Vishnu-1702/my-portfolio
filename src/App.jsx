import React, { useState, useEffect } from 'react';

const Icons = {
  Menu: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Server: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  ),
  Database: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 4.343l-.707-.707M12 7a5 5 0 110 10 5 5 0 010-10z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Network: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4" />
    </svg>
  )
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNode, setSelectedNode] = useState('hypervisor');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nodeDetails = {
    hypervisor: {
      title: "Hypervisor Graphics (GPU) Pass-through",
      sub: "ESXi & OpenStack Systems",
      desc: "Architecting logical device orchestration mappings to bypass hypervisor compute structures, mounting bare-metal graphics hardware directly to high-density target virtual layers.",
      tech: ["VMware ESXi", "OpenStack Nova", "PCI-Passthrough", "Python Systems Engine"],
      metrics: ["vGPU Profiling Engines", "40% latency reduction in VM runtime allocations", "Deterministic resource boundaries"]
    },
    bmaas: {
      title: "Metal as a Service (MAAS)",
      sub: "Automated Bare-metal Compute Pipelines",
      desc: "Developing low-level execution pipelines that automate BIOS, raid arrays, and compute installations over IPMI structures, exposing raw bare hardware instantly as modular endpoints.",
      tech: ["Canonical MAAS", "Redfish API", "IPMI Hardware Protocols", "Python Orchestration"],
      metrics: ["Native physical execution profiles", "Under 10-minute automated bootstrap loops", "Scalable out-of-band automation controllers"]
    },
    nas: {
      title: "Spring Boot Microservices & NAS Orchestration",
      sub: "Multi-tenant storage fabric virtualization",
      desc: "Engineering highly-concurrent Spring Boot microservices that process distributed transaction flows. Programmatically constructs NetApp storage units and maps them as isolated, active datastores.",
      tech: ["Java Spring Boot", "Spring Cloud", "NetApp ONTAP APIs", "vCenter vSphere API"],
      metrics: ["Asynchronous storage provisioning", "Distributed deadlock prevention mechanisms", "Zero-trust network datastore isolation"]
    }
  };

  const projects = [
    {
      id: 1,
      category: 'storage',
      title: "Spring Boot Distributed storage controller",
      tag: "Microservices Architecture",
      desc: "Designed and implemented resilient, asynchronous Spring Boot microservices that decouple underlying physical volume allocations from hypervisor runtimes. Engineered concurrent transactional safety maps for multi-tenant virtual environments.",
      bullets: [
        "Leveraged Spring Boot reactive patterns and distributed locks to prevent data path race conditions.",
        "Implemented resilient circuit breaker loops to handle upstream virtualization manager dropouts smoothly."
      ]
    },
    {
      id: 2,
      category: 'compute',
      title: "ESXi GPU Passthrough Orchestrator",
      tag: "Compute & Virtualization",
      desc: "Built background Python system handlers to query physical ESXi host hardware. Dynamically registers PCI physical devices for GPU virtualization parameters.",
      bullets: [
        "Enabled multi-tenant virtualization clusters to share dense GPU pools cleanly with precise QoS rules.",
        "Integrated dynamic fallback configurations if high-demand physical resources are exhausted."
      ]
    },
    {
      id: 3,
      category: 'bmaas',
      title: "MAAS Baremetal GPU Provisioning",
      tag: "Bare-Metal as a Service",
      desc: "Implemented clean flow hooks directly engaging with MAAS power commands to boot and image raw computing towers remotely with high-grade operating systems.",
      bullets: [
        "Automated RAID configuration steps via vendor hardware APIs prior to provisioning.",
        "Integrated real-time PXE logging into centralized web control terminals."
      ]
    },
    {
      id: 4,
      category: 'storage',
      title: "NetApp VMware Datastore Onboarder",
      tag: "Storage Automation",
      desc: "Developed backend integrations that map storage endpoints cleanly onto vCenter clusters, resolving host file systems instantly with high availability paths.",
      bullets: [
        "Automated multi-path configurations (MPIO) for fail-safe physical volume connections.",
        "Significantly reduced storage manual overhead pipelines down to API requests."
      ]
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className={`${darkMode ? 'dark bg-black text-zinc-100' : 'bg-white text-zinc-900'} min-h-screen transition-colors duration-300 font-sans antialiased`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 py-3.5' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-sm font-bold tracking-widest text-zinc-900 dark:text-white uppercase">
              VISHNU<span className="text-zinc-400 dark:text-zinc-500 font-medium">.KUMAR</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Architecture</a>
              <a href="#skills" className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Core Tech</a>
              <a href="#experience" className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#education" className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Education</a>
              
              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-1 rounded text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Icons.Sun /> : <Icons.Moon />}
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {darkMode ? <Icons.Sun /> : <Icons.Moon />}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900">
            <div className="px-4 py-4 space-y-2">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-wider font-semibold py-2">Architecture</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-wider font-semibold py-2">Core Tech</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-wider font-semibold py-2">Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-wider font-semibold py-2">Projects</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-wider font-semibold py-2">Education</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6">
            
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 font-bold">
              Software Developer
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-none">
              Vishnu Kumar V K
            </h1>
            
            <p className="text-lg sm:text-xl font-normal text-zinc-400 dark:text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Cloud Systems & Platform Orchestration Specialist
            </p>
            
            <div className="h-px w-12 bg-zinc-200 dark:bg-zinc-850 mx-auto my-6" />
            
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Synthesizing three years of core platform contribution within the Vayu Cloud ecosystem. Specializing in the engineering of decoupled Spring Boot microservices, high-performance API structures, and bare-metal orchestration layers that programmatically abstract physical infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-5 py-2.5 bg-zinc-955 hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-105 text-white dark:text-black text-xs uppercase tracking-wider font-bold rounded transition-colors"
              >
                View System Contributions
              </a>
              <a 
                href="https://www.linkedin.com/in/vishnu-kumar-v-k-6454ab260/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-950 text-xs uppercase tracking-wider font-bold rounded transition-colors"
              >
                <Icons.LinkedIn /> LinkedIn Profile
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-955/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Integrated Cloud System Architecture
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-455 leading-relaxed max-w-xl mx-auto">
              Architecting deterministic systems and microservices that bridge modern cloud controllers directly with enterprise storage fabrics, high-density physical compute pools, and hypervisor planes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Architecture Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
              
              {/* ESXi Hypervisor Node */}
              <button 
                onClick={() => setSelectedNode('hypervisor')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedNode === 'hypervisor'
                    ? 'bg-white dark:bg-zinc-900 border-zinc-955 dark:border-white shadow-sm' 
                    : 'bg-transparent border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded ${selectedNode === 'hypervisor' ? 'text-zinc-955 dark:text-white' : 'text-zinc-400'}`}>
                    <Icons.Cpu />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-white">Virtual Compute Plane</h3>
                    <p className="text-[11px] text-zinc-550 dark:text-zinc-400">ESXi Hypervisor & GPU Slicing</p>
                  </div>
                </div>
              </button>

              {/* Bare-metal MAAS Node */}
              <button 
                onClick={() => setSelectedNode('bmaas')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedNode === 'bmaas'
                    ? 'bg-white dark:bg-zinc-900 border-zinc-955 dark:border-white shadow-sm' 
                    : 'bg-transparent border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded ${selectedNode === 'bmaas' ? 'text-zinc-955 dark:text-white' : 'text-zinc-400'}`}>
                    <Icons.Server />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-white">Bare-Metal as a Service</h3>
                    <p className="text-[11px] text-zinc-550 dark:text-zinc-400">MAAS Hardware Provisioning Flows</p>
                  </div>
                </div>
              </button>

              {/* NetApp Datastore Node */}
              <button 
                onClick={() => setSelectedNode('nas')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedNode === 'nas'
                    ? 'bg-white dark:bg-zinc-900 border-zinc-955 dark:border-white shadow-sm' 
                    : 'bg-transparent border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded ${selectedNode === 'nas' ? 'text-zinc-955 dark:text-white' : 'text-zinc-400'}`}>
                    <Icons.Database />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-white">NetApp Storage Fabric</h3>
                    <p className="text-[11px] text-zinc-550 dark:text-zinc-400">NAS Volume Orchestration & Mounting</p>
                  </div>
                </div>
              </button>

            </div>

            {/* Selected Node Detailed Analysis Display Card */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{nodeDetails[selectedNode].sub}</span>
                  <h3 className="text-lg font-bold mt-1 text-zinc-900 dark:text-white">{nodeDetails[selectedNode].title}</h3>
                </div>
                
                <p className="text-zinc-550 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm">
                  {nodeDetails[selectedNode].desc}
                </p>

                <div>
                  <h4 className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider mb-2">Underlying Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {nodeDetails[selectedNode].tech.map((techItem, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] bg-zinc-50 dark:bg-black border border-zinc-150 dark:border-zinc-900 text-zinc-650 dark:text-zinc-300 font-medium rounded">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture metrics/achievements list */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                <h4 className="text-[10px] font-bold text-zinc-455 dark:text-zinc-500 uppercase tracking-wider mb-3">Key Design Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nodeDetails[selectedNode].metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icons.Check />
                      <span className="text-xs text-zinc-555 dark:text-zinc-400">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Technical Matrix
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-455 leading-relaxed">
              Proven tools and technology stacks executed inside scalable systems pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Compute and Hypervisors column */}
            <div className="bg-transparent border border-zinc-200/60 dark:border-zinc-800/65 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                <Icons.Cpu />
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Hypervisors</h3>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <li>• VMware ESXi / vCenter</li>
                <li>• OpenStack (Nova Compute)</li>
                <li>• KVM Virtualization</li>
                <li>• GPU Passthrough Mapping</li>
                <li>• PCI Hardware Slicing</li>
              </ul>
            </div>

            {/* Storage Orchestration column */}
            <div className="bg-transparent border border-zinc-200/60 dark:border-zinc-800/65 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                <Icons.Database />
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Storage</h3>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <li>• NetApp ONTAP Arrays</li>
                <li>• VMware Datastores</li>
                <li>• NAS Volume Allocations</li>
                <li>• Dynamic Volume Mounts</li>
                <li>• Multitenancy Hard-Isolation</li>
              </ul>
            </div>

            {/* Backend Development column */}
            <div className="bg-transparent border border-zinc-200/60 dark:border-zinc-800/65 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                <Icons.Code />
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Backend</h3>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <li>• Spring Boot Microservices</li>
                <li>• Spring Cloud & Service Discovery</li>
                <li>• REST API & Async Event Hooks</li>
                <li>• Postgres & Storage Engines</li>
                <li>• Distributed Concurrency Control</li>
              </ul>
            </div>

            {/* Frontend & Architecture column */}
            <div className="bg-transparent border border-zinc-200/60 dark:border-zinc-800/65 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
                <Icons.Network />
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Frontend & Sys</h3>
              </div>
              <ul className="space-y-2 text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed">
                <li>• Angular Architecture</li>
                <li>• TypeScript Implementation</li>
                <li>• High-Level Design (HLD)</li>
                <li>• Low-Level Design (LLD)</li>
                <li>• MAAS Server Pipelines</li>
              </ul>
            </div>

          </div>

         </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/20 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Professional Timeline
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-450 leading-relaxed">
              3 years of continuous platform engineering ownership inside Tata Communications.
            </p>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-2">
            <div className="relative">
              {/* Visual timeline pointer */}
              <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-slate-50 dark:ring-black" />

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">July 2023 - Present (3 Years)</span>
                  <span className="inline-flex self-start sm:self-auto px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/40 dark:border-zinc-700/40 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono rounded">Full-Time</span>
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Software Developer — Vayu Cloud Product</h3>
                <h4 className="text-sm font-semibold text-zinc-555 dark:text-zinc-455">Tata Communications</h4>
                
                <p className="pt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Engineering the orchestration runtime for an enterprise hybrid cloud platform. Led backend integration pipelines, automating lifecycle workflows using Spring Boot microservices across hypervisor arrays, bare-metal provisioning states, and NetApp storage fabrics.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-650 font-bold text-xs">•</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Designed and built high-concurrency Spring Boot storage microservices to automate multi-tenant NAS storage configurations, removing manual vCenter onboarding latency.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-650 font-bold text-xs">•</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Optimized baremetal automation pipelines built with MAAS, allowing system administrators to instantly configure and boot nodes with deep-slicing GPU resources.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-650 font-bold text-xs">•</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Drafted both Low-Level (LLD) and High-Level (HLD) designs across the computing layer, managing thread pools to prevent concurrent storage allocation race states.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Deep-Dive System Contributions</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-450 max-w-lg">
                Production features successfully shipped within Vayu Cloud's underlying infrastructure systems.
              </p>
            </div>
            
            {/* Category Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'storage', 'compute', 'bmaas'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    activeTab === category
                      ? 'bg-zinc-950 dark:bg-white text-white dark:text-black border-zinc-950 dark:border-white'
                      : 'bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Modules' : category === 'bmaas' ? 'Baremetal' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display of active filtered projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((project) => (
                <div 
                  key={project.id} 
                  className="bg-transparent border border-zinc-200/60 dark:border-zinc-800/65 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 dark:text-zinc-600 uppercase">
                        // {project.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{project.desc}</p>
                    
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[10px] font-bold text-zinc-450 dark:text-zinc-505 uppercase tracking-widest">Engineering Milestones</h4>
                      {project.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-zinc-955 dark:text-white font-bold text-xs">•</span>
                          <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-zinc-50/50 dark:bg-zinc-955/20 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Academic Background
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-455 leading-relaxed">
              Solid theoretical foundations in computation and software engineering.
            </p>
          </div>

          <div className="bg-white dark:bg-black border border-zinc-200/60 dark:border-zinc-850 p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Bachelor of Technology (B.Tech)</span>
                <h3 className="text-xl font-bold mt-1 text-zinc-900 dark:text-white">Information Technology</h3>
                <h4 className="text-sm font-semibold text-zinc-500 mt-0.5">Rajalakshmi Engineering College</h4>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-4 py-2 rounded text-center self-start sm:self-auto">
                <span className="block text-[9px] text-zinc-455 dark:text-zinc-500 font-bold uppercase tracking-wider">CGPA</span>
                <span className="text-xl font-bold text-zinc-950 dark:text-zinc-100">8.47 / 10</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-405 leading-relaxed">
              Core academic path focused comprehensively on computer science disciplines: Distributed Computing, Relational Databases, Advanced Algorithms & Data Structures, Network Protocols, and Object-Oriented Software Design patterns.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded border border-zinc-100 dark:border-zinc-900">
                <span className="block text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Birthdate</span>
                <span className="text-xs font-bold">April 17, 2002</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded border border-zinc-100 dark:border-zinc-900">
                <span className="block text-[9px] text-zinc-400 uppercase tracking-widest mb-1">DSA</span>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">Proficient</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded border border-zinc-100 dark:border-zinc-900">
                <span className="block text-[9px] text-zinc-400 uppercase tracking-widest mb-1">DBMS</span>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">Proficient</span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded border border-zinc-100 dark:border-zinc-900">
                <span className="block text-[9px] text-zinc-400 uppercase tracking-widest mb-1">OOPs</span>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">Proficient</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-150 dark:border-zinc-900/80 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-bold tracking-widest text-zinc-900 dark:text-white uppercase">VISHNU KUMAR V K</span>
              <p className="text-[11px] text-zinc-450 dark:text-zinc-550">© 2026.</p>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/vishnu-kumar-v-k-6454ab260/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}