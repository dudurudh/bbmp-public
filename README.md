# 🏛️ Bengaluru Democracy Quiz

A mobile-first civic awareness website that educates Bengalureans about the absence of local corporators since 2020 and why local elections matter.

## 🎯 Mission

- **Educate**: Show that Bengaluru has had no BBMP corporators since 2020
- **Engage**: Interactive quiz with 25 questions about local governance
- **Empower**: Encourage sharing and demand for BBMP elections

## 🚀 Features

### 📱 Mobile-First Design
- Responsive design optimized for mobile devices
- Large touch targets and accessible interface
- Smooth animations and transitions

### 🧠 Interactive Quiz
- 25 engaging questions about local governance
- Witty answers that educate about civic issues
- Progress tracking with visual indicators
- One question at a time for better engagement

### 📤 Social Sharing
- WhatsApp integration with pre-filled messages
- Twitter sharing with relevant hashtags
- Viral-friendly content to spread awareness

### 🎨 Modern UI/UX
- Clean, modern design with Tailwind CSS
- Smooth fade and slide animations
- High contrast for accessibility
- Card-based layout for easy reading

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React hooks (useState)
- **Deployment**: GitHub Pages (gh-pages branch)

## 📁 Project Structure

```
bengaluru-democracy-quiz/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with state management
├── components/
│   ├── Quiz.tsx             # Quiz component with questions
│   └── Result.tsx           # Results and sharing component
├── data/
│   └── questions.json       # 25 quiz questions and answers
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dudurudh/bbmp-public.git
cd bbmp-public
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📊 Quiz Content

The quiz includes 25 questions covering:

- **Local Governance**: Who controls BBMP budgets and decisions
- **Infrastructure**: Roads, garbage, parks, street lights
- **Public Services**: Water supply, traffic management
- **Civic Issues**: Street vendors, parking, security
- **Democratic Representation**: The absence of elected corporators

Each question has:
- 4 multiple choice options
- Witty, educational answers
- Focus on the impact of no corporators since 2020

## 🎨 Design System

### Colors
- **Primary**: Blue shades for trust and democracy
- **Accent**: Yellow for highlighting important information
- **Success**: Green for positive actions
- **Warning**: Red for urgent civic issues

### Typography
- Large, readable fonts for mobile
- Clear hierarchy with proper spacing
- High contrast for accessibility

### Components
- **Buttons**: Large touch targets with hover effects
- **Cards**: Rounded corners with subtle shadows
- **Progress**: Visual progress indicators
- **Animations**: Smooth transitions between states

## 📱 Mobile Optimization

- **Touch Targets**: Minimum 44px for all interactive elements
- **Typography**: Large, readable fonts
- **Spacing**: Generous white space for easy reading
- **Navigation**: Simple, intuitive flow
- **Performance**: Fast loading and smooth interactions

## 🔧 Customization

### Adding Questions
Edit `data/questions.json` to add new questions:

```json
{
  "question": "Your question here?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "answer": "Your witty, educational answer here."
}
```

### Styling
- Modify `app/globals.css` for custom styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles in individual component files

### Content
- Update landing page text in `app/page.tsx`
- Modify share messages in `components/Result.tsx`
- Change metadata in `app/layout.tsx`

### Images and Assets

The project includes placeholder images that should be replaced with actual assets:

#### Required Images
- **`public/og-image.png`** (1200x630px) - Open Graph image for social media sharing
- **`public/twitter-image.png`** (1200x600px) - Twitter card image
- **`public/favicon.png`** (32x32px or 16x16px) - Browser tab icon

#### Image Guidelines
- Use high-quality PNG images
- Ensure good contrast for accessibility
- Include relevant text or branding
- Test how they appear in social media previews

#### Current Placeholders
The placeholder files contain instructions for replacement. Replace them with actual images before deployment.

## 🌐 Deployment

### GitHub Pages (Current)
This project uses a **gh-pages branch deployment strategy**:

1. **Source Code**: Lives in the `main` branch
2. **Static Site**: Built and deployed to the `gh-pages` branch
3. **GitHub Pages**: Serves from the `gh-pages` branch

**Deployment URL**: https://bbmp.publicengaged.in

### Alternative Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy with automatic builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for civic awareness in Bengaluru
- Inspired by the need for local democracy
- Designed for maximum engagement and sharing

---

**Made with ❤️ for Bengaluru's democracy**

---

## 🔧 Development Transparency

This project was built using:
- **ChatGPT**: For initial concept, content generation, and problem-solving
- **Cursor**: For code development, refactoring, and IDE assistance
- **Next.js 14**: For the React framework and static export
- **Tailwind CSS**: For styling and responsive design
- **TypeScript**: For type safety and better development experience

The development process involved iterative conversations with AI assistants to create an engaging, accessible, and informative civic awareness tool for Bengaluru residents. 