//const bodyParser = require("body-parser");
const { app } = require("../src/routers/routers");
//const dbConnection = require("./src/config/db.config");
//app.use(bodyParser.json());

app.listen(3000, async () => {
    console.log("listening on port 3000");
    //await dbConnection();
});