const terminal=document.getElementById('terminal'),form=document.getElementById('command-form'),input=document.getElementById('command'),status=document.getElementById('status'),services=document.getElementById('services'),logs=document.getElementById('logs'),clock=document.getElementById('clock');
const started=Date.now();
const serviceState={web:'ONLINE',api:'ONLINE',database:'OFFLINE',files:'ONLINE'};
const logLines=['[INFO] NEOX server lab initialized','[INFO] Web service started','[INFO] API service started','[WARN] Database service is offline'];
function print(text,cls=''){const line=document.createElement('div');line.className='terminal-line '+cls;line.textContent=text;terminal.appendChild(line);terminal.scrollTop=terminal.scrollHeight}
function uptime(){const s=Math.floor((Date.now()-started)/1000);return String(Math.floor(s/3600)).padStart(2,'0')+':'+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function renderStatus(){status.innerHTML='<div class="metric"><span>CPU</span><b>12%</b></div><div class="metric"><span>RAM</span><b>1.2 GB</b></div><div class="metric"><span>DISK</span><b>8.4 GB</b></div><div class="metric"><span>NETWORK</span><b class="ok">ONLINE</b></div><div class="metric"><span>UPTIME</span><b>'+uptime()+'</b></div>'}
function renderServices(){services.innerHTML=Object.entries(serviceState).map(([name,state])=>'<div class="service"><span>'+name+'</span><b class="'+(state==='ONLINE'?'dot':'warn')+'">'+state+'</b></div>').join('')}
function renderLogs(){logs.innerHTML=logLines.slice(-6).map(x=>'<div>'+x+'</div>').join('')}
function run(command){const c=command.trim().toLowerCase();print('neox@server:~$ '+command);if(!c)return;
if(c==='help'){['help','status','services','logs','processes','network','storage','uptime','version','clear'].forEach((x,i)=>print(x));return}
if(c==='status'){print('CPU: 12%');print('RAM: 1.2 GB');print('DISK: 8.4 GB');print('NETWORK: ONLINE');print('UPTIME: '+uptime());return}
if(c==='services'){Object.entries(serviceState).forEach(([n,s])=>print(n+': '+s));return}
if(c==='logs'){logLines.forEach(x=>print(x));return}
if(c==='processes'){print('neox-core   RUNNING');print('web         RUNNING');print('api         RUNNING');print('database    STOPPED');return}
if(c==='network'){print('interface: neox0');print('state: ONLINE');print('mode: simulated');return}
if(c==='storage'){print('root: 8.4 GB used');print('virtual disk: ONLINE');return}
if(c==='uptime'){print('Uptime: '+uptime());return}
if(c==='version'){print('NEOX VM LAB Servers Web Lab 0.2.0');return}
if(c==='clear'){terminal.textContent='';return}
print('Comando no disponible en el Web Lab.','warn')}
form.addEventListener('submit',e=>{e.preventDefault();run(input.value);input.value=''});
setInterval(()=>{clock.textContent=new Date().toLocaleTimeString();renderStatus()},1000);
renderStatus();renderServices();renderLogs();print('NEOX SERVER Web Lab 0.2');print('Escribe help para comenzar.','ok');