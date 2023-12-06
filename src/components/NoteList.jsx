import React from "react"
import NoteItem from "./NoteItem"

export default function NoteList({ notes, archiveHandler, deleteHandler }) {
	const archivedNotes = notes.filter((note) => note.archived)
	const activeNotes = notes.filter((note) => !note.archived)

	const noteGroup = [
		{ title: "Catatan Saya", notes: activeNotes },
		{ title: "Arsip", notes: archivedNotes },
	]

	return (
		<div>
			{noteGroup.map(({ title, notes }, index) => (
				<div key={index}>
					<h2>{title}</h2>
					<div className="notes-list">
						{notes.length ? (
							notes.map((note) => (
								<NoteItem
									note={note}
									key={note.id}
									archiveHandler={archiveHandler}
									deleteHandler={deleteHandler}
								/>
							))
						) : (
							<p className="notes-list__empty-message">Tidak ada catatan.</p>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
