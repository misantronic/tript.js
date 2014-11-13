# tript

> A tiny Template-Engine (224 bytes) mixing up HTML and pure JavaScript in one template

```html
<!-- Embed tript -->
<script src="tript.min.js"></script>

<!-- TEMPLATE -->
<script id="template" type="text/html">
	<div id="content">
		<p>Start of container</p>
	
		var tests = [ { name: 'David' }, { name: 'Max' }, { name: 'Bob' } ];
		var _animal = "Crow";
	
		for(var i in tests) {
			<h1>
				<b>Headline $i for $user</b>
			</h1>
			<pre>Hallo <% tests[i].name %></pre>
			<p>Test $i</p>
		}
	
		<p>The Animal: $_animal</p>
		<p>End of container</p>
	</div>
</script>
```

```javascript
// set context
var context = {
	user: 'David Skx'
};

// parse template, append to body
document.body.innerHTML = T(template.innerHTML, context);
```

[Test the example at codepen](http://codepen.io/misantronic/pen/ogNbBa)