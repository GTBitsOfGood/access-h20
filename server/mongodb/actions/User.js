/* eslint-disable */

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoDB from '../index'
import User from '../models/User'
import CompanySchema from '../models/Company'
import errors from '../../../utils/consts'
import validator from 'email-validator'

const SALT_ROUNDS = 10
const TOKEN_DURATION = '7d'
const JWT_SECRET = process.env.JWT_SECRET

export async function login({ email, password }) {
  if (!email || !password) throw new Error(errors.user.MISSING_INFO)

  await mongoDB()
  const user = await User.findOne({ email })
  if (!user) throw new Error(errors.user.INCORRECT_LOGIN)

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) throw new Error(errors.user.INCORRECT_LOGIN)

  const jwtPayload = { id: user._id }
  const jwtOptions = { expiresIn: TOKEN_DURATION }
  return jwt.sign(jwtPayload, JWT_SECRET, jwtOptions)
}

export async function signUp({ email, password, utilityCompanyId }) {
  if (!email || !password) throw new Error(errors.user.MISSING_INFO)

  const validEmail = validator.validate(email)
  if (!validEmail) throw new Error(errors.user.INVALID_EMAIL)
  if (password.length < 8) throw new Error(errors.user.INVALID_PASSWORD)

  await mongoDB()
  let utilityCompany = CompanySchema.findById(utilityCompanyId)

  if (!utilityCompany) throw new Error(errors.company.UNAVAILABLE_COMPANY)

  let user = await User.findOne({ email })
  if (user) throw new Error(errors.user.UNAVAILABLE_EMAIL)

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  // if (utilityCompany) {
  //   user = await User.create({
  //     email,
  //     password: hashedPassword,
  //     isUtilityCompany: false
  //   })
  // } else {
  //   user = await User.create({
  //     email,
  //     password: hashedPassword,
  //     isUtilityCompany: true,
  //     utilityCompany
  //   })
  // }

  user = await User.create({
    email,
    password: hashedPassword,
    isUtilityCompany: false
  })

  if (!user) throw new Error(errors.user.INVALID_ATTRIBUTES)

  utilityCompany = await CompanySchema.updateOne(
    { _id: utilityCompanyId },
    { accountId: user._id }
  )

  if (!utilityCompany) throw new Error(errors.company.INVALID_ATTRIBUTES)

  const jwtPayload = { id: user._id, email: user.email }
  const jwtOptions = { expiresIn: TOKEN_DURATION }
  return jwt.sign(jwtPayload, JWT_SECRET, jwtOptions)
}

export async function update({ id, ...attributes }) {
  if (!id) throw new Error(errors.user.MISSING_INFO)

  await mongoDB()
  const user = await User.findOne({ _id: id })
  if (!user) throw new Error(errors.user.INVALID_ID)

  const updatedUser = await User.findOneAndUpdate({ _id: id }, attributes, {
    new: true
  })
  if (!updatedUser) throw new Error(errors.user.INVALID_ATTRIBUTES)
  return updatedUser
}

export const getUserFromToken = async (token) => {
  if (!token) throw new Error(errors.token.DOESNT_EXIST)

  return jwt.verify(token, JWT_SECRET, async (error, { id }) => {
    if (error) throw new Error(errors.token.IS_INVALID)

    await mongoDB()
    const user = await User.findOne({ _id: id })
    if (!user) throw new Error(errors.token.DELETED_USER)

    return { id, email: user.email, isUtilityCompany: user.isUtilityCompany }
  })
}
