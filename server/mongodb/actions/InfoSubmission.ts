import mongoDB from '../index'
import InfoSubmissionSchema from '../models/InfoSubmission'
import { Info } from '../../models/InfoSubmission'
import errors from '../../../utils/consts'

export async function addInfo (info: Info): Promise<Info> {
  await mongoDB()
  const newInfo = await InfoSubmissionSchema.create(info)
  return newInfo
}

export async function getInfo (accountId: Info['accountId']): Promise<Info> {
  await mongoDB()
  const info = await InfoSubmissionSchema.findOne({ accountId: accountId })
  return info
}

export async function update (infosubmitted: Info): Promise<void> {
  const accountId = infosubmitted.accountId

  await mongoDB()

  const info = await InfoSubmissionSchema.findOne({ accountId: accountId })
  if (info === undefined) throw new Error(errors.user.INVALID_ID)
  info.eligibilityQuestions = infosubmitted.eligibilityQuestions
  info.documents = infosubmitted.documents
  info.otherQuestions = infosubmitted.otherQuestions
  info.save()
}
