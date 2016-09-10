<cfcomponent extends="Wheels">
	<cffunction name="init">
		<cfset filters(through="checkLogin", except="login, signup")>
	</cffunction>
	<cffunction name="checkLogin">
		<cfif NOT StructKeyExists(session, "user")>
			<cfset redirectTo(controller="auth", action="login")>
		</cfif>		
	</cffunction>
</cfcomponent>