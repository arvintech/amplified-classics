# How to Add the Jane Eyre Book Cover Image

The "Read the Original Text" section currently shows a placeholder book cover. Here's how to add the actual Penguin Classics cover image.

## Step 1: Add the Image to the Public Folder

1. Save your Jane Eyre book cover image (the Penguin Classics edition shown in your screenshot)
2. Place it in the `/public` folder with a clear name like: `jane-eyre-cover.jpg` or `jane-eyre-penguin-classics.jpg`

## Step 2: Update the Component

You have two options:

### Option A: Update All Chapters at Once (Recommended)

Edit `/app/components/ReadOriginalText.tsx` and change the default `bookCoverImage` prop:

```tsx
export function ReadOriginalText({
  bookTitle = 'Jane Eyre',
  author = 'Charlotte Brontë',
  gutenbergUrl = 'https://www.gutenberg.org/ebooks/1260',
  powellsUrl = 'https://www.powells.com/book/jane-eyre-9780141441146',
  amazonUrl = 'https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0141441143?&linkCode=ll1&tag=amplifiedcla-20&linkId=jane-eyre',
  bookCoverImage = '/jane-eyre-cover.jpg'  // 👈 Add this default value
}: ReadOriginalTextProps) {
```

### Option B: Update Individual Chapters

In each chapter file (e.g., `chapter-1/page.tsx`, `chapter-2/page.tsx`), update the component usage:

```tsx
<ReadOriginalText bookCoverImage="/jane-eyre-cover.jpg" />
```

## Step 3: Test It

1. Start your development server: `npm run dev`
2. Navigate to any chapter page
3. Scroll down to the "Read the Original Text" section
4. You should see your book cover image instead of the placeholder

## Image Specifications

For best results, use an image with:
- **Aspect Ratio:** 2:3 (standard book cover ratio)
- **Recommended Size:** 600px × 900px (or higher for retina displays)
- **Format:** JPG or PNG
- **File Size:** Keep under 200KB for fast loading

## Example Book Cover Sources

- **Penguin Classics edition** (as shown in your screenshot)
- Purchase from Amazon or Powell's and photograph the cover
- Use publisher-provided marketing images (check copyright)
- Use public domain cover images from archive.org

## Notes

- The component will automatically handle responsive sizing
- The image will maintain its aspect ratio and fill the 200px × 300px container
- On mobile devices, the cover will be centered above the text

---

**Current Status:** The component is ready and installed in Chapter 1 and Chapter 2. Once you add the image file, it will automatically display!

