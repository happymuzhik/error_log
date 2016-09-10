<cfcomponent extends="Controller">
    <cffunction name="login">
        <cfset title = "Error log/Login">
        <cfset usesLayout("./../auth_layout")>      
    </cffunction>
    <cffunction name="signup">
        <cfset title = "Error log/Sign up">
        <cfset usesLayout("./../auth_layout")>      
    </cffunction>
    <cffunction name="logout">
        <cfset StructDelete(session, "user")>
        <cfset redirectTo(controller="auth", action="login")>
    </cffunction>
</cfcomponent>