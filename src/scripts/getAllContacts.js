import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`ALL contacts`, contacts);
  } catch (error) {
    console.error('errrooorrr', error.message);
  }
};

console.log(await getAllContacts());
