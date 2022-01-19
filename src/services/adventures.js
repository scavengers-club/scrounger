import { client, checkError } from './client';

export async function getAdventures() {
  const resp = await client.from('adventures').select('*');
  return checkError(resp);
}

export async function getUserAdventures(id) {
  const resp = await client.from('adventures').select('*').eq('user_id', id);
  return checkError(resp);
}

export async function getAdventureById(id) {
  const resp = await client.from('adventures').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createAdventure(adventure) {
  const resp = await client.from('adventures').insert([adventure]);
  return checkError(resp);
}

export async function editAdventure(adventure) {
  const resp = await client.from('adventures').update(adventure).eq('id', adventure.id);
  return checkError(resp);
}

export async function deleteAdventureById(id) {
  const resp = await client.from('adventures').delete().match({ id });
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
