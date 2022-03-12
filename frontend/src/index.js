const lineNumbers = $(".line-numbers");
const editor = $("#text-area");
const codeViewPre = $("#code-view-pre");
const codeView = $("#code-view");
const messages = $("#messages");

const saveButton = $("#save-button");
const newButton = $("#new-button");

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

function viewPaste(content) {
	lineNumbers.html("");
	for (let i = 1; i <= content.split("\n").length; i++) {
		lineNumbers.append(`${i}
<br>`);
	}
	codeView.html(createTextLinks(content));
	editor.hide();
	codeViewPre.show();
}

saveButton.click(function () {
	if (editor.val() === "") {
		return;
	}

	postPaste(editor.val(), function (err, res) {
		if (err) {
			addMessage(err["data"]["message"]);
		} else {
			window.location.href = `/${res["data"]["id"]}`;
		}
	});
});

newButton.click(function () {
	window.location.href = "/";
});

$(document).ready(function () {
	const path = window.location.pathname;

	if (path == "/") {
		newPaste();
	} else {
		const id = path.substring(1, path.length);

		getPaste(id, function (err, res) {
			if (err) {
				newPaste();
			} else {
				const content = res["data"]["content"];
				viewPaste(hljs.highlightAuto(content).value);
				saveButton.prop("disabled", true);
			}
		});
	}
});
