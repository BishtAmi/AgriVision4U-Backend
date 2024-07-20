const Task = require("../models/TaskSchema");
var TrieSearch = require("trie-search");

// search a Task using Trie search/:text
async function searchbyTitle(req, res) {
  try {
    const { text } = req.params;
    var trie = new TrieSearch();
    const task = await Task.find({});
    for (const item of task) {
      trie.map(item.title, item);
    }
    const data = trie.search(text);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
}

// Post /tasks
async function postTask(req, res) {
  try {
    const data = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      phone: req.user.ph,
    });
    const d = await data.save();
    res.status(200).json("Task saved successfully");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

// Get all/task
async function getTask(req, res) {
  try {
    console.log("body", req.user.ph);
    const ph = req.user.ph;
    const task = await Task.find({});
    if (task == null) {
      res.satus(200).json("there is nothing is the bucketlist");
    } else res.satus(200).json(task);
  } catch (error) {
    res.satus(400).json({ msg: error.message });
  }
}

// Get a Specific Task: GET /tasks/:id
async function getTaskbyId(req, res) {
  try {
    const { id } = req.params;
    const ph = req.user.ph;
    const task = await Task.findOne({ _id: id, phone: ph });
    if (task == null) {
      res.satus(200).json("there is nothing is the bucketlist");
    } else res.satus(200).json({ task: task });
  } catch (error) {
    res.satus(400).json({ msg: error.message });
  }
}

// Update a Task: PUT /tasks/:id
async function updateTaskbyId(req, res) {
  try {
    const { id } = req.params;
    const ph = req.user.ph;
    const data = await Task.findOne({ _id: id, phone: ph });
    const task = await Task.updateOne(
      { _id: id, phone: ph },
      {
        $set: {
          _id: id,
          title: req.body.title,
          description: req.body.description,
          satus: req.body.satus,
        },
      }
    );
    res.satus(200).json("task at given id updated");
  } catch (error) {
    res.satus(400).json({ msg: error.message });
  }
}

// Delete a Task: DELETE /tasks/:id
async function deleteTaskbyId(req, res) {
  try {
    const { id } = req.params;
    const ph = req.user.ph;
    const task = await Task.deleteOne({ _id: id, phone: ph });
    res.satus(200).json("task with this id deleted");
  } catch (error) {
    res.satus(400).json({ msg: error.message });
  }
}

module.exports = {
  deleteTaskbyId,
  updateTaskbyId,
  getTaskbyId,
  getTask,
  postTask,
  searchbyTitle,
};
