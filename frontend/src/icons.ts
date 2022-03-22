import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
	ForkOutlined,
	HeartOutlined,
	StarOutlined,
} from "@ant-design/icons-svg"
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers"
import tippy from "tippy.js"
import "../style/tooltip.scss"
import "tippy.js/animations/scale.css"

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

function makeTooltips() {
	let theme = ""

	if (window.location.pathname == "/") {
		theme = "rosepine"
	} else {
		theme = "rosepine-extended"
	}

	tippy("#save-button", {
		content: "Save paste<br><span class='keybind'>Ctrl + S</span>",
		placement: "bottom",
		animation: "scale",
		theme: theme,
		allowHTML: true,
	})

	tippy("#new-button", {
		content: "New paste<br><span class='keybind'>Ctrl + N</span>",
		placement: "bottom",
		animation: "scale",
		theme: theme,
		allowHTML: true,
	})

	tippy("#copy-button", {
		content: "Duplicate paste<br><span class='keybind'>Ctrl + D</span>",
		placement: "bottom",
		animation: "scale",
		theme: theme,
		allowHTML: true,
	})

	tippy("#github-button", {
		content: `GitHub<br><span class='keybind'>
		${renderIconDefinitionToSVGElement(StarOutlined, {
			extraSVGAttrs: extraSVGAttrs,
		})} ${renderIconDefinitionToSVGElement(ForkOutlined, {
			extraSVGAttrs: extraSVGAttrs,
		})} ${renderIconDefinitionToSVGElement(HeartOutlined, {
			extraSVGAttrs: extraSVGAttrs,
		})}</span>`,
		placement: "bottom",
		animation: "scale",
		theme: theme,
		allowHTML: true,
	})
}

window.addEventListener("popstate", () => {
	makeTooltips()
})

document.addEventListener(
	"DOMContentLoaded",
	() => {
		makeTooltips()
	},
	false
)
