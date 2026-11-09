// Central place for business details. Update these before going live.
export const SITE = {
  name: 'Nimba Hospitality Group',
  short: 'Nimba',
  tagline: "L'art de vous recevoir",
  description:
    "Nimba Hospitality Group — développement hôtelier, gestion & hospitalité, restauration & art de vivre. Un groupe guinéen, ancré à Conakry, au service de la destination Guinée.",
  // TODO: replace with an address on your own domain (e.g. contact@votredomaine.com)
  email: 'info@nhg.com',
  phone: '', // e.g. '+224 6XX XX XX XX' — leave empty to hide
  whatsapp: '', // digits only with country code, e.g. '2246XXXXXXXX' — leave empty to hide
  address: ['Dixinn, quartier Camayenne', 'Conakry, République de Guinée'],
  // Optional: a Formspree (https://formspree.io) endpoint such as 'https://formspree.io/f/abcdwxyz'.
  // When empty, the contact form opens the visitor's e-mail client instead.
  formEndpoint: '',
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
  },
};

export const NAV = [
  { href: '/groupe', label: 'Le groupe' },
  { href: '/expertises', label: 'Expertises' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/contact', label: 'Contact' },
];
