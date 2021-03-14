
var app = window.app || {};
app.Collections = app.Collections || {};
app.Collections.Movies = Backbone.Collection.extend({
    //model: app.Models.Movie,
    getMovieName: function() {
        return _uniq(this.pluck("name"));
    },
    getNewestForName: function(rName) {
        const results = this.where({name: rName});
        return _.last(results)
    }
})