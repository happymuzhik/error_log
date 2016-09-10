<cfparam name="statuses" type="query">
<cfparam name="urgency" type="query">
<cfparam name="criticalness" type="query">
<div class="row no-margin no-padding">
	<div class="column-6">
		<div class="row no-margin no-padding">
			<div class="column-8 error-form__title">Error info</div>
		</div>
		<div class="row">
			<div class="column-8">
				<div id="error-form" class="error-form" data-error-id="<cfoutput>#error_id#</cfoutput>">					
					<div class="row no-margin no-padding">
						<input id="error-form__short_description" type="text" autocomplete="off" placeholder="Short description" title="Short description" />
					</div>
					<div class="row no-margin no-padding">
						<textarea maxlength="250" id="error-form__description" autocomplete="off" placeholder="Description" title="Description" /></textarea>
					</div>	
					<div class="row no-margin no-padding">
						<select id="error-form__urgency" title="Urgency">
							<option value="null">Urgency</option>
							<cfloop query="urgency">
								<option value="<cfoutput>#urgency.ID#</cfoutput>"><cfoutput>#urgency.NAME#</cfoutput></option>
							</cfloop>
						</select>
					</div>
					<div class="row no-margin no-padding">
						<select id="error-form__criticalness" title="Criticalness">
							<option value="null">Criticalness</option>
							<cfloop query="criticalness">
								<option value="<cfoutput>#criticalness.ID#</cfoutput>"><cfoutput>#criticalness.NAME#</cfoutput></option>
							</cfloop>
						</select>
					</div>
					<div class="row no-margin no-padding">
						<button id="error-form__button-save" class="success expand">Save</button>
					</div>
				</div>
			</div>
			<div class="column-4">
				<div id="statuses__cont" class="status__cont hidden">
					<cfloop query="statuses">
						<button class="statuses__button expand" value="<cfoutput>#statuses.ID#</cfoutput>">
							<cfoutput>#statuses.NAME#</cfoutput>
						</button>
					</cfloop>
				</div>
			</div>
		</div>		
	</div>	
</div>
<div class="row no-padding no-margin">
	<div class="column-12">
		<div class="history__cont">
			<div class="history__header">		
				<div class="history__title">Error history log</div>		
			</div>	
			<table class="history__table">
				<thead>
					<tr>
						<th>Status</th>
						<th>Comment</th>
						<th>Created by user</th>
						<th>Updated</th>
					</tr>							
				</thead>
				<tbody id="history__elements-cintainer"></tbody>
			</table>
		</div>
	</div>		
</div>
<div id="comment__container" class="comment__container hidden">
	<div id="comment__background" class="comment__background" title="close"></div>
	<div class="comment">
		<div class="comment__textarea">
			<textarea id="comment__textarea" placeholder="Comment" title="Comment"></textarea>
		</div>
		<div class="row no-padding no-margin comment__buttons">
			<div class="column-6">
				<div id="comment__button-save" class="comment__button-save button expand success">Save</div>
			</div>
			<div class="column-6">
				<div id="comment__button-cancel" class="comment__button-cancel button expand">Cancel</div>
			</div>
		</div>		
	</div>
</div>
<cfoutput>
    #styleSheetLinkTag("editerror/style")#
    #javaScriptIncludeTag("editerror/bundle")#
</cfoutput>