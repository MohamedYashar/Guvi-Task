
const data1 = [
    {
        name: "Vada",
        poster: "https://img.freepik.com/premium-photo/south-indian-vada-medu-vada-dal-vadai-plate-bowl-isolated-plain_466689-1580.jpg",
        delivery: "30 mins delivery",
    },
    {
        name: "Idli",
        poster: "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg",
        delivery: "30 mins delivery",
    },
    {
        name: "Parotta",
        poster: "https://images.news18.com/ibnlive/uploads/2022/06/malabar-paratha.jpg",
        delivery: "30 mins delivery",
    },
    {
        name: "Kichadi",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCViRuoCPry06uh71ICkSSTv6M8tyYu5aSGQ&usqp=CAU",
        delivery: "30 mins delivery",
    }
];

const foodContainer = document.getElementById("food-container");

data1.map(item => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "food-item";
    
    foodDiv.innerHTML = `
        <img src="${item.poster}" alt="${item.name} image">
        <p>${item.name}</p>
        <button>${item.delivery}</button>
    `;
    
    foodContainer.appendChild(foodDiv);
});

// const data2 = ["Daily discount","Live Tracing", "Quick Delivery"]

// const data2 = ["https://m.media-amazon.com/images/I/71pFrHTGXWL.jpg",
// "https://png.pngtree.com/png-clipart/20210331/ourlarge/pngtree-cute-cartoon-location-icon-png-image_3178938.jpg",
//  "https://entrackr.com/storage/2020/08/swiggy-800x400.jpg"]
 
 






const data2= [
    {
        text: "Daily discount",
        imageUrl: "https://m.media-amazon.com/images/I/71pFrHTGXWL.jpg"
    },
    {
        text: "Live Tracking",
        imageUrl: "https://png.pngtree.com/png-clipart/20210331/ourlarge/pngtree-cute-cartoon-location-icon-png-image_3178938.jpg"
    },
    {
        text: "Quick Delivery",
        imageUrl: "https://entrackr.com/storage/2020/08/swiggy-800x400.jpg"
    }
];

const servicesContainer = document.getElementById("services-container");

data2.forEach(serviceData => {
    const serviceDiv = document.createElement("div");
    serviceDiv.className = "service";
    
    serviceDiv.innerHTML = `
        <img src="${serviceData.imageUrl}" alt="${serviceData.text} icon">
        <p>${serviceData.text}</p>
    `;
    
    servicesContainer.appendChild(serviceDiv);
});








const menuData = [
    {
        name: "Dosa",
        imageUrl: "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900"
    },
    {
        name: "Appam",
        imageUrl: "https://static.toiimg.com/thumb/63797863.cms?imgsize=433691&width=800&height=800"
    },
    {
        name: "Puttu",
        imageUrl: "https://thumbs.dreamstime.com/z/indian-breakfast-puttu-green-peas-curry-54672314.jpg?w=992"
    },
    {
        name: "Idiyappam",
        imageUrl: "https://thumbs.dreamstime.com/z/noolappam-idiyappam-rice-noodles-string-hopper-popular-steam-cooked-kerala-breakfast-hot-spicy-chickpea-curry-sweet-coconut-milk-225974211.jpg?w=992"
    },
    {
        name: "Pongal",
        imageUrl: "https://thumbs.dreamstime.com/z/pongal-south-indian-food-side-dish-44383712.jpg?w=992"
    },
    {
        name: "Veg Rice",
        imageUrl: "https://thumbs.dreamstime.com/z/veg-fried-rice-gray-bowl-concrete-table-top-indo-chinese-cuisine-dish-indian-vegetarian-meal-asian-food-view-187058151.jpg?w=992"
    }
];

const menuContainer = document.getElementById("menu-container");

menuData.map(item => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item";
    
    menuItemDiv.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name} image">
        <p>${item.name}</p>
    `;
    
    menuContainer.appendChild(menuItemDiv);
});





const menuData2 = [
    {
        name: "Murukku",
        imageUrl: "https://img.freepik.com/premium-photo/murukku-also-known-as-chakli-south-indian-traditional-vegetarian-snack_466689-73267.jpg?w=2000"
    },
    {
        name: "Paniyaram",
        imageUrl: "https://t3.ftcdn.net/jpg/04/02/47/32/360_F_402473222_SZsxaK6DewFRYHbpgXnWd9nbnejRUxan.jpg"
    },
    {
        name: "Seeval Murukku",
        imageUrl: "https://enchipsu.com/cdn/shop/products/0011.jpg?v=1664038485"
    },
    {
        name: "Mixture",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVvRbNY_H_4qrcaIHmU7LqN_PLyhFmEvSaEYn6bBcsA&s"
    },
    {
        name: "Veg Soup",
        imageUrl: "https://t3.ftcdn.net/jpg/02/45/00/72/360_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg"
    },
    {
        name: "Gulab Jamun",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZ-F0ejkdiTbl3AcmG9IGWROTFiIDvmkKJGr27hJs&s"
    },
    {
        name: "Porivellangai Urundai",
        imageUrl: "https://www.orderyourchoice.com/118136-large_default/porivilangai-urundai.jpg"
    },
    {
        name: "Jangri",
        imageUrl: "https://www.orderyourchoice.com/118155-large_default/-jangri-ananda-bhavan-bangalore-.jpg"
    },
    {
        name: "Lattu",
        imageUrl: "https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg"
    },
    {
        name: "Halwa",
        imageUrl: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0175_176-Gajar-Ka-halwa.png"
    }
];

const menuContainer2 = document.getElementById("menu-container2");

menuData2.forEach(item => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item";
    
    menuItemDiv.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name} image">
        <p>${item.name}</p>
        <p class = "last"> Order Now</p>
    `;
    
    menuContainer2.appendChild(menuItemDiv);
});


    
        function searchFood() {
            var searchTerm = document.getElementById("searchInput").value;
            var searchResultsDiv = document.getElementById("searchResults");

            // You can perform your search logic here
            // For now, let's just display the search term
            searchResultsDiv.innerHTML = "<p>Search results for: " + searchTerm + "</p>";
        }
