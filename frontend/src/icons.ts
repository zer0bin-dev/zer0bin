import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg"
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers"
import tippy from "tippy.js"
import "../style/tooltip.css"
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

tippy("#save-button", {
	content: "Save paste",
	animation: "scale",
	theme: "rosepine",
})

tippy("#new-button", {
	content: "New paste",
	animation: "scale",
	theme: "rosepine",
})

tippy("#copy-button", {
	content: "Duplicate paste",
	animation: "scale",
	theme: "rosepine",
})

tippy("#github-button", {
	content: "GitHub",
	animation: "scale",
	theme: "rosepine",
})
