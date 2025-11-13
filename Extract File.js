function extractFile(path) {
    let file = path.slice(path.lastIndexOf('\\') + 1);
    let name = file.slice(0, file.lastIndexOf('.'));
    let extension = file.slice(file.lastIndexOf('.') + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\Linked.List.cs')