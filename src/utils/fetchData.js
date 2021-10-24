let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("error ", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;

// 0   UNSENT  open() has not been called yet.
// 1   OPENED  send() has been called.
// 2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
// 3   LOADING Downloading; responseText holds partial data.
// 4   DONE    The operation is complete.
