# 🚀 AlgoFlow — Premium Frontend Architecture

Modern DSA preparation platform built with React + Vite featuring protected routes, smooth animations, reusable design systems, and SaaS-level UI.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|------------|
| 🎨 Frontend | React 18 + Vite |
| 🛣 Routing | React Router v6 |
| 🎭 Styling | Vanilla CSS + CSS Variables |
| 🔔 Toasts | react-toastify |
| 🔤 Fonts | Syne + DM Sans |
| 🧩 Icons | Font Awesome 6 |
| 🔐 Auth | Protected Routes |

---

## 📁 Project Structure

```
algoflow/
│
├── public/
│   └── favicon.ico
│
├── src/
│
│   ├── main.jsx
│   ├── App.jsx
│   ├── Base.css
│
│   ├── assets/
│   │   ├── hero-img.png
│   │   ├── algoflow_icon.png
│   │   ├── leetcode.png
│   │   └── GeeksForGeeks.png
│
│   ├── data/
│   │   ├── data.js
│   │   └── data_topics.js
│
│   └── components/
│       ├── Navbar.jsx
│       ├── Home.jsx
│       ├── Problems.jsx
│       ├── ProblemType.jsx
│       ├── Login.jsx
│       ├── Profile.jsx
│       ├── ProtectedRoute.jsx
│       └── Notfound.jsx
│
└── all_css_codes/
    ├── Navbar.css
    ├── Home.css
    ├── Problems.css
    ├── ProblemType.css
    ├── Login.css
    ├── Footer.css
    └── cta-section.css
```

---

## 🎨 CSS Architecture

### 🌐 Global Design System

`Base.css` acts as the single source of truth for the entire UI system.

### 🎯 Design Tokens

```css
:root {
   --color-bg:
   --color-accent:
   --gradient-primary:
   --font-display:
   --shadow-blue-lg:
}
```

### 🧩 Token Categories

| Token Type | Purpose |
|------------|---------|
| `--blue-*` | Brand Colors |
| `--gray-*` | Neutral Palette |
| `--gradient-*` | UI Gradients |
| `--font-*` | Typography |
| `--space-*` | Spacing System |
| `--radius-*` | Border Radius |
| `--shadow-*` | Elevation System |
| `--duration-*` | Animation Timing |

---

## 🗂 Component Responsibilities

| File | Responsibility |
|------|----------------|
| `Navbar.css` | Sticky Glass Navbar |
| `Home.css` | Hero + Features |
| `Problems.css` | Topic List UI |
| `ProblemType.css` | Problem Tables |
| `Login.css` | Authentication UI |
| `Footer.css` | Footer Layout |
| `cta-section.css` | CTA Banner |

---

## 🛣 Route Mapping

| Route | Component | CSS |
|-------|-----------|-----|
| `/` | `Home.jsx` | `Home.css` |
| `/problems` | `Problems.jsx` | `Problems.css` |
| `/problems/:slug` | `ProblemType.jsx` | `ProblemType.css` |
| `/profile` | `Profile.jsx` | `Profile.css` |
| `/login` | `Login.jsx` | `Login.css` |
| `*` | `Notfound.jsx` | `Notfound.css` |

---

## 🔐 Protected Routes

```jsx
<ProtectedRoute>
   <Problems />
</ProtectedRoute>
```

**Protected Pages:**

- 🔒 `/problems`
- 🔒 `/profile`
- 🔒 `/problems/:slug`

> Unauthenticated users redirect to `/login`

---

## 🧠 Naming Conventions

| Pattern | Usage |
|---------|-------|
| `.component-name` | Main Wrapper |
| `.component__element` | Child Elements |
| `.delay-1` → `.delay-6` | Animation Delays |
| `.easy` `.medium` `.hard` | Difficulty Styles |

---

## ✨ Animation System

| Animation | File | Purpose |
|-----------|------|---------|
| `slide-in` | `Problems.css` | Topic Entrance |
| `row-in` | `ProblemType.css` | Table Animation |
| `orb-float` | `Home.css` | Floating Orbs |
| `hero-float` | `Home.css` | Hero Animation |
| `scroll-left` | `Home.css` | Infinite Carousel |
| `card-in` | `Login.css` | Login Entrance |
| `heartbeat` | `Footer.css` | Footer Animation |
| `reveal-up` | `Base.css` | Scroll Reveal |

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `>1024px` | Full Desktop |
| `≤1024px` | Hero Stack |
| `≤768px` | Mobile Navbar |
| `≤640px` | Footer Column |
| `≤480px` | Fullscreen Login |
| `≤380px` | Compact Rows |

---

## 🚀 UI Highlights

### 🎯 Home Page Features

- 🌌 Floating Gradient Orbs
- ✨ Animated Hero
- 🎠 Infinite Carousel
- 📊 Stats Section
- 🧩 Feature Grid
- 🔥 SaaS-Level UI

---

## 🔔 Toast Notification System

```js
toast.success("Login Successful")
```

**Features:**

- ✅ Success Toasts
- ❌ Error Toasts
- 🎨 Custom Styling
- ⚡ Smooth Animation

---

## ⚙ Performance Optimizations

- 🚀 Vite Fast Refresh
- 🎯 CSS Variables
- 🧹 Component Isolation
- 📦 Lightweight Styling
- 🔄 Reusable Tokens

---

## 📌 Future Improvements

- 🌙 Dark / Light Theme
- 📈 Progress Analytics
- 🤖 AI Recommendations
- 🏆 Contest Tracker
- 📊 Dashboard
- 🔥 JWT Authentication
- 📱 PWA Support

---

## 🧑‍💻 Developer Goals

- Maintainable Architecture
- Reusable Components
- Modern UI Patterns
- Fast Performance
- Scalable Styling System

---

## ❤️ Built For

- DSA Preparation
- Placement Training
- Competitive Programming
- Interview Readiness

---

## 🏁 Vision

AlgoFlow aims to become a premium developer-first DSA platform with scalable frontend architecture, modern UI engineering, and elegant user experience.
