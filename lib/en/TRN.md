# TRN — Transitions


### M-016 · Circle Reveal
- **When to use:** Swap the background or scene from a point, like your finger or face.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeOutCubic
- **Spec:** The new scene is revealed through a circular mask that grows from a chosen point (e.g. a fingertip) from radius 0 to full-frame diagonal over 0.6s, with a 30px soft edge. A thin accent ring expands just ahead of the edge and fades out.

### M-279 · Circle Reveal · Fast
- Variant of M-016. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-016

### M-554 · Circle Reveal · Slow
- Variant of M-016. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-016

### M-829 · Circle Reveal · Gold
- Variant of M-016. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-016

### M-017 · Linear Wipe
- **When to use:** A clear transition between two clips or places.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInOutCubic
- **Spec:** The new scene wipes in across the frame behind a moving vertical edge over 0.5s. The edge has a white 4px line with an accent glow.

### M-293 · Linear Wipe · Fast
- Variant of M-017. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-017

### M-568 · Linear Wipe · Slow
- Variant of M-017. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-017

### M-843 · Linear Wipe · Gold
- Variant of M-017. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-017

### M-018 · Light Sweep
- **When to use:** A magic change, like "look how it changed".
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.7s
- **Easing:** easeInOutSine
- **Spec:** A bright warm diagonal light band (about 15% of the frame wide, angled 105°) sweeps across the frame over 0.7s. The scene swaps to the new one exactly as the band passes the center.

### M-307 · Light Sweep · Fast
- Variant of M-018. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-018

### M-582 · Light Sweep · Slow
- Variant of M-018. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-018

### M-857 · Light Sweep · Gold
- Variant of M-018. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-018

### M-019 · Zoom Blur
- **When to use:** A fast, punchy cut between two clips.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.4s out · 0.4s in
- **Easing:** easeInExpo / easeOutExpo
- **Spec:** The outgoing clip scales to 170% with a radial blur of about 10px and fades out over 0.4s (easeInExpo). The incoming clip starts at 160% blurred and settles to 100% sharp over 0.4s (easeOutExpo).

### M-321 · Zoom Blur · Fast
- Variant of M-019. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-019

### M-596 · Zoom Blur · Slow
- Variant of M-019. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-019

### M-871 · Zoom Blur · Gold
- Variant of M-019. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-019

### M-020 · Whip Pan
- **When to use:** Cut between two shots as if the camera spun.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.35s
- **Easing:** easeInOutQuart
- **Spec:** The outgoing clip slides out to one side with heavy horizontal motion blur, and the incoming clip slides in from the opposite side over 0.35s total. Add a fast "whoosh" sound.

### M-335 · Whip Pan · Fast
- Variant of M-020. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-020

### M-610 · Whip Pan · Slow
- Variant of M-020. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-020

### M-885 · Whip Pan · Gold
- Variant of M-020. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-020

### M-101 · Fade Through Black
- **When to use:** A calm transition through a moment of black.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.3s out · 0.3s in
- **Easing:** easeInOutSine
- **Spec:** The outgoing clip fades to full black over 0.3s, holds black for 2–4 frames, then the new clip fades in from black over 0.3s.

### M-349 · Fade Through Black · Fast
- Variant of M-101. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-101

### M-624 · Fade Through Black · Slow
- Variant of M-101. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-101

### M-899 · Fade Through Black · Gold
- Variant of M-101. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-101

### M-102 · Cross Dissolve
- **When to use:** The classic soft blend from one shot into the next.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** linear
- **Spec:** The new clip fades in on top of the old one from 0 to 100% over 0.5s while both play.

### M-363 · Cross Dissolve · Fast
- Variant of M-102. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-102

### M-638 · Cross Dissolve · Slow
- Variant of M-102. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-102

### M-913 · Cross Dissolve · Gold
- Variant of M-102. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-102

### M-103 · Slide Push
- **When to use:** The new shot pushes the old one off screen.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.45s
- **Easing:** easeInOutQuart
- **Spec:** The new clip slides in from the right edge while pushing the old clip out to the left at the same speed over 0.45s.

### M-377 · Slide Push · Fast
- Variant of M-103. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-103

### M-652 · Slide Push · Slow
- Variant of M-103. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-103

### M-927 · Slide Push · Gold
- Variant of M-103. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-103

### M-104 · Diagonal Wipe
- **When to use:** A slanted wipe, livelier than a straight one.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInOutCubic
- **Spec:** The new clip is revealed behind a soft-edged diagonal line (135°) that travels from the top-left corner to the bottom-right over 0.5s.

### M-391 · Diagonal Wipe · Fast
- Variant of M-104. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-104

### M-666 · Diagonal Wipe · Slow
- Variant of M-104. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-104

### M-941 · Diagonal Wipe · Gold
- Variant of M-104. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-104

### M-105 · Iris Close/Open
- **When to use:** A circle closes on one shot and opens on the next, old-film style.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.4s close · 0.4s open
- **Easing:** easeInOutCubic
- **Spec:** A circular mask shrinks to zero on the face of the outgoing clip (0.4s), then the new clip opens from the same point with a growing circle (0.4s). Black between.

### M-403 · Iris Close/Open · Fast
- Variant of M-105. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-105

### M-678 · Iris Close/Open · Slow
- Variant of M-105. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-105

### M-953 · Iris Close/Open · Gold
- Variant of M-105. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-105

### M-106 · Clock Wipe
- **When to use:** The new shot sweeps in like a clock hand.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeInOutSine
- **Spec:** The new clip is revealed by a radial sweep around the center, starting at 12 o clock and going clockwise a full 360° over 0.6s.

### M-415 · Clock Wipe · Fast
- Variant of M-106. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-106

### M-690 · Clock Wipe · Slow
- Variant of M-106. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-106

### M-965 · Clock Wipe · Gold
- Variant of M-106. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-106

### M-107 · Blinds
- **When to use:** The new shot opens through vertical blinds.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInOutCubic
- **Spec:** The frame is split into 6 vertical strips. Each strip reveals the new clip by growing from its right edge to full width over 0.5s.

### M-426 · Blinds · Fast
- Variant of M-107. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-107

### M-701 · Blinds · Slow
- Variant of M-107. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-107

### M-976 · Blinds · Gold
- Variant of M-107. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-107

### M-108 · Split Doors
- **When to use:** The shot splits in half and opens like doors.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeInOutQuart
- **Spec:** The outgoing clip is cut down the middle; the two halves slide apart to the left and right over 0.6s, revealing the new clip behind them.

### M-437 · Split Doors · Fast
- Variant of M-108. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-108

### M-712 · Split Doors · Slow
- Variant of M-108. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-108

### M-987 · Split Doors · Gold
- Variant of M-108. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-108

### M-109 · Diamond Reveal
- **When to use:** The new shot opens from a growing diamond.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeOutCubic
- **Spec:** The new clip is revealed through a diamond-shaped mask that grows from the face point until it covers the frame over 0.6s.

### M-447 · Diamond Reveal · Fast
- Variant of M-109. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-109

### M-722 · Diamond Reveal · Slow
- Variant of M-109. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-109

### M-997 · Diamond Reveal · Gold
- Variant of M-109. add a thin gold #FFC857 light streak (about 1.2% wide) that sweeps across the frame at the moment of the transition.
- **Content the user must provide:** same as M-109

### M-110 · Glitch Transition
- **When to use:** A glitchy cut, great for cyber content.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.4s
- **Easing:** steps
- **Spec:** For 0.4s the new clip flashes in through random horizontal slices with ±8% offsets, changing every 2 frames, then locks in clean. Add a digital noise sound.

### M-456 · Glitch Transition · Fast
- Variant of M-110. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-110

### M-731 · Glitch Transition · Slow
- Variant of M-110. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-110

### M-111 · Spin Transition
- **When to use:** The old shot spins out, the new one spins in.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInOutCubic
- **Spec:** The outgoing clip rotates 180° while shrinking to 20% and fading out; the new clip rotates in from -180° and 20% to full size over 0.5s.

### M-465 · Spin Transition · Fast
- Variant of M-111. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-111

### M-740 · Spin Transition · Slow
- Variant of M-111. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-111

### M-112 · Flash White
- **When to use:** A cut hidden in a white flash, bold and sudden.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.25s
- **Easing:** easeOut
- **Spec:** A full white flash peaks in 2 frames exactly on the cut, then fades over 0.25s to reveal the new clip.

### M-473 · Flash White · Fast
- Variant of M-112. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-112

### M-748 · Flash White · Slow
- Variant of M-112. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-112

### M-113 · Color Flash
- **When to use:** A cut hidden in a brand-color flash.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.3s
- **Easing:** easeOut
- **Spec:** Same as M-112 but the flash is the brand accent color at 90% opacity.

### M-481 · Color Flash · Fast
- Variant of M-113. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-113

### M-756 · Color Flash · Slow
- Variant of M-113. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-113

### M-114 · Corner Reveal
- **When to use:** The new shot grows in from a corner.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeOutCubic
- **Spec:** The new clip is revealed through a circle that grows from the bottom-left corner until it covers the frame over 0.6s.

### M-489 · Corner Reveal · Fast
- Variant of M-114. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-114

### M-764 · Corner Reveal · Slow
- Variant of M-114. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-114

### M-115 · Cube Rotate
- **When to use:** The two shots act as faces of a rotating cube.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeInOutCubic
- **Spec:** With 3D perspective, the outgoing clip rotates 90° away on its left edge while the new clip rotates in from -90° on its right edge, like a turning cube, over 0.6s.

### M-497 · Cube Rotate · Fast
- Variant of M-115. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-115

### M-772 · Cube Rotate · Slow
- Variant of M-115. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-115

### M-116 · Zoom Through
- **When to use:** The camera dives into one shot and comes out in the next.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInExpo / easeOutCubic
- **Spec:** The outgoing clip scales to 400% and fades out quickly (0.3s); the new clip grows from 60% to 100% while fading in (0.3s), overlapping slightly.

### M-505 · Zoom Through · Fast
- Variant of M-116. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-116

### M-780 · Zoom Through · Slow
- Variant of M-116. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-116

### M-117 · Strip Slide
- **When to use:** The new shot slides in as horizontal strips, one after another.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s · 0.06s stagger
- **Easing:** easeOutQuart
- **Spec:** The new clip is cut into 5 horizontal strips; each strip slides in from the right over 0.5s, starting 0.06s after the one above it.

### M-513 · Strip Slide · Fast
- Variant of M-117. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-117

### M-788 · Strip Slide · Slow
- Variant of M-117. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-117

### M-118 · Light Leak
- **When to use:** A warm light leak washes over the cut, film style.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.8s
- **Easing:** easeInOutSine
- **Spec:** Warm orange and red light blobs (screen blend) drift across the frame over 0.8s; the cut to the new clip happens at the brightest moment.

### M-521 · Light Leak · Fast
- Variant of M-118. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-118

### M-796 · Light Leak · Slow
- Variant of M-118. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-118

### M-119 · Smooth Cut
- **When to use:** A cut between similar shots that hides the jump.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.3s
- **Easing:** easeOutQuad
- **Spec:** The new clip fades in over 0.3s while scaling from 105% to 100%, which hides small position jumps between two similar takes.

### M-529 · Smooth Cut · Fast
- Variant of M-119. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-119

### M-804 · Smooth Cut · Slow
- Variant of M-119. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-119

### M-120 · Swipe Up
- **When to use:** Like swiping a story up to the next clip.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.4s
- **Easing:** easeInOutQuart
- **Spec:** The outgoing clip slides up out of the top edge while the new clip slides up from the bottom edge at the same speed over 0.4s.

### M-537 · Swipe Up · Fast
- Variant of M-120. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-120

### M-812 · Swipe Up · Slow
- Variant of M-120. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-120

### M-267 · Shape Morph
- **When to use:** A shape morphs smoothly into another.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.6s
- **Easing:** easeInOutCubic
- **Spec:** Interpolate between shapes (circle → rounded square → leaf) by animating corner radii and rotation, or by morphing matching SVG paths.

### M-543 · Shape Morph · Fast
- Variant of M-267. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-267

### M-818 · Shape Morph · Slow
- Variant of M-267. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-267

### M-268 · Liquid Reveal
- **When to use:** A liquid blob grows to cover the cut.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.7s
- **Easing:** easeInOutCubic
- **Spec:** An organic blob shape in the accent color grows from the center while its border radius wobbles, covers the frame, then fades to reveal the new clip.

### M-545 · Liquid Reveal · Fast
- Variant of M-268. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-268

### M-820 · Liquid Reveal · Slow
- Variant of M-268. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-268

### M-269 · Ink Splash Reveal
- **When to use:** The new shot appears through growing ink splashes.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.7s
- **Easing:** easeOutCubic
- **Spec:** Reveal the new clip through a mask of several overlapping circles (ink splash shape) that scales up from the center to cover the frame.

### M-547 · Ink Splash Reveal · Fast
- Variant of M-269. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-269

### M-822 · Ink Splash Reveal · Slow
- Variant of M-269. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-269

### M-270 · Film Burn
- **When to use:** A hot film-burn flare hides the cut.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.8s
- **Easing:** easeInOutSine
- **Spec:** A bright white-yellow-orange burn blob expands from one corner (screen blend), peaks at full brightness on the cut, then fades.

### M-549 · Film Burn · Fast
- Variant of M-270. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-270

### M-824 · Film Burn · Slow
- Variant of M-270. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-270

### M-271 · Match Cut Slide
- **When to use:** A movement in one shot continues in the next.
- **Content the user must provide:** No content needed from you.
- **Duration:** 0.5s
- **Easing:** easeInOutCubic
- **Spec:** Cut on the motion: the outgoing clip moves out in the direction of the action and the incoming clip continues the same direction and speed.

### M-550 · Match Cut Slide · Fast
- Variant of M-271. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-271

### M-825 · Match Cut Slide · Slow
- Variant of M-271. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-271
