# Chat Session Quick Reference Card
## Print This & Keep It Handy! 📌

---

## ⚡ Starting Every Session

**First message:**
```
This chat is for: [Book] Chapter [X] - [Task]
```

**Provide context:**
```
Working on: [Book] Ch [X]
Completed: [what's done]
Goal: [specific task]
Reference: [template/example file]
```

---

## 📍 Accessing Previous Chats

1. **Click history icon** in chat panel (clock symbol)
2. **Or: `Cmd+Shift+P`** → "Chat: Show History"
3. **Or: `Cmd+Shift+J`** to open chat with history

---

## ✅ End Every Session (2 min)

- [ ] Update `CHAT_SESSION_LOG.md` with:
  - What you accomplished
  - Files modified  
  - Effective prompts
  - Next steps

- [ ] Commit your work:
  ```bash
  git add .
  git commit -m "Chapter X: [what you did]"
  git push
  ```

---

## 🎯 Effective Prompt Formula

```
Help me [specific task] for Chapter [X].

Context: [what happens in chapter]
Theme: [main theme]
Style: Following [reference file]

Please [specific request]
```

**Bad:** "Help with this chapter"  
**Good:** "Write 5 modern parallels for the ballroom scene connecting to 2025 social media dynamics, following the style in jane-eyre/chapter-1.ts"

---

## 📚 Common Tasks & Prompts

### Creating New Chapter
```
I'm creating Chapter [X] for [Book]. 
This chapter covers [summary].

Help me structure it following:
app/books/_template-book/chapters/chapter-template.ts

Reference example:
app/books/jane-eyre/chapters/chapter-1.ts
```

### Debugging Display Issues
```
Chapter [X] isn't displaying properly.

Expected: [should show]
Actual: [currently shows]
Files: [list relevant files]

I've checked:
- [ ] File exists in /chapters/
- [ ] Imported in [chapter]/page.tsx
- [ ] Added to chapters array
- [ ] No linting errors
```

### Writing Analysis Section
```
Help me write Intelligence Amplified analysis 
for Chapter [X].

Chapter summary: [brief summary]
Main themes: [list themes]
Target: 3-5 insights that go beyond surface reading

Style: Like jane-eyre/chapter-1.ts
```

---

## ⚠️ Don't Forget!

❌ **Don't** let chats run too long (>50 exchanges)  
✅ **Do** start fresh chat when shifting focus

❌ **Don't** mix books/chapters in one chat  
✅ **Do** keep each chat focused on one task

❌ **Don't** rely only on chat history  
✅ **Do** document decisions in CHAT_SESSION_LOG.md

❌ **Don't** skip git commits  
✅ **Do** commit after each successful session

---

## 🔍 When You Can't Find Something

1. Check **CHAT_SESSION_LOG.md**
2. Search **git commits**: `git log --grep="Chapter X"`
3. Look at **similar completed chapter**
4. Search **Cursor chat history** by keywords

---

## 🆘 Quick Fixes

**Chat history missing?**
→ Update Cursor to latest version

**Chat context confused?**
→ Start fresh chat with clear context

**Lost track of where you were?**
→ Check CHAT_SESSION_LOG.md "Next Steps"

**Can't remember how you did something?**
→ Look at completed similar chapter

---

## 📊 Your Three-Layer Backup

1. **Cursor Chat History** (short-term, temporary)
2. **CHAT_SESSION_LOG.md** (medium-term reference)  
3. **Git Commits** (permanent record)

**All three together = complete history!**

---

## 💾 The 2-Minute End-of-Session Habit

```
1. Open CHAT_SESSION_LOG.md
2. Add entry:
   - Date + topic
   - Files changed
   - Key decisions
   - Best prompts
   - Next steps
3. Save
4. Git commit & push
```

**This 2-minute habit saves hours later!**

---

## 🎯 Daily Workflow

**Morning:**
1. Check CHAT_SESSION_LOG.md → "Next Steps"
2. Start new chat with clear title
3. Provide context

**During Work:**
1. Stay focused on one task
2. Test frequently
3. Note good prompts

**End of Session:**
1. Update CHAT_SESSION_LOG.md (2 min)
2. Commit & push
3. Note tomorrow's starting point

---

## 🏆 Success Metrics

**You're doing it right when:**
- ✅ You can find any previous decision quickly
- ✅ You can resume work without re-explaining context
- ✅ Your prompts are getting more effective
- ✅ You have clear commit history
- ✅ Future-you thanks past-you for good notes

---

## 📞 Full Details In:

- **CURSOR_CHAT_WORKFLOW.md** - Complete guide
- **CHAT_SESSION_LOG.md** - Your session log
- **DOCUMENTATION_INDEX.md** - All docs

---

**Remember:** Chat sessions are temporary.  
**But their value can be permanent** through good habits!

**Print this card. Keep it visible. Build the habit.** 🚀

---

**Created:** October 24, 2025  
**Purpose:** Quick reference for effective chat session management  
**Time to implement:** ~5 minutes per session

