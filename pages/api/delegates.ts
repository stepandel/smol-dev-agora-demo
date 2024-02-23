import { NextApiRequest, NextApiResponse } from 'next';
import { Delegate } from '../../interfaces/Delegate';
import { fetchDelegates } from '../../utils/fetchDelegates';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const delegates: Delegate[] = await fetchDelegates();
    res.status(200).json(delegates);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}