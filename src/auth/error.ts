"use client";

export const errorMessages: { [key: string]: string } = {
  configuration:
    "There is a problem with the server configuration. Check if your options are correct.",
  accessdenied:
    "Usually occurs, when you restricted access through the signIn callback, or redirect callback",
  verification:
    "Related to the Email provider. The token has expired or has already been used",
  default: "Something went wrong while signing in. Please try again.",
};

export const signinErrorMessages: { [key: string]: string } = {
  oauthsignin: "Error in constructing an authorization URL (1, 2, 3)",
  oauthcallback:
    "Error in handling the response (1, 2, 3) from an OAuth provider.",
  oauthcreateaccount: "Could not create OAuth provider user in the database.",
  emailcreateaccount: "Could not create email provider user in the database.",
  callback: "Error in the OAuth callback handler route",
  oauthaccountnotlinked:
    "If the email on the account is already linked, but not with this OAuth account",
  emailsignin: "Sending the e-mail with the verification token failed",
  credentialssignin:
    "The authorize callback returned null in the Credentials provider. We don't recommend providing information about which part of the credentials were wrong, as it might be abused by malicious hackers.",
  sessionrequired:
    "The content of this page requires you to be signed in at all times. See useSession for configuration.",
  default: "Something went wrong while signing in. Please try again.",
};
