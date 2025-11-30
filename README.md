# Editkaro.in – Video Editing Agency Website

This project is a fully responsive website built for **Editkaro.in**, a professional video editing agency.
It includes a dynamic portfolio, YouTube video lightbox, contact form, and full integration with **Google Sheets** using Google Apps Script.

---

## Features

### ✔ Responsive Website

Designed using **HTML**, **CSS**, and **JavaScript** with a dark theme and clean modern layout.

### ✔ Dynamic Portfolio Filtering

Users can filter projects by categories such as:

* Short Form
* Gaming
* Football
* Anime

### ✔ YouTube Lightbox Player

Clicking a portfolio item opens a fullscreen popup that automatically plays the selected YouTube video.

### ✔ Google Sheets Form Integration

Both forms are fully connected and working:

* **Email Subscription Form**
* **Contact Form**

Submitted data goes directly to Google Sheets via your deployed Apps Script URL.

### ✔ Mobile-Friendly

The layout automatically adjusts for all devices (mobile, tablet, desktop).

---

## Project Structure

```
/project-root
│── index.html
│── style.css
│── script.js
│── README.md
```

* **index.html** – Main structure, portfolio, sections, and forms
* **style.css** – All styling, animations, responsive layout
* **script.js** – Portfolio filters, lightbox functionality, Google Sheets form submission

---

## Google Sheets Integration

This project uses a deployed Google Apps Script endpoint:

```
https://script.google.com/macros/s/AKfycbxHeGgunkQSn3fuquTfB5qmBSpMwKk6WjiiJBa3RxqvDcq9DCT_pkcfB9hJ2kvO-SSL/exec
```

The script receives POST requests from:

* `submit-to-google-sheet-email`
* `submit-to-google-sheet-contact`

All submissions are correctly stored in a connected Google Sheet.
No backend server is required.

---

## How to Use / Run

1. Download or clone this repository.
2. Open the file:

```
index.html
```

3. The website runs directly in the browser — no installation needed.

To update portfolio items, edit the section inside:

```
<div class="portfolio-grid">
```

To update your Apps Script URL, edit:

```
const scriptURL = 'YOUR_NEW_SCRIPT_URL';
```

inside `script.js`.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Google Sheets + Apps Script


---

## Status

This website is:

* Fully designed
* Fully working
* Fully connected to Google Sheets


---
