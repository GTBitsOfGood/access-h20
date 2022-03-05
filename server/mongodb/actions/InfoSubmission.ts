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
  const info = await InfoSubmissionSchema.findOne({ accountId })
  return info
}

export async function update (infosubmited: Info): Promise<void> {
  const accountId = infosubmited.accountId
  const attributes = infosubmited

  await mongoDB()

  const info = await InfoSubmissionSchema.findOne({ accountId: accountId })
  if (info === undefined) throw new Error(errors.user.INVALID_ID)
  info.paymentAns = attributes.paymentAns
  info.servicesAns = attributes.servicesAns
  info.contactAns = attributes.contactAns
  info.waterAns = attributes.waterAns
  info.adjustAns = attributes.adjustAns
  info.infoAns = attributes.infoAns
  info.indivAns = attributes.indivAns
  info.save()
}
