# 🌍 Globe Track

**Globe Track** is a frontend-only travel journal web app that allows users to:

* 🔍 Search for any city or country
* ☁️ View real-time weather (OpenWeatherMap API)
* 🌎 Learn country facts (REST Countries API)
* 🌄 See a related background image (Unsplash API)
* ✍️ Write personal notes (stored with localStorage)
* 🌜 Switch between light and dark themes

This project showcases clean, modular frontend code with a sleek UI — built to impress!

---

## 🚀 Features

* City or country search
* Real-time weather information
* Dynamic country data (capital, population, currency, etc.)
* Photo background via Unsplash
* Add/Delete travel notes (journal entries)
* Theme toggle (Dark/Light)
* Fully frontend: HTML, CSS, JS only
* Uses `localStorage` for persistence

---

## 🪨 Tech Stack

* HTML5
* CSS3 (Modular: base.css, layout.css, components.css, themes.css)
* JavaScript (ES6+)
* REST APIs:

  * OpenWeatherMap
  * REST Countries
  * Unsplash
* Browser Storage: `localStorage`

---

## 📂 Folder Structure

```
Globe Track/
├── assets/
│   └── images/
│       └── icons/
│           └── favicon.ico
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   └── themes.css
├── js/
│   ├── api/
│   ├── storage/
│   ├── ui/
│   └── utils/
│   └── main.js
├── index.html
```

---

## 🔑 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/SSaratchandraRaju/globetrack.git
cd wanderlust-journal
```

### 2. Get Your API Keys

* [OpenWeatherMap](https://openweathermap.org/api)
* [Unsplash](https://unsplash.com/developers)

> ✅ REST Countries API needs no key!

### 3. Configure API Keys

Edit `js/api/weather.js` and `js/api/unsplash.js` to add your API keys:

```js
const API_KEY = 'YOUR_OPENWEATHERMAP_KEY';
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
```

### 4. Run Locally

Use any local server:

```bash
npx serve .
# or
python -m http.server
```

---

## 🔹 Usage Guide

1. Type a city or country (e.g., `Tokyo`, `Germany`)
2. View weather + country facts + image
3. Add a note to save your thoughts
4. Toggle theme for day/night mode
5. Your journal entries are saved in your browser!

---

## 🌐 Live Demo

**[Launch Project](https://ssaratchandraraju.github.io/globetrack/)**

---

## 🚀 Key Concepts Shown

* Modular code architecture
* API integration and fetch
* Responsive design
* Dynamic DOM manipulation
* Data persistence with `localStorage`
* Error handling and validation

---

## 🚨 Future Improvements

* Map integration
* Export journal to PDF
* Shareable notes
* Sorting/filtering entries
* Offline support

---

## 🥇 Author

**Sarachandra Raju**

* 🔗 [GitHub](https://github.com/SSaratchandraRaju)
* 📅 [Portfolio](https://saratchandra-raju-sarikonda.vercel.app/)
* 👤 [LinkedIn](https://www.linkedin.com/in/s-saratchandra-raju/)

---

## ✉️ License

This project is licensed under the MIT License.
