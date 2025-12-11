# DevSite Documentation

> **Documentation hub for the DevSite enterprise portfolio project.**

---

## 📚 Quick Navigation

### Core Specifications (Original Team Docs)
These define the **what** - the design decisions already made.

| Document | Purpose |
|----------|---------|
| [DESIGN_SYSTEM.md](./specifications/DESIGN_SYSTEM.md) | Spacing, typography, shadows, components, responsive rules |
| [COLOR_SCHEME.md](./specifications/COLOR_SCHEME.md) | Complete color palette, contrast ratios, usage guidelines |
| [ANIMATION_SYSTEM.md](./specifications/ANIMATION_SYSTEM.md) | Motion variants, timing, easing, performance guidelines |
| [TECH_STACK.md](./specifications/TECH_STACK.md) | Technology decisions, tooling, alternatives considered |
| [POSITIONING_STRATEGY.md](./specifications/POSITIONING_STRATEGY.md) | Marketing messaging, target clients, differentiation |
| [ROADMAP.md](./specifications/ROADMAP.md) | Development phases, timeline, success metrics |

### Architecture & Patterns (Implementation Docs)
These define the **how** - how we build and organize code.

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE.md](./architecture/ARCHITECTURE.md) | Modular structure, file organization, component patterns |
| [COMPONENT_GUIDE.md](./guides/COMPONENT_GUIDE.md) | Atomic components, 150-line rule, templates |
| [HOOKS_GUIDE.md](./guides/HOOKS_GUIDE.md) | Custom hooks patterns, organization, naming |
| [CODING_STANDARDS.md](./guides/CODING_STANDARDS.md) | ESLint rules, TypeScript patterns, code quality |

---

## 🎯 Reading Order

### For New Team Members:
1. **README.md** (project root) - Project goals & overview
2. **POSITIONING_STRATEGY.md** - Understand our target audience
3. **TECH_STACK.md** - What we're building with
4. **ARCHITECTURE.md** - How we organize code
5. **DESIGN_SYSTEM.md** - Visual patterns

### For Starting Development:
1. **ARCHITECTURE.md** - File structure & patterns
2. **COMPONENT_GUIDE.md** - How to build components
3. **DESIGN_SYSTEM.md** - Styling reference
4. **ANIMATION_SYSTEM.md** - Motion patterns

### For Design Implementation:
1. **COLOR_SCHEME.md** - Color tokens
2. **DESIGN_SYSTEM.md** - Component styles
3. **ANIMATION_SYSTEM.md** - Motion design

---

## 📁 Docs Structure

```
docs/
├── INDEX.md                    # This file - documentation hub
│
├── specifications/             # Original team decisions (what)
│   ├── ANIMATION_SYSTEM.md
│   ├── COLOR_SCHEME.md
│   ├── DESIGN_SYSTEM.md
│   ├── POSITIONING_STRATEGY.md
│   ├── ROADMAP.md
│   └── TECH_STACK.md
│
├── architecture/               # System architecture (how)
│   └── ARCHITECTURE.md
│
└── guides/                     # Implementation guides
    ├── COMPONENT_GUIDE.md
    ├── HOOKS_GUIDE.md
    └── CODING_STANDARDS.md
```

---

## ⚡ Quick Reference

### Project Setup Commands
```bash
# Install dependencies
npm install

# Start development
npm run dev

# Type checking
npm run type-check

# Lint & format
npm run lint
npm run format
```

### Key Import Paths
```typescript
import { Button, Card, Badge } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks'
import type { Project } from '@/types/project'
```

### Color Variables
```css
--primary: #00ffc6     /* Mint-cyan */
--secondary: #a78bfa   /* Soft purple */
--bg-primary: #0a0a0f  /* Main background */
--text-primary: #f4f4f5 /* Main text */
```

---

## 🔗 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)
- [React Hook Form](https://react-hook-form.com/)

---

**Rule:** If something isn't documented here, document it first, then build it.
