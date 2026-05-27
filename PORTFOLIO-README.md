# Arthur Hardman Borges - Portfolio

Professional portfolio website showcasing experience, skills, and projects. Built with Next.js 15, React 19, and TypeScript.

## 🌐 Live URLs

- **Portfolio**: http://localhost:3005
- **Construction Page**: http://localhost:3005/em-construcao

## ✨ Features

- **Bilingual Support**: Toggle between English and Portuguese
- **Dark/Light Theme**: Smooth theme switching with persistence
- **Single-Page Design**: Smooth scroll navigation between sections
- **Responsive**: Mobile-first design that works on all devices
- **Professional Sections**:
  - Hero with animated background
  - About Me with language proficiency
  - Work Experience timeline
  - Skills matrix organized by category
  - Featured Projects showcase
  - Education & Certifications
  - Contact section with social links
- **PDF CV Download**: Downloadable resume in both languages

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles and design system
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Main portfolio page
│   └── em-construcao/        # Construction page route
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer with social links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── LanguageToggle.tsx
│       ├── ThemeToggle.tsx
│       └── Section.tsx
├── contexts/
│   ├── LanguageContext.tsx   # Bilingual content management
│   └── ThemeContext.tsx      # Theme switching logic
├── data/
│   └── portfolio.ts          # All portfolio content (EN/PT)
└── types/
    └── portfolio.d.ts        # TypeScript interfaces
public/
├── cv/                       # Place CV PDFs here
│   ├── Arthur_Hardman_Borges_CV_EN.pdf
│   └── Arthur_Hardman_Borges_CV_PT.pdf
└── projects/                 # Place project screenshots here
    ├── finances-app/
    ├── music-store/
    └── digital-agenda/
```

## 🎨 Design System

### Color Palette

**Dark Theme (Default)**:
- Background Primary: `#0a0a0a`
- Background Secondary: `#1a1a1a`
- Card Background: `#2a2a2a`
- Accent Primary: `#3b82f6` (Blue)
- Accent Secondary: `#8b5cf6` (Purple)
- Text Primary: `#f5f5f5`
- Text Secondary: `#a3a3a3`

**Light Theme**:
- Background Primary: `#ffffff`
- Background Secondary: `#f8f9fa`
- Card Background: `#ffffff`
- Accent Primary: `#2563eb`
- Accent Secondary: `#7c3aed`
- Text Primary: `#171717`
- Text Secondary: `#525252`

### Typography
- **Sans-serif**: Geist (modern, clean)
- **Monospace**: Geist Mono (for technical elements)

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3005](http://localhost:3005)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

All portfolio content is in [src/data/portfolio.ts](src/data/portfolio.ts). To update:

1. **Contact Information**: Update the `contact` object
2. **Experience**: Add/edit items in the `experience` array
3. **Projects**: Modify the `projects` array
4. **Skills**: Update skill categories and items
5. **Education & Certifications**: Edit respective arrays

Each text field has both `en` and `pt` properties for bilingual support.

## 📄 Adding CV PDFs

1. Export your CV as PDF in both languages
2. Name them:
   - `Arthur_Hardman_Borges_CV_EN.pdf`
   - `Arthur_Hardman_Borges_CV_PT.pdf`
3. Place in `public/cv/` folder

## 🖼️ Adding Project Screenshots

1. Create folders in `public/projects/`:
   - `finances-app/`
   - `music-store/`
   - `digital-agenda/`
2. Add screenshot images (recommended: 1200x800px)
3. Name them `screenshot.png` (or update paths in `portfolio.ts`)
4. For confidential projects, blur sensitive information

## 🎯 Key Features Explained

### Theme Switching
- Toggle between dark/light modes
- Preference saved to localStorage
- Respects system preference on first visit
- Smooth transitions between themes

### Language Toggle
- Switch between English (EN) and Portuguese (PT)
- Language preference persisted in localStorage
- All content automatically updates

### Smooth Navigation
- Click navigation links for smooth scroll
- Mobile-friendly hamburger menu
- Fixed header that shows/hides on scroll

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px+

## 🔧 Technologies Used

- **Framework**: Next.js 15.3.3 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Turbopack
- **Fonts**: Geist Sans & Geist Mono

## 📦 No Additional Dependencies Required

This portfolio uses only the core Next.js/React ecosystem. All icons are custom SVG implementations, eliminating the need for icon libraries.

## 🌟 Next Steps

1. **Add CV PDFs**: Place your resume files in `public/cv/`
2. **Add Project Screenshots**: Create project folders in `public/projects/`
3. **Customize Content**: Update `src/data/portfolio.ts` as needed
4. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting

## 📱 Testing Checklist

- [ ] Test on mobile devices
- [ ] Verify all links work (GitHub, LinkedIn, project URLs)
- [ ] Test dark/light theme toggle
- [ ] Test language toggle (EN/PT)
- [ ] Verify smooth scroll navigation
- [ ] Test CV download buttons
- [ ] Check responsive layout on different screen sizes
- [ ] Verify all sections display correctly

## 🐛 Troubleshooting

**Theme not persisting?**
- Clear browser localStorage
- Check browser console for errors

**Language toggle not working?**
- Verify localStorage is enabled
- Check console for context errors

**Images not loading?**
- Verify file paths in `portfolio.ts` match actual file locations
- Check file names are case-sensitive

## 📄 License

Personal portfolio - All rights reserved © 2026 Arthur Hardman Borges

---

Built with ❤️ using Next.js & React
