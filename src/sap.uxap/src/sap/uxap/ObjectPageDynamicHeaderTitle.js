/*!
 * ${copyright}
 */

// Provides control sap.uxap.ObjectPageDynamicHeaderTitle.
sap.ui.define(['jquery.sap.global', './library', 'sap/uxap/ObjectPageDynamicHeaderContent', 'sap/m/Title'],
	function(jQuery, library, ObjectPageDynamicHeaderContent, Title) {
		"use strict";

		try {
			sap.ui.getCore().loadLibrary("sap.f");
		} catch (e) {
			jQuery.sap.log.error("The control 'sap.uxap.ObjectPageDynamicHeaderTitle' needs library 'sap.f'.");
			throw (e);
		}

		var DynamicPageTitle = sap.ui.requireSync("sap/f/DynamicPageTitle");

		/**
		 * Constructor for a new <code>ObjectPageDynamicHeaderTitle<code>.
		 *
		 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
		 * @param {object} [mSettings] Initial settings for the new control
		 *
		 * @class
		 * Dynamic title for the {@link sap.uxap.ObjectPageLayout ObjectPage}.
		 * @extends sap.f.DynamicPageTitle
		 * @implements sap.uxap.IHeaderTitle
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias sap.uxap.ObjectPageDynamicHeaderTitle
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 * @since 1.52
		 */
		var ObjectPageDynamicHeaderTitle = DynamicPageTitle.extend("sap.uxap.ObjectPageDynamicHeaderTitle", /** @lends sap.uxap.ObjectPageDynamicHeaderTitle.prototype */ { metadata : {

			interfaces : ["sap.uxap.IHeaderTitle"],
			library : "sap.uxap"
		}});

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 * @returns {*}
		 */
		ObjectPageDynamicHeaderTitle.prototype.getCompatibleHeaderContentClass = function () {
			return ObjectPageDynamicHeaderContent;
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 * @returns {boolean}
		 */
		ObjectPageDynamicHeaderTitle.prototype.supportsTitleInHeaderContent = function () {
			return false;
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 * @returns {boolean}
		 */
		ObjectPageDynamicHeaderTitle.prototype.supportsAdaptLayoutForDomElement = function () {
			return false;
		};

		ObjectPageDynamicHeaderTitle.KNOWN_HEADING_CONTROL_CLASS_NAMES = ["sap.m.Title", "sap.m.Text", "sap.m.FormattedText", "sap.m.Label"];

		/**
		 * Returns the text that represents the title of the page.
		 * Since the structure is not guaranteed, this is not universal for this header, and only covers the most common usage.
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 */
		ObjectPageDynamicHeaderTitle.prototype.getTitleText = function () {
			var oHeading = this.getHeading(),
				sClassName = oHeading && oHeading.getMetadata().getName();

			if (ObjectPageDynamicHeaderTitle.KNOWN_HEADING_CONTROL_CLASS_NAMES.indexOf(sClassName) > -1) {
				return oHeading.getText();
			}
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 */
		ObjectPageDynamicHeaderTitle.prototype.getHeaderDesign = function () {
			return library.ObjectPageHeaderDesign.Light;
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 */
		ObjectPageDynamicHeaderTitle.prototype.snap = function () {
			if (this.getExpandedContent()) {
				this._setShowExpandContent(false);
			}

			if (this.getSnappedContent()) {
				this._setShowSnapContent(true);
			}
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 */
		ObjectPageDynamicHeaderTitle.prototype.unSnap = function () {
			if (this.getExpandedContent()) {
				this._setShowExpandContent(true);
			}

			if (this.getSnappedContent()) {
				this._setShowSnapContent(false);
			}
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 * @param fnHandler
		 * @param oContext
		 * @private
		 */
		ObjectPageDynamicHeaderTitle.prototype._handleExpandButtonPressEventLifeCycle = function (bAttach, fnHandler, oContext) {
			// to be implemented
		};

		/**
		 * Required by the {@link sap.uxap.IHeaderTitle} interface.
		 * @param {object} jQuery reference to the header dom element
		 * @param {object} change event of child-element that brought the need to adapt the headerTitle layout
		 * @private
		 */
		ObjectPageDynamicHeaderTitle.prototype._adaptLayoutForDomElement = function ($headerDomRef, oEvent) {
			// not supported
		};

		return ObjectPageDynamicHeaderTitle;

	});
