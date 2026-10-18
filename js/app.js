// ==========================================================================
// IMPORTPRENEUR VIP - Core JavaScript Application
// ==========================================================================

const WHATSAPP_URL = "https://chat.whatsapp.com/FYZv7piu46iLFJYe3qUAQ1";

const BOOK_LIST_PRICE = 499;
const BOOK_OFFER_PRICE = 99;
const BOOK_DISCOUNT_LABEL = "80% OFF";

// Payment links placeholder (can be edited here or in a separate config)
const EBOOK_PAYMENT_LINKS = {
  "import-documentation-handbook": "#",
  "hsn-classification-made-simple": "#",
  "customs-clearance-guide": "#",
  "dgft-compliance-basics": "#",
  "import-costing-landed-cost": "#",
  "exim-terminology-guide": "#",
  "ai-for-importers": "#",
  "bill-of-entry-walkthrough": "#",
  "import-business-starter-guide": "#",
  "freight-logistics-essentials": "#",
};

const BOOK_CATEGORIES = {
  "import-documentation-handbook": "docs",
  "hsn-classification-made-simple": "customs",
  "customs-clearance-guide": "customs",
  "dgft-compliance-basics": "docs",
  "import-costing-landed-cost": "costing",
  "exim-terminology-guide": "docs",
  "ai-for-importers": "tech",
  "bill-of-entry-walkthrough": "customs",
  "import-business-starter-guide": "tech",
  "freight-logistics-essentials": "costing",
};

let currentLang = "en";
try {
  currentLang = localStorage.getItem("importpreneur_lang") || "en";
} catch (e) {
  currentLang = "en";
}
let currentBookIndex = null;
let currentBookFilter = "all";
let currentBookSearchQuery = "";
const uploadedFiles = {};

// ==========================================================================
// Language & Rendering
// ==========================================================================

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("importpreneur_lang", lang);
  } catch (e) {}

  // Update toggle buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderApp();
}

function renderApp() {
  const t = TRANSLATIONS[currentLang];
  const isTa = currentLang === "ta";

  // Nav
  document.getElementById("nav-home").textContent = t.nav.home;
  document.getElementById("nav-learn").textContent = t.nav.learn;
  document.getElementById("nav-books").textContent = t.nav.books;
  document.getElementById("nav-audience").textContent = t.nav.audience;
  document.getElementById("nav-mentor").textContent = t.nav.mentor;
  document.getElementById("nav-faq").textContent = t.nav.faq;
  document.getElementById("header-cta").textContent = t.cta.joinShort;

  const navCalc = document.getElementById("nav-calc");
  if (navCalc) navCalc.textContent = isTa ? "அடக்கவிலை கணக்கீடு" : "Calculator";

  // Mobile Nav Links
  const mobHome = document.getElementById("mob-nav-home");
  if (mobHome) mobHome.textContent = t.nav.home;
  const mobLearn = document.getElementById("mob-nav-learn");
  if (mobLearn) mobLearn.textContent = t.nav.learn;
  const mobBooks = document.getElementById("mob-nav-books");
  if (mobBooks) mobBooks.textContent = t.nav.books;
  const mobCalc = document.getElementById("mob-nav-calc");
  if (mobCalc) mobCalc.textContent = isTa ? "அடக்கவிலை கணக்கீடு" : "Calculator";
  const mobAudience = document.getElementById("mob-nav-audience");
  if (mobAudience) mobAudience.textContent = t.nav.audience;
  const mobMentor = document.getElementById("mob-nav-mentor");
  if (mobMentor) mobMentor.textContent = t.nav.mentor;
  const mobFaq = document.getElementById("mob-nav-faq");
  if (mobFaq) mobFaq.textContent = t.nav.faq;
  const mobCta = document.getElementById("mob-nav-cta");
  if (mobCta) mobCta.textContent = t.cta.join;

  // Hero
  document.getElementById("hero-eyebrow").textContent = t.hero.eyebrow;
  document.getElementById("hero-title").textContent = t.hero.title;
  document.getElementById("hero-body").innerHTML = `${t.hero.bodyBefore}<strong>${t.hero.bodyStrong}</strong>${t.hero.bodyAfter}`;
  document.getElementById("hero-cta").textContent = t.cta.join;
  document.getElementById("hero-micro").textContent = t.hero.microcopy;
  document.getElementById("hero-badge").textContent = t.hero.badge;

  const liveText = document.getElementById("hero-live-text");
  if (liveText) liveText.textContent = isTa ? "நேரடி VIP சமூகம் • சேர்க்கை நடைபெறுகிறது" : "Live VIP Community • Admissions Active";

  const heroBtnBooks = document.getElementById("hero-btn-books");
  if (heroBtnBooks) heroBtnBooks.textContent = isTa ? "10 கையேடுகள்" : "Explore 10 Handbooks";

  const heroBtnCalc = document.getElementById("hero-btn-calc");
  if (heroBtnCalc) heroBtnCalc.textContent = isTa ? "அடக்கவிலை கணக்கீடு" : "Landed Cost Calculator";

  // Hero stats
  const statYears = document.getElementById("stat-years");
  if (statYears) statYears.textContent = isTa ? "ஆண்டுகள் கள அனுபவம்" : "Years Field Experience";
  const statBooks = document.getElementById("stat-books");
  if (statBooks) statBooks.textContent = isTa ? "வெளியிடப்பட்ட கையேடுகள்" : "Publication Handbooks";
  const statQa = document.getElementById("stat-qa");
  if (statQa) statQa.textContent = isTa ? "பாதுகாக்கப்பட்ட Q&A (₹250 தவணை)" : "Protected Q&A (₹250 Milestone)";
  const statMembers = document.getElementById("stat-members");
  if (statMembers) statMembers.textContent = isTa ? "செயலில் உள்ள கற்பவர்கள்" : "Active EXIM Learners";

  // Pain Points
  document.getElementById("pain-eyebrow").textContent = t.pain.eyebrow;
  document.getElementById("pain-title").textContent = t.pain.title;
  document.getElementById("pain-intro").textContent = t.pain.intro;
  document.getElementById("pain-closing").textContent = t.pain.closing;
  renderPainCards(t.pain.items);

  // What you learn
  document.getElementById("learn-eyebrow").textContent = t.learn.eyebrow;
  document.getElementById("learn-title").textContent = t.learn.title;
  document.getElementById("learn-intro").textContent = t.learn.intro;
  document.getElementById("learn-cta").textContent = t.cta.join;
  renderLearnCards(t.learn.items);

  // Books
  document.getElementById("books-eyebrow").textContent = t.books.eyebrow;
  document.getElementById("books-title").textContent = t.books.title;
  document.getElementById("books-intro").textContent = t.books.intro;
  document.getElementById("books-note").innerHTML = `${t.books.noteBefore}₹${BOOK_OFFER_PRICE}${t.books.noteMiddle}₹${BOOK_LIST_PRICE}${t.books.noteAfter} <span class="discount-pill">${BOOK_DISCOUNT_LABEL}</span><br>${t.books.secureNote}`;

  // Filter pills
  const pillAll = document.querySelector('#book-filter-pills [data-category="all"]');
  if (pillAll) pillAll.textContent = isTa ? "அனைத்து கையேடுகள் (10)" : "All Handbooks (10)";
  const pillCustoms = document.querySelector('#book-filter-pills [data-category="customs"]');
  if (pillCustoms) pillCustoms.textContent = isTa ? "🛃 சுங்கம் & அனுமதி" : "🛃 Customs & Clearance";
  const pillDocs = document.querySelector('#book-filter-pills [data-category="docs"]');
  if (pillDocs) pillDocs.textContent = isTa ? "📑 ஆவணங்கள் & விதிகள்" : "📑 Documentation & Compliance";
  const pillCosting = document.querySelector('#book-filter-pills [data-category="costing"]');
  if (pillCosting) pillCosting.textContent = isTa ? "💰 அடக்கவிலை & சரக்கு" : "💰 Costing & Logistics";
  const pillTech = document.querySelector('#book-filter-pills [data-category="tech"]');
  if (pillTech) pillTech.textContent = isTa ? "🤖 AI & தொடக்க வழிகாட்டி" : "🤖 AI & Starter";

  const bookSearchInput = document.getElementById("book-search");
  if (bookSearchInput) {
    bookSearchInput.placeholder = isTa
      ? "தலைப்பு, அதிகாரம் அல்லது விதியைப் பயன்படுத்தி தேடுக..."
      : "Search by title, chapter or topic (e.g. HSN, DGFT, Incoterms, Valuation)...";
  }

  const faqSearchInput = document.getElementById("faq-search");
  if (faqSearchInput) {
    faqSearchInput.placeholder = isTa
      ? "கேள்விகளைத் தேடுக (எ.கா: திரும்பப் பெறுதல், WhatsApp, தொடக்கநிலை)..."
      : "🔍 Search FAQ questions (e.g. refund, WhatsApp, beginners, payment)...";
  }

  // Calculator Labels
  const calcEyebrow = document.getElementById("calc-eyebrow");
  if (calcEyebrow) calcEyebrow.textContent = isTa ? "நடைமுறைக் கருவிகள்" : "Practical Tools";
  const calcTitle = document.getElementById("calc-title");
  if (calcTitle) calcTitle.textContent = isTa ? "🧮 நேரடி சுங்க வரி & இறக்குமதி அடக்கவிலை கணக்கீடு" : "🧮 Interactive Customs Duty & Landed Cost Calculator";
  const calcIntro = document.getElementById("calc-intro");
  if (calcIntro) calcIntro.textContent = isTa ? "இந்திய சுங்கத்துறை விதிகளின்படி Assessable Value, BCD, SWS மற்றும் IGST வரியை துல்லியமாக கணக்கிடுங்கள்." : "Estimate Assessable Value, BCD, Social Welfare Surcharge (SWS), IGST and total landed cost according to Indian Customs Valuation Rules.";
  const calcCifLabel = document.getElementById("calc-cif-label");
  if (calcCifLabel) calcCifLabel.textContent = isTa ? "பொருட்களின் மதிப்பு / CIF (₹)" : "Assessable Value / CIF Invoice (₹)";
  const calcBcdLabel = document.getElementById("calc-bcd-label");
  if (calcBcdLabel) calcBcdLabel.textContent = isTa ? "அடிப்படை சுங்க வரி (BCD %)" : "Basic Customs Duty (BCD %)";
  const calcIgstLabel = document.getElementById("calc-igst-label");
  if (calcIgstLabel) calcIgstLabel.textContent = isTa ? "IGST வரி விகிதம் (%)" : "IGST Rate (%)";
  const calcSwsLabel = document.getElementById("calc-sws-label");
  if (calcSwsLabel) calcSwsLabel.textContent = isTa ? "சமூக நல கூடுதல் வரி (SWS 10%)" : "SWS Surcharge (10% of BCD)";
  const calcClearanceLabel = document.getElementById("calc-clearance-label");
  if (calcClearanceLabel) calcClearanceLabel.textContent = isTa ? "துறைமுக அனுமதி & சரக்கு செலவு (₹)" : "Port Clearance / CHA (₹)";
  const calcSummaryTitle = document.getElementById("calc-summary-title");
  if (calcSummaryTitle) calcSummaryTitle.textContent = isTa ? "அதிகாரப்பூர்வ வரி மதிப்பீடு" : "Official Duty Assessment";

  // Apply filters to books & calculate landed cost
  applyBookFilters();
  calculateLandedCost();

  // Mentor
  document.getElementById("mentor-eyebrow").textContent = t.mentor.eyebrow;
  document.getElementById("mentor-title").textContent = t.mentor.title;
  document.getElementById("mentor-p1").textContent = t.mentor.p1;
  document.getElementById("mentor-p2").textContent = t.mentor.p2;
  document.getElementById("mentor-p3").textContent = t.mentor.p3;
  document.getElementById("mentor-name").textContent = t.mentor.name;
  document.getElementById("mentor-role").textContent = t.mentor.role;
  document.getElementById("mentor-quote").textContent = t.mentor.quote;
  document.getElementById("mentor-cta").textContent = t.cta.joinVip;

  // Consult & Question
  document.getElementById("consult-eyebrow").textContent = t.consult.eyebrow;
  document.getElementById("consult-title").textContent = t.consult.title;
  document.getElementById("consult-intro").textContent = t.consult.intro;
  document.getElementById("consult-note").textContent = t.consult.note;
  renderServices(t.consult);

  // AI Brief Helper
  document.getElementById("brief-title").textContent = t.brief.title;
  document.getElementById("brief-intro").textContent = t.brief.intro;
  document.getElementById("brief-input").placeholder = t.brief.placeholder;
  document.getElementById("brief-btn-text").textContent = t.brief.btn;
  document.getElementById("brief-result-title").textContent = t.brief.result;
  document.getElementById("brief-copy-btn").textContent = t.brief.copy;
  document.getElementById("brief-use-btn").textContent = t.brief.use;

  // Audience
  document.getElementById("audience-eyebrow").textContent = t.audience.eyebrow;
  document.getElementById("audience-title").textContent = t.audience.title;
  renderAudienceCards(t.audience.items);

  // Comparison
  document.getElementById("comp-eyebrow").textContent = t.comparison.eyebrow;
  document.getElementById("comp-title").textContent = t.comparison.title;
  document.getElementById("comp-intro").textContent = t.comparison.intro;
  document.getElementById("comp-th-typical").textContent = t.comparison.typical;
  document.getElementById("comp-th-vip").textContent = t.comparison.vip;
  renderComparisonTable(t.comparison.rows);

  // Journey
  document.getElementById("journey-eyebrow").textContent = t.journey.eyebrow;
  document.getElementById("journey-title").textContent = t.journey.title;
  document.getElementById("journey-intro").textContent = t.journey.intro;
  renderJourney(t.journey.steps);

  // Banner
  document.getElementById("banner-title").textContent = t.banner.title;
  document.getElementById("banner-p1").textContent = t.banner.p1;
  document.getElementById("banner-p2").textContent = t.banner.p2;
  document.getElementById("banner-cta").textContent = t.cta.join;
  document.getElementById("banner-micro").textContent = t.banner.microcopy;

  // FAQ
  document.getElementById("faq-eyebrow").textContent = t.faq.eyebrow;
  document.getElementById("faq-title").textContent = t.faq.title;
  renderFaq(t.faq.items);

  // Footer & Sticky
  document.getElementById("footer-cta").textContent = t.cta.joinVip;
  document.getElementById("footer-disclaimer").textContent = t.footer.disclaimer;
  document.getElementById("footer-rights").textContent = t.footer.rights;
  document.getElementById("sticky-btn").textContent = t.cta.joinShort;
}

// ==========================================================================
// Dynamic Section Renderers
// ==========================================================================

function renderPainCards(items) {
  const container = document.getElementById("pain-grid");
  container.innerHTML = items
    .map(
      (item) => `
    <div class="info-card">
      <span class="card-icon">${item.icon}</span>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
    </div>
  `
    )
    .join("");
}

function renderLearnCards(items) {
  const container = document.getElementById("learn-grid");
  container.innerHTML = items
    .map(
      (item) => `
    <div class="info-card">
      <span class="card-icon">${item.icon}</span>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
    </div>
  `
    )
    .join("");
}

function filterBooks(category) {
  currentBookFilter = category;
  document.querySelectorAll("#book-filter-pills .filter-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.category === category);
  });
  applyBookFilters();
}

function handleBookSearch(query) {
  currentBookSearchQuery = query.trim().toLowerCase();
  const clearBtn = document.getElementById("book-search-clear");
  if (clearBtn) clearBtn.style.display = currentBookSearchQuery.length > 0 ? "block" : "none";
  applyBookFilters();
}

function clearBookSearch() {
  const input = document.getElementById("book-search");
  if (input) input.value = "";
  currentBookSearchQuery = "";
  const clearBtn = document.getElementById("book-search-clear");
  if (clearBtn) clearBtn.style.display = "none";
  applyBookFilters();
}

function applyBookFilters() {
  const allMasterBooks = TRANSLATIONS[currentLang].books.items;
  const filtered = allMasterBooks.filter((book) => {
    const cat = BOOK_CATEGORIES[book.slug] || "docs";
    const matchesCat = currentBookFilter === "all" || cat === currentBookFilter;
    if (!matchesCat) return false;

    if (!currentBookSearchQuery) return true;
    const text = (
      book.title +
      " " +
      book.desc +
      " " +
      (book.tagline || "") +
      " " +
      (book.chapters || []).join(" ")
    ).toLowerCase();
    return text.includes(currentBookSearchQuery);
  });

  renderBooks(filtered);

  const status = document.getElementById("books-count-status");
  if (status) {
    if (currentLang === "ta") {
      status.textContent = `காட்டப்படும் கையேடுகள்: ${filtered.length} / ${allMasterBooks.length}`;
    } else {
      status.textContent = `Showing ${filtered.length} of ${allMasterBooks.length} official handbooks`;
    }
  }
}

function renderBooks(books) {
  const container = document.getElementById("books-grid");
  const isTa = currentLang === "ta";
  const allMasterBooks = TRANSLATIONS[currentLang].books.items;

  if (books.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--card); border: 1px dashed var(--border-strong); border-radius: var(--radius-lg);">
        <p style="font-size: 2.25rem; margin-bottom: 0.5rem;">🔍</p>
        <h4 style="font-size: 1.125rem; font-weight: 800; color: var(--navy);">
          ${isTa ? "பொருந்தும் கையேடுகள் எதுவும் கிடைக்கவில்லை" : "No matching handbooks found"}
        </h4>
        <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-top: 0.35rem;">
          ${isTa ? "மற்றொரு வார்த்தையைத் தேடவும் அல்லது அனைத்து கையேடுகளையும் பார்க்கவும்." : "Try clearing your search query or switching to another category."}
        </p>
        <button class="btn-navy" style="margin-top: 1rem; font-size: 0.8125rem;" onclick="clearBookSearch()">
          ${isTa ? "அனைத்து கையேடுகளையும் காட்டு" : "Reset & Show All 10 Handbooks"}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = books
    .map((book) => {
      const masterIndex = allMasterBooks.findIndex((b) => b.slug === book.slug);
      return `
    <article class="book-card" data-slug="${book.slug}">
      <div class="book-cover" onclick="openBookModal(${masterIndex})" style="cursor: pointer;" title="${isTa ? 'புத்தக விவரங்களை காண்க' : 'Click to view chapters & preview'}">
        <img src="assets/books/${book.slug}.jpg" alt="${book.title} cover" loading="lazy" />
        <span class="book-tag">${book.pages || "PDF"}</span>
      </div>
      <div class="book-info">
        <h3 class="book-title" onclick="openBookModal(${masterIndex})" style="cursor: pointer;">${book.title}</h3>
        <p class="book-desc">${book.desc}</p>
        <div class="book-price-row">
          <div class="price-box">
            <span class="price-main">₹${BOOK_OFFER_PRICE}</span>
            <span class="price-list">₹${BOOK_LIST_PRICE}</span>
            <span class="discount-pill">${BOOK_DISCOUNT_LABEL}</span>
          </div>
        </div>
        <div style="display: flex; gap: 0.375rem; margin-top: 0.75rem;">
          <button class="btn-outline" style="flex: 1; padding: 0.45rem 0.25rem; font-size: 0.75rem; justify-content: center; font-weight: 700;" onclick="openBookModal(${masterIndex})">
            👁️ ${isTa ? 'விவரம்' : 'View Content'}
          </button>
          <button class="btn-navy" style="flex: 1; padding: 0.45rem 0.25rem; font-size: 0.75rem; justify-content: center; font-weight: 700; white-space: nowrap;" onclick="downloadAndOpenBook('${book.slug}')">
            ⬇️ ${isTa ? 'பதிவிறக்கு' : 'Download'}
          </button>
        </div>
      </div>
    </article>
  `;
    })
    .join("");
}

function renderServices(consult) {
  // Question Card
  const q = consult.q;
  document.getElementById("q-title").textContent = q.title;
  document.getElementById("q-price").textContent = q.price;
  document.getElementById("q-unit").textContent = q.unit;
  document.getElementById("q-sub").textContent = q.sub;
  document.getElementById("q-desc").textContent = q.desc;
  document.getElementById("q-stages").innerHTML = q.stages
    .map(
      (s) => `
    <li>
      <span class="stage-badge">${s.label}</span>
      <span class="stage-text">${s.note}</span>
    </li>
  `
    )
    .join("");
  document.getElementById("q-paynote").textContent = q.payNote;
  document.getElementById("q-btn").textContent = q.cta;

  // Consultation Card
  const c = consult.c;
  document.getElementById("c-title").textContent = c.title;
  document.getElementById("c-price").textContent = c.price;
  document.getElementById("c-unit").textContent = c.unit;
  document.getElementById("c-duration").textContent = `⏱️ ${c.duration}`;
  document.getElementById("c-desc").textContent = c.desc;
  document.getElementById("c-paynote").textContent = c.payNote;
  document.getElementById("c-btn").textContent = c.cta;
}

function renderAudienceCards(items) {
  const container = document.getElementById("audience-grid");
  container.innerHTML = items
    .map(
      (item) => `
    <div class="info-card">
      <span class="card-icon">${item.icon}</span>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
    </div>
  `
    )
    .join("");
}

function renderComparisonTable(rows) {
  const container = document.getElementById("comp-tbody");
  container.innerHTML = rows
    .map(
      (r) => `
    <tr>
      <td>${r.typical}</td>
      <td>✓ ${r.vip}</td>
    </tr>
  `
    )
    .join("");
}

function renderJourney(steps) {
  const container = document.getElementById("journey-grid");
  container.innerHTML = steps
    .map(
      (step, index) => `
    <div class="step-card">
      <span class="step-num">${index + 1}</span>
      <span class="step-title">${step}</span>
    </div>
  `
    )
    .join("");
}

function renderFaq(items) {
  const container = document.getElementById("faq-list");
  container.innerHTML = items
    .map(
      (item, index) => `
    <div class="faq-item" id="faq-item-${index}">
      <button class="faq-question" onclick="toggleFaq(${index})">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>
  `
    )
    .join("");
}

function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  item.classList.toggle("open");
}

// ==========================================================================
// Book Modal & Content Tabs Handlers
// ==========================================================================

function switchBookTab(tabId) {
  document.querySelectorAll(".modal-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.id === `tab-btn-${tabId}`);
  });

  document.querySelectorAll(".tab-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `pane-${tabId}`);
  });
}

function downloadAndOpenBook(slug) {
  const url = uploadedFiles[slug] || `ebooks/${slug}.pdf`;
  const filename = `${slug}.pdf`;

  // Find book title for friendly toast
  const allMasterBooks = TRANSLATIONS[currentLang].books.items;
  const book = allMasterBooks.find((b) => b.slug === slug);
  const title = book ? book.title : slug;
  showToast(
    currentLang === "ta"
      ? `⬇️ "${title}" திறக்கப்பட்டு பதிவிறக்கப்படுகிறது...`
      : `⬇️ Opening & downloading "${title}"...`,
    "📖"
  );

  // 1. Open the PDF in a new tab for reading
  window.open(url, "_blank");

  // 2. Trigger programmatic download to local disk
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 100);
}

function handleModalDownload() {
  if (currentBookIndex === null) return;
  const book = TRANSLATIONS[currentLang].books.items[currentBookIndex];
  downloadAndOpenBook(book.slug);
}

function openBookModal(index) {
  currentBookIndex = index;
  const book = TRANSLATIONS[currentLang].books.items[index];

  document.getElementById("modal-book-title").textContent = book.title;
  document.getElementById("modal-book-tagline").textContent = book.tagline || "";
  document.getElementById("modal-book-desc").textContent = book.desc;
  document.getElementById("modal-book-cover").src = `assets/books/${book.slug}.jpg`;
  document.getElementById("modal-book-price").textContent = `₹${BOOK_OFFER_PRICE}`;
  document.getElementById("modal-book-list").textContent = `₹${BOOK_LIST_PRICE}`;
  document.getElementById("modal-book-discount").textContent = BOOK_DISCOUNT_LABEL;
  document.getElementById("modal-book-pages").textContent = book.pages || "50 Pages";

  // Render chapters syllabus
  const chapterContainer = document.getElementById("modal-chapter-list");
  if (book.chapters && book.chapters.length > 0) {
    chapterContainer.innerHTML = book.chapters
      .map(
        (ch, idx) => `
        <li class="chapter-item">
          <span class="chapter-num">${idx + 1}</span>
          <span class="chapter-title">${ch}</span>
        </li>
      `
      )
      .join("");
  } else {
    chapterContainer.innerHTML = `<li class="chapter-item">Chapter syllabus included in full PDF download.</li>`;
  }

  // Render sample excerpt
  document.getElementById("modal-sample-box").textContent =
    book.sample || "Sample preview available in full download.";

  // Render takeaways
  const takeawayContainer = document.getElementById("modal-takeaway-list");
  if (book.takeaways && book.takeaways.length > 0) {
    takeawayContainer.innerHTML = book.takeaways
      .map(
        (t) => `
        <li class="takeaway-item">
          <span class="takeaway-icon">✓</span>
          <span>${t}</span>
        </li>
      `
      )
      .join("");
  } else {
    takeawayContainer.innerHTML = `<li class="takeaway-item">Practical guide with checklists and templates.</li>`;
  }

  // Upload instruction
  const uploadInst = document.getElementById("modal-upload-instruction");
  if (uploadInst) {
    uploadInst.innerHTML = `Select your finalized PDF file, or copy it directly into <code>ebooks/${book.slug}.pdf</code>:`;
  }

  // PDF download, preview links and live viewer
  const pdfHref = uploadedFiles[book.slug] || `ebooks/${book.slug}.pdf`;
  const previewBtn = document.getElementById("modal-book-preview");
  if (previewBtn) {
    previewBtn.href = pdfHref;
    previewBtn.target = "_blank";
  }

  const pdfFrame = document.getElementById("modal-pdf-frame");
  if (pdfFrame) {
    pdfFrame.src = pdfHref;
  }
  const fullscreenLink = document.getElementById("modal-pdf-fullscreen");
  if (fullscreenLink) {
    fullscreenLink.href = pdfHref;
  }

  // Razorpay or instant access
  const razorpayUrl = EBOOK_PAYMENT_LINKS[book.slug];
  const payBtn = document.getElementById("modal-book-pay");
  if (razorpayUrl && razorpayUrl !== "#") {
    payBtn.href = razorpayUrl;
    payBtn.style.display = "inline-flex";
  } else {
    payBtn.style.display = "none";
  }

  // Reset tab to 'chapters'
  switchBookTab("chapters");

  document.getElementById("book-modal").classList.add("active");
}

function handleBookUpload(event) {
  const file = event.target.files[0];
  if (!file || currentBookIndex === null) return;

  const book = TRANSLATIONS[currentLang].books.items[currentBookIndex];
  const blobUrl = URL.createObjectURL(file);
  uploadedFiles[book.slug] = blobUrl;

  // Refresh links and iframe
  const previewBtn = document.getElementById("modal-book-preview");
  if (previewBtn) previewBtn.href = blobUrl;
  const pdfFrame = document.getElementById("modal-pdf-frame");
  if (pdfFrame) pdfFrame.src = blobUrl;
  const fullscreenLink = document.getElementById("modal-pdf-fullscreen");
  if (fullscreenLink) fullscreenLink.href = blobUrl;

  const status = document.getElementById("book-upload-status");
  status.textContent = `✓ Uploaded "${file.name}" for this session! (To make permanent, place in ebooks/${book.slug}.pdf)`;
  status.style.display = "block";
  setTimeout(() => (status.style.display = "none"), 5000);
}

// ==========================================================================
// Question & Consultation Modals
// ==========================================================================

function openQuestionModal(prefill = "") {
  document.getElementById("q-form-text").value = prefill;
  document.getElementById("question-success").style.display = "none";
  document.getElementById("question-form").style.display = "block";
  document.getElementById("question-modal").classList.add("active");
}

function handleQuestionSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("q-form-name").value;
  const contact = document.getElementById("q-form-contact").value;

  document.getElementById("question-form").style.display = "none";
  const successBox = document.getElementById("question-success");
  successBox.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy);">
        ${currentLang === "ta" ? "கேள்வி வெற்றிகரமாகப் பெறப்பட்டது!" : "Question Logged Successfully!"}
      </h3>
      <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--muted-foreground);">
        ${currentLang === "ta"
          ? `நன்றி ${name}! உங்கள் கேள்வி வழிகாட்டிக்கு அனுப்பப்பட்டுள்ளது. WhatsApp (${contact}) வழியாக தொடர்பு கொள்வோம்.`
          : `Thank you, ${name}! Your question has been recorded. Our team will connect via WhatsApp (${contact}) for answer delivery.`}
      </p>
      <div style="margin-top: 1rem; padding: 0.75rem; border-radius: 8px; background: var(--gold-soft); font-size: 0.8125rem; color: var(--gold-foreground);">
        ${TRANSLATIONS[currentLang].consult.q.payNote}
      </div>
      <button class="btn-navy" style="margin-top: 1.25rem; width: 100%;" onclick="closeModals()">
        ${currentLang === "ta" ? "சரி" : "Close"}
      </button>
    </div>
  `;
  successBox.style.display = "block";
}

function openConsultModal() {
  document.getElementById("consult-success").style.display = "none";
  document.getElementById("consult-form").style.display = "block";
  document.getElementById("consult-modal").classList.add("active");
}

function handleConsultSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("c-form-name").value;
  const contact = document.getElementById("c-form-contact").value;

  document.getElementById("consult-form").style.display = "none";
  const successBox = document.getElementById("consult-success");
  successBox.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">📅</div>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy);">
        ${currentLang === "ta" ? "முன்பதிவு கோரிக்கை அனுப்பப்பட்டது!" : "Appointment Request Received!"}
      </h3>
      <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--muted-foreground);">
        ${currentLang === "ta"
          ? `நன்றி ${name}! உங்கள் நேரடி ஆலோசனைக்கான கோரிக்கை பெறப்பட்டது. உங்கள் WhatsApp (${contact}) எண்ணிற்கு Google Meet இணைப்புடன் உறுதிப்படுத்துவோம்.`
          : `Thank you, ${name}! We have received your booking request. We will confirm your Google Meet link and time slot via WhatsApp (${contact}).`}
      </p>
      <div style="margin-top: 1rem; padding: 0.75rem; border-radius: 8px; background: var(--surface-alt); font-size: 0.8125rem; color: var(--navy);">
        ${TRANSLATIONS[currentLang].consult.c.payNote}
      </div>
      <button class="btn-navy" style="margin-top: 1.25rem; width: 100%;" onclick="closeModals()">
        ${currentLang === "ta" ? "சரி" : "Close"}
      </button>
    </div>
  `;
  successBox.style.display = "block";
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((m) => m.classList.remove("active"));
}

// ==========================================================================
// AI Question Brief Helper
// ==========================================================================

function handleGenerateBrief() {
  const issue = document.getElementById("brief-input").value.trim();
  const t = TRANSLATIONS[currentLang].brief;

  if (issue.length < 20) {
    alert(t.min);
    return;
  }

  // NLP Heuristic structuring
  const hsnMatch = issue.match(/\b\d{4,8}\b/);
  const hsn = hsnMatch ? hsnMatch[0] : currentLang === "ta" ? "குறிப்பிடப்படவில்லை" : "Not specified";

  let stage = currentLang === "ta" ? "சுங்கச் சரிபார்ப்பு / பரிசீலனை" : "Customs Clearance / In Transit";
  if (/port|chennai|nhava|customs|held|seized/i.test(issue)) {
    stage = currentLang === "ta" ? "துறைமுகம் / சுங்கத்துறை சரிபார்ப்பு" : "At Customs Port / Inspection";
  } else if (/before|plan|order|booking/i.test(issue)) {
    stage = currentLang === "ta" ? "முன்-ஏற்றுமதி / திட்டமிடல்" : "Pre-shipment / Planning";
  }

  let briefText = "";
  if (currentLang === "ta") {
    briefText = `SUMMARY\nவழங்குனர் சமர்ப்பித்த இறக்குமதி/சுங்க விவகார சுருக்கம்:\n${issue.slice(0, 180)}...\n\nKEY DETAILS\n- Product / goods: இறக்குமதிப் பொருட்கள் (விவரம் குறிப்பில் உள்ளது)\n- HSN code: ${hsn}\n- Origin country: சீனா / வெளிநாட்டு சப்ளையர்\n- Port / location: சென்னை / இந்திய துறைமுகம்\n- Stage: ${stage}\n- Documents involved: Bill of Entry, Commercial Invoice, Packing List\n- Deadline or urgency: உடனடி வழிகாட்டுதல் தேவை\n\nQUESTION FOR THE MENTOR\nசுங்கத்துறை ஆட்சேபனை அல்லது ஆவணச் சரிபார்ப்பை முறைப்படி எவ்வாறு தீர்ப்பது?\n\nMISSING INFORMATION TO ADD\n- Bill of Entry எண் மற்றும் சமர்ப்பிக்கப்பட்ட தேதி\n- சுங்க அதிகாரி கோரிய குறிப்பிட்ட வினா / ஆட்சேபனை கடிதம்\n- சப்ளையர் வழங்கிய ஆவணங்களின் நகல்கள்`;
  } else {
    briefText = `SUMMARY\nVisitor requires guidance regarding an active import documentation or clearance matter:\n"${issue.slice(0, 160)}..."\n\nKEY DETAILS\n- Product / goods: Imported goods specified in query\n- HSN code: ${hsn}\n- Origin country: Mentioned in brief or international supplier\n- Port / location: Indian port of entry\n- Stage: ${stage}\n- Documents involved: Bill of Entry, Commercial Invoice, Packing List, BL/AWB\n- Deadline or urgency: Priority review recommended\n\nQUESTION FOR THE MENTOR\nWhat is the proper procedural step to resolve this customs/documentation query and expedite clearance?\n\nMISSING INFORMATION TO ADD\n- Copy of the Bill of Entry (checklist / final)\n- Specific query raised by the Appraising Officer / Customs\n- Product catalogue, specifications, or valuation evidence`;
  }

  document.getElementById("brief-output").textContent = briefText;
  document.getElementById("brief-result").style.display = "block";
}

function copyBriefText() {
  const text = document.getElementById("brief-output").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.getElementById("brief-copy-btn");
    copyBtn.textContent = TRANSLATIONS[currentLang].brief.copied;
    showToast(currentLang === "ta" ? "📋 குறிப்பு நகலெடுக்கப்பட்டது!" : "📋 Question brief copied to clipboard!", "✓");
    setTimeout(() => {
      copyBtn.textContent = TRANSLATIONS[currentLang].brief.copy;
    }, 2000);
  });
}

function useBriefInQuestion() {
  const text = document.getElementById("brief-output").textContent;
  openQuestionModal(text);
}

function setBriefPrompt(type) {
  const input = document.getElementById("brief-input");
  if (!input) return;

  if (type === "electric-motor") {
    input.value =
      currentLang === "ta"
        ? "சென்னை துறைமுகத்தில் 1,200 கிலோ எலக்ட்ரிக் மோட்டார் இறக்குமதி செய்யப்பட்டுள்ளது. சுங்க அதிகாரி Chapter 8414 அல்லது 8501 வகைப்பாடு குறித்து ஆட்சேபனை கடிதம் கொடுத்துள்ளார். 15% வரி வித்தியாசம் வருகிறது."
        : "Shipment of 1,200kg industrial electric motors arrived at Chennai Port. Appraising officer raised query regarding classification dispute between Chapter 8414 vs 8501, demanding 15% differential duty.";
  } else if (type === "missing-incoterm") {
    input.value =
      currentLang === "ta"
        ? "சீன சப்ளையர் அனுப்பிய கமர்ஷியல் இன்வாய்ஸில் Incoterm விபரம் விடுபட்டுள்ளது மற்றும் நிறுவன சீல் கையெழுத்து இல்லை. சுங்கத்துறை 1st Check பரிசோதனைக்கு உத்தரவிட்டுள்ளது."
        : "Commercial invoice from overseas supplier is missing explicit Incoterm (FOB/CIF) and authorized seal. Customs officer has placed shipment on First Check examination.";
  } else if (type === "container-demurrage") {
    input.value =
      currentLang === "ta"
        ? "நவ சேவா CFS-ல் 40 அடி கண்டெய்னர் 12 நாட்களாக தேங்கியுள்ளது. ஷிப்பிங் லைன் அதிக டிடென்ஷன் மற்றும் டெமுரேஜ் கட்டணம் கோருகிறது. IDPMS சரிபார்ப்புடன் இதை எவ்வாறு தீர்ப்பது?"
        : "40ft container is stranded at Nhava Sheva CFS for 12 days awaiting IDPMS regularized invoice. Shipping line is demanding huge container detention and port demurrage charges.";
  }

  handleGenerateBrief();
  showToast(currentLang === "ta" ? "⚡ மாதிரி வினா தயாரானது!" : "⚡ Sample issue loaded & structured!", "💡");
}

// ==========================================================================
// Interactive Customs Duty & Landed Cost Calculator
// ==========================================================================

function calculateLandedCost() {
  const cifInput = document.getElementById("calc-cif");
  if (!cifInput) return;

  const cif = parseFloat(cifInput.value) || 0;
  const bcdRate = parseFloat(document.getElementById("calc-bcd-slider").value) || 0;
  const swsMultiplier = parseFloat(document.getElementById("calc-sws").value) || 0;
  const igstRate = parseFloat(document.getElementById("calc-igst").value) || 0;
  const clearance = parseFloat(document.getElementById("calc-clearance").value) || 0;

  // 1. Basic Customs Duty
  const bcdAmount = (cif * bcdRate) / 100;

  // 2. Social Welfare Surcharge (10% of BCD)
  const swsAmount = bcdAmount * 0.1 * swsMultiplier;

  // 3. Assessable Value for IGST = CIF + BCD + SWS
  const igstBase = cif + bcdAmount + swsAmount;

  // 4. IGST Amount
  const igstAmount = (igstBase * igstRate) / 100;

  // 5. Total Customs Duty Payable = BCD + SWS + IGST
  const totalDuty = bcdAmount + swsAmount + igstAmount;

  // 6. Total Landed Cost = CIF + Total Duty + Port/Clearance
  const totalLanded = cif + totalDuty + clearance;

  // 7. Effective Duty Burden % = (Total Duty / CIF) * 100
  const effectiveBurden = cif > 0 ? ((totalDuty / cif) * 100).toFixed(2) : "0.00";

  // Format in Indian Rupee format
  const formatInr = (num) => "₹" + Math.round(num).toLocaleString("en-IN");

  document.getElementById("res-cif").textContent = formatInr(cif);
  document.getElementById("res-bcd").textContent = formatInr(bcdAmount);
  document.getElementById("res-sws").textContent = formatInr(swsAmount);
  document.getElementById("res-base-igst").textContent = formatInr(igstBase);
  document.getElementById("res-igst").textContent = formatInr(igstAmount);
  document.getElementById("res-total-duty").textContent = formatInr(totalDuty);
  document.getElementById("res-clearance").textContent = formatInr(clearance);
  document.getElementById("res-total-landed").textContent = formatInr(totalLanded);

  const isTa = currentLang === "ta";
  document.getElementById("res-effective-rate").textContent = isTa
    ? `மொத்த சுங்க வரி சுமை: CIF மதிப்பில் ${effectiveBurden}%`
    : `Effective Customs Duty Burden: ${effectiveBurden}% of CIF`;
  document.getElementById("calc-bcd-display").textContent = `${bcdRate}%`;
}

function syncBcdSlider(val) {
  document.getElementById("calc-bcd-display").textContent = `${val}%`;
  calculateLandedCost();
}

function setCalcBcd(val) {
  document.getElementById("calc-bcd-slider").value = val;
  syncBcdSlider(val);
}

function setCalcValue(field, val) {
  if (field === "cif") {
    document.getElementById("calc-cif").value = val;
  }
  calculateLandedCost();
}

function copyCostingBreakdown() {
  const cif = document.getElementById("res-cif").textContent;
  const bcd = document.getElementById("res-bcd").textContent;
  const sws = document.getElementById("res-sws").textContent;
  const igst = document.getElementById("res-igst").textContent;
  const duty = document.getElementById("res-total-duty").textContent;
  const landed = document.getElementById("res-total-landed").textContent;
  const burden = document.getElementById("res-effective-rate").textContent;

  const text = `--- IMPORT COSTING & DUTY ASSESSMENT (CBIC RULES) ---\nAssessable Value (CIF): ${cif}\nBasic Customs Duty (BCD): ${bcd}\nSocial Welfare Surcharge (SWS): ${sws}\nIGST: ${igst}\n-----------------------------------\nTotal Customs Duty Payable: ${duty}\nEstimated Total Landed Cost: ${landed}\n${burden}\n-----------------------------------\nCalculated via Importpreneur VIP Portal (Mentor: Krishnakumar)`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(
      currentLang === "ta"
        ? "📋 கணக்கீட்டு விபரம் நகலெடுக்கப்பட்டது!"
        : "📋 Costing breakdown copied to clipboard!",
      "🧮"
    );
  });
}

function askMentorAboutCosting() {
  const cif = document.getElementById("res-cif").textContent;
  const duty = document.getElementById("res-total-duty").textContent;
  const landed = document.getElementById("res-total-landed").textContent;
  const prompt = `I calculated my shipment landed cost on your calculator:\n- CIF Assessable Value: ${cif}\n- Estimated Customs Duty: ${duty}\n- Total Landed Cost: ${landed}\n\nQuestion for Mentor Krishnakumar: Are there any specific exemptions, preferential FTA rates, or port demurrage risks I should check before opening the LC?`;
  openQuestionModal(prompt);
}

// ==========================================================================
// Toast Notification & FAQ Search
// ==========================================================================

function showToast(msg, icon = "✓") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="font-size: 1.25rem;">${icon}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4000);
}

function handleFaqSearch(query) {
  const term = query.trim().toLowerCase();
  const items = TRANSLATIONS[currentLang].faq.items;
  items.forEach((item, index) => {
    const el = document.getElementById(`faq-item-${index}`);
    if (!el) return;
    const matches =
      item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term);
    el.style.display = matches ? "block" : "none";
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileNav() {
  const mobNav = document.getElementById("mobile-nav");
  const btn = document.getElementById("mobile-menu-btn");
  if (mobNav) {
    const isActive = mobNav.classList.toggle("active");
    if (btn) {
      btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      btn.textContent = isActive ? "✕" : "☰";
    }
  }
}

function closeMobileNav() {
  const mobNav = document.getElementById("mobile-nav");
  const btn = document.getElementById("mobile-menu-btn");
  if (mobNav) mobNav.classList.remove("active");
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "☰";
  }
}

// ==========================================================================
// Initialization & Scroll Events
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Setup WhatsApp URLs on static links
  document.querySelectorAll('a[data-whatsapp="true"]').forEach((a) => {
    a.href = WHATSAPP_URL;
  });

  // Reading progress bar & back-to-top visibility
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.getElementById("scroll-progress");
    if (bar) bar.style.width = scrolled + "%";

    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
      topBtn.classList.toggle("visible", winScroll > 400);
    }
  });

  // Close modals on escape key or clicking backdrop
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModals();
    });
  });

  // Close mobile nav when clicking outside header
  document.addEventListener("click", (e) => {
    const header = document.querySelector(".header");
    if (header && !header.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close mobile nav on viewport resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) {
      closeMobileNav();
    }
  });

  // Language buttons
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-ta").addEventListener("click", () => setLanguage("ta"));

  // Initial render
  setLanguage(currentLang);
});
