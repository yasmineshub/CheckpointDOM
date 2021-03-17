var heart=document.getElementsByClassName('fas')
console.log(heart)
// btn.addEventlistener('click',function() {
//     var i=document.querySelectorAll('i');
//     if(i.classList.contains('fas')){
//     i.classList.remove('fas');
//     i.classList.add('fas-clicked')
// }})
// var del=document.get

for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        if(heart[i].style.color==="red"){
            heart[i].style.color=  "black"   
        }else{
            heart[i].style.color="red"
        }
    })
}
let minus=document.getElementsByClassName("qt-minus")
for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",function(){
        if(minus[i].nextElementSibling.innerText>0)
       { minus[i].nextElementSibling.innerText--
        totalPrice()
        globalTotal()
    }
    })
}
let plus=document.getElementsByClassName("qt-plus")
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
         plus[i].previousElementSibling.innerText++
         totalPrice()
         globalTotal()
        }
    )}
    let rmvBtn = document.querySelectorAll('.remove')
    console.log(rmvBtn)
    for (let i = 0; i < rmvBtn.length; i++) {
        rmvBtn[i].addEventListener('click',function(){
            rmvBtn[i].parentElement.parentElement.remove()
            globalTotal()
    
        })  
    }


    // function totalPrice(){
    //  let price = document.querySelectorAll('.price')
    //  let qty = document.querySelectorAll('.qt') 
    //  let sum=0
    //  for (let i = 0; i < price.length; i++) {
    //      sum+=price[i].innerHTML *qty[i].innerHTML
    //  }
    // }

    function totalPrice(){
    let art= document.querySelectorAll('.price')
    let qty = document.querySelectorAll('.qt')
    let sum = document.querySelectorAll('.full-price')
    console.log(art)
    console.log(qty)
    // let sum=0
 for (let i = 0; i < art.length; i++) {
     let Totalprice = art[i].querySelector('.price')

     console.log(art[i].innerHTML)
     console.log(qty[i].innerHTML)
     sum[i].innerHTML=art[i].innerHTML*qty[i].innerHTML
 }
} 
function globalTotal(){  let total=document.querySelector('.sutotal')
  console.log(total)
  let sum = document.querySelectorAll('.full-price')
  let Total=0
  for (let i = 0; i < sum.length; i++) {
      console.log(typeof(sum[i].innerHTML))
    Total+=Number(sum[i].innerHTML)  
  }
  console.log("t",Total)
  total.innerHTML=Total
}