/* ---------- auto edit: one button listens to the video and picks captions, a hook, highlighted words, zooms,
   transitions, sounds and an ending, all from a chosen mood. Everything it adds is marked (au) so it can be redone. ---------- */
Object.assign(L.ar,{pAuto:'تلقائي',auT:'✨ مونتاج تلقائي',auD:'اختار جو الفيديو واضغط الزر: الموقع يسمع كلامك، يقص السكتات، يركّب الكابشن، يحط هوك بالبداية، يبرز الكلمات المهمة والأرقام، يحط زوم وانتقالات وأصوات ونهاية. بعدها تقدر تعدّل أي شي.',
 auMood:'جو الفيديو',auDo:'شنو يسوي',auO1:'✂️ قص السكتات',auO2:'📝 الكابشن',auO3:'🪝 هوك بالبداية',auO4:'💥 إبراز الكلمات المهمة والأرقام',auO5:'🔍 زوم وحركة كاميرا',auO6:'⧉ انتقالات بين الفيديوهات',auO7:'🔊 أصوات على الحركات',auO8:'🏁 نهاية',auEndT:'جملة النهاية',auBr:'استخدم ألوان هويتي',auGo:'✨ سوّ المونتاج',auAgain:'🎲 شكل ثاني بنفس الجو',auUndo:'↶ رجّعه مثل ما كان',
 auL:'قاعد أسمع الفيديو…',auL2:'سمعت الكلام ✓ قاعد أركّب…',auNoS:'ما لقيت كلام بالفيديو، فركّبت الزوم والانتقالات والنهاية بس.',auErr:'ما قدرت أسمع الكلام. جرّب دقة «سريع» أو من الكمبيوتر بكروم.',
 auDone:function(o){var a=[],q=function(n,one,many){return n+' '+(n>=2&&n<=10?many:one);};if(o.cut)a.push('قصيت '+q(o.cut,'سكتة','سكتات'));if(o.cap)a.push(o.cap+' كابشن');if(o.hook)a.push('هوك');if(o.emp)a.push(q(o.emp,'كلمة مبرزة','كلمات مبرزة'));if(o.zoom)a.push(o.zoom+' زوم');if(o.trn)a.push(q(o.trn,'انتقال','انتقالات'));if(o.snd)a.push(q(o.snd,'صوت','أصوات'));if(o.end)a.push('نهاية');return 'تم ✓ '+a.join('، ')+'. راجع الكابشن وصحّح أي كلمة غلط (اضغط عليها وعدّل النص).';},
 auBtn:'✨ مونتاج تلقائي',auRv:'📝 خلني أراجع الكلام قبل ما يركّبه',auRvT:'هذا الكلام اللي سمعته. صحّح أي كلمة غلط وخل كل سطر بمكانه، بعدين اضغط «كمّل».',auGo2:'✅ كمّل المونتاج',auRe:'المونتاج التلقائي يشيل اللي ركّبه قبل ويحط جديد، والشغل اللي سويته بإيدك يبقى.',auSample:'هذا جو الفيديو'});
Object.assign(L.en,{pAuto:'Auto',auT:'✨ Auto edit',auD:'Pick the mood and press the button: the site listens to your speech, cuts silences, adds captions, a hook at the start, highlights key words and numbers, adds zooms, transitions, sounds and an ending. You can edit anything after.',
 auMood:'Video mood',auDo:'What it does',auO1:'✂️ Cut silences',auO2:'📝 Captions',auO3:'🪝 Hook at the start',auO4:'💥 Highlight key words and numbers',auO5:'🔍 Zooms and camera moves',auO6:'⧉ Transitions between videos',auO7:'🔊 Sounds on the motions',auO8:'🏁 Ending',auEndT:'Ending line',auBr:'Use my brand colours',auGo:'✨ Make the edit',auAgain:'🎲 Another look, same mood',auUndo:'↶ Put it back as it was',
 auL:'Listening to the video…',auL2:'Got the words ✓ building the edit…',auNoS:'No speech found, so only zooms, transitions and the ending were added.',auErr:'Could not get the words. Try «Fast» accuracy, or Chrome on a computer.',
 auDone:function(o){var a=[];if(o.cut)a.push(o.cut+' silences cut');if(o.cap)a.push(o.cap+' captions');if(o.hook)a.push('a hook');if(o.emp)a.push(o.emp+' highlighted words');if(o.zoom)a.push(o.zoom+' zooms');if(o.trn)a.push(o.trn+' transitions');if(o.snd)a.push(o.snd+' sounds');if(o.end)a.push('an ending');return 'Done ✓ '+a.join(', ')+'. Check the captions and fix any wrong word (tap it and edit the text).';},
 auBtn:'✨ Auto edit',auRv:'📝 Let me check the words before it builds',auRvT:'These are the words it heard. Fix any wrong word, keep each line in its place, then press «Continue».',auGo2:'✅ Continue the edit',auRe:'Auto edit removes what it added before and makes a new one; what you did by hand stays.',auSample:'This is the mood'});
PT_.auto='pAuto';

/* each mood: caption looks [motion,font,palette], words per caption, hook / highlight / zoom / transition motions,
   seconds between zooms and highlights, silence cut [strong?, shortest silence], sounds, ending motion and line */
var MOODS=[
 {k:'hype',i:'⚡',ar:'حماسي',en:'Energetic',dar:'سريع وقوي',den:'Fast and punchy',cap:[['M-086','FA-32','CP-06'],['M-012','FA-20','CP-24']],n:2,hook:['M-049','M-044'],emp:['M-008','M-067','M-070'],zoom:['M-021','M-129','M-131'],zEv:4,eEv:3,trn:['M-020','M-116','M-112'],sil:[1,.3],sx:{hook:'SX-18',emp:'SX-09',zoom:'SX-02',trn:'SX-01',end:'SX-15'},end:'M-187',endar:'تابعني للمزيد',enden:'Follow for more'},
 {k:'calm',i:'🌿',ar:'هادي',en:'Calm',dar:'ناعم ومريح',den:'Soft and relaxed',cap:[['M-083','FA-57','CP-02'],['M-089','FA-57','CP-05']],n:4,hook:['M-005','M-001'],emp:['M-065','M-075'],zoom:['M-022','M-025'],zEv:9,eEv:8,trn:['M-102','M-101'],sil:[0,.8],sx:{hook:'SX-05',emp:'SX-13',zoom:null,trn:'SX-05',end:'SX-16'},end:'M-187',endar:'تابعني',enden:'Follow me'},
 {k:'edu',i:'🎓',ar:'تعليمي',en:'Educational',dar:'واضح ومرتب',den:'Clear and tidy',cap:[['M-085','FA-50','CP-14'],['M-095','FA-04','CP-02']],n:3,hook:['M-004','M-048'],emp:['M-063','M-064'],zoom:['M-021','M-022'],zEv:6,eEv:4,trn:['M-103','M-017'],sil:[0,.5],sx:{hook:'SX-02',emp:'SX-07',zoom:'SX-13',trn:'SX-04',end:'SX-15'},end:'M-187',endar:'احفظ الفيديو وتابعني',enden:'Save it and follow me'},
 {k:'story',i:'📖',ar:'قصة',en:'Story',dar:'سينمائي بأشرطة',den:'Cinematic, with bars',cap:[['M-083','FA-21','CP-03'],['M-092','FA-37','CP-11']],n:3,hook:['M-005','M-044'],emp:['M-065','M-075'],zoom:['M-022','M-121'],zEv:8,eEv:7,trn:['M-270','M-101'],sil:[0,.9],bars:1,sx:{hook:'SX-20',emp:'SX-17',zoom:'SX-03',trn:'SX-03',end:'SX-16'},end:'M-187',endar:'تابعني للجزء الياي',enden:'Follow for part two'},
 {k:'tech',i:'💻',ar:'تقني',en:'Tech',dar:'نيون وقلتش',den:'Neon and glitch',cap:[['M-014','FA-20','CP-04'],['M-099','FA-26','CP-19']],n:2,hook:['M-051','M-056'],emp:['M-010','M-080'],zoom:['M-125','M-021'],zEv:5,eEv:4,trn:['M-110','M-019'],sil:[1,.4],sx:{hook:'SX-26',emp:'SX-23',zoom:'SX-28',trn:'SX-06',end:'SX-28'},end:'M-187',endar:'تابعني للمزيد',enden:'Follow for more'},
 {k:'news',i:'📰',ar:'أخبار',en:'News',dar:'شريط أخبار',den:'News bar look',cap:[['M-098','FA-39','CP-15'],['M-081','FA-28','CP-21']],n:4,hook:['M-004','M-041'],emp:['M-063','M-008'],zoom:['M-021'],zEv:7,eEv:6,trn:['M-017','M-103'],sil:[1,.4],sx:{hook:'SX-19',emp:'SX-12',zoom:null,trn:'SX-04',end:'SX-14'},end:'M-187',endar:'تابعنا لآخر الأخبار',enden:'Follow for the latest'},
 {k:'fun',i:'😂',ar:'مضحك',en:'Funny',dar:'نطّات وزوم فجأة',den:'Bouncy, sudden zooms',cap:[['M-013','FA-36','CP-18'],['M-091','FA-52','CP-06']],n:2,hook:['M-049','M-070'],emp:['M-071','M-067','M-009'],zoom:['M-129','M-140','M-023'],zEv:4,eEv:3,trn:['M-111','M-113'],sil:[1,.3],sx:{hook:'SX-10',emp:'SX-11',zoom:'SX-19',trn:'SX-02',end:'SX-09'},end:'M-187',endar:'تابعني 😂',enden:'Follow me 😂'},
 {k:'motiv',i:'🔥',ar:'تحفيزي',en:'Motivational',dar:'يرفع الحماس',den:'Lifts you up',cap:[['M-096','FA-61','CP-11'],['M-090','FA-31','CP-13']],n:3,hook:['M-044','M-057'],emp:['M-008','M-072'],zoom:['M-022','M-021'],zEv:6,eEv:5,trn:['M-118','M-112'],sil:[0,.5],sx:{hook:'SX-20',emp:'SX-18',zoom:'SX-03',trn:'SX-03',end:'SX-16'},end:'M-187',endar:'شاركه مع أحد يحتاجه',enden:'Share it with someone who needs it'},
 {k:'lux',i:'💎',ar:'فخم',en:'Luxury',dar:'ذهبي وهادي',den:'Gold and calm',cap:[['M-087','FA-21','CP-03'],['M-083','FA-02','CP-03']],n:3,hook:['M-055','M-005'],emp:['M-065','M-075'],zoom:['M-022','M-025'],zEv:8,eEv:7,trn:['M-018','M-102'],sil:[0,.7],sx:{hook:'SX-16',emp:'SX-16',zoom:'SX-05',trn:'SX-05',end:'SX-16'},end:'M-187',endar:'تابعني',enden:'Follow me'},
 {k:'promo',i:'🛍',ar:'إعلان وعروض',en:'Ad and offers',dar:'يبيع ويلفت',den:'Sells and grabs',cap:[['M-086','FA-16','CP-06'],['M-089','FA-57','CP-24']],n:2,hook:['M-049','M-008'],emp:['M-008','M-064'],zoom:['M-021','M-131'],zEv:4,eEv:3,trn:['M-020','M-120'],sil:[1,.3],sx:{hook:'SX-18',emp:'SX-09',zoom:'SX-02',trn:'SX-01',end:'SX-14'},end:'M-187',endar:'اطلب الحين',enden:'Order now'},
 {k:'pod',i:'🎙',ar:'بودكاست وحوار',en:'Podcast',dar:'كابشن سطرين وزوم',den:'Two-line captions, punch-ins',cap:[['M-081','FA-28','CP-13'],['M-089','FA-57','CP-05']],n:5,hook:['M-001','M-004'],emp:['M-063','M-065'],zoom:['M-021','M-022'],zEv:5,eEv:6,trn:['M-102'],sil:[0,.6],sx:{hook:'SX-13',emp:null,zoom:null,trn:'SX-05',end:'SX-15'},end:'M-187',endar:'تابعني للحلقات الياية',enden:'Follow for more episodes'},
 {k:'vlog',i:'✈️',ar:'فلوق وسفر',en:'Vlog and travel',dar:'خفيف وملوّن',den:'Light and colourful',cap:[['M-084','FA-34','CP-16'],['M-012','FA-12','CP-12']],n:3,hook:['M-041','M-049'],emp:['M-067','M-077'],zoom:['M-021','M-126','M-122'],zEv:5,eEv:5,trn:['M-020','M-268'],sil:[0,.6],sx:{hook:'SX-03',emp:'SX-11',zoom:'SX-02',trn:'SX-01',end:'SX-15'},end:'M-187',endar:'تابعني',enden:'Follow me'},
 {k:'spirit',i:'🌙',ar:'روحاني',en:'Spiritual',dar:'خط نسخ هادي',den:'Calm naskh lettering',cap:[['M-083','FA-06','CP-07'],['M-083','FA-40','CP-03']],n:3,hook:['M-005','M-001'],emp:['M-065'],zoom:['M-022'],zEv:10,eEv:10,trn:['M-101','M-102'],sil:[0,1],noSnd:1,sx:{hook:null,emp:null,zoom:null,trn:null,end:null},end:'M-187',endar:'تابعنا',enden:'Follow us'}];
function moodBy(k){for(var i=0;i<MOODS.length;i++)if(MOODS[i].k===k)return MOODS[i];return MOODS[0];}
/* words that deserve a highlight: numbers, then strong words (Kuwaiti and standard spellings) */
var AU_NUM=/[0-9٠-٩]|%|٪|\b(واحد|وحدة|ثنين|اثنين|ثلاث|ثلاثة|أربع|اربع|خمس|ست|سبع|ثمان|تسع|عشر|عشرة|مية|مئة|ألف|الف|مليون)\b/;
var AU_KEY=/(انتبه|انتبهو|لا تسوي|لا تسوون|سر|أسرار|اسرار|أهم|اهم|مهم|مجاني|ببلاش|خطير|أفضل|افضل|أقوى|اقوى|أول|اول|آخر|اخر|ليش|شلون|كيف|ترى|صدق|حقيقة|غلط|صح|الحين|فوراً|لازم|أبد|ابد|مستحيل|جديد|حصري|خصم|عرض|ضمان|مضمون|أسرع|اسرع|سهل|بسيط|ممنوع|تحذير|نصيحة|حيلة|خدعة)/;
var auASR=null,auSeed=0,auLast=null,auBase=null;
function auOpts(){var d={o1:1,o2:1,o3:1,o4:1,o5:1,o6:1,o7:1,o8:1,br:0,rv:1};try{var s=JSON.parse(localStorage.getItem('ml-auto'));if(s)Object.keys(s).forEach(function(k){d[k]=s[k];});}catch(e){}return d;}
function auSave(o){try{localStorage.setItem('ml-auto',JSON.stringify(o));}catch(e){}}
function auPick(a,salt){return a&&a.length?a[(auSeed+(salt||0))%a.length]:null;}

/* speech to text with the same worker as the captions window */
function asrRun(audio,model,pg){var files={};return new Promise(function(res,rej){var w=capWorker();w.onmessage=function(e){var d=e.data;
    if(d.type==='dl'&&d.p){if(d.p.file&&d.p.total){files[d.p.file]=[d.p.loaded||0,d.p.total];var A=0,T=0;Object.keys(files).forEach(function(k){A+=files[k][0];T+=files[k][1];});pg(t_('capDl')(Math.round(A/T*100)));}}
    else if(d.type==='run'||d.type==='retry'){var key=d.type==='run'?'capRun':'capRetry',t0=Date.now();clearInterval(w._tk);var tick=function(){pg(t_(key)+' '+Math.round((Date.now()-t0)/1000)+'s');};tick();w._tk=setInterval(tick,1000);clearTimeout(w._wd);w._wd=setTimeout(function(){clearInterval(w._tk);try{w.terminate();}catch(_){}WK=null;rej(new Error('timeout'));},(audio.length/16000*20+300)*1000);}
    else if(d.type==='done'){clearTimeout(w._wd);clearInterval(w._tk);res(d.out);}else if(d.type==='err'){clearTimeout(w._wd);clearInterval(w._tk);rej(new Error(d.msg));}};
  w.onerror=function(e){rej(new Error(e.message||'worker'));};w.postMessage({audio:audio,model:model,gpu:!!navigator.gpu&&!matchMedia('(pointer:coarse)').matches},[audio.buffer]);});}
function asrParse(out){var R=asrLines(out);return {lines:R.lines,segs:R.segs||[]};}
function auListen(model,pg){var key=srcKey()+'|'+model;if(auASR&&auASR.key===key)return Promise.resolve(auASR);
  return capAudio().then(function(a){return asrRun(a,model,pg);}).then(function(out){var r=asrParse(out);r.key=key;auASR=r;
    try{localStorage.setItem('ml-captx',r.lines.join('\n'));localStorage.setItem('ml-capseg',JSON.stringify(r.segs));}catch(e){}return r;});}

function auSndFree(s,d){for(var l=0;l<6;l++){if(!(S.snd||[]).some(function(x){return (x.l||0)===l&&x.s<s+d&&s<x.s+sndDur(x);}))return l;}return 0;}
function auSnd(id,t,v,n){if(!id||t==null||t<0||t>=VD)return;S.snd=S.snd||[];sxLoadDur(id);var d=SXD[id]||1.2,x={u:uid++,id:id,s:+Math.max(0,Math.min(VD-.1,t)).toFixed(2),v:v||.7,l:auSndFree(t,d),au:1};S.snd.push(x);n.snd++;}
function auClip(id,s,d,o){var m=mBy(id);if(!m)return null;s=Math.max(0,Math.min(VD-.3,s));d=Math.max(.3,Math.min(VD-s,d));var c={u:uid++,m:id,s:+s.toFixed(2),d:+d.toFixed(2),l:0,text:'',f:'',p:'',x:50,y:FX.isFoot(m)?50:40,sc:90,au:1};
  Object.keys(o||{}).forEach(function(k){c[k]=o[k];});c.l=freeLane(c.s,c.d,c.u);S.clips.push(c);return c;}
function auKeptAt(t){var sg=segs();for(var i=0;i<sg.length;i++)if(t>=sg[i][0]-1e-3&&t<sg[i][1])return true;return false;}

/* build the edit from the words; r = {lines,segs} or null */
function auBuild(r,mood,o){var n={cut:0,cap:0,hook:0,emp:0,zoom:0,trn:0,snd:0,end:0},b=brand(),useBr=o.br&&b,look=auPick(mood.cap,0),pal=useBr?'BR':look[2],font=useBr&&b.f?b.f:look[1],sx=o.o7&&!mood.noSnd?mood.sx:{};
  /* remove what an earlier auto edit added (hand work stays) */
  S.clips=S.clips.filter(function(c){return !c.au&&!(o.o2&&c.cap);});S.snd=(S.snd||[]).filter(function(x){return !x.au;});
  /* 1. silences */
  if(o.o1&&r&&r.env){S.cuts=S.cuts.filter(function(k){return !k.auto;});var found=silFind(r.env,!!mood.sil[0],mood.sil[1],.12),all=S.cuts.concat(found).sort(function(x,y){return x.a-y.a;}),mm=[];
    all.forEach(function(k){var l=mm[mm.length-1];if(l&&k.a<=l.b+.001){l.b=Math.max(l.b,k.b);if(!k.auto)delete l.auto;}else mm.push({a:k.a,b:k.b,auto:k.auto});});S.cuts=mm;n.cut=found.length;}
  var has=r&&r.lines&&r.lines.length,caps=[];
  /* 2. captions, spread over the kept parts of each spoken line */
  if(has&&o.o2){capSegs=r.segs&&r.segs.length===r.lines.length?r.segs:null;var cnt=capPlace(r.lines.join('\n'),look[0],mood.n,'b',font,pal);n.cap=cnt;caps=S.clips.filter(function(c){return c.cap;}).sort(function(x,y){return x.s-y.s;});caps.forEach(function(c){c.au=1;});}
  var K=capKept(),first=K.sg.length?K.sg[0][0]:0,last=K.sg.length?K.sg[K.sg.length-1][1]:VD,busy=[];
  /* 3. hook: the first words become a big title; the captions under it are folded into it */
  if(has&&o.o3){var hs=caps.length?caps[0].s:Math.max(first,r.segs&&r.segs[0]?+r.segs[0][0]:first),words=[],he=hs,used=[];
    if(caps.length){for(var i=0;i<caps.length;i++){var c=caps[i],w=c.text.split(/\s+/);if(i&&(words.length+w.length>6||c.s-hs>3.2))break;words=words.concat(w);he=c.s+c.d;used.push(c.u);}}
    else{words=r.lines[0].split(/\s+/).slice(0,6);he=hs+2.6;}
    if(words.length){S.clips=S.clips.filter(function(c){return used.indexOf(c.u)<0;});n.cap-=used.length;caps=caps.filter(function(c){return used.indexOf(c.u)<0;});
      var hk=auClip(auPick(mood.hook,1),hs,Math.max(1.6,Math.min(4,he-hs)),{text:words.join(' '),f:font,p:pal,y:40,sc:96});if(hk){n.hook=1;busy.push([hk.s,hk.s+hk.d]);auSnd(sx.hook,hk.s,.8,n);}}}
  /* 4. highlight numbers and strong words (not too close together) */
  if(caps.length&&o.o4){var lastE=-99,eid=0;caps.forEach(function(c){var sc=AU_NUM.test(c.text)?3:AU_KEY.test(c.text)?2:0;if(!sc||c.s-lastE<mood.eEv)return;lastE=c.s;c.m=auPick(mood.emp,eid++);c.emp=1;c.sc=92;n.emp++;busy.push([c.s,c.s+c.d,'e']);auSnd(sx.emp,c.s,.6,n);});}
  /* 5. zooms: on highlighted words first, then every few kept seconds at the start of a caption */
  if(o.o5){var zt=[],lz=-99,zi=0,starts=caps.length?caps.map(function(c){return [c.s,c.emp];}):[];
    if(!starts.length){for(var t=first+1;t<last-1;t+=mood.zEv)if(auKeptAt(t))starts.push([t,0]);}
    starts.forEach(function(x){if(x[0]-lz<(x[1]?mood.zEv*.6:mood.zEv))return;if(n.hook&&busy[0]&&x[0]<busy[0][1])return;zt.push(x[0]);lz=x[0];});
    zt.forEach(function(t){var zid=auPick(mood.zoom,zi++),zm=mBy(zid);if(!zm)return;var zc=auClip(zid,t,FX.dur(zm)||2,{x:50,y:42});if(zc){n.zoom++;var near=(S.snd||[]).some(function(x){return Math.abs(x.s-t)<.8;});if(!near)auSnd(sx.zoom,t,.5,n);}});}
  /* 6. transitions on every join between videos */
  if(o.o6){joins().forEach(function(j,ji){var tid=auPick(mood.trn,ji),tm=mBy(tid);if(!tm)return;var tc=auClip(tid,j,FX.dur(tm)||1,{x:50,y:50});if(tc){n.trn++;auSnd(sx.trn,Math.max(0,j-.15),.7,n);}});}
  /* story: cinema bars over the whole video */
  if(mood.bars){auClip('M-138',first,Math.max(1,last-first),{x:50,y:50});}
  /* 7. ending: follow line over the last seconds that are kept */
  if(o.o8){var et=String(o.endT||(lang==='ar'?mood.endar:mood.enden)).trim(),hd=b&&b.handle?String(b.handle).trim():'',ed=Math.min(3,Math.max(1.6,K.tot*.25));
    if(et){var ec=auClip(mood.end,last-ed,ed,{text:et+(hd&&et.indexOf(hd)<0?' '+(hd.charAt(0)==='@'?hd:'@'+hd):''),f:font,p:pal,y:40,sc:100});if(ec){n.end=1;auSnd(sx.end,ec.s,.7,n);
      S.clips.forEach(function(c){if(c.cap&&c.s>=ec.s-.05){c.y=Math.min(97,c.y+8);c.low=1;}});}}}
  return n;}

function autoRun(o,again){if(!hasV||capBusy)return;var mood=moodBy(o.mood),pg=function(t){var e=$('auPg');if(e)e.textContent=t;},btns=document.querySelectorAll('#pane-auto [data-au]');
  btns.forEach(function(x){x.disabled=true;});capBusy=true;pg(t_('auL'));var h0=hist.length,env=null,model=o.q||'onnx-community/whisper-large-v3-turbo';
  var pre=o.o1?silAudio().then(function(E){env=E;}).catch(function(){}):Promise.resolve();
  pre.then(function(){return (o.o2||o.o3||o.o4)?auListen(model,pg).catch(function(e){try{console.warn('auto asr',e);}catch(_){}if(/decode|nofile|noaudio/i.test(String(e&&e.message)))return {lines:[],segs:[]};throw e;}):{lines:[],segs:[]};})
   .then(function(r){return (o.rv&&!again&&r.lines.length&&(o.o2||o.o3))?auReview(r):r;})
   .then(function(r){pg(t_('auL2'));if(!again||!auBase)auBase=JSON.stringify(S);snap();var rr={lines:r.lines,segs:r.segs,env:env};var n=auBuild(rr,mood,o);hist.length=Math.min(hist.length,h0+1);
     sel=null;msel=[];selSnd=null;rebuild();var capY=(S.clips.filter(function(c){return c.cap&&!c.emp;})[0]||{}).y;S.clips.forEach(function(c){if(c.au&&!c.cap&&!FX.isFoot(mBy(c.m))){var k=textY(c,42);if(k!=null)c.y=k;}});S.clips.forEach(function(c){if(c.emp){var k=textY(c,c.low?86:78);if(k!=null)c.y=k;}});rebuild();drawTL();insp();save();seek(segs().length?segs()[0][0]:0);auLast=o;
     pg((r.lines.length||!(o.o2||o.o3||o.o4)?'':t_('auNoS')+' ')+t_('auDone')(n));var ag=$('auAgain'),un=$('auUndo');if(ag)ag.hidden=false;if(un)un.hidden=false;var pe=$('auPg');if(pe&&pe.scrollIntoView)pe.scrollIntoView({block:'nearest'});
     try{if(window.goatcounter&&goatcounter.count)goatcounter.count({path:'auto-edit/'+mood.k,title:'Auto edit',event:true});}catch(_){}})
   .catch(function(e){try{console.warn('auto',e);}catch(_){}pg(t_('auErr'));})
   .then(function(){capBusy=false;btns.forEach(function(x){x.disabled=false;});});}

/* show the heard words for a quick fix before building; the fixed lines replace the cached ones */
function auReview(r){return new Promise(function(res){var P=$('pane-auto'),box=document.createElement('div');box.className='sd-aurv';box.innerHTML='<p class="sd-note">'+esc(t_('auRvT'))+'</p><textarea id="auTx" rows="8" dir="auto"></textarea><div class="sd-acts"><button type="button" class="sd-btn pri sd-aubig" id="auGo2">'+t_('auGo2')+'</button></div>';
  var pgE=$('auPg');pgE.parentNode.insertBefore(box,pgE);var tx=$('auTx');tx.value=r.lines.join('\n');pgE.textContent='';if(box.scrollIntoView)box.scrollIntoView({block:'nearest'});tx.focus();
  $('auGo2').addEventListener('click',function(){var L2=tx.value.split(/\n+/).map(function(l){return l.trim();}).filter(Boolean);box.remove();
    if(L2.length!==r.lines.length&&r.segs&&r.segs.length&&r.segs[0][2]){var all=[];r.segs.forEach(function(g){all=all.concat(g[2]);});r.segs=[[all[0][0],all[all.length-1][1],all]];L2=[L2.join(' ')];}else if(L2.length!==r.lines.length)r.segs=[];r.lines=L2;try{localStorage.setItem('ml-captx',L2.join('\n'));}catch(e){}res(r);});});}
function paneAuto(){var P=$('pane-auto');if(!P)return;if(!hasV){P.innerHTML='<div class="sd-pempty"><p>'+esc(t_('auD'))+'</p><button type="button" class="sd-btn pri" id="auUp">'+t_('drop')+'</button></div>';$('auUp').addEventListener('click',function(){fin.click();});return;}
  var o=auOpts();if(!o.mood)o.mood='hype';var b=brand(),coarse=matchMedia('(pointer:coarse)').matches;if(!o.q)o.q='onnx-community/whisper-large-v3-turbo';
  var chk=function(k){return '<label class="sd-auck"><input type="checkbox" data-o="'+k+'"'+(o[k]?' checked':'')+'> '+t_('auO'+k.slice(1))+'</label>';};
  P.innerHTML='<p class="sd-note sd-aud">'+esc(t_('auD'))+'</p><p class="sd-mname"><b>'+t_('auMood')+'</b></p><div class="sd-cpg sd-aum"></div>'+
   '<p class="sd-mname"><b>'+t_('auDo')+'</b></p><div class="sd-auo">'+['o1','o2','o3','o4','o5','o6','o7','o8'].map(chk).join('')+'</div>'+
   '<label class="sd-auck" style="padding-inline:14px"><input type="checkbox" data-o="rv"'+(o.rv?' checked':'')+'> '+t_('auRv')+'</label>'+'<label class="sd-f">'+t_('auEndT')+'<input type="text" id="auEnd" maxlength="60"></label>'+
   (b?'<label class="sd-auck" style="padding-inline:14px"><input type="checkbox" data-o="br"'+(o.br?' checked':'')+'> '+t_('auBr')+'</label>':'')+
   '<label class="sd-f">'+t_('capQ')+'<select id="auQ"><option value="onnx-community/whisper-base">'+t_('capQ1')+'</option><option value="onnx-community/whisper-small">'+t_('capQ2')+'</option><option value="onnx-community/whisper-large-v3-turbo">'+t_('capQ3')+'</option></select></label>'+
   '<div class="sd-acts"><button type="button" class="sd-btn pri sd-aubig" id="auGo" data-au>'+t_('auGo')+'</button><button type="button" class="sd-btn" id="auAgain" data-au'+(auLast?'':' hidden')+'>'+t_('auAgain')+'</button><button type="button" class="sd-btn" id="auUndo" data-au'+(auLast?'':' hidden')+'>'+t_('auUndo')+'</button></div>'+
   '<p class="sd-note" id="auPg" aria-live="polite">'+(S.clips.some(function(c){return c.au;})?esc(t_('auRe')):'')+'</p>';
  $('auQ').value=o.q;var endIn=$('auEnd'),m0=moodBy(o.mood);endIn.value=o.endT||(lang==='ar'?m0.endar:m0.enden);
  var grid=P.querySelector('.sd-aum');
  MOODS.forEach(function(md){var li=document.createElement('button');li.type='button';li.className='sd-cpt'+(md.k===o.mood?' on':'');li.dataset.k=md.k;li.innerHTML='<div class="sd-mth"></div><span class="id">'+md.i+' '+esc(lang==='ar'?md.ar:md.en)+(md.k===o.mood?' ✓':'')+'</span><span class="nm">'+esc(lang==='ar'?md.dar:md.den)+'</span>';grid.appendChild(li);
    var lk=md.cap[0],m=mBy(lk[0]),box=li.querySelector('.sd-mth');if(m){var el=document.createElement('div');el.className='st'+(m.vcls?' '+m.vcls:'');el.style.setProperty('--d',(m.d||'2.8s'));el.style.setProperty('--vf',m.vf||1);el.innerHTML=stageHTML(m);swapText(el,lang==='ar'?md.ar:md.en);var fn=fam(lk[1]);if(fn){el.classList.add('sd-cpf');el.style.fontFamily=fn;}var pl=pBy(lk[2]);if(pl)palApply(el,pl);box.appendChild(el);}
    li.addEventListener('click',function(){var prev=moodBy(o.mood),pe=lang==='ar'?prev.endar:prev.enden;o.mood=md.k;if(!endIn.value.trim()||endIn.value===pe){endIn.value=lang==='ar'?md.endar:md.enden;o.endT='';}auSave(o);
      grid.querySelectorAll('.sd-cpt').forEach(function(x){var on=x.dataset.k===md.k;x.classList.toggle('on',on);var id=x.querySelector('.id'),mm=moodBy(x.dataset.k);id.textContent=mm.i+' '+(lang==='ar'?mm.ar:mm.en)+(on?' ✓':'');});});});
  P.querySelectorAll('[data-o]').forEach(function(x){x.addEventListener('change',function(){o[x.dataset.o]=x.checked?1:0;auSave(o);});});
  $('auQ').addEventListener('change',function(){o.q=$('auQ').value;auSave(o);});
  endIn.addEventListener('input',function(){var md=moodBy(o.mood);o.endT=endIn.value===(lang==='ar'?md.endar:md.enden)?'':endIn.value;auSave(o);});
  $('auGo').addEventListener('click',function(){o.endT=endIn.value;auSeed=0;autoRun(o);});
  $('auAgain').addEventListener('click',function(){o.endT=endIn.value;auSeed++;autoRun(o,1);});
  $('auUndo').addEventListener('click',function(){if(auBase){snap();S=JSON.parse(auBase);S.splits=S.splits||[];S.snd=S.snd||[];auBase=null;sel=null;msel=[];selSnd=null;selCut=null;rebuild();}else undo();auLast=null;$('auAgain').hidden=true;$('auUndo').hidden=true;$('auPg').textContent='';});}
(function(){var ps=paneShow;paneShow=function(k,tap){ps(k,tap);if(k==='auto')paneAuto();};
  var pv=paneVid;paneVid=function(){pv();var P=$('pane-vid');if(!P||!hasV||$('pvAuto'))return;P.insertAdjacentHTML('afterbegin','<div class="sd-acts"><button type="button" class="sd-btn pri sd-aubig" id="pvAuto">'+t_('auBtn')+'</button></div>');$('pvAuto').addEventListener('click',function(){paneShow('auto',true);});};
  if(PANE==='vid')paneVid();})();
applyL();
