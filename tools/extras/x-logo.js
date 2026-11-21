/* --- the user's logo: upload, remove the background and clean it, then show it on previews and videos (stays on the device) --- */
var XLogo=(function(){
var st=document.createElement('style');st.textContent=
'.xlg-chk{background:repeating-conic-gradient(#d9d4cc 0 25%,#fff 0 50%) 0 0/18px 18px;border-radius:14px;display:grid;place-items:center;min-height:150px;padding:14px}'+
'.xlg-chk img{max-width:100%;max-height:170px;display:block}'+
'.xlg-two{display:grid;grid-template-columns:1fr 1fr;gap:8px}.xlg-two div{position:relative;aspect-ratio:9/12;border-radius:12px;overflow:hidden}'+
'.xlg-two div img{position:absolute}'+
'.xlg-row{display:flex;flex-wrap:wrap;gap:6px}.xlg-row button{border:1.5px solid var(--line,#ddd);background:var(--bg,#f6f6f6);color:inherit;border-radius:999px;padding:7px 12px;font:700 13px var(--f-ar,system-ui);cursor:pointer}'+
'.xlg-row button[aria-pressed="true"]{background:var(--fg,#111);color:var(--bg,#fff);border-color:var(--fg,#111)}'+
'.xlg-f{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:700}.xlg-f input[type=range]{width:100%;direction:ltr;accent-color:var(--acc2,#E3643F)}'+
'.xlg-up{display:flex;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--acc2,#E3643F);border-radius:14px;padding:16px;font-weight:800;cursor:pointer;background:transparent;color:inherit;font-family:inherit;font-size:15px;width:100%}'+
'.xlg-chkl{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700}.xlg-chkl input{width:20px;height:20px;accent-color:var(--acc2,#E3643F)}'+
'.xlgi{position:absolute;z-index:40;pointer-events:none;object-fit:contain;max-width:none!important}'+
'body:not(.xlg-on) .xlgi{display:none}';
document.head.appendChild(st);
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ar';}
var TX={ar:{t:'شعارك',d:'ارفع صورة شعارك (PNG أو JPG). أشيل الخلفية وأنظّفه بروحي، وتقدر تختار مكانه وحجمه. الشعار يبقى بجهازك وما ينرفع لأي مكان.',up:'⬆ ارفع صورة الشعار',ch:'⬆ غيّر الصورة',bg:'شيل الخلفية',tol:'قوة الشيل',trim:'قص الفراغ اللي حوله',col:'لون الشعار',cO:'الأصلي',cW:'أبيض',cB:'أسود',cA:'لون هويتي',pos:'المكان',pTR:'فوق يمين',pTL:'فوق يسار',pBR:'تحت يمين',pBL:'تحت يسار',size:'الحجم',op:'الشفافية',show:'اعرضه على معاينات الحركات',vid:'حطه على فيديو الاستوديو',save:'✓ احفظ الشعار',rm:'🗑 شيل الشعار',cancel:'إلغاء',dark:'على خلفية غامقة',light:'على خلفية فاتحة',err:'ما قدرت أقرا الصورة. جرّب PNG أو JPG.',big:'الصورة كبيرة، صغّرتها تلقائياً.'},
 en:{t:'Your logo',d:'Upload your logo image (PNG or JPG). I remove the background and clean it, and you choose where it goes and how big. The logo stays on your device.',up:'⬆ Upload the logo image',ch:'⬆ Change image',bg:'Remove the background',tol:'Removal strength',trim:'Trim the empty space around it',col:'Logo colour',cO:'Original',cW:'White',cB:'Black',cA:'My brand colour',pos:'Position',pTR:'Top right',pTL:'Top left',pBR:'Bottom right',pBL:'Bottom left',size:'Size',op:'Opacity',show:'Show it on the motion previews',vid:'Put it on Studio videos',save:'✓ Save logo',rm:'🗑 Remove logo',cancel:'Cancel',dark:'On a dark background',light:'On a light background',err:'Could not read the image. Try PNG or JPG.',big:'The image was large, so it was scaled down.'}};
function t(k){return TX[L()][k];}
function get(){try{var o=JSON.parse(localStorage.getItem('ml-logo'));return o&&o.src?o:null;}catch(e){return null;}}
function put(o){try{if(o)localStorage.setItem('ml-logo',JSON.stringify(o));else localStorage.removeItem('ml-logo');}catch(e){return false;}return true;}
var blobUrl=null,imgEl=null;
function url(){var o=get();if(!o)return null;if(blobUrl&&blobUrl._s===o.src)return blobUrl.u;try{var b=atob(o.src.split(',')[1]),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);if(blobUrl)URL.revokeObjectURL(blobUrl.u);blobUrl={u:URL.createObjectURL(new Blob([a],{type:'image/png'})),_s:o.src};return blobUrl.u;}catch(e){return o.src;}}
function image(){var o=get();if(!o)return null;if(imgEl&&imgEl._s===o.src)return imgEl;imgEl=new Image();imgEl._s=o.src;imgEl.src=o.src;return imgEl;}
function brandAc(){try{var b=JSON.parse(localStorage.getItem('ml-brand'));return b&&b.ac?b.ac:'#E3643F';}catch(e){return '#E3643F';}}
function hexRgb(h){h=String(h).replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
/* raw image (dataURL) + options → cleaned PNG dataURL */
function process(raw,o){return new Promise(function(res,rej){var im=new Image();im.onload=function(){try{
  var W=im.naturalWidth,H=im.naturalHeight,k=Math.min(1,700/Math.max(W,H));W=Math.max(1,Math.round(W*k));H=Math.max(1,Math.round(H*k));
  var c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d',{willReadFrequently:true});x.drawImage(im,0,0,W,H);var D=x.getImageData(0,0,W,H),d=D.data;
  if(o.bg){/* background colour = the most common border colour; flood fill from the edges */
    var hist={},bx=[];function samp(i){var p=i*4;if(d[p+3]<20)return;var key=(d[p]>>4)+','+(d[p+1]>>4)+','+(d[p+2]>>4);hist[key]=(hist[key]||0)+1;bx.push(i);}
    for(var i=0;i<W;i++){samp(i);samp((H-1)*W+i);}for(var j=0;j<H;j++){samp(j*W);samp(j*W+W-1);}
    var best=null,bn=0;Object.keys(hist).forEach(function(q){if(hist[q]>bn){bn=hist[q];best=q;}});
    if(best){var sr=0,sg=0,sb=0,n=0;bx.forEach(function(ix){var p=ix*4;if((d[p]>>4)+','+(d[p+1]>>4)+','+(d[p+2]>>4)===best){sr+=d[p];sg+=d[p+1];sb+=d[p+2];n++;}});sr/=n;sg/=n;sb/=n;
      var tol=o.tol||40,soft=tol*0.6,seen=new Uint8Array(W*H),q=new Int32Array(W*H),qh=0,qt=0;
      function dist(p){var a=d[p]-sr,b=d[p+1]-sg,e=d[p+2]-sb;return Math.sqrt(a*a+b*b+e*e);}
      function push(ix){if(seen[ix])return;seen[ix]=1;var p=ix*4;if(d[p+3]<20){q[qt++]=ix;return;}var ds=dist(p);if(ds<=tol+soft){q[qt++]=ix;}}
      for(i=0;i<W;i++){push(i);push((H-1)*W+i);}for(j=0;j<H;j++){push(j*W);push(j*W+W-1);}
      while(qh<qt){var ix=q[qh++],p=ix*4,ds=d[p+3]<20?0:dist(p);
        if(ds<=tol)d[p+3]=0;else{d[p+3]=Math.round(d[p+3]*Math.min(1,(ds-tol)/soft));continue;}
        var xx=ix%W,yy=(ix/W)|0;if(xx>0)push(ix-1);if(xx<W-1)push(ix+1);if(yy>0)push(ix-W);if(yy<H-1)push(ix+W);}}}
  /* clean: drop faint pixels left behind */
  for(var p2=3;p2<d.length;p2+=4)if(d[p2]<14)d[p2]=0;
  if(o.col&&o.col!=='orig'){var rgb=o.col==='white'?[255,255,255]:o.col==='black'?[17,17,17]:hexRgb(brandAc());for(p2=0;p2<d.length;p2+=4){if(d[p2+3]){d[p2]=rgb[0];d[p2+1]=rgb[1];d[p2+2]=rgb[2];}}}
  x.putImageData(D,0,0);
  var out=c;if(o.trim){var x0=W,y0=H,x1=-1,y1=-1;for(var yy2=0;yy2<H;yy2++)for(var xx2=0;xx2<W;xx2++)if(d[(yy2*W+xx2)*4+3]>14){if(xx2<x0)x0=xx2;if(xx2>x1)x1=xx2;if(yy2<y0)y0=yy2;if(yy2>y1)y1=yy2;}
    if(x1>=x0&&y1>=y0){var pad=Math.round(Math.max(x1-x0,y1-y0)*0.03),cw=x1-x0+1+pad*2,ch=y1-y0+1+pad*2,c2=document.createElement('canvas');c2.width=cw;c2.height=ch;c2.getContext('2d').drawImage(c,x0-pad,y0-pad,cw,ch,0,0,cw,ch);out=c2;}}
  res({src:out.toDataURL('image/png'),w:out.width,h:out.height});}catch(e){rej(e);}};im.onerror=rej;im.src=raw;});}
/* where the logo sits inside a box of w×h */
function place(o,w,h){var lw=w*(o.size||18)/100,lh=lw*(o.h||1)/(o.w||1);if(lh>h*0.4){lh=h*0.4;lw=lh*(o.w||1)/(o.h||1);}var m=Math.round(w*0.04),p=o.pos||'tr',rtlFlip=false;
  var x=p==='tl'||p==='bl'?m:w-lw-m,y=p==='tl'||p==='tr'?m:h-lh-m;return {x:x,y:y,w:lw,h:lh};}
/* previews: one <img> per stage, positioned with CSS */
var cssEl=document.createElement('style');document.head.appendChild(cssEl);
function previewCss(){var o=get();document.body&&document.body.classList.toggle('xlg-on',!!(o&&o.show!==false));if(!o){cssEl.textContent='';return;}
  var p=o.pos||'tr',s=(o.size||18),m='4%',ar=(o.h||1)/(o.w||1);cssEl.textContent='.xlgi{width:'+s+'%;max-height:40%;opacity:'+((o.op||90)/100)+';'+(p[0]==='t'?'top:'+m:'bottom:'+m)+';'+(p[1]==='r'?'right:'+m:'left:'+m)+';aspect-ratio:'+(1/ar)+'}';}
var mo=null;
function stamp(root){var u=url();if(!u)return;(root||document).querySelectorAll('.st:not(.sd-clip):not(.xlg-skip)').forEach(function(s){var im=s.querySelector(':scope>.xlgi');if(!im){im=document.createElement('img');im.className='xlgi';im.alt='';s.appendChild(im);}if(im.getAttribute('src')!==u)im.src=u;});}
function unstamp(){document.querySelectorAll('.xlgi').forEach(function(i){i.remove();});}
function previews(on){previewCss();var o=get();if(!o){unstamp();if(mo){mo.disconnect();mo=null;}return;}stamp();
  if(!mo&&window.MutationObserver){var pend=false;mo=new MutationObserver(function(){if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;stamp();});});mo.observe(document.body,{childList:true,subtree:true});}}
/* editor */
function editor(done){var cur=get(),o=cur?JSON.parse(JSON.stringify(cur)):{raw:'',bg:true,tol:40,trim:true,col:'orig',pos:'tr',size:18,op:90,show:true,vid:true},m=XCol.modal(),busy=0;
  m.innerHTML='<div class="xcb"><div class="xch"><h3>'+t('t')+'</h3><button type="button" class="xcx" data-x aria-label="✕">✕</button></div><p style="margin:0;font-size:13px;opacity:.8;line-height:1.6">'+t('d')+'</p>'+
   '<button type="button" class="xlg-up" data-up></button><input type="file" accept="image/*" hidden data-file><p class="xlg-msg" style="margin:0;font-size:12.5px;color:var(--acc2,#E3643F)"></p>'+
   '<div class="xlg-chk"><img alt=""></div>'+
   '<div class="xlg-two"><div style="background:#102E33"><img alt=""></div><div style="background:#F6EFE2"><img alt=""></div></div>'+
   '<label class="xlg-chkl"><input type="checkbox" data-k="bg">'+t('bg')+'</label><label class="xlg-f">'+t('tol')+'<input type="range" min="8" max="120" data-k="tol"></label>'+
   '<label class="xlg-chkl"><input type="checkbox" data-k="trim">'+t('trim')+'</label>'+
   '<div class="xlg-f">'+t('col')+'<div class="xlg-row" data-g="col"><button type="button" data-v="orig">'+t('cO')+'</button><button type="button" data-v="white">'+t('cW')+'</button><button type="button" data-v="black">'+t('cB')+'</button><button type="button" data-v="brand">'+t('cA')+'</button></div></div>'+
   '<div class="xlg-f">'+t('pos')+'<div class="xlg-row" data-g="pos"><button type="button" data-v="tr">'+t('pTR')+'</button><button type="button" data-v="tl">'+t('pTL')+'</button><button type="button" data-v="br">'+t('pBR')+'</button><button type="button" data-v="bl">'+t('pBL')+'</button></div></div>'+
   '<label class="xlg-f">'+t('size')+'<input type="range" min="8" max="40" data-k="size"></label><label class="xlg-f">'+t('op')+'<input type="range" min="30" max="100" data-k="op"></label>'+
   '<label class="xlg-chkl"><input type="checkbox" data-k="show">'+t('show')+'</label><label class="xlg-chkl"><input type="checkbox" data-k="vid">'+t('vid')+'</label>'+
   '<div class="xcact">'+(cur?'<button type="button" data-rm>'+t('rm')+'</button>':'<button type="button" data-x>'+t('cancel')+'</button>')+'<button type="button" class="ok" data-ok>'+t('save')+'</button></div></div>';
  var q=function(s){return m.querySelector(s);},msg=q('.xlg-msg');
  function sync(){q('[data-up]').textContent=o.raw?t('ch'):t('up');['bg','trim','show','vid'].forEach(function(k){q('[data-k="'+k+'"]').checked=o[k]!==false;});['tol','size','op'].forEach(function(k){q('[data-k="'+k+'"]').value=o[k];});
    m.querySelectorAll('[data-g] button').forEach(function(b){b.setAttribute('aria-pressed',o[b.parentNode.dataset.g]===b.dataset.v?'true':'false');});q('[data-ok]').disabled=!o.src;}
  function show(){var ims=m.querySelectorAll('.xlg-chk img,.xlg-two img');ims.forEach(function(i){i.style.display=o.src?'':'none';if(o.src)i.src=o.src;});
    m.querySelectorAll('.xlg-two div').forEach(function(b){var im=b.querySelector('img'),r=place(o,100,133);im.style.left=r.x+'%';im.style.top=(r.y/133*100)+'%';im.style.width=r.w+'%';im.style.opacity=(o.op||90)/100;});}
  var tm=null;function redo(){if(!o.raw)return;clearTimeout(tm);tm=setTimeout(function(){busy++;process(o.raw,o).then(function(r){o.src=r.src;o.w=r.w;o.h=r.h;show();sync();}).catch(function(){msg.textContent=t('err');}).then(function(){busy--;});},120);}
  q('[data-up]').addEventListener('click',function(){q('[data-file]').click();});
  q('[data-file]').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var fr=new FileReader();fr.onload=function(){var im=new Image();im.onload=function(){var k=Math.min(1,900/Math.max(im.naturalWidth,im.naturalHeight)),c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*k)||1;c.height=Math.round(im.naturalHeight*k)||1;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
      o.raw=c.toDataURL('image/png');msg.textContent=k<1?t('big'):'';redo();};im.onerror=function(){msg.textContent=t('err');};im.src=fr.result;};fr.readAsDataURL(f);e.target.value='';});
  m.querySelectorAll('[data-k]').forEach(function(i){i.addEventListener('input',function(){var k=i.dataset.k;o[k]=i.type==='checkbox'?i.checked:+i.value;if(k==='bg'||k==='tol'||k==='trim')redo();else show();});});
  m.querySelectorAll('[data-g] button').forEach(function(b){b.addEventListener('click',function(){o[b.parentNode.dataset.g]=b.dataset.v;sync();if(b.parentNode.dataset.g==='col')redo();else show();});});
  function close(){XCol.close(m);}
  m.addEventListener('click',function(e){if(e.target.closest('[data-ok]')){if(!o.src)return;var keep=JSON.parse(JSON.stringify(o));if(!put(keep)){delete keep.raw;put(keep);}close();previews();if(done)done(get());return;}
    if(e.target.closest('[data-rm]')){put(null);close();previews();if(done)done(null);return;}
    if(e.target===m||e.target.closest('[data-x]'))close();});
  m.addEventListener('keydown',function(e){if(e.key==='Escape'){e.stopPropagation();close();}});
  sync();show();}
return {get:get,url:url,image:image,place:place,editor:editor,previews:previews,process:process,t:t};
})();
