import mongoDB from '../index'
import InfoSubmissionSchema from '../models/InfoSubmission'
import { Info } from '../../models/InfoSubmission'
import errors from '../../../utils/consts'

export async function addInfo (info: Info): Promise<Info> {
  await mongoDB()
  const newCompany = await InfoSubmissionSchema.create(info)
  return newCompany
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
  info.paymentAns = attributes.payments
  info.servicesAns = attributes.minimumService
  info.contactAns = attributes.customerContact
  info.waterAns = attributes.waterMeter
  info.adjustAns = attributes.pendingAdjustments
  info.infoAns = attributes.additionalInformation
  info.indivAns = attributes.individualsInvolved
  info.save()
}
