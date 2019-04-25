window.addEventListener('load', function() {
    let itemsElem = document.getElementById('items');

    let thumbTimer, timesIndex = 0, dir = 'img/';

    let watch1 = {
        name: "Black Baron",
        pics: [ "img-1.png", "img-2.png", "img-3.png", "img-4.png" ],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus enim doloremque beatae molestias labore pariatur fugit earum consequatur. Molestias repellendus animi sint soluta nostrum tenetur placeat itaque ipsam pariatur fugit quas."
    };
    let watch2 = {
        name: "Silver Surfer",
        pics: [ "silver-1.png",  "silver-2.png", "silver-3.png", "silver-4.png"],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus enim doloremque beatae molestias labore pariatur fugit earum"
    }
    let watch3 = {
        name: "White Velvet",
        pics: [ "white-1.png",  "white-2.png", "white-3.png", "white-4.png"],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus enim doloremque beatae molestias natus enim labore pariatur fugit earum amet labore pariatur fugit consectetur adipisicing elit."
    }

    let products = [watch1, watch2, watch3];

    for (let i = 0; i < products.length; i++) {

        let div = document.createElement('div');

        let h3Name = document.createElement('h3');
        let img = document.createElement('img');
        let pInfo = document.createElement('p');
        
        div.className = 'item';

        img.objIndex = i;

        h3Name.innerHTML = products[i].name;
        img.src = dir + products[i].pics[0];
        pInfo.innerHTML = products[i].info;

        itemsElem.appendChild(div);

        div.appendChild(h3Name);
        div.appendChild(img);
        div.appendChild(pInfo);

        img.addEventListener('mouseover', function(e) {
            thumbTimer = setInterval(() => {
    
                timesIndex++;
    
                if (timesIndex == products[e.target.objIndex].pics.length) {
                    timesIndex = 0;
                }
                e.target.src = dir + products[e.target.objIndex].pics[timesIndex];
            }, 1000);
        });
        
        img.addEventListener('mouseout', function(e) {
            clearInterval(thumbTimer);
            timesIndex = 0;
            e.target.src = dir + products[e.target.objIndex].pics[timesIndex];
        });
    }
    
}); 