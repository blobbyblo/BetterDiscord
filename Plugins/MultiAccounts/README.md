# Multi Accounts [![Download][dbutton]][dlink]

Allows seamless switching between multiple Discord accounts.

![img1](https://github.com/omen0x8/BetterDiscord/blob/main/Plugins/MultiAccounts/img/Screenshot_35.png?raw=true)
![img2](https://github.com/omen0x8/BetterDiscord/blob/main/Plugins/MultiAccounts/img/Screenshot_36.png?raw=true)

## Installation

- Download the script from the button above
- Install [BetterDiscord](https://betterdiscord.app/)
- Navigate to `User Settings` > `Plugins` and click `Open Plugins Folder`
- Drag and drop the plugin file into the folder

## Usage

| Keybind      | Action |
| ----------- | ----------- |
| Alt + 0| Save an account. Pick a number 1-8 to save the account under. Press again to cancel.|
| Alt + 9   | Log out of the current account. Useful for when you want to switch to an alternate account prior to saving it.|
| Alt + 1-8   | Switch to a saved account from numbers 1-8.|

### Privacy Warning

The way this plugin works is by saving your login token. Using this token, it allows you to login without providing an email or password. With that being said, an attacker who steals your login token can use your Discord account as well. I currently DO NOT store tokens encrypted. Do not share your MultiAccounts.config.json with anyone, as this will leak all saved tokens.

Any accounts with 2FA enabled may have some issues with logging in where they will need to periodically re-save their account.

[dbutton]: https://img.shields.io/badge/Download-%233a71c1.svg?style=flat&logo=data:image/png;base64,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LtWY0ej3UvSQi5wA9pb7xzv9J9WYAi5L0UnOH2/17xS95BPPOP7rLT9/Ybzhxd9tpugoG5/+7Gd3UgAA0FA2ViDFTP9SuXeswGeKyX1mku/fbIxV+Foxua+NVdgQwBQEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAZkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAKYEQEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABDA/AkAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABzIAAfrHB5H4xVQA0IAAEgAAQwPQEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAhgAgLIs4NGnnitvXpWrASKojC81hnbM+XYio0mtu2kie0uTvZLp841qnvO+l5h4yciTFlAZBSRWk0C0oRIxSYBKUCkjyYB+YBIT0wC8hiRnElAnBYgbA6ROGHBkEkiylMLhjwF1AAV4CYuWyBklYjhtQVC3gFqgAoQifkWBMknYuK5BUDOiDheWADkOeLhoXlP9oi4npr35BHiY7t5TuqJBLhmXpMFIiFemMfkmEjinnlM7iAZfjZvySciKf40T8k3IgV8a16SV0RK6PbMO7LliFRxxDwj/UQa+N+8In+ItNDVmjekxhHpohswL0i/IzLB2xMmOW/iNpEpuvsV5yY567ziviOyw1u/u+ZOTXLM6WzX71tEMtdEyGpZV36gdgAAAABJRU5ErkJggg==
[dlink]: https://bobbyobrien.com/downloader?plugin=MultiAccounts
