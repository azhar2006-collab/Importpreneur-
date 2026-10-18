// ==========================================================================
// IMPORTPRENEUR VIP - COMPREHENSIVE BILINGUAL DICTIONARY (EN & TA)
// WITH FULL CHAPTER SYLLABUS, SAMPLE EXCERPTS & BOOK CONTENT
// ==========================================================================

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      learn: "What You Learn",
      books: "Books",
      audience: "Who Should Join",
      mentor: "About Mentor",
      faq: "FAQ",
    },
    cta: {
      join: "👑 JOIN IMPORTPRENEUR VIP ON WHATSAPP",
      joinShort: "👑 JOIN VIP ON WHATSAPP",
      joinVip: "👑 JOIN IMPORTPRENEUR VIP",
    },
    hero: {
      eyebrow: "🚢 Practical import knowledge. Real-world guidance.",
      title: "Want to Understand Importing Without Getting Lost in Customs, Documentation & Compliance?",
      bodyBefore: "Join the ",
      bodyStrong: "Importpreneur VIP WhatsApp Community",
      bodyAfter: " and learn the practical side of importing — from documentation and HSN classification to Customs, DGFT, costing and real-world shipment challenges.",
      microcopy: "Free to join • Practical learning • Community support",
      badge: "Documentation • Customs • Logistics",
    },
    pain: {
      eyebrow: "The reality of importing",
      title: "Importing Looks Simple. Until You Actually Start.",
      intro: "The real challenges often begin after the purchase order is placed. Documentation, classification, Customs, compliance, costing and coordination can quickly become confusing.",
      closing: "You don't need more confusion. You need practical guidance.",
      items: [
        {
          icon: "🧾",
          title: "Confusing Documentation",
          desc: "Not sure which documents are required from purchase to clearance?",
        },
        {
          icon: "🔎",
          title: "HSN Classification",
          desc: "Unsure how classification affects your import process and compliance?",
        },
        {
          icon: "🛃",
          title: "Customs Clearance",
          desc: "Worried about delays, queries and unexpected clearance issues?",
        },
        {
          icon: "📋",
          title: "Compliance",
          desc: "Finding it difficult to understand DGFT, regulatory requirements and related procedures?",
        },
        {
          icon: "💰",
          title: "Import Costing",
          desc: "Struggling to understand duties, freight, charges and the real landed cost?",
        },
        {
          icon: "🚢",
          title: "Practical Situations",
          desc: "Learning theory but finding it difficult to handle real-world shipment situations?",
        },
      ],
    },
    learn: {
      eyebrow: "Inside the community",
      title: "What You Will Learn Inside Importpreneur VIP",
      intro: "Focused, practical learning across the areas that actually decide how smoothly a shipment moves.",
      items: [
        {
          icon: "🧾",
          title: "Import Documentation",
          desc: "Understand the documents involved from purchasing through import clearance.",
        },
        {
          icon: "🔎",
          title: "HSN Classification",
          desc: "Build confidence in understanding and working with product classification concepts.",
        },
        {
          icon: "🛃",
          title: "Customs Clearance",
          desc: "Understand the practical flow of import clearance and common challenges.",
        },
        {
          icon: "📋",
          title: "DGFT & Compliance",
          desc: "Learn the fundamentals every importer and EXIM professional should understand.",
        },
        {
          icon: "💰",
          title: "Import Costing",
          desc: "Understand the different components that influence your landed import cost.",
        },
        {
          icon: "🤖",
          title: "AI for Importing",
          desc: "Discover practical ways AI can assist with learning, documentation checks and workflow support.",
        },
        {
          icon: "🚢",
          title: "Real-World Cases",
          desc: "Learn from practical shipment situations, common mistakes and lessons learned.",
        },
      ],
    },
    books: {
      eyebrow: "Self-paced learning",
      title: "Import Books & Guides",
      intro: "Practical e-books to build your import knowledge, at your own pace. Click any book to explore its full chapter syllabus, sample checklists, and instant PDF download.",
      buyNow: "View & Download",
      noteBefore: "Every e-book ",
      noteMiddle: " on the ",
      noteAfter: " list price.",
      secureNote: "Instant digital access • Secure UPI, cards & netbanking checkout.",
      checkout: "E-Book Details & Reader",
      checkoutDesc: "Explore complete chapter syllabus, sample content, and instant PDF download.",
      digital: "Digital e-book download (PDF)",
      pay: "Pay with Razorpay",
      emailNote: "You receive instant download access + email confirmation.",
      items: [
        {
          slug: "import-documentation-handbook",
          title: "Import Documentation Handbook",
          desc: "A step-by-step guide to the documents every importer needs from purchase order to customs out-of-charge.",
          pages: "52 Pages",
          tagline: "A Practical Guide to Smoother, Faster and Compliant Imports",
          chapters: [
            "Chapter 1: The Lifecycle of an Import Shipment & Document Timeline",
            "Chapter 2: Purchase Order, Proforma Invoice & Sales Contract Clauses",
            "Chapter 3: Commercial Invoice (Incoterms, HSN, Currency, Disclosures)",
            "Chapter 4: Packing List vs Commercial Invoice Discrepancies",
            "Chapter 5: Bill of Lading (B/L) & Air Waybill (AWB): Original, Seaway Bill & Surrender",
            "Chapter 6: Country of Origin (COO), Preferential Trade Agreements & FTA certificates",
            "Chapter 7: Bill of Entry (BE) and ICEGATE Filing Basics",
            "Chapter 8: Post-Clearance Documentation & Bank Realization (IDPMS / EDPMS)"
          ],
          sample: `PRACTICAL CHECKLIST: Commercial Invoice & Packing List Pre-Shipment Audit
1. Verify exact Incoterm: Ensure FOB, CIF, or CFR states the named port clearly (e.g., "CIF Nhava Sheva, India (Incoterms 2020)").
2. Match IEC & GSTIN: Confirm Buyer's legal entity name matches your ICEGATE registration.
3. HSN 8-digit Code: Must be printed on each line item to prevent assessment rejections.
4. Net Weight vs Gross Weight: Packing list net weight must exactly match invoice descriptions.
5. Authorized Signature & Stamp: Unsigned supplier invoices are the #1 cause for Customs 1st Check examination queries.`,
          takeaways: [
            "Complete 7-stage document checklist from vendor PO to warehouse gate-in",
            "How to structure Commercial Invoices to pass Customs Valuation Rules",
            "Solving IDPMS bank payment mismatches and avoiding RBI show-cause notices"
          ]
        },
        {
          slug: "hsn-classification-made-simple",
          title: "HSN Classification Made Simple",
          desc: "Build confidence in understanding product classification, 8-digit tariff structures and GRI rules.",
          pages: "44 Pages",
          tagline: "Master the 8-Digit Tariff Code System and Avoid Reclassification Disputes",
          chapters: [
            "Chapter 1: Anatomy of the Harmonized System: Chapter, Heading, Subheading & Tariff Item",
            "Chapter 2: General Rules for Interpretation (GRI 1 through 6) with Real Cases",
            "Chapter 3: Essential Character Rule (Rule 3b) for Composite & Set Goods",
            "Chapter 4: Section Notes and Chapter Notes: The Legal Authority",
            "Chapter 5: How to File an Advance Ruling (AAR) in Indian Customs",
            "Chapter 6: Resolving Classification Disputes with the Appraising Group"
          ],
          sample: `LEGAL RULE EXCERPT: Applying General Rule of Interpretation (GRI) 3(b)
When goods consist of different materials or are put up in sets for retail sale:
- Classification is determined by the component that gives the article its ESSENTIAL CHARACTER.
- Factors determining essential character include: nature of material, bulk, quantity, weight, value, and the role played by each component in product utility.
Example: A DIY solar lantern kit containing LED unit, mini panel, and mounting bracket is classified under the LED lighting heading based on its primary function.`,
          takeaways: [
            "How to correctly apply Section Notes and Chapter Notes before picking a code",
            "Preventing sudden duty rate revisions and differential duty penalty notices",
            "Step-by-step procedure to file an Authority for Advance Rulings (AAR) application"
          ]
        },
        {
          slug: "customs-clearance-guide",
          title: "Customs Clearance Guide",
          desc: "Learn the practical flow of import clearance, Turant Customs, and how to avoid port demurrage.",
          pages: "58 Pages",
          tagline: "Practical Flow of Import Clearance and How to Avoid Costly Port Delays",
          chapters: [
            "Chapter 1: Port Arrival & Inward Entry (IGM Filing by Shipping Lines)",
            "Chapter 2: Prior Bill of Entry vs Advance vs Regular Bill of Entry",
            "Chapter 3: Faceless Assessment: How the Turant Customs System Works",
            "Chapter 4: RMS (Risk Management System): Green Channel vs Assessment vs Examination",
            "Chapter 5: Customs Examination Orders: First Check vs Second Check",
            "Chapter 6: Appraising Queries & How to Draft Legally Sound Written Replies",
            "Chapter 7: Duty Payment, Out-of-Charge (OOC) and Delivery Order (DO)",
            "Chapter 8: Port Demurrage & Container Detention: How to Prevent Escalating Charges"
          ],
          sample: `OPERATIONAL PROTOCOL: Resolving ICEGATE Appraising Queries in Under 24 Hours
When a Faceless Assessment Group (FAG) officer raises a query on ICEGATE:
1. Identify the query type: Valuation, Technical Specs, End-Use Undertaking, or Exemption Notification.
2. Prepare a formal letter on importer company letterhead with IEC and Job number.
3. Attach supporting technical datasheets, catalog, manufacturer's declaration, or earlier cleared Bills of Entry for the same item.
4. Upload directly via ICEGATE e-Sanchit with the correct document type code. Prompt response avoids shifting to First Check physical examination!`,
          takeaways: [
            "Filing Prior Bill of Entry to clear goods within 24 hours of vessel docking",
            "Understanding Faceless Assessment Group (FAG) decision logic",
            "Negotiating free days with shipping lines to eliminate container detention fees"
          ]
        },
        {
          slug: "dgft-compliance-basics",
          title: "DGFT & Compliance Basics",
          desc: "Understand the fundamental policies, notifications, BIS, EPR, and compliance steps for Indian importers.",
          pages: "46 Pages",
          tagline: "Essential Policies, Notifications, and Compliance for Indian Importers",
          chapters: [
            "Chapter 1: Importer-Exporter Code (IEC): Linking with GST and DGFT Portal",
            "Chapter 2: Foreign Trade Policy (FTP) Fundamentals & Categories (Free, Restricted, Prohibited)",
            "Chapter 3: Compulsory Registration Scheme (CRS), BIS Standards & Testing Requirements",
            "Chapter 4: EPR (Extended Producer Responsibility) for E-Waste, Plastic & Battery Imports",
            "Chapter 5: Legal Metrology Declarations for Packaged Commodities",
            "Chapter 6: Export Promotion Schemes: Advance Authorisation & EPCG Basics"
          ],
          sample: `REGULATORY MATRIX: Mandatory Indian Compliance Before Import
- BIS (Bureau of Indian Standards): Compulsory for electronics, steel, toys, and chemicals. Requires factory audit or testing prior to dispatch.
- EPR (Extended Producer Responsibility): Mandatory CPCB portal registration for packaging, electronic components, and batteries.
- Legal Metrology (LMPC): Pre-packaged retail goods must carry importer name, address, MRP, manufacturing date, and net quantity labels before Customs clearance.`,
          takeaways: [
            "Navigating DGFT restricted lists and online authorization applications",
            "Step-by-step LMPC packaging compliance to avoid port confiscation",
            "EPCG and Advance Authorisation duty exemption mechanics"
          ]
        },
        {
          slug: "import-costing-landed-cost",
          title: "Import Costing & Landed Cost",
          desc: "Break down the real components that make up your landed import cost, from BCD to CFS charges.",
          pages: "48 Pages",
          tagline: "Break Down Real Duties, Freight, Port Surcharges & True Landed Costs",
          chapters: [
            "Chapter 1: Assessing CIF Value: Conversion Rates and Customs Exchange Rates",
            "Chapter 2: Basic Customs Duty (BCD) Calculation Models",
            "Chapter 3: Social Welfare Surcharge (SWS) & Agriculture Infrastructure Cess (AIDC)",
            "Chapter 4: IGST Valuation: Determining the Taxable Base",
            "Chapter 5: Freight Forwarder Local Charges: Terminal Handling (THC), D/O fees, CFS Charges",
            "Chapter 6: Inland Haulage, Transporter Detention and Hidden Clearance Expenses",
            "Chapter 7: Building a Reusable Landed Cost Excel Formula for Profit Margins"
          ],
          sample: `LANDED COST CALCULATION BLUEPRINT:
1. Assessable Value (AV) = CIF in INR (Calculated using CBIC Customs Exchange Rate, NOT bank rate).
2. Basic Customs Duty (BCD) = AV × BCD Rate (e.g., 7.5% or 10%).
3. Social Welfare Surcharge (SWS) = 10% of BCD amount.
4. Total Duty Base for IGST = (AV + BCD + SWS).
5. Integrated GST (IGST) = Duty Base × GST Rate (e.g., 18%).
6. Total Government Duty = BCD + SWS + IGST.
7. Landed Cost = AV + Total Duty + Port CFS charges + DO charges + CHA fee + Inland Freight.`,
          takeaways: [
            "Complete mathematical formula to compute landed cost to the rupee",
            "Distinction between Commercial Exchange Rate vs CBIC Customs Notified Rate",
            "Claiming full GST Input Tax Credit (ITC) on imported goods using Bill of Entry"
          ]
        },
        {
          slug: "exim-terminology-guide",
          title: "EXIM Terminology Guide",
          desc: "A quick reference to the key terms and acronyms used in international trade, freight and logistics.",
          pages: "38 Pages",
          tagline: "Quick Desk Reference to Key Terms in International Trade, Shipping & Logistics",
          chapters: [
            "Chapter 1: Incoterms 2020: FOB, CIF, CFR, EXW, DAP, DDP Deep Dive",
            "Chapter 2: Shipping & Freight Jargon: FCL, LCL, TEU, FEU, CFS, ICD, NVOCC, MBL vs HBL",
            "Chapter 3: Port & Customs Terms: IGM, EGM, OOC, LEO, RMS, ICEGATE, CHA, CBIC",
            "Chapter 4: Financial & Payment Terms: L/C, TT, DA, DP, Bank Guarantee",
            "Chapter 5: Demurrage vs Detention vs Port Storage: Exact Legal Distinctions"
          ],
          sample: `CRITICAL TERMS DEFINED:
- Demurrage: Charges levied by port/terminal for container occupying port land beyond free days.
- Detention: Charges levied by shipping line for holding container equipment outside the port beyond free days.
- Bill of Lading (B/L): Document of title issued by carrier confirming receipt of cargo for shipping.
- Master B/L vs House B/L: Master B/L is issued directly by mainline carrier; House B/L is issued by freight forwarder (NVOCC).
- Out-of-Charge (OOC): Final statutory order by Customs allowing physical release of goods.`,
          takeaways: [
            "Clear matrix of all 11 Incoterms 2020 with risk/cost transfer points",
            "Over 150+ international shipping and customs abbreviations defined",
            "How to speak the exact language of shipping lines, CHAs, and port officials"
          ]
        },
        {
          slug: "ai-for-importers",
          title: "AI for Importers",
          desc: "Discover practical ways AI can support documentation checks, HSN research and workflow tasks.",
          pages: "42 Pages",
          tagline: "Practical Ways AI Can Support Documentation, Research & Workflow Tasks",
          chapters: [
            "Chapter 1: Using AI as a Customs Research Assistant: Limitations & Rules",
            "Chapter 2: Automated Commercial Invoice vs Packing List Discrepancy Audits",
            "Chapter 3: AI-Assisted HSN Research: Finding Comparable Rulings and Notes",
            "Chapter 4: Drafting Professional Technical Letters in Response to Appraising Queries",
            "Chapter 5: Extracting Key Data from 50-Page Vendor Contracts & Specifications",
            "Chapter 6: Safety & Privacy: Never Uploading Sensitive Commercial Secrets"
          ],
          sample: `AI PROMPT SPECIMEN: Reviewing Packing List Discrepancies
Prompt Template:
"Act as a Senior Indian Customs Documentation Expert. Compare this Commercial Invoice against this Packing List. Identify: 1. Net weight / Gross weight mismatches. 2. Any item described differently across both files. 3. Missing unit prices or currency codes. 4. Flag any wording that could trigger Customs red-flags under Turant RMS."`,
          takeaways: [
            "35 copy-paste prompts designed specifically for EXIM and customs workflows",
            "Automating invoice audit routines to catch errors before CHA filings",
            "How to structure clear technical explanation letters for Appraising Officers"
          ]
        },
        {
          slug: "bill-of-entry-walkthrough",
          title: "Bill of Entry Walkthrough",
          desc: "A field-by-field practical walkthrough of one of the most important customs clearance forms.",
          pages: "50 Pages",
          tagline: "Step-by-Step Practical Walkthrough of Indian Customs Clearance Documentation",
          chapters: [
            "Chapter 1: Header Section: Port Code, BE Type, Job Number, Importer Details, AD Code",
            "Chapter 2: Supplier & Invoice Details: Currency, Terms, Valuation Rules Applied",
            "Chapter 3: Item-Level Breakdown: HSN, CTH, Notification Numbers, Exemption Claims",
            "Chapter 4: Duty Calculation Table: BCD, SWS, AIDC, Anti-Dumping Duty (ADD), IGST",
            "Chapter 5: Assessment Remarks & Customs Officers Examination Order",
            "Chapter 6: Out-of-Charge (OOC) Stamp & Delivery Release Protocol"
          ],
          sample: `BILL OF ENTRY ANATOMY: Reading the Electronic ICEGATE BE
- Section 1 (Header): Check Port Code (e.g., INMAA1 for Chennai Sea, INNSA1 for Nhava Sheva).
- Section 4 (Invoices): Confirm exchange rate date matches the date of BE submission.
- Section 8 (Item Table): Verify CTH (8-digit code), Country of Origin (COO), and Notification exemption serial numbers.
- Section 12 (Appraising Remarks): The official notes from the Appraiser or Assistant Commissioner indicating clearance status or inspection instructions.`,
          takeaways: [
            "Understanding all 16 major sections of an ICEGATE Bill of Entry document",
            "How to verify duty calculations before authorizing the customs broker payment",
            "Checking GSTIN credit transmission on GSTR-2B using the Bill of Entry reference"
          ]
        },
        {
          slug: "import-business-starter-guide",
          title: "Import Business Starter Guide",
          desc: "A beginner-friendly roadmap for anyone planning to start a profitable import business in India.",
          pages: "60 Pages",
          tagline: "A Beginner-Friendly Roadmap for Anyone Planning to Start an Import Venture",
          chapters: [
            "Chapter 1: Entity Setup: Sole Proprietorship vs LLP vs Pvt Ltd for Importers",
            "Chapter 2: Bank Current Account, Forex Authorisation & AD Code Registration",
            "Chapter 3: Sourcing Verified Suppliers: Alibaba, Trade Fairs & Overseas Factory Audits",
            "Chapter 4: Negotiating Payment Terms & Protecting Down Payments",
            "Chapter 5: Selecting the Right Freight Forwarder & Customs Broker (CHA)",
            "Chapter 6: Your First Test Shipment: Minimum Viable Import Strategy",
            "Chapter 7: Domestic Distribution, Warehousing & GST Input Tax Credit (ITC)"
          ],
          sample: `SUPPLIER DUE DILIGENCE: 5 Questions Before Paying Any Advance
1. Request Business License / Unified Social Credit Code (for Chinese suppliers).
2. Verify factory bank account matches company name on the commercial invoice (never pay personal accounts).
3. Require high-resolution photos of packaging, palletization, and labels prior to balance payment.
4. Agree in writing that original documents will be courier-dispatched or surrendered immediately upon receipt of TT balance.
5. Secure third-party pre-shipment inspection (PSI) for orders exceeding $10,000.`,
          takeaways: [
            "Comprehensive roadmap from company registration to first profitable shipment",
            "Negotiating 30% advance / 70% against Bill of Lading copy payment terms",
            "Protecting your working capital from supplier delays and customs impounds"
          ]
        },
        {
          slug: "freight-logistics-essentials",
          title: "Freight & Logistics Essentials",
          desc: "Learn key concepts in ocean freight, air cargo, warehousing, forwarders and last-mile delivery.",
          pages: "54 Pages",
          tagline: "Core Concepts in Ocean Freight, Air Cargo, Warehousing & Last-Mile Delivery",
          chapters: [
            "Chapter 1: Ocean Shipping: FCL vs LCL, 20ft vs 40ft vs 40HC Container Selection",
            "Chapter 2: Air Cargo Logistics: Actual Weight vs Volumetric Weight (Dimensional Factor 6000)",
            "Chapter 3: Bill of Lading Nuances: Negotiable vs Non-negotiable, Endorsements",
            "Chapter 4: Selecting Freight Forwarders: Spot Rates vs Annual Contracts",
            "Chapter 5: Marine Cargo Insurance: Institute Cargo Clauses (A, B, C) Explained",
            "Chapter 6: Inland Container Depots (ICD) and Multi-modal Transport in India"
          ],
          sample: `CONTAINER SELECTION GUIDE:
- 20ft Standard (20' GP): Capacity ~33 CBM | Max payload ~28,000 kg. Best for heavy, dense cargo (metals, stone, machinery).
- 40ft Standard (40' GP): Capacity ~67 CBM | Max payload ~26,500 kg. Best for general volume cargo.
- 40ft High Cube (40' HC): Capacity ~76 CBM (extra 1ft height). Optimal for voluminous, lightweight goods (garments, furniture, plastics).
Rule of thumb: If cargo volume exceeds 15 CBM, FCL (Full Container) is almost always cheaper and safer than LCL!`,
          takeaways: [
            "FCL vs LCL decision metrics to save 30% on ocean transit costs",
            "Calculating air freight chargeable weight and airline fuel/security surcharges",
            "Securing Marine Cargo Insurance with appropriate Institute Cargo Clauses (A)"
          ]
        },
      ],
    },
    mentor: {
      eyebrow: "Unique positioning",
      title: "Learn From Practical Industry Experience — Not Just Theory.",
      p1: "Importing involves more than buying goods from another country.",
      p2: "It involves documentation, classification, Customs, ports, shipping lines, freight forwarders, transporters, compliance and coordination.",
      p3: "The Importpreneur VIP community brings these practical dimensions together in one learning environment.",
      name: "Krishnakumar",
      role: "Import & Customs Documentation Mentor",
      quote: "30 years of logistics experience, with practical exposure to Customs, EXIM processes, documentation and international logistics.",
    },
    consult: {
      eyebrow: "Expert Help",
      title: "Ask the Mentor",
      intro: "Get a personal reply to your import question, or book a one-to-one session with Mentor Krishnakumar.",
      q: {
        title: "Ask a Question",
        price: "₹500",
        unit: "per question",
        sub: "Collected in two parts",
        desc: "Submit your question through the form and receive a written reply from the mentor.",
        stages: [
          { label: "₹250", note: "while logging your question" },
          { label: "₹250", note: "while collecting your answer" },
        ],
        payNote: "If your question is not answered, or is irrelevant, the amount you paid is fully refunded.",
        cta: "Submit a Question",
        payCta: "Pay ₹250 to log your question",
      },
      c: {
        title: "One-to-One Consultation",
        price: "₹1,000",
        unit: "per session",
        duration: "30 minutes",
        desc: "Book a private session to discuss your import documentation, Customs or compliance doubts.",
        payNote: "Pay only after your appointment is confirmed.",
        cta: "Book a Consultation",
      },
      note: "Questions cost ₹500 in total — ₹250 when you log it and ₹250 when you collect the answer. Anything unanswered or irrelevant is refunded in full.",
    },
    brief: {
      title: "Prepare your question brief",
      intro: "Describe your import or Customs issue in your own words. Our AI-powered helper turns it into a clear brief with the key details the mentor needs. It does not answer your question.",
      placeholder: "e.g. My shipment of LED lights from China is held at Chennai port. Customs is questioning the HSN code and the invoice value...",
      min: "Please write at least 20 characters.",
      btn: "Prepare Brief",
      busy: "Preparing...",
      result: "Your question brief",
      copy: "Copy brief",
      copied: "Copied!",
      use: "Use in Question Form",
    },
    audience: {
      eyebrow: "Who should join",
      title: "Wherever You Are Starting From, You Have a Place Here.",
      items: [
        {
          icon: "🌱",
          title: "Aspiring Importpreneurs",
          desc: "For people planning to enter the import business.",
        },
        {
          icon: "📦",
          title: "Existing Importers",
          desc: "For importers looking to strengthen their practical knowledge.",
        },
        {
          icon: "🚢",
          title: "Logistics Professionals",
          desc: "For professionals involved in freight, logistics and international trade.",
        },
        {
          icon: "🧾",
          title: "Customs Documentation Executives",
          desc: "For professionals handling import documentation and related processes.",
        },
        {
          icon: "🎓",
          title: "Students & Freshers",
          desc: "For learners preparing for careers in EXIM, logistics and supply chain.",
        },
        {
          icon: "📈",
          title: "Supply Chain Professionals",
          desc: "For professionals who want stronger import and international logistics knowledge.",
        },
      ],
    },
    comparison: {
      eyebrow: "Our learning philosophy",
      title: "Learn → Apply → Improve → Grow",
      intro: "Importpreneur VIP is built around applying what you learn to real shipments, not just collecting information.",
      typical: "Typical learning",
      vip: "Importpreneur VIP",
      rows: [
        { typical: "Theory", vip: "Practical application" },
        { typical: "One-way learning", vip: "Community interaction" },
        { typical: "Generic examples", vip: "Real-world situations" },
        { typical: "Learn and forget", vip: "Learn and apply" },
        { typical: "Information overload", vip: "Focused guidance" },
      ],
    },
    journey: {
      eyebrow: "Community experience",
      title: "Your Importpreneur Learning Journey",
      intro: "A community is more valuable when knowledge can be discussed, questioned and applied.",
      steps: [
        "Join",
        "Introduce yourself",
        "Access practical learning",
        "Ask questions",
        "Participate in challenges",
        "Build confidence",
        "Become a better import professional",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions People Ask Before Joining",
      items: [
        {
          q: "Is this community for beginners?",
          a: "Yes. Beginners can start with the fundamentals and progressively learn practical concepts.",
        },
        {
          q: "Do I need import experience?",
          a: "No. The community is designed for aspiring and existing import professionals.",
        },
        {
          q: "What topics are covered?",
          a: "Import documentation, Customs, HSN classification, DGFT, compliance, costing, logistics, AI-assisted learning and practical cases.",
        },
        {
          q: "Is this only for business owners?",
          a: "No. Students, freshers, documentation executives, logistics professionals and importers can participate.",
        },
        {
          q: "How do I join?",
          a: "Click the WhatsApp button and follow the joining instructions.",
        },
      ],
    },
    banner: {
      title: "🚢 Your Importpreneur Journey Starts With One Step.",
      p1: "Don't wait until a documentation mistake, classification issue or clearance delay teaches you an expensive lesson.",
      p2: "Join a practical learning community and strengthen your understanding of the import process.",
      microcopy: "Tap the button and join us on WhatsApp.",
    },
    footer: {
      disclaimer: "Disclaimer: The information presented through this website and community is intended for general educational purposes and should not be treated as legal, customs, tax, financial or regulatory advice. Import requirements can vary by product, country and applicable regulations. Members should verify current requirements with the relevant authorities and qualified professionals before making business or compliance decisions.",
      rights: "© Importpreneur VIP. All rights reserved.",
    },
  },

  ta: {
    nav: {
      home: "முகப்பு",
      learn: "நீங்கள் கற்பவை",
      books: "புத்தகங்கள்",
      audience: "யாருக்கானது",
      mentor: "வழிகாட்டி பற்றி",
      faq: "கேள்விகள்",
    },
    cta: {
      join: "👑 WHATSAPP-ல் இணையுங்கள்",
      joinShort: "👑 WHATSAPP-ல் இணையுங்கள்",
      joinVip: "👑 IMPORTPRENEUR VIP-ல் இணையுங்கள்",
    },
    hero: {
      eyebrow: "🚢 நடைமுறை இறக்குமதி அறிவு. நிஜ உலக வழிகாட்டுதல்.",
      title: "கஸ்டம்ஸ், ஆவணங்கள் & இணக்க விதிகளில் சிக்காமல் இறக்குமதியைப் புரிந்துகொள்ள விரும்புகிறீர்களா?",
      bodyBefore: "",
      bodyStrong: "Importpreneur VIP WhatsApp சமூகத்தில்",
      bodyAfter: " சேர்ந்து, இறக்குமதியின் நடைமுறைப் பகுதியைக் கற்றுக்கொள்ளுங்கள் — ஆவணங்கள், HSN வகைப்பாடு முதல் கஸ்டம்ஸ், DGFT, செலவு கணிப்பு மற்றும் நிஜ ஏற்றுமதிச் சவால்கள் வரை.",
      microcopy: "இலவசமாகச் சேரலாம் • நடைமுறைக் கற்றல் • சமூக ஆதரவு",
      badge: "ஆவணங்கள் • கஸ்டம்ஸ் • லாஜிஸ்டிக்ஸ்",
    },
    pain: {
      eyebrow: "இறக்குமதியின் உண்மை",
      title: "இறக்குமதி எளிதாகத் தெரியும். நீங்கள் உண்மையில் தொடங்கும் வரை.",
      intro: "கொள்முதல் ஆர்டர் கொடுத்த பிறகுதான் உண்மையான சவால்கள் பெரும்பாலும் தொடங்கும். ஆவணங்கள், வகைப்பாடு, கஸ்டம்ஸ், இணக்கம், செலவு மற்றும் ஒருங்கிணைப்பு விரைவில் குழப்பமாக மாறலாம்.",
      closing: "உங்களுக்கு மேலும் குழப்பம் தேவையில்லை. உங்களுக்கு நடைமுறை வழிகாட்டுதல் தேவை.",
      items: [
        {
          icon: "🧾",
          title: "குழப்பமான ஆவணங்கள்",
          desc: "கொள்முதல் முதல் தேர்வு வரை என்ன ஆவணங்கள் தேவை என்று தெரியவில்லையா?",
        },
        {
          icon: "🔎",
          title: "HSN வகைப்பாடு",
          desc: "வகைப்பாடு உங்கள் இறக்குமதி செயல்முறையையும் இணக்கத்தையும் எப்படிப் பாதிக்கிறது என்று உறுதியாகத் தெரியவில்லையா?",
        },
        {
          icon: "🛃",
          title: "கஸ்டம்ஸ் தேர்வு",
          desc: "தாமதங்கள், விசாரணைகள் மற்றும் எதிர்பாராத தேர்வுப் பிரச்சனைகள் பற்றிக் கவலையா?",
        },
        {
          icon: "📋",
          title: "இணக்கம்",
          desc: "DGFT, ஒழுங்குமுறைத் தேவைகள் மற்றும் தொடர்புடைய நடைமுறைகளைப் புரிந்துகொள்வது கடினமாக உள்ளதா?",
        },
        {
          icon: "💰",
          title: "இறக்குமதி செலவு",
          desc: "வரிகள், சரக்குக் கட்டணங்கள், கட்டணங்கள் மற்றும் உண்மையான landed செலவைப் புரிந்துகொள்வது சிரமமா?",
        },
        {
          icon: "🚢",
          title: "நடைமுறைச் சூழ்நிலைகள்",
          desc: "கோட்பாடு கற்றுக்கொண்டும் நிஜ உலக ஏற்றுமதிச் சூழ்நிலைகளைக் கையாள்வது கடினமாக உள்ளதா?",
        },
      ],
    },
    learn: {
      eyebrow: "சமூகத்தின் உள்ளே",
      title: "Importpreneur VIP-இல் நீங்கள் கற்பவை",
      intro: "ஒரு ஏற்றுமதி எவ்வளவு சுமுகமாக நகர்கிறது என்பதை உண்மையில் தீர்மானிக்கும் துறைகளில் கவனம் செலுத்திய, நடைமுறைக் கற்றல்.",
      items: [
        {
          icon: "🧾",
          title: "இறக்குமதி ஆவணங்கள்",
          desc: "கொள்முதல் முதல் இறக்குமதி தேர்வு வரை சம்பந்தப்பட்ட ஆவணங்களைப் புரிந்துகொள்ளுங்கள்.",
        },
        {
          icon: "🔎",
          title: "HSN வகைப்பாடு",
          desc: "தயாரிப்பு வகைப்பாட்டுக் கருத்துகளைப் புரிந்து பணியாற்றுவதில் நம்பிக்கை பெறுங்கள்.",
        },
        {
          icon: "🛃",
          title: "கஸ்டம்ஸ் தேர்வு",
          desc: "இறக்குமதி தேர்வின் நடைமுறை ஓட்டம் மற்றும் பொதுவான சவால்களைப் புரிந்துகொள்ளுங்கள்.",
        },
        {
          icon: "📋",
          title: "DGFT & இணக்கம்",
          desc: "ஒவ்வொரு இறக்குமதியாளரும் EXIM நிபுணரும் அறிந்திருக்க வேண்டிய அடிப்படைகளைக் கற்றுக்கொள்ளுங்கள்.",
        },
        {
          icon: "💰",
          title: "இறக்குமதி செலவு",
          desc: "உங்கள் landed இறக்குமதி செலவைப் பாதிக்கும் பல்வேறு கூறுகளைப் புரிந்துகொள்ளுங்கள்.",
        },
        {
          icon: "🤖",
          title: "இறக்குமதிக்கு AI",
          desc: "கற்றல், ஆவணச் சரிபார்ப்பு மற்றும் பணிப்பாய்வு ஆதரவில் AI எவ்வாறு உதவும் என்பதைக் கண்டறியுங்கள்.",
        },
        {
          icon: "🚢",
          title: "நிஜ உலக வழக்குகள்",
          desc: "நடைமுறை ஏற்றுமதிச் சூழ்நிலைகள், பொதுவான தவறுகள் மற்றும் கற்றுக்கொண்ட பாடங்களிலிருந்து கற்றுக்கொள்ளுங்கள்.",
        },
      ],
    },
    books: {
      eyebrow: "சுய-வேகக் கற்றல்",
      title: "இறக்குமதி புத்தகங்கள் & வழிகாட்டிகள்",
      intro: "உங்கள் சொந்த வேகத்தில் இறக்குமதி அறிவை உருவாக்க நடைமுறை மின்னூல்கள். முழு அத்தியாயங்கள் மற்றும் உடனடி PDF பதிவிறக்கத்தைக் காண எந்தப் புத்தகத்தையும் கிளிக் செய்யவும்.",
      buyNow: "பார் & பதிவிறக்கு",
      noteBefore: "ஒவ்வொரு மின்னூலும் ",
      noteMiddle: " — பட்டியல் விலை ",
      noteAfter: "-இல்.",
      secureNote: "உடனடி PDF அணுகல் • பாதுகாப்பான UPI, கார்டு & நெட்பேங்கிங் பணம் செலுத்தல்.",
      checkout: "மின்னூல் விவரங்கள் & வாசிப்பு",
      checkoutDesc: "அத்தியாயங்கள், நடைமுறை சரிபார்ப்புப் பட்டியல் மற்றும் உடனடி PDF பதிவிறக்கம்.",
      digital: "டிஜிட்டல் மின்னூல் பதிவிறக்கம் (PDF)",
      pay: "Razorpay மூலம் பணம் செலுத்துங்கள்",
      emailNote: "உடனடி பதிவிறக்க இணைப்பு + மின்னஞ்சல் உறுதிப்படுத்தல் கிடைக்கும்.",
      items: [
        {
          slug: "import-documentation-handbook",
          title: "Import Documentation Handbook",
          desc: "கொள்முதல் முதல் தேர்வு வரை ஒவ்வொரு இறக்குமதியாளருக்கும் தேவையான ஆவணங்களுக்கான படிப்படியான வழிகாட்டி.",
          pages: "52 பக்கங்கள்",
          tagline: "துல்லியமான மற்றும் வேகமான இறக்குமதி ஆவண வழிகாட்டி",
          chapters: [
            "அத்தியாயம் 1: இறக்குமதி ஏற்றுமதியின் வாழ்க்கைச் சுழற்சி & ஆவண காலவரிசை",
            "அத்தியாயம் 2: Purchase Order, Proforma Invoice & விற்பனை ஒப்பந்த சரத்துகள்",
            "அத்தியாயம் 3: Commercial Invoice (Incoterms, HSN, நாணயம்)",
            "அத்தியாயம் 4: Packing List vs Commercial Invoice முரண்பாடுகள்",
            "அத்தியாயம் 5: Bill of Lading (B/L) & Air Waybill (AWB) வகைகள்",
            "அத்தியாயம் 6: Country of Origin (COO) & FTA ஒப்பந்த சான்றிதழ்கள்",
            "அத்தியாயம் 7: Bill of Entry (BE) & ICEGATE தாக்கல் அடிப்படைகள்",
            "அத்தியாயம் 8: வங்கி தீர்வு மற்றும் IDPMS / EDPMS நடைமுறைகள்"
          ],
          sample: `முக்கிய சரிபார்ப்புப் பட்டியல்: Commercial Invoice சரிபார்ப்பு
1. சரியான Incoterm குறிப்பிடப்பட்டுள்ளதா (எ.கா. CIF Nhava Sheva, FOB Shanghai)?
2. 8-இலக்க HSN குறியீடு ஒவ்வொரு பொருளுக்கும் குறிப்பிடப்பட்டுள்ளதா?
3. சப்ளையரின் அங்கீகரிக்கப்பட்ட கையொப்பம் மற்றும் முத்திரை உள்ளதா?
4. Packing List எடையும் Invoice எடையும் சரியாகப் பொருந்துகிறதா?`,
          takeaways: [
            "அனைத்து 7 முக்கிய இறக்குமதி ஆவணங்களுக்கான படிப்படியான சரிபார்ப்புப் பட்டியல்",
            "சுங்கத்துறை விசாரணைகளை முன்கூட்டியே தவிர்க்கும் முறைகள்",
            "வங்கி IDPMS தீர்வு சிக்கல்களை எளிதாகத் தீர்க்கும் வழிகள்"
          ]
        },
        {
          slug: "hsn-classification-made-simple",
          title: "HSN Classification Made Simple",
          desc: "தயாரிப்பு வகைப்பாடு, 8-இலக்க தீர்வைக் கட்டமைப்பு மற்றும் GRI விதிகளில் தேர்ச்சி பெறுங்கள்.",
          pages: "44 பக்கங்கள்",
          tagline: "8-இலக்க வரி குறியீட்டு முறையை எளிதாகக் கற்றுக் கொள்ளுங்கள்",
          chapters: [
            "அத்தியாயம் 1: Harmonized System கட்டமைப்பு: அத்தியாயம், தலைப்பு, உட்பிரிவு",
            "அத்தியாயம் 2: GRI விதிகள் 1 முதல் 6 வரை - நிஜ உதாரணங்களுடன் விளக்கம்",
            "அத்தியாயம் 3: Essential Character Rule (விதி 3b) கூட்டுப் பொருட்களுக்கு",
            "அத்தியாயம் 4: Section Notes மற்றும் Chapter Notes சட்டபூர்வ அதிகாரம்",
            "அத்தியாயம் 5: இந்திய சுங்கத்துறையில் Advance Ruling (AAR) தாக்கல் செய்தல்",
            "அத்தியாயம் 6: வகைப்பாடு மறுஆய்வு ஆட்சேபனைகளை சட்டப்பூர்வமாக தீர்த்தல்"
          ],
          sample: `GRI விதி 3(b) பயன்பாடு:
பல்வேறு பாகங்களைக் கொண்ட பொருட்களுக்கு, அந்த பொருளுக்கு "அடிப்படைத் தன்மை" (Essential Character) தரும் முக்கியப் பாகத்தின் அடிப்படையில் HSN வகைப்பாடு தீர்மானிக்கப்படுகிறது.`,
          takeaways: [
            "Section Notes மற்றும் Chapter Notes விதிகளின்படி சரியான குறியீட்டைத் தேர்ந்தெடுப்பது எப்படி",
            "திடீர் வரி திருத்தங்கள் மற்றும் அபராதங்களைத் தவிர்ப்பது எப்படி",
            "முன்கூட்டியே Advance Ruling உத்தரவு பெறும் வழிமுறை"
          ]
        },
        {
          slug: "customs-clearance-guide",
          title: "Customs Clearance Guide",
          desc: "துறைமுக வருகை முதல் கிடங்கு சேர்ப்பு வரையிலான நடைமுறை சுங்க அனுமதி வழிகாட்டி.",
          pages: "58 பக்கங்கள்",
          tagline: "துறைமுகத் தாமதங்களைத் தவிர்க்க நடைமுறை சுங்க அனுமதி வழிகாட்டி",
          chapters: [
            "அத்தியாயம் 1: கப்பல் வருகை & IGM பதிவு நடைமுறை",
            "அத்தியாயம் 2: Prior Bill of Entry vs Advance vs வழக்கமான Bill of Entry",
            "அத்தியாயம் 3: Faceless Assessment: Turant சுங்க அமைப்பு எவ்வாறு செயல்படுகிறது",
            "அத்தியாயம் 4: RMS அமைப்பு: Green Channel vs ஆய்வு vs சோதனை",
            "அத்தியாயம் 5: சுங்க ஆய்வு உத்தரவுகள்: First Check vs Second Check",
            "அத்தியாயம் 6: சுங்க வினாக்களுக்கு முறையான எழுத்துப்பூர்வ பதில் தயாரித்தல்",
            "அத்தியாயம் 7: வரி செலுத்துதல், Out-of-Charge (OOC) & Delivery Order (DO)",
            "அத்தியாயம் 8: துறைமுக Demurrage & Container Detention கட்டணங்களைத் தவிர்த்தல்"
          ],
          sample: `24 மணி நேரத்தில் ICEGATE சுங்க வினாக்களுக்கு பதிலளிக்கும் முறை:
1. வினாவின் வகையைக் கண்டறியவும்: மதிப்பு, விவரக்குறிப்பு அல்லது விலக்கு அறிவிப்பு.
2. நிறுவன கடிதத் தலைப்பில் தொழில்முறை விளக்கக் கடிதத்தைத் தயாரிக்கவும்.
3. e-Sanchit மூலம் தொழில்நுட்ப விவரக்குறிப்புகள் மற்றும் சான்றிதழ்களைப் பதிவேற்றவும்.`,
          takeaways: [
            "கப்பல் வந்து சேர்ந்த 24 மணி நேரத்திற்குள் பொருட்களை விடுவிக்கும் முறை",
            "Faceless Assessment பரிசீலனைகளைச் சுமுகமாகக் கடக்கும் வழிகள்",
            "கப்பல் நிறுவனங்களுடன் கூடுதல் இலவச நாட்களைப் பெற்று Detention கட்டணத்தை தவிர்த்தல்"
          ]
        },
        {
          slug: "dgft-compliance-basics",
          title: "DGFT & Compliance Basics",
          desc: "இந்திய இறக்குமதியாளர்களுக்கான அடிப்படைக் கொள்கைகள், அறிவிப்புகள், BIS மற்றும் EPR இணக்கப் படிகள்.",
          pages: "46 பக்கங்கள்",
          tagline: "இந்திய இறக்குமதிக்கான முக்கிய ஒழுங்குமுறை வழிகாட்டி",
          chapters: [
            "அத்தியாயம் 1: Importer-Exporter Code (IEC) மற்றும் DGFT போர்ட்டல் இணைப்பு",
            "அத்தியாயம் 2: வெளிநாட்டு வர்த்தகக் கொள்கை (FTP) அடிப்படைகள்",
            "அத்தியாயம் 3: BIS தரநிலைகள் மற்றும் சோதனைத் தேவைகள்",
            "அத்தியாயம் 4: E-Waste, பிளாஸ்டிக் மற்றும் பேட்டரி இறக்குமதிக்கான EPR பதிவு",
            "அத்தியாயம் 5: பொட்டலப் பொருட்களுக்கான Legal Metrology (LMPC) விதிகளின் தேவைகள்",
            "அத்தியாயம் 6: ஏற்றுமதி ஊக்குவிப்பு திட்டங்கள்: Advance Authorisation & EPCG"
          ],
          sample: `முக்கிய சட்டப்பூர்வ தேவைகள்:
- BIS பதிவு: எலக்ட்ரானிக்ஸ் மற்றும் எஃகு பொருட்களுக்கு கட்டாயம்.
- EPR பதிவு: பேக்கேஜிங் மற்றும் மின் கழிவுகளுக்கு CPCB போர்ட்டலில் கட்டாயம்.
- LMPC லேபிளிங்: இந்திய சந்தையில் விற்கப்படும் பொட்டலப் பொருட்களில் MRP, இறக்குமதியாளர் முகவரி லேபிள் இருக்க வேண்டும்.`,
          takeaways: [
            "DGFT கட்டுப்பாட்டுப் பட்டியல்களைப் புரிந்துகொள்வது",
            "துறைமுகத்தில் சரக்குகள் பறிமுதல் செய்யப்படுவதைத் தடுக்கும் லேபிளிங் விதிகள்",
            "வரி விலக்கு திட்டங்களைச் சரியாகப் பயன்படுத்தும் வழிகள்"
          ]
        },
        {
          slug: "import-costing-landed-cost",
          title: "Import Costing & Landed Cost",
          desc: "உங்கள் landed இறக்குமதி செலவை உருவாக்கும் உண்மையான வரிகள், சரக்குக் கட்டணங்கள் மற்றும் CFS செலவுகள்.",
          pages: "48 பக்கங்கள்",
          tagline: "உண்மையான இறக்குமதி செலவைக் கணக்கிடும் முழுமையான வழிகாட்டி",
          chapters: [
            "அத்தியாயம் 1: CIF மதிப்பு: சுங்க மாற்று விகிதங்கள் (CBIC Exchange Rates)",
            "அத்தியாயம் 2: Basic Customs Duty (BCD) கணக்கீட்டு முறைகள்",
            "அத்தியாயம் 3: Social Welfare Surcharge (SWS) & AIDC செஸ் வரிகள்",
            "அத்தியாயம் 4: IGST மதிப்பீடு: வரிக்குரிய தொகையைக் கணக்கிடுதல்",
            "அத்தியாயம் 5: துறைமுக உள்ளூர் கட்டணங்கள்: THC, D/O மற்றும் CFS செலவுகள்",
            "அத்தியாயம் 6: உள்நாட்டுப் போக்குவரத்து மற்றும் மறைமுக செலவுகள்",
            "அத்தியாயம் 7: லாப வரம்புகளுக்கான மறுபயன்பாட்டு Landed Cost Excel சூத்திரம்"
          ],
          sample: `கணக்கீட்டு சூத்திரம்:
1. Assessable Value (AV) = CIF INR.
2. BCD = AV × BCD %.
3. SWS = BCD தொகையில் 10%.
4. IGST = (AV + BCD + SWS) × IGST %.
5. மொத்த சுங்க வரி = BCD + SWS + IGST.
6. Landed Cost = AV + வரிகள் + CFS கட்டணம் + உள்ளூர் போக்குவரத்து.`,
          takeaways: [
            "துல்லியமாக ஒவ்வொரு பைசாவையும் கணக்கிடும் கணித முறை",
            "வங்கி மாற்று விகிதத்திற்கும் சுங்க மாற்று விகிதத்திற்கும் உள்ள வேறுபாடு",
            "Bill of Entry மூலம் 100% GST உள்ளீட்டு வரி வரவு (ITC) பெறுவது எப்படி"
          ]
        },
        {
          slug: "exim-terminology-guide",
          title: "EXIM Terminology Guide",
          desc: "சர்வதேச வர்த்தகம், கப்பல் போக்குவரத்து மற்றும் சுங்கத்தில் பயன்படும் 150+ முக்கிய கலைச்சொற்கள்.",
          pages: "38 பக்கங்கள்",
          tagline: "சர்வதேச வர்த்தக கலைச்சொற்களுக்கான விரிவான கையேடு",
          chapters: [
            "அத்தியாயம் 1: Incoterms 2020: FOB, CIF, CFR, EXW, DAP, DDP விளக்கம்",
            "அத்தியாயம் 2: சரக்கு & கப்பல் கலைச்சொற்கள்: FCL, LCL, TEU, CFS, ICD",
            "அத்தியாயம் 3: துறைமுக & சுங்க சொற்கள்: IGM, EGM, OOC, RMS, ICEGATE",
            "அத்தியாயம் 4: நிதி & பணம் செலுத்தும் முறைகள்: L/C, TT, DA, DP",
            "அத்தியாயம் 5: Demurrage vs Detention vs Port Storage சட்டப்பூர்வ வேறுபாடுகள்"
          ],
          sample: `முக்கிய சொற்கள்:
- Demurrage: கொள்கலன் துறைமுக நிலத்தில் அனுமதிக்கப்பட்ட நாட்களைத் தாண்டி இருக்கும்போது துறைமுகம் விதிக்கும் கட்டணம்.
- Detention: கொள்கலன் துறைமுகத்திற்கு வெளியே தாமதமாகும் போது கப்பல் நிறுவனம் விதிக்கும் கட்டணம்.
- OOC (Out of Charge): சுங்கத்துறை சரக்குகளை முழுமையாக விடுவிக்கும் இறுதி ஆணை.`,
          takeaways: [
            "11 Incoterms 2020 பொறுப்பு மற்றும் இடர் எல்லைகள்",
            "150+ சுங்க மற்றும் கப்பல் சுருக்கக் குறியீடுகள்",
            "சரக்கு முகவர்கள் மற்றும் சுங்க அதிகாரிகளுடன் சரியான முறையில் உரையாடும் கலை"
          ]
        },
        {
          slug: "ai-for-importers",
          title: "AI for Importers",
          desc: "ஆவணங்கள், ஆராய்ச்சி மற்றும் பணிப்பாய்வுப் பணிகளில் AI ஆதரவளிக்கும் நடைமுறை வழிகள் மற்றும் அறிவுறுத்தல்கள்.",
          pages: "42 பக்கங்கள்",
          tagline: "இறக்குமதியாளர்களுக்கான நவீன AI பணிப்பாய்வுகள்",
          chapters: [
            "அத்தியாயம் 1: சுங்க ஆராய்ச்சி உதவியாளராக AI-ஐப் பயன்படுத்துதல்",
            "அத்தியாயம் 2: Invoice vs Packing List முரண்பாடுகளை தானாகக் கண்டறிதல்",
            "அத்தியாயம் 3: HSN ஆராய்ச்சியில் AI வழிகாட்டுதல்கள்",
            "அத்தியாயம் 4: சுங்க வினாக்களுக்கான தொழில்முறை தொழில்நுட்பக் கடிதங்கள் எழுதுதல்",
            "அத்தியாயம் 5: வெளிநாட்டு சப்ளையர் ஒப்பந்தங்களை ஆய்வு செய்தல்",
            "அத்தியாயம் 6: பாதுகாப்பு & ரகசியத்தன்மை விதிகள்"
          ],
          sample: `AI Prompt மாதிரி:
"நீங்கள் ஒரு அனுபவமிக்க இந்திய சுங்க ஆவண நிபுணர். இந்த Commercial Invoice மற்றும் Packing List-ஐ ஒப்பிட்டு எடைக் குறைபாடுகள், வரி குறியீட்டு பிழைகள் மற்றும் சுங்கத்துறை கேள்விகளை ஏற்படுத்தக்கூடிய வார்த்தைகளைக் கண்டறியவும்."`,
          takeaways: [
            "இறக்குமதிக்காக வடிவமைக்கப்பட்ட 35 உடனடி AI Prompts",
            "ஆவணப் பிழைகளை மனிதத் தவறுகளின்றி நொடிகளில் கண்டறிவது",
            "சுங்க அதிகாரிகளுக்கு விரைவான விளக்கக் கடிதங்களைத் தயாரிப்பது"
          ]
        },
        {
          slug: "bill-of-entry-walkthrough",
          title: "Bill of Entry Walkthrough",
          desc: "மிக முக்கியமான சுங்க அனுமதி ஆவணமான Bill of Entry-இன் ஒவ்வொரு பகுதியையும் எளிதாகப் புரிந்து கொள்ளுங்கள்.",
          pages: "50 பக்கங்கள்",
          tagline: "இந்திய சுங்க அனுமதி ஆவணத்தின் முழுமையான நடைமுறை விளக்கம்",
          chapters: [
            "அத்தியாயம் 1: தலைப்பு பகுதி: துறைமுக குறியீடு, வேலை எண், AD Code",
            "அத்தியாயம் 2: சப்ளையர் & விலைப்பட்டியல் விவரங்கள், நாணயம் மற்றும் மதிப்பீட்டு விதிகள்",
            "அத்தியாயம் 3: பொருட்கள் அட்டவணை: HSN, CTH மற்றும் வரி விலக்கு அறிவிப்புகள்",
            "அத்தியாயம் 4: வரி கணக்கீட்டு அட்டவணை: BCD, SWS, AIDC மற்றும் IGST",
            "அத்தியாயம் 5: சுங்க அதிகாரியின் மதிப்பீட்டுக் குறிப்புகள் & ஆய்வு உத்தரவு",
            "அத்தியாயம் 6: Out-of-Charge (OOC) முத்திரை & சரக்கு விடுவிப்பு நெறிமுறை"
          ],
          sample: `Bill of Entry முக்கிய பகுதிகள்:
- பகுதி 1: Port Code (சென்னை: INMAA1, நவஷேவா: INNSA1).
- பகுதி 4: விலைப்பட்டியல் மாற்று விகிதத் தேதி.
- பகுதி 8: 8-இலக்க CTH குறியீடு மற்றும் வரி விலக்கு அறிவிப்பு வரிசை எண்.
- பகுதி 12: சுங்கத்துறை ஆய்வாளரின் குறிப்புகள்.`,
          takeaways: [
            "Bill of Entry-இன் அனைத்து 16 முக்கியப் பிரிவுகளையும் வாசிக்கும் திறன்",
            "வரி செலுத்தும் முன் CHA கணக்கீடுகளைச் சரிபார்க்கும் முறை",
            "GSTR-2B-ல் வரி வரவு சரியாக பதிவாவதை உறுதி செய்யும் வழிகள்"
          ]
        },
        {
          slug: "import-business-starter-guide",
          title: "Import Business Starter Guide",
          desc: "இறக்குமதி வணிகம் தொடங்கத் திட்டமிடும் எவருக்கும் ஏற்ற தொடக்கநிலை முதல் வெற்றி வரையிலான வரைபடம்.",
          pages: "60 பக்கங்கள்",
          tagline: "இறக்குமதி வணிகத்தைத் தொடங்குவதற்கான முழுமையான வழிகாட்டி",
          chapters: [
            "அத்தியாயம் 1: நிறுவன அமைப்பு: Proprietorship vs LLP vs Pvt Ltd",
            "அத்தியாயம் 2: வங்கி கணக்கு, அந்நிய செலாவணி மற்றும் AD Code பதிவு",
            "அத்தியாயம் 3: நம்பகமான வெளிநாட்டு சப்ளையர்களைத் தேர்ந்தெடுப்பது எப்படி",
            "அத்தியாயம் 4: பாதுகாப்பான கட்டண விதிமுறைகளை ஒப்பந்தம் செய்தல்",
            "அத்தியாயம் 5: சரியான Freight Forwarder மற்றும் சுங்க முகவரை (CHA) தேர்ந்தெடுப்பது",
            "அத்தியாயம் 6: உங்கள் முதல் சோதனை ஏற்றுமதி உத்தி",
            "அத்தியாயம் 7: உள்நாட்டு விநியோகம், கிடங்கு மற்றும் GST உள்ளீட்டு வரி வரவு"
          ],
          sample: `முன்பணம் செலுத்தும் முன் சப்ளையரிடம் கேட்க வேண்டிய 5 முக்கிய கேள்விகள்:
1. நிறுவன வணிக உரிமம் நகல்.
2. தொழிற்சாலை வங்கி கணக்கு மட்டுமே (தனிநபர் கணக்கிற்கு பணம் அனுப்பக் கூடாது).
3. ஏற்றுமதிக்கு முன் பேக்கிங் மற்றும் லேபிள் புகைப்படங்கள்.
4. B/L நகல் கிடைத்த பின்னரே மீதிப் பணத்தை அனுப்புவதற்கான எழுத்துப்பூர்வ ஒப்பந்தம்.`,
          takeaways: [
            "நிறுவனப் பதிவு முதல் முதல் லாபகரமான ஏற்றுமதி வரையிலான வரைபடம்",
            "30% முன்பணம் / 70% B/L நகலுக்கு எதிராக ஒப்பந்தம் செய்யும் நுணுக்கங்கள்",
            "சுங்கத் தடைகளில் மூலதனம் முடங்குவதைத் தடுக்கும் உத்திகள்"
          ]
        },
        {
          slug: "freight-logistics-essentials",
          title: "Freight & Logistics Essentials",
          desc: "கடல் சரக்கு, வான் சரக்கு, கொள்கலன் தேர்வுகள் மற்றும் உள்நாட்டு விநியோகத்தின் முக்கியக் கருத்துகள்.",
          pages: "54 பக்கங்கள்",
          tagline: "சர்வதேச சரக்கு மற்றும் லாஜிஸ்டிக்ஸ் செயல்பாடுகள்",
          chapters: [
            "அத்தியாயம் 1: கடல் கப்பல்: FCL vs LCL, 20ft vs 40ft vs 40HC கொள்கலன்கள்",
            "அத்தியாயம் 2: வான் சரக்கு: உண்மையான எடை vs பருமன் எடை (Volumetric Weight)",
            "அத்தியாயம் 3: Bill of Lading நுணுக்கங்கள்: அசல் மற்றும் சரண்டர் B/L",
            "அத்தியாயம் 4: சரக்கு முகவர்களைத் தேர்ந்தெடுப்பது: ஸ்பாட் விகிதங்கள் vs ஆண்டு ஒப்பந்தங்கள்",
            "அத்தியாயம் 5: கடல் சரக்கு காப்பீடு: Institute Cargo Clauses (A, B, C) விளக்கம்",
            "அத்தியாயம் 6: உள்நாட்டு உலர் துறைமுகங்கள் (ICD) மற்றும் பல்முனையப் போக்குவரத்து"
          ],
          sample: `கொள்கலன் தேர்வு வழிகாட்டி:
- 20ft Standard: கொள்ளளவு ~33 CBM | அதிகபட்ச சுமை ~28,000 kg (கனமான பொருட்களுக்கு சிறந்தது).
- 40ft Standard: கொள்ளளவு ~67 CBM | அதிகபட்ச சுமை ~26,500 kg (பொதுவான பொருட்களுக்கு).
- 40ft High Cube: கொள்ளளவு ~76 CBM (குறைந்த எடை, அதிக பருமன் கொண்ட பொருட்களுக்கு சிறந்தது).
15 CBM-க்கு அதிகமானால் எப்போதும் முழு கொள்கலன் (FCL) தேர்வு செய்வதே சிக்கனமானது!`,
          takeaways: [
            "கடல் சரக்கு செலவில் 30% சேமிக்கும் FCL vs LCL உத்திகள்",
            "விமான சரக்கு கட்டணங்களை முன்கூட்டியே சரியாகக் கணக்கிடுவது",
            "Institute Cargo Clauses (A) மூலம் 100% சரக்கு இழப்பீட்டுப் பாதுகாப்பைப் பெறுவது"
          ]
        },
      ],
    },
    mentor: {
      eyebrow: "தனித்துவமான நிலை",
      title: "வெறும் கோட்பாடு அல்ல — நடைமுறைத் துறை அனுபவத்திலிருந்து கற்றுக்கொள்ளுங்கள்.",
      p1: "இறக்குமதி என்பது வேறு நாட்டிலிருந்து பொருட்களை வாங்குவது மட்டுமல்ல.",
      p2: "அதில் ஆவணங்கள், வகைப்பாடு, கஸ்டம்ஸ், துறைமுகங்கள், கப்பல் நிறுவனங்கள், சரக்கு முகவர்கள், போக்குவரத்து, இணக்கம் மற்றும் ஒருங்கிணைப்பு அடங்கும்.",
      p3: "Importpreneur VIP சமூகம் இந்த நடைமுறைப் பரிமாணங்களை ஒரே கற்றல் சூழலில் ஒன்றிணைக்கிறது.",
      name: "கிருஷ்ணகுமார்",
      role: "இறக்குமதி & கஸ்டம்ஸ் ஆவண வழிகாட்டி",
      quote: "30 ஆண்டுகள் லாஜிஸ்டிக்ஸ் அனுபவம், கஸ்டம்ஸ், EXIM செயல்முறைகள், ஆவணங்கள் மற்றும் சர்வதேச லாஜிஸ்டிக்ஸில் நடைமுறை அனுபவம்.",
    },
    consult: {
      eyebrow: "நிபுணர் உதவி",
      title: "வழிகாட்டியிடம் கேளுங்கள்",
      intro: "உங்கள் இறக்குமதி கேள்விக்கு தனிப்பட்ட பதில் பெறுங்கள், அல்லது வழிகாட்டி கிருஷ்ணகுமாருடன் நேரடி ஆலோசனையை முன்பதிவு செய்யுங்கள்.",
      q: {
        title: "கேள்வி கேளுங்கள்",
        price: "₹500",
        unit: "ஒரு கேள்விக்கு",
        sub: "இரண்டு தவணைகள்",
        desc: "படிவம் மூலம் உங்கள் கேள்வியை அனுப்புங்கள்; வழிகாட்டியிடமிருந்து எழுத்துப்பூர்வ பதில் பெறுங்கள்.",
        stages: [
          { label: "₹250", note: "கேள்வியை பதிவு செய்யும்போது" },
          { label: "₹250", note: "பதிலைப் பெறும்போது" },
        ],
        payNote: "பதில் கிடைக்காதென்றாலோ அல்லது கேள்வி பொருந்தாதென்றாலோ, செலுத்திய தொகை முழுவதும் திரும்ப வழங்கப்படும்.",
        cta: "கேள்வியை அனுப்பு",
        payCta: "கேள்வியைப் பதிவு செய்ய ₹250 செலுத்துங்கள்",
      },
      c: {
        title: "நேரடி ஆலோசனை",
        price: "₹1,000",
        unit: "ஒரு அமர்வுக்கு",
        duration: "30 நிமிடங்கள்",
        desc: "இறக்குமதி ஆவணங்கள், சுங்கம் அல்லது இணக்க சந்தேகங்களைப் பற்றி பேச தனிப்பட்ட அமர்வை முன்பதிவு செய்யுங்கள்.",
        payNote: "உங்கள் சந்திப்பு உறுதி செய்யப்பட்ட பிறகே கட்டணம் செலுத்துங்கள்.",
        cta: "ஆலோசனையை முன்பதிவு செய்",
      },
      note: "கேள்விக்கு மொத்தம் ₹500 — பதிவு செய்யும்போது ₹250, பதிலைப் பெறும்போது ₹250. பதில் கிடைக்காததோ அல்லது பொருந்தாததோ எனில் முழுத் தொகையும் திரும்பத் தரப்படும்.",
    },
    brief: {
      title: "உங்கள் கேள்விச் சுருக்கத்தைத் தயாரிக்கவும்",
      intro: "உங்கள் இறக்குமதி அல்லது சுங்கப் பிரச்சினையை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும். AI உதவி அதை வழிகாட்டிக்குத் தேவையான முக்கிய விவரங்களுடன் தெளிவான சுருக்கமாக மாற்றும். இது உங்கள் கேள்விக்குப் பதில் அளிக்காது.",
      placeholder: "எ.கா. சீனாவிலிருந்து வந்த LED விளக்குகள் சென்னை துறைமுகத்தில் நிறுத்தப்பட்டுள்ளன. சுங்கத்துறை HSN குறியீடு மற்றும் விலைப்பட்டியல் மதிப்பைக் கேள்வி கேட்கிறது...",
      min: "குறைந்தது 20 எழுத்துகள் எழுதவும்.",
      btn: "சுருக்கத்தைத் தயாரி",
      busy: "தயாராகிறது...",
      result: "உங்கள் கேள்விச் சுருக்கம்",
      copy: "நகலெடு",
      copied: "நகலெடுக்கப்பட்டது!",
      use: "கேள்விப் படிவத்தில் பயன்படுத்து",
    },
    audience: {
      eyebrow: "யார் சேரலாம்",
      title: "நீங்கள் எங்கிருந்து தொடங்கினாலும், உங்களுக்கு இங்கு இடமுண்டு.",
      items: [
        {
          icon: "🌱",
          title: "விரும்பும் இறக்குமதி தொழில்முனைவோர்",
          desc: "இறக்குமதி வணிகத்தில் நுழையத் திட்டமிடும் நபர்களுக்கு.",
        },
        {
          icon: "📦",
          title: "தற்போதைய இறக்குமதியாளர்கள்",
          desc: "தங்கள் நடைமுறை அறிவை வலுப்படுத்த விரும்பும் இறக்குமதியாளர்களுக்கு.",
        },
        {
          icon: "🚢",
          title: "லாஜிஸ்டிக்ஸ் நிபுணர்கள்",
          desc: "சரக்கு, லாஜிஸ்டிக்ஸ் மற்றும் சர்வதேச வர்த்தகத்தில் ஈடுபட்ட நிபுணர்களுக்கு.",
        },
        {
          icon: "🧾",
          title: "கஸ்டம்ஸ் ஆவண நிர்வாகிகள்",
          desc: "இறக்குமதி ஆவணங்கள் மற்றும் தொடர்புடைய செயல்முறைகளைக் கையாளும் நிபுணர்களுக்கு.",
        },
        {
          icon: "🎓",
          title: "மாணவர்கள் & புதிய பட்டதாரிகள்",
          desc: "EXIM, லாஜிஸ்டிக்ஸ் மற்றும் சப்ளை செயின் தொழில்களுக்குத் தயாராகும் கற்றவர்களுக்கு.",
        },
        {
          icon: "📈",
          title: "சப்ளை செயின் நிபுணர்கள்",
          desc: "வலுவான இறக்குமதி மற்றும் சர்வதேச லாஜிஸ்டிக்ஸ் அறிவை விரும்பும் நிபுணர்களுக்கு.",
        },
      ],
    },
    comparison: {
      eyebrow: "எங்கள் கற்றல் தத்துவம்",
      title: "கற்றுக்கொள்ளுங்கள் → பயன்படுத்துங்கள் → மேம்படுங்கள் → வளருங்கள்",
      intro: "நீங்கள் கற்றதை நிஜ ஏற்றுமதிகளில் பயன்படுத்துவதை மையமாகக் கொண்டது Importpreneur VIP — வெறும் தகவல்களைச் சேகரிப்பது அல்ல.",
      typical: "வழக்கமான கற்றல்",
      vip: "Importpreneur VIP",
      rows: [
        { typical: "கோட்பாடு", vip: "நடைமுறைப் பயன்பாடு" },
        { typical: "ஒருவழிக் கற்றல்", vip: "சமூகத் தொடர்பு" },
        { typical: "பொதுவான எடுத்துக்காட்டுகள்", vip: "நிஜ உலகச் சூழ்நிலைகள்" },
        { typical: "கற்று மறத்தல்", vip: "கற்றுப் பயன்படுத்தல்" },
        { typical: "தகவல் நிரம்பல்", vip: "கவனம் செலுத்திய வழிகாட்டுதல்" },
      ],
    },
    journey: {
      eyebrow: "சமூக அனுபவம்",
      title: "உங்கள் Importpreneur கற்றல் பயணம்",
      intro: "அறிவை விவாதிக்கவும், கேள்வி கேட்கவும், பயன்படுத்தவும் முடியும்போது சமூகம் மிகவும் மதிப்புமிக்கதாகிறது.",
      steps: [
        "சேருங்கள்",
        "உங்களை அறிமுகப்படுத்துங்கள்",
        "நடைமுறைக் கற்றலை அணுகுங்கள்",
        "கேள்விகள் கேளுங்கள்",
        "சவால்களில் பங்கேறுங்கள்",
        "நம்பிக்கையை உருவாக்குங்கள்",
        "சிறந்த இறக்குமதி நிபுணராக மாறுங்கள்",
      ],
    },
    faq: {
      eyebrow: "கேள்விகள்",
      title: "சேருவதற்கு முன் மக்கள் கேட்கும் கேள்விகள்",
      items: [
        {
          q: "இந்த சமூகம் தொடக்கநிலையாளர்களுக்கா?",
          a: "ஆம். தொடக்கநிலையாளர்கள் அடிப்படைகளில் தொடங்கி படிப்படியாக நடைமுறைக் கருத்துகளைக் கற்றுக்கொள்ளலாம்.",
        },
        {
          q: "இறக்குமதி அனுபவம் தேவையா?",
          a: "இல்லை. இந்த சமூகம் விரும்பும் மற்றும் தற்போதைய இறக்குமதி நிபுணர்களுக்காக வடிவமைக்கப்பட்டது.",
        },
        {
          q: "என்ன தலைப்புகள் உள்ளடக்கப்பட்டுள்ளன?",
          a: "இறக்குமதி ஆவணங்கள், கஸ்டம்ஸ், HSN வகைப்பாடு, DGFT, இணக்கம், செலவு, லாஜிஸ்டிக்ஸ், AI-உதவி கற்றல் மற்றும் நடைமுறை வழக்குகள்.",
        },
        {
          q: "இது வணிக உரிமையாளர்களுக்கு மட்டும்தானா?",
          a: "இல்லை. மாணவர்கள், புதியவர்கள், ஆவண நிர்வாகிகள், லாஜிஸ்டிக்ஸ் நிபுணர்கள் மற்றும் இறக்குமதியாளர்கள் பங்கேற்கலாம்.",
        },
        {
          q: "நான் எப்படி சேர்வது?",
          a: "WhatsApp பட்டனைத் தட்டி வழிகாட்டுதல்களைப் பின்பற்றுங்கள்.",
        },
      ],
    },
    banner: {
      title: "🚢 உங்கள் Importpreneur பயணம் ஒரே ஒரு அடியில் தொடங்குகிறது.",
      p1: "ஒரு ஆவணத் தவறு, வகைப்பாட்டுப் பிரச்சனை அல்லது தேர்வுத் தாமதம் உங்களுக்கு விலையுயர்ந்த பாடத்தைக் கற்பிக்கும் வரை காத்திருக்க வேண்டாம்.",
      p2: "ஒரு நடைமுறைக் கற்றல் சமூகத்தில் சேர்ந்து இறக்குமதி செயல்முறை பற்றிய உங்கள் புரிதலை வலுப்படுத்துங்கள்.",
      microcopy: "பட்டனைத் தட்டி WhatsApp-இல் எங்களுடன் சேருங்கள்.",
    },
    footer: {
      disclaimer: "பொறுப்புத் துறப்பு: இந்த வலைத்தளம் மற்றும் சமூகம் மூலம் வழங்கப்படும் தகவல்கள் பொதுவான கல்வி நோக்கங்களுக்காக மட்டுமே. சட்ட, சுங்க, வரி அல்லது நிதி ஆலோசனையாக கருதக்கூடாது.",
      rights: "© Importpreneur VIP. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
};
