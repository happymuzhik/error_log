<div class="userinfo__form">
	<div class="row no-padding no-margin">
		<input value="<cfoutput>#session.user.login#</cfoutput>" autocomplete="off" type="text" id="userinfo__login-input" placeholder="Login" title="Login" />
	</div>
	<div class="row no-padding no-margin">
		<input value="<cfoutput>#session.user.name#</cfoutput>" autocomplete="off" type="text" id="userinfo__name-input" placeholder="Name" title="Name" />
	</div>
	<div class="row no-padding no-margin">
		<input value="<cfoutput>#session.user.surname#</cfoutput>" autocomplete="off" type="text" id="userinfo__surname-input" placeholder="Surname" title="Surname" />
	</div>
	<div class="row no-padding no-margin">
		<input value="<cfoutput>#session.user.user_pass#</cfoutput>" autocomplete="off" type="text" id="userinfo__password-input" placeholder="Password" title="Password" />
	</div>
	<div class="row no-padding no-margin userinfo__buttons">
		<button class="success expand" id="userinfo__save-button">Save</button>
	</div>
</div>
<cfoutput>
    #styleSheetLinkTag("userinfo/style")#
    #javaScriptIncludeTag("userinfo/bundle")#
</cfoutput>