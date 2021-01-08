let products =[
{name:`Brulee`,price:`20`},
{name:`Orea`,price:`30`},
{name:`Dates`,price:`10`}
]
 let cart=[];



 let total=0;

function addTocard(index){

    let product =products[index];

   cart.push(product)
   console.log(cart)
   
  total=total+product.price


   let list =document.getElementById(`lest`)
   list.innerHTML+=`<li>${product.name}${product.price}</li>`
}