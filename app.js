// JSON - javascript object notation
let todosOsFilmes = [
{
    título: "Jurassic Park 0",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
},
{
    título: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "10/10",
    duracao: "1h34m"
},
{
    título: "Lilo & Stitch",
    foto: "filme3.jpg",
    avaliacao: "10/10",
    duracao: "1h48m"
},
{
    título: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h03m"
},
{
    título: "Trem-Bala",
    foto: "filme5.jpg",
    avaliacao: "4/10",
    duracao: "2h06m"
}
]
function fnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML += `
      <div class="card-filme">
        <img src="img/${filmeAtual.foto}">
        <h3>${filmeAtual.título}</h3>
        <span>⭐ ${filmeAtual.avaliacao}</span>
        <br>
        <span>${filmeAtual.duracao}</span>
      </div>
    `
  }
  
// DOM - Document Object Model

todosOsFilmes.forEach((filmeAtual) => {
  document.querySelector(".lista-filmes").innerHTML += `
    <div class="card-filme">
      <img src="img/${filmeAtual.foto}">
      <h3>${filmeAtual.titulo}</h3>
      <span>⭐ ${filmeAtual.avaliacao}</span>
    </div>
  `
})


  