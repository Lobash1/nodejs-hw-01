import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number = 5) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updateContacts = [...existingContacts, ...newContacts];
    await writeContacts(updateContacts);
    console.log(`Get ${number} new contacts`);
  } catch (error) {
    console.error(`errroooor`, error.message);
  }
};

generateContacts(5);
