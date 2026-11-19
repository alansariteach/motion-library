"""Generate the LT-xx colour-grading LUTs (.cube, 33^3) and their preview images.
Run: python3 tools/make_luts.py  (needs numpy, ffmpeg). Preview source: a frame of examples/M-022.mp4."""
import numpy as np,os,subprocess
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')
N=33
def lum(c):return c[...,0]*.2126+c[...,1]*.7152+c[...,2]*.0722
def sat(c,s):l=lum(c)[...,None];return l+(c-l)*s
def con(c,k,p=.5):return (c-p)*k+p
def lift(c,a):return a+c*(1-a)
def gain(c,r,g,b):return c*np.array([r,g,b])
def split(c,sh,hi,amt):l=lum(c)[...,None];return c+(1-l)*np.array(sh)*amt+l*np.array(hi)*amt
def curve_s(c,k):return c+k*np.sin((c-.5)*np.pi*2)*-.5/np.pi*0+k*(c-.5)*(1-np.abs(2*c-1))
LOOKS={
 'LT-01':lambda c:sat(con(gain(c,1.06,1.0,.9),1.05),1.08),
 'LT-02':lambda c:sat(con(gain(c,.93,1.0,1.08),1.06),.92),
 'LT-03':lambda c:sat(con(split(c,[-.06,.04,.09],[.09,.02,-.07],1),1.08),1.1),
 'LT-04':lambda c:sat(lift(gain(c,1.05,1.0,.88),.07)*.96,.75),
 'LT-05':lambda c:np.repeat(con(lum(c),1.25)[...,None],3,-1),
 'LT-06':lambda c:sat(con(split(gain(c,1.08,1.02,.85),[.02,.0,-.04],[.08,.05,-.06],1),1.06),1.05),
 'LT-07':lambda c:sat(lift(con(c,.88),.06),.85),
 'LT-08':lambda c:sat(con(c,1.12),1.35),
 'LT-09':lambda c:sat(con(split(c,[.06,-.04,.12],[-.04,.06,.08],1),1.1),1.15),
 'LT-10':lambda c:sat(np.power(np.clip(c,0,1),.85)*1.03,1.05)}
g=np.linspace(0,1,N);b,gg,r=np.meshgrid(g,g,g,indexing='ij');base=np.stack([r,gg,b],-1)
src='/tmp/lt_src.png'
subprocess.run(['ffmpeg','-nostdin','-loglevel','error','-y','-ss','0.3','-i',R+'/examples/M-022.mp4','-frames:v','1','-vf','crop=540:675:0:240,scale=432:540',src],check=True)
subprocess.run(['ffmpeg','-nostdin','-loglevel','error','-y','-i',src,'-q:v','4',R+'/lut/original.jpg'],check=True)
for k,f in LOOKS.items():
    o=np.clip(f(base.copy()),0,1).reshape(-1,3)
    with open(f'{R}/lut/{k}.cube','w') as fh:
        fh.write(f'TITLE "Alansari.Tech {k}"\nLUT_3D_SIZE {N}\nDOMAIN_MIN 0 0 0\nDOMAIN_MAX 1 1 1\n')
        fh.write('\n'.join(f'{x[0]:.5f} {x[1]:.5f} {x[2]:.5f}' for x in o)+'\n')
    subprocess.run(['ffmpeg','-nostdin','-loglevel','error','-y','-i',src,'-vf',f'lut3d=file={R}/lut/{k}.cube','-q:v','4',f'{R}/lut/{k}.jpg'],check=True)
print('ok')
