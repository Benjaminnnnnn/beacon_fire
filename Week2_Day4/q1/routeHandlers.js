const fs = require("fs").promises;
const path = require("path");

// common status code
const SUCCESS = 200;
const BAD_REQUEST = 400;
const SERVER_ERROR = 500;
const DATA_PATH = "./data";
const EXTENSION = ".json";

// handles the incoming POST request
async function postHandler(req, res) {
  const fn = req.params["filename"];
  try {
    const fp = path.join(DATA_PATH, fn) + EXTENSION;
    const body = req.body;

    // check if the user has provided valid request body
    if (!(body.title && body.description && body.status && body.priority)) {
      throw new Error(BAD_REQUEST);
    }

    let data = [
      {
        title: body.title,
        description: body.description,
        status: body.status,
        priority: body.priority,
        timestamp: new Date(),
      },
    ];

    try {
      // read previous content and append current data to it
      const content = JSON.parse(await fs.readFile(fp, { encoding: "utf-8" }));
      data = content.concat(data);
      await fs.writeFile(fp, JSON.stringify(data));
    } catch (error) {
      // file does not exist, create and write data to it
      await fs.writeFile(fp, JSON.stringify(data));
    }

    // send back response to client
    res.status(SUCCESS).json(data);
  } catch (error) {
    res.type("text"); // respond errors as plain text
    if (error.message === String(BAD_REQUEST)) {
      res
        .status(BAD_REQUEST)
        .send(
          `Missing at least 1 or more invalid properties in request body. Please try again.`
        );
    } else {
      console.log(error);
      res
        .status(SERVER_ERROR)
        .send(
          `Server error... Unable to write to filename ${fn}. Please try again later.`
        );
    }
  }
}

// handles the incoming GET request
async function getHandler(req, res) {
  const fn = req.params["filename"];
  try {
    const fp = path.join(DATA_PATH, fn) + EXTENSION;
    const data = JSON.parse(await fs.readFile(fp));
    res.status(SUCCESS).json(data);
  } catch (error) {
    res.type("text"); // respond errors as plain text
    res.status(BAD_REQUEST).send(`File: ${fn} not found.`);
  }
}

// handles the incoming PUT request
async function putHandler(req, res) {
  const fn = req.params["filename"];
  try {
    const fp = path.join(DATA_PATH, fn) + EXTENSION;
    const { title, newTitle, priority, status, description } = req.body;
    if (!(title && newTitle && priority && status && description)) {
      throw new Error(BAD_REQUEST);
    }

    const data = JSON.parse(await fs.readFile(fp));
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === title) {
        data[i] = {
          title: newTitle,
          description: description,
          status: status,
          priority: priority,
          timestamp: new Date(),
        };
      }
      await fs.writeFile(fp, JSON.stringify(data));
      res.status(SUCCESS).json(data);
    }
  } catch (error) {
    res.type("text"); // respond errors as plain text
    if (error.message === String(BAD_REQUEST)) {
      res
        .status(BAD_REQUEST)
        .send(
          `Missing at least 1 or more invalid properties in request body. Please try again.`
        );
    } else {
      console.log(error);
      res
        .status(SERVER_ERROR)
        .send(
          `Server error... Unable to make update to filename ${fn}. Please try again later.`
        );
    }
  }
}

// handles the incoming DELETE request
async function deleteHandler(req, res) {
  const fn = req.params["filename"];
  try {
    const fp = path.join(DATA_PATH, fn) + EXTENSION;
    const { title } = req.body;
    if (!title) {
      throw new Error(BAD_REQUEST);
    }

    let data = JSON.parse(await fs.readFile(fp));
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === title) {
        data.splice(i, 1);
      }
      await fs.writeFile(fp, JSON.stringify(data));
      res.status(SUCCESS).json(data);
    }
  } catch (error) {
    res.type("text"); // respond errors as plain text
    if (error.message === String(BAD_REQUEST)) {
      res
        .status(BAD_REQUEST)
        .send(`Missing the title property in request body. Please try again.`);
    } else {
      console.log(error);
      res
        .status(SERVER_ERROR)
        .send(
          `Server error... Unable to make update to filename ${fn}. Please try again later.`
        );
    }
  }
}

module.exports.postHandler = postHandler;
module.exports.getHandler = getHandler;
module.exports.putHandler = putHandler;
module.exports.deleteHandler = deleteHandler;
