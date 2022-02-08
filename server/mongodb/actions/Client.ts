import ClientSchema from '../models/Client'
import { Client } from '../../models/Client'
import mongoDB from '../index'

export async function addClient (client: Client): Promise<Client> {
  await mongoDB()
  return await ClientSchema.create(client)
}

export async function getClient (accountId: Client['accountId']): Promise<Client> {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  return client
}

export async function getClients (): Promise<Client[]> {
  await mongoDB()
  const client = await ClientSchema.find()
  return client
}

export async function editNotes (notes: Client['notes'], accountId: Client['accountId']): void {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  client.notes = notes
  client.save()
}

export async function changeStatus (status: Client['status'], accountId: Client['accountId']): void {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  client.status = status
  client.save()
}

export async function addDocument (document: File, accountId: Client['accountId']): void {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  client.documents.push(document)
  client.save()
}

export async function removeDocument (document: File, accountId: Client['accountId']): void {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  const docs = client.documents
  const index = docs.indexOf(File)
  if (index > -1) {
    docs.splice(index, 1)
  }
  client.save()
}
