(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var s=o(n(7294)),a=n(1689),i=n(2441),c=n(5749),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=s.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),s=n[0],i=n[1];return{href:s,as:e.as?(0,a.resolveHref)(o,e.as):i||s}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var y=s.Children.only(h),g=y&&"object"===typeof y&&y.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),C=r(j,2),E=C[0],N=C[1],w=s.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,s.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,N,b,t,n]);var k={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:s,locale:c,scroll:i}))}(e,n,d,p,v,m,x,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var M="undefined"!==typeof b?b:n&&n.locale,_=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);k.href=_||(0,a.addBasePath)((0,a.addLocale)(p,M,n&&n.defaultLocale))}return s.default.cloneElement(y,k)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,s.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),s=n(8391),a="undefined"!==typeof IntersectionObserver;var i=new Map},186:function(e,t,n){"use strict";var r=n(5893),o=n(1664);t.Z=function(e){var t=e.content;return(0,r.jsxs)("main",{className:"container min-h-screen pt-4 pb-10 md:px-32 xl:px-64 text-center relative",children:[(0,r.jsx)("h1",{className:"text-6xl md:text-7xl font-bold text-light-blue-900 bg-green-300 cursor-default w-60 md:w-72",role:"banner",children:"gov+rss"}),(0,r.jsx)("br",{}),(0,r.jsxs)("nav",{className:"flex justify-center space-x-2",children:[(0,r.jsx)(o.default,{href:"/",as:"/",children:"Home"}),(0,r.jsx)("span",{children:"\u2b29"}),(0,r.jsx)(o.default,{href:"/about",as:"/about",children:"About"}),(0,r.jsx)("span",{children:"\u2b29"}),(0,r.jsx)(o.default,{href:"/privacy",as:"/privacy",children:"Privacy"}),(0,r.jsx)("span",{children:"\u2b29"}),(0,r.jsx)(o.default,{href:"https://github.com/gov-rss/scrape",children:"Contribute"})]}),(0,r.jsx)("br",{}),t,(0,r.jsx)("br",{}),(0,r.jsxs)("footer",{role:"contentinfo",children:[(0,r.jsxs)("div",{className:"absolute inset-x-0 bottom-5",children:["Website copyright (c) 2021"," ",(0,r.jsx)(o.default,{href:"https://github.com/callumskeet",children:"Callum Skeet"})," under the"," ",(0,r.jsx)(o.default,{href:"https://github.com/gov-rss/gov-rss.github.io/blob/master/LICENSE",children:"MIT license"})]}),(0,r.jsx)("br",{})]})]})}},9452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(1664),s=n(186),a=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"text-left xl:px-32",children:[(0,r.jsxs)("p",{children:["This site uses ",(0,r.jsx)(o.default,{href:"https://matomo.org/",children:"Matomo"})," for analytics purposes."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Matomo is an open source, privacy first analytics service and has been configured to anonymise your data. It can be opted out of using the form below."}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Alternatively, you may use a version of the site without JavaScript or analytics ",(0,r.jsx)(o.default,{href:"lite.html",children:"here"}),"."]}),(0,r.jsx)("br",{}),(0,r.jsx)("iframe",{className:"opt-out",src:"https://matomo.callum.zone/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=&fontColor=&fontSize=1.125rem&fontFamily=ui-sans-serif%2C%20system-ui%2C%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20%22Helvetica%20Neue%22%2C%20Arial%2C%20%22Noto%20Sans%22%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C%20%22Segoe%20UI%20Emoji%22%2C%20%22Segoe%20UI%20Symbol%22%2C%20%22Noto%20Color%20Emoji%22"})]})});function i(){return(0,r.jsx)(s.Z,{content:a})}},9520:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return n(9452)}])},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[774,351],(function(){return t=9520,e(e.s=t);var t}));var t=e.O();_N_E=t}]);