document.addEventListener('contextmenu',e=>e.preventDefault());
document.onkeydown=e=>{
if(e.keyCode==123||(e.ctrlKey&&e.shiftKey&&e.keyCode==73)||(e.ctrlKey&&e.keyCode==85))return false;
};
setInterval(()=>{
let t=new Date();
debugger;
if(new Date()-t>100){
document.body.innerHTML="<h1 style='color:red;text-align:center;margin-top:20%'>Access Blocked</h1>";
}
},1000);
