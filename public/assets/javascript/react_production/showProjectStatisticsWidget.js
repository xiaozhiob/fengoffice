var showProjectStatisticsWidget=function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={4:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp_name_=window.webpackJsonp_name_||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;return a.push([362,0]),n()}({362:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=n(1),u=n(21),s=n(42),f=s.ResponsiveContainer,p=s.PieChart,d=s.Pie,m=(s.Sector,s.Cell),y=s.Tooltip,b=s.Legend,g=function(e){function t(e){var n,o,l,u,s,f;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,l=a(t).call(this,e),n=!l||"object"!==r(l)&&"function"!=typeof l?i(o):l,u=i(n),f=function(e){var t=n.state.data;return c.createElement("table",{className:"tasks-widget-customized-legend"},c.createElement("tbody",null,t.map((function(e){var t=e.name,n=e.value,r=e.color;if(n>0)return c.createElement("tr",{key:"".concat(t,"-legend"),className:"tasks-widget-legend-row"},c.createElement("td",{className:"tasks-widget-legend-name"},c.createElement("svg",{className:"tasks-widget-legend-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:r,viewBox:"0 0 24 24"},c.createElement("path",{d:"M3.984 12q0-3.281 2.367-5.648t5.648-2.367 5.648 2.367 2.367 5.648-2.367 5.648-5.648 2.367-5.648-2.367-2.367-5.648z"})),t),c.createElement("td",{className:"tasks-widget-legend-value"},n))}))))},(s="renderCustomizedLegend")in u?Object.defineProperty(u,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[s]=f,n.state={data:e.data},n}var n,u,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(u=[{key:"render",value:function(){this.state.data;var e=this.state.data.filter((function(e){return e.value>0}));return c.createElement("div",{className:"project-statistics-widget"},c.createElement("div",{className:"tasks-pie-chart"},c.createElement(f,{width:"100%",height:170},c.createElement(p,null,c.createElement(d,{data:e,cx:75,cy:80,innerRadius:40,outerRadius:80,fill:"#8884d8",paddingAngle:0,dataKey:"value"},e.map((function(e,t){return c.createElement(m,{key:"cell-".concat(t),fill:e.color})}))),c.createElement(y,null),c.createElement(b,{align:"right",verticalAlign:"middle",layout:"vertical",iconType:"circle",iconSize:10,content:this.renderCustomizedLegend})))))}}])&&o(n.prototype,u),s&&o(n,s),t}(c.Component);e.exports=function(e,t){u.render(c.createElement(g,{data:e}),t)}}});