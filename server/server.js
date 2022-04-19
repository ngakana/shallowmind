const express = require("express");

const { port, mongoUri } = require("./config/config");
const connectDB = require("./dbconn");
const modelRoutes = require("./routes/model.routes");
const scenarioRoutes = require("./routes/scenario.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/models", modelRoutes);
app.use("/scenarios", scenarioRoutes);

connectDB(mongoUri);
app.listen(port, () => {
    console.log("Server is listening on port 5000");
});