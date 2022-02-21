# Multi Accounts

Allows seamless switching between multiple Discord accounts.

## Usage

| Keybind      | Action |
| ----------- | ----------- |
| Alt + 0| Save an account. Pick a number 1-8 to save the account under. Press again to cancel.|
| Alt + 9   | Log out of the current account. Useful for when you want to switch to an alternate account prior to saving it.|
| Alt + 1-8   | Switch to a saved account from numbers 1-8.|

## Privacy Warning

The way this plugin works is by saving your login token. Using this token, it allows you to login without providing an email or password. With that being said, an attacker who steals your login token can use your Discord account as well. I currently DO NOT store tokens encrypted. Do not share your MultiAccounts.config.json with anyone, as this will leak all saved tokens.

Any accounts with 2FA enabled may have some issues with logging in where they will need to periodically re-save their account.
