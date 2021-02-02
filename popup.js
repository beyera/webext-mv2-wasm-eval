chrome.runtime.sendMessage({ name: "greeting" }, function (response) {
  document.getElementById("popupText").innerText = response;
});
