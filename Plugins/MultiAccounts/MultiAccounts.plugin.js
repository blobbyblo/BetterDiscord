/**
 * @name MultiAccounts
 * @author azrael
 * @authorLink https://bobbyobrien.com/
 * @authorId 933831165540966442
 * @version 1.0.0
 * @description Allows seamless switching between multiple Discord accounts.
 * @website https://github.com/omen0x8/BetterDiscord
 * @source https://github.com/omen0x8/BetterDiscord/tree/main/Plugins/MultiAccounts
 * @updateUrl https://raw.githubusercontent.com/omen0x8/BetterDiscord/main/Plugins/MultiAccounts/MultiAccounts.plugin.js
 */
 
module.exports = (() => {
	
	// Initialize the config
	const config = {
		info: {
			name: "MultiAccounts",
			authors: [
				{
					name: "azrael",
					discord_id: "933831165540966442",
					github_username: "omen0x8",
					twitter_username: "omen0x8"
				}
			],
			version: "1.0.0",
			description: "Allows seamless switching between multiple Discord accounts.",
			github: "https://github.com/omen0x8/BetterDiscord/tree/main/Plugins/MultiAccounts",
			github_raw: "https://raw.githubusercontent.com/omen0x8/BetterDiscord/main/Plugins/MultiAccounts/MultiAccounts.plugin.js"
		},
		changelog: [
			{
				title: "New",
				type: "added",
				items: ["Switch between accounts!"]
			}
		]
	};
	
	// Check if ZeresPluginLibrary is installed
	return !global.ZeresPluginLibrary ? class {
		constructor() { 
			this._config = config;
		}
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return config.info.description + "**[ZeresPluginLibrary](https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js) is required**";
		}
		getVersion() {
			return config.info.version;
		}
		
		load() {
			BdApi.showConfirmationModal(
				"Dependency Missing", 
				[`A dependency needed for ${config.info.name} is missing. Would you like to install it?`], {
					confirmText: "Install",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	} : (([Plugin, Api]) => {
		
		var keyMap = {};
		var accounts = [];
		var savePrompt = false;
		
		const plugin = (Plugin, Api) => {
			const { PluginUtilities, DiscordModules, WebpackModules, Toasts } = Api;
			const { UserStore, UserInfoStore } = DiscordModules;
			const AccountManager = WebpackModules.getByProps("loginToken");
			
			return class MultiAccounts extends Plugin {
				onStart() {
					accounts = PluginUtilities.loadSettings(config.info.name, accounts);
					if (this.accounts === undefined) {
						BdApi.saveData(config.info.name, "accounts", []);
					}
					
					document.addEventListener("keydown", this.keyEvent);
					document.addEventListener("keyup", this.keyEvent);
				}
				onStop() {
					document.removeEventListener("keydown", this.keyEvent);
					document.removeEventListener("keyup", this.keyEvent);
				}
				
				keyEvent(key) {
					key = key || event;
					keyMap[key.keyCode] = key.type == 'keydown';
					
					
					if (keyMap[18]) {
						// check keys 1-8
						for (let idx = 1; idx < 9; idx++) { // account 1 - 8 num 1 - 8
							if (keyMap[48 + idx] && !savePrompt) {
								var account = accounts[idx];
								if (account !== undefined) {
									if (account.id == UserStore.getCurrentUser().id) {
										Toasts.show("Already using account " + account.name + ". Press Alt+9 to logout.", {type: Toasts.ToastTypes.warning});
									}
									else {
										Toasts.show("Switched to account " + account.name + ".", {type: Toasts.ToastTypes.info})
										AccountManager.loginToken(account.token);
									}
								}
								else {
									Toasts.show("Account " + idx + " is not saved! Press Alt+0 to save.", {type: Toasts.ToastTypes.warning})
								}
								
								keyMap = {};
							}
						}
						
						// check key 0
						if (keyMap[48]) {
							if (savePrompt) {
								Toasts.show("Cancelled save!", {type: Toasts.ToastTypes.info})
								savePrompt = false;
							}
							else {
								Toasts.show("Select the number 1-8 you would like to save this account as or Alt+0 again to cancel.", {type: Toasts.ToastTypes.info})
								savePrompt = true;
							}
						}
						
						// check key 0
						if (keyMap[57]) {
							AccountManager.loginToken("");
						}
					}
						
					// save accounts
					if (savePrompt) {
						// check keys 1-8
						for (let idx = 1; idx < 9; idx++) { // account 1 - 8 num 1 - 8
							if (keyMap[48 + idx]) {
								let user = UserStore.getCurrentUser();
								let account = {
									name: user.tag,
									id: user.id,
									token: UserInfoStore.getToken()
								};
								
								accounts[idx] = account;
								PluginUtilities.saveSettings(config.info.name, accounts);
								
								Toasts.show("Account " + account.name + " saved under number " + idx, {type: Toasts.ToastTypes.success})
								
								keyMap = {};
								savePrompt = false;
							}
						}
					}
				}
			}
		};
		return plugin(Plugin, Api);
	})(global.ZeresPluginLibrary.buildPlugin(config));
})();