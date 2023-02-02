// const { notStrictEqual } = require("assert");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);

    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "..public/notes.html"));
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/indes.html"));
    });

    app.get("/api/notes", (req, res) => {
      res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
      let newNotes = req.body;
      newNotes.id;
      notes.push(newNotes);
      updateDb();
      console.log("Successfully added new note: " + newNotes.title);
    });

    function updateDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
