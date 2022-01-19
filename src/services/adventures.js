import { client, checkError } from './client';

export async function getAdventures() {
  const resp = await client.from('adventures').select('*');
  return checkError(resp);
}

export async function getAdventureById(id) {
  const resp = await client.from('adventures').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createAdventure(adventure) {
  const resp = await client.from('adventures').insert(adventure);
  return checkError(resp);
}

export async function uploadAdventureImage(adventureId, file) {
  {
    /*
    const ext = file.name.split('.').pop();     //this isolates the file extension 
    await client.storage.from('adv-images').upload(to where?).
  */
  }
}
