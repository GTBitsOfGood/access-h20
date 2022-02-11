import NoteSchema from '../models/Note'
import { Note } from '../../models/Note'
import { Client } from '../../models/Client'
import mongoDB from '../index'

/* Uncommenting these functions causes an error. */
export async function addNote (note: Note): Promise<Note> {
  await mongoDB()
  return await NoteSchema.create(note)
}

export async function getNotes (): Promise<Client> {
  await mongoDB()
  const client = await NoteSchema.find()
  return client as unknown as Client
}

export async function testFunction (): Promise<String> {
  return 'Example string'
}

export async function testFunction2 (): Promise<String> {
  await mongoDB()
  return 'Example string'
}
