import fetch from 'node-fetch';
import { Delegate } from '../types/index';

export async function fetchDelegates(): Promise<Delegate[]> {
  const response = await fetch('https://remote-db-url.com/delegates');
  const data = await response.json();

  return data.map((delegate: any) => ({
    id: delegate.id,
    image: delegate.image || '/images/default-delegate.png',
    ensName: delegate.ensName,
    walletAddress: delegate.walletAddress,
    statement: delegate.statement,
    votingPower: delegate.votingPower,
  }));
}