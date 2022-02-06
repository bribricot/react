import React from "react"
import ReactDOM from "react-dom"

let header = (
	<h1>Hello</h1>
	)

let name = "Me"

let url = "https://mimo.app/i/lori.png"

let app = (
	<div>
	{header}, {name}
	{subheader}
	</div>
	<img src={url} alt="Me">
	)

ReactDOM.render(
	app, document.getElementById("root")
	)