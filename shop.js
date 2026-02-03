const shop=document.getElementById("shop");
let products=JSON.parse(localStorage.getItem("products")||"[]");

products.forEach(p=>{
let d=document.createElement("div");
d.className="card";
d.innerHTML=\`
<img src="\${p.img}">
<h2>\${p.name}</h2>
<p>\${p.price} Robux</p>
<button onclick="alert('Contact admin to buy')">Buy</button>
\`;
shop.appendChild(d);
});
