import { NextApiRequest, NextApiResponse } from 'next';
import { fetchDelegates } from '../../lib/fetchDelegates';
import { Delegate } from '../../types/Delegate';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const delegates: Delegate[] = await fetchDelegates();
    res.status(200).json(delegates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}