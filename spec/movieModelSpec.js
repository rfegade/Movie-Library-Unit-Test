describe("A movie", function(){
    it("should exist", function () {
        expect(app.Models.Movie).toBeDefined();
    });
    it("should have certain default values", function () {
        const movie = new app.Models.Movie();
        expect(movie.get("name")).toEqual("Unnamed");
        expect(movie.get("rating")).toEqual(0);
        expect(movie.get("genre")).toEqual("Unnamed");
        expect(movie.get("comments")).toEqual("Unnamed");
        expect(movie.get("dateAdded")).toBeDefined();
    });
    it("should identify if it is a old movie", function () {
        const oldMovie = new app.Models.Movie(FIXTURES.movies.oldReleases);
        
        expect(oldMovie.oldMovie()).toBe(true);
    });
    it("should identify if it is a horror movie", function () {
        const movieGenre = new app.Models.Movie(FIXTURES.movies.oldReleases);
        
        expect(movieGenre.movieGenre()).toBe('Horror');
    });
    it("should identify if it is a action movie", function () {
        const movieGenre = new app.Models.Movie(FIXTURES.movies.newReleases);
        
        expect(movieGenre.movieGenre()).toBe('Action');
    });
   
})