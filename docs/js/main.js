(()=>{var u=function(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)},h=function(e){let t;return function(i){t&&clearTimeout(t),t=setTimeout(e,100,i)}};var f=function(){let e={body:"body",menu:".menu",menuBtn:".menu__btn",open:"open",closed:"closed",isOpen:"is-open",isClosed:"is-closed",isLoading:"is-loading",hasMenuOpen:"has-menu-open",menuCookie:"menu-state"},t=sessionStorage.getItem(e.menuCookie),i=document.querySelector(e.body),o=document.querySelector(e.menu),s=document.querySelector(e.menuBtn),c=function(){o.classList.add(e.isOpen),o.classList.remove(e.isClosed),i.classList.add(e.hasMenuOpen),sessionStorage.setItem(e.menuCookie,e.open)},r=function(){o.classList.add(e.isClosed),o.classList.remove(e.isOpen),i.classList.remove(e.hasMenuOpen),sessionStorage.setItem(e.menuCookie,e.closed)},n=function(){o.classList.contains(e.isOpen)?r():o.classList.contains(e.isClosed)&&c()},a=function(){s.addEventListener("click",n.bind(this)),window.addEventListener("resize",h(function(){u()<670?r():c()}))},d=function(){u()<670?r():t===null||t===e.open?c():r(),i.classList.remove(e.isLoading)};o&&s&&(a(),d())};var g=function(){let e={modal:".modal",closeBtn:".modal__close-btn",figure:".figure",svgFigure:"figure--svg",svg:"svg",original:"original",figcaption:"figcaption",isHidden:"is-hidden",link:"a"},t=document.querySelector(e.modal),i=document.querySelectorAll(e.figure),o=t.querySelector(e.closeBtn),s=function(n){let a=n.querySelector(e.link).href,d=n.dataset.orientation,l=n.classList.contains(e.svgFigure)?e.svg:e.original,m=document.createElement("img");return m.classList.add(l),m.src=a,d&&m.classList.add(d),m},c=function(n,a){a.preventDefault();let d=n.querySelector(e.figcaption).cloneNode(!0);t.querySelector(".modal__figure").replaceChildren(s(n),d),t.classList.remove(e.isHidden)};t&&i&&o&&function(){i.forEach(n=>{n.addEventListener("click",c.bind(this,n))}),o.addEventListener("click",function(){t.classList.add(e.isHidden)}),t.addEventListener("click",function(n){n.target===t&&t.classList.add(e.isHidden)})}()};var p=function(){let e={html:"html",themeBtn:".header__theme-btn",darkTheme:"dark",lightTheme:"light",themeCookie:"theme-state",prefersDark:"(prefers-color-scheme: dark)"},t=document.querySelector(e.html),i=document.querySelector(e.themeBtn),o=window.matchMedia(e.prefersDark),s=sessionStorage.getItem(e.themeCookie),c=function(){t.classList.add(e.darkTheme),t.classList.remove(e.lightTheme),sessionStorage.setItem(e.themeCookie,e.darkTheme)},r=function(){t.classList.add(e.lightTheme),t.classList.remove(e.darkTheme),sessionStorage.setItem(e.themeCookie,e.lightTheme)},n=function(l){l?c():r()},a=function(){i&&i.addEventListener("click",function(){n(!t.classList.contains(e.darkTheme))})};(function(){n(s?s===e.darkTheme:o.matches)})(),a()};window.addEventListener("load",function(){f(),g(),p()});})();
