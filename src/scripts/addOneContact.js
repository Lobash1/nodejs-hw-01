import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updateContacts = [...contacts, newContact];

    await writeContacts(updateContacts);

    console.log(`get one contacts`, newContact);
  } catch (error) {
    console.error('errrooorrr', error.message);
  }
};

addOneContact();
