import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
const $ = require("jquery");

const svgSave = renderIconDefinitionToSVGElement(SaveOutlined, {
	extraSVGAttrs: {
		width: "1em",
		height: "1em",
		fill: "currentColor",
	},
});

const svgFileAdd = renderIconDefinitionToSVGElement(FileAddOutlined, {
	extraSVGAttrs: {
		width: "1em",
		height: "1em",
		fill: "currentColor",
	},
});

const svgCopy = renderIconDefinitionToSVGElement(CopyOutlined, {
	extraSVGAttrs: {
		width: "1em",
		height: "1em",
		fill: "currentColor",
	},
});

const svgGithub = renderIconDefinitionToSVGElement(GithubOutlined, {
	extraSVGAttrs: {
		width: "1em",
		height: "1em",
		fill: "currentColor",
	},
});

const saveButton = $("#save-button");
const newButton = $("#new-button");
const copyButton = $("#copy-button");
const githubButton = $("#github-button");

saveButton.append(svgSave);
newButton.append(svgFileAdd);
copyButton.append(svgCopy);
githubButton.append(svgGithub);