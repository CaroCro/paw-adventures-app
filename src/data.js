import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.png";
import tour3 from "./images/tour-3.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "#booking", text: "booking" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
  { id: 2, href: "https://x.com/", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com/", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-map-marked-alt",
    title: "Tailored Wildlife Tours",
    text: "Explore unique wildlife destinations with personalized tours crafted to provide a one-of-a-kind experience.",
  },
  {
    id: 2,
    icon: "fas fa-leaf",
    title: "Eco-Friendly Travel",
    text: "Enjoy sustainable adventures with minimal impact on the environment, ensuring preservation for future generations.",
  },
  {
    id: 3,
    icon: "fas fa-binoculars",
    title: "Guided Exploration",
    text: "Learn from expert guides who share fascinating insights into the animals and ecosystems you’ll encounter.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "March 20th, 2024",
    title: "Safari Serengeti",
    info: "Discover the majesty of the Serengeti with an expert guide while observing lions, elephants, and more in their natural habitat.",
    location: "Tanzania",
    duration: "7",
    cost: "2500",
    groupSize: "Up to 12 travelers",
    difficulty: "Moderate",
    highlights: [
      "Game drives through the Serengeti",
      "Sunrise wildlife photography",
      "Experienced local safari guides",
    ],
    description:
      "This immersive safari experience is designed for travelers who want to witness Africa’s most iconic wildlife up close. Enjoy guided game drives, comfortable accommodation, and unforgettable landscapes across one of the world’s most famous national parks.",
  },
  {
    id: 2,
    image: tour2,
    date: "June 15th, 2025",
    title: "Galapagos Wildlife",
    info: "Explore the Galapagos Islands and marvel at their unique wildlife, from giant tortoises to marine iguanas.",
    location: "Ecuador",
    duration: "10",
    cost: "3000",
    groupSize: "Up to 10 travelers",
    difficulty: "Easy to Moderate",
    highlights: [
      "Island-hopping adventure",
      "Snorkeling with marine wildlife",
      "Expert naturalist-led tours",
    ],
    description:
      "Experience the extraordinary biodiversity of the Galapagos Islands on a guided journey through volcanic landscapes, pristine beaches, and protected reserves. This tour combines exploration, wildlife encounters, and educational experiences in one unforgettable itinerary.",
  },
  {
    id: 3,
    image: tour3,
    date: "September 5th, 2025",
    title: "Whale Watching Adventure",
    info: "Enjoy the magic of whale watching as you sail through crystal-clear waters with marine experts.",
    location: "Australia",
    duration: "5",
    cost: "1800",
    groupSize: "Up to 15 travelers",
    difficulty: "Easy",
    highlights: [
      "Guided whale watching cruises",
      "Coastal sightseeing",
      "Marine wildlife education sessions",
    ],
    description:
      "Set sail on a coastal wildlife adventure focused on one of nature’s most spectacular experiences: whale watching. This tour is ideal for ocean lovers looking to combine relaxation, scenic views, and meaningful encounters with marine life.",
  },
];
