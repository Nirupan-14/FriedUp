export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export const CONTACT = {
  name: "Fried Up",
  tagline: "Crispy. Bold. Fresh.",
  phone: "+44 20 3859 1742",
  phoneHref: "tel:+442038591742",
  address: {
    line1: "4, West Ruislip Station, Ickenham Rd",
    line2: "Ickenham, Ruislip, HA4 7DW",
  },
  email: "hello@friedup.co.uk",
};

export const JUST_EAT_URL = "https://www.just-eat.co.uk/";
export const UBER_EATS_URL = "https://www.ubereats.com/";

export const HOURS = [
  { days: "Monday", open: "11:30 am", close: "11:00 pm" },
  { days: "Tuesday", open: "11:30 am", close: "11:00 pm" },
  { days: "Wednesday", open: "11:30 am", close: "11:00 pm" },
  { days: "Thursday", open: "11:30 am", close: "11:00 pm" },
  { days: "Friday", open: "11:30 am", close: "11:00 pm" },
  { days: "Saturday", open: "11:30 am", close: "11:00 pm" },
  { days: "Sunday", open: "12:00 pm", close: "10:00 pm" },
];

export type MenuItem = {
  name: string;
  price: string;
  priceLarge?: string;
  description?: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: "Fried Up Savers",
    items: [
      { name: "Two Wings", price: "£1.29" },
      { name: "Three Wings", price: "£1.99" },
      { name: "One Piece Chicken", price: "£1.79" },
      { name: "One Crispy Tender", price: "£1.69" },
      { name: "Loaded Fries", price: "£4.99" },
    ],
  },
  {
    title: "Mini Meals",
    note: "Served with fries",
    items: [
      { name: "Two Wings Meal", price: "£2.49" },
      { name: "One Piece Chicken Meal", price: "£2.49" },
      { name: "One Crispy Tender Meal", price: "£2.49" },
    ],
  },
  {
    title: "Wraps",
    note: "Meal upgrade +£2 — includes fries & any drink",
    items: [
      { name: "Mayo Chicken Wrap", price: "£4.99" },
      { name: "Spicy Mayo Chicken Wrap", price: "£4.99" },
      { name: "Korean BBQ Chicken Wrap", price: "£4.99" },
    ],
  },
  {
    title: "Sides",
    note: "Regular | Large",
    items: [
      { name: "Fries", price: "£1.49", priceLarge: "£1.99" },
      { name: "Onion Rings", price: "£3.99", priceLarge: "£4.99" },
      { name: "Mozzarella Sticks", price: "£3.99", priceLarge: "£4.99" },
      { name: "Chilli Cheese Bites", price: "£3.99", priceLarge: "£4.99" },
      { name: "Chicken Nuggets", price: "£4.49", priceLarge: "£6.49" },
    ],
  },
];

export const signatureItems = [
  {
    name: "Hot Honey Wings",
    description: "Crispy wings tossed in a sweet-heat honey glaze — a customer favourite.",
  },
  {
    name: "Hot One Burger",
    description: "Bold heat meets juicy fried chicken in every bite.",
  },
  {
    name: "Tower Burger",
    description: "Double-stacked, towering and seriously messy.",
  },
  {
    name: "Stack'd Burger",
    description: "Two fillets stacked high for the hungry ones.",
  },
];

export type Offer = {
  title: string;
  description: string;
  badge: string;
  price?: string;
};

export const offers: Offer[] = [
  {
    title: "Fresh Burger & Chips",
    description: "A fresh, hot burger with crispy chips.",
    badge: "Limited Time",
    price: "£6.50",
  },
  {
    title: "2 Piece Chicken & Chips",
    description: "Two pieces of crispy fried chicken with chips.",
    badge: "In Store",
    price: "£4",
  },
  {
    title: "20 Hot Wings",
    description: "Twenty wings of pure crispy, saucy goodness.",
    badge: "In Store Only",
    price: "£8",
  },
];

export type Review = {
  name: string;
  source: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Arathi",
    source: "Google review",
    rating: 5,
    quote:
      "The hot honey wings are the best I've ever had — perfectly crispy with that sweet-heat glaze. I've been back a few times and it's a 10/10 every visit.",
  },
  {
    name: "Charlotte",
    source: "Google review",
    rating: 5,
    quote:
      "First time trying them and I was really pleasantly surprised. Food came quickly, hot and fresh, and the service was great — you can tell they genuinely care.",
  },
  {
    name: "The KID",
    source: "Google review",
    rating: 5,
    quote:
      "Just opened and the food was banging. Spotless hygiene, really fresh — didn't upset my sensitive stomach. Great food and lovely customer service.",
  },
  {
    name: "Thyshath",
    source: "Google review",
    rating: 5,
    quote:
      "Really good and flavourful, especially the hot honey dipped wings and the Hot One burger. Fresh, came out quickly, and the workers were friendly and helpful. 10/10.",
  },
  {
    name: "Matthew",
    source: "Google review",
    rating: 4,
    quote:
      "The Tower burger was 10/10 — fresh, piping hot chicken. Both guys serving were attentive and polite. Small spot, but perfect for takeaway.",
  },
  {
    name: "Joey",
    source: "Google review",
    rating: 4,
    quote:
      "The three-piece chicken and chips meal — the coating stayed crunchy and the chips were crispy. Quick, easy takeaway that hits the spot.",
  },
];

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Fried%20Up%2C%20West%20Ruislip%20Station%2C%20Ickenham%20Rd%2C%20Ruislip%20HA4%207DW&output=embed";