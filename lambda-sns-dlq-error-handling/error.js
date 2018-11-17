// error.js
module.exports.handler = async (event) => {
  console.error("Pulled from DLQ: "+event)
}