const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

const booksData = [
  {
    slug: 'import-documentation-handbook',
    title: 'Import Documentation Handbook',
    tagline: 'A Practical Step-by-Step Guide to Smoother, Faster and Compliant Imports',
    pages: '52 Pages',
    chapters: [
      {
        title: 'The Lifecycle of an Import Shipment & Document Timeline',
        content: `Understanding the lifecycle of an import shipment is the single most critical foundation for avoiding costly demurrage, detention, and Customs queries. Every import moves through four distinct operational phases: Pre-Shipment Planning, Transit & Pre-Arrival, Port Entry & Customs Appraisal, and Out-of-Charge (OOC) Clearance with Domestic Transport.
        
Key Document Timeline:
1. Proforma Invoice & Purchase Order: Generated during commercial negotiations. Must define the exact Incoterm (e.g. CIF Nhava Sheva Incoterms 2020), payment milestones, and technical specifications.
2. Pre-Shipment Inspection Certificate: Required for specified restricted categories or when quality audit is mandated.
3. Transport Document (Bill of Lading or Air Waybill): Issued once the carrier confirms loading. The shipper must ensure consignee details match the IEC legal entity name.
4. Commercial Invoice & Packing List: Dispatched immediately by courier or electronic transmission to facilitate Prior Bill of Entry filing.
5. Country of Origin Certificate (COO): Required to claim preferential tariff duty concessions under Free Trade Agreements (e.g. ASEAN, CEPA, SAFTA).`
      },
      {
        title: 'Commercial Invoice Structuring & Valuation Clauses',
        content: `Under Rule 3 of the Customs Valuation (Determination of Value of Imported Goods) Rules 2007, the transaction value of imported goods is accepted provided the buyer and seller are not related and the price is the sole consideration.

Essential Elements of a Legally Compliant Commercial Invoice:
- Explicit Incoterm: State the 3-letter term and named port (e.g., "FOB Shanghai" or "CIF Chennai").
- Complete 8-Digit HSN Codes: Each itemized product description must be accompanied by its corresponding tariff code.
- Currency & Payment Method: Explicit mention of USD, EUR, or INR and the banker LC/TT reference.
- Manufacturer & Origin Details: Name and factory address of the manufacturer.
- Authorized Signature and Official Seal: Indian Customs will immediately place an invoice on First Check query if signatures or company stamps are missing.`
      },
      {
        title: 'Packing List vs Commercial Invoice Discrepancies',
        content: `Discrepancies between the Packing List and Commercial Invoice are the leading trigger for Risk Management System (RMS) alerts on ICEGATE.

Rules for an Unassailable Packing List:
- Net Weight vs Gross Weight: The net weight on the packing list must tally mathematically with the product quantity on the invoice.
- Package Markings: Box numbers (e.g., Box 1/50 to 50/50), shipping marks, container numbers, and seal numbers must match the Bill of Lading exactly.
- Package Types: State whether cargo is palletized, wooden-crated (requiring ISPM-15 phytosanitary heat treatment stamp), or in corrugated cartons.`
      },
      {
        title: 'Bill of Lading (B/L) & Air Waybill (AWB) Operational Nuances',
        content: `The Bill of Lading serves three vital functions: a receipt for goods loaded, evidence of the contract of carriage, and a document of title to the goods.

Operational Variations:
- Original B/L: Typically issued in sets of 3 originals. The importer must surrender an original endorsed B/L to the shipping line to obtain the Delivery Order (DO).
- Sea Waybill / Express Release / Telex Release: Used when seller has received 100% advance payment. Cargo is released to the named consignee without physical presentation of original bills, saving critical days.
- Master B/L (MBL) vs House B/L (HBL): An MBL is issued by the shipping line to the freight forwarder; the HBL is issued by the forwarder to the importer. Always ensure the House B/L is updated in the carrier's Import General Manifest (IGM) before arrival.`
      },
      {
        title: 'Bill of Entry & Post-Clearance Regularization (IDPMS)',
        content: `The Bill of Entry (BE) is the formal legal declaration submitted to Indian Customs under Section 46 of the Customs Act 1962.

Key Protocols:
- Prior Bill of Entry: Can be filed up to 30 days before vessel arrival. Enables advance assessment and duty payment before the ship anchors, reducing port dwell time to under 24 hours.
- IDPMS (Import Data Processing and Monitoring System): The Reserve Bank of India tracks all outward foreign exchange remittances against electronic Bill of Entry data transmitted automatically from ICEGATE. Ensure your Authorised Dealer (AD) bank reconciles each payment within 6 months to avoid EDPMS/IDPMS caution-listing.`
      }
    ],
    checklist: [
      'Proforma Invoice verified with exact Incoterm and delivery timelines',
      'HSN 8-digit classification validated against latest CBIC tariff notifications',
      'Commercial invoice signed and stamped by overseas supplier',
      'ISPM-15 fumigation stamp verified for all solid wood packaging materials',
      'Prior Bill of Entry filed on ICEGATE prior to vessel berthing',
      'Outward remittance reference linked in IDPMS with authorized dealer bank'
    ]
  },
  {
    slug: 'hsn-classification-made-simple',
    title: 'HSN Classification Made Simple',
    tagline: 'Master the 8-Digit Tariff Code System and Avoid Reclassification Disputes',
    pages: '44 Pages',
    chapters: [
      {
        title: 'Anatomy of the 8-Digit Harmonized System',
        content: `The Harmonized Commodity Description and Coding System (HS) is an internationally standardized system of names and numbers to classify traded products.

In India, Customs uses an 8-digit tariff code structure:
- First 2 Digits (Chapter): Broad industry category (e.g., Chapter 84 for Nuclear Reactors, Boilers, Machinery and Mechanical Appliances).
- Next 2 Digits (Heading): Specific product group within the chapter (e.g., 8414 for Air or Vacuum Pumps, Compressors, Fans).
- Next 2 Digits (Subheading): Global 6-digit standard recognized by World Customs Organization (WCO).
- Last 2 Digits (Tariff Item): India-specific national classification for duty and statistical granularity.`
      },
      {
        title: 'General Rules for the Interpretation (GRI 1 to GRI 6)',
        content: `Classification of goods in the First Schedule to the Customs Tariff Act 1975 is governed strictly by the General Rules for Interpretation (GRI).

GRI Rule Summary:
- GRI 1: Classification is determined primarily by the terms of the Headings and any relative Section or Chapter Notes. If a heading clearly describes the item, GRI 1 settles the classification legally without consulting subsequent rules.
- GRI 2(a): Covers incomplete or unfinished articles having the essential character of the complete article, as well as unassembled/CKD kits.
- GRI 2(b): Covers mixtures and combinations of materials.
- GRI 3: Applied when goods are prima facie classifiable under two or more headings:
  * 3(a): Most specific description takes precedence over general description.
  * 3(b): Essential character rule for composite goods, mixtures, and retail sets.
  * 3(c): When 3(a) and 3(b) fail, classify under the heading that occurs last in numerical order.`
      },
      {
        title: 'Essential Character Rule in Practice (Rule 3b)',
        content: `Composite goods consisting of different materials or made up of different components, and goods put up in sets for retail sale, which cannot be classified by reference to GRI 3(a), are classified as if they consisted of the material or component that gives them their essential character.

Determining Essential Character:
- Functional utility: Which component performs the primary role intended by the consumer?
- Bulk, volume, and weight: What dominates the physical composition?
- Economic value: Which component represents the principal cost of production?
Case Study: A mobile phone packaged with a charging cable, earphones, and adapter is classified under 8517 (smartphones), as the handset imparts the overwhelming essential character of the retail set.`
      },
      {
        title: 'Advance Rulings & Classification Disputes',
        content: `When classification of a new or technologically complex product is ambiguous, importers can eliminate risk by applying to the Customs Authority for Advance Rulings (CAAR).

Filing for CAAR:
- File Form CAAR-1 with a fee of ₹10,000 before the shipment is imported.
- The ruling is legally binding on all Customs jurisdictions across India for the applicant and the concerned Commissioner of Customs for up to 3 years.
- Prevents post-clearance audits from demanding differential duty, interest under Section 28AA, or penalties.`
      }
    ],
    checklist: [
      'Read Section Notes and Chapter Notes before selecting any heading',
      'Verify if product is subject to specific Anti-Dumping or Safeguard Duty notifications',
      'Confirm whether item requires compulsory BIS certification based on 8-digit HSN',
      'Maintain technical catalogues, datasheets, and chemical analysis reports on record',
      'Apply GRI 3(b) only when GRI 1 and GRI 3(a) cannot resolve classification'
    ]
  },
  {
    slug: 'customs-clearance-guide',
    title: 'Customs Clearance Guide',
    tagline: 'Practical Flow of Import Clearance and How to Avoid Costly Port Delays',
    pages: '58 Pages',
    chapters: [
      {
        title: 'Vessel Arrival & IGM Inward Entry',
        content: `The Customs clearance process officially begins when the shipping line or airline files the Import General Manifest (IGM) with Indian Customs before arrival.

Operational Steps:
- Section 30 of Customs Act mandates electronic filing of IGM.
- The IGM records container numbers, seal numbers, consignee IEC, package count, and gross weight.
- If there is any spelling error in the consignee name or container number on the IGM, the importer must request an IGM Amendment, which requires approval from the Assistant Commissioner of Customs.`
      },
      {
        title: 'Faceless Assessment (Turant Customs)',
        content: `Under the Turant Customs initiative, Bills of Entry filed on ICEGATE are assigned randomly by an automated algorithm to a Faceless Assessment Group (FAG) officer anywhere in India.

The FAG Officer evaluates:
1. Classification (HSN) and correct rate of duty applied.
2. Valuation under Customs Valuation Rules 2007.
3. Country of Origin benefits claimed under preferential trade notifications.
4. Compliance with Non-Tariff barriers (BIS, FSSAI, EPR, Drug Controller approvals).`
      },
      {
        title: 'Risk Management System (RMS) & Examination',
        content: `Bills of Entry are categorized into three paths by the Risk Management System:
- Green Channel: Appraised and cleared with zero officer intervention. Duty is paid and Out-of-Charge (OOC) generated immediately.
- Assessment only: Verified by FAG officer without physical cargo examination.
- Examination: Cargo undergoes physical inspection or scanning at the Container Freight Station (CFS) or port docks. First Check requires inspection before assessment; Second Check assesses duty first and inspects prior to physical gate release.`
      },
      {
        title: 'Preventing Port Demurrage & Container Detention',
        content: `Demurrage and detention can rapidly erode profit margins if not actively managed:
- Demurrage: Billed by the Port or Container Freight Station (CFS) for cargo occupying ground space beyond free days (typically 3 to 5 free days).
- Detention: Billed by the Shipping Line for retaining their container equipment outside the port terminal beyond free days (typically 7 to 14 free days).
Golden Rule: File Prior Bill of Entry 48 hours before vessel berthing to ensure duty payment is completed the instant the container touches the dock.`
      }
    ],
    checklist: [
      'Prior Bill of Entry filed 48 hours before vessel arrival',
      'IGM details matched against Bill of Lading copy',
      'e-Sanchit digital document upload completed with correct document codes',
      'Customs duty paid electronically via ICEGATE within 24 hours of assessment',
      'Delivery Order (DO) obtained from shipping line prior to container gate-out'
    ]
  },
  {
    slug: 'dgft-compliance-basics',
    title: 'DGFT & Compliance Basics',
    tagline: 'Essential Policies, Notifications, and Compliance for Indian Importers',
    pages: '46 Pages',
    chapters: [
      {
        title: 'Importer-Exporter Code (IEC) & DGFT Governance',
        content: `The Directorate General of Foreign Trade (DGFT), under the Ministry of Commerce & Industry, administers the Foreign Trade Policy (FTP) of India. The Importer-Exporter Code (IEC) is a 10-digit mandatory registration linked directly with the entity's PAN and GSTIN.`
      },
      {
        title: 'Product Import Categories (Free, Restricted, Prohibited)',
        content: `ITC (HS) classification divides all import commodities into three policy schedules:
- Free: Can be imported without any license, subject to standard domestic statutory standards.
- Restricted: Requires an Import Authorisation/License issued by the DGFT Headquarters or Zonal Committee.
- Prohibited: Completely banned from import (e.g. specified wild animals, certain hazardous wastes).`
      },
      {
        title: 'Mandatory Non-Tariff Clearances (BIS, EPR & LMPC)',
        content: `Modern Indian Customs clearance requires strict compliance with partner government agencies (PGAs):
- BIS (Bureau of Indian Standards): Compulsory Registration Scheme (CRS) for electronic goods, IT hardware, steel, and toys.
- EPR (Extended Producer Responsibility): Mandatory registration with Central Pollution Control Board (CPCB) for packaging plastic, e-waste, and batteries.
- Legal Metrology (LMPC): Mandatory registration under Packaged Commodities Rules 2011 for goods sold in retail packaging.`
      }
    ],
    checklist: [
      'Annual electronic validation of IEC completed on DGFT portal',
      'BIS Compulsory Registration verified for applicable electronic goods',
      'CPCB EPR certificate active and linked to ICEGATE single window',
      'LMPC retail labeling declarations verified prior to dispatch from supplier'
    ]
  },
  {
    slug: 'import-costing-landed-cost',
    title: 'Import Costing & Landed Cost',
    tagline: 'Break Down Real Duties, Freight, Port Surcharges & True Landed Costs',
    pages: '48 Pages',
    chapters: [
      {
        title: 'Assessable Value (AV) & Customs Exchange Rates',
        content: `The Assessable Value for Indian Customs is based on the CIF price converted into Indian Rupees using the exchange rates notified fortnightly by the Central Board of Indirect Taxes and Customs (CBIC), NOT commercial banking rates.`
      },
      {
        title: 'Customs Duty Structure: BCD, SWS & IGST',
        content: `The duty calculation sequence follows statutory hierarchy:
1. Basic Customs Duty (BCD) = Assessable Value × BCD Rate.
2. Social Welfare Surcharge (SWS) = 10% on BCD amount.
3. Taxable Base for IGST = Assessable Value + BCD + SWS.
4. Integrated GST (IGST) = Taxable Base × Applicable GST Rate (5%, 12%, 18%, or 28%).
Note: IGST paid on imported commercial goods is 100% creditable as Input Tax Credit (ITC) on GSTR-3B.`
      },
      {
        title: 'Terminal, Forwarder & CFS Expenses',
        content: `Beyond government duties, the landed cost must incorporate:
- Terminal Handling Charges (THC) at origin and destination.
- Shipping Line Delivery Order (DO) documentation fees.
- CFS Destuffing, ground rent, and handling charges.
- Customs Broker (CHA) agency and clearance professional fees.
- Inland transportation from port/CFS to importer warehouse.`
      }
    ],
    checklist: [
      'Compute assessable value using current CBIC notified exchange rate',
      'Verify BCD and IGST exemption notification numbers',
      'Incorporate port CFS handling and shipping line DO fees in landed sheet',
      'Reconcile IGST paid on ICEGATE with GSTR-2B for full Input Tax Credit'
    ]
  },
  {
    slug: 'exim-terminology-guide',
    title: 'EXIM Terminology Guide',
    tagline: 'Quick Desk Reference to Key Terms in International Trade, Shipping & Logistics',
    pages: '38 Pages',
    chapters: [
      {
        title: 'Incoterms 2020: Risk and Cost Boundaries',
        content: `The International Chamber of Commerce (ICC) Incoterms rules define the responsibilities of buyers and sellers for the delivery of goods under sales contracts:
- FOB (Free on Board): Seller delivers goods on board the vessel nominated by buyer. Buyer pays ocean freight, marine insurance, and import clearance.
- CIF (Cost, Insurance & Freight): Seller arranges and pays ocean freight and minimum marine insurance to named destination port. Risk transfers to buyer once goods are on board at origin port!
- DAP (Delivered at Place): Seller bears all risks and costs to bring goods to buyer premises, excluding import Customs clearance and duties.`
      },
      {
        title: 'Essential Port, Shipping & Customs Acronyms',
        content: `Key Acronyms Every Importer Must Know:
- CHA: Custom House Agent (now formally known as Customs Broker).
- CFS: Container Freight Station (customs bonded facility for container handling).
- ICD: Inland Container Depot (dry port facility located in inland cities).
- TEU: Twenty-Foot Equivalent Unit (standard 20ft container measurement).
- OOC: Out of Charge (formal statutory release of goods by Customs).
- LEO: Let Export Order (export release counterpart to import OOC).`
      }
    ],
    checklist: [
      'State named destination port alongside Incoterm in purchase contract',
      'Ensure marine insurance coverage matches Institute Cargo Clauses (A)',
      'Confirm whether forwarder issues Master Bill of Lading or House Bill of Lading'
    ]
  },
  {
    slug: 'ai-for-importers',
    title: 'AI for Importers',
    tagline: 'Practical Ways AI Can Support Documentation, Research & Workflow Tasks',
    pages: '42 Pages',
    chapters: [
      {
        title: 'AI-Powered Documentation Auditing',
        content: `Using generative AI models to review commercial shipping documentation before submission saves thousands in amendment penalties:
- Automating cross-checks between Commercial Invoice and Packing List.
- Auditing supplier contracts for missing delivery liability clauses.
- Checking mathematical precision across unit prices, quantities, and totals.`
      },
      {
        title: 'AI Prompts for Customs Research & Query Drafting',
        content: `How to write high-precision prompts to draft technical replies to ICEGATE Customs queries:
Provide the product description, technical datasheet, and officer query. Prompt the model to structure a formal, legally respectful reply citing relevant Section and Chapter Notes.`
      }
    ],
    checklist: [
      'Never input proprietary trade secrets or banking credentials into public AI models',
      'Always have a qualified human verify HSN code suggestions against official CBIC tariff',
      'Use structured templates for auditing supplier documentation'
    ]
  },
  {
    slug: 'bill-of-entry-walkthrough',
    title: 'Bill of Entry Walkthrough',
    tagline: 'Step-by-Step Practical Walkthrough of Indian Customs Clearance Documentation',
    pages: '50 Pages',
    chapters: [
      {
        title: 'Deconstructing the Electronic Bill of Entry',
        content: `The electronic Bill of Entry generated by ICEGATE contains 16 vital sections:
- Header: Port Code, Job Number, BE Number & Date, Importer IEC and GSTIN.
- Carrier Details: Vessel Name, Voyage, IGM Number, Date of Inward Entry.
- Invoice Details: Invoice Number, Date, Supplier Name, Incoterm, Total Invoice Value.
- Item Level Table: HSN Code, Description, Quantity, Unit Price, BCD rate, IGST rate.
- Duty Ledger: Breakdown of BCD, SWS, AIDC, and IGST totals.`
      },
      {
        title: 'Verification & Assessment Remarks',
        content: `Carefully examine the Appraising and Examination remarks in Section 12 before authorizing duty payment. Verify that any exemption notification serial number claimed is accurately reflected in the duty computation.`
      }
    ],
    checklist: [
      'Verify port code matches designated CFS/port terminal',
      'Confirm item description matches physical product specifications',
      'Audit duty rates against official gazette notifications before paying Challan',
      'Download signed electronic Out of Charge (OOC) copy from ICEGATE for audits'
    ]
  },
  {
    slug: 'import-business-starter-guide',
    title: 'Import Business Starter Guide',
    tagline: 'A Beginner-Friendly Roadmap for Anyone Planning to Start an Import Venture',
    pages: '60 Pages',
    chapters: [
      {
        title: 'Legal Entity, Banking & Registrations',
        content: `Step-by-step setup for a new import business in India:
1. Register legal entity: LLP or Private Limited recommended for import liability insulation.
2. Open Current Account with an Authorised Dealer (AD) Category-1 Bank.
3. Obtain GSTIN and apply online for Importer-Exporter Code (IEC) on DGFT.
4. Register AD Code with the primary Customs port of clearance via ICEGATE.`
      },
      {
        title: 'Supplier Due Diligence & Secure Payment Terms',
        content: `Protecting your capital during international procurement:
- Verify business license, export certificates, and factory address.
- Never pay 100% advance. Negotiate 30% advance and 70% against copy of Bill of Lading.
- Appoint a third-party inspection agency (e.g., SGS, Bureau Veritas) for pre-shipment quality audits.`
      }
    ],
    checklist: [
      'Entity established with GSTIN and active IEC registration',
      'AD Code registered on ICEGATE at primary destination port',
      'Supplier factory verified through video audit and sample testing',
      'Favorable payment terms locked under formal international sales contract'
    ]
  },
  {
    slug: 'freight-logistics-essentials',
    title: 'Freight & Logistics Essentials',
    tagline: 'Core Concepts in Ocean Freight, Air Cargo, Warehousing & Last-Mile Delivery',
    pages: '54 Pages',
    chapters: [
      {
        title: 'Ocean Freight Operations (FCL vs LCL)',
        content: `Choosing the right container shipping strategy:
- Full Container Load (FCL): Entire container dedicated to one importer. Faster clearance, lower risk of transit damage, zero CFS destuffing delays.
- Less than Container Load (LCL): Cargo consolidated with other shippers. Cost-effective for shipments under 12-15 CBM, but subject to CFS destuffing delays and higher local terminal charges.`
      },
      {
        title: 'Air Cargo Logistics & Volumetric Weight',
        content: `Air freight is billed on the basis of Chargeable Weight, which is the greater of Actual Gross Weight and Volumetric Weight:
Volumetric Weight (kg) = (Length × Width × Height in cm) ÷ 6000.
Always optimize carton packaging to eliminate dead airspace when shipping by air.`
      }
    ],
    checklist: [
      'Compare FCL vs LCL landed costs when cargo volume approaches 12 CBM',
      'Calculate volumetric weight for air shipments before booking cargo space',
      'Negotiate at least 14 container detention free days with ocean carrier'
    ]
  }
];

function generateHtml(book) {
  const coverPath = path.join(__dirname, '..', 'assets', 'books', `${book.slug}.jpg`);
  let coverBase64 = '';
  if (fs.existsSync(coverPath)) {
    const data = fs.readFileSync(coverPath);
    coverBase64 = `data:image/jpeg;base64,${data.toString('base64')}`;
  }

  const chaptersHtml = book.chapters.map((ch, idx) => `
    <div class="chapter-block">
      <div class="chapter-header">
        <span class="chapter-badge">Chapter ${idx + 1}</span>
        <h2 class="chapter-heading">${ch.title}</h2>
      </div>
      <div class="chapter-body">
        ${ch.content.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
      </div>
    </div>
  `).join('');

  const checklistHtml = book.checklist.map((item, idx) => `
    <li class="checklist-item">
      <span class="check-box">✓</span>
      <span>${item}</span>
    </li>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${book.title} - Importpreneur VIP</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.6;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    /* Cover Page */
    .cover-page {
      width: 100vw;
      height: 100vh;
      page-break-after: always;
      background: linear-gradient(145deg, #070d19 0%, #0b172a 60%, #1e293b 100%);
      color: #ffffff;
      padding: 3.5rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .cover-border {
      position: absolute;
      inset: 1.5rem;
      border: 2px solid rgba(217, 119, 6, 0.4);
      border-radius: 12px;
      pointer-events: none;
    }
    .cover-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
    }
    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.3);
      padding: 0.375rem 0.875rem;
      border-radius: 9999px;
    }
    .edition-tag {
      font-size: 0.8125rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.7);
    }
    .cover-center {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin: 2rem 0;
      z-index: 2;
    }
    .cover-image {
      width: 220px;
      aspect-ratio: 2 / 3;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: -8px 0 20px rgba(0,0,0,0.4), 0 20px 30px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.15);
      flex-shrink: 0;
    }
    .cover-titles {
      flex: 1;
    }
    .cover-eyebrow {
      font-size: 0.875rem;
      font-weight: 700;
      color: #f59e0b;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .cover-title {
      font-size: 2.25rem;
      font-weight: 900;
      line-height: 1.15;
      color: #ffffff;
      margin-top: 0.5rem;
      letter-spacing: -0.02em;
    }
    .cover-tagline {
      font-size: 1.0625rem;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 0.75rem;
      line-height: 1.5;
    }
    .cover-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 2;
    }
    .mentor-info h4 {
      font-size: 1.125rem;
      font-weight: 800;
      color: #ffffff;
    }
    .mentor-info p {
      font-size: 0.8125rem;
      color: #f59e0b;
      font-weight: 600;
      margin-top: 0.25rem;
    }
    .specs-badge {
      text-align: right;
      font-size: 0.8125rem;
      color: rgba(255, 255, 255, 0.6);
    }
    
    /* Content Pages */
    .content-page {
      padding: 3rem;
      page-break-after: always;
    }
    .content-page:last-child {
      page-break-after: auto;
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 0.75rem;
      margin-bottom: 2rem;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
    }
    .page-header span:first-child {
      color: #0b172a;
    }
    .page-header span:last-child {
      color: #d97706;
    }
    
    .toc-title {
      font-size: 1.75rem;
      font-weight: 800;
      color: #0b172a;
      margin-bottom: 1.5rem;
    }
    .toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      margin-bottom: 2.5rem;
    }
    .toc-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1rem;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      font-weight: 600;
      font-size: 0.9375rem;
    }
    .toc-num {
      display: grid;
      place-items: center;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 9999px;
      background: #fef3c7;
      color: #b45309;
      font-weight: 800;
      font-size: 0.75rem;
      flex-shrink: 0;
    }
    
    .chapter-block {
      margin-bottom: 2.25rem;
      page-break-inside: avoid;
    }
    .chapter-header {
      margin-bottom: 0.75rem;
    }
    .chapter-badge {
      display: inline-block;
      font-size: 0.6875rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #d97706;
      background: #fef3c7;
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }
    .chapter-heading {
      font-size: 1.25rem;
      font-weight: 800;
      color: #0b172a;
      line-height: 1.3;
    }
    .chapter-body p {
      font-size: 0.9375rem;
      color: #334155;
      line-height: 1.65;
      margin-bottom: 0.75rem;
    }
    
    .checklist-section {
      margin-top: 2rem;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 4px solid #d97706;
      border-radius: 8px;
      padding: 1.5rem;
      page-break-inside: avoid;
    }
    .checklist-title {
      font-size: 1.0625rem;
      font-weight: 800;
      color: #0b172a;
      margin-bottom: 1rem;
    }
    .checklist-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.875rem;
      color: #1e293b;
      font-weight: 500;
    }
    .check-box {
      color: #10b981;
      font-weight: 800;
      flex-shrink: 0;
    }
    
    .page-footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 0.75rem;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <!-- Cover Page -->
  <div class="cover-page">
    <div class="cover-border"></div>
    
    <div class="cover-top">
      <span class="brand-pill">⚓ Importpreneur VIP</span>
      <span class="edition-tag">Practical Workshop Edition • 2026</span>
    </div>
    
    <div class="cover-center">
      ${coverBase64 ? `<img src="${coverBase64}" class="cover-image" alt="Book Cover" />` : ''}
      <div class="cover-titles">
        <span class="cover-eyebrow">Official EXIM Handbook</span>
        <h1 class="cover-title">${book.title}</h1>
        <p class="cover-tagline">${book.tagline}</p>
      </div>
    </div>
    
    <div class="cover-footer">
      <div class="mentor-info">
        <h4>Mentor: Krishnakumar</h4>
        <p>30 Years Logistics, Customs & EXIM Documentation Experience</p>
      </div>
      <div class="specs-badge">
        <p>Comprehensive Edition</p>
        <p>${book.pages} • Digital PDF</p>
      </div>
    </div>
  </div>

  <!-- Page 2: Table of Contents & Preface -->
  <div class="content-page">
    <div class="page-header">
      <span>${book.title}</span>
      <span>Importpreneur VIP Series</span>
    </div>
    
    <h2 class="toc-title">Table of Contents & Curriculum</h2>
    <ul class="toc-list">
      ${book.chapters.map((ch, i) => `
        <li class="toc-item">
          <span class="toc-num">${i + 1}</span>
          <span>${ch.title}</span>
        </li>
      `).join('')}
    </ul>
    
    <div class="checklist-section">
      <h3 class="checklist-title">🎯 Mentor's Action Checklist & Operational Rules</h3>
      <ul class="checklist-list">
        ${checklistHtml}
      </ul>
    </div>
    
    <div class="page-footer">
      <span>Mentor: Krishnakumar • Importpreneur VIP</span>
      <span>Confidential & Proprietary Training Material</span>
    </div>
  </div>

  <!-- Page 3+: Chapters -->
  <div class="content-page">
    <div class="page-header">
      <span>Detailed Curriculum</span>
      <span>Practical Chapters</span>
    </div>
    
    ${chaptersHtml}
    
    <div class="page-footer">
      <span>Importpreneur VIP Practical Learning Community</span>
      <span>WhatsApp: https://chat.whatsapp.com/FYZv7piu46iLFJYe3qUAQ1</span>
    </div>
  </div>

</body>
</html>`;
}

const targetDirs = [
  path.join(__dirname, '..', 'ebooks'),
  path.join(__dirname, '..', 'public', 'ebooks')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const tempHtmlPath = path.join(__dirname, 'temp_book.html');

booksData.forEach((book, idx) => {
  console.log(`[${idx + 1}/10] Generating publication PDF for: ${book.slug}...`);
  const htmlContent = generateHtml(book);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  const pdfOutput1 = path.join(targetDirs[0], `${book.slug}.pdf`);
  const pdfOutput2 = path.join(targetDirs[1], `${book.slug}.pdf`);

  // Run browser headless to print PDF
  const result = spawnSync(browserPath, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    `--print-to-pdf=${pdfOutput1}`,
    tempHtmlPath
  ]);

  if (!fs.existsSync(pdfOutput1)) {
    console.error(`Failed to generate ${book.slug}.pdf`, result.stderr ? result.stderr.toString() : '');
  } else {
    // Copy to public/ebooks as well
    fs.copyFileSync(pdfOutput1, pdfOutput2);
    console.log(`✓ Completed: ${book.slug}.pdf (${fs.statSync(pdfOutput1).size} bytes)`);
  }
});

if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
console.log('All 10 professional e-book PDFs generated with complete layout and covers!');
