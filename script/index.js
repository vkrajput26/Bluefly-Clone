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


//shop by categories

let displayData=[
  {
    image:"https://m.media-amazon.com/images/I/61NyMVjbUrS._UY550_.jpg",
    title:"DRESS",
  },
  {
    image:"https://static.connect2india.com/c2icd/product_resources/images/sandle.jpg",
    title:"PUMPS & HEELS",
  },
  {
    image:"https://rukminim1.flixcart.com/image/714/857/k73nlow0/hand-messenger-bag/d/g/s/1294-br-1294-shoulder-bag-hiva-purse-original-imafpeabvjrjmz8r.jpeg?q=50",
    title:"HANDBAGS",
  },
  {
    image:"https://www.cutlerandgross.com/media/catalog/product/cache/8e555fcdf62da15bebe859220ab3f2b6/1/3/1306-01_2_1.jpg",
    title:"SUNGLASSES",
  },
  {
    image:"https://cf.shopee.ph/file/bf20d394b2f9ec6a58d6486e89208c53",
    title:"WOMEN'S  SNEAKERS",
  },
  {
    image:"https://5.imimg.com/data5/PQ/RS/BC/SELLER-14290347/mens-two-patti-white-sneaker-shoes-500x500.jpg",
    title:"MEN'S SNEAKERS",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRhAQZ-EKUU-AFemNHc2hoIsexk6b-mRkf_QwfiIWy90jVsvziH8JbTsyadKyPIlYkCM&usqp=CAU",
    title:"MEN'S T-SHIRTS ",
  },
  {
    image:"https://i.pinimg.com/originals/0b/d3/d7/0bd3d74b91129bad95f9b8127b20ba6b.jpg",
    title:"WOMEN'S TOPS",
  },
  {
    image:"https://assets.vogue.com/photos/61314d3ebaeca5960e91f202/master/w_1280%2Cc_limit/slide_58.jpg",
    title:"WOMEN'S DENIM",
  },
  {
    image:"https://m.media-amazon.com/images/I/91zvsjtEEDL._UX679_.jpg",
    title:"JEWELRY",
  }

]
console.log(displayData)

displayData.forEach(function (el){
  console.log(el)
  let image=document.createElement("img")
  image.src=el.image;
  image.style.height="205px"

  let title=document.createElement("h4")
  title.innerText=el.title;

  let box=document.createElement("div")
  box.append(image,title)

  document.getElementById("displarProductShopByCatg").append(box)
})


//new arrivals

NewArrivalData=  [

  {
    image: "https://rukminim1.flixcart.com/image/200/200/l407mvk0/shoe/g/j/a/-original-imagezy4wxjeubhd.jpeg?q=70",
     title: "U.S. Polo Assn., WROGN...",
    price: 1000
  },
  {
    image: "https://rukminim1.flixcart.com/image/200/200/ks3jjbk0/blazer/m/v/n/44-pibzlnspo09191-peter-england-original-imag5pz94h73revm.jpeg?q=70",
    title: "Suits, Blazers",
    price:4000
  },



  {
    image: "https://rukminim1.flixcart.com/image/200/200/ktop5e80/cap/0/z/x/free-cap-01-florida-original-imag6z3b2gtryfun.jpeg?q=70",
    title:"Mens Caps",
    price:800
  },

  {
    image: "https://rukminim1.flixcart.com/image/200/200/ky7lci80/remote-control-toy/4/y/e/8-wheel-rock-crawler-remote-control-car-monster-truck-2-4ghz-4wd-original-imagahtdghq3k4h2.jpeg?q=70",
    title: "Remote Control Toy",
    price:900
  },
  {
    image: "https://rukminim1.flixcart.com/image/200/200/kf2v3ww0/book-shelf/k/9/3/galvanised-steel-sj030405-snoopy-flipkart-perfect-homes-studio-original-imafvmhv2eczrzz4.jpeg?q=70",
    title: "Bookshelves",
    price:200
  }
]

console.log(NewArrivalData)

NewArrivalData.forEach((el)=>{
console.log(el)

let image=document.createElement("img")
image.src=el.image;
image.style.height="205px"

let title=document.createElement("h4")
title.innerText=el.title;

let price=document.createElement("h3")
price.innerText=el.price

let box=document.createElement("div")
box.append(image,title,price)

document.getElementById("NewArrival").append(box)

})