# Project Context

## Project Overview

This project is my personal portfolio website. Its purpose is to showcase my software development experience, technical projects, skills, and personality in a way that feels distinctive, polished, and professional.

I want the website to have a consistent underlying structure while allowing me to experiment with different visual themes. I may provide color palettes, photographs, Pinterest references, screenshots, textures, or other visual inspiration to guide each theme.

The goal is to create a portfolio that feels personal and visually interesting without sacrificing usability, readability, accessibility, or professionalism.

## Design Direction

My aesthetic is feminine, girly, minimal, and modern, with a professional foundation.

Visual characteristics I gravitate toward:
- Soft, intentional color palettes, including dusty rose, sage green, muted pink, warm neutrals, lavender, and complementary accent colors.
- Clean layouts with good spacing and clear visual hierarchy.
- Subtle feminine details, such as delicate borders, rounded corners, tasteful decorative elements, and thoughtfully chosen icons.
- Playful touches that reflect my personality without overwhelming the content.
- Interesting typography, layered backgrounds, subtle textures, and small visual details that make the website feel custom.
- Smooth, restrained animations and interactions that make the experience feel dynamic.
- A balance between personality and the polished presentation expected of a software developer.

Avoid making the website look generic, overly corporate, childish, excessively decorative, or like a prebuilt template.

These are general preferences, not restrictions. Use the visual references I provide to interpret the aesthetic for each theme.

# About Me

I am a software developer with experience in TypeScript, JavaScript, React, React Native, API integrations, and hardware-connected software.

My portfolio should communicate that I am technically capable, creative, curious, and detail-oriented.

I want the website to reflect both sides of my personality: my interest in software engineering and my appreciation for design, creativity, and personal expression.

The website should appeal to recruiters and hiring managers while still feeling like my own space on the internet.

# Rules

## 1. Preserve the Existing Website

Before making changes, inspect the repository and understand how the website currently works.

- Preserve the existing page structure, section order, navigation, content, and overall layout unless I explicitly request otherwise.
- Maintain existing functionality, routes, interactions, and responsive behavior.
- Do not rebuild the website from scratch to implement a new theme.
- Do not remove content, features, or components simply because they do not fit a proposed design.
- Prefer modifying shared styles, design tokens, and reusable components over rewriting individual pages.
- Reuse existing dependencies and components wherever practical.
- Avoid unrelated refactoring or changes to application logic.
- If a requested visual change requires a structural change, explain why before implementing it.

A theme should change the visual presentation of my existing website, not replace its underlying identity or functionality.

## 2. Theme Development Workflow

Whenever I request a new theme, follow this process.

### Step 1: Inspect the Current Implementation

Review the existing codebase, including:
- The framework and styling approach.
- The page and component structure.
- Global styles and design tokens.
- Typography, spacing, colors, borders, and shadows.
- Existing animations and interactive elements.
- Responsive layouts and accessibility considerations.

Identify which parts of the current design can be reused and which should change.

Do not assume how the website is implemented without inspecting the code.

### Step 2: Analyze My Visual References

I may provide one or more of the following:
- Color palettes or individual hex codes.
- Photographs or mood boards.
- Screenshots of websites or UI components.
- Pinterest inspiration.
- Textures, patterns, illustrations, or typography references.
- Descriptions of a particular mood or aesthetic.

Analyze the references for:
- Primary, secondary, and accent colors.
- Background and surface colors.
- Typography and font pairings.
- Contrast and readability.
- Shapes, borders, textures, and decorative details.
- Spacing and visual hierarchy.
- Animation and interaction styles.
- Overall mood and visual identity.

When I provide photographs, use them as inspiration for the theme's palette, atmosphere, and visual language. Do not automatically place the photographs on the website unless I request that.

If the references are ambiguous, ask questions before proceeding.

### Step 3: Propose the Theme

Before implementing the theme, present a concise design proposal that includes:

1. **Theme concept:** A short name and description of the visual direction.
2. **Color palette:** Suggested hex codes with a defined purpose for each color.
3. **Typography:** Recommended fonts or font pairings.
4. **UI treatment:** How cards, buttons, navigation, backgrounds, borders, and other components will look.
5. **Decorative details:** Subtle visual elements that give the theme personality.
6. **Animations:** Suggested transitions or interactions.
7. **Preservation plan:** Confirmation of what will remain unchanged.

Explain how the proposed theme will balance femininity, personality, and professionalism.

Ask me to approve or adjust the direction before implementing it.

Do not ask questions that have already been answered by my references or previous decisions.

### Step 4: Implement the Theme

Once I approve the direction:

- Implement the theme using the existing architecture.
- Centralize colors and other shared design values in the project's existing design-token system or an appropriate equivalent.
- Reuse shared components to maintain consistency.
- Keep styling separate from application logic wherever practical.
- Use semantic HTML and accessible color contrast.
- Ensure the theme works across desktop, tablet, and mobile.
- Preserve existing functionality and content.
- Keep animations smooth, subtle, and purposeful.
- Avoid introducing dependencies unless they provide a clear benefit.

Do not change the entire layout when changes to colors, typography, surfaces, and decorative elements would achieve the desired result.

### Step 5: Review and Refine

After implementing a theme:

- Run the available build, lint, and test commands when practical.
- Check for broken layouts, inconsistent spacing, unreadable text, and poor contrast.
- Review responsive behavior and existing interactions.
- Check that the original website's functionality remains intact.
- Identify any issues that require a browser preview or my visual review.

If screenshots or a browser preview are available, use them to evaluate the actual result rather than relying exclusively on the source code.

Summarize what changed, what stayed the same, and any remaining issues.

## 3. Design System and Theme Consistency

Treat the website as one cohesive design system.

Where appropriate, define reusable tokens for:

- Primary, secondary, and accent colors.
- Page backgrounds and component surfaces.
- Text and muted text colors.
- Borders and dividers.
- Buttons, links, and interactive states.
- Typography and font weights.
- Spacing and sizing.
- Border radii.
- Shadows and visual effects.
- Animation duration and easing.

Use semantic token names rather than scattering hardcoded colors throughout components.

For example, components should reference tokens such as `--color-background`, `--color-surface`, `--color-accent`, and `--color-text` instead of depending on specific pink or green hex codes.

Adapt the token implementation to the existing project conventions.

A new theme should be easy to refine or replace without manually updating every component.

## 4. Make the Website More Dynamic

I want the website to feel engaging and thoughtfully designed rather than static, but I do not want unnecessary complexity.

Explore opportunities for:
- Subtle hover states on buttons, links, and project cards.
- Smooth transitions between interactive states.
- Gentle background details or decorative accents.
- Small motion effects that reinforce visual hierarchy.
- More expressive but consistent project cards.
- Thoughtful icon treatments and microinteractions.
- Subtle variations in section backgrounds or surfaces.

Keep animations purposeful, restrained, and performant.

Avoid excessive parallax, constant motion, distracting effects, and animations that interfere with reading or navigation.

Respect reduced-motion preferences.

Do not introduce new interactive features or restructure the page unless they are part of the approved design direction.

## 5. Professionalism and Accessibility

The website must remain suitable for a professional software developer's portfolio.

- Maintain readable typography and clear content hierarchy.
- Ensure text and interactive elements have sufficient contrast.
- Keep navigation intuitive and predictable.
- Ensure buttons, links, and other controls remain usable.
- Preserve keyboard accessibility and visible focus states.
- Maintain responsive behavior at different viewport sizes.
- Use decorative imagery and effects selectively.
- Avoid visual choices that make the site feel cluttered or diminish the technical content.
- Do not sacrifice usability for aesthetics.

The website can be feminine and playful without compromising credibility.

## 6. Coding Standards

- Follow existing project conventions.
- Prefer TypeScript and the project's existing component patterns when applicable.
- Write modular, reusable, maintainable code.
- Avoid unnecessary dependencies, duplicated styles, and overly complicated abstractions.
- Preserve existing types, props, and application behavior.
- Keep changes focused on the requested theme.
- Do not overwrite existing work or delete files without understanding their purpose.
- Explain assumptions when requirements are unclear.
- Never claim that a build, test, or visual check succeeded unless it was actually performed.

# Project Structure

Before making changes, inspect the actual repository and document its existing structure here.

Identify the purpose of important directories and files, including:

- Application entry points and routes.
- Main pages and sections.
- Reusable UI components.
- Global styles and theme configuration.
- Assets, icons, fonts, and images.
- Configuration files and dependencies.
- Tests and development scripts.

Do not invent directory names or assume the project uses a particular framework or styling library.

Update this section when the project structure changes significantly.

## Current Structure

Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + shadcn/ui, built as a static export (`output: "export"` in `client/next.config.ts`) and deployed to Netlify from `client/out` (`netlify.toml`). Scripts: `npm run dev`, `npm run build`; lint with `npx next lint`. There are no tests.

- `client/src/site.config.ts`: the live theme and layout. The only file to change to switch what visitors see.
- `client/src/theme/themes.ts`: registry of theme ids and layout ids, used for type checking and the preview bar.
- `client/src/content/site.ts`: all site text, links, projects, jobs, hobbies and photo choices. Both layouts read from here.
- `client/src/content/journal/*.md`: journal (seasonal blog) posts with front matter. Files starting with `_` are skipped; `_template.md` shows the format.
- `client/src/lib/posts.ts`: reads and validates journal posts at build time (gray-matter + marked).
- `client/src/app/layout.tsx`: fonts (Archivo display, Karla body), sets `data-theme` on `<html>`, and wraps the app in the dev-only preview bar.
- `client/src/app/page.tsx`: home route; maps each layout id to its home component.
- `client/src/app/journal/`: `/journal` list and `/journal/[slug]` post pages.
- `client/src/app/globals.css`: palette tokens (one `[data-theme]` block per theme), shadcn token mapping, shared utility classes (`.display`, `.caps`, `.dots`, `.link-underline`, `.journal-prose`) and reduced-motion rules.
- `client/tailwind.config.ts`: exposes the palette tokens (`cream`, `paper`, `petal`, `blush`, `sky`, `lime`, `ember`, `matcha`, `cocoa`) as Tailwind colors.
- `client/src/layouts/panels/`: the original layout (split color panels, project carousel). `PanelsHome.tsx` assembles it.
- `client/src/layouts/editorial/`: single-column journal-style layout. `EditorialHome.tsx` assembles it; its `Header` and `Footer` are reused by the journal pages.
- `client/src/components/`: shared pieces (`icons.tsx` drawings, `Polaroid`, `ContactLinks`, `preview/` dev switcher); `components/ui/` holds shadcn primitives.
- `client/src/assets/`: photos (descriptively named), favicon and resume PDF. Photos are resized to at most 1800px because image optimization is off in static export.

Adding a theme: add a `[data-theme="id"]` block in `globals.css` and an entry in `themes.ts`. Adding a layout: add a folder in `src/layouts/`, an entry in `themes.ts`, and an entry in `app/page.tsx`.

# Final Guiding Principle

Build a portfolio that feels like me: feminine, creative, polished, and technically credible.

Treat my existing website as the foundation. Use the visual references I provide to create fresh themes that make the experience more expressive and dynamic while preserving its structure, content, functionality, and professional purpose.

Prioritize intentional design over decoration, consistency over one-off styling, and maintainable code over quick visual hacks.