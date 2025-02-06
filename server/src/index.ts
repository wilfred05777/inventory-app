import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboardRoutes";

/**
 * CONFIGURATION
 */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const CORS_OPTIONS = {
   origin:
      process.env.NODE_ENV === "production"
         ? "https://your-production-domain.com"
         : "http://localhost:3000", // Next.js default port
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true,
};
app.use(cors(CORS_OPTIONS));

/** ROUTES */
app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard

app.get("/hello", (req, res) => {
   res.send("hello world!");
});

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
