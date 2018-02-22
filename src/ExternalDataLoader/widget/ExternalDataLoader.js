define([
	"dojo/_base/declare",
	"mxui/widget/_WidgetBase",

	"dojo/_base/lang",
	"dojo/request/script"


], function (declare, _WidgetBase, lang, script) {
	"use strict";

	return declare("ExternalDataLoader.widget.ExternalDataLoader", [ _WidgetBase ], {


		// Internal variables.
		_contextObj: null,

		update: function (obj, callback) {
			if (!obj) {
				callback && callback();
				return;
			}

			this._contextObj = obj;

			script.get(this.url, {
				jsonp: "callback"
			}).then(lang.hitch(this, function (data) {
				this._contextObj.set(this.countryAttr, data[this.jsonAttr]);
			}));

			callback && callback();
		}
	});
});

require(["ExternalDataLoader/widget/ExternalDataLoader"]);
