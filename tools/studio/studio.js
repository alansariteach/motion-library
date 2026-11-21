/* ===== Motion Studio app ===== */
(function(){
var L={
 ar:{title:'استوديو الموشن',back:'← المكتبة',lib:'الحركات',q:'ابحث: زوم، كتابة، M-021',all:'الكل',ft:'على الفيديو',ftNote:'هذي الحركة تشتغل على الفيديو نفسه، وتشوفها بالمعاينة وتطلع بالتصدير. الدائرة على الفيديو هي نقطة التركيز (مكان الزوم أو بداية الانتقال)، اسحبها لمكان ثاني. حركات الشخص تقص الشخص عن الخلفية بجهازك (أول مرة تنزّل ملف صغير). والانتقال يبين أحسن إذا حطيته عند مكان قص.',fxWait:'قاعد أجهّز قص الشخص…',trk:'🎯 تتبع وجهي تلقائياً (إذا سحبتها بيدك يوقف التتبع)',
  basket:'＋ من سلتي',drop:'ارفع الفيديو اللي تبي تسوي له مونتاج',dropS:'اسحبه هني أو اضغط تختاره. الفيديو يبقى بجهازك وما ينرفع لأي مكان.',dropQ:function(l){return '🎬 عندك حركات جاهزة تنضاف ('+l+'). ارفع فيديوك وتنحط عليه على طول.';},dropR:function(n){return 'عندك مشروع محفوظ فيه '+n+' حركة. ارفع نفس الفيديو عشان تكمل عليه.';},newP:'مشروع جديد',
  play:'تشغيل',pause:'إيقاف',vol:'الصوت',zoom:'تكبير التايم لاين',inH:'⇤ البداية هني',outH:'النهاية هني ⇥',cutA:'✂ قص هني',cutB:'✂ قص هني',delB:'🗑 احذف',restore:'↩ رجّع الجزء',segT:'جزء من الفيديو',segDel:'🗑 احذف هالجزء',tip:'💡 اسحب الحركة على التايم لاين تقدّمها أو تأخرها، واسحب طرفها تطوّلها أو تقصّرها. وبالفيديو: اسحبها تغيّر مكانها، وبإصبعين (أو الدائرة الصفرا) تكبّرها وتصغّرها. ولقص الفيديو: حط المؤشر واضغط «✂ قص هني»، بعدين اضغط على الجزء اللي تبي تشيله واضغط «🗑 احذف». وأي حركة تختارها تقدر تحذفها بنفس الزر.',earlier:'⏪ قدّم',later:'أخّر ⏩',shorter:'أقصر',longer:'أطول',smaller:'➖ أصغر',bigger:'➕ أكبر',cutFrom:'من',cutTo:'إلى',silB:'✂️ قص السكتات',silT:'قص السكتات',silD:'ألقى الأماكن اللي ما فيها كلام بالفيديو وأشيلها، فيصير الفيديو أسرع وأقوى. تقدر ترجعها أو تضغط «تراجع».',silS:'الحساسية',silS1:'خفيف',silS2:'قوي',silM:'أقل طول للسكتة',silK:'أخلّي هامش قبل وبعد الكلام',silWait:'قاعد أسمع الفيديو…',silFound:function(n,t){return n?'لقيت '+n+' سكتة، مجموعها '+t+' ثانية.':'ما لقيت سكتات بهالإعدادات. جرّب «قوي» أو طول أقل.';},silGo:'✂️ قصها',silUndo:'↩ رجّع السكتات اللي انقصت',silNoA:'هالفيديو ما فيه صوت.',silDone:function(n,t){return 'تم ✓ انقص '+n+' سكتة ('+t+' ثانية).';},capB:'📝 كابشن',logoB:'🏷 الشعار',capT:'الكابشن على الفيديو',capD:'اكتب أو الصق الكلام اللي تقوله بالفيديو، أو خل الموقع يسمع الفيديو ويطلّع الكلام. بعدها اختار الستايل، وكل جملة تنحط على التايم لاين وتقدر تعدّلها.',capAI:'🎙 طلّع الكلام من الفيديو',capAIN:'مجاني ويشتغل بجهازك. أول مرة ينزّل البرنامج وبعدها ينحفظ. «الأدق» هو الأحسن للهجة الكويتية والخليجية، بس حجمه كبير ويكون أسرع بكثير على كمبيوتر بكروم. راجع الكلام وصحّحه بعدها.',capQ:'الدقة',capQ1:'سريع (80 ميقا، أقل دقة)',capQ2:'متوسط (250 ميقا)',capQ3:'الأدق: ينفع للهجة (تقريباً 1 قيقا أول مرة بس، الأحسن بالكمبيوتر)',capTx:'الكلام',capPh:'اكتب أو الصق الكلام هني… كل سطر يصير جملة لحاله، أو خله فقرة وحدة وأنا أقسمه.',capS:'الستايل',capW:'كلمات بكل كابشن',capP:'المكان',capPb:'تحت',capPc:'بالنص',capPt:'فوق',capGo:'✓ ركّب الكابشن',capRm:'🗑 شيل الكابشن',capNo:'اكتب الكلام أول، أو طلّعه من الفيديو.',capDl:function(p){return 'قاعد أنزّل البرنامج… '+p+'%';},capRun:'قاعد أسمع الفيديو وأكتب الكلام… (الأدق ياخذ دقايق، خل الصفحة مفتوحة)',capRetry:'الكتابة الأولى ما كانت مضبوطة، قاعد أعيدها بطريقة أدق…',capAud:'قاعد أجهّز الصوت…',capOk:function(n){return 'تم ✓ طلع '+n+' سطر. راجعهم وصحّح أي كلمة، بعدين اضغط «ركّب الكابشن».';},capErr:'ما قدرت أطلّع الكلام. جرّب «سريع»، أو من الكمبيوتر بكروم، أو اكتب الكلام بنفسك.',capNoA:'هالفيديو ما فيه صوت.',capDone:function(n){return 'تم ✓ انحطّ '+n+' كابشن على التايم لاين.';},chV:'🎞 غيّر الفيديو',chVQ:'إذا غيّرت الفيديو بينمسح كل الشغل اللي سويته على هالفيديو (الحركات والقص والكابشن) وتبدأ من جديد. تكمل؟',pvAdd:'＋ أضفها على الفيديو',clr:'🗑 ابدأ من جديد',clrQ:'أكيد؟ بينشال الفيديو والحركات وتبدأ من الصفر.',undo:'↶ تراجع',
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
 en:{title:'Motion Studio',back:'← Library',lib:'Motions',q:'Search: zoom, type, M-021',all:'All',ft:'on footage',ftNote:'This motion works on the footage itself; you see it in the preview and it goes into the export. The circle on the video is the focus point (where the zoom or the transition starts); drag it. Person effects cut you out of the background on your device (a small download the first time). A transition shows best where you made a cut.',fxWait:'Getting the person cut-out ready…',trk:'🎯 Follow my face automatically (dragging it by hand turns this off)',
  basket:'＋ From my basket',drop:'Upload the video you want to edit',dropS:'Drag it here or click to choose. The video stays on your device and is never uploaded.',dropQ:function(l){return '🎬 Motions waiting to be added ('+l+'). Upload your video and they go on it right away.';},dropR:function(n){return 'You have a saved project with '+n+' motions. Upload the same video to continue.';},newP:'New project',
  play:'Play',pause:'Pause',vol:'Volume',zoom:'Timeline zoom',inH:'⇤ Start here',outH:'End here ⇥',cutA:'✂ Split here',cutB:'✂ Split here',delB:'🗑 Delete',restore:'↩ Bring it back',segT:'Video part',segDel:'🗑 Delete this part',tip:'💡 Drag a motion on the timeline to move it earlier or later; drag its edge to make it longer or shorter. On the video: drag it to move it, pinch with two fingers (or use the yellow dot) to resize. To cut the video: put the playhead and press «✂ Split here», tap the part you want gone and press «🗑 Delete». The same button deletes a selected motion.',earlier:'⏪ Earlier',later:'Later ⏩',shorter:'Shorter',longer:'Longer',smaller:'➖ Smaller',bigger:'➕ Bigger',cutFrom:'From',cutTo:'To',silB:'✂️ Cut silences',silT:'Cut the silences',silD:'I find the parts with no talking and remove them, so the video is faster and tighter. You can bring them back or press «Undo».',silS:'Sensitivity',silS1:'Light',silS2:'Strong',silM:'Shortest silence',silK:'Keep a little gap before and after speech',silWait:'Listening to the video…',silFound:function(n,t){return n?'Found '+n+' silences, '+t+' s in total.':'No silences with these settings. Try «Strong» or a shorter length.';},silGo:'✂️ Cut them',silUndo:'↩ Bring the cut silences back',silNoA:'This video has no sound.',silDone:function(n,t){return 'Done ✓ '+n+' silences cut ('+t+' s).';},capB:'📝 Captions',logoB:'🏷 Logo',capT:'Captions on the video',capD:'Type or paste what you say in the video, or let the site listen to the video and write it. Then pick a style; every line goes on the timeline and you can edit it.',capAI:'🎙 Get the words from the video',capAIN:'Free and runs on your device. The first time it downloads the model, then it is saved. «Most accurate» is best for Gulf dialects but large, and much faster on a computer with Chrome. Check and fix the words afterwards.',capQ:'Accuracy',capQ1:'Fast (80 MB, less accurate)',capQ2:'Medium (250 MB)',capQ3:'Most accurate, good with dialects (about 1 GB, first time only; best on a computer)',capTx:'Words',capPh:'Type or paste the words here… each line becomes one caption group, or paste one paragraph and I split it.',capS:'Style',capW:'Words per caption',capP:'Position',capPb:'Bottom',capPc:'Middle',capPt:'Top',capGo:'✓ Add captions',capRm:'🗑 Remove captions',capNo:'Type the words first, or get them from the video.',capDl:function(p){return 'Downloading the model… '+p+'%';},capRun:'Listening to the video and writing the words… (the most accurate one takes minutes; keep the page open)',capRetry:'The first pass did not look right, redoing it the accurate way…',capAud:'Preparing the audio…',capOk:function(n){return 'Done ✓ '+n+' lines. Check and fix any word, then press «Add captions».';},capErr:'Could not get the words. Try «Fast», or Chrome on a computer, or type the words yourself.',capNoA:'This video has no sound.',capDone:function(n){return 'Done ✓ '+n+' captions added to the timeline.';},chV:'🎞 Change video',chVQ:'Changing the video wipes everything you did on this one (motions, cuts and captions) and you start fresh. Continue?',pvAdd:'＋ Add it to the video',clr:'🗑 Start over',clrQ:'Sure? The video and all motions will be removed and you start from scratch.',undo:'↶ Undo',
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
function mBy(id){for(var i=0;i<M.length;i++)if(M[i].id===id)return M[i];return null;}
function fBy(id){for(var i=0;i<FONTS.length;i++)if(FONTS[i].id===id)return FONTS[i];return null;}
function pBy(id){var cu=XCol.cuParse(id);if(cu)return cu;if(id==='BR'){var b=brand();return b?{id:'BR',bg:b.bg,tx:b.tx,ac:b.ac,hl:b.hl}:null;}for(var i=0;i<CPS.length;i++)if(CPS[i].id===id)return CPS[i];return null;}
function brand(){try{var b=JSON.parse(localStorage.getItem('ml-brand'));return b&&b.on?b:null;}catch(e){return null;}}
function mDur(m){var d=parseFloat(m.d||'2.8');return isFinite(d)&&d>0?d:2.8;}
function fmt(t){t=Math.max(0,t||0);var m=Math.floor(t/60),s=t-m*60;return m+':'+(s<10?'0':'')+s.toFixed(1);}
var famDone={};
function fam(id){var f=fBy(id);if(!f)return '';var n='sdf_'+f.id.replace('-','');if(!famDone[n]){famDone[n]=1;try{var ff=new FontFace(n,'url("'+fUrl(f)+'")',f.v?{weight:f.w[0]+' '+f.w[1]}:{});ff.load().then(function(x){document.fonts.add(x);}).catch(function(){});}catch(e){}}return '"'+n+'",var(--f-ar)';}

/* ---------- state ---------- */
var S={clips:[],cuts:[],splits:[],tin:0,tout:null},selSeg=null,uid=1,sel=null,selCut=null,vid=$('vid'),hasV=false,VD=0,VW=9,VH=16,pps=40,hist=[],pendCut=null;
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
  var big=tn.sort(function(a,b){return b.textContent.trim().length-a.textContent.trim().length;})[0];big.textContent=txt;var de=big.parentElement.closest('[data-t]');if(de)de.dataset.t=txt;}

/* ---------- preview ---------- */
var ovl=$('ovl'),frame=$('frame'),fstyle=document.createElement('style');document.head.appendChild(fstyle);
function fit(){var v=$('view'),r=v.getBoundingClientRect(),w=r.width-28,h=r.height-28,ar=VW/VH;var fw=Math.min(w,h*ar),fh=fw/ar;frame.style.width=Math.max(10,fw)+'px';frame.style.height=Math.max(10,fh)+'px';}
window.addEventListener('resize',function(){fit();drawTL();});
function clipEl(c){var m=mBy(c.m),el=document.createElement('div');el.className='st sd-clip'+(m.vcls?' '+m.vcls:'')+(FX.isFoot(m)&&!FX.keepsHTML(m)?' foot':'')+(FX.keepsHTML(m)?' tbp':'');el.id='c'+c.u;el.dataset.u=c.u;
  el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
  el.innerHTML=stageHTML(m)+'<span class="sd-foot">'+esc(m.id+' '+m.en+' · '+t_('ft'))+'</span><i class="sd-h" data-h="1"></i>';
  if(c.text)swapText(el,c.text);
  el.querySelectorAll('.scr').forEach(function(s){s.textContent=s.dataset.t||s.textContent;});el.querySelectorAll('.cnt').forEach(function(s){s.textContent=s.dataset.to||s.textContent;});
  var p=pBy(c.p);if(p){el.style.setProperty('--mon',p.bg);el.style.setProperty('--mon2',p.bg);el.style.setProperty('--mon-fg',p.tx);el.style.setProperty('--coral',p.ac);el.style.setProperty('--mint',p.hl);el.style.color=p.tx;}
  place(el,c);return el;}
function place(el,c){el.style.left=c.x+'%';el.style.top=c.y+'%';el.style.width=c.sc+'%';}
function fontsCSS(){fstyle.textContent=S.clips.filter(function(c){return c.f;}).map(function(c){return '#c'+c.u+' *:not(.sd-foot){font-family:'+fam(c.f)+'!important}';}).join('\n');}
function renderClip(c){var old=$('c'+c.u),el=clipEl(c);el._an=null;if(old)old.replaceWith(el);else ovl.appendChild(el);if(sel===c.u)el.classList.add('sel');fontsCSS();sync(true);}
function rebuild(){ovl.innerHTML='';S.clips.forEach(function(c){ovl.appendChild(clipEl(c));});fontsCSS();drawTL();insp();save();sync(true);}
function inCut(t){for(var i=0;i<S.cuts.length;i++){var k=S.cuts[i];if(t>=k.a&&t<k.b)return k;}return null;}
function tout(){return S.tout==null?VD:S.tout;}
function sync(force){var t=vid.currentTime||0;
  if(!vid.paused){var k=inCut(t);if(k){vid.currentTime=Math.min(k.b,VD);t=k.b;}if(t<S.tin-.05){vid.currentTime=S.tin;}if(t>=tout()-.02){vid.pause();if(rec)recEnd();}}
  S.clips.forEach(function(c){var el=$('c'+c.u);if(!el)return;var on=t>=c.s&&t<c.s+c.d&&!inCut(t);if(el.hidden===on)el.hidden=!on;if(!on)return;
    if(!el._an||!el._an.length)el._an=el.getAnimations({subtree:true});var lt=(t-c.s)*1000;
    el._an.forEach(function(a){if(a.playState!=='paused')a.pause();a.currentTime=lt;});});
  $('tc').textContent=fmt(t)+' / '+fmt(VD);var ph=$('ph');if(ph)ph.style.left=(t*pps)+'px';
  $('play').textContent=vid.paused?'▶':'❚❚';$('play').setAttribute('aria-label',t_(vid.paused?'play':'pause'));}
(function loop(){sync();try{fxTick();}catch(e){try{console.warn('fx',e);}catch(_){}}requestAnimationFrame(loop);})();
/* ---------- footage effects (camera, transitions, person, time) drawn live over the video ---------- */
var fxc=$('fxc'),fxx=fxc.getContext('2d'),vid2=document.createElement('video');vid2.muted=true;vid2.playsInline=true;vid2.preload='auto';
var fxLastKey='',holds={},grabQ=Promise.resolve(),rmC=null,rmK=null,rmP=0,fxWaitEl=null;
FX.onReady=function(){fxLastKey='';};
function palOf(c){return pBy(c.p);}
function fxList(t){return FX.active(S.clips,t,mBy,palOf,inCut,lang);}
/* a still of the video at time ts (second, hidden video element so the main one keeps playing) */
function grab(ts,maxW){grabQ=grabQ.then(function(){return new Promise(function(res){if(vid.src&&vid2.src!==vid.src)vid2.src=vid.src;var done=false;
    var fin=function(){if(done)return;done=true;var w=vid2.videoWidth||VW,h=vid2.videoHeight||VH,k=Math.min(1,(maxW||720)/Math.max(w,h)),c=document.createElement('canvas');c.width=Math.max(2,Math.round(w*k));c.height=Math.max(2,Math.round(h*k));try{c.getContext('2d').drawImage(vid2,0,0,c.width,c.height);}catch(e){}res(c);};
    var go=function(){var tt=Math.max(0,Math.min(ts,(vid2.duration||VD||1)-.02));if(Math.abs(vid2.currentTime-tt)<.002&&vid2.readyState>=2){fin();return;}var on=function(){vid2.removeEventListener('seeked',on);if(vid2.requestVideoFrameCallback){var once=false;vid2.requestVideoFrameCallback(function(){if(!once){once=true;fin();}});setTimeout(fin,250);}else fin();};vid2.addEventListener('seeked',on);vid2.currentTime=tt;setTimeout(fin,3000);};
    if(vid2.readyState>=1)go();else{vid2.addEventListener('loadedmetadata',go,{once:true});setTimeout(fin,5000);}});});return grabQ;}
function holdFor(it){if(!FX.needsHold(it.m))return null;var ht=FX.holdTime(it,S.cuts),k=it.c.u+':'+ht.toFixed(2);if(holds[k])return holds[k]===1?null:holds[k];holds[k]=1;grab(ht).then(function(c){holds[k]=c;fxLastKey='';});return null;}
function fxWait(on){if(on&&!fxWaitEl){fxWaitEl=document.createElement('div');fxWaitEl.className='sd-fxwait';fxWaitEl.textContent=t_('fxWait');frame.appendChild(fxWaitEl);}else if(!on&&fxWaitEl){fxWaitEl.remove();fxWaitEl=null;}}
/* tracking motions (label, ring, face blur, arrow…) follow the real face: the motion's drawn face is lined up with yours */
var TRKA={'M-242':[53.5,16],'M-247':[53.5,20],'M-160':[25,30]},TRKNO={'M-245':1,'M-248':1,'M-243':1};
function isTrk(m){if(!m)return false;var b=FX.bid(m);return (m.c==='TRK'&&!TRKNO[b])||b==='M-160';}
function trkAt(t){return S.clips.filter(function(c){var m=mBy(c.m);return c.trk!==0&&isTrk(m)&&t>=c.s&&t<c.s+c.d&&!inCut(t);});}
function trkPlace(list,h,Wf){list.forEach(function(c){var el=$('c'+c.u);if(!el)return;if(!h){place(el,c);return;}var A=TRKA[FX.bid(mBy(c.m))]||[53.5,26],sw=cl01(h.w/(A[1]/100),.25,2.6),yy=h.y-(A[0]/100-.5)*sw*1.25*(VW/VH);
  el.style.left=(h.x*100)+'%';el.style.top=(yy*100)+'%';el.style.width=(sw*100)+'%';});}
function cl01(v,a,b){return v<a?a:v>b?b:v;}
var trkKey='';
function fxTick(){if(xp||!fxc)return;var t=vid.currentTime||0,L=hasV?fxList(t):[],olds=ovl.querySelectorAll('.sd-fxp');
  var TK=hasV&&!drag?trkAt(t):[];if(TK.length){var hk='v'+Math.round(t*30)+TK.map(function(c){return c.u;}).join(',');if(hk!==trkKey){var h=FX.head(vid,'v'+Math.round(t*30));if(h)trkKey=hk;else if(!FX.failed()&&!FX.ready())fxWait(true);trkPlace(TK,h);}}
  if(!L.length){if(!fxc.hidden)fxc.hidden=true;olds.forEach(function(e){e.remove();});fxWait(false);fxLastKey='';return;}
  var r=frame.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1),W=Math.max(2,Math.round(Math.min(r.width*dpr,720))),H=Math.max(2,Math.round(W*VH/VW));
  var ts=FX.remap(L,t),img=vid,far=Math.abs(ts-t)>.05;
  if(far){var rk=Math.round(ts*15);if(rmK!==rk&&!rmP){rmP=1;grab(ts).then(function(c){rmC=c;rmK=rk;rmP=0;fxLastKey='';});}img=rmC||vid;}
  var fk=(img===vid?'v'+Math.round(t*30):'r'+rmK),key=fk+'|'+W+'|'+L.map(function(i){return i.c.u+':'+i.lt.toFixed(2)+':'+i.c.x+':'+i.c.y+':'+i.c.p;}).join(',')+(FX.ready()?'R':'');
  if(key===fxLastKey&&!fxc.hidden)return;fxLastKey=key;
  if(fxc.width!==W||fxc.height!==H){fxc.width=W;fxc.height=H;}fxc.hidden=false;
  var need=L.some(function(it){return FX.needsPerson(it.m);});if(need&&!FX.ready()&&!FX.failed()){FX.segLoad().catch(function(){fxWait(false);});fxWait(true);}else fxWait(false);
  var io={W:W,H:H,img:img,key:fk,ts:ts,hold:holdFor};FX.draw(fxx,L,io);
  if(L.some(function(i){return i.b==='M-207';}))FX.front(fxx,L,io,'M-207');
  /* text behind the person: the person is drawn again right above the title */
  var keep={};L.filter(function(i){return i.b==='M-201';}).forEach(function(it){var el=$('c'+it.c.u);if(!el||!io.mask)return;var pc=ovl.querySelector('.sd-fxp[data-u="'+it.c.u+'"]');
    if(!pc){pc=document.createElement('canvas');pc.className='sd-fxp';pc.dataset.u=it.c.u;}if(el.nextSibling!==pc)el.after(pc);if(pc.width!==W||pc.height!==H){pc.width=W;pc.height=H;}var px=pc.getContext('2d');px.clearRect(0,0,W,H);FX.front(px,L,io,'M-201');keep[it.c.u]=1;});
  olds.forEach(function(e){if(!keep[e.dataset.u])e.remove();});}
vid.addEventListener('seeking',function(){FX.histReset();});

/* ---------- video load ---------- */
var drop=$('drop'),fin=$('vfile');
drop.addEventListener('click',function(){fin.click();});
drop.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fin.click();}});
['dragenter','dragover'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add('over');});});
['dragleave','drop'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove('over');});});
drop.addEventListener('drop',function(e){var f=e.dataTransfer.files[0];if(f)loadV(f);});
fin.addEventListener('change',function(){if(fin.files[0])loadV(fin.files[0]);});
function loadV(f){if(hasV)wipe();var old=vid.src;vname=f.name;vfileObj=f;vid.src=URL.createObjectURL(f);vid.load();fin.value='';if(old&&old.indexOf('blob:')===0)try{URL.revokeObjectURL(old);}catch(e){}}
/* change the video: everything done on the old video is wiped and you start fresh */
function hasWork(){return S.clips.length||S.cuts.length||S.splits.length||S.tin>0||S.tout!=null;}
function wipe(){S={clips:[],cuts:[],splits:[],tin:0,tout:null};hist=[];sel=null;selCut=null;selSeg=null;pendCut=null;uid=1;hasV=false;
  try{localStorage.removeItem('ml-studio');localStorage.removeItem('ml-captx');localStorage.removeItem('ml-capseg');}catch(e){}
  capSegs=null;silEnv=null;silFor=null;var tx=$('capTx');if(tx)tx.value='';var pg=$('capPg');if(pg)pg.textContent='';}
$('chV').addEventListener('click',function(){if(hasWork()&&!confirm(t_('chVQ')))return;vid.pause();fin.value='';fin.click();});
$('clr').addEventListener('click',function(){if(!confirm(t_('clrQ')))return;vid.pause();try{localStorage.removeItem('ml-studio');}catch(e){}location.reload();});
vid.addEventListener('loadedmetadata',function(){hasV=true;VD=vid.duration||0;VW=vid.videoWidth||9;VH=vid.videoHeight||16;drop.hidden=true;
  var saved=null;try{saved=JSON.parse(localStorage.getItem('ml-studio'));}catch(e){}
  if(saved&&saved.S&&saved.S.clips&&saved.S.clips.length&&!S.clips.length){S=saved.S;S.splits=S.splits||[];S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});}
  if(S.tout!=null&&S.tout>VD)S.tout=null;if(S.tin>=VD)S.tin=0;
  S.cuts=S.cuts.filter(function(k){return k.a<VD;});S.cuts.forEach(function(k){if(k.b>VD)k.b=VD;});
  S.clips.forEach(function(c){if(c.d>VD)c.d=Math.max(0.5,VD);if(c.s+c.d>VD)c.s=Math.max(0,VD-c.d);});
  pps=Math.max(8,Math.min(200,($('tlw').clientWidth-30)/Math.max(1,VD)));$('zoom').value=pps;
  fit();rebuild();enable();addPending();});
/* motions sent from the library's try-it window («حطها بالاستوديو») */
window.mlAddPending=function(){dropInfo();addPending();};
if(window.top!==window){document.documentElement.classList.add('inframe');var bk=document.querySelector('.sd-back');if(bk)bk.addEventListener('click',function(e){try{if(parent.showTab){e.preventDefault();parent.showTab('M');}}catch(_){}});}
function pending(){try{return JSON.parse(localStorage.getItem('ml-studio-add'))||[];}catch(e){return [];}}
function addPending(){var q=pending();if(!q.length||!hasV)return;try{localStorage.removeItem('ml-studio-add');}catch(e){}var t=Math.min(vid.currentTime||0,Math.max(0,VD-1)),last=null;
  q.forEach(function(x){var c=addClip(x.m,t,true);if(!c)return;if(x.text)c.text=x.text;if(x.f&&fBy(x.f))c.f=x.f;if(x.p&&pBy(x.p))c.p=x.p;renderClip(c);last=c;t=Math.min(VD-.5,c.s+c.d);});
  if(last){sel=last.u;markSel();}drawTL();insp();save();}
function enable(){document.querySelectorAll('[data-nv]').forEach(function(b){b.disabled=!hasV;});}

/* ---------- library list ---------- */
var lq=$('lq'),lcat='ALL',list=$('list');
function libDraw(){var t=lq.value.trim().toLowerCase(),h='';
  M.forEach(function(m){if(lcat!=='ALL'&&m.c!==lcat)return;var hay=(m.id+' '+m.en+' '+m.ar+' '+(m.use||'')).toLowerCase();if(t&&hay.indexOf(t)<0)return;
    h+='<li tabindex="0" data-m="'+m.id+'"><div class="sd-mth"></div><div class="sd-mmeta"><span class="id">'+m.id+'</span><span class="nm">'+esc(lang==='ar'?m.ar:m.en)+'<small>'+esc(lang==='ar'?m.en:L.ar.cats[m.c])+(FX.isFoot(m)?' · <span class="ft">'+t_('ft')+'</span>':'')+'</small></span></div><button type="button" class="add" data-add="'+m.id+'" aria-label="+ '+m.id+'" data-nv>＋</button></li>';});
  list.innerHTML=h;enable();thObserve();var lc=$('lcount');if(lc)lc.textContent=list.children.length+' / '+M.length;}
/* live thumbnails only for the items on screen */
var thIO=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){var li=x.target,box=li.querySelector('.sd-mth');if(x.isIntersecting)thDraw(li);else{box.innerHTML='';li._th=0;}});},{root:list,rootMargin:'120px'}):null;
function thDraw(li){var m=mBy(li.dataset.m),box=li.querySelector('.sd-mth');if(!m||!box)return;var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);
  el.innerHTML=stageHTML(m);el.querySelectorAll('.scr').forEach(function(x){x.textContent=x.dataset.t||x.textContent;});el.querySelectorAll('.cnt').forEach(function(x){x.textContent=x.dataset.to||x.textContent;});box.innerHTML='';box.appendChild(el);li._th=Date.now();}
function thObserve(){if(!thIO){Array.prototype.slice.call(list.children,0,40).forEach(thDraw);return;}thIO.disconnect();Array.prototype.forEach.call(list.children,function(li){thIO.observe(li);});}
setInterval(function(){if(document.hidden)return;var now=Date.now();Array.prototype.forEach.call(list.children,function(li){if(li._th&&now-li._th>4200)thDraw(li);});},1000);
function catsDraw(){var c=$('lcats'),cnt={};M.forEach(function(m){cnt[m.c]=(cnt[m.c]||0)+1;});
  c.innerHTML='<select id="lcatS" aria-label="'+esc(t_('lib'))+'"><option value="ALL">'+t_('all')+' ('+M.length+')</option>'+CORD.filter(function(k){return cnt[k];}).map(function(k){return '<option value="'+k+'">'+t_('cats')[k]+' ('+cnt[k]+')</option>';}).join('')+'</select>';
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
function addClip(id,at,quiet){if(!hasV){alertMsg(t_('needV'));return null;}var m=mBy(id);if(!m)return null;snap();var d=Math.min(FX.dur(m)||Math.max(2,mDur(m)),Math.max(.5,VD)),s=at!=null?at:(vid.currentTime||0);if(m.c==='TRN'){var nk=null;S.cuts.forEach(function(k){if(Math.abs(k.b-s)<2&&(!nk||Math.abs(k.b-s)<Math.abs(nk.b-s)))nk=k;});if(nk)s=nk.b;}if(s+d>VD)s=Math.max(0,VD-d);
  var b=brand(),c={u:uid++,m:id,s:+s.toFixed(2),d:+d.toFixed(2),l:freeLane(s,d),text:'',f:b&&b.f?b.f:'',p:b?'BR':'',x:50,y:FX.keepsHTML(m)?24:FX.isFoot(m)?50:(m.c==='CAP'?72:40),sc:FX.keepsHTML(m)?100:90};
  S.clips.push(c);sel=c.u;selCut=null;ovl.appendChild(clipEl(c));fontsCSS();if(!quiet){drawTL();insp();save();}return c;}
$('fromBk').addEventListener('click',function(){var ids=[];try{ids=JSON.parse(localStorage.getItem('ml-basket'))||[];}catch(e){}ids=ids.filter(function(i){return /^M-\d+$/.test(i);});if(!ids.length)return;var t=vid.currentTime||0;
  ids.forEach(function(id){var c=addClip(id,t,true);if(c)t=Math.min(VD-.5,c.s+c.d);});drawTL();insp();save();});

/* ---------- timeline ---------- */
var tlw=$('tlw'),tlin=$('tlin');
function lanes(){var mx=1;S.clips.forEach(function(c){mx=Math.max(mx,c.l+1);});return mx+1;}
function drawTL(){if(!hasV){tlin.innerHTML='';return;}var W=Math.max(tlw.clientWidth,VD*pps+40),h='';
  h+='<div class="sd-ruler" id="ruler" style="width:'+W+'px">';var step=pps>=80?1:pps>=30?2:pps>=12?5:10;for(var s=0;s<=VD;s+=step)h+='<i style="left:'+(s*pps)+'px">'+fmt(s).replace(/\.0$/,'')+'</i>';h+='</div>';
  h+='<div class="sd-trk sd-vtrk" id="vtrk" style="width:'+W+'px"><span class="sd-vlbl">🎬 '+esc(vname)+'</span>';
  if(S.tin>0)h+='<div class="sd-trim" style="left:0;width:'+(S.tin*pps)+'px"></div>';if(S.tout!=null)h+='<div class="sd-trim" style="left:'+(S.tout*pps)+'px;width:'+((VD-S.tout)*pps)+'px"></div>';
  S.cuts.forEach(function(k,i){h+='<div class="sd-cut'+(selCut===i?' sel':'')+'" data-cut="'+i+'" style="left:'+(k.a*pps)+'px;width:'+((k.b-k.a)*pps)+'px"></div>';});
  segList().forEach(function(g){var on=selSeg&&Math.abs(selSeg[0]-g[0])<1e-3&&Math.abs(selSeg[1]-g[1])<1e-3;h+='<div class="sd-seg'+(on?' sel':'')+'" data-sa="'+g[0]+'" data-sb="'+g[1]+'" style="left:'+(g[0]*pps)+'px;width:'+((g[1]-g[0])*pps)+'px"></div>';});
  (S.splits||[]).forEach(function(x){h+='<i class="sd-split" style="left:'+(x*pps)+'px"></i>';});h+='</div>';
  for(var l=0;l<lanes();l++){h+='<div class="sd-trk" data-lane="'+l+'" style="width:'+W+'px">';S.clips.filter(function(c){return c.l===l;}).forEach(function(c){var m=mBy(c.m);
      h+='<div class="sd-blk'+(FX.isFoot(m)?' ft':'')+(sel===c.u?' sel':'')+'" data-u="'+c.u+'" style="left:'+(c.s*pps)+'px;width:'+Math.max(14,c.d*pps)+'px"><i class="e l" data-e="l"></i><span>'+esc(m.id+' '+(c.text||m.en))+'</span><i class="e r" data-e="r"></i></div>';});h+='</div>';}
  h+='<div class="sd-ph" id="ph"></div>';tlin.innerHTML=h;tlin.style.width=W+'px';sync(true);}
$('zoom').addEventListener('input',function(e){pps=+e.target.value;drawTL();});
function tAt(x){var r=tlin.getBoundingClientRect();return Math.max(0,Math.min(VD,(x-r.left)/pps));}
function seek(t){vid.currentTime=Math.max(0,Math.min(VD,t));}
var drag=null;
tlin.addEventListener('pointerdown',function(e){if(!hasV)return;var blk=e.target.closest('.sd-blk'),cut=e.target.closest('[data-cut]');
  if(blk){var c=byU(+blk.dataset.u);sel=c.u;selCut=null;snap();drag={k:e.target.dataset.e||'m',c:c,x0:e.clientX,y0:e.clientY,s0:c.s,d0:c.d,l0:c.l,moved:false};blk.setPointerCapture(e.pointerId);markSel();insp();e.preventDefault();return;}
  if(cut){selCut=+cut.dataset.cut;sel=null;selSeg=null;markSel();insp();drawTL();return;}
  var sg=e.target.closest('.sd-seg');if(sg){selSeg=[+sg.dataset.sa,+sg.dataset.sb];sel=null;selCut=null;seek(tAt(e.clientX));markSel();insp();drawTL();return;}
  if(e.target.closest('#ruler,#vtrk')||e.target.closest('.sd-trk')){drag={k:'seek'};seek(tAt(e.clientX));tlin.setPointerCapture(e.pointerId);if(!e.target.closest('.sd-blk')){sel=null;selCut=null;if(selSeg){selSeg=null;drawTL();}markSel();insp();}}});
tlin.addEventListener('pointermove',function(e){if(!drag)return;if(drag.k==='seek'){seek(tAt(e.clientX));return;}var c=drag.c,dt=(e.clientX-drag.x0)/pps;drag.moved=true;
  if(drag.k==='m'){c.s=+Math.max(0,Math.min(VD-c.d,drag.s0+dt)).toFixed(2);var lh=(tlin.querySelector('.sd-trk[data-lane]')||{}).offsetHeight||34,dl=Math.round((e.clientY-drag.y0)/lh);c.l=Math.max(0,drag.l0+dl);}
  else if(drag.k==='l'){var ns=Math.max(0,Math.min(drag.s0+drag.d0-.3,drag.s0+dt));c.d=+(drag.s0+drag.d0-ns).toFixed(2);c.s=+ns.toFixed(2);}
  else if(drag.k==='r'){c.d=+Math.max(.3,Math.min(VD-c.s,drag.d0+dt)).toFixed(2);}
  var b=tlin.querySelector('.sd-blk[data-u="'+c.u+'"]');if(b){b.style.left=(c.s*pps)+'px';b.style.width=Math.max(14,c.d*pps)+'px';}if(drag.k==='m'&&c.l!==+((b&&b.parentElement.dataset.lane)||0))drawTL();insFill();});
function endDrag(){if(!drag)return;var d=drag;drag=null;if(d.c){if(!d.moved)hist.pop();var c=d.c;if(S.clips.some(function(o){return o.u!==c.u&&o.l===c.l&&o.s<c.s+c.d&&c.s<o.s+o.d;}))c.l=freeLane(c.s,c.d,c.u);drawTL();insp();save();}}
tlin.addEventListener('pointerup',endDrag);tlin.addEventListener('pointercancel',endDrag);
function byU(u){for(var i=0;i<S.clips.length;i++)if(S.clips[i].u===u)return S.clips[i];return null;}
function markSel(){ovl.classList.toggle('hasSel',sel!=null);setTimeout(updDel,0);document.querySelectorAll('.sd-clip').forEach(function(el){el.classList.toggle('sel',+el.dataset.u===sel);});document.querySelectorAll('.sd-blk').forEach(function(el){el.classList.toggle('sel',+el.dataset.u===sel);});}

/* ---------- drag on the preview ---------- */
var pdrag=null;
var PT={},pinch=null;
function pdist(){var k=Object.keys(PT);if(k.length<2)return 0;var a=PT[k[0]],b=PT[k[1]];return Math.hypot(a.x-b.x,a.y-b.y);}
ovl.addEventListener('pointerdown',function(e){PT[e.pointerId]={x:e.clientX,y:e.clientY};
  if(Object.keys(PT).length===2&&sel!=null){var c0=byU(sel);if(c0){if(pdrag){pdrag=null;}pinch={c:c0,d0:pdist()||1,sc0:c0.sc};try{ovl.setPointerCapture(e.pointerId);}catch(_){}e.preventDefault();return;}}
  var el=e.target.closest('.sd-clip');if(!el){if(Object.keys(PT).length>1)return;sel=null;markSel();insp();return;}var c=byU(+el.dataset.u);sel=c.u;selCut=null;markSel();insp();snap();
  var fr=frame.getBoundingClientRect();pdrag={c:c,el:el,h:!!e.target.dataset.h,x0:e.clientX,y0:e.clientY,cx:c.x,cy:c.y,sc0:c.sc,fw:fr.width,fh:fr.height,moved:false};el.setPointerCapture(e.pointerId);e.preventDefault();});
ovl.addEventListener('pointermove',function(e){if(PT[e.pointerId]){PT[e.pointerId].x=e.clientX;PT[e.pointerId].y=e.clientY;}if(pinch){var d=pdist();if(d){pinch.c.sc=Math.round(Math.max(10,Math.min(250,pinch.sc0*d/pinch.d0)));place($('c'+pinch.c.u),pinch.c);insFill();}return;}if(!pdrag)return;var p=pdrag,c=p.c;p.moved=true;
  if(p.h){c.sc=Math.round(Math.max(10,Math.min(250,p.sc0+((e.clientX-p.x0)/p.fw)*200)));}else{c.x=Math.round(Math.max(0,Math.min(100,p.cx+(e.clientX-p.x0)/p.fw*100)));c.y=Math.round(Math.max(0,Math.min(100,p.cy+(e.clientY-p.y0)/p.fh*100)));}
  if(isTrk(mBy(c.m))&&c.trk!==0){c.trk=0;var tb=$('iTrk');if(tb)tb.checked=false;}place(p.el,c);insFill();});
function endP(e){if(e&&e.pointerId!=null)delete PT[e.pointerId];if(pinch&&Object.keys(PT).length<2){pinch=null;save();}if(!pdrag)return;if(!pdrag.moved)hist.pop();pdrag=null;save();}
ovl.addEventListener('pointerup',endP);ovl.addEventListener('pointercancel',endP);

/* ---------- inspector ---------- */
var IN=$('insb');
function opts(list,val){return list.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===val?' selected':'')+'>'+esc(o[1])+'</option>';}).join('');}
function insp(){setTimeout(updDel,0);var c=sel!=null?byU(sel):null;
  if(c){var m=mBy(c.m),b=brand();
    var fo=[['',t_('orig')]].concat(FONTS.map(function(f){return [f.id,f.id+' · '+f.n];}));
    var po=[['',t_('orig')]].concat(b?[['BR',t_('brand')]]:[]).concat(CPS.map(function(p){return [p.id,p.id+' · '+(lang==='ar'?p.ar:p.en)];}));
    IN.innerHTML='<p class="sd-mname"><b>'+m.id+'</b> '+esc(m.en)+' · '+esc(m.ar)+'</p>'+(FX.isFoot(m)&&!FX.keepsHTML(m)?'<p class="sd-note">'+t_('ftNote')+'</p>':'')+(isTrk(m)?'<label class="sd-chk"><input type="checkbox" id="iTrk"'+(c.trk!==0?' checked':'')+'> '+t_('trk')+'</label>':'')+
     '<label class="sd-f">'+t_('text')+'<input type="text" id="iTx" maxlength="80" placeholder="'+esc(t_('textPh'))+'" value="'+esc(c.text)+'"></label>'+
     '<label class="sd-f">'+t_('font')+'<select id="iF">'+opts(fo,c.f)+'</select></label><label class="sd-f">'+t_('pal')+'<select id="iP">'+opts(po,c.p)+'</select></label>'+
     '<div class="sd-row"><label class="sd-f">'+t_('start')+'<input type="number" id="iS" step="0.1" min="0" value="'+c.s+'"></label><label class="sd-f">'+t_('dur')+'<input type="number" id="iD" step="0.1" min="0.3" value="'+c.d+'"></label></div>'+
     '<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-nd="s:-0.5">'+t_('earlier')+'</button><button type="button" class="sd-btn sm" data-nd="s:0.5">'+t_('later')+'</button><button type="button" class="sd-btn sm" data-nd="d:-0.5">'+t_('shorter')+'</button><button type="button" class="sd-btn sm" data-nd="d:0.5">'+t_('longer')+'</button></div>'+'<div class="sd-acts sd-nudge"><button type="button" class="sd-btn sm" data-nd="sc:-10">'+t_('smaller')+'</button><button type="button" class="sd-btn sm" data-nd="sc:10">'+t_('bigger')+'</button></div>'+'<label class="sd-f">'+t_('x')+' <input type="range" id="iX" min="0" max="100" value="'+c.x+'"></label><label class="sd-f">'+t_('y')+' <input type="range" id="iY" min="0" max="100" value="'+c.y+'"></label><label class="sd-f">'+t_('size')+' <input type="range" id="iSc" min="10" max="250" value="'+c.sc+'"></label>'+
     '<div class="sd-acts"><button type="button" class="sd-btn sm" id="iGo">'+t_('goto')+'</button><button type="button" class="sd-btn sm" id="iDup">'+t_('dup')+'</button><button type="button" class="sd-btn sm" id="iDel">'+t_('del')+'</button></div>';
    if($('iTrk'))$('iTrk').addEventListener('change',function(e){snap();c.trk=e.target.checked?1:0;trkKey='';if(!e.target.checked)place($('c'+c.u),c);save();});
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
    $('iGo').addEventListener('click',function(){seek(c.s+.01);});
    $('iDup').addEventListener('click',function(){snap();var n=JSON.parse(JSON.stringify(c));n.u=uid++;n.s=Math.min(VD-n.d,+(c.s+c.d).toFixed(2));n.l=freeLane(n.s,n.d);S.clips.push(n);sel=n.u;ovl.appendChild(clipEl(n));fontsCSS();drawTL();insp();save();});
    $('iDel').addEventListener('click',delSel);return;}
  if(selSeg){IN.innerHTML='<p class="sd-mname"><b>🎬</b> '+t_('segT')+': '+fmt(selSeg[0])+' → '+fmt(selSeg[1])+'</p><div class="sd-acts"><button type="button" class="sd-btn sm" id="iSeg">'+t_('segDel')+'</button></div>';$('iSeg').addEventListener('click',delAny);return;}
  if(selCut!=null&&S.cuts[selCut]){var k=S.cuts[selCut];IN.innerHTML='<p class="sd-mname"><b>✂</b> '+t_('cut')+'</p><div class="sd-row"><label class="sd-f">'+t_('cutFrom')+'<input type="number" id="iCa" step="0.1" min="0" value="'+k.a.toFixed(1)+'"></label><label class="sd-f">'+t_('cutTo')+'<input type="number" id="iCb" step="0.1" min="0" value="'+k.b.toFixed(1)+'"></label></div><div class="sd-acts"><button type="button" class="sd-btn sm" id="iCut">'+t_('cutDel')+'</button></div>';
    ['iCa','iCb'].forEach(function(id){$(id).addEventListener('change',function(){snap();var a=Math.max(0,Math.min(VD,+$('iCa').value||0)),b=Math.max(0,Math.min(VD,+$('iCb').value||0));if(b-a<0.1)b=Math.min(VD,a+0.1);k.a=+a.toFixed(2);k.b=+b.toFixed(2);drawTL();save();});});
    $('iCut').addEventListener('click',function(){snap();S.cuts.splice(selCut,1);selCut=null;drawTL();insp();save();});return;}
  IN.innerHTML=(hasV?'<p class="sd-mname"><b>🎬</b> '+esc(vname)+' · '+fmt(VD)+' · '+VW+'×'+VH+'</p><p class="sd-mname">'+t_('trimIn')+' '+fmt(S.tin)+' · '+t_('trimOut')+' '+fmt(tout())+'</p>':'')+'<p class="sd-empty" style="white-space:pre-line">'+esc(t_('none'))+'</p>';}
function insFill(){var c=sel!=null?byU(sel):null;if(!c||!$('iS'))return;if(document.activeElement!==$('iS'))$('iS').value=c.s;if(document.activeElement!==$('iD'))$('iD').value=c.d;$('iX').value=c.x;$('iY').value=c.y;$('iSc').value=c.sc;}
function delSel(){if(sel==null)return;snap();S.clips=S.clips.filter(function(c){return c.u!==sel;});var el=$('c'+sel);if(el)el.remove();sel=null;fontsCSS();drawTL();insp();save();}

/* ---------- transport + video edits ---------- */
$('play').addEventListener('click',togglePlay);
function togglePlay(){if(!hasV)return;if(vid.paused){if(vid.currentTime>=tout()-.05||vid.currentTime<S.tin)vid.currentTime=S.tin;vid.play();}else vid.pause();}
$('vol').addEventListener('input',function(e){vid.volume=+e.target.value;vid.muted=vid.volume===0;});
$('inH').addEventListener('click',function(){snap();S.tin=+vid.currentTime.toFixed(2);if(S.tout!=null&&S.tout<=S.tin)S.tout=null;drawTL();insp();save();});
$('outH').addEventListener('click',function(){snap();var t=+vid.currentTime.toFixed(2);S.tout=t>S.tin?t:null;drawTL();insp();save();});
function segList(){var b=[S.tin].concat((S.splits||[]).filter(function(x){return x>S.tin+.05&&x<tout()-.05;})).concat([tout()]).sort(function(x,y){return x-y;}),out=[];
  for(var i=0;i<b.length-1;i++){var a=b[i],c=b[i+1];if(c-a<.05)continue;if(S.cuts.some(function(k){return k.a<=a+.01&&k.b>=c-.01;}))continue;out.push([a,c]);}return out;}
$('cutB').addEventListener('click',function(){var t=+vid.currentTime.toFixed(2);S.splits=S.splits||[];if(t<=S.tin+.05||t>=tout()-.05||S.splits.some(function(x){return Math.abs(x-t)<.05;}))return;
  snap();S.splits.push(t);S.splits.sort(function(x,y){return x-y;});var g=segList().filter(function(x){return x[0]<=t+.001&&x[1]>t+.001;})[0];selSeg=g||null;sel=null;selCut=null;markSel();insp();drawTL();save();});
function delAny(){if(sel!=null){delSel();return;}if(selSeg){snap();var a=selSeg[0],b=selSeg[1];S.cuts.push({a:a,b:b});S.cuts.sort(function(x,y){return x.a-y.a;});
    var m=[];S.cuts.forEach(function(k){var l=m[m.length-1];if(l&&k.a<=l.b+.001)l.b=Math.max(l.b,k.b);else m.push({a:k.a,b:k.b});});S.cuts=m;selSeg=null;drawTL();insp();save();updDel();return;}
  if(selCut!=null&&S.cuts[selCut]){snap();S.cuts.splice(selCut,1);selCut=null;drawTL();insp();save();updDel();}}
function updDel(){var b=$('delB');if(!b)return;b.disabled=!(sel!=null||selSeg||selCut!=null);b.textContent=selCut!=null&&sel==null&&!selSeg?t_('restore'):t_('delB');}
$('delB').addEventListener('click',delAny);
$('undo').addEventListener('click',undo);
document.addEventListener('keydown',function(e){var tg=e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT')return;
  if(e.code==='Space'){e.preventDefault();togglePlay();}else if(e.key==='Delete'||e.key==='Backspace'){if(sel!=null||selSeg||selCut!=null){e.preventDefault();delAny();}}
  else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo();}
  else if(e.key==='ArrowLeft'||e.key==='ArrowRight'){seek((vid.currentTime||0)+(e.key==='ArrowRight'?1:-1)*(e.shiftKey?1:1/30));}});

/* ---------- prompt export ---------- */
function prompt_(){var L2=[t_('prHead')];if(S.tin>0||S.tout!=null)L2.push('- '+t_('prTrim')(fmt(S.tin),fmt(tout())));S.cuts.forEach(function(k){L2.push('- '+t_('prCut')(fmt(k.a),fmt(k.b)));});
  S.clips.slice().sort(function(a,b){return a.s-b.s;}).forEach(function(c){var m=mBy(c.m);L2.push('- '+t_('prClip')({s0:fmt(c.s),s1:fmt(c.s+c.d),text:c.text,x:c.x,y:c.y,sc:c.sc},m,fBy(c.f),pBy(c.p)));});
  L2.push(t_('prFoot'));return L2.join('\n');}
function modal(html){var m=$('mod');$('modb').innerHTML=html;m.hidden=false;var x=$('modb').querySelector('[data-x]');if(x)x.focus();return m;}
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
  if(!vid.requestVideoFrameCallback||lastMT<0||t<lastMT-half||t>lastMT+1.5)return seekTo(t);
  if(lastMT>=t-half)return Promise.resolve();
  return new Promise(function(res){var done=false,tm=setTimeout(function(){if(done)return;done=true;vid.pause();seekTo(t).then(res);},3000);
    var cb=function(now,md){if(done)return;lastMT=md.mediaTime;if(md.mediaTime>=t-half||vid.ended){done=true;clearTimeout(tm);vid.pause();res();}else vid.requestVideoFrameCallback(cb);};
    vid.requestVideoFrameCallback(cb);var p=vid.play();if(p&&p.catch)p.catch(function(){if(done)return;done=true;clearTimeout(tm);seekTo(t).then(res);});});}
function clipsAt(t){var any=false;S.clips.forEach(function(c){var el=$('c'+c.u);if(!el)return;var on=t>=c.s&&t<c.s+c.d&&!inCut(t);el.hidden=!on;if(!on)return;var mm=mBy(c.m);if(!FX.isFoot(mm)||FX.keepsHTML(mm))any=true;
  el._an=el.getAnimations({subtree:true});var lt=(t-c.s)*1000;el._an.forEach(function(a){a.pause();a.currentTime=lt;});});return any;}
function audioOf(a){if(!vfileObj||!a)return Promise.resolve(null);
  return vfileObj.arrayBuffer().then(function(ab){return new Promise(function(res){try{var p=a.decodeAudioData(ab,res,function(){res(null);});if(p&&p.then)p.then(res,function(){res(null);});}catch(e){res(null);}});}).then(function(buf){if(!buf)return null;
    var sg=segs(),sr=buf.sampleRate,ch=Math.min(2,buf.numberOfChannels),tot=0;sg.forEach(function(x){tot+=Math.max(0,Math.min(buf.length,Math.floor(x[1]*sr))-Math.floor(x[0]*sr));});if(tot<=0)return null;
    var out=a.createBuffer(ch,tot,sr),off=0;sg.forEach(function(x){var a0=Math.floor(x[0]*sr),a1=Math.min(buf.length,Math.floor(x[1]*sr));if(a1<=a0)return;for(var c=0;c<ch;c++)out.getChannelData(c).set(buf.getChannelData(c).subarray(a0,a1),off);off+=a1-a0;});return out;}).catch(function(){return null;});}
$('exV').addEventListener('click',function(){if(!hasV||xp)return;var a=null;try{a=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}
  needXR().then(function(){if(!XR.canWork()){alertMsg(t_('recNo'));return;}XR.ac();recStart(a);}).catch(function(){alertMsg(t_('recErr'));});});
function recStart(a){sel=null;markSel();vid.pause();var back=vid.currentTime||0,wasMuted=vid.muted;vid.muted=true;lastMT=-1;
  modal('<h3>'+t_('exV')+'</h3><p id="rMsg">'+esc(t_('recPrep'))+'</p><div class="sd-prog"><i id="rBar"></i></div><p class="sd-note" id="rKeep">'+esc(t_('recKeep'))+'</p><div class="sd-acts" id="rActs"><button type="button" class="sd-btn" id="rStop">'+t_('recStop')+'</button></div>');
  var job=xp={stop:false};$('rStop').addEventListener('click',function(){job.stop=true;});
  var sg=segs(),tot=0;sg.forEach(function(x){tot+=x[1]-x[0];});var fps=30,n=Math.max(1,Math.floor(tot*fps));
  var k=Math.min(1,1920/Math.max(VW,VH),1080/Math.min(VW,VH)),W=Math.max(2,Math.round(VW*k/2)*2),H=Math.max(2,Math.round(VH*k/2)*2);
  function srcAt(i){var t=i/fps;for(var j=0;j<sg.length;j++){var L2=sg[j][1]-sg[j][0];if(t<L2)return sg[j][0]+t;t-=L2;}return sg.length?sg[sg.length-1][1]-0.001:0;}
  function pr(f){var p=Math.round(f*100),b=$('rBar'),m=$('rMsg');if(b)b.style.width=p+'%';if(m)m.textContent=t_('recOn')(p);}
  var xHold={},hl=S.clips.filter(function(c){var m=mBy(c.m);return m&&FX.isFoot(m)&&FX.needsHold(m);});FX.histReset();
  var needP=S.clips.some(function(c){var m=mBy(c.m);return m&&(FX.needsPerson(m)||(isTrk(m)&&c.trk!==0));});
  var pre=(needP?FX.segLoad().catch(function(){}):Promise.resolve()).then(function(){return hl.reduce(function(pp,c){return pp.then(function(){var it={c:c,m:mBy(c.m)};return grab(FX.holdTime(it,S.cuts),Math.max(W,H)).then(function(cv){xHold[c.u]=cv;});});},Promise.resolve());});
  pre.then(function(){return audioOf(a);}).then(function(buf){if(a&&a.close)try{a.close();}catch(e){}return XR.render({w:W,h:H,fps:fps,n:n,audio:buf,prog:pr,stop:function(){return job.stop;},
    frame:function(i,ctx){var ts=srcAt(i),L=fxList(ts),st=L.length?FX.remap(L,ts):ts;return frameAt(st).then(function(){ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
      var io={W:W,H:H,img:vid,key:'x'+i,ts:st,hold:function(it){return xHold[it.c.u]||null;}};
      if(L.length){try{FX.draw(ctx,L,io);}catch(e){try{ctx.drawImage(vid,0,0,W,H);}catch(_){}}}else{try{ctx.drawImage(vid,0,0,W,H);}catch(e){}}
      if(L.some(function(x){return x.b==='M-207';}))FX.front(ctx,L,io,'M-207');
      var lg=function(){var lo=XLogo.get(),li=XLogo.image();if(!lo||lo.vid===false||!li||!li.naturalWidth)return;var r=XLogo.place(lo,W,H);ctx.save();ctx.globalAlpha=(lo.op||90)/100;ctx.drawImage(li,r.x,r.y,r.w,r.h);ctx.restore();};
      if(!clipsAt(ts)){lg();return;}
      var TK=trkAt(ts);if(TK.length)trkPlace(TK,FX.head(vid,'x'+i));
      /* text behind the person: motions up to that title, then the person, then the motions above it */
      var tb=io.mask?L.filter(function(x){return x.b==='M-201';}):[];
      if(!tb.length)return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp').then(function(img){if(img)ctx.drawImage(img,0,0,W,H);lg();});
      var kids=[].slice.call(ovl.children).filter(function(e){return e.classList.contains('sd-clip');}),last=-1;tb.forEach(function(x){var k=kids.indexOf($('c'+x.c.u));if(k>last)last=k;});
      kids.forEach(function(e,k){e.classList.toggle('xa',k>last);e.classList.toggle('xb',k<=last);});
      return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp,.xa').then(function(img){if(img)ctx.drawImage(img,0,0,W,H);FX.front(ctx,L,io,'M-201');return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot,.sd-fxp,.xb');}).then(function(img){if(img)ctx.drawImage(img,0,0,W,H);kids.forEach(function(e){e.classList.remove('xa','xb');});lg();});});}});
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
  S.clips.forEach(function(c){var m=mBy(c.m);m._en=null;});catsDraw();libDraw();if(hasV){rebuild();}else insp();dropInfo();}
document.querySelectorAll('.sd-lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.l;try{localStorage.setItem('ml-lang',lang);}catch(e){}applyL();});});
applyL();enable();fit();

/* ---------- captions: type/paste the words, or get them from the video with Whisper (free, on the device) ---------- */
var capSegs=null,capBusy=false,WK=null;
function capStyles(){return (typeof CSS_!=='undefined'?CSS_:[]);}
$('capB').addEventListener('click',function(){if(!hasV)return;var st=capStyles(),has=S.clips.some(function(c){return c.cap;});
  modal('<h3>'+t_('capT')+'</h3><p class="sd-note">'+esc(t_('capD'))+'</p>'+
   '<div class="sd-row"><button type="button" class="sd-btn" id="capAI">'+t_('capAI')+'</button><label class="sd-f">'+t_('capQ')+'<select id="capQ"><option value="onnx-community/whisper-base">'+t_('capQ1')+'</option><option value="onnx-community/whisper-small">'+t_('capQ2')+'</option><option value="onnx-community/whisper-large-v3-turbo" selected>'+t_('capQ3')+'</option></select></label></div>'+
   '<p class="sd-note">'+esc(t_('capAIN'))+'</p><p id="capPg" class="sd-note" aria-live="polite"></p>'+
   '<label class="sd-f">'+t_('capTx')+'<textarea id="capTx" rows="6" dir="auto" placeholder="'+esc(t_('capPh'))+'"></textarea></label>'+
   '<label class="sd-f">'+t_('capS')+'<select id="capS">'+st.map(function(c){return '<option value="'+c.id+'">'+c.id+' · '+esc(lang==='ar'?c.ar:c.en)+'</option>';}).join('')+'</select></label>'+
   '<div class="sd-row"><label class="sd-f">'+t_('capW')+'<select id="capW">'+[1,2,3,4,5,6].map(function(n){return '<option>'+n+'</option>';}).join('')+'</select></label><label class="sd-f">'+t_('capP')+'<select id="capP"><option value="b">'+t_('capPb')+'</option><option value="c">'+t_('capPc')+'</option><option value="t">'+t_('capPt')+'</option></select></label></div>'+
   '<div class="sd-acts"><button type="button" class="sd-btn pri" id="capGo">'+t_('capGo')+'</button>'+(has?'<button type="button" class="sd-btn" id="capRm">'+t_('capRm')+'</button>':'')+'<button type="button" class="sd-btn" data-x>'+t_('close')+'</button></div>');
  var tx=$('capTx');try{tx.value=localStorage.getItem('ml-captx')||'';capSegs=JSON.parse(localStorage.getItem('ml-capseg')||'null');}catch(e){}
  function styleSync(){var c=capStyles().filter(function(x){return x.id===$('capS').value;})[0];if(c){$('capW').value=String(Math.max(1,Math.min(6,c.w||3)));$('capP').value=c.pos==='c'?'c':'b';}}
  $('capS').addEventListener('change',styleSync);styleSync();
  tx.addEventListener('input',function(){try{localStorage.setItem('ml-captx',tx.value);}catch(e){}});
  $('capAI').addEventListener('click',capListen);
  $('capGo').addEventListener('click',function(){var n=capPlace(tx.value,$('capS').value,+$('capW').value,$('capP').value);if(!n){$('capPg').textContent=t_('capNo');return;}$('mod').hidden=true;alertMsg(t_('capDone')(n));});
  if($('capRm'))$('capRm').addEventListener('click',function(){snap();S.clips=S.clips.filter(function(c){return !c.cap;});sel=null;rebuild();$('mod').hidden=true;});});
function capKept(){var sg=segs(),tot=0;sg.forEach(function(x){tot+=x[1]-x[0];});return {sg:sg,tot:tot,at:function(o){var t=o;for(var j=0;j<sg.length;j++){var L2=sg[j][1]-sg[j][0];if(t<=L2)return [sg[j][0]+t,sg[j][1]];t-=L2;}var e=sg[sg.length-1];return [e[1],e[1]];}};}
function capChunks(words,n){var out=[];for(var i=0;i<words.length;i+=n)out.push(words.slice(i,i+n));return out;}
function capPlace(text,sid,n,pos){var st=capStyles().filter(function(x){return x.id===sid;})[0];if(!st)return 0;var lines=String(text||'').split(/\n+/).map(function(l){return l.trim();}).filter(Boolean);if(!lines.length)return 0;
  var items=[],K=capKept();
  if(capSegs&&capSegs.length===lines.length){lines.forEach(function(l,i){var a=+capSegs[i][0],b=capSegs[i][1]==null?Math.min(VD,a+3):+capSegs[i][1];if(!(b>a))b=a+1.5;var w=l.split(/\s+/),ch=capChunks(w,n),per=(b-a)/w.length,t=a;
      ch.forEach(function(c){var d=Math.max(.35,per*c.length);items.push([t,d,c.join(' ')]);t+=per*c.length;});});}
  else{var w=lines.join(' ').split(/\s+/).filter(Boolean),per=K.tot/Math.max(1,w.length),o=0;capChunks(w,n).forEach(function(c){var r=K.at(o),d=Math.min(per*c.length,Math.max(.35,r[1]-r[0]));items.push([r[0],Math.max(.35,d),c.join(' ')]);o+=per*c.length;});}
  snap();S.clips=S.clips.filter(function(c){return !c.cap;});var lane=0;S.clips.forEach(function(c){lane=Math.max(lane,c.l+1);});var y=pos==='t'?18:pos==='c'?50:80,m=mBy(st.m);if(!m)return 0;
  items.forEach(function(it){var s0=Math.max(0,Math.min(VD-.3,+it[0].toFixed(2))),d0=+Math.min(VD-s0,it[1]).toFixed(2);S.clips.push({u:uid++,m:st.m,s:s0,d:Math.max(.3,d0),l:lane,text:it[2],f:st.f||'',p:st.p||'',x:50,y:y,sc:85,cap:1});});
  sel=null;rebuild();return items.length;}
function capAudio(){if(!vfileObj)return Promise.reject(new Error('nofile'));return vfileObj.arrayBuffer().then(function(ab){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,dur=Math.max(1,VD||60),oc=new OC(1,Math.ceil(dur*16000),16000);
  return new Promise(function(res,rej){var p=oc.decodeAudioData(ab,res,rej);if(p&&p.then)p.then(res,rej);});}).then(function(buf){var oc2=new (window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,Math.ceil(buf.duration*16000),16000),s=oc2.createBufferSource();s.buffer=buf;s.connect(oc2.destination);s.start();return oc2.startRendering();}).then(function(b){return b.getChannelData(0);});}
function capWorker(){if(WK)return WK;var src="import {pipeline,env} from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';env.allowLocalModels=false;let asr=null,cur='';\n"+
  /* the large model: on the graphics card the listening part must stay fp16 (q4 there writes wrong words on many cards); on the processor q4 is tested and accurate */
  "const DT={'onnx-community/whisper-large-v3-turbo':{webgpu:{encoder_model:'fp16',decoder_model_merged:'q4'},wasm:{encoder_model:'q4',decoder_model_merged:'q4'}}};\nasync function load(model,dev){const o={device:dev,progress_callback:p=>self.postMessage({type:'dl',p})};if(DT[model])o.dtype=DT[model][dev];return pipeline('automatic-speech-recognition',model,o);}\n"+
  "async function goodGpu(){try{if(!navigator.gpu)return false;const a=await navigator.gpu.requestAdapter();if(!a||a.isFallbackAdapter||!a.features.has('shader-f16'))return false;const i=a.info||(a.requestAdapterInfo?await a.requestAdapterInfo():{});return !/swiftshader|llvmpipe|software/i.test(JSON.stringify(i||{}));}catch(_){return false;}}\n"+
  /* a quick check that the words make sense: mostly Arabic letters and no word stuck on repeat */
  "function bad(o){const t=String(o&&o.text||'').trim();if(!t)return false;const L=(t.match(/\\p{L}/gu)||[]).length,A=(t.match(/[\\u0600-\\u06FF]/g)||[]).length;if(L>8&&A/L<.6)return true;const w=t.split(/\\s+/);let r=1;for(let i=1;i<w.length;i++){r=w[i]===w[i-1]?r+1:1;if(r>=4)return true;}const u=new Set(w);return w.length>24&&u.size/w.length<.3;}\n"+
  "const OPT={language:'arabic',task:'transcribe',chunk_length_s:30,stride_length_s:5,return_timestamps:true};\n"+
  "self.onmessage=async e=>{const d=e.data;try{let dev='wasm';if(!asr||cur!==d.model+d.gpu){cur=d.model+d.gpu;asr=null;if(d.gpu&&DT[d.model]&&await goodGpu()){try{asr=await load(d.model,'webgpu');dev='webgpu';}catch(_){asr=null;}}if(!asr)asr=await load(d.model,'wasm');asr._dev=asr._dev||dev;}\n"+
  "self.postMessage({type:'run'});let out=await asr(d.audio,OPT);if(asr._dev==='webgpu'&&bad(out)){self.postMessage({type:'retry'});asr=await load(d.model,'wasm');asr._dev='wasm';out=await asr(d.audio,OPT);}self.postMessage({type:'done',out});}catch(err){self.postMessage({type:'err',msg:String(err&&err.message||err)});}};";
  WK=new Worker(URL.createObjectURL(new Blob([src],{type:'text/javascript'})),{type:'module'});return WK;}
function capListen(){if(capBusy)return;var pg=$('capPg'),btn=$('capAI');capBusy=true;btn.disabled=true;pg.textContent=t_('capAud');var files={};
  capAudio().then(function(audio){var w=capWorker();return new Promise(function(res,rej){w.onmessage=function(e){var d=e.data;
      if(d.type==='dl'&&d.p){if(d.p.file&&d.p.total){files[d.p.file]=[d.p.loaded||0,d.p.total];var L=0,T=0;Object.keys(files).forEach(function(k){L+=files[k][0];T+=files[k][1];});var el=$('capPg');if(el)el.textContent=t_('capDl')(Math.round(L/T*100));}}
      else if(d.type==='run'||d.type==='retry'){var key=d.type==='run'?'capRun':'capRetry',t0=Date.now();clearInterval(w._tk);var tick=function(){var el2=$('capPg');if(el2)el2.textContent=t_(key)+' '+Math.round((Date.now()-t0)/1000)+'s';};tick();w._tk=setInterval(tick,1000);clearTimeout(w._wd);w._wd=setTimeout(function(){clearInterval(w._tk);try{w.terminate();}catch(_){}WK=null;rej(new Error('timeout'));},(audio.length/16000*20+300)*1000);}else if(d.type==='done'){clearTimeout(w._wd);clearInterval(w._tk);res(d.out);}else if(d.type==='err'){clearTimeout(w._wd);clearInterval(w._tk);rej(new Error(d.msg));}};
    w.onerror=function(e){rej(new Error(e.message||'worker'));};w.postMessage({audio:audio,model:$('capQ')?$('capQ').value:'onnx-community/whisper-base',gpu:!!navigator.gpu&&!matchMedia('(pointer:coarse)').matches},[audio.buffer]);});
  }).then(function(out){var ch=(out&&out.chunks)||[],lines=[],sg=[];ch.forEach(function(c){var t=String(c.text||'').trim();if(!t)return;lines.push(t);sg.push([c.timestamp?c.timestamp[0]:0,c.timestamp?c.timestamp[1]:null]);});
    if(!lines.length&&out&&out.text){lines=[String(out.text).trim()];sg=null;}
    capSegs=sg&&sg.length===lines.length?sg:null;var tx=$('capTx');if(tx){tx.value=lines.join('\n');}try{localStorage.setItem('ml-captx',lines.join('\n'));localStorage.setItem('ml-capseg',JSON.stringify(capSegs));}catch(e){}
    var el=$('capPg');if(el)el.textContent=t_('capOk')(lines.length);try{if(window.goatcounter&&goatcounter.count)goatcounter.count({path:'captions-ai',title:'Captions AI',event:true});}catch(_){}
  }).catch(function(e){var el=$('capPg');if(el)el.textContent=(e&&/decode|EncodingError|nofile/i.test(String(e.message||e.name)))?t_('capNoA'):t_('capErr');try{console.warn('captions',e);}catch(_){}})
  .then(function(){capBusy=false;var b=$('capAI');if(b)b.disabled=false;});}
/* ---------- logo on the video ---------- */
var sdLg=document.createElement('img');sdLg.id='sdLogo';sdLg.className='sd-logo';sdLg.alt='';$('frame').appendChild(sdLg);
function logoSync(){var o=XLogo.get();if(!o||o.vid===false){sdLg.hidden=true;return;}sdLg.hidden=false;sdLg.src=XLogo.url();var r=XLogo.place(o,100,100*(VH/VW||16/9));
  sdLg.style.left=r.x+'%';sdLg.style.top=(r.y/(100*(VH/VW||16/9))*100)+'%';sdLg.style.width=r.w+'%';sdLg.style.opacity=(o.op||90)/100;XLogo.image();}
$('logoB').addEventListener('click',function(){XLogo.editor(function(){logoSync();XLogo.previews();});});
vid.addEventListener('loadedmetadata',logoSync);window.addEventListener('storage',function(e){if(e.key==='ml-logo'){logoSync();XLogo.previews();}});
logoSync();XLogo.previews();


/* ---------- cut silences: find the quiet parts of the audio and add them as cuts ---------- */
var silEnv=null,silFor=null;
function silAudio(){if(silEnv&&silFor===vfileObj)return Promise.resolve(silEnv);if(!vfileObj)return Promise.reject(new Error('nofile'));
  return vfileObj.arrayBuffer().then(function(ab){var OC=window.OfflineAudioContext||window.webkitOfflineAudioContext,oc=new OC(1,Math.max(16000,Math.ceil((VD||60)*16000)),16000);
    return new Promise(function(res,rej){var p=oc.decodeAudioData(ab,res,rej);if(p&&p.then)p.then(res,rej);});}).then(function(buf){
    var ch=buf.numberOfChannels,sr=buf.sampleRate,hop=Math.round(sr*0.02),n=Math.floor(buf.length/hop),env=new Float32Array(n),data=[];for(var c=0;c<ch;c++)data.push(buf.getChannelData(c));
    for(var i=0;i<n;i++){var sum=0;for(var c2=0;c2<ch;c2++){var d=data[c2];for(var k=i*hop,e=k+hop;k<e;k++)sum+=d[k]*d[k];}env[i]=10*Math.log10(sum/(hop*ch)+1e-12);}
    silEnv={env:env,step:0.02};silFor=vfileObj;return silEnv;});}
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


})();
