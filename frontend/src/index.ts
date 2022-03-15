import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import hljs from "highlight.js";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'jque... Remove this comment to see the full error message
import $ from "jquery";

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const config = require("../config.json");
const apiUrl = config.api_url;

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

const lineNumbers = $(".line-numbers");
const editor = $("#text-area");
const codeViewPre = $("#code-view-pre");
const codeView = $("#code-view");
const messages = $("#messages");
const viewCounterLabel = $("#viewcounter-label");
const viewCounter = $("#viewcounter-count");

const saveButton = $("#save-button");
const newButton = $("#new-button");
const copyButton = $("#copy-button");
const githubButton = $("#github-button");

saveButton.append(svgSave);
newButton.append(svgFileAdd);
copyButton.append(svgCopy);
githubButton.append(svgGithub);

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'content' implicitly has an 'any' type.
function postPaste(content, callback) {
	const payload = { content };
	fetch(`${apiUrl}/p/n`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	}).then(response => response.json())
		.then(data => {
			console.log(data);
			callback(null, data);
		})
		.catch((error) => {
			console.log(error);
			callback(error || `{"data": { "message": "An unkown error occured!" } }`);
		});
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
function getPaste(id, callback) {
	fetch(`${apiUrl}/p/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		referrerPolicy: 'no-referrer',
	}).then(response => response.json())
		.then(data => {
			callback(null, data);
		})
		.catch((error) => {
			callback(error || `{"data": { "message": "An unkown error occured!" } }`);
		});
}

function newPaste() {
	lineNumbers.html("&gt;");

	saveButton.prop("disabled", false);
	newButton.prop("disabled", true);
	copyButton.prop("disabled", true);

	editor.val("");

	editor.show();
	codeViewPre.hide();
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'message' implicitly has an 'any' type.
function addMessage(message) {
	let msg = $(`<li>${message}</li>`);
	messages.prepend(msg);

	setTimeout(function () {
		msg.slideUp("fast", function () {
// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
			$(this).remove();
		});
	}, 3000);
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'content' implicitly has an 'any' type.
function viewPaste(content, views) {
	lineNumbers.html("");
	for (let i = 1; i <= content.split("\n").length; i++) {
		lineNumbers.append(`${i}
<br>`);
	}
	codeView.html(hljs.highlightAuto(content).value);

	saveButton.prop("disabled", true);
	newButton.prop("disabled", false);
	copyButton.prop("disabled", false);

	viewCounter.text(views);

	editor.hide();
	codeViewPre.show();
	viewCounterLabel.show();
}

saveButton.click(function () {
	if (editor.val() === "") {
		return;
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'err' implicitly has an 'any' type.
	postPaste(editor.val(), function (err, res) {
		if (err) {
			addMessage(err["data"]["message"]);
		} else {
// @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
			window.history.pushState(null, null, `/~/${res["data"]["id"]}`);
			viewPaste(res["data"]["content"], "0");
		}
	});
});

copyButton.click(function () {
	//TODO: Make copy paste to new paste
	// const path = window.location.pathname;
	// const split = path.split("/");
	// const id = split[split.length - 1];
	// getPaste(id, function (err, res) {
	// 	if (err) {
	// 		window.history.pushState(null, null, `/`);
	// 		newPaste();
	// 	} else {
	// 		navigator.clipboard.writeText(res["data"]["content"])
	// 		addMessage("Copied paste to clipboard!")
	// 	}
	// });
});

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
editor.keydown(function (e) {
	if (e.key == "Tab") {
		e.preventDefault();
// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
		let start = this.selectionStart;
// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
		let end = this.selectionEnd;
// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
		this.selectionStart = this.selectionEnd = start + 1;
	}
});

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
function handlePopstate(event) {
	const path = window.location.pathname;

	if (path == "/") {
		newPaste();
	} else {
		const split = path.split("/");

		const id = split[split.length - 1];

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'err' implicitly has an 'any' type.
		getPaste(id, function (err, res) {
			if (err) {
// @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
				window.history.pushState(null, null, `/`);
				newPaste();
			} else {
				viewPaste(res["data"]["content"], res["data"]["views"].toString());
			}
		});
	}
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
$(window).bind("popstate", function (event) {
	handlePopstate(event);
});

$(document).ready(function () {
	handlePopstate({ target: window });
});
