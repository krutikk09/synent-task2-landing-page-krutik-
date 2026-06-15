# CineScope

CineScope is a premium movie explorer built with HTML5, CSS3, and vanilla JavaScript. It uses the OMDb API with the Fetch API to search by title and render rich movie details in a polished glassmorphism interface.

## Features

- Search movies by title
- Enter key and button-based search support
- Dynamic rendering of poster, year, genre, runtime, IMDb rating, director, actors, language, awards, and plot
- Skeleton loading card and animated loading indicator
- Error handling for empty input, missing movies, network failures, and invalid API responses
- Recent searches saved in localStorage
- Favorites saved in localStorage with remove support
- Responsive layout for mobile, tablet, laptop, and desktop
- Smooth fade-ins, hover lift, poster zoom, and scroll reveal animations

## Installation

1. Download or clone the project files.
2. Open [script.js](C:\Users\kruti\Documents\New project\script.js) and replace:

```js
const API_KEY = "YOUR_OMDB_API_KEY";
```

with your real OMDb API key.

3. Save the file.
4. Open [index.html](C:\Users\kruti\Documents\New project\index.html) in your browser.

## API Setup

1. Visit [OMDb API](https://www.omdbapi.com/apikey.aspx).
2. Request a free or paid API key.
3. Add the key to `script.js`.
4. Reload the page and start searching.

## Project Files

- `index.html` - semantic page structure
- `style.css` - glassmorphism design system, responsive layout, and animations
- `script.js` - OMDb fetch logic, rendering, loading states, localStorage management
- `README.md` - setup and usage guide

## Screenshots

Add screenshots here after running the app locally:

- Hero and search view
- Movie result card
- Recent searches and favorites sections
- Mobile responsive layout

Example naming suggestion:

- `screenshots/home.png`
- `screenshots/result.png`
- `screenshots/mobile.png`

## Future Improvements

- Multi-result search grid using the OMDb `s` endpoint
- Genre filters and sorting options
- Trailer integration
- Theme customization
- Pagination for broader discovery
- Keyboard shortcuts and accessibility enhancements

## Notes

- The app is intentionally framework-free and uses only vanilla web technologies.
- A valid OMDb API key is required for movie search to work.
