<div class="login__form">
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="text" id="login__login-input" placeholder="Login" title="Login" />
	</div>
	<div class="row no-padding no-margin">
		<input autocomplete="off" type="password" id="login__password-input" placeholder="Password" title="Password" />
	</div>
	<div class="row no-padding no-margin">
		<button id="login__submit-button" class="success expand">Submit</button>
	</div>
	<div class="row no-padding no-margin text-align-right">
		<a href="<cfoutput>#urlFor(controller="auth", action="signup")#</cfoutput>" class="login__registration-link info">Sign up</a>
	</div>
</div>
<cfoutput>
    #styleSheetLinkTag("login/style")#
    #javaScriptIncludeTag("login/bundle")#
</cfoutput>