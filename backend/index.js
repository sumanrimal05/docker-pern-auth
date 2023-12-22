import dotenv from "dotenv";
import http from "http";
import app from "./app.js";

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
