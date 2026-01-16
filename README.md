
# Velisa's Restaurant Website

A premium, production-grade restaurant landing page for **Velisa's**, located in Msasani Bay, Dar es Salaam. This project emphasizes clean code architecture, type safety, and a sophisticated UI/UX designed for the hospitality industry.

## 🚀 Features

- **Strict Type Safety**: Full TypeScript integration for all data models and component props.
- **Centralized Data Engine**: All content (menu, reviews, restaurant info) is managed through typed constants.
- **Mobile-First Design**: Fully responsive across all devices using Tailwind CSS.
- **Performance Optimized**: Lazy-loaded components and optimized image placeholders.
- **Modern UI Architecture**: Component-based structure for maximum reusability.
- **Accessible & SEO Friendly**: Semantic HTML5 tags and ARIA-compliant navigation.

## 🛠 Tech Stack

- **Framework**: React 19 (Functional Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```text
/
├── src/
│   ├── components/       # UI, Layout, and Section components
│   ├── data/             # Static content and constants (restaurantData.ts)
│   ├── types/            # TypeScript interfaces and types
│   └── App.tsx           # Main application shell
├── public/               # Static assets
└── types.ts              # Global type definitions
```

## 🏁 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Best Practices Followed

- No use of `any` types.
- Prop-drilling avoided through modular component design.
- Separation of concerns: Logic, data, and presentation layers are isolated.
- Utility-first CSS for maintainable and scalable styling.

---
*Created as a professional practice project by a Senior Frontend Engineer.*
