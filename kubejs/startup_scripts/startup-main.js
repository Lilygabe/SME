// priority: 0
Platform.mods.kubejs.name = 'Slightly More Engineering'

StartupEvents.registry('item', event => {
	regCustomItems(event)
})

StartupEvents.registry("block", event => {
	regCustomBlocks(event)
})

