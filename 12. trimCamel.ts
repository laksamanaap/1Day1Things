export function trimCamelCase(str: string): string {
    const words = str.split(" ")

    for(let i = 0; i < words.length; i++) {
      if(words[i]) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase() 
      }
    }

    return words.join("").trim()
}

trimCamelCase("Laksamana arya putra") // => LaksamanaAryaPutra
