// array com CPF para análise e exibição do nome
let database = [
  { cpf: "28255158685", nome: "Bruno Henrique Martins da Silva" },
  { cpf: "27766548631", nome: "Diogo Coutinho de Freitas" },
  { cpf: "36821162069", nome: "Gabriel Alcântara Ribeiro" },
  { cpf: "92073138632", nome: "Gabriel Alves dos Santos" },
  { cpf: "13075295698", nome: "Guilherme Guimarães Freitas" },
  { cpf: "61378356691", nome: "Gustavo Martins Freitas" },
  { cpf: "66754914661", nome: "Henrique Azevedo Rezende" },
  { cpf: "67995221690", nome: "Igor dos Reis Alves" },
  { cpf: "13660717606", nome: "João Batista Cardoso Miranda" },
  { cpf: "72592343695", nome: "João Luiz Alves Mamede Netto" },
  { cpf: "11804805629", nome: "José Henrique Xavier" },
  { cpf: "80277631696", nome: "Kauã Cassiano Silva" },
  { cpf: "94289546676", nome: "Marcos Vinícius Cardoso de Araújo" },
  { cpf: "90995203601", nome: "Maria Eduarda Borges" },
  { cpf: "82872971688", nome: "Raphael Ribeiro Rufino" },
  { cpf: "76830296617", nome: "Victor Hugo Naves Rodrigues" },
  { cpf: "14472908603", nome: "Victor José Moraes de Lima" },
  { cpf: "50872559653", nome: "Vinicius Patricio Silva Santos" },
  { cpf: "80050114662", nome: "Vítor Tetsuya Kazuma" },
];

function validarCPF() {
  const cpf = document.getElementById("cpf").value;
  const cpfNumeros = cpf.replace(/[^\d]+/g, ""); // Remove caracteres especiais

  // Verifica o tamanho do CPF e se é uma sequência repetida de dígitos
  if (cpfNumeros.length !== 11 || /^(\d)\1+$/.test(cpfNumeros)) {
    alert("CPF inválido!");
    resetarResultado();
    limparInput();
    return;
  }

  let soma = 0;
  let resto;

  // Calcula o primeiro dígito verificador do CPF para validar true or false

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  // Verifica se o primeiro dígito verificador é igual ao CPF informado
  if (resto !== parseInt(cpfNumeros.substring(9, 10))) {
    alert("CPF inválido!");
    resetarResultado();
    limparInput();
    return;
  }

  soma = 0;

  // Calcula o segundo dígito verificador do CPF
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  // Verifica se o segundo dígito verificador é igual ao CPF informado
  if (resto !== parseInt(cpfNumeros.substring(10, 11))) {
    alert("CPF inválido!");
    resetarResultado();
    limparInput();
    return;
  }

  // Verifica se o CPF está presente no array database
  const registro = database.find((item) => item.cpf === cpfNumeros);

  if (registro) {
    alert(`CPF válido! Nome: ${registro.nome}`);
  } else {
    alert("CPF válido!");
  }

  resetarResultado();
  limparInput();
}

function resetarResultado() {
  // Tempo que o resultado ficará exposto no alert
  const tempoAtualizacao = 3000; // 3 segundos

  // Função que reseta o resultado impresso no alert
  const resetar = () => {
    document.getElementById("resultado").textContent = "";
  };

  // Seta o temporizador de exibição do resultado
  setTimeout(resetar, tempoAtualizacao);
}

function limparInput() {
  document.getElementById("cpf").value = "";
}

function toggleBackground() {
  const footer = document.querySelector("footer");
  const sections = document.querySelectorAll(".team.gray");

  const isBackgroundRemoved = footer.style.background === "none";

  if (isBackgroundRemoved) {
    footer.style.background = ""; // Recolocar o plano de fundo padrão
    sections.forEach(function (section) {
      section.style.background = ""; // Recolocar o plano de fundo padrão para todas as sections
    });
  } else {
    footer.style.background = "none"; // Remover o plano de fundo
    sections.forEach(function (section) {
      section.style.background = "none"; // Remover o plano de fundo para todas as sections
    });
  }
}

// Evento de clique do botão
const button = document.getElementById("toggleBackgroundButton");
button.addEventListener("click", function () {
  toggleBackground();
});
