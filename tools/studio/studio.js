/* ===== Motion Studio app ===== */
(function(){
var L={
 ar:{title:'استوديو الموشن',back:'← المكتبة',lib:'الحركات',q:'ابحث: زوم، كتابة، M-021',all:'الكل',ft:'على الفيديو',ftNote:'هذي الحركة تشتغل على الفيديو نفسه، وتشوفها بالمعاينة وتطلع بالتصدير. الدائرة على الفيديو هي نقطة التركيز (مكان الزوم أو بداية الانتقال)، اسحبها لمكان ثاني. حركات الشخص تقص الشخص عن الخلفية بجهازك (أول مرة تنزّل ملف صغير). والانتقال يبين أحسن إذا حطيته عند مكان قص.',fxWait:'قاعد أجهّز قص الشخص…',trk:'🎯 تلحق راسي تلقائياً (إذا سحبتها بيدك توقف)',nSel:'محددة %n حركات',multiTip:'اسحب أي وحدة منهم على الفيديو وكلهم يتحركون مع بعض. تقدر تحدد أكثر من وحدة: Shift أو Ctrl مع الضغط، أو ارسم مربع بالماوس على التايم لاين، أو Ctrl+A للكل.',keepEach:'— خل كل وحدة على حالها —',unsel:'✖ إلغاء التحديد',delAll:'🗑 احذفهم كلهم',up:'⬆ فوق',down:'⬇ تحت',selAll:'☑️ حدد الكل',selCaps:'📝 حدد كل الكابشن',
  basket:'＋ من سلتي',drop:'ارفع الفيديو اللي تبي تسوي له مونتاج',dropS:'اسحبه هني أو اضغط تختاره، وتقدر تختار أكثر من فيديو مرة وحدة عشان تدمجهم. الفيديو يبقى بجهازك وما ينرفع لأي مكان.',dropQ:function(l){return '🎬 عندك حركات جاهزة تنضاف ('+l+'). ارفع فيديوك وتنحط عليه على طول.';},dropR:function(n){return 'عندك مشروع محفوظ فيه '+n+' حركة. ارفع نفس الفيديو عشان تكمل عليه.';},newP:'مشروع جديد',
  imPick:'🖼 حط صورتك بدل الشكل',imLogo:'🏷 حط شعاري',imBack:'↩ رجّع الشكل',imBad:'اختار صورة (PNG أو JPG).',play:'تشغيل',pause:'إيقاف',vol:'الصوت',zoom:'تكبير التايم لاين',inH:'⇤ البداية هني',outH:'النهاية هني ⇥',cutA:'✂ قص هني',cutB:'✂ قص هني',delB:'🗑 احذف',restore:'↩ رجّع الجزء',segT:'جزء من الفيديو',segDel:'🗑 احذف هالجزء',tip:'💡 اسحب الحركة على التايم لاين تقدّمها أو تأخرها، واسحب طرفها تطوّلها أو تقصّرها. وبالفيديو: اسحبها تغيّر مكانها، وبإصبعين (أو الدائرة الصفرا) تكبّرها وتصغّرها. ولقص الفيديو: حط المؤشر واضغط «✂ قص هني»، بعدين اضغط على الجزء اللي تبي تشيله واضغط «🗑 احذف». وأي حركة تختارها تقدر تحذفها بنفس الزر.',earlier:'⏪ قدّم',later:'أخّر ⏩',shorter:'أقصر',longer:'أطول',smaller:'➖ أصغر',bigger:'➕ أكبر',cutFrom:'من',cutTo:'إلى',silB:'✂️ قص السكتات',silT:'قص السكتات',silD:'ألقى الأماكن اللي ما فيها كلام بالفيديو وأشيلها، فيصير الفيديو أسرع وأقوى. تقدر ترجعها أو تضغط «تراجع».',silS:'الحساسية',silS1:'خفيف',silS2:'قوي',silM:'أقل طول للسكتة',silK:'أخلّي هامش قبل وبعد الكلام',silWait:'قاعد أسمع الفيديو…',silFound:function(n,t){return n?'لقيت '+n+' سكتة، مجموعها '+t+' ثانية.':'ما لقيت سكتات بهالإعدادات. جرّب «قوي» أو طول أقل.';},silGo:'✂️ قصها',silUndo:'↩ رجّع السكتات اللي انقصت',silNoA:'هالفيديو ما فيه صوت.',silDone:function(n,t){return 'تم ✓ انقص '+n+' سكتة ('+t+' ثانية).';},capB:'📝 كابشن',logoB:'🏷 الشعار',capT:'الكابشن على الفيديو',capD:'اكتب أو الصق الكلام اللي تقوله بالفيديو، أو خل الموقع يسمع الفيديو ويطلّع الكلام. بعدها اختار الستايل، وكل جملة تنحط على التايم لاين وتقدر تعدّلها.',capAI:'🎙 طلّع الكلام من الفيديو',capAIN:'مجاني ويشتغل بجهازك. أول مرة ينزّل البرنامج وبعدها ينحفظ. «الأدق» هو الأحسن للهجة الكويتية والخليجية، بس حجمه كبير ويكون أسرع بكثير على كمبيوتر بكروم. راجع الكلام وصحّحه بعدها.',capQ:'الدقة',capQ1:'سريع (80 ميقا، أقل دقة)',capQ2:'متوسط (250 ميقا)',capQ3:'الأدق: ينفع للهجة (تقريباً 1 قيقا أول مرة بس، الأحسن بالكمبيوتر)',capTx:'الكلام',capPh:'اكتب أو الصق الكلام هني… كل سطر يصير جملة لحاله، أو خله فقرة وحدة وأنا أقسمه.',capS:'شكل الكابشن (شوفه قبل لا تختار)',capNum:'اكتب رقم الحركة',capCat:'من وين',capCS:'الستايلات الجاهزة (CS)',capCAP:'كل حركات الكابشن',capByStyle:'— حسب الشكل —',capSample:'هذا مثال للكابشن',capNoNum:'ما لقيت هالرقم بين حركات الكابشن',capW:'كلمات بكل كابشن',capP:'المكان',capPb:'تحت',capPc:'بالنص',capPt:'فوق',capGo:'✓ ركّب الكابشن',capRm:'🗑 شيل الكابشن',capNo:'اكتب الكلام أول، أو طلّعه من الفيديو.',capDl:function(p){return 'قاعد أنزّل البرنامج… '+p+'%';},capRun:'قاعد أسمع الفيديو وأكتب الكلام… (الأدق ياخذ دقايق، خل الصفحة مفتوحة)',capRetry:'الكتابة الأولى ما كانت مضبوطة، قاعد أعيدها بطريقة أدق…',capAud:'قاعد أجهّز الصوت…',capOk:function(n){return 'تم ✓ طلع '+n+' سطر. راجعهم وصحّح أي كلمة، بعدين اضغط «ركّب الكابشن».';},capErr:'ما قدرت أطلّع الكلام. جرّب «سريع»، أو من الكمبيوتر بكروم، أو اكتب الكلام بنفسك.',capNoA:'هالفيديو ما فيه صوت.',capDone:function(n){return 'تم ✓ انحطّ '+n+' كابشن على التايم لاين.';},exRes:'الحجم',exUp:'أكبر من فيديوك',exRec:'ننصح فيه',exFps:'عدد الإطارات بالثانية',exF30:'عادي للريلز',exF60:'أنعم، والتصدير ياخذ ضعف الوقت',exQ:'الجودة',exQn:'عادية',exQns:'ملف أصغر',exQh:'عالية',exQx:'أعلى',exQxs:'ملف أكبر',exGo:'⬇ صدّر الحين',exNote:'كل ما كبر الحجم أو زادت الإطارات ياخذ التصدير وقت أطول. إذا جهازك ما يقدر على 4K أو 60 إطار، الموقع يصدّر بأحسن شي يقدر عليه.',ovT:'فيديو فوق الفيديو',ovTip:'اسحبه على الفيديو تغيّر مكانه، ومن الدائرة الصفرا تكبّره. وبالتايم لاين تسحبه يمين ويسار أو بين الخطوط، ولو سحبته فوق لخط الفيديو ينضم للفيديوهات الأساسية.',ovFull:'⛶ خله يملي الشاشة',ovMain:'⬆ رجّعه للفيديوهات الأساسية',ovNeed2:'لازم يكون فيه فيديو ثاني أساسي عشان تنزل هذا كطبقة.',addOv:'🎬 فيديو فوق الفيديو',cutMk:'جزء محذوف. اضغط عليه عشان ترجّعه',dur:'المدة (ث)',proj:'📁 المشروع',pVid:'الفيديو',pMot:'الحركات',pCap:'الكابشن',pTrn:'انتقالات',pFx:'تأثيرات',pSnd:'أصوات',pLogo:'الشعار',nMot:'حركة',vNone:'ابدأ برفع فيديو، أو أكثر من فيديو مرة وحدة عشان تدمجهم.',vTip1:'تقدر تضيف فيديوهات ثانية وتنلصق بعده، وبينهم تختار الانتقال اللي تبيه.',trnP1:'شوف الانتقالات تتحرك واضغط على اللي تبيه: يتحط عند أقرب مكان بين فيديوهين (أو بعد جزء محذوف) من المؤشر الأحمر. أو اضغط ✦ الصفرا على التايم لاين.',trnP0:'الانتقال يبين بين مقطعين: أضف فيديو ثاني من قسم «الفيديو»، أو احذف جزء من الفيديو، وبعدين اختار الانتقال هني. ولو اخترت الحين بيتحط عند المؤشر.',sndD:'اضغط ▶ تسمع الصوت، و＋ يتحط عند المؤشر الأحمر. الأصوات تطلع بخط بروحها تحت التايم لاين وتنحط بالتصدير.',listen:'اسمع',goStart:'روح لبدايته',sndVol:'علو الصوت',lgNone:'ما رفعت شعار للحين. ارفعه وينظف الموقع خلفيته بروحه، وبعدين يطلع على الفيديو.',lgEdit:'🏷 عدّل الشعار',lgUp:'🏷 ارفع شعارك',lgOnV:'حطه على الفيديو',chV:'🎞 غيّر الفيديو',addV:'➕ أضف فيديو',vids:'الفيديوهات',vTip:'الفيديوهات تنلصق ورا بعض بهالترتيب. اضغط ✦ الصفرا اللي بين فيديو وفيديو بالتايم لاين وتختار الانتقال اللي تبيه.',vBad:'ما قدرت أفتح الفيديو: %s',vDelQ:'تشيل «%s» من المشروع؟ الحركات اللي عليه بتنشال معاه.',trnT:'✦ اختار الانتقال',trnD:'شوف كل انتقال يتحرك قدامك واضغط على اللي تبيه. يتحط عند',trnRm:'🗑 شيل الانتقال',trnAdd:'حط انتقال هني',chVQ:'إذا غيّرت الفيديو بينمسح كل الشغل اللي سويته على هالفيديو (الحركات والقص والكابشن) وتبدأ من جديد. تكمل؟',pvAdd:'＋ أضفها على الفيديو',clr:'🗑 ابدأ من جديد',clrQ:'أكيد؟ بينشال الفيديو والحركات وتبدأ من الصفر.',undo:'↶ تراجع',
  insp:'الإعدادات',none:'اختر حركة من التايم لاين أو من الشاشة عشان تعدلها.\n\nالخطوات:\n١. ارفع الفيديو.\n٢. حرّك المؤشر الأحمر للمكان اللي تبيه.\n٣. اضغط ＋ على أي حركة من القائمة.\n٤. اسحبها بالتايم لاين عشان تغير وقتها، ومن أطرافها تطولها أو تقصرها.\n٥. اسحبها على الشاشة عشان تغير مكانها، ومن الدائرة الصفرا تكبرها.',
  text:'النص',textPh:'اكتب النص اللي يطلع بالحركة',font:'الخط',pal:'الألوان',orig:'الأصلي',brand:'🎨 هويتي',start:'البداية (ث)',dur:'المدة (ث)',x:'يمين ويسار',y:'فوق وتحت',size:'الحجم',dup:'⧉ نسخة',del:'🗑 حذف',goto:'▶ روح لها',
  cut:'جزء محذوف',cutDel:'🗑 رجّع هالجزء',vinfo:'الفيديو',trimIn:'يبدأ من',trimOut:'ينتهي عند',
  exP:'⧉ برومبت للذكاء الاصطناعي',exV:'⬇ تصدير MP4',save:'💾 حفظ المشروع',open:'📂 فتح مشروع',
  prT:'برومبت المونتاج',prCopy:'⧉ انسخ',copied:'تم النسخ ✓',close:'سكّر',
  prHead:'سوّ مونتاج للفيديو اللي برفعه لك بهالتوقيتات بالضبط (التوقيتات من الفيديو الأصلي). كل الأرقام من مكتبة الموشن (Alansari.Tech):',
  prTrim:function(a,b){return 'استخدم الفيديو من '+a+' إلى '+b+' بس.';},prCut:function(a,b){return 'احذف الجزء من '+a+' إلى '+b+'.';},
  prClip:function(c,m,f,p){var s=c.s0+' ← '+c.s1+': '+m.id+' '+m.en;if(c.text)s+='، النص: "'+c.text+'"';if(f)s+='، الخط '+f.id+' «'+f.n+'»';if(p)s+='، الألوان (الخلفية '+p.bg+'، النص '+p.tx+'، الهوية '+p.ac+'، التظليل '+p.hl+')';s+='، مكانها: '+c.x+'% من اليسار و'+c.y+'% من فوق، وعرضها '+c.sc+'% من عرض الشاشة.';return s;},
  prFoot:'إذا ناقصك أي محتوى اسألني قبل الرندر.',
  recNo:'متصفحك ما يقدر يسوي الفيديو. حدّثه أو جرّب كروم، أو استخدم «برومبت للذكاء الاصطناعي».',recPrep:'قاعد أجهّز…',recKeep:'خل الصفحة مفتوحة لين يخلص. كل شي يصير بجهازك وما ينرفع شي.',recOn:function(p){return '● قاعد أصدّر الفيديو… '+p+'%';},recSave:'⬇ احفظ الفيديو',recShare:'📤 شارك أو احفظ بالصور',recDone:function(f){return 'جاهز ✓ '+f;},recCx:'انلغى التصدير.',recErr:'صار خطأ بالتصدير. جرّب مرة ثانية.',recStop:'وقّف التصدير',
  needV:'ارفع فيديو أول.',saved:'انحفظ ✓',badFile:'هذا مو ملف مشروع من الاستوديو.',
  cats:{TXT:'نصوص',EMP:'إبراز',CAP:'كابشن',SOC:'سوشال',LGO:'شعارات',FX:'مؤثرات',SCR:'شاشات',TRK:'تتبع',D3:'ثلاثي',AUD:'صوت',CAM:'كاميرا',TRN:'انتقالات',PER:'الشخص',TIM:'الوقت'}},
 en:{title:'Motion Studio',back:'← Library',lib:'Motions',q:'Search: zoom, type, M-021',all:'All',ft:'on footage',ftNote:'This motion works on the footage itself; you see it in the preview and it goes into the export. The circle on the video is the focus point (where the zoom or the transition starts); drag it. Person effects cut you out of the background on your device (a small download the first time). A transition shows best where you made a cut.',fxWait:'Getting the person cut-out ready…',trk:'🎯 Follow my head automatically (dragging it by hand turns this off)',nSel:'%n motions selected',multiTip:'Drag any of them on the video and they all move together. Select several with Shift or Ctrl + click, a box drawn with the mouse on the timeline, or Ctrl+A for all.',keepEach:'— keep each as it is —',unsel:'✖ Clear selection',delAll:'🗑 Delete them all',up:'⬆ Up',down:'⬇ Down',selAll:'☑️ Select all',selCaps:'📝 Select all captions',
  basket:'＋ From my basket',drop:'Upload the video you want to edit',dropS:'Drag it here or click to choose; pick several videos at once to join them. The video stays on your device and is never uploaded.',dropQ:function(l){return '🎬 Motions waiting to be added ('+l+'). Upload your video and they go on it right away.';},dropR:function(n){return 'You have a saved project with '+n+' motions. Upload the same video to continue.';},newP:'New project',
  imPick:'🖼 Use your picture instead of the shape',imLogo:'🏷 Use my logo',imBack:'↩ Back to the shape',imBad:'Pick a picture (PNG or JPG).',play:'Play',pause:'Pause',vol:'Volume',zoom:'Timeline zoom',inH:'⇤ Start here',outH:'End here ⇥',cutA:'✂ Split here',cutB:'✂ Split here',delB:'🗑 Delete',restore:'↩ Bring it back',segT:'Video part',segDel:'🗑 Delete this part',tip:'💡 Drag a motion on the timeline to move it earlier or later; drag its edge to make it longer or shorter. On the video: drag it to move it, pinch with two fingers (or use the yellow dot) to resize. To cut the video: put the playhead and press «✂ Split here», tap the part you want gone and press «🗑 Delete». The same button deletes a selected motion.',earlier:'⏪ Earlier',later:'Later ⏩',shorter:'Shorter',longer:'Longer',smaller:'➖ Smaller',bigger:'➕ Bigger',cutFrom:'From',cutTo:'To',silB:'✂️ Cut silences',silT:'Cut the silences',silD:'I find the parts with no talking and remove them, so the video is faster and tighter. You can bring them back or press «Undo».',silS:'Sensitivity',silS1:'Light',silS2:'Strong',silM:'Shortest silence',silK:'Keep a little gap before and after speech',silWait:'Listening to the video…',silFound:function(n,t){return n?'Found '+n+' silences, '+t+' s in total.':'No silences with these settings. Try «Strong» or a shorter length.';},silGo:'✂️ Cut them',silUndo:'↩ Bring the cut silences back',silNoA:'This video has no sound.',silDone:function(n,t){return 'Done ✓ '+n+' silences cut ('+t+' s).';},capB:'📝 Captions',logoB:'🏷 Logo',capT:'Captions on the video',capD:'Type or paste what you say in the video, or let the site listen to the video and write it. Then pick a style; every line goes on the timeline and you can edit it.',capAI:'🎙 Get the words from the video',capAIN:'Free and runs on your device. The first time it downloads the model, then it is saved. «Most accurate» is best for Gulf dialects but large, and much faster on a computer with Chrome. Check and fix the words afterwards.',capQ:'Accuracy',capQ1:'Fast (80 MB, less accurate)',capQ2:'Medium (250 MB)',capQ3:'Most accurate, good with dialects (about 1 GB, first time only; best on a computer)',capTx:'Words',capPh:'Type or paste the words here… each line becomes one caption group, or paste one paragraph and I split it.',capS:'Caption look (see it before you choose)',capNum:'Type the motion number',capCat:'From',capCS:'Ready styles (CS)',capCAP:'All caption motions',capByStyle:'— as the look —',capSample:'This is a caption sample',capNoNum:'That number is not among the caption motions',capW:'Words per caption',capP:'Position',capPb:'Bottom',capPc:'Middle',capPt:'Top',capGo:'✓ Add captions',capRm:'🗑 Remove captions',capNo:'Type the words first, or get them from the video.',capDl:function(p){return 'Downloading the model… '+p+'%';},capRun:'Listening to the video and writing the words… (the most accurate one takes minutes; keep the page open)',capRetry:'The first pass did not look right, redoing it the accurate way…',capAud:'Preparing the audio…',capOk:function(n){return 'Done ✓ '+n+' lines. Check and fix any word, then press «Add captions».';},capErr:'Could not get the words. Try «Fast», or Chrome on a computer, or type the words yourself.',capNoA:'This video has no sound.',capDone:function(n){return 'Done ✓ '+n+' captions added to the timeline.';},exRes:'Size',exUp:'bigger than your video',exRec:'recommended',exFps:'Frames per second',exF30:'normal for Reels',exF60:'smoother, export takes twice as long',exQ:'Quality',exQn:'Normal',exQns:'smaller file',exQh:'High',exQx:'Highest',exQxs:'bigger file',exGo:'⬇ Export now',exNote:'Bigger sizes and more frames take longer to export. If your device cannot do 4K or 60 fps, the site exports with the best it can.',ovT:'Video on top',ovTip:'Drag it on the video to move it, the yellow dot resizes it. On the timeline drag it left/right or between lanes; drag it up onto the video track to join the main videos.',ovFull:'⛶ Fill the screen',ovMain:'⬆ Back to the main videos',ovNeed2:'You need another main video to turn this one into a layer.',addOv:'🎬 Video on top',cutMk:'Deleted part. Press it to bring it back',dur:'Duration (s)',proj:'📁 Project',pVid:'Video',pMot:'Motions',pCap:'Captions',pTrn:'Transitions',pFx:'Effects',pSnd:'Sounds',pLogo:'Logo',nMot:'motions',vNone:'Start by uploading a video, or several videos at once to join them.',vTip1:'You can add more videos after this one and pick the transition between them.',trnP1:'Watch the transitions move and press the one you want: it goes on the join (or the end of a deleted part) nearest to the red playhead. Or press a yellow ✦ on the timeline.',trnP0:'A transition shows between two parts: add another video in «Video», or delete a part of the video, then pick the transition here. If you pick now it goes at the playhead.',sndD:'Press ▶ to listen and ＋ to put it at the red playhead. Sounds get their own lane under the timeline and go into the export.',listen:'Listen',goStart:'Go to its start',sndVol:'Volume',lgNone:'No logo yet. Upload it and the background is cleaned automatically, then it shows on the video.',lgEdit:'🏷 Edit logo',lgUp:'🏷 Upload your logo',lgOnV:'Put it on the video',chV:'🎞 Change video',addV:'➕ Add video',vids:'Videos',vTip:'The videos play one after another in this order. Press the yellow ✦ between two videos on the timeline to pick the transition you want.',vBad:'Could not open the video: %s',vDelQ:'Remove «%s» from the project? The motions on it go too.',trnT:'✦ Pick the transition',trnD:'Watch each transition move and press the one you want. It goes at',trnRm:'🗑 Remove the transition',trnAdd:'Put a transition here',chVQ:'Changing the video wipes everything you did on this one (motions, cuts and captions) and you start fresh. Continue?',pvAdd:'＋ Add it to the video',clr:'🗑 Start over',clrQ:'Sure? The video and all motions will be removed and you start from scratch.',undo:'↶ Undo',
  insp:'Settings',none:'Pick a motion on the timeline or on screen to edit it.\n\nSteps:\n1. Upload the video.\n2. Move the red playhead where you want.\n3. Press ＋ on any motion in the list.\n4. Drag it on the timeline to change its time; drag its edges to make it longer or shorter.\n5. Drag it on screen to move it; drag the yellow dot to resize.',
  text:'Text',textPh:'Type the text the motion shows',font:'Font',pal:'Colours',orig:'Original',brand:'🎨 My brand',start:'Start (s)',dur:'Duration (s)',x:'Left / right',y:'Up / down',size:'Size',dup:'⧉ Duplicate',del:'🗑 Delete',goto:'▶ Go to it',
  cut:'Deleted part',cutDel:'🗑 Restore this part',vinfo:'Video',trimIn:'Starts at',trimOut:'Ends at',
  exP:'⧉ Prompt for AI',exV:'⬇ Export MP4',save:'💾 Save project',open:'📂 Open project',
  prT:'Edit prompt',prCopy:'⧉ Copy',copied:'Copied ✓',close:'Close',
  prHead:'Edit the video I will upload with exactly these timings (times are from the original video). All IDs are from the Motion Library (Alansari.Tech):',
  prTrim:function(a,b){return 'Use the video from '+a+' to '+b+' only.';},prCut:function(a,b){return 'Delete the part from '+a+' to '+b+'.';},
  prClip:function(c,m,f,p){var s=c.s0+' → '+c.s1+': '+m.id+' '+m.en;if(c.text)s+=', text: "'+c.text+'"';if(f)s+=', font '+f.id+' "'+f.n+'"';if(p)s+=', colours (background '+p.bg+', text '+p.tx+', accent '+p.ac+', highlight '+p.hl+')';s+=', position: '+c.x+'% from the left and '+c.y+'% from the top, width '+c.sc+'% of the screen width.';return s;},
  prFoot:'If any content is missing, ask me before rendering.',
  recNo:'Your browser cannot make the video. Update it or try Chrome, or use “Prompt for AI”.',recPrep:'Getting ready…',recKeep:'Keep this page open until it finishes. Everything happens on your device; nothing is uploaded.',recOn:function(p){return '● Exporting the video… '+p+'%';},recSave:'⬇ Save video',recShare:'📤 Share or save to Photos',recDone:function(f){return 'Ready ✓ '+f;},recCx:'Export cancelled.',recErr:'Export failed. Try again.',recStop:'Stop export',
  needV:'Upload a video first.',saved:'Saved ✓',badFile:'This is not a Studio project file.',
  cats:{TXT:'Text',EMP:'Emphasis',CAP:'Captions',SOC:'Social',LGO:'Logos',FX:'Effects',SCR:'Screens',TRK:'Tracking',D3:'3D',AUD:'Audio',CAM:'Camera',TRN:'Transitions',PER:'Person',TIM:'Time'}}};
function t_(k){return L[lang][k];}
var FT={CAM:1,TRN:1,PER:1,TIM:1};
var CORD=['TXT','EMP','CAP','SOC','LGO','FX','SCR','TRK','D3','AUD','CAM','TRN','PER','TIM'];
function $(i){return document.getElementById(i);}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var VIDM={id:'__VID',c:'VID',ar:'فيديو فوق الفيديو',en:'Video on top',d:'1s',vf:1,h:function(){return '';}};
function mBy(id){if(id==='__VID')return VIDM;for(var i=0;i<M.length;i++)if(M[i].id===id)return M[i];return null;}
/* videos placed on top of the main video (a layer): their files live here, the clip itself is in S.clips with m:'__VID' */
var OVF={};
function isOv(c){return c&&c.m==='__VID';}
function fBy(id){for(var i=0;i<FONTS.length;i++)if(FONTS[i].id===id)return FONTS[i];return null;}
function pBy(id){var cu=XCol.cuParse(id);if(cu)return cu;if(id==='BR'){var b=brand();return b?{id:'BR',bg:b.bg,tx:b.tx,ac:b.ac,hl:b.hl}:null;}for(var i=0;i<CPS.length;i++)if(CPS[i].id===id)return CPS[i];return null;}
function brand(){try{var b=JSON.parse(localStorage.getItem('ml-brand'));return b&&b.on?b:null;}catch(e){return null;}}
function mDur(m){var d=parseFloat(m.d||'2.8');return isFinite(d)&&d>0?d:2.8;}
function fmt(t){t=Math.max(0,t||0);var m=Math.floor(t/60),s=t-m*60;return m+':'+(s<10?'0':'')+s.toFixed(1);}
var famDone={};
function fam(id){var f=fBy(id);if(!f)return '';var n='sdf_'+f.id.replace('-','');if(!famDone[n]){famDone[n]=1;try{var ff=new FontFace(n,'url("'+fUrl(f)+'")',f.v?{weight:f.w[0]+' '+f.w[1]}:{});ff.load().then(function(x){document.fonts.add(x);}).catch(function(){});}catch(e){}}return '"'+n+'",var(--f-ar)';}

/* ---------- several videos joined on one timeline ----------
   SRC = the uploaded videos in order; each has its own <video>. VP looks like one long video to the rest of the
   studio: currentTime is the time on the whole timeline, and it switches videos at the joins. */
var SRC=[],vidEl0=$('vid'),VPL=[],VPvol=1,VPmute=false;
var VP={k:0,playing:false,
  get el(){return SRC[this.k]?SRC[this.k].el:vidEl0;},
  at:function(T){for(var i=SRC.length-1;i>0;i--)if(T>=SRC[i].off-1e-4)return i;return 0;},
  get currentTime(){var s=SRC[this.k];return s?s.off+(s.el.currentTime||0):0;},
  set currentTime(T){if(!SRC.length)return;T=Math.max(0,Math.min(VD,+T||0));var k=this.at(T),s=SRC[k];this.show(k);s.el.currentTime=Math.max(0,Math.min(s.dur-0.001,T-s.off));},
  show:function(k){if(k===this.k&&SRC[k]&&SRC[k].el.classList.contains('on'))return;if(SRC[this.k]&&this.k!==k)SRC[this.k].el.pause();this.k=k;SRC.forEach(function(s,i){s.el.classList.toggle('on',i===k);});if(this.playing&&!xp){var p=this.el.play();if(p&&p.catch)p.catch(function(){});}},
  get paused(){return !this.playing;},
  play:function(){this.playing=true;var p=this.el.play();if(p&&p.catch)p.catch(function(){});return p;},
  pause:function(){this.playing=false;SRC.forEach(function(s){s.el.pause();});},
  get ended(){var s=SRC[this.k];return !!s&&s.el.ended;},
  get duration(){return VD;},get videoWidth(){return VW;},get videoHeight(){return VH;},get readyState(){return this.el.readyState;},
  get muted(){return VPmute;},set muted(v){VPmute=!!v;SRC.forEach(function(s){s.el.muted=VPmute;});},
  get volume(){return VPvol;},set volume(v){VPvol=+v;SRC.forEach(function(s){s.el.volume=VPvol;});},
  addEventListener:function(t,fn){VPL.push([t,fn]);SRC.forEach(function(s){s.el.addEventListener(t,fn);});},
  removeEventListener:function(t,fn){VPL=VPL.filter(function(x){return !(x[0]===t&&x[1]===fn);});SRC.forEach(function(s){s.el.removeEventListener(t,fn);});},
  requestVideoFrameCallback:function(cb){var s=SRC[this.k];return s.el.requestVideoFrameCallback(function(now,md){cb(now,{mediaTime:s.off+md.mediaTime});});},
  /* while playing, step into the next video at a join */
  tick:function(){if(!this.playing||xp||!SRC.length)return;var s=SRC[this.k];if(s.el.ended||s.el.currentTime>=s.dur-0.035){if(this.k<SRC.length-1){var n=SRC[this.k+1];s.el.pause();n.el.currentTime=0;this.k++;SRC.forEach(function(x,i){x.el.classList.toggle('on',i===VP.k);});var p=n.el.play();if(p&&p.catch)p.catch(function(){});}else{this.playing=false;s.el.pause();}}}};
/* ---------- state ---------- */
var S={clips:[],cuts:[],splits:[],tin:0,tout:null,snd:[]},selSnd=null,selSeg=null,uid=1,sel=null,msel=[],selCut=null,vid=VP,hasV=false,VD=0,VW=9,VH=16,pps=40,hist=[],pendCut=null;
function save(){try{localStorage.setItem('ml-studio',JSON.stringify({v:1,S:S,name:vname}));}catch(e){}}
var vname='';
function snap(){hist.push(JSON.stringify(S));if(hist.length>60)hist.shift();}
function undo(){if(!hist.length)return;S=JSON.parse(hist.pop());S.splits=S.splits||[];selSeg=null;S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});sel=null;selCut=null;rebuild();}

/* ---------- swap text (same logic as the library's try-it window) ---------- */
function textNodes(root){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){if(!n.textContent.trim())return NodeFilter.FILTER_REJECT;var p=n.parentElement;if(p.closest('.vtag,.lbl,.ph,.sd-foot,.sd-h'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}}),a=[],n;while(n=w.nextNode())a.push(n);return a;}
function swapText(root,txt){var tn=textNodes(root);if(!tn.length||!txt)return;
  var groups=new Map();tn.forEach(function(n){var p=n.parentElement;if(p.tagName==='SPAN'&&p.childNodes.length===1&&p.parentElement){var g=groups.get(p.parentElement)||[];g.push(p);groups.set(p.parentElement,g);}});
  var best=null;groups.forEach(function(g,par){if(g.length>=2&&(!best||g.length>best.g.length))best={par:par,g:g};});
  if(best){var letters=best.g.every(function(s){return s.textContent.trim().length<=1;}),parts=letters?Array.from(txt.replace(/\s+/g,' ')):txt.trim().split(/\s+/),tpl=best.g[0];
    best.g.forEach(function(s,i){if(i){var pr=s.previousSibling;if(pr&&pr.nodeType===3&&!pr.textContent.trim())pr.remove();s.remove();}});
    var anchor=tpl;parts.forEach(function(w,i){var s=tpl.cloneNode(false);s.textContent=w;s.style.setProperty('--i',i);if(i){anchor.after(document.createTextNode(letters?'':' '));anchor.nextSibling.after(s);}else tpl.replaceWith(s);anchor=s;});return;}
  var big=tn.slice().sort(function(a,b){return b.textContent.trim().length-a.textContent.trim().length;})[0],path=function(n){var a=[],e=n.parentElement;while(e&&e!==root){a.push(e.tagName);e=e.parentElement;}return a.join('<');},bp=path(big);
  /* lines built the same way (like a two-line caption) share the words in order, so no sample text is left behind */
  var ws=txt.trim().split(/\s+/),INL=/^(SPAN|B|I|EM|STRONG|MARK|U|BDI|SMALL|SUB|SUP|S|DEL|INS|A)$/,blk=function(n){var e=n.parentElement;while(e&&e!==root&&INL.test(e.tagName))e=e.parentElement;return e;},bb=blk(big);
  /* words split over pieces of one line (a highlighted word in the middle, a marked word): the user's words fill every piece in order */
  var line=tn.filter(function(n){return blk(n)===bb;});
  if(line.length>1&&ws.length>=line.length){var cnt=line.map(function(n){return Math.max(1,n.textContent.trim().split(/\s+/).length);}),tot=cnt.reduce(function(a,b){return a+b;},0),left=ws.length,at=0;
    line.forEach(function(n,i){var take=i===line.length-1?left:Math.max(1,Math.min(left-(line.length-1-i),Math.round(ws.length*cnt[i]/tot)));var lead=/^\s/.test(n.textContent),trail=/\s$/.test(n.textContent);n.textContent=(lead?' ':'')+ws.slice(at,at+take).join(' ')+(trail?' ':'');at+=take;left-=take;});return;}
  var same=tn.filter(function(n){return path(n)===bp;});
  if(same.length>1&&ws.length>=same.length){var k=same.length,per=Math.ceil(ws.length/k);same.forEach(function(n,i){n.textContent=ws.slice(i*per,(i+1)*per).join(' ');var de2=n.parentElement.closest('[data-t]');if(de2)de2.dataset.t=n.textContent;});return;}
  big.textContent=txt;var de=big.parentElement.closest('[data-t]');if(de)de.dataset.t=txt;}

/* ---------- preview ---------- */
var ovl=$('ovl'),frame=$('frame'),fstyle=document.createElement('style');document.head.appendChild(fstyle);
function fit(){var v=$('view'),r=v.getBoundingClientRect(),w=r.width-28,h=r.height-28,ar=VW/VH;var fw=Math.min(w,h*ar),fh=fw/ar;frame.style.width=Math.max(10,fw)+'px';frame.style.height=Math.max(10,fh)+'px';}
window.addEventListener('resize',function(){fit();drawTL();});
function clipEl(c){if(isOv(c)){var o=OVF[c.u],ev=document.createElement('div');ev.className='sd-clip sd-ovv';ev.id='c'+c.u;ev.dataset.u=c.u;ev.style.aspectRatio=(c.ar||0.5625);
    ev.innerHTML='<video playsinline preload="auto"'+(o?' src="'+o.url+'"':'')+'></video><i class="sd-h" data-h="1"></i>';var v=ev.querySelector('video');v.muted=VPmute;place(ev,c);return ev;}
  var m=mBy(c.m),el=document.createElement('div');el.className='st sd-clip'+(m.vcls?' '+m.vcls:'')+(FX.isFoot(m)&&!FX.keepsHTML(m)?' foot':'')+(FX.keepsHTML(m)?' tbp':'');el.id='c'+c.u;el.dataset.u=c.u;
  el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
  el.innerHTML=stageHTML(m)+'<span class="sd-foot">'+esc(m.id+' '+m.en+' · '+t_('ft'))+'</span><i class="sd-h" data-h="1"></i>';
  if(c.text)swapText(el,c.text);
  if(c.tx)XTxt.apply(el,c.tx);
  if(c.img&&S.imgs&&S.imgs[c.img])XImg.apply(el,imgUrl(c),c.imgS);
  el.querySelectorAll('.scr').forEach(function(s){s.textContent=s.dataset.t||s.textContent;});el.querySelectorAll('.cnt').forEach(function(s){s.textContent=s.dataset.to||s.textContent;});
  var p=pBy(c.p);if(p)palApply(el,p);
  place(el,c);return el;}
function palApply(el,p){el.style.setProperty('--mon',p.bg);el.style.setProperty('--mon2',p.bg);el.style.setProperty('--mon-fg',p.tx);el.style.setProperty('--coral',p.ac);el.style.setProperty('--mint',p.hl);el.style.color=p.tx;}
function place(el,c){el.style.left=c.x+'%';el.style.top=c.y+'%';el.style.width=c.sc+'%';}
function fontsCSS(){fstyle.textContent=S.clips.filter(function(c){return c.f;}).map(function(c){return '#c'+c.u+' *:not(.sd-foot){font-family:'+fam(c.f)+'!important}';}).join('\n');}
/* pictures put in place of a motion's shape: kept once per project in S.imgs, clips point to them by key */
function imgPut(d){if(!d)return '';S.imgs=S.imgs||{};var h=0;for(var i=0;i<d.length;i+=7)h=(h*31+d.charCodeAt(i))|0;var k='i'+(h>>>0).toString(36)+d.length.toString(36);S.imgs[k]=d;return k;}
var IMC={};function imCan(m){if(!(m.id in IMC)){var d=document.createElement('div');d.innerHTML=stageHTML(m);IMC[m.id]=XImg.can(d);}return IMC[m.id];}
function imgUrl(c){var o=c.imgS;return (o&&o.bg&&c.imgC&&S.imgs[c.imgC])||S.imgs[c.img];}
function imgCut(c){if(!c.img||!S.imgs[c.img])return Promise.resolve();if(!(c.imgS&&c.imgS.bg)){delete c.imgC;return Promise.resolve();}return XImg.cut(S.imgs[c.img],c.imgS.bg).then(function(d){c.imgC=imgPut(d);imgPrune();}).catch(function(){});}
function imgPrune(){if(!S.imgs)return;var used={};S.clips.forEach(function(c){if(c.img)used[c.img]=1;if(c.imgC)used[c.imgC]=1;});Object.keys(S.imgs).forEach(function(k){if(!used[k])delete S.imgs[k];});}
function renderClip(c){var old=$('c'+c.u),el=clipEl(c);el._an=null;if(old)old.replaceWith(el);else ovl.appendChild(el);if(isSel(c.u))el.classList.add('sel');fontsCSS();sync(true);}
function rebuild(){ovl.innerHTML='';S.clips.forEach(function(c){ovl.appendChild(clipEl(c));});fontsCSS();drawTL();insp();save();sync(true);}
function inCut(t){for(var i=0;i<S.cuts.length;i++){var k=S.cuts[i];if(t>=k.a&&t<k.b)return k;}return null;}
function tout(){return S.tout==null?VD:S.tout;}
function sync(force){var t=vid.currentTime||0;
  if(!vid.paused){var k=inCut(t);if(k){vid.currentTime=Math.min(k.b,VD);t=k.b;}if(t<S.tin-.05){vid.currentTime=S.tin;}if(t>=tout()-.02){vid.pause();if(rec)recEnd();}}
  S.clips.forEach(function(c){var el=$('c'+c.u);if(!el)return;var on=t>=c.s&&t<c.s+c.d&&!inCut(t);if(el.hidden===on)el.hidden=!on;
    if(isOv(c)){var v=el.querySelector('video');if(!v)return;if(!on){if(!v.paused)v.pause();return;}if(xp)return;var tg=(c.in||0)+(t-c.s);v.muted=VPmute;v.volume=Math.max(0,Math.min(1,(c.vol==null?1:c.vol)*VPvol));
      if(VP.playing){if(v.paused){try{v.currentTime=tg;}catch(e){}var pp=v.play();if(pp&&pp.catch)pp.catch(function(){});}else if(Math.abs(v.currentTime-tg)>.3){try{v.currentTime=tg;}catch(e){}}}else{if(!v.paused)v.pause();if(Math.abs(v.currentTime-tg)>.04){try{v.currentTime=tg;}catch(e){}}}return;}
    if(!on)return;
    if(!el._an||!el._an.length)el._an=el.getAnimations({subtree:true});var lt=(t-c.s)*1000;
    el._an.forEach(function(a){if(a.playState!=='paused')a.pause();a.currentTime=lt;});});
  $('tc').textContent=fmt(T2X(t)/pps)+' / '+fmt(OUTD());var ph=$('ph');if(ph)ph.style.left=T2X(t)+'px';
  $('play').textContent=vid.paused?'▶':'❚❚';$('play').setAttribute('aria-label',t_(vid.paused?'play':'pause'));}
(function loop(){VP.tick();sync();try{fxTick();}catch(e){try{console.warn('fx',e);}catch(_){}}requestAnimationFrame(loop);})();
/* ---------- footage effects (camera, transitions, person, time) drawn live over the video ---------- */
var fxc=$('fxc'),fxx=fxc.getContext('2d'),vid2=document.createElement('video');vid2.muted=true;vid2.playsInline=true;vid2.preload='auto';
var fxLastKey='',holds={},grabQ=Promise.resolve(),rmC=null,rmK=null,rmP=0,fxWaitEl=null;
FX.onReady=function(){fxLastKey='';};
function palOf(c){return pBy(c.p);}
function fxList(t){return FX.active(S.clips,t,mBy,palOf,inCut,lang);}
/* a still of the video at time ts (second, hidden video element so the main one keeps playing) */
function grab(ts,maxW){grabQ=grabQ.then(function(){return new Promise(function(res){var gk=VP.at(ts),gs=SRC[gk];if(!gs){res(document.createElement('canvas'));return;}ts=Math.max(0,ts-gs.off);var gdur=gs.dur;if(vid2.src!==gs.url)vid2.src=gs.url;var done=false;
    var fin=function(){if(done)return;done=true;var w=vid2.videoWidth||VW,h=vid2.videoHeight||VH,k=Math.min(1,(maxW||720)/Math.max(w,h)),c=document.createElement('canvas');c.width=Math.max(2,Math.round(w*k));c.height=Math.max(2,Math.round(h*k));try{c.getContext('2d').drawImage(vid2,0,0,c.width,c.height);}catch(e){}res(c);};
    var go=function(){var tt=Math.max(0,Math.min(ts,(vid2.duration||gdur||1)-.02));if(Math.abs(vid2.currentTime-tt)<.002&&vid2.readyState>=2){fin();return;}var on=function(){vid2.removeEventListener('seeked',on);if(vid2.requestVideoFrameCallback){var once=false;vid2.requestVideoFrameCallback(function(){if(!once){once=true;fin();}});setTimeout(fin,250);}else fin();};vid2.addEventListener('seeked',on);vid2.currentTime=tt;setTimeout(fin,3000);};
    if(vid2.readyState>=1)go();else{vid2.addEventListener('loadedmetadata',go,{once:true});setTimeout(fin,5000);}});});return grabQ;}
function holdFor(it){if(!FX.needsHold(it.m))return null;var ht=FX.holdTime(it,cutsJ()),k=it.c.u+':'+ht.toFixed(2);if(holds[k])return holds[k]===1?null:holds[k];holds[k]=1;grab(ht).then(function(c){holds[k]=c;fxLastKey='';});return null;}
function fxWait(on){if(on&&!fxWaitEl){fxWaitEl=document.createElement('div');fxWaitEl.className='sd-fxwait';fxWaitEl.textContent=t_('fxWait');frame.appendChild(fxWaitEl);}else if(!on&&fxWaitEl){fxWaitEl.remove();fxWaitEl=null;}}
/* tracking motions (label, ring, face blur, arrow…) follow the real face: the motion's drawn face is lined up with yours */
var TRKA={'M-242':[53.5,16],'M-247':[53.5,20],'M-160':[25,30]},TRKNO={'M-245':1,'M-248':1,'M-243':1};
function isTrk(m){if(!m)return false;var b=FX.bid(m);return (m.c==='TRK'&&!TRKNO[b])||b==='M-160'||b==='M-201';}
function trkAt(t){return S.clips.filter(function(c){var m=mBy(c.m);return c.trk!==0&&isTrk(m)&&t>=c.s&&t<c.s+c.d&&!inCut(t);});}
function trkPlace(list,h,Wf){list.forEach(function(c){var el=$('c'+c.u);if(!el)return;if(!h){place(el,c);return;}if(FX.bid(mBy(c.m))==='M-201'){var stH=(c.sc/100)*1.25*(VW/VH),hh=h.w*(VW/VH)*1.25,ty=h.top+.02*hh;el.style.left=(h.x*100)+'%';el.style.top=((ty+(.5-.24)*stH)*100)+'%';el.style.width=c.sc+'%';return;}var A=TRKA[FX.bid(mBy(c.m))]||[53.5,26],sw=cl01(h.w/(A[1]/100),.25,2.6),yy=h.y-(A[0]/100-.5)*sw*1.25*(VW/VH);
  el.style.left=(h.x*100)+'%';el.style.top=(yy*100)+'%';el.style.width=(sw*100)+'%';});}
function cl01(v,a,b){return v<a?a:v>b?b:v;}
var trkKey='';
function fxTick(){if(xp||!fxc)return;var t=vid.currentTime||0,L=hasV?fxList(t):[],olds=ovl.querySelectorAll('.sd-fxp');
  var TK=hasV&&!drag?trkAt(t):[];if(TK.length){var hk='v'+Math.round(t*30)+TK.map(function(c){return c.u;}).join(',');if(hk!==trkKey){var h=FX.head(VP.el,'v'+Math.round(t*30));if(h)trkKey=hk;else if(!FX.failed()&&!FX.ready())fxWait(true);trkPlace(TK,h);}}
  if(!L.length){if(!fxc.hidden)fxc.hidden=true;olds.forEach(function(e){e.remove();});fxWait(false);fxLastKey='';return;}
  var r=frame.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1),W=Math.max(2,Math.round(Math.min(r.width*dpr,720))),H=Math.max(2,Math.round(W*VH/VW));
  var ts=FX.remap(L,t),img=VP.el,far=Math.abs(ts-t)>.05;
  if(far){var rk=Math.round(ts*15);if(rmK!==rk&&!rmP){rmP=1;grab(ts).then(function(c){rmC=c;rmK=rk;rmP=0;fxLastKey='';});}img=rmC||VP.el;}
  var fk=(img===VP.el?'v'+Math.round(t*30):'r'+rmK),key=fk+'|'+W+'|'+L.map(function(i){return i.c.u+':'+i.lt.toFixed(2)+':'+i.c.x+':'+i.c.y+':'+i.c.p;}).join(',')+(FX.ready()?'R':'');
  if(key===fxLastKey&&!fxc.hidden)return;fxLastKey=key;
  if(fxc.width!==W||fxc.height!==H){fxc.width=W;fxc.height=H;}fxc.hidden=false;
  var need=L.some(function(it){return FX.needsPerson(it.m);});if(need&&!FX.ready()&&!FX.failed()){FX.segLoad().catch(function(){fxWait(false);});fxWait(true);}else fxWait(false);
  var io={W:W,H:H,img:img,key:fk,ts:ts,hold:holdFor};FX.draw(fxx,L,io);
  if(L.some(function(i){return i.b==='M-207';}))FX.front(fxx,L,io,'M-207');
  /* text behind the person: the person is drawn again right above the title */
  var keep={};L.filter(function(i){return i.b==='M-201';}).forEach(function(it){var el=$('c'+it.c.u);if(!el||!io.mask)return;var pc=ovl.querySelector('.sd-fxp[data-u="'+it.c.u+'"]');
    if(!pc){pc=document.createElement('canvas');pc.className='sd-fxp';pc.dataset.u=it.c.u;}if(el.nextSibling!==pc)el.after(pc);if(pc.width!==W||pc.height!==H){pc.width=W;pc.height=H;}var px=pc.getContext('2d');px.clearRect(0,0,W,H);FX.front(px,L,io,'M-201');keep[it.c.u]=1;});
  olds.forEach(function(e){if(!keep[e.dataset.u])e.remove();});}
vid.addEventListener('seeking',function(){if(!xp)FX.histReset();});

/* ---------- video load ---------- */
var drop=$('drop'),fin=$('vfile');
drop.addEventListener('click',function(){fin.click();});
drop.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fin.click();}});
['dragenter','dragover'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add('over');});});
['dragleave','drop'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove('over');});});
drop.addEventListener('drop',function(e){var fs=[].slice.call(e.dataTransfer.files||[]).filter(isVid);if(fs.length)loadV(fs);});
fin.addEventListener('change',function(){var fs=[].slice.call(fin.files||[]).filter(isVid);if(fs.length)loadV(fs);});
function isVid(f){return /^video\//.test(f.type||'')||/\.(mp4|mov|m4v|webm|mkv|3gp)$/i.test(f.name||'');}
/* the first upload (one or several videos at once) */
function loadV(fs){if(!fs.length)return;if(hasV)wipe();VP.pause();SRC.forEach(function(s){if(s.el!==vidEl0)s.el.remove();try{URL.revokeObjectURL(s.url);}catch(e){}});SRC=[];vidEl0.removeAttribute('src');fin.value='';
  addSrc(fs,true);}
/* add videos at the end (the + button); the work already done stays where it is */
function addSrc(fs,first){var made=fs.map(function(f,i){var el=(first&&i===0)?vidEl0:document.createElement('video');if(el!==vidEl0){el.playsInline=true;el.setAttribute('playsinline','');el.preload='auto';var last=SRC.length?SRC[SRC.length-1].el:vidEl0;var ref=$('fxc');frame.insertBefore(el,ref);VPL.forEach(function(x){el.addEventListener(x[0],x[1]);});}
    el.muted=VPmute;el.volume=VPvol;var s={f:f,name:f.name,url:URL.createObjectURL(f),dur:0,w:0,h:0,el:el,off:0};el.src=s.url;el.load();return s;});
  Promise.all(made.map(function(s){return new Promise(function(res){var done=0,tries=0,ok=function(){if(done)return;var d=s.el.duration;if(!(d>0)||!isFinite(d))return;done=1;s.dur=d;s.w=s.el.videoWidth;s.h=s.el.videoHeight;res();},
      /* Safari sometimes fails the first read of a fresh file: try again with a new link before giving up */
      bad=function(){if(done)return;if(tries++<2){setTimeout(function(){if(done)return;try{URL.revokeObjectURL(s.url);}catch(e){}s.url=URL.createObjectURL(s.f);s.el.src=s.url;s.el.load();},400);}else{done=1;res();}};
    ['loadedmetadata','durationchange','loadeddata','canplay'].forEach(function(ev){s.el.addEventListener(ev,ok);});s.el.addEventListener('error',bad);setTimeout(function(){if(!done){if(s.el.duration>0)ok();else bad();}},20000);if(s.el.readyState>=1)ok();});}))
  .then(function(){made=made.filter(function(s){if(s.dur>0)return true;try{if(s.el!==vidEl0)s.el.remove();}catch(e){}alertMsg(t_('vBad').replace('%s',s.name));return false;});if(!made.length)return;
    SRC=SRC.concat(made);srcOffs();if(first)vReady();else{VD=srcTotal();fixAfterAdd();}});}
function srcOffs(){var o=0;SRC.forEach(function(s){s.off=o;o+=s.dur;});}
function srcTotal(){return SRC.reduce(function(a,s){return a+s.dur;},0);}
function srcNames(){return SRC.map(function(s){return s.name;}).join(' + ');}
function srcKey(){return SRC.map(function(s){return s.name+':'+(s.f&&s.f.size);}).join('|');}
/* joins between videos, as times on the timeline */
function cutsJ(){return S.cuts.concat(joins().map(function(j){return {a:j,b:j};}));}
function joins(){return SRC.slice(1).map(function(s){return s.off;});}
function fixAfterAdd(){setTimeout(function(){if(window.__paneReady&&PANE==='vid')paneVid();},0);var keepT=VP.currentTime;pps=Math.max(8,Math.min(200,($('tlw').clientWidth-56)/Math.max(1,OUTD())));$('zoom').value=pps;VP.show(VP.at(keepT));fit();rebuild();insp();save();silEnv=null;}
function vReady(){hasV=true;VD=srcTotal();VW=SRC[0].w||9;VH=SRC[0].h||16;VP.k=0;SRC.forEach(function(x,i){x.el.classList.toggle('on',i===0);});vname=srcNames();drop.hidden=true;
  var saved=null;try{saved=JSON.parse(localStorage.getItem('ml-studio'));}catch(e){}
  if(saved&&saved.S&&saved.S.clips&&saved.S.clips.length&&!S.clips.length){S=saved.S;S.splits=S.splits||[];S.snd=S.snd||[];S.clips=S.clips.filter(function(c){return !isOv(c)||OVF[c.u];});S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});}
  if(S.tout!=null&&S.tout>VD)S.tout=null;if(S.tin>=VD)S.tin=0;
  S.cuts=S.cuts.filter(function(k){return k.a<VD;});S.cuts.forEach(function(k){if(k.b>VD)k.b=VD;});
  S.clips.forEach(function(c){if(c.d>VD)c.d=Math.max(0.5,VD);if(c.s+c.d>VD)c.s=Math.max(0,VD-c.d);});
  pps=Math.max(8,Math.min(200,($('tlw').clientWidth-56)/Math.max(1,OUTD())));$('zoom').value=pps;
  fit();rebuild();enable();addPending();logoSync();if(window.__paneReady)paneShow(PANE);}
/* move or remove a video: everything on the timeline moves with its own video */
function srcMove(i,dir){var j=i+dir;if(j<0||j>=SRC.length)return;snap();var old=SRC.map(function(s){return {off:s.off,dur:s.dur,s:s};});var t=SRC[i];SRC[i]=SRC[j];SRC[j]=t;srcOffs();srcRemap(old,null);}
function srcDel(i){if(SRC.length<2)return;if(!confirm(t_('vDelQ').replace('%s',SRC[i].name)))return;snap();var old=SRC.map(function(s){return {off:s.off,dur:s.dur,s:s};}),gone=SRC[i];SRC.splice(i,1);if(gone.el!==vidEl0)gone.el.remove();else{gone.el.pause();gone.el.classList.remove('on');}srcOffs();srcRemap(old,gone);}
function srcRemap(old,gone){var mapT=function(T){var k=0;for(var i=old.length-1;i>=0;i--)if(T>=old[i].off-1e-4){k=i;break;}var o=old[k];if(o.s===gone)return null;return o.s.off+(T-o.off);};
  var nc=[];S.clips.forEach(function(c){var t=mapT(c.s);if(t==null)return;c.s=+t.toFixed(2);nc.push(c);});S.clips=nc;
  S.cuts=S.cuts.map(function(k){var a=mapT(k.a);if(a==null)return null;return {a:+a.toFixed(2),b:+(a+(k.b-k.a)).toFixed(2),auto:k.auto};}).filter(Boolean);
  S.splits=(S.splits||[]).map(mapT).filter(function(x){return x!=null;});S.tin=0;S.tout=null;VD=srcTotal();vname=srcNames();sel=null;msel=[];selSeg=null;selCut=null;
  VP.pause();VP.k=0;SRC.forEach(function(x,i){x.el.classList.toggle('on',i===0);});VP.currentTime=0;silEnv=null;capSegs=null;fit();rebuild();insp();save();}
/* change the video: everything done on the old video is wiped and you start fresh */
function hasWork(){return S.clips.length||S.cuts.length||S.splits.length||S.tin>0||S.tout!=null;}
function wipe(){S={clips:[],cuts:[],splits:[],tin:0,tout:null,snd:[]};selSnd=null;hist=[];sel=null;selCut=null;selSeg=null;pendCut=null;uid=1;hasV=false;
  try{localStorage.removeItem('ml-studio');localStorage.removeItem('ml-captx');localStorage.removeItem('ml-capseg');}catch(e){}
  capSegs=null;silEnv=null;silFor=null;var tx=$('capTx');if(tx)tx.value='';var pg=$('capPg');if(pg)pg.textContent='';}
function vChange(){if(hasWork()&&!confirm(t_('chVQ')))return;vid.pause();fin.value='';fin.click();}
function vAdd(){if(!hasV){fin.click();return;}fin2.value='';fin2.click();}
var fin3=$('vfile3');fin3.addEventListener('change',function(){var fs=[].slice.call(fin3.files||[]).filter(isVid);if(fs.length)ovAddFiles(fs);});
var fin2=$('vfile2');fin2.addEventListener('change',function(){var fs=[].slice.call(fin2.files||[]).filter(isVid);if(fs.length)addSrc(fs,false);});
$('clr').addEventListener('click',function(){if(!confirm(t_('clrQ')))return;vid.pause();try{localStorage.removeItem('ml-studio');}catch(e){}location.reload();});
/* motions sent from the library's try-it window («حطها بالاستوديو») */
window.mlAddPending=function(){dropInfo();addPending();};
if(window.top!==window){document.documentElement.classList.add('inframe');var bk=document.querySelector('.sd-back');if(bk)bk.addEventListener('click',function(e){try{if(parent.showTab){e.preventDefault();parent.showTab('M');}}catch(_){}});}
function pending(){try{return JSON.parse(localStorage.getItem('ml-studio-add'))||[];}catch(e){return [];}}
function addPending(){var q=pending();if(!q.length||!hasV)return;try{localStorage.removeItem('ml-studio-add');}catch(e){}var t=Math.min(vid.currentTime||0,Math.max(0,VD-1)),last=null;
  q.forEach(function(x){var c=addClip(x.m,t,true);if(!c)return;if(x.text)c.text=x.text;if(x.f&&fBy(x.f))c.f=x.f;if(x.p&&pBy(x.p))c.p=x.p;if(x.tx&&Object.keys(x.tx).length)c.tx=x.tx;if(x.img){c.img=imgPut(x.img);if(x.imgS)c.imgS={sc:+x.imgS.sc||100,ox:+x.imgS.ox||0,oy:+x.imgS.oy||0,bg:+x.imgS.bg||0};if(c.imgS&&c.imgS.bg){(function(cc){imgCut(cc).then(function(){renderClip(cc);save();});})(c);}}renderClip(c);last=c;t=Math.min(VD-.5,c.s+c.d);});
  if(last){sel=last.u;msel=[];markSel();}drawTL();insp();save();}
function enable(){document.querySelectorAll('[data-nv]').forEach(function(b){b.disabled=!hasV;});}

/* ---------- library list ---------- */
var lq=$('lq'),lcat='ALL',list=$('list');
function libDraw(){var t=lq.value.trim().toLowerCase(),h='';
  M.forEach(function(m){if(!inGroup(m))return;if(lcat!=='ALL'&&m.c!==lcat)return;var hay=(m.id+' '+m.en+' '+m.ar+' '+(m.use||'')).toLowerCase();if(t&&hay.indexOf(t)<0)return;
    h+='<li tabindex="0" data-m="'+m.id+'"><div class="sd-mth"></div><div class="sd-mmeta"><span class="id">'+m.id+'</span><span class="nm">'+esc(lang==='ar'?m.ar:m.en)+'<small>'+esc(lang==='ar'?m.en:L.ar.cats[m.c])+(FX.isFoot(m)?' · <span class="ft">'+t_('ft')+'</span>':'')+'</small></span></div><button type="button" class="add" data-add="'+m.id+'" aria-label="+ '+m.id+'" data-nv>＋</button></li>';});
  list.innerHTML=h;enable();thObserve();var lc=$('lcount');if(lc)lc.textContent=list.children.length+' '+t_('nMot');}
/* live thumbnails only for the items on screen */
var thIO=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){var li=x.target,box=li.querySelector('.sd-mth');if(x.isIntersecting)thDraw(li);else{box.innerHTML='';li._th=0;}});},{root:null,rootMargin:'120px'}):null;
function thDraw(li){var m=mBy(li.dataset.m),box=li.querySelector('.sd-mth');if(!m||!box)return;var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
  el.innerHTML=stageHTML(m);el.querySelectorAll('.scr').forEach(function(x){x.textContent=x.dataset.t||x.textContent;});el.querySelectorAll('.cnt').forEach(function(x){x.textContent=x.dataset.to||x.textContent;});box.innerHTML='';box.appendChild(el);li._th=Date.now();}
function thObserve(){if(!thIO){Array.prototype.slice.call(list.children,0,40).forEach(thDraw);return;}thIO.disconnect();Array.prototype.forEach.call(list.children,function(li){thIO.observe(li);});}
setInterval(function(){if(document.hidden)return;var now=Date.now();Array.prototype.forEach.call(list.children,function(li){if(li._th&&now-li._th>4200)thDraw(li);});},1000);
var lgroup='mot';function inGroup(m){var f=FX.isFoot(m)&&!FX.keepsHTML(m);return lgroup==='fx'?(f&&m.c!=='TRN'):(!f&&m.c!=='TRN');}
function catsDraw(){var c=$('lcats'),cnt={},tot=0;M.forEach(function(m){if(!inGroup(m))return;cnt[m.c]=(cnt[m.c]||0)+1;tot++;});if(lcat!=='ALL'&&!cnt[lcat])lcat='ALL';
  c.innerHTML='<select id="lcatS" aria-label="'+esc(t_('lib'))+'"><option value="ALL">'+t_('all')+' ('+tot+')</option>'+CORD.filter(function(k){return cnt[k];}).map(function(k){return '<option value="'+k+'">'+t_('cats')[k]+' ('+cnt[k]+')</option>';}).join('')+'</select>';
  var sl=$('lcatS');sl.value=lcat;sl.onchange=function(){lcat=sl.value;libDraw();list.scrollTop=0;};}
lq.addEventListener('input',libDraw);
var TOUCH=matchMedia('(hover:none)').matches;
list.addEventListener('click',function(e){var b=e.target.closest('[data-add]');if(b){pvHide();addClip(b.dataset.add);return;}var li=e.target.closest('li');if(!li)return;if(TOUCH){pvShow(li,true);return;}if(hasV)addClip(li.dataset.m);});
/* motion preview: hover on a computer, tap on a phone */
var pv=document.createElement('div');pv.className='sd-pv';pv.hidden=true;pv.innerHTML='<div class="sd-pvst"></div><p class="sd-pvn"></p><div class="sd-pva"><button type="button" class="sd-btn sm pri" data-pva></button><button type="button" class="sd-btn sm" data-pvx>✕</button></div>';document.body.appendChild(pv);
var pvM=null,pvTm=null;
function pvRender(){if(!pvM)return;var m=mBy(pvM),box=pv.querySelector('.sd-pvst'),b=brand();box.innerHTML='';var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
  el.innerHTML=stageHTML(m);el.querySelectorAll('.scr').forEach(function(x){x.textContent=x.dataset.t||x.textContent;});el.querySelectorAll('.cnt').forEach(function(x){x.textContent=x.dataset.to||x.textContent;});
  if(b){el.style.setProperty('--mon',b.bg);el.style.setProperty('--mon2',b.bg);el.style.setProperty('--mon-fg',b.tx);el.style.setProperty('--coral',b.ac);el.style.setProperty('--mint',b.hl);}box.appendChild(el);
  clearTimeout(pvTm);pvTm=setTimeout(pvRender,(parseFloat(m.d)||2.8)*1000+900);}
function pvShow(li,tap){var m=mBy(li.dataset.m);if(!m)return;pvM=m.id;pv.querySelector('.sd-pvn').innerHTML='<b>'+m.id+'</b> '+esc(lang==='ar'?m.ar:m.en)+(FX.isFoot(m)&&!FX.keepsHTML(m)?'<br><small>'+esc(t_('ftNote'))+'</small>':'');
  var a=pv.querySelector('[data-pva]');a.textContent=t_('pvAdd');a.disabled=!hasV;pv.classList.toggle('tap',!!tap);pv.hidden=false;pvRender();
  if(!tap){var r=li.getBoundingClientRect(),w=pv.offsetWidth,h=pv.offsetHeight,x=r.left-w-12;if(x<8)x=r.right+12;var y=Math.max(8,Math.min(innerHeight-h-8,r.top+r.height/2-h/2));pv.style.left=x+'px';pv.style.top=y+'px';}else{pv.style.left='';pv.style.top='';}}
function pvHide(){pv.hidden=true;pvM=null;clearTimeout(pvTm);pv.querySelector('.sd-pvst').innerHTML='';}
if(!TOUCH){list.addEventListener('mouseover',function(e){var li=e.target.closest('li');if(li&&li.dataset.m!==pvM)pvShow(li,false);});list.addEventListener('mouseleave',pvHide);}
pv.addEventListener('click',function(e){if(e.target.closest('[data-pva]')&&pvM){var id=pvM;pvHide();addClip(id);if(TOUCH)$('frame').scrollIntoView({block:'center',behavior:'smooth'});return;}if(e.target.closest('[data-pvx]'))pvHide();});
document.addEventListener('pointerdown',function(e){if(!pv.hidden&&TOUCH&&!pv.contains(e.target)&&!e.target.closest('#list'))pvHide();});
list.addEventListener('keydown',function(e){if(e.key==='Enter'){var li=e.target.closest('li');if(li&&hasV)addClip(li.dataset.m);}});
function freeLane(s,d,skip){for(var l=0;l<20;l++){if(!S.clips.some(function(c){return c.u!==skip&&c.l===l&&c.s<s+d&&s<c.s+c.d;}))return l;}return 0;}
function addClip(id,at,quiet){if(window.__paneReady&&PHONE.matches&&!arguments[2])setTimeout(paneClose,150);if(!hasV){alertMsg(t_('needV'));return null;}var m=mBy(id);if(!m)return null;snap();var d=Math.min(FX.dur(m)||Math.max(2,mDur(m)),Math.max(.5,VD)),s=at!=null?at:(vid.currentTime||0);if(m.c==='TRN'){var nk=null;cutsJ().forEach(function(k){if(Math.abs(k.b-s)<2&&(!nk||Math.abs(k.b-s)<Math.abs(nk.b-s)))nk=k;});if(nk)s=nk.b;}if(s+d>VD)s=Math.max(0,VD-d);
  var b=brand(),c={u:uid++,m:id,s:+s.toFixed(2),d:+d.toFixed(2),l:freeLane(s,d),text:'',f:b&&b.f?b.f:'',p:b?'BR':'',x:50,y:FX.keepsHTML(m)?24:FX.isFoot(m)?50:(m.c==='CAP'?72:40),sc:FX.keepsHTML(m)?100:90};
  S.clips.push(c);sel=c.u;msel=[];selCut=null;ovl.appendChild(clipEl(c));fontsCSS();if(!quiet){drawTL();insp();save();}return c;}
$('fromBk').addEventListener('click',function(){var ids=[];try{ids=JSON.parse(localStorage.getItem('ml-basket'))||[];}catch(e){}ids=ids.filter(function(i){return /^M-\d+$/.test(i);});if(!ids.length)return;var t=vid.currentTime||0;
  ids.forEach(function(id){var c=addClip(id,t,true);if(c)t=Math.min(VD-.5,c.s+c.d);});drawTL();insp();save();});

/* ---------- timeline ---------- */
var tlw=$('tlw'),tlin=$('tlin');
function lanes(){var mx=1;S.clips.forEach(function(c){mx=Math.max(mx,c.l+1);});return mx+1;}
/* the timeline hides deleted parts: x on the timeline counts only the time that is kept */
function cutsM(){var a=S.cuts.slice().sort(function(x,y){return x.a-y.a;}),o=[];a.forEach(function(k){var l=o[o.length-1];if(l&&k.a<=l.b)l.b=Math.max(l.b,k.b);else o.push({a:k.a,b:k.b});});return o;}
function T2X(t){var o=t;cutsM().forEach(function(k){if(t>k.a)o-=Math.min(t,k.b)-k.a;});return o*pps;}
function X2T(x){var t=x/pps;cutsM().forEach(function(k){if(t>=k.a-1e-6)t+=k.b-k.a;});return Math.max(0,Math.min(VD,t));}
function OUTD(){return T2X(VD)/pps;}
function TW(a,b){return T2X(b)-T2X(a);}
function drawTL(){capBtn();if(!hasV){tlin.innerHTML='';return;}var W=Math.max(tlw.clientWidth,T2X(VD)+60),h='';
  h+='<div class="sd-ruler" id="ruler" style="width:'+W+'px">';var step=pps>=80?1:pps>=30?2:pps>=12?5:10,OD=OUTD();for(var s=0;s<=OD;s+=step)h+='<i style="left:'+(s*pps)+'px">'+fmt(s).replace(/\.0$/,'')+'</i>';h+='</div>';
  h+='<div class="sd-trk sd-vtrk" id="vtrk" style="width:'+W+'px">';SRC.forEach(function(x,i){h+='<span class="sd-vlbl" data-si="'+i+'" style="left:'+(T2X(x.off)+6)+'px;max-width:'+Math.max(30,TW(x.off,x.off+x.dur)-12)+'px">'+(SRC.length>1?(i+1)+'. ':'🎬 ')+esc(x.name)+'</span>';if(i)h+='<i class="sd-vjoin" style="left:'+T2X(x.off)+'px"></i>';});
  if(S.tin>0)h+='<div class="sd-trim" style="left:0;width:'+T2X(S.tin)+'px"></div>';if(S.tout!=null)h+='<div class="sd-trim" style="left:'+T2X(S.tout)+'px;width:'+TW(S.tout,VD)+'px"></div>';
  S.cuts.forEach(function(k,i){h+='<div class="sd-cut mk'+(selCut===i?' sel':'')+'" data-cut="'+i+'" style="left:'+T2X(k.a)+'px" title="'+esc(t_('cutMk'))+'"></div>';});
  segList().forEach(function(g){var on=selSeg&&Math.abs(selSeg[0]-g[0])<1e-3&&Math.abs(selSeg[1]-g[1])<1e-3;h+='<div class="sd-seg'+(on?' sel':'')+'" data-sa="'+g[0]+'" data-sb="'+g[1]+'" style="left:'+T2X(g[0])+'px;width:'+TW(g[0],g[1])+'px"></div>';});
  (S.splits||[]).forEach(function(x){if(cutsM().some(function(k){return x>k.a&&x<k.b;}))return;h+='<i class="sd-split" style="left:'+T2X(x)+'px"></i>';});
  /* a ✦ on every join between videos (and after every deleted part) to pick the transition there */
  var jt=joins().concat(S.cuts.map(function(k){return k.b;}).filter(function(b){return b>S.tin+.05&&b<tout()-.05;}));jt.forEach(function(j){var has=S.clips.some(function(c){var m=mBy(c.m);return m&&m.c==='TRN'&&Math.abs(c.s-j)<.06;});h+='<button type="button" class="sd-jbtn'+(has?' on':'')+'" style="left:'+T2X(j)+'px" data-join="'+j+'" title="'+esc(t_('trnAdd'))+'">'+(has?'✓':'✦')+'</button>';});
  h+='<button type="button" class="sd-vadd" id="vAdd" style="left:'+(T2X(VD)+4)+'px" title="'+esc(t_('addV'))+'">＋</button></div>';
  for(var l=0;l<lanes();l++){h+='<div class="sd-trk" data-lane="'+l+'" style="width:'+W+'px">';S.clips.filter(function(c){return c.l===l;}).forEach(function(c){var m=mBy(c.m);if(TW(c.s,c.s+c.d)<1&&c.d>.05)return;
      h+='<div class="sd-blk'+(FX.isFoot(m)?' ft':'')+(isSel(c.u)?' sel':'')+(isOv(c)?' vov':'')+'" data-u="'+c.u+'" style="left:'+T2X(c.s)+'px;width:'+Math.max(14,TW(c.s,c.s+c.d))+'px"><i class="e l" data-e="l"></i><span>'+esc(isOv(c)?'🎬 '+(c.name||''):m.id+' '+(c.text||m.en))+'</span><i class="e r" data-e="r"></i></div>';});h+='</div>';}
  if((S.snd||[]).length){var sl=1;S.snd.forEach(function(x){sl=Math.max(sl,(x.l||0)+2);});for(var q=0;q<sl;q++){h+='<div class="sd-trk sd-strk" data-slane="'+q+'" style="width:'+W+'px"><span class="sd-tlbl">🔊</span>';S.snd.filter(function(x){return (x.l||0)===q;}).forEach(function(x){var sx=sxById(x.id),d=sndDur(x);if(TW(x.s,x.s+d)<1)return;h+='<div class="sd-sblk'+(selSnd===x.u?' sel':'')+'" data-su="'+x.u+'" style="left:'+T2X(x.s)+'px;width:'+Math.max(18,TW(x.s,Math.min(VD,x.s+d)))+'px"><span>🔊 '+esc(sx?(lang==='ar'?sx.ar:sx.en):x.id)+'</span></div>';});h+='</div>';}}
  h+='<div class="sd-ph" id="ph"></div>';tlin.innerHTML=h;tlin.style.width=W+'px';sync(true);}
$('zoom').addEventListener('input',function(e){pps=+e.target.value;drawTL();});
function tAt(x){var r=tlin.getBoundingClientRect();return X2T(x-r.left);}
function seek(t){vid.currentTime=Math.max(0,Math.min(VD,t));}
var drag=null;
tlin.addEventListener('pointerdown',function(e){if(!hasV)return;var vl=e.target.closest('.sd-vlbl[data-si]');if(vl){drag={k:'src',i:+vl.dataset.si,x0:e.clientX,y0:e.clientY,el:vl,moved:false};tlin.setPointerCapture(e.pointerId);e.preventDefault();return;}
  var sb=e.target.closest('.sd-sblk');if(sb){var x=sndBy(+sb.dataset.su);if(!x)return;selSnd=x.u;sel=null;msel=[];selCut=null;selSeg=null;snap();drag={k:'snd',x0:e.clientX,y0:e.clientY,s0:x.s,l0:x.l||0,sx:x,moved:false};tlin.setPointerCapture(e.pointerId);markSel();drawTL();insp();e.preventDefault();return;}
  if(selSnd!=null&&!e.target.closest('.sd-jbtn')){selSnd=null;}var jb=e.target.closest('.sd-jbtn');if(jb){e.preventDefault();trnPick(+jb.dataset.join);return;}if(e.target.closest('#vAdd')){e.preventDefault();vAdd();return;}var blk=e.target.closest('.sd-blk'),cut=e.target.closest('[data-cut]');
  if(blk){var c=byU(+blk.dataset.u);if(e.shiftKey||e.ctrlKey||e.metaKey){selToggle(c.u);markSel();insp();e.preventDefault();return;}
    var grp=null;if(isSel(c.u)&&multi()&&!e.target.dataset.e){grp=selList().map(function(o){return {c:o,s0:o.s};});sel=c.u;}else{selOnly(c.u);}selCut=null;snap();
    drag={k:e.target.dataset.e||'m',c:c,grp:grp,x0:e.clientX,y0:e.clientY,s0:c.s,d0:c.d,l0:c.l,in0:c.in||0,moved:false};blk.setPointerCapture(e.pointerId);markSel();insp();e.preventDefault();return;}
  var lane=e.target.closest('.sd-trk[data-lane]');if(lane&&!e.target.closest('#ruler,#vtrk')){var tr=tlin.getBoundingClientRect();drag={k:'box',x0:e.clientX,y0:e.clientY,add:e.shiftKey||e.ctrlKey||e.metaKey,base:selList().map(function(o){return o.u;}),el:null,moved:false};tlin.setPointerCapture(e.pointerId);e.preventDefault();return;}
  if(cut){selCut=+cut.dataset.cut;sel=null;msel=[];selSeg=null;markSel();insp();drawTL();return;}
  var sg=e.target.closest('.sd-seg');if(sg){selSeg=[+sg.dataset.sa,+sg.dataset.sb];sel=null;msel=[];selCut=null;seek(tAt(e.clientX));markSel();insp();drawTL();return;}
  if(e.target.closest('#ruler,#vtrk')||e.target.closest('.sd-trk')){drag={k:'seek'};seek(tAt(e.clientX));tlin.setPointerCapture(e.pointerId);if(!e.target.closest('.sd-blk')){sel=null;msel=[];selCut=null;if(selSeg){selSeg=null;drawTL();}markSel();insp();}}});
tlin.addEventListener('pointermove',function(e){if(!drag)return;if(drag.k==='seek'){seek(tAt(e.clientX));return;}
  if(drag.k==='src'){var ddx=e.clientX-drag.x0,ddy=e.clientY-drag.y0;if(Math.hypot(ddx,ddy)>5)drag.moved=true;drag.el.style.transform='translate('+ddx+'px,'+ddy+'px)';drag.el.classList.add('drag');return;}
  if(drag.k==='snd'){if(Math.hypot(e.clientX-drag.x0,e.clientY-drag.y0)>3)drag.moved=true;drag.sx.s=+Math.max(0,Math.min(VD-.1,X2T(T2X(drag.s0)+(e.clientX-drag.x0)))).toFixed(2);var sh=(tlin.querySelector('.sd-strk')||{}).offsetHeight||30,nl=Math.max(0,drag.l0+Math.round((e.clientY-drag.y0)/sh));var bb=tlin.querySelector('.sd-sblk[data-su="'+drag.sx.u+'"]');if(nl!==(drag.sx.l||0)){drag.sx.l=nl;drawTL();}else if(bb)bb.style.left=T2X(drag.sx.s)+'px';return;}
  if(drag.k==='box'){var bx=drag,dx=e.clientX-bx.x0,dy=e.clientY-bx.y0;if(!bx.moved&&Math.hypot(dx,dy)<6)return;bx.moved=true;var tr=tlin.getBoundingClientRect();
    if(!bx.el){bx.el=document.createElement('div');bx.el.className='sd-rband';tlin.appendChild(bx.el);}var l=Math.min(e.clientX,bx.x0),t=Math.min(e.clientY,bx.y0),r=Math.max(e.clientX,bx.x0),b=Math.max(e.clientY,bx.y0);
    bx.el.style.left=(l-tr.left+tlin.scrollLeft)+'px';bx.el.style.top=(t-tr.top+tlin.scrollTop)+'px';bx.el.style.width=(r-l)+'px';bx.el.style.height=(b-t)+'px';
    var hit=[];tlin.querySelectorAll('.sd-blk').forEach(function(el){var q=el.getBoundingClientRect();if(q.right>l&&q.left<r&&q.bottom>t&&q.top<b)hit.push(+el.dataset.u);});
    var us=bx.add?bx.base.concat(hit.filter(function(u){return bx.base.indexOf(u)<0;})):hit;sel=us.length?us[us.length-1]:null;msel=us.slice();markSel();return;}
  var c=drag.c,dt=(e.clientX-drag.x0)/pps;drag.moved=true;
  if(drag.grp&&drag.k==='m'){var lo=Math.min.apply(null,drag.grp.map(function(g){return g.s0;})),hi=Math.max.apply(null,drag.grp.map(function(g){return g.s0+g.c.d;}));dt=Math.max(-lo,Math.min(VD-hi,dt));
    var dx=e.clientX-drag.x0;drag.grp.forEach(function(g){g.c.s=+Math.max(0,Math.min(VD-g.c.d,X2T(T2X(g.s0)+dx))).toFixed(2);var b2=tlin.querySelector('.sd-blk[data-u="'+g.c.u+'"]');if(b2)b2.style.left=T2X(g.c.s)+'px';});insFill();return;}
  var px=e.clientX-drag.x0;
  if(drag.k==='m'){c.s=+Math.max(0,Math.min(VD-c.d,X2T(T2X(drag.s0)+px))).toFixed(2);var lh=(tlin.querySelector('.sd-trk[data-lane]')||{}).offsetHeight||34,dl=Math.round((e.clientY-drag.y0)/lh);c.l=Math.max(0,drag.l0+dl);}
  else if(drag.k==='l'){var ns=Math.max(isOv(c)?Math.max(0,drag.s0-(drag.in0||0)):0,Math.min(drag.s0+drag.d0-.3,X2T(T2X(drag.s0)+px)));c.d=+(drag.s0+drag.d0-ns).toFixed(2);c.s=+ns.toFixed(2);if(isOv(c))c.in=+Math.max(0,(drag.in0||0)+(ns-drag.s0)).toFixed(2);}
  else if(drag.k==='r'){var ne=X2T(T2X(drag.s0+drag.d0)+px),mx=VD-c.s;if(isOv(c)&&OVF[c.u])mx=Math.min(mx,OVF[c.u].dur-(c.in||0));c.d=+Math.max(.3,Math.min(mx,ne-c.s)).toFixed(2);}
  var b=tlin.querySelector('.sd-blk[data-u="'+c.u+'"]');if(b){b.style.left=T2X(c.s)+'px';b.style.width=Math.max(14,TW(c.s,c.s+c.d))+'px';}if(drag.k==='m'&&c.l!==+((b&&b.parentElement.dataset.lane)||0))drawTL();insFill();});
function endDrag(e){if(!drag)return;var d=drag;drag=null;
  if(d.k==='src'){d.el.style.transform='';d.el.classList.remove('drag');if(!d.moved||!e)return;var vr=$('vtrk').getBoundingClientRect();
    if(e.clientY>vr.bottom+8){srcToOv(d.i,tAt(e.clientX));return;}var T=tAt(e.clientX),j=0;SRC.forEach(function(x,k){if(T>x.off+x.dur/2)j=k+(k>=d.i?0:1);});j=Math.max(0,Math.min(SRC.length-1,j));if(j!==d.i)srcMoveTo(d.i,j);return;}
  if(d.c&&isOv(d.c)&&d.k==='m'&&d.moved&&e){var vr2=$('vtrk').getBoundingClientRect();if(e.clientY<vr2.bottom&&e.clientY>vr2.top-10){ovToSrc(d.c,tAt(e.clientX));return;}}
  if(d.k==='snd'){if(!d.moved)hist.pop();insp();save();return;}
  if(d.k==='box'){if(d.el)d.el.remove();if(!d.moved){seek(tAt(d.x0));sel=null;msel=[];selCut=null;selSeg=null;markSel();insp();drawTL();return;}markSel();insp();drawTL();return;}
  if(d.grp){if(!d.moved){hist.pop();if(e&&e.type==='pointerup'){selOnly(d.c.u);markSel();insp();}}drawTL();insp();save();return;}
  if(d.c){if(!d.moved)hist.pop();var c=d.c;if(S.clips.some(function(o){return o.u!==c.u&&o.l===c.l&&o.s<c.s+c.d&&c.s<o.s+o.d;}))c.l=freeLane(c.s,c.d,c.u);drawTL();insp();save();}}
tlin.addEventListener('pointerup',endDrag);tlin.addEventListener('pointercancel',endDrag);
function byU(u){for(var i=0;i<S.clips.length;i++)if(S.clips[i].u===u)return S.clips[i];return null;}
/* several motions can be chosen at once (Shift/Ctrl + click, a box on the timeline, «حدد الكل», «كل الكابشن») and moved together */
function isSel(u){return u===sel||msel.indexOf(u)>=0;}
function selList(){var o=[];if(sel!=null&&byU(sel))o.push(byU(sel));msel.forEach(function(u){if(u!==sel){var c=byU(u);if(c)o.push(c);}});return o;}
function multi(){return selList().length>1;}
function selOnly(u){sel=u;msel=[];}
function selToggle(u){if(isSel(u)){msel=msel.filter(function(x){return x!==u;});if(sel===u){sel=msel.length?msel[0]:null;}}else{if(sel!=null&&msel.indexOf(sel)<0)msel.push(sel);msel.push(u);sel=u;}selCut=null;selSeg=null;}
function selSet(us){us=us.filter(function(u){return byU(u);});sel=us.length?us[0]:null;msel=us.slice();selCut=null;selSeg=null;markSel();insp();drawTL();}
function markSel(){var any=sel!=null;ovl.classList.toggle('hasSel',any);ovl.classList.toggle('hasMulti',multi());setTimeout(updDel,0);document.querySelectorAll('.sd-clip').forEach(function(el){el.classList.toggle('sel',isSel(+el.dataset.u));});document.querySelectorAll('.sd-blk').forEach(function(el){el.classList.toggle('sel',isSel(+el.dataset.u));});}

/* ---------- drag on the preview ---------- */
var pdrag=null;
var PT={},pinch=null;
function pdist(){var k=Object.keys(PT);if(k.length<2)return 0;var a=PT[k[0]],b=PT[k[1]];return Math.hypot(a.x-b.x,a.y-b.y);}
ovl.addEventListener('pointerdown',function(e){PT[e.pointerId]={x:e.clientX,y:e.clientY};
  if(Object.keys(PT).length===2&&sel!=null){var c0=byU(sel);if(c0){if(pdrag){pdrag=null;}pinch={c:c0,d0:pdist()||1,sc0:c0.sc};try{ovl.setPointerCapture(e.pointerId);}catch(_){}e.preventDefault();return;}}
  var el=e.target.closest('.sd-clip');if(!el){if(Object.keys(PT).length>1)return;sel=null;msel=[];markSel();insp();return;}var c=byU(+el.dataset.u);
  if(e.shiftKey||e.ctrlKey||e.metaKey){selToggle(c.u);markSel();insp();drawTL();e.preventDefault();return;}
  var grp=null;if(isSel(c.u)&&multi()&&!e.target.dataset.h){grp=selList().map(function(o){return {c:o,cx:o.x,cy:o.y};});sel=c.u;}else selOnly(c.u);selCut=null;markSel();insp();snap();
  var fr=frame.getBoundingClientRect();pdrag={c:c,el:el,grp:grp,h:!!e.target.dataset.h,x0:e.clientX,y0:e.clientY,cx:c.x,cy:c.y,sc0:c.sc,fw:fr.width,fh:fr.height,moved:false};el.setPointerCapture(e.pointerId);e.preventDefault();});
ovl.addEventListener('pointermove',function(e){if(PT[e.pointerId]){PT[e.pointerId].x=e.clientX;PT[e.pointerId].y=e.clientY;}if(pinch){var d=pdist();if(d){pinch.c.sc=Math.round(Math.max(10,Math.min(250,pinch.sc0*d/pinch.d0)));place($('c'+pinch.c.u),pinch.c);insFill();}return;}if(!pdrag)return;var p=pdrag,c=p.c;p.moved=true;
  if(p.grp){var gx=(e.clientX-p.x0)/p.fw*100,gy=(e.clientY-p.y0)/p.fh*100;p.grp.forEach(function(g){g.c.x=Math.round(Math.max(0,Math.min(100,g.cx+gx)));g.c.y=Math.round(Math.max(0,Math.min(100,g.cy+gy)));if(isTrk(mBy(g.c.m)))g.c.trk=0;var e2=$('c'+g.c.u);if(e2)place(e2,g.c);});insFill();return;}
  if(p.h){c.sc=Math.round(Math.max(10,Math.min(250,p.sc0+((e.clientX-p.x0)/p.fw)*200)));}else{c.x=Math.round(Math.max(0,Math.min(100,p.cx+(e.clientX-p.x0)/p.fw*100)));c.y=Math.round(Math.max(0,Math.min(100,p.cy+(e.clientY-p.y0)/p.fh*100)));}
  if(isTrk(mBy(c.m))&&c.trk!==0){c.trk=0;var tb=$('iTrk');if(tb)tb.checked=false;}place(p.el,c);insFill();});
function endP(e){if(e&&e.pointerId!=null)delete PT[e.pointerId];if(pinch&&Object.keys(PT).length<2){pinch=null;save();}if(!pdrag)return;if(!pdrag.moved)hist.pop();pdrag=null;save();}
ovl.addEventListener('pointerup',endP);ovl.addEventListener('pointercancel',endP);

/* ---------- inspector ---------- */
var IN=$('insb');
function opts(list,val){return list.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===val?' selected':'')+'>'+esc(o[1])+'</option>';}).join('');}
function insp(){setTimeout(updDel,0);if(selSnd!=null&&sndBy(selSnd)){inspSnd(sndBy(selSnd));return;}var c=sel!=null?byU(sel):null;
  var L=selList();if(L.length>1){inspMulti(L);return;}
  if(c&&isOv(c)){inspOv(c);return;}
  if(c){var m=mBy(c.m),b=brand();
    var fo=[['',t_('orig')]].concat(FONTS.map(function(f){return [f.id,f.id+' · '+f.n];}));
    var po=[['',t_('orig')]].concat(b?[['BR',t_('brand')]]:[]).concat(CPS.map(function(p){return [p.id,p.id+' · '+(lang==='ar'?p.ar:p.en)];}));
    IN.innerHTML='<p class="sd-mname"><b>'+m.id+'</b> '+esc(m.en)+' · '+esc(m.ar)+'</p>'+(FX.isFoot(m)&&!FX.keepsHTML(m)?'<p class="sd-note">'+t_('ftNote')+'</p>':'')+(isTrk(m)?'<label class="sd-chk"><input type="checkbox" id="iTrk"'+(c.trk!==0?' checked':'')+'> '+t_('trk')+'</label>':'')+
     (imCan(m)?'<div class="sd-acts sd-imr"><button type="button" class="sd-btn sm" id="iIm">'+t_('imPick')+'</button>'+(XImg.logo()?'<button type="button" class="sd-btn sm" id="iImL">'+t_('imLogo')+'</button>':'')+(c.img?'<button type="button" class="sd-btn sm" id="iImX">'+t_('imBack')+'</button>':'')+'</div>'+(c.img?'<div class="ximc" id="iImC"></div>':''):'')+'<label class="sd-f">'+t_('text')+'<input type="text" id="iTx" maxlength="80" placeholder="'+esc(t_('textPh'))+'" value="'+esc(c.text)+'"></label>'+
     '<div class="xtxf" id="iTxF" hidden></div>'+'<label class="sd-f">'+t_('font')+'<select id="iF">'+opts(fo,c.f)+'</select></label><label class="sd-f">'+t_('pal')+'<select id="iP">'+opts(po,c.p)+'</select></label>'+
     '<div class="sd-row"><label class="sd-f">'+t_('start')+'<input type="number" id="iS" step="0.1" min="0" value="'+c.s+'"></label><label class="sd-f">'+t_('dur')+'<input type="number" id="iD" step="0.1" min="0.3" value="'+c.d+'"></label></div>'+
     '<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-nd="s:-0.5">'+t_('earlier')+'</button><button type="button" class="sd-btn sm" data-nd="s:0.5">'+t_('later')+'</button><button type="button" class="sd-btn sm" data-nd="d:-0.5">'+t_('shorter')+'</button><button type="button" class="sd-btn sm" data-nd="d:0.5">'+t_('longer')+'</button></div>'+'<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-nd="sc:-10">'+t_('smaller')+'</button><button type="button" class="sd-btn sm" data-nd="sc:10">'+t_('bigger')+'</button></div>'+'<label class="sd-f">'+t_('x')+' <input type="range" id="iX" min="0" max="100" value="'+c.x+'"></label><label class="sd-f">'+t_('y')+' <input type="range" id="iY" min="0" max="100" value="'+c.y+'"></label><label class="sd-f">'+t_('size')+' <input type="range" id="iSc" min="10" max="250" value="'+c.sc+'"></label>'+
     (c.cap?'<div class="sd-acts"><button type="button" class="sd-btn sm" id="iCaps">'+t_('selCaps')+'</button></div>':'')+'<div class="sd-acts"><button type="button" class="sd-btn sm" id="iGo">'+t_('goto')+'</button><button type="button" class="sd-btn sm" id="iDup">'+t_('dup')+'</button><button type="button" class="sd-btn sm" id="iDel">'+t_('del')+'</button></div>';
    if($('iTrk'))$('iTrk').addEventListener('change',function(e){snap();c.trk=e.target.checked?1:0;trkKey='';if(!e.target.checked)place($('c'+c.u),c);save();});
    var txT=null,txPre=0,txBox=$('iTxF'),txEl=$('c'+c.u);if(txBox&&txEl){XTxt.form(txBox,txEl,c.tx||{},function(i,v){var n=Date.now();if(n-txPre>1500)snap();txPre=n;c.tx=c.tx||{};c.tx[i]=v;clearTimeout(txT);txT=setTimeout(function(){renderClip(c);save();},200);});}
    var setIm=function(d){snap();if(d){c.img=imgPut(d);c.imgS={sc:100,ox:0,oy:0,bg:0};}else{delete c.img;delete c.imgS;}delete c.imgC;imgPrune();renderClip(c);drawTL();insp();save();};
    if($('iImC')){c.imgS=c.imgS||{sc:100,ox:0,oy:0,bg:0};var imPre=0;XImg.controls($('iImC'),c.imgS,function(k,end){if(k==='pre'){var n=Date.now();if(n-imPre>800)snap();imPre=n;return;}
      if(k==='bg'){if(!end)return;imgCut(c).then(function(){renderClip(c);save();});return;}var e=$('c'+c.u);if(e)XImg.apply(e,imgUrl(c),c.imgS);if(end)save();});}
    if($('iIm'))$('iIm').addEventListener('click',function(){XImg.pick().then(setIm).catch(function(e){if(e&&e.message==='type')alertMsg(t_('imBad'));});});
    if($('iImL'))$('iImL').addEventListener('click',function(){setIm(XImg.logo());});
    if($('iImX'))$('iImX').addEventListener('click',function(){setIm(null);});
    var tx=$('iTx'),tm=null;tx.addEventListener('focus',snap);tx.addEventListener('input',function(){c.text=tx.value;clearTimeout(tm);tm=setTimeout(function(){renderClip(c);drawTL();save();},200);});
    XCol.opts($('iP'),c.p);XCol.wire($('iP'),pBy,function(id){snap();c.p=id;renderClip(c);save();});XPal.wire($('iP'),{resolve:pBy,title:t_('pal')});XFont.wire($('iF'),{famOf:fam,sample:function(){return c.text;},title:t_('font')});
    $('iF').addEventListener('change',function(e){snap();c.f=e.target.value;renderClip(c);save();});
    $('iP').addEventListener('change',function(e){snap();c.p=e.target.value;renderClip(c);save();});
    $('iS').addEventListener('change',function(e){snap();c.s=Math.max(0,Math.min(VD-.3,+e.target.value||0));c.d=Math.min(c.d,VD-c.s);drawTL();save();insFill();});
    $('iD').addEventListener('change',function(e){snap();c.d=Math.max(.3,Math.min(VD-c.s,+e.target.value||.3));drawTL();save();insFill();});
    [['iX','x'],['iY','y'],['iSc','sc']].forEach(function(p){var r=$(p[0]);r.addEventListener('pointerdown',snap);r.addEventListener('input',function(){c[p[1]]=+r.value;place($('c'+c.u),c);save();});});
    IN.querySelectorAll('[data-nd]').forEach(function(b){b.addEventListener('click',function(){var kv=b.dataset.nd.split(':'),k=kv[0],v=+kv[1];snap();
      if(k==='s')c.s=+Math.max(0,Math.min(VD-c.d,c.s+v)).toFixed(2);else if(k==='d')c.d=+Math.max(.3,Math.min(VD-c.s,c.d+v)).toFixed(2);else c.sc=Math.max(10,Math.min(250,c.sc+v));
      place($('c'+c.u),c);drawTL();save();insFill();if(k==='s')seek(c.s+.01);});});
    if($('iCaps'))$('iCaps').addEventListener('click',selCaps);
    $('iGo').addEventListener('click',function(){seek(c.s+.01);});
    $('iDup').addEventListener('click',function(){snap();var n=JSON.parse(JSON.stringify(c));n.u=uid++;n.s=Math.min(VD-n.d,+(c.s+c.d).toFixed(2));n.l=freeLane(n.s,n.d);S.clips.push(n);sel=n.u;msel=[];ovl.appendChild(clipEl(n));fontsCSS();drawTL();insp();save();});
    $('iDel').addEventListener('click',delSel);return;}
  if(selSeg){IN.innerHTML='<p class="sd-mname"><b>🎬</b> '+t_('segT')+': '+fmt(selSeg[0])+' → '+fmt(selSeg[1])+'</p><div class="sd-acts"><button type="button" class="sd-btn sm" id="iSeg">'+t_('segDel')+'</button></div>';$('iSeg').addEventListener('click',delAny);return;}
  if(selCut!=null&&S.cuts[selCut]){var k=S.cuts[selCut];IN.innerHTML='<p class="sd-mname"><b>✂</b> '+t_('cut')+'</p><div class="sd-row"><label class="sd-f">'+t_('cutFrom')+'<input type="number" id="iCa" step="0.1" min="0" value="'+k.a.toFixed(1)+'"></label><label class="sd-f">'+t_('cutTo')+'<input type="number" id="iCb" step="0.1" min="0" value="'+k.b.toFixed(1)+'"></label></div><div class="sd-acts"><button type="button" class="sd-btn sm" id="iCut">'+t_('cutDel')+'</button></div>';
    ['iCa','iCb'].forEach(function(id){$(id).addEventListener('change',function(){snap();var a=Math.max(0,Math.min(VD,+$('iCa').value||0)),b=Math.max(0,Math.min(VD,+$('iCb').value||0));if(b-a<0.1)b=Math.min(VD,a+0.1);k.a=+a.toFixed(2);k.b=+b.toFixed(2);drawTL();save();});});
    $('iCut').addEventListener('click',function(){snap();S.cuts.splice(selCut,1);selCut=null;drawTL();insp();save();});return;}
  var vl='';if(0)vl=hasV?'<p class="sd-mname"><b>🎬 '+t_('vids')+' ('+SRC.length+')</b> · '+fmt(VD)+'</p><div class="sd-vlist">'+SRC.map(function(x,i){return '<div class="r"><b>'+(i+1)+'. '+esc(x.name)+'</b><small>'+fmt(x.dur)+'</small>'+(SRC.length>1?'<button type="button" class="sd-btn sm" data-vm="'+i+':-1"'+(i?'':' disabled')+'>⬆</button><button type="button" class="sd-btn sm" data-vm="'+i+':1"'+(i<SRC.length-1?'':' disabled')+'>⬇</button><button type="button" class="sd-btn sm" data-vd="'+i+'">🗑</button>':'')+'</div>';}).join('')+'</div><div class="sd-acts"><button type="button" class="sd-btn sm" id="iAddV">'+t_('addV')+'</button></div>'+(SRC.length>1?'<p class="sd-note">'+esc(t_('vTip'))+'</p>':''):'';
  IN.innerHTML=vl+(hasV?'<p class="sd-mname"><p class="sd-mname">'+t_('trimIn')+' '+fmt(S.tin)+' · '+t_('trimOut')+' '+fmt(tout())+'</p>':'')+'<p class="sd-empty" style="white-space:pre-line">'+esc(t_('none'))+'</p>';
  paneVid();if(0)IN.querySelectorAll('[data-vm]').forEach(function(b){b.addEventListener('click',function(){var kv=b.dataset.vm.split(':');srcMove(+kv[0],+kv[1]);});});IN.querySelectorAll('[data-vd]').forEach(function(b){b.addEventListener('click',function(){srcDel(+b.dataset.vd);});});}
function insFill(){var c=sel!=null?byU(sel):null;if(multi()){var L=selList(),av=function(k){return Math.round(L.reduce(function(a,o){return a+o[k];},0)/L.length);};if($('mX')&&document.activeElement!==$('mX'))$('mX').value=av('x');if($('mY')&&document.activeElement!==$('mY'))$('mY').value=av('y');return;}if(!c||!$('iS'))return;if(document.activeElement!==$('iS'))$('iS').value=c.s;if(document.activeElement!==$('iD'))$('iD').value=c.d;$('iX').value=c.x;$('iY').value=c.y;$('iSc').value=c.sc;}
function delSel(){var L=selList();if(!L.length)return;snap();var us=L.map(function(c){return c.u;});S.clips=S.clips.filter(function(c){return us.indexOf(c.u)<0;});us.forEach(function(u){var el=$('c'+u);if(el)el.remove();});sel=null;msel=[];fontsCSS();markSel();drawTL();insp();save();}
function inspMulti(L){var caps=L.every(function(c){return c.cap;}),b=brand(),avg=function(k){return Math.round(L.reduce(function(a,c){return a+c[k];},0)/L.length);};
  var fo=[['',t_('keepEach')]].concat(FONTS.map(function(f){return [f.id,f.id+' · '+f.n];})),po=[['',t_('keepEach')]].concat(b?[['BR',t_('brand')]]:[]).concat(CPS.map(function(p){return [p.id,p.id+' · '+(lang==='ar'?p.ar:p.en)];}));
  IN.innerHTML='<p class="sd-mname"><b>☑️ '+t_('nSel').replace('%n',L.length)+'</b>'+(caps?' · 📝':'')+'</p><p class="sd-note">'+t_('multiTip')+'</p>'+
   '<label class="sd-f">'+t_('x')+' <input type="range" id="mX" min="0" max="100" value="'+avg('x')+'"></label><label class="sd-f">'+t_('y')+' <input type="range" id="mY" min="0" max="100" value="'+avg('y')+'"></label><label class="sd-f">'+t_('size')+' <input type="range" id="mSc" min="10" max="250" value="'+avg('sc')+'"></label>'+
   '<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-mn="y:-3">'+t_('up')+'</button><button type="button" class="sd-btn sm" data-mn="y:3">'+t_('down')+'</button><button type="button" class="sd-btn sm" data-mn="sc:-10">'+t_('smaller')+'</button><button type="button" class="sd-btn sm" data-mn="sc:10">'+t_('bigger')+'</button></div>'+
   '<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-mn="s:-0.5">'+t_('earlier')+'</button><button type="button" class="sd-btn sm" data-mn="s:0.5">'+t_('later')+'</button></div>'+
   '<label class="sd-f">'+t_('font')+'<select id="mF">'+opts(fo,'')+'</select></label><label class="sd-f">'+t_('pal')+'<select id="mP">'+opts(po,'')+'</select></label>'+
   '<div class="sd-acts"><button type="button" class="sd-btn sm" id="mNone">'+t_('unsel')+'</button><button type="button" class="sd-btn sm" id="mDel">'+t_('delAll')+'</button></div>';
  /* sliders move everyone by the same amount, keeping their spacing */
  [['mX','x'],['mY','y'],['mSc','sc']].forEach(function(p){var r=$(p[0]),base=null,v0=0;r.addEventListener('pointerdown',function(){snap();base=L.map(function(c){return c[p[1]];});v0=+r.value;});r.addEventListener('focus',function(){if(!base){base=L.map(function(c){return c[p[1]];});v0=+r.value;}});
    r.addEventListener('input',function(){if(!base){snap();base=L.map(function(c){return c[p[1]];});v0=+r.value;}var dv=+r.value-v0;L.forEach(function(c,i){var lo=p[1]==='sc'?10:0,hi=p[1]==='sc'?250:100;c[p[1]]=Math.round(Math.max(lo,Math.min(hi,base[i]+dv)));if(p[1]!=='sc'&&isTrk(mBy(c.m)))c.trk=0;var e=$('c'+c.u);if(e)place(e,c);});save();});
    r.addEventListener('change',function(){base=null;});});
  IN.querySelectorAll('[data-mn]').forEach(function(b){b.addEventListener('click',function(){var kv=b.dataset.mn.split(':'),k=kv[0],v=+kv[1];snap();
    if(k==='s'){var lo=Math.min.apply(null,L.map(function(c){return c.s;})),hi=Math.max.apply(null,L.map(function(c){return c.s+c.d;}));v=Math.max(-lo,Math.min(VD-hi,v));}
    L.forEach(function(c){if(k==='s')c.s=+(c.s+v).toFixed(2);else if(k==='sc')c.sc=Math.max(10,Math.min(250,c.sc+v));else{c.y=Math.max(0,Math.min(100,c.y+v));if(isTrk(mBy(c.m)))c.trk=0;}var e=$('c'+c.u);if(e)place(e,c);});drawTL();save();
    var r=$(k==='s'?'':k==='sc'?'mSc':'mY');if(r)r.value=avg(k==='sc'?'sc':'y');});});
  XCol.opts($('mP'),'');XCol.wire($('mP'),pBy,function(id){snap();L.forEach(function(c){c.p=id;renderClip(c);});save();});XPal.wire($('mP'),{resolve:pBy,title:t_('pal')});XFont.wire($('mF'),{famOf:fam,sample:function(){return L[0].text;},title:t_('font')});
  $('mF').addEventListener('change',function(e){if(!e.target.value)return;snap();L.forEach(function(c){c.f=e.target.value;renderClip(c);});save();});
  $('mP').addEventListener('change',function(e){if(!e.target.value)return;snap();L.forEach(function(c){c.p=e.target.value;renderClip(c);});save();});
  $('mNone').addEventListener('click',function(){sel=null;msel=[];markSel();insp();drawTL();});$('mDel').addEventListener('click',delSel);}

/* ---------- transport + video edits ---------- */
$('play').addEventListener('click',togglePlay);
function togglePlay(){if(!hasV)return;if(vid.paused){if(vid.currentTime>=tout()-.05||vid.currentTime<S.tin)vid.currentTime=S.tin;vid.play();}else vid.pause();}
$('vol').addEventListener('input',function(e){vid.volume=+e.target.value;vid.muted=vid.volume===0;});
$('inH').addEventListener('click',function(){snap();S.tin=+vid.currentTime.toFixed(2);if(S.tout!=null&&S.tout<=S.tin)S.tout=null;drawTL();insp();save();});
$('outH').addEventListener('click',function(){snap();var t=+vid.currentTime.toFixed(2);S.tout=t>S.tin?t:null;drawTL();insp();save();});
function segList(){var b=[S.tin].concat(joins()).concat((S.splits||[]).filter(function(x){return x>S.tin+.05&&x<tout()-.05;})).concat([tout()]).sort(function(x,y){return x-y;}),out=[];
  for(var i=0;i<b.length-1;i++){var a=b[i],c=b[i+1];if(c-a<.05)continue;if(S.cuts.some(function(k){return k.a<=a+.01&&k.b>=c-.01;}))continue;out.push([a,c]);}return out;}
$('cutB').addEventListener('click',function(){var t=+vid.currentTime.toFixed(2);S.splits=S.splits||[];if(t<=S.tin+.05||t>=tout()-.05||S.splits.some(function(x){return Math.abs(x-t)<.05;}))return;
  snap();S.splits.push(t);S.splits.sort(function(x,y){return x-y;});var g=segList().filter(function(x){return x[0]<=t+.001&&x[1]>t+.001;})[0];selSeg=g||null;sel=null;selCut=null;markSel();insp();drawTL();save();});
function delAny(){if(selSnd!=null){snap();S.snd=(S.snd||[]).filter(function(x){return x.u!==selSnd;});selSnd=null;sndStop();drawTL();insp();save();return;}if(sel!=null){delSel();return;}if(selSeg){snap();var a=selSeg[0],b=selSeg[1];S.cuts.push({a:a,b:b});S.cuts.sort(function(x,y){return x.a-y.a;});
    var m=[];S.cuts.forEach(function(k){var l=m[m.length-1];if(l&&k.a<=l.b+.001)l.b=Math.max(l.b,k.b);else m.push({a:k.a,b:k.b});});S.cuts=m;selSeg=null;drawTL();insp();save();updDel();return;}
  if(selCut!=null&&S.cuts[selCut]){snap();S.cuts.splice(selCut,1);selCut=null;drawTL();insp();save();updDel();}}
function updDel(){var b=$('delB');if(!b)return;b.disabled=!(sel!=null||selSeg||selCut!=null||selSnd!=null);b.textContent=selCut!=null&&sel==null&&!selSeg?t_('restore'):t_('delB');}
$('delB').addEventListener('click',delAny);
$('selAllB').addEventListener('click',function(){if(S.clips.length)selSet(S.clips.map(function(c){return c.u;}));});
$('selCapB').addEventListener('click',selCaps);
function selCaps(){var us=S.clips.filter(function(c){return c.cap;}).map(function(c){return c.u;});if(us.length)selSet(us);}
function capBtn(){var b=$('selCapB');if(b)b.hidden=!S.clips.some(function(c){return c.cap;});}
$('undo').addEventListener('click',undo);
document.addEventListener('keydown',function(e){var tg=e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT')return;
  if((e.ctrlKey||e.metaKey)&&(e.key==='a'||e.key==='A'||e.code==='KeyA')&&hasV&&S.clips.length){e.preventDefault();selSet(S.clips.map(function(c){return c.u;}));return;}
  if(e.key==='Escape'&&(sel!=null||msel.length)){sel=null;msel=[];markSel();insp();drawTL();return;}
  if(e.code==='Space'){e.preventDefault();togglePlay();}else if(e.key==='Delete'||e.key==='Backspace'){if(sel!=null||selSeg||selCut!=null){e.preventDefault();delAny();}}
  else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo();}
  else if(e.key==='ArrowLeft'||e.key==='ArrowRight'){seek((vid.currentTime||0)+(e.key==='ArrowRight'?1:-1)*(e.shiftKey?1:1/30));}});

/* ---------- prompt export ---------- */
function prompt_(){var L2=[t_('prHead')];if(S.tin>0||S.tout!=null)L2.push('- '+t_('prTrim')(fmt(S.tin),fmt(tout())));S.cuts.forEach(function(k){L2.push('- '+t_('prCut')(fmt(k.a),fmt(k.b)));});
  S.clips.slice().sort(function(a,b){return a.s-b.s;}).forEach(function(c){var m=mBy(c.m);if(isOv(c)){L2.push('- '+fmt(c.s)+'–'+fmt(c.s+c.d)+': '+(lang==='ar'?'فيديو فوق الفيديو':'video on top')+' «'+(c.name||'')+'» x '+c.x+'% y '+c.y+'% '+c.sc+'%');return;}L2.push('- '+t_('prClip')({s0:fmt(c.s),s1:fmt(c.s+c.d),text:c.text,x:c.x,y:c.y,sc:c.sc},m,fBy(c.f),pBy(c.p)));});
  L2.push(t_('prFoot'));return L2.join('\n');}
function modal(html,into){if(into){into.innerHTML=html;return into;}var m=$('mod');$('modb').innerHTML=html;m.hidden=false;var x=$('modb').querySelector('[data-x]');if(x)x.focus();return m;}
$('mod').addEventListener('click',function(e){if(e.target.id==='mod'||e.target.closest('[data-x]')){if(xp)return;$('mod').hidden=true;}});
function alertMsg(t){modal('<p>'+esc(t)+'</p><div><button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');}
$('exP').addEventListener('click',function(){var p=prompt_();modal('<h3>'+t_('prT')+'</h3><pre id="prTx"></pre><div style="display:flex;gap:8px"><button type="button" class="sd-btn pri" id="prC">'+t_('prCopy')+'</button><button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');
  $('prTx').textContent=p;$('prC').addEventListener('click',function(e){var b=e.currentTarget;try{navigator.clipboard.writeText(p).then(function(){b.textContent=t_('copied');});}catch(_){}});});

/* ---------- save / open project ---------- */
$('saveP').addEventListener('click',function(){var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({studio:1,video:vname,S:S},null,1)],{type:'application/json'}));a.download=(vname||'project').replace(/\.[^.]+$/,'')+'-studio.json';document.body.appendChild(a);a.click();a.remove();});
$('openP').addEventListener('click',function(){$('pfile').click();});
$('pfile').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;f.text().then(function(t){var j=JSON.parse(t);if(!j||!j.studio||!j.S)throw 0;snap();S=j.S;S.splits=S.splits||[];S.cuts=S.cuts||[];selSeg=null;S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});sel=null;selCut=null;if(hasV)rebuild();else{save();dropInfo();}}).catch(function(){alertMsg(t_('badFile'));});e.target.value='';});
$('newP').addEventListener('click',function(){snap();S={clips:[],cuts:[],splits:[],tin:0,tout:null};sel=null;selCut=null;selSeg=null;try{localStorage.removeItem('ml-studio');}catch(e){}if(hasV)rebuild();dropInfo();});
function dropInfo(){var pq=pending();if($('dropQ'))$('dropQ').textContent=pq.length?t_('dropQ')(pq.map(function(x){return x.m;}).join('، ')):'';var s=null;try{s=JSON.parse(localStorage.getItem('ml-studio'));}catch(e){}var n=s&&s.S&&s.S.clips?s.S.clips.length:0;$('dropR').textContent=n?t_('dropR')(n)+(s.name?' ('+s.name+')':''):'';$('newP').hidden=!n||hasV;}

/* ---------- MP4 export: every frame is drawn on this device (phone or computer), then saved as MP4 ---------- */
var rec=null,xp=null,vfileObj=null;
function recEnd(){}
function needXR(){if(window.XR)return Promise.resolve();return new Promise(function(res,rej){var s=document.createElement('script');s.src='vendor/xrender.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
function segs(){var a=S.tin,b=tout(),cur=a,out=[];S.cuts.slice().sort(function(x,y){return x.a-y.a;}).forEach(function(k){if(k.b<=cur||k.a>=b)return;if(k.a>cur)out.push([cur,Math.min(k.a,b)]);cur=Math.max(cur,k.b);});if(cur<b)out.push([cur,b]);return out;}
var lastMT=-1;
function seekTo(t){return new Promise(function(res){var done=false,fin=function(){if(done)return;done=true;lastMT=vid.currentTime;setTimeout(res,0);};
  if(Math.abs(vid.currentTime-t)<0.0005&&vid.readyState>=2){fin();return;}
  var on=function(){vid.removeEventListener('seeked',on);fin();};vid.addEventListener('seeked',on);vid.currentTime=t;setTimeout(function(){if(!done){vid.removeEventListener('seeked',on);fin();}},5000);});}
/* Moving forward a little: play the video and stop at the right frame (much faster than seeking every frame). */
function frameAt(t){var half=0.5/30;
  if(!VP.el.requestVideoFrameCallback||lastMT<0||t<lastMT-half||t>lastMT+1.5||VP.at(t)!==VP.k||VP.at(lastMT)!==VP.k)return seekTo(t);
  if(lastMT>=t-half)return Promise.resolve();
  return new Promise(function(res){var done=false,tm=setTimeout(function(){if(done)return;done=true;vid.pause();seekTo(t).then(res);},3000);
    var cb=function(now,md){if(done)return;lastMT=md.mediaTime;if(md.mediaTime>=t-half||vid.ended){done=true;clearTimeout(tm);vid.pause();res();}else vid.requestVideoFrameCallback(cb);};
    vid.requestVideoFrameCallback(cb);var p=vid.play();if(p&&p.catch)p.catch(function(){if(done)return;done=true;clearTimeout(tm);seekTo(t).then(res);});});}
function clipsAt(t){var any=false;S.clips.forEach(function(c){var el=$('c'+c.u);if(!el)return;var on=t>=c.s&&t<c.s+c.d&&!inCut(t);el.hidden=!on;if(!on)return;var mm=mBy(c.m);if(!FX.isFoot(mm)||FX.keepsHTML(mm))any=true;
  el._an=el.getAnimations({subtree:true});var lt=(t-c.s)*1000;el._an.forEach(function(a){a.pause();a.currentTime=lt;});});return any;}
/* the sound of all the videos one after another, decoded by ctx (its sample rate) */
function decodeAll(ctx,chans){var parts=SRC.map(function(s){return s.f.arrayBuffer().then(function(ab){return new Promise(function(res){try{var p=ctx.decodeAudioData(ab,res,function(){res(null);});if(p&&p.then)p.then(res,function(){res(null);});}catch(e){res(null);}});});});
  return Promise.all(parts).then(function(bufs){if(!bufs.some(Boolean))return null;var sr=ctx.sampleRate,ch=chans||Math.max(1,Math.min(2,Math.max.apply(null,bufs.map(function(b){return b?b.numberOfChannels:1;})))),len=Math.max(1,Math.ceil(VD*sr)),out=ctx.createBuffer(ch,len,sr);
    bufs.forEach(function(b,i){if(!b)return;var o=Math.floor(SRC[i].off*sr),n=Math.min(b.length,Math.floor(SRC[i].dur*sr),len-o);if(n<=0)return;for(var c=0;c<ch;c++){var src=b.getChannelData(Math.min(c,b.numberOfChannels-1)).subarray(0,n);if(chans===1&&b.numberOfChannels>1){var d=out.getChannelData(0);for(var q=0;q<n;q++){var v=0;for(var cc=0;cc<b.numberOfChannels;cc++)v+=b.getChannelData(cc)[q];d[o+q]=v/b.numberOfChannels;}}else out.getChannelData(c).set(src,o);}});return out;});}
function audioOf(a){if(!SRC.length||!a)return Promise.resolve(null);
  return decodeAll(a).then(function(buf){return sndMix(a,buf);}).then(function(buf){return ovMix(a,buf);}).then(function(buf){if(!buf)return null;
    var sg=segs(),sr=buf.sampleRate,ch=Math.min(2,buf.numberOfChannels),tot=0;sg.forEach(function(x){tot+=Math.max(0,Math.min(buf.length,Math.floor(x[1]*sr))-Math.floor(x[0]*sr));});if(tot<=0)return null;
    var out=a.createBuffer(ch,tot,sr),off=0;sg.forEach(function(x){var a0=Math.floor(x[0]*sr),a1=Math.min(buf.length,Math.floor(x[1]*sr));if(a1<=a0)return;for(var c=0;c<ch;c++)out.getChannelData(c).set(buf.getChannelData(c).subarray(a0,a1),off);off+=a1-a0;});return out;}).catch(function(){return null;});}
/* export settings: size, frames per second, quality (remembered in ml-exq) */
var EXQ={r:1080,f:30,q:'h'};try{var _q=JSON.parse(localStorage.getItem('ml-exq'));if(_q)EXQ=_q;}catch(e){}
var QF={n:.12,h:.18,x:.3};
function exSize(r){var sh=Math.min(VW,VH),lg=Math.max(VW,VH),k=Math.min(r/sh,(r*16/9)/lg);return {W:Math.max(2,Math.round(VW*k/2)*2),H:Math.max(2,Math.round(VH*k/2)*2)};}
$('exV').addEventListener('click',function(){if(!hasV||xp)return;var sh=Math.min(VW,VH),R=[720,1080,1440,2160];
  var opt=function(n,v,cur,lab,sub){return '<button type="button" class="sd-qo'+(String(v)===String(cur)?' on':'')+'" data-'+n+'="'+v+'"><b>'+lab+(String(v)===String(cur)?' ✓':'')+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</button>';};
  var est=function(){var z=exSize(EXQ.r),sg=segs(),tot=0;sg.forEach(function(x){tot+=x[1]-x[0];});var mb=z.W*z.H*EXQ.f*QF[EXQ.q]*tot/8/1048576;return z.W+'×'+z.H+' · '+EXQ.f+' fps · ≈ '+Math.max(1,Math.round(mb))+' MB';};
  function draw(){modal('<h3>'+t_('exV')+'</h3><p class="sd-f"><b>'+t_('exRes')+'</b></p><div class="sd-qrow">'+R.map(function(r){return opt('r',r,EXQ.r,r===2160?'4K':r===1440?'2K':r+'p',r>sh?t_('exUp'):(r===1080?t_('exRec'):''));}).join('')+'</div>'+
    '<p class="sd-f"><b>'+t_('exFps')+'</b></p><div class="sd-qrow">'+opt('f',30,EXQ.f,'30',t_('exF30'))+opt('f',60,EXQ.f,'60',t_('exF60'))+'</div>'+
    '<p class="sd-f"><b>'+t_('exQ')+'</b></p><div class="sd-qrow">'+opt('q','n',EXQ.q,t_('exQn'),t_('exQns'))+opt('q','h',EXQ.q,t_('exQh'),t_('exRec'))+opt('q','x',EXQ.q,t_('exQx'),t_('exQxs'))+'</div>'+
    '<p class="sd-note" id="exEst">'+est()+'</p><p class="sd-note">'+esc(t_('exNote'))+'</p><div class="sd-acts"><button type="button" class="sd-btn pri" id="exGo">'+t_('exGo')+'</button><button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');
    $('modb').querySelectorAll('[data-r],[data-f],[data-q]').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.r)EXQ.r=+b.dataset.r;if(b.dataset.f)EXQ.f=+b.dataset.f;if(b.dataset.q)EXQ.q=b.dataset.q;try{localStorage.setItem('ml-exq',JSON.stringify(EXQ));}catch(e){}draw();});});
    $('exGo').addEventListener('click',function(){var a=null;try{a=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}
      needXR().then(function(){if(!XR.canWork()){alertMsg(t_('recNo'));return;}XR.ac();recStart(a);}).catch(function(){alertMsg(t_('recErr'));});});}
  draw();});
function recStart(a){sel=null;markSel();vid.pause();var back=vid.currentTime||0,wasMuted=vid.muted;vid.muted=true;lastMT=-1;
  modal('<h3>'+t_('exV')+'</h3><p id="rMsg">'+esc(t_('recPrep'))+'</p><div class="sd-prog"><i id="rBar"></i></div><p class="sd-note" id="rKeep">'+esc(t_('recKeep'))+'</p><div class="sd-acts" id="rActs"><button type="button" class="sd-btn" id="rStop">'+t_('recStop')+'</button></div>');
  var job=xp={stop:false};$('rStop').addEventListener('click',function(){job.stop=true;});
  var sg=segs(),tot=0;sg.forEach(function(x){tot+=x[1]-x[0];});var fps=EXQ.f||30,n=Math.max(1,Math.floor(tot*fps));
  var _z=exSize(EXQ.r||1080),W=_z.W,H=_z.H;
  function srcAt(i){var t=i/fps;for(var j=0;j<sg.length;j++){var L2=sg[j][1]-sg[j][0];if(t<L2)return sg[j][0]+t;t-=L2;}return sg.length?sg[sg.length-1][1]-0.001:0;}
  function pr(f){var p=Math.round(f*100),b=$('rBar'),m=$('rMsg');if(b)b.style.width=p+'%';if(m)m.textContent=t_('recOn')(p);}
  var xHold={},hl=S.clips.filter(function(c){var m=mBy(c.m);return m&&FX.isFoot(m)&&FX.needsHold(m);});FX.histReset();
  var needP=S.clips.some(function(c){var m=mBy(c.m);return m&&(FX.needsPerson(m)||(isTrk(m)&&c.trk!==0));});
  var pre=(needP?FX.segLoad().catch(function(){}):Promise.resolve()).then(function(){return hl.reduce(function(pp,c){return pp.then(function(){var it={c:c,m:mBy(c.m)};return grab(FX.holdTime(it,cutsJ()),Math.max(W,H)).then(function(cv){xHold[c.u]=cv;});});},Promise.resolve());});
  pre.then(function(){return audioOf(a);}).then(function(buf){if(a&&a.close)try{a.close();}catch(e){}return XR.render({w:W,h:H,fps:fps,q:QF[EXQ.q]||.18,n:n,audio:buf,prog:pr,stop:function(){return job.stop;},
    frame:function(i,ctx){var ts=srcAt(i),L=fxList(ts),st=L.length?FX.remap(L,ts):ts;return frameAt(st).then(function(){ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
      var io={W:W,H:H,img:VP.el,key:'x'+i,ts:st,hold:function(it){return xHold[it.c.u]||null;}};
      if(L.length){try{FX.draw(ctx,L,io);}catch(e){FX.fit(ctx,VP.el,W,H);}}else{FX.fit(ctx,VP.el,W,H);}
      if(L.some(function(x){return x.b==='M-207';}))FX.front(ctx,L,io,'M-207');
      return ovDraw(ctx,ts,W,H).then(function(){
      var lg=function(){var lo=XLogo.get(),li=XLogo.image();if(!lo||lo.vid===false||!li||!li.naturalWidth)return;var r=XLogo.place(lo,W,H);ctx.save();ctx.globalAlpha=(lo.op||90)/100;ctx.drawImage(li,r.x,r.y,r.w,r.h);ctx.restore();};
      if(!clipsAt(ts)){lg();return;}
      var TK=trkAt(ts);if(TK.length)trkPlace(TK,FX.head(VP.el,'x'+i));
      /* text behind the person: motions up to that title, then the person, then the motions above it */
      var tb=io.mask?L.filter(function(x){return x.b==='M-201';}):[];
      if(!tb.length)return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp,.sd-ovv').then(function(img){if(img)ctx.drawImage(img,0,0,W,H);lg();});
      var kids=[].slice.call(ovl.children).filter(function(e){return e.classList.contains('sd-clip');}),last=-1;tb.forEach(function(x){var k=kids.indexOf($('c'+x.c.u));if(k>last)last=k;});
      kids.forEach(function(e,k){e.classList.toggle('xa',k>last);e.classList.toggle('xb',k<=last);});
      return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp,.sd-ovv,.xa').then(function(img){if(img)ctx.drawImage(img,0,0,W,H);FX.front(ctx,L,io,'M-201');return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp,.sd-ovv,.xb');}).then(function(img){if(img)ctx.drawImage(img,0,0,W,H);kids.forEach(function(e){e.classList.remove('xa','xb');});lg();});});});}});
  }).then(function(r){xp=null;var name=(vname||'video').replace(/\.[^.]+$/,'')+'-studio.'+r.ext;$('rMsg').textContent=t_('recDone')(name);$('rBar').style.width='100%';
    if($('rKeep'))$('rKeep').hidden=true;var acts=$('rActs');acts.innerHTML='<button type="button" class="sd-btn pri" id="rSave">'+t_('recSave')+'</button>'+(XR.canShare(r.blob,name)?'<button type="button" class="sd-btn" id="rShare">'+t_('recShare')+'</button>':'')+'<button type="button" class="sd-btn" data-x>'+t_('close')+'</button>';
    $('rSave').addEventListener('click',function(){XR.save(r.blob,name);});if($('rShare'))$('rShare').addEventListener('click',function(){XR.share(r.blob,name);});
    if(!XR.touch)XR.save(r.blob,name);
    try{if(window.goatcounter&&goatcounter.count)goatcounter.count({path:'studio-export',title:'Studio export',event:true});}catch(_){}
  }).catch(function(e){xp=null;var m=$('rMsg');if(m)m.textContent=e&&e.message==='stop'?t_('recCx'):t_('recErr');var acts=$('rActs');if(acts)acts.innerHTML='<button type="button" class="sd-btn" data-x>'+t_('close')+'</button>';})
  .then(function(){vid.pause();vid.muted=wasMuted;vid.currentTime=back;S.clips.forEach(function(c){var el=$('c'+c.u);if(el)el._an=null;});sync(true);});}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(xp)xp.stop=true;else $('mod').hidden=true;}});

/* ---------- language ---------- */
function applyL(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.title=t_('title')+' · Alansari.Tech';
  document.querySelectorAll('[data-t]').forEach(function(e){if(e.closest('.sd-clip'))return;var k=e.dataset.t;if(L[lang][k]!=null&&typeof L[lang][k]==='string')e.textContent=L[lang][k];});
  lq.placeholder=t_('q');$('cutB').textContent=t_('cutA');updDel();
  document.querySelectorAll('.sd-lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===lang);});
  S.clips.forEach(function(c){var m=mBy(c.m);m._en=null;});catsDraw();libDraw();if(hasV){rebuild();}else insp();dropInfo();if(window.__paneReady)paneShow(PANE);}
document.querySelectorAll('.sd-lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.l;try{localStorage.setItem('ml-lang',lang);}catch(e){}applyL();});});
applyL();enable();fit();

/* ---------- captions: type/paste the words, or get them from the video with Whisper (free, on the device) ---------- */
var capSegs=null,capBusy=false,WK=null;
function capStyles(){return (typeof CSS_!=='undefined'?CSS_:[]);}
function capOpen(into){if(!hasV){if(into)into.innerHTML='<p class="sd-empty">'+esc(t_('needV'))+'</p>';return;}var st=capStyles(),has=S.clips.some(function(c){return c.cap;});
  modal('<h3>'+t_('capT')+'</h3><p class="sd-note">'+esc(t_('capD'))+'</p>'+
   '<div class="sd-row"><button type="button" class="sd-btn" id="capAI">'+t_('capAI')+'</button><label class="sd-f">'+t_('capQ')+'<select id="capQ"><option value="onnx-community/whisper-base">'+t_('capQ1')+'</option><option value="onnx-community/whisper-small"'+(/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)?' selected':'')+'>'+t_('capQ2')+'</option><option value="onnx-community/whisper-large-v3-turbo"'+(/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)?'':' selected')+'>'+t_('capQ3')+'</option></select></label></div>'+
   '<p class="sd-note">'+esc(t_('capAIN'))+'</p><p id="capPg" class="sd-note" aria-live="polite"></p>'+
   '<label class="sd-f">'+t_('capTx')+'<textarea id="capTx" rows="6" dir="auto" placeholder="'+esc(t_('capPh'))+'"></textarea></label>'+
   '<div class="sd-f"><b>'+t_('capS')+'</b><div class="sd-row"><label class="sd-f">'+t_('capNum')+'<input type="text" id="capNum" dir="ltr" placeholder="M-011 / CS-02 / 86" autocomplete="off"></label><label class="sd-f">'+t_('capCat')+'<select id="capCat"><option value="ALL">'+t_('all')+'</option><option value="CS">'+t_('capCS')+'</option><option value="M">'+t_('capCAP')+'</option></select></label></div>'+
   '<input type="hidden" id="capS"><p class="sd-note" id="capSel"></p><div class="sd-cpg" id="capGrid"></div></div>'+
   '<div class="sd-row"><label class="sd-f">'+t_('font')+'<select id="capF"><option value="">'+t_('capByStyle')+'</option>'+FONTS.map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+esc(f.n)+'</option>';}).join('')+'</select></label><label class="sd-f">'+t_('pal')+'<select id="capPal"><option value="">'+t_('capByStyle')+'</option>'+(brand()?'<option value="BR">'+t_('brand')+'</option>':'')+CPS.map(function(p){return '<option value="'+p.id+'">'+p.id+' · '+esc(lang==='ar'?p.ar:p.en)+'</option>';}).join('')+'</select></label></div>'+
   '<div class="sd-row"><label class="sd-f">'+t_('capW')+'<select id="capW">'+[1,2,3,4,5,6].map(function(n){return '<option>'+n+'</option>';}).join('')+'</select></label><label class="sd-f">'+t_('capP')+'<select id="capP"><option value="b">'+t_('capPb')+'</option><option value="c">'+t_('capPc')+'</option><option value="t">'+t_('capPt')+'</option></select></label></div>'+
   '<div class="sd-acts"><button type="button" class="sd-btn pri" id="capGo">'+t_('capGo')+'</button>'+(has?'<button type="button" class="sd-btn" id="capRm">'+t_('capRm')+'</button>':'')+'<button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>',into);
  var tx=$('capTx');try{tx.value=localStorage.getItem('ml-captx')||'';capSegs=JSON.parse(localStorage.getItem('ml-capseg')||'null');}catch(e){}
  /* every caption look: the 16 ready styles, then every motion of the captions section, each drawn live with your words */
  var CAPM=M.filter(function(m){return m.c==='CAP';}),grid=$('capGrid'),gIO=null;
  function sample(){var w=String(tx.value||'').trim().split(/\s+/).filter(Boolean).slice(0,3).join(' ');return w||t_('capSample');}
  function capItems(){var k=$('capCat').value,o=[];if(k!=='M')capStyles().forEach(function(c){o.push({v:c.id,m:c.m,f:c.f,p:c.p,n:lang==='ar'?c.ar:c.en});});if(k!=='CS')CAPM.forEach(function(m){o.push({v:m.id,m:m.id,f:'',p:'',n:lang==='ar'?m.ar:m.en});});return o;}
  function tileDraw(li){var it=li._it,m=mBy(it.m),box=li.querySelector('.sd-mth');if(!m||!box)return;var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
    el.innerHTML=stageHTML(m);swapText(el,sample());var pf=$('capF').value||it.f,pp=$('capPal').value||it.p;if(pf){var fn=fam(pf);if(fn){el.classList.add('sd-cpf');el.style.fontFamily=fn;}}var pl=pBy(pp);if(pl)palApply(el,pl);
    box.innerHTML='';box.appendChild(el);li._th=Date.now();}
  function gridDraw(){var cur=$('capS').value;grid.innerHTML='';var items=capItems();if(gIO)gIO.disconnect();gIO=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting)tileDraw(x.target);else{x.target.querySelector('.sd-mth').innerHTML='';x.target._th=0;}});},{root:null,rootMargin:'80px'}):null;
    items.forEach(function(it){var li=document.createElement('button');li.type='button';li.className='sd-cpt'+(it.v===cur?' on':'');li.dataset.v=it.v;li._it=it;li.innerHTML='<div class="sd-mth"></div><span class="id">'+it.v+(it.v===cur?' ✓':'')+'</span><span class="nm">'+esc(it.n)+'</span>';grid.appendChild(li);if(gIO)gIO.observe(li);else tileDraw(li);});}
  function pick(v,scroll){var it=capItems().concat(capStyles().map(function(c){return {v:c.id};}),CAPM.map(function(m){return {v:m.id};})).filter(function(x){return x.v===v;})[0];if(!it)return false;$('capS').value=v;try{localStorage.setItem('ml-capsty',v);}catch(e){}
    grid.querySelectorAll('.sd-cpt').forEach(function(b){var on=b.dataset.v===v;b.classList.toggle('on',on);b.querySelector('.id').textContent=b.dataset.v+(on?' ✓':'');if(on&&scroll)b.scrollIntoView({block:'nearest',behavior:'smooth'});});
    var c=capStyles().filter(function(x){return x.id===v;})[0],m=mBy(c?c.m:v);$('capSel').textContent='✓ '+v+' · '+(c?(lang==='ar'?c.ar:c.en):(m?(lang==='ar'?m.ar:m.en):''));
    if(c){$('capW').value=String(Math.max(1,Math.min(6,c.w||3)));$('capP').value=c.pos==='c'?'c':'b';}return true;}
  grid.addEventListener('click',function(e){var b=e.target.closest('.sd-cpt');if(b)pick(b.dataset.v);});
  $('capNum').addEventListener('input',function(e){var q=e.target.value.trim().toUpperCase().replace(/\s+/g,'');if(!q)return;var v=q;if(/^\d+$/.test(q))v='M-'+('000'+q).slice(-3);else if(/^M\d+$/.test(q))v='M-'+('000'+q.slice(1)).slice(-3);else if(/^CS\d+$/.test(q))v='CS-'+('00'+q.slice(2)).slice(-2);else if(/^CS-\d$/.test(q))v='CS-0'+q.slice(3);
    if(!pick(v,true)){var cs=$('capCat');if(cs.value!=='ALL'){cs.value='ALL';gridDraw();}if(!pick(v,true))$('capSel').textContent=t_('capNoNum');}});
  $('capCat').addEventListener('change',function(){gridDraw();});
  ['capF','capPal'].forEach(function(id){$(id).addEventListener('change',function(){grid.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th)tileDraw(b);});});});
  XFont.wire($('capF'),{famOf:fam,sample:sample,title:t_('font')});XCol.opts($('capPal'),'');XCol.wire($('capPal'),pBy,function(id){$('capPal').value=id;grid.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th)tileDraw(b);});});XPal.wire($('capPal'),{resolve:pBy,title:t_('pal')});
  var tmR=setInterval(function(){if(!document.body.contains(grid)||(!into&&$('mod').hidden)){clearInterval(tmR);return;}var now=Date.now();grid.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th&&now-b._th>4200)tileDraw(b);});},1000);
  var tmS=null;tx.addEventListener('input',function(){clearTimeout(tmS);tmS=setTimeout(function(){grid.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th)tileDraw(b);});},400);});
  var last='CS-01';try{last=localStorage.getItem('ml-capsty')||'CS-01';}catch(e){}gridDraw();if(!pick(last,!into))pick('CS-01',!into);
  tx.addEventListener('input',function(){try{localStorage.setItem('ml-captx',tx.value);}catch(e){}});
  $('capAI').addEventListener('click',capListen);
  $('capGo').addEventListener('click',function(){var n=capPlace(tx.value,$('capS').value,+$('capW').value,$('capP').value,$('capF').value,$('capPal').value);if(!n){$('capPg').textContent=t_('capNo');return;}if(into)capOpen(into);else $('mod').hidden=true;alertMsg(t_('capDone')(n));});
  if($('capRm'))$('capRm').addEventListener('click',function(){snap();S.clips=S.clips.filter(function(c){return !c.cap;});sel=null;rebuild();save();if(into)capOpen(into);else $('mod').hidden=true;});}
/* pick the transition for one join: every transition drawn live, number box, the one already there marked ✓ */
function trnPick(T){var TR=M.filter(function(m){return m.c==='TRN';}),cur=S.clips.filter(function(c){var m=mBy(c.m);return m&&m.c==='TRN'&&Math.abs(c.s-T)<.06;})[0];
  modal('<h3>'+t_('trnT')+'</h3><p class="sd-note">'+esc(t_('trnD'))+' '+fmt(T)+'</p><label class="sd-f">'+t_('capNum')+'<input type="text" id="trNum" dir="ltr" placeholder="M-016 / 102" autocomplete="off"></label><div class="sd-cpg" id="trGrid"></div>'+
    '<div class="sd-acts">'+(cur?'<button type="button" class="sd-btn" id="trRm">'+t_('trnRm')+'</button>':'')+'<button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');
  var g=$('trGrid'),io=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting)td(x.target);else{x.target.querySelector('.sd-mth').innerHTML='';x.target._th=0;}});},{root:null,rootMargin:'80px'}):null;
  function td(b){var m=mBy(b.dataset.v),box=b.querySelector('.sd-mth');if(!m)return;var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);el.innerHTML=stageHTML(m);box.innerHTML='';box.appendChild(el);b._th=Date.now();}
  TR.forEach(function(m){var b=document.createElement('button');b.type='button';var on=cur&&cur.m===m.id;b.className='sd-cpt'+(on?' on':'');b.dataset.v=m.id;b.innerHTML='<div class="sd-mth"></div><span class="id">'+m.id+(on?' ✓':'')+'</span><span class="nm">'+esc(lang==='ar'?m.ar:m.en)+'</span>';g.appendChild(b);if(io)io.observe(b);else td(b);});
  var rt=setInterval(function(){if($('mod').hidden||!document.body.contains(g)){clearInterval(rt);return;}var now=Date.now();g.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th&&now-b._th>4200)td(b);});},1000);
  function use(id){if(cur){S.clips=S.clips.filter(function(c){return c!==cur;});var e=$('c'+cur.u);if(e)e.remove();}var c=addClip(id,T,true);if(c){c.s=+T.toFixed(2);}$('mod').hidden=true;rebuild();sel=c?c.u:null;msel=[];markSel();insp();save();seek(Math.max(0,T-.6));}
  g.addEventListener('click',function(e){var b=e.target.closest('.sd-cpt');if(b)use(b.dataset.v);});
  $('trNum').addEventListener('keydown',function(e){if(e.key!=='Enter')return;var q=e.target.value.trim().toUpperCase().replace(/\s+/g,''),v=/^\d+$/.test(q)?'M-'+('000'+q).slice(-3):/^M\d+$/.test(q)?'M-'+('000'+q.slice(1)).slice(-3):q;if(TR.some(function(m){return m.id===v;}))use(v);});
  $('trNum').addEventListener('input',function(e){var q=e.target.value.trim().toUpperCase().replace(/\s+/g,''),v=/^\d+$/.test(q)?'M-'+('000'+q).slice(-3):/^M\d+$/.test(q)?'M-'+('000'+q.slice(1)).slice(-3):q;var b=g.querySelector('[data-v="'+v+'"]');g.querySelectorAll('.sd-cpt').forEach(function(x){x.classList.toggle('hl',x===b);});if(b)b.scrollIntoView({block:'nearest',behavior:'smooth'});});
  if($('trRm'))$('trRm').addEventListener('click',function(){snap();S.clips=S.clips.filter(function(c){return c!==cur;});var e=$('c'+cur.u);if(e)e.remove();$('mod').hidden=true;rebuild();insp();save();});
  if(cur){var cb=g.querySelector('[data-v="'+cur.m+'"]');if(cb)setTimeout(function(){cb.scrollIntoView({block:'nearest'});},50);}}
function capKept(){var sg=segs(),tot=0;sg.forEach(function(x){tot+=x[1]-x[0];});return {sg:sg,tot:tot,at:function(o){var t=o;for(var j=0;j<sg.length;j++){var L2=sg[j][1]-sg[j][0];if(t<=L2)return [sg[j][0]+t,sg[j][1]];t-=L2;}var e=sg[sg.length-1];return [e[1],e[1]];}};}
function capChunks(words,n){var out=[];for(var i=0;i<words.length;i+=n)out.push(words.slice(i,i+n));return out;}
function capPlace(text,sid,n,pos,fo,po){var st=capStyles().filter(function(x){return x.id===sid;})[0];if(!st&&mBy(sid))st={m:sid,f:'',p:''};if(!st)return 0;st={m:st.m,f:fo||st.f||'',p:po||st.p||''};var lines=String(text||'').split(/\n+/).map(function(l){return l.trim();}).filter(Boolean);if(!lines.length)return 0;
  var items=[],K=capKept();
  if(capSegs&&capSegs.length===lines.length){lines.forEach(function(l,i){var wt=capSegs[i][2];if(wt&&wt.length){capByWords(l,wt,n,K,items);return;}var a=+capSegs[i][0],b=capSegs[i][1]==null?Math.min(VD,a+3):+capSegs[i][1];if(!(b>a))b=a+1.5;var w=l.split(/\s+/).filter(Boolean),ch=capChunks(w,n);
      /* spread the words only over the parts of this line that are kept (deleted parts and cut silences are skipped) */
      var iv=K.sg.map(function(g){return [Math.max(a,g[0]),Math.min(b,g[1])];}).filter(function(g){return g[1]-g[0]>.02;});if(!iv.length)iv=[[a,b]];var tot=iv.reduce(function(x,g){return x+g[1]-g[0];},0),per=tot/Math.max(1,w.length),o=0;
      var at=function(o){for(var j=0;j<iv.length;j++){var L2=iv[j][1]-iv[j][0];if(o<L2-1e-6)return [iv[j][0]+o,iv[j][1]];o-=L2;}var e=iv[iv.length-1];return [Math.max(e[0],e[1]-.35),e[1]];};
      ch.forEach(function(c){var r=at(o),d=Math.min(per*c.length,r[1]-r[0]);items.push([r[0],Math.max(.35,d),c.join(' ')]);o+=per*c.length;});});}
  else{var w=lines.join(' ').split(/\s+/).filter(Boolean),per=K.tot/Math.max(1,w.length),o=0;capChunks(w,n).forEach(function(c){var r=K.at(o),d=Math.min(per*c.length,Math.max(.35,r[1]-r[0]));items.push([r[0],Math.max(.35,d),c.join(' ')]);o+=per*c.length;});}
  /* a caption stays until the next one starts when the gap is short, so the words don't blink */
  items.sort(function(x,y){return x[0]-y[0];});items.forEach(function(it,i){var nx=items[i+1];if(nx){var gap=nx[0]-(it[0]+it[1]);if(gap<.6)it[1]=Math.max(.3,nx[0]-it[0]);}});
  snap();S.clips=S.clips.filter(function(c){return !c.cap;});var lane=0;S.clips.forEach(function(c){lane=Math.max(lane,c.l+1);});var y=pos==='t'?18:pos==='c'?50:80,m=mBy(st.m);if(!m)return 0;
  items.forEach(function(it){var s0=Math.max(0,Math.min(VD-.3,+it[0].toFixed(2))),d0=+Math.min(VD-s0,it[1]).toFixed(2);S.clips.push({u:uid++,m:st.m,s:s0,d:Math.max(.3,d0),l:lane,text:it[2],f:st.f||'',p:st.p||'',x:50,y:y,sc:85,cap:1});});
  sel=null;rebuild();var tg=pos==='t'?20:pos==='c'?50:78,f0=S.clips.filter(function(c){return c.cap;})[0],k=f0?textY(f0,tg):null;if(k!=null){S.clips.forEach(function(c){if(c.cap){c.y=k;var e=$('c'+c.u);if(e)place(e,c);}});save();}return items.length;}
/* where the words sit inside a motion's box differs per motion: measure it and return the y that puts the words' middle at target % of the frame */
function textY(c,target){var el=$('c'+c.u);if(!el)return null;var fr=frame.getBoundingClientRect();if(!(fr.height>0))return null;var was=el.hidden;el.hidden=false;var r=el.getBoundingClientRect(),top=1e9,bot=-1e9;
  textNodes(el).forEach(function(n){var rg=document.createRange();rg.selectNodeContents(n);var q=rg.getBoundingClientRect();if(q.height>0){top=Math.min(top,q.top);bot=Math.max(bot,q.bottom);}});el.hidden=was;
  if(!(r.height>0)||bot<top)return null;var cy=((top+bot)/2-fr.top)/fr.height*100;return Math.round(Math.max(5,Math.min(97,c.y+(target-cy)))*10)/10;}
function capAudio(){if(!SRC.length)return Promise.reject(new Error('nofile'));var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,oc=new OC(1,Math.ceil(Math.max(1,VD)*16000),16000);return decodeAll(oc,1).then(function(b){if(!b)throw new Error('noaudio');return b.getChannelData(0);});}
/* common slips the speech model makes in Gulf Arabic */
var ARFIX=[[/ذكال/g,'ذكاء'],[/ذكاء الصناعي/g,'ذكاء الاصطناعي'],[/الذكا(?=\s|$)/g,'الذكاء'],[/(^|\s)قع(?=\s)/g,'$1قاعد'],[/(^|\s)شون(?=\s)/g,'$1شلون'],[/البرومت/g,'البرومبت'],[/الذكاء الصناعي/g,'الذكاء الاصطناعي']];
/* timing from the spoken words: each caption starts with its first word and ends with its last (if the text was edited, words are matched by position) */
function capByWords(l,wt,n,K,items){var w=l.split(/\s+/).filter(Boolean),N=wt.length,W=w.length,j=0;if(!W)return;
  capChunks(w,n).forEach(function(c){var k0=Math.min(N-1,Math.floor(j*N/W)),k1=Math.min(N-1,Math.max(k0,Math.round((j+c.length)*N/W)-1)),a=+wt[k0][0],b=+wt[k1][1];if(!(b>a))b=a+.4;
    /* inside a deleted part: start where the video comes back */
    var inK=K.sg.some(function(g){return a>=g[0]-1e-3&&a<g[1];});if(!inK){var nx=K.sg.filter(function(g){return g[0]>=a;})[0];if(nx){b=Math.max(nx[0]+.35,b);a=nx[0];}}
    items.push([a,Math.max(.35,b-a),c.join(' ')]);j+=c.length;});}
/* speech result → lines with times; with word times, lines break at pauses, punctuation or about 12 words */
function asrLines(out){var ch=(out&&out.chunks)||[],lines=[],sg=[];
  if(out&&out.word&&ch.length){var cur=[],flush=function(){if(!cur.length)return;var t=fixAr(cur.map(function(x){return x.w;}).join(' ').replace(/\s+/g,' ').trim());if(t){lines.push(t);sg.push([cur[0].a,cur[cur.length-1].b,cur.map(function(x){return [x.a,x.b];})]);}cur=[];};
    ch.forEach(function(c,i){var w=String(c.text||'').trim();if(!w)return;var ts=c.timestamp||[],a=+ts[0]||0,b=ts[1]==null?a+.4:+ts[1];if(cur.length){var last=cur[cur.length-1];if(a-last.b>.55||cur.length>=12||b-cur[0].a>6.5)flush();}
      w.split(/\s+/).forEach(function(p2,k,arr){var span=(b-a)/arr.length;cur.push({w:p2,a:+(a+span*k).toFixed(2),b:+(a+span*(k+1)).toFixed(2)});});if(/[.!?؟،,]$/.test(w))flush();});flush();}
  else{ch.forEach(function(c){var t=fixAr(String(c.text||'').trim());if(!t)return;lines.push(t);sg.push([c.timestamp?c.timestamp[0]:0,c.timestamp?c.timestamp[1]:null]);});}
  if(!lines.length&&out&&out.text&&String(out.text).trim()){lines=[fixAr(String(out.text).trim())];sg=null;}
  return {lines:lines,segs:sg&&sg.length===lines.length?sg:null};}
function fixAr(t){ARFIX.forEach(function(r){t=t.replace(r[0],r[1]);});return t;}
function capWorker(){if(WK)return WK;var src="import {pipeline,env} from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';env.allowLocalModels=false;let asr=null,cur='';\n"+
  /* the large model: on the graphics card the listening part must stay fp16 (q4 there writes wrong words on many cards); on the processor q4 is tested and accurate */
  /* word timings come from the _timestamped exports of the same models; the processor is used for every model (on many graphics cards the large model wrote wrong words) */
  "const TS={'onnx-community/whisper-large-v3-turbo':'onnx-community/whisper-large-v3-turbo_timestamped','onnx-community/whisper-small':'onnx-community/whisper-small_timestamped','onnx-community/whisper-base':'onnx-community/whisper-base_timestamped'};\n"+
  "const DT={'onnx-community/whisper-large-v3-turbo_timestamped':{wasm:{encoder_model:'q4',decoder_model_merged:'q4'}},'onnx-community/whisper-large-v3-turbo':{wasm:{encoder_model:'q4',decoder_model_merged:'q4'}}};\nasync function load(model,dev){const o={device:dev,progress_callback:p=>self.postMessage({type:'dl',p})};if(DT[model])o.dtype=DT[model][dev];return pipeline('automatic-speech-recognition',model,o);}\n"+
  "async function goodGpu(){try{if(!navigator.gpu)return false;const a=await navigator.gpu.requestAdapter();if(!a||a.isFallbackAdapter||!a.features.has('shader-f16'))return false;const i=a.info||(a.requestAdapterInfo?await a.requestAdapterInfo():{});return !/swiftshader|llvmpipe|software/i.test(JSON.stringify(i||{}));}catch(_){return false;}}\n"+
  /* a quick check that the words make sense: mostly Arabic letters and no word stuck on repeat */
  "function bad(o){const t=String(o&&o.text||'').trim();if(!t)return false;const L=(t.match(/\\p{L}/gu)||[]).length,A=(t.match(/[\\u0600-\\u06FF]/g)||[]).length;if(L>8&&A/L<.6)return true;const w=t.split(/\\s+/);let r=1;for(let i=1;i<w.length;i++){r=w[i]===w[i-1]?r+1:1;if(r>=4)return true;}const u=new Set(w);return w.length>24&&u.size/w.length<.3;}\n"+
  "const OPT={language:'arabic',task:'transcribe',chunk_length_s:30,stride_length_s:5,return_timestamps:true};\n"+
  "self.onmessage=async e=>{const d=e.data;try{let word=!!TS[d.model];if(!asr||cur!==d.model){cur=d.model;asr=null;if(word){try{asr=await load(TS[d.model],'wasm');}catch(_){asr=null;word=false;}}if(!asr)asr=await load(d.model,'wasm');asr._word=word;}\n"+
  "self.postMessage({type:'run'});let out=null;if(asr._word){try{out=await asr(d.audio.slice(0),Object.assign({},OPT,{return_timestamps:'word'}));out.word=true;}catch(_){out=null;}}if(!out){if(asr._word){asr=await load(d.model,'wasm');asr._word=false;}out=await asr(d.audio,OPT);}self.postMessage({type:'done',out});}catch(err){self.postMessage({type:'err',msg:String(err&&err.message||err)});}};";
  WK=new Worker(URL.createObjectURL(new Blob([src],{type:'text/javascript'})),{type:'module'});return WK;}
function capListen(){if(capBusy)return;var pg=$('capPg'),btn=$('capAI');capBusy=true;btn.disabled=true;pg.textContent=t_('capAud');var files={};
  capAudio().then(function(audio){var w=capWorker();return new Promise(function(res,rej){w.onmessage=function(e){var d=e.data;
      if(d.type==='dl'&&d.p){if(d.p.file&&d.p.total){files[d.p.file]=[d.p.loaded||0,d.p.total];var L=0,T=0;Object.keys(files).forEach(function(k){L+=files[k][0];T+=files[k][1];});var el=$('capPg');if(el)el.textContent=t_('capDl')(Math.round(L/T*100));}}
      else if(d.type==='run'||d.type==='retry'){var key=d.type==='run'?'capRun':'capRetry',t0=Date.now();clearInterval(w._tk);var tick=function(){var el2=$('capPg');if(el2)el2.textContent=t_(key)+' '+Math.round((Date.now()-t0)/1000)+'s';};tick();w._tk=setInterval(tick,1000);clearTimeout(w._wd);w._wd=setTimeout(function(){clearInterval(w._tk);try{w.terminate();}catch(_){}WK=null;rej(new Error('timeout'));},(audio.length/16000*20+300)*1000);}else if(d.type==='done'){clearTimeout(w._wd);clearInterval(w._tk);res(d.out);}else if(d.type==='err'){clearTimeout(w._wd);clearInterval(w._tk);rej(new Error(d.msg));}};
    w.onerror=function(e){rej(new Error(e.message||'worker'));};w.postMessage({audio:audio,model:$('capQ')?$('capQ').value:'onnx-community/whisper-base',gpu:!!navigator.gpu&&!matchMedia('(pointer:coarse)').matches},[audio.buffer]);});
  }).then(function(out){var R=asrLines(out),lines=R.lines;
    capSegs=R.segs;var tx=$('capTx');if(tx){tx.value=lines.join('\n');}try{localStorage.setItem('ml-captx',lines.join('\n'));localStorage.setItem('ml-capseg',JSON.stringify(capSegs));}catch(e){}
    var el=$('capPg');if(el)el.textContent=t_('capOk')(lines.length);try{if(window.goatcounter&&goatcounter.count)goatcounter.count({path:'captions-ai',title:'Captions AI',event:true});}catch(_){}
  }).catch(function(e){var el=$('capPg');if(el)el.textContent=(e&&/decode|EncodingError|nofile/i.test(String(e.message||e.name)))?t_('capNoA'):t_('capErr');try{console.warn('captions',e);}catch(_){}})
  .then(function(){capBusy=false;var b=$('capAI');if(b)b.disabled=false;});}
/* ---------- logo on the video ---------- */
var sdLg=document.createElement('img');sdLg.id='sdLogo';sdLg.className='sd-logo';sdLg.alt='';$('frame').appendChild(sdLg);
function logoSync(){var o=XLogo.get();if(!o||o.vid===false){sdLg.hidden=true;return;}sdLg.hidden=false;sdLg.src=XLogo.url();var r=XLogo.place(o,100,100*(VH/VW||16/9));
  sdLg.style.left=r.x+'%';sdLg.style.top=(r.y/(100*(VH/VW||16/9))*100)+'%';sdLg.style.width=r.w+'%';sdLg.style.opacity=(o.op||90)/100;XLogo.image();}
function logoEdit(){XLogo.editor(function(){logoSync();XLogo.previews();paneLogo();});}
window.addEventListener('storage',function(e){if(e.key==='ml-logo'){logoSync();XLogo.previews();}});
logoSync();XLogo.previews();


/* ---------- cut silences: find the quiet parts of the audio and add them as cuts ---------- */
var silEnv=null,silFor=null;
function silAudio(){if(silEnv&&silFor===srcKey())return Promise.resolve(silEnv);if(!SRC.length)return Promise.reject(new Error('nofile'));
  var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,oc=new OC(1,Math.max(16000,Math.ceil((VD||60)*16000)),16000);return decodeAll(oc,1).then(function(buf){if(!buf)throw new Error('noaudio');
    var ch=buf.numberOfChannels,sr=buf.sampleRate,hop=Math.round(sr*0.02),n=Math.floor(buf.length/hop),env=new Float32Array(n),data=[];for(var c=0;c<ch;c++)data.push(buf.getChannelData(c));
    for(var i=0;i<n;i++){var sum=0;for(var c2=0;c2<ch;c2++){var d=data[c2];for(var k=i*hop,e=k+hop;k<e;k++)sum+=d[k]*d[k];}env[i]=10*Math.log10(sum/(hop*ch)+1e-12);}
    silEnv={env:env,step:0.02};silFor=srcKey();return silEnv;});}
function silFind(E,strength,minLen,pad){var env=E.env,st=E.step,a=Array.prototype.slice.call(env).filter(function(v){return v>-100;}).sort(function(x,y){return x-y;});if(!a.length)return [];
  var loud=a[Math.floor(a.length*0.9)],floor=a[Math.floor(a.length*0.1)],thr=Math.max(floor+6,loud-(strength?22:30));
  var out=[],s0=-1;for(var i=0;i<=env.length;i++){var q=i<env.length&&env[i]<thr;if(q&&s0<0)s0=i;if(!q&&s0>=0){var a0=s0*st+pad,b0=i*st-pad;if(i>=env.length)b0=i*st;if(s0===0)a0=0;if(b0-a0>=minLen)out.push({a:+a0.toFixed(2),b:+Math.min(VD,b0).toFixed(2),auto:1});s0=-1;}}
  return out.filter(function(k){return k.a>=S.tin-0.01&&k.b<=tout()+0.01;});}
$('silB').addEventListener('click',function(){if(!hasV)return;var hasAuto=S.cuts.some(function(k){return k.auto;});
  modal('<h3>'+t_('silT')+'</h3><p class="sd-note">'+esc(t_('silD'))+'</p>'+
   '<div class="sd-row"><label class="sd-f">'+t_('silS')+'<select id="silS"><option value="0">'+t_('silS1')+'</option><option value="1">'+t_('silS2')+'</option></select></label><label class="sd-f">'+t_('silM')+'<select id="silM"><option value="0.3">0.3s</option><option value="0.5" selected>0.5s</option><option value="0.8">0.8s</option><option value="1.2">1.2s</option></select></label></div>'+
   '<label class="sd-f" style="flex-direction:row;align-items:center;gap:8px"><input type="checkbox" id="silK" checked> '+t_('silK')+'</label>'+
   '<p id="silR" class="sd-note" aria-live="polite">'+t_('silWait')+'</p>'+
   '<div class="sd-acts"><button type="button" class="sd-btn pri" id="silGo" disabled>'+t_('silGo')+'</button>'+(hasAuto?'<button type="button" class="sd-btn" id="silU">'+t_('silUndo')+'</button>':'')+'<button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');
  var found=[];function calc(){silAudio().then(function(E){found=silFind(E,$('silS').value==='1',+$('silM').value,$('silK').checked?0.12:0.02);var tot=found.reduce(function(x,k){return x+(k.b-k.a);},0);
      $('silR').textContent=t_('silFound')(found.length,tot.toFixed(1));$('silGo').disabled=!found.length;}).catch(function(){$('silR').textContent=t_('silNoA');});}
  ['silS','silM','silK'].forEach(function(id){$(id).addEventListener('change',calc);});calc();
  $('silGo').addEventListener('click',function(){if(!found.length)return;snap();var all=S.cuts.filter(function(k){return !k.auto;}).concat(found).sort(function(x,y){return x.a-y.a;}),m=[];
    all.forEach(function(k){var l=m[m.length-1];if(l&&k.a<=l.b+0.001){l.b=Math.max(l.b,k.b);if(!k.auto)delete l.auto;}else m.push({a:k.a,b:k.b,auto:k.auto});});
    S.cuts=m;selCut=null;selSeg=null;drawTL();insp();save();var tot=found.reduce(function(x,k){return x+(k.b-k.a);},0);$('mod').hidden=true;alertMsg(t_('silDone')(found.length,tot.toFixed(1)));});
  if($('silU'))$('silU').addEventListener('click',function(){snap();S.cuts=S.cuts.filter(function(k){return !k.auto;});drawTL();insp();save();$('mod').hidden=true;});});



/* ---------- sections (the rail on the side, or along the bottom on a phone) ---------- */
var PANE='vid',PHONE=matchMedia('(max-width:900px)'),PT_={vid:'pVid',mot:'pMot',cap:'pCap',trn:'pTrn',fx:'pFx',snd:'pSnd',logo:'pLogo'};
function paneShow(k,tap){if(tap&&PHONE.matches&&PANE===k&&document.body.classList.contains('pane-on')){paneClose();return;}PANE=k;
  $('rail').querySelectorAll('[data-p]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.p===k));});$('paneT').textContent=t_(PT_[k]);
  document.querySelectorAll('#pane .sd-pbody').forEach(function(d){d.hidden=d.dataset.pane.split(' ').indexOf(k)<0;});
  if(k==='mot'||k==='fx'){if(lgroup!==k){lgroup=k;lcat='ALL';}catsDraw();libDraw();list.scrollTop=0;}
  if(k==='cap')capOpen($('pane-cap'));if(k==='trn')paneTrn();if(k==='snd')paneSnd();if(k==='logo')paneLogo();if(k==='vid')paneVid();
  if(tap||!PHONE.matches)document.body.classList.add('pane-on');}
function paneClose(){document.body.classList.remove('pane-on');$('rail').querySelectorAll('[data-p]').forEach(function(b){if(PHONE.matches)b.setAttribute('aria-pressed','false');});}
$('rail').addEventListener('click',function(e){var b=e.target.closest('[data-p]');if(b)paneShow(b.dataset.p,true);});
$('paneX').addEventListener('click',paneClose);
/* project menu */
$('projB').addEventListener('click',function(e){e.stopPropagation();$('projM').hidden=!$('projM').hidden;});
document.addEventListener('click',function(e){if(!e.target.closest('.sd-menu'))$('projM').hidden=true;});
$('projM').addEventListener('click',function(e){if(e.target.closest('button'))$('projM').hidden=true;});

/* Video section: the videos in order, add / change */
function paneVid(){var P=$('pane-vid');if(!P)return;if(!hasV){P.innerHTML='<div class="sd-pempty"><p>'+esc(t_('vNone'))+'</p><button type="button" class="sd-btn pri" id="pvUp">'+t_('drop')+'</button></div>';$('pvUp').addEventListener('click',function(){fin.click();});return;}
  P.innerHTML='<p class="sd-mname"><b>'+t_('vids')+' ('+SRC.length+')</b> · '+fmt(VD)+'</p><div class="sd-vlist">'+SRC.map(function(x,i){return '<div class="r"><b>'+(i+1)+'. '+esc(x.name)+'</b><small>'+fmt(x.dur)+'</small>'+(SRC.length>1?'<button type="button" class="sd-btn sm" data-vm="'+i+':-1"'+(i?'':' disabled')+'>⬆</button><button type="button" class="sd-btn sm" data-vm="'+i+':1"'+(i<SRC.length-1?'':' disabled')+'>⬇</button><button type="button" class="sd-btn sm" data-vd="'+i+'">🗑</button>':'')+'</div>';}).join('')+'</div>'+
   '<div class="sd-acts"><button type="button" class="sd-btn pri" id="addV">'+t_('addV')+'</button><button type="button" class="sd-btn" id="addOv">'+t_('addOv')+'</button><button type="button" class="sd-btn" id="chV">'+t_('chV')+'</button></div>'+
   '<p class="sd-note">'+esc(SRC.length>1?t_('vTip'):t_('vTip1'))+'</p><p class="sd-mname">'+t_('trimIn')+' '+fmt(S.tin)+' · '+t_('trimOut')+' '+fmt(tout())+'</p>';
  $('addV').addEventListener('click',vAdd);$('chV').addEventListener('click',vChange);$('addOv').addEventListener('click',function(){var f3=$('vfile3');f3.value='';f3.click();});
  P.querySelectorAll('[data-vm]').forEach(function(b){b.addEventListener('click',function(){var kv=b.dataset.vm.split(':');srcMove(+kv[0],+kv[1]);paneVid();});});
  P.querySelectorAll('[data-vd]').forEach(function(b){b.addEventListener('click',function(){srcDel(+b.dataset.vd);paneVid();});});}

/* a grid of live motion tiles with a number box; onPick(id) */
function tileGrid(P,ids,cur,onPick,ph){P.insertAdjacentHTML('beforeend','<label class="sd-f">'+t_('capNum')+'<input type="text" class="tgNum" dir="ltr" placeholder="'+(ph||'M-016')+'" autocomplete="off"></label><div class="sd-cpg sd-cpg2"></div>');
  var g=P.querySelector('.sd-cpg2'),num=P.querySelector('.tgNum'),io=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting)td(x.target);else{x.target.querySelector('.sd-mth').innerHTML='';x.target._th=0;}});},{root:null,rootMargin:'80px'}):null;
  function td(b){var m=mBy(b.dataset.v),box=b.querySelector('.sd-mth');if(!m)return;var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);el.innerHTML=stageHTML(m);box.innerHTML='';box.appendChild(el);b._th=Date.now();}
  ids.forEach(function(id){var m=mBy(id),b=document.createElement('button');b.type='button';var on=id===cur;b.className='sd-cpt'+(on?' on':'');b.dataset.v=id;b.innerHTML='<div class="sd-mth"></div><span class="id">'+id+(on?' ✓':'')+'</span><span class="nm">'+esc(lang==='ar'?m.ar:m.en)+'</span>';g.appendChild(b);if(io)io.observe(b);else td(b);});
  var rt=setInterval(function(){if(!document.body.contains(g)){clearInterval(rt);return;}if(g.offsetParent===null)return;var now=Date.now();g.querySelectorAll('.sd-cpt').forEach(function(b){if(b._th&&now-b._th>4200)td(b);});},1000);
  g.addEventListener('click',function(e){var b=e.target.closest('.sd-cpt');if(b)onPick(b.dataset.v);});
  function norm(q){q=q.trim().toUpperCase().replace(/\s+/g,'');return /^\d+$/.test(q)?'M-'+('000'+q).slice(-3):/^M\d+$/.test(q)?'M-'+('000'+q.slice(1)).slice(-3):q;}
  num.addEventListener('input',function(){var b=g.querySelector('[data-v="'+norm(num.value)+'"]');g.querySelectorAll('.sd-cpt').forEach(function(x){x.classList.toggle('hl',x===b);});if(b)b.scrollIntoView({block:'nearest',behavior:'smooth'});});
  num.addEventListener('keydown',function(e){if(e.key==='Enter'){var v=norm(num.value);if(ids.indexOf(v)>=0)onPick(v);}});return g;}

/* Transitions section: pick one and it goes on the nearest join or cut to the playhead */
function paneTrn(){var P=$('pane-trn');if(!P)return;if(!hasV){P.innerHTML='<p class="sd-empty">'+esc(t_('needV'))+'</p>';return;}
  var J=joins().concat(S.cuts.map(function(k){return k.b;})),t=vid.currentTime||0,near=null;J.forEach(function(j){if(near==null||Math.abs(j-t)<Math.abs(near-t))near=j;});
  P.innerHTML='<p class="sd-note">'+esc(J.length?t_('trnP1'):t_('trnP0'))+'</p>';
  tileGrid(P,M.filter(function(m){return m.c==='TRN';}).map(function(m){return m.id;}),null,function(id){var T=vid.currentTime||0,nn=null;J.forEach(function(j){if(Math.abs(j-T)<3&&(nn==null||Math.abs(j-T)<Math.abs(nn-T)))nn=j;});
    if(nn!=null){var old=S.clips.filter(function(c){var m=mBy(c.m);return m&&m.c==='TRN'&&Math.abs(c.s-nn)<.06;});if(old.length){snap();S.clips=S.clips.filter(function(c){return old.indexOf(c)<0;});old.forEach(function(c){var e=$('c'+c.u);if(e)e.remove();});}}
    var c=addClip(id,nn!=null?nn:T,true);if(c&&nn!=null)c.s=+nn.toFixed(2);rebuild();if(c){sel=c.u;msel=[];}markSel();insp();save();seek(Math.max(0,(c?c.s:T)-.6));if(PHONE.matches)paneClose();},'M-016 / 102');}

/* Sounds section: listen, then put at the playhead; they get their own lane and go into the MP4 */
var SXD={},sxAud=null,sxTy='ALL';
function sndDur(x){return SXD[x.id]||1.2;}
function sndBy(u){return (S.snd||[]).filter(function(x){return x.u===u;})[0]||null;}
function sxLoadDur(id){if(SXD[id])return;var a=new Audio();a.preload='metadata';a.src=sxUrl({id:id});a.addEventListener('loadedmetadata',function(){if(isFinite(a.duration)&&a.duration>0){SXD[id]=a.duration;drawTL();}});}
function sxPlay(id){try{if(sxAud)sxAud.pause();sxAud=new Audio(sxUrl({id:id}));sxAud.volume=Math.min(1,VPvol);sxAud.play().catch(function(){});}catch(e){}}
function paneSnd(){var P=$('pane-snd');if(!P)return;var tys={};SXS.forEach(function(x){tys[x.ty]=1;});
  P.innerHTML='<p class="sd-note">'+esc(t_('sndD'))+'</p><div class="sd-cats"><select id="sxTy"><option value="ALL">'+t_('all')+' ('+SXS.length+')</option>'+Object.keys(tys).map(function(k){return '<option value="'+k+'">'+esc(SXT[k]?(lang==='ar'?SXT[k][1]:SXT[k][0]):k)+'</option>';}).join('')+'</select></div>'+
   '<ul class="sd-slist">'+SXS.filter(function(x){return sxTy==='ALL'||x.ty===sxTy;}).map(function(x){return '<li><button type="button" class="sd-sp" data-sp="'+x.id+'" aria-label="▶">▶</button><span class="nm"><b>'+x.id+'</b> '+esc(lang==='ar'?x.ar:x.en)+'</span><button type="button" class="add" data-sa="'+x.id+'" aria-label="+" data-nv>＋</button></li>';}).join('')+'</ul>';
  $('sxTy').value=sxTy;$('sxTy').addEventListener('change',function(e){sxTy=e.target.value;paneSnd();});enable();
  P.querySelectorAll('[data-sp]').forEach(function(b){b.addEventListener('click',function(){sxPlay(b.dataset.sp);});});
  P.querySelectorAll('[data-sa]').forEach(function(b){b.addEventListener('click',function(){sndAdd(b.dataset.sa);});});}
function sndAdd(id,at){if(!hasV)return;snap();S.snd=S.snd||[];var x={u:uid++,id:id,s:+Math.max(0,Math.min(VD-.1,at!=null?at:(vid.currentTime||0))).toFixed(2),v:1};S.snd.push(x);sxLoadDur(id);selSnd=x.u;sel=null;msel=[];markSel();drawTL();insp();save();sxPlay(id);if(PHONE.matches)setTimeout(paneClose,150);return x;}
function inspSnd(x){var sx=sxById(x.id);IN.innerHTML='<p class="sd-mname"><b>🔊 '+x.id+'</b> '+esc(sx?(lang==='ar'?sx.ar:sx.en):'')+'</p>'+
  '<div class="sd-acts"><button type="button" class="sd-btn sm" id="sPl">▶ '+t_('listen')+'</button><button type="button" class="sd-btn sm" id="sGo">'+t_('goStart')+'</button></div>'+
  '<label class="sd-f">'+t_('start')+'<input type="number" id="sS" step="0.1" min="0" value="'+x.s+'"></label><label class="sd-f">'+t_('sndVol')+' <input type="range" id="sV" min="0" max="1.5" step="0.05" value="'+x.v+'"></label>'+
  '<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-sn="-0.1">'+t_('earlier')+'</button><button type="button" class="sd-btn sm" data-sn="0.1">'+t_('later')+'</button></div><div class="sd-acts"><button type="button" class="sd-btn sm" id="sDel">'+t_('del')+'</button></div>';
  $('sPl').addEventListener('click',function(){sxPlay(x.id);});$('sGo').addEventListener('click',function(){seek(x.s);});
  $('sS').addEventListener('change',function(e){snap();x.s=+Math.max(0,Math.min(VD-.1,+e.target.value||0)).toFixed(2);drawTL();save();});
  $('sV').addEventListener('input',function(e){x.v=+e.target.value;save();});
  IN.querySelectorAll('[data-sn]').forEach(function(b){b.addEventListener('click',function(){snap();x.s=+Math.max(0,Math.min(VD-.1,x.s+(+b.dataset.sn))).toFixed(2);$('sS').value=x.s;drawTL();save();});});
  $('sDel').addEventListener('click',delAny);}
/* play the sounds with the preview */
var sndOn={},sndLastT=0;
function sndStop(){Object.keys(sndOn).forEach(function(k){try{sndOn[k].pause();}catch(e){}});sndOn={};}
function sndTick(){if(!hasV||xp||!(S.snd||[]).length){if(Object.keys(sndOn).length)sndStop();return;}var t=vid.currentTime||0;
  if(!VP.playing||Math.abs(t-sndLastT)>.4){sndStop();}sndLastT=t;if(!VP.playing)return;
  S.snd.forEach(function(x){var d=sndDur(x),on=sndOn[x.u];if(t>=x.s&&t<x.s+d&&!inCut(t)){if(!on){var a=new Audio(sxUrl({id:x.id}));a.volume=Math.max(0,Math.min(1,x.v*VPvol*(VPmute?0:1)));try{a.currentTime=Math.max(0,t-x.s);}catch(e){}a.play().catch(function(){});sndOn[x.u]=a;}}else if(on){on.pause();delete sndOn[x.u];}});}
(function sl(){try{sndTick();}catch(e){}requestAnimationFrame(sl);})();
/* sounds mixed into the exported audio (same timeline, before cuts are taken out) */
function sndMix(ctx,buf){var L=(S.snd||[]).filter(function(x){return x.v>0;});if(!L.length)return Promise.resolve(buf);var sr=ctx.sampleRate;
  if(!buf)buf=ctx.createBuffer(2,Math.max(1,Math.ceil(VD*sr)),sr);var cache={};
  return L.reduce(function(p,x){return p.then(function(){if(!cache[x.id])cache[x.id]=fetch(sxUrl({id:x.id})).then(function(r){return r.arrayBuffer();}).then(function(ab){return new Promise(function(res){try{var q=ctx.decodeAudioData(ab,res,function(){res(null);});if(q&&q.then)q.then(res,function(){res(null);});}catch(e){res(null);}});}).catch(function(){return null;});
    return cache[x.id].then(function(sb){if(!sb)return;var o=Math.floor(x.s*sr),n=Math.min(sb.length,buf.length-o);for(var c=0;c<buf.numberOfChannels;c++){var d=buf.getChannelData(c),sd=sb.getChannelData(Math.min(c,sb.numberOfChannels-1));for(var i=0;i<n;i++){var v=d[o+i]+sd[i]*x.v;d[o+i]=v>1?1:v<-1?-1:v;}}});});},Promise.resolve()).then(function(){return buf;});}

/* Logo section */
function paneLogo(){var P=$('pane-logo');if(!P)return;var o=XLogo.get(),u=o?XLogo.url():'';
  P.innerHTML=(o?'<div class="sd-lgpv"><img alt="" src="'+u+'"></div>':'<p class="sd-note">'+esc(t_('lgNone'))+'</p>')+
   '<div class="sd-acts"><button type="button" class="sd-btn pri" id="lgE">'+(o?t_('lgEdit'):t_('lgUp'))+'</button></div>'+
   (o?'<label class="sd-chk"><input type="checkbox" id="lgV"'+(o.vid!==false?' checked':'')+'> '+t_('lgOnV')+'</label>':'');
  $('lgE').addEventListener('click',logoEdit);if($('lgV'))$('lgV').addEventListener('change',function(e){var o2=XLogo.get();if(!o2)return;o2.vid=e.target.checked;try{XLogo.set?XLogo.set(o2):localStorage.setItem('ml-logo',JSON.stringify(o2));}catch(_){}logoSync();});}
function paneRefresh(){if(PANE==='vid')paneVid();}
paneShow('vid');window.__paneReady=1;

/* ---------- videos as layers on top of the main video ---------- */
function ovAddFiles(fs,at){fs.forEach(function(f,i){ovAdd(f,at!=null?at:(vid.currentTime||0));});}
function ovAdd(f,at,keep){var url=URL.createObjectURL(f),v=document.createElement('video');v.preload='metadata';v.src=url;
  v.addEventListener('loadedmetadata',function(){var dur=v.duration||0;if(!dur){alertMsg(t_('vBad').replace('%s',f.name));return;}snap();var s0=Math.max(0,Math.min(at,VD-.5)),c=keep||{};
    c.u=c.u||uid++;c.m='__VID';c.s=+s0.toFixed(2);c.d=+Math.max(.5,Math.min(dur,VD-s0)).toFixed(2);c.in=c.in||0;c.x=c.x||50;c.y=c.y||45;c.sc=c.sc||55;c.text='';c.f='';c.p='';c.vol=c.vol==null?1:c.vol;c.name=f.name;c.ar=(v.videoWidth&&v.videoHeight)?v.videoWidth/v.videoHeight:0.5625;c.l=freeLane(c.s,c.d,c.u);
    OVF[c.u]={f:f,url:url,dur:dur};S.clips.push(c);sel=c.u;msel=[];rebuild();markSel();insp();save();},{once:true});}
function ovDraw(ctx,ts,W,H){var L=S.clips.filter(function(c){return isOv(c)&&OVF[c.u]&&ts>=c.s&&ts<c.s+c.d;}).sort(function(a,b){return b.l-a.l;});if(!L.length)return Promise.resolve();
  return L.reduce(function(p,c){return p.then(function(){var el=$('c'+c.u),v=el&&el.querySelector('video');if(!v)return;var tg=Math.min(OVF[c.u].dur-.02,(c.in||0)+(ts-c.s));
    return new Promise(function(res){if(Math.abs(v.currentTime-tg)<.002&&v.readyState>=2){res();return;}var done=false,fin=function(){if(!done){done=true;res();}};v.addEventListener('seeked',fin,{once:true});v.currentTime=tg;setTimeout(fin,1500);}).then(function(){
      var w=W*c.sc/100,h=w/(c.ar||0.5625),x=W*c.x/100-w/2,y=H*c.y/100-h/2;try{ctx.drawImage(v,x,y,w,h);}catch(e){}});});},Promise.resolve());}
/* sound of the layers, added into the export */
function ovMix(ctx,buf){var L=S.clips.filter(function(c){return isOv(c)&&OVF[c.u]&&(c.vol==null?1:c.vol)>0;});if(!L.length)return Promise.resolve(buf);var sr=ctx.sampleRate;if(!buf)buf=ctx.createBuffer(2,Math.max(1,Math.ceil(VD*sr)),sr);
  return L.reduce(function(p,c){return p.then(function(){return OVF[c.u].f.arrayBuffer().then(function(ab){return new Promise(function(res){try{var q=ctx.decodeAudioData(ab,res,function(){res(null);});if(q&&q.then)q.then(res,function(){res(null);});}catch(e){res(null);}});}).then(function(sb){if(!sb)return;var vol=c.vol==null?1:c.vol,o=Math.floor(c.s*sr),i0=Math.floor((c.in||0)*sr),n=Math.min(Math.floor(c.d*sr),sb.length-i0,buf.length-o);if(n<=0)return;
      for(var ch=0;ch<buf.numberOfChannels;ch++){var d=buf.getChannelData(ch),sd=sb.getChannelData(Math.min(ch,sb.numberOfChannels-1));for(var i=0;i<n;i++){var v=d[o+i]+sd[i0+i]*vol;d[o+i]=v>1?1:v<-1?-1:v;}}});});},Promise.resolve()).then(function(){return buf;});}
function inspOv(c){IN.innerHTML='<p class="sd-mname"><b>🎬 '+esc(t_('ovT'))+'</b> · '+esc(c.name||'')+'</p><p class="sd-note">'+esc(t_('ovTip'))+'</p>'+
  '<div class="sd-row"><label class="sd-f">'+t_('start')+'<input type="number" id="oS" step="0.1" min="0" value="'+c.s+'"></label><label class="sd-f">'+t_('dur')+'<input type="number" id="oD" step="0.1" min="0.3" value="'+c.d+'"></label></div>'+
  '<label class="sd-f">'+t_('size')+' <input type="range" id="oSc" min="10" max="100" value="'+c.sc+'"></label><label class="sd-f">'+t_('sndVol')+' <input type="range" id="oV" min="0" max="1.5" step="0.05" value="'+(c.vol==null?1:c.vol)+'"></label>'+
  '<div class="sd-acts"><button type="button" class="sd-btn sm" id="oFull">'+t_('ovFull')+'</button><button type="button" class="sd-btn sm" id="oMain">'+t_('ovMain')+'</button><button type="button" class="sd-btn sm" id="oDel">'+t_('del')+'</button></div>';
  var re=function(){var e=$('c'+c.u);if(e)place(e,c);drawTL();save();};
  $('oS').addEventListener('change',function(e){snap();c.s=+Math.max(0,Math.min(VD-c.d,+e.target.value||0)).toFixed(2);re();});
  $('oD').addEventListener('change',function(e){snap();c.d=+Math.max(.3,Math.min(VD-c.s,(OVF[c.u]?OVF[c.u].dur-(c.in||0):99),+e.target.value||1)).toFixed(2);re();});
  $('oSc').addEventListener('input',function(e){c.sc=+e.target.value;re();});$('oV').addEventListener('input',function(e){c.vol=+e.target.value;save();});
  $('oFull').addEventListener('click',function(){snap();var ar=c.ar||.5625,fa=VW/VH;c.x=50;c.y=50;c.sc=Math.round(ar>=fa?100*ar/fa:100);re();insp();});
  $('oMain').addEventListener('click',function(){ovToSrc(c,c.s);});$('oDel').addEventListener('click',delAny);}
/* a main video becomes a layer (keeps its place in time); a layer joins the main videos */
function srcToOv(i,T){if(SRC.length<2){alertMsg(t_('ovNeed2'));return;}var x=SRC[i],at=T!=null?T:x.off,f=x.f;snap();var old=SRC.map(function(s2){return {off:s2.off,dur:s2.dur,s:s2};});SRC.splice(i,1);if(x.el!==vidEl0)x.el.remove();else{x.el.pause();x.el.classList.remove('on');}srcOffs();srcRemap(old,x);ovAdd(f,Math.max(0,Math.min(at,VD-Math.min(x.dur,VD))));}
function ovToSrc(c,T){var o=OVF[c.u];if(!o)return;snap();S.clips=S.clips.filter(function(x){return x!==c;});var e=$('c'+c.u);if(e)e.remove();var j=SRC.length;SRC.forEach(function(x,k){if(j===SRC.length&&T<x.off+x.dur/2)j=k;});
  var el=document.createElement('video');el.playsInline=true;el.setAttribute('playsinline','');el.preload='auto';frame.insertBefore(el,$('fxc'));VPL.forEach(function(q){el.addEventListener(q[0],q[1]);});el.muted=VPmute;el.volume=VPvol;
  var s2={f:o.f,name:o.f.name,url:URL.createObjectURL(o.f),dur:0,w:0,h:0,el:el,off:0};el.src=s2.url;el.addEventListener('loadedmetadata',function(){s2.dur=el.duration;s2.w=el.videoWidth;s2.h=el.videoHeight;var old=SRC.map(function(q){return {off:q.off,dur:q.dur,s:q};});SRC.splice(j,0,s2);srcOffs();srcRemapIns(old);},{once:true});}
function srcMoveTo(i,j){snap();var old=SRC.map(function(s2){return {off:s2.off,dur:s2.dur,s:s2};});var x=SRC.splice(i,1)[0];SRC.splice(j,0,x);srcOffs();srcRemap(old,null);}
function srcRemapIns(old){srcRemap(old,null);}
})();
