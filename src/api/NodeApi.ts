import axios from "axios";
import { NodeType } from "../types/nodeType";


const instance = axios.create({
    baseURL: "./",
});

export const nodeApi = {
    getNodes: async () => {
        return instance.get<Array<NodeType>>("nodes.json");
    }
}