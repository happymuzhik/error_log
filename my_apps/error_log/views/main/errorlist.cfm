<cfparam name="errors" type="query">
<div class="error-list__container">
	<!--- <div class="error-list__title">Error list</div> --->
	<table class="error-list__table">
		<thead>
			<tr>
				<th data-type="string" data-direction="desc">Status</th>
				<th data-type="string" data-direction="desc">Description</th>
				<th data-type="string" data-direction="desc">Short<br>description</th>
				<th data-type="string" data-direction="desc">Criticalness</th>
				<th data-type="string" data-direction="desc">Urgency</th>				
				<th data-type="string" data-direction="desc">Created by user</th>
				<th data-type="string" data-direction="desc">Created</th>
				<th data-type="string" data-direction="desc">Updated</th>
				<th></th>
			</tr>
		</thead>
		<tbody id="error-list__rows">
			<cfif #errors.recordcount# EQ 0>
				<tr>
					<td colspan="8" align="center">No errors yet</td>
				</tr>
			</cfif>
			<cfloop query="errors">
				<tr>
					<td><cfoutput>#errors.STATUS#</cfoutput></td>
					<td class="error-list__desc-col"><cfoutput>#errors.DESCRIPTION#</cfoutput></td>
					<td class="error-list__desc-col"><cfoutput>#errors.SHORT_DESCRIPTION#</cfoutput></td>
					<td><cfoutput>#errors.CRITICALNESS#</cfoutput></td>
					<td><cfoutput>#errors.URGENCY#</cfoutput></td>
					<td><cfoutput>#errors.USER_CREATE#</cfoutput></td>
					<td><cfoutput>#errors.CREATED_AT#</cfoutput></td>
					<td><cfoutput>#errors.UPDATED_AT#</cfoutput></td>
					<td>
						<a class="info" href="<cfoutput>#urlFor(controller="main", action="editerror")#/#errors.ID#</cfoutput>">Info</a>
					</td>
				</tr>
			</cfloop>
		</tbody>
	</table>
</div>
<cfoutput>
    #styleSheetLinkTag("errorlist/style")#
    #javaScriptIncludeTag("errorlist/bundle")#
</cfoutput>