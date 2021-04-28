const Config = {
  isEmpty: (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  },
  truncateString: (str, num = 20) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }

    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + "...";
  },
};

export default Config;
