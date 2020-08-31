'use strict';

module.exports = {
  url: 'https://container-garden.netlify.com',
  pathPrefix: '/',
  title: 'Container.Garden',
  subtitle: 'My adventures in container gardening',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-106770869-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About',
      path: '/pages/about'
    },
    {
      label: 'Contact',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Aaron Green',
    photo: '/profile_photo.jpg',
    bio: 'A beginner gardener with a motivation to eat more fresh vegetables.'
  }, 
  contacts: {
    social: {
      twitter: {
        link:'@ContainerGreens',
        icon: 'faTwitterSquare'
      },
      instagram: {
        link: '@containergreens', 
        icon: 'faInstagramSquare'
      }
    },
    rss: {
      link: '',
      icon: ''
    },
    contactForm: {
      link: '',
      icon: 'faEnvelopeSquare'
    },
  }
};
