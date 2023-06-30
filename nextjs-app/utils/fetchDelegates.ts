import fetch from 'node-fetch';

export interface Delegate {
  image: string;
  ensName: string;
  walletAddress: string;
  statement: string;
  votingPower: number;
}

export const fetchDelegates = async (): Promise<Delegate[]> => {
  try {
    const response = await fetch('https://remote-db-url.com/delegates');
    const data = await response.json();

    if (!response.ok) {
      throw new Error('FETCH_DELEGATES_ERROR');
    }

    return data.map((delegate: any) => ({
      image: delegate.image,
      ensName: delegate.ensName,
      walletAddress: delegate.walletAddress,
      statement: delegate.statement,
      votingPower: delegate.votingPower,
    }));
  } catch (error) {
    console.error('FETCH_DELEGATES_ERROR', error);
    throw error;
  }
};