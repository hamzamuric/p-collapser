const ps = document.querySelectorAll('p')

for (const p of ps) {
	let oldText = null
	p.addEventListener('click', e => {
		console.log('clicked')
		if (!oldText) {
			oldText = p.innerHTML
			p.innerHTML = '...'
		} else {
			p.innerHTML = oldText
			oldText = null
		}
	})
}
