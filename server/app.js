
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');
const webRoutes = require('./routes/web');

dotenv.config();


const app = express();
const port = process.env.PORT || 4000;

connectDB();

// File Upload Support
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// CORS Setup
app.use(cors({
  origin: "https://sbi-passbook-1-we6u.onrender.com/", // React frontend origin
  credentials: true
}));

// Parse JSON & URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use('/api', webRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
