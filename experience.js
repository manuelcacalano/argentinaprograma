const mostrarExperience = document.getElementById (`mostrarExperience`);
const Experience = document.getElementById(`Experience`);

mostrarExperience.addEventListener('click', ()=> {
    Experience.innerHTML=`
    <h2>Experience</h2>
        <h3>Abc webdev pvt ltd - Senior Web Developer</h3>
        <p>January 2022 to Present</p>
        <ul>
            <li>Actively engaged in web creative
              design and development.</li>
            <li>Designing project & planning</li>
        </ul>
        <h3>Xyz webdev pvt ltd - junior web developer</h3>
        <p>August 2021 to December 2021</p>
        <ul>
            <li>Actively engaged in web creative
              design and development.</li>
            <li>Designing project & planning</li>
            <li>Working on designing</li>
        </ul>`
    mostrarExperience.innerHTML=` `
});