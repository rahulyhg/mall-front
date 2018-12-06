const apiUrls = {
  apiURL: 'https://smartfinders.herokuapp.com/api/v1',
  websiteAuthURL: 'https://smartfinders.herokuapp.com/api/v1/website/auth',
  registerAPI: 'https://smartfinders.herokuapp.com/api/v1/website/register',
  loginAPI: 'https://smartfinders.herokuapp.com/api/v1/website/login',
  getUserAPI: 'https://smartfinders.herokuapp.com/api/v1/website/user',
  getSliderItems: 'https://smartfinders.herokuapp.com/api/v1/website/slider-items',
  getAds: 'https://smartfinders.herokuapp.com/api/v1/website/ads-block-items',
  socials: 'https://smartfinders.herokuapp.com/api/v1/website/social-links',
  marketing: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd69',
  leasing: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd70',
  gift: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd72',
  about: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd71',
  taxi: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd73',
  guestService: 'https://smartfinders.herokuapp.com/api/v1/website/about-page/5bdb52156155da077b01cd74',
  magazine: 'https://smartfinders.herokuapp.com/api/v1/website/magazines',
  team: 'https://smartfinders.herokuapp.com/api/v1/website/team-members',
  giftStores: 'https://smartfinders.herokuapp.com/api/v1/website/stores-with-gift-card',
  subscribe: 'https://smartfinders.herokuapp.com/api/v1/website/subscribe-to-store',
  getSubscribed: 'https://smartfinders.herokuapp.com/api/v1/website/subscribed-stores-list',
  bookmark: 'https://smartfinders.herokuapp.com/api/v1/website/bookmark-item',
  getBookmarked: 'https://smartfinders.herokuapp.com/api/v1/website/bookmarked-items-list',
  storesAPI: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/stores/${page}/${offset}`,
  eventsAPI: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/events/${page}/${offset}`,
  promotionsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/promotions/${page}/${offset}`,
  newCollectionsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/new-collections/${page}/${offset}`,
  newsApi: (page, offset) => `https://smartfinders.herokuapp.com/api/v1/website/news/${page}/${offset}`,
  singleItemUrl: (id) => `https://smartfinders.herokuapp.com/api/v1/website/item/${id}`
}

const apiCredentials = {
  username: 'website',
  password: '7G4QaUa25!oF'
}

export { apiUrls, apiCredentials }
