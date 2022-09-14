!function(t){"use strict";t.defineOption("foldGutter",!1,(function(o,n,i){i&&i!=t.Init&&(o.clearGutter(o.state.foldGutter.options.gutter),o.state.foldGutter=null,o.off("gutterClick",d),o.off("changes",c),o.off("viewportChange",s),o.off("fold",p),o.off("unfold",p),o.off("swapDoc",c),o.off("optionChange",l)),n&&(o.state.foldGutter=new e(r(n)),u(o),o.on("gutterClick",d),o.on("changes",c),o.on("viewportChange",s),o.on("fold",p),o.on("unfold",p),o.on("swapDoc",c),o.on("optionChange",l))}));var o=t.Pos;function e(t){this.options=t,this.from=this.to=0}function r(t){return!0===t&&(t={}),null==t.gutter&&(t.gutter="CodeMirror-foldgutter"),null==t.indicatorOpen&&(t.indicatorOpen="CodeMirror-foldgutter-open"),null==t.indicatorFolded&&(t.indicatorFolded="CodeMirror-foldgutter-folded"),t}function n(t,e){for(var r=t.findMarks(o(e,0),o(e+1,0)),n=0;n<r.length;++n)if(r[n].__isFold){var i=r[n].find(-1);if(i&&i.line===e)return r[n]}}function i(t){if("string"==typeof t){var o=document.createElement("div");return o.className=t+" CodeMirror-guttermarker-subtle",o}return t.cloneNode(!0)}function f(t,e,r){var f=t.state.foldGutter.options,u=e-1,d=t.foldOption(f,"minFoldSize"),l=t.foldOption(f,"rangeFinder"),c="string"==typeof f.indicatorFolded&&a(f.indicatorFolded),s="string"==typeof f.indicatorOpen&&a(f.indicatorOpen);t.eachLine(e,r,(function(e){++u;var r=null,a=e.gutterMarkers;if(a&&(a=a[f.gutter]),n(t,u)){if(c&&a&&c.test(a.className))return;r=i(f.indicatorFolded)}else{var p=o(u,0),g=l&&l(t,p);if(g&&g.to.line-g.from.line>=d){if(s&&a&&s.test(a.className))return;r=i(f.indicatorOpen)}}(r||a)&&t.setGutterMarker(e,f.gutter,r)}))}function a(t){return new RegExp("(^|\\s)"+t+"(?:$|\\s)\\s*")}function u(t){var o=t.getViewport(),e=t.state.foldGutter;e&&(t.operation((function(){f(t,o.from,o.to)})),e.from=o.from,e.to=o.to)}function d(t,e,r){var i=t.state.foldGutter;if(i){var f=i.options;if(r==f.gutter){var a=n(t,e);a?a.clear():t.foldCode(o(e,0),f)}}}function l(t,o){"mode"==o&&c(t)}function c(t){var o=t.state.foldGutter;if(o){var e=o.options;o.from=o.to=0,clearTimeout(o.changeUpdate),o.changeUpdate=setTimeout((function(){u(t)}),e.foldOnChangeTimeSpan||600)}}function s(t){var o=t.state.foldGutter;if(o){var e=o.options;clearTimeout(o.changeUpdate),o.changeUpdate=setTimeout((function(){var e=t.getViewport();o.from==o.to||e.from-o.to>20||o.from-e.to>20?u(t):t.operation((function(){e.from<o.from&&(f(t,e.from,o.from),o.from=e.from),e.to>o.to&&(f(t,o.to,e.to),o.to=e.to)}))}),e.updateViewportTimeSpan||400)}}function p(t,o){var e=t.state.foldGutter;if(e){var r=o.line;r>=e.from&&r<e.to&&f(t,r,r+1)}}}(CodeMirror);
//# sourceMappingURL=index.68f774fd.js.map
