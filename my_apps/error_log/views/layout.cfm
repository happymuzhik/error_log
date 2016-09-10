<!DOCTYPE html>
<html>
<head>
	<title><cfoutput>#title#</cfoutput></title>
	<meta charset="utf-8">
	<link rel="SHORTCUT ICON" href="/my_apps/error_log/images/favicon.png" type="image/x-icon" />
	<cfoutput>
    	#styleSheetLinkTag("normalize")#
    	#styleSheetLinkTag("common")#
    	#javaScriptIncludeTag("common")#
    	#javaScriptIncludeTag("jquery.min")#
	</cfoutput>
</head>
<body>
	<div class="wrapper">
		<div class="header"><cfoutput>#title#</cfoutput></div>
		<div class="user-info">
			<span class="user-info__login">Hello, <cfoutput>#session.user.name#</cfoutput>!</span>
			<a href="<cfoutput>#urlFor(controller="auth", action="logout")#</cfoutput>" class="default">Logout</a>
		</div>
		<div class="content">			
			<div class="left-col">
				<div class="menu">
					<a href="<cfoutput>#urlFor(controller="main", action="editerror")#</cfoutput>" class="menu__block">Add error</a>
					<a href="<cfoutput>#urlFor(controller="main", action="errorlist")#</cfoutput>" class="menu__block">Error list</a>
					<a href="<cfoutput>#urlFor(controller="main", action="userinfo")#</cfoutput>" class="menu__block">User info</a>
				</div>
			</div>
			<div class="right-col">
				<cfoutput>#includeContent()#</cfoutput>			
			</div>
		</div>
	</div>
</body>
</html>