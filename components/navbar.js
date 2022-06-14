function navbar(){
    return  ` <div id="navbar">
    <div id="top-header">
        <div id="left-top-header">

        </div>
        <div id="header-logo">
                 <img id="header-logo-img" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" alt="">
        </div>
        <div id="right-top-header">
                <div id="search-bar" onclick="searchfun()">
                    <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
                    <span>Search</span>
                </div>
                <input type="text" name="" id="searchInput"  placeholder="Search our store">
               
                <div id="header-user-icon">
                    <i class="fa-thin fa-user"> <a href="login.html"></a></i>

                    
                </div>
                <div id="header-cart-logo">
                    <i class="fa-thin fa-bag-shopping"></i>
                </div>
        </div>

    </div>

            <!-- navigation bar for options -->
            <div id="navbar-option">
                  <ul class="navbar-list" type="none" >
                    <li>
                        <a href="#"   onmouseover="funshoes()">SHOES</a>
                    </li>
                    <li>
                        <a href="#">HANDBAGS & ACCESSORIES</a>
                    </li>
                    <li>
                        <a href="#">DESIGNERS</a>
                    </li>
                    <li>
                        <a href="#">WOMEN</a>
                    </li>
                    <li>
                        <a href="#">MEN</a>
                    </li>
                    <li>
                        <a href="#">SUNGLASSES</a>
                    </li>
                    <li>
                        <a href="#">JEWELRY & WATCHES</a>
                    </li>
                    <li>
                        <a href="#">UNDER $50</a>
                    </li>
                    <li>
                        <a href="#">BEAUTY</a>
                    </li> 
                
                  </ul>
                
                  <li type="none">
                    <a class="red-box" href="#">CLEARANCE</a>
                </li>
            </div>

            <div id="shoesMainDiv">
                
            </div>
</div>



`
}
function searchfun(){
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


export {navbar,searchfun}