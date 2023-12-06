import React from "react"

function NoteInput({ handler, placeholder, type, value, style }) {
	return (
		<>
			{type === "textarea" ? (
				<textarea
					placeholder={placeholder}
					onChange={handler}
					value={value}
					style={style}
				/>
			) : (
				<input
					type={type}
					placeholder={placeholder}
					onChange={handler}
					value={value}
				/>
			)}
		</>
	)
}

export default NoteInput
