// This isn't really an error.
export default class RedirectException {
  // Optionally set status code. Useful for SSR.
  constructor(status, location) {
    if (location) {
      this.status = status;
      this.location = location;
    } else {
      this.status = 302;
      this.location = status;
    }
  }
}
