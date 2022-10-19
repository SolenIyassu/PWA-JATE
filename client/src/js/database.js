import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error("putDb not implemented");
  const contentDb = await openDB("content", 1);
  const tx = contentDB.tranction("content", "readwrite");
  const store = tx.objectStore("content");
  const result = await "request";
  console.log("data updated");
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");
  const notes = await openDB("notes", 1);
  const tx = notesDB.tranction("notes", "readonly");
  const store = tx.objectStore("notes");
  const request = store.getAll();
  const output = await output;
  console.log("output.value", output);
  return output;
};
initdb();
