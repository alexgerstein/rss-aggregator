window.JST = window.JST || {};
var template = function(str){var fn = new Function('obj', 'var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push(\''+str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g,function(match,code){return "',"+code.replace(/\\'/g, "'")+",'";}).replace(/<%([\s\S]+?)%>/g,function(match,code){return "');"+code.replace(/\\'/g, "'").replace(/[\r\n\t]/g,' ')+"__p.push('";}).replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/\t/g,'\\t')+"');}return __p.join('');");return fn;};
window.JST['categories'] = template("<div class=\"row\">\n    <h2>Categories</h2>\n</div>\n\n<ul class=\"collection categories\">\n  <% categories.forEach(function(category) { %>\n    <a href=\"#/categories/<%= category.get('category') %>\" class=\"collection-item\">\n        <%= category.get('category') %>\n        <span class=\"badge\"><%=category.get('count')%></span>\n    </a>\n  <% }); %>\n</ul>");
<<<<<<< HEAD
<<<<<<< HEAD
window.JST['category'] = template("<h2><%= model.get('category') %></h2>\n\n<ul id=\"items\" class=\"list-group row\"></ul>");
window.JST['feed'] = template("<h2><%= model.get('title') %></h2>\n\n<ul id=\"items\" class=\"list-group row\"></ul>");
window.JST['feeds'] = template("<div class=\"row\">\n    <form class=\"new-feed\" id=\"add_feed_form\">\n      <div class=\"input-field col s12 m9\">\n        <label>Feed URL</label>\n        <input type=\"text\" id=\"url\">\n        <div class=\"url-errors\"></div>\n      </div>\n      <div class=\"input-field col s12 m3\">\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name='submit'>Add Feed</button>\n      </div>\n    </form>\n</div>\n\n<a class=\"waves-effect waves-light btn green darken-1\" href=\"#/categories\">Categories</a>\n\n<ul class=\"collection feeds\">\n  <% feeds.forEach(function(feed) { %>\n    <a href=\"#/feeds/<%= feed.get('id') %>\" class=\"collection-item\"><%= feed.get('title') %>\n      <span class=\"badge\"><%=feed.get('item_count')%></span>\n    </a>\n  <% }); %>\n</ul>");
window.JST['item-card'] = template("<div class=\"col m6\">\n  <div class=\"card\">\n    \n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator\" src=<%=item.get('image_url')%>>\n    </div>\n    \n    <div class=\"card-content\">\n      \n      <div class=\"card-title row activator grey-text text-darken-4\">\n        <div class=\"col s11\"><%= item.get('title') %></div>\n        <div class=\"col s1\"><i class=\"mdi-navigation-more-vert right\"></i></div>\n      </div>\n\n      <div class=\"card-action valign-wrapper row\">\n        <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n        <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n        <div class=\"col s2 center-align\" id=\"voting-buttons\">\n          <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-navigation-expand-less\"></i></div>\n          <div><%= item.get('voteSum') %></div>\n          <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-navigation-expand-more\"></i></div>\n        </div>\n      </div>\n\n    </div>\n    \n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">\n        <i class=\"mdi-navigation-close right\"></i>\n      </span>\n      <p class=\"flow-text\"><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></p>\n      <p class=\"flow-text\"><%= item.get('author') %></p>\n      <p class=\"flow-text summary\"><%= item.get('summary')%></p>\n    </div>\n  </div>\n</div>");
=======
window.JST['category'] = template("<h2><%= model.get('category') %></h2>\n\n<ul id=\"items\" class=\"list-group\"></ul>");
window.JST['feed'] = template("<h2><%= model.get('title') %></h2>\n\n<ul id=\"items\" class=\"list-group\"></ul>");
window.JST['feeds'] = template("<div class=\"row\">\n    <form class=\"new-feed\" id=\"add_feed_form\">\n      <div id=\"typeahead\" class=\"input-field col s12 m9\">\n      </div>\n      <div class=\"input-field col s12 m3\">\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name='submit'>Add Feed</button>\n      </div>\n    </form>\n</div>\n\n<a class=\"waves-effect waves-light btn green darken-1\" href=\"#/categories\">Categories</a>\n\n<ul class=\"collection feeds\">\n  <% feeds.forEach(function(feed) { %>\n    <a href=\"#/feeds/<%= feed.get('id') %>\" class=\"collection-item\"><%= feed.get('title') %>\n      <span class=\"badge\"><%=feed.get('item_count')%></span>\n    </a>\n  <% }); %>\n</ul>");
window.JST['item'] = template("<div class=\"card-panel lighten-4\">\n  <div class=\"card-content black-text\">\n    <span class=\"card-title\">\n      <span class=\"badge\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></span>\n      <span class=\"badge\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></span>\n      <h4><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></h4>\n    </span>\n    <span class=\"waves-effect waves-light btn-floating vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"mdi-action-thumb-down\"></i></span>\n    <span><%= item.get('voteSum') %></span>\n    <span class=\"waves-effect waves-light btn-floating vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"mdi-action-thumb-up\"></i></span>\n    <p><%= item.get('author') %></p>\n    <p><%= item.get('text') %></p>\n  </div>\n</div>");
<<<<<<< HEAD
window.JST['new_feed_form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
>>>>>>> Add typeahead search for feeds.
=======
window.JST['new_feed_form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
>>>>>>> fancier cards
=======
window.JST['category'] = template("<h2><%= model.get('category') %></h2>\n\n<ul id=\"items\" class=\"list-group row\"></ul>");
window.JST['feed'] = template("<h2><%= model.get('title') %></h2>\n\n<ul id=\"items\" class=\"list-group row\"></ul>");
window.JST['feeds'] = template("<div class=\"row\">\n    <form class=\"new-feed\" id=\"add_feed_form\">\n      <div class=\"input-field col s12 m9\">\n        <label>Feed URL</label>\n        <input type=\"text\" id=\"url\">\n        <div class=\"url-errors\"></div>\n      </div>\n      <div class=\"input-field col s12 m3\">\n        <button type=\"submit\" class=\"btn waves-effect waves-light\" name='submit'>Add Feed</button>\n      </div>\n    </form>\n</div>\n\n<a class=\"waves-effect waves-light btn green darken-1\" href=\"#/categories\">Categories</a>\n\n<ul class=\"collection feeds\">\n  <% feeds.forEach(function(feed) { %>\n    <p><a href=\"#/feeds/<%= feed.get('id') %>\" class=\"collection-item\"><%= feed.get('title') %></a></p>\n  <% }); %>\n</ul>");
<<<<<<< HEAD
<<<<<<< HEAD
window.JST['item'] = template("<div class=\"card\">\n  \n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=<%=item.get('image_url')%>>\n  </div>\n  \n  <div class=\"card-content\">\n    \n    <div class=\"card-title activator grey-text text-darken-4\">\n      <%= item.get('title') %>\n    </div>\n\n    <div class=\"card-action valign-wrapper row activator\">\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n      <div class=\"col s2 center-align\" id=\"voting-buttons\">\n        <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-hardware-keyboard-arrow-up\"></i></div>\n        <div><%= item.get('voteSum') %></div>\n        <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-hardware-keyboard-arrow-down\"></i></div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">\n      <i class=\"mdi-navigation-close right\"></i>\n    </span>\n    <p class=\"flow-text\"><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></p>\n    <p class=\"flow-text\"><%= item.get('author') %></p>\n    <p class=\"flow-text\"><%= item.get('summary')%></p>\n  </div>\n\n</div>");
window.JST['new_feed_form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
>>>>>>> Realign cards. Make voting look nicer.
=======
window.JST['item'] = template("<div class=\"card\">\n  \n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=<%=item.get('image_url')%>>\n  </div>\n  \n  <div class=\"card-content\">\n    \n    <div class=\"card-title activator grey-text text-darken-4\">\n      <%= item.get('title') %>\n      <i class=\"mdi-navigation-unfold-more right\"></i>\n    </div>\n\n    <div class=\"card-action valign-wrapper row activator\">\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n      <div class=\"col s2 center-align\" id=\"voting-buttons\">\n        <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-navigation-arrow-drop-up\"></i></div>\n        <div><%= item.get('voteSum') %></div>\n        <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-navigation-arrow-drop-down\"></i></div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">\n      <i class=\"mdi-navigation-close right\"></i>\n    </span>\n    <p class=\"flow-text\"><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></p>\n    <p class=\"flow-text\"><%= item.get('author') %></p>\n    <p class=\"flow-text summary\"><%= item.get('summary')%></p>\n  </div>\n\n</div>");
window.JST['new_feed_form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
>>>>>>> resize card reveal issues; bug with techcrunch adding extra issue on the bottom
=======
window.JST['item'] = template("<div class=\"card\">\n  \n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=<%=item.get('image_url')%>>\n  </div>\n  \n  <div class=\"card-content\">\n    \n    <div class=\"card-title activator grey-text text-darken-4\">\n      <%= item.get('title') %>\n      <i class=\"mdi-navigation-more-vert right\"></i>\n    </div>\n\n    <div class=\"card-action valign-wrapper row activator\">\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_1')%>\"><%=item.get('category_1')%></a></div>\n      <div class=\"col s5\"><a href=\"#/categories/<%=item.get('category_2')%>\"><%=item.get('category_2')%></a></div>\n      <div class=\"col s2 center-align\" id=\"voting-buttons\">\n        <div class=\"vote upvote <%= item.get('vote') == 1 ?  'active' : '' %>\"><i class=\"small mdi-navigation-expand-less\"></i></div>\n        <div><%= item.get('voteSum') %></div>\n        <div class=\"vote downvote <%= item.get('vote') == -1 ?  'active' : '' %> \"><i class=\"small mdi-navigation-expand-more\"></i></div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">\n      <i class=\"mdi-navigation-close right\"></i>\n    </span>\n    <p class=\"flow-text\"><a href=\"<%= '#/items/' + item.get('id') %>\"><%= item.get('title') %></a></p>\n    <p class=\"flow-text\"><%= item.get('author') %></p>\n    <p class=\"flow-text summary\"><%= item.get('summary')%></p>\n  </div>\n\n</div>");
window.JST['new_feed_form'] = template("<label>Feed Title or URL</label>\n<input class=\"typeahead\" type=\"text\" id=\"url\">\n<ul class=\"dropdown-menu\"></ul>\n<div class=\"url-errors\"></div>");
>>>>>>> replace button icons
