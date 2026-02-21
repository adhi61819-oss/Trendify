# Trendify 🎶

A modern, minimalist music player application built with React.

## Features

- 🎵 Play/Pause controls
- 📋 Song playlist with artist information
- 🎯 Click to play any song
- 📊 Now playing display
- 🎨 Beautiful, responsive UI
- ⚡ Fast and lightweight

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adhi61819-oss/Trendify.git
cd Trendify
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
Trendify/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Trendify.js
│   ├── styles/
│   │   └── Trendify.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Customization

### Adding Your Own Songs

Edit `src/components/Trendify.js` and update the `songs` array:

```javascript
const songs = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    url: "https://path-to-your-audio-file.mp3",
  },
  // ... more songs
];
```

### Styling

Customize the appearance by editing:
- `src/styles/Trendify.css` - Component styles
- `src/App.css` - App-level styles
- `src/index.css` - Global styles

## Future Enhancements

- [ ] Next/Previous track buttons
- [ ] Progress bar and seek functionality
- [ ] Volume control
- [ ] Song duration display
- [ ] Keyboard shortcuts
- [ ] Playlist management
- [ ] Dark mode

## Technologies Used

- React 17
- CSS3
- HTML5 Audio API

## License

This project is open source and available under the MIT License.

## Author

[adhi61819-oss](https://github.com/adhi61819-oss)