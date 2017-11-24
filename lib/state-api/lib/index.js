export default class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };

  }
  mapIntoObject(array) {
    return array.reduce((acc,current) => {
      acc[current.id] = current;
      return acc;
    }, {});
  }
  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }
  getState = () => {
    return this.data;
  }
}