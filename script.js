const treks = [
  {
    name: "Everest Base Camp",
    image: "images/everest.jpg",
    location: "Nepal",
    difficulty: "Challenging",
    duration: "12-14 Days",
    distance: "130 km",
    altitude: "5364m",
    season: "Mar-May, Sept-Nov",
    highlights: "Everest Views, Sherpa Culture, Himalayan Landscapes",
    description: "A legendary route through Namche Bazaar, Tengboche, and glacial valleys to the foot of the world's highest peak."
  },
  {
    name: "Annapurna Base Camp",
    image: "images/annapurna.jpg",
    location: "Nepal",
    difficulty: "Moderate-Challenging",
    duration: "7-11 Days",
    distance: "67 km",
    altitude: "4130m",
    season: "Mar-May, Sept-Nov",
    highlights: "Annapurna Sanctuary, Machapuchare, Gurung Villages",
    description: "A dramatic amphitheater of ice and granite, reached through terraced villages, forests, and high alpine silence."
  },
  {
    name: "Annapurna Circuit",
    image: "images/annapurna-circuit.jpg",
    location: "Nepal",
    difficulty: "Challenging",
    duration: "12-18 Days",
    distance: "160-230 km",
    altitude: "5416m",
    season: "Mar-May, Sept-Nov",
    highlights: "Thorong La Pass, Manang Valley, Diverse Terrain",
    description: "One of the Himalaya's great traverses, moving from subtropical valleys to the stark, wind-carved Thorong La."
  },
  {
    name: "Manaslu Circuit",
    image: "images/manaslu.jpg",
    location: "Nepal",
    difficulty: "Challenging",
    duration: "14-15 Days",
    distance: "177 km",
    altitude: "5106m",
    season: "Mar-May, Sept-Nov",
    highlights: "Larke La Pass, Mount Manaslu Views, Tibetan Culture",
    description: "A dramatic, restricted-area trek circumnavigating Mount Manaslu, transitioning from lush subtropical forests to high-alpine glaciers."
  },
  {
    name: "Kedarkantha",
    image: "images/kedarkantha.jpg",
    location: "Uttarakhand, India",
    difficulty: "Easy-Moderate",
    duration: "5-6 Days",
    distance: "20 km",
    altitude: "3810m",
    season: "Dec-Apr",
    highlights: "Snow Trails, Summit Sunrise, Pine Forests",
    description: "A refined winter classic with crisp campsites, clean ridge walking, and a sunrise summit that feels cinematic."
  },
  {
    name: "Hampta Pass",
    image: "images/hampta-pass.jpg",
    location: "Himachal Pradesh, India",
    difficulty: "Moderate",
    duration: "5 Days",
    distance: "35 km",
    altitude: "4270m",
    season: "Jun-Sep",
    highlights: "Lahaul Valley, Chandratal, River Crossings",
    description: "A compact Himalayan crossover from green Kullu valleys to the lunar landscapes of Lahaul and Spiti."
  },
  {
    name: "Tungnath & Chandrashila",
    image: "images/tungnath.jpg",
    location: "Uttarakhand, India",
    difficulty: "Easy-Moderate",
    duration: "3-4 Days",
    distance: "18 km",
    altitude: "4000m",
    season: "Mar-Jun, Sept-Dec",
    highlights: "Panchachuli Views, Tungnath Temple, Summit Ridge",
    description: "A short, high-impact ascent with sacred stone paths, rhododendron forests, and broad Garhwal panoramas."
  },
  {
    name: "Kashmir Great Lakes",
    image: "images/kashmir-great-lakes.jpg",
    location: "Kashmir, India",
    difficulty: "Moderate-Challenging",
    duration: "7-8 Days",
    distance: "74 km",
    altitude: "4191m",
    season: "Jul-Sep",
    highlights: "Alpine Lakes, Meadows, High Passes",
    description: "A polished journey across turquoise lakes, flowered meadows, and rolling passes in Kashmir's alpine heart."
  },
  {
    name: "Valley of Flowers",
    image: "images/valley-of-flowers.jpg",
    location: "Uttarakhand, India",
    difficulty: "Moderate",
    duration: "5-6 Days",
    distance: "38 km",
    altitude: "3658m",
    season: "Jul-Sep",
    highlights: "UNESCO Valley, Wildflowers, Hemkund Sahib",
    description: "A monsoon masterpiece where glaciers, waterfalls, and rare Himalayan blooms turn the valley luminous."
  },
  {
    name: "Goechala Trek",
    image: "images/goechala.jpg",
    location: "Sikkim, India",
    difficulty: "Challenging",
    duration: "9-11 Days",
    distance: "90 km",
    altitude: "4600m",
    season: "Apr-May, Sept-Nov",
    highlights: "Kanchenjunga Views, Samiti Lake, Rhododendrons",
    description: "A demanding Sikkim expedition with sacred lakes, forested ascents, and unforgettable Kanchenjunga mornings."
  },
  {
    name: "Sandakphu Trek",
    image: "images/sandakphu.jpg",
    location: "West Bengal, India",
    difficulty: "Moderate",
    duration: "6-7 Days",
    distance: "44 km",
    altitude: "3636m",
    season: "Mar-May, Oct-Dec",
    highlights: "Sleeping Buddha, Four 8000m Peaks, Singalila Ridge",
    description: "A rare ridge walk where Everest, Kanchenjunga, Lhotse, and Makalu can all appear on a clear morning."
  },
  {
    name: "Tarsar Marsar",
    image: "images/tarsar-marsar.jpg",
    location: "Kashmir, India",
    difficulty: "Moderate",
    duration: "6-7 Days",
    distance: "48 km",
    altitude: "4024m",
    season: "Jul-Sep",
    highlights: "Twin Lakes, Lidder Valley, Alpine Camps",
    description: "An elegant Kashmir trek linking mirror-still lakes, sculpted meadows, and campsites that feel almost unreal."
  }
];

const destinations = [
  {
    name: "Nepal",
    image: "images/nepal.jpg",
    description: "High Himalayan expeditions, Sherpa heritage, and world-famous base camp routes.",
    popular: "Everest Base Camp, Annapurna Base Camp, Manaslu Circuit"
  },
  {
    name: "Uttarakhand",
    image: "images/uttarakhand.jpg",
    description: "Sacred peaks, winter summits, flower valleys, and elegant Garhwal ridge walks.",
    popular: "Kedarkantha, Valley of Flowers, Chandrashila"
  },
  {
    name: "Himachal Pradesh",
    image: "images/himachal.jpg",
    description: "Alpine passes, dramatic valley crossings, and the gateway to the cold desert.",
    popular: "Hampta Pass, Bhrigu Lake"
  },
  {
    name: "Kashmir",
    image: "images/kashmir.jpg",
    description: "Emerald meadows, crystalline lakes, and cinematic camps beneath snowy ridgelines.",
    popular: "Kashmir Great Lakes, Tarsar Marsar"
  },
  {
    name: "Sikkim",
    image: "images/sikkim.jpg",
    description: "Kanchenjunga viewpoints, rhododendron forests, and deeply atmospheric high trails.",
    popular: "Goechala, Dzongri, Sandakphu"
  }
];

const testimonials = [
  {
    name: "Aarav Mehta",
    trek: "Everest Base Camp",
    image: "images/testimonial-aarav.jpg",
    review: "SUMMITX made the expedition feel effortless without sanding away the adventure. Every detail, from acclimatization to sunrise timing, felt considered."
  },
  {
    name: "Mira Kapoor",
    trek: "Kashmir Great Lakes",
    image: "images/testimonial-mira.jpg",
    review: "The route, camps, food, and pacing were world-class. I came home with photographs I still cannot believe are mine."
  },
  {
    name: "Rohan Sen",
    trek: "Goechala Trek",
    image: "images/testimonial-rohan.jpg",
    review: "A rare blend of luxury-level planning and real mountain grit. The leaders were calm, precise, and quietly brilliant."
  }
];

const trekGrid = document.getElementById("trek-grid");
const destinationGrid = document.getElementById("destination-grid");
const testimonialTrack = document.getElementById("testimonial-track");
const testimonialDots = document.getElementById("testimonial-dots");
const siteHeader = document.getElementById("site-header");
const progressBar = document.getElementById("progress-bar");
const backToTop = document.getElementById("back-to-top");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const cursorGlow = document.getElementById("cursor-glow");

let testimonialIndex = 0;
let testimonialTimer;

init();

function init() {
  renderTreks();
  renderDestinations();
  renderTestimonials();
  initRevealAnimations();
  initCounters();
  initSnow();
  bindUiEvents();
  updateScrollUi();
  requestAnimationFrame(updateParallax);
}

function renderTreks() {
  trekGrid.innerHTML = treks.map((trek) => `
    <article class="trek-card glass reveal" tabindex="0">
      <img src="${trek.image}" alt="${trek.name} trek landscape" loading="lazy">
      <div class="trek-scrim" aria-hidden="true"></div>
      <div class="trek-base">
        <h3>${trek.name}</h3>
      </div>
      <div class="trek-details">
        <div class="trek-meta">
          ${detail("Location", trek.location)}
          ${detail("Difficulty", trek.difficulty)}
          ${detail("Duration", trek.duration)}
          ${detail("Distance", trek.distance)}
          ${detail("Altitude", trek.altitude)}
          ${detail("Best Season", trek.season)}
        </div>
        <div class="trek-highlights">${trek.highlights}</div>
        <p>${trek.description}</p>
        <a class="button button-primary" href="#contact">Book Trek</a>
      </div>
    </article>
  `).join("");
}

function renderDestinations() {
  destinationGrid.innerHTML = destinations.map((destination) => `
    <article class="destination-card reveal">
      <img src="${destination.image}" alt="${destination.name} mountain destination" loading="lazy">
      <div class="destination-body">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <span class="popular">Popular: ${destination.popular}</span>
      </div>
    </article>
  `).join("");
}

function renderTestimonials() {
  testimonialTrack.innerHTML = testimonials.map((testimonial) => `
    <article class="testimonial-card">
      <div class="testimonial-avatar">
        <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
      </div>
      <blockquote>
        <p>"${testimonial.review}"</p>
        <h3>${testimonial.name}</h3>
        <span>${testimonial.trek}</span>
      </blockquote>
    </article>
  `).join("");

  testimonialDots.innerHTML = testimonials.map((_, index) => `
    <button type="button" aria-label="Show testimonial ${index + 1}" data-testimonial="${index}"></button>
  `).join("");

  updateTestimonials();
  startTestimonials();
}

function detail(label, value) {
  return `<span>${label}<strong>${value}</strong></span>`;
}

function bindUiEvents() {
  window.addEventListener("scroll", () => {
    updateScrollUi();
    requestAnimationFrame(updateParallax);
  }, { passive: true });

  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });

  testimonialDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-testimonial]");
    if (!dot) return;
    testimonialIndex = Number(dot.dataset.testimonial);
    updateTestimonials();
    startTestimonials();
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-missing");
      image.alt = `${image.alt} placeholder`;
    });
  });
}

function updateScrollUi() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  siteHeader.classList.toggle("scrolled", scrollTop > 20);
  backToTop.classList.toggle("visible", scrollTop > 700);
}

function updateParallax() {
  const y = window.scrollY;
  document.querySelectorAll(".parallax-layer").forEach((layer) => {
    const speed = Number(layer.dataset.speed || 0);
    layer.style.transform = `translate3d(0, ${y * speed}px, 0) scale(1.05)`;
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal, .reveal-text");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

function animateCounter(counter) {
  const target = Number(counter.dataset.counter);
  const suffix = counter.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);
    counter.textContent = `${value.toLocaleString()}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function updateTestimonials() {
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  testimonialDots.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active", index === testimonialIndex);
  });
}

function startTestimonials() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateTestimonials();
  }, 4600);
}

function initSnow() {
  const canvas = document.getElementById("snow-canvas");
  const context = canvas.getContext("2d");
  const particles = [];
  const particleCount = window.matchMedia("(max-width: 700px)").matches ? 70 : 140;
  let width = 0;
  let height = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.1 + 0.45,
      speed: Math.random() * 0.7 + 0.25,
      drift: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.55 + 0.18
    };
  }

  function seed() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.y += particle.speed;
      particle.x += particle.drift + Math.sin((particle.y + particle.x) * 0.01) * 0.12;

      if (particle.y > height + 8) {
        particle.y = -8;
        particle.x = Math.random() * width;
      }

      if (particle.x > width + 8) particle.x = -8;
      if (particle.x < -8) particle.x = width + 8;

      context.beginPath();
      context.fillStyle = `rgba(248, 250, 252, ${particle.opacity})`;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  seed();
  draw();
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}
