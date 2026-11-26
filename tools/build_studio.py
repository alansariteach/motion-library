"""Build studio.html (the Motion Studio editor) from index.html + tools/studio/*.
Run after any change to index.html motions or to the studio sources: python3 tools/build_studio.py"""
import os,re
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..');D=os.path.join(R,'tools','studio')
s=open(os.path.join(R,'index.html')).read()
head='\n'.join(re.findall(r'<link rel="(?:preconnect|stylesheet|icon)"[^>]*>',s[:s.index('<style>\n')+10]))
css=s[s.index('<style>\n')+8:s.index('</style>\n\n<div class="wrap" id="app">')]
i=s.index("<script>\nvar STAR=")+8;j=s.index("var lang='ar';",i)
eng=s[i:j]
eng+="var lang='ar';try{var sv=localStorage.getItem('ml-lang');if(sv==='en'||sv==='ar')lang=sv;}catch(e){}\n"
eng+="function T(k){return UI[lang][k];}\n"
k=s.index("/* English preview text */",j);l=s.index("function paint(o)",k);eng+=s[k:l]
a=s.index("var ARFIX=",l);b=s.index("\n",s.index("function arFix(",a));eng+=s[a:b]+"\n"
f=s.index("var FONTS=[");eng+=s[f:s.index("\n",f)]+"\n"
g=s.index("function fUrl(f)");eng+=s[g:s.index("\n",g)]+"\n"
eng+=open(os.path.join(R,'tools','extras','x-data.js')).read()+'\n'+open(os.path.join(R,'tools','extras','x-color.js')).read()+'\n'+open(os.path.join(R,'tools','extras','x-logo.js')).read()
chip=re.search(r'<img class="chip"[^>]*>|<img[^>]*class="brand-chip"[^>]*>',s)
fav=re.search(r'<link rel="icon" href="(data:image/svg\+xml,[^"]+)"',s).group(1)
t=open(os.path.join(D,'studio.src.html')).read()
t=t.replace('<!--HEADLINKS-->',head).replace('/*SITECSS*/',css).replace('/*STUDIOCSS*/',open(os.path.join(D,'studio.css')).read())
def sjs():
    # auto.js goes inside the studio IIFE, just before its last line
    sj=open(os.path.join(D,'studio.js')).read().rstrip();i=sj.rfind('})();')
    return sj[:i]+open(os.path.join(D,'auto.js')).read()+'\n'+open(os.path.join(D,'tidy.js')).read()+'\n'+sj[i:]
t=t.replace('<!--CHIP-->','<img src="'+fav.replace('"','%22')+'" alt="">').replace('/*ENGINE*/',eng).replace('/*STUDIOJS*/',open(os.path.join(D,'fx.js')).read()+'\n'+sjs())
open(os.path.join(R,'studio.html'),'w').write(t);print('studio.html',len(t))
