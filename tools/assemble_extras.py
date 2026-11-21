"""Inline the extras (tools/extras/x.css, x-data.js, x-ui.js) into index.html between markers.
Safe to run again: it replaces the previous copy."""
import re,sys,os
D=os.path.dirname(os.path.abspath(__file__));S=sys.argv[1] if len(sys.argv)>1 else os.path.join(D,'..','index.html')
s=open(S).read();X=os.path.join(D,'extras')
css=open(X+'/x.css').read();js=open(X+'/x-data.js').read()+'\n'+open(X+'/x-color.js').read()+'\n'+open(X+'/x-logo.js').read()+'\n'+open(X+'/x-ui.js').read()
def put(s,a,b,body,anchor,before=False):
    if a in s: return re.sub(re.escape(a)+'.*?'+re.escape(b),lambda m:a+body+b,s,flags=re.S)
    i=s.index(anchor)+(0 if before else len(anchor));return s[:i]+a+body+b+s[i:]
s=put(s,'/*XCSS-START*/','/*XCSS-END*/','\n'+css+'\n','</style>\n\n<div class="wrap" id="app">',True)
s=put(s,'\n<script id="xjs">','</script><!--XJS-END-->','\n'+js+'\n','window.buildMD=buildMD;window.buildJSON=buildJSON;\n\napplyLang();\n</script>')
head='<link rel="manifest" href="manifest.webmanifest"><link rel="apple-touch-icon" href="apple-touch-icon.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="مكتبة الموشن"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">'
if 'rel="manifest"' not in s: s=s.replace('<meta name="theme-color" content="#0F5B66">','<meta name="theme-color" content="#0F5B66">\n'+head,1)
open(S,'w').write(s);print('ok',len(s))
