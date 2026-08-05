/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"in/abp/hr/redesignation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});