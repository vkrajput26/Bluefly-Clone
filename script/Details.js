import { navbar,searchfun } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
//document.getElementById("search-bar").inn=searchfun()


import {footer} from "../components/navbar.js"
document.getElementById("footer-fetch").innerHTML=footer()


//display data on page

let display=document.getElementById("account-details")

let prsnData=JSON.parse(localStorage.getItem("personalData"))||[];
console.log(prsnData)

let name=document.createElement("p")
name.innerText=prsnData.name;

let country=document.createElement("p")
country.innerText="India";

let email =document.createElement("p")
email.innerText=prsnData.email;

let box=document.createElement("div")

box.append(name,country,email)

display.append(box)



//history
let displayhistory=document.getElementById("display-history")

let datachk=JSON.parse(localStorage.getItem("addToCartData"))||[];
console.log(datachk)

datachk.forEach((el)=>{
    console.log(el)
   let box1=document.createElement("div")
  let image=document.createElement("img")
   image.src=el.image
   image.style.height="104px"

    let name=document.createElement("h5")
      name.innerText=el.snizeattribute

      let desc=document.createElement("p")
      desc.innerText=el.title

      let price=document.createElement("h4")
      price.innerText="$"+el.price

     
      box1.append(image,name,price);
       box1.setAttribute("id","checkout-box1")
      
     displayhistory.append(box1)

    })
