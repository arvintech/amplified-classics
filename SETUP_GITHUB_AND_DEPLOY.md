# 🚀 Quick Setup: GitHub & Vercel Deployment

Your code is ready to deploy! Follow these simple steps to get your site live.

---

## ✅ Current Status

- ✅ **2 commits ready** to push:
  1. `658306a0` - "Read the Original Text" feature + Chapter organization
  2. `270a4af2` - Vercel deployment configuration
- ✅ **Vercel config** created (`vercel.json`)
- ✅ **Deployment guide** ready
- ⏳ **Waiting:** GitHub repository setup

---

## 🔐 Step 1: Authenticate with GitHub (One-Time Setup)

Run this command in your terminal:

```bash
gh auth login
```

Follow the prompts:
1. Choose: **GitHub.com**
2. Choose: **HTTPS**
3. Authenticate with: **Login with a web browser** (recommended)
4. Copy the code shown
5. Press Enter to open browser
6. Paste code and authorize

**Or** if you prefer SSH:
```bash
gh auth login
# Choose: GitHub.com → SSH → Generate new SSH key → Login with browser
```

---

## 📦 Step 2: Create GitHub Repository & Push

### Option A: Automatic (Recommended - Fast!)

Run this single command:

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics && \
gh repo create amplified-classics \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Interactive Digital Literature Platform with AI-powered study guides for classic novels"
```

This will:
- ✅ Create GitHub repository
- ✅ Add it as remote
- ✅ Push all your commits
- ✅ Give you the repository URL

**Done! Skip to Step 3.**

---

### Option B: Manual Setup

If you prefer more control:

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics

# Create repository
gh repo create amplified-classics --public --description "Interactive Digital Literature Platform"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/amplified-classics.git

# Push code
git push -u origin main
```

---

## 🚀 Step 3: Deploy to Vercel

### Option A: Quick Deploy with CLI

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
vercel --prod
```

### Option B: Deploy via Dashboard (Recommended)

1. **Go to:** https://vercel.com/new
2. **Click:** "Import Git Repository"
3. **Connect:** Your GitHub account
4. **Select:** `amplified-classics` repository
5. **Click:** "Import"
6. **Configure:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```
7. **Click:** "Deploy"
8. **Wait:** 2-3 minutes
9. **Done!** You'll get: `https://amplified-classics.vercel.app`

---

## 🎯 What You'll Get

### Automatic Features
- ✅ **Auto-deploy** on every push to main
- ✅ **Preview deployments** for pull requests
- ✅ **HTTPS** automatically configured
- ✅ **CDN** for fast global delivery
- ✅ **Analytics** (enable in dashboard)
- ✅ **Zero downtime** deployments

### Your Live URLs
```
Production:  https://amplified-classics.vercel.app
             (or your custom domain)

Preview:     https://amplified-classics-git-[branch].vercel.app
```

---

## 🌐 Step 4: Add Custom Domain (Optional)

If you have a domain like `amplifiedclassics.com`:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Add domain: `amplifiedclassics.com`
4. Add domain: `www.amplifiedclassics.com`
5. Follow DNS instructions (add A/CNAME records)
6. Wait for DNS propagation (5-60 minutes)

**Recommended Setup:**
```
amplifiedclassics.com          → Main platform
www.amplifiedclassics.com      → Redirects to main
```

---

## ✨ Quick Start Commands (Copy-Paste Ready)

### Complete Setup (All Steps)
```bash
# Step 1: Authenticate with GitHub
gh auth login

# Step 2: Create repo and push
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics && \
gh repo create amplified-classics --public --source=. --remote=origin --push

# Step 3: Deploy to Vercel
npm install -g vercel
vercel login
vercel --prod
```

### Just Push (If repo already exists)
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git push origin main
```

---

## 🔍 Verify Deployment

After deployment, check:

- [ ] Site loads at Vercel URL
- [ ] Homepage displays book library
- [ ] Jane Eyre page shows 5 parts with chapters
- [ ] Chapter 1 loads with content
- [ ] "Read Original Text" section displays
- [ ] Affiliate links work (Gutenberg, Powell's, Amazon)
- [ ] Mobile responsive design works
- [ ] Navigation between chapters works

---

## 📊 Monitor Your Site

### Vercel Dashboard
- **Overview:** https://vercel.com/dashboard
- **Analytics:** Project → Analytics tab
- **Deployments:** See all deployments and logs
- **Speed Insights:** Monitor Core Web Vitals

### GitHub Repository
- **Code:** View your repository
- **Commits:** See commit history
- **Branches:** Manage branches
- **Settings:** Configure webhooks, secrets

---

## 🐛 Troubleshooting

### "gh: command not found"
```bash
# Install GitHub CLI
brew install gh
```

### "Not authenticated with GitHub"
```bash
# Login to GitHub
gh auth login
```

### "Repository already exists"
```bash
# Just add remote manually
git remote add origin https://github.com/YOUR_USERNAME/amplified-classics.git
git push -u origin main
```

### Build fails on Vercel
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Check Node.js version (should be 18+)
4. Verify all dependencies are in `package.json`

---

## 📈 Next Steps After Deployment

1. ✅ **Test the live site** thoroughly
2. ✅ **Enable Vercel Analytics** in dashboard
3. ✅ **Add book cover image** (see `HOW_TO_ADD_BOOK_COVER.md`)
4. ✅ **Complete remaining chapters** (3-38)
5. ✅ **Set up custom domain** (optional)
6. ✅ **Share with users** and get feedback!

---

## 🎉 Congratulations!

Once deployed, your Amplified Classics platform will be live and accessible to everyone!

**Questions?** Check the full `DEPLOYMENT_GUIDE.md` for detailed documentation.

---

**Ready to deploy?** Start with Step 1 above! 🚀

