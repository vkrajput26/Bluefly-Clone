//  function searchfun(){
//  //searchfun=()=>{
//   // let body=document.querySelector("body")
//   // body.style.filter="blur(1px)"

//    let searchbar=document.getElementById("search-bar")
//    searchbar.style.display="none"
//     let inputSearchBar=document.getElementById("searchInput")
//     inputSearchBar.style.display="block"
//   inputSearchBar.style.filter="brightness(14px)"
//    inputSearchBar.style.border="1 px solid black"
//  inputSearchBar.style.width="100%"
//  inputSearchBar.style.height="60%"

//  let list=document.getElementById("navbar-option")
 
// list.style.filter="opacity(50%)"
// console.log("vk")

// }



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



//shoes function
funshoes=()=>{

    let shoesMainDiv=document.getElementById("shoesMainDiv")
    shoesMainDiv.style.display="block"
   let textshoes=document.getElementById("shoes")
   textshoes.innerText="SHOES"
 
 }

//footer

// const options = {
//     method: 'GET',
//   //  url: 'https://amazon24.p.rapidapi.com/api/todaydeals',
//     headers: {
//       'X-RapidAPI-Key': '5f9f482867mshf963c3ca77496f6p15c08djsn251fde67d9e8',
//       'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
//     }
//   };
  
//   fetch(`https://amazon24.p.rapidapi.com/api/todaydeals`,options)

//       .then(response => response.json())
//       .then(response => appendTime(response))
//   .catch(function (error) {
//       console.error(error);
//   });

//   function appendTime(response){
//     console.log(response)
//   }