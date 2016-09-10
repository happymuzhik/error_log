<cfscript>
	/*
		Here you can add routes to your application and edit the default one.
		The default route is the one that will be called on your application's "home" page.
	*/
addRoute(name="home", pattern="", controller="main", action="errorlist");
addRoute(name="main", pattern="main/editerror/[id]", controller="main", action="editerror");
addRoute(name="main", pattern="main/errorlist", controller="main", action="errorlist");
addRoute(name="main", pattern="main/userinfo", controller="main", action="userinfo");

addRoute(name="auth", pattern="auth/login", controller="auth", action="login");
addRoute(name="auth", pattern="auth/signup", controller="auth", action="signup");

addRoute(name="request", pattern="request/[action]", controller="request", action="");
</cfscript>