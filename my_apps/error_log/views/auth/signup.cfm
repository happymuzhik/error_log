<div class="signup__form">
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="text" id="signup__login-input" placeholder="Login*" title="Login" />
	</div>
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="text" id="signup__name-input" placeholder="Name*" title="Name" />
	</div>
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="text" id="signup__surname-input" placeholder="Surname*" title="Surname" />
	</div>
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="password" id="signup__password-input" placeholder="Password*" title="Password" />
	</div>
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="password" id="signup__confirm-password-input" placeholder="Confirm password*" title="Confirm password" />
	</div>
	<div class="row no-padding no-margin signup__buttons">
		<div class="column-6">
			<button class="success expand" id="signup__submit-button">Submit</button>
		</div>
		<div class="column-6">
			<a href="<cfoutput>#urlFor(controller="auth", action="login")#</cfoutput>">
				<button class="expand">Back</button>
			</a>
		</div>		
	</div>
</div>
<cfoutput>
    #styleSheetLinkTag("signup/style")#
    #javaScriptIncludeTag("signup/bundle")#
</cfoutput>