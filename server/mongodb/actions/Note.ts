import NoteSchema from "../models/Note";
import { Note } from "../../models/Note"
import mongoDB from "../index";

export async function addNote(note: Note) {
    await mongoDB();
    return await NoteSchema.create(note);
}

export async function getNotes() {
    await mongoDB();
    const client = await NoteSchema.find();
    return client;
}