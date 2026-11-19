# Motion Library: project handoff (for Claude sessions)

Owner: Ali Alansari (Alansari.Tech). Language: Gulf Arabic. Standing rule: review your own work and fix errors immediately without asking.

## What it is
Single-file site of 1000 named motions (M-001..M-1000; 275 base + 725 variants Fast/Slow/Gold/Boxed) and 123 fonts (FA-xx Arabic, FE-xx English). AR/EN toggle, example video per motion, Fonts tab (with all-fonts zip download). The library file for AI is distributed through the plugin only: the site has no download buttons for it (removed 2026-10-20, the page box now explains the plugin install).

## Where things live
- Site repo: github.com/alansariteach/motion-library (GitHub Pages: https://alansariteach.github.io/motion-library/). `index.html` is the source of truth. `examples/M-xxx.mp4` (1000 videos), `fonts/` (arabic/, english/, alansari-fonts.zip), `lib/` (per-category library files + INDEX.md, generated), `alansari-motion-library*.md/.json` (generated), `tools/` (renderer and scripts).
- Plugin repo: github.com/alansariteach/alansari-plugins (marketplace `alansari-plugins`, plugin `alansari-motion`, skill `alansari-motion-library` with bundled copy in `references/`). Users add it in claude.ai: Customize > Plugins > Add > Add marketplace > Add from a repository, then Sync automatically.
- The user also has a personal Skill `alansari-motion-library` that reads `lib/INDEX.md` then one category file.

## How to change things
1. Edit `index.html` (M[] entries, CSS, UI strings). Test with Playwright (file:// + --allow-file-access-from-files).
2. Run `tools/build_lib.py` (regenerates md/json/lib). Copy the md/json to the plugin repo `references/`, bump `version` in plugin.json and marketplace.json, commit and push both repos.
3. Re-render only changed examples: `python3 tools/exrender.py M-001,M-002` (needs fonts Alexandria, Changa, Space Mono, Orbitron installed in ~/.fonts; assets in tools/assets; clip frames fa/ fb/ are extracted from the user's two video clips with ffmpeg at 540x960 30fps, 226 frames each; paths inside exrender.py point to /home/claude/demo). Then copy mp4 into `examples/`.
4. Check with `tools/sheet.py` (contact sheets) and `tools/audit.py` (static-video check). Known intentionally near-static: Face Blur, Halftone, Watermark Corner, Label Follow, Callout Line.
5. Commit trailer: Co-Authored-By + Claude-Session lines. Pages takes 2-5 min to update.

## Analytics
GoatCounter (cookieless, no consent banner): https://alansari-tech.goatcounter.com. Script is in `<head>` of `index.html`. A click on the plugin-name copy button (`#plCp`) is counted as the event `plugin-copy` (intent to install, not a confirmed install). Real installs can't be measured; GitHub Traffic on `alansari-plugins` is a rough second signal.

## Plugin install path (verified 2026-10-20 on the real claude.ai UI)
Customize > Plugins > `+ Add` > Add marketplace > Add from a repository > paste `alansariteach/alansari-plugins` > Sync. Then Discover tab > search the plugin > `+`. Auto-updates: Add > Manage marketplaces > ⋮ > Sync automatically. Plugins need a paid plan (Pro or higher). Install-video source is the HTML timeline `walk2.html` (kept outside the repo).

## Gotchas
- Keep `buildMD()` / `buildJSON()` in `index.html`: `tools/build_lib.py` calls them through Playwright to generate the library files, even though the site no longer offers them as downloads.
- Class names collide easily in index.html (e.g. `.fcard` is a card-flip motion; fonts use `.fnt`). Grep before adding CSS.
- The live library file is large; fetch tools truncate it. Always read `lib/INDEX.md` then one small category file.
- Python string edits (not sed) for index.html. Google Fonts is blocked in the sandbox, so fonts are installed locally.

## Install video (added 2026-10-20)
- Section `#vidbox` sits between the two top boxes and the tabs; one `<video id="howVid">` whose src/poster switch with the AR/EN toggle inside `applyLang()` (`video/install-<lang>.mp4`, `video/poster-<lang>.jpg`; `preload=none`).
- Narration is AI voiceover (vidIQ/ElevenLabs voice Eric); video is an HTML timeline rendered frame by frame with Playwright + ffmpeg. Source (`walk3.html`, `build.py`) is kept outside the repo; if the real claude.ai install UI changes, the video must be re-rendered.

## Logo (updated 2026-10-26)
- Brand logo is the chip mark ("ALANSARI-TECH_lines", from the owner's 10-colour set), recoloured to the site palette: chip pins/trace and the dot = coral #E3643F (`--acc2`), A and tagline = gold #FFC857, wordmark = cream #F6EFE2, chip body = #0E1B1D.
- Embedded as base64 SVG: full logo in the hero (`.logo-big`), chip mark in the header `.brand` (text hidden under 560px) and as the favicon. The old 3D webp logo was removed.

## Extras (added 2026-11-19)
- New tabs beside Motions/Fonts: Colors `CP-01..24`, Captions `CS-01..16` (caption styles = CAP motion + font + palette + position), Elements `EL-01..18` (CSS-animated previews), Recipes `R-01..12` (full Reel plans referencing M/CS/EL/SX IDs), Sounds `SX-01..28` (CC0 MP3s in `sfx/`, credits in `sfx/CREDITS.md`).
- Every motion has a suggested sound (`sxOf(m)`, rules by name/category); it shows as a chip on the card, goes into the copied prompt and into the library files.
- Prompt basket (＋ on any card, bar at the bottom, one combined prompt, stored in localStorage `ml-basket`), favourites (♥, `ml-fav`), use-case filter chips on Motions (hook, ending, numbers, products, tutorials, podcast, stories; `usesOf(m)`), and the "Try with your text" lab (✎ on motion cards: live preview with the user's text, any font and palette).
- PWA: `manifest.webmanifest`, `sw.js` (network-first page, caches fonts/sounds/icons, never mp4), icons `icon-192/512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`.
- Source of these extras: `tools/extras/x.css`, `x-data.js`, `x-ui.js`. Edit there, then run `python3 tools/assemble_extras.py` (inlines them into `index.html` between `/*XCSS-START*/` and `<script id="xjs">` markers; safe to re-run). Then `tools/build_lib.py` as usual (library files now include PALETTES, CAPSTYLES, ELEMENTS, RECIPES, SOUNDS sections and lib files).
- Prefix new CSS classes with `x`: the old stylesheet already uses `.ov` and `.box`.

## Round 2 (added 2026-11-19)
- Header button «هويتي / My brand» (`ml-brand` in localStorage): colours, font, name, handle, logo flag. When on, every prompt copy gets a brand line (wrapper around `copyText`), and backgrounds, cover maker and lab can use it.
- Tabs: Hooks `H-01..30` (opening lines + motion + sound, ✎ opens the lab with the line), LUTs `LT-01..10` (`lut/*.cube` 33³ + preview jpgs, made by `tools/make_luts.py`), Backgrounds `BG-01..10` (CSS loops), Tools (script-to-edit generator with rules `GENR`, Reel cover maker on canvas 1080×1920 with templates `CV-01..06`, BPM detector: WebAudio autocorrelation or tap).
- Smart search (`nrm` Arabic normalisation + `SYN` synonyms) for motions, fonts and all extra tabs.
- Platform overlay select (Instagram, Instagram RTL, TikTok, YouTube Shorts) draws the app UI over previews (`ml-ui`).
- Basket share link: `#b=ID,ID,...` merges into the visitor's basket.
- Popular: each prompt copy sends GoatCounter event `copy/<ID>`; `tools/popular.py` (needs GOATCOUNTER_TOKEN) writes `popular.json`; badges + "Most used" filter appear only when the list is not empty.

## Round 3 (added 2026-11-19)
- «🎲 ألهمني / Inspire me» button (in the What's new strip): random full combo (hook, caption style, palette, emphasis, transition, ending, LUT) with shuffle, one prompt, add all to basket.
- Compare: ⇄ button on every motion card (max 4), floating "Compare (n)" pill, modal with the motions side by side.
- Tools tab: "Post caption & hashtags" generator (templates by tone, CTA, AR/EN/both with optional English topic, topic-matched hashtags `HTG`, platform tags `HPL`, optional Kuwait/Gulf tags; max 5 for IG/TikTok, 3 YouTube, 2 X; 8 when both languages).

## Round 4 (added 2026-11-19)
- Download as video (lab ✎ → «نزّل الحركة فيديو»): Region Capture (`getDisplayMedia` preferCurrentTab + `CropTarget.fromElement(#labSt)` + MediaRecorder, mp4 h264 when supported else webm). Background green #00FF00 / black / scene. One loop of the motion. Chrome/Edge desktop only (shows a message elsewhere). Resolution = on-screen stage size × devicePixelRatio (lab grows to ~96dvh while recording). Tested headed under xvfb with `--auto-accept-this-tab-capture`.
- Saved projects (`ml-projects`): save the basket by name from the basket panel; «📁 مشاريعي» opens, copies prompt or link, deletes.
- Prompt history (`ml-history`, last 50, wrapper around `copyText`): «🕘 السجل».
- Preview size select 4:5 / 9:16 (`ml-ar`, body class `xr916`); also sets the downloaded video aspect.
- Nothing pushed yet at the owner's request: local commits wait in both repos.
