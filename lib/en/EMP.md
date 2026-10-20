# EMP — Emphasis


### M-006 · Highlight Sweep
- **When to use:** Highlights a key word like a marker pen.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.5s sweep
- **Easing:** easeInOutCubic
- **Spec:** A solid accent-colored box grows behind the word from 0% to 100% width over 0.5s (from the reading-start side: right for Arabic). The word color switches to dark for contrast. The box shrinks back on exit.

### M-277 · Highlight Sweep · Fast
- Variant of M-006. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-006

### M-552 · Highlight Sweep · Boxed
- Variant of M-006. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-006

### M-827 · Highlight Sweep · Slow
- Variant of M-006. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-006

### M-007 · Underline Draw
- **When to use:** A quiet emphasis on one word.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s draw
- **Easing:** easeInOutQuint
- **Spec:** A rounded accent line (about 8% of the font size thick) draws under the word from the reading-start side to the end over 0.6s, holds, then retracts toward the far side.

### M-291 · Underline Draw · Fast
- Variant of M-007. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-007

### M-566 · Underline Draw · Boxed
- Variant of M-007. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-007

### M-841 · Underline Draw · Slow
- Variant of M-007. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-007

### M-008 · Scale Punch
- **When to use:** A strong word that needs a hit on the beat or a sound effect.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.15s punch · 0.25s settle
- **Easing:** easeOutBack
- **Spec:** On the exact spoken frame the word jumps to 150% scale in 0.15s and turns accent color, then settles to 125% over 0.25s and holds. Return to 100% at the end. Pair it with a short "boom" or "pop" sound effect.

### M-305 · Scale Punch · Fast
- Variant of M-008. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-008

### M-580 · Scale Punch · Boxed
- Variant of M-008. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-008

### M-855 · Scale Punch · Slow
- Variant of M-008. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-008

### M-009 · Word Shake
- **When to use:** Surprise, anger or a warning.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s shake
- **Easing:** linear (damped)
- **Spec:** The word shakes horizontally with ±6% offsets and ±4° rotation, alternating every 0.04–0.05s for about 0.6s, with the amplitude damping toward zero.

### M-319 · Word Shake · Fast
- Variant of M-009. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-009

### M-594 · Word Shake · Boxed
- Variant of M-009. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-009

### M-869 · Word Shake · Slow
- Variant of M-009. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-009

### M-010 · Glitch Text
- **When to use:** Tech, AI and hacking topics.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s glitch burst
- **Easing:** steps
- **Spec:** For about 0.6s, two copies of the text (cyan #3FE0FF and red #FF3F6C) jitter ±5% offset and show through random horizontal slice masks, changing every 2–3 frames, while the main text skews ±8°. Then everything snaps back clean.

### M-333 · Glitch Text · Fast
- Variant of M-010. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-010

### M-608 · Glitch Text · Boxed
- Variant of M-010. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-010

### M-883 · Glitch Text · Slow
- Variant of M-010. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-010

### M-061 · Circle Around
- **When to use:** Circles a key word as if drawn with a pen.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s draw
- **Easing:** easeInOutCubic
- **Spec:** A hand-drawn accent ellipse strokes around the word over 0.6s (animated stroke), holds, then erases. Slightly uneven so it feels hand-made.

### M-347 · Circle Around · Fast
- Variant of M-061. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-061

### M-622 · Circle Around · Boxed
- Variant of M-061. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-061

### M-897 · Circle Around · Slow
- Variant of M-061. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-061

### M-062 · Strike Through
- **When to use:** Crosses out a wrong or old word before the right one.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.5s
- **Easing:** easeInOutQuint
- **Spec:** An accent line draws through the middle of the word from the reading-start side over 0.5s, holds, then retracts.

### M-361 · Strike Through · Fast
- Variant of M-062. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-062

### M-636 · Strike Through · Boxed
- Variant of M-062. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-062

### M-911 · Strike Through · Slow
- Variant of M-062. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-062

### M-063 · Box Outline Draw
- **When to use:** Frames a word inside a drawn box.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s draw
- **Easing:** easeInOutCubic
- **Spec:** A rounded accent rectangle strokes itself around the word, starting from the top-right corner, over 0.6s. Holds, then erases.

### M-375 · Box Outline Draw · Fast
- Variant of M-063. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-063

### M-650 · Box Outline Draw · Boxed
- Variant of M-063. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-063

### M-925 · Box Outline Draw · Slow
- Variant of M-063. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-063

### M-064 · Color Pulse
- **When to use:** A word gently pulses between two colors.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** loop · 1.6s
- **Easing:** easeInOutSine
- **Spec:** The word color eases from white to the accent color and back in a 1.6s loop while it is on screen.

### M-389 · Color Pulse · Fast
- Variant of M-064. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-064

### M-664 · Color Pulse · Boxed
- Variant of M-064. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-064

### M-939 · Color Pulse · Slow
- Variant of M-064. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-064

### M-065 · Glow Pulse
- **When to use:** A word breathes with a soft glow.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** loop · 1.6s
- **Easing:** easeInOutSine
- **Spec:** An accent glow (text shadow, blur up to 6% of the width) grows and fades around the word in a 1.6s loop.

### M-401 · Glow Pulse · Fast
- Variant of M-065. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-065

### M-676 · Glow Pulse · Boxed
- Variant of M-065. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-065

### M-951 · Glow Pulse · Slow
- Variant of M-065. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-065

### M-066 · Wiggle
- **When to use:** A word wiggles to grab attention.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.8s
- **Easing:** easeInOutSine
- **Spec:** The word rotates quickly ±8° and back several times with decreasing angle over about 0.8s, then rests.

### M-413 · Wiggle · Fast
- Variant of M-066. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-066

### M-688 · Wiggle · Boxed
- Variant of M-066. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-066

### M-963 · Wiggle · Slow
- Variant of M-066. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-066

### M-067 · Bounce Word
- **When to use:** A word hops twice, light and fun.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s
- **Easing:** easeOutQuad
- **Spec:** The word jumps up 35% of its height and lands, then a second smaller jump of 14%, over about 0.6s.

### M-424 · Bounce Word · Fast
- Variant of M-067. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-067

### M-699 · Bounce Word · Boxed
- Variant of M-067. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-067

### M-974 · Bounce Word · Slow
- Variant of M-067. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-067

### M-068 · Arrow Point
- **When to use:** An arrow points at a word or an object on screen.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** loop · 1s
- **Easing:** easeInOutSine
- **Spec:** An accent arrow sits beside the target and nudges toward it by 30% of its length and back in a 1s loop.

### M-435 · Arrow Point · Fast
- Variant of M-068. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-068

### M-710 · Arrow Point · Boxed
- Variant of M-068. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-068

### M-985 · Arrow Point · Slow
- Variant of M-068. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-068

### M-069 · Zoom Blur Word
- **When to use:** A fast zoom hit on a single word.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.3s
- **Easing:** easeOutExpo
- **Spec:** The word jumps to 160% with a 1.5% blur in 0.2s, then settles at 120% sharp over 0.3s. Return to 100% at the end.

### M-445 · Zoom Blur Word · Fast
- Variant of M-069. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-069

### M-720 · Zoom Blur Word · Boxed
- Variant of M-069. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-069

### M-995 · Zoom Blur Word · Slow
- Variant of M-069. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-069

### M-070 · Rubber Band
- **When to use:** A word squashes and stretches like rubber.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.7s
- **Easing:** easeOut
- **Spec:** The word scales to 125%×75%, then 75%×125%, then smaller swings until it settles at 100% over 0.7s.

### M-454 · Rubber Band · Fast
- Variant of M-070. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-070

### M-729 · Rubber Band · Boxed
- Variant of M-070. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-070

### M-071 · Jello
- **When to use:** A word wobbles like jelly.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.9s
- **Easing:** easeOut
- **Spec:** The word skews on both axes by -12°, then +6°, -3°, +1.5° and settles over 0.9s.

### M-463 · Jello · Fast
- Variant of M-071. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-071

### M-738 · Jello · Boxed
- Variant of M-071. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-071

### M-072 · Heartbeat
- **When to use:** A word pulses like a heartbeat.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** loop · 1.4s
- **Easing:** easeInOut
- **Spec:** Two quick pulses to 130% scale and back (like a heartbeat), then a pause, in a 1.4s loop.

### M-471 · Heartbeat · Fast
- Variant of M-072. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-072

### M-746 · Heartbeat · Boxed
- Variant of M-072. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-072

### M-073 · Marker Scribble
- **When to use:** A zigzag scribble under a word like a marker.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.6s draw
- **Easing:** easeInOutCubic
- **Spec:** A loose zigzag accent stroke draws under the word from the reading-start side over 0.6s, holds, then erases.

### M-479 · Marker Scribble · Fast
- Variant of M-073. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-073

### M-754 · Marker Scribble · Boxed
- Variant of M-073. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-073

### M-074 · Spotlight Dim
- **When to use:** Everything dims except the word or face.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.5s in
- **Easing:** easeInOutCubic
- **Spec:** A dark overlay (about 80% black) fades in over 0.5s with a soft circular hole around the subject, so only the subject stays lit. Fade out to release.

### M-487 · Spotlight Dim · Fast
- Variant of M-074. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-074

### M-762 · Spotlight Dim · Boxed
- Variant of M-074. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-074

### M-075 · Letter Spacing
- **When to use:** An English word spreads its letters for a premium feel.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.8s
- **Easing:** easeInOutCubic
- **Spec:** The letter spacing grows smoothly from 0 to 0.35em over 0.8s while the word stays centered. Reverse at exit.

### M-495 · Letter Spacing · Fast
- Variant of M-075. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-075

### M-770 · Letter Spacing · Boxed
- Variant of M-075. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-075

### M-076 · Flash Hit
- **When to use:** A quick white flash on a strong word or cut.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.15s
- **Easing:** easeOut
- **Spec:** A full-screen white flash rises to 90% opacity in 1–2 frames and fades out over 0.15s, exactly on the beat or word.

### M-503 · Flash Hit · Fast
- Variant of M-076. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-076

### M-778 · Flash Hit · Boxed
- Variant of M-076. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-076

### M-077 · Sparkle Stars
- **When to use:** Sparkles around a word or product for a "fresh" feel.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** loop · 1.2s
- **Easing:** easeInOutSine
- **Spec:** Three to five small four-point stars pop in around the word at random spots, scale 0 to 100% while rotating 90°, then shrink away, staggered by 0.3s.

### M-511 · Sparkle Stars · Fast
- Variant of M-077. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-077

### M-786 · Sparkle Stars · Boxed
- Variant of M-077. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-077

### M-078 · Swing
- **When to use:** A hanging word swings like a sign.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 1s
- **Easing:** easeOut
- **Spec:** The word swings from its top edge: +16°, -11°, +7°, -4°, +2° and settles over about 1s.

### M-519 · Swing · Fast
- Variant of M-078. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-078

### M-794 · Swing · Boxed
- Variant of M-078. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-078

### M-079 · Tilt Pop
- **When to use:** A word grows with a small tilt, sticker style.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.3s
- **Easing:** easeOutBack
- **Spec:** The word scales to 130% while rotating -8° in 0.3s, settles at 120% and -5°, holds, then returns.

### M-527 · Tilt Pop · Fast
- Variant of M-079. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-079

### M-802 · Tilt Pop · Boxed
- Variant of M-079. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-079

### M-080 · Chromatic Split
- **When to use:** A word splits into red and cyan channels, tech style.
- **Content the user must provide:** text: the word(s) to emphasize
- **Duration:** 0.5s
- **Easing:** easeOut
- **Spec:** Red and cyan copies of the word slide out sideways by 1.5% of the width and back in over 0.5s, like an RGB lens split.

### M-535 · Chromatic Split · Fast
- Variant of M-080. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-080

### M-810 · Chromatic Split · Boxed
- Variant of M-080. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-080
