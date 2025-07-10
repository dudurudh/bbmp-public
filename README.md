# Bengaluru Democracy Quiz

An interactive quiz about Bengaluru's local democracy and the absence of elected corporators since 2020.

## About

This quiz educates users about the current state of local governance in Bengaluru, highlighting that the city has had no elected corporators since September 2020, while bureaucrats manage a ₹19,927 crore BBMP budget without local accountability.

## Features

- 📱 Mobile-first responsive design
- 🎯 25 engaging questions about local governance
- 📊 Real-time progress tracking
- 🔄 Skip to results option
- 📤 Social sharing capabilities
- ♿ Full WCAG 2.1 AA accessibility compliance
- 📈 Google Analytics integration

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages (gh-pages branch)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/dudurudh/bbmp-public.git
cd bbmp-public
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project uses a **gh-pages branch deployment strategy**:

1. **Source Code**: Lives in the `main` branch
2. **Static Site**: Built and deployed to the `gh-pages` branch
3. **GitHub Pages**: Serves from the `gh-pages` branch

### Deployment Process

- **Automatic**: Every push to `main` triggers a GitHub Action
- **Build**: Next.js static export creates optimized HTML/CSS/JS
- **Deploy**: Static files are pushed to the `gh-pages` branch
- **Serve**: GitHub Pages serves the site from `gh-pages` branch

### Deployment URL

The site is deployed at: https://bbmp.publicengaged.in

### Manual Deployment

To deploy manually:
```bash
npm run build
# The GitHub Action will handle the rest
```

## Branch Strategy

- **`main`**: Source code and development
- **`gh-pages`**: Generated static site (auto-created by GitHub Actions)

## Accessibility

This project follows WCAG 2.1 AA standards with:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ High contrast focus indicators
- ✅ Proper ARIA labels and descriptions
- ✅ Live regions for dynamic content

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Data Sources

The quiz content and budget information are based on verified sources:

- Janaagraha's BBMP Budget Analysis 2025-26
- The Hindu articles on BBMP election delays
- Bangalore Mirror coverage of civic issues
- Official BBMP budget documents

---

**Demand #BBMPElections** - Bengaluru deserves local democracy! 