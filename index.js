import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:123456@mongo-db/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded());
app.use(express.json());
routes(app);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
