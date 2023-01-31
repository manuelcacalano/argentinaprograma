const mostrarSkills = document.getElementById (`mostrarSkills`);
const Skills = document.getElementById(`Skills`);

mostrarSkills.addEventListener('click', ()=> {
    Skills.innerHTML=`
    <h2>Skills</h2>
        <ul>
            <li><b>Programming Languages :
              Python, Java, C++</b></li>
            <li><b>Frontend : HTML5, CSS3,
              JavaScript, React</b></li>
            <li><b>Backend : Node.js</b></li>
        </ul>`
    mostrarSkills.innerHTML=` `
});