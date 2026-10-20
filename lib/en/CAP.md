# CAP — Captions


### M-011 · Karaoke Highlight
- **When to use:** The main Reels caption: each word lights up as it is spoken.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to each word
- **Easing:** instant (0.08s fade)
- **Spec:** A full caption line is shown in dimmed white (50% opacity). Each word turns accent color exactly at its spoken timestamp (word-level ASR timings) and stays colored. Bold display font about 64px at 1080 wide, centered, inside the safe zone (y 1350–1550).

### M-278 · Karaoke Highlight · Fast
- Variant of M-011. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-011

### M-553 · Karaoke Highlight · Boxed
- Variant of M-011. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-011

### M-828 · Karaoke Highlight · Slow
- Variant of M-011. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-011

### M-012 · Word Pop
- **When to use:** A fast, lively caption, word by word.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.18s per word
- **Easing:** easeOutBack
- **Spec:** Each word appears at its spoken timestamp, scaling from 30% to 118% and settling to 100% in 0.18s. Earlier words stay. Clear the line when the sentence ends.

### M-292 · Word Pop · Fast
- Variant of M-012. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-012

### M-567 · Word Pop · Boxed
- Variant of M-012. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-012

### M-842 · Word Pop · Slow
- Variant of M-012. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-012

### M-013 · Bounce Caption
- **When to use:** A whole line drops in at once with a playful move.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.55s in
- **Easing:** spring
- **Spec:** The whole caption line enters from 130% below with a spring: overshoot to -14%, rebound to +6%, settle at 0 over about 0.55s. Fade out on exit.

### M-306 · Bounce Caption · Fast
- Variant of M-013. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-013

### M-581 · Bounce Caption · Boxed
- Variant of M-013. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-013

### M-856 · Bounce Caption · Slow
- Variant of M-013. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-013

### M-014 · Boxed Word
- **When to use:** TikTok-style caption where the box follows your voice.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to each word
- **Easing:** easeOutCubic 0.1s
- **Spec:** A rounded accent box sits behind the currently spoken word only, and the word turns dark. When the next word starts, the box jumps to it, with a 6% scale pop. Other words stay white.

### M-320 · Boxed Word · Fast
- Variant of M-014. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-014

### M-595 · Boxed Word · Boxed
- Variant of M-014. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-014

### M-870 · Boxed Word · Slow
- Variant of M-014. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-014

### M-015 · One-Word Caption
- **When to use:** Fast, punchy talk: one big word in the middle.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** one word at a time
- **Easing:** easeOutBack
- **Spec:** Only the current word is on screen, large (about 110px), centered. Each new word replaces the previous one with a quick scale from 60% to 110% to 100% over 0.15s. Optionally color key words in the accent.

### M-334 · One-Word Caption · Fast
- Variant of M-015. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-015

### M-609 · One-Word Caption · Boxed
- Variant of M-015. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-015

### M-884 · One-Word Caption · Slow
- Variant of M-015. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-015

### M-081 · Two-Line Caption
- **When to use:** A long sentence split into two lines that appear in turn.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.45s per line · 0.4s stagger
- **Easing:** easeOutCubic
- **Spec:** Split the sentence into two balanced lines. Each line rises 40px and fades in over 0.45s, the second starting 0.4s after the first. Keep both inside the safe zone.

### M-348 · Two-Line Caption · Fast
- Variant of M-081. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-081

### M-623 · Two-Line Caption · Boxed
- Variant of M-081. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-081

### M-898 · Two-Line Caption · Slow
- Variant of M-081. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-081

### M-082 · Typewriter Caption
- **When to use:** A caption that types itself out with your voice.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to speech
- **Easing:** steps
- **Spec:** The caption reveals character by character from the reading-start side, paced so it finishes when the sentence ends. No caret.

### M-362 · Typewriter Caption · Fast
- Variant of M-082. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-082

### M-637 · Typewriter Caption · Boxed
- Variant of M-082. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-082

### M-912 · Typewriter Caption · Slow
- Variant of M-082. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-082

### M-083 · Fade Words
- **When to use:** A calm caption, each word fades in.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.25s per word
- **Easing:** easeOutQuad
- **Spec:** Each word fades from 0 to 100% opacity over 0.25s at its spoken timestamp. Earlier words stay. Clear the line at the end of the sentence.

### M-376 · Fade Words · Fast
- Variant of M-083. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-083

### M-651 · Fade Words · Boxed
- Variant of M-083. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-083

### M-926 · Fade Words · Slow
- Variant of M-083. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-083

### M-084 · Slide-Up Words
- **When to use:** A lively caption, each word slides up.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.25s per word
- **Easing:** easeOutCubic
- **Spec:** Each word slides up from 60% below its line while fading in over 0.25s at its spoken timestamp.

### M-390 · Slide-Up Words · Fast
- Variant of M-084. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-084

### M-665 · Slide-Up Words · Boxed
- Variant of M-084. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-084

### M-940 · Slide-Up Words · Slow
- Variant of M-084. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-084

### M-085 · Underline Active Word
- **When to use:** A full caption with an underline that follows the spoken word.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to each word
- **Easing:** easeOutCubic 0.1s
- **Spec:** The whole line is visible in white. A rounded accent bar sits under the word being spoken and jumps to the next word at its timestamp.

### M-402 · Underline Active Word · Fast
- Variant of M-085. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-085

### M-677 · Underline Active Word · Boxed
- Variant of M-085. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-085

### M-952 · Underline Active Word · Slow
- Variant of M-085. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-085

### M-086 · Scale Active Word
- **When to use:** The spoken word grows and turns accent.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to each word
- **Easing:** easeOutBack 0.12s
- **Spec:** The word being spoken scales to 125% and turns the accent color; it returns to normal when the next word starts.

### M-414 · Scale Active Word · Fast
- Variant of M-086. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-086

### M-689 · Scale Active Word · Boxed
- Variant of M-086. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-086

### M-964 · Scale Active Word · Slow
- Variant of M-086. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-086

### M-087 · Color Sweep Line
- **When to use:** A color fill sweeps along the whole line as you speak.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** sentence length
- **Easing:** linear
- **Spec:** A two-color gradient is clipped to the caption text and slides from the reading-start side to the end over the sentence duration, so spoken parts turn accent.

### M-425 · Color Sweep Line · Fast
- Variant of M-087. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-087

### M-700 · Color Sweep Line · Boxed
- Variant of M-087. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-087

### M-975 · Color Sweep Line · Slow
- Variant of M-087. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-087

### M-088 · Keyword Color
- **When to use:** A plain caption where only the key word lights up.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.2s
- **Easing:** easeOutBack
- **Spec:** The caption stays white. Only the key word turns accent and scales to 112% at its timestamp, and stays like that until the line clears.

### M-436 · Keyword Color · Fast
- Variant of M-088. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-088

### M-711 · Keyword Color · Boxed
- Variant of M-088. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-088

### M-986 · Keyword Color · Slow
- Variant of M-088. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-088

### M-089 · Pill Caption
- **When to use:** A caption inside a dark pill, readable on any footage.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.3s in
- **Easing:** easeOutBack
- **Spec:** The caption sits inside a dark rounded pill (85% opacity, generous padding). The pill pops from 60% to 105% to 100% over 0.3s.

### M-446 · Pill Caption · Fast
- Variant of M-089. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-089

### M-721 · Pill Caption · Boxed
- Variant of M-089. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-089

### M-996 · Pill Caption · Slow
- Variant of M-089. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-089

### M-090 · Outline Caption
- **When to use:** White caption with a thick black outline, classic and clear.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.45s in
- **Easing:** easeOutCubic
- **Spec:** White bold caption with a black outline about 7% of the font size (stroke painted under the fill), no shadow. Enters with a fade-up.

### M-455 · Outline Caption · Fast
- Variant of M-090. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-090

### M-730 · Outline Caption · Boxed
- Variant of M-090. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-090

### M-091 · Shadow Pop
- **When to use:** A caption with a solid colored drop shadow that pops, pop-art style.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.3s
- **Easing:** easeOutBack
- **Spec:** A solid accent shadow (no blur) grows to 1.2% offset down-right while the text moves 1% up-left, so it looks lifted. Reverse at exit.

### M-464 · Shadow Pop · Fast
- Variant of M-091. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-091

### M-739 · Shadow Pop · Boxed
- Variant of M-091. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-091

### M-092 · Blur Words
- **When to use:** A soft cinematic caption, words resolve from blur.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.3s per word
- **Easing:** easeOutQuad
- **Spec:** Each word goes from 2% blur and opacity 0 to sharp and visible over 0.3s at its spoken timestamp.

### M-472 · Blur Words · Fast
- Variant of M-092. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-092

### M-747 · Blur Words · Boxed
- Variant of M-092. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-092

### M-093 · Drop Words
- **When to use:** Each word drops from above with a small bounce.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.25s per word
- **Easing:** easeOutBack
- **Spec:** Each word drops from 80% above its line, overshoots 10% and settles over 0.25s at its spoken timestamp.

### M-480 · Drop Words · Fast
- Variant of M-093. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-093

### M-755 · Drop Words · Boxed
- Variant of M-093. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-093

### M-094 · Rotate Words
- **When to use:** Words twist in, lively and playful.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.3s per word
- **Easing:** easeOutBack
- **Spec:** Each word rotates in from -25° and 50% scale to upright and full size over 0.3s at its spoken timestamp.

### M-488 · Rotate Words · Fast
- Variant of M-094. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-094

### M-763 · Rotate Words · Boxed
- Variant of M-094. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-094

### M-095 · Highlighter Active
- **When to use:** A highlighter sweeps over each spoken word.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced to each word
- **Easing:** easeOutCubic 0.15s
- **Spec:** An accent highlight box grows behind the spoken word from the reading-start side over 0.15s and disappears when the next word starts.

### M-496 · Highlighter Active · Fast
- Variant of M-095. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-095

### M-771 · Highlighter Active · Boxed
- Variant of M-095. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-095

### M-096 · Size Mix
- **When to use:** A caption where important words are bigger.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.2s per word
- **Easing:** easeOutBack
- **Spec:** Words pop in one by one (M-012 style), but key words are set 1.6× larger and in the accent color, so the line reads like a poster.

### M-504 · Size Mix · Fast
- Variant of M-096. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-096

### M-779 · Size Mix · Boxed
- Variant of M-096. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-096

### M-097 · Speaker Label
- **When to use:** When several people talk, the name tag sits above the caption.
- **Content the user must provide:** text: the name and role
- **Duration:** 0.3s
- **Easing:** easeOutCubic
- **Spec:** A small accent tag with the speaker name slides in above the caption 0.1s before the line, then the caption fades up under it.

### M-512 · Speaker Label · Fast
- Variant of M-097. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-097

### M-787 · Speaker Label · Boxed
- Variant of M-097. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-097

### M-098 · Bottom Bar Caption
- **When to use:** A caption inside a wide bottom bar, like the news.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.4s bar · 0.3s text
- **Easing:** easeOutExpo
- **Spec:** A dark full-width bar grows from the right edge (0.4s), then the caption fades in inside it (0.3s). Text and bar retract at the end.

### M-520 · Bottom Bar Caption · Fast
- Variant of M-098. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-098

### M-795 · Bottom Bar Caption · Boxed
- Variant of M-098. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-098

### M-099 · Glitch Caption
- **When to use:** A tech caption that glitches as it lands.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.4s glitch
- **Easing:** steps
- **Spec:** The caption enters with a 0.4s glitch burst: red and cyan copies jitter through random slice masks, then the line snaps clean (see M-010).

### M-528 · Glitch Caption · Fast
- Variant of M-099. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-099

### M-803 · Glitch Caption · Boxed
- Variant of M-099. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-099

### M-100 · Progress Caption
- **When to use:** A caption with a thin progress bar filling for the sentence.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** sentence length
- **Easing:** linear
- **Spec:** Under the caption, a thin rounded accent bar fills from the reading-start side across the sentence duration, showing how long the line lasts.

### M-536 · Progress Caption · Fast
- Variant of M-100. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-100

### M-811 · Progress Caption · Boxed
- Variant of M-100. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-100

### M-272 · Bilingual Caption
- **When to use:** Arabic on top and English below, for a wider audience.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** synced
- **Easing:** easeOutCubic
- **Spec:** Show the Arabic caption in the main style and its English translation under it in a smaller lighter line; both enter together.

### M-542 · Bilingual Caption · Fast
- Variant of M-272. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-272

### M-817 · Bilingual Caption · Boxed
- Variant of M-272. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-272

### M-273 · Text on Path
- **When to use:** Text flowing along a curved path.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** loop
- **Easing:** linear
- **Spec:** Lay the caption along a curved SVG path and slide its start offset so the words travel along the curve.

### M-544 · Text on Path · Fast
- Variant of M-273. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-273

### M-819 · Text on Path · Boxed
- Variant of M-273. put a thick solid dark teal #102E33 backing stroke (about 1.2% of the frame width, rounded joins) around the letters so the white text sits on a dark teal shape.
- **Content the user must provide:** same as M-273

### M-274 · Full-Screen Kinetic
- **When to use:** Huge words that swap and fill the whole screen.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** per word
- **Easing:** cut
- **Spec:** Each word fills most of the frame in a bold display font and replaces the previous one on its timestamp, alternating background and text colors.

### M-546 · Full-Screen Kinetic · Fast
- Variant of M-274. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-274

### M-821 · Full-Screen Kinetic · Boxed
- Variant of M-274. inset the full-screen card about 6% from the frame edges with rounded corners (about 5% radius) and a dark teal #102E33 outer border, instead of filling the whole frame.
- **Content the user must provide:** same as M-274

### M-275 · Tagged Caption
- **When to use:** The first word sits in a colored tag, the rest plain.
- **Content the user must provide:** It comes from your voice automatically, so you type nothing.
- **Duration:** 0.3s
- **Easing:** easeOutBack
- **Spec:** The caption pops in (M-089) with its first word inside a small accent box, like a label, followed by the rest of the line.

### M-548 · Tagged Caption · Fast
- Variant of M-275. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-275

### M-823 · Tagged Caption · Boxed
- Variant of M-275. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-275
