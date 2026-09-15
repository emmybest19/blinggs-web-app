/**
 * Contact message transport.
 *
 * There is no backend endpoint yet, so this resolves locally. When the API
 * lands, only this function changes — the hook and the form stay as they are.
 */
export async function sendContactMessage(payload) {
  // TODO: replace with a POST to the support endpoint.
  await new Promise((resolve) => setTimeout(resolve, 700))

  return payload
}
