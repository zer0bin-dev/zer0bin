import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg"
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers"
import hljs from "highlight.js"
import JSConfetti from "js-confetti"
import Scrollbar from "smooth-scrollbar"

const config = require("../config.json")
const apiUrl = config.api_url
const jsConfetti = new JSConfetti()

global.rawContent = ""

const lineNumbers = <HTMLElement>document.querySelector(".line-numbers")
const wrapper = <HTMLPreElement>document.querySelector(".wrapper")
const editor = <HTMLTextAreaElement>document.getElementById("text-area")
const codeViewPre = <HTMLPreElement>document.getElementById("code-view-pre")
const codeView = <HTMLElement>document.getElementById("code-view")
const messages = <HTMLElement>document.getElementById("messages")
const viewCounterLabel = <HTMLSpanElement>(
	document.getElementById("viewcounter-label")
)
const viewCounter = <HTMLSpanElement>(
	document.getElementById("viewcounter-count")
)
const saveButton = <HTMLButtonElement>document.getElementById("save-button")
const newButton = <HTMLButtonElement>document.getElementById("new-button")
const copyButton = <HTMLButtonElement>document.getElementById("copy-button")
const githubButton = <HTMLButtonElement>document.getElementById("github-button")

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

function hide(element: HTMLElement) {
	element.style.display = "none"
}

function show(element: HTMLElement) {
	element.style.display = null
}

function disable(element: HTMLButtonElement) {
	element.disabled = true
}

function enable(element: HTMLButtonElement) {
	element.disabled = false
}

async function postPaste(content: string, callback: Function) {
	const payload = { content }
	await fetch(`${apiUrl}/p/n`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data["success"]) {
				callback(null, data)

				return
			}

			callback(data || { data: { message: "An unkown error occured!" } })
		})
		.catch((error) => {
			callback({
				data: { message: "API error occurred.. please try again." },
			})
		})
}

async function getPaste(id: string, callback: Function) {
	await fetch(`${apiUrl}/p/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		referrerPolicy: "no-referrer",
	})
		.then((response) => response.json())
		.then((data) => {
			if (data["success"]) {
				callback(null, data)

				return
			}

			callback(data || { data: { message: "An unkown error occured!" } })
		})
		.catch((error) => {
			callback({
				data: { message: "API error occurred.. please try again." },
			})
		})
}

function newPaste() {
	Scrollbar.destroyAll()

	lineNumbers.innerHTML = "&gt;"

	enable(saveButton)
	disable(newButton)
	disable(copyButton)

	editor.value = ""
	global.rawContent = ""

	wrapper.classList.add("text-area-proper")

	show(editor)
	hide(codeViewPre)
	hide(viewCounterLabel)
	hide(viewCounter)
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
		lineNumbers.innerHTML =
			lineNumbers.innerHTML +
			`${i}
<br>`
	}
	codeView.innerHTML = hljs.highlightAuto(content).value

	disable(saveButton)
	enable(newButton)
	enable(copyButton)
	hide(editor)

	show(codeViewPre)
	show(viewCounterLabel)
	show(viewCounter)

	viewCounter.textContent = views

	try {
		wrapper.classList.remove("text-area-proper")
	} catch (error) {}

	Scrollbar.init(document.querySelector(".scrollbar-container"))
}

async function savePaste() {
	if (editor.value === "") {
		return
	}
	const val: string = editor.value?.toString()!

	await postPaste(val, function (err, res) {
		if (err) {
			addMessage(err["data"]["message"])
		} else {
			window.history.pushState(null, "", `/~/${res["data"]["id"]}`)

			global.rawContent = res["data"]["content"]
			viewPaste(global.rawContent, "0")

			const rand = Math.floor(Math.random() * 40)

			if ([1, 2, 3, 4].includes(rand)) {
				jsConfetti.addConfetti({
					confettiColors: [
						"#eb6f92",
						"#f6c177",
						"#ebbcba",
						"#31748f",
						"#9ccfd8",
						"#c4a7e7",
					],
				})
			} else if (rand === 5) {
				jsConfetti.addConfetti({
					emojis: ["🦀"],
				})
			} else if (rand === 6) {
				jsConfetti.addConfetti({
					emojis: ["🐢", "🚀", "✨"],
				})
			}
		}
	})
}

saveButton.addEventListener("click", async function () {
	await savePaste()
})

document.addEventListener("keydown", (e) => {
	if (e.ctrlKey && e.key === "s") {
		e.preventDefault()
		savePaste()
	}
})

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

copyButton.addEventListener("click", function () {
	const content = editor.value

	window.history.pushState(null, "", "/")

	newPaste()

	global.rawContent = content
	editor.value = content
})

newButton.addEventListener("click", function () {
	window.location.href = "/"
})

async function handlePopstate() {
	const path = window.location.pathname

	if (path == "/") {
		newPaste()
	} else {
		const split = path.split("/")

		const id = split[split.length - 1]

		await getPaste(id, function (err, res) {
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

window.addEventListener("popstate", async () => {
	await handlePopstate()
})

document.addEventListener(
	"DOMContentLoaded",
	async () => {
		await handlePopstate()
	},
	false
)
