/**
 * Institution registration transport.
 *
 * There is no endpoint yet, so this resolves locally. When the API lands, only
 * this function changes — the hook and components stay as they are.
 *
 * @param selection { types, universities, churches, addedChurch, customName }
 */
export async function registerInstitutions(selection) {
  // TODO: replace with a POST to the partner institutions endpoint.
  await new Promise((resolve) => setTimeout(resolve, 700))

  return selection
}
