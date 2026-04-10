# Bethany Presbyterian Church — Website Guide

**bethanypresbyterianontario.com**

Welcome! This guide explains how the website works and how to make common updates.
You do not need to be a programmer to make basic changes. If you can edit a Word document,
you can edit this website. Read through this once before making any changes, it will
make everything much less intimidating.

---

## Don't Panic

This website is made of plain text files. There's no database, no login portal,
no server to manage. When you open one of the `.html` files in a text editor,
you'll see the words from the website mixed in with some labels that look like
`<this>`. Those labels are called **HTML tags** they just tell the browser how
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
bethanyWeb/
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
│   ├── emblem-color.svg      ← The church logo (color version, used in the header)
│   ├── emblem-white.svg      ← The church logo (white version, used in the footer)
│   ├── bethany_entrance.jpg  ← Photo of the church entrance (hero background on the homepage)
│   └── reverend_linda.jpg    ← Photo of Reverend Linda Toth (used on the About page)
│
└── README.md        ← This guide
```

**The files you'll edit most often are `index.html`, `about.html`, and `contact.html`.**
The `css/` and `js/` folders control how things look and behave, it's best to leave
those alone unless you're confident making design changes.

---

## How to Edit the Website

The easiest way to make changes is directly on GitHub's website, no downloads,
no software, no technical setup required. All you need is a free GitHub account
and a web browser.

### Editing a file on GitHub

1. Go to the repository on GitHub.com and sign in.
2. Click on the file you want to edit (e.g. `index.html`).
3. Click the **pencil icon** (✏️) near the top right of the file — it's labeled
   "Edit this file" when you hover over it.
4. The file will open in a simple text editor right in your browser.
5. Find the text you want to change (use **Ctrl+F** or **Cmd+F** to search).
6. Make your edit: remember, only change the words between the tags, not the
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
| Pastor's biography | `about.html` — pastor section | A short 2–4 sentence bio |
| ~~YouTube channel~~ | ~~All pages — footer & social section~~ | ✅ Done |
| Donate link | All pages — "Give Online" buttons | The Tithe.ly or SimpleGive URL |
| Belief card details | `about.html` — "What We Believe" | Edit to match the congregation's voice |

✅ **Already done:** Pastor's name (Reverend Linda Toth), pastor's photo, church entrance photo, Facebook links, Google Maps embed.

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

Search for the Give Online buttons, they look like this:
```html
<a href="#" class="btn btn--give" ...>
```
Replace the `#` with your donation platform URL, for example:
```html
<a href="https://tithe.ly/give?c=YOURCHURCHID" class="btn btn--give" ...>
```
There are a few Give buttons across the pages, search for `btn--give` to find them all.

### Updating the YouTube link

Search for `aria-label="YouTube"` in each file. Replace the `href="#"` on those
links with the YouTube channel URL.

---

## Updating Photos

The site currently has two photos:
- **`images/reverend_linda.jpg`** — Reverend Linda Toth's portrait, shown on the About page
- **`images/bethany_entrance.jpg`** — The church entrance, used as the background of the homepage hero

### Updating the pastor's photo

If the reverend's photo ever needs to be replaced (new headshot, new pastor, etc.):

1. Prepare the new photo file. Name it simply with no spaces —
   `reverend_linda.jpg` to replace the existing one, or a new name like
   `reverend_smith.jpg` for a new pastor.
2. Upload it to the `images/` folder on GitHub:
   - Go to the `images/` folder in the repository
   - Click **Add file → Upload files**
   - Drag your photo in and click **Commit changes**
3. If you used the **same filename** (`reverend_linda.jpg`), you're done —
   the website will automatically show the new photo.
4. If you used a **new filename**, open `about.html` in the GitHub editor,
   search for `reverend_linda.jpg`, and replace it with your new filename.
   Also update the `alt="..."` text if the pastor has changed:
   ```html
   <img src="./images/reverend_smith.jpg"
        alt="Reverend Smith, pastor of Bethany Presbyterian Church"
        ...>
   ```

### Updating the church entrance photo

If you want to replace the homepage background photo:

1. Upload the new photo to the `images/` folder (see step 2 above).
2. Open `css/style.css` in the GitHub editor and search for `bethany_entrance.jpg`.
3. Replace it with your new filename. The line looks like:
   ```
   url('../images/bethany_entrance.jpg');
   ```

### General photo tips

- JPG files are ideal for photos; try to keep them under 2 MB for fast loading
- For the pastor portrait, a square or portrait (taller than wide) crop looks best
- For the homepage background, a wide landscape photo works best
- Never use spaces in filenames — use underscores or hyphens instead
  (`new_photo.jpg` not `new photo.jpg`)
- Always update the `alt="..."` description when swapping a photo — it's what
  screen readers announce to blind visitors

---

## Embedding a YouTube Video

You can add a YouTube video to any page — for example, a recent sermon, a welcome video,
or a recorded worship service. The video will scale automatically to fit any screen size
and meets the accessibility standards built into this site.

### Step 1 — Get the embed link from YouTube

1. Go to the video on YouTube.
2. Click **Share** (below the video).
3. Click **Embed** in the share panel.
4. YouTube will show a block of HTML code. You only need the **`src`** web address from
   inside that code. It looks like this:
   ```
   https://www.youtube.com/embed/XXXXXXXXXXX
   ```
   Copy just that address — you don't need the rest of the code YouTube gives you.

> **Privacy tip:** You can replace `youtube.com` with `youtube-nocookie.com` in that
> address. This version of the embed does not set tracking cookies on your visitors
> until they actually press play. Example:
> ```
> https://www.youtube-nocookie.com/embed/XXXXXXXXXXX
> ```

### Step 2 — Paste this snippet into the page

Find the section of the page where you want the video to appear and paste this block
of HTML in, replacing `YOUR-VIDEO-ID-HERE` with the ID from the address you copied
(the part after `/embed/`), and updating the `title` to describe the video:

```html
<div class="container" style="padding-block: var(--space-8);">
  <div class="video-container">
    <iframe
      src="https://www.youtube-nocookie.com/embed/YOUR-VIDEO-ID-HERE"
      title="Bethany Presbyterian Church — Sunday Sermon, April 6 2026"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</div>
```

Change the `title="..."` text to briefly describe what the video is. This is what
screen readers announce to blind visitors before they decide whether to play it —
so "Bethany Presbyterian Church — Sunday Sermon, April 6 2026" is much better than
"YouTube video".

### Placing the video inside a full section (with a heading)

If you want a heading above the video as well, wrap it in a full section like this:

```html
<section class="section section--ivory" aria-labelledby="sermon-heading">
  <div class="container">
    <header class="section__header">
      <h2 id="sermon-heading" class="section__heading">Recent Sermon</h2>
      <div class="divider divider--cobalt" aria-hidden="true">
        <span class="divider__cross">✛</span>
      </div>
    </header>
    <div class="video-container" style="max-width: 800px; margin-inline: auto;">
      <iframe
        src="https://www.youtube-nocookie.com/embed/YOUR-VIDEO-ID-HERE"
        title="Bethany Presbyterian Church — Sunday Sermon, April 6 2026"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  </div>
</section>
```

The `max-width: 800px; margin-inline: auto;` keeps the video from stretching too wide
on large screens — feel free to adjust the number or remove it entirely.

### Portrait videos (filmed on a phone or streamed on Facebook Live)

If a video was recorded in portrait orientation (tall and narrow — common when filmed
on a phone or broadcast via Facebook Live), embedding it in the standard 16:9 box will
look wrong: the video will be squished into the centre with large black bars on either
side.

For these videos, add `video-container--portrait` to the class, like this:

```html
<div class="video-container video-container--portrait">
  <iframe
    src="https://www.youtube-nocookie.com/embed/YOUR-VIDEO-ID-HERE"
    title="Bethany Presbyterian Church — Sunday Worship, April 6 2026"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>
```

This gives the player a tall (9:16) shape that matches the video, centred on the page
at a comfortable width. It resizes correctly on mobile automatically.

**How to tell if a video is portrait:** open the video on YouTube — if it has black bars
above and below the player (letterbox bars), it is landscape and you should use the
standard `video-container`. If it has black bars to the left and right (pillarbox bars),
it is portrait and you should use `video-container video-container--portrait`.

**Working example:** The file `easter2026.html` in this project is a real example of a
portrait video embed using this technique. Open it to see how the layout looks, or read
the code in that file to see it in context.

> **Note:** YouTube embeds will not play when you open an HTML file directly from your
> computer by double-clicking it. You will see a player error. This is normal — YouTube
> requires a proper web address (`http://...`) to allow embeds. The video will work
> correctly once the site is live on GitHub Pages.

### Things to keep in mind

- **Always fill in the `title` attribute.** It is required for accessibility.
  Screen reader users hear this text before deciding whether to interact with the video.
- **`loading="lazy"`** means the video only loads when the visitor scrolls near it,
  which keeps the page fast.
- Videos resize automatically on all screen sizes — you don't need to do anything
  special for phones.
- You can add as many videos to a page as you like; just repeat the snippet with
  a different `src` and `title` each time.

---

## Adding a New Page

Adding a new page (like a History page or a Photo Gallery) takes about 10 minutes:

1. **Make a copy** of `about.html` and rename it, for example, `history.html`.

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
updates automatically within about a minute, there's nothing else to do.

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

Then in the GitHub repository go to **Settings -> Pages**, enter
`bethanypresbyterianontario.com` in the Custom Domain field, and check
**Enforce HTTPS**. DNS changes can take up to 48 hours to fully take effect,
this is normal.

---

## Current Links Reference

Here are the real links already wired into the site:

| What | URL |
|---|---|
| Facebook page | https://www.facebook.com/BethanyPresbyterianChurch/ |
| Facebook livestream | https://www.facebook.com/BethanyPresbyterianChurch/live/ |
| Google Maps | Links to Bethany Presbyterian Church listing |
| Donate | !! Still a placeholder - needs to be updated |
| YouTube | https://www.youtube.com/@BethanyPresbyterian-Ont |
| Email | info@bethanypresbyterianontario.com !! Still a placeholder - needs to be updated |

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
*Inter* (a clean, modern font). Both load automatically from Google Fonts

---

## Accessibility

This site is built to be usable by everyone, including people with disabilities:

- Works with keyboard navigation (no mouse needed)
- Works with screen readers (software that reads the page aloud for blind users)
- All text scales correctly if a user increases their browser font size
- Animations are disabled for users who prefer reduced motion
- Works in Windows High Contrast mode

When editing content, please keep these in mind:
- Always fill in `alt="..."` on any images you add, describe what's in the photo
- Don't use color alone to convey meaning (e.g. don't say "click the red button")
- Keep link text descriptive for blind users "Learn about our worship services" is better than "click here"

---

## Getting Help

If something breaks or you're not sure how to make a change, the best approach is
to share the file with the original site designer. Even small questions are
fine, he doesn't mind - it's easier to help with a small question than to fix something after
an unintended change has been made.

When asking for help, it's useful to describe:
1. Which page and which section you were trying to change
2. What you changed
3. What it looks like now vs. what you expected

---

## One last thing

Because this site is on github we really *can't* lose anything, every change is saved here in the history of this project, so you really can't permanently hurt anything, you can only break things temporarily until someone goes into the history and sets it back to how it was, this is out of the scope of this help document but don't be scared to make a mistake, we can always fix it. When in doubt contact the original site designer and he will repair it.

*Bethany Presbyterian Church · Ontario, Oregon*
*Last updated: 2026*
