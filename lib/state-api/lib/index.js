export default class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(array) {
    return array.reduce((acc,current) => {
      acc[current.id] = current;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
  getState() {
    return {
      articles: this.getArticles(),
      authors: this.getAuthors(),
    };
  }
}