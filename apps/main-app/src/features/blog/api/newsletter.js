/**
 * Newsletter sign-up transport.
 *
 * There is no backend endpoint yet, so this resolves locally. When the API
 * lands, only this function changes — the hook and the form stay as they are.
 */
export async function subscribeToNewsletter(email) {
  // TODO: replace with a POST to the newsletter endpoint.
  await new Promise((resolve) => setTimeout(resolve, 600))

  return { email }
}
