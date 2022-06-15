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