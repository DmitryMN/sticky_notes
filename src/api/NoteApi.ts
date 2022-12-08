import axios from "axios";
import { NoteType } from "../types/noteType";


const instance = axios.create({
    baseURL: "./",
});

export const noteApi = {
    getNodes: async () => {
        return instance.get<Array<NoteType>>("nodes.json");
    }
}