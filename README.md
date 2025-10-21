# CV Builder (React + Vite)

A two-pane resume/CV builder: edit your information on the **left** (forms) and see a **live preview** on the **right**. Includes **add/remove** entries for Employment, Education, and Skills, **profile photo upload**, a **Dark Mode** toggle, and a **Print to PDF** action.

https://github.com/rudybarua23/CV (intended for GitHub Pages deployment)

## ✨ Features

- **Live preview** of all fields (single source of truth via React state)
- **Sections**: Personal Info, Employment (multi-entry), Education (multi-entry), Skills (multi-entry)
- **Profile photo upload** (stored as base64 in state via `FileReader`)
- **Print to PDF** button with print-optimized styles (`.no-print` is hidden)
- **Dark Mode** toggle (adds `dark-mode` class to `<body>`)
- **Responsive layout** with scrollable panes
- **Clean, accessible form controls** with focus styles

## 🛠 Tech Stack

- **React 18** + **Vite 6**
- CSS (custom styles in `src/App.css` and `src/index.css`)
- Vite config for GitHub Pages: `base: '/CV/'`

## 📁 Project Structure

cv/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│ ├─ main.jsx # App entry
│ ├─ MainApp.jsx # Centralized state + layout (Form | Preview)
│ ├─ App.css # Form + resume styles (including print & dark mode)
│ ├─ index.css # Base styles (Vite defaults, light/dark hints)
│ └─ components/
│ ├─ PersonalForm.jsx # First/Last, email, phone, address, occupation, links, about, photo
│ ├─ EmploymentForm.jsx # Add/remove jobs, dates, city, employer, description
│ ├─ EducationForm.jsx # Add/remove schools, degree, dates, city, description
│ ├─ SkillsForm.jsx # Add/remove skills
│ └─ Preview.jsx # Resume view + Print & Dark Mode controls
└─ ...

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
