

export type NodeType = {
    id: number
    text: string
    date: Date
}

export type NodeState = {
    nodes: Array<NodeType>
    error: string
    loading: boolean
}