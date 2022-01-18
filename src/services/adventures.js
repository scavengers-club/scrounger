import { client, checkError } from './client';

export async function getAdventures() {
  const resp = await client.from('adventures').select('*');
  return checkError(resp);
}

export async function getAdventureById(id) {
  const resp = await client.from('adventures').select('*').match({ id }).single();
  return checkError(resp);
}
