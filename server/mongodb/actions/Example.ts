import mongoDB from '../index'

export async function testFunction2 (): Promise<String> {
  await mongoDB()
  return 'Example string'
}
