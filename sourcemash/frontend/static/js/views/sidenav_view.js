Sourcemash.Views.SidenavView = Backbone.View.extend({
  template: JST['sidenav'],

  initialize: function (options) {
    this.user = options.user;
    this.feeds = options.feeds;
    this.categories = options.categories;
    this.loading = true;
    this.listenTo(this.feeds, 'sync change:subscribed change:unread_count', this.render);
    this.listenTo(this.categories, 'sync change:unread_count', this.render);
  },

  events: {
    'submit #login': 'loginSubmit',
  },

  loginSubmit: function(e){
    e.preventDefault();
    var formData = JSON.stringify($("#login").serializeObject());
    var posting = $.ajax({
                      type: "POST",
                      url: "/login",
                      data: formData,
                      success: this.showErrors,
                      contentType: "application/json"
                  });
  },

  showErrors: function(data) {
    var user = data.response.user;
    if (user) {
      mixpanel.track("Logged In");
      location.reload();
    };
    var errors = data.response.errors;
    if (errors) {
      errorMsg = errors.email || errors.password || errors.rememeber || {};
      $("#login-errors").html(errorMsg);
      $('#password').val('');
    }
  },

  render: function() {
    this.close();

    activeTab = $(".tab .active").text().toLowerCase() || "categories";

    var content = this.template({active: activeTab, current_user: this.user, feeds: this.feeds, categories: this.categories});
    this.$el.html(content);

    // Render loading vew
    this.loadingView = new Sourcemash.Views.LoadingView({loading: this.loading});
    this.$(".loading").html(this.loadingView.render().el);

    $('ul.tabs').tabs();
    return this;
  },

  close: function() {
    if (this.loadingView) {
        this.loadingView.remove();
        this.loadingView.unbind();
    };
  }
});
