# SINCROUNALMED Research Group

A modern, responsive React landing page for the SINCROUNALMED research group, showcasing our medical research projects, team members, and collaboration opportunities.

## 🌟 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, smooth scrolling navigation, and engaging UI elements
- **Research Showcase**: Dedicated sections for projects, team members, and research areas
- **Contact Integration**: Contact form and multiple communication channels
- **GitHub Pages Ready**: Configured for seamless deployment to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sincrounalmed/sincrounalmed.github.io.git
cd sincrounalmed.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with sticky positioning
│   ├── Hero.js           # Landing section with call-to-action
│   ├── About.js          # Research group information and focus areas
│   ├── Projects.js       # Research projects showcase
│   ├── Team.js          # Team members and collaboration info
│   ├── Contact.js       # Contact form and information
│   └── Footer.js        # Site footer with links and social media
├── App.js              # Main application component
├── App.css            # Application-specific styles
├── index.js           # React app entry point
└── index.css          # Global styles and utilities
```

## 🎨 Customization

### Colors and Styling

The color scheme uses a blue gradient palette. To customize colors, update the CSS custom properties in `src/index.css`:

- Primary: `#3b82f6` (blue-500)
- Secondary: `#1d4ed8` (blue-700)  
- Background: `#f8fafc` (slate-50)

### Content Updates

To update content:

1. **Team Members**: Edit the `teamMembers` array in `src/components/Team.js`
2. **Research Projects**: Update the `projects` array in `src/components/Projects.js`
3. **Contact Information**: Modify the `contactInfo` array in `src/components/Contact.js`
4. **About Section**: Edit the content in `src/components/About.js`

### Icons

The project uses [Lucide React](https://lucide.dev/) for icons. To add new icons:

```javascript
import { IconName } from 'lucide-react';
```

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

SINCROUNALMED Research Group
- Email: info@sincrounalmed.org
- Website: https://sincrounalmed.github.io

---

Built with ❤️ using React and deployed on GitHub Pages 