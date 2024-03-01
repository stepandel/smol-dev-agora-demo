import axios from 'axios';
import { Delegate } from '../types/Delegate';

export async function fetchDelegates(): Promise<Delegate[]> {
  try {
    const response = await axios.get('https://api.delegates.com/delegates');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}