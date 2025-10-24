# Cursor Chat Workflow Guide
## Quick Reference for Managing AI Chat Sessions

---

## 🎯 Starting a New Chat Session

### 1. Title Your Session Immediately
**First message should be:**
```
This chat is for: [Book Name] Chapter [X] - [Specific Task]

Example:
"This chat is for: Jane Eyre Chapter 13 - Writing character development and modern adaptations"
```

This helps Cursor title the session properly for easy retrieval later.

### 2. Provide Context Upfront
```
I'm working on [Book] Chapter [X].
Previous work: [what's already done]
Current goal: [specific task]
Reference: Following template in [file path]
```

---

## 📚 Accessing Previous Chats

### Method 1: Chat History Panel
1. Open chat sidebar (if not open)
2. Look for **History icon** (clock symbol) or **dropdown arrow** at top
3. Click to see list of previous conversations
4. Search by keywords or scroll through

### Method 2: Command Palette
```
Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
Type: "Chat: Show History" or "Chat"
Select from list
```

### Method 3: Keyboard Shortcut
```
Cmd+Shift+J (Mac) or Ctrl+Shift+J (Windows)
Opens chat with history dropdown
```

---

## 💾 Preserving Important Chat Decisions

### Immediately After Productive Session:

1. **Update CHAT_SESSION_LOG.md**
   - Date and topic
   - Files modified
   - Key decisions
   - Effective prompts that worked

2. **Commit Your Work**
   ```bash
   git add .
   git commit -m "Chapter X: [what you accomplished]"
   git push
   ```

3. **Pin Important Chats (if Cursor supports)**
   - Some versions let you favorite/pin chats
   - Check your version's features

---

## 🔄 My Recommended Workflow

### For Each Chapter You're Working On:

#### Session 1: Initial Setup
```
Chat Title: "Jane Eyre Ch 13 - Initial Structure"

Tasks:
- Create chapter file
- Set up basic structure
- Add chapter summary
- Configure metadata
```

#### Session 2: Content Development
```
Chat Title: "Jane Eyre Ch 13 - Content Writing"

Tasks:
- Character development
- Key quotes and analysis
- Intelligence Amplified sections
- Modern adaptations
```

#### Session 3: Polish & Review
```
Chat Title: "Jane Eyre Ch 13 - Polish & Debug"

Tasks:
- Fix linting errors
- Test display
- Refine language
- Final review
```

### After Each Session:
1. ✅ Copy key prompts to CHAT_SESSION_LOG.md
2. ✅ Note what worked well
3. ✅ Note what to improve next time
4. ✅ Commit changes with descriptive message

---

## 🎨 Effective Prompting Templates

### For Starting Chapter Work
```
I'm creating Chapter [X] for [Book]. This chapter covers [summary].

Please help me:
1. Structure the chapter data following app/books/_template-book/chapters/chapter-template.ts
2. Focus on [specific themes]
3. Create modern adaptations relevant to [target audience]

Reference example: app/books/jane-eyre/chapters/chapter-1.ts
```

### For Debugging Issues
```
I'm having an issue with [specific problem].

Current behavior: [what's happening]
Expected behavior: [what should happen]
Files involved: [list files]
Error message: [if any]

I've already tried: [what you attempted]
```

### For Content Development
```
Help me develop [specific section] for Chapter [X].

Context: [what happens in chapter]
Theme: [main theme to analyze]
Audience: [who will read this]
Length: [how detailed]

Following the style in: [reference chapter]
```

### For Review & Polish
```
Review this [section] for:
1. Clarity and readability
2. Consistency with [book/chapter] style
3. Educational value for students
4. Modern relevance

Here's the content: [paste content]
```

---

## 🗂️ Chat Organization Strategy

### Naming Convention:
```
[Book] Ch[X] - [Task] - [Date]

Examples:
- Jane Eyre Ch13 - Structure - Oct 24
- Jane Eyre Ch13 - Content - Oct 24
- Jane Eyre Ch13 - Polish - Oct 25
```

### Keep Chats Focused:
- ✅ One chapter per chat (or split by task if complex)
- ✅ One book at a time
- ✅ Clear task definition
- ❌ Don't mix books/chapters in same chat
- ❌ Don't let chats grow too long (start fresh when shifting focus)

---

## 📝 During Your Chat Session

### Keep Track As You Go:

**In a separate note (or comments):**
```
Session: Jane Eyre Ch 13 - Oct 24, 2025
Started: 2:00 PM

Completed:
✅ Created chapter-13.ts
✅ Added chapter summary (4 paragraphs)
✅ Developed character arcs for Jane & Rochester
✅ Created 5 modern parallels

In Progress:
🔄 Intelligence Amplified analysis section

Next:
- Discussion questions
- For Educators section
- Test display
```

### Mark Your Place:
If you need to pause mid-session:
```
"Marking my place: We just completed [X]. 
Next step is [Y].
Current file: [path]
Line: [approximate location]"
```

When you return, start with:
```
"Continuing from [Book] Ch[X]. 
We were working on [Y] in [file].
Ready to proceed with [next step]."
```

---

## 🔍 Finding Old Decisions

### When You Need to Remember "How Did I Do That?"

1. **Check CHAT_SESSION_LOG.md**
   - Search for book/chapter
   - Look for task description
   - Find the prompts that worked

2. **Search Git History**
   ```bash
   git log --all --grep="Chapter 13"
   git show [commit-hash]
   ```

3. **Check Chapter Comments**
   - Look at similar completed chapters
   - They have your actual implementation

4. **Search Cursor Chat History**
   - Use keywords from task
   - Filter by date range

---

## 💡 Pro Tips

### 1. Create Reusable Prompt Sets
Keep a file of your best prompts:
```
CHAT_SESSION_LOG.md → "Reusable Prompts Library"
```

### 2. Export Important Chats (Manual)
Since Cursor doesn't auto-export:
- Copy key exchanges to CHAT_SESSION_LOG.md
- Screenshot complex code solutions
- Document decisions immediately

### 3. Use Chat for Learning, Docs for Reference
- **Chat:** "How do I structure this?"
- **Docs:** "Here's how to structure this"
- Convert chat insights into documentation

### 4. Version Your Prompts
When you improve a prompt:
```
v1: "Help me with character development"
v2: "Write character development for [name] showing [arc] using [evidence]"
v3: "Write character development for [name] in Chapter [X], showing [arc] 
     through [evidence], connecting to theme of [theme], 
     following the style in [reference]"
```

### 5. Time-Box Your Sessions
- Focused 2-hour sessions work better than 8-hour marathons
- Take breaks
- Start fresh chat after breaks for clarity

---

## ⚠️ Common Pitfalls to Avoid

1. **Don't Rely Only on Chat Memory**
   - Chats can be lost
   - Hard to search later
   - Always document key decisions

2. **Don't Let Chats Run Too Long**
   - After ~50 exchanges, context gets fuzzy
   - Start fresh chat, referencing previous work

3. **Don't Forget to Commit**
   - Git is your real backup
   - Commit after each successful session
   - Descriptive commit messages

4. **Don't Mix Contexts**
   - Keep book work separate from debugging
   - Keep chapters separate from setup
   - Focused chats = better results

5. **Don't Skip the Log**
   - Future you will thank present you
   - 2 minutes to log = hours saved later

---

## 🚀 Your Daily Workflow

### Morning (Starting Work):
```
1. Open project in Cursor
2. Check CHAT_SESSION_LOG.md for "Next Steps"
3. Start new chat with clear title
4. Reference previous work if continuing
5. Set session goal
```

### During Work:
```
1. Keep chat focused on one task
2. Note good prompts as you go
3. Test changes frequently
4. Commit working code
```

### End of Session:
```
1. Update CHAT_SESSION_LOG.md
2. Commit all changes with clear message
3. Note next steps for tomorrow
4. Push to GitHub
```

### Weekly:
```
1. Review CHAT_SESSION_LOG.md
2. Clean up effective prompts
3. Update documentation with insights
4. Archive completed work notes
```

---

## 📊 Tracking Your Progress

### In JOURNAL.md (High Level):
- Books completed
- Chapters done
- Major milestones

### In CHAT_SESSION_LOG.md (Detailed):
- Specific sessions
- Technical decisions
- Effective approaches

### In Git Commits (Code Level):
- Actual changes
- File modifications
- Point-in-time snapshots

### All Three Together:
**Complete history of your work!** 🎉

---

## 🆘 Troubleshooting

### "I Can't Find My Chat History"
1. Check Cursor version (Help → About)
2. Update to latest version
3. Check preferences: Settings → Chat
4. Look for User Data folder: `~/Library/Application Support/Cursor/`

### "My Chat Was Deleted"
1. Check if still in history (sometimes just scrolled off)
2. Check git commits for what was done
3. Check CHAT_SESSION_LOG.md for decisions made
4. Worst case: You have the code changes as reference

### "Chat Context Is Getting Confused"
1. Start fresh chat
2. Begin with clear context: "Continuing work on [X]"
3. Reference files explicitly
4. Keep sessions focused and shorter

---

## 🎓 Learning Curve

### Week 1: Getting Started
- Focus: Learning to title chats and provide context
- Goal: Build muscle memory for workflow

### Week 2-3: Building Habits  
- Focus: Consistently updating CHAT_SESSION_LOG.md
- Goal: Create reliable reference system

### Week 4+: Optimization
- Focus: Building prompt library, recognizing patterns
- Goal: Faster, more effective sessions

**Remember:** It takes ~3 weeks to build a habit. Stick with it!

---

## ✅ Quick Checklist (Print This!)

### Starting a Session:
- [ ] Clear chat title
- [ ] Context provided
- [ ] Goal defined
- [ ] References noted

### During Session:
- [ ] Staying focused
- [ ] Testing as I go
- [ ] Noting good prompts

### Ending Session:
- [ ] Update CHAT_SESSION_LOG.md
- [ ] Commit with clear message
- [ ] Note next steps
- [ ] Push to GitHub

---

**The key insight:** Chat sessions are ephemeral, but their value can be preserved through systematic documentation and version control.

**Your three-layer backup:**
1. Cursor chat history (short-term)
2. CHAT_SESSION_LOG.md (medium-term reference)
3. Git commits (permanent record)

---

**Last Updated:** October 24, 2025  
**Purpose:** Teach effective chat session management for book development  
**Target:** Content creators working on Amplified Classics

