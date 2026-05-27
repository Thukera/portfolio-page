# 📸 How to Add Your Profile Photo

## Quick Steps

### Option 1: From the Attachment Image

1. **Right-click** on the profile photo you attached to the chat
2. **Save Image As...**
3. Navigate to: `C:\Users\nitro\Workspace\Projetos\Estudos\EmConstrução\em-construcao\public\`
4. Name it exactly: `arthur-profile.jpg`
5. Click **Save**
6. **Refresh your browser** (http://localhost:3005)

### Option 2: Copy from Your CV

1. Open your CV PDF
2. Right-click on your profile photo
3. **Copy Image**
4. Open an image editor (Paint, Photoshop, etc.)
5. Paste and crop to square (400x400px recommended)
6. Save as: `C:\Users\nitro\Workspace\Projetos\Estudos\EmConstrução\em-construcao\public\arthur-profile.jpg`
7. **Refresh your browser**

### Option 3: Quick PowerShell Command

If you have the photo saved somewhere, you can copy it via terminal:

```powershell
# Example: Copy from Downloads folder
Copy-Item "C:\Users\nitro\Downloads\my-photo.jpg" "C:\Users\nitro\Workspace\Projetos\Estudos\EmConstrução\em-construcao\public\arthur-profile.jpg"
```

---

## ✅ Photo Specifications

**Your current photo from attachment is perfect!**

- Professional black shirt ✅
- Glasses ✅
- Neutral background ✅
- Good lighting ✅
- Professional smile ✅

**Recommended specs**:
- Format: JPG (preferred) or PNG
- Dimensions: 400x400px (or larger, will auto-resize)
- Quality: High resolution
- Aspect ratio: 1:1 (square)

---

## 🎨 How It Will Look

Your photo will appear:

```
┌─────────────────────────────┐
│                             │
│     ╭─────────────╮         │
│     │   Profile   │         │  ← Circular frame with gradient glow
│     │   Photo     │         │  ← Animated border (blue/purple)
│     ╰─────────────╯         │
│                             │
│   Arthur Hardman Borges     │  ← Your name
│                             │
│   Senior Software &         │  ← New tagline
│   Solutions Engineer        │
│                             │
└─────────────────────────────┘
```

**Effects**:
- Circular crop (auto-applied)
- Gradient glow (blue → purple)
- Subtle pulse animation
- Border with accent colors
- Responsive sizing

---

## 🔍 Verify Installation

After adding the photo:

1. Open: http://localhost:3005
2. **You should see**:
   - Your photo in a circular frame
   - Animated gradient glow around it
   - Blue border

3. **If you see "AH" instead**:
   - Photo file not found
   - Check file name: must be exactly `arthur-profile.jpg`
   - Check location: must be in `public/` folder
   - Check file extension: `.jpg` not `.jpeg`

---

## 🐛 Troubleshooting

**Photo not showing?**

✅ **Check file name** (case-sensitive):
```
✅ arthur-profile.jpg  ← Correct
❌ Arthur-Profile.jpg  ← Wrong (capital letters)
❌ arthur-profile.jpeg ← Wrong (must be .jpg)
❌ profile.jpg         ← Wrong (missing arthur-)
```

✅ **Check file location**:
```
✅ public/arthur-profile.jpg              ← Correct
❌ public/images/arthur-profile.jpg       ← Wrong (no images folder)
❌ src/arthur-profile.jpg                 ← Wrong (not in public)
```

✅ **Check file exists**:
```powershell
# Run this in terminal to verify:
Test-Path "public/arthur-profile.jpg"

# Should return: True
```

✅ **Hard refresh browser**:
- Windows: `Ctrl + Shift + R`
- Or clear cache and reload

---

## 📁 Expected File Structure

```
em-construcao/
├── public/
│   ├── arthur-profile.jpg  ← Your photo goes here
│   ├── cv/
│   │   ├── Arthur_Hardman_Borges_CV_EN.pdf
│   │   └── Arthur_Hardman_Borges_CV_PT.pdf
│   └── projects/
│       ├── finances-app/
│       ├── music-store/
│       └── digital-agenda/
├── src/
└── ...
```

---

## ✨ Result Preview

**Before** (no photo):
- Shows "AH" initials in gradient circle
- Still looks professional

**After** (with photo):
- Shows your actual photo
- Circular frame with glow
- More personal and engaging
- Professional first impression

---

**Ready?** Save your photo as `public/arthur-profile.jpg` and refresh! 🚀
