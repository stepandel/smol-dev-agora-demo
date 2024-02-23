import { Delegate } from '../interfaces/Delegate';

export async function fetchDelegates(): Promise<Delegate[]> {
  const res = await fetch('https://api.example.com/delegates');
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Could not fetch delegates.');
  }

  return data;
}