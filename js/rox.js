class Rox {
	circle() {
		return {
			setProgress(number) {
				return number
			}
		}
	}

	codeSyntax(input) {
		input = String(input)
		input = input.replaceAll('\n', '<br>')
		input = input.replaceAll('\tab', '<span class="tab noselect"></span>')
		let keys = {
			'let': '<span class="magenta">let</span>',
			'var': '<span class="magenta">let</span>',
			'null': '<span class="orange">null</span>',
			'if': '<span class="magenta">if</span>',
			'else': '<span class="magenta">else</span>',
			'const': '<span class="blue">const</span>',
			'function': '<span class="magenta">function</span>',
			'return': '<span class="magenta">return</span>',
			'async': '<span class="purple">async</span>',
			'await': '<span class="purple">await</span>',
			'for': '<span class="purple">for</span>',
			'while': '<span class="purple">while</span>',
			'true': '<span class="blue">true</span>',
			'false': '<span class="orange">false</span>',
			'new': '<span class="lime">new</span>',
			'String': '<span class="yellow">String</span>',
			'Object': '<span class="yellow">Object</span>',
			'console': '<span class="red">console</span>',
			'print': '<span class="blue">print</span>',
			'in': '<span class="blue">in</span>',
			'of': '<span class="blue">of</span>',
			'def': '<span class="green">def</span>',
			'import': '<span class="red">import</span>',
			'from': '<span class="red">from</span>',
			'default': '<span class="red">default</span>',
			'export': '<span class="red">export</span>',
			'=>': '<span class="lime">=></span>'
		}

		let regex = new RegExp(Object.keys(keys).join('|'), 'g');
		return input.replace(regex, function(match) {
	        return keys[match];
	    });
	}
}