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
- (Removed 2026-11-20 at the owner's request) The lab's «نزّل الحركة فيديو» green-screen download is gone; people put motions on their videos in the Studio instead. `vendor/xrender.js` (DOM → SVG foreignObject frames, WebCodecs H.264 + `vendor/mp4-muxer.js`, MediaRecorder fallback) is still used by the Studio export.
- Saved projects (`ml-projects`): save the basket by name from the basket panel; «📁 مشاريعي» opens, copies prompt or link, deletes.
- Prompt history (`ml-history`, last 50, wrapper around `copyText`): «🕘 السجل».
- Preview size select 4:5 / 9:16 (`ml-ar`, body class `xr916`); also sets the downloaded video aspect.
- All four rounds pushed and verified live on 2026-11-19 (site c8211bf, plugin 1.2.0).

## Tidy layout (2026-11-19)
- How-to boxes + install video folded into one `<details id="xhow">` under the hero (closed by default).
- "What's new" paragraph hidden; the strip `.wnew.xbar` is now just the buttons (Inspire, Projects, History, install).
- Tabs grouped: top bar `.xgrp` (Motions, Fonts, Design[CP,CS,EL,BG,LT], Ready-made[R,H], Sounds, Tools) + sub-row `.xsub`; old `.tabs` kept hidden (its buttons still exist, so use `showTab(k)` in tests). «جديد» badge per group until visited (`ml-seen`).
- Overlay/size selects folded into «⚙️ العرض» `<details class="xopts">`; use chips scroll sideways in one row.
- Cards: overlay is ♡ ＋ ✎ (compare moved into the try-it window `#labCmp`); suggested sound chip sits in the `.need` row.
- More name collisions found: `.sl`, `.gl` (use `xsl`, `xgl`, `xgline`). Language switch writes are guarded (`stx`/`sat`) because text writes on 1000 cards are slow on narrow viewports.

## Performance (2026-11-19)
- Extra tabs are built only when first opened (`BUILD[k]` + `ensureBuilt(k)` in `showTab`); counts come from `XN`. Caption-style fonts load only for visible cards.
- `content-visibility:auto` on motion cards, font cards and extra cards (language switch went from ~40 s to 0.1 s in the sandbox).
- Particle intro now samples only the first 8 cards (it used to call getBoundingClientRect/getComputedStyle on all 1000 cards: ~2.5 s long task). Boot long tasks: ~2.6 s → ~0.3 s; no fonts downloaded at boot (was 2.4 MB).

## Motion Studio (added 2026-11-19)
- `studio.html` is a separate editor page, GENERATED by `python3 tools/build_studio.py` from `index.html` (site CSS, motion data M/TX/UI, stageHTML + helpers, FONTS, fUrl) + `tools/extras/x-data.js` (palettes CPS) + sources in `tools/studio/` (`studio.src.html`, `studio.css`, `studio.js`). Re-run the build after any change to index.html motions or the studio sources.
- Upload a video (stays local, blob URL), timeline (ruler, video track with trim shading and cuts, motion lanes), add motions at the playhead from the list or from the basket, drag/resize blocks, drag/resize on the preview, inspector (text via swapText, font, palette incl. My brand, start/duration, x/y/size, duplicate, delete), trim in/out, delete ranges (cuts), undo (Ctrl+Z), Space play, Delete removes.
- Motions are synced to the video by pausing their CSS animations and setting `currentTime` every frame (`sync()`); scene/person layers are hidden. CAM/TRN/PER/TIM motions act on footage, so they show only a label and go into the prompt.
- Export: prompt with exact timings for AI; MP4 made on the device (phones and computers, 2026-11-20): for each output frame (30 fps, trims and cuts applied) the video steps forward by playing to the frame with requestVideoFrameCallback (seeks only after a cut), the motions are drawn with `XR.snap(#ovl)`, audio is decoded from the uploaded file, cut the same way and encoded AAC (Opus at 48 kHz if AAC is missing); fallback as in the lab. Output = video size, capped at 1080×1920. Project autosaves to `ml-studio` (re-upload the same video to continue); save/open as JSON.
- Library link: «🎬 استوديو المونتاج» in the toolbar strip. sw.js caches each page by its own path (v3).

## Hooks on your topic, Studio tab (2026-11-20)
- Hooks tab: box «هوك على موضوعك» (`#hgBox`): the user types a topic (saved in `ml-hgt`) → «✨ طلّع الهوكات» makes 8 hooks from templates `HGT` (6 types; 2 question, 2 number, 1 of each other) with a text motion + sound taken from `HOOKS` of the same type (camera/transition/person/time motions skipped). «🎲 غيّرها» reshuffles; «🤖 انسخ البرومبت» copies a prompt for Claude/ChatGPT with the topic, the hook motions and sounds. Each hook: copy line, copy prompt, ✎ try.
- Studio is also a tab of the main site: group button «🎬 الاستوديو» (`data-g="ST"`, hash `#studio`) shows `#xv-ST` with `studio.html` in an iframe (loaded on first open). In the frame, «← المكتبة» calls `parent.showTab('M')`.
- Try-it window button «🎬 حطها بالاستوديو» (`#labSt2`) queues `{m,text,f,p}` in `ml-studio-add` and opens the Studio tab; the Studio adds queued motions at the playhead after a video is loaded (`addPending`, or `window.mlAddPending` when the video is already there) and shows a note in the upload box while waiting.
- Studio on phones (2026-11-21): «🎞 غيّر الفيديو» (keeps the motions, clamps them to the new length) and «🗑 ابدأ من جديد» (clears and reloads) in the top bar; bigger timeline blocks and edge handles on touch screens (`pointer:coarse`), ruler/video track scrub with a finger (`touch-action:none`), pinch with two fingers on the preview to resize the selected motion (`.sd-ovl.hasSel`), bigger yellow resize dot, inspector buttons earlier/later/shorter/longer (±0.5 s) and smaller/bigger (±10), editable from/to for a selected cut, a tip line under the timeline. Range sliders are LTR so right = right / bigger.

## Pickers, previews, editing (2026-11-21)
- `tools/extras/x-color.js` (inlined into index.html by assemble_extras and into studio.html by build_studio): `XCol` colour picker (ready colours, recent `ml-colors`, brand colours, saturation square + hue bar, HEX/RGB, eyedropper where supported) and custom palettes stored as ids `CU:#bg,#tx,#ac,#hl` (`XCol.cuParse` is used by `pById` and the studio `pBy`); every palette select gets «🎨 ألوان من اختيارك…» (`XCol.opts` + `XCol.wire`). Brand colour inputs are replaced with `XCol.enhance`. `XFont` font picker: each font drawn in its own shape with the user's text, filter Arabic/English, search, the chosen one marked and scrolled to (lab, brand, cover, studio inspector).
- Studio: hover a motion in the list → animated preview card; on phones a tap opens the preview with «＋ أضفها على الفيديو». Video parts: «✂ قص هني» adds a split (`S.splits`), tap a part → «🗑 احذف» adds it to `S.cuts`; the same button deletes a selected motion, or «↩ رجّع الجزء» for a selected cut.
- Tools: the script generator shows a live preview of each suggested motion with the line's text (tap to replay, ✎ opens the lab). The BPM detector was removed at the owner's request.
- Cover maker «رقم وقائمة» (CV-03) has its own number field `#cNu` (shown only for that template; falls back to digits in the title, then 3). The post caption's comment keyword `#pKw` has no length limit.
- «🎨 ألوان من اختيارك…» is the first option in every palette select (lab, cover, studio), and the Colors tab starts with a «ألوان من اختيارك» card (saved in `ml-cu`, copy prompt, copy hex). Arabic palette names were renamed to plain colour descriptions (2026-11-21, plugin 1.2.1).
- Studio captions «📝 كابشن» (2026-11-21): paste/type the words (lines or one paragraph) or «🎙 طلّع الكلام من الفيديو» = Whisper in the browser (transformers.js 3.4.2 from jsDelivr in a module Worker, models `onnx-community/whisper-base` fast / `whisper-small` accurate from Hugging Face; WebGPU only on a real desktop GPU, otherwise WASM q8; audio decoded to 16 kHz mono; segment timestamps; watchdog). Lines are split into N-word captions using a caption style CS-xx (motion, font, palette, position) and placed in their own lane (`c.cap=1`); with detected segments the timing follows the speech, otherwise words are spread over the kept parts of the video. Text and segments are kept in `ml-captx` / `ml-capseg`. Tested here with an Arabic TTS clip: download ~10 s, transcription ~10 s for 11 s of audio (base).
- Studio motion list shows all 1000 motions as a grid of live thumbnails (drawn only while on screen, replayed every ~4 s).
- Studio motion list: all 1000 motions with a counter (`#lcount`) and a category dropdown (`#lcatS`, with counts) instead of chips that ran off the edge.
- Logo (2026-11-21): `tools/extras/x-logo.js` (`XLogo`, inlined into index and studio). Brand panel button «🏷 ارفع شعارك» opens the editor: upload PNG/JPG (scaled to ≤900 px), background removed by flood fill from the edges using the most common border colour (strength slider, soft edge), faint pixels cleaned, empty space trimmed, colour original/white/black/brand accent, corner, size %, opacity, «show on previews», «put on Studio videos». Saved in `ml-logo` (processed PNG + settings). Previews: one `<img class="xlgi">` per `.st` (blob URL, MutationObserver), body class `xlg-on`. Also drawn on the cover maker and in the Studio (`#sdLogo` over the frame, «🏷 الشعار» button) and into the MP4 export on every frame.
