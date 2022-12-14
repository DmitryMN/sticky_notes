import axios from "axios";
import { NoteType } from "../types/noteType";


const instance = axios.create({
    baseURL: "http://localhost:3001",
});

export const noteApi = {
    getNodes: async () => {
        return instance.get<Array<NoteType>>("/notes");
    },
    addNewNote: async (data: NoteType) => {
        return instance.post("/notes", JSON.stringify(data) ,{
            headers: {
                'Content-Type': 'application/json' 
              }
        });
    },
}