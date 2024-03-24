const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

let resetTimer;

// Gerar código
function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
    resetTimer = setTimeout(resetQRCode, 10000); // muda o tempo em milissegundos
  });
}

/*
Tabela de conversão de segundos para milissegundos:
| Segundo | Milissegundos |
|---------|---------------|
|   1     |      1000     |
|   2     |      2000     |
|   3     |      3000     |
|   4     |      4000     |
|   5     |      5000     |
|   10    |     10000     |
|   15    |     15000     |
|   20    |     20000     |
|   30    |     30000     |
|   40    |     40000     |
|   50    |     50000     |
|   60    |     60000     |
*/

function resetQRCode() {
  qrCodeInput.value = "";
  container.classList.remove("active");
  qrCodeBtn.innerText = "Gerar QR Code";
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// Limpar área do código
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
    clearTimeout(resetTimer);
  }
});
