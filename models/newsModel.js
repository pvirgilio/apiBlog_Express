//* Models archive
const connection = require("./connection");

//* Function to get all news
const getAllNews = async () => {
  try {
    const news = await connection.query(
      "SELECT * FROM news ORDER BY created_at DESC"
    );
    return news[0];
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const getNewsId = async (id) => {
  try {
    const news = await connection.query(`SELECT * FROM news WHERE id = ${id}`);
    return news[0];
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//* Function to post news
const postNews = async (author, title, content, buttonText, image) => {
  try {
    const news = await connection.query(
      "INSERT INTO news (author, title, content, buttonText, image) VALUES (?, ?, ?, ?, ?)",
      [author, title, content, buttonText, image]
    );
    return news;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//* Função para excluir notícias
const deleteNews = async (id) => {
  try {
    const news = await connection.query(`DELETE FROM news WHERE id = ${id}`);
    return news;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//* Função para verificação de Id da notícia
const verifyId = async (id) => {
  const news = await connection.query(`SELECT * FROM news WHERE id = ${id}`);
  //   if (news[0].length === 0) {
  //     return false;
  //   }
  return news[0];
};

const postCategoriesAll = async (name) => {
  try {
    const categories = await connection.query(
      "INSERT INTO categorias (name) VALUES (?)",
      [name]
    );
    return categories;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const categoriesName = async (name) => {
  try {
    const categories = await connection.query(
      "SELECT * FROM categorias WHERE name = ?",
      [name]
    );
    return categories[0];
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const getCategoriesAll = async () => {
  try {
    const categories = await connection.query("SELECT * FROM categorias");
    return categories[0];
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const deleteCategories = async (id) => {
  try {
    const categories = await connection.query(
      `DELETE FROM categorias WHERE id = ${id}`
    );
    return categories;
  } catch (error) {
    console.error(`Erro ao excluir categoria: ${error}`);
  }
};

module.exports = {
  getAllNews,
  postNews,
  deleteNews,
  verifyId,
  getNewsId,
  postCategoriesAll,
  getCategoriesAll,
  categoriesName,
  deleteCategories,
};
