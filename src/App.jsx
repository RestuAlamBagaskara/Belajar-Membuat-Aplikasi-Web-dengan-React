import React from "react"
import { getInitialData } from "./utils"
import Header from "./components/header"
import NoteCreateForm from "./components/NoteCreateForm"
import NoteList from "./components/NoteList"

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: getInitialData(),
			filteredNotes: [],
			search: "",
			isSearch: false,
		}

		this.addNoteHandler = this.addNoteHandler.bind(this)
		this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
		this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
		this.searchHandler = this.searchHandler.bind(this)
	}

	addNoteHandler(data) {
		const { notes } = this.state
		const { title, body } = data

		const newNote = {
			id: +new Date(),
			title,
			body,
			createdAt: new Date().toISOString(),
			archived: false,
		}

		this.setState({
			notes: [...notes, newNote],
			filteredNotes: [],
			isSearch: false,
		})
	}

	deleteNoteHandler(id) {
		const { notes } = this.state
		const newNotes = notes.filter((note) => note.id !== id)
		this.setState({ notes: newNotes, isSearch: false })
	}

	archiveNoteHandler(id) {
		const { notes } = this.state
		const note = notes.find((note) => note.id === id)
		note.archived = !note.archived
		this.setState({ notes })
	}

	searchHandler(ev) {
		const { notes } = this.state
		this.setState({
			search: ev.target.value,
		})
		if (!ev.target.value)
			return this.setState({ filteredNotes: [], isSearch: false })
		const filteredNotes = notes.filter((note) =>
			note.title.toLowerCase().includes(ev.target.value.toLowerCase())
		)
		this.setState({ filteredNotes, isSearch: true })
	}

	render() {
		const { notes, filteredNotes, isSearch, search } = this.state
		const noteToRender = isSearch ? filteredNotes : notes
		return (
			<>
				<Header searchHandler={this.searchHandler} value={search} />
				<main className="note-app__body">
					<NoteCreateForm addNote={this.addNoteHandler} />
					<NoteList
						notes={noteToRender}
						archiveHandler={this.archiveNoteHandler}
						deleteHandler={this.deleteNoteHandler}
					/>
				</main>
			</>
		)
	}
}

export default App
