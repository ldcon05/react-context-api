import React, { Component } from 'react';
import axios from 'axios';

import './todo.css';
import NoteList from './noteList';

const notes = [];
const TODOIST_API = 'http://127.0.0.1:8000/todoist/';
const getNotes = () => axios.get(TODOIST_API);

export default class Todoist extends Component{
  constructor(props) {
    super(props);
    this.state = {notes: notes};
  }

  componentDidMount() {
    getNotes()
      .then(({data}) => {
        notes.push(...data);
        this.setState({ notes: notes })
      })
      .catch(error => {})
  }

  render() {
    const addNote = (e) => {
      e.preventDefault();

      axios
        .post(TODOIST_API, { content: this.refs.noteContent.value })
        .then(({data}) => {
          notes.push(data);
          this.setState({ notes: notes })
          this.refs.noteForm.reset();
        })
        .catch(error => {});
    };

    const deleteNote = (e) => {
      const noteId = e.target.parentElement.getAttribute('id');
      axios
        .delete(TODOIST_API + noteId)
        .then(data => {
          let indexNote = notes.findIndex(function (note) {
            return note.id === noteId;
          });
          notes.splice(indexNote,1);
          this.setState({ notes: notes });
        })
        .catch(error => {});
    };

    return (
      <section id="todoist" className="container">
        <h1>TINY NOTES</h1>
        <form id='todo-form' ref='noteForm' onSubmit={addNote}>
          <input type="text" ref='noteContent'/>
          <button>Add Note</button>
        </form>
        <div className="scroller">
          <NoteList notes={this.state.notes} delete={deleteNote}></NoteList>
        </div>
      </section>
    );
  }
}
