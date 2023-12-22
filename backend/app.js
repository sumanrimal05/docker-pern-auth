import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

const app = express();

app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());

export default app;
