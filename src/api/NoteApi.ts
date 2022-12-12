import axios from "axios";
import { NoteType } from "../types/noteType";


const instance = axios.create({
    baseURL: "./",
});

export const noteApi = {
    getNodes: async () => {
        return instance.get<Array<NoteType>>("nodes.json");
    },
    addNewNote: async (data: Array<NoteType>) => {
        return instance.post(JSON.stringify(data) ,{
            headers: {
                'Content-Type': 'text/json'
              }
        });
    },
}