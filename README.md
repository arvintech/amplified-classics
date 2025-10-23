# Amplified Classics

A sophisticated digital literature platform that brings classic novels to life with interactive study guides, Intelligence Amplified analysis, and modern adaptations.

## 🎯 Project Overview

Amplified Classics transforms traditional literature into an engaging, educational experience by combining:
- **Interactive Study Guides** - Chapter-by-chapter analysis and summaries
- **Intelligence Amplified Analysis** - Intelligent insights and character analysis
- **Modern Adaptations** - Contemporary parallels and real-world connections
- **Educational Resources** - Discussion topics, classroom activities, and assessment tools

## 📚 Current Library

### Jane Eyre (Complete)
- **Author**: Charlotte Brontë
- **Year**: 1847
- **Chapters**: 38
- **Status**: ✅ Complete with full educational content
- **URL**: http://localhost:3000
- **Features**: Intelligence Amplified Analysis, Modern Adaptations, Study Guides, Character Profiles

### Pride and Prejudice (In Development)
- **Author**: Jane Austen
- **Year**: 1813
- **Chapters**: 61
- **Status**: 🚧 In Development
- **URL**: http://localhost:3001
- **Features**: Interactive Study Guide, Social Commentary, Character Analysis, Modern Relevance

## 🏗️ Project Structure

```
amplified-classics/                 # Main platform (Port 3002)
├── app/
│   ├── components/
│   │   └── Header.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                    # Main splash page
├── package.json
└── README.md

jane-erye-digital-book/             # Jane Eyre project (Port 3000)
├── app/
│   ├── api/ai/route.ts
│   ├── chapters/[slug]/
│   ├── components/
│   ├── table-of-contents/
│   └── ...
├── content/chapters/               # 38 MDX chapters
└── package.json

pride-and-prejudice-digital-book/   # Pride and Prejudice project (Port 3001)
├── app/
│   ├── components/
│   ├── table-of-contents/
│   └── ...
├── content/chapters/               # 61 MDX chapters
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Amplified Classics (Main Platform)**
   ```bash
   cd amplified-classics
   npm install
   npm run dev
   # Runs on http://localhost:3002
   ```

2. **Jane Eyre**
   ```bash
   cd jane-erye-digital-book
   npm install
   npm run dev
   # Runs on http://localhost:3000
   ```

3. **Pride and Prejudice**
   ```bash
   cd pride-and-prejudice-digital-book
   npm install
   npm run dev
   # Runs on http://localhost:3001
   ```

## 🎨 Design System

### Color Palette
- **Primary**: #2C3E50 (Dark Blue-Gray)
- **Secondary**: #E8B86D (Warm Gold)
- **Accent**: #8B4513 (Saddle Brown)
- **Background**: #FAF9F7 (Warm White)
- **Text**: #2C2C2C (Dark Gray)

### Typography
- **Serif**: Playfair Display (Headings)
- **Body**: Georgia (Content)

### Components
- **Cards**: Elevated with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Clean, minimal design
- **Responsive**: Mobile-first approach

## 🔧 Features

### Educational Content
- **Chapter Summaries** - Comprehensive plot overviews
- **Modern Adaptations** - Contemporary parallels and connections
- **Discussion Topics** - Analytical questions for deeper understanding
- **Character Profiles** - Detailed character analysis
- **AI Analysis Prompts** - One-click Intelligence Amplified insights
- **Classroom Activities** - Interactive learning exercises

### Technical Features
- **Next.js 14** - Modern React framework
- **TypeScript** - Type-safe development
- **MDX** - Rich content format
- **Responsive Design** - Mobile and desktop optimized
- **AI Integration** - Anthropic Claude API
- **Static Generation** - Fast loading and SEO optimized

## 📖 Usage

### For Students
1. Visit the main platform at http://localhost:3002
2. Choose a book from the library
3. Navigate through chapters with interactive study guides
4. Use Intelligence Amplified analysis tools for deeper understanding
5. Explore modern adaptations and contemporary connections

### For Teachers
1. Access comprehensive educational resources
2. Use discussion topics for classroom engagement
3. Leverage AI prompts for lesson planning
4. Utilize classroom activities for interactive learning
5. Track student progress through chapter navigation

### For Literature Enthusiasts
1. Experience classic literature in a new format
2. Discover modern parallels and contemporary relevance
3. Engage with Intelligence Amplified analysis and insights
4. Explore character development and thematic analysis
5. Connect with educational communities

## 🔮 Future Enhancements

- **Additional Books** - Expand library with more classics
- **User Accounts** - Progress tracking and bookmarks
- **Community Features** - Discussion forums and study groups
- **Mobile App** - Native iOS and Android applications
- **Offline Support** - Downloadable content for offline reading
- **Advanced AI** - More sophisticated analysis and recommendations

## 🤝 Contributing

This project is designed to be educational and accessible. Contributions are welcome for:
- Additional classic literature
- Educational content improvements
- UI/UX enhancements
- Technical optimizations
- Documentation improvements

## 📄 License

This project is for educational purposes. All classic literature content is in the public domain.

---

**Amplified Classics** - Bringing classic literature into the digital age with interactive study guides, Intelligence Amplified analysis, and modern adaptations.
