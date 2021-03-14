describe("A movie collection", function () {
    it("should exist", function () {
        expect(app.Collections.Movies).toBeDefined();
    });

    it("should contain movies", function () {
        const movies = app.Collections.Movies([FIXTURES.movies.newReleases, FIXTURES.movies.oldReleases]);
        expect(movies).toBeTruthy();
    });
});