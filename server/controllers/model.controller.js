const axios = require("axios");

const { apikey } = require("../config/config");

const instance = axios.create({
    baseURL: "https://api.up2tom.com/v3",
    headers: {
    Authorization: `Token ${apikey}`,
    "Content-Type": "application/vnd.api+json",
    },
});

/*
  @desc   get all models
  @route  GET /models
  @access public
*/
const getModels = async (req, res) => {

    try {
        const api_res = await instance.get("/models");
        const data = api_res.data;
        res.status(200).json(data);
      } catch (error) {
        if (error.response) {
          let data = error.response.data;
          let status = error.response.status;
          console.log(data);
          res.status(status).json(data);
          return;
        } else if (error.request) {
          console.log(error.request);
          res.status(408).json(error.request);
          return;
        } else if (error.message) {
          console.log("Error", error.message);
          res.status(400).json(error.message);
          return;
        } else {
          console.log(error.config);
          res.status(503).json(error.config);
        }
      }
}

/*
  @desc   get specific model
  @route  GET /models/:id
  @access private
*/
const getModel = async (req, res) => {
    let id;
    if (!(req.body && req.body.id)) {
        res.status(400).json({"error": "Request body missing id field"});
        throw new Error("Request body missing id field");
    }
    id = req.body.id;

    try {
        const api_res = await instance.get(`/models/${id}`);
        const data = api_res.data;
        res.status(200).json(data);
      } catch (error) {
        if (error.response) {
          let data = error.response.data;
          let status = error.response.status;
          console.log(data);
          res.status(status).json(data);
          return;
        } else if (error.request) {
          console.log(error.request);
          res.status(408).json(error.request);
          return;
        } else if (error.message) {
          console.log("Error", error.message);
          res.status(400).json(error.message);
          return;
        } else {
          console.log(error.config);
          res.status(503).json(error.config);
        }
      }
}

module.exports = { getModels, getModel };