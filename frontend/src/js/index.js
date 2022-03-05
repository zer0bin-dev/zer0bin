const jquery = require("jquery");
const hljs = require("highlight.js");

import {
    SaveOutlined,
    FileAddOutlined,
    GithubOutlined
} from '@ant-design/icons-svg';

window.$ = window.jQuery = jquery;

const lineNumbers = $(".line-numbers");
const editor = $("#text-area");
const codeViewPre = $("#code-view-pre");
const codeView = $("#code-view");
const messages = $("#messages");

const saveButton = $("#save-button");
const newButton = $("#new-button");

const apiUrl = "https://stepbro.voring.me/api" //"http://localhost:8000";

hljs.highlightAll();

const svgSave = renderIconDefinitionToSVGElement(SaveOutlined, {
    extraSVGAttrs: {
        fill: 'currentColor'
    }
});

const svgFileAdd = renderIconDefinitionToSVGElement(FileAddOutlined, {
    extraSVGAttrs: {
        fill: 'currentColor'
    }
});

const svgGithub = renderIconDefinitionToSVGElement(GithubOutlined, {
    extraSVGAttrs: {
        fill: 'currentColor'
    }
});

console.log(svgSave)
console.log(svgFileAdd)
console.log(svgGithub)


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
        crossDomain: true,
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
    return (text || "").replace(
        /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
        function(match, space, url) {
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
            window.location.href = `/${res["data"]["id"]}`;
        }
    });
});

newButton.click(function() {
    window.location.href = "/";
});

$(document).ready(function() {
    let path = window.location.pathname;

    if (path == "/") {
        newPaste();
    } else {
        let id = path.substring(1, path.length);

        getPaste(id, function(err, res) {
            if (err) {
                newPaste();
            } else {
                let content = res["data"]["content"];
                viewPaste(hljs.highlightAuto(content).value);
                saveButton.prop("disabled", true);
            }
        });
    }
});