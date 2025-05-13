import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onDeleteContact }) {

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactBox} key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
// 