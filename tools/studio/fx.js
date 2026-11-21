/* ---------- footage effects: camera, transitions, person and time effects drawn on the real video ----------
   One engine for the live preview and the MP4 export. The person is cut out on the device with
   MediaPipe's selfie segmenter (vendor/selfie_segmenter.tflite); nothing is uploaded. */
var FX=(function(){
var FOOT={CAM:1,TRN:1,PER:1,TIM:1};
var GOLD='#FFC857';
/* nominal length (seconds) of each base effect; a clip is the whole effect, so the clip length sets its speed */
var DUR={'M-016':.8,'M-017':.7,'M-018':.9,'M-019':.8,'M-020':.6,'M-101':.9,'M-102':.7,'M-103':.6,'M-104':.7,'M-105':1,'M-106':.8,'M-107':.7,'M-108':.8,'M-109':.8,'M-110':.6,'M-111':.8,'M-112':.5,'M-113':.5,'M-114':.8,'M-115':.8,'M-116':.7,'M-117':.8,'M-118':1,'M-119':.5,'M-120':.6,'M-267':1.2,'M-268':1.4,'M-269':.9,'M-270':1.1,'M-271':.6,
  'M-021':2,'M-022':4,'M-023':1,'M-024':2.5,'M-025':5,'M-121':3,'M-122':4,'M-123':4,'M-124':2,'M-125':1.5,'M-126':4,'M-127':2,'M-128':1.2,'M-129':1.5,'M-130':4,'M-131':1.5,'M-132':3,'M-133':3,'M-134':2,'M-135':2,'M-136':3,'M-137':2,'M-138':3,'M-139':3,'M-140':1.5,
  'M-201':3,'M-202':3,'M-203':2.5,'M-204':3,'M-205':3,'M-206':3,'M-207':3,'M-208':3,'M-209':2,'M-210':3,'M-211':3,'M-212':2,'M-213':2.5,
  'M-243':3,'M-155':2.4,'M-156':3,'M-217':1.2,'M-218':2,'M-219':1.5,'M-251':4,'M-259':2,'M-260':2,'M-261':2,'M-262':2,'M-263':2,'M-264':4,'M-265':1.6,'M-266':1.6};
var PERSON={'M-243':1,'M-251':1,'M-121':1,'M-124':1,'M-201':1,'M-202':1,'M-203':1,'M-204':1,'M-205':1,'M-206':1,'M-207':1,'M-208':1,'M-209':1,'M-210':1,'M-211':1,'M-212':1,'M-213':1,'M-262':1};
var TRN_HOLD={'M-135':1};/* also every TRN */
function bid(m){return m&&(m.base||m.id);}
var EXTRA={'M-243':1,'M-155':1,'M-156':1,'M-217':1,'M-218':1,'M-219':1,'M-251':1};
function isFoot(m){return !!(m&&(FOOT[m.c]||EXTRA[bid(m)]));}
/* the text-behind effect keeps its own (editable) title on top of the video, under the person */
function keepsHTML(m){return bid(m)==='M-201';}
function dur(m){var d=DUR[bid(m)];if(!d)return null;return Math.max(.3,+(d*(m.vf||1)).toFixed(2));}
function needsPerson(m){return !!PERSON[bid(m)];}
function needsHold(m){return m.c==='TRN'||!!TRN_HOLD[bid(m)];}
/* ---- small helpers ---- */
function cl(x,a,b){return x<a?a:x>b?b:x;}
function eo(x){x=cl(x,0,1);return 1-Math.pow(1-x,3);}
function ei(x){x=cl(x,0,1);return x*x*x;}
function eio(x){x=cl(x,0,1);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
function ss(a,b,x){x=cl((x-a)/(b-a),0,1);return x*x*(3-2*x);}
/* 0→1 over the first `a` seconds, hold, 1→0 over the last `b` seconds */
function env(it,a,b){var lt=it.lt,d=it.d;a=Math.min(a,d/2);b=Math.min(b==null?a:b,d/2);return Math.min(a>0?eo(lt/a):1,b>0?eo((d-lt)/b):1);}
function rnd(n){var x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);}
var pool=[];function cv(W,H){var c=pool.pop()||document.createElement('canvas');if(c.width!==W)c.width=W;if(c.height!==H)c.height=H;var x=c.getContext('2d');x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.globalCompositeOperation='source-over';x.filter='none';x.clearRect(0,0,W,H);return c;}
function give(c){if(c&&pool.length<14)pool.push(c);}
var FILT=(function(){try{var c=document.createElement('canvas').getContext('2d');c.filter='blur(2px)';return c.filter==='blur(2px)';}catch(e){return false;}})();
/* draw an image covering W×H (same aspect as the video) */
function full(ctx,img,W,H){ctx.drawImage(img,0,0,W,H);}
function blurInto(ctx,img,W,H,r){if(r<=.3){full(ctx,img,W,H);return;}
  if(FILT){ctx.save();ctx.filter='blur('+r+'px)';ctx.drawImage(img,-r*2,-r*2,W+r*4,H+r*4);ctx.restore();return;}
  var k=Math.max(2,Math.min(24,r/1.5)),w=Math.max(2,Math.round(W/k)),h=Math.max(2,Math.round(H/k)),t=cv(w,h);t.getContext('2d').drawImage(img,0,0,w,h);ctx.save();ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(t,0,0,W,H);ctx.restore();give(t);}
function gray(ctx,W,H,amt,dark){if(amt<=0)return;ctx.save();ctx.globalCompositeOperation='saturation';ctx.globalAlpha=cl(amt,0,1);ctx.fillStyle='#808080';ctx.fillRect(0,0,W,H);ctx.restore();if(dark){ctx.save();ctx.globalAlpha=dark*amt;ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.restore();}}
/* transform helper: scale s around focus (fx,fy in 0..1), offsets in fractions of W/H, rotation in degrees */
function tdraw(ctx,img,W,H,o){ctx.save();var cx=(o.cx==null?.5:o.cx)*W,cy=(o.cy==null?.5:o.cy)*H;ctx.translate(cx+(o.ox||0)*W,cy+(o.oy||0)*H);if(o.rot)ctx.rotate(o.rot*Math.PI/180);ctx.scale((o.s||1)*(o.sx||1),(o.s||1)*(o.sy||1));ctx.translate(-cx,-cy);
  if(o.blur)blurInto(ctx,img,W,H,o.blur);else full(ctx,img,W,H);ctx.restore();}
function rrect(ctx,x,y,w,h,r){r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function tag(ctx,W,H,txt,col,a){if(a<=0)return;var fs=Math.round(W*.05);ctx.save();ctx.direction='ltr';ctx.textAlign='left';ctx.globalAlpha=a;ctx.font='800 '+fs+'px system-ui,Arial,sans-serif';var tw=ctx.measureText(txt).width,pw=tw+fs*1.1,ph=fs*1.7,x=W*.06,y=H*.06;ctx.fillStyle='rgba(0,0,0,.55)';rrect(ctx,x,y,pw,ph,ph/2);ctx.fill();ctx.fillStyle=col||'#fff';ctx.textBaseline='middle';ctx.fillText(txt,x+fs*.55,y+ph/2);ctx.restore();}

/* ---- person cut-out (MediaPipe) ---- */
var SEG=null,segP=null,segBad=false,MP='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21';
function segLoad(){if(SEG)return Promise.resolve(SEG);if(segP)return segP;if(segBad)return Promise.reject(new Error('seg'));
  segP=import(MP+'/vision_bundle.mjs').then(function(V){return V.FilesetResolver.forVisionTasks(MP+'/wasm').then(function(fs){
    var mk=function(dl){return V.ImageSegmenter.createFromOptions(fs,{baseOptions:{modelAssetPath:new URL('vendor/selfie_segmenter.tflite',location.href).href,delegate:dl},runningMode:'IMAGE',outputCategoryMask:false,outputConfidenceMasks:true});};
    return mk('GPU').catch(function(){return mk('CPU');});});}).then(function(s){SEG=s;segP=null;if(FX.onReady)FX.onReady();return s;}).catch(function(e){segBad=true;segP=null;try{console.warn('person cut-out',e);}catch(_){}throw e;});return segP;}
var MW=256,inC=null,mkC=null,lastKey=null,lastMask=null;
/* the mask as a canvas (white person, transparent background) the size of the small input */
function maskOf(img,key){if(!SEG)return null;if(key!=null&&key===lastKey&&lastMask)return lastMask;
  var iw=img.videoWidth||img.naturalWidth||img.width,ih=img.videoHeight||img.naturalHeight||img.height;if(!iw||!ih)return null;var w=MW,h=Math.max(2,Math.round(MW*ih/iw));
  if(!inC)inC=document.createElement('canvas');if(inC.width!==w||inC.height!==h){inC.width=w;inC.height=h;}inC.getContext('2d').drawImage(img,0,0,w,h);
  var r;try{r=SEG.segment(inC);}catch(e){return lastMask;}var m=r&&r.confidenceMasks&&r.confidenceMasks[0];if(!m)return lastMask;
  var f=m.getAsFloat32Array(),mw=m.width,mh=m.height;try{r.confidenceMasks.forEach(function(x){x.close();});}catch(_){}
  if(!mkC)mkC=document.createElement('canvas');if(mkC.width!==mw||mkC.height!==mh){mkC.width=mw;mkC.height=mh;}var x=mkC.getContext('2d'),id=x.createImageData(mw,mh),d=id.data;
  for(var i=0,n=mw*mh;i<n;i++){var v=f[i];v=v<.25?0:v>.75?1:(v-.25)*2;d[i*4]=d[i*4+1]=d[i*4+2]=255;d[i*4+3]=Math.round(v*255);}x.putImageData(id,0,0);
  /* head: the first row with a real amount of person in it, and the middle of the person around there */
  var top=-1,minX=mw,maxX=0,need=Math.max(3,mw*.04);for(var yy=0;yy<mh&&top<0;yy++){var cnt=0;for(var xx=0;xx<mw;xx++)if(f[yy*mw+xx]>.5)cnt++;if(cnt>=need)top=yy;}
  var hx=.5,hy=.3,found=top>=0;if(found){var y2=Math.min(mh-1,top+Math.round(mh*.1)),sx=0,n2=0;for(var yy2=top;yy2<=y2;yy2++)for(var xx2=0;xx2<mw;xx2++)if(f[yy2*mw+xx2]>.5){sx+=xx2;n2++;if(xx2<minX)minX=xx2;if(xx2>maxX)maxX=xx2;}hx=n2?sx/n2/mw:.5;hy=(top/mh)+.08;}
  lastKey=key;lastMask={c:mkC,head:{x:hx,y:hy,top:found?top/mh:.15,w:found?Math.max(.12,(maxX-minX)/mw):.25},any:found};return lastMask;}
/* person only / background only, at W×H */
function person(img,mask,W,H){var c=cv(W,H),x=c.getContext('2d');full(x,img,W,H);x.globalCompositeOperation='destination-in';x.imageSmoothingEnabled=true;x.drawImage(mask.c,0,0,W,H);return c;}
function back(img,mask,W,H,grow){var c=cv(W,H),x=c.getContext('2d');full(x,img,W,H);x.globalCompositeOperation='destination-out';x.drawImage(mask.c,0,0,W,H);if(grow){for(var i=0;i<8;i++){var a=i/8*6.283;x.drawImage(mask.c,Math.cos(a)*grow,Math.sin(a)*grow,W,H);}}return c;}
function silh(mask,W,H,col){var c=cv(W,H),x=c.getContext('2d');x.drawImage(mask.c,0,0,W,H);x.globalCompositeOperation='source-in';x.fillStyle=col;x.fillRect(0,0,W,H);return c;}
/* echo / strobe history of person cut-outs */
var hist=[];function histPush(ts,img,W,H){hist.push({ts:ts,c:img});while(hist.length>14){give(hist.shift().c);}}
function histReset(){hist.forEach(function(h){give(h.c);});hist=[];}

/* ---- time: which source moment a footage clip shows ---- */
function remap(list,t){var ts=t;list.forEach(function(it){var b=it.b,lt=it.lt,d=it.d,s=it.c.s;
  if(b==='M-259')ts=s+Math.max(0,d-lt);
  else if(b==='M-260'){var w=Math.max(.3,Math.min(1,d/2)),q=(lt%(2*w));ts=s+(q<w?q:2*w-q);}
  else if(b==='M-261')ts=s+Math.floor(lt*10)/10;
  else if(b==='M-265')ts=s+((lt*3)%Math.max(.3,d));
  else if(b==='M-266')ts=s+Math.max(0,d-((lt*3)%Math.max(.3,d)));
  else if(b==='M-136'){var rp=.2,k=lt<rp?1-.75*(lt/rp):lt>d-rp?.25+.75*((lt-(d-rp))/rp):.25;ts=s+(lt<rp?lt*(1-.375*lt/rp):rp*.625+(Math.min(lt,d-rp)-rp)*.25+(lt>d-rp?(lt-(d-rp))*(.25+.375*(lt-(d-rp))/rp):0));void k;}});
  return ts;}
/* the frame shown before a transition: the moment just before a cut if one ends there, otherwise just before the clip */
function holdTime(it,cuts){var s=it.c.s;for(var i=0;i<(cuts||[]).length;i++){var k=cuts[i];if(Math.abs(k.b-s)<.35)return Math.max(0,k.a-.04);}return Math.max(0,s-.04);}

/* ---- draw one frame: video + every footage effect active at this moment ----
   io: {img (frame at the remapped time), hold(it) (frame for transitions/freeze or null), W,H, key (frame id for the mask cache)} */
function draw(ctx,list,io){var W=io.W,H=io.H,img=io.img,mask=null,need=list.some(function(it){return needsPerson(it.m);});
  if(need&&SEG)mask=maskOf(img,io.key);if(need&&!SEG&&!segBad)segLoad().catch(function(){});
  io.mask=mask;
  /* base layer goes into a work canvas so later steps can reuse it */
  var A=cv(W,H),ax=A.getContext('2d');full(ax,img,W,H);
  var cam=null,trn=[],per=[],tim=[];list.forEach(function(it){if(it.m.c==='TRN')trn.push(it);else if(it.m.c==='PER')per.push(it);else if(it.m.c==='TIM')tim.push(it);else cam=cam||[],cam.push(it);});
  /* person effects first (they work on the untransformed picture) */
  per.forEach(function(it){var c2=cv(W,H),x=c2.getContext('2d');perDraw(x,A,mask,it,W,H,io);ax.clearRect(0,0,W,H);ax.drawImage(c2,0,0);give(c2);});
  tim.forEach(function(it){timDraw(ax,A,mask,it,W,H,io);});
  /* camera moves */
  var B=A;(cam||[]).forEach(function(it){var c2=cv(W,H),x=c2.getContext('2d');camDraw(x,B,mask,it,W,H,io);if(B!==A)give(B);B=c2;});
  /* transitions */
  trn.forEach(function(it){var h=io.hold&&io.hold(it);var c2=cv(W,H),x=c2.getContext('2d');trnDraw(x,h||B,B,it,W,H);if(B!==A)give(B);B=c2;});
  ctx.drawImage(B,0,0,W,H);if(B!==A)give(B);give(A);
  /* overlays drawn above everything (tags, bars, vignettes) */
  list.forEach(function(it){top(ctx,it,W,H,mask);});}

/* person drawn again above the motion layer (text behind the person, pop-out frame) */
function front(ctx,list,io,which){var tb=list.filter(function(it){return which?it.b===which:(it.b==='M-201'||it.b==='M-207');});if(!tb.length||!io.mask||!io.img)return false;
  var W=io.W,H=io.H,p=person(io.img,io.mask,W,H);var c2=null;
  /* apply the same camera move so the person lines up */
  var cam=list.filter(function(it){return it.m.c==='CAM';});if(cam.length){c2=cv(W,H);var B=p;cam.forEach(function(it){var c3=cv(W,H);camDraw(c3.getContext('2d'),B,null,it,W,H,{front:1});if(B!==p)give(B);B=c3;});c2=B;}
  ctx.drawImage(c2||p,0,0,W,H);give(p);if(c2&&c2!==p)give(c2);return true;}

function perDraw(x,img,mask,it,W,H,io){var b=it.b,lt=it.lt,ac=it.pal.ac,hl=it.pal.hl,e;
  if(!mask){full(x,img,W,H);return;}
  if(b==='M-201'){full(x,img,W,H);return;}
  if(b==='M-202'||b==='M-208'||b==='M-213'){var bg=back(img,mask,W,H),pp=person(img,mask,W,H),g=bg.getContext('2d');
    if(b==='M-202'){e=eo(lt/.4)*env(it,0,.3);full(x,img,W,H);x.drawImage(bg,0,0);var t=cv(W,H),tx=t.getContext('2d');tx.drawImage(bg,0,0);gray(tx,W,H,e,.18);tx.globalCompositeOperation='destination-in';tx.drawImage(bg,0,0);x.drawImage(t,0,0);give(t);x.drawImage(pp,0,0);}
    else if(b==='M-208'){e=eo(lt/.5)*env(it,0,.3);blurInto(x,img,W,H,W*.016*e);x.drawImage(pp,0,0);}
    else{var cols=[ac,hl,it.pal.bg||'#102E33','#ffffff'],ci=Math.floor(lt/.45)%cols.length;x.fillStyle=cols[ci];x.fillRect(0,0,W,H);x.drawImage(pp,0,0);}
    give(bg);give(pp);return;}
  full(x,img,W,H);var pp2=person(img,mask,W,H),h=mask.head;
  if(b==='M-203'||b==='M-262'){/* echo: earlier cut-outs behind */}
  if(b==='M-203'){histPush(io.ts,pp2,W,H);var n=hist.length;for(var i=Math.max(0,n-13);i<n-1;i+=3){var k=(n-1-i)/3;x.globalAlpha=[.45,.3,.18,.1,.06][Math.min(4,k-1)]||.05;x.drawImage(hist[i].c,0,0);}x.globalAlpha=1;x.drawImage(pp2,0,0);return;}
  if(b==='M-204'){[-1,1].forEach(function(sd,i){var a=eo((lt-.3*(i+1))/.3)*env(it,0,.3);if(a<=0)return;x.save();x.globalAlpha=a;var s=.9+.1*a;x.translate(W/2+sd*W*.3,H);x.scale(s*.9,s*.9);x.translate(-W/2,-H);x.drawImage(pp2,0,0);x.restore();});x.drawImage(pp2,0,0);give(pp2);return;}
  if(b==='M-205'){var w=Math.max(2,W*.008),pr=eo(lt/.8),hx=h.x*W,hy=h.top*H,hw=h.w*W*.6+W*.08;x.save();x.strokeStyle='#fff';x.lineWidth=w;x.lineCap='round';x.lineJoin='round';x.shadowColor='rgba(0,0,0,.35)';x.shadowBlur=w*2;
    var wg=Math.sin(lt*9)*W*.004,L=W*1.6;x.setLineDash([L*pr,L]);
    x.beginPath();var cy=Math.max(hy-H*.01,H*.1)+wg;x.moveTo(hx-hw*.55,cy);x.lineTo(hx-hw*.5,cy-H*.07);x.lineTo(hx-hw*.25,cy-H*.035);x.lineTo(hx,cy-H*.085);x.lineTo(hx+hw*.25,cy-H*.035);x.lineTo(hx+hw*.5,cy-H*.07);x.lineTo(hx+hw*.55,cy);x.closePath();x.stroke();
    for(var j=0;j<3;j++){var a2=-2.5+j*.5,r1=hw*.9,r2=hw*1.15;x.beginPath();x.moveTo(hx+Math.cos(a2)*r1*1.4,cy+H*.06+Math.sin(a2)*r1);x.lineTo(hx+Math.cos(a2)*r2*1.4,cy+H*.06+Math.sin(a2)*r2);x.stroke();x.beginPath();var a3=-.64-j*.5;x.moveTo(hx+Math.cos(a3)*r1*1.4,cy+H*.06+Math.sin(a3)*r1);x.lineTo(hx+Math.cos(a3)*r2*1.4,cy+H*.06+Math.sin(a3)*r2);x.stroke();}
    x.restore();give(pp2);return;}
  if(b==='M-206'){e=env(it,.45,.3);var s=e<1?(lt<.45?eo(lt/.45)*1.08-.08*ss(.6,1,lt/.45):e):1;var o=silh(mask,W,H,'#fff'),ow=W*.012;
    x.save();x.translate(W/2,H*.75);x.rotate(-3*Math.PI/180*e);x.scale(s,s);x.translate(-W/2,-H*.75);x.shadowColor='rgba(0,0,0,.45)';x.shadowBlur=W*.03;x.shadowOffsetY=W*.012;
    for(var a4=0;a4<16;a4++){var an=a4/16*Math.PI*2;x.drawImage(o,Math.cos(an)*ow,Math.sin(an)*ow);if(a4===0){x.shadowColor='transparent';}}x.drawImage(pp2,0,0);x.restore();give(o);give(pp2);return;}
  if(b==='M-207'){e=env(it,.5,.35);var fw=W*.8,fh=H*.5,fx2=(W-fw)/2,fy2=Math.max(H*.3,h.top*H+H*.12),sc=.6+.4*eo(e);x.fillStyle='#0b0b0b';x.fillRect(0,0,W,H);blurInto(x,img,W,H,W*.02);x.fillStyle='rgba(0,0,0,.55)';x.fillRect(0,0,W,H);
    x.save();x.translate(W/2,fy2+fh/2);x.scale(sc,sc);x.translate(-W/2,-(fy2+fh/2));x.save();rrect(x,fx2,fy2,fw,fh,W*.05);x.clip();full(x,img,W,H);x.restore();x.lineWidth=W*.012;x.strokeStyle='#fff';rrect(x,fx2,fy2,fw,fh,W*.05);x.stroke();x.restore();give(pp2);return;}
  if(b==='M-209'){e=eo(lt/.3)*env(it,0,.3);var sf=silh(mask,W,H,ac);x.globalAlpha=e;x.drawImage(sf,0,0);x.globalAlpha=1;give(sf);give(pp2);return;}
  if(b==='M-210'){var fl=lt<.6?(rnd(Math.floor(lt*20))>.4?1:.25):1;fl*=env(it,0,.3);var o2=silh(mask,W,H,hl),r2=cv(W,H),rx=r2.getContext('2d'),lw=W*.008;
    for(var a5=0;a5<12;a5++){var an2=a5/12*Math.PI*2;rx.drawImage(o2,Math.cos(an2)*lw,Math.sin(an2)*lw);}rx.globalCompositeOperation='destination-out';rx.drawImage(mask.c,0,0,W,H);
    x.save();x.globalAlpha=fl;x.shadowColor=hl;x.shadowBlur=W*.04;x.drawImage(r2,0,0);x.shadowBlur=W*.015;x.drawImage(r2,0,0);x.restore();give(o2);give(r2);give(pp2);return;}
  if(b==='M-211'){e=env(it,.4,.3);var r=W*(.5+h.w*.4),g2=x.createRadialGradient(h.x*W,h.y*H+H*.15,r*.75,h.x*W,h.y*H+H*.15,r*1.7);g2.addColorStop(0,'rgba(0,0,0,0)');g2.addColorStop(1,'rgba(0,0,0,'+(.85*e)+')');x.fillStyle=g2;x.fillRect(0,0,W,H);give(pp2);return;}
  if(b==='M-212'){e=env(it,.3,.3);var ht=cv(W,H),hx2=ht.getContext('2d'),step=Math.max(6,Math.round(W/46)),sm=cv(Math.ceil(W/step),Math.ceil(H/step)),sx2=sm.getContext('2d');sx2.drawImage(img,0,0,sm.width,sm.height);var pd=sx2.getImageData(0,0,sm.width,sm.height).data;
    hx2.fillStyle=ac;for(var yy=0;yy<sm.height;yy++)for(var xx=0;xx<sm.width;xx++){var q=(yy*sm.width+xx)*4,lum=(pd[q]*.3+pd[q+1]*.59+pd[q+2]*.11)/255,rr=step*.55*(1-lum)+step*.08;hx2.beginPath();hx2.arc(xx*step+step/2+(yy%2?step/2:0),yy*step+step/2,rr,0,6.283);hx2.fill();}
    hx2.globalCompositeOperation='destination-in';hx2.drawImage(mask.c,0,0,W,H);x.save();x.globalAlpha=e;x.globalCompositeOperation='multiply';x.drawImage(ht,0,0);x.restore();give(ht);give(sm);give(pp2);return;}
  give(pp2);}

function timDraw(x,img,mask,it,W,H,io){var b=it.b,lt=it.lt;
  if(b==='M-262'&&mask){var pp=person(io.img,mask,W,H);if(!io.prev||Math.floor(lt*30)%4===0)histPush(io.ts,pp,W,H);else give(pp);var n=hist.length,tmp=cv(W,H),tx=tmp.getContext('2d');full(tx,img,W,H);for(var i=Math.max(0,n-5);i<n;i++){tx.globalAlpha=.35;tx.drawImage(hist[i].c,0,0);}tx.globalAlpha=1;x.clearRect(0,0,W,H);x.drawImage(tmp,0,0);give(tmp);}
  if(b==='M-264'){var p=ss(.1,.6,it.p),t=cv(W,H),tx2=t.getContext('2d');full(tx2,img,W,H);x.clearRect(0,0,W,H);x.drawImage(t,0,0);give(t);
    x.save();x.globalCompositeOperation='multiply';x.fillStyle='rgba('+Math.round(255-120*p)+','+Math.round(240-110*p)+','+Math.round(215+40*p)+',1)';x.fillRect(0,0,W,H);x.restore();gray(x,W,H,.35*p,.25*p);}
  if(b==='M-265'&&FILT){var t2=cv(W,H),t2x=t2.getContext('2d');t2x.filter='blur('+(W*.002)+'px)';full(t2x,img,W,H);x.clearRect(0,0,W,H);x.drawImage(t2,0,0);give(t2);}
  if(b==='M-266'){for(var k=0;k<6;k++){var y=rnd(Math.floor(lt*15)*7+k)*H,hh=H*(.004+rnd(k+lt)*.012);x.save();x.globalAlpha=.55;x.drawImage(x.canvas,0,y,W,hh,W*(rnd(k*3+Math.floor(lt*15))-.5)*.06,y,W,hh);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(0,y,W,hh*.4);x.restore();}gray(x,W,H,.3,0);}}

function camDraw(x,img,mask,it,W,H,io){var b=it.b,lt=it.lt,d=it.d,p=it.p,f={cx:it.fx,cy:it.fy},s=1,o;
  function go(o2){o2.cx=o2.cx==null?f.cx:o2.cx;o2.cy=o2.cy==null?f.cy:o2.cy;tdraw(x,img,W,H,o2);}
  switch(b){
  case 'M-021':go({s:1.25});return;
  case 'M-022':go({s:1+.16*eio(p),cy:Math.max(.2,f.cy-.08)});return;
  case 'M-023':var k=Math.floor(lt*12),dm=1-p*.7;go({s:1.08,ox:(rnd(k)-.5)*.03*dm,oy:(rnd(k+9)-.5)*.03*dm,rot:(rnd(k+3)-.5)*1.6*dm});return;
  case 'M-024':var e=lt<.6?eio(lt/.6):lt>d-.5?1-eo((lt-(d-.5))/.5)*1.04+.04*ss(.7,1,(lt-(d-.5))/.5):1;e=cl(e,-.04,1);var sc=1-.4*e;
    x.fillStyle='#14161c';x.fillRect(0,0,W,H);x.fillStyle='rgba(255,255,255,.05)';for(var yy=0;yy<H;yy+=W*.06)for(var xx=(yy/(W*.06))%2*W*.03;xx<W;xx+=W*.06){x.beginPath();x.arc(xx,yy,W*.006,0,6.283);x.fill();}
    x.save();x.translate(W/2,H/2);x.rotate(-3*e*Math.PI/180);x.scale(sc,sc);x.translate(-W/2,-H/2);x.shadowColor='rgba(0,0,0,'+(.6*cl(e,0,1))+')';x.shadowBlur=W*.06;x.shadowOffsetY=W*.03;rrect(x,0,0,W,H,W*.06*cl(e,0,1)/Math.max(sc,.01));x.fillStyle='#000';x.fill();x.shadowColor='transparent';x.clip();full(x,img,W,H);x.restore();return;
  case 'M-025':go({s:1.12+.2*p,ox:.05-.1*p,oy:.04-.08*p});return;
  case 'M-121':if(!mask||io.front){go({s:1-.14*eio(p),cx:.5,cy:1});return;}var bg=cv(W,H),bx=bg.getContext('2d'),cut=back(img,mask,W,H,W*.025);for(var bi=0;bi<4;bi++)blurInto(bx,cut,W,H,W*[.12,.08,.05,.03][bi]);bx.drawImage(cut,0,0);give(cut);tdraw(x,bg,W,H,{s:1+.5*eio(p),cx:f.cx,cy:f.cy});give(bg);var pp=person(img,mask,W,H);tdraw(x,pp,W,H,{s:1-.14*eio(p),cx:.5,cy:1});give(pp);return;
  case 'M-122':go({s:1.25,ox:.08-.16*eio(p),cx:.5,cy:.5});return;
  case 'M-123':go({s:1.25,oy:.09-.16*eio(p),cx:.5,cy:.5});return;
  case 'M-124':if(!mask||io.front){full(x,img,W,H);return;}var q=eo(lt/.6),bb=cv(W,H),bbx=bb.getContext('2d');blurInto(bbx,img,W,H,W*.012*q);x.drawImage(bb,0,0);give(bb);var pp2=cv(W,H),px=pp2.getContext('2d');blurInto(px,img,W,H,W*.012*(1-q));px.globalCompositeOperation='destination-in';px.drawImage(mask.c,0,0,W,H);x.drawImage(pp2,0,0);give(pp2);return;
  case 'M-125':s=lt<.15?1+.5*eo(lt/.15):lt<.35?1.5-.2*eo((lt-.15)/.2):1.3;go({s:s,blur:lt<.3?W*.012*(1-cl(lt/.3,0,1)):0});return;
  case 'M-126':go({s:1.08,ox:Math.sin(lt*1.6)*.012,oy:Math.cos(lt*1.1)*.012,rot:Math.sin(lt*.9)*.5});return;
  case 'M-127':e=env(it,.5,.4);go({s:1+.2*eio(e),rot:-9*eio(e)});return;
  case 'M-128':var a=d*.35;s=lt<a?1.5:1.5-.5*eo((lt-a)/.2);go({s:s});return;
  case 'M-129':s=lt<.15?1+.9*eo(lt/.15):1.9;var sh=lt>.12&&lt<.45?(rnd(Math.floor(lt*30))-.5)*.03:0;go({s:s,ox:sh});return;
  case 'M-130':var an=Math.sin(lt/4*Math.PI*2)*14;x.save();x.translate(W/2,H/2);var cs=Math.cos(an*Math.PI/180);x.transform(cs*1.12,Math.sin(an*Math.PI/180)*.06,0,1.12,0,0);x.translate(-W/2,-H/2);full(x,img,W,H);x.restore();return;
  case 'M-131':go({s:lt<d*.5?1.15:1.32});return;
  case 'M-132':e=env(it,.5,.4);x.fillStyle='#0c0c0c';x.fillRect(0,0,W,H);var g=W*.012,hw=(W-g)/2;[0,1].forEach(function(i){var off=(1-eo(e))*(i?1:-1)*W*.6;x.save();x.beginPath();x.rect(i?hw+g:0,0,hw,H);x.clip();x.translate(off+(i?W*.25:-W*.25),0);if(i){x.translate(W,0);x.scale(-1,1);}full(x,img,W,H);x.restore();});return;
  case 'M-133':full(x,img,W,H);e=env(it,.4,.3);if(e<=0)return;var pw=W*.38,ph=pw*H/W,left=f.cx<.5,px2=left?W*.05:W-pw-W*.05,py=H*.06;x.save();x.translate(px2+pw/2,py+ph/2);x.scale(eo(e),eo(e));x.translate(-(px2+pw/2),-(py+ph/2));x.shadowColor='rgba(0,0,0,.5)';x.shadowBlur=W*.04;rrect(x,px2,py,pw,ph,W*.03);x.fillStyle='#fff';x.fill();x.shadowColor='transparent';x.clip();var z=1.8;x.drawImage(img,(f.cx*W)-(W/z)/2,(f.cy*H)-(H/z)/2,W/z,H/z,px2,py,pw,ph);x.restore();x.lineWidth=W*.008;x.strokeStyle='#fff';x.save();x.translate(px2+pw/2,py+ph/2);x.scale(eo(e),eo(e));x.translate(-(px2+pw/2),-(py+ph/2));rrect(x,px2,py,pw,ph,W*.03);x.stroke();x.restore();return;
  case 'M-134':e=env(it,.5,.5);go({sx:Math.cos(Math.PI*eio(e)),cx:.5,cy:.5});return;
  case 'M-135':full(x,img,W,H);gray(x,W,H,.85,0);x.save();x.globalAlpha=.18;x.globalCompositeOperation='overlay';x.fillStyle='#000';x.fillRect(0,0,W,H);x.restore();return;
  case 'M-137':s=lt<d*.5?1+.04*(lt/(d*.5)):lt<d*.5+.15?1.04+.26*eo((lt-d*.5)/.15):1.3+.03*eo((lt-d*.5-.15)/Math.max(.1,d*.5-.15));go({s:s});return;
  case 'M-140':var kf=[[0,1],[.15,1.32],[.28,1.16],[.4,1.24],[.5,1.22]],v=1.22;for(var i=0;i<kf.length-1;i++)if(lt<kf[i+1][0]){v=kf[i][1]+(kf[i+1][1]-kf[i][1])*eio((lt-kf[i][0])/(kf[i+1][0]-kf[i][0]));break;}go({s:v});return;
  case 'M-243':full(x,img,W,H);if(!mask||!mask.any||io.front)return;var fh=mask.head,rw=fh.w*W*.62,rh=rw*1.3,fcx=fh.x*W,fcy=fh.y*H+rh*.15,px=Math.max(6,Math.round(W*.035)),sm=cv(Math.max(2,Math.round(W/px)),Math.max(2,Math.round(H/px)));sm.getContext('2d').drawImage(img,0,0,sm.width,sm.height);
    x.save();x.beginPath();x.ellipse(fcx,fcy,rw,rh,0,0,6.283);x.clip();x.imageSmoothingEnabled=false;x.drawImage(sm,0,0,W,H);x.restore();give(sm);return;
  case 'M-155':full(x,img,W,H);var fr=Math.floor(lt*12);for(var vi=0;vi<7;vi++){var vy=rnd(fr*13+vi)*H,vh=H*(.01+rnd(fr+vi*7)*.04);x.drawImage(img,0,vy*(img.videoHeight||img.height||H)/H,(img.videoWidth||img.width||W),vh*(img.videoHeight||img.height||H)/H,(rnd(fr*5+vi)-.5)*W*.08,vy,W,vh);}
    x.save();x.globalCompositeOperation='screen';x.globalAlpha=.35;x.drawImage(x.canvas,W*.006,0);x.restore();x.fillStyle='rgba(0,0,0,.12)';for(var sl=0;sl<H;sl+=4)x.fillRect(0,sl,W,1.5);return;
  case 'M-156':full(x,img,W,H);var gs=cv(160,Math.round(160*H/W)),gx=gs.getContext('2d'),gid=gx.createImageData(gs.width,gs.height),gd=gid.data,seed=Math.floor(lt*24);for(var gi=0;gi<gd.length;gi+=4){var v=rnd(seed*9973+gi)*255;gd[gi]=gd[gi+1]=gd[gi+2]=v;gd[gi+3]=40;}gx.putImageData(gid,0,0);x.save();x.globalCompositeOperation='overlay';x.imageSmoothingEnabled=false;x.drawImage(gs,0,0,W,H);x.restore();give(gs);
    x.save();x.globalCompositeOperation='multiply';x.fillStyle='rgba(255,235,205,.5)';x.fillRect(0,0,W,H);x.restore();return;
  case 'M-217':full(x,img,W,H);var bt=(lt%.5)/.5;x.fillStyle='rgba(255,255,255,'+(.75*(1-eo(bt*2)))+')';x.fillRect(0,0,W,H);return;
  case 'M-218':var bz=(lt%.5)/.5;go({s:1+.1*(1-eo(bz*2.2))});return;
  case 'M-219':var bs=(lt%.5)/.5,amp=1-eo(bs*2.5),kk=Math.floor(lt*30);go({s:1.06,ox:(rnd(kk)-.5)*.04*amp,oy:(rnd(kk+5)-.5)*.03*amp,rot:(rnd(kk+2)-.5)*2*amp});return;
  case 'M-251':if(!mask||io.front){go({s:1.06+.03*Math.sin(lt*1.5),ox:Math.sin(lt*1.5)*.012});return;}var bgp=cv(W,H),bgx=bgp.getContext('2d'),ct=back(img,mask,W,H,W*.02);for(var bj=0;bj<4;bj++)blurInto(bgx,ct,W,H,W*[.12,.08,.05,.03][bj]);bgx.drawImage(ct,0,0);give(ct);var sw=Math.sin(lt/4*Math.PI*2);tdraw(x,bgp,W,H,{s:1.12,ox:sw*.03,cx:.5,cy:.5});give(bgp);var pp3=person(img,mask,W,H);tdraw(x,pp3,W,H,{s:1.04,ox:-sw*.015,cx:.5,cy:1});give(pp3);return;
  default:full(x,img,W,H);}}

function trnDraw(x,A,B,it,W,H){var b=it.b,q=cl(it.p,0,1),ac=it.pal.ac,fx=it.fx*W,fy=it.fy*H,diag=Math.hypot(W,H),e;
  function both(maskFn,feather){full(x,A,W,H);var t=cv(W,H),tx=t.getContext('2d');full(tx,B,W,H);tx.globalCompositeOperation='destination-in';if(feather&&FILT)tx.filter='blur('+feather+'px)';tx.beginPath();maskFn(tx);tx.fillStyle='#000';tx.fill();tx.filter='none';x.drawImage(t,0,0);give(t);}
  switch(b){
  case 'M-016':e=eo(q);both(function(c){c.arc(fx,fy,Math.max(.1,e*diag),0,6.283);},W*.02);if(q<.95){x.save();x.globalAlpha=1-q;x.strokeStyle=ac;x.lineWidth=W*.01;x.beginPath();x.arc(fx,fy,e*diag*1.04+W*.02,0,6.283);x.stroke();x.restore();}return;
  case 'M-017':e=eio(q);var ex=e*W;both(function(c){c.rect(0,0,ex,H);});x.save();x.shadowColor=ac;x.shadowBlur=W*.03;x.fillStyle='#fff';x.fillRect(ex-W*.004,0,W*.008,H);x.restore();return;
  case 'M-018':full(x,q<.5?A:B,W,H);var cx=-W*.3+q*W*1.6;x.save();x.globalCompositeOperation='screen';var g=x.createLinearGradient(cx-W*.15,0,cx+W*.15,H*.2);g.addColorStop(0,'rgba(255,220,160,0)');g.addColorStop(.5,'rgba(255,236,200,.95)');g.addColorStop(1,'rgba(255,220,160,0)');x.fillStyle=g;x.translate(cx,H/2);x.rotate(.26);x.translate(-cx,-H/2);x.fillRect(cx-W*.2,-H,W*.4,H*3);x.restore();return;
  case 'M-019':if(q<.5){e=ei(q*2);tdraw(x,A,W,H,{s:1+.7*e,blur:W*.012*e});x.fillStyle='rgba(0,0,0,'+(e*.6)+')';x.fillRect(0,0,W,H);}else{e=eo((q-.5)*2);tdraw(x,B,W,H,{s:1.6-.6*e,blur:W*.012*(1-e)});}return;
  case 'M-020':case 'M-271':e=eio(q);var bl=Math.sin(q*Math.PI)*W*(b==='M-020'?.03:.008);tdraw(x,A,W,H,{ox:-e,blur:bl});tdraw(x,B,W,H,{ox:1-e,blur:bl});return;
  case 'M-101':x.fillStyle='#000';x.fillRect(0,0,W,H);if(q<.45){x.globalAlpha=1-q/.45;full(x,A,W,H);}else if(q>.55){x.globalAlpha=(q-.55)/.45;full(x,B,W,H);}x.globalAlpha=1;return;
  case 'M-102':full(x,A,W,H);x.globalAlpha=eio(q);full(x,B,W,H);x.globalAlpha=1;return;
  case 'M-103':e=eio(q);tdraw(x,A,W,H,{ox:-e});tdraw(x,B,W,H,{ox:1-e});return;
  case 'M-104':e=eio(q);var L=(W+H)*e*1.15;both(function(c){c.moveTo(0,0);c.lineTo(L,0);c.lineTo(0,L);c.closePath();},W*.03);return;
  case 'M-105':x.fillStyle='#000';x.fillRect(0,0,W,H);if(q<.5){e=1-eio(q*2);x.save();x.beginPath();x.arc(fx,fy,e*diag,0,6.283);x.clip();full(x,A,W,H);x.restore();}else{e=eio((q-.5)*2);x.save();x.beginPath();x.arc(fx,fy,e*diag,0,6.283);x.clip();full(x,B,W,H);x.restore();}return;
  case 'M-106':e=eio(q);both(function(c){c.moveTo(W/2,H/2);c.arc(W/2,H/2,diag,-Math.PI/2,-Math.PI/2+e*Math.PI*2+.001);c.closePath();});return;
  case 'M-107':e=eio(q);both(function(c){var sw=W/6;for(var i=0;i<6;i++)c.rect(i*sw+sw*(1-e),0,sw*e+1,H);});return;
  case 'M-108':e=eio(q);full(x,B,W,H);x.save();x.beginPath();x.rect(0,0,W/2,H);x.clip();tdraw(x,A,W,H,{ox:-e*.5});x.restore();x.save();x.beginPath();x.rect(W/2,0,W/2,H);x.clip();tdraw(x,A,W,H,{ox:e*.5});x.restore();return;
  case 'M-109':e=eo(q)*diag;both(function(c){c.moveTo(fx,fy-e);c.lineTo(fx+e,fy);c.lineTo(fx,fy+e);c.lineTo(fx-e,fy);c.closePath();});return;
  case 'M-110':if(q>.85){full(x,B,W,H);return;}full(x,A,W,H);var fr=Math.floor(q*30/2),n=14;for(var i=0;i<n;i++){var y=i*H/n;if(rnd(fr*31+i)<q+.15){x.drawImage(B,0,y,W,H/n+1,(rnd(fr*7+i)-.5)*.16*W,y,W,H/n+1);}}return;
  case 'M-111':if(q<.5){e=eio(q*2);x.fillStyle='#000';x.fillRect(0,0,W,H);x.globalAlpha=1-e;tdraw(x,A,W,H,{s:1-.8*e,rot:180*e,cx:.5,cy:.5});}else{e=eio((q-.5)*2);x.fillStyle='#000';x.fillRect(0,0,W,H);x.globalAlpha=e;tdraw(x,B,W,H,{s:.2+.8*e,rot:-180*(1-e),cx:.5,cy:.5});}x.globalAlpha=1;return;
  case 'M-112':case 'M-113':full(x,q<.12?A:B,W,H);var fa=q<.12?q/.12:1-eo((q-.12)/.5);x.globalAlpha=cl(fa,0,1)*(b==='M-113'?.9:1);x.fillStyle=b==='M-113'?ac:'#fff';x.fillRect(0,0,W,H);x.globalAlpha=1;return;
  case 'M-114':e=eo(q);both(function(c){c.arc(0,H,Math.max(.1,e*diag*1.05),0,6.283);},W*.02);return;
  case 'M-115':e=eio(q);x.fillStyle='#000';x.fillRect(0,0,W,H);x.save();x.globalAlpha=1;x.drawImage(A,0,0,W*(1-e),H);x.fillStyle='rgba(0,0,0,'+(e*.6)+')';x.fillRect(0,0,W*(1-e),H);x.drawImage(B,W*(1-e),0,W*e,H);x.fillStyle='rgba(0,0,0,'+((1-e)*.6)+')';x.fillRect(W*(1-e),0,W*e,H);x.restore();return;
  case 'M-116':if(q<.55){e=ei(q/.55);x.globalAlpha=1;tdraw(x,A,W,H,{s:1+3*e,cx:.5,cy:.5});}else full(x,A,W,H);if(q>.45){e=eo((q-.45)/.55);x.globalAlpha=e;tdraw(x,B,W,H,{s:.6+.4*e,cx:.5,cy:.5});}x.globalAlpha=1;return;
  case 'M-117':full(x,A,W,H);for(var i2=0;i2<5;i2++){var st=cl((q-i2*.08)/.6,0,1),es=eio(st),y2=i2*H/5;x.save();x.beginPath();x.rect(0,y2,W,H/5+1);x.clip();tdraw(x,B,W,H,{ox:1-es});x.restore();}return;
  case 'M-118':full(x,q<.5?A:B,W,H);x.save();x.globalCompositeOperation='screen';var pk=Math.sin(q*Math.PI);[[.2+q*.6,.3,'255,120,40'],[.8-q*.5,.6,'255,60,60'],[.5,.1+q*.8,'255,200,90']].forEach(function(bl2){var g2=x.createRadialGradient(bl2[0]*W,bl2[1]*H,0,bl2[0]*W,bl2[1]*H,W*.7);g2.addColorStop(0,'rgba('+bl2[2]+','+(.95*pk)+')');g2.addColorStop(1,'rgba('+bl2[2]+',0)');x.fillStyle=g2;x.fillRect(0,0,W,H);});x.restore();return;
  case 'M-119':full(x,A,W,H);e=eo(q);x.globalAlpha=e;tdraw(x,B,W,H,{s:1.05-.05*e,cx:.5,cy:.5});x.globalAlpha=1;return;
  case 'M-120':e=eio(q);tdraw(x,A,W,H,{oy:-e});tdraw(x,B,W,H,{oy:1-e});return;
  case 'M-267':e=eio(q);both(function(c){var r=Math.max(1,e*diag*.6),rr=r*(1-.6*ss(.3,.8,e));c.save&&0;var a=e*Math.PI;var pts=[];for(var i=0;i<64;i++){var t=i/64*Math.PI*2;var sq=Math.max(Math.abs(Math.cos(t)),Math.abs(Math.sin(t)));var rad=r/(1+(sq>0?(1/sq-1):0)*(1-rr/r));pts.push([fx+Math.cos(t+a)*rad,fy+Math.sin(t+a)*rad]);}c.moveTo(pts[0][0],pts[0][1]);pts.forEach(function(p2){c.lineTo(p2[0],p2[1]);});c.closePath();},W*.01);return;
  case 'M-268':full(x,q<.55?A:B,W,H);var gr=q<.55?eo(q/.55):1,fa2=q<.55?1:1-eo((q-.55)/.45);x.save();x.globalAlpha=fa2;x.fillStyle=ac;x.beginPath();var R=gr*diag*.75;for(var i3=0;i3<=48;i3++){var t3=i3/48*Math.PI*2,rad3=R*(1+.08*Math.sin(t3*5+q*12));var X=W/2+Math.cos(t3)*rad3,Y=H/2+Math.sin(t3)*rad3;if(i3)x.lineTo(X,Y);else x.moveTo(X,Y);}x.fill();x.restore();return;
  case 'M-269':e=eo(q);both(function(c){[[0,0,.5],[.18,-.12,.32],[-.2,.1,.3],[.1,.22,.28],[-.15,-.2,.26]].forEach(function(s2){var r=Math.max(.1,e*diag*s2[2]*1.6);c.moveTo(W/2+s2[0]*W*e+r,H/2+s2[1]*H*e);c.arc(W/2+s2[0]*W*e,H/2+s2[1]*H*e,r,0,6.283);});});return;
  case 'M-270':full(x,q<.5?A:B,W,H);var pk2=Math.sin(q*Math.PI);x.save();x.globalCompositeOperation='screen';var g3=x.createRadialGradient(W,0,0,W,0,diag*(.3+q));g3.addColorStop(0,'rgba(255,255,230,'+pk2+')');g3.addColorStop(.4,'rgba(255,200,80,'+(pk2*.9)+')');g3.addColorStop(1,'rgba(255,90,20,0)');x.fillStyle=g3;x.fillRect(0,0,W,H);x.restore();return;
  default:full(x,B,W,H);}}

/* bars, vignettes, tags and clocks on top */
function top(x,it,W,H,mask){var b=it.b,lt=it.lt,e;
  if(b==='M-138'){e=eio(env(it,.5,.4));var bh=Math.min(W*.16,H*.14)*e;x.fillStyle='#000';x.fillRect(0,0,W,bh);x.fillRect(0,H-bh,W,bh);}
  else if(b==='M-139'){e=env(it,.6,.4);var cx=(mask&&mask.any?mask.head.x:it.fx)*W,cy=(mask&&mask.any?mask.head.y:it.fy)*H,g=x.createRadialGradient(cx,cy,W*.25,cx,cy,Math.hypot(W,H)*.6);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,'+(.9*e)+')');x.fillStyle=g;x.fillRect(0,0,W,H);}
  else if(b==='M-135'){tag(x,W,H,'⏸ '+(it.lang==='en'?'FREEZE':'لحظة'),it.pal.ac,eo(lt/.25)*env(it,0,.2));}
  else if(b==='M-259'){tag(x,W,H,'◀◀',it.pal.ac,env(it,.2,.2));}
  else if(b==='M-265'){tag(x,W,H,'▶▶ 3×',it.pal.ac,env(it,.2,.2));}
  else if(b==='M-266'){tag(x,W,H,'◀◀ REW','#fff',env(it,.1,.1));}
  else if(b==='M-263'){e=env(it,.3,.3);var r=W*.13,cx2=W*.8,cy2=H*.82;x.save();x.globalAlpha=e;x.fillStyle='rgba(255,255,255,.92)';x.beginPath();x.arc(cx2,cy2,r,0,6.283);x.fill();x.strokeStyle='#111';x.lineWidth=W*.008;x.stroke();x.lineCap='round';
    var mA=lt*12-Math.PI/2,hA=lt*1-Math.PI/2;x.beginPath();x.moveTo(cx2,cy2);x.lineTo(cx2+Math.cos(hA)*r*.5,cy2+Math.sin(hA)*r*.5);x.stroke();x.strokeStyle=it.pal.ac;x.beginPath();x.moveTo(cx2,cy2);x.lineTo(cx2+Math.cos(mA)*r*.8,cy2+Math.sin(mA)*r*.8);x.stroke();
    x.direction='ltr';x.font='800 '+Math.round(W*.06)+'px system-ui,Arial,sans-serif';x.fillStyle='#fff';x.textAlign='center';x.shadowColor='rgba(0,0,0,.6)';x.shadowBlur=W*.02;x.fillText('+'+Math.max(1,Math.round(lt*1.5))+'h',cx2,cy2-r-W*.03);x.restore();}}

/* the list of footage effects active at timeline time t */
function active(clips,t,mBy,pal,inCut,lang){var out=[];clips.forEach(function(c){var m=mBy(c.m);if(!m||!isFoot(m))return;if(t<c.s||t>=c.s+c.d)return;if(inCut&&inCut(t))return;var gold=/gold/.test(m.vcls||''),p0=pal(c)||{};
  out.push({c:c,m:m,b:bid(m),lt:t-c.s,d:c.d,p:(t-c.s)/c.d,fx:(c.x||50)/100,fy:(c.y||40)/100,lang:lang,pal:{ac:gold?GOLD:(p0.ac||'#F07A50'),hl:gold?GOLD:(p0.hl||'#7FE0C8'),bg:p0.bg||'#102E33'}});});return out;}

function head(img,key){if(!SEG){if(!segBad)segLoad().catch(function(){});return null;}var mk=maskOf(img,key);return mk&&mk.any?mk.head:null;}
return {head:head,isFoot:isFoot,keepsHTML:keepsHTML,dur:dur,needsPerson:needsPerson,needsHold:needsHold,remap:remap,holdTime:holdTime,draw:draw,front:front,active:active,segLoad:segLoad,ready:function(){return !!SEG;},failed:function(){return segBad;},histReset:histReset,onReady:null,bid:bid};
})();
