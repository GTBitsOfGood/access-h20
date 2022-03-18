import ClientSchema from '../models/Client'
import { Client, Status } from '../../models/Client'
import mongoDB from '../index'

export async function addClient (client: Client): Promise<Client> {
  await mongoDB()
  const newClient = await ClientSchema.create(client)
  return newClient
}

export async function removeClient (accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  await ClientSchema.findOneAndDelete({ accountId })
}

export async function getClient (accountId: Client['accountId']): Promise<Client> {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  return client
}

export async function getAll (): Promise<Client[]> {
  await mongoDB()
  const clients = await ClientSchema.find()
  return clients
}

export async function editNotes (notes: Client['notes'], accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  client.notes = notes
  client.save()
}

export async function changeStatus (status: Status): Promise<void> {
  const accountId = status.accountId
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId: accountId })
  console.log(client)
  client.status = status.status
  client.save()
}

export async function addDocument (document: File, accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  client.documents.push(document)
  client.save()
}

export async function removeDocument (document: File, accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  const client = await ClientSchema.findOne({ accountId })
  const docs = client.documents
  const index = docs.indexOf(File)
  if (index > -1) {
    docs.splice(index, 1)
  }
  client.save()
}
