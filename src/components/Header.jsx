import React from "react"
import NoteInput from "./NoteInput"

function Header({ searchHandler, value }) {
	return (
		<header className="note-app__header">
			<h1 className="note-app__title">Notes</h1>
			<span className="note-search">
				<NoteInput
					handler={searchHandler}
					placeholder={"Cari Disini..."}
					type={"text"}
					value={value}
				/>
			</span>
		</header>
	)
}

export default Header
