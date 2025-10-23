# Deployment Guide - Amplified Classics

This guide will help you deploy Amplified Classics to GitHub and Vercel.

---

## 📦 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if you haven't already
brew install gh

# Authenticate with GitHub
gh auth login

# Create a new repository
gh repo create amplified-classics --public --source=. --remote=origin

# Push your code
git push -u origin main
```

### Option B: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `amplified-classics`
3. Description: "Interactive Digital Literature Platform with AI-powered study guides"
4. Choose **Public** or **Private**
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

Then in your terminal:
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git remote add origin https://github.com/YOUR_USERNAME/amplified-classics.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 2: Deploy to Vercel

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- GitHub repository created (from Step 1)

### Deployment Steps

#### Option A: Using Vercel CLI (Fastest)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Using Vercel Dashboard (Recommended)
1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Git Repository**
   - Select "Import Git Repository"
   - Choose GitHub
   - Authorize Vercel to access your GitHub account
   - Select `amplified-classics` repository

3. **Configure Project**
   ```
   Project Name: amplified-classics
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Development Command: npm run dev
   Node Version: 18.x
   ```

4. **Environment Variables** (Optional)
   - Add any API keys or environment variables
   - Example: `NEXT_PUBLIC_SITE_URL=https://amplifiedclassics.com`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://amplified-classics.vercel.app`

---

## 🌐 Step 3: Configure Custom Domain (Optional)

### Add Custom Domain in Vercel
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `amplifiedclassics.com`
4. Follow DNS configuration instructions

### Recommended Domain Structure
```
amplifiedclassics.com              → Main platform
www.amplifiedclassics.com          → Redirect to main
janeeyre.amplifiedclassics.com     → Jane Eyre book (separate repo)
staging.amplifiedclassics.com      → Staging environment
```

---

## 📊 Step 4: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ **Deploy** on every push to `main` branch
- ✅ **Preview** on every pull request
- ✅ **Build** and run tests
- ✅ **Rollback** if needed

### Branch Configuration
```
main         → Production (amplifiedclassics.com)
staging      → Staging (staging-amplifiedclassics.vercel.app)
develop      → Development previews
```

---

## 🔧 Vercel Configuration Files

### vercel.json
Already created in your project root. This configures:
- Build command
- Output directory
- Framework detection
- Environment variables
- Region (San Francisco)

### .vercelignore
Already created. This excludes:
- Node modules
- Build artifacts
- Local environment files
- Development files

---

## 🎯 Post-Deployment Checklist

- [ ] Verify site loads at Vercel URL
- [ ] Test all chapter pages
- [ ] Check responsive design (mobile/desktop)
- [ ] Verify affiliate links work correctly
- [ ] Test "Read Original Text" component
- [ ] Confirm all 38 chapters load properly
- [ ] Check navigation between chapters
- [ ] Verify parts organization on book page
- [ ] Test external links (Gutenberg, Powell's, Amazon)
- [ ] Check console for any errors

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# If successful locally, check Vercel build logs
# Usually issues with:
# - Missing dependencies
# - Environment variables
# - Node version mismatch
```

### 404 Errors
- Check `next.config.js` for proper routing
- Verify all chapter files exist
- Check file naming conventions

### Slow Performance
- Enable Vercel Analytics
- Check bundle size
- Optimize images
- Use Next.js Image component

---

## 📈 Monitoring & Analytics

### Enable Vercel Analytics
1. Go to Project → Analytics
2. Enable "Web Analytics"
3. Monitor:
   - Page views
   - Loading times
   - User engagement
   - Geographic distribution

### Speed Insights
1. Go to Project → Speed Insights
2. Monitor Core Web Vitals:
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

---

## 🔄 Continuous Deployment Workflow

```bash
# Make changes locally
git add .
git commit -m "Your commit message"
git push origin main

# Vercel automatically:
# 1. Detects push
# 2. Builds project
# 3. Runs checks
# 4. Deploys to production
# 5. Sends notification
```

---

## 🌟 Production URLs

Once deployed, your site will be available at:

**Vercel URL:** `https://amplified-classics.vercel.app`
**Custom Domain:** `https://amplifiedclassics.com` (if configured)

---

## 📞 Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Discord: https://vercel.com/discord
- Email: support@vercel.com

### GitHub Support
- Documentation: https://docs.github.com
- Community: https://github.community
- Support: https://support.github.com

---

## ✅ Current Status

- ✅ **Local Commit:** Successfully committed (658306a0)
- ⏳ **GitHub Push:** Waiting for remote repository setup
- ⏳ **Vercel Deployment:** Ready to deploy once pushed to GitHub

---

## 🚀 Next Steps

1. **Create GitHub repository** (see Step 1)
2. **Push code to GitHub** 
3. **Import to Vercel** (see Step 2)
4. **Configure domain** (optional)
5. **Enable analytics** (recommended)
6. **Celebrate!** 🎉

---

**Need Help?** Feel free to reach out with any deployment questions or issues!

