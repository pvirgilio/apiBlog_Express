const {
  getAllNews,
  postNews,
  deleteNews,
  verifyId,
  getNewsId,
} = require("../models/newsModel");
const fs = require("fs");
const path = require("path");

async function showAllNews(req, res) {
  const news = await getAllNews();
  res.status(200).json({ news, message: "Notícias achadas com sucesso!" });
}

async function requestNewsId(req, res) {
  const { id } = req.params;
  const news = await getNewsId(id);
  res.status(200).json({ news, message: "Notícia achada com sucesso!" });
}

async function postAllNews(req, res) {
  const { author, title, content, buttonText, image } = req.body;
  const base64Data = image.replace(/^data:([A-Za-z-+/]+);base64,/, "");
  const matches = image.match(/^data:image\/([A-Za-z-+\/]+);base64,/);
  const extension = matches[1];

  //* Gera um nome de arquivo único para a imagem
  const filename = new Date().getTime() + "." + extension;

  //* O diretório para uploads
  const dir = path.resolve(__dirname, "..", "uploads");

  //* O caminho do arquivo
  const filepath = path.resolve(dir, filename);

  //* Cria o diretório se ele não existir
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  //* Escreve o arquivo
  fs.writeFileSync(filepath, base64Data, { encoding: "base64" });

  console.log("Notícias", author, title, content, buttonText);

  //* Aqui, passamos apenas o nome do arquivo para a função postNews
  const news = await postNews(author, title, content, buttonText, filename);

  res.status(200).json({ news, message: "Notícia postada com sucesso!" });
}

async function showDeleteNews(req, res) {
  const { id } = req.params;
  try {
    const verify = await verifyId(id);
    if (verify.length === 0 || !verify) {
      return res.status(404).json({ message: "Notícia não encontrada!" });
    } else {
      const news = await deleteNews(id);
      return res
        .status(200)
        .json({ news, message: "Notícia excluída com sucesso!" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Notícia não encontrada!" });
  }
}

module.exports = {
  showAllNews,
  postAllNews,
  showDeleteNews,
  requestNewsId,
};
