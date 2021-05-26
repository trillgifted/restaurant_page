import {loadPage} from './loadPage';
import {loadMenu} from './loadMenu';
import {loadContactPg} from './loadContactPg';
loadPage();
const content = document.querySelector('div#content');
const nav = document.querySelectorAll('.navbtn');

nav.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.textContent=="Home"){
            content.innerHTML="";    
            loadPage();
        }

        if(button.textContent=="Menu"){
            content.innerHTML="";    
            loadMenu();
        }

        if(button.textContent=="Contact"){
            content.innerHTML="";    
            loadContactPg();
        }
    })
    
    
    
    
    
})