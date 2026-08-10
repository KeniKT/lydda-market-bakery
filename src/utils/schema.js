export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Bakery', 'GroceryStore', 'LocalBusiness'],
      '@id': 'https://lyddamarketbakery.com/#business',
      name: 'Lydda Market & Bakery',
      alternateName: 'ልዳ ገበያ እና ዳቦ ቤት',
      description: 'Authentic Ethiopian bakery, specialty grocery store, and cultural catering in Falls Church, Virginia.',
      telephone: ['+1-703-820-4800', '+1-571-477-7789'],
      email: 'lyddamarketbakery@gmail.com',
      priceRange: '$$',
      address: { '@type': 'PostalAddress', streetAddress: '3823F S George Mason Dr.', addressLocality: 'Falls Church', addressRegion: 'VA', postalCode: '22041', addressCountry: 'US' },
      geo: { '@type': 'GeoCoordinates', latitude: 38.8404, longitude: -77.1867 },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '21:00' }],
      servesCuisine: ['Ethiopian', 'East African'],
      sameAs: ['https://www.facebook.com/LyddaMarketBakery', 'https://www.instagram.com/LyddaMarketBakery']
    }
  ]
}
