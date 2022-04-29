import ClientSchema from '../models/Client'
import { Client, Status } from '../../models/Client'
import CompanySchema from '../models/Company'
import mongoDB from '../index'

export async function addClient (client: Client): Promise<Client> {
  await mongoDB()
  console.log(client)
  const newClient = await ClientSchema.create(client)
  console.log(newClient)
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

export async function getUtilityApplicants (utilityCompany: Client['utilityCompany']): Promise<Client[]> {
  await mongoDB()

  const utility = await CompanySchema.findOne({ accountId: utilityCompany })
  const clients = await ClientSchema.find({ utilityCompany: utility.name })

  return clients
}
