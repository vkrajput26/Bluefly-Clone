function navbar(){
    return  ` <div id="navbar">
    <div id="top-header">
        <div id="left-top-header">

        </div>
        <div id="header-logo">
        <a href="index.html"> <img id="header-logo-img" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" alt=""></a>
        </div>
        <div id="right-top-header">
                <div id="search-bar" onclick="searchfun()">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/08/Search-Icon-Graphics-1-1-580x387.jpg" height="40px" alt="">
                   
                </div>
                <input type="text" name="" id="searchInput"  placeholder="Search our store">
               
                <div id="header-user-icon">
                <a href="login.html">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lJysbI0bqFlMIoCNeMdBP16eWU9nw4VNbw&usqp=CAU" height="24px" alt=""></a> 
                        

                    
                </div>
                <div id="header-cart-logo">
                <a href="#"> <img src="https://image.shutterstock.com/image-vector/shopping-bag-icon-260nw-1074845483.jpg" height="40px" alt=""></a>

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

<div class="top-pg-black-box">
<p>WELCOME TO BLUEFLY:  Luxury brands at discounted prices </p>
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


//footer

function footer(){
    return `<div class="bottom-upper-div">
    <div>
        <img class="bottom-img" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_400x.jpg?v=1615204984" alt="">
        <h3 class="bottom-img-heading">UP TO 85% OFF THE DENIM SHOP FOR HIM & HER</h3>
        <div class="bottom-para">
            <p>From Hudson Jeans, Joe's Jeans, J Brand & More</p>
            <button class="bottom-button">SHOP DENIM</button>
        </div>
    </div>
    <div>
        <img class="bottom-img"  src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_400x.jpg?v=1630509164" alt="">
        <h3 class="bottom-img-heading">UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS</h3>
        <div class="bottom-para">
            <p>Must-Haves From Cole Haan, Burberry, & More</p>
            <button class="bottom-button"> SHOP OUTWEAR</button>
        </div>
    </div>
    <div>
        <img class="bottom-img" src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_400x.jpg?v=1630509636" alt="">

        <h3 class="bottom-img-heading">UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES</h3>
        <div class="bottom-para">
            <p>Shop Wallets, Belts, Hats, Sunglasses & More</p>
            <button class="bottom-button">SHOP WOMEN ACCESSORIES</button>
        </div>
    </div>
</div>


<!-- bottom-div -->

<div class="bottom-div-main">
    <div class="bottom-div-inner">
        <div class="bottom-div-aboutus">
            <p class="aboutus-text" >ABOUT US</p>
            <div class="bottom-div-aboutus-inner">
                <div>   
                <ul type="none">
                        <li class="bottom-li">Contact Us</li>
                        <li class="bottom-li" >Frequently Asked Questions</li>
                        <li class="bottom-li">Shipping & Returns</li>
                        <li class="bottom-li">Pre-Owned Guide
                        </li>
                    </ul>
                </div> 
                <div>
                    <ul type="none"> 
                        <li class="bottom-li">Sell on Bluefly</li>
                        <li class="bottom-li">Privacy Policy</li>
                        <li class="bottom-li">Terms & Conditions</li>
                        <li class="bottom-li">Do not sell my personal information</li>
                    </ul>
                </div> 
            </div>
        </div>
        <div class="bottom-div-singnup">
                <p class="aboutus-text" >SIGN UP AND SAVE</p>
                    <p class="bottom-li">Subscribe to get exclusive offers on designer brands</p>

                    <input type="text" name="" id="bottom-input" placeholder="Enter your email">
                    <br>
                    <button class="bottom-button-subs">Subscribe</button>
                <div class="bottom-fb-logo">
                    <i id="bottom-icon" class="fa-brands fa-instagram" ></i>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
         </div>
    </div>

    <div class="bottom-div-hidden">

    </div>
    <div class="bottom-div-logo">
        <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="">
        <p>© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
        </div>
</div>
`
}

export {footer}