"""Fill popular.json with the most-copied IDs from GoatCounter.
The site sends an event "copy/<ID>" every time a prompt is copied.
Run: GOATCOUNTER_TOKEN=xxxx python3 tools/popular.py  (token: GoatCounter > Settings > API, read access)
Then commit popular.json. The site shows a 🔥 badge and a "Most used" filter once the list is not empty."""
import json,os,sys,urllib.request,datetime
tok=os.environ.get('GOATCOUNTER_TOKEN') or sys.exit('set GOATCOUNTER_TOKEN')
start=(datetime.date.today()-datetime.timedelta(days=60)).isoformat()
url=f'https://alansari-tech.goatcounter.com/api/v0/stats/hits?start={start}&limit=100'
req=urllib.request.Request(url,headers={'Authorization':'Bearer '+tok,'Content-Type':'application/json'})
hits=json.load(urllib.request.urlopen(req)).get('hits',[])
rows=sorted([(h.get('count',0),h['path'][5:]) for h in hits if h.get('path','').startswith('copy/')],reverse=True)
ids=[i for c,i in rows if c>=3][:30]
p=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','popular.json')
json.dump({'updated':datetime.date.today().isoformat(),'ids':ids},open(p,'w'),ensure_ascii=False,indent=1)
print(len(ids),'ids')
