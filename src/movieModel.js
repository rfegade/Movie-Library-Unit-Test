
var app = window.app || {};
app.Models = app.Models || {};
app.Models.Movie = Backbone.Model.extend({
    defaults: function () {
        return {
            name: "Unnamed",
            dateAdded: Date.now(),
            genre: "Unnamed",
            comments: "Unnamed",
            rating: 0,
        };
    },

    oldMovie: function () {
        return this.checkForMovie('isOld');
    },
    movieGenre: function () {
        return this.checkForMovieGenre('genre');
    },

    checkForMovie: function () {
        const movie = this.get("isOld");

        if (movie == true) {
            return true;
        }
        
        return false;
    },
    checkForMovieGenre: function () {
        const genre = this.get("genre");
        return genre;
    }
});
