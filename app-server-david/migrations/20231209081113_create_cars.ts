import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cars', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('price');
        table.string('picture');
        table.string('plate');
        table.string('manufacture');
        table.string('model');
        table.string('ret_per_pay');
        table.string('capacity');
        table.string('description');
        table.string('transmission');
        table.string('type');
        table.string('year');
        table.string('options');
        table.string('specs');
        table.string('available_at');
        table.integer('created_by');
        table.integer('updated_by');
        table.dateTime('start_rent', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.dateTime('finish_rent');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cars');
}

