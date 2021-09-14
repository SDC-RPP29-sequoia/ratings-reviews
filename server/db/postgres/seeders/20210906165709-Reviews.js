'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'review',
    [
      {
        review_id: 1,
        product_id: 1,
        profile_id: 4,
        rating: 5,
        summary: 'This product was great!',
        recommend: true,
        response: null,
        body: 'I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.',
        createdAt: new Date(1596080481467),
        updatedAt: new Date(),
        helpfulness: 8,
        reported: false,
      },
      {
        review_id: 2,
        product_id: 1,
        profile_id: 5,
        rating: 4,
        summary: 'This product was ok!',
        recommend: false,
        response: null,
        body: 'I really did not like this product solely because I am tiny and do not fit into it.',
        createdAt: new Date(1610178433963),
        updatedAt: new Date(),
        helpfulness: 2,
        reported: false,
      },
      {
        review_id: 3,
        product_id: 2,
        profile_id: 6,
        rating: 4,
        summary: 'I am liking these glasses',
        recommend: true,
        response: 'Glad you\'re enjoying the product!',
        body: 'They are very dark.  But that\'s good because I\'m in very sunny spots',
        createdAt: new Date(1609325851021),
        updatedAt: new Date(),
        helpfulness: 5,
        reported: false,
      },
      {
        review_id: 4,
        product_id: 2,
        profile_id: 7,
        rating: 4,
        summary: 'They look good on me',
        recommend: true,
        response: null,
        body: 'I so stylish and just my aesthetic.',
        createdAt: new Date(1593628485253),
        updatedAt: new Date(),
        helpfulness: 1,
        reported: false,
      },
      {
        review_id: 5,
        product_id: 2,
        profile_id: 8,
        rating: 3,
        summary: 'I\'m enjoying wearing these shades',
        recommend: true,
        response: null,
        body: 'Comfortable and practical.',
        createdAt: new Date(1615987717620),
        updatedAt: new Date(),
        helpfulness: 5,
        reported: false,
      },
      {
        review_id: 6,
        product_id: 2,
        profile_id: 9,
        rating: 5,
        summary: 'I\'m not a fan!',
        recommend: false,
        response: 'Sorry to hear. Is there anything in particular you don\'t like?',
        body: 'I don\'t like them',
        createdAt: new Date(1593564521722),
        updatedAt: new Date(),
        helpfulness: 0,
        reported: false,
      },
      {
        review_id: 7,
        product_id: 2,
        profile_id: 10,
        rating: 2,
        summary: 'This product was ok!',
        recommend: false,
        response: null,
        body: 'They\'re fine but I wouldn\'t buy again.',
        createdAt: new Date(1609522845466),
        updatedAt: new Date(),
        helpfulness: 0,
        reported: false,
      },
      {
        review_id: 8,
        product_id: 4,
        profile_id: 11,
        rating: 4,
        summary: 'These pants are fine',
        recommend: true,
        response: null,
        body: 'I do like these pants',
        createdAt: new Date(1599505939632),
        updatedAt: new Date(),
        helpfulness: 2,
        reported: false,
      },
      {
        review_id: 9,
        product_id: 4,
        profile_id: 12,
        rating: 5,
        summary: 'These pants are great!',
        recommend: true,
        response: null,
        body: 'I really like these pants. Best fit ever!',
        createdAt: new Date(1609325851021),
        updatedAt: new Date(),
        helpfulness: 2,
        reported: false,
      },
      {
        review_id: 10,
        product_id: 4,
        profile_id: 13,
        rating: 2,
        summary: 'These pants are ok!',
        recommend: false,
        response: null,
        body: 'A little tight on the waist.',
        createdAt: new Date(1592977554987),
        updatedAt: new Date(),
        helpfulness: 2,
        reported: false,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('review', null, {}),
};
