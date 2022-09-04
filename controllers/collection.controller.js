const db = require('../db.js');

class CollectionController {
    async createCollection(req, res) {
        const {title, description} = req.body;
        const newCollection  = await db.query(`INSERT INTO collection (title, description) values ($1, $2) RETURNING *`, [title, description]);

        res.json(newCollection.rows[0]);
    }

    async getAllCollections(req, res) {
        const collections = await db.query(`SELECT * FROM collection`);
        res.json(collections.rows);
    }

    async getOneCollection(req, res) {
        const id = req.params.id;
        const collection = await db.query(`SELECT * FROM collection where id = $1`, [id]);

        res.json(collection.rows[0]);
    }

    async updateCollection(req, res) {
        const {id, title, description} = req.body;
        const collection = await db.query(`UPDATE collection set title = $1, description = $2 where id = $3 RETURNING *`, [title, description, id]);

        res.json(collection.rows[0]);
    }

    async deleteCollection(req, res) {
        const id = req.params.id;
        const collection = await db.query(`DELETE FROM collection where id = $1`, [id]);

        res.json(collection.rows[0]);
    }
}

module.exports = new CollectionController();