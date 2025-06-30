# ZENDERLA Landing Page

A fully responsive, modern landing page for ZENDERLA company built with React + Tailwind CSS.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on all devices (laptop, tablet, mobile)
- **Dark/Light Mode Toggle** - Theme preference saved in localStorage
- **Smooth Animations** - AOS (Animate On Scroll) integration
- **Modern UI/UX** - Professional design with hover effects and transitions
- **Contact Form Integration** - Google Sheets API integration for form submissions
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zenderla-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
zenderla-landing-page/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Sections

### 1. **Navbar**
- Fixed navigation with ZENDERLA logo
- Responsive menu with mobile hamburger
- Dark/Light mode toggle
- Smooth scroll to sections

### 2. **Home Section**
- Company logo and large ZENDERLA title
- 4-line company description
- Animated tech vector illustration
- Call-to-action buttons

### 3. **Services Section**
- 6 service cards with hover effects
- Horizontally scrollable layout
- Neon glow effects based on theme
- Vector icons for each service

### 4. **About Section**
- 4 team sections organized by departments
- Team member names and roles
- Skills/tags for each department
- Company values section

### 5. **Contact Section**
- Contact form with validation
- Google Sheets integration
- Contact information display
- Social media links

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **AOS** - Animate On Scroll library
- **Google Sheets API** - Form data storage
- **Inter Font** - Typography

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

### Dark Mode
- Toggle button in navbar
- localStorage persistence
- System preference detection
- Smooth theme transitions

### Animations
- Scroll-triggered animations (AOS)
- Hover effects on cards
- Loading animations
- Smooth transitions

### Form Integration
- Google Sheets API via Sheet.best
- Form validation
- Success/error feedback
- Loading states

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    500: '#3b82f6', // Main brand color
    // ... other shades
  }
}
```

### Content
Update the content in each component file:
- `src/components/Home.js` - Company description
- `src/components/Services.js` - Service offerings
- `src/components/About.js` - Team information
- `src/components/Contact.js` - Contact details

### Google Sheets Integration
Update the Google Sheets URL in `src/components/Contact.js`:
```javascript
const response = await fetch('YOUR_SHEET_BEST_API_URL', {
  // ... configuration
});
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@zenderla.com
- Phone: +91 98765 43210

---

**Built with ❤️ by ZENDERLA Team** 