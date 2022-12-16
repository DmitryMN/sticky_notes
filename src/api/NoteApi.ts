import axios, {AxiosResponse} from "axios";
import { NoteType } from "../types/noteType";

const instance = axios.create({
    baseURL: "http://localhost:3001",
});

export const noteApi = {
    getNodes: async () => {
        return instance.get("/notes");
    },
    addNewNote: async (newNote: NoteType) => {
        return instance.post("/notes", JSON.stringify(newNote),  {
            headers: {
                'Content-Type': 'application/json'
              }
        });
    },
}