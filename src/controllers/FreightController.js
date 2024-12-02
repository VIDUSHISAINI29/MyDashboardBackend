const database = require("../services/database");
// const { get } = require("../routes/FreightRoute");

exports.getFreight = async(req, res) => {
try {
       const result = await database.pool.query(
        `
            select o.* from qwt.orders o
        `
       );
       res.status(200).json(result.rows)
} catch (error) {
    res.status(500).json({error: error})
}
}

