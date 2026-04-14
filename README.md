# Greek Isles & Mediterranean Cruise Comparison

A clean, single-file static web application for comparing three Mediterranean cruise options for a 20th anniversary trip.

## Project Structure

```
MedCruise/
├── index.html              # Main HTML structure (static page)
├── data.js                 # All cruise data (easy to update)
│
├── css/
│   └── styles.css          # All styling (separated from HTML)
│
├── js/
│   └── app.js              # Application logic (tab switching, UI helpers)
│
├── source/                 # Source files (research, extraction scripts)
│   ├── cruise-options.pdf  # Original travel proposal PDF
│   └── extract_pdf.py      # PDF text extraction script
│
├── .vscode/
│   └── launch.json         # VS Code launch configurations
│
└── .venv/                  # Python virtual environment
```

## How to Use

### Viewing the application
Simply open `index.html` in a web browser. It's a fully standalone page with no build step required.

### Updating cruise data
All cruise information is stored in `data.js`. To update prices, dates, amenities, or ports:

1. Open `data.js`
2. Find the cruise option you want to modify
3. Update the relevant fields (they're clearly commented)
4. Save and refresh the browser

Example:
```javascript
estimatedTotalIn: {
  cruise: 6498,
  airfare: 2600,     // Update this if prices change
  hotel: 700,
  addons: 0,
  excursions: 300,
  dining: 0,
  total: 10100       // Recalculate this
}
```

### Modifying styles
All CSS is in `css/styles.css`. The design uses CSS custom properties (variables) for colors and spacing, making it easy to adjust the theme:

```css
:root {
  --sand: #f5f0e8;
  --deep-sea: #1a3a4a;
  --gold: #c8983a;
  /* ... etc ... */
}
```

### Adding interactive features
Application logic is in `js/app.js`. Currently it handles tab switching and status tag formatting. Add new functions here for additional interactivity.

## Data Format

### Cruise Options
Each cruise in `data.js` contains:
- Basic info (name, dates, duration, port count)
- Cabin options with prices
- Estimated total-in cost breakdown
- Ship amenities and experiences
- Customer vibe/recommendation

### Ports
Each port includes:
- Port name and which cruise(s) visit it
- Historic sites list (archaeological/cultural)
- One major highlight (unique experience)

### Inclusions
Comparison table showing what's included in each cruise's base fare.

## Deployment

This is a **GitHub Pages-ready** site. To deploy:

1. Push to GitHub
2. Enable GitHub Pages for your repository
3. Set the source to the `main` branch (root directory)
4. Your site will be live at `https://username.github.io/MedCruise/`

No build process needed — just serve the static files.

## File Dependencies

- `index.html` requires:
  - `css/styles.css` (styling)
  - `data.js` (cruise data)
  - `js/app.js` (interactive features)
  - Google Fonts (linked in HTML head)

All other files (source materials, `.venv`, `.vscode`) are optional and not required for the site to function.

## Notes for Future Maintenance

- Keep CSS custom properties (--colors) at the top of `styles.css`
- Prices in `data.js` should include comments showing the update date
- The `source/` folder contains research material; feel free to archive or delete if needed
- The PDF extraction script is for reference; the data is already in `data.js`
