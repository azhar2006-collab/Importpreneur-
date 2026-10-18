const fs = require('fs');
const path = require('path');

const books = [
  {
    slug: 'import-documentation-handbook',
    title: 'Import Documentation Handbook',
    pages: '52 Pages',
    tagline: 'A Practical Guide to Smoother, Faster and Compliant Imports',
    chapters: [
      'Chapter 1: The Lifecycle of an Import Shipment & Document Timeline',
      'Chapter 2: Purchase Order, Proforma Invoice & Sales Contract Clauses',
      'Chapter 3: Commercial Invoice (Incoterms, HSN, Currency, Disclosures)',
      'Chapter 4: Packing List vs Commercial Invoice Discrepancies',
      'Chapter 5: Bill of Lading (B/L) & Air Waybill (AWB): Original, Seaway Bill & Surrender',
      'Chapter 6: Country of Origin (COO), Preferential Trade Agreements & FTA certificates',
      'Chapter 7: Bill of Entry (BE) and ICEGATE Filing Basics',
      'Chapter 8: Post-Clearance Documentation & Bank Realization (IDPMS / EDPMS)'
    ]
  },
  {
    slug: 'hsn-classification-made-simple',
    title: 'HSN Classification Made Simple',
    pages: '44 Pages',
    tagline: 'Master the 8-Digit Tariff Code System and Avoid Reclassification Disputes',
    chapters: [
      'Chapter 1: Anatomy of the Harmonized System: Chapter, Heading, Subheading & Tariff Item',
      'Chapter 2: General Rules for Interpretation (GRI 1 through 6) with Real Cases',
      'Chapter 3: Essential Character Rule (Rule 3b) for Composite & Set Goods',
      'Chapter 4: Section Notes and Chapter Notes: The Legal Authority',
      'Chapter 5: How to File an Advance Ruling (AAR) in Indian Customs',
      'Chapter 6: Resolving Classification Disputes with the Appraising Group'
    ]
  },
  {
    slug: 'customs-clearance-guide',
    title: 'Customs Clearance Guide',
    pages: '58 Pages',
    tagline: 'Practical Flow of Import Clearance and How to Avoid Costly Port Delays',
    chapters: [
      'Chapter 1: Port Arrival & Inward Entry (IGM Filing by Shipping Lines)',
      'Chapter 2: Prior Bill of Entry vs Advance vs Regular Bill of Entry',
      'Chapter 3: Faceless Assessment: How the Turant Customs System Works',
      'Chapter 4: RMS (Risk Management System): Green Channel vs Assessment vs Examination',
      'Chapter 5: Customs Examination Orders: First Check vs Second Check',
      'Chapter 6: Appraising Queries & How to Draft Legally Sound Written Replies',
      'Chapter 7: Duty Payment, Out-of-Charge (OOC) and Delivery Order (DO)',
      'Chapter 8: Port Demurrage & Container Detention: How to Prevent Escalating Charges'
    ]
  },
  {
    slug: 'dgft-compliance-basics',
    title: 'DGFT & Compliance Basics',
    pages: '46 Pages',
    tagline: 'Essential Policies, Notifications, and Compliance for Indian Importers',
    chapters: [
      'Chapter 1: Importer-Exporter Code (IEC): Linking with GST and DGFT Portal',
      'Chapter 2: Foreign Trade Policy (FTP) Fundamentals & Categories (Free, Restricted, Prohibited)',
      'Chapter 3: Compulsory Registration Scheme (CRS), BIS Standards & Testing Requirements',
      'Chapter 4: EPR (Extended Producer Responsibility) for E-Waste, Plastic & Battery Imports',
      'Chapter 5: Legal Metrology Declarations for Packaged Commodities',
      'Chapter 6: Export Promotion Schemes: Advance Authorisation & EPCG Basics'
    ]
  },
  {
    slug: 'import-costing-landed-cost',
    title: 'Import Costing & Landed Cost',
    pages: '48 Pages',
    tagline: 'Break Down Real Duties, Freight, Port Surcharges & True Landed Costs',
    chapters: [
      'Chapter 1: Assessing CIF Value: Conversion Rates and Customs Exchange Rates',
      'Chapter 2: Basic Customs Duty (BCD) Calculation Models',
      'Chapter 3: Social Welfare Surcharge (SWS) & Agriculture Infrastructure Cess (AIDC)',
      'Chapter 4: IGST Valuation: Determining the Taxable Base',
      'Chapter 5: Freight Forwarder Local Charges: Terminal Handling (THC), D/O fees, CFS Charges',
      'Chapter 6: Inland Haulage, Transporter Detention and Hidden Clearance Expenses',
      'Chapter 7: Building a Reusable Landed Cost Excel Formula for Profit Margins'
    ]
  },
  {
    slug: 'exim-terminology-guide',
    title: 'EXIM Terminology Guide',
    pages: '38 Pages',
    tagline: 'Quick Desk Reference to Key Terms in International Trade, Shipping & Logistics',
    chapters: [
      'Chapter 1: Incoterms 2020: FOB, CIF, CFR, EXW, DAP, DDP Deep Dive',
      'Chapter 2: Shipping & Freight Jargon: FCL, LCL, TEU, FEU, CFS, ICD, NVOCC, MBL vs HBL',
      'Chapter 3: Port & Customs Terms: IGM, EGM, OOC, LEO, RMS, ICEGATE, CHA, CBIC',
      'Chapter 4: Financial & Payment Terms: L/C, TT, DA, DP, Bank Guarantee',
      'Chapter 5: Demurrage vs Detention vs Port Storage: Exact Legal Distinctions'
    ]
  },
  {
    slug: 'ai-for-importers',
    title: 'AI for Importers',
    pages: '42 Pages',
    tagline: 'Practical Ways AI Can Support Documentation, Research & Workflow Tasks',
    chapters: [
      'Chapter 1: Using AI as a Customs Research Assistant: Limitations & Rules',
      'Chapter 2: Automated Commercial Invoice vs Packing List Discrepancy Audits',
      'Chapter 3: AI-Assisted HSN Research: Finding Comparable Rulings and Notes',
      'Chapter 4: Drafting Professional Technical Letters in Response to Appraising Queries',
      'Chapter 5: Extracting Key Data from 50-Page Vendor Contracts & Specifications',
      'Chapter 6: Safety & Privacy: Never Uploading Sensitive Commercial Secrets'
    ]
  },
  {
    slug: 'bill-of-entry-walkthrough',
    title: 'Bill of Entry Walkthrough',
    pages: '50 Pages',
    tagline: 'Step-by-Step Practical Walkthrough of Indian Customs Clearance Documentation',
    chapters: [
      'Chapter 1: Header Section: Port Code, BE Type, Job Number, Importer Details, AD Code',
      'Chapter 2: Supplier & Invoice Details: Currency, Terms, Valuation Rules Applied',
      'Chapter 3: Item-Level Breakdown: HSN, CTH, Notification Numbers, Exemption Claims',
      'Chapter 4: Duty Calculation Table: BCD, SWS, AIDC, Anti-Dumping Duty (ADD), IGST',
      'Chapter 5: Assessment Remarks & Customs Officers Examination Order',
      'Chapter 6: Out-of-Charge (OOC) Stamp & Delivery Release Protocol'
    ]
  },
  {
    slug: 'import-business-starter-guide',
    title: 'Import Business Starter Guide',
    pages: '60 Pages',
    tagline: 'A Beginner-Friendly Roadmap for Anyone Planning to Start an Import Venture',
    chapters: [
      'Chapter 1: Entity Setup: Sole Proprietorship vs LLP vs Pvt Ltd for Importers',
      'Chapter 2: Bank Current Account, Forex Authorisation & AD Code Registration',
      'Chapter 3: Sourcing Verified Suppliers: Alibaba, Trade Fairs & Overseas Factory Audits',
      'Chapter 4: Negotiating Payment Terms & Protecting Down Payments',
      'Chapter 5: Selecting the Right Freight Forwarder & Customs Broker (CHA)',
      'Chapter 6: Your First Test Shipment: Minimum Viable Import Strategy',
      'Chapter 7: Domestic Distribution, Warehousing & GST Input Tax Credit (ITC)'
    ]
  },
  {
    slug: 'freight-logistics-essentials',
    title: 'Freight & Logistics Essentials',
    pages: '54 Pages',
    tagline: 'Core Concepts in Ocean Freight, Air Cargo, Warehousing & Last-Mile Delivery',
    chapters: [
      'Chapter 1: Ocean Shipping: FCL vs LCL, 20ft vs 40ft vs 40HC Container Selection',
      'Chapter 2: Air Cargo Logistics: Actual Weight vs Volumetric Weight (Dimensional Factor 6000)',
      'Chapter 3: Bill of Lading Nuances: Negotiable vs Non-negotiable, Endorsements',
      'Chapter 4: Selecting Freight Forwarders: Spot Rates vs Annual Contracts',
      'Chapter 5: Marine Cargo Insurance: Institute Cargo Clauses (A, B, C) Explained',
      'Chapter 6: Inland Container Depots (ICD) and Multi-modal Transport in India'
    ]
  }
];

function generateBookPdf(b) {
  let streamLines = [
    'BT /F1 18 Tf 50 740 Td (' + b.title.replace(/[()]/g, '') + ') Tj ET',
    'BT /F1 11 Tf 50 715 Td (' + b.tagline.replace(/[()]/g, '') + ') Tj ET',
    'BT /F1 10 Tf 50 685 Td (Mentor: Krishnakumar - 30 Years EXIM & Customs Logistics Experience) Tj ET',
    'BT /F1 10 Tf 50 665 Td (Importpreneur VIP Practical Learning Series | ' + b.pages + ') Tj ET',
    'BT /F1 13 Tf 50 625 Td (TABLE OF CONTENTS & SYLLABUS:) Tj ET'
  ];

  let y = 595;
  b.chapters.forEach(ch => {
    streamLines.push('BT /F1 9 Tf 50 ' + y + ' Td (' + ch.replace(/[()]/g, '') + ') Tj ET');
    y -= 25;
  });

  y -= 15;
  streamLines.push('BT /F1 10 Tf 50 ' + y + ' Td (--- PRACTICAL WORKSHOP EDITION ---) Tj ET');
  y -= 20;
  streamLines.push('BT /F1 9 Tf 50 ' + y + ' Td (Note: Official practical learning document. Site owner can replace this file at any time.) Tj ET');

  const content = streamLines.join(' ');
  const len = content.length;

  return `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length ${len} >>\nstream\n${content}\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000244 00000 n \n0000000300 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n390\n%%EOF`;
}

const targetDirs = [
  path.join(__dirname, '..', 'ebooks'),
  path.join(__dirname, '..', 'public', 'ebooks')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

books.forEach(b => {
  const pdfData = generateBookPdf(b);
  targetDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, b.slug + '.pdf'), pdfData, 'utf8');
  });
  console.log('Generated rich PDF for: ' + b.slug);
});

console.log('All 10 rich book PDFs generated successfully!');
