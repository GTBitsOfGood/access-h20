import mongoDB from '../index'
import { Client } from '../../models/Client'
import InfoSubmissionSchema from '../models/InfoSubmission'

export async function addDocument (document: File, accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  const client = await InfoSubmissionSchema.findOne({ accountId })
  client.documents.push(document)
  client.save()
}

export async function removeDocument (document: File, accountId: Client['accountId']): Promise<void> {
  await mongoDB()
  const client = await InfoSubmissionSchema.findOne({ accountId })
  const docs = client.documents
  const index = docs.indexOf(File)
  if (index > -1) {
    docs.splice(index, 1)
  }
  client.save()
}
