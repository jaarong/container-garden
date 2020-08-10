'use strict';

module.exports = {
  url: 'https://container-garden.netlify.com',
  pathPrefix: '/',
  title: 'Container.Garden',
  subtitle: 'My adventures in container gardening',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
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
    photo: '/photo.jpg',
    bio: 'A beginner gardener with a motivation to eat more fresh vegetables.'
  }, 
  contacts: {
    twitter: {
      link:'@ContainerGreens',
      icon: 'faTwitterSquare'
    },
    rss: {
      link: '',
      icon: ''
    },
    contactForm: {
      link: '',
      icon: 'faEnvelopeSquare'
    },
    instagram: {
      link: '@containergreens', 
      icon: 'faInstagramSquare'
    }
  }
};
