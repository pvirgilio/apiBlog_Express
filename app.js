const express = require("express");
const router = require("./routes/newsRoutes");
const { setupMiddlewares } = require("./middlewares");
const port = process.env.PORT;
const app = express();
const path = require("path");

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
setupMiddlewares(app);
app.use(router);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
