const { I } = inject();

const locator = {
  playersList: {
    firstUserInList: '//div[contains(@data-testid, "0")]/div[@class="team-list-item-name"]',
    secondUserInList: '//div[contains(@data-testid, "1")]/div[@class="team-list-item-name"]',
    spectatorIcon: '//div[@class="team-list-item-avatar spectator-avatar f-center"]//img[@alt="spectator icon"]',
  },
  text: {
    username: '#username',
    linkCopiedToClipboard: '//*[text() = "Link copied to clipboard"]',
  },
  chessBoard: {
    board: '#chess-board',
  },
  chessPieces: {
    container: '$chess-pieces-container',
  },
  buttons: {
    copyLink: locate('//*[text() = "Copy Link"]').at(1),
    restartGame: '//button/span[contains(text(), "Restart game")]',
  },
};


export = {
  locator: locator,

  waitingForMorePlayersStatus: () => {
    I.see('Waiting for more players');
    I.seeElement(locator.chessBoard.board);
    I.dontSeeElement(locator.chessPieces.container);
    I.seeElement(locator.buttons.copyLink);
    I.seeElement(locator.buttons.restartGame);
  },

  checkCopyLinkButton: () => {
    I.waitForElement(locator.buttons.copyLink);
    I.click(locator.buttons.copyLink);
    I.waitForElement(locator.text.linkCopiedToClipboard);
    I.waitForInvisible(locator.text.linkCopiedToClipboard);
    I.click(locator.buttons.copyLink);
    I.waitForElement(locator.text.linkCopiedToClipboard);
  },
};