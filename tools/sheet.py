import sys,subprocess,json
ids=sys.argv[2].split(','); out=sys.argv[1]; t=sys.argv[3] if len(sys.argv)>3 else '1.3'
cols=int(sys.argv[4]) if len(sys.argv)>4 else 10
for i in ids: subprocess.run(['ffmpeg','-loglevel','error','-y','-ss',t,'-i',f'/home/claude/demo/ex/{i}.mp4','-frames:v','1','-vf','scale=190:-1',f'/tmp/s_{i}.png'])
rows=[ids[k:k+cols] for k in range(0,len(ids),cols)]
rf=[]
for r,row in enumerate(rows):
    cmd=['ffmpeg','-loglevel','error','-y']
    for i in row: cmd+=['-i',f'/tmp/s_{i}.png']
    cmd+=['-filter_complex',''.join(f'[{k}]' for k in range(len(row)))+f'hstack={len(row)}',f'/tmp/row{r}.png']
    if len(row)==1: cmd=['cp',f'/tmp/s_{row[0]}.png',f'/tmp/row{r}.png']
    subprocess.run(cmd); rf.append(f'/tmp/row{r}.png')
cmd=['ffmpeg','-loglevel','error','-y']
for f in rf: cmd+=['-i',f]
if len(rf)>1: cmd+=['-filter_complex',''.join(f'[{k}]pad=1900:iw*0+ih:0:0[p{k}];' for k in range(len(rf)))+''.join(f'[p{k}]' for k in range(len(rf)))+f'vstack={len(rf)}',out]
else: cmd+=[out]
subprocess.run(cmd)
