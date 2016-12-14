/* ------- Smooth Scroll from CSS Tricks -------- */
$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/* ------- Counter ------ */
$('.count').each(function () {
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
		duration: 10000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});

/* ------- Bootstrap Tooltip ------- */
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

/* ------- jQuery FadeThis - v1.0.0 @ http://lwiesel.github.io ------- */
! function (a, b, c) {
	var d = null,
		e = [],
		f = a(b),
		g = function () {};
	g.prototype = {
		globals: {
			pluginName: "fadeThis",
			bufferTime: 300
		},
		defaults: {
			baseName: "slide-",
			speed: 500,
			easing: "swing",
			offset: 0,
			reverse: !0,
			distance: 50,
			scrolledIn: null,
			scrolledOut: null
		},
		init: function (a, b) {
			this.addElements(a, b), this._setEvent(), this._checkVisibleElements()
		},
		addElements: function (d, e) {
			var f = d === c.body ? b : d,
				g = a(f === b ? "body" : f),
				h = this,
				i = e && e.baseName ? e.baseName : this.defaults.baseName;
			return g.is("[class^='" + i + "']") ? h._addElement(g, e) : g.find("[class^='" + i + "']").each(function () {
				h._addElement(a(this), e)
			}), g
		},
		_addElement: function (b, c) {
			var d = b.data("plugin-options"),
				f = a.extend({}, this.defaults, c, d),
				g = {
					element: b,
					options: f,
					invp: !1
				};
			return e.push(g), console.log(g), this._prepareElement(g), b
		},
		_prepareElement: function (a) {
			var b = {
					opacity: 0,
					visibility: "visible",
					position: "relative"
				},
				c = null;
			if (a.element.hasClass(a.options.baseName + "right")) c = "left";
			else if (a.element.hasClass(a.options.baseName + "left")) c = "right";
			else if (a.element.hasClass(a.options.baseName + "top")) c = "bottom";
			else {
				if (!a.element.hasClass(a.options.baseName + "bottom")) return !1;
				c = "top"
			}
			b[c] = a.options.distance, a.element.css(b)
		},
		_setEvent: function () {
			var a = this;
			f.on("scroll", function (b) {
				d || (d = setTimeout(function () {
					a._checkVisibleElements(b), d = null
				}, a.globals.bufferTime))
			})
		},
		_checkVisibleElements: function (b) {
			var c = this;
			a.each(e, function (a, d) {
				c._isVisible(d) ? d.invp || (d.invp = !0, c._triggerFading(d), d.options.scrolledIn && d.options.scrolledIn.call(d.element, b), d.element.trigger("fadethisscrolledin", b)) : d.invp && (d.invp = !1, d.options.reverse && c._triggerFading(d, !1), d.options.scrolledOut && d.options.scrolledOut.call(d.element, b), d.element.trigger("fadethisscrolledout", b))
			})
		},
		_isVisible: function (a) {
			var b = f.scrollTop() + a.options.offset,
				c = b + f.height() - 2 * a.options.offset,
				d = a.element.offset().top,
				e = d + a.element.height();
			return e >= b && c >= d && c >= e && d >= b
		},
		_triggerFading: function (a, b) {
			b = "undefined" != typeof b ? b : !0;
			var c = {
					opacity: 1
				},
				d = {
					opacity: 0
				},
				e = null;
			if (a.element.hasClass(a.options.baseName + "right")) e = "left";
			else if (a.element.hasClass(a.options.baseName + "left")) e = "right";
			else if (a.element.hasClass(a.options.baseName + "top")) e = "bottom";
			else {
				if (!a.element.hasClass(a.options.baseName + "bottom")) return !1;
				e = "top"
			}
			c[e] = 0, d[e] = a.options.distance, b ? a.element.stop(!0).animate(c, a.options.speed, a.options.easing) : a.element.stop(!0).animate(d, a.options.speed, a.options.easing)
		}
	}, g.defaults = g.prototype.defaults, g.globals = g.prototype.globals, b.Plugin = new g, a.fn[g.globals.pluginName] = function (c) {
		return this.each(function () {
			a.data(b, "plugin_" + g.globals.pluginName) ? a.data(this, "plugin_" + g.globals.pluginName) || a.data(this, "plugin_" + g.globals.pluginName, b.Plugin.addElements(this, c)) : (a.data(b, "plugin_" + g.globals.pluginName, "set"), a.data(this, "plugin_" + g.globals.pluginName, b.Plugin.init(this, c)))
		}), this
	}
}(jQuery, window, document);
