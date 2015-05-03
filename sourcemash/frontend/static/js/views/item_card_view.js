Sourcemash.Views.ItemCardView = Backbone.View.extend({
    template: JST['item-card'],

    initialize: function(options) {
        _.bindAll(this, "savedToast", "voted");
        this.user = options.user;
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    events: {
	  	'click .upvote:not(.active)': 'upvote',
	  	'click .downvote:not(.active)': 'downvote',
	  	'click .mark-read': 'markRead',
        'click .saved': 'savedToggle'
	},

	upvote: function() {
       this.model.save({vote: 1, voteSum: this._getNewVoteSum(1)},
                        {success: this.voted});
    },

	downvote: function() {
		this.model.save({vote: -1, voteSum: this._getNewVoteSum(-1)},
                        {success: this.voted});
    },

    voted: function(item) {
        toast("Vote recorded!", 3000);

        if (item.get('vote') == -1) {
            mixpanel.track("Downvoted", { "Item Title": item.get('title'),
                                          "Feed Title": item.feed.get('title') })
        } else if (item.get('vote') == 1) {
            if (!item.feed.get('subscribed')) {
                this.showSubscribeModal({'source':'upvoted'});
            };
            mixpanel.track("Upvoted", { "Item Title": item.get('title'),
                                        "Feed Title": item.feed.get('title') })
        };
    },

    showSubscribeModal: function(options) {
        $('#subscribe-modal #unsubscribed-item-title').html(this.model.get('title'));
        $('#subscribe-modal #unsubscribed-feed-title').html(this.model.feed.get('title'));
        $('#subscribe-modal #unsubscribed-source-title').html(options['source']);
        $('#subscribe-modal').openModal();

        mixpanel.track("Subscribe Modal", { "Item Title": this.model.get('title'),
                                            "Feed Title": this.model.feed.get('title') });
    },

	_getNewVoteSum: function(vote) {
		return this.model.get('voteSum') + vote - this.model.get('vote')
	},

	markRead: function() {
		this.model.save({unread: false},
                        {success: _.bind(this.openCard, this)});

        this.model.feed.set({unread_count: this.model.feed.get('unread_count') - 1});
        this.model.categories.each(function (model) {
            model.set({unread_count: model.get('unread_count') - 1});
        });

        if (this.model.changedAttributes()) {
            mixpanel.people.increment("items read")
        }
	},

    savedToggle: function() {
        if (this.model.get('saved')) {
            this.model.save({saved: false}, {success: this.savedToast});
        } else {
            this.model.save({saved: true}, {success: this.savedToast});
        };

    },

    savedToast: function(item) {
        if (item.get('saved')) {
            toast("Saved!", 3000);
            if (!item.feed.get('subscribed')) {
                this.showSubscribeModal({'source':'saved'});
            };
            mixpanel.track("Saved", { "Item Title": item.get('title'),
                                      "Feed Title": item.feed.get('title') })
        } else {
            toast("Unsaved...", 3000)
        }
    },

    openCard: function() {
        this.$('.card-reveal').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
    },

    render: function() {
        var shownCategories;
        if (this.user.get('email')) {
            shownCategories = this.model.categories.filter(function(category) {
              return category.get("item_count") > 1;
            });
        } else {
            shownCategories = this.model.categories.first(Sourcemash.Views.ItemCardView.MAX_CATEGORIES_SHOWN)
        }

        this.$el.html(this.template({ item: this.model, categories: shownCategories }));
    }
}, {MAX_CATEGORIES_SHOWN: 5});
