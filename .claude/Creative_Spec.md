ROLE: Senior Creative Developer & Accessibility Expert. OBJECTIVE: Build a "High-End" Immersive Website with a Dual-State Architecture (Immersive vs. Safe Mode). STACK: Next.js (App Router), Tailwind CSS, Framer Motion, Lenis, Spline.

1. CORE ARCHITECTURE: The "Dual-State" Engine
We are not building two websites. We are building ONE website with two rendering states managed by a global React Context (AccessibilityContext).

State A: "Immersive Mode" (Default)
Scroll: Smooth (Lenis) with inertia (lerp: 0.1).

Visuals: Glassmorphism (backdrop-blur), WebGL/3D enabled (Suspense loaded), Parallax active.

Motion: Staggered reveals, text masking, scroll-triggered animations.

State B: "Safe Mode" (Accessibility / Performance)
Trigger: Activated via User Toggle (Header) OR OS Preference (prefers-reduced-motion).

Scroll: Native CSS scroll (No Lenis).

Visuals: High Contrast (Opaque backgrounds), No 3D (Fallback Images), No Blur.

Motion: Instant transitions (duration: 0), No parallax.

2. TECH STACK & RULES
Styling (Tailwind)
Colors:

Use bg-[#050505] for main background.

Use text-[#EDEDED] for primary text (never pure white).

Define accent-primary (Cyan/Brand) and accent-secondary (Warm/Life).

Glassmorphism: Create a utility class .glass -> bg-white/5 backdrop-blur-lg border border-white/10.

Safe Mode Override: Use the data-safe-mode="true" attribute on <body> to override CSS variables (e.g., set --blur to 0px).

Animation (Framer Motion)
Always use AnimatePresence for mounting/unmounting components.

Motion Hook: Create a custom hook useMotionConfig() that returns { duration: 0 } if mode === 'safe', otherwise returns standard durations.

3D Integration (Spline)
Wrap all <Spline /> components in a <Suspense> boundary with a skeleton loader.

Crucial: If mode === 'safe', do NOT render the <Spline /> component. Render a high-quality static <img /> instead to save GPU/Bandwidth.

3. COMPONENT BLUEPRINTS
A. The "Smart" Navbar
Position: Fixed top.

Content: Logo, Links, Accessibility Toggle.

Behavior:

Immersive: Glassmorphism background.

Safe: Solid Black background (bg-[#050505]).

B. Hero Section
Layout: Full viewport height (min-h-screen).

Z-Index: Content z-10, 3D Scene z-0.

Immersive: Interactive 3D object following mouse. Title uses "Word Reveal" animation.

Safe: Static Hero Image. Title is static visible.

C. Feature Switcher (The Hybrid Engine)
A toggle UI that switches the view between "Business/Tech" and "Lifestyle/Human".

Use framer-motion layout animations (layoutId) for the switch pill.

D. Bento Grid
CSS Grid layout.

Cards: Dark cards with subtle borders.

Hover: In Immersive mode, use a "Spotlight" effect (radial gradient following mouse). In Safe mode, simple border color change.

4. IMPLEMENTATION ROADMAP (Step-by-Step)
PHASE 1: Foundation

Setup Next.js + Tailwind.

Install dependencies: framer-motion, @studio-freight/react-lenis, @splinetool/react-spline, lucide-react, clsx, tailwind-merge.

Critical: Build the AccessibilityProvider.tsx context. It must handle prefers-reduced-motion detection automatically.

PHASE 2: Layout & Navigation

Create RootLayout with the Provider.

Build the Navbar with the specific "Eye/A11y" toggle button.

Implement Lenis wrapper component that conditionally renders based on context.

PHASE 3: The "Wow" Factor

Build Hero3D component (using a placeholder Spline URL).

Implement the Fallback Image logic for Safe Mode within the Hero.

Create the BentoGrid with Mouse-tracking spotlight effects.

PHASE 4: Refinement

Add "Grain" texture overlay (opacity 5%) to remove the "plastic" feel (Immersive mode only).

Audit Contrast Ratios for text.

5. DEVELOPER COMMANDS
When writing code: Always prioritize readability and strict typing.

When animating: Use spring physics for UI interactions (buttons), and ease-out for page transitions.

Security: Ensure no dangerouslySetInnerHTML is used unless absolutely necessary for sanitized content.