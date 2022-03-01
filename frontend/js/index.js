let lineNumbers = $(".line-numbers");
let editor = $("#text-area");
let codeViewPre = $("#code-view-pre");
let codeView = $("#code-view");
let messages = $("#messages");

let saveButton = $("#save-button");
let newButton = $("#new-button");

let apiUrl = "http://127.0.0.1:8000";

function postPaste(content, callback) {
    var data = {
        content,
    };

    $.ajax({
        type: "POST",
        url: `${apiUrl}/p/n`,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(res) {
            callback(null, res);
        },
        error: function(xhr) {
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
        success: function(res) {
            callback(null, res);
        },
        error: function(xhr) {
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
    lineNumbers.html("<div>&gt;</div>");

    saveButton.prop("disabled", false);
    newButton.prop("disabled", true);

    editor.val("");

    editor.show();
    codeViewPre.hide();
}

function addMessage(message) {
    let msg = $(`<li>${message}</li>`);
    messages.prepend(msg);

    setTimeout(function() {
        msg.slideUp("fast", function() {
            $(this).remove();
        });
    }, 3000);
}

function createTextLinks(text) {
    return (text || '').replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, function(match, space, url) {
        var hyperlink = url;
        if (!hyperlink.match('^https?://')) {
            hyperlink = 'http://' + hyperlink;
        }
        return space + '<a href="' + hyperlink + '">' + url + '</a>';
    });
}

function viewPaste(content) {
    lineNumbers.html("");
    for (let i = 1; i <= content.split("\n").length; i++) {
        lineNumbers.append(`<div>${i}</div>`);
    }
    codeView.html(createTextLinks(content));
    editor.hide();
    codeViewPre.show();
}

saveButton.click(function() {
    if (editor.val() === "") {
        return;
    }

    postPaste(editor.val(), function(err, res) {
        if (err) {
            addMessage(err["data"]["message"]);
        } else {
            window.location.href = `/?id=${res["data"]["id"]}`;
        }
    });
});

newButton.click(function() {
    window.location.href = "/";
});

$(document).ready(function() {
    let id = new URLSearchParams(window.location.search).get("id");

    if (id == null) {
        newPaste();
        return;
    }

    getPaste(id, function(err, res) {
        if (err) {
            newPaste();
        } else {
            let content = res["data"]["content"];

            viewPaste(hljs.highlightAuto(content).value);

            saveButton.prop("disabled", true);
        }
    });
});