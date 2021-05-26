function loadPage(){
    const content = document.querySelector('div#content');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Yum<span>!</span> Yum<span>!';

    const img = document.createElement('img');

    img.setAttribute("src","/dist/restaurant_img.jpg");
    img.className = "image_header";

    const infoDiv = document.createElement('div');
    infoDiv.setAttribute("id","info");
    infoDiv.innerHTML = '<p>Yum! Yum! restaurant features group space and modular party rooms for any occasion. We also have an amazing large space with our sister restaurant at Ma Chinese Cuisine. To book your party, contact us <a href="">here</a>.</p>';


    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(infoDiv);
}

export {loadPage};