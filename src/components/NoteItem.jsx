import React from "react"
import NoteItemContent from "./NoteItemContent"
import NoteButtons from "./NoteButtons"

export default function NoteItem({ note, archiveHandler, deleteHandler }) {
	return (
		<div className="note-item">
			<NoteItemContent
				title={note.title}
				body={note.body}
				createdAt={note.createdAt}
			/>
			<NoteButtons
				archived={note.archived}
				archiveHandler={() => archiveHandler(note.id)}
				deleteHandler={() => deleteHandler(note.id)}
			/>
		</div>
	)
}
