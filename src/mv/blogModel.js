var BlogModel = Backbone.Model.extend({
    defaults: {
       posts: []
    },
    
    initialize: function() {
        _.bindAll(this, "load");  
    },
    
    load: function() {
        var url = "blog/posts.json",
            scope = this;
        $.getJSON(url, function(data) {
            scope.set("posts", data.posts);
        });
    }
});