import { Photon } from '@prisma/photon'

const photon = new Photon()

export async function getData() {
  return { users: await photon.users.findMany() }
}

export default async function (req, res) {
  // res.json({ test: 'hello world'})
  res.json(await getData())
  // return {
  //   props: {
  //     users: await photon.users.findMany({ where: {name: {contains: "Leo"}}, include: {posts: {first: 1}}}),
  //     hello: 'hello world',
  //   },
  //   revalidate: 5,
  // }
}