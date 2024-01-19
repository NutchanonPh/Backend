const fs = require("fs/promises");
// function readFileJSON
// export 2
exports.readFileJSON = async (fileName) => {
    const data = await fs.readFile(fileName, "utf-8");
    return data;
};
// function writeFileJSON
exports.writeFileJSON = async (fileName, data) => {
    await fs.writeFile(fileName, data);
};
// export 1
// module.exports = {readFileJSON, writeFileJSON};