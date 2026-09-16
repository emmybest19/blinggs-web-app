/**
 * TEMPORARY — open access, for walking through the portal screens.
 *
 * While this is true the sign-in accepts anything: validation is skipped and
 * Sign In drops straight onto the dashboard, so the flow can be reviewed
 * without a backend. The form itself is untouched and still works properly the
 * moment this goes false.
 *
 * Turn it off before this ships. Left true in production, the dashboard is
 * open to anyone who presses the button — and `usePartnerSignIn` never calls
 * the auth endpoint at all, so real credentials would go unchecked.
 */
export const DEMO_ACCESS = true

/**
 * Partner portal sign-in transport.
 *
 * There is no auth endpoint yet, so this resolves locally. When the API lands,
 * only this function changes — the hook and components stay as they are.
 *
 * Note for whoever wires this up: `credentials` goes in the POST body over
 * HTTPS, never a query string, and the session belongs in an HttpOnly cookie
 * set by the server rather than anything this bundle can read.
 *
 * @param credentials { email, passcode, remember }
 */
export async function signInPartner(credentials) {
  // TODO: replace with a POST to the partner auth endpoint.
  await new Promise((resolve) => setTimeout(resolve, 700))

  // Returns only what a caller may hold onto — never the passcode back.
  return { email: credentials.email, remember: credentials.remember }
}
