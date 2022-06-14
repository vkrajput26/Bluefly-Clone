searchfun=()=>{
   let body=document.querySelector("body")
   body.style.filter="blur(1px)"

   let searchbar=document.getElementById("search-bar")
   searchbar.style.display="none"
    let inputSearchBar=document.getElementById("searchInput")
    inputSearchBar.style.display="block"
  inputSearchBar.style.filter="brightness(14px)"
   inputSearchBar.style.border="1 px solid black"
 inputSearchBar.style.width="100%"
 inputSearchBar.style.height="60%"

}

//shoes function
funshoes=()=>{

   let shoesMainDiv=document.getElementById("shoesMainDiv")
   shoesMainDiv.style.display="block"
  let textshoes=document.getElementById("shoes")
  textshoes.innerText="SHOES"

}


//footer
