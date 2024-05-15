/**
 * The function validates the URL
 * @param {*} url path to the file
 * @returns boolean
 */
function isValidURL(url: string) {
  const urlRegex = /^(https?|ftps?|sftp?):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
}

export { isValidURL };