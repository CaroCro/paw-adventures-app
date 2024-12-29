import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.png";
import tour3 from "./images/tour-3.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
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
  },
];
