var BlogView = Backbone.View.extend({
   initialize: function() {
       this.template = _.template($("#blogPostTemplate").html().trim());
       _.bindAll(this, "render");
       this.listenTo(this.model, "change:posts", this.render);
       return this;
   },
    
    render: function() {
        this.$el.empty();
        var posts = this.model.get("posts"),
            i = 0;
        for (i = 0; i < posts.length; i++) {
            var postEl = $(this.template(posts[i]));
            this.$el.append(postEl);
        }
        return this;
    }
});