/**
 * Tript template Engine
 * @param {String} t template
 * @param {Object} [c] context
 * @param {String} [r] placeholder for replace function
 * @param {String} [_] placeholder for output
 * @returns {String}
 * @constructor
 */
function T(t, c, r, _) {
	return eval(
		// set context
		"with(c||{}){_='';" +
			// match html-tags
		t[r = "replace"](/(?:\n|^)\s*(<.*)/g, function(p, a) {
			return '_+="'+
				a
					// replace quotes
					[r](/"/g, '\\"')
					// inline javascript
					[r](/<%(.*?)%>|\$(\w+(?:\.*[a-z0-9_[]]*)*)\|*([|\w]*)/gi, '"+ ("$3" ? T["$3"]($1$2) : ($1$2)) +"') +'";'
		}) + "}")
}