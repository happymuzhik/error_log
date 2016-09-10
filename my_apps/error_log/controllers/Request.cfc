<cfcomponent extends="Controller">
	<cffunction name="init">
	    <cfset provides("json")>
	</cffunction>
    <cffunction name="saveError">
        <cfset newError = model("error").new()>
        <cfset newError.SHORT_DESCRIPTION = params.short_description>
		<cfset newError.DESCRIPTION = params.description>
		<cfset newError.CRITICALNESS_ID = params.criticalness_id>
        <cfset newError.URGENCY_ID = params.urgency_id>
		<cfset newError.USER_ID = session.user.id>
		<cfset newError.save()>
		<cfset result = { result: 'true', data: newError }>
        <cfset renderWith(result)>
    </cffunction>
    <cffunction name="getError">
        <cfset error = model("error").findByKey(params.id)>
        <cfquery name="error_history" datasource="MySQL">  
            SELECT S.NAME AS STATUS,
            	   EH.COMMENT,
                   DATE_FORMAT(EH.UPDATED_AT, '%d.%m.%Y %H:%i:%s') as UPDATED,
                   U.LOGIN as USERLOGIN
            FROM `ERROR_HISTORY` EH, `STATUSES` S, USERS U
            WHERE EH.ERROR_ID = #params.id#
              AND EH.STATUS_ID = S.ID
              AND EH.USER_ID = U.ID
            ORDER BY EH.UPDATED_AT ASC
        </cfquery>
		<cfset result = { result: 'true', data: { error: error, error_history: error_history } }>
        <cfset renderWith(result)>
    </cffunction>
    <cffunction name="setStatus">
        <cfset error = model("error").findByKey(params.error_id)>
        <cfset error.status_id = params.status_id>
        <cfset error.save()>
        <cfset error_history = model("error_history").new()>
        <cfset error_history.status_id = params.status_id>
        <cfset error_history.error_id = params.error_id>
        <cfset error_history.user_id = session.user.id>
        <cfset error_history.comment = params.comment>
        <cfset error_history.save()>
        <cfquery name="error_history_query" datasource="MySQL">  
            SELECT S.NAME AS STATUS,
                   EH.COMMENT,
                   DATE_FORMAT(EH.UPDATED_AT, '%d.%m.%Y %H:%i:%s') as UPDATED,
                   U.LOGIN
            FROM `ERROR_HISTORY` EH, `STATUSES` S, USERS U
            WHERE EH.ID = #error_history.id#
              AND EH.STATUS_ID = S.ID
              AND EH.USER_ID = U.ID
            ORDER BY EH.UPDATED_AT ASC
        </cfquery>
        <cfset result = { result: 'true', data: error_history_query }>
        <cfset renderWith(result)>
    </cffunction>
    <cffunction name="signup">
        <cfset user = model("user").findOne(where="UPPER(LOGIN) = UPPER('#params.login#')")>
        <cfif IsObject(user)>
            <cfset result = { result: 'false', data: 'This login is already exists!' }>
        <cfelse>
            <cfset newUser = model("user").new()>
            <cfset newUser.login = params.login>
            <cfset newUser.name = params.name>
            <cfset newUser.surname = params.surname>
            <cfset newUser.user_pass = params.password>
            <cfset newUser.save()>
            <cfset result = { result: 'true', data: newUser }>            
        </cfif>
        <cfset renderWith(result)>
    </cffunction>
    <cffunction name="signin">
        <cfset user = model("user").findOne(where="USER_PASS = '#params.password#' AND UPPER(LOGIN) = UPPER('#params.login#')")>
        <cfif IsObject(user)>
            <cfset session.user = user>
            <cfset result = { result: 'true', data: 'Successfull sign in' }>
        <cfelse>
            <cfset result = { result: 'false', data: 'Wrong login or password!' }>
        </cfif>
        <cfset renderWith(result)>
    </cffunction>
    <cffunction name="saveuserinfo">
        <cfset user = model("user").findOne(where="UPPER(LOGIN) = UPPER('#params.login#')")>
        <cfif IsObject(user) AND session.user.login NEQ params.login>
            <cfset result = { result: 'false', data: 'This login is already exists!' }>
        <cfelse>
            <cfset user = model("user").findByKey(session.user.id)>        
            <cfset user.login = params.login>
            <cfset user.name = params.name>
            <cfset user.surname = params.surname>
            <cfset user.user_pass = params.password>
            <cfset user.save()>
            <cfset session.user = user>
            <cfset result = { result: 'true', data: user }>
        </cfif>        
        <cfset renderWith(result)>
    </cffunction>
</cfcomponent>

