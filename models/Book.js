module.exports = (model, Schema) => {

  const Book = new Schema ({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String,
    publishedDate: String
  })

  return model('Book', Book)
}