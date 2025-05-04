import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log(`contacts don't`);
      return;
    }

    const removed = contacts.pop();
    await writeContacts(contacts);
    console.log(`delete last contacts`, removed);
  } catch (error) {
    console.error('errrrorrr', error.message);
  }
};

removeLastContact();
