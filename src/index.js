// Arquivo principal para execucao do gerador de QR Code

import prompt from "prompt";
import promptMain from "./prompts/prompt-main.js";
import generateQRCode from "./services/qr-service.js";

async function main() {
  console.log("--- Gerador de QR Code para E-commerce ---");
  console.log("Preencha os dados abaixo para gerar o seu QR Code:");

  // Inicia o prompt para capturar dados do usuario
  prompt.start();

  prompt.get(promptMain, async (err, result) => {
    if (err) {
      console.log("\nErro ao capturar dados: " + err.message);
      return;
    }

    // Gera o QR Code com os dados capturados
    await generateQRCode(result);
  });
}

// Executa a funcao principal
main();
