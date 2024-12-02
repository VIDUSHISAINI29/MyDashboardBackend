const router = require("express").Router();
const FreightController = require("../controllers/FreightController");

router.get('/', FreightController.getFreight);

module.exports = router ;