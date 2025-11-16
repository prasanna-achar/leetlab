# Code Chaos Frontend Styling Guide

This guide captures the visual language used across the Code Chaos frontend and how to extend it confidently. Share it with anyone contributing UI changes so the experience stays consistent.

---

## Core Principles

1. **Dark, cinematic canvas**  
   - Default background: `bg-slate-950` with subtle opacity overlays (`bg-slate-900/70`, `bg-white/5`).  
   - Embrace depth using layered shadows (`shadow-2xl shadow-black/30`) and blurred glass (`backdrop-blur`).

2. **Rose-accented highlights**  
   - Primary accent: `rose` palette (`bg-rose-600`, `text-rose-400`, borders `rose-500/60`).  
   - Use sparingly to draw attention to interactive elements, call-to-action buttons, and active states.

3. **Readable typography**  
   - Base font colour: `text-slate-100`; secondary copy: `text-slate-400`.  
   - Headings use semibold/bold weights; keep max width on paragraphs (`max-w-2xl`) to maintain readability.

4. **Rounded, tactile surfaces**  
   - Cards, tables, and sticky elements share rounded corners (`rounded-2xl`), light borders, and inner padding.  
   - Use DaisyUI components (`btn`, `badge`, `select`, etc.) with custom utility classes for final polish.

5. **Animated feedback that feels responsive**  
   - For loading states use DaisyUI spinners or `animate-spin`.  
   - Use `hover:` state transitions (`hover:bg-white/10`, `hover:border-rose-500`) to communicate interactivity.

---

## Layout Conventions

- **Global shell (`App.jsx` + `Layout.jsx`)**
  - Wrap content in `max-w-7xl` centered container.
  - `NavBar` is sticky with a translucent background and avatar dropdown.
  - `Footer` mirrors the glassmorphism aesthetic and contains social links.

- **Pages**
  - Use spaced sections with `rounded-2xl` cards for content blocks.
  - Provide a summary header (metrics, call to action) before data tables or forms.
  - Apply `shadow-2xl` or `shadow-black/30` to create depth without overpowering the dark UI.

- **Tables & Lists**
  - Enclose in a bordered card with `overflow-hidden`.
  - Sticky header (`table-pin-rows`) to maintain context on long lists.
  - Use badges for categories/tags and checkboxes for boolean states.

- **Forms & Modals**
  - Inputs use `bg-slate-950/60` with `input-bordered` to ensure contrast.
  - Modals cover the viewport with `bg-black/70` and blur; internal card follows same border/shadow language.

---

## Component Patterns

- **Buttons**
  - Primary: `btn btn-primary bg-rose-600 shadow-lg shadow-rose-900/40`.
  - Secondary: `btn btn-outline border-white/10 text-slate-200 hover:border-rose-500`.
  - Icon buttons: ensure `gap-2` for breathing room and `text-sm font-semibold`.

- **Badges/Tags**
  - Accent badges: `badge badge-outline border-rose-500/60 bg-rose-500/10 text-rose-200`.
  - Difficulty indicator: use DaisyUI semantic badges (`badge-success`, `badge-warning`, `badge-error`).

- **Metrics**
  - Small statistic cards with heading, description, value stacked vertically.
  - Use uppercase tracking (`tracking-wider`) for labels, bold for numbers.

- **Empty States**
  - Combine icon + heading + helper text.
  - Surface actions to recover (e.g., a button to add data, or link to switch filters).

---

## Extending the Design

1. **Start from the library**  
   Lean on Tailwind + DaisyUI first. Only add custom utilities when the base building blocks cannot express the desired layout.

2. **Compose rather than duplicate**  
   - Extract shared patterns (stat cards, filter bars, modals) into components when reused more than twice.
   - Keep styling colocated with components via utility classes to reduce CSS sprawl.

3. **Keep the palette tight**  
   - Primary actions use `rose`; secondary states use neutral/slate. Reserve other colours for semantic meaning only (success/error/warning).

4. **Document special cases**  
   - If a component needs a unique behaviour (e.g., custom animation), note it in this file to avoid conflicting reimplementations later.

---

## Quick Checklist Before Submitting UI Changes

- [ ] Responsive behaviour verified at 375px, 768px, 1280px widths.
- [ ] Light/dark contrast checked (use DevTools contrast checker).
- [ ] All interactive elements have hover/focus feedback.
- [ ] Loading and error states render gracefully.
- [ ] New Tailwind utility choices align with this guide’s colour and spacing system.
- [ ] Added screenshots or GIFs in PR description for major visual updates.

---

## Next Visual Enhancements (Backlog Ideas)

1. Add animated problem progress ring to the header once submission data is available.
2. Introduce a “recent activity” feed card to the home page showing solved problems.
3. Expand playlist modal with problem suggestions (top unsolved items in the same difficulty).
4. Provide theme switcher (dark-only now) with saved preference.
5. Build a shared `StatCard` component so metrics are consistent across pages.

---

Sticking to this guide will keep Code Chaos visually cohesive and welcoming for learners. When in doubt, reuse existing patterns, and update the guide if you intentionally diverge for a new, reusable pattern.



