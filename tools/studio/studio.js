/* ===== Motion Studio app ===== */
(function(){
var L={
 ar:{title:'استوديو الموشن',back:'← المكتبة',lib:'الحركات',q:'ابحث: زوم، كتابة، M-021',all:'الكل',ft:'على الفيديو',ftNote:'هذي الحركة تشتغل على الفيديو نفسه (كاميرا أو انتقال أو تأثير على الشخص). ما تبين بالمعاينة، بس تنحط بالتايم لاين وتطلع بالبرومبت عشان Claude يطبقها.',
  basket:'＋ من سلتي',drop:'ارفع الفيديو اللي تبي تسوي له مونتاج',dropS:'اسحبه هني أو اضغط تختاره. الفيديو يبقى بجهازك وما ينرفع لأي مكان.',dropR:function(n){return 'عندك مشروع محفوظ فيه '+n+' حركة. ارفع نفس الفيديو عشان تكمل عليه.';},newP:'مشروع جديد',
  play:'تشغيل',pause:'إيقاف',vol:'الصوت',zoom:'تكبير التايم لاين',inH:'⇤ البداية هني',outH:'النهاية هني ⇥',cutA:'✂ احذف من هني',cutB:'✂ لين هني',undo:'↶ تراجع',
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
 en:{title:'Motion Studio',back:'← Library',lib:'Motions',q:'Search: zoom, type, M-021',all:'All',ft:'on footage',ftNote:'This motion works on the footage itself (camera, transition or person effect). It does not show in the preview, but it sits on the timeline and goes into the prompt so Claude can apply it.',
  basket:'＋ From my basket',drop:'Upload the video you want to edit',dropS:'Drag it here or click to choose. The video stays on your device and is never uploaded.',dropR:function(n){return 'You have a saved project with '+n+' motions. Upload the same video to continue.';},newP:'New project',
  play:'Play',pause:'Pause',vol:'Volume',zoom:'Timeline zoom',inH:'⇤ Start here',outH:'End here ⇥',cutA:'✂ Delete from here',cutB:'✂ …to here',undo:'↶ Undo',
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
function pBy(id){if(id==='BR'){var b=brand();return b?{id:'BR',bg:b.bg,tx:b.tx,ac:b.ac,hl:b.hl}:null;}for(var i=0;i<CPS.length;i++)if(CPS[i].id===id)return CPS[i];return null;}
function brand(){try{var b=JSON.parse(localStorage.getItem('ml-brand'));return b&&b.on?b:null;}catch(e){return null;}}
function mDur(m){var d=parseFloat(m.d||'2.8');return isFinite(d)&&d>0?d:2.8;}
function fmt(t){t=Math.max(0,t||0);var m=Math.floor(t/60),s=t-m*60;return m+':'+(s<10?'0':'')+s.toFixed(1);}
var famDone={};
function fam(id){var f=fBy(id);if(!f)return '';var n='sdf_'+f.id.replace('-','');if(!famDone[n]){famDone[n]=1;try{var ff=new FontFace(n,'url("'+fUrl(f)+'")',f.v?{weight:f.w[0]+' '+f.w[1]}:{});ff.load().then(function(x){document.fonts.add(x);}).catch(function(){});}catch(e){}}return '"'+n+'",var(--f-ar)';}

/* ---------- state ---------- */
var S={clips:[],cuts:[],tin:0,tout:null},uid=1,sel=null,selCut=null,vid=$('vid'),hasV=false,VD=0,VW=9,VH=16,pps=40,hist=[],pendCut=null;
function save(){try{localStorage.setItem('ml-studio',JSON.stringify({v:1,S:S,name:vname}));}catch(e){}}
var vname='';
function snap(){hist.push(JSON.stringify(S));if(hist.length>60)hist.shift();}
function undo(){if(!hist.length)return;S=JSON.parse(hist.pop());S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});sel=null;selCut=null;rebuild();}

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
function clipEl(c){var m=mBy(c.m),el=document.createElement('div');el.className='st sd-clip'+(m.vcls?' '+m.vcls:'')+(FT[m.c]?' foot':'');el.id='c'+c.u;el.dataset.u=c.u;
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
(function loop(){sync();requestAnimationFrame(loop);})();

/* ---------- video load ---------- */
var drop=$('drop'),fin=$('vfile');
drop.addEventListener('click',function(){fin.click();});
drop.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fin.click();}});
['dragenter','dragover'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add('over');});});
['dragleave','drop'].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove('over');});});
drop.addEventListener('drop',function(e){var f=e.dataTransfer.files[0];if(f)loadV(f);});
fin.addEventListener('change',function(){if(fin.files[0])loadV(fin.files[0]);});
function loadV(f){vname=f.name;vfileObj=f;vid.src=URL.createObjectURL(f);vid.load();}
vid.addEventListener('loadedmetadata',function(){hasV=true;VD=vid.duration||0;VW=vid.videoWidth||9;VH=vid.videoHeight||16;drop.hidden=true;
  var saved=null;try{saved=JSON.parse(localStorage.getItem('ml-studio'));}catch(e){}
  if(saved&&saved.S&&saved.S.clips&&saved.S.clips.length&&!S.clips.length){S=saved.S;S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});}
  if(S.tout!=null&&S.tout>VD)S.tout=null;
  pps=Math.max(8,Math.min(200,($('tlw').clientWidth-30)/Math.max(1,VD)));$('zoom').value=pps;
  fit();rebuild();enable();});
function enable(){document.querySelectorAll('[data-nv]').forEach(function(b){b.disabled=!hasV;});}

/* ---------- library list ---------- */
var lq=$('lq'),lcat='ALL',list=$('list');
function libDraw(){var t=lq.value.trim().toLowerCase(),h='',n=0;
  M.forEach(function(m){if(m.base)return;if(lcat!=='ALL'&&m.c!==lcat)return;var hay=(m.id+' '+m.en+' '+m.ar+' '+(m.use||'')).toLowerCase();if(t&&hay.indexOf(t)<0)return;if(n++>400)return;
    h+='<li tabindex="0" data-m="'+m.id+'"><span class="id">'+m.id+'</span><span class="nm">'+esc(lang==='ar'?m.ar:m.en)+'<small>'+esc(lang==='ar'?m.en:L.ar.cats[m.c])+(FT[m.c]?' · <span class="ft">'+t_('ft')+'</span>':'')+'</small></span><button type="button" class="add" data-add="'+m.id+'" aria-label="+ '+m.id+'" data-nv>＋</button></li>';});
  list.innerHTML=h;enable();}
function catsDraw(){var c=$('lcats');c.innerHTML='<button type="button" data-c="ALL">'+t_('all')+'</button>'+CORD.map(function(k){return '<button type="button" data-c="'+k+'">'+t_('cats')[k]+'</button>';}).join('');
  c.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c===lcat);b.onclick=function(){lcat=b.dataset.c;catsDraw();libDraw();};});}
lq.addEventListener('input',libDraw);
list.addEventListener('click',function(e){var b=e.target.closest('[data-add]');if(b){addClip(b.dataset.add);return;}var li=e.target.closest('li');if(li&&hasV)addClip(li.dataset.m);});
list.addEventListener('keydown',function(e){if(e.key==='Enter'){var li=e.target.closest('li');if(li&&hasV)addClip(li.dataset.m);}});
function freeLane(s,d,skip){for(var l=0;l<20;l++){if(!S.clips.some(function(c){return c.u!==skip&&c.l===l&&c.s<s+d&&s<c.s+c.d;}))return l;}return 0;}
function addClip(id,at,quiet){if(!hasV){alertMsg(t_('needV'));return null;}var m=mBy(id);if(!m)return null;snap();var d=Math.min(Math.max(2,mDur(m)),Math.max(.5,VD)),s=at!=null?at:(vid.currentTime||0);if(s+d>VD)s=Math.max(0,VD-d);
  var b=brand(),c={u:uid++,m:id,s:+s.toFixed(2),d:+d.toFixed(2),l:freeLane(s,d),text:'',f:b&&b.f?b.f:'',p:b?'BR':'',x:50,y:FT[m.c]?50:(m.c==='CAP'?72:40),sc:90};
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
  if(pendCut!=null)h+='<div class="sd-cut" style="left:'+(pendCut*pps)+'px;width:3px"></div>';h+='</div>';
  for(var l=0;l<lanes();l++){h+='<div class="sd-trk" data-lane="'+l+'" style="width:'+W+'px">';S.clips.filter(function(c){return c.l===l;}).forEach(function(c){var m=mBy(c.m);
      h+='<div class="sd-blk'+(FT[m.c]?' ft':'')+(sel===c.u?' sel':'')+'" data-u="'+c.u+'" style="left:'+(c.s*pps)+'px;width:'+Math.max(14,c.d*pps)+'px"><i class="e l" data-e="l"></i><span>'+esc(m.id+' '+(c.text||m.en))+'</span><i class="e r" data-e="r"></i></div>';});h+='</div>';}
  h+='<div class="sd-ph" id="ph"></div>';tlin.innerHTML=h;tlin.style.width=W+'px';sync(true);}
$('zoom').addEventListener('input',function(e){pps=+e.target.value;drawTL();});
function tAt(x){var r=tlin.getBoundingClientRect();return Math.max(0,Math.min(VD,(x-r.left)/pps));}
function seek(t){vid.currentTime=Math.max(0,Math.min(VD,t));}
var drag=null;
tlin.addEventListener('pointerdown',function(e){if(!hasV)return;var blk=e.target.closest('.sd-blk'),cut=e.target.closest('[data-cut]');
  if(blk){var c=byU(+blk.dataset.u);sel=c.u;selCut=null;snap();drag={k:e.target.dataset.e||'m',c:c,x0:e.clientX,y0:e.clientY,s0:c.s,d0:c.d,l0:c.l,moved:false};blk.setPointerCapture(e.pointerId);markSel();insp();e.preventDefault();return;}
  if(cut){selCut=+cut.dataset.cut;sel=null;markSel();insp();drawTL();return;}
  if(e.target.closest('#ruler,#vtrk')||e.target.closest('.sd-trk')){drag={k:'seek'};seek(tAt(e.clientX));tlin.setPointerCapture(e.pointerId);if(!e.target.closest('.sd-blk')){sel=null;selCut=null;markSel();insp();}}});
tlin.addEventListener('pointermove',function(e){if(!drag)return;if(drag.k==='seek'){seek(tAt(e.clientX));return;}var c=drag.c,dt=(e.clientX-drag.x0)/pps;drag.moved=true;
  if(drag.k==='m'){c.s=+Math.max(0,Math.min(VD-c.d,drag.s0+dt)).toFixed(2);var dl=Math.round((e.clientY-drag.y0)/34);c.l=Math.max(0,drag.l0+dl);}
  else if(drag.k==='l'){var ns=Math.max(0,Math.min(drag.s0+drag.d0-.3,drag.s0+dt));c.d=+(drag.s0+drag.d0-ns).toFixed(2);c.s=+ns.toFixed(2);}
  else if(drag.k==='r'){c.d=+Math.max(.3,Math.min(VD-c.s,drag.d0+dt)).toFixed(2);}
  var b=tlin.querySelector('.sd-blk[data-u="'+c.u+'"]');if(b){b.style.left=(c.s*pps)+'px';b.style.width=Math.max(14,c.d*pps)+'px';}if(drag.k==='m'&&c.l!==+((b&&b.parentElement.dataset.lane)||0))drawTL();insFill();});
function endDrag(){if(!drag)return;var d=drag;drag=null;if(d.c){if(!d.moved)hist.pop();var c=d.c;if(S.clips.some(function(o){return o.u!==c.u&&o.l===c.l&&o.s<c.s+c.d&&c.s<o.s+o.d;}))c.l=freeLane(c.s,c.d,c.u);drawTL();insp();save();}}
tlin.addEventListener('pointerup',endDrag);tlin.addEventListener('pointercancel',endDrag);
function byU(u){for(var i=0;i<S.clips.length;i++)if(S.clips[i].u===u)return S.clips[i];return null;}
function markSel(){document.querySelectorAll('.sd-clip').forEach(function(el){el.classList.toggle('sel',+el.dataset.u===sel);});document.querySelectorAll('.sd-blk').forEach(function(el){el.classList.toggle('sel',+el.dataset.u===sel);});}

/* ---------- drag on the preview ---------- */
var pdrag=null;
ovl.addEventListener('pointerdown',function(e){var el=e.target.closest('.sd-clip');if(!el){sel=null;markSel();insp();return;}var c=byU(+el.dataset.u);sel=c.u;selCut=null;markSel();insp();snap();
  var fr=frame.getBoundingClientRect();pdrag={c:c,el:el,h:!!e.target.dataset.h,x0:e.clientX,y0:e.clientY,cx:c.x,cy:c.y,sc0:c.sc,fw:fr.width,fh:fr.height,moved:false};el.setPointerCapture(e.pointerId);e.preventDefault();});
ovl.addEventListener('pointermove',function(e){if(!pdrag)return;var p=pdrag,c=p.c;p.moved=true;
  if(p.h){c.sc=Math.round(Math.max(10,Math.min(250,p.sc0+((e.clientX-p.x0)/p.fw)*200)));}else{c.x=Math.round(Math.max(0,Math.min(100,p.cx+(e.clientX-p.x0)/p.fw*100)));c.y=Math.round(Math.max(0,Math.min(100,p.cy+(e.clientY-p.y0)/p.fh*100)));}
  place(p.el,c);insFill();});
function endP(){if(!pdrag)return;if(!pdrag.moved)hist.pop();pdrag=null;save();}
ovl.addEventListener('pointerup',endP);ovl.addEventListener('pointercancel',endP);

/* ---------- inspector ---------- */
var IN=$('insb');
function opts(list,val){return list.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===val?' selected':'')+'>'+esc(o[1])+'</option>';}).join('');}
function insp(){var c=sel!=null?byU(sel):null;
  if(c){var m=mBy(c.m),b=brand();
    var fo=[['',t_('orig')]].concat(FONTS.map(function(f){return [f.id,f.id+' · '+f.n];}));
    var po=[['',t_('orig')]].concat(b?[['BR',t_('brand')]]:[]).concat(CPS.map(function(p){return [p.id,p.id+' · '+(lang==='ar'?p.ar:p.en)];}));
    IN.innerHTML='<p class="sd-mname"><b>'+m.id+'</b> '+esc(m.en)+' · '+esc(m.ar)+'</p>'+(FT[m.c]?'<p class="sd-note">'+t_('ftNote')+'</p>':'')+
     '<label class="sd-f">'+t_('text')+'<input type="text" id="iTx" maxlength="80" placeholder="'+esc(t_('textPh'))+'" value="'+esc(c.text)+'"></label>'+
     '<label class="sd-f">'+t_('font')+'<select id="iF">'+opts(fo,c.f)+'</select></label><label class="sd-f">'+t_('pal')+'<select id="iP">'+opts(po,c.p)+'</select></label>'+
     '<div class="sd-row"><label class="sd-f">'+t_('start')+'<input type="number" id="iS" step="0.1" min="0" value="'+c.s+'"></label><label class="sd-f">'+t_('dur')+'<input type="number" id="iD" step="0.1" min="0.3" value="'+c.d+'"></label></div>'+
     '<label class="sd-f">'+t_('x')+' <input type="range" id="iX" min="0" max="100" value="'+c.x+'"></label><label class="sd-f">'+t_('y')+' <input type="range" id="iY" min="0" max="100" value="'+c.y+'"></label><label class="sd-f">'+t_('size')+' <input type="range" id="iSc" min="10" max="250" value="'+c.sc+'"></label>'+
     '<div class="sd-acts"><button type="button" class="sd-btn sm" id="iGo">'+t_('goto')+'</button><button type="button" class="sd-btn sm" id="iDup">'+t_('dup')+'</button><button type="button" class="sd-btn sm" id="iDel">'+t_('del')+'</button></div>';
    var tx=$('iTx'),tm=null;tx.addEventListener('focus',snap);tx.addEventListener('input',function(){c.text=tx.value;clearTimeout(tm);tm=setTimeout(function(){renderClip(c);drawTL();save();},200);});
    $('iF').addEventListener('change',function(e){snap();c.f=e.target.value;renderClip(c);save();});
    $('iP').addEventListener('change',function(e){snap();c.p=e.target.value;renderClip(c);save();});
    $('iS').addEventListener('change',function(e){snap();c.s=Math.max(0,Math.min(VD-.3,+e.target.value||0));c.d=Math.min(c.d,VD-c.s);drawTL();save();insFill();});
    $('iD').addEventListener('change',function(e){snap();c.d=Math.max(.3,Math.min(VD-c.s,+e.target.value||.3));drawTL();save();insFill();});
    [['iX','x'],['iY','y'],['iSc','sc']].forEach(function(p){var r=$(p[0]);r.addEventListener('pointerdown',snap);r.addEventListener('input',function(){c[p[1]]=+r.value;place($('c'+c.u),c);save();});});
    $('iGo').addEventListener('click',function(){seek(c.s+.01);});
    $('iDup').addEventListener('click',function(){snap();var n=JSON.parse(JSON.stringify(c));n.u=uid++;n.s=Math.min(VD-n.d,+(c.s+c.d).toFixed(2));n.l=freeLane(n.s,n.d);S.clips.push(n);sel=n.u;ovl.appendChild(clipEl(n));fontsCSS();drawTL();insp();save();});
    $('iDel').addEventListener('click',delSel);return;}
  if(selCut!=null&&S.cuts[selCut]){var k=S.cuts[selCut];IN.innerHTML='<p class="sd-mname"><b>✂</b> '+t_('cut')+': '+fmt(k.a)+' → '+fmt(k.b)+'</p><div class="sd-acts"><button type="button" class="sd-btn sm" id="iCut">'+t_('cutDel')+'</button></div>';
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
$('cutB').addEventListener('click',function(){var t=+vid.currentTime.toFixed(2);if(pendCut==null){pendCut=t;$('cutB').textContent=t_('cutB');$('cutB').classList.add('pri');drawTL();return;}
  var a=Math.min(pendCut,t),b=Math.max(pendCut,t);pendCut=null;$('cutB').textContent=t_('cutA');$('cutB').classList.remove('pri');if(b-a>=.05){snap();S.cuts.push({a:a,b:b});S.cuts.sort(function(x,y){return x.a-y.a;});}drawTL();save();});
$('undo').addEventListener('click',undo);
document.addEventListener('keydown',function(e){var tg=e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT')return;
  if(e.code==='Space'){e.preventDefault();togglePlay();}else if(e.key==='Delete'||e.key==='Backspace'){if(sel!=null){e.preventDefault();delSel();}else if(selCut!=null){snap();S.cuts.splice(selCut,1);selCut=null;drawTL();insp();save();}}
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
$('pfile').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;f.text().then(function(t){var j=JSON.parse(t);if(!j||!j.studio||!j.S)throw 0;snap();S=j.S;S.clips.forEach(function(c){uid=Math.max(uid,c.u+1);});sel=null;selCut=null;if(hasV)rebuild();else{save();dropInfo();}}).catch(function(){alertMsg(t_('badFile'));});e.target.value='';});
$('newP').addEventListener('click',function(){snap();S={clips:[],cuts:[],tin:0,tout:null};sel=null;selCut=null;try{localStorage.removeItem('ml-studio');}catch(e){}if(hasV)rebuild();dropInfo();});
function dropInfo(){var s=null;try{s=JSON.parse(localStorage.getItem('ml-studio'));}catch(e){}var n=s&&s.S&&s.S.clips?s.S.clips.length:0;$('dropR').textContent=n?t_('dropR')(n)+(s.name?' ('+s.name+')':''):'';$('newP').hidden=!n||hasV;}

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
function clipsAt(t){var any=false;S.clips.forEach(function(c){var el=$('c'+c.u);if(!el)return;var on=t>=c.s&&t<c.s+c.d&&!inCut(t);el.hidden=!on;if(!on)return;if(!FT[mBy(c.m).c])any=true;
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
  audioOf(a).then(function(buf){if(a&&a.close)try{a.close();}catch(e){}return XR.render({w:W,h:H,fps:fps,n:n,audio:buf,prog:pr,stop:function(){return job.stop;},
    frame:function(i,ctx){var ts=srcAt(i);return frameAt(ts).then(function(){ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);try{ctx.drawImage(vid,0,0,W,H);}catch(e){}
      if(!clipsAt(ts))return;return XR.snap(ovl,W,H,'.sd-foot,.sd-h,.foot').then(function(img){if(img)ctx.drawImage(img,0,0,W,H);});});}});
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
  lq.placeholder=t_('q');$('cutB').textContent=pendCut==null?t_('cutA'):t_('cutB');
  document.querySelectorAll('.sd-lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===lang);});
  S.clips.forEach(function(c){var m=mBy(c.m);m._en=null;});catsDraw();libDraw();if(hasV){rebuild();}else insp();dropInfo();}
document.querySelectorAll('.sd-lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.l;try{localStorage.setItem('ml-lang',lang);}catch(e){}applyL();});});
applyL();enable();fit();
})();
