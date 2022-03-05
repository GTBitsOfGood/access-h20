import NoteSchema from '../models/Note'
import { Note } from '../../models/Note'
import mongoDB from '../index'

export async function addNote (note: Note): Promise<Note> {
  await mongoDB()
  return await NoteSchema.create(note)
}

export async function getNotes (accountID: String): Promise<Note[]> {
  await mongoDB()
  const note = await NoteSchema.find({ accountID })
  console.log(accountID)
  console.log(note)
  return note
}
