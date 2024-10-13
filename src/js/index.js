const pokedevList = [{
	id: "devchu",
	name: "Devchu",
	type: "elétrico",
	tag: "#001",
	srcImage: "src/imagens/devchu.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-eletrico"
},
{
	id: "codevee",
	name: "Codevee",
	type: "fogo",
	tag: "#003",
	srcImage: "src/imagens/codevee.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-fogo"
},
{
	id: "psycoder",
	name: "Psycoder",
	type: "água",
	tag: "#022",
	srcImage: "src/imagens/psycoder.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-agua"
}, {
	id: "charmandev",
	name: "Charmandev",
	type: "fogo",
	tag: "#015",
	srcImage: "src/imagens/charmandev.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-fogo"
},
{
	id: "scriptle",
	name: "Scriptle",
	type: "água",
	tag: "#002",
	srcImage: "src/imagens/scriptle.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-agua"
},
{
	id: "devlypuff",
	name: "Devlypuff",
	type: "fada",
	tag: "#062",
	srcImage: "src/imagens/devlypuff.png",
	description: "lero lero grande pakas bota fé?",
	backgroundClass: "tipo-fada"
}
]

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log("listaSelecaoPokedevs", listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {

		const cartaoPokedev = document.querySelector('.cartao-pokedev')
		cartaoPokedev.classList.remove('tipo-agua')
		cartaoPokedev.classList.remove('tipo-fada')
		cartaoPokedev.classList.remove('tipo-fogo')
		cartaoPokedev.classList.remove('tipo-eletrico')

		//pokedev.attributes.id.value = 'codevee'
		console.log("pokedev.attributes.id.value", pokedev.attributes.id.value)
		const selectedPokedev = pokedevList.find(item => item.id === pokedev.attributes.id.value)

		cartaoPokedev.classList.add(selectedPokedev.backgroundClass)

		const pokedevName = document.getElementById("pokedevName")
		pokedevName.textContent = selectedPokedev.name

		const pokedevType = document.getElementById("pokedevType")
		pokedevType.textContent = selectedPokedev.type

		console.log("selectedPokedev", selectedPokedev)



		// esconderCartaoPokedev();

		// const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

		// desativarPokedevNaListagem();

		// const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
		// pokedevSelecionadoNaListagem.classList.add("ativo");
	})
})

function desativarPokedevNaListagem() {
	ativarPokedevNaListagem();
}

function ativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

// function esconderCartaoPokedev() {
//     const cartaoPokedevAberto = document.querySelector(".aberto");
//     cartaoPokedevAberto.classList.remove("aberto");
// }
