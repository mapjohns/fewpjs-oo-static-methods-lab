class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.split(" ").map(a => a.replace(/[^A-Za-z0-9-']+/g, '')).join(" ");
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newString = string.split(" ").map(function(a) {
      if (words.includes(a) === true) {
        return a
      }
      else {
        return a[0].toUpperCase() + a.slice(1)
      }
    }
    ).join(" ")
    newString = newString[0].toUpperCase() + newString.slice(1)
    return newString
  }
}