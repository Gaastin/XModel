const c=document.getElementById("snow");
const x=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let f=[];
for(let i=0;i<150;i++)f.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*3+1,d:Math.random()+1});
setInterval(()=>{
x.clearRect(0,0,c.width,c.height);
x.fillStyle="white";x.beginPath();
f.forEach(e=>{
x.moveTo(e.x,e.y);
x.arc(e.x,e.y,e.r,0,Math.PI*2);
e.y+=e.d;
if(e.y>c.height){e.y=0;e.x=Math.random()*c.width;}
});
x.fill();
},25);
