let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"This is javascript",
    name:"Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/shirt1.jpg",
},
{
    id:"this is chavascript",
    name:"Office Shirt",
    price: 15,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/shirt2.jpg",
},
{
    id:"This is chai ya javascript",
    name:"T Shirt",
    price: 35,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/shirt3.jpg",
},
{
    id:"This is chapatijavascript",
    name:"Mens Shirt",
    price: 55,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/shirt4.jpg",
},
];

let basket = [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
      .map((x)=>{
        let { id, name, price, desc, img } =x;
        return `
        <div id=product-id-${id} class="item">
              <img width="200" src=${img} alt="">
              <div class="details">
                <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price} </h2>
                        <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
              </div>
            </div>
        `;
    }).join(""));
};
generateShop();


let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1
    }

    
    console.log(basket);
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return;
    else{
        search.item -= 1
    }

    
    console.log(basket);
};
let update = ()=>{};




























