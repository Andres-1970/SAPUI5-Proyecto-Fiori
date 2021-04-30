// @ts-nocheck
sap.ui.define([
    "sap/ui/core/Control"
],
    function (Control) {

        return Control.extend("sapui5.Employees.controller.Signature", {

            metadata: {
                properties: {
                    "width": {
                        type: "sap.ui.core.CSSSize",
                        defaultValue: "400px"
                    },
                    "heigth": {
                        type: "sap.ui.core.CSSSize",
                        defaultValue: "100px"
                    },
                    "bgcolor": {
                        type: "sap.ui.core.CSSColor",
                        defaultValue: "white"
                    }
                }
            },
            onInit: function () {
            },
            renderer: function (oRM, oControl) {
                oRM.write("<div");
                oRM.addStyle("width", oControl.getProperty("width"));
                oRM.addStyle("heigth", oControl.getProperty("heigth"));
                oRM.addStyle("background-color", oControl.getProperty("bgcolor"));
                oRM.addStyle("border", "2px solid black");
                oRM.writeStyles();
                oRM.write(">");
                oRM.write("<canvas width='" + oControl.getProperty("width") + "'" + "heigth='" + oControl.getProperty("heigth") + "'");
                oRM.write("></canvas>");
                oRM.write("</div>");
            },
            onAfterRendering: function () {

                var canvas = document.querySelector("canvas");
                try {
                    this.signaturePad = new SignaturePad(canvas);
                } catch (e) {
                    console.error(e);
                }
            },
            clear: function () {
                this.signaturePad.clear();
            }
        });
    });
