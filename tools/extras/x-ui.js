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
  wn:'<b>✨ جديد:</b> الألوان، ستايلات الترجمة، العناصر، القوالب، الأصوات، سلة البرومبت، الفلاتر، المفضلة، و«جرّب بكلامك». وتقدر تثبّت الموقع على جوالك مثل التطبيق.',
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
  wn:'<b>✨ New:</b> Colors, caption styles, elements, recipes, sounds, the prompt basket, use filters, favourites and “Try with your text”. You can also install the site on your phone like an app.',
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
function ucRender(){uc.innerHTML='';[['ALL',X('uAll')],['fav',X('uFav')]].concat(USES.map(function(u){return [u[0],lang==='ar'?u[2]:u[1]];})).forEach(function(x){
  var b=document.createElement('button');b.type='button';b.textContent=x[1];b.setAttribute('aria-pressed',ucur===x[0]);b.onclick=function(){ucur=x[0];ucRender();render();};uc.appendChild(b);});}
var render0=render;
render=function(){render0();if(ucur==='ALL')return;var n=0;
  cards.forEach(function(o){if(o.el.hidden)return;var ok=ucur==='fav'?FAV.indexOf(o.m.id)>-1:usesOf(o.m).indexOf(ucur)>-1;o.el.hidden=!ok;if(ok)n++;});
  document.getElementById('catCount').textContent=n+' / '+M.length;document.getElementById('curLbl').textContent=catName(cur)+' · '+n;document.getElementById('empty').hidden=n>0;};
q.removeEventListener('input',render0);q.addEventListener('input',function(){render();});

/* ---------- views ---------- */
var VIEWS=[['CP','palettes'],['CS','captions'],['EL','elements'],['R','recipes'],['SX','sounds']];
var host=document.getElementById('fontsView');
VIEWS.forEach(function(v){var s=document.createElement('section');s.id='xv-'+v[0];s.className='xv';s.hidden=true;
  s.innerHTML='<section class="box"><h2 class="xt"></h2><p class="xd"></p></section><div class="fctl"><input type="search" class="xq"></div><div class="xgrid xg-'+v[0]+'"></div><p class="empty xe" hidden></p>';
  host.after(s);host=s;});
var tabs=document.querySelector('.tabs');
VIEWS.forEach(function(v){var b=document.createElement('button');b.type='button';b.id='tab'+v[0];b.setAttribute('aria-pressed','false');b.dataset.tab=v[0];
  b.innerHTML='<span class="tl"></span> <small></small><em class="nb"></em>';tabs.appendChild(b);b.onclick=function(){showTab(v[0]);};});
function xq(k){return document.querySelector('#xv-'+k+' .xq');}
function xgrid(k){return document.querySelector('#xv-'+k+' .xgrid');}
var XC={CP:[],CS:[],EL:[],R:[],SX:[]};
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
var HASH={M:'motions',F:'fonts',CP:'palettes',CS:'captions',EL:'elements',R:'recipes',SX:'sounds'};
showTab=function(t){stopSx();document.getElementById('fontsView').hidden=t!=='F';document.getElementById('motionsView').hidden=t!=='M';
  VIEWS.forEach(function(v){document.getElementById('xv-'+v[0]).hidden=t!==v[0];});
  document.querySelectorAll('.tabs button').forEach(function(b){var k=b.dataset.tab||(b.id==='tabM'?'M':'F');b.setAttribute('aria-pressed',k===t);if(k===t&&b.scrollIntoView&&tb0().scrollWidth>tb0().clientWidth)b.scrollIntoView({inline:'nearest',block:'nearest'});});
  try{history.replaceState(null,'','#'+HASH[t]);}catch(e){}
  var tb=document.querySelector('.tabs');if(window.scrollY>tb.offsetTop)window.scrollTo({top:tb.offsetTop-8});};
document.getElementById('tabM').dataset.tab='M';document.getElementById('tabF').dataset.tab='F';
document.getElementById('tabM').onclick=function(){showTab('M');};document.getElementById('tabF').onclick=function(){showTab('F');};

/* ---------- try-it lab ---------- */
var lab=document.createElement('div');lab.className='exm lab';lab.id='lab';lab.hidden=true;lab.setAttribute('role','dialog');lab.setAttribute('aria-modal','true');
lab.innerHTML='<div class="labbox"><div class="bkh"><h2 id="labT"></h2><button type="button" class="exx" id="labX" aria-label="Close">✕</button></div><div class="labin"><div class="labst card labcard"><div class="st" id="labSt"></div></div><div class="labc"><div class="mono" id="labId"></div><label><span id="labInL"></span><input id="labIn" type="text" maxlength="60"></label><p class="labno" id="labNo" hidden></p><label><span id="labFL"></span><select id="labF"></select></label><label><span id="labPL"></span><select id="labP"></select></label><div class="acts"><button type="button" id="labRe"></button><button type="button" id="labCp"></button></div><div class="acts"><button type="button" class="exb" id="labBk"></button></div></div></div></div>';
document.body.appendChild(lab);
var labM=null,labBack=null,labHasText=false,labCss=document.createElement('style');document.head.appendChild(labCss);
function labOpts(){var fs=document.getElementById('labF'),ps=document.getElementById('labP'),fv=fs.value,pv=ps.value;
  fs.innerHTML='<option value="">'+X('labNone')+'</option><optgroup label="'+T('secAr')+'">'+FONTS.filter(function(f){return f.k==='ar';}).map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('')+'</optgroup><optgroup label="English">'+FONTS.filter(function(f){return f.k==='en';}).map(function(f){return '<option value="'+f.id+'">'+f.id+' · '+f.n+'</option>';}).join('')+'</optgroup>';
  ps.innerHTML='<option value="">'+X('labNone')+'</option>'+CPS.map(function(p){return '<option value="'+p.id+'">'+p.id+' · '+nm(p)+'</option>';}).join('');fs.value=fv;ps.value=pv;}
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
  var p=pById(pid);if(p)st.style.cssText+=';--mon:'+p.bg+';--mon2:'+p.bg+';--mon-fg:'+p.tx+';--coral:'+p.ac+';--mint:'+p.hl+';color:'+p.tx;
  labCss.textContent=css;}
function labTexts(){document.getElementById('labT').textContent=X('labT');document.getElementById('labInL').textContent=X('labIn');document.getElementById('labIn').placeholder=X('labIn');document.getElementById('labFL').textContent=X('labF');document.getElementById('labPL').textContent=X('labP');document.getElementById('labRe').textContent=X('labRe');document.getElementById('labCp').innerHTML=X('labCp');
  if(labM)document.getElementById('labBk').textContent=(inBk(labM.id)?'✓ ':'＋ ')+X(inBk(labM.id)?'inB':'add');}
function openLab(id,btn){labM=mById(id);if(!labM)return;labBack=btn;labOpts();labTexts();document.getElementById('labId').textContent=labM.id+' · '+labM.en;labDraw();lab.hidden=false;document.getElementById('labX').focus({preventScroll:true});goat('try-open',id);}
function labClose(){if(lab.hidden)return;lab.hidden=true;document.getElementById('labSt').innerHTML='';labCss.textContent='';if(labBack)labBack.focus({preventScroll:true});}
var labTm=null;document.getElementById('labIn').addEventListener('input',function(){clearTimeout(labTm);labTm=setTimeout(labDraw,250);});
document.getElementById('labF').addEventListener('change',labDraw);document.getElementById('labP').addEventListener('change',labDraw);document.getElementById('labRe').addEventListener('click',labDraw);
document.getElementById('labCp').addEventListener('click',function(e){var t=document.getElementById('labIn').value.trim()||'[النص]',f=fById(document.getElementById('labF').value),p=pById(document.getElementById('labP').value);
  var pr=labHasText?X('labPr')(labM,t,f,p):UI[lang].pr(labM)+(p?' '+cpPr(p):'');copyText(pr,e.currentTarget,X('labCp'));});
document.getElementById('labBk').addEventListener('click',function(){togBk(labM.id);labTexts();});
document.getElementById('labX').addEventListener('click',labClose);lab.addEventListener('click',function(e){if(e.target===lab)labClose();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){labClose();bkClose();}});

/* ---------- what's new + install ---------- */
var wn=document.createElement('div');wn.className='wnew';wn.innerHTML='<p id="wnT"></p><button type="button" class="btn ghost" id="instB" hidden></button><p class="ios" id="instI" hidden></p>';
document.querySelector('.tabs').before(wn);
var dfr=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();dfr=e;document.getElementById('instB').hidden=false;});
document.getElementById('instB').addEventListener('click',function(){if(!dfr)return;dfr.prompt();dfr.userChoice.then(function(c){if(c&&c.outcome==='accepted')goat('pwa-install','Installed');dfr=null;document.getElementById('instB').hidden=true;});});
var ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.navigator.standalone;
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});

/* ---------- language ---------- */
function xLang(){document.querySelectorAll('.tabs button[data-tab]').forEach(function(b){var k=b.dataset.tab;if(k==='M'||k==='F')return;b.querySelector('.tl').textContent=X('t'+k);b.querySelector('small').textContent=XC[k].length;b.querySelector('.nb').textContent=X('nb');});
  VIEWS.forEach(function(v){var s=document.getElementById('xv-'+v[0]);s.querySelector('.xt').textContent=X('t'+v[0]);s.querySelector('.xd').textContent=X('d'+v[0]);var i=s.querySelector('.xq');i.placeholder=X('q');i.setAttribute('aria-label',X('q'));xFilter(v[0]);});
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
  ucRender();bkRender();syncBtns();labOpts();labTexts();
  document.getElementById('wnT').innerHTML=X('wn');document.getElementById('instB').textContent=X('inst');var ii=document.getElementById('instI');ii.textContent=X('instIos');ii.hidden=!ios;}
var _al2=applyLang;applyLang=function(){_al2();xLang();};
xLang();render();
var hh=(location.hash||'').slice(1);for(var k in HASH)if(HASH[k]===hh&&k!=='M')showTab(k);
window.addEventListener('hashchange',function(){var h=location.hash.slice(1);for(var k in HASH)if(HASH[k]===h)showTab(k);});

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
  L.push(ar?'## الأصوات (SOUNDS)':'## SOUNDS — Sound effects','',ar?'- كل الأصوات CC0 (بدون حقوق). حمّلها من الرابط وحطها تحت الصوت بمستوى خفيف (حوالي ‎-18 dB تحت الكلام)، بالضبط على فريم الحركة.':'- All sounds are CC0 (no rights needed). Download from the link and mix softly under the voice (about -18 dB below speech), exactly on the motion frame.','',
   '| ID | '+(ar?'الاسم':'Name')+' | '+(ar?'النوع':'Type')+' | URL |','|---|---|---|---|');
  SXS.forEach(function(s){L.push('| '+s.id+' | '+s.en+' ('+s.ar+') | '+SXT[s.ty][ar?1:0]+' | '+XBASE+sxUrl(s)+' |');});L.push('');
  return L.join('\n');}
var bMD=buildMD,bJS=buildJSON;
buildMD=function(){var ar=lang!=='en',m=bMD();
  var rules=ar?['- غير الحركات، فيه بعد: الألوان CP-xx، ستايلات الكابشن CS-xx، العناصر EL-xx، القوالب R-xx، والأصوات SX-xx. كل وحدة لها قسم تحت.','- كل حركة فيها «الصوت المقترح». حطه مع الحركة إلا إذا المستخدم قال بدون صوت.']
    :['- Besides motions there are: colour palettes CP-xx, caption styles CS-xx, elements EL-xx, recipes R-xx and sounds SX-xx. Each has a section below.','- Every motion has a "Suggested sound". Add it with the motion unless the user says no sound.'];
  var i=m.indexOf('\n## ',m.indexOf('\n## ')+1);if(i>0)m=m.slice(0,i)+'\n'+rules.join('\n')+'\n'+m.slice(i);
  m=m.replace(/(### (M-\d+) · [^\n]*\n)/g,function(a,h,id){var mm=mById(id),s=mm&&sxOf(mm),x=s&&sxById(s);if(!x)return a;return a+'- **'+(ar?'الصوت المقترح':'Suggested sound')+':** '+x.id+' '+x.en+(ar?' ('+x.ar+')':'')+'\n';});
  var j=m.lastIndexOf('\n---\n');return j<0?m+'\n'+libSections(ar):m.slice(0,j)+'\n'+libSections(ar)+m.slice(j);};
buildJSON=function(){var o=JSON.parse(bJS());o.version='2.0';
  o.motions.forEach(function(x){var mm=mById(x.id);x.suggested_sound=mm?sxOf(mm):null;});
  o.palettes=CPS.map(function(p){return {id:p.id,name_en:p.en,name_ar:p.ar,background:p.bg,text:p.tx,accent:p.ac,highlight:p.hl,use_en:p.ue,use_ar:p.ua};});
  o.caption_styles=CSS_.map(function(c){return {id:c.id,name_en:c.en,name_ar:c.ar,motion:c.m,font:c.f,palette:c.p,position:c.pos==='b'?'bottom':'center',max_words_per_line:c.w,look_en:CS_LOOK[c.look][0],look_ar:CS_LOOK[c.look][1],use_en:c.ue,use_ar:c.ua};});
  o.elements=ELS.map(function(e){return {id:e.id,name_en:e.en,name_ar:e.ar,spec_en:e.se,spec_ar:e.sa,sound:e.sx,content_needed:e.nd.length?{type:'text',ar:e.nd[0],en:e.nd[1]}:null,use_en:e.ue,use_ar:e.ua};});
  o.recipes=RCS.map(function(r){return {id:r.id,name_en:r.en,name_ar:r.ar,font:r.f,palette:r.p,caption_style:r.cs,use_en:r.ue,use_ar:r.ua,steps:r.st.map(function(s){return {when:s[0],en:s[1],ar:s[2],ids:s[3]};})};});
  o.sounds=SXS.map(function(s){return {id:s.id,name_en:s.en,name_ar:s.ar,type:s.ty,url:XBASE+sxUrl(s),license:'CC0 1.0'};});
  return JSON.stringify(o,null,2);};
window.buildMD=buildMD;window.buildJSON=buildJSON;
})();
