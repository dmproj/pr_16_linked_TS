function setCookie(name, value, options = {}) {

  console.log("1 options",options)
  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  };
  console.log("2 options",options)

  if (options.expires instanceof Date) {
    console.log("options expires",options.expires)
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  console.log("1 updatedCookie",updatedCookie)

  for (let optionKey in options) {
    console.log("optionKey", optionKey)
    updatedCookie += "; " + optionKey;
    console.log("2 updatedCookie",updatedCookie)
    let optionValue = options[optionKey];
    console.log("optionValue",optionValue)
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
      console.log("3 updatedCookie",updatedCookie)
    }
  }

  //document.cookie = updatedCookie;
}

// Example of use:
setCookie('user', 'John', {secure: true, 'max-age': 3600});