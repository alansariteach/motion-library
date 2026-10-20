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

## Gotchas
- Keep `buildMD()` / `buildJSON()` in `index.html`: `tools/build_lib.py` calls them through Playwright to generate the library files, even though the site no longer offers them as downloads.
- Class names collide easily in index.html (e.g. `.fcard` is a card-flip motion; fonts use `.fnt`). Grep before adding CSS.
- The live library file is large; fetch tools truncate it. Always read `lib/INDEX.md` then one small category file.
- Python string edits (not sed) for index.html. Google Fonts is blocked in the sandbox, so fonts are installed locally.
