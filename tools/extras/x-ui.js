/* ===== Extra UI: new tabs, basket, favourites, use filters, try-it lab, sounds ===== */
(function(){
var XUI={
 ar:{tCP:'الألوان',tCS:'الترجمة',tEL:'العناصر',tR:'القوالب',tSX:'الأصوات',nb:'جديد',
  dCP:'باليتات ألوان جاهزة. اختر وحدة وقل للذكاء الاصطناعي رقمها (مثل CP-04)، ويلوّن الحركات والكابشن فيها.',
  dCS:'ستايلات كابشن كاملة تدعم العربي: كل ستايل فيه الحركة والخط والألوان ومكان الكابشن. قل رقمه بس (مثل CS-01).',
  dEL:'عناصر جاهزة للريلز: أزرار متابعة، أسهم، شارات، وتذكير بالحفظ. كل عنصر برقم (مثل EL-04).',
  dR:'قوالب ريل كاملة: الهوك والمحتوى والانتقالات والنهاية، مع الخط والألوان والكابشن. اكتب رقم القالب (مثل R-12) ويطلع لك الفيديو كامل.',
  dSX:'مؤثرات صوتية مجانية بدون حقوق (CC0)، تقدر تستخدمها حتى بالإعلانات. كل حركة فيها صوت مقترح من هني.',
  q:'ابحث بالاسم أو الرقم',cn:'⧉ الاسم',cp:'⧉ البرومبت',dl:'⬇ تحميل',play:'▶ شغّل',stop:'■ وقّف',
  bg:'خلفية',tx:'نص',ac:'هوية',hl:'تظليل',use:'متى تستخدمه',
  motion:'الحركة',font:'الخط',pal:'الألوان',cap:'الكابشن',snd:'الصوت',need:'المطلوب منك',
  sample:'هذي أسهل طريقة تسوي فيها ريلز يوقف الناس',sampleEn:'the easiest way to make reels people stop for',
  usedBy:function(n){return 'مقترح لـ '+n+' حركة';},
  addAll:'＋ كل القالب للسلة',copyPr:'⧉ انسخ البرومبت',
  uAll:'الكل',uFav:'♥ المفضلة',
  fav:'أضف للمفضلة',unfav:'شيل من المفضلة',add:'أضف للسلة',inB:'بالسلة',try:'جرّب بكلامك',
  bk:'السلة',bkCopy:'⧉ انسخ برومبت واحد',bkShow:'عرض',bkClear:'فضّي',bkEmpty:'السلة فاضية. اضغط ＋ على أي حركة أو خط أو لون.',bkT:'سلة البرومبت',
  bkHead:'طبّق هذي الإضافات من مكتبة الموشن (Alansari.Tech) على الفيديو، بالترتيب:',bkFoot:'إذا ناقصك أي محتوى (نص، صورة، شعار) اسألني قبل الرندر.',
  labT:'جرّب بكلامك',labIn:'اكتب جملتك هني',labF:'الخط',labP:'الألوان',labNone:'الأصلي',labRe:'↻ عيد',labCp:'⧉ انسخ البرومبت',labNo:'هالحركة ما فيها نص، بس تقدر تجرب الألوان.',
  labPr:function(m,t,f,p){return 'لمن أقول "[الجملة]" طبّق '+m.id+' '+m.en+' بالنص: "'+t+'"'+(f?'، بالخط '+f.id+' «'+f.n+'»':'')+(p?'، بالألوان '+p.id+' «'+p.ar+'»':'')+'.';},
  sxLbl:'الصوت المقترح',noSx:'بدون صوت (يشتغل على صوت الفيديو)',
  wn:'<b>✨ جديد:</b> «هويتي» (فوق)، الهوك، فلاتر الألوان، الخلفيات، الأدوات (مولّد المونتاج، صانع الغلاف، كاشف الإيقاع)، الألوان، الترجمة، العناصر، القوالب، الأصوات، سلة البرومبت ورابطها، الفلاتر، المفضلة، واجهة إنستغرام فوق المعاينة، و«جرّب بكلامك». وتقدر تثبّت الموقع على جوالك مثل التطبيق.',
  inst:'⬇ ثبّت الموقع كتطبيق',instIos:'بالآيفون: اضغط زر المشاركة ⬆ بسفاري، وبعدها «إضافة إلى الشاشة الرئيسية».',
  pos:{b:'تحت (حوالي 70% من الطول)',c:'بالنص'},wpl:function(n){return n===1?'كلمة وحدة كل مرة':n+' كلمات بالسطر بالأكثر';},
  rt:{'between':'بين المقاطع','end':'النهاية','each tip':'كل نصيحة','price':'السعر','reveal':'الكشف','detail':'التفصيل','first line':'أول جملة','body':'المحتوى','punchlines':'الجمل القوية','steps':'الخطوات','shortcuts':'الاختصارات','chapters':'الفصول','emotion':'اللحظة الكبيرة','discount':'الخصم','urgency':'الاستعجال','whole':'طول الفيديو','text':'النص','quote':'الاقتباس','answer':'الجواب','keywords':'الكلمات المهمة','where':'المكان','when':'الموعد','every 4–6 s':'كل 4–6 ثواني'},
  empty:'ما فيه شي بهالاسم. جرّب كلمة ثانية.'},
 en:{tCP:'Colors',tCS:'Captions',tEL:'Elements',tR:'Recipes',tSX:'Sounds',nb:'New',
  dCP:'Ready colour palettes. Pick one and tell the AI its ID (e.g. CP-04) to colour the motions and captions.',
  dCS:'Complete caption styles with full Arabic support: each one sets the motion, font, colours and position. Just say its ID (e.g. CS-01).',
  dEL:'Ready Reels elements: follow buttons, arrows, badges, save reminders. Each has an ID (e.g. EL-04).',
  dR:'Full Reel recipes: hook, body, transitions and ending, with font, colours and captions. Type the recipe ID (e.g. R-12) and get the whole edit.',
  dSX:'Free CC0 sound effects you can use anywhere, including ads. Every motion has a suggested sound from here.',
  q:'Search by name or ID',cn:'⧉ Name',cp:'⧉ Prompt',dl:'⬇ Download',play:'▶ Play',stop:'■ Stop',
  bg:'Background',tx:'Text',ac:'Accent',hl:'Highlight',use:'When to use',
  motion:'Motion',font:'Font',pal:'Colors',cap:'Captions',snd:'Sound',need:'You provide',
  sample:'هذي أسهل طريقة تسوي فيها ريلز يوقف الناس',sampleEn:'the easiest way to make reels people stop for',
  usedBy:function(n){return 'Suggested for '+n+' motions';},
  addAll:'＋ Add the whole recipe',copyPr:'⧉ Copy prompt',
  uAll:'All',uFav:'♥ Favourites',
  fav:'Add to favourites',unfav:'Remove from favourites',add:'Add to basket',inB:'In basket',try:'Try with your text',
  bk:'Basket',bkCopy:'⧉ Copy one prompt',bkShow:'Show',bkClear:'Clear',bkEmpty:'The basket is empty. Press ＋ on any motion, font or colour.',bkT:'Prompt basket',
  bkHead:'Apply these items from the Motion Library (Alansari.Tech) to the video, in this order:',bkFoot:'If any content is missing (text, image, logo), ask me before rendering.',
  labT:'Try it with your text',labIn:'Type your line here',labF:'Font',labP:'Colors',labNone:'Original',labRe:'↻ Replay',labCp:'⧉ Copy prompt',labNo:'This motion has no text, but you can try colours.',
  labPr:function(m,t,f,p){return 'When I say "[line]", apply '+m.id+' '+m.en+' with the text: "'+t+'"'+(f?', in font '+f.id+' "'+f.n+'"':'')+(p?', in colours '+p.id+' "'+p.en+'"':'')+'.';},
  sxLbl:'Suggested sound',noSx:'No sound (runs on the video audio)',
  wn:'<b>✨ New:</b> “My brand” (top), hooks, LUTs, backgrounds, tools (script generator, cover maker, BPM detector), colours, captions, elements, recipes, sounds, the prompt basket and its share link, use filters, favourites, platform overlay on previews and “Try with your text”. You can also install the site on your phone like an app.',
  inst:'⬇ Install as an app',instIos:'On iPhone: tap Share ⬆ in Safari, then “Add to Home Screen”.',
  pos:{b:'bottom (about 70% of the height)',c:'centre'},wpl:function(n){return n===1?'one word at a time':'max '+n+' words per line';},
  rt:{},empty:'Nothing matches that. Try another word.'}};
function X(k){return XUI[lang][k];}
function nm(o){return lang==='ar'?o.ar:o.en;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function byId(list,id){for(var i=0;i<list.length;i++)if(list[i].id===id)return list[i];return null;}
function mById(id){return byId(M,id);}function fById(id){return byId(FONTS,id);}function pById(id){return byId(CPS,id);}
function ls(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v||d;}catch(e){return d;}}
function lss(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function goat(p,t){try{if(window.goatcounter&&goatcounter.count)goatcounter.count({path:p,title:t,event:true});}catch(_){}}

/* ---------- fonts on demand ---------- */
var famDone={};
function fontFam(id){var f=fById(id);if(!f)return '';var fam='mlf_'+f.id.replace('-','');
  if(!famDone[fam]){famDone[fam]=1;try{var ff=new FontFace(fam,'url("'+fUrl(f)+'")',f.v?{weight:f.w[0]+' '+f.w[1]}:{});ff.load().then(function(x){document.fonts.add(x);}).catch(function(){});}catch(e){}}
  return '"'+fam+'",var(--f-ar)';}

/* ---------- sounds ---------- */
var aud=null,audBtn=null;
function stopSx(){if(aud){aud.pause();aud=null;}if(audBtn){audBtn.classList.remove('on');if(audBtn.dataset.lb)audBtn.innerHTML=X(audBtn.dataset.lb);audBtn=null;}}
function playSx(id,btn){var same=audBtn===btn;stopSx();if(same)return;var s=sxById(id);if(!s)return;aud=new Audio(sxUrl(s));aud.volume=.8;audBtn=btn;
  if(btn){btn.classList.add('on');if(btn.dataset.lb)btn.innerHTML=X('stop');}
  aud.onended=stopSx;var p=aud.play();if(p&&p.catch)p.catch(stopSx);}
function sxChip(id){var s=sxById(id);if(!s)return '<span class="nchip n0 sxn">🔇 '+X('noSx')+'</span>';return '<button type="button" class="sxc" data-sx="'+s.id+'" title="'+X('sxLbl')+'">🔊 <b>'+s.id+'</b> '+nm(s)+'</button>';}
document.addEventListener('click',function(e){var b=e.target.closest('[data-sx]');if(b){e.preventDefault();e.stopPropagation();playSx(b.dataset.sx,b);}},true);

/* ---------- prompts ---------- */
function sxLine(id,l){var s=sxById(id);if(!s)return '';return l==='ar'?' والصوت المقترح: '+s.id+' «'+s.ar+'» ('+XBASE+sxUrl(s)+').':' Suggested sound: '+s.id+' "'+s.en+'" ('+XBASE+sxUrl(s)+').';}
function cpPr(p){return lang==='ar'?'استخدم الألوان '+p.id+' «'+p.ar+'»: الخلفية '+p.bg+'، النص '+p.tx+'، لون الهوية '+p.ac+'، التظليل '+p.hl+'.':'Use the colour palette '+p.id+' "'+p.en+'": background '+p.bg+', text '+p.tx+', accent '+p.ac+', highlight '+p.hl+'.';}
function csPr(c){var f=fById(c.f),p=pById(c.p),m=mById(c.m),L=CS_LOOK[c.look],ar=lang==='ar';
  return ar?'خل الكابشن بستايل '+c.id+' «'+c.ar+'»: الحركة '+c.m+' '+(m?m.en:'')+'، الخط '+c.f+' «'+(f?f.n:'')+'»، الألوان '+p.id+' (النص '+p.tx+'، الهوية '+p.ac+'، التظليل '+p.hl+')، المكان '+X('pos')[c.pos]+'، '+X('wpl')(c.w)+'، و'+L[1]+'. الكابشن يطلع من صوتي تلقائياً، وخله داخل المنطقة الآمنة.'
   :'Style the captions as '+c.id+' "'+c.en+'": motion '+c.m+' '+(m?m.en:'')+', font '+c.f+' "'+(f?f.n:'')+'", colours '+p.id+' (text '+p.tx+', accent '+p.ac+', highlight '+p.hl+'), position '+X('pos')[c.pos]+', '+X('wpl')(c.w)+', and '+L[0]+'. Captions come from my voice automatically; keep them inside the safe zone.';}
function elPr(e){var ar=lang==='ar',s=sxById(e.sx);
  var nd=e.nd.length?(ar?' المطلوب منك: '+e.nd[0]+': "[اكتبه هنا]".':' What you provide: '+e.nd[1]+': "[type it here]".'):'';
  return (ar?'لمن أقول "[الجملة]" حط العنصر '+e.id+' «'+e.ar+'»: '+e.sa:'When I say "[line]", add the element '+e.id+' "'+e.en+'": '+e.se)+sxLine(e.sx,lang)+nd;}
function rTime(t){return lang==='ar'?(X('rt')[t]||t):t;}
function rPr(r){var ar=lang==='ar',f=fById(r.f),p=pById(r.p),c=byId(CSS_,r.cs);
  var L=[ar?'طبّق القالب '+r.id+' «'+r.ar+'» على الفيديو. الخط '+r.f+' «'+(f?f.n:'')+'»، الألوان '+r.p+' «'+p.ar+'» ('+p.bg+'، '+p.tx+'، '+p.ac+'، '+p.hl+')، والكابشن '+r.cs+' «'+c.ar+'».':'Apply the recipe '+r.id+' "'+r.en+'" to the video. Font '+r.f+' "'+(f?f.n:'')+'", colours '+r.p+' "'+p.en+'" ('+p.bg+', '+p.tx+', '+p.ac+', '+p.hl+'), captions '+r.cs+' "'+c.en+'".'];
  r.st.forEach(function(s){L.push('- '+rTime(s[0])+': '+(ar?s[2]:s[1])+' ('+s[3].join(ar?'، ':', ')+')');});
  L.push(ar?'كل الأرقام من مكتبة الموشن. إذا ناقصك محتوى اسألني قبل الرندر.':'All IDs are from the Motion Library. If any content is missing, ask me before rendering.');return L.join('\n');}
function sxPr(s){return lang==='ar'?'حط الصوت '+s.id+' «'+s.ar+'» ('+XBASE+sxUrl(s)+') لمن [اللحظة]، تحت الصوت بمستوى خفيف.':'Add the sound '+s.id+' "'+s.en+'" ('+XBASE+sxUrl(s)+') at [the moment], mixed softly under the voice.';}
/* motion prompt gets its sound */
['ar','en'].forEach(function(l){var o=UI[l].pr;UI[l].pr=function(m){var s=sxOf(m);return o(m)+(s?sxLine(s,l):'');};});
window.sxOf=sxOf;

/* ---------- basket + favourites ---------- */
var BK=ls('ml-basket',[]),FAV=ls('ml-fav',[]);
function itemOf(id){var p=id.split('-')[0];
  if(p==='M'){var m=mById(id);return m&&{id:id,lb:m.en,pr:function(){return UI[lang].pr(m);}};}
  if(p==='FA'||p==='FE'){var f=fById(id);return f&&{id:id,lb:f.n,pr:function(){return fPrompt(f);}};}
  if(p==='CP'){var c=pById(id);return c&&{id:id,lb:nm(c),pr:function(){return cpPr(c);}};}
  if(p==='CS'){var s=byId(CSS_,id);return s&&{id:id,lb:nm(s),pr:function(){return csPr(s);}};}
  if(p==='EL'){var e=byId(ELS,id);return e&&{id:id,lb:nm(e),pr:function(){return elPr(e);}};}
  if(p==='R'){var r=byId(RCS,id);return r&&{id:id,lb:nm(r),pr:function(){return rPr(r);}};}
  if(p==='SX'){var x=sxById(id);return x&&{id:id,lb:nm(x),pr:function(){return sxPr(x);}};}
  if(p==='H'){var h=byId(HOOKS,id);return h&&{id:id,lb:lang==='ar'?h.ar:h.en,pr:function(){return hkPr(h);}};}
  if(p==='LT'){var l=byId(LTS,id);return l&&{id:id,lb:nm(l),pr:function(){return ltPr(l);}};}
  if(p==='BG'){var g=byId(BGS,id);return g&&{id:id,lb:nm(g),pr:function(){return bgPr(g);}};}
  return null;}
BK=BK.filter(function(id){return !!itemOf(id);});
function inBk(id){return BK.indexOf(id)>-1;}
function togBk(id){var i=BK.indexOf(id);if(i>-1)BK.splice(i,1);else BK.push(id);lss('ml-basket',BK);syncBtns();bkRender();if(i<0)bkBump();}
function togFav(id){var i=FAV.indexOf(id);if(i>-1)FAV.splice(i,1);else FAV.push(id);lss('ml-fav',FAV);syncBtns();if(ucur==='fav')render();}
function ovHTML(id,tryable){return '<div class="xov"><button type="button" class="ovb fv" data-fav="'+id+'"></button><button type="button" class="ovb ad" data-bk="'+id+'"></button>'+(tryable?'<button type="button" class="ovb tr" data-try="'+id+'"></button>':'')+'</div>';}
function syncBtns(){document.querySelectorAll('[data-fav]').forEach(function(b){var on=FAV.indexOf(b.dataset.fav)>-1;b.textContent=on?'♥':'♡';b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);b.setAttribute('aria-label',X(on?'unfav':'fav')+' '+b.dataset.fav);b.title=X(on?'unfav':'fav');});
  document.querySelectorAll('[data-bk]').forEach(function(b){var on=inBk(b.dataset.bk);b.textContent=on?'✓':'＋';b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);b.setAttribute('aria-label',X(on?'inB':'add')+' '+b.dataset.bk);b.title=X(on?'inB':'add');});
  document.querySelectorAll('[data-try]').forEach(function(b){b.textContent='✎';b.setAttribute('aria-label',X('try')+' '+b.dataset.try);b.title=X('try');});}
document.addEventListener('click',function(e){var b=e.target.closest('[data-fav],[data-bk],[data-try]');if(!b)return;
  if(b.dataset.fav)togFav(b.dataset.fav);else if(b.dataset.bk)togBk(b.dataset.bk);else openLab(b.dataset.try,b);});

/* basket bar + panel */
var bar=document.createElement('div');bar.className='bkbar';bar.id='bkbar';bar.hidden=true;
bar.innerHTML='<button type="button" class="bkn" id="bkShow"><b id="bkC">0</b> <span id="bkL"></span></button><button type="button" class="btn" id="bkCopy"></button>';
document.body.appendChild(bar);
var pan=document.createElement('div');pan.className='exm bkp';pan.id='bkp';pan.hidden=true;pan.setAttribute('role','dialog');pan.setAttribute('aria-modal','true');
pan.innerHTML='<div class="bkbox"><div class="bkh"><h2 id="bkT"></h2><button type="button" class="exx" id="bkX" aria-label="Close">✕</button></div><ol id="bkList"></ol><p class="empty" id="bkE"></p><div class="bkf"><button type="button" class="btn" id="bkCopy2"></button><button type="button" class="btn ghost" id="bkClr"></button></div></div>';
document.body.appendChild(pan);
function bkPrompt(){var L=[X('bkHead')];BK.forEach(function(id,i){var it=itemOf(id);if(it)L.push((i+1)+'. '+it.pr());});L.push(X('bkFoot'));return L.join('\n\n');}
function bkRender(){var n=BK.length;bar.hidden=!n;document.getElementById('bkC').textContent=n;document.getElementById('bkL').textContent=X('bk')+' · '+X('bkShow');
  document.getElementById('bkCopy').innerHTML=X('bkCopy');document.getElementById('bkCopy2').innerHTML=X('bkCopy');document.getElementById('bkClr').textContent=X('bkClear');document.getElementById('bkT').textContent=X('bkT');
  var ol=document.getElementById('bkList');ol.innerHTML='';BK.forEach(function(id,i){var it=itemOf(id);var li=document.createElement('li');
    li.innerHTML='<span class="mono">'+id+'</span><span class="bkl">'+esc(it.lb)+'</span><button type="button" class="ovb" data-up="'+i+'" aria-label="up"'+(i?'':' disabled')+'>↑</button><button type="button" class="ovb" data-rm="'+id+'" aria-label="remove">✕</button>';ol.appendChild(li);});
  var e=document.getElementById('bkE');e.textContent=X('bkEmpty');e.hidden=n>0;document.body.classList.toggle('hasbk',n>0);}
function bkBump(){bar.classList.remove('bump');void bar.offsetWidth;bar.classList.add('bump');}
document.getElementById('bkList').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.dataset.rm)togBk(b.dataset.rm);else if(b.dataset.up){var i=+b.dataset.up;if(i>0){var t=BK[i];BK[i]=BK[i-1];BK[i-1]=t;lss('ml-basket',BK);bkRender();}}});
function bkCopyClick(e){copyText(bkPrompt(),e.currentTarget,X('bkCopy'));goat('basket-copy','Basket prompt copied');}
document.getElementById('bkCopy').addEventListener('click',bkCopyClick);document.getElementById('bkCopy2').addEventListener('click',bkCopyClick);
document.getElementById('bkClr').addEventListener('click',function(){BK=[];lss('ml-basket',BK);syncBtns();bkRender();});
var bkBack=null;
document.getElementById('bkShow').addEventListener('click',function(e){bkBack=e.currentTarget;pan.hidden=false;document.getElementById('bkX').focus({preventScroll:true});});
function bkClose(){if(pan.hidden)return;pan.hidden=true;if(bkBack)bkBack.focus({preventScroll:true});}
document.getElementById('bkX').addEventListener('click',bkClose);pan.addEventListener('click',function(e){if(e.target===pan)bkClose();});

/* ---------- motion cards: overlay, sound chip ---------- */
var TXTC={TXT:1,EMP:1,CAP:1,LGO:1,SOC:1,D3:1,PER:1};
cards.forEach(function(o){var m=o.m;o.el.style.position='relative';
  o.el.insertAdjacentHTML('afterbegin',ovHTML(m.id,true));
  var meta=o.el.querySelector('.meta'),need=meta.querySelector('.need');var sr=document.createElement('div');sr.className='sxrow';need.after(sr);o.sx=sr;});

/* use-case filter chips */
var ucur='ALL';var uc=document.createElement('div');uc.className='fchips uchips';uc.id='uchips';
document.querySelector('#motionsView .mainh').after(uc);
function ucRender(){uc.innerHTML='';[['ALL',X('uAll')],['fav',X('uFav')]].concat(POP.length?[['pop',X2t('pop')]]:[]).concat(USES.map(function(u){return [u[0],lang==='ar'?u[2]:u[1]];})).forEach(function(x){
  var b=document.createElement('button');b.type='button';b.textContent=x[1];b.setAttribute('aria-pressed',ucur===x[0]);b.onclick=function(){ucur=x[0];ucRender();render();};uc.appendChild(b);});}
var render0=render;
render=function(){render0();if(ucur==='ALL')return;var n=0;
  cards.forEach(function(o){if(o.el.hidden)return;var ok=ucur==='fav'?FAV.indexOf(o.m.id)>-1:usesOf(o.m).indexOf(ucur)>-1;o.el.hidden=!ok;if(ok)n++;});
  document.getElementById('catCount').textContent=n+' / '+M.length;document.getElementById('curLbl').textContent=catName(cur)+' · '+n;document.getElementById('empty').hidden=n>0;};
q.removeEventListener('input',render0);q.addEventListener('input',function(){render();});

/* ---------- views ---------- */
var VIEWS=[['CP','palettes'],['CS','captions'],['EL','elements'],['R','recipes'],['SX','sounds'],['H','hooks'],['LT','luts'],['BG','backgrounds'],['TL','tools']];
var host=document.getElementById('fontsView');
VIEWS.forEach(function(v){var s=document.createElement('section');s.id='xv-'+v[0];s.className='xv';s.hidden=true;
  s.innerHTML='<section class="box"><h2 class="xt"></h2><p class="xd"></p></section><div class="fctl"><input type="search" class="xq"></div><div class="xgrid xg-'+v[0]+'"></div><p class="empty xe" hidden></p>';
  host.after(s);host=s;});
var tabs=document.querySelector('.tabs');
VIEWS.forEach(function(v){var b=document.createElement('button');b.type='button';b.id='tab'+v[0];b.setAttribute('aria-pressed','false');b.dataset.tab=v[0];
  b.innerHTML='<span class="tl"></span> <small></small><em class="nb"></em>';tabs.appendChild(b);b.onclick=function(){showTab(v[0]);};});
function xq(k){return document.querySelector('#xv-'+k+' .xq');}
function xgrid(k){return document.querySelector('#xv-'+k+' .xgrid');}
var XC={CP:[],CS:[],EL:[],R:[],SX:[],H:[],LT:[],BG:[]};
function mk(k,id,cls,html,hay){var el=document.createElement('article');el.className='xc '+cls;el.innerHTML=html;el.style.position='relative';xgrid(k).appendChild(el);XC[k].push({id:id,el:el,hay:hay});return el;}
function acts(btns){return '<div class="acts">'+btns.join('')+'</div>';}

/* palettes */
CPS.forEach(function(p){var el=mk('CP',p.id,'xcp',
  ovHTML(p.id)+'<div class="cpst" style="--b:'+p.bg+';--t:'+p.tx+';--a:'+p.ac+';--h:'+p.hl+'" aria-hidden="true"><div class="cpw"><span class="cp1"></span> <span class="cp2"></span></div><div class="cpsw"><i style="background:'+p.bg+'"></i><i style="background:'+p.tx+'"></i><i style="background:'+p.ac+'"></i><i style="background:'+p.hl+'"></i></div></div>'+
  '<div class="meta"><div class="idrow"><b>'+p.id+'</b></div><div class="xn"></div><div class="use xu"></div><div class="hexes">'+[['bg',p.bg],['tx',p.tx],['ac',p.ac],['hl',p.hl]].map(function(h){return '<button type="button" class="hx" data-hex="'+h[1]+'" data-k="'+h[0]+'"><i style="background:'+h[1]+'"></i><span></span><b class="mono">'+h[1]+'</b></button>';}).join('')+'</div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>'])+'</div>',
  p.id+' '+p.en+' '+p.ar+' '+p.ue+' '+p.ua);
  el.querySelector('[data-a="n"]').onclick=function(e){copyText(p.id+' '+p.en,e.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(e){copyText(cpPr(p),e.currentTarget,X('cp'));};
  el.querySelectorAll('.hx').forEach(function(b){b.onclick=function(){copyText(b.dataset.hex,b.querySelector('b'),b.dataset.hex);};});});

/* caption styles */
var csRuns=[];
CSS_.forEach(function(c){var p=pById(c.p);var el=mk('CS',c.id,'xcs',
  ovHTML(c.id)+'<div class="st csst cs-'+c.look+' cs-'+c.pos+'" style="--b:'+p.bg+';--t:'+p.tx+';--a:'+p.ac+';--h:'+p.hl+'" aria-hidden="true">'+scene()+'<div class="csw"></div></div>'+
  '<div class="meta"><div class="idrow"><b>'+c.id+'</b><span class="lp">'+c.m+' · '+c.f+' · '+c.p+'</span></div><div class="xn"></div><div class="use xu"></div><div class="need"><span class="nchip nt">'+c.m+'</span><span class="nchip nt">'+c.f+' '+(fById(c.f)||{n:''}).n+'</span><span class="nchip nf">'+c.p+'</span></div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>'])+'</div>',
  c.id+' '+c.en+' '+c.ar+' '+c.ue+' '+c.ua+' '+c.m+' '+c.f+' '+c.p);
  el.querySelector('[data-a="n"]').onclick=function(e){copyText(c.id+' '+c.en,e.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(e){copyText(csPr(c),e.currentTarget,X('cp'));};
  csRuns.push({c:c,el:el,w:el.querySelector('.csw'),i:0,vis:false,ff:false});});
function csWords(){return X('sample').split(' ');}
function csPaint(r){var c=r.c,W=csWords(),n=c.w===5?W.length:c.w,start=Math.floor(r.i/n)*n,line=W.slice(start,start+n),act=r.i-start;
  if(!r.ff){r.ff=true;r.w.style.fontFamily=fontFam(c.f);}
  var h=line.map(function(w,j){var k=(c.look==='key'||c.look==='mix')?(w.length>=5):false;return '<span class="'+(j===act?'on':'')+(j>act&&(c.look==='fade')?' fut':'')+(k?' key':'')+'">'+w+'</span>';}).join(' ');
  if(c.look==='two'){var a=W.slice(0,4),b=W.slice(4);h='<div>'+a.map(function(w,j){return '<span class="'+(r.i===j?'on':'')+'">'+w+'</span>';}).join(' ')+'</div><div>'+b.map(function(w,j){return '<span class="'+(r.i===j+4?'on':'')+'">'+w+'</span>';}).join(' ')+'</div>';}
  if(c.look==='bi')h='<div>'+h+'</div><div class="bien" dir="ltr">'+XUI.en.sampleEn+'</div>';
  r.w.innerHTML=h;}
if('IntersectionObserver' in window){var cio=new IntersectionObserver(function(es){es.forEach(function(e){e.target._r.vis=e.isIntersecting;});},{rootMargin:'100px'});csRuns.forEach(function(r){r.el._r=r;cio.observe(r.el);});}else csRuns.forEach(function(r){r.vis=true;});
setInterval(function(){if(document.getElementById('xv-CS').hidden)return;var N=csWords().length;csRuns.forEach(function(r){if(!r.vis)return;r.i=(r.i+1)%N;csPaint(r);});},rmx()?1400:520);
function rmx(){return window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;}

/* elements */
var ELPV={
 fol:'<div class="xe-fol"><span class="t-fol"></span><i class="rip"></i></div>',
 sub:'<div class="xe-sub"><span class="t-sub"></span><i class="bell">🔔</i></div>',
 bio:'<div class="xe-bio"><i>↑</i><span class="t-bio"></span></div>',
 kw:'<div class="xe-kw"><small class="t-kw0"></small><div class="kbx"><span class="t-kw"></span><i>➤</i></div></div>',
 arw:'<svg class="xe-arw" viewBox="0 0 100 100"><path d="M15 80 C 20 40, 50 20, 80 25" pathLength="1"/><path d="M68 14 L82 25 L68 36" pathLength="1"/></svg><div class="xe-tg"></div>',
 cir:'<div class="xe-tg big t-cir"></div><svg class="xe-cir" viewBox="0 0 100 60"><path d="M50 6 C 85 4, 97 22, 92 38 C 86 56, 30 60, 12 46 C -2 34, 8 10, 46 8 C 60 7, 70 10, 74 12" pathLength="1"/></svg>',
 brk:'<div class="xe-brk"><i></i><i></i><i></i><i></i></div><div class="xe-tg"></div>',
 prt:'<div class="xe-prt t-prt"></div>',
 end:'<div class="xe-end"><span class="t-end"></span><i></i><b>👁</b></div>',
 new:'<div class="xe-new t-new"></div>',
 bub:'<div class="xe-bub"><span class="t-bub"></span></div><div class="xe-head"></div>',
 tap:'<div class="xe-tap t-tap"></div>',
 pri:'<div class="xe-pri"><span class="t-pri"></span></div>',
 swp:'<div class="xe-swp"><span class="t-swp"></span><i>‹</i><i>‹</i></div>',
 sav:'<div class="xe-sav"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z"/></svg><span class="t-sav"></span></div>',
 rec:'<div class="xe-rec"><i></i><i></i><i></i><i></i><b><s></s>REC <span class="mono">00:07</span></b></div>',
 emo:'<div class="xe-emo">🔥</div>',
 chk:'<div class="xe-chk"><p><i></i><span class="t-c1"></span></p><p><i></i><span class="t-c2"></span></p><p><i></i><span class="t-c3"></span></p></div>'};
var ELTX={ar:{fol:'تابعني',sub:'اشترك',bio:'الرابط بالبايو',kw0:'اكتب الكلمة بالتعليقات',kw:'موشن',cir:'٪٥٠',prt:'الجزء 1/3',end:'تابع للنهاية',new:'جديد',bub:'جد؟!',tap:'نصيحة اليوم',pri:'٩٩ د.ك',swp:'اسحب',sav:'احفظ الفيديو',c1:'صوّر',c2:'منتج',c3:'انشر'},
 en:{fol:'Follow',sub:'Subscribe',bio:'Link in bio',kw0:'Comment the word',kw:'MOTION',cir:'50%',prt:'Part 1/3',end:'Watch till the end',new:'NEW',bub:'Really?!',tap:'Tip of the day',pri:'$99',swp:'Swipe',sav:'Save this',c1:'Film',c2:'Edit',c3:'Post'}};
ELS.forEach(function(e){var el=mk('EL',e.id,'xel',
  ovHTML(e.id)+'<div class="st xest xp-'+e.pv+'" style="--d:2.8s" aria-hidden="true">'+scene()+ELPV[e.pv]+'</div>'+
  '<div class="meta"><div class="idrow"><b>'+e.id+'</b></div><div class="xn"></div><div class="use xu"></div><div class="need xnd"></div><div class="sxrow">'+sxChip(e.sx)+'</div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>'])+'</div>',
  e.id+' '+e.en+' '+e.ar+' '+e.ue+' '+e.ua);
  el.querySelector('[data-a="n"]').onclick=function(ev){copyText(e.id+' '+e.en,ev.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(ev){copyText(elPr(e),ev.currentTarget,X('cp'));};});
if('IntersectionObserver' in window){var eio=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('off',!e.isIntersecting);});},{rootMargin:'200px'});XC.EL.forEach(function(o){eio.observe(o.el);});XC.CS.forEach(function(o){eio.observe(o.el);});}

/* recipes */
function idChip(id){var p=id.split('-')[0],cls=p==='M'?'nt':(p==='SX'?'nf':'nx');return '<button type="button" class="nchip '+cls+' rid" data-go="'+id+'">'+id+'</button>';}
RCS.forEach(function(r){var el=mk('R',r.id,'xr',ovHTML(r.id)+
  '<div class="rhd"><div class="idrow"><b>'+r.id+'</b></div><h3 class="xn"></h3><p class="use xu"></p><div class="need">'+idChip(r.f)+idChip(r.p)+idChip(r.cs)+'<span class="rsw"><i style="background:'+pById(r.p).bg+'"></i><i style="background:'+pById(r.p).ac+'"></i><i style="background:'+pById(r.p).hl+'"></i></span></div></div>'+
  '<ol class="rst"></ol>'+acts(['<button type="button" data-a="all"></button>','<button type="button" data-a="p"></button>']),
  r.id+' '+r.en+' '+r.ar+' '+r.ue+' '+r.ua+' '+r.st.map(function(s){return s[3].join(' ');}).join(' '));
  el.querySelector('[data-a="p"]').onclick=function(ev){copyText(rPr(r),ev.currentTarget,X('copyPr'));goat('recipe-copy',r.id);};
  el.querySelector('[data-a="all"]').onclick=function(){var ids=[r.id];ids.forEach(function(id){if(!inBk(id))BK.push(id);});lss('ml-basket',BK);syncBtns();bkRender();bkBump();};});
document.addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(!b)return;goTo(b.dataset.go);});
function goTo(id){var p=id.split('-')[0];
  if(p==='M'){showTab('M');cur='ALL';ucur='ALL';ucRender();q.value=id;render();var o=cards.filter(function(c){return c.m.id===id;})[0];if(o)setTimeout(function(){o.el.scrollIntoView({block:'center'});},60);return;}
  if(p==='FA'||p==='FE'){showTab('F');var fq=document.getElementById('fq');fq.value=id;fRender();return;}
  var k=p==='R'?'R':p;if(!XC[k])return;showTab(k);var i=xq(k);i.value=id;xFilter(k);}

/* sounds */
var sxUse={};M.forEach(function(m){var s=sxOf(m);if(s)sxUse[s]=(sxUse[s]||0)+1;});
SXS.forEach(function(s){var el=mk('SX',s.id,'xsx',ovHTML(s.id)+
  '<button type="button" class="sxbig" data-sx="'+s.id+'" data-lb="play"></button>'+
  '<div class="meta"><div class="idrow"><b>'+s.id+'</b><span class="lp sxty"></span></div><div class="xn"></div><div class="use xu"></div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>','<a class="xdl" data-a="d" download href="'+sxUrl(s)+'"></a>'])+'</div>',
  s.id+' '+s.en+' '+s.ar+' '+s.ty+' '+SXT[s.ty].join(' '));
  el.querySelector('[data-a="n"]').onclick=function(ev){copyText(s.id+' '+s.en,ev.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(ev){copyText(sxPr(s),ev.currentTarget,X('cp'));};});

/* search per view */
function xFilter(k){var t=xq(k).value.trim().toLowerCase(),n=0;XC[k].forEach(function(o){var ok=!t||o.hay.toLowerCase().indexOf(t)>-1;o.el.hidden=!ok;if(ok)n++;});
  var e=document.querySelector('#xv-'+k+' .xe');e.hidden=n>0;e.textContent=X('empty');}
VIEWS.forEach(function(v){xq(v[0]).addEventListener('input',function(){xFilter(v[0]);});});

/* ---------- tabs ---------- */
function tb0(){return document.querySelector('.tabs');}
var HASH={M:'motions',F:'fonts',CP:'palettes',CS:'captions',EL:'elements',R:'recipes',SX:'sounds',H:'hooks',LT:'luts',BG:'backgrounds',TL:'tools'};
showTab=function(t){stopSx();document.getElementById('fontsView').hidden=t!=='F';document.getElementById('motionsView').hidden=t!=='M';
  VIEWS.forEach(function(v){document.getElementById('xv-'+v[0]).hidden=t!==v[0];});
  document.querySelectorAll('.tabs button').forEach(function(b){var k=b.dataset.tab||(b.id==='tabM'?'M':'F');b.setAttribute('aria-pressed',k===t);if(k===t&&b.scrollIntoView&&tb0().scrollWidth>tb0().clientWidth)b.scrollIntoView({inline:'nearest',block:'nearest'});});
  try{history.replaceState(null,'','#'+HASH[t]);}catch(e){}
  var tb=document.querySelector('.tabs');if(window.scrollY>tb.offsetTop)window.scrollTo({top:tb.offsetTop-8});if(t==='TL')cvDraw();};
document.getElementById('tabM').dataset.tab='M';document.getElementById('tabF').dataset.tab='F';
document.getElementById('tabM').onclick=function(){showTab('M');};document.getElementById('tabF').onclick=function(){showTab('F');};

/* ---------- try-it lab ---------- */
var lab=document.createElement('div');lab.className='exm lab';lab.id='lab';lab.hidden=true;lab.setAttribute('role','dialog');lab.setAttribute('aria-modal','true');
lab.innerHTML='<div class="labbox"><div class="bkh"><h2 id="labT"></h2><button type="button" class="exx" id="labX" aria-label="Close">✕</button></div><div class="labin"><div class="labst card labcard"><div class="st" id="labSt"></div></div><div class="labc"><div class="mono" id="labId"></div><label><span id="labInL"></span><input id="labIn" type="text" maxlength="60"></label><p class="labno" id="labNo" hidden></p><label><span id="labFL"></span><select id="labF"></select></label><label><span id="labPL"></span><select id="labP"></select></label><div class="acts"><button type="button" id="labRe"></button><button type="button" id="labCp"></button></div><div class="acts"><button type="button" class="exb" id="labBk"></button></div></div></div></div>';
document.body.appendChild(lab);
var labM=null,labBack=null,labHasText=false,labCss=document.createElement('style');document.head.appendChild(labCss);
function labOpts(){var fs=document.getElementById('labF'),ps=document.getElementById('labP'),fv=fs.value,pv=ps.value;
  fs.innerHTML='<option value="">'+X('labNone')+'</option><optgroup label="'+T('secAr')+'">'+FONTS.filter(function(f){return f.k==='ar';}).map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('')+'</optgroup><optgroup label="English">'+FONTS.filter(function(f){return f.k==='en';}).map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('')+'</optgroup>';
  ps.innerHTML='<option value="">'+X('labNone')+'</option>'+(brOn()?'<option value="BR">🎨 '+X2t('brB')+'</option>':'')+CPS.map(function(p){return '<option value="'+p.id+'">'+p.id+' · '+nm(p)+'</option>';}).join('');fs.value=fv;ps.value=pv;}
function textNodes(root){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){if(!n.textContent.trim())return NodeFilter.FILTER_REJECT;var p=n.parentElement;if(p.closest('.vtag,.lbl,.ph,.xov'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}}),a=[],n;while(n=w.nextNode())a.push(n);return a;}
function swapText(root,txt){var tn=textNodes(root);if(!tn.length)return false;if(!txt)return true;
  /* groups of sibling spans each holding one word or letter (staggered motions) */
  var groups=new Map();tn.forEach(function(n){var p=n.parentElement;if(p.tagName==='SPAN'&&p.childNodes.length===1&&p.parentElement){var g=groups.get(p.parentElement)||[];g.push(p);groups.set(p.parentElement,g);}});
  var best=null;groups.forEach(function(g,par){if(g.length>=2&&(!best||g.length>best.g.length))best={par:par,g:g};});
  if(best){var letters=best.g.every(function(s){return s.textContent.trim().length<=1;}),parts=letters?Array.from(txt.replace(/\s+/g,'\u00A0')):txt.trim().split(/\s+/),tpl=best.g[0];
    best.g.forEach(function(s,i){if(i){var pr=s.previousSibling;if(pr&&pr.nodeType===3&&!pr.textContent.trim())pr.remove();s.remove();}});
    var anchor=tpl;parts.forEach(function(w,i){var s=tpl.cloneNode(false);s.textContent=w;s.style.setProperty('--i',i);if(i){anchor.after(document.createTextNode(letters?'':' '));anchor.nextSibling.after(s);}else tpl.replaceWith(s);anchor=s;});
    if(!letters)return true;}
  var big=tn.filter(function(n){return n.isConnected;}).sort(function(a,b){return b.textContent.trim().length-a.textContent.trim().length;})[0];
  if(big&&!best){big.textContent=txt;var de=big.parentElement.closest('[data-t]');if(de)de.dataset.t=txt;}return true;}
function labDraw(){var m=labM,st=document.getElementById('labSt'),t=document.getElementById('labIn').value.trim(),fid=document.getElementById('labF').value,pid=document.getElementById('labP').value;
  st.className='st'+(m.vcls?' '+m.vcls:'');st.style.cssText='--d:'+(m.d||'2.8s')+';--vf:'+(m.vf||1);
  st.innerHTML=stageHTML(m)+(m.vlab?'<span class="vtag">'+m.vlab+'</span>':'')+'<i class="ph"></i>';
  labHasText=swapText(st,t);document.getElementById('labNo').hidden=labHasText;document.getElementById('labNo').textContent=X('labNo');document.getElementById('labIn').disabled=!labHasText;
  var css='';if(fid)css+='#labSt *:not(.vtag){font-family:'+fontFam(fid)+'!important}';
  var p=pid==='BR'?brPal():pById(pid);if(p)st.style.cssText+=';--mon:'+p.bg+';--mon2:'+p.bg+';--mon-fg:'+p.tx+';--coral:'+p.ac+';--mint:'+p.hl+';color:'+p.tx;
  labCss.textContent=css;}
function labTexts(){document.getElementById('labT').textContent=X('labT');document.getElementById('labInL').textContent=X('labIn');document.getElementById('labIn').placeholder=X('labIn');document.getElementById('labFL').textContent=X('labF');document.getElementById('labPL').textContent=X('labP');document.getElementById('labRe').textContent=X('labRe');document.getElementById('labCp').innerHTML=X('labCp');
  if(labM)document.getElementById('labBk').textContent=(inBk(labM.id)?'✓ ':'＋ ')+X(inBk(labM.id)?'inB':'add');}
function openLab(id,btn,txt){labM=mById(id);if(!labM)return;labBack=btn;if(txt)document.getElementById('labIn').value=txt;labOpts();labTexts();document.getElementById('labId').textContent=labM.id+' · '+labM.en;labDraw();lab.hidden=false;document.getElementById('labX').focus({preventScroll:true});goat('try-open',id);}
function labClose(){if(lab.hidden)return;lab.hidden=true;document.getElementById('labSt').innerHTML='';labCss.textContent='';if(labBack)labBack.focus({preventScroll:true});}
var labTm=null;document.getElementById('labIn').addEventListener('input',function(){clearTimeout(labTm);labTm=setTimeout(labDraw,250);});
document.getElementById('labF').addEventListener('change',labDraw);document.getElementById('labP').addEventListener('change',labDraw);document.getElementById('labRe').addEventListener('click',labDraw);
document.getElementById('labCp').addEventListener('click',function(e){var t=document.getElementById('labIn').value.trim()||'[النص]',f=fById(document.getElementById('labF').value),p=pById(document.getElementById('labP').value);
  var p2=document.getElementById('labP').value==='BR'?null:p;var pr=labHasText?X('labPr')(labM,t,f,p2):UI[lang].pr(labM)+(p?' '+cpPr(p):'');copyText(pr,e.currentTarget,X('labCp'));});
document.getElementById('labBk').addEventListener('click',function(){togBk(labM.id);labTexts();});
document.getElementById('labX').addEventListener('click',labClose);lab.addEventListener('click',function(e){if(e.target===lab)labClose();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){labClose();bkClose();brClose();}});

/* ===== Round 2: smart search, brand kit, hooks, LUTs, backgrounds, tools (generator, covers, BPM), platform UI, share link, popular ===== */
var X2={
 ar:{tH:'الهوك',tLT:'فلاتر الألوان',tBG:'الخلفيات',tTL:'الأدوات',
  dH:'جمل جاهزة لأول 3 ثواني، كل جملة معها الحركة والصوت اللي يناسبونها. اضغط ✎ وجربها بنفسك.',
  dLT:'فلاتر تلوين للفيديو (ملفات LUT بصيغة ‎.cube) تشتغل بأي برنامج مونتاج وبـ ffmpeg. اضغط على الصورة عشان تقارن قبل وبعد.',
  dBG:'خلفيات متحركة تحطها ورا النص أو ورا الشخص، وتاخذ ألوانك تلقائياً إذا فعّلت «هويتي».',
  dTL:'أدوات تشتغل بمتصفحك: مولّد المونتاج من السكربت، صانع غلاف الريلز، وكاشف سرعة الإيقاع. ملفاتك ما تطلع من جهازك.',
  hkT:'⧉ الجملة',cmp:'↔ قبل / بعد',dlC:'⬇ ملف ‎.cube',
  brB:'هويتي',brT:'هويتي',brD:'حط ألوانك وخطك ويوزرك مرة وحدة، وكل برومبت تنسخه يطلع بهويتك. تنحفظ بجهازك بس.',
  brN:'اسمك أو اسم البراند',brH:'اليوزر',brC:['الخلفية','النص','الهوية','التظليل'],brF:'الخط',brL:'عندي شعار PNG بأرفعه مع الفيديو',brOn:'استخدم هويتي بكل البرومبتات',brSave:'حفظ',brClr:'مسح',brSaved:'انحفظت ✓',brFrom:'خذ ألوان باليتة',
  brLine:function(b,f){var p=['الألوان: الخلفية '+b.bg+'، النص '+b.tx+'، الهوية '+b.ac+'، التظليل '+b.hl];if(f)p.push('الخط '+f.id+' «'+f.n+'»');if(b.name)p.push('الاسم «'+b.name+'»');if(b.handle)p.push('اليوزر '+b.handle);if(b.logo)p.push('والشعار بأرفعه لك PNG، حطه بدل أي شعار تجريبي');return 'استخدم هويتي في كل شي: '+p.join('، ')+'.';},
  gT:'مولّد المونتاج من السكربت',gD:'الصق سكربت الفيديو (كل جملة بسطر أو بنقطة)، ويقترح لك حركة وصوت لكل جملة.',gPh:'مثال:\nتدري ليش فيديوهاتك ما تنتشر؟\nفيه 3 أشياء لازم تعرفها.\nلا تنسى تتابعني عشان يوصلك الجزء الثاني!',gGo:'✨ اقترح الحركات',gCp:'⧉ انسخ البرومبت',gBk:'＋ الكل للسلة',gAlt:'↻ غيّر',gE:'اكتب السكربت أول.',
  gHead:'هذا سكربت الفيديو. طبّق من مكتبة الموشن الحركة والصوت على كل جملة لمن أقولها، بالترتيب:',gFoot:function(c){return 'والكابشن بستايل '+c+' طول الفيديو. إذا ناقصك محتوى اسألني قبل الرندر.';},
  cT:'صانع غلاف الريلز',cD:'اكتب العنوان واختر القالب والألوان والخط، وحمّل الغلاف PNG بمقاس 1080×1920. خل الكلام بالنص عشان يبين في شبكة الحساب.',cTi:'العنوان',cSu:'سطر صغير (اختياري)',cTp:'القالب',cPh:'صورة (اختياري)',cDl:'⬇ حمّل الغلاف PNG',cDefT:'3 أخطاء تخرب فيديوهاتك',cDefS:'شوف للنهاية',
  bT:'كاشف سرعة الإيقاع (BPM)',bD:'ارفع الأغنية أو الفيديو (يتحلل بجهازك، ما ينرفع لأي مكان)، أو اضغط «دق» مع الإيقاع. بعدها انسخ البرومبت عشان الحركات تركب على النبضات.',bF:'اختر ملف صوت أو فيديو',bTap:'👆 دق مع الإيقاع',bRes:function(v){return v+' BPM · كل نبضة '+(60/v).toFixed(3)+' ثانية';},bWait:'قاعد أحلل…',bErr:'ما قدرت أقرا الملف. جرّب ملف ثاني أو استخدم «دق».',bCp:'⧉ انسخ البرومبت',
  bPr:function(v){return 'سرعة إيقاع الموسيقى '+v+' BPM (كل نبضة '+(60/v).toFixed(3)+' ثانية). خل القصات والانتقالات على النبضات، وطبّق M-217 Beat Flash و M-218 Beat Zoom على النبضات القوية (كل 4 نبضات).';},
  uiL:'واجهة',uiO:[['','بدون'],['ig','إنستغرام'],['igr','إنستغرام (عربي)'],['tt','تيك توك'],['yt','يوتيوب شورتس']],
  shB:'🔗 انسخ رابط السلة',shIn:function(n){return 'انضافت '+n+' عناصر من الرابط.';},
  pop:'🔥 الأكثر استخدام',popB:'الأكثر استخدام'},
 en:{tH:'Hooks',tLT:'LUTs',tBG:'Backgrounds',tTL:'Tools',
  dH:'Ready lines for the first 3 seconds, each with the motion and sound that fit. Press ✎ to try one.',
  dLT:'Colour-grading LUTs (.cube) that work in any editor and in ffmpeg. Tap the image to compare before and after.',
  dBG:'Animated backgrounds for behind text or behind you. They take your colours when “My brand” is on.',
  dTL:'Tools that run in your browser: script-to-edit generator, Reel cover maker and BPM detector. Your files never leave your device.',
  hkT:'⧉ Line',cmp:'↔ Before / after',dlC:'⬇ .cube file',
  brB:'My brand',brT:'My brand',brD:'Set your colours, font and handle once, and every prompt you copy carries your brand. Saved on this device only.',
  brN:'Your or your brand’s name',brH:'Handle',brC:['Background','Text','Accent','Highlight'],brF:'Font',brL:'I have a PNG logo to upload with the video',brOn:'Use my brand in every prompt',brSave:'Save',brClr:'Clear',brSaved:'Saved ✓',brFrom:'Take colours from palette',
  brLine:function(b,f){var p=['colours: background '+b.bg+', text '+b.tx+', accent '+b.ac+', highlight '+b.hl];if(f)p.push('font '+f.id+' "'+f.n+'"');if(b.name)p.push('name "'+b.name+'"');if(b.handle)p.push('handle '+b.handle);if(b.logo)p.push('and I will upload my PNG logo, use it instead of any placeholder logo');return 'Use my brand everywhere: '+p.join(', ')+'.';},
  gT:'Script-to-edit generator',gD:'Paste your video script (one sentence per line or per full stop) and get a motion and a sound for each line.',gPh:'Example:\nDo you know why your videos don’t spread?\nThere are 3 things you must know.\nFollow me for part two!',gGo:'✨ Suggest motions',gCp:'⧉ Copy prompt',gBk:'＋ All to basket',gAlt:'↻ Swap',gE:'Write the script first.',
  gHead:'This is the video script. From the Motion Library, apply the motion and sound to each line when I say it, in order:',gFoot:function(c){return 'Use caption style '+c+' for the whole video. If any content is missing, ask me before rendering.';},
  cT:'Reel cover maker',cD:'Type the title, pick a template, colours and font, and download a 1080×1920 PNG. Keep text in the middle so it shows in the profile grid.',cTi:'Title',cSu:'Small line (optional)',cTp:'Template',cPh:'Photo (optional)',cDl:'⬇ Download PNG cover',cDefT:'3 mistakes ruining your videos',cDefS:'Watch till the end',
  bT:'BPM detector',bD:'Pick a song or video (analysed on your device, never uploaded), or tap along. Then copy the prompt so motions land on the beat.',bF:'Choose an audio or video file',bTap:'👆 Tap the beat',bRes:function(v){return v+' BPM · one beat every '+(60/v).toFixed(3)+' s';},bWait:'Analysing…',bErr:'Could not read the file. Try another one or use tap.',bCp:'⧉ Copy prompt',
  bPr:function(v){return 'The music is '+v+' BPM (one beat every '+(60/v).toFixed(3)+' s). Put cuts and transitions on the beats, and apply M-217 Beat Flash and M-218 Beat Zoom on the strong beats (every 4 beats).';},
  uiL:'Overlay',uiO:[['','None'],['ig','Instagram'],['igr','Instagram (RTL)'],['tt','TikTok'],['yt','YouTube Shorts']],
  shB:'🔗 Copy basket link',shIn:function(n){return n+' items added from the link.';},
  pop:'🔥 Most used',popB:'Most used'}};
function X2t(k){return X2[lang][k];}

/* --- smart search --- */
function nrm(s){return String(s||'').toLowerCase().replace(/[ً-ْـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/([ء-يa-z])\1+/g,'$1');}
var SYNN=SYN.map(function(g){return g.map(nrm);});
function smatch(H,qq){var t=nrm(qq).trim();if(!t)return true;if(H.indexOf(t)>-1)return true;
  return t.split(/\s+/).every(function(w){if(H.indexOf(w)>-1)return true;for(var i=0;i<SYNN.length;i++){var g=SYNN[i];if(g.some(function(x){return x===w||(w.length>2&&x.indexOf(w)===0);})&&g.some(function(x){return x.length>1&&H.indexOf(x)>-1;}))return true;}return false;});}
var POP=[];
function motHay(o){if(!o.hay){var m=o.m;o.hay=nrm([m.id,m.en,m.ar,m.use,TX[m.id].ue,CAT_EN[m.c],(byId(CATS.map(function(c){return {id:c.k,ar:c.ar};}),m.c)||{}).ar,m.vlab||''].join(' '));}return o.hay;}
render=function(){var t=q.value,n=0;
  cards.forEach(function(o){var m=o.m,ok=(cur==='ALL'||m.c===cur)&&smatch(motHay(o),t)&&(ucur==='ALL'||(ucur==='fav'?FAV.indexOf(m.id)>-1:ucur==='pop'?POP.indexOf(m.base||m.id)>-1||POP.indexOf(m.id)>-1:usesOf(m).indexOf(ucur)>-1));o.el.hidden=!ok;if(ok)n++;});
  catBtns.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.k===cur);});
  document.getElementById('catTitle').textContent=catName(cur);document.getElementById('catCount').textContent=n+' / '+M.length;document.getElementById('curLbl').textContent=catName(cur)+' · '+n;document.getElementById('empty').hidden=n>0;};
fRender=function(){var t=document.getElementById('fq').value,nA=0,nE=0;
  fnts.forEach(function(o){var f=o.f;if(!o.hay)o.hay=nrm(f.id+' '+f.n+' '+f.c+' '+FCAT[f.c].join(' ')+' '+(f.k==='ar'?'عربي arabic':'english انجليزي'));var ok=(fcur==='ALL'||fcur===f.k)&&smatch(o.hay,t);o.el.hidden=!ok;if(ok){if(f.k==='ar')nA++;else nE++;}});
  document.getElementById('secAr').hidden=!nA;document.getElementById('secEn').hidden=!nE;
  document.getElementById('nAr').textContent=nA+' / '+FONTS.filter(function(f){return f.k==='ar';}).length;document.getElementById('nEn').textContent=nE+' / '+FONTS.filter(function(f){return f.k==='en';}).length;document.getElementById('fempty').hidden=(nA+nE)>0;};
document.getElementById('fq').addEventListener('input',function(){fRender();});
xFilter=function(k){if(!XC[k]||!xq(k))return;var t=xq(k).value,n=0;XC[k].forEach(function(o){if(!o.nh)o.nh=nrm(o.hay);var ok=smatch(o.nh,t)&&(ucur!=='pop'||true);o.el.hidden=!ok;if(ok)n++;});
  var e=document.querySelector('#xv-'+k+' .xe');e.hidden=n>0;e.textContent=X('empty');};

/* --- brand kit --- */
var BR=ls('ml-brand',{on:false,name:'',handle:'',bg:'#102E33',tx:'#F6EFE2',ac:'#E3643F',hl:'#FFC857',f:'FA-02',logo:false});
function brOn(){return !!BR.on;}
function brPal(){return {id:'BR',en:X2.en.brB,ar:X2.ar.brB,bg:BR.bg,tx:BR.tx,ac:BR.ac,hl:BR.hl};}
function brandLine(){return X2t('brLine')(BR,fById(BR.f));}
var copy0=copyText;
copyText=function(t,btn,label){var P=[T('cp'),X('cp'),X('copyPr'),X('bkCopy'),X('labCp'),T('fcp'),X2t('gCp'),X2t('bCp')];if(brOn()&&P.indexOf(label)>-1&&String(t).indexOf(brandLine())<0)t=t+'\n\n'+brandLine();copy0(t,btn,label);};
var brBtn=document.createElement('button');brBtn.type='button';brBtn.className='soc xbr';brBtn.id='brB';document.querySelector('.top .tools').insertBefore(brBtn,document.querySelector('.top .lang'));
var brp=document.createElement('div');brp.className='exm bkp';brp.id='brp';brp.hidden=true;brp.setAttribute('role','dialog');brp.setAttribute('aria-modal','true');
brp.innerHTML='<div class="bkbox"><div class="bkh"><h2 id="brT"></h2><button type="button" class="exx" id="brX" aria-label="Close">✕</button></div><p class="xmut" id="brD"></p>'+
 '<div class="labc"><label><span id="brNL"></span><input id="brN" type="text" maxlength="40"></label><label><span id="brHL"></span><input id="brH" type="text" maxlength="40" dir="ltr" placeholder="@"></label>'+
 '<div class="brcs">'+['bg','tx','ac','hl'].map(function(k,i){return '<label class="brc"><input type="color" id="br_'+k+'"><span class="brcl" data-i="'+i+'"></span></label>';}).join('')+'</div>'+
 '<label><span id="brPL"></span><select id="brP"></select></label><label><span id="brFL"></span><select id="brF"></select></label>'+
 '<label class="chk"><input type="checkbox" id="brLg"><span id="brLL"></span></label><label class="chk"><input type="checkbox" id="brOn"><span id="brOL"></span></label>'+
 '<div class="brpv" id="brPv"><b></b><span></span></div>'+
 '<div class="acts"><button type="button" id="brS"></button><button type="button" id="brC"></button></div></div></div>';
document.body.appendChild(brp);
function brFill(){var g=function(i){return document.getElementById(i);};g('brN').value=BR.name;g('brH').value=BR.handle;['bg','tx','ac','hl'].forEach(function(k){g('br_'+k).value=BR[k];});g('brLg').checked=!!BR.logo;g('brOn').checked=!!BR.on;g('brF').value=BR.f||'';brPv();}
function brRead(){var g=function(i){return document.getElementById(i);};BR.name=g('brN').value.trim();BR.handle=g('brH').value.trim();if(BR.handle&&BR.handle[0]!=='@')BR.handle='@'+BR.handle;['bg','tx','ac','hl'].forEach(function(k){BR[k]=g('br_'+k).value.toUpperCase();});BR.f=g('brF').value;BR.logo=g('brLg').checked;BR.on=g('brOn').checked;}
function brPv(){var g=function(i){return document.getElementById(i);},pv=g('brPv');pv.style.background=g('br_bg').value;pv.querySelector('b').style.color=g('br_tx').value;pv.querySelector('b').textContent=g('brN').value||(lang==='ar'?'عنوانك هني':'Your title');pv.querySelector('b').style.fontFamily=g('brF').value?fontFam(g('brF').value):'';
  pv.querySelector('span').style.background=g('br_ac').value;pv.querySelector('span').style.color=g('br_bg').value;pv.querySelector('span').textContent=g('brH').value||'@handle';pv.style.boxShadow='inset 0 -8px 0 '+g('br_hl').value;}
['brN','brH','br_bg','br_tx','br_ac','br_hl','brF'].forEach(function(i){document.getElementById(i).addEventListener('input',brPv);});
document.getElementById('brP').addEventListener('change',function(e){var p=pById(e.target.value);if(!p)return;['bg','tx','ac','hl'].forEach(function(k){document.getElementById('br_'+k).value=p[k];});brPv();e.target.value='';});
document.getElementById('brS').addEventListener('click',function(e){brRead();lss('ml-brand',BR);brSync();var b=e.currentTarget;b.textContent=X2t('brSaved');setTimeout(function(){b.textContent=X2t('brSave');},1400);goat('brand-save','Brand saved');});
document.getElementById('brC').addEventListener('click',function(){BR={on:false,name:'',handle:'',bg:'#102E33',tx:'#F6EFE2',ac:'#E3643F',hl:'#FFC857',f:'FA-02',logo:false};lss('ml-brand',BR);brFill();brSync();});
var brBack=null;brBtn.addEventListener('click',function(e){brBack=e.currentTarget;brFill();brp.hidden=false;document.getElementById('brX').focus({preventScroll:true});});
function brClose(){if(brp.hidden)return;brp.hidden=true;if(brBack)brBack.focus({preventScroll:true});}
document.getElementById('brX').addEventListener('click',brClose);brp.addEventListener('click',function(e){if(e.target===brp)brClose();});
function brSync(){brBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="color:'+(brOn()?BR.ac:'var(--acc2)')+'"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4-4-7.4-9-7.4z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor"/><circle cx="15" cy="7.5" r="1.2" fill="currentColor"/></svg>'+X2t('brB')+(brOn()?' ✓':'');brBtn.setAttribute('aria-label',X2t('brB'));brBtn.classList.toggle('on',brOn());bgPaint();cvDraw();}

/* --- hooks --- */
HOOKS.forEach(function(h){var m=mById(h.m);var el=mk('H',h.id,'xhk',ovHTML(h.id)+
  '<div class="st hkst" aria-hidden="true"><div class="hkt"></div></div>'+
  '<div class="meta"><div class="idrow"><b>'+h.id+'</b><span class="lp hkc"></span></div><div class="need">'+idChip(h.m)+'<span class="nchip n0 hkmn">'+(m?m.en:'')+'</span></div><div class="sxrow">'+sxChip(h.sx)+'</div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>','<button type="button" class="exb" data-tryh="'+h.id+'"></button>'])+'</div>',
  h.id+' '+h.ar+' '+h.en+' '+HKC[h.c].join(' ')+' '+h.m);
  el.dataset.c=h.c;
  el.querySelector('[data-a="n"]').onclick=function(e){copyText(lang==='ar'?h.ar:h.en,e.currentTarget,X2t('hkT'));};
  el.querySelector('[data-a="p"]').onclick=function(e){copyText(hkPr(h),e.currentTarget,X('cp'));};});
function hkPr(h){var m=mById(h.m),t=lang==='ar'?h.ar:h.en;return lang==='ar'?'ابدأ الفيديو بالهوك '+h.id+': "'+t+'" (أول 3 ثواني، نص كبير بنص الشاشة)، وطبّق عليه '+h.m+' '+(m?m.en:'')+'.'+sxLine(h.sx,'ar'):'Open the video with hook '+h.id+': "'+t+'" (first 3 seconds, big text in the centre) and apply '+h.m+' '+(m?m.en:'')+'.'+sxLine(h.sx,'en');}
document.addEventListener('click',function(e){var b=e.target.closest('[data-tryh]');if(!b)return;var h=byId(HOOKS,b.dataset.tryh);openLab(h.m,b,lang==='ar'?h.ar:h.en);});

/* --- LUTs --- */
function ltPr(l){return lang==='ar'?'طبّق فلتر الألوان '+l.id+' «'+l.ar+'» على الفيديو كامل. ملف الـ LUT: '+XBASE+'lut/'+l.id+'.cube (مثلاً بـ ffmpeg: ‎-vf lut3d='+l.id+'.cube). خل القوة 100% إلا إذا قلت غير، وطبّقه قبل النصوص والحركات عشان ما يغير ألوانها.'
  :'Apply the colour LUT '+l.id+' "'+l.en+'" to the whole video. LUT file: '+XBASE+'lut/'+l.id+'.cube (e.g. ffmpeg -vf lut3d='+l.id+'.cube). Use 100% strength unless I say otherwise, and apply it before text and motions so their colours stay true.';}
LTS.forEach(function(l){var el=mk('LT',l.id,'xlt',ovHTML(l.id)+
  '<button type="button" class="ltim" aria-pressed="false"><img loading="lazy" src="lut/'+l.id+'.jpg" alt="" width="432" height="540"><span class="ltb"></span></button>'+
  '<div class="meta"><div class="idrow"><b>'+l.id+'</b></div><div class="xn"></div><div class="use xu"></div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>','<a class="xdl" data-a="d" download href="lut/'+l.id+'.cube"></a>'])+'</div>',
  l.id+' '+l.en+' '+l.ar+' '+l.ue+' '+l.ua+' lut فلتر filter');
  var ib=el.querySelector('.ltim');ib.onclick=function(){var on=ib.getAttribute('aria-pressed')!=='true';ib.setAttribute('aria-pressed',on);ib.querySelector('img').src='lut/'+(on?'original':l.id)+'.jpg';ib.querySelector('.ltb').textContent=on?(lang==='ar'?'قبل':'Before'):(lang==='ar'?'بعد':'After');};
  el.querySelector('[data-a="n"]').onclick=function(e){copyText(l.id+' '+l.en,e.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(e){copyText(ltPr(l),e.currentTarget,X('cp'));};});

/* --- backgrounds --- */
function bgCols(){return brOn()?brPal():pById('CP-01');}
function bgPr(b){var p=bgCols();return (lang==='ar'?'حط الخلفية '+b.id+' «'+b.ar+'» ورا [النص / الشخص]: '+b.sa+' الألوان: الخلفية '+p.bg+'، الهوية '+p.ac+'، التظليل '+p.hl+'. خلها لووب بدون قطع، وخفيفة عشان ما تغطي على المحتوى.'
  :'Put background '+b.id+' "'+b.en+'" behind [the text / the person]: '+b.se+' Colours: background '+p.bg+', accent '+p.ac+', highlight '+p.hl+'. Make it a seamless loop and keep it subtle so it never covers the content.');}
BGS.forEach(function(b){var el=mk('BG',b.id,'xbg',ovHTML(b.id)+
  '<div class="st bgst bg-'+b.pv+'" style="--d:8s" aria-hidden="true"><i class="b1"></i><i class="b2"></i><i class="b3"></i><div class="bgt"></div></div>'+
  '<div class="meta"><div class="idrow"><b>'+b.id+'</b></div><div class="xn"></div><div class="use xu"></div>'+
  acts(['<button type="button" data-a="n"></button>','<button type="button" data-a="p"></button>'])+'</div>',b.id+' '+b.en+' '+b.ar+' '+b.se+' '+b.sa+' background خلفيه');
  el.querySelector('[data-a="n"]').onclick=function(e){copyText(b.id+' '+b.en,e.currentTarget,X('cn'));};
  el.querySelector('[data-a="p"]').onclick=function(e){copyText(bgPr(b),e.currentTarget,X('cp'));};});
function bgPaint(){var p=bgCols();XC.BG.forEach(function(o){var s=o.el.querySelector('.bgst');s.style.setProperty('--b',p.bg);s.style.setProperty('--a',p.ac);s.style.setProperty('--h',p.hl);s.style.setProperty('--t',p.tx);});}
if('IntersectionObserver' in window){var bio=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('off',!e.isIntersecting);});},{rootMargin:'200px'});XC.BG.forEach(function(o){bio.observe(o.el);});XC.H.forEach(function(o){bio.observe(o.el);});}

/* --- tools tab --- */
var TL=document.getElementById('xv-TL');
TL.insertAdjacentHTML('beforeend','<div class="tlgrid">'+
 '<section class="box tlb" id="gen"><h2 id="gT"></h2><p id="gD"></p><textarea id="gIn" rows="6"></textarea><div class="xact"><button type="button" class="btn" id="gGo"></button></div><p class="xmut" id="gE" hidden></p><ol id="gOut" class="gout"></ol><div class="acts" id="gActs" hidden><button type="button" id="gCp"></button><button type="button" id="gBk"></button></div></section>'+
 '<section class="box tlb" id="cov"><h2 id="cT"></h2><p id="cD"></p><div class="covin"><div class="covc"><canvas id="cvC" width="1080" height="1920"></canvas></div><div class="labc">'+
  '<label><span id="cTiL"></span><input id="cTi" type="text" maxlength="70"></label><label><span id="cSuL"></span><input id="cSu" type="text" maxlength="50"></label>'+
  '<label><span id="cTpL"></span><select id="cTp"></select></label><label><span id="cPL"></span><select id="cP"></select></label><label><span id="cFL"></span><select id="cF"></select></label>'+
  '<label><span id="cPhL"></span><input id="cPh" type="file" accept="image/*"></label><div class="xact"><button type="button" class="btn" id="cDl"></button></div></div></div></section>'+
 '<section class="box tlb" id="bpm"><h2 id="bT"></h2><p id="bD"></p><label class="bfile"><span id="bFL"></span><input id="bF" type="file" accept="audio/*,video/*"></label><button type="button" class="btn ghost bTap" id="bTap"></button><div class="bres" id="bRes" aria-live="polite"></div><div class="acts"><button type="button" id="bCp" disabled></button></div></section>'+
 '</div>');
/* generator */
var gRows=[];
function gOpts(t){var o=[];GENR.forEach(function(r){if(r[0].test(t))o.push([r[1],r[2]]);});GENDEF.forEach(function(d){if(!o.some(function(x){return x[0]===d[0];}))o.push(d);});return o;}
function gSplit(s){return s.split(/\n+/).map(function(l){return l.match(/[^.!؟?。]+[.!؟?。]*/g)||[];}).reduce(function(a,b){return a.concat(b);},[]).map(function(x){return x.trim();}).filter(function(x){return x.replace(/[.!؟?\s]/g,'').length>1;}).slice(0,40);}
function gName(id){var p=id.split('-')[0];if(p==='M'){var m=mById(id);return m?m.en:'';}if(p==='EL'){var e=byId(ELS,id);return e?nm(e):'';}return '';}
function gDraw(){var ol=document.getElementById('gOut');ol.innerHTML='';gRows.forEach(function(r,i){var o=r.o[r.i],li=document.createElement('li');
  li.innerHTML='<p class="gl"></p><div class="gch">'+idChip(o[0])+'<span class="nchip n0">'+esc(gName(o[0]))+'</span>'+sxChip(o[1])+'<button type="button" class="nchip galt" data-gi="'+i+'">'+X2t('gAlt')+'</button></div>';li.querySelector('.gl').textContent=r.t;ol.appendChild(li);});
  document.getElementById('gActs').hidden=!gRows.length;}
document.getElementById('gOut').addEventListener('click',function(e){var b=e.target.closest('[data-gi]');if(!b)return;var r=gRows[+b.dataset.gi];r.i=(r.i+1)%r.o.length;gDraw();});
document.getElementById('gGo').addEventListener('click',function(){var s=document.getElementById('gIn').value.trim(),e=document.getElementById('gE');if(!s){e.hidden=false;e.textContent=X2t('gE');return;}e.hidden=true;
  var L=gSplit(s),seen={};gRows=L.map(function(t,i){var o=gOpts(t),k=0;if(!GENR.some(function(r){return r[0].test(t);})){k=i%GENDEF.length;var di=o.map(function(x){return x[0];}).indexOf(GENDEF[k][0]);k=di<0?0:di;}return {t:t,o:o,i:k};});gDraw();goat('gen-run','Generator used');});
function gPr(){var ar=lang==='ar',L=[X2t('gHead')];gRows.forEach(function(r,n){var o=r.o[r.i],s=sxById(o[1]);L.push((n+1)+'. "'+r.t+'" ← '+o[0]+' '+gName(o[0])+(s?(ar?' + الصوت ':' + sound ')+s.id+' ('+XBASE+sxUrl(s)+')':''));});L.push(X2t('gFoot')(brOn()?'CS-01':'CS-01'));return L.join('\n');}
document.getElementById('gCp').addEventListener('click',function(e){copyText(gPr(),e.currentTarget,X2t('gCp'));});
document.getElementById('gBk').addEventListener('click',function(){gRows.forEach(function(r){var id=r.o[r.i][0];if(!inBk(id))BK.push(id);});lss('ml-basket',BK);syncBtns();bkRender();bkBump();});
/* cover maker */
var cvImg=null,cvTm=null;
document.getElementById('cPh').addEventListener('change',function(e){var f=e.target.files[0];if(!f){cvImg=null;cvDraw();return;}var u=URL.createObjectURL(f),im=new Image();im.onload=function(){cvImg=im;cvDraw();};im.src=u;});
['cTi','cSu','cTp','cP','cF'].forEach(function(i){document.getElementById(i).addEventListener('input',function(){clearTimeout(cvTm);cvTm=setTimeout(cvDraw,120);});});
function cvPal(){var v=document.getElementById('cP').value;return v==='BR'?brPal():(pById(v)||pById('CP-01'));}
function wrapT(c,t,maxW){var w=t.split(/\s+/),L=[],cur='';w.forEach(function(x){var tr=cur?cur+' '+x:x;if(c.measureText(tr).width>maxW&&cur){L.push(cur);cur=x;}else cur=tr;});if(cur)L.push(cur);return L;}
function fitT(c,t,fam,maxW,maxH,start){var s=start;for(;s>40;s-=6){c.font='800 '+s+'px '+fam;var L=wrapT(c,t,maxW);if(L.length*s*1.18<=maxH)return {s:s,L:L};}c.font='800 40px '+fam;return {s:40,L:wrapT(c,t,maxW)};}
function cvDraw(){var cv=document.getElementById('cvC');if(!cv||document.getElementById('xv-TL').hidden)return;var c=cv.getContext('2d'),W=1080,H=1920,p=cvPal(),fid=document.getElementById('cF').value||'FA-02',fam=fontFam(fid).replace('var(--f-ar)','Alexandria,sans-serif');
  var t=document.getElementById('cTi').value.trim()||X2t('cDefT'),sub=document.getElementById('cSu').value.trim(),tp=document.getElementById('cTp').value||'CV-01',rtl=/[؀-ۿ]/.test(t),hd=brOn()&&BR.handle?BR.handle:'@alansari.tech';
  document.fonts.load('800 80px '+fam).then(function(){draw();},function(){draw();});
  function draw(){c.save();c.clearRect(0,0,W,H);c.direction=rtl?'rtl':'ltr';c.textBaseline='alphabetic';c.fillStyle=p.bg;c.fillRect(0,0,W,H);
    function photo(x,y,w,h){if(!cvImg){var g=c.createLinearGradient(0,y,0,y+h);g.addColorStop(0,p.ac);g.addColorStop(1,p.bg);c.fillStyle=g;c.fillRect(x,y,w,h);return;}var r=Math.max(w/cvImg.width,h/cvImg.height),iw=cvImg.width*r,ih=cvImg.height*r;c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.drawImage(cvImg,x+(w-iw)/2,y+(h-ih)/2,iw,ih);c.restore();}
    function lines(o,x,y,col,align){c.fillStyle=col;c.textAlign=align||'center';c.font='800 '+o.s+'px '+fam;o.L.forEach(function(l,i){c.fillText(l,x,y+i*o.s*1.18);});return y+o.L.length*o.s*1.18;}
    function small(s,x,y,col,size,align){c.save();c.direction=/[\u0600-\u06FF]/.test(s)?'rtl':'ltr';c.fillStyle=col;c.textAlign=align||'center';c.font='700 '+(size||44)+'px '+fam;c.fillText(s,x,y);c.restore();}
    var o,y;
    if(tp==='CV-01'){c.fillStyle=p.ac;c.fillRect(140,520,800,14);o=fitT(c,t,fam,860,620,170);y=lines(o,W/2,640+o.s*.85,p.tx);if(sub){c.fillStyle=p.hl;var sw=Math.min(820,c.measureText(sub).width+80);c.font='700 48px '+fam;sw=Math.min(860,c.measureText(sub).width+80);c.fillRect((W-sw)/2,y+40,sw,86);small(sub,W/2,y+100,p.bg,48);}small(hd,W/2,1560,p.tx,40);}
    else if(tp==='CV-02'){photo(0,0,W,H);var g=c.createLinearGradient(0,800,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.85)');c.fillStyle=g;c.fillRect(0,800,W,H-800);o=fitT(c,t,fam,900,420,150);c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=20;y=lines(o,W/2,1080,'#fff');c.shadowBlur=0;if(sub){c.fillStyle=p.ac;c.font='700 46px '+fam;var w2=c.measureText(sub).width+70;c.beginPath();if(c.roundRect)c.roundRect((W-w2)/2,y+30,w2,84,42);else c.rect((W-w2)/2,y+30,w2,84);c.fill();small(sub,W/2,y+87,'#fff',46);}}
    else if(tp==='CV-03'){var mm=t.match(/[0-9٠-٩]+/),num=mm?mm[0]:'3',rest=t.replace(num,'').trim()||t;c.textAlign='center';c.fillStyle=p.ac;c.font='900 560px '+fam;c.fillText(num,W/2,1040);o=fitT(c,rest,fam,880,420,120);y=lines(o,W/2,1180,p.tx);if(sub)small(sub,W/2,y+60,p.hl,48);small(hd,W/2,1620,p.tx,38);}
    else if(tp==='CV-04'){c.textAlign='center';c.fillStyle=p.ac;c.globalAlpha=.22;c.font='900 1200px '+fam;c.fillText(rtl?'؟':'?',W/2,1450);c.globalAlpha=1;o=fitT(c,t,fam,860,560,150);y=lines(o,W/2,820,p.tx);c.fillStyle=p.hl;c.fillRect(W/2-90,y+10,180,14);if(sub)small(sub,W/2,y+110,p.tx,46);}
    else if(tp==='CV-05'){c.fillStyle=p.ac;c.fillRect(0,0,W,1000);o=fitT(c,t,fam,880,520,150);lines(o,W/2,1000-o.L.length*o.s*1.18+o.s*.6-60,p.bg);if(sub){o=fitT(c,sub,fam,880,360,110);c.font='800 '+o.s+'px '+fam;lines(o,W/2,1130+o.s*.8,p.tx);}small(hd,W/2,1620,p.hl,40);}
    else{var x=rtl?W-130:130,al=rtl?'right':'left';small(hd,x,420,p.ac,40,al);o=fitT(c,t,fam,820,700,140);c.font='800 '+o.s+'px '+fam;y=lines(o,x,560+o.s,p.tx,al);c.fillStyle=p.hl;c.fillRect(rtl?W-130-160:130,y+10,160,10);if(sub)small(sub,x,y+100,p.tx,44,al);}
    c.restore();}}
document.getElementById('cDl').addEventListener('click',function(){var cv=document.getElementById('cvC');try{var a=document.createElement('a');a.download='cover-'+(document.getElementById('cTp').value||'CV-01')+'.png';a.href=cv.toDataURL('image/png');document.body.appendChild(a);a.click();a.remove();goat('cover-download','Cover downloaded');}catch(e){}});
/* BPM */
var bpmV=0,taps=[];
function bpmShow(v){bpmV=v;var r=document.getElementById('bRes');r.textContent=v?X2t('bRes')(v):'';document.getElementById('bCp').disabled=!v;}
document.getElementById('bTap').addEventListener('click',function(){var n=performance.now();if(taps.length&&n-taps[taps.length-1]>2000)taps=[];taps.push(n);if(taps.length>9)taps.shift();if(taps.length>=3){var d=(taps[taps.length-1]-taps[0])/(taps.length-1);bpmShow(Math.round(60000/d));}});
document.getElementById('bF').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var r=document.getElementById('bRes');r.textContent=X2t('bWait');
  f.arrayBuffer().then(function(buf){var AC=window.AudioContext||window.webkitAudioContext,ac=new AC();return ac.decodeAudioData(buf).then(function(a){ac.close&&ac.close();return a;});}).then(function(a){bpmShow(detectBpm(a));goat('bpm-file','BPM detected');}).catch(function(){r.textContent=X2t('bErr');document.getElementById('bCp').disabled=true;});});
function detectBpm(a){var sr=a.sampleRate,len=Math.min(a.length,sr*60),ch=a.numberOfChannels,hop=512,nF=Math.floor(len/hop),env=new Float32Array(nF),prev=0;
  for(var i=0;i<nF;i++){var s=0;for(var c=0;c<ch;c++){var d=a.getChannelData(c);for(var j=i*hop;j<i*hop+hop;j++)s+=d[j]*d[j];}var e=Math.sqrt(s/(hop*ch));env[i]=Math.max(0,e-prev);prev=e;}
  var fps=sr/hop,best=0,bv=0;for(var bpm=70;bpm<=180;bpm+=.5){var lag=fps*60/bpm,sc=0,l0=Math.floor(lag),fr=lag-l0;for(var k=0;k+l0+1<nF;k++)sc+=env[k]*(env[k+l0]*(1-fr)+env[k+l0+1]*fr);sc*=1+0.08*(bpm>=90&&bpm<=140);if(sc>bv){bv=sc;best=bpm;}}
  return Math.round(best);}
document.getElementById('bCp').addEventListener('click',function(e){if(bpmV)copyText(X2t('bPr')(bpmV),e.currentTarget,X2t('bCp'));});

/* --- platform UI overlay --- */
var UISVG={
 ig:'<svg viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/><g fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"><path d="M368 288c-6-7-18-7-18 4 0 9 18 18 18 18s18-9 18-18c0-11-12-11-18-4z"/><path d="M356 336h24v18h-14l-10 8z"/><path d="M354 384l28-10-10 28-5-12z"/></g><g fill="#fff"><circle cx="368" cy="425" r="2.5"/><circle cx="360" cy="425" r="2.5"/><circle cx="376" cy="425" r="2.5"/><circle cx="26" cy="440" r="12" fill="#ccc"/><rect x="46" y="434" width="80" height="11" rx="5"/><rect x="134" y="432" width="52" height="16" rx="5" fill="none" stroke="#fff" stroke-width="2"/><rect x="16" y="462" width="240" height="8" rx="4" opacity=".85"/><rect x="16" y="478" width="150" height="8" rx="4" opacity=".6"/></g></svg>',
 tt:'<svg viewBox="0 0 400 500"><defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset=".65" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient></defs><rect width="400" height="500" fill="url(#g2)"/><g fill="#fff"><circle cx="370" cy="210" r="17" fill="#ddd" stroke="#fff" stroke-width="2"/><circle cx="370" cy="228" r="7" fill="#FE2C55"/><path d="M370 268c-7-8-21-8-21 4 0 10 21 21 21 21s21-11 21-21c0-12-14-12-21-4z"/><path d="M352 312h36v22h-20l-10 9z"/><path d="M358 358h24v30l-12-9-12 9z"/><path d="M352 414l24-12v8c10 0 14 6 14 14-4-6-8-6-14-6v8z"/><circle cx="370" cy="470" r="14" fill="#333" stroke="#777" stroke-width="5"/><rect x="16" y="436" width="90" height="11" rx="5"/><rect x="16" y="456" width="250" height="8" rx="4" opacity=".85"/><rect x="16" y="472" width="170" height="8" rx="4" opacity=".6"/></g></svg>',
 yt:'<svg viewBox="0 0 400 500"><defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset=".65" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient></defs><rect width="400" height="500" fill="url(#g3)"/><g fill="#fff"><path d="M358 248h8v20h-8zM370 248h16l-4 20h-12z"/><path d="M358 300h8v-20h-8zM370 300h16l-4-20h-12z" opacity=".9"/><path d="M354 322h32v22h-18l-10 8z"/><path d="M356 380l24-12v8c10 0 14 6 14 14-4-6-8-6-14-6v8z"/><circle cx="370" cy="430" r="12" fill="none" stroke="#fff" stroke-width="3"/><circle cx="370" cy="472" r="13" fill="#ddd"/><circle cx="26" cy="440" r="12" fill="#ccc"/><rect x="46" y="434" width="78" height="11" rx="5"/><rect x="132" y="428" width="70" height="24" rx="12"/><rect x="16" y="464" width="250" height="8" rx="4" opacity=".85"/><rect x="16" y="480" width="160" height="8" rx="4" opacity=".6"/></g></svg>'};
var uiCur='';try{uiCur=localStorage.getItem('ml-ui')||'';}catch(e){}
var uiSel=document.createElement('label');uiSel.className='uisel';uiSel.innerHTML='<span></span><select id="uiS"></select>';document.querySelector('#motionsView .mainh').appendChild(uiSel);
function uiApply(){var cls=uiCur==='igr'?'ig':uiCur;document.querySelectorAll('.xuiov').forEach(function(o){o.remove();});if(!cls)return;
  var hosts=cards.map(function(o){return o.el;}).concat(XC.CS.map(function(o){return o.el;}),XC.EL.map(function(o){return o.el;}),XC.H.map(function(o){return o.el;}),[document.querySelector('.labst')]);
  hosts.forEach(function(h){if(!h)return;var st=h.querySelector('.st');if(!st)return;var d=document.createElement('div');d.className='xuiov'+(uiCur==='igr'?' mir':'')+(h.classList.contains('labst')?' inlab':'');d.setAttribute('aria-hidden','true');d.innerHTML=UISVG[cls];st.after(d);});}
document.getElementById('uiS').addEventListener('change',function(e){uiCur=e.target.value;try{localStorage.setItem('ml-ui',uiCur);}catch(_){}uiApply();});

/* --- share basket link --- */
var bkf=document.querySelector('#bkp .bkf');var shb=document.createElement('button');shb.type='button';shb.className='btn ghost';shb.id='bkSh';bkf.appendChild(shb);
shb.addEventListener('click',function(e){copyText(BASE_URL+'#b='+BK.join(','),e.currentTarget,X2t('shB'));goat('basket-share','Basket link copied');});
var shMsg=document.createElement('p');shMsg.className='xmut';shMsg.id='bkMsg';shMsg.hidden=true;document.querySelector('#bkp .bkh').after(shMsg);
function bkFromHash(){var h=location.hash;if(h.indexOf('#b=')!==0)return false;var ids=decodeURIComponent(h.slice(3)).split(',').map(function(s){return s.trim().toUpperCase();}).filter(function(id){return !!itemOf(id);}),n=0;
  ids.forEach(function(id){if(!inBk(id)){BK.push(id);n++;}});lss('ml-basket',BK);syncBtns();bkRender();try{history.replaceState(null,'',location.pathname+location.search+'#motions');}catch(e){}
  shMsg.textContent=X2t('shIn')(n);shMsg.hidden=false;pan.hidden=false;return true;}

/* --- popular (filled from analytics by tools/popular.py) --- */
document.addEventListener('click',function(e){var b=e.target.closest('[data-a="p"]');if(!b)return;var c=b.closest('[data-id]');if(c)goat('copy/'+c.dataset.id,'Prompt copied '+c.dataset.id);});
cards.forEach(function(o){o.el.dataset.id=o.m.id;});
function popApply(){document.querySelectorAll('.xpop').forEach(function(x){x.remove();});var all=cards.map(function(o){return [o.m.base||o.m.id,o.el,o.m.id];});['CP','CS','EL','R','SX','H','LT','BG'].forEach(function(k){XC[k].forEach(function(o){all.push([o.id,o.el,o.id]);});});
  all.forEach(function(a){if(POP.indexOf(a[2])>-1||(a[0]!==a[2]&&false)){var s=document.createElement('span');s.className='xpop';s.textContent='🔥 '+X2t('popB');a[1].appendChild(s);}});ucRender();}
if(location.protocol!=='file:')fetch('popular.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():null;}).then(function(j){if(j&&j.ids&&j.ids.length){POP=j.ids;popApply();}}).catch(function(){});

/* ---------- what's new + install ---------- */
var wn=document.createElement('div');wn.className='wnew';wn.innerHTML='<p id="wnT"></p><button type="button" class="btn ghost" id="instB" hidden></button><p class="ios" id="instI" hidden></p>';
document.querySelector('.tabs').before(wn);
var dfr=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();dfr=e;document.getElementById('instB').hidden=false;});
document.getElementById('instB').addEventListener('click',function(){if(!dfr)return;dfr.prompt();dfr.userChoice.then(function(c){if(c&&c.outcome==='accepted')goat('pwa-install','Installed');dfr=null;document.getElementById('instB').hidden=true;});});
var ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.navigator.standalone;
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});

/* ---------- language ---------- */
function xLang(){document.querySelectorAll('.tabs button[data-tab]').forEach(function(b){var k=b.dataset.tab;if(k==='M'||k==='F')return;b.querySelector('.tl').textContent=X('t'+k)||X2t('t'+k);b.querySelector('small').textContent=XC[k]?XC[k].length:'';b.querySelector('.nb').textContent=X('nb');});
  VIEWS.forEach(function(v){var s=document.getElementById('xv-'+v[0]);s.querySelector('.xt').textContent=X('t'+v[0])||X2t('t'+v[0]);s.querySelector('.xd').textContent=X('d'+v[0])||X2t('d'+v[0]);var i=s.querySelector('.xq');i.placeholder=X('q');i.setAttribute('aria-label',X('q'));xFilter(v[0]);});
  XC.CP.forEach(function(o){var p=pById(o.id),e=o.el;e.querySelector('.xn').textContent=nm(p);e.querySelector('.xu').textContent=lang==='ar'?p.ua:p.ue;e.querySelector('.cp1').textContent=lang==='ar'?'عنوان':'Title';e.querySelector('.cp2').textContent=lang==='ar'?'مهم':'key';
    e.querySelectorAll('.hx span').forEach(function(s){s.textContent=X(s.parentElement.dataset.k);});e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');});
  XC.CS.forEach(function(o){var c=byId(CSS_,o.id),e=o.el;e.querySelector('.xn').textContent=nm(c);e.querySelector('.xu').textContent=lang==='ar'?c.ua:c.ue;e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');});
  csRuns.forEach(function(r){r.i=0;csPaint(r);});
  XC.EL.forEach(function(o){var x=byId(ELS,o.id),e=o.el,L=ELTX[lang];e.querySelector('.xn').textContent=nm(x);e.querySelector('.xu').textContent=lang==='ar'?x.ua:x.ue;
    e.querySelector('.xnd').innerHTML=x.nd.length?'<span class="nchip nt">✎ '+(lang==='ar'?x.nd[0]:x.nd[1])+'</span>':'<span class="nchip n0">'+(lang==='ar'?'بدون محتوى':'Nothing to provide')+'</span>';
    e.querySelector('.sxrow').innerHTML=sxChip(x.sx);
    Object.keys(L).forEach(function(k){e.querySelectorAll('.t-'+k).forEach(function(s){s.textContent=L[k];});});
    e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');});
  XC.R.forEach(function(o){var r=byId(RCS,o.id),e=o.el;e.querySelector('.xn').textContent=nm(r);e.querySelector('.xu').textContent=lang==='ar'?r.ua:r.ue;
    e.querySelector('.rst').innerHTML=r.st.map(function(s){return '<li><span class="rt mono">'+esc(rTime(s[0]))+'</span><span class="rx">'+esc(lang==='ar'?s[2]:s[1])+'</span><span class="rids">'+s[3].map(idChip).join('')+'</span></li>';}).join('');
    e.querySelector('[data-a="p"]').innerHTML=X('copyPr');e.querySelector('[data-a="all"]').textContent=X('addAll');});
  XC.SX.forEach(function(o){var s=sxById(o.id),e=o.el;e.querySelector('.xn').textContent=nm(s);e.querySelector('.sxty').textContent=SXT[s.ty][lang==='ar'?1:0];e.querySelector('.xu').textContent=sxUse[s.id]?X('usedBy')(sxUse[s.id]):'';
    var bb=e.querySelector('.sxbig');if(!bb.classList.contains('on'))bb.innerHTML=X('play');e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');e.querySelector('[data-a="d"]').textContent=X('dl');});
  cards.forEach(function(o){o.sx.innerHTML=sxChip(sxOf(o.m));});
  XC.H.forEach(function(o){var h=byId(HOOKS,o.id),e=o.el,pp=brOn()?brPal():(pById({q:'CP-01',n:'CP-06',w:'CP-15',s:'CP-04',st:'CP-11',r:'CP-12'}[h.c]));
    var st=e.querySelector('.hkst');st.style.background=pp.bg;var tt=e.querySelector('.hkt');tt.textContent=lang==='ar'?h.ar:h.en;tt.style.color=pp.tx;tt.style.setProperty('--a',pp.ac);tt.style.fontFamily=fontFam(brOn()&&BR.f?BR.f:'FA-02');
    e.querySelector('.hkc').textContent=HKC[h.c][lang==='ar'?1:0];e.querySelector('[data-a="n"]').innerHTML=X2t('hkT');e.querySelector('[data-a="p"]').innerHTML=X('cp');e.querySelector('[data-tryh]').textContent='✎ '+X('try');e.querySelector('.sxrow').innerHTML=sxChip(h.sx);});
  XC.LT.forEach(function(o){var l=byId(LTS,o.id),e=o.el;e.querySelector('.xn').textContent=nm(l);e.querySelector('.xu').textContent=lang==='ar'?l.ua:l.ue;var ib=e.querySelector('.ltim');ib.querySelector('.ltb').textContent=ib.getAttribute('aria-pressed')==='true'?(lang==='ar'?'قبل':'Before'):(lang==='ar'?'بعد':'After');ib.setAttribute('aria-label',X2t('cmp'));e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');e.querySelector('[data-a="d"]').textContent=X2t('dlC');});
  XC.BG.forEach(function(o){var b=byId(BGS,o.id),e=o.el;e.querySelector('.xn').textContent=nm(b);e.querySelector('.xu').textContent=lang==='ar'?b.sa:b.se;e.querySelector('.bgt').textContent=brOn()&&BR.name?BR.name:(lang==='ar'?'عنوانك هني':'Your title');e.querySelector('[data-a="n"]').innerHTML=X('cn');e.querySelector('[data-a="p"]').innerHTML=X('cp');});
  bgPaint();
  ['gT','gD','cT','cD','bT','bD'].forEach(function(i){document.getElementById(i).textContent=X2t(i);});document.getElementById('gIn').placeholder=X2t('gPh');document.getElementById('gGo').textContent=X2t('gGo');document.getElementById('gCp').innerHTML=X2t('gCp');document.getElementById('gBk').textContent=X2t('gBk');if(gRows.length)gDraw();
  ['cTi','cSu','cTp','cPh'].forEach(function(i){document.getElementById(i+'L').textContent=X2t(i);});document.getElementById('cPL').textContent=X('pal');document.getElementById('cFL').textContent=X('font');document.getElementById('cDl').textContent=X2t('cDl');document.getElementById('cTi').placeholder=X2t('cDefT');document.getElementById('cSu').placeholder=X2t('cDefS');
  var ct=document.getElementById('cTp'),cv=ct.value;ct.innerHTML=CVS.map(function(c){return '<option value="'+c.id+'">'+c.id+' · '+nm(c)+'</option>';}).join('');ct.value=cv||'CV-01';
  var cp2=document.getElementById('cP'),pv=cp2.value;cp2.innerHTML=(brOn()?'<option value="BR">🎨 '+X2t('brB')+'</option>':'')+CPS.map(function(p){return '<option value="'+p.id+'">'+p.id+' · '+nm(p)+'</option>';}).join('');cp2.value=pv&&(pv!=='BR'||brOn())?pv:(brOn()?'BR':'CP-01');
  var cf=document.getElementById('cF'),fv2=cf.value;cf.innerHTML=FONTS.map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('');cf.value=fv2||(brOn()&&BR.f?BR.f:'FA-02');cvDraw();
  document.getElementById('bFL').textContent=X2t('bF');document.getElementById('bTap').textContent=X2t('bTap');document.getElementById('bCp').innerHTML=X2t('bCp');if(bpmV)bpmShow(bpmV);
  uiSel.querySelector('span').textContent=X2t('uiL');var us=document.getElementById('uiS');us.innerHTML=X2t('uiO').map(function(o){return '<option value="'+o[0]+'">'+o[1]+'</option>';}).join('');us.value=uiCur;
  document.getElementById('bkSh').textContent=X2t('shB');
  ['brT','brD'].forEach(function(i){document.getElementById(i).textContent=X2t(i);});document.getElementById('brNL').textContent=X2t('brN');document.getElementById('brHL').textContent=X2t('brH');document.querySelectorAll('.brcl').forEach(function(s){s.textContent=X2t('brC')[+s.dataset.i];});
  document.getElementById('brPL').textContent=X2t('brFrom');var bp=document.getElementById('brP');bp.innerHTML='<option value="">—</option>'+CPS.map(function(p){return '<option value="'+p.id+'">'+p.id+' · '+nm(p)+'</option>';}).join('');
  document.getElementById('brFL').textContent=X2t('brF');var bf=document.getElementById('brF'),bfv=bf.value||BR.f;bf.innerHTML=FONTS.map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('');bf.value=bfv;
  document.getElementById('brLL').textContent=X2t('brL');document.getElementById('brOL').textContent=X2t('brOn');document.getElementById('brS').textContent=X2t('brSave');document.getElementById('brC').textContent=X2t('brClr');brSync();
  ucRender();bkRender();syncBtns();labOpts();labTexts();
  document.getElementById('wnT').innerHTML=X('wn');document.getElementById('instB').textContent=X('inst');var ii=document.getElementById('instI');ii.textContent=X('instIos');ii.hidden=!ios;}
var _al2=applyLang;applyLang=function(){_al2();xLang();};
xLang();render();
var hh=(location.hash||'').slice(1);if(!bkFromHash())for(var k in HASH)if(HASH[k]===hh&&k!=='M')showTab(k);uiApply();
window.addEventListener('hashchange',function(){if(bkFromHash())return;var h=location.hash.slice(1);for(var k in HASH)if(HASH[k]===h)showTab(k);});

/* ---------- library file additions ---------- */
function libSections(ar){var L=[];
  L.push(ar?'## الألوان (PALETTES)':'## PALETTES — Colour palettes','',ar?'- لمن المستخدم يذكر CP-xx استخدم هالألوان للنصوص والعناصر والكابشن بدل ألوان الهوية الافتراضية.':'- When the user names CP-xx, use these colours for text, elements and captions instead of the default brand colours.','',
   '| ID | '+(ar?'الاسم':'Name')+' | '+(ar?'الخلفية':'Background')+' | '+(ar?'النص':'Text')+' | '+(ar?'الهوية':'Accent')+' | '+(ar?'التظليل':'Highlight')+' | '+(ar?'متى':'Use')+' |','|---|---|---|---|---|---|---|');
  CPS.forEach(function(p){L.push('| '+p.id+' | '+p.en+' ('+p.ar+') | '+p.bg+' | '+p.tx+' | '+p.ac+' | '+p.hl+' | '+(ar?p.ua:p.ue)+' |');});L.push('');
  L.push(ar?'## ستايلات الكابشن (CAPSTYLES)':'## CAPSTYLES — Caption styles','',ar?'- كل ستايل CS-xx يحدد حركة الكابشن والخط والألوان والمكان وعدد الكلمات. طبّقه على كل الكابشن إلا إذا المستخدم قال غير.':'- Each CS-xx sets the caption motion, font, colours, position and words per line. Apply it to all captions unless told otherwise.','');
  CSS_.forEach(function(c){var p=pById(c.p),f=fById(c.f),L2=CS_LOOK[c.look];L.push('### '+c.id+' · '+c.en+' ('+c.ar+')','- '+(ar?'**متى:** ':'**When:** ')+(ar?c.ua:c.ue),'- '+(ar?'**الحركة:** ':'**Motion:** ')+c.m+' · '+(ar?'**الخط:** ':'**Font:** ')+c.f+' '+(f?f.n:'')+' · '+(ar?'**الألوان:** ':'**Colours:** ')+c.p+' ('+p.tx+', '+p.ac+', '+p.hl+')','- '+(ar?'**المكان:** ':'**Position:** ')+XUI[ar?'ar':'en'].pos[c.pos]+' · '+XUI[ar?'ar':'en'].wpl(c.w),'- '+(ar?'**الشكل:** ':'**Look:** ')+L2[ar?1:0],'');});
  L.push(ar?'## العناصر (ELEMENTS)':'## ELEMENTS — Ready elements','');
  ELS.forEach(function(e){L.push('### '+e.id+' · '+e.en+' ('+e.ar+')','- '+(ar?'**متى:** ':'**When:** ')+(ar?e.ua:e.ue),'- '+(ar?'**المحتوى المطلوب من المستخدم:** ':'**Content the user must provide:** ')+(e.nd.length?(ar?e.nd[0]:e.nd[1]):(ar?'ولا شي':'nothing')),'- '+(ar?'**الوصف:** ':'**Spec:** ')+(ar?e.sa:e.se),'- '+(ar?'**الصوت:** ':'**Sound:** ')+e.sx,'');});
  L.push(ar?'## القوالب (RECIPES)':'## RECIPES — Full Reel recipes','',ar?'- لمن المستخدم يذكر R-xx طبّق كل خطوات القالب بالترتيب، بالخط والألوان والكابشن المحددة. ارجع لكل رقم بملفه.':'- When the user names R-xx, apply every step in order with the given font, colours and caption style. Look up each ID in its file.','');
  RCS.forEach(function(r){L.push('### '+r.id+' · '+r.en+' ('+r.ar+')','- '+(ar?'**متى:** ':'**When:** ')+(ar?r.ua:r.ue),'- '+(ar?'**الخط:** ':'**Font:** ')+r.f+' · '+(ar?'**الألوان:** ':'**Colours:** ')+r.p+' · '+(ar?'**الكابشن:** ':'**Captions:** ')+r.cs);
    r.st.forEach(function(s){L.push('- '+(ar?(XUI.ar.rt[s[0]]||s[0]):s[0])+': '+(ar?s[2]:s[1])+' ('+s[3].join(', ')+')');});L.push('');});
  L.push(ar?'## الهوك (HOOKS)':'## HOOKS — Opening lines','',ar?'- H-xx جملة للثلاث ثواني الأولى: اكتبها نص كبير بنص الشاشة وطبّق عليها الحركة والصوت المكتوبين.':'- H-xx is a line for the first 3 seconds: show it as big centred text with the listed motion and sound.','','| ID | '+(ar?'النوع':'Type')+' | '+(ar?'الجملة':'Line')+' | '+(ar?'الحركة':'Motion')+' | '+(ar?'الصوت':'Sound')+' |','|---|---|---|---|---|');
  HOOKS.forEach(function(h){L.push('| '+h.id+' | '+HKC[h.c][ar?1:0]+' | '+(ar?h.ar:h.en)+' | '+h.m+' | '+h.sx+' |');});L.push('');
  L.push(ar?'## فلاتر الألوان (LUTS)':'## LUTS — Colour grading','',ar?'- LT-xx ملف LUT بصيغة ‎.cube (33×33×33). طبّقه على الفيديو كامل قبل النصوص والحركات (ffmpeg: ‎-vf lut3d=file.cube).':'- LT-xx is a .cube LUT (33x33x33). Apply it to the whole video before text and motions (ffmpeg: -vf lut3d=file.cube).','','| ID | '+(ar?'الاسم':'Name')+' | '+(ar?'متى':'Use')+' | URL |','|---|---|---|---|');
  LTS.forEach(function(l){L.push('| '+l.id+' | '+l.en+' ('+l.ar+') | '+(ar?l.ua:l.ue)+' | '+XBASE+'lut/'+l.id+'.cube |');});L.push('');
  L.push(ar?'## الخلفيات (BACKGROUNDS)':'## BACKGROUNDS — Animated backgrounds','',ar?'- BG-xx خلفية متحركة لووب. ارسمها بألوان المستخدم (أو CP-01) وخلها خفيفة ورا المحتوى.':'- BG-xx is a looping animated background. Draw it in the user colours (or CP-01) and keep it subtle behind the content.','');
  BGS.forEach(function(b){L.push('### '+b.id+' · '+b.en+' ('+b.ar+')','- '+(ar?b.sa:b.se),'');});
  L.push(ar?'## الأصوات (SOUNDS)':'## SOUNDS — Sound effects','',ar?'- كل الأصوات CC0 (بدون حقوق). حمّلها من الرابط وحطها تحت الصوت بمستوى خفيف (حوالي ‎-18 dB تحت الكلام)، بالضبط على فريم الحركة.':'- All sounds are CC0 (no rights needed). Download from the link and mix softly under the voice (about -18 dB below speech), exactly on the motion frame.','',
   '| ID | '+(ar?'الاسم':'Name')+' | '+(ar?'النوع':'Type')+' | URL |','|---|---|---|---|');
  SXS.forEach(function(s){L.push('| '+s.id+' | '+s.en+' ('+s.ar+') | '+SXT[s.ty][ar?1:0]+' | '+XBASE+sxUrl(s)+' |');});L.push('');
  return L.join('\n');}
var bMD=buildMD,bJS=buildJSON;
buildMD=function(){var ar=lang!=='en',m=bMD();
  var rules=ar?['- غير الحركات، فيه بعد: الألوان CP-xx، ستايلات الكابشن CS-xx، العناصر EL-xx، القوالب R-xx، الأصوات SX-xx، الهوك H-xx، فلاتر الألوان LT-xx، والخلفيات BG-xx. كل وحدة لها قسم تحت.','- كل حركة فيها «الصوت المقترح». حطه مع الحركة إلا إذا المستخدم قال بدون صوت.']
    :['- Besides motions there are: colour palettes CP-xx, caption styles CS-xx, elements EL-xx, recipes R-xx, sounds SX-xx, hooks H-xx, LUTs LT-xx and backgrounds BG-xx. Each has a section below.','- Every motion has a "Suggested sound". Add it with the motion unless the user says no sound.'];
  var i=m.indexOf('\n## ',m.indexOf('\n## ')+1);if(i>0)m=m.slice(0,i)+'\n'+rules.join('\n')+'\n'+m.slice(i);
  m=m.replace(/(### (M-\d+) · [^\n]*\n)/g,function(a,h,id){var mm=mById(id),s=mm&&sxOf(mm),x=s&&sxById(s);if(!x)return a;return a+'- **'+(ar?'الصوت المقترح':'Suggested sound')+':** '+x.id+' '+x.en+(ar?' ('+x.ar+')':'')+'\n';});
  var j=m.lastIndexOf('\n---\n');return j<0?m+'\n'+libSections(ar):m.slice(0,j)+'\n'+libSections(ar)+m.slice(j);};
buildJSON=function(){var o=JSON.parse(bJS());o.version='2.0';
  o.motions.forEach(function(x){var mm=mById(x.id);x.suggested_sound=mm?sxOf(mm):null;});
  o.palettes=CPS.map(function(p){return {id:p.id,name_en:p.en,name_ar:p.ar,background:p.bg,text:p.tx,accent:p.ac,highlight:p.hl,use_en:p.ue,use_ar:p.ua};});
  o.caption_styles=CSS_.map(function(c){return {id:c.id,name_en:c.en,name_ar:c.ar,motion:c.m,font:c.f,palette:c.p,position:c.pos==='b'?'bottom':'center',max_words_per_line:c.w,look_en:CS_LOOK[c.look][0],look_ar:CS_LOOK[c.look][1],use_en:c.ue,use_ar:c.ua};});
  o.elements=ELS.map(function(e){return {id:e.id,name_en:e.en,name_ar:e.ar,spec_en:e.se,spec_ar:e.sa,sound:e.sx,content_needed:e.nd.length?{type:'text',ar:e.nd[0],en:e.nd[1]}:null,use_en:e.ue,use_ar:e.ua};});
  o.recipes=RCS.map(function(r){return {id:r.id,name_en:r.en,name_ar:r.ar,font:r.f,palette:r.p,caption_style:r.cs,use_en:r.ue,use_ar:r.ua,steps:r.st.map(function(s){return {when:s[0],en:s[1],ar:s[2],ids:s[3]};})};});
  o.hooks=HOOKS.map(function(h){return {id:h.id,type:HKC[h.c][0],ar:h.ar,en:h.en,motion:h.m,sound:h.sx};});
  o.luts=LTS.map(function(l){return {id:l.id,name_en:l.en,name_ar:l.ar,use_en:l.ue,use_ar:l.ua,url:XBASE+'lut/'+l.id+'.cube'};});
  o.backgrounds=BGS.map(function(b){return {id:b.id,name_en:b.en,name_ar:b.ar,spec_en:b.se,spec_ar:b.sa};});
  o.sounds=SXS.map(function(s){return {id:s.id,name_en:s.en,name_ar:s.ar,type:s.ty,url:XBASE+sxUrl(s),license:'CC0 1.0'};});
  return JSON.stringify(o,null,2);};
window.buildMD=buildMD;window.buildJSON=buildJSON;
})();
