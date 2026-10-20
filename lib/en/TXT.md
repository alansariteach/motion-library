# TXT — Text In


### M-001 · Fade Up
- **When to use:** The simplest entrance for any title or line.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.45s in · 0.3s out
- **Easing:** easeOutCubic
- **Spec:** Text starts 40px below its final position at opacity 0, rises into place while fading to 1 over 0.45s (easeOutCubic). Holds. Exit: fade to 0 while drifting up 12px over 0.3s.

### M-276 · Fade Up · Fast
- Variant of M-001. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-001

### M-551 · Fade Up · Boxed
- Variant of M-001. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-001

### M-826 · Fade Up · Slow
- Variant of M-001. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-001

### M-002 · Typewriter
- **When to use:** When text should type out letter by letter, like code or a prompt.
- **Content the user must provide:** text: the text to show
- **Duration:** ~0.07s per character
- **Easing:** steps (one char per step)
- **Spec:** Characters appear one at a time at a constant rate (about 14 chars/sec), with a blinking caret (0.6s blink) at the writing edge. For Arabic, reveal right-to-left by word or by clipping from the left. Hold, then erase or cut.

### M-290 · Typewriter · Fast
- Variant of M-002. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-002

### M-565 · Typewriter · Boxed
- Variant of M-002. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-002

### M-840 · Typewriter · Slow
- Variant of M-002. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-002

### M-003 · Letter Cascade
- **When to use:** A short English word that should grab attention.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s per letter · 0.07s stagger
- **Easing:** easeOutBack
- **Spec:** Each letter drops from 60px above with a -14° rotation and opacity 0, landing in place over 0.5s (easeOutBack). Letters are staggered 0.07s apart. Use on Latin words; for Arabic use word-level stagger to keep letters joined.

### M-304 · Letter Cascade · Fast
- Variant of M-003. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-003

### M-579 · Letter Cascade · Boxed
- Variant of M-003. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-003

### M-854 · Letter Cascade · Slow
- Variant of M-003. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-003

### M-004 · Mask Slide
- **When to use:** Elegant, cinematic titles.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.55s in · 0.45s out
- **Easing:** easeInOutQuart
- **Spec:** The text sits inside an invisible box with overflow hidden. It slides up from 110% below the box edge into place over 0.55s, holds, then continues upward out of the box over 0.45s. No fading.

### M-318 · Mask Slide · Fast
- Variant of M-004. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-004

### M-593 · Mask Slide · Boxed
- Variant of M-004. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-004

### M-868 · Mask Slide · Slow
- Variant of M-004. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-004

### M-005 · Blur In
- **When to use:** Calm lines or the opening of a video.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.7s in · 0.5s out
- **Easing:** easeOutQuad
- **Spec:** Text starts at scale 1.3, blur 30px, opacity 0 and settles to scale 1, blur 0, opacity 1 over 0.7s. Exit by blurring to 20px while fading out over 0.5s.

### M-332 · Blur In · Fast
- Variant of M-005. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-005

### M-607 · Blur In · Boxed
- Variant of M-005. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-005

### M-882 · Blur In · Slow
- Variant of M-005. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-005

### M-041 · Slide In Right
- **When to use:** A quick title entrance from the right.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.4s in · 0.3s out
- **Easing:** easeOutCubic
- **Spec:** Text enters from 70% of its width to the right, fading 0 to 1 over 0.4s, holds, then exits to the left with a fade over 0.3s.

### M-346 · Slide In Right · Fast
- Variant of M-041. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-041

### M-621 · Slide In Right · Boxed
- Variant of M-041. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-041

### M-896 · Slide In Right · Slow
- Variant of M-041. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-041

### M-042 · Slide In Left
- **When to use:** An entrance from the left, good for English text or lists.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.4s in · 0.3s out
- **Easing:** easeOutCubic
- **Spec:** Text enters from 70% of its width to the left, fading in over 0.4s, holds, then exits to the right with a fade over 0.3s.

### M-360 · Slide In Left · Fast
- Variant of M-042. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-042

### M-635 · Slide In Left · Boxed
- Variant of M-042. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-042

### M-910 · Slide In Left · Slow
- Variant of M-042. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-042

### M-043 · Drop In
- **When to use:** A title falls from above and bounces, playful.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s
- **Easing:** easeOutBounce
- **Spec:** Text drops from 160% above its place, overshoots 8% down, bounces back 4% up and settles over 0.5s. Exit by fading out.

### M-374 · Drop In · Fast
- Variant of M-043. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-043

### M-649 · Drop In · Boxed
- Variant of M-043. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-043

### M-924 · Drop In · Slow
- Variant of M-043. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-043

### M-044 · Zoom In Text
- **When to use:** A word grows from a dot to full size.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s
- **Easing:** easeOutExpo
- **Spec:** Text scales from 20% to 100% while fading in over 0.5s (easeOutExpo). Exit by scaling to 110% and fading out.

### M-388 · Zoom In Text · Fast
- Variant of M-044. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-044

### M-663 · Zoom In Text · Boxed
- Variant of M-044. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-044

### M-938 · Zoom In Text · Slow
- Variant of M-044. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-044

### M-045 · Zoom Out Text
- **When to use:** A strong word slams onto the screen.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.45s
- **Easing:** easeOutQuart
- **Spec:** Text starts at 240% scale and opacity 0 and shrinks to 100% while fading in over 0.45s, like it lands on the screen. Pair with a low "boom".

### M-400 · Zoom Out Text · Fast
- Variant of M-045. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-045

### M-675 · Zoom Out Text · Boxed
- Variant of M-045. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-045

### M-950 · Zoom Out Text · Slow
- Variant of M-045. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-045

### M-046 · Flip In
- **When to use:** A title flips in on the horizontal axis like a sign.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s in · 0.4s out
- **Easing:** easeOutBack
- **Spec:** Text rotates from 90° to 0° around the X axis with perspective while fading in over 0.5s. Exit by rotating to -90°.

### M-412 · Flip In · Fast
- Variant of M-046. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-046

### M-687 · Flip In · Boxed
- Variant of M-046. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-046

### M-962 · Flip In · Slow
- Variant of M-046. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-046

### M-047 · Rotate In
- **When to use:** A word spins in, good for "turnaround" moments.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s
- **Easing:** easeOutBack
- **Spec:** Text rotates from -90° and 60% scale to 0° and 100% while fading in over 0.5s. Exit with a small 30° turn and fade.

### M-423 · Rotate In · Fast
- Variant of M-047. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-047

### M-698 · Rotate In · Boxed
- Variant of M-047. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-047

### M-973 · Rotate In · Slow
- Variant of M-047. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-047

### M-048 · Word Stagger
- **When to use:** A short line where each word follows the one before.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.45s per word · 0.2s stagger
- **Easing:** easeOutCubic
- **Spec:** Each word rises 40px and fades in over 0.45s, starting 0.2s after the previous word. Hold the full line, then fade all out together.

### M-434 · Word Stagger · Fast
- Variant of M-048. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-048

### M-709 · Word Stagger · Boxed
- Variant of M-048. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-048

### M-984 · Word Stagger · Slow
- Variant of M-048. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-048

### M-049 · Elastic Pop
- **When to use:** A word pops with a rubbery squash and stretch.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.6s
- **Easing:** elastic
- **Spec:** Text scales from 0 to a squash (130% wide, 80% tall), then a stretch (85% wide, 115% tall), then settles at 100% over about 0.6s.

### M-444 · Elastic Pop · Fast
- Variant of M-049. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-049

### M-719 · Elastic Pop · Boxed
- Variant of M-049. put the text inside a solid light cream #F3E9D2 box with rounded corners and dark teal #102E33 text (a light box is used here because the motion own effect colors would disappear on a dark box). Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-049

### M-994 · Elastic Pop · Slow
- Variant of M-049. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-049

### M-050 · Split Reveal
- **When to use:** A title split in two halves that meet in the middle.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s
- **Easing:** easeOutQuart
- **Spec:** The top half of the text slides down from 70% above and the bottom half slides up from 70% below, meeting at the line over 0.5s.

### M-453 · Split Reveal · Fast
- Variant of M-050. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-050

### M-728 · Split Reveal · Boxed
- Variant of M-050. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-050

### M-051 · Scramble Decode
- **When to use:** English text resolves from random characters, great for cyber topics.
- **Content the user must provide:** text: the text to show
- **Duration:** ~1s decode
- **Easing:** linear
- **Spec:** Each character cycles through random symbols (A–Z, 0–9, #%&) every 2 frames, then locks to its final letter from left to right over about 1s.

### M-462 · Scramble Decode · Fast
- Variant of M-051. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-051

### M-737 · Scramble Decode · Boxed
- Variant of M-051. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-051

### M-052 · Wave Text
- **When to use:** English letters ripple in a wave.
- **Content the user must provide:** text: the text to show
- **Duration:** loop · 0.08s stagger
- **Easing:** easeInOutSine
- **Spec:** Each letter moves up 28% and back in a smooth wave, each starting 0.08s after the previous one, so a ripple runs across the word.

### M-470 · Wave Text · Fast
- Variant of M-052. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-052

### M-745 · Wave Text · Boxed
- Variant of M-052. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-052

### M-053 · Outline to Fill
- **When to use:** A title draws as an outline, then fills in.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.8s outline · 0.4s fill
- **Easing:** easeInOutCubic
- **Spec:** The text first appears as an accent outline only, revealed from the reading-start side over 0.8s, then the fill color fades in over 0.4s.

### M-478 · Outline to Fill · Fast
- Variant of M-053. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-053

### M-753 · Outline to Fill · Boxed
- Variant of M-053. put the text inside a solid light cream #F3E9D2 box with rounded corners and dark teal #102E33 text (a light box is used here because the motion own effect colors would disappear on a dark box). Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-053

### M-054 · Spotlight Reveal
- **When to use:** Hidden text revealed by a passing spotlight.
- **Content the user must provide:** text: the text to show
- **Duration:** 1.4s sweep
- **Easing:** easeInOutSine
- **Spec:** The text sits at 12% opacity. A soft circular spotlight (radius about 13% of the width) sweeps across it and shows the text at full brightness where it passes.

### M-486 · Spotlight Reveal · Fast
- Variant of M-054. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-054

### M-761 · Spotlight Reveal · Boxed
- Variant of M-054. put the text inside a solid light cream #F3E9D2 box with rounded corners and dark teal #102E33 text (a light box is used here because the motion own effect colors would disappear on a dark box). Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-054

### M-055 · Gradient Wipe Text
- **When to use:** A word changes color with a soft wipe.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.8s
- **Easing:** easeInOutCubic
- **Spec:** A two-color gradient (accent and white) is clipped to the text and slides across it over 0.8s, so the word changes color with a soft edge.

### M-494 · Gradient Wipe Text · Fast
- Variant of M-055. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-055

### M-769 · Gradient Wipe Text · Boxed
- Variant of M-055. put the text inside a solid light cream #F3E9D2 box with rounded corners and dark teal #102E33 text (a light box is used here because the motion own effect colors would disappear on a dark box). Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-055

### M-056 · Neon Flicker
- **When to use:** A neon sign title that flickers on.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.8s flicker
- **Easing:** steps
- **Spec:** The text has a white core and an accent glow (two text shadows). It turns on with 3–4 quick flickers (opacity 12% to 100%) in the first 0.8s, then stays lit.

### M-502 · Neon Flicker · Fast
- Variant of M-056. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-056

### M-777 · Neon Flicker · Boxed
- Variant of M-056. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-056

### M-057 · Stretch In
- **When to use:** A wide, fast entrance with energy.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.4s
- **Easing:** easeOutExpo
- **Spec:** Text starts squashed to 300% width and 20% height at opacity 0 and snaps to normal over 0.4s. Exit by stretching tall and thin.

### M-510 · Stretch In · Fast
- Variant of M-057. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-057

### M-785 · Stretch In · Boxed
- Variant of M-057. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-057

### M-058 · Skew Slide
- **When to use:** A fast slanted slide, like it is flying in.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s
- **Easing:** easeOutBack
- **Spec:** Text slides in from 60% to the right with a -30° skew, overshoots to +10° skew and straightens over 0.5s. Exit to the left skewing the other way.

### M-518 · Skew Slide · Fast
- Variant of M-058. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-058

### M-793 · Skew Slide · Boxed
- Variant of M-058. put the text inside a solid light cream #F3E9D2 box with rounded corners and dark teal #102E33 text (a light box is used here because the motion own effect colors would disappear on a dark box). Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-058

### M-059 · Kinetic Stack
- **When to use:** A three-word line stacking up in different sizes.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.5s per word · 0.3s stagger
- **Easing:** easeOutBounce
- **Spec:** Each word drops in from above (M-043 style) one under the other, 0.3s apart, each in a different size and weight, forming a tight stacked block.

### M-526 · Kinetic Stack · Fast
- Variant of M-059. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-059

### M-801 · Kinetic Stack · Boxed
- Variant of M-059. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-059

### M-060 · Slot Machine
- **When to use:** Letters spin like a slot machine and land on the word.
- **Content the user must provide:** text: the text to show
- **Duration:** 0.9s · 0.15s stagger
- **Easing:** easeOutQuart
- **Spec:** Each letter sits in a one-row window and scrolls through a column of 5 random letters before landing on its final letter over 0.9s. Letters stop 0.15s apart from left to right.

### M-534 · Slot Machine · Fast
- Variant of M-060. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-060

### M-809 · Slot Machine · Boxed
- Variant of M-060. put the text inside a solid dark teal #102E33 box with rounded corners and white text. Any accent effect of the motion stays on top of it.
- **Content the user must provide:** same as M-060
