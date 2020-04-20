// for registration
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 100)
                .notNullable()
                .unique();
            tbl.string('password', 250)
                .notNullable();
            tbl.string('dept', 100)
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
};