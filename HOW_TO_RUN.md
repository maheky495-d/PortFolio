# Complete Guide: How to Run the Portfolio Project

## Prerequisites
- ✅ Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ npm (comes with Node.js)

## Step-by-Step Instructions

### Step 1: Open Terminal/Command Prompt
- **Windows**: Press `Win + X` and select "Windows PowerShell" or "Terminal"
- Navigate to the project directory:
  ```powershell
  cd C:\Users\Hardik_Hack\Downloads\ImpactfulPortfolio\ImpactfulPortfolio
  ```

### Step 2: Install Dependencies
Install all required packages:
```powershell
npm install
```
**Expected output**: You should see packages being installed. This may take 1-2 minutes.

### Step 3: Start the Development Server

#### Option A: Using PowerShell (Windows - Recommended)
```powershell
$env:NODE_ENV="development"; npm run dev
```

#### Option B: Using Git Bash or WSL
```bash
npm run dev
```

#### Option C: Using Command Prompt (cmd)
```cmd
set NODE_ENV=development && npm run dev
```

### Step 4: Wait for Server to Start
You should see output like:
```
serving on port 5000
```

### Step 5: Open in Browser
1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Navigate to: **http://localhost:5000**
3. You should see your portfolio website!

## What You'll See

- **Home Page** (`/`): Your complete portfolio with:
  - Hero section with profile image
  - About Me section
  - Skills & Technologies
  - Projects showcase
  - Professional Experience timeline
  - Contact form
  - Footer

- **Contacts Page** (`/contacts`): Admin page to view contact form submissions
  - Access by clicking the "Portfolio" logo in the footer
  - Or directly: http://localhost:5000/contacts

## Important Notes

### Port Configuration
- Default port: **5000**
- To use a different port, set the `PORT` environment variable:
  ```powershell
  $env:PORT="3000"; $env:NODE_ENV="development"; npm run dev
  ```

### Data Storage
- Contact form submissions are stored **in-memory**
- Data will be lost when you restart the server
- This is fine for development/testing

### Stopping the Server
- Press `Ctrl + C` in the terminal to stop the server

## Troubleshooting

### Issue: "NODE_ENV is not recognized"
**Solution**: Use Option A (PowerShell) or Option C (Command Prompt) from Step 3

### Issue: Port 5000 is already in use
**Solution**: 
1. Close the application using port 5000, OR
2. Use a different port (see Port Configuration above)

### Issue: "Cannot find module" errors
**Solution**: 
```powershell
npm install
```

### Issue: Server won't start
**Solution**: 
1. Make sure you're in the project directory
2. Check that all dependencies are installed: `npm install`
3. Check Node.js version: `node --version` (should be v18+)

## Additional Commands

### Build for Production
```powershell
npm run build
```
Creates optimized production build in `dist/` folder

### Start Production Server
```powershell
npm start
```
Runs the production build (requires `npm run build` first)

### Type Check
```powershell
npm run check
```
Runs TypeScript type checking

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | Type check TypeScript |

## Need Help?

If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Make sure you're in the project directory
3. Try deleting `node_modules` and running `npm install` again
4. Check the terminal output for specific error messages

---

**Happy Coding! 🚀**


