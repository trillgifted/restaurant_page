function loadContactPg(){
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact <span>Us</span>!';

    content.appendChild(h1);

    const infoDiv = document.createElement('div');
    infoDiv.setAttribute("id","info");

    infoDiv.innerHTML="<h2>Phone Number:<br>416-345-6235<br><br>Email: <a href='mailto:info@yumyumcorp.ca'>info@yumyumcorp.ca</a> </h2>";

    content.appendChild(infoDiv);
}

export {loadContactPg};