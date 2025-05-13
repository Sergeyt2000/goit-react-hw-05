import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";

export default function Contact({ contact, onDeleteContact }) {   
  const { id, name, number } = contact;
  
  return (
    <>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <RiContactsFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.contactInfo}>
          <MdPhone />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delbtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}