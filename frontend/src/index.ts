import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg"
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers"
import hljs from "highlight.js"

const config = require("../config.json")
const apiUrl = config.api_url

let lineNumbers = <HTMLElement>document.querySelector(".line-numbers")
let editor = <HTMLTextAreaElement>document.getElementById("text-area")
let codeViewPre = <HTMLPreElement>document.getElementById("code-view-pre")
let codeView = <HTMLElement>document.getElementById("code-view")
let messages = <HTMLElement>document.getElementById("messages")
let viewCounterLabel = <HTMLElement>document.getElementById("viewcounter-label")
let viewCounter = <HTMLElement>document.getElementById("viewcounter-count")

let saveButton = <HTMLButtonElement>document.getElementById("save-button")
let newButton = <HTMLButtonElement>document.getElementById("new-button")
let copyButton = <HTMLButtonElement>document.getElementById("copy-button")
let githubButton = <HTMLButtonElement>document.getElementById("github-button")

const extraSVGAttrs = {
	width: "1em",
	height: "1em",
	fill: "currentColor",
}

saveButton.innerHTML += renderIconDefinitionToSVGElement(SaveOutlined, {
	extraSVGAttrs: extraSVGAttrs,
})
newButton.innerHTML += renderIconDefinitionToSVGElement(FileAddOutlined, {
	extraSVGAttrs: extraSVGAttrs,
})
copyButton.innerHTML += renderIconDefinitionToSVGElement(CopyOutlined, {
	extraSVGAttrs: extraSVGAttrs,
})
githubButton.innerHTML += renderIconDefinitionToSVGElement(GithubOutlined, {
	extraSVGAttrs: extraSVGAttrs,
})

global.rawContent = ""

function postPaste(content: string, callback: Function) {
	const payload = { content }
	fetch(`${apiUrl}/p/n`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			callback(null, data)
		})
		.catch((error) => {
			console.log(error)
			callback(
				error || `{"data": { "message": "An unkown error occured!" } }`
			)
		})
	global.rawContent = ""
	viewCounterLabel.hidden = true
}

function getPaste(id: string, callback: Function) {
	fetch(`${apiUrl}/p/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		referrerPolicy: "no-referrer",
	})
		.then((response) => response.json())
		.then((data) => {
			callback(null, data)
		})
		.catch((error) => {
			callback(
				error || `{"data": { "message": "An unkown error occured!" } }`
			)
		})
}

function newPaste() {
	lineNumbers.innerHTML = "&gt;"

	saveButton.disabled = false
	newButton.disabled = true
	copyButton.disabled = true

	editor.value = ""

	editor.hidden = false
	codeViewPre.hidden = true
}

function addMessage(message: string) {
	let msg = document.createElement("li")
	msg.innerHTML = message
	messages.insertBefore(msg, messages.firstChild)

	setTimeout(function () {
		msg.classList.add("fadeOut"),
			function () {
				msg.remove()
			}
	}, 3000)
}

function viewPaste(content: string, views: string) {
	lineNumbers.innerHTML = ""
	for (let i = 1; i <= content.split("\n").length; i++) {
		lineNumbers.append(`${i}
<br>`)
	}
	codeView.innerHTML = hljs.highlightAuto(content).value

	saveButton.disabled = true
	newButton.disabled = false
	copyButton.disabled = false

	viewCounter.textContent = views

	editor.hidden = true
	codeViewPre.hidden = false
	viewCounterLabel.hidden = false
}

export function saveButtonExec() {
	if (editor.value === "") {
		return
	}
	const val: string = editor.value?.toString()!

	postPaste(val, function (err, res) {
		if (err) {
			addMessage(err["data"]["message"])
		} else {
			window.history.pushState(null, "", `/~/${res["data"]["id"]}`)
			global.rawContent = res["data"]["content"]
			viewPaste(global.rawContent, "0")
		}
	})
}

export function copyButtonExec() {
	window.history.pushState(null, "", "/")
	let content = global.rawContent
	newPaste()
	global.rawContent = content
	editor.value = global.rawContent
}

editor.addEventListener(
	"keydown",
	function (e: KeyboardEvent) {
		if (e.key == "Tab") {
			e.preventDefault()
			let start: number = this.selectionStart
			let end: number = this.selectionEnd
			this.value =
				this.value.substring(0, start) +
				"\t" +
				this.value.substring(end)
			this.selectionStart = this.selectionEnd = start + 1
		}
	},
	false
)

function handlePopstate() {
	const path = window.location.pathname

	if (path == "/") {
		newPaste()
	} else {
		const split = path.split("/")

		const id = split[split.length - 1]

		getPaste(id, function (err, res) {
			if (err) {
				window.history.pushState(null, "", `/`)
				newPaste()
			} else {
				global.rawContent = res["data"]["content"]
				viewPaste(global.rawContent, res["data"]["views"].toString())
			}
		})
	}
}

$(window).bind("popstate", function () {
	handlePopstate()
})

$(document).ready(function () {
	handlePopstate()
})
