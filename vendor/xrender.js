/* Alansari.Tech video maker: turns a page element into video frames and saves an MP4.
   Works on phones and computers. Nothing leaves the device.
   XR.snap(el,W,H,skip)  draws the element as it looks right now into a W×H image.
   XR.render(o)          builds the video frame by frame and returns {blob,ext,mime}.
   XR.ac()               shared AudioContext; call it inside the click that starts the export. */
(function(){
'use strict';
var XR={};
var muxP=null;
function needMux(){if(window.Mp4Muxer)return Promise.resolve();if(muxP)return muxP;
  muxP=new Promise(function(res,rej){var s=document.createElement('script');s.src=XR.base+'mp4-muxer.js';s.onload=res;s.onerror=function(){muxP=null;rej(new Error('mux'));};document.head.appendChild(s);});return muxP;}
XR.base=(function(){var s=document.currentScript;return s&&s.src?s.src.replace(/[^\/]*$/,''):'vendor/';})();

var ac=null;
XR.ac=function(){try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();}catch(e){}return ac;};

/* ---------- fonts ---------- */
var dataP={};
function toData(url){if(dataP[url])return dataP[url];
  dataP[url]=fetch(url).then(function(r){if(!r.ok)throw 0;return r.blob();}).then(function(b){return new Promise(function(res){var fr=new FileReader();fr.onload=function(){res(fr.result);};fr.onerror=function(){res(null);};fr.readAsDataURL(b);});}).catch(function(){return null;});
  return dataP[url];}
function faces(){var out={};
  Array.prototype.forEach.call(document.styleSheets,function(sh){var rules;try{rules=sh.cssRules;}catch(e){return;}if(!rules)return;
    Array.prototype.forEach.call(rules,function(r){if(r.type!==5)return;var fam=r.style.getPropertyValue('font-family').replace(/["']/g,'').trim(),m=/url\(\s*["']?([^"')]+)["']?\s*\)/.exec(r.style.getPropertyValue('src'));
      if(fam&&m)(out[fam]=out[fam]||[]).push({url:new URL(m[1],sh.href||location.href).href,w:r.style.getPropertyValue('font-weight'),s:r.style.getPropertyValue('font-style')});});});
  return out;}
function libFace(name){if(!window.FONTS||!window.fUrl)return null;var m=/^(?:mlf|sdf)_(F[AE])(\d+)$/.exec(name),id=m?m[1]+'-'+m[2]:null,f=null,low=name.toLowerCase();
  for(var i=0;i<FONTS.length;i++)if(id?FONTS[i].id===id:String(FONTS[i].n).toLowerCase()===low){f=FONTS[i];break;}if(!f)return null;
  return [{url:new URL(fUrl(f),location.href).href,w:f.v&&f.w?f.w[0]+' '+f.w[1]:'',s:''}];}
var faceCss={};
function fontCss(fams){var all=faces(),ps=[];
  fams.forEach(function(n){if(faceCss[n]!==undefined){ps.push(Promise.resolve(faceCss[n]));return;}var list=libFace(n)||all[n];if(!list){faceCss[n]='';return;}
    ps.push(Promise.all(list.map(function(f){return toData(f.url).then(function(d){return d?'@font-face{font-family:"'+n+'";src:url('+d+');'+(f.w?'font-weight:'+f.w+';':'')+(f.s?'font-style:'+f.s+';':'')+'font-display:block}':'';});})).then(function(a){return faceCss[n]=a.join('');}));});
  return Promise.all(ps).then(function(a){return a.join('');});}

/* ---------- clone with the styles it has right now ---------- */
var SKIPP={transition:1,'transition-property':1,'transition-duration':1,'transition-delay':1,'transition-timing-function':1,'animation-name':1,'animation-duration':1,'animation-delay':1,'animation-iteration-count':1,'animation-direction':1,'animation-fill-mode':1,'animation-play-state':1,'animation-timing-function':1,'animation-composition':1,'animation-timeline':1,'animation-range-start':1,'animation-range-end':1,cursor:1,'pointer-events':1,'user-select':1,'-webkit-user-select':1,'will-change':1,'content-visibility':1,'contain-intrinsic-size':1,'contain-intrinsic-width':1,'contain-intrinsic-height':1};
function styleOf(cs){var s='';for(var i=0;i<cs.length;i++){var n=cs[i];if(n.charCodeAt(0)===45&&n.charCodeAt(1)===45)continue;if(SKIPP[n])continue;var v=cs.getPropertyValue(n);if(v==='')continue;s+=n+':'+v+';';}return s+'animation:none;transition:none;';}
function cloneTree(src,ctx){
  if(src.nodeType===3)return document.createTextNode(src.nodeValue);
  if(src.nodeType!==1)return null;
  if(ctx.skip&&src.matches&&src.matches(ctx.skip))return null;
  var cs=getComputedStyle(src);if(cs.display==='none')return null;
  var tag=src.tagName,dst;
  if(tag==='CANVAS'){dst=document.createElement('img');try{dst.src=src.toDataURL();}catch(e){}}
  else if(tag==='VIDEO'||tag==='SCRIPT'||tag==='STYLE'||tag==='IFRAME')return null;
  else dst=src.cloneNode(false);
  if(dst.removeAttribute){dst.removeAttribute('class');dst.removeAttribute('style');dst.removeAttribute('hidden');}
  dst.setAttribute('style',styleOf(cs));
  ctx.fam[cs.fontFamily]=1;
  if(tag==='IMG'&&src.currentSrc&&!/^data:/.test(src.currentSrc))ctx.imgs.push([dst,src.currentSrc]);
  var bg=cs.backgroundImage;if(bg&&bg.indexOf('url(')>-1)ctx.bgs.push([dst,bg]);
  ['::before','::after'].forEach(function(p){var ps=getComputedStyle(src,p),c=ps.content;if(!c||c==='none'||c==='normal'||ps.display==='none')return;var k='xp'+(ctx.n++);dst.setAttribute('class',((dst.getAttribute('class')||'')+' '+k).trim());ctx.rules.push('.'+k+p+'{'+styleOf(ps)+'}');ctx.fam[ps.fontFamily]=1;});
  if(tag!=='CANVAS')for(var c=src.firstChild;c;c=c.nextSibling){var k2=cloneTree(c,ctx);if(k2)dst.appendChild(k2);}
  return dst;}
function famList(map){var out={};Object.keys(map).forEach(function(v){v.split(',').forEach(function(f){f=f.trim().replace(/^["']|["']$/g,'');if(f&&!/^(serif|sans-serif|monospace|cursive|fantasy|system-ui|inherit|initial)$/.test(f))out[f]=1;});});return Object.keys(out);}
function inlineUrls(ctx){var ps=[];
  ctx.imgs.forEach(function(x){ps.push(toData(x[1]).then(function(d){if(d)x[0].setAttribute('src',d);}));});
  ctx.bgs.forEach(function(x){var st=x[0].getAttribute('style'),urls=[];x[1].replace(/url\(\s*"?([^")]+)"?\s*\)/g,function(m,u){if(!/^data:/.test(u))urls.push(u);return m;});
    ps.push(Promise.all(urls.map(function(u){return toData(u).then(function(d){if(d)st=st.split(u).join(d);});})).then(function(){x[0].setAttribute('style',st);}));});
  return Promise.all(ps);}

XR.snap=function(el,W,H,skip){
  var w=el.offsetWidth||1,h=el.offsetHeight||1,ctx={rules:[],fam:{},imgs:[],bgs:[],n:0,skip:skip||''};
  var root=cloneTree(el,ctx);if(!root)return Promise.resolve(null);
  root.setAttribute('style',root.getAttribute('style')+'position:relative;left:0;top:0;right:auto;bottom:auto;margin:0;border-radius:0;width:'+w+'px;height:'+h+'px;');
  return Promise.all([fontCss(famList(ctx.fam)),inlineUrls(ctx)]).then(function(r){
    var html=new XMLSerializer().serializeToString(root);
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><style><![CDATA['+r[0]+ctx.rules.join('')+']]></style><foreignObject x="0" y="0" width="'+w+'" height="'+h+'"><div xmlns="http://www.w3.org/1999/xhtml" style="width:'+w+'px;height:'+h+'px;overflow:hidden;position:relative">'+html+'</div></foreignObject></svg>';
    return new Promise(function(res){var img=new Image();var ok=function(){res(img);};img.onload=ok;img.onerror=function(){res(null);};img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);});
  });};

/* ---------- encoding ---------- */
function pickCodec(w,h,fps,q){if(typeof VideoEncoder==='undefined'||typeof VideoFrame==='undefined')return Promise.resolve(null);
  /* bigger frames or 60 fps need a higher H.264 level */
  var big=w*h>2100000||fps>30,list=big?['avc1.640034','avc1.640033','avc1.4d0033','avc1.640032','avc1.42003e','avc1.640028']:['avc1.640028','avc1.4d0028','avc1.420028','avc1.640033','avc1.42003e'];
  return list.reduce(function(p,c){return p.then(function(f){if(f)return f;var cfg={codec:c,width:w,height:h,bitrate:Math.round(w*h*fps*(q||0.18)),framerate:fps,avc:{format:'avc'}};
    return VideoEncoder.isConfigSupported(cfg).then(function(r){return r.supported?cfg:null;}).catch(function(){return null;});});},Promise.resolve(null));}
function resample(buf,sr){if(buf.sampleRate===sr||typeof OfflineAudioContext==='undefined')return Promise.resolve(buf);var ch=Math.min(2,buf.numberOfChannels),oc=new OfflineAudioContext(ch,Math.ceil(buf.duration*sr),sr),s=oc.createBufferSource();s.buffer=buf;s.connect(oc.destination);s.start();return oc.startRendering();}
function pickAudio(o){var buf=o.audio;if(!buf)return Promise.resolve(false);if(typeof AudioEncoder==='undefined'||typeof AudioData==='undefined')return Promise.resolve(null);
  var ch=Math.min(2,buf.numberOfChannels),a={codec:'mp4a.40.2',sampleRate:buf.sampleRate,numberOfChannels:ch,bitrate:192000},op={codec:'opus',sampleRate:48000,numberOfChannels:ch,bitrate:160000};
  return AudioEncoder.isConfigSupported(a).then(function(r){if(r.supported)return {cfg:a,mux:'aac'};
    return AudioEncoder.isConfigSupported(op).then(function(r2){if(!r2.supported)return null;return resample(buf,48000).then(function(b2){o.audio=b2;return {cfg:op,mux:'opus'};});});}).catch(function(){return null;});}
function wait(ms){return new Promise(function(r){setTimeout(r,ms);});}
XR.canWork=function(){var c=document.createElement('canvas');return (typeof VideoEncoder!=='undefined')||(!!c.captureStream&&!!window.MediaRecorder);};

/* o: {w,h,fps,n,frame:function(i,ctx,canvas)->Promise, audio:AudioBuffer|null, prog:function(0..1), stop:function()->bool} */
XR.render=function(o){
  var cv=document.createElement('canvas');cv.width=o.w;cv.height=o.h;var ctx=cv.getContext('2d');
  return pickCodec(o.w,o.h,o.fps,o.q).then(function(vc){return (vc?pickAudio(o):Promise.resolve(null)).then(function(au){
    if(vc&&au!==null)return needMux().then(function(){return wcPath(o,cv,ctx,vc,au||null);});
    return mrPath(o,cv,ctx);});});};

function wcPath(o,cv,ctx,vc,au){
  var M=window.Mp4Muxer,tgt=new M.ArrayBufferTarget(),err=null;
  var mx=new M.Muxer({target:tgt,fastStart:'in-memory',firstTimestampBehavior:'offset',video:{codec:'avc',width:o.w,height:o.h,frameRate:o.fps},audio:au?{codec:au.mux,numberOfChannels:au.cfg.numberOfChannels,sampleRate:au.cfg.sampleRate}:undefined});
  var ve=new VideoEncoder({output:function(c,m){mx.addVideoChunk(c,m);},error:function(e){err=e;}});ve.configure(vc);
  var i=0,step=1e6/o.fps;
  function next(){if(err)return Promise.reject(err);if(o.stop&&o.stop())return Promise.reject(new Error('stop'));if(i>=o.n)return Promise.resolve();
    return Promise.resolve(o.frame(i,ctx,cv)).then(function(){var vf=new VideoFrame(cv,{timestamp:Math.round(i*step),duration:Math.round(step)});ve.encode(vf,{keyFrame:i%(o.fps*2)===0});vf.close();i++;if(o.prog)o.prog(i/o.n*(au?0.95:1));
      var q=function(){return ve.encodeQueueSize>4?wait(4).then(q):Promise.resolve();};return q();}).then(next);}
  return next().then(function(){return ve.flush();}).then(function(){ve.close();if(!au)return;
    var buf=o.audio,ch=au.cfg.numberOfChannels,sr=buf.sampleRate,len=Math.min(buf.length,Math.round(o.n/o.fps*sr)),ae=new AudioEncoder({output:function(c,m){mx.addAudioChunk(c,m);},error:function(e){err=e;}});ae.configure(au.cfg);
    var planes=[];for(var c=0;c<ch;c++)planes.push(buf.getChannelData(Math.min(c,buf.numberOfChannels-1)));
    for(var p=0;p<len;p+=1024){var nf=Math.min(1024,len-p),d=new Float32Array(nf*ch);for(c=0;c<ch;c++)d.set(planes[c].subarray(p,p+nf),c*nf);
      var ad=new AudioData({format:'f32-planar',sampleRate:sr,numberOfFrames:nf,numberOfChannels:ch,timestamp:Math.round(p/sr*1e6),data:d});ae.encode(ad);ad.close();}
    return ae.flush().then(function(){ae.close();});
  }).then(function(){if(err)throw err;mx.finalize();if(o.prog)o.prog(1);return {blob:new Blob([tgt.buffer],{type:'video/mp4'}),ext:'mp4',mime:'video/mp4'};});}

/* Fallback when the browser has no video encoder: draw every frame first, then play them back in real time and record. */
function mrPath(o,cv,ctx){
  if(!cv.captureStream||!window.MediaRecorder)return Promise.reject(new Error('unsupported'));
  var frames=[],i=0;
  function grab(){if(o.stop&&o.stop())return Promise.reject(new Error('stop'));if(i>=o.n)return Promise.resolve();
    return Promise.resolve(o.frame(i,ctx,cv)).then(function(){return new Promise(function(r){cv.toBlob(r,'image/jpeg',0.92);});}).then(function(b){frames.push(b);i++;if(o.prog)o.prog(i/o.n*0.6);}).then(grab);}
  return grab().then(function(){
    var st=cv.captureStream(o.fps),tracks=st.getVideoTracks().slice(),a=null,src=null;
    if(o.audio){a=XR.ac();if(a){var dst=a.createMediaStreamDestination();src=a.createBufferSource();src.buffer=o.audio;src.connect(dst);dst.stream.getAudioTracks().forEach(function(t){tracks.push(t);});}}
    var types=o.audio?['video/mp4;codecs=avc1,mp4a.40.2','video/mp4','video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm']:['video/mp4;codecs=avc1','video/mp4','video/webm;codecs=vp9','video/webm'];
    var mime=types.filter(function(t){return MediaRecorder.isTypeSupported(t);})[0]||'';
    var mr=new MediaRecorder(new MediaStream(tracks),mime?{mimeType:mime,videoBitsPerSecond:Math.round(o.w*o.h*o.fps*0.18)}:{}),ch=[];mr.ondataavailable=function(e){if(e.data&&e.data.size)ch.push(e.data);};
    var bm=[];function pre(k){if(k<frames.length&&!bm[k])bm[k]=createImageBitmap(frames[k]);}
    for(var k=0;k<4;k++)pre(k);
    return bm[0].then(function(b0){ctx.drawImage(b0,0,0,o.w,o.h);
      return new Promise(function(res,rej){mr.onstop=function(){res();};mr.onerror=function(e){rej(e);};mr.start(500);if(src)src.start();var t0=performance.now(),f=0;
        function tick(){if(o.stop&&o.stop()){mr.stop();rej(new Error('stop'));return;}if(f>=frames.length){setTimeout(function(){mr.stop();},150);return;}
          pre(f+4);bm[f].then(function(b){ctx.drawImage(b,0,0,o.w,o.h);if(b.close)b.close();bm[f]=null;frames[f]=null;f++;if(o.prog)o.prog(0.6+f/o.n*0.4);
            var due=t0+f*1000/o.fps-performance.now();setTimeout(tick,Math.max(0,due));});}
        tick();});
    }).then(function(){if(src)try{src.stop();}catch(e){}st.getTracks().forEach(function(t){t.stop();});var type=(mime||'video/webm').split(';')[0];return {blob:new Blob(ch,{type:type}),ext:type.indexOf('mp4')>-1?'mp4':'webm',mime:type};});});}

/* ---------- saving the file ---------- */
XR.save=function(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href);},60000);};
XR.canShare=function(blob,name){try{return !!(navigator.canShare&&navigator.canShare({files:[new File([blob],name,{type:blob.type})]}));}catch(e){return false;}};
XR.share=function(blob,name){return navigator.share({files:[new File([blob],name,{type:blob.type})]}).catch(function(){});};
XR.touch=matchMedia('(pointer:coarse)').matches;

window.XR=XR;
})();
