$(window).load(function() {
    GRANT.mainModel = new MainModel();
    GRANT.mainView = new MainView({ model: GRANT.mainModel });
    GRANT.router = new GRANT.Router();
    Backbone.history.start();

    $("#blocker").hide(300);
    $("#header").animate({opacity: 1}, 1000);
    $("#section").animate({opacity: 1}, 1000);
    GRANT.mainView.goTo(GRANT.mainModel, GRANT.mainModel.get("currentPage"));
});