import NoteSchema from '../models/Note'
import { Note } from '../../models/Note'
import { Client } from '../../models/Client'
import mongoDB from '../index'

export async function addNote (note: Note): Promise<Note> {
  await mongoDB()
  return await NoteSchema.create(note)
}

export async function getNotes (accountID: String): Promise<Client> {
  await mongoDB()
  const client = await NoteSchema.find(accountID)
  return client as unknown as Client
}
