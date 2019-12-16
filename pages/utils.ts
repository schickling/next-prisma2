import fetch from 'node-fetch'

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export async function api<T>(path: string): Promise<T> {
  const url = `http://localhost:3000${path}`
  console.log(url)
  const response = await fetch(url)
  const result: T = await response.json()

  return result
}
