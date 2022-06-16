import { navbar,searchfun } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
//document.getElementById("search-bar").inn=searchfun()


import {footer} from "../components/navbar.js"
document.getElementById("footer-fetch").innerHTML=footer()



let url="https://blueflyadvance.herokuapp.com/api/search";
fetch(url).then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res)
    myfun(res)
})
.catch((err)=>{
    console.log(err)
})
 
 let myfun=(res)=>{

// function myfun(res){
    // console.log("hh",res)
    res.forEach((el)=>{
       // console.log(el)
     
     
     let box1=document.createElement("div")
     box1.addEventListener("click",function(){
       // console.log(el)
            mydetails(el)
     })

     let image=document.createElement("img")
     image.src=el.image
     image.style.height="204px"
    // console.log(el.image)


     let name=document.createElement("h5")
        name.innerText=el.snizeattribute

        let desc=document.createElement("p")
        desc.innerText=el.title

        let price=document.createElement("h4")
        price.innerText="$"+el.price

       
        box1.append(image,name,desc,price);

        document.getElementById("displayImages").append(box1)


    })
}

let arr=JSON.parse(localStorage.getItem("addToCartData"))||[]

 function mydetails(el){
     console.log("vk",el)
     arr.push(el)
    localStorage.setItem("addToCartData",JSON.stringify(arr));

 }


 //sidenavbar
import {sideNavbar} from "../components/sideNavbar.js"
 document.getElementById("filterSection").innerHTML=sideNavbar()

//https://blueflyy.herokuapp.com/api/search
//https://blueflyy.herokuapp.com/api/search
//3
//https://blueflyadvance.herokuapp.com/api/search