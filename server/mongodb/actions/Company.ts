import CompanySchema from '../models/Company'
import { Company } from '../../models/Company'
import errors from '../../../utils/consts'
import mongoDB from '../index'
import validator from 'email-validator'

export async function getCompany (accountId: Company['accountId']) {
  await mongoDB()
  const company = await CompanySchema.findOne({ accountId: accountId })
  return company
}

export async function update ({ accountId, ...attributes }) {
  if (!accountId) throw new Error(errors.user.MISSING_INFO)

  await mongoDB()

  if (attributes.email) {
    const validEmail = validator.validate(attributes.email)
    if (!validEmail) throw new Error(errors.user.INVALID_EMAIL)
  }

  const company = await CompanySchema.findOne({ accountId: accountId })
  if (!company) throw new Error(errors.user.INVALID_ID)

  const updatedCompany = await CompanySchema.findOneAndUpdate({ accountId: accountId }, { $set: attributes }, { new: true, runValidators: true, omitUndefined: true })
  return updatedCompany
}
