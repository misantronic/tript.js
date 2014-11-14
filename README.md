### tript

> A tiny Template-Engine (224 bytes) mixing up HTML and pure JavaScript in one template

tript is a tiny and simple template-engine which allows you to mixup JavaScript and HTML.<br>
Easy as pie you combine both languages - access variables - manipulate content - loop the hell through stuff and finally destroy the world, but this time in one template!<br>

#### Example

```html
<!-- Embed tript -->
<script src="tript.min.js"></script>

<!-- TEMPLATE -->
<script id="template" type="text/html">
	<div id="content">
		<h1>$app</h1>
		<div style="font-weight: bold;">$headline</div>
		<p>$description</p>

		var users = [ { name: 'David' }, { name: 'Max' }, { name: 'Bob' } ];
		var _animal = "Crow";

		for(var i in users) {
			<h3>
				var name = users[i].name;
                <b>Good guy $name</b>
			</h3>
			<p>You are number $i</p>
		}

		<p>Your should know: my favorite animal is the $_animal</p>
	</div>
</script>
```

```javascript
// set context
var context = {
	app: 'tript',
	headline: 'A tiny Template-Engine mixing up HTML and pure JavaScript in one template',
	description: 'tript is a freakin\' tiny template-engine which allows you to mixup JavaScript and HTML.',
};

// parse template, append to body
document.body.innerHTML = T(template.innerHTML, context);
```

#### Demo

Go check out [this demo](http://codepen.io/misantronic/pen/ogNbBa) at codepen.io.

#### Install with bower

```bash
$ bower install tript
```


#### Secrets

- tript actually means template-script. Awesome!
- tript is only 224 bytes of mix-and-match-madness.
- this script was inspired by [John Resig's Micro Templating](http://ejohn.org/blog/javascript-micro-templating/)
- Zombies will kill your friends if you don't use tript. *

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

( * Zombies will not kill your friends if you don't use tript. They'll eat you! )