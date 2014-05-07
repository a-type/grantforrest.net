

var MainView = Backbone.View.extend({
	el: '#header',
	pageImages: {},
	pageDiv: null,
	pageHeaderDiv: null,
	buttons: null,

	initialize: function() {
		_.bindAll(this, "render", "goTo");

		this.pageImages = this.$el.find('.fit-image').hide()
		this.pageDiv = $('#pageContainer');
		this.pageHeaderDiv = $('#sectionHeader');
		this.buttons = $('.btn-clear');
		this.goTo(this.model, this.model.get("currentPage"));

		this.listenTo(this.model, "change:currentPage", this.goTo);
	},

	home: function() {
		this.model.set("currentPage", 0);
	},

	dev: function() {
		this.model.set("currentPage", 1);
	},

	music: function() {
		this.model.set("currentPage", 2);
	},

	render: function() {

		//good convention
		return this;
	},

	goTo: function(model, pageNo) {
		var previous = model.previous("currentPage");
        if (pageNo == 0) {
            pauseClouds = false;
            pauseLines = true;
            pauseSunset = true;
        } else if (pageNo == 1) {
            pauseClouds = true;
            pauseLines = false;
            pauseSunset = true;
        } else if (pageNo == 2) {
            pauseClouds = true;
            pauseLines = true;
            pauseSunset = false;
            
        }
		if (previous != pageNo) {
			
			this.pageImages.eq(previous).show();

			var dir = previous > pageNo ? -1 : 1;
			var nextPage_pos = this.$el.width() * dir;
			var curPage_target = -nextPage_pos;

			this.pageImages.eq(pageNo).show().css( "left" , nextPage_pos )
				.stop().animate({ left : "0px" }, 400, function() {
					var $this = jQuery(this);
					$this.addClass("activePage").animate({opacity:1});
				});

			this.pageImages.eq(previous).removeClass("activePage")
				.stop().animate({ left : "" + curPage_target + "px" }, 400, function() {
					$(this).hide();
				});

		} else {
			this.pageImages.eq(pageNo).show();
		}
		$.each(this.buttons, function() {
			$(this).blur();
		});
		this.buttons.eq(previous).removeClass("btn-force-select");
		this.buttons.eq(pageNo).addClass("btn-force-select");
		var pageContents = model.get("pageContent")[pageNo];
		if (pageContents.header !== undefined) {
			var headerTmplMarkup = $('#sectionHeaderTemplate').html().trim();
			var compiledHeaderTmpl = _.template(headerTmplMarkup, pageContents);
			this.pageHeaderDiv.html(compiledHeaderTmpl).show();
		} else {
			this.pageHeaderDiv.hide();
		}
		if (pageContents.pageName !== undefined) {
            this.pageDiv.children().each(function(i, el) {
                $(el).hide();
            });
            $("#" + pageContents.pageName).stop().css("opacity", 0).show().animate({opacity: 1}, 800);
    	} else {
    		this.pageDiv.hide();
    	}
	}
}); 

GRANT.Router = Backbone.Router.extend({

	routes: {
		"dev": "dev",
		"music": "music",
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
	}

});