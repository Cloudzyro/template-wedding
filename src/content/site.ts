// Everything on the site lives here. Change names, dates, places and links,
// and the pages update. You don't need to touch any component.

export const site = {
  // Used in the page title, social previews and the footer.
  couple: {
    first: "Eleanor",
    second: "Theo",
    hashtag: "#EleanorAndTheo",
  },
  title: "Eleanor & Theo are getting married",
  description:
    "Join Eleanor Vance and Theo Marlowe for their wedding on September 18, 2027 at Larkspur Hill Farm in Hollis Valley, Vermont. Schedule, travel, registry and RSVP.",

  // The ceremony start, with the venue's UTC offset, drives the countdown.
  date: "2027-09-18T16:00:00-04:00",
  dateLabel: "Saturday, September 18, 2027",
  placeLabel: "Larkspur Hill Farm, Hollis Valley, Vermont",

  // Where RSVP answers go when no form endpoint is set (guests get an email draft).
  contactEmail: "rsvp@example.com",
  rsvpBy: "July 31, 2027",

  nav: [
    { label: "Our story", href: "#story" },
    { label: "Schedule", href: "#schedule" },
    { label: "Travel", href: "#travel" },
    { label: "Registry", href: "#registry" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ],

  story: {
    intro:
      "We met on a rainy Tuesday in a secondhand bookshop, both reaching for the last copy of the same field guide to wildflowers. Theo let Eleanor have it. She made him promise to come back the next week to borrow it.",
    chapters: [
      {
        year: "2019",
        title: "The bookshop",
        text: "One field guide, two stubborn readers, and a coffee that turned into dinner. The book is still on our shelf, with both our names in the front.",
      },
      {
        year: "2021",
        title: "The long drive",
        text: "A cross-country move in a car with no air conditioning and a very opinionated cat named Juniper. We learned we could share anything, even the last road snack.",
      },
      {
        year: "2024",
        title: "Our first garden",
        text: "Three tomato plants, a row of sunflowers, and a lot of advice from the neighbors. Most of it was good. The sunflowers were taller than the house.",
      },
      {
        year: "2026",
        title: "The question",
        text: "On a hike above Hollis Valley, Theo pulled out a pressed wildflower from that very first field guide, and a ring. Eleanor said yes before he finished asking.",
      },
    ],
  },

  schedule: [
    {
      time: "3:30 PM",
      title: "Guests arrive",
      detail: "Lemonade and iced tea on the lawn. Shuttles from both hotels start at 2:45 PM.",
      place: "The Orchard Lawn",
    },
    {
      time: "4:00 PM",
      title: "Ceremony",
      detail: "A short, sweet ceremony under the old maple. Please be seated by 3:50 PM.",
      place: "The Maple Grove",
    },
    {
      time: "4:45 PM",
      title: "Cocktail hour",
      detail: "Local cider, small bites and lawn games while we take photos.",
      place: "The Stone Terrace",
    },
    {
      time: "6:00 PM",
      title: "Dinner and toasts",
      detail: "A family-style dinner from the farm's own kitchen, with a few heartfelt words.",
      place: "The Big Barn",
    },
    {
      time: "8:00 PM",
      title: "Dancing",
      detail: "Bring your best moves. Requests from your RSVP are on the playlist.",
      place: "The Big Barn",
    },
    {
      time: "11:00 PM",
      title: "Sparkler send-off",
      detail: "Last shuttles leave at 11:15 PM for both hotels.",
      place: "The Front Drive",
    },
  ],

  venue: {
    name: "Larkspur Hill Farm",
    address: "1420 Orchard Lane, Hollis Valley, VT 05000",
    // Opens a map search for the address in the guest's preferred maps app.
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1420+Orchard+Lane+Hollis+Valley+VT",
    note: "The ceremony and reception are both outdoors and in the barn, a short walk apart on mowed paths. Heels sink into grass, so block heels or flats are a good idea.",
    parking:
      "Free parking in the upper field, with attendants to guide you. We recommend the shuttle if you plan to celebrate.",
  },

  travel: {
    airports: [
      { name: "Burlington area regional airport", distance: "About 55 minutes by car" },
      { name: "Hartwell County airport", distance: "About 1 hour 20 minutes by car" },
    ],
    hotels: [
      {
        name: "The Hollis Inn",
        detail: "Our room block, a 10 minute drive. Mention the Vance and Marlowe wedding for the group rate.",
        price: "From $189 a night",
        bookBy: "Book by August 1, 2027",
        url: "https://example.com/hollis-inn",
      },
      {
        name: "Birchwood Lodge",
        detail: "Cozy cabins by the river, 15 minutes away. Great for families and groups.",
        price: "From $149 a night",
        bookBy: "Limited cabins",
        url: "https://example.com/birchwood-lodge",
      },
      {
        name: "Valley Green Motel",
        detail: "Simple, clean and friendly, 12 minutes away. Free breakfast.",
        price: "From $109 a night",
        bookBy: "No block, book directly",
        url: "https://example.com/valley-green",
      },
    ],
    shuttle:
      "Shuttles run between The Hollis Inn, Birchwood Lodge and the farm from 2:45 PM, and back from 9:00 PM until 11:15 PM.",
  },

  registry: {
    intro:
      "Your company is the best gift. If you'd like to give something, we've put together a few ideas for our home and our honeymoon.",
    links: [
      { name: "Honeymoon fund", detail: "Two weeks along the coast of Portugal", url: "https://example.com/registry/honeymoon" },
      { name: "Maple and Twine", detail: "Kitchen and table", url: "https://example.com/registry/maple-and-twine" },
      { name: "Greenfield Garden Co.", detail: "Tools and seeds for our garden", url: "https://example.com/registry/greenfield" },
    ],
  },

  rsvp: {
    meals: [
      { value: "herb-chicken", label: "Herb roasted chicken" },
      { value: "salmon", label: "Maple glazed salmon" },
      { value: "risotto", label: "Wild mushroom risotto (vegetarian)" },
      { value: "kids", label: "Kids plate (under 12)" },
    ],
    maxGuests: 5,
  },

  gallery: [
    { caption: "The bookshop where it all began", alt: "Illustration of tall bookshelves under a warm arched window", art: "arch" },
    { caption: "Juniper, our very opinionated cat", alt: "Illustration of a sleeping cat curled up in soft green tones", art: "moon" },
    { caption: "Sunflowers taller than the house", alt: "Illustration of golden sunflowers against a pale sky", art: "sun" },
    { caption: "The hike above Hollis Valley", alt: "Illustration of layered green hills at golden hour", art: "hills" },
    { caption: "That very first field guide", alt: "Illustration of pressed wildflowers on cream paper", art: "flowers" },
    { caption: "Our favorite porch at dusk", alt: "Illustration of an evening sky fading from rose to deep blue", art: "dusk" },
  ],

  faq: [
    {
      q: "Can I bring a guest?",
      a: "Your invitation lists the names we've reserved seats for. If it says \"and guest\", we'd love to meet them. Add them to your RSVP.",
    },
    {
      q: "Are kids welcome?",
      a: "Yes. Little ones are very welcome, and there's a kids plate on the menu. A sitter will run a quiet room in the farmhouse after dinner.",
    },
    {
      q: "What should I wear?",
      a: "Garden formal. Think summer suits, dresses and comfortable shoes for grass. Evenings in the valley get cool, so bring a layer.",
    },
    {
      q: "What if it rains?",
      a: "The ceremony moves into the Big Barn, which is lovely in any weather. We'll update this page by the morning of the wedding.",
    },
    {
      q: "Is the venue accessible?",
      a: "The barn and terrace are step-free, and golf carts can bring anyone from the parking field to the grove. Let us know in your RSVP and we'll arrange it.",
    },
    {
      q: "Can I take photos during the ceremony?",
      a: "We're having an unplugged ceremony, so please keep phones away until we've walked back down the aisle. Snap away after that.",
    },
  ],
};

export type Site = typeof site;
