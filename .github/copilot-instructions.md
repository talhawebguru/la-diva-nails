# 🤖 GitHub Copilot Instructions

These are custom instructions for Copilot to improve code suggestions in this project.

---

## 🛠 Stack & Tools

- Framework: **Next.js** (App Router)
- Styling: **Tailwind CSS**
- Animations: **Framer Motion**
- Icons: **React Icons**

---

## ✨ Coding Rules

- Use **React functional components** with arrow functions.
- Use **camelCase** for variables and functions.
- Break large components into **smaller reusable components**.
- Avoid global variables and inline styles.
- Keep each component in a **separate file**.

---
## 🌐 Project Reference Site

Use the following website as the primary design and animation reference:

🔗 https://la-diva.cmsmasters.net/main/home-2/

- Match layout structure and UI hierarchy
- Use similar Framer Motion animations for entrances, hover effects, etc.
- Match transitions, delays, and fluid movements
- Use semantic HTML and Tailwind CSS for all sections
- Ensure responsive design matches the reference site
- Use similar color schemes and typography

## 🌀 Animation (Framer Motion)

- Use **Framer Motion** for all animations.
- Animate entrances with `motion.div`.
- Use `AnimatePresence` for exit animations.

### ✅ Framer Motion Import Rules (v11+):

- For **Client Components**, import like:

```js
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
```

- For **Server Components**, import like:

```js
import * as motion from "motion/react-client";
```

---
## 📐 Layout Pattern

Always wrap page or section content like this:

```jsx
<section>
  <Container>
    {children}
  </Container>
</section>
