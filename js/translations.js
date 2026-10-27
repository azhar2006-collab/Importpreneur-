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
          slug: "aeo-programme-guide",
          title: "Authorised Economic Operator (AEO)",
          desc: "A comprehensive guide to the AEO certification framework, tiers (T1, T2, T3, LO), eligibility criteria, application process, and customs facilitation benefits.",
          pages: "19 Pages",
          tagline: "WCO SAFE Framework & Indian Customs (CBIC) Trusted Trader Certification",
          pdfUrl: "ebooks/aeo-programme-guide.pdf",
          downloadName: "AEO - Authorised Economic Operator.pdf",
          chapters: [
            "1. AEO Programme — Introduction and Core Concepts",
            "2. International Evolution of AEO (WCO SAFE Framework History)",
            "3. AEO Programme in India — Legal Framework & Administration",
            "4. AEO Tiers — Detailed Explanation of T1, T2, T3 and LO",
            "5. Validity Period and Renewal Process",
            "6. Eligibility Criteria and Detailed Parameters",
            "7. Required Documents and Annexures",
            "8. Application Procedure — Step-by-Step Guide",
            "9. Tier-Wise Benefits — Importers, Exporters & CHAs",
            "10. Mutual Recognition Agreements (MRAs)",
            "11. Precautions to Maintain AEO Status",
            "12. Suspension and Revocation — Causes and Remedies",
            "13. Conclusion",
            "14. Annexure — Glossary of Terms"
          ],
          sample: `WCO SAFE FRAMEWORK & CBIC CIRCULAR 33/2016 EXCERPT:
The Authorised Economic Operator (AEO) programme is a voluntary certification scheme recognizing reliable, compliant trade partners in the international supply chain.
Key Benefits:
- Prioritized Customs Clearance & Lower Physical Examination Rates
- Direct Port Delivery (DPD) & Deferred Duty Payment
- Substantial Bank Guarantee Reductions and Fast-Track Dispute Resolution`,
          takeaways: [
            "Understanding WCO SAFE Framework & Indian CBIC Circular 33/2016 legal architecture",
            "Detailed eligibility criteria and documentary checklists for T1, T2, T3 and LO tiers",
            "Maximizing trade facilitation benefits: green channel routing and bank guarantee waivers"
          ]
        },
        {
          slug: "carotar-2020-tamil",
          title: "CAROTAR 2020 — தோற்று விதிகள் நிர்வாகம்",
          desc: "Customs (Administration of Rules of Origin under Trade Agreements) Rules, 2020 — Compliance guide for Indian importers claiming FTA preferential tariff rates.",
          pages: "7 Pages",
          tagline: "Section 28DA, Customs Act 1962 · Form I · Proof of Origin",
          pdfUrl: "ebooks/carotar-2020-tamil.pdf",
          downloadName: "CAROTAR 2020 - தோற்று விதிகள் நிர்வாகம்.pdf",
          chapters: [
            "அத்தியாயம் 1 — CAROTAR 2020 என்றால் என்ன, ஏன் அறிமுகப்படுத்தப்பட்டது",
            "அத்தியாயம் 2 — சட்ட அடிப்படை: Section 28DA மற்றும் இறக்குமதியாளரின் கடமைகள்",
            "அத்தியாயம் 3 — Origin Criteria: பொருட்கள் எவ்வாறு தகுதி பெறுகின்றன",
            "அத்தியாயம் 4 — Bill of Entry-இல் தேவையான விவரங்கள்",
            "அத்தியாயம் 5 — Certificate of Origin முதல் Proof of Origin வரை (2025 திருத்தம்)",
            "அத்தியாயம் 6 — Form I மற்றும் சரிபார்ப்பு செயல்முறை",
            "அத்தியாயம் 7 — முன்னுரிமை வரி மறுக்கப்படும் சூழ்நிலைகள்",
            "அத்தியாயம் 8 — CAROTAR நடைமுறை சரிபார்ப்புப் பட்டியல்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `SECTION 28DA & FORM I STATUTORY DUE DILIGENCE:
Under CAROTAR 2020, possessing a valid Proof of Origin is no longer sufficient on its own.
The importer must:
- Independently verify that goods satisfy Origin Criteria (Wholly Obtained, RVC, CTH, CTSH).
- Possess all Form I information prior to shipment import.
- Maintain supporting documents for a statutory period of 5 years.
- Furnish detailed origin disclosures within 10 working days upon Customs requisition.`,
          takeaways: [
            "Master legal obligations under Section 28DA of the Customs Act 1962",
            "Verify Origin Criteria (WO, RVC, CTH, CTSH) before claiming FTA duty benefits",
            "Complete Form I due diligence to avoid duty rejection and retroactive penalties"
          ]
        },
        {
          slug: "concessional-schemes-tamil",
          title: "சலுகை இறக்குமதி & ஏற்றுமதி ஊக்குவிப்பு திட்டங்கள்",
          desc: "Comprehensive guide to Advance Authorization, EPCG, RoDTEP, EOU, and MOOWR duty-concession schemes under Foreign Trade Policy 2023 and Customs regulations.",
          pages: "11 Pages",
          tagline: "Advance Authorization · EPCG · RoDTEP · EOU · MOOWR (FTP 2023)",
          pdfUrl: "ebooks/concessional-schemes-tamil.pdf",
          downloadName: "சலுகை இறக்குமதி & ஏற்றுமதி ஊக்குவிப்பு திட்டங்கள்.pdf",
          chapters: [
            "அத்தியாயம் 1 — இந்த திட்டங்கள் ஏன் உள்ளன",
            "அத்தியாயம் 2 — Advance Authorization Scheme",
            "அத்தியாயம் 3 — EPCG (Export Promotion Capital Goods) Scheme",
            "அத்தியாயம் 4 — RoDTEP",
            "அத்தியாயம் 5 — EOU (Export Oriented Unit)",
            "அத்தியாயம் 6 — MOOWR (Section 65 Bonded Manufacturing)",
            "அத்தியாயம் 7 — திட்டங்களை தேர்வு செய்தல் மற்றும் இணைத்தல்",
            "அத்தியாயம் 8 — பொதுவான இணக்க தவறுகள்",
            "அத்தியாயம் 9 — நடைமுறை Checklist",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `FTP 2023 CONCESSIONAL SCHEMES COMPARISON:
- Advance Authorization: Duty-free import of raw materials and inputs tied to export production under SION norms.
- EPCG Scheme: Import capital goods at zero Basic Customs Duty subject to a 6x Specific Export Obligation over 6 years.
- RoDTEP: Remission of unrefunded embedded taxes (electricity, fuel, local cess) post-export.
- MOOWR & EOU: Complete manufacturing under customs bond with duty deferment and zero domestic export mandates.`,
          takeaways: [
            "Input-output norm (SION) compliance and EODC closure for Advance Authorization",
            "Specific Export Obligation (SEO) and Average Export Obligation rules under EPCG",
            "Strategic comparison between MOOWR bonded manufacturing and EOU setup"
          ]
        },
        {
          slug: "customs-valuation-tamil",
          title: "இந்திய கஸ்டம்ஸ் மதிப்பீட்டு வழிகாட்டி",
          desc: "Assessable Value determination, Rule 10 additions, 6 sequential valuation methods, and Special Valuation Branch (SVB) procedures under Customs Valuation Rules 2007.",
          pages: "7 Pages",
          tagline: "Assessable Value முதல் 6 மதிப்பீட்டு முறைகள் வரை (Section 14 & CVR 2007)",
          pdfUrl: "ebooks/customs-valuation-tamil.pdf",
          downloadName: "இந்திய கஸ்டம்ஸ் மதிப்பீட்டு வழிகாட்டி.pdf",
          chapters: [
            "அத்தியாயம் 1 — Assessable Value: அடிப்படைக் கட்டமைப்பு",
            "அத்தியாயம் 2 — Transaction Value-உடன் சேர்க்கப்பட வேண்டியவை (Rule 10)",
            "அத்தியாயம் 3 — Transaction Value ஏற்றுக்கொள்ளப்படாதபோது: 6 மதிப்பீட்டு முறைகள்",
            "அத்தியாயம் 4 — தொடர்புடைய தரப்பு இறக்குமதி மற்றும் Special Valuation Branch (SVB)",
            "அத்தியாயம் 5 — Declared Value நிராகரிக்கப்படும் சூழ்நிலைகள் (Rule 12)",
            "அத்தியாயம் 6 — மதிப்பீட்டு நடைமுறை சரிபார்ப்புப் பட்டியல்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `ASSESSABLE VALUE & VALUATION METHODOLOGY:
Under Section 14 of the Customs Act 1962, duty is computed on the Assessable Value (AV), not solely on the commercial invoice price.
- AV includes CIF value converted at CBIC notified exchange rates plus 1% landing charges.
- Rule 10 additions (tooling assists, royalties, freight, and insurance) must be declared.
- When Transaction Value is questioned under Rule 12, the 6 sequential valuation methods must be applied strictly in order.`,
          takeaways: [
            "Calculate CIF assessable value adhering strictly to CBIC exchange rates",
            "Declare Rule 10 assists and royalties to avoid undervaluation penalties",
            "Navigate Special Valuation Branch (SVB) questionnaires for related-party imports"
          ]
        },
        {
          slug: "import-clearance-procedures",
          title: "இறக்குமதி பயணம் — இந்திய சுங்கத்துறை வழிகாட்டி",
          desc: "A practical 34-page step-by-step guru-student dialogue covering the complete Indian Customs clearance journey from purchase order to factory gate delivery.",
          pages: "34 Pages",
          tagline: "இந்திய சுங்கத்துறையில் இறக்குமதி சரக்கு தீர்வு — முழுமையான வழிகாட்டி",
          pdfUrl: "ebooks/import-clearance-procedures.pdf",
          downloadName: "இறக்குமதி பயணம் - இந்திய சுங்கத்துறை வழிகாட்டி.pdf",
          chapters: [
            "முன்னுரை — இரண்டு பேர், ஒரு பயணம்",
            "பாடம் 1 — ஆர்டர் முதல் ஆவணம் வரை: Incoterms புரிதல்",
            "பாடம் 2 — தோற்றுவாயில் சரக்கு கையகப்படுத்துதல்: Freight Forwarder & Liner",
            "பாடம் 3 — கடல் பயணம்: FCL, LCL, Transshipment",
            "பாடம் 4 — இந்திய துறைமுகத்தில் வருகை: IGM தாக்கல்",
            "பாடம் 5 — Bill of Entry தாக்கல்: இதயப் பகுதி",
            "பாடம் 6 — DPD vs CFS: கொள்கலன் எப்படி நகர்கிறது?",
            "பாடம் 7 — LCL சரக்குகள்: Deconsolidation & Devanning",
            "பாடம் 8 — வான் வழி இறக்குமதி: Courier Mode vs Cargo Mode",
            "பாடம் 9 — பரிசோதனை, மதிப்பீடு, வரி செலுத்துதல், Out of Charge",
            "பாடம் 10 — Demurrage, Detention & தாமதம் தவிர்க்கும் வழிகள்",
            "பாடம் 11 — சிறப்புத் தலைப்புகள்: AEO, PGA, Duty Schemes",
            "பாடம் 12 — பொதுவான தவறுகள் & இணக்கம் (Compliance)",
            "பாடம் 13 — முழு பயண Storyboard: ஒரு பார்வையில்",
            "சொற்களஞ்சியம் (Glossary)",
            "இணைப்பு — ஆவணங்கள் சரிபார்ப்பு பட்டியல்",
            "முடிவுரை"
          ],
          sample: `GURU BHASKAR & STUDENT DEENA DIALOGUE:
"An import shipment does not begin when the container boards the vessel; it begins the moment the Purchase Order is issued and the Proforma Invoice arrives with its Incoterm.
Regardless of whether cargo moves under FOB, CIF, or DDP, the legal importer of record remains your IEC. Filing a Prior Bill of Entry before vessel berthing is essential to avoid crushing demurrage and detention fees."`,
          takeaways: [
            "Clear operational understanding of Incoterms 2020 risk and cost allocations",
            "Filing Prior/Advance Bill of Entry on ICEGATE to achieve instant RMS Green Channel OOC",
            "Leveraging DPD (Direct Port Delivery) to slash CFS handling costs and container turnaround times"
          ]
        },
        {
          slug: "second-hand-capital-goods-tamil",
          title: "பழைய Capital Goods இறக்குமதி & மதிப்பீடு",
          desc: "Import policy frameworks for second-hand machinery under FTP 2023 Para 2.31, Chartered Engineer Certificate requirements, and customs depreciation valuation.",
          pages: "10 Pages",
          tagline: "வரையறை · இறக்குமதிக் கட்டுப்பாடுகள் · depreciation மதிப்பீடு (FTP 2023)",
          pdfUrl: "ebooks/second-hand-capital-goods-tamil.pdf",
          downloadName: "பழைய Capital Goods இறக்குமதி & மதிப்பீடு.pdf",
          chapters: [
            "அத்தியாயம் 1 — Capital Goods என்றால் என்ன (கொள்கை வரையறை)",
            "அத்தியாயம் 2 — Second-Hand Goods கொள்கை கட்டமைப்பு (Para 2.31)",
            "அத்தியாயம் 3 — இறக்குமதி கட்டுப்பாடுகள் & கட்டுப்படுத்தப்பட்ட/தடைசெய்யப்பட்ட பட்டியல்",
            "அத்தியாயம் 4 — Chartered Engineer Certificate தேவை",
            "அத்தியாயம் 5 — பழைய இயந்திரங்களின் கஸ்டம்ஸ் மதிப்பீடு",
            "அத்தியாயம் 6 — Depreciation கணக்கீடு — Worked Example",
            "அத்தியாயம் 7 — EPCG-இன் கீழ் Second-Hand Capital Goods",
            "அத்தியாயம் 8 — நடைமுறை Checklist",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `FTP PARA 2.31 & CHARTERED ENGINEER CERTIFICATE:
Import of second-hand capital goods requires an independent Chartered Engineer Certificate (CEC) from the country of supply detailing manufacture year, operational condition, residual life (minimum 5 years recommended), and fair market appraisal.
Used electronics and IT assets without valid BIS registration remain strictly prohibited under Indian customs laws.`,
          takeaways: [
            "Differentiate between freely importable used machinery and restricted categories",
            "Calculate allowable customs depreciation under CBEC circular guidelines",
            "Ensure overseas Chartered Engineer Certificates meet all appraisal audit requirements"
          ]
        },
        {
          slug: "warehousing-schemes-comparison-tamil",
          title: "Bonded Warehouse · FTWZ · SEZ · MOOWR · EOU",
          desc: "Comprehensive comparative analysis of Private Bonded Warehouses, FTWZ, SEZ, MOOWR, and EOU under Customs Act 1962, SEZ Act 2005, and FTP 2023.",
          pages: "12 Pages",
          tagline: "In-Bond உற்பத்தி & வணிக நன்மைகள் — ஒப்பீட்டு குறிப்புகள்",
          pdfUrl: "ebooks/warehousing-schemes-comparison-tamil.pdf",
          downloadName: "Bonded Warehouse, FTWZ, SEZ, MOOWR, EOU ஒப்பீடு.pdf",
          chapters: [
            "அத்தியாயம் 1 — ஐந்து கட்டமைப்புகளும் என்ன பிரச்சினையைத் தீர்க்கின்றன",
            "அத்தியாயம் 2 — Customs Bonded Warehouse (Section 58)",
            "அத்தியாயம் 3 — FTWZ (Free Trade Warehousing Zone)",
            "அத்தியாயம் 4 — SEZ (Special Economic Zone)",
            "அத்தியாயம் 5 — MOOWR (Section 65 Bonded Manufacturing)",
            "அத்தியாயம் 6 — EOU (Export Oriented Unit)",
            "அத்தியாயம் 7 — In-Bond உற்பத்தி: பக்கம்-பக்கமாக",
            "அத்தியாயம் 8 — வணிக நன்மைகள்: பக்கம்-பக்கமாக",
            "அத்தியாயம் 9 — சரியான தேர்வை எப்படி செய்வது",
            "அத்தியாயம் 10 — பொதுவான தவறான புரிதல்கள்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `COMPARATIVE STRATEGIC MATRIX:
- Section 58 Private Bonded Warehouse: Tariff deferral for goods intended for domestic consumption without manufacturing rights.
- MOOWR (Section 65): Unlocks manufacturing within a bonded facility without mandatory export obligations.
- FTWZ: Enables foreign entities to maintain inventory and transact in convertible foreign exchange without an Indian subsidiary.
- SEZ & EOU: Complete export-focused operations with duty-free procurement and NFE monitoring.`,
          takeaways: [
            "Evaluate operational trade-offs between Section 58 warehousing, MOOWR, and FTWZ",
            "Maximize working capital retention through lawful duty deferment on imported raw materials",
            "Select optimal structuring between domestic clearance (ex-bond) and re-export without duty liability"
          ]
        }
      ]
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
          slug: "aeo-programme-guide",
          title: "அங்கீகரிக்கப்பட்ட பொருளாதார செயற்பாட்டாளர் (AEO)",
          desc: "WCO SAFE Framework மற்றும் இந்திய சுங்கத்துறை (CBIC) விதிகளின் கீழ் AEO T1, T2, T3 மற்றும் LO அடுக்குகளுக்கான தகுதி, ஆவணங்கள் மற்றும் விரைவு சுங்க அனுமதி பலன்கள்.",
          pages: "19 பக்கங்கள்",
          tagline: "சர்வதேச பரிணாம வளர்ச்சி, அடுக்குகள், தகுதி அளவுருக்கள், ஆவணங்கள், விண்ணப்ப நடைமுறை — ஒரு முழுமையான வழிகாட்டி",
          pdfUrl: "ebooks/aeo-programme-guide.pdf",
          downloadName: "AEO_அங்கீகரிக்கப்பட்ட_பொருளாதார_செயற்பாட்டாளர்.pdf",
          chapters: [
            "1. AEO திட்டம் — அறிமுகம் மற்றும் அடிப்படைக் கருத்துகள்",
            "2. AEO-வின் சர்வதேச பரிணாம வளர்ச்சி (WCO SAFE Framework வரலாறு)",
            "3. இந்தியாவில் AEO திட்டம் — சட்டக் கட்டமைப்பு & நிர்வாகம்",
            "4. AEO அடுக்குகள் — T1, T2, T3 மற்றும் LO விரிவான விளக்கம்",
            "5. செல்லுபடியாகும் காலம் மற்றும் புதுப்பித்தல் (Renewal)",
            "6. தகுதி அளவுகோல்கள் மற்றும் விரிவான அளவுருக்கள் (Parameters)",
            "7. தேவையான ஆவணங்கள் & இணைப்புகள் (Annexures)",
            "8. விண்ணப்பிக்கும் நடைமுறை — படிப்படியான வழிகாட்டி",
            "9. அடுக்கு வாரியான பலன்கள் — இறக்குமதியாளர் / ஏற்றுமதியாளர் / CHA",
            "10. பரஸ்பர அங்கீகார ஒப்பந்தங்கள் (Mutual Recognition Agreements)",
            "11. AEO அந்தஸ்தை தொடர பராமரிக்க வேண்டிய முன்னெச்சரிக்கைகள்",
            "12. அந்தஸ்து இடைநிறுத்தம் / ரத்து — காரணங்களும் தீர்வும்",
            "13. முடிவுரை",
            "14. பின்னிணைப்பு — சுருக்கக் குறிப்புகளின் விளக்கம் (Glossary)"
          ],
          sample: `WCO SAFE FRAMEWORK & CBIC CIRCULAR 33/2016 வழிகாட்டி:
AEO என்பது சர்வதேச சப்ளை செயினில் ஈடுபடும் வணிக நிறுவனத்தை குறைந்த அபாயமுள்ள வர்த்தக பங்காளராக (Trusted, Low-Risk Trade Partner) சுங்கத்துறை அங்கீகரிக்கும் தன்னார்வ சான்றிதழ் திட்டம். இதன் மூலம் குறைவான ஆய்வுகள், நேரடி துறைமுக விநியோகம் (DPD), மற்றும் வங்கி உத்தரவாதத் தள்ளுபடி சலுகைகள் கிடைக்கின்றன.`,
          takeaways: [
            "WCO SAFE Framework மற்றும் CBIC Circular 33/2016 சட்டக் கட்டமைப்பு புரிதல்",
            "T1, T2, T3 மற்றும் LO அடுக்குகளுக்கான துல்லியமான தகுதி அளவுகோல்கள் மற்றும் ஆவணங்கள்",
            "துறைமுக விரைவு அனுமதி மற்றும் வங்கி உத்தரவாதத் தள்ளுபடி பெறும் நடைமுறை"
          ]
        },
        {
          slug: "carotar-2020-tamil",
          title: "CAROTAR 2020 — தோற்று விதிகள் நிர்வாகம்",
          desc: "Customs Act Section 28DA, Form I மற்றும் Proof of Origin விதிகளின்படி FTA முன்னுரிமை வரிச் சலுகைகளுக்கான சட்டபூர்வ இணக்க வழிகாட்டி.",
          pages: "7 பக்கங்கள்",
          tagline: "இந்திய இறக்குமதியாளர்களுக்கான FTA இணக்க வழிகாட்டி (Section 28DA, Form I, Proof of Origin)",
          pdfUrl: "ebooks/carotar-2020-tamil.pdf",
          downloadName: "CAROTAR_2020_Tamil.pdf",
          chapters: [
            "அத்தியாயம் 1 — CAROTAR 2020 என்றால் என்ன, ஏன் அறிமுகப்படுத்தப்பட்டது",
            "அத்தியாயம் 2 — சட்ட அடிப்படை: Section 28DA மற்றும் இறக்குமதியாளரின் கடமைகள்",
            "அத்தியாயம் 3 — Origin Criteria: பொருட்கள் எவ்வாறு தகுதி பெறுகின்றன",
            "அத்தியாயம் 4 — Bill of Entry-இல் தேவையான விவரங்கள்",
            "அத்தியாயம் 5 — Certificate of Origin முதல் Proof of Origin வரை (2025 திருத்தம்)",
            "அத்தியாயம் 6 — Form I மற்றும் சரிபார்ப்பு செயல்முறை",
            "அத்தியாயம் 7 — முன்னுரிமை வரி மறுக்கப்படும் சூழ்நிலைகள்",
            "அத்தியாயம் 8 — CAROTAR நடைமுறை சரிபார்ப்புப் பட்டியல்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `Section 28DA & Form I வழிகாட்டுதல்:
ஒரு செல்லுபடியாகும் Proof of Origin இருப்பதோடு மட்டுமல்லாமல், Form I-இல் உள்ள தகவல்களை முன்கூட்டியே பெற்று 5 ஆண்டுகள் பாதுகாத்து வைக்க வேண்டியது இறக்குமதியாளரின் சட்டபூர்வ கடமையாகும். சுங்கத்துறை அதிகாரி கோரும்போது 10 வேலை நாட்களுக்குள் உரிய விளக்கங்களை சமர்ப்பிக்க வேண்டும்.`,
          takeaways: [
            "Section 28DA கீழ் இறக்குமதியாளரின் சட்டபூர்வ பொறுப்புகள் மற்றும் Form I தாக்கல் முறை",
            "Wholly Obtained (WO), RVC மற்றும் Tariff Heading மாற்றங்களுக்கான விதிகள்",
            "Notification No. 14/2025-Customs (N.T.) Proof of Origin திருத்தங்கள்"
          ]
        },
        {
          slug: "concessional-schemes-tamil",
          title: "சலுகை இறக்குமதி & ஏற்றுமதி ஊக்குவிப்பு திட்டங்கள்",
          desc: "FTP 2023 மற்றும் சுங்கத்துறை விதிகளின் கீழ் Advance Authorization, EPCG, RoDTEP, EOU மற்றும் MOOWR சலுகைத் திட்டங்களின் முழுமையான நடைமுறை வழிகாட்டி.",
          pages: "11 பக்கங்கள்",
          tagline: "Advance Authorization · EPCG · RoDTEP · EOU · MOOWR (FTP 2023, Section 65)",
          pdfUrl: "ebooks/concessional-schemes-tamil.pdf",
          downloadName: "Concessional_Schemes_Tamil.pdf",
          chapters: [
            "அத்தியாயம் 1 — இந்த திட்டங்கள் ஏன் உள்ளன",
            "அத்தியாயம் 2 — Advance Authorization Scheme",
            "அத்தியாயம் 3 — EPCG (Export Promotion Capital Goods) Scheme",
            "அத்தியாயம் 4 — RoDTEP",
            "அத்தியாயம் 5 — EOU (Export Oriented Unit)",
            "அத்தியாயம் 6 — MOOWR (Section 65 Bonded Manufacturing)",
            "அத்தியாயம் 7 — திட்டங்களை தேர்வு செய்தல் மற்றும் இணைத்தல்",
            "அத்தியாயம் 8 — பொதுவான இணக்க தவறுகள்",
            "அத்தியாயம் 9 — நடைமுறை Checklist",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `FTP 2023 சலுகைத் திட்டங்களின் ஒப்பீடு:
Advance Authorization மூலம் ஏற்றுமதி உற்பத்திக்கான மூலப்பொருட்களை வரி இன்றி இறக்குமதி செய்யலாம். EPCG மூலம் மூலதன இயந்திரங்களை 0% அடிப்படை சுங்க வரியில் இறக்குமதி செய்து 6 ஆண்டுகளுக்குள் ஏற்றுமதிக் கடமையை (Export Obligation) நிறைவேற்றலாம். EOU மற்றும் MOOWR திட்டங்கள் உற்பத்தி தளத்தையே வரி ஒத்திவைப்பு முறையில் இயக்க உதவுகின்றன.`,
          takeaways: [
            "Advance Authorization SION நெறிமுறைகள் & EODC சான்றிதழ் பெறும் முறை",
            "EPCG 6 மடங்கு ஏற்றுமதிக் கடமை கணக்கீடு & உள்நாட்டு sourcing சலுகைகள்",
            "MOOWR மற்றும் EOU இடையேயான வேறுபாடுகள் மற்றும் சரியான திட்டத்தைத் தேர்வு செய்யும் உத்திகள்"
          ]
        },
        {
          slug: "customs-valuation-tamil",
          title: "இந்திய கஸ்டம்ஸ் மதிப்பீட்டு வழிகாட்டி",
          desc: "Customs Act Section 14 மற்றும் CVR 2007 விதிகளின்படி Assessable Value கணக்கீடு, Rule 10 சேர்த்தல்கள், 6 மதிப்பீட்டு முறைகள் மற்றும் SVB நடைமுறைகள்.",
          pages: "7 பக்கங்கள்",
          tagline: "Assessable Value முதல் 6 மதிப்பீட்டு முறைகள் வரை (Section 14 · CVR 2007 · SVB)",
          pdfUrl: "ebooks/customs-valuation-tamil.pdf",
          downloadName: "Customs_Valuation_Tamil.pdf",
          chapters: [
            "அத்தியாயம் 1 — Assessable Value: அடிப்படைக் கட்டமைப்பு",
            "அத்தியாயம் 2 — Transaction Value-உடன் சேர்க்கப்பட வேண்டியவை (Rule 10)",
            "அத்தியாயம் 3 — Transaction Value ஏற்றுக்கொள்ளப்படாதபோது: 6 மதிப்பீட்டு முறைகள்",
            "அத்தியாயம் 4 — தொடர்புடைய தரப்பு இறக்குமதி மற்றும் Special Valuation Branch (SVB)",
            "அத்தியாயம் 5 — Declared Value நிராகரிக்கப்படும் சூழ்நிலைகள் (Rule 12)",
            "அத்தியாயம் 6 — மதிப்பீட்டு நடைமுறை சரிபார்ப்புப் பட்டியல்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `Assessable Value & CVR 2007 விதிகள்:
இந்திய சுங்கத்துறையில் வரி கணக்கீடு இன்வாய்ஸ் விலையில் மட்டும் செய்யப்படுவதில்லை; Rule 10-இன் கீழ் சரக்குக் கட்டணம், காப்பீடு, ராயல்டி மற்றும் இலவச/தள்ளுபடி பாகங்கள் (Assists) சேர்க்கப்பட்டு Assessable Value தீர்மானிக்கப்படுகிறது. Transaction Value நிராகரிக்கப்பட்டால் 6 முறைகள் வரிசைப்படி மட்டுமே பயன்படுத்தப்பட வேண்டும்.`,
          takeaways: [
            "Assessable Value கணக்கீட்டு சூத்திரம் மற்றும் 1% லேண்டிங் கட்டண நடைமுறை",
            "Rule 10-இன் கீழ் Tooling, Dies, Royalty தொகைகளை துல்லியமாக சேர்த்தல்",
            "SVB விசாரணை மற்றும் தொடர்புடைய நிறுவனங்களுக்கிடையேயான பரிவர்த்தனை விதிகள்"
          ]
        },
        {
          slug: "import-clearance-procedures",
          title: "இறக்குமதி பயணம் — இந்திய சுங்கத்துறை வழிகாட்டி",
          desc: "ஆசான் – மாணவி உரையாடல் வழியே ஆர்டர் முதல் factory gate வருகை வரை Incoterms, IGM, Bill of Entry, DPD/CFS, வரி செலுத்துதல் மற்றும் Demurrage தவிர்ப்பு நடைமுறைகள்.",
          pages: "34 பக்கங்கள்",
          tagline: "இந்திய சுங்கத்துறையில் இறக்குமதி சரக்கு தீர்வு — முழுமையான வழிகாட்டி (34 பக்கங்கள்)",
          pdfUrl: "ebooks/import-clearance-procedures.pdf",
          downloadName: "Import_clearance_procedures.pdf",
          chapters: [
            "முன்னுரை — இரண்டு பேர், ஒரு பயணம்",
            "பாடம் 1 — ஆர்டர் முதல் ஆவணம் வரை: Incoterms புரிதல்",
            "பாடம் 2 — தோற்றுவாயில் சரக்கு கையகப்படுத்துதல்: Freight Forwarder & Liner",
            "பாடம் 3 — கடல் பயணம்: FCL, LCL, Transshipment",
            "பாடம் 4 — இந்திய துறைமுகத்தில் வருகை: IGM தாக்கல்",
            "பாடம் 5 — Bill of Entry தாக்கல்: இதயப் பகுதி",
            "பாடம் 6 — DPD vs CFS: கொள்கலன் எப்படி நகர்கிறது?",
            "பாடம் 7 — LCL சரக்குகள்: Deconsolidation & Devanning",
            "பாடம் 8 — வான் வழி இறக்குமதி: Courier Mode vs Cargo Mode",
            "பாடம் 9 — பரிசோதனை, மதிப்பீடு, வரி செலுத்துதல், Out of Charge",
            "பாடம் 10 — Demurrage, Detention & தாமதம் தவிர்க்கும் வழிகள்",
            "பாடம் 11 — சிறப்புத் தலைப்புகள்: AEO, PGA, Duty Schemes",
            "பாடம் 12 — பொதுவான தவறுகள் & இணக்கம் (Compliance)",
            "பாடம் 13 — முழு பயண Storyboard: ஒரு பார்வையில்",
            "சொற்களஞ்சியம் (Glossary)",
            "இணைப்பு — ஆவணங்கள் சரிபார்ப்பு பட்டியல்",
            "முடிவுரை"
          ],
          sample: `ஆசான் பாஸ்கர் – மாணவி தீனா உரையாடல்:
"இறக்குமதி ஷிப்மென்ட் கப்பல் ஏறும் போது தொடங்கவில்லை; Purchase Order அனுப்பி Proforma Invoice வரும்போதே தொடங்குகிறது. Incoterm எதுவாக இருந்தாலும், இந்திய சுங்கத்துறையில் சட்டப்பூர்வமாக Bill of Entry உங்கள் IEC-யில் தான் தாக்கல் ஆகும். கப்பல் துறைமுகம் வருவதற்கு முன்னரே Prior Bill of Entry தாக்கல் செய்வதன் மூலம் Demurrage மற்றும் Detention கட்டணங்களைத் தவிர்க்கலாம்."`,
          takeaways: [
            "Incoterms 2020 ஆபத்து பரிமாற்ற எல்லைகள் மற்றும் பொறுப்புகள்",
            "Prior Bill of Entry தாக்கல் செய்து RMS Green Channel அனுமதி பெறும் வழிகள்",
            "DPD (Direct Port Delivery) மூலம் துறைமுக சேமிப்புக் கட்டணங்களை மிச்சப்படுத்தும் யுக்திகள்"
          ]
        },
        {
          slug: "second-hand-capital-goods-tamil",
          title: "பழைய Capital Goods இறக்குமதி & மதிப்பீடு",
          desc: "FTP 2023 Para 2.31 கீழ் பழைய இயந்திரங்கள் இறக்குமதிக்கான கொள்கை வரம்புகள், Chartered Engineer சான்றிதழ் மற்றும் தேய்மான மதிப்பீட்டு வழிகாட்டி.",
          pages: "10 பக்கங்கள்",
          tagline: "வரையறை · இறக்குமதிக் கட்டுப்பாடுகள் · depreciation மதிப்பீடு (FTP 2023)",
          pdfUrl: "ebooks/second-hand-capital-goods-tamil.pdf",
          downloadName: "Second_Hand_Capital_Goods_Tamil.pdf",
          chapters: [
            "அத்தியாயம் 1 — Capital Goods என்றால் என்ன (கொள்கை வரையறை)",
            "அத்தியாயம் 2 — Second-Hand Goods கொள்கை கட்டமைப்பு (Para 2.31)",
            "அத்தியாயம் 3 — இறக்குமதி கட்டுப்பாடுகள் & கட்டுப்படுத்தப்பட்ட/தடைசெய்யப்பட்ட பட்டியல்",
            "அத்தியாயம் 4 — Chartered Engineer Certificate தேவை",
            "அத்தியாயம் 5 — பழைய இயந்திரங்களின் கஸ்டம்ஸ் மதிப்பீடு",
            "அத்தியாயம் 6 — Depreciation கணக்கீடு — Worked Example",
            "அத்தியாயம் 7 — EPCG-இன் கீழ் Second-Hand Capital Goods",
            "அத்தியாயம் 8 — நடைமுறை Checklist",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `FTP Para 2.31 & Chartered Engineer சான்றிதழ்:
பழைய இயந்திரங்கள் இறக்குமதிக்கு ஏற்றுமதி செய்யும் நாட்டில் உள்ள தன்னாட்சி பெற்ற Chartered Engineer சான்றிதழ் கட்டாயமாகும். இயந்திரத்தின் தயாரிப்பு ஆண்டு, தற்போதைய நிலை, மீதமுள்ள பயன்பாட்டு ஆயுள் (குறைந்தபட்சம் 5 ஆண்டுகள்) மற்றும் நியாயமான சந்தை மதிப்பு அதில் சான்றளிக்கப்பட வேண்டும். BIS பதிவு இல்லாத பழைய எலக்ட்ரானிக்ஸ் பொருட்கள் தடை செய்யப்பட்டுள்ளன.`,
          takeaways: [
            "FTP Para 2.31 பிரிவுகளின் கீழ் இயந்திரங்களுக்கான இலவச vs கட்டுப்படுத்தப்பட்ட வகைப்பாடு",
            "சுங்கத்துறை சுற்றறிக்கை 493/124/86 மற்றும் 25/2015-Customs தேய்மான அட்டவணை கணக்கீடு",
            "Chartered Engineer சான்றிதழில் இடம்பெற வேண்டிய முக்கிய விவரங்கள்"
          ]
        },
        {
          slug: "warehousing-schemes-comparison-tamil",
          title: "Bonded Warehouse · FTWZ · SEZ · MOOWR · EOU",
          desc: "Customs Act 1962, SEZ Act 2005 மற்றும் FTP 2023 கீழ் Private Bonded Warehouse, FTWZ, SEZ, MOOWR மற்றும் EOU இடையேயான ஆழமான நடைமுறை ஒப்பீடு.",
          pages: "12 பக்கங்கள்",
          tagline: "In-Bond உற்பத்தி & வணிக நன்மைகள் — ஒப்பீட்டு குறிப்புகள் (Customs Act 1962, FTP 2023)",
          pdfUrl: "ebooks/warehousing-schemes-comparison-tamil.pdf",
          downloadName: "Warehousing_Schemes_Comparison_Tamil.pdf",
          chapters: [
            "அத்தியாயம் 1 — ஐந்து கட்டமைப்புகளும் என்ன பிரச்சினையைத் தீர்க்கின்றன",
            "அத்தியாயம் 2 — Customs Bonded Warehouse (Section 58)",
            "அத்தியாயம் 3 — FTWZ (Free Trade Warehousing Zone)",
            "அத்தியாயம் 4 — SEZ (Special Economic Zone)",
            "அத்தியாயம் 5 — MOOWR (Section 65 Bonded Manufacturing)",
            "அத்தியாயம் 6 — EOU (Export Oriented Unit)",
            "அத்தியாயம் 7 — In-Bond உற்பத்தி: பக்கம்-பக்கமாக",
            "அத்தியாயம் 8 — வணிக நன்மைகள்: பக்கம்-பக்கமாக",
            "அத்தியாயம் 9 — சரியான தேர்வை எப்படி செய்வது",
            "அத்தியாயம் 10 — பொதுவான தவறான புரிதல்கள்",
            "முக்கிய சொற்களஞ்சியம்"
          ],
          sample: `5 கிடங்கு திட்டங்களின் முக்கிய வேறுபாடுகள்:
தனியார் Bonded Warehouse (Sec 58) உள்நாட்டு சந்தைக்கான வர்த்தகத்தில் சுங்க வரியை ஒத்திவைக்க மட்டுமே பயன்படும். MOOWR (Sec 65) திட்டத்தில் எந்தவொரு ஏற்றுமதிக் கடமையும் இல்லாமல் கிடங்கிலேயே உற்பத்தி செய்யலாம். FTWZ திட்டம் வெளிநாட்டு நிறுவனங்கள் இந்தியாவில் துணை நிறுவனம் இல்லாமலேயே சரக்குகளை சேமித்து விற்க உதவுகிறது.`,
          takeaways: [
            "Section 58, Section 65 (MOOWR) மற்றும் FTWZ செயல்பாட்டு வேறுபாடுகள்",
            "சுங்க வரி ஒத்திவைப்பு (Duty Deferment) மூலம் பணப்புழக்கத்தை (Working Capital) பாதுகாத்தல்",
            "ஏற்றுமதி கடமை இல்லாத உற்பத்திக்கான MOOWR உரிமம் பெறும் முறை"
          ]
        }
      ]
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
