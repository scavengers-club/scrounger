import { client, checkError } from './client.js';

export async function getUser() {
  const session = client.auth.session();
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .match({ id: session.user.id })
    .single();
  if (error) {
    throw error;
  }
  return { ...session.user, ...data };
}

export async function registerUser(email, password, username, avatar) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  const resp = await client.from('profiles').insert({ id: user.id, username, avatar }).single();
  if (resp.error) {
    throw error;
  }
  return user;
}

export async function logInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logOut() {
  const response = await client.auth.signOut();
  return checkError(response);
}
