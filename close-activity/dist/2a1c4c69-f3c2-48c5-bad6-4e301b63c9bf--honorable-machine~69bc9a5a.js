var __NR_MODULES="object"==typeof __NR_MODULES?__NR_MODULES:{};__NR_MODULES["2a1c4c69-f3c2-48c5-bad6-4e301b63c9bf--honorable-machine"]=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cli-assets.service.datanerd.us/artifact-index-production/2a1c4c69-f3c2-48c5-bad6-4e301b63c9bf/det/";var n={__publicPath:function(e){r.p=e},__factory:function(t,r){const n=function(t,r,n,a){var i={};function u(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}return i[t]={i:t,l:!0,exports:r},i[n]={i:n,l:!0,exports:a},u.m=e,u.c=i,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://cli-assets.service.datanerd.us/artifact-index-production/2a1c4c69-f3c2-48c5-bad6-4e301b63c9bf/det/",u}("Xznc",t,"evsE",r);return n("T09F")}};return n}({T09F:function(e,t,r){"use strict";r.r(t);var n=r("Xznc"),a=r("evsE").injectedPackages.react,i=a.__esModule?a.default:a;t.default=function(){return i.createElement("div",{className:"heading"},i.createElement("h1",null,"Custom Dashboard"),i.createElement(n.Grid,null,i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.AreaChart,{accountId:4438264,query:"SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO",fullwidth:!0})),i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.LineChart,{accountId:4438264,query:"SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO",fullwidth:!0})),i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.BarChart,{accountId:4438264,query:"SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO",fullwidth:!0}))),i.createElement(n.Grid,null,i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.TableChart,{accountId:4438264,query:"SELECT latest(diskUsedPercent) AS `Used %` FROM StorageSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') FACET device LIMIT MAX",fullwidth:!0})),i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.SparklineChart,{accountId:4438264,query:"SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO",fullwidth:!0})),i.createElement(n.GridItem,{columnSpan:4},i.createElement(n.StackedBarChart,{accountId:4438264,query:"SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO",fullwidth:!0}))))}},Xznc:function(e,t){e.exports=function(){throw new Error('Could not initialize "nr1"')}()},evsE:function(e,t){e.exports=function(){throw new Error('Could not initialize "__nr1-internal__"')}()}});
//# sourceMappingURL=https://cli-assets.service.datanerd.us/artifact-index-production/2a1c4c69-f3c2-48c5-bad6-4e301b63c9bf/det/2a1c4c69-f3c2-48c5-bad6-4e301b63c9bf--honorable-machine~69bc9a5a.js.map