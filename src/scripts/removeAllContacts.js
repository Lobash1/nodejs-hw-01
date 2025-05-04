import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(`delete all`);
  } catch (error) {
    console.error('errrrorrr', error.message);
  }
};

removeAllContacts();
