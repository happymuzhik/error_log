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
		<div class="content">			
			<cfoutput>#includeContent()#</cfoutput>			
		</div>
	</div>
</body>
</html>