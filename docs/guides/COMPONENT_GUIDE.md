# Component Development Guide

> **Rules and patterns for building consistent, maintainable React components.**

---

## 🎯 Core Principles

### The 150-Line Rule

**Every component MUST be under 150 lines.** This is non-negotiable.

If you're approaching this limit:
1. Extract sub-components
2. Move logic to custom hooks
3. Move constants/config to separate files
4. Simplify (you're probably over-engineering)

```
✅ 50 lines  - Atom (Button, Badge, Input)
✅ 100 lines - Molecule (SearchBar, ProjectCard)
✅ 150 lines - Organism (Navigation, HeroSection)
❌ 200+ lines - REFACTOR REQUIRED
```

### Single Responsibility

Each component does **one thing well**:
- `Button` - clickable action
- `ProjectCard` - displays project preview
- `HeroSection` - presents main value prop

**Not:**
- `ButtonWithIconAndLoadingAndTooltip` - too much
- `ProjectCardWithModalAndFilter` - split these up

---

## 📐 Component Structure

### Standard Template

```typescript
// 1. Imports (external → internal → types)
import { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

// 2. Types/Interfaces
interface ComponentProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

// 3. Constants (variants, configs)
const motionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// 4. Component
export const ComponentName = ({
  children,
  variant = 'primary',
  className
}: ComponentProps) => {
  // 4a. Hooks (always at top)
  
  // 4b. Derived state / computed values
  
  // 4c. Handlers
  
  // 4d. Render
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  )
}

// 5. Default export
export default ComponentName
```

---

## 🏷️ Naming Conventions

### Component Names

```typescript
// ✅ GOOD - Descriptive, specific to context
export const HeroHeadline = () => {}
export const ProjectFilterBar = () => {}
export const ContactFormInput = () => {}
export const ServicesGridCard = () => {}

// ❌ BAD - Too generic
export const Headline = () => {}
export const FilterBar = () => {}
export const FormInput = () => {}
export const GridCard = () => {}
```

### File Names

```
components/
├── ui/
│   ├── Button.tsx          # PascalCase, single component
│   ├── Card.tsx
│   └── index.ts            # Barrel exports
└── layout/
    ├── Navigation.tsx
    └── Footer.tsx
```

### Props Naming

```typescript
// ✅ GOOD
interface ButtonProps {
  variant: 'primary' | 'secondary'  // Descriptive enum
  isLoading: boolean                 // Boolean prefix: is, has, should
  onClick: () => void                // Action prefix: on, handle
  children: ReactNode                // Standard React pattern
}

// ❌ BAD
interface ButtonProps {
  type: string                       // Too vague
  loading: boolean                   // Missing prefix
  click: () => void                  // Missing action prefix
  content: ReactNode                 // Non-standard naming
}
```

---

## 🎨 Styling Patterns

### Using the Design System

Always reference design tokens from `DESIGN_SYSTEM.md`:

```typescript
// ✅ GOOD - Uses design system tokens
const baseClasses = cn(
  'rounded-lg',                       // radius-md (8px)
  'px-6 py-3',                        // spacing-6, spacing-3
  'text-base font-semibold',          // typography
  'transition-all duration-200',       // animation timing
  'bg-gradient-to-br from-primary to-primary-dim',
  'hover:shadow-glow-lg'              // glow effect
)

// ❌ BAD - Magic values
const baseClasses = cn(
  'rounded-[7px]',                    // Why 7px? Use system values
  'px-5 py-2.5',                      // Off-system values
  'transition-all duration-150'        // Non-standard timing
)
```

### Responsive Design (Mobile-First)

```typescript
// ✅ GOOD - Mobile first, progressive enhancement
className={cn(
  'grid grid-cols-1',           // Mobile: 1 column
  'md:grid-cols-2',             // Tablet: 2 columns
  'lg:grid-cols-3',             // Desktop: 3 columns
  'gap-6 lg:gap-8'              // Responsive gaps
)}

// ❌ BAD - Desktop first
className="grid grid-cols-3 sm:grid-cols-1"  // Wrong direction
```

### Hover & Interactive States

From `DESIGN_SYSTEM.md`:

```typescript
// Card hover effect
className={cn(
  'p-6 rounded-lg',
  'bg-bg-secondary border border-border-subtle',
  'hover:border-primary',
  'hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]',
  'transition-all duration-300'
)}

// Button hover with lift
className={cn(
  baseClasses,
  'hover:-translate-y-0.5',
  'hover:shadow-glow-lg',
  'active:translate-y-0'
)}
```

---

## 🌀 Animation Patterns

### Using Framer Motion

Reference `ANIMATION_SYSTEM.md` for approved variants:

```typescript
import { motion, type Variants } from 'framer-motion'

// Use standard variants from animation system
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

// Component with animation
export const AnimatedCard = ({ children }: Props) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
)
```

### Respecting Reduced Motion

```typescript
import { useReducedMotion } from 'framer-motion'

export const AnimatedComponent = ({ children }: Props) => {
  const shouldReduceMotion = useReducedMotion()
  
  const variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }  // No animation
    : { 
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
  
  return (
    <motion.div variants={variants}>
      {children}
    </motion.div>
  )
}
```

---

## ♿ Accessibility Requirements

### Every Interactive Element

```typescript
// ✅ GOOD - Accessible button
<button
  onClick={handleClick}
  disabled={isLoading}
  aria-label={isLoading ? 'Loading...' : 'Submit form'}
  aria-busy={isLoading}
  className={cn(
    baseClasses,
    'focus:outline-none focus:ring-2 focus:ring-primary',
    'focus:ring-offset-2 focus:ring-offset-bg-primary'
  )}
>
  {children}
</button>

// ❌ BAD - Missing accessibility
<div onClick={handleClick}>
  {children}
</div>
```

### Form Inputs

```typescript
// ✅ GOOD - Proper labeling
<div>
  <label htmlFor="email" className="sr-only">
    Email address
  </label>
  <input
    id="email"
    type="email"
    aria-describedby="email-error"
    aria-invalid={hasError}
    placeholder="Enter your email"
  />
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email
    </span>
  )}
</div>
```

### Icon Buttons

```typescript
// ✅ GOOD - Icon with label
<button aria-label="Close menu">
  <X className="w-6 h-6" aria-hidden="true" />
</button>

// ❌ BAD - No accessible name
<button>
  <X className="w-6 h-6" />
</button>
```

---

## 📦 Composition Patterns

### Children Pattern

```typescript
// Simple composition
export const Card = ({ children, className }: CardProps) => (
  <div className={cn('card-styles', className)}>
    {children}
  </div>
)

// Usage
<Card>
  <CardHeader />
  <CardContent />
</Card>
```

### Compound Components

```typescript
// Card.tsx
export const Card = ({ children }: Props) => (
  <div className="card">{children}</div>
)

Card.Header = ({ children }: Props) => (
  <header className="card-header">{children}</header>
)

Card.Body = ({ children }: Props) => (
  <div className="card-body">{children}</div>
)

Card.Footer = ({ children }: Props) => (
  <footer className="card-footer">{children}</footer>
)

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Render Props (When Needed)

```typescript
// For complex customization
interface ListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
}

export const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item, index)}</li>
    ))}
  </ul>
)

// Usage
<List 
  items={projects}
  renderItem={(project) => <ProjectCard project={project} />}
/>
```

---

## 🔧 Component Checklist

Before merging any component:

### Structure
- [ ] Under 150 lines
- [ ] Single responsibility
- [ ] Proper file location (ui/, layout/, module/)
- [ ] Added to barrel export (index.ts)

### Types
- [ ] Props interface defined
- [ ] All props typed (no `any`)
- [ ] Optional props marked with `?`
- [ ] Default values for optional props

### Styling
- [ ] Uses design system tokens
- [ ] Mobile-first responsive
- [ ] Proper hover/focus states
- [ ] Uses `cn()` for class merging

### Accessibility
- [ ] Keyboard navigable
- [ ] ARIA labels where needed
- [ ] Focus visible states
- [ ] Color contrast passes

### Animation
- [ ] Uses approved variants
- [ ] Respects `prefers-reduced-motion`
- [ ] Performance optimized (transform/opacity only)

---

## 🚫 Anti-Patterns

### Don't Do This

```typescript
// ❌ Inline styles
<div style={{ marginTop: 20 }}>

// ❌ Complex conditionals in JSX
{condition1 && condition2 && condition3 && <Component />}

// ❌ Index as key for dynamic lists
{items.map((item, index) => <Item key={index} />)}

// ❌ Massive className strings
className="p-4 m-2 bg-red-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-600 active:bg-red-700..."

// ❌ Business logic in components
const Component = () => {
  const result = complexCalculation(data) // Move to hook
}
```

### Do This Instead

```typescript
// ✅ Design tokens via Tailwind
<div className="mt-5">

// ✅ Extract complex conditions
const shouldShow = condition1 && condition2 && condition3
{shouldShow && <Component />}

// ✅ Unique stable keys
{items.map((item) => <Item key={item.id} />)}

// ✅ Split classes or use cn()
const buttonClasses = cn(
  baseStyles,
  variantStyles[variant],
  sizeStyles[size]
)

// ✅ Logic in custom hooks
const { result } = useComplexCalculation(data)
```

---

**Next:** See [HOOKS_GUIDE.md](./HOOKS_GUIDE.md) for custom hook patterns.
