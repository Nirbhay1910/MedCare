const path = require("path"); // To manipulate paths
const helmet = require("helmet"); // for setting security HTTP Headers
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp"); //http parameter pollution
const cookieParser = require("cookie-parser");

const express = require("express");

const userRouter = require("./routes/userRoutes");
const medRouter = require("./routes/medRoutes");
const docRouter = require("./routes/docRoutes");
const viewsRouter = require("./routes/viewsRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // It means that all the static things will be in public folder.

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // it means 100 requests per hour
  message: "Too many requests from this IP. Pls try again in an hour",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" })); // Helps in reading data coming from the URL
app.use(cookieParser());

app.use(mongoSanitize());

app.use(xss());

// Some handy Middleware
app.use((req, res, next) => {
  //console.log("Hello from middleware");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log(req.cookies);
  next();
});

// Routes
app.use("/", viewsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/medicines", medRouter);
app.use("/api/v1/doctors", docRouter);
app.use("/api/v1/appointments", appointmentRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
