const botoes = document.querySelectorAll(".botao");
const pizzas = document.querySelectorAll(".pizza");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPizza();

		botao.classList.add("selecionada");
		pizzas[indice].classList.add("selecionada");
	});
});

function desselecionarPizza() {
	const pizzaSelecionada = document.querySelector(".pizza.selecionada");
	pizzaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionada = document.querySelector(".botao.selecionada");
	botaoSelecionada.classList.remove("selecionada");
}