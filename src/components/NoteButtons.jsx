import React from "react"

function NoteButton({ archived, archiveHandler, deleteHandler }) {
	return (
		<section className="note-item__action">
			<button
				type="button"
				onClick={archiveHandler}
				className="note-item__archive-button"
			>
				{archived ? "Batalkan" : "Arsipkan"}
			</button>
			<button
				type="button"
				onClick={deleteHandler}
				className="note-item__delete-button"
			>
				Hapus
			</button>
		</section>
	)
}

export default NoteButton
