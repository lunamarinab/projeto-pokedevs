const pokedevList = [{
	id: "devchu",
	name: "Devchu",
	type: "elétrico",
	tag: "#001",
	srcImage: "src/imagens/devchu.png",
	description: "Quando se depara com um erro no código, fica bastante irritado. Sente a tensão acumulada em cada músculo, como se estivesse prestes a soltar raios pelos dedos. Mas, em vez de se deixar abater, canaliza toda essa energia em busca da solução. Cada linha de código é examinada e ele não descansa até que o erro seja encontrado e corrigido.",
	backgroundClass: "type-electric"
},
{
	id: "codevee",
	name: "Codevee",
	type: "fogo",
	tag: "#003",
	srcImage: "src/imagens/codevee.png",
	description: "Sua capacidade de evoluir continuamente permite que ele se adapte de forma eficaz a qualquer ambiente de desenvolvimento. Isso reflete a flexibilidade e a capacidade de aprendizado contínuo que são essenciais para um desenvolvedor pleno.",
	backgroundClass: "type-fire"
},
{
	id: "psycoder",
	name: "Psycoder",
	type: "água",
	tag: "#022",
	srcImage: "src/imagens/psycoder.png",
	description: "Um pokedev sênior constantemente atormentado por uma dor de cabeça persistente. Quando a dor se torna intensa demais,consegue acessar habilidades de programação extraordinárias, resolvendo problemas complexos com uma facilidade surpreendente.",
	backgroundClass: "type-water"
}, {
	id: "charmandev",
	name: "Charmandev",
	type: "fogo",
	tag: "#015",
	srcImage: "src/imagens/charmandev.png",
	description: "Este pokedev nunca deixa a chama do aprendizado se apagar! Está sempre se atualizando, pois sabe que um bom desenvolvedor deve ser resiliente e adaptável às mudanças constantes no mundo da tecnologia. Estar aberto a aprender novas ferramentas e metodologias é crucial.",
	backgroundClass: "type-fire"
},
{
	id: "scriptle",
	name: "Scriptle",
	type: "água",
	tag: "#002",
	srcImage: "src/imagens/scriptle.png",
	description: "Mesmo sendo um programador iniciante, este pokedev já domina habilidades fundamentais em Javascript como: Depurar o código, Manipulação do DOM, Trabalhar com APIs, Conhecimento de frameworks e bibliotecas tornando o código mais eficiente.",
	backgroundClass: "type-water"
},
{
	id: "devlypuff",
	name: "Devlypuff",
	type: "fada",
	tag: "#062",
	srcImage: "src/imagens/devlypuff.png",
	description: "A expressão “trabalhe enquanto eles dormem” poderia ter sido facilmente criada por este pokedev. Afinal, ele tem o dom de codar por horas e horas, madrugada adentro, regado a muito café e energéticos. Sua dedicação é tão intensa que, enquanto a maioria das pessoas está descansando, ele está imerso em linhas de código, resolvendo problemas e criando soluções.",
	backgroundClass: "type-fairy"
}
]

const selectionList = document.querySelectorAll(".pokedev");

selectionList.forEach(pokedev => {
	pokedev.addEventListener("click", () => {

		const pokedevCard = document.querySelector('.pokedev-card')
		pokedevCard.classList.remove('type-water')
		pokedevCard.classList.remove('type-fairy')
		pokedevCard.classList.remove('type-fire')
		pokedevCard.classList.remove('type-electric')

		const selectedPokedev = pokedevList.find(item => item.id === pokedev.attributes.id.value)

		pokedevCard.classList.add(selectedPokedev.backgroundClass)

		const pokedevName = document.getElementById("pokedevName")
		pokedevName.textContent = selectedPokedev.name

		const pokedevType = document.getElementById("pokedevType")
		pokedevType.textContent = selectedPokedev.type

		const pokedevTag = document.getElementById("pokedevTag")
		pokedevTag.textContent = selectedPokedev.tag

		const pokedevImg = document.getElementById("pokedevImg")
		pokedevImg.src = selectedPokedev.srcImage
		pokedevImg.alt = selectedPokedev.name

		const pokedevDescription = document.getElementById("pokedevDescription")
		pokedevDescription.textContent = selectedPokedev.description

		disabledItem();

		pokedev.classList.add("active");
	})
})


function disabledItem() {
	const activeItem = document.querySelector(".active");
	activeItem.classList.remove("active");
}
