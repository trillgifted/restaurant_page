function loadMenu(){
    const content = document.querySelector('div#content');
    const img = document.createElement('img');

    img.setAttribute("src","/dist/menu.jpg");
    img.className = "image_header";

    content.appendChild(img);

}

export {loadMenu};