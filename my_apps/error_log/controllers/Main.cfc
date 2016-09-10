<cfcomponent extends="Controller">
    <cffunction name="editerror">
        <cfset title = "Error log/Error">
        <cfset statuses = model("status").findAll(returnAs="query")>
        <cfset urgency = model("urgency").findAll(returnAs="query")>
        <cfset criticalness = model("criticalness").findAll(returnAs="query")>
        <cfif IsDefined('params.id')>
            <cfset error_id = params.id>          
        <cfelse>
            <cfset error_id = 'null'>          
        </cfif>        
    </cffunction>
    <cffunction name="errorlist">
        <cfset title = "Error log/Error list">
        <cfquery name="errors" datasource="MySQL">  
            SELECT E.ID,
                   E.DESCRIPTION,
                   E.SHORT_DESCRIPTION,
                   USERS.LOGIN AS USER_CREATE,
                   DATE_FORMAT(E.CREATED_AT, '%d.%m.%Y %H:%i:%s') as CREATED_AT,
                   DATE_FORMAT(E.UPDATED_AT, '%d.%m.%Y %H:%i:%s') as UPDATED_AT,
                   S.NAME AS STATUS,
                   U.NAME AS URGENCY,
                   C.NAME AS CRITICALNESS  
            FROM `ERRORS` E,
                  `STATUSES` S,
                  `URGENCY` U,
                  `CRITICALNESS` C,
                  `USERS`
            WHERE E.STATUS_ID = S.ID
              AND E.URGENCY_ID = U.ID
              AND E.CRITICALNESS_ID = C.ID
              AND E.USER_ID = USERS.ID
        </cfquery>
    </cffunction>
    <cffunction name="userinfo">
         <cfset title = "Error log/User info">
    </cffunction>
</cfcomponent>