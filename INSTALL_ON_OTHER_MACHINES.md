# 🖥️ Install Workflow on Your Other 2 Machines

## 🚀 One-Command Installation

On each of your other machines, run this **ONE COMMAND**:

```bash
cd ~/Documents/GitHub/amplified-classics && bash install-workflow.sh
```

That's it! Everything installs automatically.

---

## 📋 Step-by-Step Instructions

### **Machine B and Machine C Setup:**

#### **Step 1: Clone Repository (if needed)**

If you haven't cloned the repository yet:

```bash
cd ~/Documents/GitHub
git clone https://github.com/arvintech/amplified-classics.git
cd amplified-classics
npm install
```

If already cloned, just update it:

```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main
npm install
```

#### **Step 2: Run the Installer**

```bash
cd ~/Documents/GitHub/amplified-classics
bash install-workflow.sh
```

**The installer will:**
- ✅ Create `~/sync-amplified.sh`
- ✅ Create `~/quick-commit.sh`
- ✅ Create `~/resolve-conflict.sh`
- ✅ Make all scripts executable
- ✅ Install Git aliases
- ✅ Test the installation
- ✅ Show you a success message

#### **Step 3: Test It**

```bash
~/sync-amplified.sh status
```

You should see:
```
📊 Repository Status

🖥️  Machine: [Your Machine Name]
📁 Location: ~/Documents/GitHub/amplified-classics
🌿 Branch: main
✅ Working directory clean
✅ Fully synced with remote
```

---

## 🎯 What Gets Installed

| File | Location | Purpose |
|------|----------|---------|
| `sync-amplified.sh` | `~/` | Main workflow tool |
| `quick-commit.sh` | `~/` | Quick commit helper |
| `resolve-conflict.sh` | `~/` | Conflict checker |
| Git aliases | Global config | Shortcuts (git sync, etc.) |

---

## ✅ Verification Checklist

After running the installer on each machine:

- [ ] Scripts exist in home directory: `ls -la ~/*.sh`
- [ ] Scripts are executable: `ls -l ~/sync-amplified.sh` (should show `x`)
- [ ] Status command works: `~/sync-amplified.sh status`
- [ ] Git aliases work: `git recent`
- [ ] Can start dev server: `npm run dev`

---

## 🔄 Ready to Use Across All Machines!

Once installed on all 3 machines, your workflow is:

### **Any Machine:**
```bash
# Start work
~/sync-amplified.sh start
npm run dev

# Work on chapters...

# End work
~/sync-amplified.sh end
```

### **Switch to Another Machine:**
```bash
# Automatically synced!
~/sync-amplified.sh start
# Continue exactly where you left off
```

---

## 🆘 Troubleshooting

### **Problem: "install-workflow.sh: No such file"**

Solution:
```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main
ls -la install-workflow.sh  # Verify it exists
```

### **Problem: "Permission denied"**

Solution:
```bash
chmod +x install-workflow.sh
bash install-workflow.sh
```

### **Problem: Scripts don't work after install**

Solution:
```bash
# Check if they were created
ls -la ~/*.sh

# Make them executable
chmod +x ~/sync-amplified.sh ~/quick-commit.sh ~/resolve-conflict.sh

# Test
~/sync-amplified.sh status
```

---

## 📖 Documentation Available

After pulling the latest code, you'll have:

- **MULTI_MACHINE_WORKFLOW.md** - Complete cheat sheet
- **WORKFLOW_VISUAL.md** - Visual workflow diagrams  
- **INSTALLATION_COMPLETE.md** - Installation summary

---

## 🎉 Quick Copy-Paste for Each Machine

**Complete setup in 3 commands:**

```bash
# 1. Navigate to project (or clone if needed)
cd ~/Documents/GitHub/amplified-classics

# 2. Pull latest (includes installer)
git pull origin main

# 3. Run installer
bash install-workflow.sh
```

Done! ✅

---

## 💡 Pro Tip

After installing on all machines, test the sync by:

1. **Machine A:** Make a small change, commit, push
2. **Machine B:** Run `~/sync-amplified.sh start` - should pull the change
3. **Machine C:** Run `~/sync-amplified.sh start` - should pull the change

If all 3 see the same files, you're fully set up! 🚀

---

**Questions?** Check `MULTI_MACHINE_WORKFLOW.md` for the complete guide.

