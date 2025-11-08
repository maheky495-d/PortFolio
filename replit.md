# Portfolio Website

A modern, professional portfolio website built with React, Express, and TailwindCSS featuring a stunning gradient design and smooth animations.

## Overview

This is a full-stack portfolio application that showcases your professional experience, projects, skills, and allows visitors to contact you through a working contact form.

## Features

### Implemented
- **Hero Section**: Eye-catching gradient background with profile image, animated waving hand, and CTA buttons
- **About Me**: Bio section with profile image and info cards for Languages, Education, and Projects
- **Skills & Technologies**: Visual grid displaying tech stack with icons (React, Node, Express, MongoDB, etc.)
- **Projects Showcase**: Grid of project cards with thumbnails, tech tags, and links
- **Professional Experience**: Timeline of work experience and achievements
- **Working Contact Form**: Functional form that saves submissions to backend storage
- **Contact Admin Page**: View all contact submissions at `/contacts`
- **Responsive Design**: Mobile-friendly layouts across all sections
- **Smooth Scrolling**: Navigation with smooth scroll to sections

### Storage
- In-memory storage for contact form submissions
- Data persists during session but resets on server restart
- Can be upgraded to PostgreSQL database if needed

## Project Structure

### Frontend (`client/`)
- **Pages**:
  - `/` - Main portfolio home page
  - `/contacts` - Admin page to view contact submissions
- **Components**:
  - `Navbar` - Fixed navigation with smooth scroll
  - `Hero` - Gradient hero section with profile
  - `About` - About me section with info cards
  - `Skills` - Tech stack icon grid
  - `Projects` - Project showcase cards
  - `Experience` - Professional timeline
  - `Contact` - Contact form with API integration
  - `Footer` - Footer with social links

### Backend (`server/`)
- **API Routes**:
  - `POST /api/contacts` - Submit contact form
  - `GET /api/contacts` - Retrieve all submissions
- **Storage**: In-memory storage (MemStorage)

### Shared (`shared/`)
- Type-safe schemas for Contact and User models
- Zod validation schemas

## Customization Guide

### What You Need to Update

1. **Personal Information**:
   - Update `Hero.tsx` - Change "Your Name" to your actual name
   - Update `Footer.tsx` - Change email and social media links
   - Update `About.tsx` - Replace bio text and info card details

2. **Images** (Replace generated placeholders):
   - Profile photos in `Hero.tsx` and `About.tsx`
   - Project thumbnails in `Projects.tsx`
   - Technology icons (optional - currently using react-icons)
   - Experience/role icons in `Experience.tsx`

3. **Content**:
   - `Projects.tsx` - Update project titles, descriptions, tags, and links
   - `Experience.tsx` - Update work history, roles, and responsibilities
   - `Skills.tsx` - Customize your tech stack
   - `About.tsx` - Personalize bio and achievements

4. **Resume**:
   - Add your resume PDF to `client/public/` folder
   - Update the resume button link in `Hero.tsx`

5. **Links**:
   - GitHub URL in `Footer.tsx`
   - LinkedIn URL in `Footer.tsx`
   - Project repository/demo links in `Projects.tsx`

## Development

```bash
npm run dev
```

Runs on http://localhost:5000

## Design System

- **Colors**: Purple (#8B5CF6) to Pink (#EC4899) gradient theme
- **Typography**: DM Sans / Inter font family
- **Components**: Shadcn UI + TailwindCSS
- **Animations**: Smooth transitions and hover effects

## Tech Stack

- **Frontend**: React, TailwindCSS, Shadcn UI, TanStack Query
- **Backend**: Express.js, TypeScript
- **Storage**: In-memory (upgradeable to PostgreSQL)
- **Build**: Vite
- **Icons**: Lucide React + React Icons

## Notes

- Contact submissions are stored in memory and will be lost on server restart
- To persist data permanently, upgrade to PostgreSQL database
- Click the logo in the footer to access the contacts admin page
- All sections use smooth scroll for better UX
