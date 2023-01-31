const mostrarContact = document.getElementById (`mostrarContact`);
const Contact = document.getElementById(`Contact`);

mostrarContact.addEventListener('click', ()=> {
    Contact.innerHTML=`
    <h2>Contact</h2>
    <ul>
        <li><b>email: fernando.willis@example.com</b></li>
        <li><b>phone number: (309) 683-9280</b></li>
    </ul>`
    mostrarContact.innerHTML=``
});

