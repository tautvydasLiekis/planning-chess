class CustomHelper extends Helper {
  // this is a custom steps helper to add custom functions to I object. i.e these functions you can use in your test: I.functionName();

  // Custom steps - use Playwright helper to access default I functions

  async fillInputField(locator: string, value: string | number | CodeceptJS.Secret) {
    const { Playwright } = this.helpers;
    locator = locator.replace('$', '[data-testid=') + '] input';

    await Playwright.waitForVisible(locator);
    await Playwright.fillField(locator, value);
  }

}

export = CustomHelper;
