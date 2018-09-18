import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function NoteList(props) {
  const notes = props.notes;
  const listItems = notes.map((note, index) =>
    <li key={note.id} id={note.id}>
      <b>{index + 1}</b>
      {note.content}
      <button  onClick={props.delete}><FontAwesomeIcon icon={faTimes} /></button>
    </li>
  );
  return (
    <ul id="notes">{listItems}</ul>
  );
}
