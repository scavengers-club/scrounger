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
  await client.storage
    .from('adv-images')
    .upload(
      `${adventure.name.toLowerCase().split(' ').join('-')}/${adventure.image.name}`,
      adventure.image
    );
  const { publicURL } = await client.storage
    .from('adv-images')
    .getPublicUrl(`${adventure.name.toLowerCase().split(' ').join('-')}/${adventure.image.name}`);
  adventure.image = publicURL;
  const resp = await client.from('adventures').insert([adventure]);
  return checkError(resp);
}

export async function editAdventure(adventure) {
  await client.storage
    .from('adv-images')
    .upload(
      `${adventure.name.toLowerCase().split(' ').join('-')}/${adventure.image.name}`,
      adventure.image
    );
  const { publicURL } = await client.storage
    .from('adv-images')
    .getPublicUrl(`${adventure.name.toLowerCase().split(' ').join('-')}/${adventure.image.name}`);
  adventure.image = publicURL;
  const resp = await client.from('adventures').update(adventure).eq('id', adventure.id);
  return checkError(resp);
}

export async function deleteAdventureById(id) {
  const resp = await client.from('adventures').delete().match({ id });
  return checkError(resp);
}
