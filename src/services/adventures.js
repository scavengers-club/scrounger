import { client, checkError } from './client';

export async function getAdventures() {
  const resp = await client.from('adventures').select('*');
  return checkError(resp);
}
