<ul class="sidenav-element col s12">
  <li class='logo'><a href="/" class="brand-logo">Sourcemash</a></li>

  <div class="lists">
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s6"><a class="<%= active == 'categories' ? 'active' : ''%>" href="#categories-list">Categories</a></li>
          <li class="tab col s6"><a class="<%= active == 'feeds' ? 'active' : ''%>" href="#feeds-list">Feeds</a></li>
        </ul>
      </div>
      <ul id="categories-list" class="collection col s12">
        <% categories.forEach(function(category) { %>
          <a href="/#categories/<%= category.get('category') %>"><li class="row collection-item">
              <span class="col s7 truncate"><%= category.get('category') %></span>
              <span class="badge col s2"><%=category.get('count')%></span>
              <% if (category.get('unread_count') > 0) { %>
                <span class="new badge col s3"><%=category.get('unread_count')%></span>
              <% }; %>
          </li></a>
        <% }); %>
        <% if (!feeds.where({subscribed: true}).length) { %>
          <a href="/#browse"><li class="row center-align collection-item">
            <i class="mdi-action-view-module"></i>
            Browse Feeds
          </li></a>
        <% }; %>
      </ul>
      <ul id="feeds-list" class="collection col s12">
        <% feeds.where({subscribed: true}).forEach(function(feed) { %>
          <a href="/#feeds/<%= feed.get('id') %>"><li class="row collection-item">
          <span class="col s7 truncate"><%= feed.get('title') %></span>
          <span class="badge col s2"><%=feed.get('item_count')%></span>
          <% if (feed.get('unread_count') > 0) { %>
            <span class="new badge col s3"><%=feed.get('unread_count')%></span>
          <% }; %>
          </li></a>
        <% }); %>
        <% if (!feeds.where({subscribed: true}).length) { %>
          <a href="/#browse"><li class="row center-align collection-item">
            <i class="mdi-action-view-module"></i>
            Browse Feeds
          </li></a>
        <% }; %>
      </ul>
    </div>
  </div>
</ul>

<ul class="user-auth sidenav-element col s12">
  <% if (current_user.get('email')) { %>
    <ul class="navigation-btns collection">
      <a href="/#browse"><li class="collection-item"><i class="mdi-action-view-module"></i>Browse</li></a>
      <a href="/#saved"><li class="collection-item"><i class="mdi-action-bookmark"></i>Saved</li></a>
      <a href="/#profile"><li class="collection-item"><i class="mdi-social-person"></i>Profile</li></a>
      <a href="/logout"><li class="collection-item"><i class="mdi-action-exit-to-app"></i>Logout</li></a>
    </ul>
  <% } else { %>
    <form id="login" action="/login" method="POST" name="login_user_form">
      <div class="input-field">
        <input class="validate" id="email" name="email" type="email">
        <label for="email" class="">Email Address</label>
        <div class="errors"></div>
      </div>
      <div class="input-field">
        <input class="validate" id="password" name="password" type="password">
        <label for="password">Password</label>
        <div class="errors"></div>
      </div>

      <div class="row">
        <div class="input-field col s5">
          <button type="submit" class="btn waves-effect waves-light">Login</button>
        </div>
        <div class="input-field col s7">
          <input class="validate" id="remember" name="remember" type="checkbox">
          <label for="remember">Remember Me</label>
          <div class="errors"></div>
        </div>
      </div>
    </form>
    <li class="center-align"><a href="/register">Need an account? <u>Register</u></a></li>
  <% } %>
</ul>

<script>
  mixpanel.track_forms("#login", "Logged In");
</script>