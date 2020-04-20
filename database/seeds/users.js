
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'bteague92',
          password: 'bteague92',
          dept: 'development',
        },
        {
          username: 'bteague93',
          password: 'bteague93',
          dept: 'development',
        },
        {
          username: 'bteague94',
          password: 'bteague94',
          dept: 'marketing',
        },
        {
          username: 'bteague95',
          password: 'bteague95',
          dept: 'marketing',
        },
        {
          username: 'bteague96',
          password: 'bteague96',
          dept: 'management',
        },
        {
          username: 'bteague97',
          password: 'bteague97',
          dept: 'management',
        },
        {
          username: 'bteague98',
          password: 'bteague98',
          dept: 'cleaning',
        },
        {
          username: 'bteague99',
          password: 'bteague99',
          dept: 'cleaning',
        },
      ]);
    });
};
