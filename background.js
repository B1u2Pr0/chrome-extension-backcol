chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#3aa757'}, function() {
		console.log('The color is green.');
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {urlContains: '1'},
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
	chrome.contextMenus.create({
		id: 'menu_red',
		title: 'Red',
		type: 'normal',
		contexts: ['page', 'selection', 'image', 'link']
	});
	chrome.contextMenus.create({
		id: 'menu_blue',
		title: 'Blue',
		type: 'normal',
		contexts: ['page', 'selection', 'image', 'link']
	});
});
