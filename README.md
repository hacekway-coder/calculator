# Awesome Age Calculator PWA

This is a Progressive Web App (PWA) version of the Awesome Age Calculator that can be installed on Android devices.

## Features
- Calculate your age based on birth date
- Responsive design
- Installable on Android devices

## Installation on Android
1. Host the files on a web server with HTTPS (required for PWA installation).
2. Open the site in Google Chrome on your Android device.
3. Tap the menu (three dots) and select "Add to Home screen".
4. Follow the prompts to install the app.

## Files
- `ageCalculator.html`: Main HTML file
- `ageCalculator.css`: Stylesheet
- `ageCalculator.js`: JavaScript logic
- `manifest.json`: PWA manifest file
- `icon-192.png` and `icon-512.png`: App icons (you need to create these)

## Creating Icons
You need to create two PNG icons:
- `icon-192.png`: 192x192 pixels
- `icon-512.png`: 512x512 pixels

You can use online tools like favicon.io or design them yourself.

## Testing Locally
For local testing, you can use a local server. Install Node.js and run:
```
npx http-server .
```
Then open http://localhost:8080 in your browser.

Note: Local testing won't allow PWA installation due to HTTPS requirement.
