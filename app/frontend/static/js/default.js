$( document ).ready(function(){
	$(".button-collapse").sideNav();
});

list_feeds = function() {
	console.log("FEEDS HERE");

	ajax_url = "/api/subscriptions";
	var posting = $.get(ajax_url);
	posting.success(function(data) {
		subscriptions = data.subscriptions;

		for (var i = 0; i < subscriptions.length; i++) {
			var feed_uri = "/api/feeds/" + (subscriptions[i].uri).split("/")[3];
			console.log(feed_uri);
			$("#feeds").append(set_feed(feed_uri));
		}
	})
	return false;
};

set_feed = function(feed_uri) {
	var posting = $.get(feed_uri);
	posting.success(function(data) {
		feed = data.feed;
		console.log(feed.title);
		return "<a href=" + feed_uri + ">" + feed.title + "</a>";	
	})
	return "<a href=" + feed_uri + ">" + feed_uri + "</a>";
}