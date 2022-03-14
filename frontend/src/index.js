const $ = require("jquery");
const hljs = require("highlight.js");

import {
	SaveOutlined,
	FileAddOutlined,
	GithubOutlined,
	CopyOutlined,
} from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

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

$("#save-button").append(svgSave);
$("#new-button").append(svgFileAdd);
$("#copy-button").append(svgCopy);
$("#github-button").append(svgGithub);

const lineNumbers = $(".line-numbers");
const editor = $("#text-area");
const codeViewPre = $("#code-view-pre");
const codeView = $("#code-view");
const messages = $("#messages");
const saveButton = $("#save-button");
const newButton = $("#new-button");
const copyButton = $("#new-button");
const viewCounterLabel = $("#viewcounter-label");
const viewCounter = $("#viewcounter-count");

function postPaste(content, callback) {
	const data = {
		content,
	};

	$.ajax({
		type: "POST",
		url: `${apiUrl}/p/n`,
		data: JSON.stringify(data),
		dataType: "json",
		contentType: "application/json",
		crossDomain: true,
		success: function (res) {
			callback(null, res);
		},
		error: function (xhr) {
			callback(
				JSON.parse(
					xhr.responseText ||
					`{"data": { "message": "An unkown error occured!" } }`
				)
			);
		},
	});
}

function getPaste(id, callback) {
	$.ajax({
		type: "GET",
		url: `${apiUrl}/p/${id}`,
		contentType: "application/json",
		crossDomain: true,
		success: function (res) {
			callback(null, res);
		},
		error: function (xhr) {
			callback(
				JSON.parse(
					xhr.responseText ||
					`{"data": { "message": "Unknown error occurred.." } }`
				)
			);
		},
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

function addMessage(message) {
	let msg = $(`<li>${message}</li>`);
	messages.prepend(msg);

	setTimeout(function () {
		msg.slideUp("fast", function () {
			$(this).remove();
		});
	}, 3000);
}

function createTextLinks(text) {
	return (text || "").replace(
		/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
		function (match, space, url) {
			let hyperlink = url;
			if (!hyperlink.match("^https?://")) {
				hyperlink = "http://" + hyperlink;
			}
			return space + '<a href="' + hyperlink + '">' + url + "</a>";
		}
	);
}

function viewPaste(content, views) {
	lineNumbers.html("");
	for (let i = 1; i <= content.split("\n").length; i++) {
		lineNumbers.append(`${i}
<br>`);
	}
	codeView.html(createTextLinks(hljs.highlightAuto(content).value));

	saveButton.prop("disabled", true);
	newButton.prop("disabled", false);
	copyButton.prop("disabled", false);

	editor.hide();
	codeViewPre.show();
	viewCounterLabel.show();

	viewCounter.text(views)
}

saveButton.click(function () {
	if (editor.val() === "") {
		return;
	}

	postPaste(editor.val(), function (err, res) {
		if (err) {
			addMessage(err["data"]["message"]);
		} else {
			window.history.pushState(null, null, `/~/${res["data"]["id"]}`);
			viewPaste(editor.val(), "0");
		}
	});
});

newButton.click(function () {
	window.location.href = "/";
});

copyButton.click(function () {
	const path = window.location.pathname;
	const split = path.split("/");
	const id = split[split.length - 1];

	getPaste(id, function (err, res) {
		if (err) {
			window.history.pushState(null, null, `/`);
			newPaste();
		} else {
			navigator.clipboard.writeText(res["data"]["content"]);
			addMessage("Copied paste to clipboard!")
		}
	});
});

function handlePopstate(event) {
	const path = window.location.pathname;

	if (path == "/") {
		newPaste();
	} else {
		const split = path.split("/");

		const id = split[split.length - 1];

		getPaste(id, function (err, res) {
			if (err) {
				window.history.pushState(null, null, `/`);
				newPaste();
			} else {
				viewPaste(res["data"]["content"], res["data"]["views"].toString());
			}
		});
	}
}

$(window).bind("popstate", function (event) {
	handlePopstate(event);
});

$(document).ready(function () {
	handlePopstate({ target: window });
});
