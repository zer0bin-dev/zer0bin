const $ = require("jquery");
const hljs = require("highlight.js");
const cljs = require("clipboard");

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

  new cljs(`#${copyButton.attr("id")}`);
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
  //navigator.clipboard.writeText(codeView.text());
  addMessage("Copied paste to clipboard!");
});

function handlePopstate(event) {
  const path = window.location.pathname;

  if (path == "/") {
    // newPaste();
    let content = `
		FROM rustlang/rust:nightly-alpine3.15 AS builder

		RUN apk update && apk add --no-cache build-base openssl-dev gcompat libc6-compat bash
		WORKDIR /build/zer0bin
		
		COPY Cargo.toml .
		RUN echo "fn main() {}" >> dummy.rs
		RUN sed -i 's#src/main.rs#dummy.rs#' Cargo.toml
		ENV RUSTFLAGS=-Ctarget-feature=-crt-static
		RUN if [[ $(uname -m) =~ ^arm ]]; then CARGO_INCREMENTAL=1 cargo build --release --target aarch64-unknown-linux-musl; else CARGO_INCREMENTAL=1 cargo build --release; fi
		RUN rm dummy.rs && sed -i 's#dummy.rs#src/main.rs#' Cargo.toml
		COPY . .
		RUN CARGO_INCREMENTAL=1 cargo build --release
		
		FROM alpine:3.15
		
		WORKDIR /app
		RUN apk update && apk add --no-cache build-base openssl
		COPY --from=builder /build/zer0bin/target/release/zer0bin-bin .
		
		CMD ["/app/zer0bin-bin"]
		`;
    viewPaste(content, "0");
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
