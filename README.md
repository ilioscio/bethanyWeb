# Bethany Presbyterian Church — Website Guide

**bethanypresbyterianontario.com**

Welcome! This guide explains how the website works and how to make common updates.
You do not need to be a programmer to make basic changes. If you can edit a Word document,
you can edit this website. Read through this once before making any changes — it will
make everything much less intimidating.

---

## Don't Panic

This website is made of plain text files. There's no database, no login portal,
no server to manage. When you open one of the `.html` files in a text editor,
you'll see the words from the website mixed in with some labels that look like
`<this>`. Those labels are called **HTML tags** — they just tell the browser how
to display the words. You mostly don't need to touch the tags, only the words
between them.

**The golden rule: only change the words between the tags, not the tags themselves.**

For example, this is safe to edit — change the part between the tags:
```
<h2>Welcome to Bethany</h2>
          ↑ change this ↑
```

This is not safe to edit — leave the tag itself alone:
```
<h2 id="welcome-heading" class="section__heading">
 ↑ don't touch any of this ↑
```

If you're ever unsure, make a copy of the file before editing so you can put it back.

---

## What Each File Does

Think of these files like the pages and rooms of the website:

```
http/
│
├── index.html       ← The homepage (the front door)
├── about.html       ← The "About Us" page
├── contact.html     ← The "Contact" page
│
├── css/
│   └── style.css    ← Controls all the colors, fonts, and layout
│                       (you probably won't need to edit this)
│
├── js/
│   └── main.js      ← Makes the mobile menu work
│                       (you won't need to edit this)
│
├── images/
│   ├── emblem-color.svg   ← The church logo (color version, used in the header)
│   └── emblem-white.svg   ← The church logo (white version, used in the footer)
│
└── README.md        ← This guide
```

**The files you'll edit most often are `index.html`, `about.html`, and `contact.html`.**
The `css/` and `js/` folders control how things look and behave — it's best to leave
those alone unless you're confident making design changes.

---

## How to Edit the Website

The easiest way to make changes is directly on GitHub's website — no downloads,
no software, no technical setup required. All you need is a free GitHub account
and a web browser.

### Editing a file on GitHub

1. Go to the repository on GitHub.com and sign in.
2. Click on the file you want to edit (e.g. `index.html`).
3. Click the **pencil icon** (✏️) near the top right of the file — it's labeled
   "Edit this file" when you hover over it.
4. The file will open in a simple text editor right in your browser.
5. Find the text you want to change (use **Ctrl+F** or **Cmd+F** to search).
6. Make your edit — remember, only change the words between the tags, not the
   tags themselves (see the golden rule above).
7. When you're done, scroll to the bottom and click the green **Commit changes**
   button. You can leave the default message or write a short note about what
   you changed (e.g. "Updated service times").
8. The live website will update automatically within about a minute.

### How to preview before committing

GitHub doesn't show a live preview of HTML files, so for small text changes
(updating a time, a phone number, a sentence) it's fine to commit directly and
check the live site a minute later.

For larger changes you're unsure about, you can download the file first, open it
on your computer by double-clicking it (it will open in your browser), check how
it looks, then paste the updated content back into GitHub's editor.

---

## Things That Still Need to Be Filled In

Search for the word `PLACEHOLDER` in any of the HTML files to find things that
are waiting on information from the church. Here's a summary:

| What | Where to find it | What to replace it with |
|---|---|---|
| Founding year | `index.html` — hero section | The year the church was founded |
| Mission statement | `index.html` — welcome section | The approved mission statement |
| Welcome message | `index.html` — welcome section | A paragraph welcoming visitors |
| Pastor's name | `about.html` | The pastor's full name |
| Pastor's biography | `about.html` | A short 2–4 sentence bio |
| Pastor's photo | `about.html` | See "Adding a Photo" below |
| YouTube channel | All pages — footer & social section | The YouTube channel URL |
| Donate link | All pages — "Give Online" buttons | The Tithe.ly or SimpleGive URL |
| Belief card details | `about.html` | Can be edited to match congregation's voice |

---

## How to Change Specific Things

### Changing the service times

Open `index.html`. Search for `10:00 – 11:00 AM` (there are a few instances).
Change the time text. Do the same in `about.html` and `contact.html`.

### Changing the address or phone number

Search for `1712 W Idaho Ave` or `541-889-5752` across all three HTML files
and update each one. There are usually two or three instances per page
(once in the main content, once in the footer).

### Changing the email address

Search for `info@bethanypresbyterianontario.com` in all three files.
Replace every instance with the real email address. Each `href="mailto:..."`
and the visible text both need to be updated. Example:
```html
<a href="mailto:office@bethanyontario.com">office@bethanyontario.com</a>
                  ↑ the actual link          ↑ the visible text
```
Make sure both match.

### Updating the "Give Online" donation link

Search for the Give Online buttons — they look like this:
```html
<a href="#" class="btn btn--give" ...>
```
Replace the `#` with your donation platform URL, for example:
```html
<a href="https://tithe.ly/give?c=YOURCHURCHID" class="btn btn--give" ...>
```
There are a few Give buttons across the pages — search for `btn--give` to find them all.

### Updating the YouTube link

Search for `aria-label="YouTube"` in each file. Replace the `href="#"` on those
links with the YouTube channel URL.

---

## Adding a Photo

To add the pastor's photo (or any photo):

1. Put the photo file in the `images/` folder. Name it something simple with no
   spaces — like `pastor-smith.jpg`.
2. Open `about.html` and find the pastor section. Look for this placeholder block:
   ```html
   Photo placeholder —
   replace with pastor's photo
   ```
3. Replace the entire placeholder `<div>` with a simple image tag:
   ```html
   <img src="./images/pastor-smith.jpg"
        alt="Pastor [Name], pastor of Bethany Presbyterian Church"
        style="border-radius: 16px; width: 100%; max-width: 360px; display: block; margin-inline: auto;">
   ```
4. Update the `alt="..."` text to describe the photo — this is important for
   visually impaired visitors using screen readers.

**Photo tips:**
- JPG files are fine for photos; keep them under 1–2 MB if possible
- A square or portrait (taller than wide) crop looks best in that spot
- Avoid file names with spaces — use hyphens instead (`pastor-john.jpg` not `pastor john.jpg`)

---

## Adding a New Page

Adding a new page (like a History page or a Photo Gallery) takes about 10 minutes:

1. **Make a copy** of `about.html` and rename it — for example, `history.html`.

2. **Update the tab title** near the top of the new file:
   ```html
   <title>History — Bethany Presbyterian Church</title>
   ```

3. **Update the page banner** (the big blue title at the top of the page content):
   ```html
   <h1 class="page-banner__title">Our History</h1>
   <p class="page-banner__subtitle">Where we've been, and where we're going.</p>
   ```

4. **Replace the content sections** with your new content, keeping the
   section structure in place (see "Section Templates" below).

5. **Add the new page to the navigation** in all four HTML files
   (index, about, contact, and your new page). Find the nav list that looks like:
   ```html
   <li><a href="./contact.html" class="nav__link">Contact</a></li>
   ```
   And add your new page after it:
   ```html
   <li><a href="./history.html" class="nav__link">History</a></li>
   ```
   Do this in the main nav AND the footer nav on every page.

### Section templates

Copy and paste these to build your new page content:

**A standard text section (light background):**
```html
<section class="section section--ivory" aria-labelledby="my-section-heading">
  <div class="container">
    <header class="section__header">
      <h2 id="my-section-heading" class="section__heading">Section Title</h2>
      <div class="divider divider--cobalt" aria-hidden="true">
        <span class="divider__cross">✛</span>
      </div>
    </header>
    <p class="section__body" style="margin-inline:auto;">
      Your text goes here.
    </p>
  </div>
</section>
```

**A dark blue section (good for a quote or call to action):**
```html
<section class="section section--cobalt" aria-labelledby="my-section-heading"
         style="text-align:center;">
  <div class="container container--narrow">
    <h2 id="my-section-heading" class="section__heading section__heading--light">
      Section Title
    </h2>
    <p style="color:rgba(255,255,240,0.75); margin-inline:auto;">
      Your text goes here.
    </p>
  </div>
</section>
```

**Two columns side by side (stack on mobile automatically):**
```html
<section class="section section--ivory" aria-labelledby="my-section-heading">
  <div class="container">
    <div class="grid-2">
      <div>
        <h2 id="my-section-heading" class="section__heading">Left Column Title</h2>
        <p class="section__body" style="margin-inline:0;">Left column text.</p>
      </div>
      <div>
        Right column content here.
      </div>
    </div>
  </div>
</section>
```

---

## Putting the Website Online (GitHub Pages)

The website is hosted on **GitHub Pages**, which is free. Any time you commit a
change on GitHub (using the pencil editor described above), the live website
updates automatically within about a minute — there's nothing else to do.

### Connecting the domain name (bethanypresbyterianontario.com)

This only needs to be done once. At your domain registrar (Cloudflare is recommended),
add these DNS records pointing to GitHub's servers:

| Type  | Name | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | yourusername.github.io |

Then in the GitHub repository go to **Settings → Pages**, enter
`bethanypresbyterianontario.com` in the Custom Domain field, and check
**Enforce HTTPS**. DNS changes can take up to 48 hours to fully take effect —
this is normal.

---

## Current Links Reference

Here are the real links already wired into the site:

| What | URL |
|---|---|
| Facebook page | https://www.facebook.com/BethanyPresbyterianChurch/ |
| Facebook livestream | https://www.facebook.com/BethanyPresbyterianChurch/live/ |
| Google Maps | Links to Bethany Presbyterian Church listing |
| Donate | ⚠️ Still a placeholder — needs to be updated |
| YouTube | ⚠️ Still a placeholder — needs to be updated |
| Email | info@bethanypresbyterianontario.com ⚠️ Confirm this is correct |

---

## Color and Font Reference

You probably won't need to change these, but just in case:

**Colors used throughout the site:**

| Name | Color | Where you'll see it |
|---|---|---|
| Cobalt Blue | `#0047AB` | Header, buttons, section backgrounds |
| Ivory | `#FFFFF0` | Main page background |
| Lavender | `#E6E6FA` | Worship times section background |
| Navy | `#0D1F3C` | Footer background |
| Gold | `#C8960C` | "Watch Live" buttons |
| Sage Green | `#3D7A52` | "Give Online" buttons |

**Fonts:** Headings use *Playfair Display* (a classic serif font). Body text uses
*Inter* (a clean, modern font). Both load automatically from Google Fonts — no
installation needed.

---

## Accessibility

This site is built to be usable by everyone, including people with disabilities:

- Works with keyboard navigation (no mouse needed)
- Works with screen readers (software that reads the page aloud for blind users)
- All text scales correctly if a user increases their browser font size
- Animations are disabled for users who prefer reduced motion
- Works in Windows High Contrast mode

When editing content, please keep these in mind:
- Always fill in `alt="..."` on any images you add — describe what's in the photo
- Don't use color alone to convey meaning (e.g. don't say "click the red button")
- Keep link text descriptive — "Learn about our worship services" is better than "click here"

---

## Getting Help

If something breaks or you're not sure how to make a change, the best approach is
to share the file with whoever built the site originally. Even small questions are
fine — it's much easier to help with a small question than to fix something after
an unintended change has been made.

When asking for help, it's useful to describe:
1. Which page and which section you were trying to change
2. What you changed
3. What it looks like now vs. what you expected

---

*Bethany Presbyterian Church · Ontario, Oregon*
*Last updated: 2026*
