

export type NoteType = {
    id: string
    text: string
}

export type NoteState = {
    notes: Array<NoteType>
    error: string
    loading: boolean
}