function initMV() {
    defineMainView();
    GRANT.mainModel = new MainModel();
    GRANT.mainView = new MainView({ model: GRANT.mainModel });

    GRANT.Router = Backbone.Router.extend({

        routes: {
            "dev": "dev",
            "music": "music",
            "thoughts": "thoughts",
            "": "home"
        },

        home: function() {
            GRANT.mainView.home();
        },

        dev: function() {
            GRANT.mainView.dev();
        },

        music: function() {
            GRANT.mainView.music();
        },
        
        thoughts: function() {
            GRANT.mainView.thoughts();   
        }

    });
    
    GRANT.router = new GRANT.Router();
    Backbone.history.start();

    $("#blocker").hide(300);
    $("#header").animate({opacity: 1}, 1000);
    $("#section").animate({opacity: 1}, 1000);
    GRANT.mainView.goTo(GRANT.mainModel, GRANT.mainModel.get("currentPage"));
}