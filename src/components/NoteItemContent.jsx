import React from "react"
import { showFormattedDate } from "../utils"

export default function NoteItemContent({ title, body, createdAt }) {
	return (
		<section className="note-item__content">
			<h3 className="note-item__title">{title}</h3>
			<p className="note-item__date">{showFormattedDate(createdAt)}</p>
			<p className="note-item__body">{body}</p>
		</section>
	)
}
