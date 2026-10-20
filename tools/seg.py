import onnxruntime as ort, numpy as np, cv2
S=ort.InferenceSession('/tmp/mdl/u2hs.onnx',providers=['CPUExecutionProvider'])
def mask(img):  # BGR uint8 -> float mask 0..1 same size
    h,w=img.shape[:2]
    x=cv2.resize(cv2.cvtColor(img,cv2.COLOR_BGR2RGB),(320,320),interpolation=cv2.INTER_AREA).astype(np.float32)
    x=x/max(x.max(),1e-6); x=(x-[0.485,0.456,0.406])/[0.229,0.224,0.225]
    x=x.transpose(2,0,1)[None].astype(np.float32)
    p=S.run(None,{'input.1':x})[0][0,0]
    p=(p-p.min())/(p.max()-p.min()+1e-8)
    return cv2.resize(p,(w,h),interpolation=cv2.INTER_CUBIC).clip(0,1)
if __name__=='__main__':
    import sys
    img=cv2.imread(sys.argv[1]); m=mask(img)
    m=cv2.GaussianBlur(m,(0,0),1.2)
    a=np.clip((m-0.35)/0.3,0,1)
    out=np.dstack([img,(a*255).astype(np.uint8)])
    cv2.imwrite(sys.argv[2],out)
    bg=np.full_like(img,(60,160,60)); comp=(img*a[...,None]+bg*(1-a[...,None])).astype(np.uint8)
    cv2.imwrite(sys.argv[2].replace('.png','_chk.jpg'),comp)
