function firstChar(str) {
  // Trim the string to remove leading and trailing spaces
  const trimmedStr = str.trim();

  // Check if the trimmed string is not empty
  if (trimmedStr !== '') {
    // Return the first character of the trimmed string
    return trimmedStr[0];
  } else {
    // Return an empty string if the input is empty or contains only spaces
    return '';
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
