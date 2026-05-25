# Static Website CMS Starter

A reusable CMS-powered content management system for static websites using React, Vite, Decap CMS, GitHub, and Netlify.

This project enables non-technical users to manage website content through an admin dashboard without editing code or directly accessing the GitHub repository.

Perfect for:

- Construction company websites
- Agency websites
- Architecture portfolios
- Real estate websites
- Product showcase websites
- Business landing pages
- Portfolio websites

---

# Problem Solved

Traditional static websites require developers to:

- edit source code
- update JSON files
- push changes to GitHub
- redeploy the website

This project removes that workflow.

Instead:

1. Admin logs into CMS dashboard
2. Adds or edits content
3. Changes are automatically committed to GitHub
4. Netlify automatically deploys the updated website

No backend server required.

---

# Features

✅ Static website CMS  
✅ Admin dashboard with Decap CMS  
✅ Add/Edit/Delete website content  
✅ Image upload support  
✅ GitHub automatic commits  
✅ Automatic Netlify deployment  
✅ No custom backend  
✅ Easy integration into existing websites  
✅ Non-technical client friendly  

---

# Tech Stack

- React
- Vite
- Decap CMS
- GitHub
- Netlify

---

# Use Case Example

A construction company has a static React website.

Instead of asking a developer to manually:

- edit project data
- upload images
- push GitHub commits
- redeploy the website

The company admin can:

- open `/admin`
- add a new construction project
- upload project images
- publish changes

The CMS automatically updates GitHub and Netlify deploys the latest version of the website.

---

# How It Works

```text
Admin Dashboard
       ↓
Decap CMS
       ↓
GitHub Repository Update
       ↓
Netlify Auto Deployment
       ↓
Live Website Updated
```

---

# Requirements

- Node.js v18+
- npm v9+

---

# Installation

Clone repository:

```bash
git clone https://github.com/ajmalmd/portfolio-cms.git
```

Move into project directory:

```bash
cd portfolio-cms
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Project Structure

```bash
src/
 ├── components/
 ├── data/
 │    └── projects.json
 ├── pages/
 ├── App.jsx
 └── main.jsx

public/
 └── admin/
      ├── config.yml
      └── index.html
```

---

# Content Management

Website content is stored in:

```bash
src/data/projects.json
```

The CMS updates this file automatically.

You can adapt this structure for:

- Projects
- Services
- Team members
- Testimonials
- Blogs
- Products
- Gallery items

---

# GitHub Setup

## 1. Create GitHub Repository

Create a new repository on GitHub.

---

## 2. Initialize Git

```bash
git init
```

---

## 3. Add Files

```bash
git add .
```

---

## 4. Commit Files

```bash
git commit -m "Initial commit"
```

---

## 5. Connect Remote Repository

```bash
git remote add origin https://github.com/your_username/your_repo.git
```

---

## 6. Push Repository

```bash
git branch -M main
git push -u origin main
```

---

# Netlify Deployment

## 1. Login to Netlify

Sign in using your GitHub account.

---

## 2. Import Repository

Import the GitHub repository into Netlify.

---

## 3. Build Settings

Use:

```bash
Build command:
npm run build
```

```bash
Publish directory:
dist
```

---

## 4. Enable Identity Service

Go to:

```text
Site Configuration → Identity
```

Enable Identity.

---

## 5. Enable Git Gateway

Go to:

```text
Site Configuration → Identity → Git Gateway
```

Enable Git Gateway.

---

## 6. Invite CMS Users

Go to:

```text
Site Configuration → Identity → Invite Users
```

Invite admin users by email.

---

## 7. Access CMS Dashboard

Open:

```text
https://your-domain.netlify.app/admin
```

Login using invited credentials.

---

# CMS Configuration

CMS configuration file:

```bash
public/admin/config.yml
```

You can customize:

- Collections
- Fields
- Upload folders
- Content structure
- Publish workflow

---

# Deployment Workflow

```text
Admin updates content
        ↓
Decap CMS commits changes to GitHub
        ↓
Netlify detects repository update
        ↓
Website rebuilds automatically
        ↓
Updated content goes live
```

---

# Adapting Into Existing Projects

This CMS system can be integrated into existing static websites.

Typical integration flow:

1. Add Decap CMS
2. Configure collections
3. Connect GitHub repository
4. Enable Netlify Identity + Git Gateway
5. Bind CMS data to frontend components

---


# License

MIT License

Feel free to use, modify, and adapt this project for personal or commercial projects.
