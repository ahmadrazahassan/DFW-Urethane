/**
 * Single source of truth for all site copy & data.
 * Edit text/images here — components are presentational only.
 *
 * IMAGES: all `src` values are Unsplash placeholders.
 *   TODO (pre-launch): swap every image for DFW Urethane's real project photos.
 */

export type Img = { src: string; alt: string };

// Full-bleed showcase video shown after the services section (already optimized).
export const showcaseVideo =
  "https://res.cloudinary.com/dzrlnchjt/video/upload/v1781398088/14378565_3840_2160_24fps_a7xrqb.mp4";

// Small helper so image params stay consistent. Warm grading is applied in CSS.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Mockup reviewer avatars (pravatar). TODO: swap for real client photos.
const av = (n: number) => `https://i.pravatar.cc/120?img=${n}`;

/* ------------------------------------------------------------------ */
/* Business / NAP — used in footer, JSON-LD, and CTAs                   */
/* ------------------------------------------------------------------ */
export const business = {
  name: "DFW Urethane",
  legalName: "DFW Urethane",
  phone: "(972) 222-8462",
  phoneHref: "tel:+19722228462",
  // TODO (pre-launch): confirm the real public inbox.
  email: "info@dfwurethane.com",
  address: "3400 W Division St Ste 500",
  city: "Arlington",
  state: "TX",
  zip: "76012",
  founded: 1986,
  yearsLabel: "40+",
  rating: 4.8,
  reviewCount: 18,
  areaServed: ["TX", "OK"] as const,
  url: "https://www.dfwurethane.com",
  // TODO (pre-launch): replace with the company's real social profiles.
  socials: {
    facebook: "#",
    youtube: "#",
    x: "#",
    linkedin: "#",
  },
};

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */
export const nav = {
  brand: "DFW Urethane",
  links: [
    { label: "Home", href: "/" },
    { label: "Roof Coatings", href: "/#services" },
    { label: "Spray Foam", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Resources", href: "/#faq" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/#testimonials" },
  ],
  cta: { label: "Contact us", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Section 1 — Hero                                                    */
/* ------------------------------------------------------------------ */
export const hero = {
  // Full-bleed background video (already optimized — served at full quality).
  backgroundVideo:
    "https://res.cloudinary.com/dzrlnchjt/video/upload/v1781396069/4198816-uhd_3840_2160_24fps_ft1fqt.mp4",
  background: {
    src: u("1486406146926-c627a92ad1ab", 2000),
    alt: "Modern commercial building with a large flat roof at golden hour",
  },
  headlineLines: ["We Restore & Protect", "Commercial Roofs"],
  thumbnails: [
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396986/99_k1bxn9.png",
      alt: "Commercial roof replacement project",
    },
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396460/98_ijtkkq.png",
      alt: "Spray-foam roofing application",
    },
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396461/94_iweu0y.png",
      alt: "Commercial roof on a modern building",
    },
  ],
  projectsCta: { label: "Our Projects", href: "#projects" },
  stats: [
    { value: "40+", label: "Years" },
    { value: "4.8★", label: "Google" },
  ],
  intro:
    "DFW Urethane stops leaks and cuts energy costs with silicone coatings and spray foam — no costly tear-off, backed by warranties up to 20 years.",
};

/* ------------------------------------------------------------------ */
/* Section 2 — Intro + Stats                                          */
/* ------------------------------------------------------------------ */
export const introStats = {
  headline:
    "Roofs That Stop Leaks, Cut Energy Costs, and Last Decades — Without a Costly Tear-Off.",
  body: "For 40 years we've served the DFW area as a local team — not storm chasers. We restore commercial roofs with industry-leading silicone and spray-foam systems.",
  cta: { label: "Learn More", href: "#services" },
  bento: [
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396461/94_iweu0y.png",
      alt: "Commercial roof on a modern building",
    },
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396461/95_rlyjqs.png",
      alt: "Industrial warehouse rooftop with mechanical units",
    },
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396460/98_ijtkkq.png",
      alt: "Technician applying spray-foam roofing",
    },
    {
      src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396460/96_jjtgze.png",
      alt: "Finished silicone-coated commercial roof",
    },
  ] as Img[],
  stats: [
    { value: "40+", label: "Years in Business", sub: "Since 1986" },
    { value: "20yr", label: "Max GE Warranty", sub: "Silicone systems" },
    { value: "4.8★", label: "Google Rating", sub: "18 reviews" },
    { value: "TX + OK", label: "States Served", sub: "Local & regional" },
  ],
};

/* ------------------------------------------------------------------ */
/* Section 3 — Services carousel                                      */
/* ------------------------------------------------------------------ */
export const services = {
  label: "Services",
  heading:
    "Trusted roofing built for strength, precision, and lasting protection.",
  description:
    "From silicone restoration to full spray-foam systems, we offer a complete suite to protect and extend the life of your commercial roof.",
  cta: { label: "Start Project", href: "/contact" },
  slides: [
    {
      title: "Silicone Roof Coating (GE Enduris™)",
      description:
        "Restore your roof and add up to a 20-year warranty without tearing it off.",
      image: { src: u("1487958449943-2429e8be8625", 1200), alt: "Silicone-coated flat commercial roof" },
    },
    {
      title: "Spray Polyurethane Foam (SPF) Roofing",
      description:
        "Seamless, high-performance foam roofing proven for 50+ years.",
      image: {
        src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396788/generated-image_23_zp02xs.png",
        alt: "Spray polyurethane foam roofing application",
      },
    },
    {
      title: "Spray Foam Insulation",
      description:
        "Air-seal and insulate to cut energy costs and strengthen the structure.",
      image: {
        src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396670/generated-image_22_toqvzg.png",
        alt: "Technician installing spray foam insulation",
      },
    },
    {
      title: "Roof Repair & Leak Detection",
      description:
        "Locate and permanently seal leaks on flat and metal roofs.",
      image: {
        src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396864/generated-image_24_im22eh.png",
        alt: "Roof repair and leak detection on a flat roof",
      },
    },
    {
      title: "Metal Roof Restoration",
      description:
        "Protect aging metal roofs from Texas heat and hail.",
      image: {
        src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781397041/Gemini_Generated_Image_nf15egnf15egnf15_b4p1gl.png",
        alt: "Aging metal roof being restored",
      },
    },
    {
      title: "Roof Replacement",
      description:
        "Full replacement when restoration isn't enough.",
      image: {
        src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781396986/99_k1bxn9.png",
        alt: "Commercial roof replacement in progress",
      },
    },
  ],
  compatibleTypes: ["TPO/PVC", "EPDM", "Metal", "Mod-Bit", "BUR", "SPF"],
};

/* ------------------------------------------------------------------ */
/* Section 4 — Why Choose (dark)                                      */
/* ------------------------------------------------------------------ */
export const whyChoose = {
  heading: "Why DFW-Area Building Owners Trust Us",
  description:
    "We're a local business with local employees — committed to long-term roofing solutions, not quick fixes.",
  feature: {
    image: { src: u("1541888946425-d81bb19240f5", 1200), alt: "DFW Urethane crew on a commercial roof" },
    title: "Why Choose DFW Urethane?",
    body: "Four decades of commercial roofing in North Texas, backed by manufacturer warranties and crews who do it right the first time.",
  },
  reasons: [
    { title: "Local Since 1986", body: "Not storm chasers; we live and work here." },
    { title: "No Tear-Off Required", body: "Restore over your existing roof, no business shutdown." },
    { title: "Up to 20-Year Warranty", body: "GE-backed silicone systems." },
    { title: "Insurance-Friendly", body: "Repairs often covered within your payout." },
    { title: "Trained, Long-Term Technicians", body: "Experienced crews, done right." },
  ],
  cta: { label: "Learn More", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Section 5 — Projects / case studies                               */
/* ------------------------------------------------------------------ */
export const projects = {
  heading: "Landmark Roofs We've Protected",
  items: [
    {
      title: "Billy Bob's Texas",
      result: "SPF roof tune-up on the historic Fort Worth honky-tonk.",
      image: { src: u("1505373877841-8d25f7d46678", 1000), alt: "Historic entertainment venue exterior" },
    },
    {
      title: "Dallas Scottish Rite Library & Museum",
      result: "Full roof restoration on a 110-year-old landmark cathedral.",
      image: { src: u("1438032005730-c779502df39b", 1000), alt: "Historic cathedral landmark building" },
    },
    {
      title: "140,000 sq ft Steel Warehouse",
      result: "Stopped years of metal-roof leaks and insulated the building.",
      image: { src: u("1553413077-190dd305871c", 1000), alt: "Large steel warehouse building" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Section 6 — Testimonials                                           */
/* ------------------------------------------------------------------ */
export const testimonials = {
  label: "Testimonials",
  heading: "What Our Clients Say About Us",
  subline:
    "Real reviews from building owners and facility managers across Texas and Oklahoma.",
  banner: {
    src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781397126/91_etvmqt.png",
    alt: "Bright sky above a commercial building",
  },
  items: [
    {
      title: "Outstanding product and service",
      quote:
        "Their urethane product is outstanding and their application and service is equally superior. We'd highly recommend them to anyone.",
      name: "Dallas Scottish Rite",
      role: "Library & Museum",
      avatar: av(12),
    },
    {
      title: "Fixed every issue in our warehouse",
      quote:
        "We had major leaks in our 140,000 sq ft warehouse metal roof. DFW fixed every issue — and insulated the building too.",
      name: "Edmundo Favela",
      role: "Facility Owner",
      avatar: av(33),
    },
    {
      title: "Finally solved 30 years of leaks",
      quote:
        "After 30 years our mod-bit roof had leaks from hail and storm damage. DFW Urethane finally solved it.",
      name: "Jimmie & Tisha Rogers",
      role: "Building Owners",
      avatar: av(53),
    },
    {
      title: "Professional and on time",
      quote: "John was very professional and had the work done in a timely manner.",
      name: "Verified Google Review",
      role: "Google",
      avatar: av(60),
    },
    {
      title: "Highly recommend",
      quote: "Highly recommend their services!",
      name: "Verified Google Review",
      role: "Google",
      avatar: av(15),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Section 7 — FAQ                                                     */
/* ------------------------------------------------------------------ */
export const faq = {
  label: "FAQ",
  heading: "Got Questions? We Have Answers.",
  description:
    "Straight answers on restoration, warranties, insurance, and the roof types we work with.",
  portrait: {
    src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781397351/Gemini_Generated_Image_bewurpbewurpbewu_qed8fv.png",
    alt: "DFW Urethane technician on site",
  },
  items: [
    {
      q: "Can you restore my roof without a full tear-off?",
      a: "In most cases, yes. Our silicone coating and spray-foam systems install directly over your existing roof, so there's no costly tear-off and no business shutdown. We inspect first to confirm your roof is a good candidate for restoration.",
    },
    {
      q: "How long do silicone and spray-foam roofs last?",
      a: "GE Enduris™ silicone systems carry warranties up to 20 years, and spray polyurethane foam roofing has been proven in the field for 50+ years. With periodic maintenance and a recoat, a restored roof can keep protecting your building for decades.",
    },
    {
      q: "Will my repair be covered by insurance?",
      a: "Often, yes. Storm and hail damage is frequently covered within your insurance payout, and we're experienced working alongside adjusters. We'll document the damage and help you understand what your policy may cover.",
    },
    {
      q: "What roof types can you coat or restore?",
      a: "We work with TPO/PVC, EPDM, metal, modified-bitumen (mod-bit), built-up (BUR), and existing SPF roofs. If you're not sure what you have, send a photo and we'll identify it.",
    },
    {
      q: "What areas do you serve?",
      a: "We're based in Arlington and serve the entire Dallas–Fort Worth metroplex, plus commercial projects across Texas and Oklahoma. We're a local team — not storm chasers passing through.",
    },
    {
      q: "Is restoration cheaper than a full replacement?",
      a: "Almost always. Restoration reuses your existing roof structure, so you avoid tear-off, disposal, and downtime — typically a fraction of the cost of a full replacement, while extending the roof's life by decades.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Section 8 — CTA                                                    */
/* ------------------------------------------------------------------ */
export const cta = {
  background: {
    src: "https://res.cloudinary.com/dzrlnchjt/image/upload/v1781397399/Gemini_Generated_Image_r0b6uhr0b6uhr0b6_lobfsy.png",
    alt: "Dramatic architectural building exterior at dusk",
  },
  heading: "Ready to Stop Leaks for Good?",
  subline:
    "Every lasting roof starts with a free estimate. Let's protect your building.",
  button: { label: "Get a Free Estimate", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Section 9 — Footer                                                 */
/* ------------------------------------------------------------------ */
export const footer = {
  wordmark: "DFW Urethane",
  getInTouch: "Get in Touch",
  navLinks: nav.links,
  copyright: `© ${new Date().getFullYear()} DFW Urethane. All Rights Reserved.`,
};
