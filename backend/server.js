const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB error:', err));

const WeatherSchema = new mongoose.Schema({
  city: String,
  temp: Number,
  humidity: Number,
  pressure: Number,
  weather: String,
}, { timestamps: true });

const Weather = mongoose.model('Weather', WeatherSchema);

app.get('/', (req, res) => {
  res.send('🌦️ Weather API Running');
});

app.post('/save', async (req, res) => {
  try {
    const entry = new Weather(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save weather data' });
  }
});

app.get('/saved', async (req, res) => {
  const entries = await Weather.find().sort({ createdAt: -1 });
  res.json(entries);
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
