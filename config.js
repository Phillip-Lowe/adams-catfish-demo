// Adams Catfish Express & Catering - Brand Configuration
// 215 North Cross Street, Little Rock, AR 72201
// Established August 1997 — 29 years in business

const CONFIG = {
  brand: {
    name: "Adams Catfish Express & Catering",
    shortName: "Adams Catfish",
    tagline: "Good Eatin'!",
    established: "August 1997",
    logo: "assets/logo.png",
    favicon: "assets/favicon.png",
  },

  contact: {
    phone: "(501) 336-4399",
    phoneRaw: "5013364399",
    email: "frazdon6549@gmail.com",
    address: "215 North Cross Street",
    city: "Little Rock, AR 72201",
    googleMapsUrl: "https://maps.google.com/?q=215+North+Cross+Street+Little+Rock+AR+72201",
  },

  social: {
    facebook: "https://www.facebook.com/people/Adams-Catfish-Catering/100047989973260/",
    instagram: "https://www.instagram.com/adamscatfishcateringar/",
  },

  hours: {
    monday:    { open: "10:00 AM", close: "8:00 PM" },
    tuesday:   { open: "10:00 AM", close: "8:00 PM" },
    wednesday: { open: "10:00 AM", close: "8:00 PM" },
    thursday:  { open: "10:00 AM", close: "8:00 PM" },
    friday:    { open: "10:00 AM", close: "9:00 PM" },
    saturday:  { open: "10:00 AM", close: "9:00 PM" },
    sunday:    { open: "11:00 AM", close: "7:00 PM" },
    closedDays: ["Thanksgiving Day", "Christmas Day"],
    note: "Open 7 days a week, 52 weeks a year",
  },

  colors: {
    primary: "#B71C1C",        // Deep red (from their branding)
    primaryDark: "#7F0000",     // Darker red
    primaryLight: "#FFCDD2",    // Light red/pink accent
    secondary: "#FFFFFF",       // White
    accent: "#FFC107",          // Gold/amber for highlights
    dark: "#1A1A1A",            // Near black for text
    gray: "#F5F5F5",            // Light gray background
    success: "#2E7D32",         // Green for order success
    warning: "#F57C00",         // Orange for catering CTA
  },

  ordering: {
    enabled: true,
    mode: "phone-pickup",       // Phone-only pickup for now
    pickupTimeOptions: ["15 min", "30 min", "45 min", "1 hour"],
    minLeadTimeMinutes: 15,
    paymentMethods: ["Cash", "Card at pickup"],
  },

  catering: {
    enabled: true,
    headline: "Full-Service Catering",
    description: "From backyard cookouts to corporate events — we cater gatherings from 50 to 5,000 people. On-site frying, all the fixins, and professional service.",
    minPeople: 50,
    maxPeople: 5000,
    leadTimeDays: 7,
    phone: "(501) 336-4399",
    email: "frazdon6549@gmail.com",
    ctaText: "Get a Catering Quote",
  },

  checkout: {
    endpoint: "https://demo.systack.net/adams-catfish-order",
    currency: "$",
    currencySymbol: "$",
  },

  app: {
    taxRate: 0.10,              // 10% approximate
    freeDeliveryThreshold: null,
    maxItemsPerOrder: 50,
  },
};
