import { Photon } from '@prisma/photon'
import { NextApiRequest, NextApiResponse } from 'next'
import { ThenArg } from '../utils'

const photon = new Photon()

async function getData() {
  return {
    users: await photon.users.findMany({ include: { posts: { first: 1 } } }),
  }
}

export type Data = ThenArg<ReturnType<typeof getData>>

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const data = await getData()
  console.log(data)
  res.json(data)
}
