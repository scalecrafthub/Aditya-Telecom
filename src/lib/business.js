const ADDRESS = "HANUMAN GADHI, Gorakhnath Rd, Padri, Maharajganj, Uttar Pradesh 273303";
const MAP_QUERY = "Aditya Telecom, Gorakhpur Rd, Padri, Maharajganj, Uttar Pradesh 273303";

export const BUSINESS = {
  name: "Aditya Telecom",
  shortName: "Aditya Telecom",
  city: "Maharajganj",
  tagline: "Maharajganj's 5G phone, electronics & wholesale counter",
  address: ADDRESS,
  addressLines: ["Hanuman Gadhi, Gorakhpur Road", "Padri, Maharajganj, UP 273303"],
  phone: "09935847239",
  phoneHref: "tel:09935847239",
  whatsappNumber: "919935847239",
  // Add the shop's official email address here to show it on the page.
  email: "",
  hours: "8:00 AM – 10:00 PM",
  hoursDays: "Monday – Sunday",
  rating: 4.8,
  reviews: 343,
  partner: "JioMart Digital Partner",
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`,
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
  storeImage: null,
};

export const WHATSAPP_URL = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    message || "Hi Aditya Telecom, I'd like to know today's price and stock."
  )}`;

// Store hours evaluated in IST (UTC+5:30)
export function isStoreOpen(now = new Date()) {
  const istMinutes = (now.getUTCHours() * 60 + now.getUTCMinutes() + 330) % 1440;
  return istMinutes >= 8 * 60 && istMinutes < 22 * 60;
}

export const HOURS = [
  { day: "Monday", time: "8:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 10:00 PM" },
  { day: "Thursday", time: "8:00 AM – 10:00 PM" },
  { day: "Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:00 PM" },
  { day: "Sunday", time: "8:00 AM – 10:00 PM" },
];