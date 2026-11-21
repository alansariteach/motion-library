/* --- colour picker for the whole site (library + studio): ready colours + custom (square + hue + HEX/RGB + eyedropper) --- */
var XCol=(function(){
var CSS='.xcm{position:fixed;inset:0;z-index:2000;background:rgba(8,14,16,.55);display:flex;align-items:center;justify-content:center;padding:14px}'+
'.xcm[hidden]{display:none}'+
'.xcb{background:var(--panel,#fff);color:var(--fg,#111);border-radius:22px;width:min(380px,100%);max-height:92dvh;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:12px;box-shadow:0 30px 80px rgba(0,0,0,.35);font-family:var(--f-ar,system-ui)}'+
'.xch{display:flex;align-items:center;gap:10px}.xch h3{margin:0;font-size:17px;flex:1}'+
'.xcx{border:0;background:var(--bg,#eee);color:inherit;width:36px;height:36px;border-radius:50%;font-size:16px;cursor:pointer}'+
'.xcpv{display:flex;gap:10px;align-items:stretch}.xcnew{flex:1;height:54px;direction:ltr;border-radius:14px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);display:flex;align-items:flex-end;justify-content:flex-end;padding:6px 10px;font:700 13px/1 ui-monospace,monospace}'+
'.xcold{width:54px;border-radius:14px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);cursor:pointer}'+
'.xcsv{position:relative;height:180px;border-radius:14px;touch-action:none;cursor:crosshair;background-image:linear-gradient(to top,#000,rgba(0,0,0,0)),linear-gradient(to right,#fff,rgba(255,255,255,0))}'+
'.xcsv i,.xchue i{position:absolute;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.35),0 2px 6px rgba(0,0,0,.35);pointer-events:none}'+
'.xchue{position:relative;height:18px;border-radius:999px;touch-action:none;cursor:pointer;background:linear-gradient(to right,#f00 0%,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,#f00 100%)}.xchue i{top:50%}'+
'.xcin{display:grid;grid-template-columns:1.6fr repeat(3,1fr) auto;gap:6px;direction:ltr}.xcin label{display:flex;flex-direction:column;gap:3px;font:700 10.5px/1 ui-monospace,monospace;opacity:.75;text-align:center}'+
'.xcin input{width:100%;min-width:0;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:10px;padding:8px 6px;font:600 14px/1 ui-monospace,monospace;text-align:center}'+
'.xcin button{align-self:end;height:36px;width:40px;border-radius:10px;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);cursor:pointer;font-size:16px}'+
'.xcsec{display:flex;flex-direction:column;gap:6px}.xcsec b{font-size:12.5px;opacity:.75}'+
'.xcgr{display:grid;grid-template-columns:repeat(8,1fr);gap:6px}.xcgr button{aspect-ratio:1;border:0;border-radius:9px;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);padding:0}'+
'.xcgr button[aria-pressed="true"]{outline:3px solid var(--fg,#111);outline-offset:2px;position:relative}.xcgr button[aria-pressed="true"]::after{content:"✓";position:absolute;inset:0;display:grid;place-items:center;font-weight:900;font-size:16px;color:#fff;text-shadow:0 0 3px #000,0 0 2px #000}'+
'.xcact{display:flex;gap:8px}.xcact button{flex:1;border-radius:999px;padding:12px;font:800 15px var(--f-ar,system-ui);cursor:pointer;border:1.5px solid var(--line,#ddd);background:var(--bg,#f2f2f2);color:inherit}.xcact .ok{background:var(--fg,#111);color:var(--bg,#fff);border-color:var(--fg,#111)}'+
'.xcbtn{display:inline-flex;align-items:center;gap:8px;border:1.5px solid var(--line,#ddd);background:var(--panel,#fff);color:var(--fg,#111);border-radius:12px;padding:6px 10px 6px 6px;cursor:pointer;font:700 12.5px ui-monospace,monospace;direction:ltr;width:100%}'+
'.xcbtn i{width:30px;height:30px;border-radius:8px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);flex:0 0 auto}'+
'.xcpal{display:flex;flex-direction:column;gap:12px}.xcslots{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}'+
'.xcslot{display:flex;align-items:center;gap:8px;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:14px;padding:8px;cursor:pointer;text-align:start;font-family:inherit}'+
'.xcslot i{width:38px;height:38px;border-radius:10px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);flex:0 0 auto}.xcslot span{display:flex;flex-direction:column;gap:2px;font-weight:800;font-size:13px}.xcslot small{font:600 11px ui-monospace,monospace;opacity:.7;direction:ltr;text-align:start}'+
'.xcppv{border-radius:16px;padding:18px 14px;display:flex;flex-direction:column;align-items:flex-start;gap:8px}.xcppv b{font-size:22px;font-weight:900;line-height:1.2}.xcppv span{border-radius:999px;padding:4px 12px;font-weight:800;font-size:13px}'+
'.xcrow{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.xcrow button{flex:0 0 auto;display:flex;border:0;padding:0;border-radius:10px;overflow:hidden;cursor:pointer;box-shadow:0 0 0 1px rgba(0,0,0,.12)}.xcrow button i{width:14px;height:34px}'+
'@media (max-width:600px){.xcm{align-items:flex-end;padding:0}.xcb{width:100%;border-radius:22px 22px 0 0;max-height:90dvh}}';
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ar';}
var TX={ar:{pick:'اختار اللون',ready:'ألوان جاهزة',recent:'اللي استخدمتها',brand:'ألوان هويتي',done:'تم',cancel:'إلغاء',drop:'التقط لون من الشاشة',copy:'انسخ الكود',copied:'انسخ ✓',pal:'ألوان من اختيارك',palD:'اختار 4 ألوان، أو ابدأ من بالِتة جاهزة وعدّل عليها.',from:'ابدأ من بالِتة جاهزة',slots:['الخلفية','النص','لون الهوية','التظليل'],title:'عنوانك هني',opt:'🎨 ألوان من اختيارك…',cur:'🎨 ألوانك'},
 en:{pick:'Pick a colour',ready:'Ready colours',recent:'Recently used',brand:'My brand',done:'Done',cancel:'Cancel',drop:'Pick a colour from the screen',copy:'Copy code',copied:'Copied ✓',pal:'Your own colours',palD:'Pick 4 colours, or start from a ready palette and adjust it.',from:'Start from a ready palette',slots:['Background','Text','Accent','Highlight'],title:'Your title',opt:'🎨 Your own colours…',cur:'🎨 Your colours'}};
function t(k){return TX[L()][k];}
var READY=['#FFFFFF','#F6EFE2','#E5E7EB','#9CA3AF','#6B7280','#374151','#1F2937','#000000',
 '#FECACA','#FED7AA','#FEF08A','#BBF7D0','#99F6E4','#BFDBFE','#DDD6FE','#FBCFE8',
 '#F87171','#FB923C','#FACC15','#4ADE80','#2DD4BF','#60A5FA','#A78BFA','#F472B6',
 '#EF4444','#F97316','#EAB308','#22C55E','#14B8A6','#3B82F6','#8B5CF6','#EC4899',
 '#B91C1C','#C2410C','#A16207','#15803D','#0F766E','#1D4ED8','#6D28D9','#BE185D',
 '#7F1D1D','#7C2D12','#713F12','#14532D','#102E33','#1E3A8A','#4C1D95','#831843'];
/* colour maths */
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function hex2rgb(h){h=String(h||'').trim().replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c;}).join('');if(!/^[0-9a-f]{6}$/i.test(h))return null;return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function rgb2hex(r){return '#'+r.map(function(v){return ('0'+clamp(Math.round(v),0,255).toString(16)).slice(-2);}).join('').toUpperCase();}
function rgb2hsv(r){var R=r[0]/255,G=r[1]/255,B=r[2]/255,mx=Math.max(R,G,B),mn=Math.min(R,G,B),d=mx-mn,h=0;if(d){if(mx===R)h=((G-B)/d)%6;else if(mx===G)h=(B-R)/d+2;else h=(R-G)/d+4;h*=60;if(h<0)h+=360;}return [h,mx?d/mx:0,mx];}
function hsv2rgb(h,s,v){var c=v*s,x=c*(1-Math.abs((h/60)%2-1)),m=v-c,r=[0,0,0];if(h<60)r=[c,x,0];else if(h<120)r=[x,c,0];else if(h<180)r=[0,c,x];else if(h<240)r=[0,x,c];else if(h<300)r=[x,0,c];else r=[c,0,x];return [(r[0]+m)*255,(r[1]+m)*255,(r[2]+m)*255];}
function norm(h){var r=hex2rgb(h);return r?rgb2hex(r):null;}
function lum(h){var r=hex2rgb(h)||[0,0,0];return (0.299*r[0]+0.587*r[1]+0.114*r[2])/255;}
function recent(){try{return JSON.parse(localStorage.getItem('ml-colors'))||[];}catch(e){return [];}}
function addRecent(h){var a=recent().filter(function(x){return x!==h;});a.unshift(h);try{localStorage.setItem('ml-colors',JSON.stringify(a.slice(0,16)));}catch(e){}}
function brandCols(){try{var b=JSON.parse(localStorage.getItem('ml-brand'));if(b&&b.bg)return [b.bg,b.tx,b.ac,b.hl].map(norm).filter(Boolean);}catch(e){}return [];}
var stack=0;
function modal(){var m=document.createElement('div');m.className='xcm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.style.zIndex=2000+(stack++)*2;document.body.appendChild(m);return m;}
function close(m){stack=Math.max(0,stack-1);m.remove();}
function grid(cols,cur){return '<div class="xcgr">'+cols.map(function(c){return '<button type="button" data-c="'+c+'" style="background:'+c+'" aria-label="'+c+'" title="'+c+'"'+(c===cur?' aria-pressed="true"':'')+'></button>';}).join('')+'</div>';}

/* single colour: o={value,title,onInput,onDone,onCancel} */
function pick(o){var start=norm(o.value)||'#E3643F',hsv=rgb2hsv(hex2rgb(start)),m=modal(),rc=recent(),bc=brandCols();
  m.innerHTML='<div class="xcb"><div class="xch"><h3>'+(o.title||t('pick'))+'</h3><button type="button" class="xcx" data-x aria-label="'+t('cancel')+'">✕</button></div>'+
   '<div class="xcpv"><button type="button" class="xcold" title="'+start+'" style="background:'+start+'" aria-label="'+start+'"></button><div class="xcnew"></div></div>'+
   '<div class="xcsv"><i></i></div><div class="xchue"><i></i></div>'+
   '<div class="xcin"><label>HEX<input type="text" maxlength="7" data-k="hex" spellcheck="false"></label><label>R<input type="number" min="0" max="255" data-k="0"></label><label>G<input type="number" min="0" max="255" data-k="1"></label><label>B<input type="number" min="0" max="255" data-k="2"></label>'+
   (window.EyeDropper?'<button type="button" data-ed title="'+t('drop')+'" aria-label="'+t('drop')+'">💧</button>':'<button type="button" data-cp title="'+t('copy')+'" aria-label="'+t('copy')+'">⧉</button>')+'</div>'+
   (rc.length?'<div class="xcsec"><b>'+t('recent')+'</b>'+grid(rc.slice(0,8),start)+'</div>':'')+
   (bc.length?'<div class="xcsec"><b>'+t('brand')+'</b>'+grid(bc,start)+'</div>':'')+
   '<div class="xcsec"><b>'+t('ready')+'</b>'+grid(READY,start)+'</div>'+
   '<div class="xcact"><button type="button" data-x>'+t('cancel')+'</button><button type="button" class="ok" data-ok>'+t('done')+'</button></div></div>';
  var sv=m.querySelector('.xcsv'),hue=m.querySelector('.xchue'),nw=m.querySelector('.xcnew'),ins=m.querySelectorAll('.xcin input'),cur=start;
  function paint(skip){var rgb=hsv2rgb(hsv[0],hsv[1],hsv[2]);cur=rgb2hex(rgb);sv.style.backgroundColor='hsl('+hsv[0]+',100%,50%)';var si=sv.querySelector('i');si.style.left=(hsv[1]*100)+'%';si.style.top=((1-hsv[2])*100)+'%';si.style.background=cur;
    var hi=hue.querySelector('i');hi.style.left=(hsv[0]/360*100)+'%';hi.style.background='hsl('+hsv[0]+',100%,50%)';nw.style.background=cur;nw.style.color=lum(cur)>.6?'#111':'#fff';nw.textContent=cur;
    ins.forEach(function(i){if(i===skip)return;var k=i.dataset.k;i.value=k==='hex'?cur:Math.round(hex2rgb(cur)[+k]);});
    m.querySelectorAll('.xcgr button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c===cur?'true':'false');});if(o.onInput)o.onInput(cur);}
  function set(h,skip){var r=hex2rgb(h);if(!r)return;var n=rgb2hsv(r);if(!n[1]||!n[2])n[0]=hsv[0];hsv=n;paint(skip);}
  function drag(el,fn){el.addEventListener('pointerdown',function(e){e.preventDefault();el.setPointerCapture(e.pointerId);fn(e);var mv=function(ev){fn(ev);},up=function(){el.removeEventListener('pointermove',mv);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up);};el.addEventListener('pointermove',mv);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);});}
  drag(sv,function(e){var r=sv.getBoundingClientRect();hsv[1]=clamp((e.clientX-r.left)/r.width,0,1);hsv[2]=clamp(1-(e.clientY-r.top)/r.height,0,1);paint();});
  drag(hue,function(e){var r=hue.getBoundingClientRect();hsv[0]=clamp((e.clientX-r.left)/r.width,0,1)*359.9;paint();});
  ins.forEach(function(i){i.addEventListener('input',function(){if(i.dataset.k==='hex'){var v=i.value.trim();if(v[0]!=='#')v='#'+v;if(/^#[0-9a-f]{6}$/i.test(v))set(v,i);}else{var r=[0,1,2].map(function(k){return clamp(+ins[k+1].value||0,0,255);});set(rgb2hex(r),i);}});});
  m.addEventListener('click',function(e){var b=e.target.closest('[data-c]');if(b){set(b.dataset.c);return;}
    if(e.target.closest('.xcold')){set(start);return;}
    if(e.target.closest('[data-ed]')){new window.EyeDropper().open().then(function(r){set(r.sRGBHex);}).catch(function(){});return;}
    var cp=e.target.closest('[data-cp]');if(cp){try{navigator.clipboard.writeText(cur);cp.textContent='✓';setTimeout(function(){cp.textContent='⧉';},1200);}catch(_){}return;}
    if(e.target.closest('[data-ok]')){addRecent(cur);close(m);if(o.onDone)o.onDone(cur);return;}
    if(e.target===m||e.target.closest('[data-x]')){close(m);if(o.onInput)o.onInput(start);if(o.onCancel)o.onCancel();}});
  m.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();close(m);if(o.onInput)o.onInput(start);if(o.onCancel)o.onCancel();}});
  paint();setTimeout(function(){var ok=m.querySelector('[data-ok]');if(ok)ok.focus({preventScroll:true});},30);return m;}

/* native <input type=color> → modern button + picker; existing code keeps working through the input's value and its input/change events */
var VD=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value');
function enhance(inp,title){if(inp._xc)return;inp._xc=1;var b=document.createElement('button');b.type='button';b.className='xcbtn';b.innerHTML='<i></i><span></span>';inp.after(b);inp.style.display='none';
  function show(){var v=(VD.get.call(inp)||'#000000').toUpperCase();b.querySelector('i').style.background=v;b.querySelector('span').textContent=v;}
  Object.defineProperty(inp,'value',{configurable:true,get:function(){return VD.get.call(inp);},set:function(v){VD.set.call(inp,v);show();}});
  b.addEventListener('click',function(e){e.preventDefault();var ttl=typeof title==='function'?title():title;pick({value:inp.value,title:ttl,onInput:function(h){VD.set.call(inp,h.toLowerCase());show();inp.dispatchEvent(new Event('input',{bubbles:true}));},onDone:function(){inp.dispatchEvent(new Event('change',{bubbles:true}));}});});
  show();return b;}

/* palettes: "CU:#bg,#tx,#ac,#hl" works anywhere a palette id is stored */
function cuId(p){return 'CU:'+[p.bg,p.tx,p.ac,p.hl].map(norm).join(',');}
function cuParse(id){if(!/^CU:/.test(id||''))return null;var a=id.slice(3).split(',').map(norm);if(a.length!==4||a.some(function(x){return !x;}))return null;
  return {id:a.join('/'),en:'custom colours',ar:'ألوان من اختيارك',bg:a[0],tx:a[1],ac:a[2],hl:a[3],ue:'Your own colours',ua:'ألوانك الخاصة',cu:id};}
function palette(o){var p={bg:'#102E33',tx:'#F6EFE2',ac:'#E3643F',hl:'#FFC857'};if(o.value)['bg','tx','ac','hl'].forEach(function(k){if(o.value[k])p[k]=norm(o.value[k])||p[k];});
  var m=modal(),K=['bg','tx','ac','hl'],cps=(typeof CPS!=='undefined'?CPS:[]);
  m.innerHTML='<div class="xcb xcpal"><div class="xch"><h3>'+t('pal')+'</h3><button type="button" class="xcx" data-x aria-label="'+t('cancel')+'">✕</button></div><p style="margin:0;font-size:13px;opacity:.8;line-height:1.6">'+t('palD')+'</p>'+
   '<div class="xcppv"><b></b><span></span></div><div class="xcslots">'+K.map(function(k,i){return '<button type="button" class="xcslot" data-s="'+k+'"><i></i><span>'+t('slots')[i]+'<small></small></span></button>';}).join('')+'</div>'+
   (cps.length?'<div class="xcsec"><b>'+t('from')+'</b><div class="xcrow">'+cps.map(function(c,i){return '<button type="button" data-p="'+i+'" title="'+c.id+'" aria-label="'+c.id+'">'+K.map(function(k){return '<i style="background:'+c[k]+'"></i>';}).join('')+'</button>';}).join('')+'</div></div>':'')+
   '<div class="xcact"><button type="button" data-x>'+t('cancel')+'</button><button type="button" class="ok" data-ok>'+t('done')+'</button></div></div>';
  function paint(){var pv=m.querySelector('.xcppv');pv.style.background=p.bg;pv.style.boxShadow='inset 0 -8px 0 '+p.hl;var b=pv.querySelector('b');b.textContent=t('title');b.style.color=p.tx;var s=pv.querySelector('span');s.textContent='@alansari.tech';s.style.background=p.ac;s.style.color=p.bg;
    K.forEach(function(k){var sl=m.querySelector('[data-s="'+k+'"]');sl.querySelector('i').style.background=p[k];sl.querySelector('small').textContent=p[k];});}
  m.addEventListener('click',function(e){var sl=e.target.closest('[data-s]');if(sl){var k=sl.dataset.s,old=p[k];pick({value:p[k],title:t('slots')[K.indexOf(k)],onInput:function(h){p[k]=h;paint();},onCancel:function(){p[k]=old;paint();}});return;}
    var pb=e.target.closest('[data-p]');if(pb){var c=cps[+pb.dataset.p];K.forEach(function(k){p[k]=norm(c[k]);});paint();return;}
    if(e.target.closest('[data-ok]')){close(m);if(o.onDone)o.onDone(p,cuId(p));return;}
    if(e.target===m||e.target.closest('[data-x]')){close(m);if(o.onCancel)o.onCancel();}});
  m.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();close(m);if(o.onCancel)o.onCancel();}});
  paint();return m;}
/* add "your own colours" to a palette <select>; keepVal = value to keep selected after the options are rebuilt */
function opts(sel,keepVal){var v=keepVal!==undefined?keepVal:sel.value;Array.prototype.slice.call(sel.querySelectorAll('option[data-xc]')).forEach(function(o){o.remove();});
  var first=sel.options[0]||null;
  var o2=document.createElement('option');o2.value='__CU';o2.dataset.xc=1;o2.textContent=t('opt');sel.insertBefore(o2,first);
  if(/^CU:/.test(v||'')){var o1=document.createElement('option');o1.value=v;o1.dataset.xc=1;o1.textContent=t('cur');sel.insertBefore(o1,first);}
  sel.value=v;if(sel.value!==v||sel.value==='__CU'){var f=Array.prototype.filter.call(sel.options,function(o){return o.value!=='__CU';})[0];if(Array.prototype.some.call(sel.options,function(o){return o.value==='';}))sel.value='';else if(f)sel.value=f.value;}}
/* select change helper: returns true if it handled the "your own colours" choice */
function onSel(sel,prev,getPal,done){if(sel.value!=='__CU')return false;var base=getPal&&getPal(prev);
  palette({value:base||null,onDone:function(p,id){opts(sel,id);done(id);},onCancel:function(){sel.value=prev||'';done(null);}});return true;}
/* wire a palette <select>: "your own colours…" opens the palette editor; after(id) runs when a custom palette was chosen */
function wire(sel,getPal,after){if(sel._xw)return;sel._xw=1;sel._prev=sel.value;
  var h=function(e){if(sel.value!=='__CU'){if(e.type==='change')sel._prev=sel.value;return;}e.stopImmediatePropagation();if(sel._open)return;sel._open=1;
    onSel(sel,sel._prev,getPal,function(id){sel._open=0;if(id){sel._prev=id;if(after)after(id);}});};
  sel.addEventListener('input',h,true);sel.addEventListener('change',h,true);}
return {pick:pick,enhance:enhance,palette:palette,cuId:cuId,cuParse:cuParse,opts:opts,onSel:onSel,wire:wire,norm:norm,modal:modal,close:close,t:t};
})();

/* --- font picker: every font shown in its own shape, the chosen one marked and scrolled to --- */
var XFont=(function(){
var st=document.createElement('style');st.textContent=
'.xfbtn{display:flex;align-items:center;gap:10px;width:100%;border:1.5px solid var(--line,#ddd);background:var(--panel,#fff);color:var(--fg,#111);border-radius:12px;padding:8px 12px;cursor:pointer;text-align:start;font-family:var(--f-ar,system-ui)}'+
'.xfbtn b{font-size:20px;font-weight:700;line-height:1.3;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xfbtn small{font:600 11.5px ui-monospace,monospace;opacity:.7;direction:ltr;white-space:nowrap}.xfbtn em{font-style:normal;opacity:.6}'+
'.xfq{width:100%;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:999px;padding:10px 14px;font:inherit;font-size:16px}'+
'.xfch{display:flex;gap:6px}.xfch button{border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:999px;padding:6px 14px;font:700 13px var(--f-ar,system-ui);cursor:pointer}.xfch button[aria-pressed="true"]{background:var(--fg,#111);color:var(--bg,#fff);border-color:var(--fg,#111)}'+
'.xfl{display:flex;flex-direction:column;gap:6px;max-height:52dvh;overflow:auto;padding:2px}'+
'.xfr{display:flex;flex-direction:column;gap:2px;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:14px;padding:10px 12px;cursor:pointer;text-align:start;font-family:inherit}'+
'.xfr b{font-size:24px;font-weight:700;line-height:1.35;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xfr small{font:600 11.5px ui-monospace,monospace;opacity:.7;direction:ltr;text-align:start}'+
'.xfr[aria-pressed="true"]{border-color:var(--acc2,#E3643F);box-shadow:0 0 0 2px var(--acc2,#E3643F);background:color-mix(in srgb,var(--acc2,#E3643F) 8%,var(--panel,#fff))}'+
'.xfr[aria-pressed="true"] small::after{content:"  ✓";color:var(--acc2,#E3643F)}';
document.head.appendChild(st);
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ar';}
var TX={ar:{t:'الخط',q:'دوّر باسم الخط أو رقمه',all:'الكل',ar:'عربي',en:'English',cur:'المختار حالياً',orig:'خط الحركة الأصلي',sAr:'أهلاً يا جماعة',sEn:'Hello there 123'},en:{t:'Font',q:'Search by font name or ID',all:'All',ar:'Arabic',en:'English',cur:'Current',orig:'The motion’s own font',sAr:'أهلاً يا جماعة',sEn:'Hello there 123'}};
function t(k){return TX[L()][k];}
var VD=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value');
function kindOf(id){if(typeof FONTS==='undefined')return '';for(var i=0;i<FONTS.length;i++)if(FONTS[i].id===id)return FONTS[i].k;return '';}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function sampleFor(id,o){var s=o.sample&&o.sample();if(s)return s;return kindOf(id)==='en'?t('sEn'):t('sAr');}
/* o={famOf(id), sample(), title} */
function wire(sel,o){if(sel._xf)return sel._xf;o=o||{};var b=document.createElement('button');b.type='button';b.className='xfbtn';b.innerHTML='<b></b><small></small><em>▾</em>';sel.after(b);sel.style.display='none';
  function show(){var v=VD.get.call(sel),op=sel.selectedOptions&&sel.selectedOptions[0],bb=b.querySelector('b');bb.textContent=sampleFor(v,o);bb.style.fontFamily=v&&o.famOf?o.famOf(v):'';b.querySelector('small').textContent=op?op.textContent:'';}
  Object.defineProperty(sel,'value',{configurable:true,get:function(){return VD.get.call(sel);},set:function(v){VD.set.call(sel,v);show();}});
  new MutationObserver(show).observe(sel,{childList:true,subtree:true});sel.addEventListener('change',show);
  b.addEventListener('click',function(e){e.preventDefault();open(sel,o,show);});
  sel._xf={refresh:show};show();return sel._xf;}
function open(sel,o,show){var m=XCol.modal(),cur=VD.get.call(sel),flt='all',opts=Array.prototype.slice.call(sel.options).filter(function(x){return x.value!=='__CU';});
  m.innerHTML='<div class="xcb"><div class="xch"><h3>'+esc(o.title||t('t'))+'</h3><button type="button" class="xcx" data-x aria-label="✕">✕</button></div>'+
   '<input class="xfq" type="search" placeholder="'+esc(t('q'))+'" aria-label="'+esc(t('q'))+'"><div class="xfch"><button type="button" data-k="all" aria-pressed="true">'+t('all')+'</button><button type="button" data-k="ar">'+t('ar')+'</button><button type="button" data-k="en">'+t('en')+'</button></div>'+
   '<div class="xfl"></div></div>';
  var list=m.querySelector('.xfl'),q=m.querySelector('.xfq');
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var r=x.target;if(r.dataset.v&&o.famOf)r.querySelector('b').style.fontFamily=o.famOf(r.dataset.v);io.unobserve(r);}});},{root:list,rootMargin:'200px'}):null;
  function row(op){var v=op.value,r=document.createElement('button');r.type='button';r.className='xfr';r.dataset.v=v;r.setAttribute('aria-pressed',v===cur?'true':'false');
    r.innerHTML='<b></b><small></small>';r.querySelector('b').textContent=v?sampleFor(v,o):sampleFor('',o);r.querySelector('small').textContent=v?op.textContent:t('orig');
    if(io)io.observe(r);else if(v&&o.famOf)r.querySelector('b').style.fontFamily=o.famOf(v);return r;}
  function draw(){var w=(q.value||'').trim().toLowerCase();list.innerHTML='';
    opts.filter(function(op){if(flt!=='all'&&op.value&&kindOf(op.value)!==flt)return false;if(flt!=='all'&&!op.value)return false;return !w||op.textContent.toLowerCase().indexOf(w)>-1||op.value.toLowerCase().indexOf(w)>-1;}).forEach(function(op){list.appendChild(row(op));});
    var c=list.querySelector('[aria-pressed="true"]');if(c)c.scrollIntoView({block:'center'});}
  q.addEventListener('input',draw);
  m.addEventListener('click',function(e){var k=e.target.closest('[data-k]');if(k){flt=k.dataset.k;m.querySelectorAll('.xfch button').forEach(function(x){x.setAttribute('aria-pressed',x===k?'true':'false');});draw();return;}
    var r=e.target.closest('.xfr');if(r){VD.set.call(sel,r.dataset.v);show();sel.dispatchEvent(new Event('input',{bubbles:true}));sel.dispatchEvent(new Event('change',{bubbles:true}));XCol.close(m);if(io)io.disconnect();return;}
    if(e.target===m||e.target.closest('[data-x]')){XCol.close(m);if(io)io.disconnect();}});
  m.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();XCol.close(m);if(io)io.disconnect();}});
  draw();setTimeout(function(){var c=list.querySelector('[aria-pressed="true"]');(c||q).focus({preventScroll:true});if(c)c.scrollIntoView({block:'center'});},30);}
return {wire:wire};
})();

/* --- palette picker: every palette shown as colours, the chosen one marked ✓ and scrolled to; «your own colours» first --- */
var XPal=(function(){
var st=document.createElement('style');st.textContent=
'.xpbtn{display:flex;align-items:center;gap:10px;width:100%;border:1.5px solid var(--line,#ddd);background:var(--panel,#fff);color:var(--fg,#111);border-radius:12px;padding:8px 12px;cursor:pointer;text-align:start;font:700 13.5px var(--f-ar,system-ui)}'+
'.xpbtn .xpsw,.xpr .xpsw{display:flex;flex:0 0 auto;border-radius:8px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}.xpsw i{width:16px;height:30px}'+
'.xpbtn span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.xpbtn em{font-style:normal;opacity:.6}'+
'.xpl{display:flex;flex-direction:column;gap:6px;max-height:56dvh;overflow:auto;padding:2px}'+
'.xpr{display:flex;align-items:center;gap:10px;border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:14px;padding:8px 12px;cursor:pointer;text-align:start;font:700 14px var(--f-ar,system-ui)}'+
'.xpr .xpsw i{width:20px;height:34px}.xpr span{flex:1}.xpr small{font:600 11px ui-monospace,monospace;opacity:.65;direction:ltr}'+
'.xpr[aria-pressed="true"]{border-color:var(--acc2,#E3643F);box-shadow:0 0 0 2px var(--acc2,#E3643F);background:color-mix(in srgb,var(--acc2,#E3643F) 8%,var(--panel,#fff))}'+
'.xpr[aria-pressed="true"]::after{content:"✓";font-weight:900;color:var(--acc2,#E3643F);font-size:18px}'+
'.xpr.cu{border-style:dashed;border-color:var(--acc2,#E3643F)}.xpwh{width:68px;height:34px;border-radius:8px;background:conic-gradient(#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00);flex:0 0 auto}';
document.head.appendChild(st);
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ar';}
var VD=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value');
function sw(p){return p?'<span class="xpsw"><i style="background:'+p.bg+'"></i><i style="background:'+p.tx+'"></i><i style="background:'+p.ac+'"></i><i style="background:'+p.hl+'"></i></span>':'';}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
/* o={resolve(id)->palette|null, title} */
function wire(sel,o){if(sel._xp)return sel._xp;o=o||{};var b=document.createElement('button');b.type='button';b.className='xpbtn';sel.after(b);sel.style.display='none';
  function show(){var v=VD.get.call(sel),op=sel.selectedOptions&&sel.selectedOptions[0],p=v&&v!=='__CU'&&o.resolve?o.resolve(v):null;b.innerHTML=sw(p)+'<span>'+esc(op?op.textContent:'')+'</span><em>▾</em>';}
  Object.defineProperty(sel,'value',{configurable:true,get:function(){return VD.get.call(sel);},set:function(v){VD.set.call(sel,v);show();}});
  new MutationObserver(show).observe(sel,{childList:true,subtree:true});sel.addEventListener('change',show);
  b.addEventListener('click',function(e){e.preventDefault();open(sel,o,show);});
  sel._xp={refresh:show};show();return sel._xp;}
function open(sel,o,show){var m=XCol.modal(),cur=VD.get.call(sel);
  m.innerHTML='<div class="xcb"><div class="xch"><h3>'+esc(o.title||(L()==='ar'?'الألوان':'Colours'))+'</h3><button type="button" class="xcx" data-x aria-label="✕">✕</button></div><div class="xpl"></div></div>';
  var list=m.querySelector('.xpl');
  Array.prototype.forEach.call(sel.options,function(op){var v=op.value,r=document.createElement('button');r.type='button';r.className='xpr'+(v==='__CU'?' cu':'');r.dataset.v=v;r.setAttribute('aria-pressed',v===cur?'true':'false');
    var p=v&&v!=='__CU'&&o.resolve?o.resolve(v):null;r.innerHTML=(v==='__CU'?'<span class="xpwh"></span>':sw(p))+'<span>'+esc(op.textContent)+'</span>'+(p?'<small>'+p.bg+'</small>':'');list.appendChild(r);});
  m.addEventListener('click',function(e){var r=e.target.closest('.xpr');if(r){XCol.close(m);VD.set.call(sel,r.dataset.v);show();sel.dispatchEvent(new Event('input',{bubbles:true}));sel.dispatchEvent(new Event('change',{bubbles:true}));return;}
    if(e.target===m||e.target.closest('[data-x]'))XCol.close(m);});
  m.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();XCol.close(m);}});
  setTimeout(function(){var c=list.querySelector('[aria-pressed="true"]');if(c){c.scrollIntoView({block:'center'});c.focus({preventScroll:true});}},30);}
return {wire:wire};
})();
