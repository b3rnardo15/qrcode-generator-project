// Servico responsavel por gerar o QR Code no terminal

import qrcode from "qrcode-terminal";

async function generateQRCode(results) {
  const { link, type } = results;

  console.log("\nGerando QR Code para: " + link);

  if (type === "2") {
    // Exibe o QR Code em tamanho maior no terminal
    qrcode.generate(link, { small: false });
  } else {
    // Exibe o QR Code em tamanho compacto no terminal
    qrcode.generate(link, { small: true });
  }

  console.log("\nQR Code gerado com sucesso!");
}

export default generateQRCode;
