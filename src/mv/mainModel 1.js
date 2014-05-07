var MainModel = Backbone.Model.extend({
    defaults: {
        "numPages" : 3,
        "currentPage" : 0,
        "pageContent" : [],
    },

    initialize: function() {
        this.set("pageContent", 
            [
                {   header: 
                        { subtitle: "About me", 
                        description: "And this site"},
                    pageName: "frontPage"
                },
                {   header: 
                        { subtitle: "I develop for Windows devices and Web", 
                        description: "I love C#, Java, and JavaScript. Here's some stuff I've done:" },
                    pageName: "devPage"
                },
                {   header: 
                        { subtitle: "Acoustic or electronic", 
                        description: "I just like making nice sounds." },
                    pageName: "musicPage"
                }
            ]);
    }
});

$(function () {
    GRANT.mainModel = new MainModel();
    GRANT.mainView = new MainView({ model: GRANT.mainModel });
    GRANT.router = new GRANT.Router();
    Backbone.history.start();
});
