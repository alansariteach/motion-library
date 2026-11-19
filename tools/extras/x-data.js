/* ===== Extra libraries: palettes, caption styles, elements, recipes, sounds ===== */
var XBASE='https://alansariteach.github.io/motion-library/';
/* Palettes: [id, en, ar, bg, text, accent, highlight, use_en, use_ar] */
var CPS=[
 ['CP-01','Gulf Sand','رمل الخليج','#102E33','#F6EFE2','#E3643F','#FFC857','The Alansari.Tech house look: calm teal with a coral accent.','هوية Alansari.Tech: أزرق خليجي هادي مع لمسة مرجانية.'],
 ['CP-02','Sand Light','رمل فاتح','#EFE6D8','#1F2A2E','#0F5B66','#E3643F','Light, warm background for tips and explainers.','خلفية فاتحة دافية للنصايح والشروحات.'],
 ['CP-03','Midnight Gold','ذهبي ليلي','#0B0B0F','#F5F0E6','#D4AF37','#FFFFFF','Luxury products, perfumes, jewellery.','للمنتجات الفخمة: عطور، ذهب، ساعات.'],
 ['CP-04','Neon Cyber','سايبر نيون','#0A0E1A','#E6F1FF','#00E5FF','#FF2E88','Tech, AI and cybersecurity news.','أخبار التقنية والذكاء الاصطناعي والأمن السيبراني.'],
 ['CP-05','Clean White','أبيض نظيف','#FFFFFF','#111111','#2563EB','#FACC15','Simple, professional, easy to read.','بسيط واحترافي وسهل القراءة.'],
 ['CP-06','Bold Yellow','أصفر جريء','#111111','#FFFFFF','#FFD60A','#FF3B30','The classic viral-caption look.','ستايل الكابشن المشهور في الريلز.'],
 ['CP-07','Ramadan Night','ليالي رمضان','#1B1035','#F7EFD8','#E8B04B','#7A5CFA','Ramadan, Eid and religious content.','رمضان والعيد والمحتوى الديني.'],
 ['CP-08','Kuwait Flag','ألوان العلم','#FFFFFF','#000000','#007A3D','#CE1126','National Day and national occasions.','العيد الوطني والمناسبات الوطنية.'],
 ['CP-09','Medical Calm','طبي هادي','#F2F8FC','#0C2B40','#0E7CC2','#20B486','Clinics, health and patient education.','العيادات والصحة وتوعية المرضى.'],
 ['CP-10','Coffee','قهوة','#2B1D14','#F3E6D3','#C68B59','#E9C46A','Cafés, food and cosy content.','الكافيهات والأكل والمحتوى الدافي.'],
 ['CP-11','Sunset','غروب','#2D1B3D','#FFF4E6','#FF7A45','#FFC145','Stories, travel and lifestyle.','القصص والسفر واللايف ستايل.'],
 ['CP-12','Mint Fresh','نعناع','#0F2A27','#EFFFFA','#3DDBB0','#FFE66D','Fresh, positive, wellness.','منعش وإيجابي، للصحة والرياضة.'],
 ['CP-13','Mono','أبيض وأسود','#000000','#FFFFFF','#FFFFFF','#8A8A8A','Podcasts and serious talk.','البودكاست والكلام الجدي.'],
 ['CP-14','Royal Blue','أزرق ملكي','#0B1F4D','#FFFFFF','#3B82F6','#FBBF24','Education, courses, tutorials.','التعليم والكورسات والشروحات.'],
 ['CP-15','Breaking Red','عاجل أحمر','#141414','#FFFFFF','#E11D2E','#FFFFFF','Breaking news, offers, urgency.','الأخبار العاجلة والعروض والاستعجال.'],
 ['CP-16','Ocean','محيط','#03254C','#E8F6FF','#1CA7EC','#9CF6F6','Travel, sea, summer.','السفر والبحر والصيف.'],
 ['CP-17','Forest','غابة','#16251C','#EEF5E9','#4CAF50','#D9A441','Nature, outdoors, organic products.','الطبيعة والبر والمنتجات الطبيعية.'],
 ['CP-18','Pastel','باستيل','#FFF5F7','#3D2C3E','#F497B6','#8FD3C7','Beauty, kids, soft content.','الجمال والأطفال والمحتوى الناعم.'],
 ['CP-19','Tech Purple','بنفسجي تقني','#120B2E','#F1ECFF','#8B5CF6','#22D3EE','Apps, startups, AI tools.','التطبيقات والشركات الناشئة وأدوات الذكاء.'],
 ['CP-20','Retro 80s','ريترو','#1A1033','#FFF1F8','#FF4FD8','#29E7FF','Gaming, music, fun edits.','الألعاب والموسيقى والمونتاج المرح.'],
 ['CP-21','Corporate Navy','رسمي كحلي','#F7F8FA','#0F1C2E','#1E3A5F','#C9A227','Companies, events, formal content.','الشركات والفعاليات والمحتوى الرسمي.'],
 ['CP-22','Desert Rose','وردي صحراوي','#F4E4DC','#3E2A26','#C0675B','#8C5E3C','Fashion, abayas, home decor.','الأزياء والعبايات وديكور البيت.'],
 ['CP-23','Matcha','ماتشا','#F1F5E8','#22301D','#7BA05B','#E07A5F','Healthy food and calm vlogs.','الأكل الصحي والفلوقات الهادية.'],
 ['CP-24','Carbon Orange','كربون برتقالي','#18181B','#FAFAFA','#F97316','#A3E635','Cars, sports, energy.','السيارات والرياضة والحماس.']
].map(function(a){return {id:a[0],en:a[1],ar:a[2],bg:a[3],tx:a[4],ac:a[5],hl:a[6],ue:a[7],ua:a[8]};});

/* Caption styles: id, en, ar, motion, font, palette, pos (b bottom / c center), words per line, look, use */
var CSS_=[
 ['CS-01','Gulf Karaoke','كاريوكي خليجي','M-011','FA-02','CP-01','b',3,'kara','The house style: the spoken word turns gold.','ستايل البيت: الكلمة اللي تنقال تتلون ذهبي.'],
 ['CS-02','Yellow Pop','بوب أصفر','M-086','FA-16','CP-06','c',3,'pop','Viral talking-head captions, the active word grows.','كابشن الريلز المشهور، الكلمة الحالية تكبر.'],
 ['CS-03','Neon Box','مربع نيون','M-014','FA-20','CP-04','c',3,'box','Tech news: the active word sits in a neon box.','للأخبار التقنية: الكلمة الحالية داخل مربع نيون.'],
 ['CS-04','One-Word Punch','كلمة كلمة','M-015','FA-32','CP-06','c',1,'one','Fast, energetic edits, one big word at a time.','للمونتاج السريع: كلمة وحدة كبيرة كل مرة.'],
 ['CS-05','Clean Pill','كبسولة نظيفة','M-089','FA-57','CP-05','b',4,'pill','Calm, professional, readable on any footage.','هادي واحترافي ويبين على أي فيديو.'],
 ['CS-06','Bold Outline','حدود عريضة','M-090','FA-31','CP-13','c',2,'out','Big white outline text, active word filled.','نص كبير بحدود بيضا، والكلمة الحالية تتعبى.'],
 ['CS-07','Underline Active','خط تحت الكلمة','M-085','FA-50','CP-14','b',3,'under','Tutorials and courses.','للشروحات والكورسات.'],
 ['CS-08','Highlighter','قلم تظليل','M-095','FA-04','CP-02','b',3,'hl','Light, friendly tips.','للنصايح الخفيفة والودية.'],
 ['CS-09','Podcast Two-Line','بودكاست سطرين','M-081','FA-28','CP-13','b',5,'two','Long talk and podcasts: two calm lines.','للكلام الطويل والبودكاست: سطرين هاديين.'],
 ['CS-10','Neon Glow','توهج نيون','M-087','FA-51','CP-20','c',2,'glow','Gaming and music, the active word glows.','للألعاب والموسيقى، الكلمة الحالية تتوهج.'],
 ['CS-11','Handwritten','بخط اليد','M-083','FA-47','CP-18','b',3,'fade','Soft, personal stories and vlogs.','للقصص الشخصية والفلوقات الناعمة.'],
 ['CS-12','Ramadan Naskh','نسخ رمضاني','M-083','FA-06','CP-07','c',3,'kara','Religious and Ramadan content in a classic Naskh.','للمحتوى الديني ورمضان بخط نسخ كلاسيكي.'],
 ['CS-13','News Bar','شريط أخبار','M-098','FA-39','CP-15','b',4,'bar','Breaking news: captions on a red bar.','للأخبار العاجلة: الكابشن على شريط أحمر.'],
 ['CS-14','Size Mix','أحجام مختلفة','M-096','FA-61','CP-11','c',3,'mix','Story hooks: the key word is bigger.','لبداية القصص: الكلمة المهمة أكبر.'],
 ['CS-15','Bilingual','عربي وإنجليزي','M-272','FA-02','CP-01','b',3,'bi','Arabic line with English under it.','سطر عربي وتحته الترجمة بالإنجليزي.'],
 ['CS-16','Keyword Color','لون الكلمة المهمة','M-088','FA-12','CP-12','c',3,'key','Only the important words take the accent colour.','بس الكلمات المهمة تاخذ لون الهوية.']
].map(function(a){return {id:a[0],en:a[1],ar:a[2],m:a[3],f:a[4],p:a[5],pos:a[6],w:a[7],look:a[8],ue:a[9],ua:a[10]};});
var CS_LOOK={
 kara:['the active word changes to the highlight colour, the others stay in the text colour','الكلمة الحالية تتلون بلون التظليل، والباقي بلون النص'],
 pop:['the active word scales up about 115% and takes the accent colour','الكلمة الحالية تكبر حوالي 115% وتاخذ لون الهوية'],
 box:['the active word sits in a rounded accent-coloured box with dark text','الكلمة الحالية داخل مربع بلون الهوية بزوايا دائرية والنص غامق'],
 one:['one word at a time, very large, centred, with a quick 90 ms scale pop','كلمة وحدة كل مرة، كبيرة جداً بالنص، مع تكبير سريع 90 ملي ثانية'],
 pill:['the whole line sits in a dark semi-transparent pill, the active word in the accent colour','السطر كله داخل كبسولة غامقة شبه شفافة، والكلمة الحالية بلون الهوية'],
 out:['words are white outlines only, the active word fills solid','الكلمات حدود بيضا بس، والكلمة الحالية تتعبى'],
 under:['an accent underline slides under the active word','خط بلون الهوية يتحرك تحت الكلمة الحالية'],
 hl:['a highlighter stroke in the highlight colour paints behind the active word','ضربة قلم تظليل بلون التظليل تنرسم ورا الكلمة الحالية'],
 two:['two lines, max 5 words each, the active word slightly brighter','سطرين، كل سطر 5 كلمات بالأكثر، والكلمة الحالية أوضح شوي'],
 glow:['the active word glows in the accent colour (soft blur about 1.5%)','الكلمة الحالية تتوهج بلون الهوية (ضبابية ناعمة حوالي 1.5%)'],
 fade:['words fade in one by one as they are spoken','الكلمات تظهر بهدوء وحدة وحدة مع الكلام'],
 bar:['the line sits on a full-width accent bar at the bottom, active word underlined','السطر على شريط بلون الهوية بعرض الشاشة تحت، والكلمة الحالية تحتها خط'],
 mix:['important words are about 1.6x bigger and in the accent colour','الكلمات المهمة أكبر حوالي 1.6 مرة وبلون الهوية'],
 bi:['Arabic line on top, English translation smaller underneath, active Arabic word highlighted','السطر العربي فوق والترجمة الإنجليزية أصغر تحته، والكلمة العربية الحالية متلونة'],
 key:['only key words (nouns, numbers) take the accent colour, everything else stays white','بس الكلمات المهمة (الأسماء والأرقام) تاخذ لون الهوية، والباقي أبيض']};

/* Elements: id, en, ar, preview key, sound, needs(ar,en), spec_en, spec_ar, use_en, use_ar */
var ELS=[
 ['EL-01','Follow Button','زر تابعني','fol','SX-08',['نص الزر','the button text'],'A rounded accent pill reading "Follow" (or the user text) springs in from below, a finger tap ripple hits it after 0.6 s and it turns to "Following ✓".','زر كبسولة بلون الهوية مكتوب فيه "تابعني" (أو نص المستخدم) يطلع من تحت بنطة، وبعد 0.6 ثانية ينضغط بموجة لمس ويتحول لـ "تتابعه ✓".','End of the video.','نهاية الفيديو.'],
 ['EL-02','Subscribe Button','زر اشترك','sub','SX-14',['نص الزر','the button text'],'A red YouTube-style "Subscribe" button pops in, gets tapped, turns grey "Subscribed" and a bell icon rings next to it.','زر "اشترك" أحمر مثل يوتيوب يطلع، ينضغط، يصير رمادي "مشترك" وجرس يرن جنبه.','YouTube Shorts endings.','نهاية شورتس يوتيوب.'],
 ['EL-03','Link in Bio','الرابط بالبايو','bio','SX-09',['النص','the text'],'A pill reading "Link in bio" with an arrow pointing up that bounces three times, near the top safe zone.','كبسولة مكتوب فيها "الرابط بالبايو" وسهم يأشر فوق ويتنطط 3 مرات، قريب من أعلى المنطقة الآمنة.','When you mention a link.','لمن تذكر رابط.'],
 ['EL-04','Comment Keyword','اكتب كلمة بالتعليقات','kw','SX-25',['الكلمة اللي يكتبونها','the keyword viewers type'],'A comment box slides up, the keyword is typed letter by letter inside it, then a send arrow pulses. Caption above: "Comment the word".','صندوق تعليق يطلع من تحت، والكلمة تنكتب حرف حرف داخله، وبعدها سهم الإرسال ينبض. وفوقه: "اكتب الكلمة بالتعليقات".','Comment-to-get-the-link calls to action.','لمن تطلب منهم يعلقون عشان ترسل لهم الرابط.'],
 ['EL-05','Hand-drawn Arrow','سهم مرسوم','arw','SX-05',['وين يأشر','what it points at'],'A hand-drawn curved arrow in the accent colour draws itself (stroke animation, 0.5 s) towards the target and wiggles once.','سهم منحني مرسوم باليد بلون الهوية ينرسم بنفسه (0.5 ثانية) ناحية الهدف ويهتز مرة.','Pointing at something on screen.','للتأشير على شي بالشاشة.'],
 ['EL-06','Scribble Circle','دائرة شخبطة','cir','SX-05',['وش تدور عليه','what to circle'],'A rough marker circle draws around the target in one stroke, slightly overshooting like a real pen.','دائرة قلم ماركر تنرسم حول الهدف بضربة وحدة، وتطلع شوي برا مثل القلم الحقيقي.','Highlighting a detail.','لإبراز تفصيل.'],
 ['EL-07','Corner Brackets','زوايا إطار','brk','SX-12',['وش تحيطه','what to frame'],'Four L-shaped corner brackets fly in from the screen corners and lock around the subject, then pulse once.','أربع زوايا على شكل L تجي من أطراف الشاشة وتقفل حول الشي، وبعدها تنبض مرة.','Framing a product or face.','لتأطير منتج أو وجه.'],
 ['EL-08','Part Badge','شارة الجزء','prt','SX-12',['رقم الجزء والعدد','the part number and total'],'A small badge "Part 1/3" drops into the top corner with a soft bounce and stays.','شارة صغيرة "الجزء 1/3" تنزل بالزاوية فوق بنطة خفيفة وتبقى.','Series videos.','لفيديوهات السلاسل.'],
 ['EL-09','Watch Till End','تابع للنهاية','end','SX-20',['النص','the text'],'A banner "Watch till the end" slides in, a progress line fills under it, and an eye icon blinks.','شريط "تابع للنهاية" يطلع، وخط تقدم يتعبى تحته، وأيقونة عين ترمش.','Hooks that promise a payoff.','للهوك اللي يوعد بشي بالنهاية.'],
 ['EL-10','NEW Stamp','ختم جديد','new','SX-17',['النص','the text'],'A rotated stamp "NEW" slams down from 160% to 100% with a small dust burst and a 2% screen shake.','ختم مايل "جديد" ينزل بقوة من 160% لـ 100% مع غبار خفيف واهتزاز للشاشة 2%.','Launches and updates.','للإطلاقات والتحديثات.'],
 ['EL-11','Speech Bubble','فقاعة كلام','bub','SX-10',['الكلام','the text'],'A speech bubble pops in next to the speaker, its tail pointing at the mouth, text types in.','فقاعة كلام تطلع جنب المتكلم وذيلها يأشر على فمه، والنص ينكتب.','Inner thoughts or quoting someone.','للتفكير الداخلي أو اقتباس كلام أحد.'],
 ['EL-12','Tape Label','شريط لاصق','tap','SX-04',['النص','the text'],'A strip of paper tape with the text stretches across at a slight angle as if stuck on by hand.','شريط لاصق ورقي فيه النص ينفرد بزاوية مايلة كأنه انلصق باليد.','Titles in casual vlogs.','للعناوين في الفلوقات العفوية.'],
 ['EL-13','Price Burst','نجمة السعر','pri','SX-15',['السعر','the price'],'A star-burst badge spins in 90 degrees with the price inside, then gently pulses.','شارة على شكل نجمة تدور 90 درجة وتطلع وفيها السعر، وبعدها تنبض بهدوء.','Offers and prices.','للعروض والأسعار.'],
 ['EL-14','Swipe Hint','اسحب','swp','SX-04',['النص','the text'],'Two chevrons slide sideways in a loop with "Swipe" text, like a carousel hint.','سهمين يتحركون للجنب بشكل متكرر مع كلمة "اسحب" مثل تلميح الكاروسيل.','Carousels and multi-part posts.','للكاروسيل والمنشورات المتعددة.'],
 ['EL-15','Save Reminder','احفظ الفيديو','sav','SX-15',['النص','the text'],'A bookmark icon drops in and fills with the accent colour, with "Save this" next to it.','أيقونة حفظ تنزل وتتعبى بلون الهوية، وجنبها "احفظ الفيديو".','Tips people will want later.','للنصايح اللي يحتاجونها بعدين.'],
 ['EL-16','REC Frame','إطار تسجيل','rec','SX-28',[],'Camera viewfinder corners, a blinking red REC dot and a running timer at the top.','زوايا عدسة كاميرا، ونقطة REC حمرا ترمش، وعداد وقت شغال فوق.','Behind-the-scenes and vlog look.','لشكل الكواليس والفلوق.'],
 ['EL-17','Emoji Sticker','ستيكر إيموجي','emo','SX-09',['الإيموجي','the emoji'],'A big emoji with a white sticker border pops in with a 15 degree wiggle, then floats.','إيموجي كبير بحد أبيض مثل الستيكر يطلع ويهتز 15 درجة، وبعدها يطفو.','Reactions.','للتفاعل وردة الفعل.'],
 ['EL-18','Checklist Card','بطاقة قائمة','chk','SX-15',['العناصر','the items'],'A card slides up and items tick off one by one with a green check.','بطاقة تطلع من تحت والعناصر تنعلّم وحدة وحدة بعلامة صح خضرا.','Steps, requirements, summaries.','للخطوات والمتطلبات والملخص.']
].map(function(a){return {id:a[0],en:a[1],ar:a[2],pv:a[3],sx:a[4],nd:a[5],se:a[6],sa:a[7],ue:a[8],ua:a[9]};});

/* Recipes */
var RCS=[
 {id:'R-01',en:'Tech News',ar:'نشرة تقنية',f:'FA-02',p:'CP-04',cs:'CS-03',ue:'Tech, AI and security news in under 40 s.',ua:'أخبار التقنية والذكاء الاصطناعي والأمن في أقل من 40 ثانية.',
  st:[['0–2s','Hook: crash zoom on your face and the headline decodes','الهوك: زوم سريع على وجهك والعنوان يتفك',['M-129','M-051','SX-06']],
      ['2–30s','Body: captions, keywords highlighted, screenshots in a laptop','المحتوى: كابشن، وتظليل الكلمات المهمة، واللقطات داخل لابتوب',['CS-03','M-006','M-228']],
      ['between','Cuts between news items','الانتقال بين الأخبار',['M-110','SX-23']],
      ['end','Call to action','النهاية',['EL-04','M-031']]]},
 {id:'R-02',en:'3 Quick Tips',ar:'3 نصايح سريعة',f:'FA-16',p:'CP-06',cs:'CS-02',ue:'Listicles: "3 things you must know".',ua:'فيديو قائمة: "3 أشياء لازم تعرفها".',
  st:[['0–2s','Hook: stacked kinetic title','الهوك: عنوان متراكب متحرك',['M-059','SX-17']],
      ['each tip','Number badge then the key word punches','رقم النصيحة وبعدها الكلمة المهمة تنضرب',['M-195','M-008','SX-09']],
      ['between','Slide push between tips','دفع جانبي بين النصايح',['M-103','SX-04']],
      ['end','Save reminder','تذكير بالحفظ',['EL-15','M-163']]]},
 {id:'R-03',en:'Product Promo',ar:'إعلان منتج',f:'FA-21',p:'CP-03',cs:'CS-05',ue:'Shops and brands: show a product and its price.',ua:'للمحلات والبراندات: اعرض المنتج وسعره.',
  st:[['0–2s','Punch-in and a shine across the product','زوم داخل ولمعة تمر على المنتج',['M-021','M-157','SX-16']],
      ['2–10s','Product on a tilting card, details in captions','المنتج على بطاقة تميل، والتفاصيل بالكابشن',['M-254','CS-05']],
      ['price','Price badge','شارة السعر',['EL-13','M-192','SX-15']],
      ['end','Logo shine and end card','لمعة الشعار وبطاقة النهاية',['M-185','M-187']]]},
 {id:'R-04',en:'Before / After',ar:'قبل وبعد',f:'FA-20',p:'CP-11',cs:'CS-14',ue:'Renovations, edits, glow-ups, results.',ua:'الترميم والتعديل والنتايج.',
  st:[['0–2s','Split screen: before and after side by side','شاشة مقسومة: قبل وبعد جنب بعض',['M-132','SX-04']],
      ['reveal','Circle reveal into the result','دائرة تكشف النتيجة',['M-016','SX-01']],
      ['detail','Point at the difference','أشّر على الفرق',['EL-06','EL-05']],
      ['end','Like burst','انفجار لايكات',['M-033','SX-09']]]},
 {id:'R-05',en:'Podcast Clip',ar:'مقطع بودكاست',f:'FA-28',p:'CP-13',cs:'CS-09',ue:'Cut a strong minute out of a long talk.',ua:'قص دقيقة قوية من كلام طويل.',
  st:[['0–2s','Podcast card with the guest','بطاقة البودكاست مع الضيف',['M-223','SX-20']],
      ['first line','Name lower third','اسم المتكلم تحت',['M-039']],
      ['body','Two-line captions and a small waveform','كابشن سطرين وموجة صوت صغيرة',['CS-09','M-214']],
      ['punchlines','Double punch-in on the strong lines','زوم مرتين على الجمل القوية',['M-131','SX-17']]]},
 {id:'R-06',en:'Screen Tutorial',ar:'شرح برنامج',f:'FA-50',p:'CP-14',cs:'CS-07',ue:'Explain an app or website step by step.',ua:'اشرح تطبيق أو موقع خطوة خطوة.',
  st:[['0–2s','Browser window pops in','نافذة متصفح تطلع',['M-229','SX-10']],
      ['steps','Cursor clicks with zoom to the cursor','المؤشر يضغط مع زوم على مكانه',['M-231','M-232','SX-07']],
      ['shortcuts','Keyboard shortcut and circle the button','اختصار الكيبورد ودائرة حول الزر',['M-237','EL-06']],
      ['end','Checklist of what we did','قائمة باللي سويناه',['EL-18','SX-15']]]},
 {id:'R-07',en:'Story Time',ar:'وقت القصة',f:'FA-21',p:'CP-11',cs:'CS-11',ue:'Personal stories that keep people to the end.',ua:'قصص شخصية تخلي الناس يكملون للنهاية.',
  st:[['0–2s','Freeze frame on the hook line','تجميد الصورة على جملة الهوك',['M-135','M-001','SX-18']],
      ['chapters','Chapter titles and letterbox bars','عناوين الفصول وأشرطة سينمائية',['M-191','M-138']],
      ['emotion','Slow motion on the big moment','حركة بطيئة على اللحظة الكبيرة',['M-136','SX-21']],
      ['end','Fade through black and a quote card','تلاشي للأسود وبطاقة اقتباس',['M-101','M-196']]]},
 {id:'R-08',en:'Sale Offer',ar:'عرض وخصومات',f:'FA-32',p:'CP-15',cs:'CS-04',ue:'Discounts, flash sales, limited offers.',ua:'الخصومات والعروض المحدودة.',
  st:[['0–2s','Crash zoom and NEW stamp','زوم سريع وختم "جديد"',['M-129','EL-10','SX-17']],
      ['discount','Discount number counts up','نسبة الخصم تعد لفوق',['M-040','SX-12']],
      ['urgency','Countdown to the end of the offer','عد تنازلي لنهاية العرض',['M-173']],
      ['end','Confetti and link in bio','قصاصات احتفال والرابط بالبايو',['M-030','EL-03','SX-09']]]},
 {id:'R-09',en:'Motivational Quote',ar:'اقتباس تحفيزي',f:'FA-06',p:'CP-03',cs:'CS-12',ue:'Calm quote videos.',ua:'فيديوهات اقتباس هادية.',
  st:[['whole','Slow push-in with bokeh lights','زوم بطيء مع أضواء بوكيه',['M-022','M-158']],
      ['text','Words appear one by one','الكلمات تطلع وحدة وحدة',['M-048','CS-12']],
      ['quote','Quote card with the author','بطاقة الاقتباس مع اسم قائله',['M-196']],
      ['end','Signature writes itself','التوقيع ينكتب بنفسه',['M-200','SX-05']]]},
 {id:'R-10',en:'Reply to Comment',ar:'رد على تعليق',f:'FA-02',p:'CP-01',cs:'CS-01',ue:'Answer a follower question on video.',ua:'جاوب سؤال متابع بفيديو.',
  st:[['0–2s','The comment types in on screen','التعليق ينكتب على الشاشة',['M-032','SX-25']],
      ['answer','Captions and arrow to what you show','كابشن وسهم على اللي تعرضه',['CS-01','M-068']],
      ['keywords','Scale punch on the key words','تكبير سريع على الكلمات المهمة',['M-008','SX-09']],
      ['end','Comment keyword call to action','اطلب منهم يعلقون كلمة',['EL-04']]]},
 {id:'R-11',en:'Event Invite',ar:'دعوة فعالية',f:'FA-21',p:'CP-21',cs:'CS-05',ue:'Invite people to an event, opening or course.',ua:'ادعُ الناس لفعالية أو افتتاح أو كورس.',
  st:[['0–2s','Title card drops in','بطاقة العنوان تنزل',['M-038','SX-17']],
      ['where','Map pin drops on the place','دبوس الخريطة ينزل على المكان',['M-199','SX-10']],
      ['when','Countdown to the date','عد تنازلي للموعد',['M-173','SX-12']],
      ['end','Light leak and end card','تسريب ضوء وبطاقة النهاية',['M-118','M-187']]]},
 {id:'R-12',en:'Talking Head Pro',ar:'كلام للكاميرا احترافي',f:'FA-02',p:'CP-01',cs:'CS-01',ue:'Any talking video, cut fast and clean.',ua:'أي فيديو كلام، بمونتاج سريع ونظيف.',
  st:[['0–2s','Big title behind you','عنوان كبير وراك',['M-201','SX-20']],
      ['every 4–6 s','Punch-in to keep attention','زوم داخل عشان يشد الانتباه',['M-131','SX-02']],
      ['keywords','Captions and scale punch on key words','كابشن وتكبير على الكلمات المهمة',['CS-01','M-008']],
      ['end','Name lower third and follow button','اسمك تحت وزر المتابعة',['M-039','EL-01']]]}
];

/* Sounds: id, en, ar, type */
var SXS=[
 ['SX-01','Whoosh','ووش','whoosh'],['SX-02','Quick Whoosh','ووش سريع','whoosh'],['SX-03','Long Swoosh','سووش طويل','whoosh'],
 ['SX-04','Swipe','سحبة','transition'],['SX-05','Soft Swoosh','سووش ناعم','transition'],['SX-06','Hologram Glitch','قلتش هولوغرام','transition'],
 ['SX-07','Click','كليك','click'],['SX-08','UI Click','كليك واجهة','click'],['SX-09','Pop','بوب','pop'],['SX-10','Plop','بلوب','pop'],['SX-11','Pop In','بوب دخول','pop'],
 ['SX-12','Tick','تك','tick'],['SX-13','Tiny Tick','تك صغير','tick'],['SX-14','Notification Bell','جرس إشعار','ding'],['SX-15','Confirm Ding','دينق تأكيد','ding'],['SX-16','Triangle Shine','لمعة مثلث','ding'],
 ['SX-17','Soft Impact','ضربة ناعمة','impact'],['SX-18','Cinematic Impact','ضربة سينمائية','impact'],['SX-19','Dramatic Hit','ضربة درامية','impact'],
 ['SX-20','Riser','رايزر','riser'],['SX-21','Short Riser','رايزر قصير','riser'],['SX-22','Rewind','ترجيع','riser'],
 ['SX-23','Glitch','قلتش','glitch'],['SX-24','VHS Rewind','ترجيع VHS','glitch'],
 ['SX-25','Keyboard Typing','كتابة كيبورد','typing'],['SX-26','Digital Typing','كتابة رقمية','typing'],['SX-27','Data Reveal','كشف بيانات','typing'],['SX-28','Digital Blip','بليب رقمي','ui']
].map(function(a){return {id:a[0],en:a[1],ar:a[2],ty:a[3]};});
var SXT={whoosh:['Whoosh','ووش'],transition:['Transition','انتقال'],click:['Click','كليك'],pop:['Pop','بوب'],tick:['Tick','تك'],ding:['Ding','دينق'],impact:['Impact','ضربة'],riser:['Riser','رايزر'],glitch:['Glitch','قلتش'],typing:['Typing','كتابة'],ui:['UI','واجهة']};
function sxById(id){for(var i=0;i<SXS.length;i++)if(SXS[i].id===id)return SXS[i];return null;}
function sxUrl(s){return 'sfx/'+s.id+'.mp3';}

/* suggested sound for each motion (variants use their base) */
var SXR=[
 [/Typewriter|Typing|Search Typing|Comment Typing|Form Fill|Keyboard/i,'SX-25'],[/Scramble|Decode|Code Rain|Slot Machine/i,'SX-27'],
 [/Glitch|VHS|Chromatic|Hologram/i,'SX-23'],[/Rewind/i,'SX-22'],[/Like|Heart|Floating Hearts|Pop|Bounce|Sticker|Emoji|Elastic|Jello|Rubber/i,'SX-09'],
 [/Notification|Bell|DM|Chat|Message|Typing Dots/i,'SX-14'],[/Follow|Share|Save|Tap|Click|Cursor|Toggle|Link|Swipe Up|Tab Switch/i,'SX-08'],
 [/Counter|Countdown|Stat|Pie|Progress|Price|Badge|BPM|Clock|Step|Volume/i,'SX-12'],[/Check|Verified|Tick/i,'SX-15'],
 [/Crash|Punch|Shake|Slam|Shockwave|Flash|Hit|Stamp|Drop|Heartbeat|Impact/i,'SX-17'],[/Logo|End Card|Title Card|Chapter/i,'SX-18'],
 [/Shine|Sparkle|Flare|Light|Glow|Bokeh|Rays/i,'SX-16'],[/Whip|Zoom Blur|Zoom Through|Spin|Swipe|Push|Slide|Pan/i,'SX-02'],
 [/Riser|Dolly|Push-In|Slow|Speed Ramp|Time-Lapse|Day to Night/i,'SX-21'],[/Particle|Dust|Confetti|Spark|Orbit|Electric|Scan|Grid/i,'SX-28']];
var SXC={TXT:'SX-11',EMP:'SX-11',CAP:'SX-13',TRN:'SX-01',CAM:'SX-05',FX:'SX-28',SOC:'SX-08',LGO:'SX-18',PER:'SX-21',AUD:null,SCR:'SX-07',TRK:'SX-05',D3:'SX-03',TIM:'SX-22'};
var _sxc={};
function sxOf(m){var b=m.base||m.id;if(b in _sxc)return _sxc[b];var bm=null;for(var i=0;i<M.length;i++)if(M[i].id===b){bm=M[i];break;}
  var n=(bm||m).en,r=null;if(m.c==='AUD'){r=/Beat|Flash|Zoom|Shake/.test(n)?'SX-17':null;}else if(m.c==='CAP'){r=/Glitch/.test(n)?'SX-23':(/Pop|Drop|Bounce|Shadow/.test(n)?'SX-13':null);}else{for(var j=0;j<SXR.length;j++)if(SXR[j][0].test(n)){r=SXR[j][1];break;}if(!r)r=SXC[m.c];}
  _sxc[b]=r;return r;}

/* use-case tags for the motion filter */
var USES=[
 ['hook','For the hook','للهوك',/Punch|Crash|Whip Zoom|Double Punch|Scale Punch|Flash Hit|Glitch Text|Kinetic Stack|Slot Machine|Scramble|Zoom In Text|Drop In|Shockwave|Full-Screen Kinetic|3D Spin|Extruded|Text Behind|Background Flash|Clone|Freeze|Rewind Glitch|Beat Zoom|Split Reveal|Title Card|Neon Flicker/i],
 ['cta','For the ending / CTA','للنهاية',/Follow|Like Burst|Share|Save|Bell|Link Sticker|Swipe Up|Comment|End Card|Logo|Watermark|Profile Card|Mention|Verified|Signature|Sound On/i],
 ['num','For numbers','للأرقام',/Counter|Countdown|Stat Bars|Pie|Progress|Price|Notification Badge|BPM|Upload|Time-Lapse|Step Numbers|Volume|Slot Machine/i],
 ['prod','For products','للمنتجات',/Price|Badge|Card Flip|Tilt Card|Carousel|Coin|Float Shadow|Layer Explode|Ken Burns|Light Rays|Shine|Lens Flare|Sparkle|Sticker Cutout|Pop-Out|Phone Slide|Cube|Parallax|Orbit|Spotlight|Bokeh|Glow Outline/i],
 ['tut','For tutorials / screens','للشروحات',/App Window|Phone Scroll|Laptop|Browser|Cursor|Zoom to Cursor|Modal|Toggle|Loading|Keyboard|Tab Switch|Form|Upload|Arrow|Circle Around|Box Outline|Callout|Label Follow|Checklist|Step Numbers|Highlight Sweep|Underline|Screen Replace|Path Trace|Tracking Ring|Picture in Picture/i],
 ['pod','For podcasts / talk','للبودكاست',/Waveform|Equalizer|Visualizer|Mic|Podcast|Audio Pulse|Speaker Label|Two-Line|Bilingual|Lower Third|Quote Card|Karaoke|Split Screen|Volume/i],
 ['story','For stories','للقصص',/Chapter|Fade Through|Freeze|Slow Motion|Day to Night|Letterbox|Film Burn|Light Leak|Ken Burns|Quote|Map Pin|Time-Lapse|Vignette|Film Grain|Cross Dissolve|Slow Push|Boomerang|Echo Trail|Typewriter|Fade Up|Blur In|Portrait Mode|Rack Focus/i]];
var _ut={};
function usesOf(m){var b=m.base||m.id;if(_ut[b])return _ut[b];var bm=null;for(var i=0;i<M.length;i++)if(M[i].id===b){bm=M[i];break;}var n=(bm||m).en,o=[];
  USES.forEach(function(u){if(u[3].test(n))o.push(u[0]);});if(m.c==='AUD'&&o.indexOf('pod')<0)o.push('pod');if(m.c==='SCR'&&o.indexOf('tut')<0)o.push('tut');_ut[b]=o;return o;}
