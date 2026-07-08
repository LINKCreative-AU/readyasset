// Enrichment content for category pages + homepage. Merged into the build by
// build.mjs. Keep the language rules: never "best rate"/"lowest rate" — say
// "your best options from our panel" / "lenders compete on your rate".

// Per-category deep content, keyed by CATS.k
export const EXTRA = {
  car: {
    financeList: ['New cars', 'Used cars', 'Dealer purchases', 'Private sales', 'Electric vehicles & hybrids', 'Utes & vans', 'Prestige & performance', 'Car loan refinancing'],
    repayAmounts: [25000, 45000, 65000],
    structures: [
      { h: 'Secured against the car', p: 'The vehicle is the security, which is why car loan rates sit well below unsecured lending. The car is yours to drive from day one.' },
      { h: 'Terms from 1–7 years', p: 'Shorter terms cost less in total interest; longer terms lower the weekly repayment. We model both so you choose with the numbers in front of you.' },
      { h: 'Optional balloon payment', p: 'Park a portion of the price at the end of the loan to cut the weekly repayment — then pay it out, refinance it, or trade the car.' },
      { h: 'Deposit optional', p: 'Many lenders on the panel offer 100% finance for approved applicants. A deposit or trade-in simply lowers the amount financed.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income — PAYG, self-employed or contractor', 'Past credit hiccups? Specialist lenders on the panel look at your situation today'],
    docs: ['Driver licence', 'Two recent payslips (or bank statements if self-employed)', 'Details of the car if you’ve found it — dealer invoice or private seller details', 'Recent statements for any loans being refinanced'],
    whyBroker: 'A dealership quotes you the finance it has on the shelf, and your bank can only offer its own product. We run one application across 45+ lenders — banks, fintechs and specialist car lenders — and they compete on your rate. You walk into the dealership with pre-approval in hand, which makes you a cash buyer at the negotiating table.',
    related: [
      ['commercial-finance', 'Buying a ute or van for the business? Commercial finance may suit better'],
      ['motorbike-finance', 'Two wheels instead? Motorbike finance works the same way'],
      ['personal-loans', 'For older or cheaper cars, a personal loan can be the simpler structure'],
    ],
    extraFaqs: [
      { q: 'What affects my car loan interest rate?', a: 'Mainly your credit history, income stability, whether you own property, the age of the car, the loan term, and the deposit. Lenders weigh these differently — which is exactly why running one scenario across the whole panel beats asking one bank.' },
      { q: 'Can I refinance my existing car loan?', a: 'Yes. If your rate was set when your credit profile was weaker, or dealer finance was taken in a hurry, refinancing can lower the repayment or the term. We run the payout figure against the panel and show you whether switching actually saves money.' },
      { q: 'Is the rate different for new and used cars?', a: 'Usually slightly. New and near-new cars attract the sharpest pricing; older cars price a little higher and some lenders cap vehicle age at the end of the term. With 45+ lenders there’s a competitive option for most ages of car.' },
    ],
  },

  caravan: {
    financeList: ['New & used caravans', 'Off-road & hybrid vans', 'Camper trailers', 'Motorhomes & campervans', 'Pop-tops & fifth wheelers', 'Private sales', 'Dealer purchases', 'Caravan loan refinancing'],
    repayAmounts: [45000, 85000, 120000],
    structures: [
      { h: 'Secured against the van', p: 'The caravan is the security, so rates sit well below personal loans and credit cards — even on six-figure off-road vans.' },
      { h: 'Terms from 1–7 years', p: 'Caravans are long-life assets, so most buyers use longer terms to keep repayments in holiday-budget territory.' },
      { h: 'Optional balloon payment', p: 'A balloon at the end of the term drops the weekly figure along the way — useful on larger vans. Pay it out, refinance or upgrade at the end.' },
      { h: 'Deposit or trade-in optional', p: 'Trade your current van or put savings down to lower the amount financed — or finance the full price if approved.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income — including many self-funded retirees and part-timers, assessed case by case', 'Past credit issues considered by specialist lenders on the panel'],
    docs: ['Driver licence', 'Two recent payslips (or bank statements / financials if self-employed)', 'Details of the van — dealer quote or private seller and PPSR details', 'Trade-in details if you’re upgrading'],
    whyBroker: 'Caravan dealers typically quote from one or two financiers. We put the same purchase to 45+ lenders — including recreational-asset specialists who price vans sharper than the big banks — and they compete on your rate. You get your best options from the panel before you sign anything at the dealership.',
    related: [
      ['leisure-finance', 'Towing toys too? Leisure finance covers camper trailers, quads and more'],
      ['car-finance', 'Upgrading the tow vehicle? Car finance works the same way'],
      ['boat-finance', 'More of a water family? Boat finance from tinnies to cruisers'],
    ],
    extraFaqs: [
      { q: 'Do I need insurance to finance a caravan?', a: 'Yes — lenders require comprehensive insurance on a financed caravan, the same as a financed car. It protects you as much as them; we can point you to insurers who specialise in vans.' },
      { q: 'Can retirees or part-timers get caravan finance?', a: 'Often, yes. Several lenders on the panel assess retirement income, investments and asset position rather than just a payslip. It’s a common scenario for caravan purchases and exactly the kind of placement a broker does well.' },
      { q: 'What affects my caravan loan rate?', a: 'Your credit profile, income and asset position, the van’s age and value, the term, and any deposit. Newer vans and stronger profiles price sharpest — but every lender weighs it differently, so the panel does the comparison work.' },
    ],
  },

  boat: {
    financeList: ['Tinnies & runabouts', 'Bowriders & half cabins', 'Cruisers & flybridges', 'Jet boats & ski boats', 'Sailboats & yachts', 'Boat, motor & trailer packages', 'Private sales', 'Outboard repowers'],
    repayAmounts: [30000, 65000, 120000],
    structures: [
      { h: 'Secured marine loan', p: 'The boat (with motor and trailer) secures the loan, keeping rates well under unsecured borrowing. The package settles as one asset.' },
      { h: 'Terms from 1–7 years', p: 'Match the term to how long you’ll keep the boat. Shorter saves interest; longer keeps the weekly number easy.' },
      { h: 'Optional balloon payment', p: 'Popular on larger boats — a balloon holds part of the price to the end of the term so the weekly repayment stays manageable.' },
      { h: 'Deposit optional', p: 'Finance the full package price if approved, or put down a deposit or trade to shrink the loan.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income — PAYG, self-employed and contractors all placeable', 'Marine-specialist lenders on the panel take a practical view of boat buyers'],
    docs: ['Driver licence (and boat licence where required)', 'Two recent payslips or bank statements', 'Details of the boat — dealer quote, or the seller, HIN and PPSR details for private sales', 'Trailer details if it’s part of the package'],
    whyBroker: 'Banks are conservative about watercraft; marine specialists live and breathe them. Our panel has both, so your scenario finds the lender that actually wants the deal — including specialists like AMMF who understand resale values and boat buyers. One application, and the panel competes on your rate.',
    related: [
      ['leisure-finance', 'Jet ski instead? That’s leisure finance — same quick process'],
      ['caravan-finance', 'Land cruising too? Caravan finance for vans and motorhomes'],
      ['car-finance', 'Need a tow rig? Car finance for the ute or wagon'],
    ],
    extraFaqs: [
      { q: 'Do I need insurance to finance a boat?', a: 'Yes — comprehensive marine insurance is required while the loan runs. Premiums vary with the boat and where you use it; factor it into the weekly cost when you’re comparing options.' },
      { q: 'Does it matter if the boat is moored or trailered?', a: 'It can. Trailered boats are straightforward for most lenders; larger moored vessels involve different valuations and sometimes marine surveys. Tell us how you’ll keep the boat and we’ll match lenders comfortable with it.' },
      { q: 'What affects my boat loan rate?', a: 'Your credit profile, the boat’s age, value and type, the term, and deposit. Marine specialists often out-price generalist banks on watercraft — the panel comparison finds out quickly.' },
    ],
  },

  bike: {
    financeList: ['Road & sports bikes', 'Cruisers & tourers', 'Adventure & dual-sport', 'Dirt bikes & motocross', 'Scooters & commuters', 'Electric motorbikes', 'Private sales', 'Riding gear with the bike'],
    repayAmounts: [10000, 18000, 30000],
    structures: [
      { h: 'Secured against the bike', p: 'The bike is the security, so rates stay below personal-loan territory even on smaller amounts.' },
      { h: 'Terms from 1–5 years', p: 'Bike loans run shorter than car loans. A tighter term costs less overall; a longer one keeps the weekly figure small.' },
      { h: 'Gear can be included', p: 'Helmet, jacket and luggage bought with the bike can often be rolled into the amount financed.' },
      { h: 'Deposit optional', p: '100% finance is common for approved riders; a deposit or trade just lowers the repayments.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income — full-time, part-time, casual and self-employed all considered', 'Learner and newly licensed riders are fine — it’s the finances being assessed, not the licence class'],
    docs: ['Driver/rider licence', 'Two recent payslips or bank statements', 'Details of the bike — dealer quote or private seller and rego/VIN', 'Gear quote if you’re rolling it in'],
    whyBroker: 'Dealer finance desks quote from a couple of financiers; banks often treat bikes as an afterthought. Our panel includes motorcycle specialists like AMMF alongside the banks and fintechs — one application, and they compete on your rate while you’re still choosing between models.',
    related: [
      ['leisure-finance', 'Quads, ATVs and side-by-sides sit under leisure finance'],
      ['car-finance', 'Four wheels as well? Car finance runs the same play'],
      ['personal-loans', 'For a very cheap bike, a small personal loan can be simpler'],
    ],
    extraFaqs: [
      { q: 'Can learner riders get motorbike finance?', a: 'Yes. Lenders assess your income and credit history, not your riding experience. Plenty of first bikes on LAMS restrictions are financed every week.' },
      { q: 'Is there an age limit on the bike itself?', a: 'Some lenders cap the bike’s age at the end of the loan term; others are flexible, especially the motorcycle specialists. Older and classic bikes can usually still be placed — ask us before ruling it out.' },
      { q: 'What affects my bike loan rate?', a: 'Credit history, income stability, the bike’s age and value, term length and any deposit. Smaller loans can carry slightly higher rates, which makes panel comparison worth more, not less.' },
    ],
  },

  personal: {
    financeList: ['Debt consolidation', 'Travel & holidays', 'Renovations & repairs', 'Medical & dental', 'Weddings & events', 'Furniture & whitegoods', 'Education & courses', 'Moving & bond costs'],
    repayAmounts: [10000, 25000, 40000],
    structures: [
      { h: 'Unsecured or secured', p: 'Unsecured needs no asset and settles fast. Secured (against a car or similar) generally prices lower. We quote both where you qualify.' },
      { h: 'Terms from 1–7 years', p: 'Fixed repayments over a fixed term — you always know the finish line, unlike a credit card balance.' },
      { h: 'Rate personalised to you', p: 'Personal loan rates are tiered to your credit profile and income. That’s why one lender’s quote tells you almost nothing — the panel shows the spread.' },
      { h: 'Early payout options', p: 'Many panel lenders allow extra repayments or early payout with little or no penalty — we’ll flag the ones that do.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income with room for the repayment after your commitments', 'Imperfect credit history considered by specialist lenders — with no credit score impact to find out'],
    docs: ['Driver licence or passport', 'Two recent payslips or 90 days of bank statements', 'A list of current debts if consolidating — cards, BNPL, loans and payouts', 'Quotes or invoices for large planned expenses, if you have them'],
    whyBroker: 'Applying to lenders one by one is slow, and every formal application marks your credit file. We do it the other way around: one quote, no file touch, and 45+ lenders’ pricing on your scenario — then you formally apply once, to the lender you picked. For consolidation especially, the maths is done before anyone touches your credit.',
    related: [
      ['car-finance', 'Borrowing for a car? A secured car loan usually prices sharper'],
      ['leisure-finance', 'Buying a jet ski or quad? Leisure finance secures against the toy'],
      ['business-loans', 'Business expense? A business loan keeps it in the business'],
    ],
    extraFaqs: [
      { q: 'Fixed or variable rate — which should I take?', a: 'Most personal loans on the panel are fixed: the repayment never moves, which suits budgeting. Variable products sometimes allow more flexible early payout. We’ll show both where they exist and let the numbers argue it out.' },
      { q: 'Can I pay my loan out early?', a: 'Usually, and many lenders on our panel charge little or nothing for it. If early payout matters to you, say so in the quote — it changes which lenders we shortlist.' },
      { q: 'What determines my personal loan rate?', a: 'Credit score and history, income and job stability, existing commitments, whether the loan is secured, and the term. Because rates are personalised, comparing one lender is meaningless — the panel spread is the real answer.' },
    ],
  },

  business: {
    financeList: ['Unsecured business loans', 'Secured business loans', 'Business lines of credit', 'Invoice finance', 'Working capital & cash-flow cover', 'Stock & inventory funding', 'Fit-outs & renovations', 'Tax debt & ATO arrears'],
    repayAmounts: [30000, 75000, 150000],
    structures: [
      { h: 'Unsecured — fast', p: 'No property security. Fintech lenders approve in hours and fund in days; pricing reflects the speed and risk.' },
      { h: 'Secured — sharper', p: 'Property or business assets as security opens bank-grade pricing and larger limits, at the cost of more paperwork and time.' },
      { h: 'Line of credit', p: 'Approved once, drawn as needed, interest only on what you use — a buffer that matches lumpy cash flow.' },
      { h: 'Invoice finance', p: 'Advance most of the value of unpaid invoices instead of waiting 30–90 days. ScotPac and Earlypay on our panel specialise in it.' },
    ],
    eligibility: ['Active ABN — 6+ months trading for fintech lenders, 12+ opens more doors', 'Turnover the repayments comfortably fit inside', 'GST registration helps but isn’t mandatory everywhere', 'Property backing widens the panel — not required for unsecured products'],
    docs: ['Driver licence and ABN details', '6 months of business bank statements (low-doc)', 'Financials and tax returns for bank-grade secured facilities', 'Invoice ledger details if exploring invoice finance'],
    whyBroker: 'The business lending market splits into banks (sharp pricing, slow, paperwork-heavy) and fintechs (fast, flexible, dearer). Where your business lands depends on trading history, turnover and security — and it changes as you grow. We place your scenario where it’s strongest across 45+ lenders and tell you honestly which trade-off you’re making.',
    related: [
      ['commercial-finance', 'Buying equipment or vehicles? Commercial asset finance secures against the gear'],
      ['car-finance', 'A car for the business can run through either lane — we’ll advise'],
      ['personal-loans', 'Keeping it personal instead? Personal loans for sole purposes'],
    ],
    extraFaqs: [
      { q: 'Can a new business get a loan?', a: 'Under 6 months’ trading is hard for most lenders, but not always impossible — strong contracts, industry experience or security help. If it’s genuinely too early, we’ll say so and map what unlocks at 6 and 12 months.' },
      { q: 'How do repayments work on fintech business loans?', a: 'Many charge a fixed fee and collect daily or weekly rather than monthly — which suits businesses with daily takings. We translate every offer into a total cost of funds so you can compare it against bank pricing like-for-like.' },
      { q: 'Will applying affect my personal credit score?', a: 'The quick quote doesn’t touch personal or business files. Directors’ personal credit is usually checked at formal application for smaller companies — we’ll flag exactly when that happens before it does.' },
    ],
  },

  commercial: {
    financeList: ['Trucks & prime movers', 'Trailers', 'Excavators & earthmoving', 'Skid steers & loaders', 'Forklifts & materials handling', 'Agricultural machinery', 'Medical & dental equipment', 'Workshop & manufacturing gear'],
    repayAmounts: [60000, 120000, 250000],
    structures: [
      { h: 'Chattel mortgage', p: 'The standard structure: your business owns the asset from day one, the lender registers security over it. Interest and depreciation are generally deductible — confirm treatment with your accountant.' },
      { h: 'Terms from 1–7 years', p: 'Match the term to the asset’s working life. Balloons carry part of the cost to the end to protect cash flow along the way.' },
      { h: 'Low-doc approvals', p: 'Established ABN holders (typically 2+ years, GST registered) can skip full financials on standard assets — bank statements do the talking.' },
      { h: 'New, used, auction or private', p: 'Specialist equipment funders approve asset ages and sources that banks won’t touch. Where you buy matters less than what it earns.' },
    ],
    eligibility: ['Active ABN — 2+ years and GST registration unlock low-doc limits', 'The asset earns income in the business', 'Deposits optional on standard assets for established businesses', 'Startups and shorter ABNs placeable with deposits or director security'],
    docs: ['Driver licence and ABN/GST details', 'Invoice or auction details for the asset', 'Bank statements for low-doc; financials for larger or complex deals', 'Existing loan payouts if refinancing equipment'],
    whyBroker: 'Equipment lenders differ wildly on asset age limits, industries and deal sizes — the bank that loves a new prime mover may refuse a used excavator. We know which of the 45+ lenders wants your exact asset and profile, so the deal lands first time and settles before the auction invoice is due.',
    related: [
      ['business-loans', 'Need working capital instead of gear? Business loans and lines of credit'],
      ['car-finance', 'Cars and light vehicles for the fleet run through car finance'],
      ['caravan-finance', 'Mobile site accommodation? Caravan finance can apply'],
    ],
    extraFaqs: [
      { q: 'Chattel mortgage, lease or rent-to-own — what’s the difference?', a: 'Chattel mortgage: you own the asset, claim interest and depreciation. Lease/rental: the financier owns it and payments are generally deductible, with flexibility at end of term. The right pick is a tax question as much as a finance one — we structure whichever your accountant blesses.' },
      { q: 'Can I claim the GST on the purchase?', a: 'Under a chattel mortgage, GST-registered businesses generally claim the GST on the purchase price in their next BAS — a meaningful cash-flow swing on six-figure gear. Confirm your specific treatment with your accountant.' },
      { q: 'Do you finance auction and interstate purchases?', a: 'Yes — auction buys are routine, including timed online auctions. The lender verifies the asset and pays the auction house or seller directly. Interstate purchases just add freight to your maths, not to the lending.' },
    ],
  },

  leisure: {
    financeList: ['Jet skis & PWCs', 'ATVs, quads & side-by-sides', 'Camper trailers', 'Horse floats', 'Boat, box & car trailers', 'Golf carts', 'Ride-on mowers', 'Snow & e-bikes'],
    repayAmounts: [12000, 25000, 45000],
    structures: [
      { h: 'Secured against the toy', p: 'The asset secures the loan, keeping rates under personal-loan pricing for most buyers.' },
      { h: 'Terms from 1–7 years', p: 'Size the term to the purchase — short for a trailer, longer for a loaded side-by-side or camper.' },
      { h: 'Packages welcome', p: 'Ski plus trailer, quad plus gear — accessories bought with the asset can usually be financed together.' },
      { h: 'Deposit optional', p: 'Finance the full price if approved, or trade in the old toy to shrink the loan.' },
    ],
    eligibility: ['18 or over', 'Australian citizen, PR or eligible visa', 'Regular income — seasonal, casual and self-employed considered', 'No garage full of assets required — the toy itself is the security'],
    docs: ['Driver licence', 'Two recent payslips or bank statements', 'Details of the asset — dealer quote or private seller details', 'Trailer/accessory quotes if bundling'],
    whyBroker: 'Recreational assets are a niche — plenty of banks simply don’t want them, while specialist lenders price them keenly. One quick quote sorts the panel into who wants your jet ski or side-by-side and at what rate, before the weekend gets any further away.',
    related: [
      ['boat-finance', 'Stepping up to a boat? Marine finance from tinnies to cruisers'],
      ['motorbike-finance', 'Road-registered bikes run through motorbike finance'],
      ['caravan-finance', 'Full caravans and motorhomes have their own lane'],
    ],
    extraFaqs: [
      { q: 'Does the asset need to be registered?', a: 'No — plenty of leisure assets (dirt quads, golf carts, e-bikes) aren’t road-registered and are financed anyway. The lender secures against the asset’s serial/VIN rather than a rego plate.' },
      { q: 'Is there a minimum loan amount?', a: 'Most panel lenders start around $5,000; a few go lower. Below that, a small personal loan usually beats asset finance on fees — we’ll tell you straight which way the maths falls.' },
      { q: 'What affects my leisure loan rate?', a: 'Credit profile, income, the asset type and age, term and deposit. Specialist recreational lenders often beat generalist pricing on toys — the panel finds out in one pass.' },
    ],
  },
};

// Homepage enrichment
export const HOME = {
  whyBroker: [
    { h: 'The panel competes. You don’t chase.', p: 'One application puts 45+ banks, fintechs and specialist lenders head-to-head on your scenario. Lenders compete on your rate — you just pick from your best options.' },
    { h: 'No credit score impact to look', p: 'The quick quote never touches your credit file. A credit check only happens once, when you proceed with the lender you chose.' },
    { h: 'Same-day answers', p: 'Pre-approval typically lands the same business day. You negotiate like a cash buyer instead of waiting on a bank queue.' },
    { h: 'Paperwork handled to settlement', p: 'PPSR checks, payouts, private-sale verification, lender forms — we run the whole file so you can go get the thing.' },
  ],
  trust: [
    ['45+', 'lenders on the panel — banks, fintechs and specialists'],
    ['ACR #546989', 'Authorised Credit Representative of AFAS Group Pty Ltd (ACL #414426)'],
    ['AFCA member', 'Australian Financial Complaints Authority member #96337'],
    ['Brisbane based', 'Australia-wide service, Mon–Fri 9:00–5:30, Sat by appointment'],
  ],
  aboutTitle: 'Brisbane brokers. Australia-wide reach.',
  about: [
    'Ready Asset Finance is a Brisbane-based finance brokerage helping Australians finance cars, caravans, boats, bikes, business growth and commercial equipment. We’re not a lender and we’re not a comparison website — we’re licensed brokers who run your scenario across a panel of 45+ lenders and manage the deal from quick quote to settlement.',
    'Because we’re brokers, the lenders compete for your business rather than the other way around. Banks bring sharp pricing for strong profiles; fintechs bring speed; specialist lenders say yes to the assets and situations the banks won’t. Whatever you’re ready for, the panel finds its level — with same-day pre-approval and no impact on your credit score until you choose to proceed.',
  ],
  faqs: [
    { q: 'Is Ready Asset Finance a lender?', a: 'No — we’re a licensed finance brokerage (Authorised Credit Representative #546989 of AFAS Group Pty Ltd, Australian Credit Licence #414426). We take one application to a panel of 45+ lenders, they compete, and you choose from your best options.' },
    { q: 'Does getting a quote affect my credit score?', a: 'No. The quick quote is assessed against the lender panel without a credit enquiry. Your file is only touched when you pick a lender and formally apply — and we flag that moment clearly.' },
    { q: 'How fast is same-day pre-approval?', a: 'Submit a quick quote during business hours and pre-approval typically lands the same day, often within hours. Settlement usually follows 24–48 hours after your documents are in.' },
    { q: 'What can I finance through Ready Asset Finance?', a: 'Cars, caravans, boats, motorbikes, jet skis and leisure assets, personal loans, business loans and commercial equipment — new or used, from a dealer, auction or private seller.' },
    { q: 'Do you only work with Brisbane clients?', a: 'No — we’re Brisbane-based with clients Australia-wide. Quotes, approvals and settlements all happen online and by phone, wherever you are.' },
    { q: 'What happens after I submit a quick quote?', a: 'We run your scenario across the panel and come back the same day with your best options and a pre-approval. If you like one, we handle the paperwork through to settlement; if not, no obligation and your credit file is untouched.' },
  ],
};
