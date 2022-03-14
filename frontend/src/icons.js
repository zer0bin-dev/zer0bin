import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";


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

document.getElementById("save-button").append(svgSave);
document.getElementById("new-button").append(svgFileAdd);
document.getElementById("copy-button").append(svgCopy);
document.getElementById("github-button").append(svgGithub);