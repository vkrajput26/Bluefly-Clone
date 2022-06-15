import { navbar,searchfun } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()
//document.getElementById("search-bar").inn=searchfun()


import {footer} from "../components/navbar.js"
document.getElementById("footer-fetch").innerHTML=footer()


document.getElementById("search-bar").addEventListener("click",function(){
    let searchbar=document.getElementById("search-bar")
   searchbar.style.display="none"
    let inputSearchBar=document.getElementById("searchInput")
    inputSearchBar.style.display="block"
  inputSearchBar.style.filter="brightness(14px)"
   inputSearchBar.style.border="1 px solid black"
 inputSearchBar.style.width="100%"
 inputSearchBar.style.height="60%"

 let list=document.getElementById("navbar-option")
 
list.style.filter="opacity(50%)"
console.log("vk")
})

let data=JSON.parse(localStorage.getItem("personalData"))||[]
console.log(data)


document.getElementById("signIn").addEventListener("click",function(){
  event.preventDefault()
  console.log("vk")
  let logindata={
 email:document.getElementById("email").value,
 password:document.getElementById("password").value
}
    if(data.email==logindata.email && data.password==logindata.password)
    {
      alert("Login Successfully")
      window.location.href="Details.html"
    }
    else{
      alert("Wrong Credentials")
    }
})
