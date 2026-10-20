import re, sys, json, subprocess, math, os
from playwright.sync_api import sync_playwright
W,H,FPS=540,960,30
ids=sys.argv[1].split(',') ; dbg=len(sys.argv)>2 and sys.argv[2]=='dbg'
data={x['id']:x for f in ('/tmp/h455.json','/tmp/h5.json','/tmp/h6.json') for x in json.load(open(f))}
CSS="""
html,body{margin:0;background:#0c1a1d!important;overflow:hidden!important}
#app,canvas,.scrim,.intro,#intro{display:none!important}
#demo{position:fixed;left:0;top:0;width:540px;height:960px;overflow:hidden;z-index:99999;background:#0c1a1d;font-family:var(--f-ar)}
#dbg{position:absolute;left:50%;top:0;height:960px;width:960px;margin-left:-480px;background:url(file:///home/claude/demo/ex_me.jpg) center/cover;transform-origin:52% 35%}
#dsh{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(8,26,29,.78) 100%)}
#dchip{position:absolute;left:30px;top:150px;padding:8px 14px;border-radius:13px;background:rgba(16,46,51,.88);color:#FBF7F0;font:700 17px "DejaVu Sans Mono",monospace;direction:ltr;z-index:5}
#dchip b{color:#FFC857;margin-right:8px}#dchip s{display:block;text-decoration:none;font-size:11px;opacity:.7;margin-top:3px;font-weight:400}
#demo .st{position:absolute!important;left:0;bottom:0;width:540px!important;height:675px!important;aspect-ratio:auto!important;background:transparent!important;border-radius:0!important;border:0!important;box-shadow:none!important;container-type:inline-size}
#demo .st .ph,#demo .st .vtag{display:none!important}
#demo .st.full{height:960px!important}
#demo .st.full .T{top:64%!important}
#demo .logo{background:none!important;border:0!important;box-shadow:none!important;width:62cqw!important;height:34cqw!important;display:grid;place-items:center}
#demo .logo svg{display:none!important}
#demo .av .fc{background:url(file:///home/claude/demo/ex_me.jpg) 52% 24%/340% auto no-repeat!important}
#demo #dst.vid .scene,#demo #dst.per .scene{display:block!important;background-size:cover!important;background-position:center!important}
#demo .st.vid .scene:not(.gray){background-image:var(--fa)!important}
#demo .st.vid .scene.gray{background-image:var(--fb)!important}
#demo .st.vid.trn .scene:not(.gray){background-image:var(--fb)!important}
#demo .st.vid.trn .scene.gray{background-image:var(--fa)!important}
#demo .st.vid .pp,#demo .st.vid .lamp,#demo .st.vid .chair{display:none!important}
#demo .st.per .pp{display:block!important;position:absolute;left:50%;bottom:0;width:86%;height:74%;translate:-50% 0;background:url(file:///home/claude/demo/me_cut.png) center bottom/contain no-repeat}
#demo .st.per .scene.room{background:url(file:///home/claude/demo/bg_room.jpg) center/cover!important}
#demo .st.per .p3 .T{font-size:26cqw!important}
#demo .st.per .T.ext{font-size:24cqw!important}
#demo .st.per .a:has(>.pp){z-index:3}
#demo .st.per .pp::before,#demo .st.per .pp::after{display:none!important}
#demo .st.per .pp.sm{width:44cqw;height:56%}
#demo .st.per .pp.sil{background:url(file:///home/claude/demo/me_sil.png) center bottom/contain no-repeat}
#demo .st.per .pp.neo{background:url(file:///home/claude/demo/me_edge.png) center bottom/contain no-repeat}
#demo.nobg #dbg,#demo.nobg #dsh{display:none!important}
#demo bdi{unicode-bidi:isolate;direction:ltr}
#demo .pp,#demo .lamp,#demo .chair{display:none!important}
#demo .st.sc1 .L>.pp.sm{display:block!important;top:62%;bottom:auto;width:19cqw;height:30cqw;border-radius:3cqw;background:url(file:///home/claude/demo/ex_me.jpg) 50% 14%/330% auto;border:.6cqw solid rgba(255,255,255,.5)}
#demo .st.sc1 .L>.pp.sm::before,#demo .st.sc1 .L>.pp.sm::after{display:none}
#demo .st:not(.sc1) .scene{display:none!important}
#demo .st.sc1 .scene{display:block!important;background:url(file:///home/claude/demo/ex_me.jpg) center/cover!important}
#demo.sc1 #dbg,#demo.sc1 #dsh{display:none!important}
#demo .st.sc1 .pblur{left:30%!important;top:25%!important;width:40%!important;height:32%!important}
#demo .st.sc1 .obj{opacity:0!important;box-shadow:none!important}
#demo .st.sc1 .obj,#demo .st.sc1 .tlab,#demo .st.sc1 .tring{left:42%!important;top:30%!important}
#demo .st.sc1 .tring{width:22cqw!important;height:22cqw!important;margin:-4cqw 0 0 -4cqw}
#demo .st.sc1 .ntf{margin-top:38cqw}
#demo .tpath{width:135cqw!important;max-width:none!important;margin-left:-20cqw}
#demo .st.sc1 .phn2{left:36%!important;top:52%!important}
#demo .st.sc1 .scene{inset:-14% -26%!important}
#demo .sig path{stroke:#fff!important;stroke-width:1.8!important;filter:drop-shadow(0 0 6px rgba(255,255,255,.4))}
@keyframes k263f{0%,100%{filter:brightness(.38) saturate(.7) hue-rotate(15deg) contrast(1.1)}50%{filter:sepia(.45) saturate(1.5) brightness(1.08)}}
#demo .st.sc1 .scene.a{animation-name:k263f!important;background:url(file:///home/claude/demo/ex_me.jpg) center/cover!important}
@keyframes k182x{0%{clip-path:inset(0 100% 0 0)}45%,88%{clip-path:inset(0 0 0 0)}100%{clip-path:inset(0 0 0 100%)}}
#demo .logo::before{content:"";position:absolute;inset:0;background:url(file:///home/claude/demo/logo.png) center/contain no-repeat}
"""
def srct(bid,t,d):
    p=(t%d)/d
    if bid=='M-135':
        if p<0.4: return p*d
        if p<0.88: return 0.4*d
        return (p-0.48)*d
    if bid=='M-136': return (t%d)*0.25
    if bid=='M-137':
        a,b=0.4,0.52
        if p<a: return p*d
        if p<b: return a*d+(p-a)*d*2.5
        return a*d+(b-a)*d*2.5+(p-b)*d*0.5
    return t
with sync_playwright() as p:
    b=p.chromium.launch(args=['--allow-file-access-from-files','--disable-web-security'])
    pg=b.new_page(viewport={'width':W,'height':H})
    pg.goto('file:///home/claude/site/index.html'); pg.wait_for_timeout(1500)
    pg.add_style_tag(content=CSS)
    pg.evaluate("""()=>{document.documentElement.className='intro-done';var d=document.createElement('div');d.id='demo';d.innerHTML='<div id="dbg"></div><div id="dsh"></div><div id="dchip"><b></b><span></span><s>ALANSARI.TECH · MOTION LIBRARY</s></div><div class="st" id="dst"></div>';document.body.appendChild(d);}""")
    for mid in ids:
        x=data[mid]; d=float(x['d'][:-1]) if x['d'] else 2.8
        bid=x['base'] or mid
        MODE={'CAM':'vid','TRN':'vid trn','PER':'per','D3':'per'}.get(x['c'],'')
        if x['c']=='FX' and ('class="pp a' in x['h'] or 'class="pp neo' in x['h']): MODE='per'
        hh=x['h'].replace('قهوتي','نظارتي')
        if x['c']=='D3' and bid!='M-251': hh='<div class="scene"></div>'+hh
        if bid in ('M-202','M-208','M-251'): hh=hh.replace('class="scene a"','class="scene a room"')
        if bid=='M-182': hh='<div style="width:62cqw;aspect-ratio:1474/805;background:url(file:///home/claude/demo/logo.png) center/contain no-repeat;animation:k182x var(--d) ease-in-out infinite both"></div>'
        if bid=='M-188': hh=re.sub(r'<svg.*?</svg>','<div style="width:100%;height:100%;background:url(file:///home/claude/demo/logo.png) center/contain no-repeat"></div>',hh,flags=re.S)
        total=d*math.ceil(3.6/d); n=int(round(total*FPS))
        hh=pg.evaluate('([h,id])=>arFix(h,id)',[hh,bid])
        if 'textPath' in hh: hh=hh.replace('dur="4s"','dur="%ss"'%d)
        pg.evaluate("""([h,d,id,en,FULL,VC,SC,MODE])=>{var s=document.getElementById('dst');s.className='st '+VC+(FULL?' full':'')+(MODE?' '+MODE:'');document.getElementById('demo').className=SC?'sc1':(MODE?'nobg':'');if(SC)s.className+=' sc1';s.style.setProperty('--d',d+'s');s.innerHTML=h;document.querySelector('#dchip b').textContent=id;document.querySelector('#dchip span').textContent=en;}""",[hh.replace('@alansari.tech','<bdi dir="ltr">@alansari.tech</bdi>'),d,mid,x['en'],bid in ('M-074','M-076','M-188','M-274') or ('class="scene' in x['h']) or MODE!='',x['vcls'],('class="scene' in x['h']) and MODE=='',MODE])
        pg.wait_for_timeout(120)
        out=f'/home/claude/demo/ex/{mid}.mp4'
        ff=None
        if not dbg:
            ff=subprocess.Popen(['ffmpeg','-y','-v','error','-f','image2pipe','-framerate',str(FPS),'-i','-','-c:v','libx264','-crf','28','-preset','veryfast','-pix_fmt','yuv420p','-movflags','+faststart',out],stdin=subprocess.PIPE)
        frames=[n//6,n//3,n//2,(2*n)//3] if dbg else range(n)
        for f in frames:
            t=f/FPS
            pg.evaluate("""([t,DD])=>{document.getAnimations().forEach(a=>{a.pause();a.currentTime=t*1000});document.querySelectorAll('#dst svg').forEach(v=>{if(v.pauseAnimations){v.pauseAnimations();v.setCurrentTime(((t+0.42*DD)%DD))}});document.querySelectorAll('#dst .cnt').forEach(c=>{var to=+c.dataset.to,v;var bar=c.parentElement.querySelector('.pbar i');if(bar){var m=new DOMMatrix(getComputedStyle(bar).transform);v=m.a}else{var p=(t%DD)/DD,k=Math.min(1,p/.4);v=k>=1?1:1-Math.pow(2,-10*k);if(p>.9)v=0}c.textContent=Math.round(v*to)});document.querySelectorAll('#dst .pie').forEach(e=>{var n=e.nextElementSibling;var v=parseFloat(getComputedStyle(e).getPropertyValue('--pf'));if(n&&!isNaN(v))n.textContent=Math.round(v)+'%'});document.querySelectorAll('#dst .scr').forEach(e=>{var tt=e.dataset.t;if(!tt)return;var p=(t%DD)/DD,k=Math.max(0,Math.min(1,(p-.08)/.4)),n=Math.floor(k*tt.length),o='';var SCL='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@',S=/[\u0600-\u06FF]/.test(tt)?'ابتثجحخدذرزسشصضطظعغفقكلمنهوي':SCL;var seed=Math.floor(t*30);function R(i){var x=Math.sin((seed+1)*12.9898+(i+1)*78.233)*43758.5453;return x-Math.floor(x)}for(var i=0;i<tt.length;i++)o+=i<n?tt[i]:S[Math.floor(R(i)*S.length)];if(p>.92)o=tt.replace(/./g,function(c,i){return SCL[Math.floor(R(i)*SCL.length)]});e.textContent=o});document.getElementById('dbg').style.transform='scale('+(1.03+0.04*Math.min(1,t/6))+')'}""",[t,d])
            if 'vid' in MODE:
                ia=min(int(round(srct(bid,f/FPS,d)*FPS))+1,225); pg.evaluate("async ([a,b])=>{var u=['a','b'].map((k,j)=>'url(file:///home/claude/demo/f'+k+'/'+String([a,b][j]).padStart(4,'0')+'.jpg)');var dm=document.getElementById('demo');dm.style.setProperty('--fa',u[0]);dm.style.setProperty('--fb',u[1]);await Promise.all([a,b].map((n,j)=>new Promise(r=>{var im=new Image();im.onload=im.onerror=r;im.src='file:///home/claude/demo/f'+['a','b'][j]+'/'+String(n).padStart(4,'0')+'.jpg'})))}",[ia,ia])
            img=pg.screenshot(type='jpeg',quality=88)
            if dbg: open(f'/home/claude/demo/dbg/{mid}_{f}.jpg','wb').write(img)
            else: ff.stdin.write(img)
        if ff: ff.stdin.close(); ff.wait()
        print('ok',mid,n,flush=True)
    b.close()
