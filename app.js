// Import express
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Required to properly use __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the "views" directory for EJS files
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // renders index.ejs
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio"); // renders portfolio.ejs
});

app.get("/resume", (req, res) => {
  res.render("resume"); // renders resume.ejs
});

app.get("/contact", (req, res) => {
  res.render("contact"); // renders contact.ejs
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
