const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {

  const titles = this.films.map(film => {
    return film.title;
  });
  return titles
};

Cinema.prototype.findByTitle = function (title) {
  // const foundTitle = this.films.filter((film) => {
  //   return film.title === title;
  // })
  // return foundTitle[0];
  const foundTitle = this.films.find((film) => {
    return film.title === title;
  })
  return foundTitle;
};
module.exports = Cinema;
