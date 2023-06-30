import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchDelegates } from '../../utils/fetchDelegates'

type Data = {
  message: string,
  delegates?: Delegate[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const delegates = await fetchDelegates()
    res.status(200).json({ message: 'FETCH_DELEGATES_SUCCESS', delegates })
  } catch (error) {
    res.status(500).json({ message: 'FETCH_DELEGATES_ERROR' })
  }
}