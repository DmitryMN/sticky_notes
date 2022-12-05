

export type NodeType = {
    id: string
    text: string
}

export type NodeState = {
    nodes: Array<NodeType>
    error: string
    loading: boolean
}