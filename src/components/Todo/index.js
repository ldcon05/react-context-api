import React, { Component } from 'react';

import './todo.css';

const notes = [
  {
    id: 1,
    value: "Clean my workspace"
  },
  {
    id: 2,
    value: "Drink my water"
  },
  {
    id: 3,
    value: "Wash my teeth"
  },
  {
    id: 4,
    value: "Read my book"
  },
]

function NoteList(props) {
  const notes = props.notes;
  const listItems = notes.map((note, index) =>
    <li key={note.id}><b>{index + 1}</b> {note.value}</li>
  );
  return (
    <ul id="notes">{listItems}</ul>
  );
}

export default class Todoist extends Component{
  constructor(props) {
    super(props)
    this.state = {notes: notes}
  }


  render() {
    const addNote = (e) => {
      e.preventDefault();

      notes.push({
        id: notes.length + 1,
        value: this.refs.noteContent.value
      })
      this.setState({ notes: notes })
      this.refs.noteForm.reset();
    }


    return (
      <section id="todoist" className="container">
        <h1>TINY NOTES</h1>
        <form id='todo-form' ref='noteForm' onSubmit={addNote}>
          <input type="text" ref='noteContent'/>
          <button>Add Note</button>
        </form>
        <div className="scroller">
          <NoteList notes={this.state.notes}></NoteList>
        </div>
      </section>
    );
  }
}
