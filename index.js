const express = require("express")
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 4009

app.use(express.json())

app.use('/freight', require("../MyDashboardBackend/src/routes/FreightRoute"))

app.listen(PORT, () => {
    console.log(`Server in winnig the race on the port ${PORT}`);
    
})