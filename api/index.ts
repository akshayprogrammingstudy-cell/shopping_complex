import express from "express";
import cors from "cors";
import router from "./server/routes/index";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use("/", router);

export default function handler(req: any, res: any) {
  return app(req, res);
}
