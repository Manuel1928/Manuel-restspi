const models = require("../database/models");

const createVideoGames = async (req, res) => {
  try {
    const videogames = await models.VideoGames.create(req.body);
    return res.status(201).json({
      videogames
    });
  } catch (error) { 
    return res.status(500).json({ error: error.message });
  }
};

const getAllVideoGames = async (req, res) => {
  console.log('getting videogames');
  try {
    const videogames = await models.VideoGames.findAll({
      include: [
      ]
    });
    return res.status(200).json({ videogames });
  } catch (error) { 
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createVideoGames,
  getAllVideoGames
};