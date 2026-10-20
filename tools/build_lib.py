"""Regenerate the library files from index.html and split them per category.
Run from anywhere. Needs playwright. Output goes to the site folder (default /home/claude/site).
Steps: 1) gen md/json via buildMD()/buildJSON() in the page  2) split into lib/ar, lib/en + INDEX.md
Then copy site files into the motion-library repo and plugins/alansari-motion/skills/alansari-motion-library/references/
in the alansari-plugins repo, bump version in both plugin.json and marketplace.json, commit and push both repos."""
import re,os,sys
from playwright.sync_api import sync_playwright
S=sys.argv[1] if len(sys.argv)>1 else '/home/claude/site/'
with sync_playwright() as p:
    b=p.chromium.launch(args=['--allow-file-access-from-files']);pg=b.new_page()
    pg.goto('file://'+S+'index.html');pg.wait_for_timeout(4000)
    open(S+'alansari-motion-library-ar.md','w').write(pg.evaluate("buildMD()"))
    open(S+'alansari-motion-library.json','w').write(pg.evaluate("buildJSON()"))
    pg.click('[data-l=en]');pg.wait_for_timeout(500)
    open(S+'alansari-motion-library.md','w').write(pg.evaluate("buildMD()"))
os.makedirs(S+'lib/ar',exist_ok=True);os.makedirs(S+'lib/en',exist_ok=True)
base='https://alansariteach.github.io/motion-library/lib/'
for lang,fn in (('ar','alansari-motion-library-ar.md'),('en','alansari-motion-library.md')):
    L=open(S+fn).read().split('\n')
    heads=[i for i,l in enumerate(L) if l.startswith('## ')]
    secs=[(L[h],'\n'.join(L[h:(heads[k+1] if k+1<len(heads) else len(L))])) for k,h in enumerate(heads)]
    open(S+f'lib/{lang}/RULES.md','w').write(secs[0][1])
    for title,body in secs[1:]:
        if title.strip() in ('## الخطوط','## Fonts'): code='FONTS'
        else:
            m=re.search(r'\((\w+)\)',title) if lang=='ar' else re.search(r'^## (\w+) —',title); code=m.group(1)
        open(S+f'lib/{lang}/{code}.md','w').write(f'# {title[3:]}\n\n'+body.split('\n',1)[1])
def runs(ns):
    ns=sorted(ns);out=[];s=q=ns[0]
    for n in ns[1:]:
        if n==q+1:q=n;continue
        out.append((s,q));s=q=n
    out.append((s,q));return ', '.join(f'M-{a:03d}' if a==b else f'M-{a:03d}..M-{b:03d}' for a,b in out)
order=['TXT','EMP','CAP','TRN','CAM','FX','SOC','LGO','PER','AUD','SCR','TRK','D3','TIM']
rows=[f"| {runs([int(x) for x in re.findall(r'^### M-(\d+)',open(S+f'lib/ar/{c}.md').read(),re.M)])} | {c} | {base}ar/{c}.md | {base}en/{c}.md |" for c in order]
idx=['# Alansari.Tech Motion Library: index','','Find the motion or font ID below, then read ONLY the matching small file. Do not read the whole library.','','| IDs | Category | Arabic file | English file |','|---|---|---|---|']+rows+[f'| FA-01..FA-61 and FE-01..FE-62 (fonts) | FONTS | {base}ar/FONTS.md | {base}en/FONTS.md |','','Rules for applying motions: '+base+'ar/RULES.md (Arabic) or '+base+'en/RULES.md (English).','Visual examples: https://alansariteach.github.io/motion-library/','']
open(S+'lib/INDEX.md','w').write('\n'.join(idx))
print('done')
