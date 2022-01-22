
function touchSidebar(hook) {
	hook.doneEach(_ => {
		const sidebar = Docsify.dom.find('.sidebar')
		const item = Docsify.dom.find(sidebar, 'details a[href="'+location.hash+'"]')
		if(item) item.parentElement.parentElement.parentElement.open = true;
	})
}

function searchHotkey(hook) {
	hook.ready(_ => {
		const input = Docsify.dom.find('.sidebar .search input')

		document.addEventListener('keyup', (event) => {
			const x = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
			if(!x && document.activeElement == document.body && event.key == 's') {
				event.preventDefault()
				window.scrollTo(0, 0)
				input.focus()
			}
		})

		input.addEventListener('keyup', (event) => {
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
