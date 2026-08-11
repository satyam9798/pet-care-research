const serviceData = {
  vet: {
    num: "01", icon: "✚", title: "Vet care",
    desc: "Make veterinary care easier to discover and book while keeping credential verification and provider trust at the center.",
    items: ["At-home visits", "Teleconsult / triage", "Diagnostics pickup", "Digital health records"]
  },
  grooming: {
    num: "02", icon: "✂", title: "Grooming & hygiene",
    desc: "Bring trusted grooming into the same care journey, with verified providers and convenient at-home options.",
    items: ["At-home grooming", "Verified groomers", "Subscription plans", "Care continuity"]
  },
  boarding: {
    num: "03", icon: "⌂", title: "Boarding, walking & daycare",
    desc: "Create more confidence around the people and places looking after a pet when their parent cannot be there.",
    items: ["Verified hosts", "GPS-tracked walks", "Daycare centers", "Care updates"]
  },
  training: {
    num: "04", icon: "◌", title: "Training & behavior",
    desc: "Make qualified help easier to discover for everyday obedience, puppy development and behavior challenges.",
    items: ["Obedience", "Puppy classes", "Behavior consults", "Provider discovery"]
  },
  marketplace: {
    num: "05", icon: "⌁", title: "Marketplace",
    desc: "A longer-term peer and community layer for adoption, rehoming, lost & found and peer pet-sitting.",
    items: ["Adoption / rehoming", "Lost & found", "Peer pet-sitting", "Community"]
  },
  commerce: {
    num: "06", icon: "□", title: "Commerce & subscriptions",
    desc: "Extend the care relationship into recurring needs such as food, medicines, auto-replenishment and insurance distribution.",
    items: ["Food / medicine delivery", "Auto-replenish", "Subscriptions", "Insurance distribution"]
  }
};

const tabs = document.querySelectorAll(".service-tab");
const display = document.getElementById("serviceDisplay");

function renderService(key){
  const d = serviceData[key];
  display.innerHTML = `
    <div class="display-kicker">${key === "vet" || key === "grooming" ? "Phase 1 focus" : "Long-term platform vision"}</div>
    <div class="display-number">${d.num}</div>
    <div class="display-icon">${d.icon}</div>
    <h3>${d.title}</h3>
    <p>${d.desc}</p>
    <ul>${d.items.map(item => `<li>${item}</li>`).join("")}</ul>
    <div class="display-footer"><span>${key === "vet" || key === "grooming" ? "Deep execution over broad launch" : "Added only after the core wedge is validated"}</span><span>→</span></div>
  `;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderService(tab.dataset.service);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 20 ? "0 8px 25px rgba(18,56,58,.05)" : "none";
}, {passive:true});
