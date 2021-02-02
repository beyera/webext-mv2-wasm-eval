import initWasm, { hello } from "./hello_wasm.js";

async function init() {
  await initWasm();
  chrome.runtime.onMessage.addListener(onRuntimeMessage);
}

function onRuntimeMessage(message, _sender, sendResponse) {
  if (message.name !== "greeting") return;
  sendResponse(hello());
}

init();
