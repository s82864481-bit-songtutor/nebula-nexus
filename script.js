function showInfo(name, info) {
  document.getElementById('pname').innerText = name;
  document.getElementById('pinfo').innerText = info;
}
function showTab(tab) {
  ['solar','exo','messier','facts'].forEach(id => 
    document.getElementById(id).style.display = 'none'
  );
  document.getElementById(tab).style.display = 'block';
  <script>
const planets = [
  {name: "Mercury", urdu: "عطارد", gravity: 3.7, img: "mercury.png"},
  {name: "Venus", urdu: "زہرہ", gravity: 8.87, img: "venus.png"},
  {name: "Earth", urdu: "زمین", gravity: 9.81, img: "earth.png"},
  {name: "Mars", urdu: "مریخ", gravity: 3.71, img: "mars.png"},
  {name: "Jupiter", urdu: "مشتری", gravity: 24.79, img: "jupiter.png"},
  {name: "Saturn", urdu: "زحل", gravity: 10.44, img: "saturn.png"},
  {name: "Uranus", urdu: "یورینس", gravity: 8.69, img: "uranus.png"},
  {name: "Neptune", urdu: "نیپچون", gravity: 11.15, img: "neptune.png"}
];

const container = document.getElementById('planets');
const userWeight = 50; // yahan apna wazan likh dena

planets.forEach(planet => {
  const weightOnPlanet = (userWeight * planet.gravity / 9.81).toFixed(1);
  
  const card = `
    <div class="planet-card">
      <img src="images/${planet.img}" alt="${planet.name}">
      <h2>${planet.name} - ${planet.urdu}</h2>
      <p><b>Gravity:</b> ${planet.gravity} m/s²</p>
      <p><b>${userWeight}kg ka wazan:</b> ${weightOnPlanet} kg</p>
    </div>
  `;
  container.innerHTML += card;
});
</script>
}
