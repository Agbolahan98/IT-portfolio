const $ = (id) => document.getElementById(id);
const lockScreen = $("lock-screen"), homeScreen = $("home-screen"), appView = $("app-view");
const content = $("app-content"), appTitle = $("appbar-title");
const pad = n => String(n).padStart(2, "0");

function updateClock() {
  const now = new Date();
  $("clock").textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  $("status-time").textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  $("date-label").textContent = now.toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric" }).toUpperCase();
  $("year").textContent = now.getFullYear();
}
updateClock(); setInterval(updateClock, 15000);

const data = {
  about: {
    title: "ABOUT ME",
    html: `<div class="content-kicker">01 / PROFILE</div><img class="profile-portrait" src="assets/agbolahan-profile.png" alt="Portrait of Agbolahan Ojerinde"><h2 class="content-title">Hello, I'm<br>Agbolahan<span class="accent-dot">.</span></h2><p class="content-copy">I'm an IT Support Engineer based in Lagos, Nigeria, focused on keeping people productive and technology dependable. I bring experience across IT support, networking, hardware and software troubleshooting, IT asset management, and web application deployment. In my current railway-station support role, I help staff and service users resolve connectivity, ticketing and account-registration issues.</p><div class="content-card"><h3>My approach</h3><p>Listen first. Diagnose methodically. Communicate clearly. Document the fix. I care about solving the immediate issue and reducing the chance it happens again.</p></div><div class="tag-list"><span class="tag">User-first support</span><span class="tag">Root-cause thinking</span><span class="tag">Documentation</span><span class="tag">Continuous learning</span></div>`
  },
  services: {
    title: "IT SERVICES",
    html: `<div class="content-kicker">02 / WHAT I DO</div><h2 class="content-title">Reliable support.<br>Practical solutions.</h2><div class="content-card"><h3>01 — Help Desk & Desktop Support</h3><p>First- and second-line troubleshooting for Windows, laptops, printers, applications, user accounts and everyday technical issues.</p></div><div class="content-card"><h3>02 — Network & Connectivity</h3><p>LAN/WAN and Wi-Fi troubleshooting, TCP/IP fundamentals, DNS/DHCP checks, router connectivity and network fault isolation.</p></div><div class="content-card"><h3>03 — Systems & User Administration</h3><p>Active Directory practice and administration, Microsoft 365 support, access management, Windows environments and user onboarding support.</p></div><div class="content-card"><h3>04 — IT Operations</h3><p>Asset inventory, setup and deployment, backups, endpoint security basics, vendor coordination and clear technical documentation.</p></div>`
  },
  projects: {
    title: "PROJECTS",
    html: `<div class="content-kicker">03 / SELECTED WORK</div><h2 class="content-title">Built to solve<br>real problems.</h2><div class="project-card"><div class="project-number">PROJECT_001</div><h3>Office Network Setup</h3><p>Supported office network deployment and connectivity troubleshooting to help users access shared systems and essential services reliably.</p><div class="tag-list"><span class="tag">LAN</span><span class="tag">Wi-Fi</span><span class="tag">Troubleshooting</span></div></div><div class="project-card"><div class="project-number">PROJECT_002</div><h3>Computer Lab Deployment</h3><p>Contributed to setting up a computer lab designed to serve more than 100 users, including workstation readiness and core IT environment configuration.</p><div class="tag-list"><span class="tag">Deployment</span><span class="tag">Windows</span><span class="tag">User support</span></div></div><div class="project-card"><div class="project-number">PROJECT_003</div><h3>IT Asset Inventory</h3><p>Organised IT asset information to improve visibility into equipment, support accountability and make day-to-day asset management easier.</p><div class="tag-list"><span class="tag">Asset management</span><span class="tag">Documentation</span></div></div><div class="project-card"><div class="project-number">PROJECT_004</div><h3>Server & Web Application Deployment</h3><p>Hands-on exposure to Windows Server and Active Directory environments, alongside website and organisational web application deployment.</p><div class="tag-list"><span class="tag">Windows Server</span><span class="tag">Active Directory</span><span class="tag">Web</span></div></div><p class="contact-note">Project summaries are intentionally concise. Add screenshots, architecture diagrams and measurable outcomes as you prepare each case study.</p>`
  },
  skills: {
    title: "TECH STACK",
    html: `<div class="content-kicker">04 / TOOLS & KNOWLEDGE</div><h2 class="content-title">Tools I work<br>with and learn.</h2><div class="content-card"><h3>Operating Systems & Productivity</h3><div class="tag-list"><span class="tag">Windows 10/11</span><span class="tag">Microsoft 365</span><span class="tag">Office apps</span><span class="tag">Windows Server</span></div></div><div class="content-card"><h3>Identity & Administration</h3><div class="tag-list"><span class="tag">Active Directory</span><span class="tag">User access</span><span class="tag">Account support</span><span class="tag">Group Policy fundamentals</span></div></div><div class="content-card"><h3>Networking</h3><div class="tag-list"><span class="tag">TCP/IP</span><span class="tag">DNS</span><span class="tag">DHCP</span><span class="tag">LAN/WAN</span><span class="tag">Wi-Fi</span><span class="tag">VPN fundamentals</span></div></div><div class="content-card"><h3>Operations & Troubleshooting</h3><div class="tag-list"><span class="tag">Hardware diagnostics</span><span class="tag">IT inventory</span><span class="tag">Backups</span><span class="tag">Endpoint security</span><span class="tag">CCTV/NVR</span><span class="tag">SQL/MySQL basics</span></div></div><p class="contact-note">Skills shown reflect practical experience and ongoing development. Keep this list aligned with tools you can confidently discuss in an interview.</p>`
  },
  experience: {
    title: "EXPERIENCE",
    html: `<div class="content-kicker">05 / PROFESSIONAL JOURNEY</div><h2 class="content-title">Support that<br>keeps work moving.</h2><div class="timeline-item"><div class="date">CURRENT ROLE</div><h3>IT Support — Operational Environment</h3><p>Provide technical assistance to staff and service users in a railway station environment. Troubleshoot connectivity, ticketing and account-registration issues, guide users through digital services, and support daily IT operations for 60+ staff and members of the public.</p></div><div class="timeline-item"><div class="date">INFRASTRUCTURE EXPERIENCE</div><h3>IT Deployment & Administration</h3><p>Hands-on involvement in office networking, computer lab setup, asset inventory, server environments and web application deployment.</p></div><div class="content-card"><h3>What I bring</h3><p>Calm user support, practical troubleshooting, ownership of issues, clear communication, and a willingness to learn unfamiliar systems quickly.</p></div><p class="contact-note">Add employer names, exact dates and role titles here before publishing if you want a complete employment history.</p>`
  },
  contact: {
    title: "CONTACT",
    html: `<div class="content-kicker">06 / LET'S CONNECT</div><h2 class="content-title">Have a role or<br>problem to solve?</h2><p class="content-copy">I'm interested in IT support, service desk, desktop support and IT operations opportunities—including remote roles. Reach out to discuss how I can help.</p><a class="contact-link" href="mailto:ojerindeagbolahan@gmail.com?subject=IT%20Support%20Opportunity"><div><small style="display:block;color:#7f98b1;font-size:9px;margin-bottom:4px">EMAIL</small>ojerindeagbolahan@gmail.com</div><span>↗</span></a><a class="contact-link" href="tel:+2348167559668"><div><small style="display:block;color:#7f98b1;font-size:9px;margin-bottom:4px">PHONE</small>0816 755 9668</div><span>↗</span></a><a class="contact-link" href="https://wa.me/2348167559668" target="_blank" rel="noreferrer"><div><small style="display:block;color:#7f98b1;font-size:9px;margin-bottom:4px">WHATSAPP</small>Message me on WhatsApp</div><span>↗</span></a><a class="contact-link" href="assets/Agbolahan-Ojerinde-CV.pdf" target="_blank" rel="noreferrer"><div><small style="display:block;color:#7f98b1;font-size:9px;margin-bottom:4px">CURRICULUM VITAE</small>View / download my CV</div><span>↗</span></a><div class="terminal"><div><span class="prompt">agbolahan@it-support</span>:~$ whoami</div><div>IT Support Engineer</div><div><span class="prompt">agbolahan@it-support</span>:~$ location</div><div>Lagos, Nigeria / Remote-ready</div><div><span class="prompt">agbolahan@it-support</span>:~$ status</div><div class="muted">Open to opportunities_</div></div><p class="contact-note">LinkedIn profile link can be added when available.</p>`
  }
};

function unlock() {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}
function openApp(key) {
  const app = data[key];
  if (!app) return;
  appTitle.textContent = app.title;
  content.innerHTML = app.html;
  homeScreen.classList.add("hidden");
  lockScreen.classList.add("hidden");
  appView.classList.remove("hidden");
  content.scrollTop = 0;
}
function goHome() {
  appView.classList.add("hidden");
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
}
$("unlock").addEventListener("click", unlock);
$("quick-about").addEventListener("click", () => openApp("about"));
$("quick-contact").addEventListener("click", () => openApp("contact"));
document.querySelectorAll("[data-app]").forEach(el => el.addEventListener("click", () => openApp(el.dataset.app)));
$("back-home").addEventListener("click", goHome);

// Swipe-up interaction on the lock screen, with tap as an accessible alternative.
let touchStartY = null;
lockScreen.addEventListener("touchstart", e => { touchStartY = e.changedTouches[0].screenY; }, {passive:true});
lockScreen.addEventListener("touchend", e => {
  if (touchStartY !== null && touchStartY - e.changedTouches[0].screenY > 45) unlock();
  touchStartY = null;
}, {passive:true});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (!appView.classList.contains("hidden")) goHome();
    else if (!homeScreen.classList.contains("hidden")) {
      homeScreen.classList.add("hidden"); lockScreen.classList.remove("hidden");
    }
  }
});
