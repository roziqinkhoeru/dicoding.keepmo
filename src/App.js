import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FormNote from "./components/FormNote";
import PublicNote from "./components/PublicNote";
import ArchiveNote from "./components/ArchiveNote";

import { getInitialData } from "./utilities";

import "./styles/base/_global.scss";
import "./styles/style.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      notes: getInitialData(),
      isGrid: true,
      searchResult: "",
      isShowSearch: false,
    };
    // binding
    this.changeNoteView = this.changeNoteView.bind(this);
    this.archivedNote = this.archivedNote.bind(this);
    this.unarchivedNote = this.unarchivedNote.bind(this);
    this.deleteNoted = this.deleteNoted.bind(this);
    this.searchNote = this.searchNote.bind(this);
    this.addNotes = this.addNotes.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  // change view of notes
  changeNoteView = () => {
    this.setState({
      isGrid: !this.state.isGrid,
    });
  };

  // archive note
  archivedNote = (id) => {
    const notes = this.state.notes;
    const note = notes.find((note) => note.id === id);
    note.archived = true;
    this.setState({ notes });
  };

  // unarchived note
  unarchivedNote = (id) => {
    const notes = this.state.notes;
    const note = notes.find((note) => note.id === id);
    note.archived = false;
    this.setState({ notes });
  };

  // delete note
  deleteNoted = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  // search note navbar
  searchNote = (e) => {
    this.setState(() => {
      return {
        searchResult: e.target.value,
      };
    });
  };

  // add notes handler
  addNotes = ({ title, body, archived = false }) => {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: prev.notes.length + 1,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived,
          },
        ],
      };
    });
  };

  // show search
  showSearch = () => {
    this.setState({
      isShowSearch: !this.state.isShowSearch,
    });
  };

  render() {
    return (
      <div className='App'>
        <Navbar
          isGrid={this.state.isGrid}
          changeViewHandling={this.changeNoteView}
          searchNoteHandling={this.searchNote}
          showNavSearchHandling={this.showSearch}
          isShowOnClick={this.state.isShowSearch}
        />
        <main>
          <FormNote onAddHandler={this.addNotes} />
          <PublicNote
            isGrid={this.state.isGrid}
            notes={this.state.notes}
            archivedHandling={this.archivedNote}
            unarchivedHandling={this.unarchivedNote}
            deleteHandling={this.deleteNoted}
            searchResult={this.state.searchResult}
          />
          <ArchiveNote
            isGrid={this.state.isGrid}
            notes={this.state.notes}
            archivedHandling={this.archivedNote}
            unarchivedHandling={this.unarchivedNote}
            deleteHandling={this.deleteNoted}
            searchResult={this.state.searchResult}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
