
function touchSidebar(hook) {
	hook.doneEach(_ => {
		const hash = location.hash.split('?')[0]
		const item = Docsify.dom.find('.sidebar details a[href="'+hash+'"]')
		if(item) item.parentElement.parentElement.parentElement.open = true;

		const sections = Docsify.dom.findAll('.sidebar summary')
		for(const item of sections) {
			Docsify.dom.on(item, 'click', (event) => {
				console.log('on click!')
				event.stopPropagation()
			})
		}
	})
}

function searchHotkey(hook) {
	hook.ready(_ => {
		const input = Docsify.dom.find('.sidebar .search input')

		Docsify.dom.on(document, 'keyup', (event) => {
			const x = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
			if(!x && document.activeElement == document.body && event.key == 's') {
				event.preventDefault()
				window.scrollTo(0, 0)
				input.focus()
			}
		})

		Docsify.dom.on(input, 'keyup', (event) => {
			if(event.key == 'Escape') {
				event.target.value = ''
				event.target.dispatchEvent(new Event('input', {
					bubbles: true,
					cancelable: true,
				}))

				event.target.blur()
			}
		})
	})
}

$docsify.plugins = [
	touchSidebar,
	searchHotkey,
].concat($docsify.plugins)
