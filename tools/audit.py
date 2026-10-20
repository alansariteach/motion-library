import subprocess,glob,numpy as np,os,json
res={}
for f in sorted(glob.glob('/home/claude/demo/ex/M-*.mp4')):
    i=os.path.basename(f)[:-4]
    raw=subprocess.run(['ffmpeg','-loglevel','error','-i',f,'-vf','fps=6,scale=54:96,format=gray','-f','rawvideo','-'],capture_output=True).stdout
    a=np.frombuffer(raw,np.uint8).reshape(-1,96,54).astype(float)
    # exclude chip region top
    a=a[:,35:,:]
    dyn=np.abs(a-np.median(a,axis=0)).mean(axis=(1,2)).max()   # deviation from median frame
    step=np.abs(np.diff(a,axis=0)).mean(axis=(1,2)).max()
    res[i]=(dyn,step,len(a))
json.dump(res,open('/tmp/audit.json','w'))
lo=sorted(res.items(),key=lambda kv:kv[1][0])[:40]
print([ (k,round(v[0],2),round(v[1],2)) for k,v in lo])
