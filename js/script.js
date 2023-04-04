const team=[
  {
    name: 'Fabio Fabianini',
    role: 'muratore',
    Image: 'fabio-fabianini.png',
  },
  {
    name: 'Mario Mariolini',
    role: 'giardiniere',
    Image: 'mario-mariolini.png',
  },
  {
    name: 'Luca Luchini',
    role: 'filosofo',
    Image: 'luca-luchini.png',
  },
  {
    name: 'Maria Giovanna',
    role: 'calciatrice',
    Image: 'maria-giovanna.png',
  },
  {
    name: 'Anna Stefania',
    role: 'sarta',
    Image: 'anna-stefania.png',
  },
  {
    name: 'Francesca Lucia',
    role: 'studente',
    Image: 'francesca-lucia.png',
  }
];

const container = document.querySelector('.team-card')

genera();



function genera(){
  for(let member of team) generaMembro(member);

}

function generaMembro(member){
  console.log(member);

  const cardMembro =`
  <div class="card mx-3" style="width: 18rem;">

      <img src="img/${member.Image}" class="card-img-top" alt="fabio-fabianini">

      <div class="card-body">

        <h5 class="card-title d-flex justify-content-center">${member.name}</h5>

        <p class="card-text d-flex justify-content-center">${member.role}</p>

      </div>
    </div>
    `


    container.innerHTML += cardMembro;
}