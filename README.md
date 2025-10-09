# Adam's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Smooth Animations**: Framer Motion for fluid, engaging animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Custom cursor, hover effects, and micro-interactions
- **Performance**: Optimized with Next.js 14 and TypeScript
- **Accessibility**: Semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── Cursor.tsx          # Custom cursor
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation
│   ├── Projects.tsx        # Projects showcase
│   └── Skills.tsx         # Skills section
├── public/                 # Static assets
└── README.md
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
- **Personal Info**: Update `app/layout.tsx` for meta information
- **About**: Modify `components/About.tsx`
- **Projects**: Edit the projects array in `components/Projects.tsx`
- **Skills**: Update skills in `components/Skills.tsx`
- **Contact**: Change contact info in `components/Contact.tsx`

### Animations
Customize animations in individual components using Framer Motion variants.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Features Showcase

- **Hero Section**: Animated introduction with floating elements
- **About**: Personal story with animated statistics
- **Skills**: Interactive skill bars with hover effects
- **Projects**: Project cards with modal details
- **Contact**: Working contact form with validation
- **Navigation**: Smooth scrolling and mobile menu
- **Cursor**: Custom cursor with hover states

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js 14, TypeScript, and Framer Motion
