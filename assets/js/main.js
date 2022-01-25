
function touchSidebar(hook) {
	hook.doneEach(_ => {
		const item = Docsify.dom.find('.sidebar details a[href="'+location.pathname+'"]')
		if(item) item.parentElement.parentElement.parentElement.open = true;

		const sections = Docsify.dom.findAll('.sidebar summary')
		for(const item of sections) {
			Docsify.dom.on(item, 'click', (event) => {
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

function fixLinksTarget(hook) {
	hook.doneEach(_ => {
		const content = Docsify.dom.find('main>.content')
		const links = Docsify.dom.findAll(content, 'a[target=_blank][href^="/"]')
		for(const item of links) {
			item.removeAttribute('target')
		}
	})
}

$docsify.plugins = [
	touchSidebar,
	searchHotkey,
	fixLinksTarget,
].concat($docsify.plugins)
