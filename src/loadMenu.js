function loadMenu(){
    const content = document.querySelector('div#content');
    const img = document.createElement('img');

    img.setAttribute("src","https://i.pinimg.com/736x/b5/7a/d6/b57ad6d3ca8ca33700a7b1107b1a48d6.jpg");
    img.className = "image_header";

    content.appendChild(img);

}

export {loadMenu};