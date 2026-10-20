# TRK — Tracking


### M-241 · Label Follow
- **When to use:** A label that sticks to a moving object.
- **Content the user must provide:** text: what to track (e.g. the red cup); text: the text to show
- **Duration:** live
- **Easing:** tracked
- **Spec:** Track a point on the object (optical flow or a tracker) and attach a label with a small pointer above it; the label follows the point every frame with slight smoothing.

### M-287 · Label Follow · Fast
- Variant of M-241. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-241

### M-562 · Label Follow · Slow
- Variant of M-241. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-241

### M-837 · Label Follow · Gold
- Variant of M-241. add a thin gold #FFC857 rim (about 0.5% wide) and a soft gold glow around the main element of this motion.
- **Content the user must provide:** same as M-241

### M-242 · Tracking Ring
- **When to use:** A ring that follows an object to point it out.
- **Content the user must provide:** text: what to track (e.g. the red cup)
- **Duration:** live
- **Easing:** tracked
- **Spec:** Track the object and draw a mint ring slightly larger than it, centered on the tracked point, with a soft pulse.

### M-301 · Tracking Ring · Fast
- Variant of M-242. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-242

### M-576 · Tracking Ring · Slow
- Variant of M-242. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-242

### M-851 · Tracking Ring · Gold
- Variant of M-242. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-242

### M-243 · Face Blur
- **When to use:** Hides a face or a plate for privacy.
- **Content the user must provide:** No content needed from you.
- **Duration:** live
- **Easing:** tracked
- **Spec:** Detect and track the face (or plate) and cover it with a rounded box that blurs what is behind it about 2.5%, following it every frame.

### M-315 · Face Blur · Fast
- Variant of M-243. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-243

### M-590 · Face Blur · Slow
- Variant of M-243. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-243

### M-865 · Face Blur · Gold
- Variant of M-243. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-243

### M-244 · Callout Line
- **When to use:** A line draws from an object to a note beside it.
- **Content the user must provide:** text: what to track (e.g. the red cup); text: the text to show
- **Duration:** 0.6s
- **Easing:** easeInOutCubic
- **Spec:** A thin line draws from the tracked point to a corner over 0.6s, then a small note box fades in at the end of the line.

### M-329 · Callout Line · Fast
- Variant of M-244. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-244

### M-604 · Callout Line · Slow
- Variant of M-244. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-244

### M-879 · Callout Line · Gold
- Variant of M-244. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-244

### M-245 · Screen Replace
- **When to use:** Puts another image inside a phone screen in the video.
- **Content the user must provide:** file: a screenshot or screen recording (it appears inside the frame)
- **Duration:** live
- **Easing:** tracked
- **Spec:** Track the four corners of the screen in the footage and warp your image or recording onto that quad every frame (corner pin), with a slight glare overlay.

### M-343 · Screen Replace · Fast
- Variant of M-245. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-245

### M-618 · Screen Replace · Slow
- Variant of M-245. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-245

### M-893 · Screen Replace · Gold
- Variant of M-245. add a thin gold #FFC857 rim (about 0.5% wide) and a soft gold glow around the main element of this motion.
- **Content the user must provide:** same as M-245

### M-246 · Arrow Follow
- **When to use:** An arrow that keeps pointing at a moving thing.
- **Content the user must provide:** text: what to track (e.g. the red cup)
- **Duration:** live
- **Easing:** tracked
- **Spec:** Track the object and keep an accent arrow just above it pointing down, bobbing slightly while it follows.

### M-357 · Arrow Follow · Fast
- Variant of M-246. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-246

### M-632 · Arrow Follow · Slow
- Variant of M-246. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-246

### M-907 · Arrow Follow · Gold
- Variant of M-246. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-246

### M-247 · Emoji Follow
- **When to use:** A sticker or emoji that follows a moving object.
- **Content the user must provide:** text: what to track (e.g. the red cup); file: the sticker or emoji image
- **Duration:** live
- **Easing:** tracked
- **Spec:** Track the object and stick a sticker (or emoji image) on it, scaled to its size and following its position and rotation.

### M-371 · Emoji Follow · Fast
- Variant of M-247. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-247

### M-646 · Emoji Follow · Slow
- Variant of M-247. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-247

### M-921 · Emoji Follow · Gold
- Variant of M-247. add a thin gold #FFC857 rim (about 0.5% wide) and a soft gold glow around the main element of this motion.
- **Content the user must provide:** same as M-247

### M-248 · Path Trace
- **When to use:** Draws the path an object travelled.
- **Content the user must provide:** text: what to track (e.g. the red cup)
- **Duration:** live
- **Easing:** linear
- **Spec:** Track the object and draw a dashed accent line along its past positions that builds up as it moves.

### M-385 · Path Trace · Fast
- Variant of M-248. the same motion 40% faster (multiply every duration by 0.6).
- **Content the user must provide:** same as M-248

### M-660 · Path Trace · Slow
- Variant of M-248. the same motion 60% slower and smoother (multiply every duration by 1.6).
- **Content the user must provide:** same as M-248

### M-935 · Path Trace · Gold
- Variant of M-248. use gold #FFC857 instead of the coral accent.
- **Content the user must provide:** same as M-248
