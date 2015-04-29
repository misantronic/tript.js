/**
 *
 * @param {String} t template
 * @param {Object} [d] data
 * @param [c] playholder
 * @return {jQuery}
 */
jQuery.fn.renderTript = function(t, d, c) {
	c = $(this);

	if(c.length && t) {
		c.html(T(t, d || {}));
	}

	return c;
};