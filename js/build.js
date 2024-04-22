let rox = new Rox

async function main() {
	parseCode()
}

async function parseCode() {
	let codes = document.querySelectorAll('#c0deExample')
	for(let cd in codes) {
		if(cd == 0) {
			let code = `const rox = new <span class="yellow">Rox</span>
			const <span class="green">Router</span> = rox.router() <span class="gray noselect">// инициализация роутинга</span>
			
			let button = <span class="yellow">document</span>.querySelector('button')
			let contentBlock = <span class="yellow">document</span>.querySelector('.content')
			button.addEventListener('click', async () => {
			\tab <span class="green">Router</span>.go('friends', contentBlock, '.content')
			})`

			let syntax = rox.codeSyntax(code)
			codes[cd].innerHTML = syntax
		}
		if(cd == 1) {
			let code = `let Header, Footer, Content, Post, NotFound
			(async () => {
				\tab Header = await import('components/header.js') 
				\tab Footer = await import('components/footer.js') 
				\tab MusicContent = await import('components/music') 
				\tab Post = await import('components/post') 
				\tab NotFound = await import('components/notfound') 
			})()
			const paths = [{in: '/music', to: MusicContent}, {in: '/post/$ID', to: Post}, {in: 404, to: NotFound}] 
			
			const rox = new <span class="yellow">Rox</span>
			const <span class="green">Router</span> = rox.virtualRouter(paths) <span class="gray noselect">// инициализация роутинга</span>
			

			function MusicButton() {
				\tab let button = <span class="yellow">document</span>.querySelector('button')
				\tab let root = <span class="yellow">document</span>.querySelector('body')
					\tab <span class="green">Router</span>.go('/music', <span class="gray">{click: button, target: root}</span>, <span class="lime">(next)</span> => {
				\tab\tab next()
			\tab })
			}
			`

			let syntax = rox.codeSyntax(code)
			codes[cd].innerHTML = syntax
		}
		if(cd == 2) {
			let code = `<span class="green">Router</span>.go('/music', <span class="gray">{click: button, target: root}</span>, <span class="lime">(next)</span> => {
				\tab next()
			})
			`

			let syntax = rox.codeSyntax(code)
			codes[cd].innerHTML = syntax
		}
	}
}

main()