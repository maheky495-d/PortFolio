# Portfolio Design Guidelines - Reference-Based Replication

## Design Approach
**Reference:** Direct replication of ashil31s portfolio with modern, gradient-driven aesthetic. This is a personal portfolio showcasing full-stack development skills with smooth animations and professional presentation.

**Key Principles:**
- Bold gradient backgrounds with vibrant purple-to-pink transitions
- Clean, spacious layouts with generous padding
- Smooth scroll animations and micro-interactions
- Professional yet personable tone
- Image-heavy sections for visual impact

## Typography System

**Font Stack:**
- Primary: Inter or DM Sans (Google Fonts)
- Headings: 700-800 weight
- Body: 400-500 weight

**Hierarchy:**
- Hero Title: text-5xl to text-7xl, font-bold
- Section Headings: text-4xl to text-5xl, font-bold
- Subsection Titles: text-2xl to text-3xl, font-semibold
- Card Titles: text-xl, font-semibold
- Body Text: text-base to text-lg
- Labels/Tags: text-sm, font-medium

## Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container: max-w-6xl mx-auto px-6
- Card spacing: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Grid System:**
- About Me cards: grid-cols-1 md:grid-cols-3
- Tech icons: grid-cols-3 md:grid-cols-6 lg:grid-cols-9
- Project cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Experience timeline: Single column with left-aligned content

## Component Library

### 1. Hero Section
- Full viewport height (min-h-screen)
- Gradient background spanning full width
- Centered content with profile image (w-64 to w-80, rounded-full, border-8)
- Name with inline waving hand emoji/icon (animated)
- Large job title below name
- Tagline/description text
- Two CTA buttons side-by-side: "Contact me" (primary) + "My Resume" (secondary with download icon)
- Buttons: px-8 py-4, rounded-full, with arrow/icon on right

### 2. About Me Section
- Two-column layout (image left, content right on desktop)
- Large profile image (rounded-3xl, max-w-md)
- Quote-style bio text with quotation marks
- Three info cards in row below:
  - Icon at top (w-12 h-12)
  - Bold heading
  - Description text
  - Subtle border, rounded-xl, p-6

### 3. Tools & Technologies Grid
- Section header: "Tools and Technologies I use :"
- Grid of technology logos (9 items visible per row on desktop)
- Logo images: grayscale or full-color, w-20 to w-24
- Hover: scale-110 transition
- Even spacing with gap-8

### 4. Development Showcase
- Section title: "Development Showcase" + subtitle
- Project cards in 3-column grid (desktop)
- Each card:
  - Thumbnail image (aspect-video, rounded-t-xl)
  - Title below image
  - Tech tags as small pills (flex-wrap)
  - "Look now →" link with arrow
  - Hover: subtle shadow and scale effect
  - Border and rounded-xl

### 5. Professional Experience Timeline
- Section title: "Professional Experiences" + subtitle
- Vertical timeline with alternating left-right content (desktop)
- Each experience:
  - Icon/logo (w-16 h-16, rounded-full)
  - Job title (large, bold)
  - Date range (smaller text)
  - "Responsibilities" label
  - Bullet points with checkmarks or bullets
  - Connecting line between experiences

### 6. Contact Section
- Section title: "Connect with me" + subtitle
- Quote/encouragement text
- Contact form:
  - Name input (full width)
  - Email input (full width)
  - Message textarea (h-40)
  - Submit button with arrow icon (rounded-full, px-8 py-4)
  - All inputs: rounded-lg, border, p-4
  - Vertical spacing: space-y-4

### 7. Footer
- Logo at top
- Email with icon
- Copyright text
- Social media icons (GitHub, LinkedIn) in horizontal row
- Icons: w-8 h-8, grayscale with hover effect
- Center-aligned content
- py-12 padding

## Navigation
- Fixed header with logo on left
- Navigation links on right (About, Projects, Experience, Contact)
- Smooth scroll to sections
- Hamburger menu for mobile
- Background blur on scroll

## Animations & Interactions
- Fade-in on scroll for sections
- Waving hand animation (rotate) on hero
- Hover scale (1.05-1.1) on cards and buttons
- Smooth scroll behavior (scroll-smooth)
- Button hover: slight brightness increase
- Keep animations subtle and performant

## Images Required (Manual Tasks)

**Hero Section:**
1. Profile image - circular headshot (high quality, 600x600px minimum)
2. Waving hand icon (64x64px PNG with transparency)
3. Gradient background image or CSS gradient

**About Me:**
4. Secondary profile/user image (different pose, 800x800px)
5. Code icon (64x64px)
6. Education icon (64x64px)
7. Projects icon (64x64px)

**Tools & Technologies:**
8-16. Nine technology logos (React, Node, Express, MongoDB, RabbitMQ, WebSocket, GSAP, VS Code, GitHub) - 200x200px each

**Project Thumbnails:**
17-22. Six project screenshots/mockups (1920x1080px or aspect-ratio 16:9)

**Experience:**
23-25. Three company/role icons (128x128px)

**Footer:**
26. Logo image (transparent background, 200x80px)
27-28. Social media icons (GitHub, LinkedIn) - 64x64px each

**Additional Icons:**
- Right arrow icons for buttons (white and colored versions)
- Download icon for resume button
- Email icon for footer

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts)

## Content Manual Tasks
- Replace all text content with your information
- Update project descriptions, titles, and links
- Modify experience details and dates
- Change email and social media links
- Update resume PDF link
- Customize bio and introduction text