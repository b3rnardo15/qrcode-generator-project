// Configuracao do prompt para capturar link e tipo de QR Code

const promptMain = [
  {
    name: "link",
    description: "Digite o link do produto ou da loja",
    pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
    message: "Link invalido. Por favor, digite uma URL valida.",
    required: true,
  },
  {
    name: "type",
    description: "Escolha o tipo (1 - Normal ou 2 - Terminal)",
    pattern: /^[1-2]$/,
    message: "Escolha apenas 1 ou 2.",
    required: true,
  },
];

export default promptMain;
