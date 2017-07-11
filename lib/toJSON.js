function toJSON(schema){
  schema.set('toJSON', {
    virtuals: true,
    transform(doc, json){
      delete json.__v;
      delete json._id;
      return json;
    }
  });
}

module.exports = toJSON;
