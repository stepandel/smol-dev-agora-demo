import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchDelegates } from '../../lib/fetchDelegates'
import { Delegate } from '../../types/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Delegate>>
) {
  try {
    const delegates = await fetchDelegates()
    res.status(200).json(delegates)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}