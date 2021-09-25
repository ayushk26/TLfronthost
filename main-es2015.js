(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class AboutComponent {
    constructor() {
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/vanta.topology.min.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript2Element = document.createElement("script");
        this.myScript2Element.src = "assets/js/p5.min.js";
        document.body.appendChild(this.myScript2Element);
        this.myScript3Element = document.createElement("script");
        this.myScript3Element.src = "assets/js/home.js";
        document.body.appendChild(this.myScript3Element);
        this.myScript4Element = document.createElement("script");
        this.myScript4Element.src = "assets/js/script2.js";
        document.body.appendChild(this.myScript4Element);
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            offset: 120,
            duration: 1000,
            once: true
        });
        document.querySelectorAll('img')
            .forEach((img) => img.addEventListener('load', () => aos__WEBPACK_IMPORTED_MODULE_1__["refresh"]()));
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 134, vars: 0, consts: [[2, "background-color", "rgb(3, 16, 59)"], [1, "aboutBody"], [1, "about"], [1, "header"], ["aria-label", "You expect this Lab to do one thing but it changed into something else. \u2014 IIT BOMBAY", 1, "quote"], ["cite", "", "aria-hidden", ""], [1, "colored-text"], [1, "cut-text-container"], [1, "cut-text"], [1, "colored-text", "second"], ["aria-hidden", ""], ["id", "whytinker", "data-aos", "fade-right", 1, "whytinker", "container"], [1, "row"], ["data-aos", "fade-right", 1, "col-md-6", "order-1", "order-lg-1"], ["data-aos", "zoom-in", 1, "col-md-6", "order-2", "order-lg-2"], ["src", "assets/Images/brain-1.png", "data-aos", "fade-right", "alt", "", 1, "img__about", "shadow-lg"], [1, "ourmission", "container", "mt-5"], ["data-aos", "zoom-in", 1, "col-md-6", "order-2", "order-lg-1"], ["src", "assets/Images/robo-1.png", "alt", "", 1, "img__about", "shadow-lg"], ["data-aos", "zoom-in", "data-aos-duration", "4000", 1, "col-md-6", "order-1", "order-lg-2"], ["id", "Mission"], ["id", "vision", 1, "ourvision", "container", "mt-5"], ["data-aos", "zoom-in", "data-aos-duration", "4000", 1, "col-md-6", "order-1", "order-lg-1"], ["src", "assets/Images/vision.png", "alt", "", 1, "img__about", "shadow-lg"], [1, "team", "my-5"], [1, "container"], ["data-aos", "zoom-in", 1, "col-md-3", "col-sm-6"], [1, "our-team"], [1, "pic"], ["src", "assets/Images/robo-1.png", 1, "img-team"], [1, "social"], ["href", "/#", 1, "fa", "fa-facebook"], ["href", "/#", 1, "fa", "fa-github"], ["href", "/#", 1, "fa", "fa-instagram"], ["href", "/#", 1, "fa", "fa-linkedin"], [1, "team-content"], [1, "team-info"], [1, "title"], [1, "post"], ["data-aos", "flip-right", 1, "col-md-3", "col-sm-6"], ["src", "assets/Images/Carousel2.png", 1, "img-team"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "blockquote", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "but it changed into");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\"You expect this Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "something else\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "to do one thing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "cite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "IIT BOMBAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Why Tinker ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " A Tinkerer is someone who also enjoys experimenting. We, at Tinkerers\u2019 Laboratory are always open for such people with an aim to grow innovators and thinkers, converting their creative ideas into actual engineering products. For them to do whatever they love to do, let them have limitless hands-on experience and spend hours tinkering without any worries. So if you are turned on by machines and technology, Tinkerers\u2019 Lab is the place to be. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our Mission ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Increase student participation in Technical Activities, Improve quality of projects built and Expand the idea of TL to other engineering schools in Mumbai and later in other parts of country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Our Vision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Tinkerers\u2019 Lab aims to provide hands on experience to help students become innovators converting their creative ideas into actual engineering products and start a national trend towards \u201CMaking\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.about[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n  font-size: 48px;\r\n  line-height: 1.2;\r\n  font-weight: 300;\r\n  letter-spacing: -0.025em;\r\n  margin-bottom: 27px;\r\n  \r\n  max-width: 370px;  \r\n}\r\n.about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  color: rgb(255, 255, 255);\r\n  font-size: 60px;\r\n  line-height: 1.2;\r\n  font-weight: 300;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  letter-spacing: -0.025em;\r\n  margin-bottom: 27px;\r\n  margin-left: 640px;\r\n  max-width: 370px;\r\n}\r\n.about[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%] {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: relative;\r\n}\r\n.about[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-left: 600px;\r\n}\r\n.about[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-color: rgb(194, 3, 3);\r\n  padding: 5px 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  letter-spacing: 1px;\r\n  transition: all 0.3s ease;\r\n  transform: scale(0.9);\r\n}\r\n.about[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(194, 3, 3, 0.774);\r\n  color: rgba(255, 255, 255, 0.884);\r\n  transform: scale(1.2);\r\n}\r\n.about[_ngcontent-%COMP%]   .whytinker[_ngcontent-%COMP%], .ourmission[_ngcontent-%COMP%], .ourvision[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  color: rgb(73, 107, 150);\r\n  \r\n}\r\n.about[_ngcontent-%COMP%]   .img__about[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  height: 90%;\r\n  margin-top: -50px;\r\n}\r\n\r\n.our-team[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 100px;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.our-team[_ngcontent-%COMP%]:hover   .pic[_ngcontent-%COMP%]:after {\r\n  opacity: 1;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 45%;\r\n  left: 0;\r\n  z-index: 1;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.our-team[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  border-radius: 50%;\r\n  border: 1px solid #fff;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  margin-right: 10px;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #fff;\r\n  color: #000;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .team-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  border: 2px dotted #ddd;\r\n  position: absolute;\r\n  bottom: -70px;\r\n  left: 0;\r\n  z-index: -1;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.our-team[_ngcontent-%COMP%]:hover   .team-content[_ngcontent-%COMP%] {\r\n  border: 2px dotted #00adae;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .team-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #464646;\r\n  position: absolute;\r\n  bottom: 12px;\r\n  left: 0;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #464646;\r\n  margin: 0 0 5px 0;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.our-team[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\r\n  color: #00adae;\r\n}\r\n.our-team[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 14px;\r\n  color: #464646;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 10;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  background: rgb(3, 16, 59);\r\n  background-image: linear-gradient(\r\n    135deg,\r\n    rgba(64, 219, 216, 0.15) 0%,\r\n    rgba(3, 16, 59, 0.15) 35%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\nhtml[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], a[_ngcontent-%COMP%], p[_ngcontent-%COMP%], li[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], th[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], span[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\r\n  -webkit-font-smoothing: antialiased;\r\n  text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;\r\n}\r\ncode[_ngcontent-%COMP%] {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n    monospace;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  \r\n  background-size: cover;\r\n  background-position: center;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n.quote[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: min(6vw, 120px);\r\n  white-space: nowrap;\r\n}\r\n.quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 0;\r\n}\r\n.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 1.1;\r\n  font-family: \"Amiri\", serif;\r\n  text-transform: uppercase;\r\n}\r\n.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.quote[_ngcontent-%COMP%]   .cut-text-container[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 0px 50px;\r\n  -webkit-animation: moveCutClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n          animation: moveCutClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n}\r\n.quote[_ngcontent-%COMP%]   .cut-text-container[_ngcontent-%COMP%]   .cut-text[_ngcontent-%COMP%] {\r\n  background-image: url(https://picsum.photos/id/190/1920/1080);\r\n  margin: 0;\r\n}\r\n.quote[_ngcontent-%COMP%]   .cut-text-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  mix-blend-mode: lighten;\r\n  background-color: #fff;\r\n}\r\n.quote[_ngcontent-%COMP%]   .colored-text[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  -webkit-animation: moveTopColoredClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n          animation: moveTopColoredClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n}\r\n.quote[_ngcontent-%COMP%]   .colored-text.second[_ngcontent-%COMP%] {\r\n  top: 50%;\r\n  -webkit-animation: moveBottomColoredClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n          animation: moveBottomColoredClip 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n}\r\n.quote[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  line-height: 0.4;\r\n}\r\n.quote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-family: \"Nunito\", sans-serif;\r\n  font-size: 0.4em;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2em;\r\n  -webkit-animation: fadeInAuthor 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n          animation: fadeInAuthor 4s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;\r\n}\r\n@-webkit-keyframes moveCutClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 50%, 0% 50%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 50%, 0% 50%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 50%, 100% 50%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 50%, 100% 50%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n}\r\n@keyframes moveCutClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 50%, 0% 50%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 50%, 0% 50%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 50%, 100% 50%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 50%, 100% 50%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n}\r\n@-webkit-keyframes moveTopColoredClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px -100%, 100% -100%, calc(100% - 35px) 0%, 0% 0%);\r\n            clip-path: polygon(35px -100%, 100% -100%, calc(100% - 35px) 0%, 0% 0%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n}\r\n@keyframes moveTopColoredClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px -100%, 100% -100%, calc(100% - 35px) 0%, 0% 0%);\r\n            clip-path: polygon(35px -100%, 100% -100%, calc(100% - 35px) 0%, 0% 0%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n}\r\n@-webkit-keyframes moveBottomColoredClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 100%, 100% 100%, calc(100% - 35px) 200%, 0% 200%);\r\n            clip-path: polygon(35px 100%, 100% 100%, calc(100% - 35px) 200%, 0% 200%);\r\n  }\r\n}\r\n@keyframes moveBottomColoredClip {\r\n  0%, 25% {\r\n    -webkit-clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n            clip-path: polygon(35px 0%, 100% 0%, calc(100% - 35px) 100%, 0% 100%);\r\n  }\r\n  75%, 100% {\r\n    -webkit-clip-path: polygon(35px 100%, 100% 100%, calc(100% - 35px) 200%, 0% 200%);\r\n            clip-path: polygon(35px 100%, 100% 100%, calc(100% - 35px) 200%, 0% 200%);\r\n  }\r\n}\r\n@-webkit-keyframes fadeInAuthor {\r\n  0%, 25% {\r\n    opacity: 0;\r\n  }\r\n  75%, 100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeInAuthor {\r\n  0%, 25% {\r\n    opacity: 0;\r\n  }\r\n  75%, 100% {\r\n    opacity: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0hBQXNIO0VBQ3RILHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7QUFFQTs7O0VBR0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFFQSxhQUFhO0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixPQUFPO0VBQ1AsV0FBVztFQUNYLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztBQUNUO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTs7O0dBR0c7QUFFSDtFQUNFLFVBQVU7RUFDVjs7Y0FFWTtFQUNaLG1DQUFtQztFQUNuQyxrQ0FBa0M7O0VBRWxDLDBCQUEwQjtFQUMxQjs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCRSxtQ0FBbUM7RUFDbkMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRTthQUNXO0FBQ2I7QUFJQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTs7RUFFVixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtRkFBMkU7VUFBM0UsMkVBQTJFO0FBQzdFO0FBQ0E7RUFDRSw2REFBNkQ7RUFDN0QsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCwwRkFBa0Y7VUFBbEYsa0ZBQWtGO0FBQ3BGO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsNkZBQXFGO1VBQXJGLHFGQUFxRjtBQUN2RjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvRkFBNEU7VUFBNUUsNEVBQTRFO0FBQzlFO0FBRUE7RUFDRTtJQUNFLDJFQUFtRTtZQUFuRSxtRUFBbUU7RUFDckU7RUFDQTtJQUNFLCtFQUF1RTtZQUF2RSx1RUFBdUU7RUFDekU7QUFDRjtBQVBBO0VBQ0U7SUFDRSwyRUFBbUU7WUFBbkUsbUVBQW1FO0VBQ3JFO0VBQ0E7SUFDRSwrRUFBdUU7WUFBdkUsdUVBQXVFO0VBQ3pFO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsK0VBQXVFO1lBQXZFLHVFQUF1RTtFQUN6RTtFQUNBO0lBQ0UsNkVBQXFFO1lBQXJFLHFFQUFxRTtFQUN2RTtBQUNGO0FBUEE7RUFDRTtJQUNFLCtFQUF1RTtZQUF2RSx1RUFBdUU7RUFDekU7RUFDQTtJQUNFLDZFQUFxRTtZQUFyRSxxRUFBcUU7RUFDdkU7QUFDRjtBQUNBO0VBQ0U7SUFDRSw2RUFBcUU7WUFBckUscUVBQXFFO0VBQ3ZFO0VBQ0E7SUFDRSxpRkFBeUU7WUFBekUseUVBQXlFO0VBQzNFO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsNkVBQXFFO1lBQXJFLHFFQUFxRTtFQUN2RTtFQUNBO0lBQ0UsaUZBQXlFO1lBQXpFLHlFQUF5RTtFQUMzRTtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hYm91dCAuaGVhZGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hYm91dCBoMyB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG4gIFxyXG4gIG1heC13aWR0aDogMzcwcHg7ICBcclxufVxyXG4uYWJvdXQgaDR7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY0MHB4O1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuaGVhZGVyX19jb250ZW50IHtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWJvdXQgLmJvdG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNjAwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYm90b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAzLCAzKTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4uYWJvdXQgLmJvdG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMywgMywgMC43NzQpO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5hYm91dCAud2h5dGlua2VyLFxyXG4ub3VybWlzc2lvbixcclxuLm91cnZpc2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiByZ2IoNzMsIDEwNywgMTUwKTtcclxuICAvKiBtYXgtd2lkdGg6IDQwMHB4OyAqL1xyXG59XHJcblxyXG4uYWJvdXQgLmltZ19fYWJvdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi8qIHRlYW0gY3NzICovXHJcblxyXG4ub3VyLXRlYW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ub3VyLXRlYW0gLnBpYyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5vdXItdGVhbSAucGljOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbn1cclxuLm91ci10ZWFtOmhvdmVyIC5waWM6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm91ci10ZWFtIC5waWMgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLm91ci10ZWFtIC5zb2NpYWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbn1cclxuLm91ci10ZWFtOmhvdmVyIC5zb2NpYWwge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm91ci10ZWFtIC5zb2NpYWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ub3VyLXRlYW0gLnNvY2lhbCBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xyXG59XHJcbi5vdXItdGVhbSAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm91ci10ZWFtIC50ZWFtLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkICNkZGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTcwcHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xyXG59XHJcbi5vdXItdGVhbTpob3ZlciAudGVhbS1jb250ZW50IHtcclxuICBib3JkZXI6IDJweCBkb3R0ZWQgIzAwYWRhZTtcclxufVxyXG4ub3VyLXRlYW0gLnRlYW0taW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTJweDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5vdXItdGVhbSAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDY0NjQ2O1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XHJcbn1cclxuLm91ci10ZWFtOmhvdmVyIC50aXRsZSB7XHJcbiAgY29sb3I6ICMwMGFkYWU7XHJcbn1cclxuLm91ci10ZWFtIC5wb3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0NjQ2NDY7XHJcbn1cclxuXHJcbi8qIC5vdXItdGVhbSAuaW1nLXRlYW17XHJcbiAgICBoZWlnaHQ6MzAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjMwMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMTA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxyXG4gICAgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcclxuICAgIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiKDMsIDE2LCA1OSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTM1ZGVnLFxyXG4gICAgcmdiYSg2NCwgMjE5LCAyMTYsIDAuMTUpIDAlLFxyXG4gICAgcmdiYSgzLCAxNiwgNTksIDAuMTUpIDM1JVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5odG1sLFxyXG5odG1sIGEsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg1LFxyXG5oNixcclxuYSxcclxucCxcclxubGksXHJcbmRsLFxyXG50aCxcclxuZHQsXHJcbmlucHV0LFxyXG50ZXh0YXJlYSxcclxuc3BhbixcclxuZGl2IHtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXNoYWRvdzogcmdiKDAgMCAwIC8gMCUpIDFweCAxcHggMXB4O1xyXG59XHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsXHJcbiAgICBtb25vc3BhY2U7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWlyaTppdGFsQDEmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xdW90ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbWluKDZ2dywgMTIwcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnF1b3RlIGJsb2NrcXVvdGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5xdW90ZSBwIHtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtaXJpXCIsIHNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnF1b3RlIHAgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnF1b3RlIC5jdXQtdGV4dC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlQ3V0Q2xpcCA0cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbi5xdW90ZSAuY3V0LXRleHQtY29udGFpbmVyIC5jdXQtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xOTAvMTkyMC8xMDgwKTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnF1b3RlIC5jdXQtdGV4dC1jb250YWluZXIgc3BhbiB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ucXVvdGUgLmNvbG9yZWQtdGV4dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFuaW1hdGlvbjogbW92ZVRvcENvbG9yZWRDbGlwIDRzIGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKSBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuLnF1b3RlIC5jb2xvcmVkLXRleHQuc2Vjb25kIHtcclxuICB0b3A6IDUwJTtcclxuICBhbmltYXRpb246IG1vdmVCb3R0b21Db2xvcmVkQ2xpcCA0cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbi5xdW90ZSBmaWdjYXB0aW9uIHtcclxuICBsaW5lLWhlaWdodDogMC40O1xyXG59XHJcbi5xdW90ZSBjaXRlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjRlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICBhbmltYXRpb246IGZhZGVJbkF1dGhvciA0cyBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVDdXRDbGlwIHtcclxuICAwJSwgMjUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigzNXB4IDAlLCAxMDAlIDAlLCBjYWxjKDEwMCUgLSAzNXB4KSA1MCUsIDAlIDUwJSk7XHJcbiAgfVxyXG4gIDc1JSwgMTAwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzVweCA1MCUsIDEwMCUgNTAlLCBjYWxjKDEwMCUgLSAzNXB4KSAxMDAlLCAwJSAxMDAlKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZlVG9wQ29sb3JlZENsaXAge1xyXG4gIDAlLCAyNSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDM1cHggLTEwMCUsIDEwMCUgLTEwMCUsIGNhbGMoMTAwJSAtIDM1cHgpIDAlLCAwJSAwJSk7XHJcbiAgfVxyXG4gIDc1JSwgMTAwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzVweCAwJSwgMTAwJSAwJSwgY2FsYygxMDAlIC0gMzVweCkgMTAwJSwgMCUgMTAwJSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZUJvdHRvbUNvbG9yZWRDbGlwIHtcclxuICAwJSwgMjUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigzNXB4IDAlLCAxMDAlIDAlLCBjYWxjKDEwMCUgLSAzNXB4KSAxMDAlLCAwJSAxMDAlKTtcclxuICB9XHJcbiAgNzUlLCAxMDAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigzNXB4IDEwMCUsIDEwMCUgMTAwJSwgY2FsYygxMDAlIC0gMzVweCkgMjAwJSwgMCUgMjAwJSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluQXV0aG9yIHtcclxuICAwJSwgMjUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDc1JSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.logged_in = false;
    }
    getItems() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'items/', { headers: this.httpHeaders });
    }
    getfblink() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'fblinks/', { headers: this.httpHeaders });
    }
    getMachines() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'machines/', { headers: this.httpHeaders });
    }
    getRequests() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requests?', { headers: this.httpHeaders });
    }
    rollSearch(roll) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requestss' + '?roll_number=' + roll);
    }
    requestDate() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requestsd/');
    }
    itemSearch(query) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'itemss' + '?query=' + query);
    }
    machineSearch(query) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'machiness' + '?query=' + query);
    }
    createRequest(x) {
        const body = { item: x.item, quantity: x.quantity, roll_number: x.roll_number };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requests/', body, { headers: this.httpHeaders });
    }
    createFlag(x) {
        const body = { item: x.item, roll_number: x.roll_number };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'flags/', body, { headers: this.httpHeaders });
    }
    updateItem(item) {
        const body = {
            quantity: item.quantity, critical_val: item.critical_val, colour_code: item.colour_code, is_flagged: item.is_flagged, price: item.price
        };
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'items/' + item.id + '/', body, { headers: this.httpHeaders });
    }
    updateMachine(machine) {
        const body = {
            status: machine.status
        };
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'machines/' + machine.id + '/', body, { headers: this.httpHeaders });
    }
    getCustomers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'customers/', { headers: this.httpHeaders });
    }
    getFlags() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'flags/', { headers: this.httpHeaders });
    }
    getMachinetut() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'machineTutorials/', { headers: this.httpHeaders });
    }
    getEvents() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'upcomingEvents/', { headers: this.httpHeaders });
    }
    updateRequest(req) {
        const body = { item: req.item, quantity: req.quantity, roll: req.roll, is_sent: req.is_sent, is_approved: req.is_approved, is_issued: req.is_issued, is_returned: req.is_returned, is_denied: req.is_denied, checkout_time: req.checkout_time, issued_time: req.issued_time, returned_time: req.returned_time };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requests/' + req.id + '/', body, { headers: this.httpHeaders });
    }
    deleteRequest(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'requests/' + id + '/', { headers: this.httpHeaders });
    }
    deleteFlag(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'flags/' + id + '/', { headers: this.httpHeaders });
    }
    createMail(roll_number) {
        const body = {
            'roll_number': roll_number, subject: 'subject', message: 'message', recipient_list: 'add some default recipient', html_message: 'initialised html_message'
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'mail/' + roll_number, body, { headers: this.httpHeaders });
    }
    sendMail(roll_number) {
        console.log('sending');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'sendmail/' + roll_number, { responseType: 'text' });
    }
    updateMail(mail) {
        const body = {
            subject: mail.subject, message: mail.message, recipient_list: mail.recipient_list, html_message: mail.html_message
        };
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'mails/' + mail.roll_number + '/', body, { headers: this.httpHeaders });
    }
    getCustomer(roll_number) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'customer/' + roll_number, { headers: this.httpHeaders });
    }
    updateCustomer(data) {
        const body = {
            first_name: data.first_name, last_name: data.last_name, email: data.email, roll_number: data.roll_number, username: data.username,
            access_token: data.access_token, refresh_token: data.refresh_token
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'customer/' + data.roll_number, body, { headers: this.httpHeaders });
    }
    is_Authenticated() {
        if (this.getJdata(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey)) {
            this.logged_in = true;
        }
        else {
            this.logged_in = false;
        }
        return this.logged_in;
    }
    logout() { this.removeJdata(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey); this.logged_in = false; window.location.reload(); }
    get_user_data() { return this.user_data; }
    set_user_data(data) { this.user_data = data; }
    setJdata(key, value) { localStorage.setItem(key, value); }
    getJdata(key) { return localStorage.getItem(key); }
    removeJdata(key) { localStorage.removeItem(key); }
    authenticate_technician(data) {
        const body = { username: data.username, password: data.password };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'auth_technician/', body, { headers: this.httpHeaders });
    }
    check_technician() {
        if (this.getJdata(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey)) {
            var x = false;
            var roll_number = window.atob(JSON.parse(this.getJdata(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey)).roll_number);
            src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].technicians.forEach(repeat);
            function repeat(technician) {
                if (roll_number == technician) {
                    x = true;
                }
            }
            return x;
        }
        else
            return false;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TECHNICIAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " INVENTORY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_42_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_42_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issued Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_42_a_4_Template, 2, 0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_42_a_5_Template, 2, 0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_42_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.user_data.first_name, " ", ctx_r2.user_data.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.logged_in);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.logged_in);
} }
const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.title = 'TLfront';
        this.flags = [];
        this.items = [];
        this.logged_in = false;
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
        this.user_data = null;
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/vanta.waves.min.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript2Element = document.createElement("script");
        this.myScript2Element.src = "assets/js/script.js";
        document.body.appendChild(this.myScript2Element);
        this.events_href = "events";
        this.year = new Date().getFullYear().toString();
        this.time = (new Date().getTime()) / 1000;
    }
    ngOnInit() {
        this.api.getItems().subscribe(data => {
            this.items = data;
            this.api.getFlags().subscribe(data => {
                this.flags = data;
                this.flags.forEach(element => {
                    console.log(this.time);
                    if ((this.time - ((new Date(element.time)).getTime()) / 1000) > 86400) {
                        console.log(element);
                        this.items[element.item - 1].is_flagged = false;
                        this.api.updateItem(this.items[element.item - 1]).subscribe(data => {
                            console.log(data);
                        }, error => {
                            console.log(error);
                        });
                        this.flags.splice(element.id - 1, 1);
                        this.api.deleteFlag(element.id).subscribe(data => {
                            console.log(data);
                        }, error => {
                            console.log(error);
                        });
                    }
                });
            }, error => {
                console.log(error);
            });
            this.api.requestDate().subscribe(data => {
                this.requests = data;
                this.requests.forEach(element => {
                    if (((this.time - ((new Date(element.issued_time)).getTime()) / 1000) / 1000) > 2592) {
                        element.email_sent = true;
                        this.api.updateRequest(element).subscribe(data => {
                        }, error => {
                            console.log(error);
                        });
                        this.api.getCustomer(element.roll_number).subscribe(data => {
                            this.customer = data;
                            this.mail.roll_number = element.roll_number;
                            this.mail.subject = 'Item not returned';
                            this.mail.message = this.items[element.item - 1].name + ' <h1>has not been returned</h1>';
                            this.mail.recipient_list = "['tanmay.v.hiremath@gmail.com']"; //"['"+this.customer.email+"']"
                            this.mail.html_message = this.customer.first_name + ' ' + this.customer.last_name + ', <br>The following items have not been returned in the past month:<br>' + this.items[element.item - 1].name + ': Quantity = ' + element.quantity + '<br>Detail of student: ' + element.roll_number + '<br><strong>Return the items immediately. Any further delays will result in the matter escalating to the Faculty Advisor and strict action will be taken. </strong><br>Please contact the managers on tinkererslaboratory@gmail.com immediately.';
                            this.api.updateMail(this.mail).subscribe(data => {
                                console.log(data);
                                this.api.sendMail(element.roll_number)
                                    .subscribe(data => { }, error => { console.log(error); });
                            }, error => { console.log(error); });
                        }, error => {
                            console.log(error);
                        });
                    }
                });
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
        var urlParams = new URLSearchParams(window.location.search);
        this.code = urlParams.get('code');
        if (this.code != null) {
            console.log(this.code);
            this.router.navigate(['']);
            const that = this;
            $.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + 'autho/', { code: this.code }, function (data) {
                that.api.updateCustomer(data).subscribe(data => { console.log(data), error => { console.log(error); }; });
                delete data['refresh_token'];
                delete data['access_token'];
                console.log(data);
                that.api.set_user_data(data);
                data.roll_number = window.btoa(data.roll_number);
                that.api.setJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jdataKey, JSON.stringify(data));
                window.location.reload();
            });
        }
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jdataKey));
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
            this.api.createMail(this.user_data.roll_number).subscribe(data => { console.log(data); }, error => { console.log(error); });
            this.api.getCustomer(this.user_data.roll_number)
                .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
        }
        else { }
        $(document).ready(function () {
            $('.dropdown-toggl').click(function () {
                $('.dropdown-men').fadeToggle(200);
            });
            $('body').click(function (evt) {
                if (evt.target.id == "dropdown-toggl")
                    return;
                if ($(evt.target).closest('#dropdown-toggl').length)
                    return;
                $('.dropdown-men').fadeOut(200);
            });
            $(document).scroll(function () {
                if ($(window).scrollTop() > 700) {
                    document.getElementById("scrollBtn").style.display = "block";
                    $(".nav").css({ "background": "black", "position": "sticky", "top": "0" });
                }
                else {
                    document.getElementById("scrollBtn").style.display = "none";
                    $(".nav").css({ "background": "#20c9c3", "position": "static" });
                }
            });
            $("#scrollBtn").click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1200);
            });
            $("#uncheck").click(function () {
                $("#nav-check").prop("checked", false);
            });
        });
    }
    logout() {
        this.api.logout();
    }
    Check_Technician() {
        return this.api.check_technician();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 96, vars: 6, consts: [["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "theme-color", "content", "#000000"], ["name", "description", "content", "IIT Bombay TINKERERS  TINKERERS' LAB "], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"], [1, "navbar", "navbar-expand-md", "fixed-top", "shadow", "pt-2"], ["href", "/", 1, "navbar-brand", "ml-2"], ["src", "assets\\Images\\TL2.png", "height", "60", "width", "60", 1, "navbar-logo"], ["data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], ["title", "Menu", 1, "nav-icon"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mx-3"], ["class", "nav-link button-nav", "routerLink", "technician", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "", "routerLinkActive", "active-link", 1, "nav-link", "button-nav", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], ["routerLinkActive", "active-link", 1, "nav-link", "button-nav", 3, "href"], ["routerLink", "machinestatus", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], ["routerLink", "machinetut", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], ["class", "nav-link button-nav", "routerLink", "inventory", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "contact", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], ["class", "dropdown", 4, "ngIf"], ["id", "footer", 1, "jumbotron", "jumbotron-fluid", "navbar-static-bottom", 2, "background-color", "rgb(2, 23, 26)"], [1, "container-fluid"], [1, "row", "align-items-end"], [1, "col-sm-1"], [1, "col-sm-6"], [2, "font-family", "'Delius Swash Caps', cursive", "color", "#fff"], ["routerLink", "contact", 1, "btn", "btn-primary"], ["id", "contact-info", 1, "col-sm-5"], [1, "fas", "fa-map-marker-alt", "pr-2"], ["href", "https://goo.gl/maps/7pt9kAvjsNK5zvzDA", "target", "_blank"], [1, "fas", "fa-envelope", "pr-2"], ["href", "mailto:tinkererslaboratory@gmail.com"], [1, "fas", "fa-phone-alt", "pr-2"], ["href", "tel://022 2576 4381"], [1, "fas", "fa-clock", "pr-2"], [2, "color", "white"], [1, "col-sm-5"], [1, "col-sm-4"], ["href", "https://www.linkedin.com/company/tinkerers-lab/", "id", "linkedin", "target", "_blank", 1, "pr-3"], [1, "fab", "fa-linkedin-in", "fa-2x"], ["href", "https://www.facebook.com/tinkererIITB/", "id", "facebook", "target", "_blank", 1, "pr-3", "pl-2"], [1, "fab", "fa-facebook-f", "fa-2x"], ["href", "https://www.instagram.com/tinkererslab.iitb/", "id", "instagram", "target", "_blank", 1, "pl-2"], [1, "fab", "fa-instagram", "fa-2x"], [1, "col-sm-3"], [1, "row", "pt-3"], [1, "col-sm"], [2, "color", "grey"], [1, "far", "fa-copyright", "p-2"], ["routerLink", "technician", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], ["routerLink", "inventory", "routerLinkActive", "active-link", 1, "nav-link", "button-nav"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", "routerLink", "../cart", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "../approved", 4, "ngIf"], ["routerLink", "", 1, "dropdown-item", 3, "click"], ["routerLink", "../cart", 1, "dropdown-item"], ["routerLink", "../approved", 1, "dropdown-item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TINKERERS' LAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_a_21_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " ABOUT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " EVENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " MACHINE STATUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " MACHINE TUTORIALS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppComponent_a_38_Template, 2, 0, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " CONTACT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_div_42_Template, 8, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Tinkerers' Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "N5 Bay, Infinity Corridor, Nr. Mechanical Eng. Dept., IITB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "tinkererslaboratory@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "022 2576 4381");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "24*7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Check_Technician());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.events_href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".navbar-nav.navbar-center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translatex(-50%);\r\n\r\n\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  margin-left: 50px;\r\n  font-size:18px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  transition: all 0.3s;\r\n  padding:5px;\r\n}\r\n\r\n.navbar-active[_ngcontent-%COMP%]{\r\n \r\n  font-size:15px;\r\n  background-color: rgba(3, 16, 59, 0.671);\r\n  box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important;\r\n  -webkit-backdrop-filter: blur(27px);\r\n          backdrop-filter: blur(27px);\r\n}\r\n\r\n@media screen and (max-width : 800px){\r\n  .navbar-logo[_ngcontent-%COMP%]{\r\n  \r\n    transform:scale(0.7);\r\n    \r\n\r\n}\r\n\r\n\r\nnav[_ngcontent-%COMP%]    > #collapsibleNavbar[_ngcontent-%COMP%]{\r\n  background-color: rgba(28, 0, 54, 0.65);\r\n  -webkit-backdrop-filter: blur(17px);\r\n          backdrop-filter: blur(17px);\r\n}\r\n\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  background-color:transparent;\r\n\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n    width: 25px;\r\n    height: 45px;\r\n    z-index: 20;\r\n    cursor: pointer;\r\n  }\r\n\r\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 3px;\r\n    margin-bottom: 5px;\r\n    background-color: white;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n.navbar-on[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .navbar-on[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .navbar-on[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] { background-color: white; }\r\n\r\n.navbar-on[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n    transform-origin: 10% 40%;\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n.navbar-on[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n    transform-origin: 10% 40%;\r\n    transform: rotate(-45deg);\r\n  }\r\n\r\n.navbar-on[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] { background-color: transparent; }\r\n\r\n.button-nav[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.button-nav[_ngcontent-%COMP%]:hover{\r\n  color: rgba(255, 255, 255, 0.8);\r\n \r\n}\r\n\r\n.home1[_ngcontent-%COMP%]{\r\n  height:100vh;\r\n  width:100%;\r\n \r\n\r\n}\r\n\r\n.home1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 10%;\r\n  top:45%;\r\n  text-align: left !important;\r\n\r\n}\r\n\r\n.home1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  \r\n  white-space: nowrap;\r\n  left: 0;\r\n  top: 0;\r\n  font-style: normal\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\ncolor: #999\r\n}\r\n\r\n.white[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\ncolor: #fff\r\n}\r\n\r\n.dynamic-title[_ngcontent-%COMP%] {\r\nfloat: none;\r\nmargin: 0 auto;\r\ndisplay: table;\r\nwidth: auto;\r\nfont-family: 'Roboto Slab', serif;\r\nfont-size: 50px;\r\nline-height: 20px;\r\nfont-weight: 700;\r\nmargin-bottom: 20px;\r\ntext-transform: uppercase;\r\n}\r\n\r\n@media screen and (max-width:600px){\r\n  .dynamic-title[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin: 0 auto;\r\n    display: table;\r\n    width: auto;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 40px;\r\n    line-height: 20px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n    }\r\n    \r\n}\r\n\r\ndiv#text-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\nposition: absolute;\r\ndisplay: inline-block;\r\ntop: 200px;\r\nwidth: 40px;\r\nheight: 40px;\r\nborder-radius: 50%;\r\ncolor: #fff;\r\noverflow: hidden;\r\ntransition-delay: 0.2s;\r\ntransition: .3s background;\r\noutline: none;\r\nfont-size: 15px;\r\nfont-family: 'Roboto Black','Helvetica',sans-serif;\r\nfont-weight: 300;\r\n}\r\n\r\nspan.gold-title[_ngcontent-%COMP%] {\r\n  font-size: 40px !important;\r\n  \r\n  color: #FFC11F;\r\n}\r\n\r\n#st[_ngcontent-%COMP%]:after, .mess-us[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: linear-gradient(50deg, rgba(0, 0, 0, 0.699), rgb(175, 2, 2));\r\n  transition: width 0.8s linear;\r\n  z-index: -1;\r\n}\r\n\r\n#st[_ngcontent-%COMP%]:hover::after, .mess-us[_ngcontent-%COMP%]:hover::after {\r\n  -webkit-animation: animate;\r\n          animation: animate;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n  width: 100%;\r\n}\r\n\r\n#st[_ngcontent-%COMP%]:hover, .mess-us[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n  0% {\r\n    width: 20%;\r\n  }\r\n\r\n  20% {\r\n    width: 40%;\r\n  }\r\n\r\n  40% {\r\n    width: 60%;\r\n  }\r\n\r\n  70% {\r\n    width: 80%;\r\n  }\r\n\r\n  98% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    width: 20%;\r\n  }\r\n\r\n  20% {\r\n    width: 40%;\r\n  }\r\n\r\n  40% {\r\n    width: 60%;\r\n  }\r\n\r\n  70% {\r\n    width: 80%;\r\n  }\r\n\r\n  98% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n#start[_ngcontent-%COMP%]   #st[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 160px;\r\n  text-align: center;\r\n  background: linear-gradient(45deg, rgb(151, 148, 148), rgb(4, 4, 94));\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#start[_ngcontent-%COMP%]   .mess-us[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background: linear-gradient(45deg, black, blue);\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  height: 40px;\r\n  width: 40px;\r\n  margin-left: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#start[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:nth-child(1) {\r\n  color: #f6f8fa;\r\n}\r\n\r\n#start[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:nth-child(2) {\r\n  color: #f6f8fa;\r\n}\r\n\r\n\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nposition: relative;\r\ntext-align: left;\r\n}\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nposition: absolute;\r\nwhite-space: nowrap;\r\nleft: 0;\r\ntop: 0;\r\nfont-style: normal;\r\n}\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nfont-style: normal;\r\n}\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nposition: relative;\r\n}\r\n\r\n.no-js[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.no-js[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\ntransform-origin: 50% 100%;\r\ntransform: rotateX(180deg);\r\n}\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\ntransform: rotateX(0deg);\r\n-webkit-animation: cd-rotate-1-in 1.2s;\r\nanimation: cd-rotate-1-in 1.2s;\r\n}\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\ntransform: rotateX(180deg);\r\n-webkit-animation: cd-rotate-1-out 1.2s;\r\nanimation: cd-rotate-1-out 1.2s;\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-1-in {\r\n0% {\r\n  -webkit-transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n35% {\r\n  -webkit-transform: rotateX(120deg);\r\n  opacity: 0;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-1-in {\r\n0% {\r\n  transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n35% {\r\n  transform: rotateX(120deg);\r\n  opacity: 0;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-1-out {\r\n0% {\r\n  -webkit-transform: rotateX(0deg);\r\n  opacity: 1;\r\n}\r\n35% {\r\n  -webkit-transform: rotateX(-40deg);\r\n  opacity: 1;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-1-out {\r\n0% {\r\n  transform: rotateX(0deg);\r\n  opacity: 1;\r\n}\r\n35% {\r\n  transform: rotateX(-40deg);\r\n  opacity: 1;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nvertical-align: top;\r\noverflow: hidden;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\nright: 0;\r\ntop: 50%;\r\nbottom: auto;\r\ntransform: translateY(-50%);\r\nheight: 90%;\r\nwidth: 1px;\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.waiting[_ngcontent-%COMP%]::after {\r\n-webkit-animation: cd-pulse 1s infinite;\r\nanimation: cd-pulse 1s infinite;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%] {\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%]::after {\r\nvisibility: hidden;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ncolor: #0d0d0d;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nvisibility: hidden;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nvisibility: visible;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nvisibility: hidden;\r\n}\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\nposition: relative;\r\nvisibility: visible;\r\n}\r\n\r\n@-webkit-keyframes cd-pulse {\r\n0% {\r\n  -webkit-transform: translateY(-50%) scale(1);\r\n  opacity: 1;\r\n}\r\n40% {\r\n  -webkit-transform: translateY(-50%) scale(0.9);\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: translateY(-50%) scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n@keyframes cd-pulse {\r\n0% {\r\n  transform: translateY(-50%) scale(1);\r\n  opacity: 1;\r\n}\r\n40% {\r\n  transform: translateY(-50%) scale(0.9);\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: translateY(-50%) scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .cd-headline.rotate-2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\n}\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform-style: preserve-3d;\r\ntransform: translateZ(-20px) rotateX(90deg);\r\nopacity: 0;\r\n}\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-2-in 0.4s forwards;\r\nanimation: cd-rotate-2-in 0.4s forwards;\r\n}\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-2-out 0.4s forwards;\r\nanimation: cd-rotate-2-out 0.4s forwards;\r\n}\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ntransform: translateZ(20px);\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateX(0deg);\r\nopacity: 0;\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ntransform: scale(1);\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-2-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(90deg);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(-10deg);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(0deg);\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-2-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(90deg);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(-10deg);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(0deg);\r\n}\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-2-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(-100deg);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(-90deg);\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-2-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(-100deg);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(-90deg);\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\nleft: 0;\r\nbottom: 0;\r\nheight: 3px;\r\nwidth: 0;\r\nbackground: #0096a7;\r\nz-index: 2;\r\ntransition: width 0.3s -0.1s;\r\n}\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper.is-loading[_ngcontent-%COMP%]::after {\r\nwidth: 100%;\r\ntransition: width 3s;\r\n}\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ntop: .2em;\r\nopacity: 0;\r\ntransition: opacity 0.3s;\r\n}\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\ntop: 0;\r\n}\r\n\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\ntop: .2em;\r\n}\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\ntop: 0;\r\nopacity: 1;\r\n-webkit-animation: slide-in 0.6s;\r\nanimation: slide-in 0.6s;\r\n}\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: slide-out 0.6s;\r\nanimation: slide-out 0.6s;\r\n}\r\n\r\n@-webkit-keyframes slide-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(20%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(0);\r\n}\r\n}\r\n\r\n@keyframes slide-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateY(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateY(20%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n}\r\n\r\n@-webkit-keyframes slide-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(120%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(100%);\r\n}\r\n}\r\n\r\n@keyframes slide-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateY(120%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateY(100%);\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nright: 0;\r\nwidth: 2px;\r\nheight: 100%;\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n-webkit-animation: zoom-in 0.8s;\r\nanimation: zoom-in 0.8s;\r\n}\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: zoom-out 0.8s;\r\nanimation: zoom-out 0.8s;\r\n}\r\n\r\n@-webkit-keyframes zoom-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(100px);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(0);\r\n}\r\n}\r\n\r\n@keyframes zoom-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateZ(100px);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateZ(0);\r\n}\r\n}\r\n\r\n@-webkit-keyframes zoom-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(0);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-100px);\r\n}\r\n}\r\n\r\n@keyframes zoom-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateZ(0);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateZ(-100px);\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\ntransform: rotateY(180deg);\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\n}\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateY(0deg);\r\n}\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-3-in 0.6s forwards;\r\nanimation: cd-rotate-3-in 0.6s forwards;\r\n}\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-3-out 0.6s forwards;\r\nanimation: cd-rotate-3-out 0.6s forwards;\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateY(0deg);\r\nopacity: 0;\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-3-in {\r\n0% {\r\n  -webkit-transform: rotateY(180deg);\r\n}\r\n100% {\r\n  -webkit-transform: rotateY(0deg);\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-3-in {\r\n0% {\r\n  transform: rotateY(180deg);\r\n}\r\n100% {\r\n  transform: rotateY(0deg);\r\n}\r\n}\r\n\r\n@-webkit-keyframes cd-rotate-3-out {\r\n0% {\r\n  -webkit-transform: rotateY(0);\r\n}\r\n100% {\r\n  -webkit-transform: rotateY(-180deg);\r\n}\r\n}\r\n\r\n@keyframes cd-rotate-3-out {\r\n0% {\r\n  transform: rotateY(0);\r\n}\r\n100% {\r\n  transform: rotateY(-180deg);\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nopacity: 0;\r\ntransform: scale(0);\r\n}\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: scale-up 0.6s forwards;\r\nanimation: scale-up 0.6s forwards;\r\n}\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: scale-down 0.6s forwards;\r\nanimation: scale-down 0.6s forwards;\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: scale(1);\r\nopacity: 0;\r\n}\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n@-webkit-keyframes scale-up {\r\n0% {\r\n  -webkit-transform: scale(0);\r\n  opacity: 0;\r\n}\r\n60% {\r\n  -webkit-transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  -webkit-transform: scale(1);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n@keyframes scale-up {\r\n0% {\r\n  transform: scale(0);\r\n  opacity: 0;\r\n}\r\n60% {\r\n  transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n@-webkit-keyframes scale-down {\r\n0% {\r\n  -webkit-transform: scale(1);\r\n  opacity: 1;\r\n}\r\n60% {\r\n  -webkit-transform: scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n@keyframes scale-down {\r\n0% {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n60% {\r\n  transform: scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n-webkit-animation: push-in 0.6s;\r\nanimation: push-in 0.6s;\r\n}\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: push-out 0.6s;\r\nanimation: push-out 0.6s;\r\n}\r\n\r\n@-webkit-keyframes push-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(10%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(0);\r\n}\r\n}\r\n\r\n@keyframes push-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateX(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateX(10%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n}\r\n\r\n@-webkit-keyframes push-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(110%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(100%);\r\n}\r\n}\r\n\r\n@keyframes push-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateX(110%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateX(100%);\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjs7O0FBRzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUlBOztFQUVFLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsaURBQWlEO0VBQ2pELG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBR0E7RUFDRTs7SUFFRSxvQkFBb0I7SUFDcEIsd0JBQXdCOztBQUU1Qjs7O0FBR0E7RUFDRSx1Q0FBdUM7RUFDdkMsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTs7QUFFQTtFQUNFLDRCQUE0Qjs7QUFFOUI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBRXpCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQVFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7QUFFQTs7O0lBR0UsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztFQUNsQzs7QUFFQTs7cUJBRW1CLHVCQUF1QixFQUFFOztBQUU1QztJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCOztBQUVBLG1CQUFtQiw2QkFBNkIsRUFBRTs7QUFHcEQ7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCOztBQUVqQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0NBQ1gsdUJBQXVCOztBQUV4Qjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDJCQUEyQjs7QUFFN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLE1BQU07RUFDTjtBQUNGOztBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQSxXQUFXO0FBQ1gsY0FBYztBQUNkLGNBQWM7QUFDZCxXQUFXO0FBQ1gsaUNBQWlDO0FBQ2pDLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekI7O0FBR0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qjs7QUFFSjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsVUFBVTtBQUNWLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsZUFBZTtBQUNmLGtEQUFrRDtBQUNsRCxnQkFBZ0I7QUFDaEI7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBSUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCx3RUFBd0U7RUFDeEUsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSwwQkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBcEJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFFQUFxRTtFQUNyRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUE7Ozs7a0NBSWtDOztBQUNsQztBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsT0FBTztBQUNQLE1BQU07QUFDTixrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7Ozs7a0NBSWtDOztBQUNsQztBQUdBLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLFVBQVU7QUFLViwwQkFBMEI7QUFLMUIsMEJBQTBCO0FBQzFCOztBQUNBO0FBQ0EsVUFBVTtBQUtWLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFFdEMsOEJBQThCO0FBQzlCOztBQUNBO0FBS0EsMEJBQTBCO0FBQzFCLHVDQUF1QztBQUV2QywrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjtBQUNBOztBQWtCQTtBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFLRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjtBQUNBOztBQWtCQTtBQUNBO0VBS0Usd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjtBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFLRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7O0FBQ0E7Ozs7a0NBSWtDOztBQUNsQztBQUNBLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1IsUUFBUTtBQUNSLFlBQVk7QUFLWiwyQkFBMkI7QUFDM0IsV0FBVztBQUNYLFVBQVU7QUFDVix5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSx1Q0FBdUM7QUFFdkMsK0JBQStCO0FBQy9COztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxVQUFVO0FBQ1o7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFDQTs7QUFlQTtBQUNBO0VBS0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjtBQUNBO0VBS0Usc0NBQXNDO0VBQ3RDLFVBQVU7QUFDWjtBQUNBO0VBS0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjtBQUNBOztBQUNBOzs7O2tDQUlrQzs7QUFDbEM7QUFHQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQjs7QUFDQTtBQUtBLDRCQUE0QjtBQUs1QiwyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWOztBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUNBO0FBQ0EsK0NBQStDO0FBRS9DLHVDQUF1QztBQUN2Qzs7QUFDQTtBQUNBLGdEQUFnRDtBQUVoRCx3Q0FBd0M7QUFDeEM7O0FBQ0E7QUFLQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFLQSx3QkFBd0I7QUFDeEIsVUFBVTtBQUNWOztBQUNBO0FBS0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0RBQWtEO0FBQ3BEO0FBQ0E7O0FBZUE7QUFDQTtFQUNFLFVBQVU7RUFLViwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLFVBQVU7RUFLViw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFVBQVU7RUFLViwwQ0FBMEM7QUFDNUM7QUFDQTs7QUFDQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsVUFBVTtFQUNWLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9EQUFvRDtBQUN0RDtBQUNBOztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNENBQTRDO0FBQzlDO0FBQ0E7O0FBQ0E7Ozs7a0NBSWtDOztBQUNsQztBQUNBLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25COztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsT0FBTztBQUNQLFNBQVM7QUFDVCxXQUFXO0FBQ1gsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixVQUFVO0FBR1YsNEJBQTRCO0FBQzVCOztBQUNBO0FBQ0EsV0FBVztBQUdYLG9CQUFvQjtBQUNwQjs7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBR1Ysd0JBQXdCO0FBQ3hCOztBQUNBO0FBQ0EsVUFBVTtBQUNWLE1BQU07QUFDTjs7QUFFQTs7OztrQ0FJa0M7O0FBQ2xDO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjs7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNUOztBQUNBO0FBQ0EsTUFBTTtBQUNOLFVBQVU7QUFDVixnQ0FBZ0M7QUFFaEMsd0JBQXdCO0FBQ3hCOztBQUNBO0FBQ0EsaUNBQWlDO0FBRWpDLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBOztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7QUFDQTs7QUFlQTtBQUNBO0VBQ0UsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBOztBQUNBOzs7O2tDQUlrQzs7QUFDbEM7QUFDQSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmOztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjs7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixRQUFRO0FBQ1IsVUFBVTtBQUNWLFlBQVk7QUFDWix5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7Ozs7a0NBSWtDOztBQUNsQztBQUdBLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFDQTtBQUNBLFVBQVU7QUFDViwrQkFBK0I7QUFFL0IsdUJBQXVCO0FBQ3ZCOztBQUNBO0FBQ0EsZ0NBQWdDO0FBRWhDLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBOztBQVdBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFVBQVU7RUFDVixxQ0FBcUM7QUFDdkM7QUFDQTs7QUFXQTtBQUNBO0VBQ0UsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDZCQUE2QjtBQUMvQjtBQUNBOztBQUNBOzs7O2tDQUlrQzs7QUFDbEM7QUFHQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxxQkFBcUI7QUFLckIsMEJBQTBCO0FBQzFCLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0I7O0FBQ0E7QUFLQSx3QkFBd0I7QUFDeEI7O0FBQ0E7QUFDQSwrQ0FBK0M7QUFFL0MsdUNBQXVDO0FBQ3ZDOztBQUNBO0FBQ0EsZ0RBQWdEO0FBRWhELHdDQUF3QztBQUN4Qzs7QUFFQTtBQUtBLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0FBU0E7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0Usd0JBQXdCO0FBQzFCO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7O0FBU0E7QUFDQTtFQUtFLHFCQUFxQjtBQUN2QjtBQUNBO0VBS0UsMkJBQTJCO0FBQzdCO0FBQ0E7O0FBQ0E7Ozs7a0NBSWtDOztBQUNsQztBQUNBLHFCQUFxQjtBQUNyQixVQUFVO0FBS1YsbUJBQW1CO0FBQ25COztBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUNBO0FBQ0EseUNBQXlDO0FBRXpDLGlDQUFpQztBQUNqQzs7QUFDQTtBQUNBLDJDQUEyQztBQUUzQyxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFLQSxtQkFBbUI7QUFDbkIsVUFBVTtBQUNWOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7O0FBZUE7QUFDQTtFQUtFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQTtFQUtFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQTtFQUtFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQTs7QUFDQTtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBOztBQVdBO0FBQ0E7RUFLRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFLRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7O0FBQ0E7Ozs7a0NBSWtDOztBQUNsQztBQUNBLFVBQVU7QUFDVjs7QUFDQTtBQUNBLFVBQVU7QUFDViwrQkFBK0I7QUFFL0IsdUJBQXVCO0FBQ3ZCOztBQUNBO0FBQ0EsZ0NBQWdDO0FBRWhDLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBOztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7O0FBQ0E7QUFDQTtFQUNFLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7QUFDQTs7QUFlQTtBQUNBO0VBQ0UsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdi5uYXZiYXItY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxuXHJcblxyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm5hdmJhci1hY3RpdmV7XHJcbiBcclxuICBmb250LXNpemU6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE2LCA1OSwgMC42NzEpO1xyXG4gIGJveC1zaGFkb3c6MCAxcmVtIDNyZW0gcmdiYSgwLDAsMCwuMTc1KSFpbXBvcnRhbnQ7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI3cHgpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDgwMHB4KXtcclxuICAubmF2YmFyLWxvZ297XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMC43KTtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtNDBweDsgKi9cclxuXHJcbn1cclxuXHJcblxyXG5uYXYgPiAjY29sbGFwc2libGVOYXZiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgMCwgNTQsIDAuNjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxN3B4KTtcclxufVxyXG5cclxufVxyXG5cclxubmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5uYXYtaWNvbiB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubmF2LWljb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYmFyMSxcclxuICAuYmFyMixcclxuICAuYmFyMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1vbiAuYmFyMSxcclxuICAubmF2YmFyLW9uIC5iYXIyLFxyXG4gIC5uYXZiYXItb24gLmJhcjMgeyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxyXG4gIFxyXG4gIC5uYXZiYXItb24gLmJhcjEge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAlIDQwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1vbiAuYmFyMyB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgNDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1vbiAuYmFyMiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcblxyXG5cclxuLmJ1dHRvbi1uYXZ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXY6aG92ZXJ7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuIFxyXG59XHJcbi5ob21lMXtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgd2lkdGg6MTAwJTtcclxuIC8qIHBvc2l0aW9uOnJlbGF0aXZlOyAqL1xyXG5cclxufVxyXG5cclxuXHJcbi5ob21lMSBzZWN0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgdG9wOjQ1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaG9tZTEgc2VjdGlvbiAudGFne1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbFxyXG59XHJcblxyXG5cclxuLnRpdGxlIGg1IHtcclxuY29sb3I6ICM5OTlcclxufVxyXG4ud2hpdGUgLnRpdGxlIGg1IHtcclxuY29sb3I6ICNmZmZcclxufVxyXG5cclxuXHJcbi5keW5hbWljLXRpdGxlIHtcclxuZmxvYXQ6IG5vbmU7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5kaXNwbGF5OiB0YWJsZTtcclxud2lkdGg6IGF1dG87XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcclxuZm9udC1zaXplOiA1MHB4O1xyXG5saW5lLWhlaWdodDogMjBweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIC5keW5hbWljLXRpdGxlIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5kaXYjdGV4dC1idG4gYnV0dG9uIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnRvcDogMjAwcHg7XHJcbndpZHRoOiA0MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuY29sb3I6ICNmZmY7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbnRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kO1xyXG5vdXRsaW5lOiBub25lO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIEJsYWNrJywnSGVsdmV0aWNhJyxzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuc3Bhbi5nb2xkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICAvKiBtYXJnaW46IC0xMHB4IDA7ICovXHJcbiAgY29sb3I6ICNGRkMxMUY7XHJcbn1cclxuXHJcblxyXG5cclxuI3N0OmFmdGVyLFxyXG4ubWVzcy11czo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMCwgMCwgMCwgMC42OTkpLCByZ2IoMTc1LCAyLCAyKSk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBsaW5lYXI7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNzdDpob3Zlcjo6YWZ0ZXIsXHJcbi5tZXNzLXVzOmhvdmVyOjphZnRlciB7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3N0OmhvdmVyLFxyXG4ubWVzcy11czpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICA5OCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4jc3RhcnQgI3N0IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNTEsIDE0OCwgMTQ4KSwgcmdiKDQsIDQsIDk0KSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc3RhcnQgLm1lc3MtdXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCBibHVlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdGFydDpob3ZlciBhOm50aC1jaGlsZCgxKSB7XHJcbiAgY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcbiNzdGFydDpob3ZlciBhOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5QcmltYXJ5IHN0eWxlXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2Qtd29yZHMtd3JhcHBlciB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5jZC13b3Jkcy13cmFwcGVyIGIge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuLmNkLXdvcmRzLXdyYXBwZXIgaSB7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4uY2Qtd29yZHMtd3JhcHBlciBiLmlzLXZpc2libGUge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5vLWpzIC5jZC13b3Jkcy13cmFwcGVyIGIge1xyXG5vcGFjaXR5OiAwO1xyXG59XHJcbi5uby1qcyAuY2Qtd29yZHMtd3JhcHBlciBiLmlzLXZpc2libGUge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbnhyb3RhdGUtMSBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbi13ZWJraXQtcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG4tbW96LXBlcnNwZWN0aXZlOiAzMDBweDtcclxucGVyc3BlY3RpdmU6IDMwMHB4O1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSBiIHtcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4tby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxudHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuLW8tdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSBiLmlzLXZpc2libGUge1xyXG5vcGFjaXR5OiAxO1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4td2Via2l0LWFuaW1hdGlvbjogY2Qtcm90YXRlLTEtaW4gMS4ycztcclxuLW1vei1hbmltYXRpb246IGNkLXJvdGF0ZS0xLWluIDEuMnM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTEtaW4gMS4ycztcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTEgYi5pcy1oaWRkZW4ge1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4tbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0xLW91dCAxLjJzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTEtb3V0IDEuMnM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTEtb3V0IDEuMnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1pbiB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1pbiB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMzUlIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkBrZXlmcmFtZXMgY2Qtcm90YXRlLTEtaW4ge1xyXG4wJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjM1JSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjY1JSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4xMDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2Qtcm90YXRlLTEtb3V0IHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1vdXQge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4zNSUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC00MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG42NSUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBjZC1yb3RhdGUtMS1vdXQge1xyXG4wJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC00MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxueHR5cGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogdmVydGljYWwgYmFyICovXHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAwO1xyXG50b3A6IDUwJTtcclxuYm90dG9tOiBhdXRvO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5oZWlnaHQ6IDkwJTtcclxud2lkdGg6IDFweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2FlYmNiOTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlci53YWl0aW5nOjphZnRlciB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBjZC1wdWxzZSAxcyBpbmZpbml0ZTtcclxuLW1vei1hbmltYXRpb246IGNkLXB1bHNlIDFzIGluZmluaXRlO1xyXG5hbmltYXRpb246IGNkLXB1bHNlIDFzIGluZmluaXRlO1xyXG59XHJcbi5jZC1oZWFkbGluZS50eXBlIC5jZC13b3Jkcy13cmFwcGVyLnNlbGVjdGVkIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2FlYmNiOTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlci5zZWxlY3RlZDo6YWZ0ZXIge1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgLmNkLXdvcmRzLXdyYXBwZXIuc2VsZWN0ZWQgYiB7XHJcbmNvbG9yOiAjMGQwZDBkO1xyXG59XHJcbi5jZC1oZWFkbGluZS50eXBlIGIge1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgYi5pcy12aXNpYmxlIHtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSBpIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgaS5pbiB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNkLXB1bHNlIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjkpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1wdWxzZSB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjQwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXB1bHNlIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjQwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjkpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cm90YXRlLTIgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUucm90YXRlLTIgLmNkLXdvcmRzLXdyYXBwZXIge1xyXG4td2Via2l0LXBlcnNwZWN0aXZlOiAzMDBweDtcclxuLW1vei1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbnBlcnNwZWN0aXZlOiAzMDBweDtcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTIgaSwgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGVtIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMiBpIHtcclxuLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4tbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbi1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4tby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG50cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmlzLXZpc2libGUgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMiBpLmluIHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0yLWluIDAuNHMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBjZC1yb3RhdGUtMi1pbiAwLjRzIGZvcndhcmRzO1xyXG5hbmltYXRpb246IGNkLXJvdGF0ZS0yLWluIDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkub3V0IHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0yLW91dCAwLjRzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTItb3V0IDAuNHMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTItb3V0IDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGVtIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XHJcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xyXG4tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xyXG4tby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcclxufVxyXG5cclxuLm5vLWNzc3RyYW5zaXRpb25zIC5jZC1oZWFkbGluZS5yb3RhdGUtMiBpIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4tby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxub3BhY2l0eTogMDtcclxufVxyXG4ubm8tY3NzdHJhbnNpdGlvbnMgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkgZW0ge1xyXG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbnRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTIgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMi1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwZGVnKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDBkZWcpO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGNkLXJvdGF0ZS0yLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtMTBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0yLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2Qtcm90YXRlLTItb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTkwZGVnKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMi1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtOTBkZWcpO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBjZC1yb3RhdGUtMi1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtMTAwZGVnKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbn1cclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbnhsb2FkaW5nLWJhciBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5sb2FkaW5nLWJhciBzcGFuIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nOiAuMmVtIDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmxvYWRpbmctYmFyIC5jZC13b3Jkcy13cmFwcGVyIHtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxudmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uY2QtaGVhZGxpbmUubG9hZGluZy1iYXIgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogbG9hZGluZyBiYXIgKi9cclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxuYm90dG9tOiAwO1xyXG5oZWlnaHQ6IDNweDtcclxud2lkdGg6IDA7XHJcbmJhY2tncm91bmQ6ICMwMDk2YTc7XHJcbnotaW5kZXg6IDI7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcyAtMC4xcztcclxuLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIC0wLjFzO1xyXG50cmFuc2l0aW9uOiB3aWR0aCAwLjNzIC0wLjFzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5sb2FkaW5nLWJhciAuY2Qtd29yZHMtd3JhcHBlci5pcy1sb2FkaW5nOjphZnRlciB7XHJcbndpZHRoOiAxMDAlO1xyXG4td2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDNzO1xyXG4tbW96LXRyYW5zaXRpb246IHdpZHRoIDNzO1xyXG50cmFuc2l0aW9uOiB3aWR0aCAzcztcclxufVxyXG4uY2QtaGVhZGxpbmUubG9hZGluZy1iYXIgYiB7XHJcbnRvcDogLjJlbTtcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbi1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG50cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmxvYWRpbmctYmFyIGIuaXMtdmlzaWJsZSB7XHJcbm9wYWNpdHk6IDE7XHJcbnRvcDogMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54c2xpZGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUuc2xpZGUgc3BhbiB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucGFkZGluZzogLjJlbSAwO1xyXG59XHJcbi5jZC1oZWFkbGluZS5zbGlkZSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIge1xyXG5vcGFjaXR5OiAwO1xyXG50b3A6IC4yZW07XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIuaXMtdmlzaWJsZSB7XHJcbnRvcDogMDtcclxub3BhY2l0eTogMTtcclxuLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjZzO1xyXG5hbmltYXRpb246IHNsaWRlLWluIDAuNnM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIuaXMtaGlkZGVuIHtcclxuLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAwLjZzO1xyXG4tbW96LWFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNnM7XHJcbmFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54Y2xpcCBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5jbGlwIHNwYW4ge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBhZGRpbmc6IC4yZW0gMDtcclxufVxyXG4uY2QtaGVhZGxpbmUuY2xpcCAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogbGluZSAqL1xyXG5jb250ZW50OiAnJztcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbnJpZ2h0OiAwO1xyXG53aWR0aDogMnB4O1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6ICNhZWJjYjk7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgYiB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgYi5pcy12aXNpYmxlIHtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54em9vbSBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS56b29tIC5jZC13b3Jkcy13cmFwcGVyIHtcclxuLXdlYmtpdC1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbi1tb3otcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG5wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYiB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYi5pcy12aXNpYmxlIHtcclxub3BhY2l0eTogMTtcclxuLXdlYmtpdC1hbmltYXRpb246IHpvb20taW4gMC44cztcclxuLW1vei1hbmltYXRpb246IHpvb20taW4gMC44cztcclxuYW5pbWF0aW9uOiB6b29tLWluIDAuOHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYi5pcy1oaWRkZW4ge1xyXG4td2Via2l0LWFuaW1hdGlvbjogem9vbS1vdXQgMC44cztcclxuLW1vei1hbmltYXRpb246IHpvb20tb3V0IDAuOHM7XHJcbmFuaW1hdGlvbjogem9vbS1vdXQgMC44cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20taW4ge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyB6b29tLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHpvb20taW4ge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxufVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyB6b29tLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcclxufVxyXG59XHJcbkBrZXlmcmFtZXMgem9vbS1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cm90YXRlLTMgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUucm90YXRlLTMgLmNkLXdvcmRzLXdyYXBwZXIge1xyXG4td2Via2l0LXBlcnNwZWN0aXZlOiAzMDBweDtcclxuLW1vei1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbnBlcnNwZWN0aXZlOiAzMDBweDtcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTMgaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4tby10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbi13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmlzLXZpc2libGUgLmNkLWhlYWRsaW5lLnJvdGF0ZS0zIGkge1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMyBpLmluIHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0zLWluIDAuNnMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBjZC1yb3RhdGUtMy1pbiAwLjZzIGZvcndhcmRzO1xyXG5hbmltYXRpb246IGNkLXJvdGF0ZS0zLWluIDAuNnMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0zIGkub3V0IHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0zLW91dCAwLjZzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTMtb3V0IDAuNnMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTMtb3V0IDAuNnMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTMgaSB7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4tbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTMgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMy1pbiB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLWluIHtcclxuMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLWluIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLW91dCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxufVxyXG4xMDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMy1vdXQge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLW91dCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54c2NhbGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUuc2NhbGUgaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4tbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbi1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4tby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG50cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5pcy12aXNpYmxlIC5jZC1oZWFkbGluZS5zY2FsZSBpIHtcclxub3BhY2l0eTogMTtcclxufVxyXG4uY2QtaGVhZGxpbmUuc2NhbGUgaS5pbiB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cCAwLjZzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogc2NhbGUtdXAgMC42cyBmb3J3YXJkcztcclxuYW5pbWF0aW9uOiBzY2FsZS11cCAwLjZzIGZvcndhcmRzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5zY2FsZSBpLm91dCB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duIDAuNnMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBzY2FsZS1kb3duIDAuNnMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogc2NhbGUtZG93biAwLjZzIGZvcndhcmRzO1xyXG59XHJcblxyXG4ubm8tY3NzdHJhbnNpdGlvbnMgLmNkLWhlYWRsaW5lLnNjYWxlIGkge1xyXG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbnRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUuc2NhbGUgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG42MCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2NhbGUtdXAge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS11cCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjYwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjYwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2NhbGUtZG93biB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG42MCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS1kb3duIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cHVzaCBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5wdXNoIGIge1xyXG5vcGFjaXR5OiAwO1xyXG59XHJcbi5jZC1oZWFkbGluZS5wdXNoIGIuaXMtdmlzaWJsZSB7XHJcbm9wYWNpdHk6IDE7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBwdXNoLWluIDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBwdXNoLWluIDAuNnM7XHJcbmFuaW1hdGlvbjogcHVzaC1pbiAwLjZzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5wdXNoIGIuaXMtaGlkZGVuIHtcclxuLXdlYmtpdC1hbmltYXRpb246IHB1c2gtb3V0IDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBwdXNoLW91dCAwLjZzO1xyXG5hbmltYXRpb246IHB1c2gtb3V0IDAuNnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdXNoLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgcHVzaC1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBwdXNoLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVzaC1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBwdXNoLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBwdXNoLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _approved_approved_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./approved/approved.component */ "./src/app/approved/approved.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _fate_fate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fate/fate.component */ "./src/app/fate/fate.component.ts");
/* harmony import */ var _machinestatus_machinestatus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./machinestatus/machinestatus.component */ "./src/app/machinestatus/machinestatus.component.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/__ivy_ngcc__/fesm2015/ngx-facebook.js");
/* harmony import */ var _machinetut_machinetut_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./machinetut/machinetut.component */ "./src/app/machinetut/machinetut.component.ts");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_19__["FacebookModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
            // preventDuplicates: true
            }),
            ///////////////////////////////////////////////////////
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                { path: 'approved', component: _approved_approved_component__WEBPACK_IMPORTED_MODULE_15__["ApprovedComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
                { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"] },
                { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
                { path: 'technician', component: _fate_fate_component__WEBPACK_IMPORTED_MODULE_17__["FateComponent"] },
                { path: 'machinestatus', component: _machinestatus_machinestatus_component__WEBPACK_IMPORTED_MODULE_18__["MachinestatusComponent"] },
                { path: 'machinetut', component: _machinetut_machinetut_component__WEBPACK_IMPORTED_MODULE_20__["MachinetutComponent"] }
            ], { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload', anchorScrolling: 'enabled' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
        _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
        _approved_approved_component__WEBPACK_IMPORTED_MODULE_15__["ApprovedComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _fate_fate_component__WEBPACK_IMPORTED_MODULE_17__["FateComponent"],
        _machinestatus_machinestatus_component__WEBPACK_IMPORTED_MODULE_18__["MachinestatusComponent"],
        _machinetut_machinetut_component__WEBPACK_IMPORTED_MODULE_20__["MachinetutComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], ngx_facebook__WEBPACK_IMPORTED_MODULE_19__["FacebookModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
                    _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                    _approved_approved_component__WEBPACK_IMPORTED_MODULE_15__["ApprovedComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _fate_fate_component__WEBPACK_IMPORTED_MODULE_17__["FateComponent"],
                    _machinestatus_machinestatus_component__WEBPACK_IMPORTED_MODULE_18__["MachinestatusComponent"],
                    _machinetut_machinetut_component__WEBPACK_IMPORTED_MODULE_20__["MachinetutComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                    ngx_facebook__WEBPACK_IMPORTED_MODULE_19__["FacebookModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                    // preventDuplicates: true
                    }),
                    ///////////////////////////////////////////////////////
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                        { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                        { path: 'approved', component: _approved_approved_component__WEBPACK_IMPORTED_MODULE_15__["ApprovedComponent"] },
                        { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
                        { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"] },
                        { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"] },
                        { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
                        { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"] },
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
                        { path: 'technician', component: _fate_fate_component__WEBPACK_IMPORTED_MODULE_17__["FateComponent"] },
                        { path: 'machinestatus', component: _machinestatus_machinestatus_component__WEBPACK_IMPORTED_MODULE_18__["MachinestatusComponent"] },
                        { path: 'machinetut', component: _machinetut_machinetut_component__WEBPACK_IMPORTED_MODULE_20__["MachinetutComponent"] }
                    ], { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload', anchorScrolling: 'enabled' }),
                ],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/approved/approved.component.ts":
/*!************************************************!*\
  !*** ./src/app/approved/approved.component.ts ***!
  \************************************************/
/*! exports provided: ApprovedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedComponent", function() { return ApprovedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ApprovedComponent_div_31_div_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consumable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issued");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flagged");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApprovedComponent_div_31_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.flagItem(request_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flag Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApprovedComponent_div_31_div_1_p_8_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApprovedComponent_div_31_div_1_p_9_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApprovedComponent_div_31_div_1_p_10_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApprovedComponent_div_31_div_1_p_11_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApprovedComponent_div_31_div_1_p_12_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ApprovedComponent_div_31_div_1_div_14_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ApprovedComponent_div_31_div_1_button_15_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.items[request_r2.item - 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r2.is_returned && !ctx_r3.items[request_r2.item - 1].is_consumable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r2.is_returned && ctx_r3.items[request_r2.item - 1].is_consumable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r2.is_issued && !request_r2.is_returned);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r2.is_denied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r2.is_issued && !request_r2.is_denied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r2.is_issued && !request_r2.is_denied && ctx_r3.items[request_r2.item - 1].is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r2.is_issued && !request_r2.is_denied && !ctx_r3.items[request_r2.item - 1].is_flagged);
} }
function ApprovedComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprovedComponent_div_31_div_1_Template, 16, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r2.is_returned && !request_r2.is_denied);
} }
function ApprovedComponent_div_32_div_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_32_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consumable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_32_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issued");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_32_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_32_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApprovedComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApprovedComponent_div_32_div_1_p_8_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApprovedComponent_div_32_div_1_p_9_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApprovedComponent_div_32_div_1_p_10_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApprovedComponent_div_32_div_1_p_11_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApprovedComponent_div_32_div_1_p_12_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.items[request_r15.item - 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r15.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r15.is_returned && !ctx_r16.items[request_r15.item - 1].is_consumable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r15.is_returned && ctx_r16.items[request_r15.item - 1].is_consumable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r15.is_issued && !request_r15.is_returned);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r15.is_denied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r15.is_issued && !request_r15.is_denied);
} }
function ApprovedComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApprovedComponent_div_32_div_1_Template, 14, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r15.is_returned || request_r15.is_denied);
} }
class ApprovedComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.items = [];
        this.requests = [];
        this.flags = [];
        this.total_items = 0;
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
    }
    ngOnInit() {
        //authentication code to be copied
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey));
            console.log(this.user_data);
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
            this.api.getCustomer(this.user_data.roll_number)
                .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
        }
        else {
            this.router.navigate(['']);
        }
        //authentication code end
        this.api.getItems().subscribe(data => {
            this.items = data;
        }, error => {
            console.log(error);
        });
        this.api.getFlags().subscribe(data => {
            this.flags = data;
        }, error => {
            console.log(error);
        });
        this.api.rollSearch(this.user_data.roll_number).subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
    }
    flagItem(request) {
        if (confirm('This will send a mail to the admins. Are you sure you want to continue?')) {
            var newflg = { item: this.items[request.item - 1].id, roll_number: this.user_data.roll_number };
            this.api.createFlag(newflg).subscribe(data => {
                this.flags.push(newflg);
                console.log(data);
            }, error => {
                console.log(error);
            });
            this.items[request.item - 1].is_flagged = true;
            this.api.updateItem(this.items[request.item - 1]).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
            this.mail.roll_number = this.user_data.roll_number;
            this.mail.subject = 'Flagging of ' + this.items[request.item - 1].name;
            this.mail.message = this.items[request.item - 1].name + ' <h1>has been flagged</h1>';
            this.mail.recipient_list = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].technician_mails;
            var date_time = new Date();
            this.mail.html_message = '<strong>' + this.items[request.item - 1].name + '</strong>' + ' has been flagged on the website by <strong>' + this.user_data.first_name + ' ' + this.user_data.last_name + '-' + this.user_data.roll_number + '</strong> at ' + date_time + '<br><br>Please check the item.';
            this.api.updateMail(this.mail).subscribe(data => {
                console.log(data);
                this.api.sendMail(this.user_data.roll_number)
                    .subscribe(data => { console.log(data); if (data == 'sent') {
                    document.getElementById('super-overlay').style.display = 'none';
                    console.log('mail sent successfully');
                } }, error => { document.getElementById('super-overlay').style.display = 'none'; alert('error'); console.log(error); });
            }, error => { console.log(error); });
        }
    }
}
ApprovedComponent.ɵfac = function ApprovedComponent_Factory(t) { return new (t || ApprovedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ApprovedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovedComponent, selectors: [["app-approved"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 33, vars: 2, consts: [[2, "color", "cornsilk"], [1, "row"], [1, "col-lg-12"], [1, "box-element"], ["routerLink", "../inventory", 1, "btn", "btn-outline-dark"], ["routerLink", "../cart", 1, "btn", "btn-outline-dark"], [1, "cart-row"], [2, "flex", "2"], [2, "flex", "1"], [4, "ngFor", "ngForOf"], ["class", "cart-row", 4, "ngIf"], [1, "quantity"], ["class", "quantity", "style", "color: green;", 4, "ngIf"], ["class", "quantity", "style", "color: rgba(0, 140, 255, 0.959)", 4, "ngIf"], ["class", "quantity", "style", "color: red", 4, "ngIf"], ["class", "quantity", "style", "color:salmon", 4, "ngIf"], ["style", "color: slategrey;", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "quantity", 2, "color", "green"], [1, "quantity", 2, "color", "rgba(0, 140, 255, 0.959)"], [1, "quantity", 2, "color", "red"], [1, "quantity", 2, "color", "salmon"], [2, "color", "slategrey"], [3, "click"]], template: function ApprovedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2190 Back to inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2190 Back to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ApprovedComponent_div_31_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ApprovedComponent_div_32_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color: rgb(3, 16, 59);;\r\n    padding: 10%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n\tcolor:hsl(0, 0%, 30%);\r\n}\r\n\r\n.box-element[_ngcontent-%COMP%]{\r\n\tbox-shadow:hsl(0, 0%, 80%) 0 0 16px;\r\n\tbackground-color: rgb(3, 16, 59);;\r\n\tborder-radius: 4px;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 200px;\r\n box-shadow: -1px -3px 5px -2px rgba(214,214,214,1);\r\n}\r\n\r\n.product[_ngcontent-%COMP%]{\r\n\tborder-radius: 0 0 4px 4px;\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%]{\r\n\tbackground-color: #4f868c!important;\r\n}\r\n\r\n#cart-icon[_ngcontent-%COMP%]{\r\n\twidth:25px;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 15px;\r\n}\r\n\r\n#cart-total[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor:#fff;\r\n\tbackground-color: red;\r\n\twidth: 20px;\r\n\theight: 25px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%]{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n\tborder-radius: 0;\r\n}\r\n\r\n.row-image[_ngcontent-%COMP%]{\r\n\twidth: 100px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]{\r\n\twidth:250px;\r\n\tdisplay: inline-block;\r\n\tpadding: 5px;\r\n}\r\n\r\n.cart-row[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n    align-items: flex-stretch;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid #ececec;\r\n\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]{\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\tpadding-right:10px;\r\n\t\r\n\r\n}\r\n\r\n.chg-quantity[_ngcontent-%COMP%]{\r\n\twidth: 12px;\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\tmargin-top: 5px;\r\n\ttransition:.1s;\r\n}\r\n\r\n.chg-quantity[_ngcontent-%COMP%]:hover{\r\n\topacity: .6;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%]{\r\n\tdisplay: none!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcm92ZWQvYXBwcm92ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLGdDQUFnQztDQUNoQyxrQkFBa0I7SUFDZixhQUFhOztBQUVqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBR1Ysa0RBQWtEO0FBQ3REOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtJQUNWLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdDQUFnQzs7QUFFcEM7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjs7O0FBR25COztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFHQTtDQUNDLHVCQUF1QjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcHJvdmVkL2FwcHJvdmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDE2LCA1OSk7O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcblxyXG5oMSxoMixoMyxoNCxoNSxoNntcclxuXHRjb2xvcjpoc2woMCwgMCUsIDMwJSk7XHJcbn1cclxuXHJcbi5ib3gtZWxlbWVudHtcclxuXHRib3gtc2hhZG93OmhzbCgwLCAwJSwgODAlKSAwIDAgMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTYsIDU5KTs7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlse1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IC0zcHggNXB4IC0ycHggcmdiYSgyMTQsMjE0LDIxNCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogLTFweCAtM3B4IDVweCAtMnB4IHJnYmEoMjE0LDIxNCwyMTQsMSk7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IC0zcHggNXB4IC0ycHggcmdiYSgyMTQsMjE0LDIxNCwxKTtcclxufVxyXG5cclxuLnByb2R1Y3R7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbn1cclxuXHJcbi5iZy1kYXJre1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0Zjg2OGMhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY2FydC1pY29ue1xyXG5cdHdpZHRoOjI1cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4jY2FydC10b3RhbHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb2wtbGctNCwgLmNvbC1sZy02LCAuY29sLWxnLTgsIC5jb2wtbGctMTJ7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bntcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ucm93LWltYWdle1xyXG5cdHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGR7XHJcblx0d2lkdGg6MjUwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhcnQtcm93e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdHJldGNoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XHJcblxyXG59XHJcblxyXG4ucXVhbnRpdHl7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0cGFkZGluZy1yaWdodDoxMHB4O1xyXG5cdFxyXG5cclxufVxyXG5cclxuLmNoZy1xdWFudGl0eXtcclxuXHR3aWR0aDogMTJweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHRyYW5zaXRpb246LjFzO1xyXG59XHJcblxyXG4uY2hnLXF1YW50aXR5OmhvdmVye1xyXG5cdG9wYWNpdHk6IC42O1xyXG59XHJcblxyXG5cclxuLmhpZGRlbntcclxuXHRkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApprovedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-approved',
                templateUrl: './approved.component.html',
                styleUrls: ['./approved.component.css'],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]]
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CartComponent_div_27_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_27_div_8_div_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.updateQuantityUp(request_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_27_div_8_div_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateQuantityDown(request_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_27_div_8_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteRequest(request_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.items[request_r3.item - 1].picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.items[request_r3.item - 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r3.quantity);
} }
function CartComponent_div_27_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_27_div_8_div_1_Template, 13, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !request_r3.is_sent);
} }
function CartComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_div_27_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.requests);
} }
function CartComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.items = [];
        this.customers = [];
        this.requests = [];
        this.total_items = 0;
        this.myVar = 0;
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
        this.mailItems = '';
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/vanta.topology.min.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript4Element = document.createElement("script");
        this.myScript4Element.src = "assets/js/script2.js";
        document.body.appendChild(this.myScript4Element);
    }
    ngOnInit() {
        //authentication code to be copied
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey));
            console.log(this.user_data);
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
            this.api.getCustomer(this.user_data.roll_number)
                .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
        }
        else {
            this.router.navigate(['']);
        }
        //authentication code end
        this.api.getItems().subscribe(data => {
            this.items = data;
        }, error => {
            console.log(error);
        });
        this.api.rollSearch(this.user_data.roll_number).subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
    }
    getReq() {
        this.api.rollSearch(this.user_data.roll_number).subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
    }
    choose(a, b) {
        if (a == b)
            return true;
        else
            return false;
    }
    total(roll) {
        //     var i;
        //   for (i = 0; i < this.requests.length; i+=1) {
        //     if( this.requests[i].is_sent == false){
        //       this.total_items+= this.requests[i].quantity
        //       console.log(this.total_items)
        //       console.log(this.requests[i].quantity)
        //        console.log(this.requests.length)
        //       console.log("this.requests[1].quantity")
        //   }
        // }
        const keys = Object.keys(this.requests);
        this.total_items = 0;
        for (const key of keys) {
            if (this.requests[key].is_sent == false) {
                this.total_items += this.requests[key].quantity;
                //  console.log(this.requests[key].id, "hi")
            }
        }
        console.log(" my var" + this.myVar);
    }
    updateRequest() {
        var i;
        for (i = 0; i < this.requests.length; i += 1) {
            console.log(" request quantity" + this.requests[i].quantity);
            console.log(" item quantity" + this.items[this.requests[i].item - 1].quantity);
            if (this.requests[i].quantity > this.items[this.requests[i].item - 1].quantity && (this.requests[i].is_sent == false)) {
                this.myVar = 1;
            }
        }
        console.log(" my var" + this.myVar);
        for (i = 0; i < this.requests.length; i += 1) {
            if ((this.requests[i].is_sent == false) && (this.myVar == 0)) {
                this.requests[i].is_sent = true;
                this.requests[i].checkout_time = new Date();
                console.log(this.requests[i].checkout_time);
                this.mailItems += '<strong>' + this.items[this.requests[i].item - 1].name + '</strong>: Quantity = <strong>' + this.requests[i].quantity + '</strong><br>';
                console.log(this.mailItems);
                this.api.updateRequest(this.requests[i]).subscribe(data => {
                    console.log(data);
                }, error => {
                    console.log(error);
                });
            }
        }
        if (this.myVar == 1) {
            this.router.navigate(['./cart']);
            console.error("quantity chosen is not available");
        }
        else {
            this.router.navigate(['./approved']);
        }
        if (this.total_items > 0) {
            console.log('mailsent');
            this.mail.roll_number = this.user_data.roll_number;
            this.mail.subject = 'Student - issue items';
            this.mail.message = ' <h1>to be issued</h1>';
            this.mail.recipient_list = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].technician_mails;
            var date_time = new Date();
            this.mail.html_message = this.user_data.first_name + ' ' + this.user_data.last_name + ' is trying to issue the following items:<br>' + this.mailItems + '<br>Click on this link to approve or deny  http://localhost:4200/technician<br><br>Details of student: ' + this.user_data.roll_number + '<br>Email ID of student: ' + this.user_data.email;
            this.api.updateMail(this.mail).subscribe(data => { this.api.sendMail(this.user_data.roll_number); console.log(data); }, error => { console.log(error); });
        }
    }
    updateQuantityUp(request) {
        if (request.quantity < this.items[request.item - 1].quantity) {
            request.quantity++;
        }
        this.api.updateRequest(request).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    updateQuantityDown(request) {
        if (request.quantity > 1) {
            request.quantity--;
        }
        this.api.updateRequest(request).subscribe(data => {
            console.log(request.item, this.items[request.item - 1]);
        }, error => {
            console.log(error);
        });
    }
    deleteRequest(request) {
        this.requests.splice(request.id - 1, 1);
        this.api.deleteRequest(request.id).subscribe(data => {
            this.getReq();
        }, error => {
            console.log(error);
        });
    }
    deleteAllRequest() {
        const keys = Object.keys(this.requests);
        this.total_items = 0;
        for (const key of keys) {
            if (this.requests[key].is_sent == false) {
                this.requests.splice(this.requests[key].id - 1, 1);
                this.api.deleteRequest(this.requests[key].id).subscribe(data => {
                    this.getReq();
                }, error => {
                    console.log(error);
                });
            }
        }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 29, vars: 4, consts: [[2, "color", "cornsilk"], [1, "aboutBody"], [1, "row"], [1, "col-lg-12"], [1, "box-element"], ["routerLink", "../inventory", 1, "btn", "btn-outline-dark"], [1, "btn", "btn-outline-dark", 3, "click"], [1, "table"], ["title", "Send request to issue all items in cart", 1, "btn", "btn-success", 2, "float", "right", "margin", "5px", 3, "click"], ["class", "box-element", 4, "ngIf"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [1, "cart-row"], [1, "head"], [1, "head2"], [4, "ngFor", "ngForOf"], ["class", "cart-row", 4, "ngIf"], [1, "bod2"], [1, "row-image", 3, "src"], [1, "bod1", 2, "flex", "2"], [2, "flex", "1"], [1, "chg-quantity", "fas", "fa-angle-up", 2, "font-size", "36px", 3, "click"], [1, "quantity"], [1, "chg-quantity", "fas", "fa-angle-down", 2, "font-size", "36px", 3, "click"], [2, "flex", "2"], [1, "chg-quantity", "fas", "fa-trash", "bin", 2, "font-size", "36px", 3, "click"], ["role", "alert", 1, "alert", "alert-warning"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2190 Back to Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_12_listener() { return ctx.deleteAllRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clear Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Items: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_24_listener() { return ctx.updateRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CartComponent_div_27_Template, 9, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CartComponent_div_28_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.total(1), " ", ctx.total_items, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total_items != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total_items == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["body[_ngcontent-%COMP%]{\r\n   background-color:rgb(3, 16, 59); ;\r\n    padding: 10%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n\tcolor:hsl(0, 0%, 30%);\r\n}\r\n\r\n.box-element[_ngcontent-%COMP%]{\r\n\tbox-shadow:hsl(0, 0%, 80%) 0 0 16px;\r\n\tbackground-color: rgb(3, 16, 59);\r\n\tborder-radius: 4px;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 200px;\r\n box-shadow: -1px -3px 5px -2px rgba(214,214,214,1);\r\n}\r\n\r\n.product[_ngcontent-%COMP%]{\r\n\tborder-radius: 0 0 4px 4px;\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%]{\r\n\tbackground-color: #4f868c!important;\r\n}\r\n\r\n#cart-icon[_ngcontent-%COMP%]{\r\n\twidth:25px;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 15px;\r\n}\r\n\r\n#cart-total[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor:#fff;\r\n\tbackground-color: red;\r\n\twidth: 20px;\r\n\theight: 25px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%]{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n\tborder-radius: 0;\r\n}\r\n\r\n.row-image[_ngcontent-%COMP%]{\r\n\twidth: 100px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]{\r\n\twidth:250px;\r\n\tdisplay: inline-block;\r\n\tpadding: 5px;\r\n}\r\n\r\n.cart-row[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n    align-items: flex-stretch;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n\tborder-bottom: 1px solid #ececec;\r\n\t\r\n\tjustify-content: space-evenly;\r\n\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]{\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\tpadding: 0 0 0 2px;\r\n\tmargin: 0;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\t\r\n\r\n}\r\n\r\n.chg-quantity[_ngcontent-%COMP%]{\r\n\twidth: 12px;\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\tmargin-top: 5px;\r\n\ttransition:.1s;\r\n}\r\n\r\n.chg-quantity[_ngcontent-%COMP%]:hover{\r\n\topacity: .6;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%]{\r\n\tdisplay: none!important;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n\t\r\n\tflex: 1.57;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n\tpadding-left: 62%;\r\n}\r\n\r\n.head2[_ngcontent-%COMP%]{\r\n\tflex: 1;\r\n}\r\n\r\n.bod1[_ngcontent-%COMP%]{\r\n\tpadding: 33px 0 0 0 ;\r\n\tfont-weight: bolder;\r\n\tfont-size: 20px;\r\n\t\r\n}\r\n\r\n.bod2[_ngcontent-%COMP%]{\r\n\tpadding: 10px 0 10px 15% ;\r\n\tfont-weight: bolder;\t\r\n\tflex: 1.6;\r\n}\r\n\r\n.bod2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\twidth: 150px;\r\n\theight: 84px;\r\n}\r\n\r\n.bin[_ngcontent-%COMP%]{\r\n\tpadding-top: 30px;\r\n}\r\n\r\n@media screen and ( max-width: 850px){\r\n\r\n\t.head[_ngcontent-%COMP%]{\r\n\t\ttext-align: center;\r\n\t\tflex: 0.62;\r\n\t}\r\n\t.head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t\r\n\t.bod1[_ngcontent-%COMP%]{\r\n\t\tpadding: 33px 0 0 0 ;\r\n\t\tfont-weight: bolder;\r\n\t\tfont-size: 20px;\r\n\t\t\r\n\t}\r\n\t\r\n\t.bod2[_ngcontent-%COMP%]{\r\n\t\tpadding: 13px 0 10px 0 ;\r\n\t\tfont-weight: bolder;\t\r\n\t}\r\n\t.bod2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\twidth: 150px;\r\n\t}\r\n\t.bin[_ngcontent-%COMP%]{\r\n\t\tpadding-top: 30px;\r\n\t}\r\n\t\r\n\t.head2[_ngcontent-%COMP%]{\r\n\t\tflex: 0.5;\r\n\t}\r\n\r\n\r\n\r\n\r\n}\r\n\r\n@media screen and ( max-width: 640px){\r\n\r\n\t.bod1[_ngcontent-%COMP%]{\r\n\t\tpadding: 33px 0 0 4px ;\r\n\t\tfont-weight: bolder;\r\n\t\tfont-size: 20px;\r\n\t}\r\n}\r\n\r\n@media screen and ( max-width: 500px){\r\n\t.bod2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\twidth: 90px;\r\n\t}\r\n\t.bod2[_ngcontent-%COMP%]{\r\n\t\tpadding: 25px 0 10px 0 ;\r\n\t\tfont-weight: bolder;\t\r\n\t}\r\n\t.bod1[_ngcontent-%COMP%]{\r\n\t\tpadding: 33px 0 0 4px ;\r\n\t\tfont-weight: bolder;\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.head[_ngcontent-%COMP%]{\r\n\t\r\n\t\tflex: 1.1;\r\n\t}\r\n\t.head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n\t\tpadding-left: 42%;\r\n\t}\r\n\t.head2[_ngcontent-%COMP%]{\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n\r\n@media screen and ( max-width: 427px){\r\n\r\n\t.head[_ngcontent-%COMP%]{\r\n\t\ttext-align: center;\r\n\t\tflex: 0.62;\r\n\t}\r\n\t\r\n\t.bod1[_ngcontent-%COMP%]{\r\n\t\tpadding: 20px 0 0 4px ;\r\n\t\tfont-weight: bolder;\r\n\t\tfont-size: 20px;\r\n\t\t\r\n\t}\r\n\t\r\n\t.bod2[_ngcontent-%COMP%]{\r\n\t\tpadding: 25px 0 10px 0 ;\r\n\t\tfont-weight: bolder;\t\r\n\t}\r\n\t.bod2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\twidth: 90px;\r\n\t}\r\n\t.bin[_ngcontent-%COMP%]{\r\n\t\tpadding-top: 30px;\r\n\t}\r\n\t\r\n\t.head2[_ngcontent-%COMP%]{\r\n\t\tflex: 0.5;\r\n\t}\r\n\t.head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n\t\tpadding-left: 0%;\r\n\t}\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRywrQkFBK0I7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0lBQ2YsYUFBYTs7QUFFakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUdWLGtEQUFrRDtBQUN0RDs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7SUFDVix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QixnQ0FBZ0M7O0NBRWhDLDZCQUE2Qjs7QUFFOUI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLHVCQUF1Qjs7O0FBR3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFHQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTs7Q0FFQyxVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGVBQWU7O0FBRWhCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUdBOztDQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZUFBZTs7Q0FFaEI7O0NBRUE7RUFDQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxZQUFZO0NBQ2I7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjs7Ozs7QUFLRDs7QUFDQTs7Q0FFQztFQUNDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjtBQUNEOztBQUNBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjtDQUNBOztFQUVDLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxPQUFPO0NBQ1I7QUFDRDs7QUFDQTs7Q0FFQztFQUNDLGtCQUFrQjtFQUNsQixVQUFVO0NBQ1g7O0NBRUE7RUFDQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7O0NBRWhCOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7OztBQUlEIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigzLCAxNiwgNTkpOyA7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuXHJcbmgxLGgyLGgzLGg0LGg1LGg2e1xyXG5cdGNvbG9yOmhzbCgwLCAwJSwgMzAlKTtcclxufVxyXG5cclxuLmJveC1lbGVtZW50e1xyXG5cdGJveC1zaGFkb3c6aHNsKDAsIDAlLCA4MCUpIDAgMCAxNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxNiwgNTkpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRodW1ibmFpbHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAtM3B4IDVweCAtMnB4IHJnYmEoMjE0LDIxNCwyMTQsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggLTNweCA1cHggLTJweCByZ2JhKDIxNCwyMTQsMjE0LDEpO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAtM3B4IDVweCAtMnB4IHJnYmEoMjE0LDIxNCwyMTQsMSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0e1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG59XHJcblxyXG4uYmctZGFya3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4NjhjIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NhcnQtaWNvbntcclxuXHR3aWR0aDoyNXB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuI2NhcnQtdG90YWx7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29sLWxnLTQsIC5jb2wtbGctNiwgLmNvbC1sZy04LCAuY29sLWxnLTEye1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnJvdy1pbWFnZXtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxke1xyXG5cdHdpZHRoOjI1MHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0LXJvd3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RyZXRjaDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcclxuXHRcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbn1cclxuXHJcbi5xdWFudGl0eXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nOiAwIDAgMCAycHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHJcblxyXG59XHJcblxyXG4uY2hnLXF1YW50aXR5e1xyXG5cdHdpZHRoOiAxMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0dHJhbnNpdGlvbjouMXM7XHJcbn1cclxuXHJcbi5jaGctcXVhbnRpdHk6aG92ZXJ7XHJcblx0b3BhY2l0eTogLjY7XHJcbn1cclxuXHJcblxyXG4uaGlkZGVue1xyXG5cdGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZHtcclxuXHRcclxuXHRmbGV4OiAxLjU3O1xyXG59XHJcbi5oZWFkIHN0cm9uZ3tcclxuXHRwYWRkaW5nLWxlZnQ6IDYyJTtcclxufVxyXG4uaGVhZDJ7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmJvZDF7XHJcblx0cGFkZGluZzogMzNweCAwIDAgMCA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0XHJcbn1cclxuXHJcbi5ib2Qye1xyXG5cdHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1JSA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcdFxyXG5cdGZsZXg6IDEuNjtcclxufVxyXG4uYm9kMiBpbWd7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG5cdGhlaWdodDogODRweDtcclxufVxyXG4uYmlue1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDg1MHB4KXtcclxuXHJcblx0LmhlYWR7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmbGV4OiAwLjYyO1xyXG5cdH1cclxuXHQuaGVhZCBzdHJvbmd7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0fVxyXG5cdFxyXG5cdC5ib2Qxe1xyXG5cdFx0cGFkZGluZzogMzNweCAwIDAgMCA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC5ib2Qye1xyXG5cdFx0cGFkZGluZzogMTNweCAwIDEwcHggMCA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1x0XHJcblx0fVxyXG5cdC5ib2QyIGltZ3tcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHR9XHJcblx0LmJpbntcclxuXHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdH1cclxuXHRcclxuXHQuaGVhZDJ7XHJcblx0XHRmbGV4OiAwLjU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjQwcHgpe1xyXG5cclxuXHQuYm9kMXtcclxuXHRcdHBhZGRpbmc6IDMzcHggMCAwIDRweCA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNTAwcHgpe1xyXG5cdC5ib2QyIGltZ3tcclxuXHRcdHdpZHRoOiA5MHB4O1xyXG5cdH1cclxuXHQuYm9kMntcclxuXHRcdHBhZGRpbmc6IDI1cHggMCAxMHB4IDAgO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcdFxyXG5cdH1cclxuXHQuYm9kMXtcclxuXHRcdHBhZGRpbmc6IDMzcHggMCAwIDRweCA7XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHQuaGVhZHtcclxuXHRcclxuXHRcdGZsZXg6IDEuMTtcclxuXHR9XHJcblx0LmhlYWQgc3Ryb25ne1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0MiU7XHJcblx0fVxyXG5cdC5oZWFkMntcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0MjdweCl7XHJcblxyXG5cdC5oZWFke1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZmxleDogMC42MjtcclxuXHR9XHJcblx0XHJcblx0LmJvZDF7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDAgMCA0cHggO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHQuYm9kMntcclxuXHRcdHBhZGRpbmc6IDI1cHggMCAxMHB4IDAgO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcdFxyXG5cdH1cclxuXHQuYm9kMiBpbWd7XHJcblx0XHR3aWR0aDogOTBweDtcclxuXHR9XHJcblx0LmJpbntcclxuXHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdH1cclxuXHRcclxuXHQuaGVhZDJ7XHJcblx0XHRmbGV4OiAwLjU7XHJcblx0fVxyXG5cdC5oZWFkIHN0cm9uZ3tcclxuXHRcdHBhZGRpbmctbGVmdDogMCU7XHJcblx0fVxyXG5cclxuXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css'],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]]
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class ContactComponent {
    constructor() {
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/home.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript2Element = document.createElement("script");
        this.myScript2Element.src = "assets/js/aos.js";
        document.body.appendChild(this.myScript2Element);
        this.myScript3Element = document.createElement("script");
        this.myScript3Element.src = "assets/js/three.min.js";
        document.body.appendChild(this.myScript3Element);
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 72, vars: 0, consts: [[2, "background-color", "rgb(3, 16, 59)"], [1, "contact-header"], [1, "parallax"], ["id", "funFacts", 1, "container"], ["data-aos", "fade-up", 1, "display-3", 2, "text-align", "center", "color", "#fff"], [1, "container"], [1, "bg-transperent", "row", "justify-content-center", "shadow"], ["data-aos", "fade-zoom-in", "data-aos-offset", "200", "data-aos-easing", "ease-in-sine", "data-aos-duration", "600", 1, "col-lg-6", "mb-4"], [1, "card", "bg-transperent", "shadow"], [1, "card-body", 2, "background-color", "rgb(1, 14, 56)"], [1, "container", "bg-transperent", "text-center", "py-2", "mb-4"], [2, "font-weight", "bol", "color", "cornsilk"], [2, "color", "cornsilk"], ["href", "mailto:tinkererslaboratory@gmail.com"], [1, "align-center"], ["href", "https://www.linkedin.com/company/tinkerers-lab/", "id", "linkedin", "target", "_blank", 1, "pr-3"], [1, "fab", "fa-linkedin-in", "fa-2x"], ["href", "https://www.facebook.com/tinkererIITB/", "id", "facebook", "target", "_blank", 1, "pr-3", "pl-2"], [1, "fab", "fa-facebook-f", "fa-2x"], ["href", "https://www.instagram.com/tinkererslab.iitb/", "id", "instagram", "target", "_blank", 1, "pl-2"], [1, "fab", "fa-instagram", "fa-2x"], ["data-aos", "zoom-in", 1, "col-lg-6", "address-info", "mb-4"], [1, "container", "bg-transperent", "text-center", "mt-4"], [1, "py-5", "contact-info"], [1, "d-flex", "justify-content-between"], [1, "text-center"], [1, "fa", "fa-map-marker", 2, "color", "black"], [1, "d-flex", "align-self-center"], ["href", "#", 2, "color", "cornsilk"], [1, "fa", "fa-phone", 2, "color", "black"], [1, "fa", "fa-envelope", 2, "color", "black"], ["id", "map", "frameborder", "0", "src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyCunBuiI0IXYsQh_JhhFcGJTYub25TM8ls\n             &q=Tinkerers+Laboratory+IIT+BOMBAY,Mumbai", "allowfullscreen", "", 2, "filter", "invert(90%)"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "r>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ContactUs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Write to us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mail us anytime at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tinkerer\u2019s Laboratory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " with any complaints or messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Also, Connect with us on LinkedIN, Facebook and Instagram :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Reach out to us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " IIT Bombay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "+91 7735944281");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "xyz@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "iframe", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: relative;\r\n    padding-top: 150px;\r\n    color: white;\r\n  }\r\n\r\n#map[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n\r\n.parallax[_ngcontent-%COMP%] {\r\n    \r\n    background-image: linear-gradient(\r\n        0deg,\r\n        rgba(0, 0, 0, 0.87),\r\n        rgba(0, 0, 0, 0.562)\r\n      ),\r\n      url(\"/assets/Images/par.jpg\");\r\n  \r\n    \r\n    min-height: 200px;\r\n    color: #fff;\r\n    \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border-radius: 35px;\r\n    -webkit-text-decoration: capitalize;\r\n            text-decoration: capitalize;\r\n  }\r\n\r\n.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    width: 38px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    margin: 10px 15px;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.contact-info[_ngcontent-%COMP%]   i.fa-envelope[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%]   i.fa-phone[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%]   i.fa-marker[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n  }\r\n\r\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n  }\r\n\r\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #5383d3;\r\n    text-decoration: none;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n\r\n    font-size: 80px;\r\n  }\r\n\r\nh4[_ngcontent-%COMP%]{\r\n\r\n    font-family: fantasy;\r\n    font-size: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIOzs7Ozs7Ozs7O0dBVUc7O0FBQ0g7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQjs7Ozs7bUNBSytCOztJQUUvQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOztBQUVBOzs7SUFHRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztBQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7QUFDQTs7SUFFRSxlQUFlO0VBQ2pCOztBQUNBOztJQUVFLG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59ICovXHJcblxyXG4vKiAuY29udGFjdC1mb3JtIHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHZoO1xyXG5cclxufVxyXG4uaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTkwdmg7XHJcbiAgICBcclxufSAqL1xyXG4uY29udGFjdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAjbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhcmFsbGF4IHtcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMGRlZyxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuODcpLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC41NjIpXHJcbiAgICAgICksXHJcbiAgICAgIHVybChcIi9hc3NldHMvSW1hZ2VzL3Bhci5qcGdcIik7XHJcbiAgXHJcbiAgICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaW5mbyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8gaS5mYS1lbnZlbG9wZSxcclxuICAuY29udGFjdC1pbmZvIGkuZmEtcGhvbmUsXHJcbiAgLmNvbnRhY3QtaW5mbyBpLmZhLW1hcmtlciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaW5mbyBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaW5mbyBwIGEge1xyXG4gICAgY29sb3I6ICM1MzgzZDM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgxe1xyXG5cclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICB9XHJcbiAgaDR7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function EventsComponent_body_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "REGISTER NOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", li_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", li_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", li_r1.extlink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class EventsComponent {
    constructor(api) {
        // this.myScriptElement= document.createElement("script");
        // this.myScriptElement.src="assets/js/vanta.waves.min.js";
        // document.body.appendChild(this.myScriptElement);
        this.api = api;
        // myScriptElement:HTMLScriptElement;
        // myScript2Element:HTMLScriptElement;
        // myScript3Element:HTMLScriptElement;
        this.items = [];
        this.events = [];
        this.lis = [];
        // this.myScript2Element= document.createElement("script");
        // this.myScript2Element.src="assets/js/script4.js";
        // document.body.appendChild(this.myScript2Element);
        // this.myScript3Element= document.createElement("script");
        // this.myScript3Element.src="assets/js/vanta.topology.min.js";
        // document.body.appendChild(this.myScript3Element);
    }
    ngOnInit() {
        //Code for front
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            duration: 100,
            once: true
        });
        //code for api
        this.api.getEvents().subscribe(data => {
            this.events = data;
            let ev = this.events;
            this.api.getItems().subscribe(items => {
                this.items = items;
                let itemlist = this.items;
                for (let i = 0; i < ev.length; i++) {
                    let details = ev[i].details;
                    let image = ev[i].image;
                    let link = ev[i].link;
                    let date = ev[i].date;
                    let name = ev[i].name;
                    console.log(name);
                    this.lis.push({ 'name': name, 'description': details, 'imagePath': image, 'extlink': link, 'date': date });
                }
                console.log(this.lis);
            });
        });
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 2, vars: 1, consts: [[2, "background-color", "black"], [4, "ngFor", "ngForOf"], [1, "flex-row"], ["data-aos", "flip-left", 1, "card-container"], ["id", "card-image", 1, "in"], ["width", "500", "height", "300", 3, "src", "alt"], ["id", "text-container"], [1, "card-text"], ["id", "button-container"], [1, "card-button", 3, "href"], ["id", "social-container"], ["href", "#"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-facebook"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-twitter"], ["d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-instagram"], ["d", "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-discord"], ["d", "M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"], ["d", "M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventsComponent_body_1_Template, 31, 5, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background: rgb(3, 16, 59);\r\n  background:url(\"/assets/Images/lock-1.png\") no-repeat       center fixed;\r\n  \r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  font-family: \"Indie Flower\", cursive;\r\n  font-size: 12pt;\r\n  line-height: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n@media screen and (max-width: 1366px) {\r\n  body[_ngcontent-%COMP%] {\r\n    justify-content: start;\r\n    padding-left: 180px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n  body[_ngcontent-%COMP%] {\r\n    justify-content: start;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\n.flex-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://miscellaneousbucket.s3.amazonaws.com/framebg.jpg\");\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 300px;\r\n  min-height: 300px;\r\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,\r\n    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\r\n    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\r\n    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\r\n    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n  border-radius: 20px;\r\n}\r\n\r\n#card-image[_ngcontent-%COMP%] {\r\n  \r\n  position: relative;\r\n  display: inline-block;\r\n  width: 200px;\r\n  height: 300px;\r\n  margin-bottom: -245px;\r\n  z-index: 4;\r\n  box-shadow: rgba(50, 50, 93, 1) 0px 30px 60px -12px inset,\r\n    rgba(0, 0, 0, 1) 0px 18px 36px -18px inset,\r\n    rgba(0, 0, 0, 1) 0px 18px 36px -18px inset,\r\n    rgba(0, 0, 0, 0.6) 0px -30px 60px 12px inset;\r\n  border: 1px solid #777;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n#card-image[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(120deg, #4d2a00, #bf6700, dodgerblue);\r\n  background-size: 300% 300%;\r\n  -webkit-clip-path: polygon(\r\n    0% 100%,\r\n    3px 100%,\r\n    3px 3px,\r\n    calc(100% - 3px) 3px,\r\n    calc(100% - 3px) calc(100% - 3px),\r\n    3px calc(100% - 3px),\r\n    3px 100%,\r\n    100% 100%,\r\n    100% 0%,\r\n    0% 0%\r\n  );\r\n          clip-path: polygon(\r\n    0% 100%,\r\n    3px 100%,\r\n    3px 3px,\r\n    calc(100% - 3px) 3px,\r\n    calc(100% - 3px) calc(100% - 3px),\r\n    3px calc(100% - 3px),\r\n    3px 100%,\r\n    100% 100%,\r\n    100% 0%,\r\n    0% 0%\r\n  );\r\n  opacity: 0;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n#card-image.in[_ngcontent-%COMP%]:before {\r\n  -webkit-animation: gradient-animation 9s ease-in-out infinite;\r\n          animation: gradient-animation 9s ease-in-out infinite;\r\n}\r\n\r\n@-webkit-keyframes gradient-animation {\r\n  0% {\r\n    background-position: 15% 0%;\r\n  }\r\n  50% {\r\n    background-position: 85% 100%;\r\n  }\r\n  100% {\r\n    background-position: 15% 0%;\r\n  }\r\n}\r\n\r\n@keyframes gradient-animation {\r\n  0% {\r\n    background-position: 15% 0%;\r\n  }\r\n  50% {\r\n    background-position: 85% 100%;\r\n  }\r\n  100% {\r\n    background-position: 15% 0%;\r\n  }\r\n}\r\n\r\n#card-image[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #card-image[_ngcontent-%COMP%]::after {\r\n  opacity: 1;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #card-image[_ngcontent-%COMP%]::before {\r\n  opacity: 1;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #card-image[_ngcontent-%COMP%] {\r\n  transform: translateX(400px);\r\n  width: 500px;\r\n  box-shadow: none;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n#text-container[_ngcontent-%COMP%] {\r\n  max-width: 200px;\r\n  transition: all 0.6s ease-in-out;\r\n  opacity: 0;\r\n  z-index: 3;\r\n  margin-bottom: -22px;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  text-shadow: 1px 1px 3px #000;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #text-container[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transition: all 0.6s ease-in-out;\r\n  transform: translateX(-37px) translateY(-70px);\r\n}\r\n\r\n#button-container[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  opacity: 0;\r\n  transition: all 0.6s ease-in-out;\r\n  margin-bottom: -32px;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  background-image: url(\"https://www.transparenttextures.com/patterns/brushed-alum.png\");\r\n  border-radius: 10px;\r\n  font-size: 12pt;\r\n  padding: 10px 20px;\r\n  color: white;\r\n  text-shadow: 1px 1px 1px #000;\r\n  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,\r\n    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\r\n    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\r\n    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\r\n    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n  position: relative;\r\n  bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #button-container[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateX(-93px) translateY(-20px);\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n#social-container[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n  left: 25px;\r\n  opacity: 0;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n#social-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: dodgerblue;\r\n  background-color: white;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\r\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#social-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\r\n  transition: all 0.4s ease-in-out;\r\n  transform: rotateZ(360deg);\r\n  transform: translateY(10px) rotateZ(20deg);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #social-container[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transition: all 0.6s ease-in-out;\r\n  transform: translateY(1.2em);\r\n}\r\n\r\n#social-container[_ngcontent-%COMP%]::before {\r\n  content: \"SHARE\";\r\n  position: relative;\r\n  left: 105px;\r\n  top: 20px;\r\n  transition: all 0.6s ease-in-out;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  color: black;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]:hover   #social-container[_ngcontent-%COMP%]::before {\r\n  transition: all 0.6s ease-in-out;\r\n  transform: translateY(-3.2em);\r\n  opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix3RUFBd0U7O0VBRXhFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlGQUFpRjtFQUNqRixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjs7Ozt1RUFJcUU7RUFDckUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsVUFBVTtFQUNWOzs7Z0RBRzhDO0VBQzlDLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxpRUFBaUU7RUFDakUsMEJBQTBCO0VBQzFCOzs7Ozs7Ozs7OztHQVdDO1VBWEQ7Ozs7Ozs7Ozs7O0dBV0M7RUFDRCxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkRBQXFEO1VBQXJELHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQVZBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzRkFBc0Y7RUFDdEYsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qjs7Ozt1RUFJcUU7RUFDckUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhDQUE4QztFQUM5QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjsrRUFDNkU7RUFDN0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMywgMTYsIDU5KTtcclxuICBiYWNrZ3JvdW5kOnVybChcIi9hc3NldHMvSW1hZ2VzL2xvY2stMS5wbmdcIikgbm8tcmVwZWF0ICAgICAgIGNlbnRlciBmaXhlZDtcclxuICBcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW5kaWUgRmxvd2VyXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIGJvZHkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIHBhZGRpbmctbGVmdDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICBib2R5IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21pc2NlbGxhbmVvdXNidWNrZXQuczMuYW1hem9uYXdzLmNvbS9mcmFtZWJnLmpwZ1wiKTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAtMzZweCAzMHB4IDBweCBpbnNldCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4jY2FyZC1pbWFnZSB7XHJcbiAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjQ1cHg7XHJcbiAgei1pbmRleDogNDtcclxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDEpIDBweCAzMHB4IDYwcHggLTEycHggaW5zZXQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDEpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDEpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IC0zMHB4IDYwcHggMTJweCBpbnNldDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jY2FyZC1pbWFnZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzRkMmEwMCwgI2JmNjcwMCwgZG9kZ2VyYmx1ZSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDMwMCU7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCUgMTAwJSxcclxuICAgIDNweCAxMDAlLFxyXG4gICAgM3B4IDNweCxcclxuICAgIGNhbGMoMTAwJSAtIDNweCkgM3B4LFxyXG4gICAgY2FsYygxMDAlIC0gM3B4KSBjYWxjKDEwMCUgLSAzcHgpLFxyXG4gICAgM3B4IGNhbGMoMTAwJSAtIDNweCksXHJcbiAgICAzcHggMTAwJSxcclxuICAgIDEwMCUgMTAwJSxcclxuICAgIDEwMCUgMCUsXHJcbiAgICAwJSAwJVxyXG4gICk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2NhcmQtaW1hZ2UuaW46YmVmb3JlIHtcclxuICBhbmltYXRpb246IGdyYWRpZW50LWFuaW1hdGlvbiA5cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudC1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1JSAwJTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDg1JSAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1JSAwJTtcclxuICB9XHJcbn1cclxuXHJcbiNjYXJkLWltYWdlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmhvdmVyICNjYXJkLWltYWdlOjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmhvdmVyICNjYXJkLWltYWdlOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAjY2FyZC1pbWFnZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMHB4KTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3RleHQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMztcclxuICBtYXJnaW4tYm90dG9tOiAtMjJweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAjdGV4dC1jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zN3B4KSB0cmFuc2xhdGVZKC03MHB4KTtcclxufVxyXG5cclxuI2J1dHRvbi1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICBtYXJnaW4tYm90dG9tOiAtMzJweDtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnRyYW5zcGFyZW50dGV4dHVyZXMuY29tL3BhdHRlcm5zL2JydXNoZWQtYWx1bS5wbmdcIik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAtNzlweCA0MHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDFweCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIgI2J1dHRvbi1jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05M3B4KSB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3NvY2lhbC1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNzb2NpYWwtY29udGFpbmVyIHN2ZyB7XHJcbiAgZmlsbDogZG9kZ2VyYmx1ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMnB4IDRweCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3NvY2lhbC1jb250YWluZXIgc3ZnOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlWigyMGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAjc29jaWFsLWNvbnRhaW5lciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS4yZW0pO1xyXG59XHJcblxyXG4jc29jaWFsLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlNIQVJFXCI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwNXB4O1xyXG4gIHRvcDogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXI6aG92ZXIgI3NvY2lhbC1jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjJlbSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.scss']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fate/fate.component.ts":
/*!****************************************!*\
  !*** ./src/app/fate/fate.component.ts ***!
  \****************************************/
/*! exports provided: FateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateComponent", function() { return FateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function FateComponent_tr_59_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.items[request_r6.item - 1].name, "");
} }
function FateComponent_tr_59_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.quantity, "");
} }
function FateComponent_tr_59_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.roll_number, "");
} }
function FateComponent_tr_59_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.items[request_r6.item - 1].quantity, "");
} }
function FateComponent_tr_59_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.id, "");
} }
function FateComponent_tr_59_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.items[request_r6.item - 1].id_required, "");
} }
function FateComponent_tr_59_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_59_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.issue_request(request_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_59_td_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.deny_request(request_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "deny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_59_td_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_59_td_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.return_request(request_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_59_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " issued");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_59_td_8_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_returned == false);
} }
function FateComponent_tr_59_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " denied ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateComponent_tr_59_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_59_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateComponent_tr_59_td_3_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FateComponent_tr_59_td_4_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FateComponent_tr_59_td_5_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FateComponent_tr_59_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FateComponent_tr_59_td_7_Template, 5, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FateComponent_tr_59_td_8_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FateComponent_tr_59_td_9_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.filter_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && ctx_r0.filter_issued == false && ctx_r0.filter_denied == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && ctx_r0.filter_issued == true && ctx_r0.filter_denied == false && (request_r6.is_returned == ctx_r0.filter_returned || ctx_r0.items[request_r6.item - 1].is_consumable == ctx_r0.filter_consumable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r6.is_issued == ctx_r0.filter_issued && request_r6.is_denied == ctx_r0.filter_denied && request_r6.is_sent == true && ctx_r0.filter_issued == false && ctx_r0.filter_denied == true);
} }
function FateComponent_tr_60_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.items[request_r32.item - 1].name);
} }
function FateComponent_tr_60_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r32.quantity);
} }
function FateComponent_tr_60_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r32.roll_number);
} }
function FateComponent_tr_60_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.items[request_r32.item - 1].quantity);
} }
function FateComponent_tr_60_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r32.id);
} }
function FateComponent_tr_60_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.items[request_r32.item - 1].id_required);
} }
function FateComponent_tr_60_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_60_td_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.issue_request(request_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_60_td_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.deny_request(request_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "deny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_60_td_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_60_td_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.return_request(request_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_60_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " issued \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_60_td_8_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_returned == false);
} }
function FateComponent_tr_60_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_60_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateComponent_tr_60_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_60_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateComponent_tr_60_td_3_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FateComponent_tr_60_td_4_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FateComponent_tr_60_td_5_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FateComponent_tr_60_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FateComponent_tr_60_td_7_Template, 6, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FateComponent_tr_60_td_8_Template, 4, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FateComponent_tr_60_td_9_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FateComponent_tr_60_td_10_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r32 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.filter_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_sent == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_issued == false && request_r32.is_sent == true && request_r32.is_denied == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_issued == true && request_r32.is_sent == true && request_r32.is_denied == false && (request_r32.is_returned == false || ctx_r1.items[request_r32.item - 1].is_consumable == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_issued == false && request_r32.is_sent == true && request_r32.is_denied == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r32.is_returned == true && request_r32.is_sent == true && ctx_r1.items[request_r32.item - 1].is_consumable == false);
} }
function FateComponent_tr_61_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.items[request_r59.item - 1].name, "");
} }
function FateComponent_tr_61_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r59.quantity, "");
} }
function FateComponent_tr_61_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r59.roll_number, "");
} }
function FateComponent_tr_61_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r63.items[request_r59.item - 1].quantity, "");
} }
function FateComponent_tr_61_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r59.id, "");
} }
function FateComponent_tr_61_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r65.items[request_r59.item - 1].id_required, "");
} }
function FateComponent_tr_61_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " returned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateComponent_tr_61_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_61_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateComponent_tr_61_td_3_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FateComponent_tr_61_td_4_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FateComponent_tr_61_td_5_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FateComponent_tr_61_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FateComponent_tr_61_td_7_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r59 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.filter_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r59.is_returned == true && request_r59.is_sent == true && ctx_r2.items[request_r59.item - 1].is_consumable == false);
} }
function FateComponent_tr_85_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r73.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r73.colour_code);
} }
function FateComponent_tr_85_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Consumable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_85_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r73 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.decrementQuantity(item_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FateComponent_tr_85_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r73 = ctx.$implicit; return item_r73.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_85_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r73 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.incrementQuantity(item_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FateComponent_tr_85_td_11_Template, 2, 3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FateComponent_tr_85_td_12_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_85_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r73 = ctx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.save(item_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r73.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", item_r73.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r73.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r73.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r73.is_consumable == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r73.is_consumable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r73.id_required);
} }
function FateComponent_tr_118_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](machine_r82.name);
} }
function FateComponent_tr_118_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](machine_r82.type);
} }
function FateComponent_tr_118_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not working");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_118_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_118_td_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const machine_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.change_status(machine_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mark as working");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateComponent_tr_118_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_118_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateComponent_tr_118_td_3_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FateComponent_tr_118_td_4_Template, 3, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r82 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.filter_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r82.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r82.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r82.status == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r82.status == false);
} }
function FateComponent_tr_119_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](machine_r92.name);
} }
function FateComponent_tr_119_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](machine_r92.type);
} }
function FateComponent_tr_119_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Working");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_119_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_tr_119_td_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const machine_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.change_status(machine_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mark as not working");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FateComponent_tr_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateComponent_tr_119_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateComponent_tr_119_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateComponent_tr_119_td_3_Template, 2, 0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FateComponent_tr_119_td_4_Template, 3, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r92 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.filter_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r92.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r92.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r92.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", machine_r92.status == true);
} }
class FateComponent {
    constructor(api, router, toastr) {
        this.api = api;
        this.router = router;
        this.toastr = toastr;
        this.requests = [];
        this.items = [];
        this.machines = [];
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
        this.filter_issued = false;
        this.filter_denied = false;
        this.filter_returned = false;
        this.filter_consumable = true;
        this.filter_11 = 'd-show';
        this.filter_12 = 'd-none';
        this.filter_13 = 'd-none';
        this.filter_1 = 'd-none';
        this.filter_2 = 'd-none';
        this.filter_3 = 'd-none';
        this.filter_31 = 'd-show';
        this.filter_32 = 'd-show';
    }
    ngOnInit() {
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true && this.api.check_technician()) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey));
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
        }
        else {
            console.log('NOT AUTHORISED');
            this.router.navigate(['']);
        }
        this.api.getItems().subscribe(data => {
            this.items = data;
            const that = this;
            this.items.forEach(iterate);
            function iterate(item) {
                if (item.is_consumable == true) {
                    if (item.quantity < 0.3 * item.critical_val) {
                        item.colour_code = "red";
                    }
                    else if (item.quantity < 0.75 * item.critical_val) {
                        item.colour_code = "yellow";
                    }
                    else if (item.quantity < item.critical_val) {
                        item.colour_code = "green";
                    }
                    else {
                        item.colour_code = "green";
                    }
                }
                that.api.updateItem(item).subscribe(data => { console.log(data); }, error => { console.log(error); });
            }
            this.displayItems = this.items;
        }, error => {
            console.log(error);
        });
        this.api.getRequests().subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
        this.api.getCustomers().subscribe(data => {
            this.customers = data;
        }, error => {
            console.log(error);
        });
        this.api.getMachines().subscribe(data => {
            this.machines = data;
        }, error => {
            console.log(error);
        });
    }
    searchTitle() {
        this.api.rollSearch(this.roll_number)
            .subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
    }
    searchItem() {
        this.api.itemSearch(this.item_query)
            .subscribe(data => {
            this.displayItems = data;
        }, error => {
            console.log(error);
        });
    }
    searchMachine() {
        this.api.machineSearch(this.machine_query)
            .subscribe(data => {
            this.machines = data;
        }, error => {
            console.log(error);
        });
    }
    only_issued() {
        this.filter_11 = 'd-show';
        this.filter_12 = 'd-none';
        this.filter_13 = 'd-none';
        this.filter_issued = true;
        this.filter_denied = false;
        this.filter_returned = false;
        this.filter_consumable = true;
    }
    only_denied() {
        this.filter_11 = 'd-show';
        this.filter_12 = 'd-none';
        this.filter_13 = 'd-none';
        this.filter_issued = false;
        this.filter_denied = true;
        this.filter_returned = false;
        this.filter_consumable = true;
    }
    only_returned() {
        this.filter_11 = 'd-none';
        this.filter_12 = 'd-none';
        this.filter_13 = 'd-show';
        this.filter_issued = true;
        this.filter_denied = false;
        this.filter_returned = true;
    }
    only_pending() {
        this.filter_11 = 'd-show';
        this.filter_12 = 'd-none';
        this.filter_13 = 'd-none';
        this.filter_issued = false;
        this.filter_denied = false;
        this.filter_returned = false;
    }
    all_1() {
        this.filter_11 = 'd-none';
        this.filter_12 = 'd-show';
        this.filter_13 = 'd-none';
        this.filter_issued = true;
        this.filter_denied = false;
    }
    all_3() {
        this.filter_31 = 'd-show';
        this.filter_32 = 'd-show';
    }
    only_working() {
        this.filter_31 = 'd-none';
        this.filter_32 = 'd-show';
    }
    only_defective() {
        this.filter_31 = 'd-show';
        this.filter_32 = 'd-none';
    }
    issue_request(request) {
        request.is_issued = true;
        request.is_denied = false;
        request.is_returned = this.items[request.item - 1].is_consumable;
        request.issued_time = new Date();
        this.items[request.item - 1].quantity -= request.quantity;
        this.api.updateRequest(request).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        this.api.updateItem(this.items[request.item - 1]).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        this.toastr.success(this.items[request.item - 1].name + ' is issued successfully to ' + request.roll_number, 'Issued', {
            timeOut: 1000,
            positionClass: "toast-top-full-width"
        });
        this.mail.roll_number = this.user_data.roll_number;
        this.mail.subject = this.items[request.item - 1].name + 'Confirmation receipt for item issue';
        this.mail.message = this.items[request.item - 1].name + ' <h1>has been issued successfully</h1>';
        this.mail.recipient_list = "['gakshat2207@gmail.com']";
        var date_time = new Date();
        this.mail.html_message = this.user_data.first_name + ' ' + this.user_data.last_name + ', <br><br>You have successfully issued <strong>' + this.items[request.item - 1].name + '</strong>' + ': Quantity = <strong>' + request.quantity + '</strong> at ' + date_time + '<br><br>Please keep the item safe and secure. If you face any issues or problems, contact the Tinkerers\' Laboratory team as soon as possible.<br><br>Regards,<br>Tinkerers\' Laboratory Team';
        this.api.updateMail(this.mail).subscribe(data => { this.api.sendMail(this.user_data.roll_number); console.log(data); }, error => { console.log(error); });
    }
    deny_request(request) {
        request.is_issued = false;
        request.is_denied = true;
        request.is_returned = false;
        request.issued_time = new Date();
        this.api.updateRequest(request).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        this.toastr.success(this.items[request.item - 1].name + ' requested by ' + request.roll_number + ' has been denied', 'Issued', {
            timeOut: 1000,
            positionClass: "toast-top-full-width"
        });
    }
    return_request(request) {
        request.is_issued = true;
        request.is_denied = false;
        request.is_returned = true;
        request.returned_time = new Date();
        this.items[request.item - 1].quantity += request.quantity;
        this.api.updateRequest(request).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        this.api.updateItem(this.items[request.item - 1]).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        this.toastr.success(this.items[request.item - 1].name + ' issued by ' + request.roll_number + ' is returned successfully', 'Returned', {
            timeOut: 1000,
            positionClass: "toast-top-full-width"
        });
        this.mail.roll_number = this.user_data.roll_number;
        this.mail.subject = this.items[request.item - 1].name + ' Confirmation receipt for return of items';
        this.mail.message = this.items[request.item - 1].name + ' <h1>has been returned successfully</h1>';
        this.mail.recipient_list = "['gakshat2207@gmail.com']";
        var date_time = new Date();
        this.mail.html_message = this.user_data.first_name + ' ' + this.user_data.last_name + ', <br><br>You have successfully returned <strong>' + this.items[request.item - 1].name + '</strong>' + ': Quantity = <strong>' + request.quantity + '</strong> at ' + date_time + '<br><br>Thank you for returning the item in good condition.' + '<br><br>If you face any issues or problems, contact the Tinkerers\' Laboratory team or reply to the thread.<br><br>Regards,<br>Tinkerers\' Laboratory Team';
        this.api.updateMail(this.mail).subscribe(data => { this.api.sendMail(this.user_data.roll_number); console.log(data); }, error => { console.log(error); });
    }
    p_request(request) {
        request.is_issued = false;
        request.is_denied = false;
        request.is_returned = false;
        this.api.updateRequest(request).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    change_status(machine) {
        if (machine.status) {
            machine.status = false;
        }
        else {
            machine.status = true;
        }
        this.api.updateMachine(machine).subscribe(data => {
        }, error => {
            console.log(error);
        });
        this.toastr.success(machine.name + ' has been updated', 'Updated Successfully', {
            timeOut: 4000,
            positionClass: "toast-top-full-width"
        });
    }
    incrementQuantity(item) {
        item.quantity++;
    }
    decrementQuantity(item) {
        item.quantity--;
    }
    save(item) {
        this.x = item;
        console.log(item);
        this.api.updateItem(this.x).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
        console.log("data");
        this.toastr.success(item.name + ' has been updated', 'Updated Successfully', {
            timeOut: 2000,
            positionClass: "toast-top-full-width"
        });
    }
    show_requests() {
        this.filter_1 = 'd-show';
        this.filter_2 = 'd-none';
        this.filter_3 = 'd-none';
    }
    show_items() {
        this.filter_1 = 'd-none';
        this.filter_2 = 'd-show';
        this.filter_3 = 'd-none';
    }
    show_machines() {
        this.filter_1 = 'd-none';
        this.filter_2 = 'd-none';
        this.filter_3 = 'd-show';
    }
    searchButton1(event) {
        if (event.keyCode == 13 && this.roll_number != '') {
            this.searchTitle();
        }
    }
    searchButton2(event) {
        if (event.keyCode == 13 && this.item_query != '') {
            this.searchItem();
        }
    }
    searchButton3(event) {
        if (event.keyCode == 13 && this.machine_query != '') {
            this.searchMachine();
        }
    }
}
FateComponent.ɵfac = function FateComponent_Factory(t) { return new (t || FateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
FateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateComponent, selectors: [["app-fate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])], decls: 123, vars: 45, consts: [[1, "example-button-row", 2, "text-align", "center"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["aria-label", "Select an option"], ["value", "1", 3, "click"], ["value", "2", 3, "click"], ["value", "3", 3, "click"], ["value", "4", 3, "click"], ["value", "5", 3, "click"], ["href", "#0", 1, "cd-close"], ["type", "text", "placeholder", "Search for Requests...", 1, "form-control", 3, "ngModel", "keydown", "ngModelChange"], [1, "input-group-append"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["id", "dtBasicExample", "cellspacing", "0", "width", "100%"], [1, "th-sm"], [3, "class", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Search for Items...", 1, "form-control", 3, "ngModel", "keydown", "ngModelChange"], ["class", "", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Search for Machines...", 1, "form-control", 3, "ngModel", "keydown", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, ""], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "backgroundColor", 4, "ngIf"], ["style", "color: rgb(231, 57, 14);", 4, "ngIf"], [2, "color", "rgb(231, 57, 14)"], ["style", "color:rgb(20, 194, 20);", 4, "ngIf"], [2, "color", "rgb(20, 194, 20)"]], template: function FateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_7_listener() { return ctx.show_requests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_10_listener() { return ctx.show_items(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_13_listener() { return ctx.show_machines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "REQUESTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_20_listener() { return ctx.only_issued(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "issued");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_23_listener() { return ctx.only_denied(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_26_listener() { return ctx.only_pending(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_29_listener() { return ctx.only_returned(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "returned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_32_listener() { return ctx.all_1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FateComponent_Template_input_keydown_37_listener($event) { return ctx.searchButton1($event); })("ngModelChange", function FateComponent_Template_input_ngModelChange_37_listener($event) { return ctx.roll_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_39_listener() { return ctx.searchTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Item name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Quantity requested ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Roll number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Total Quantiy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Request Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "ID required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FateComponent_tr_59_Template, 10, 12, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, FateComponent_tr_60_Template, 11, 13, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, FateComponent_tr_61_Template, 8, 10, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "ITEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FateComponent_Template_input_keydown_65_listener($event) { return ctx.searchButton1($event); })("ngModelChange", function FateComponent_Template_input_ngModelChange_65_listener($event) { return ctx.item_query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_67_listener() { return ctx.searchItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Item Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Colour code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "ID required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, FateComponent_tr_85_Template, 18, 7, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "MACHINES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_91_listener() { return ctx.only_working(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_94_listener() { return ctx.only_defective(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "defective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_mat_radio_button_click_97_listener() { return ctx.all_3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FateComponent_Template_input_keydown_102_listener($event) { return ctx.searchButton3($event); })("ngModelChange", function FateComponent_Template_input_ngModelChange_102_listener($event) { return ctx.machine_query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateComponent_Template_button_click_104_listener() { return ctx.searchMachine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Machine name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, FateComponent_tr_118_Template, 5, 7, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, FateComponent_tr_119_Template, 5, 7, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.filter_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cd-filter ", ctx.filter_1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-group col-3 ", ctx.filter_1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.roll_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.roll_number == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table table-striped table-bordered table-sm  ", ctx.filter_1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.filter_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-group col-3 ", ctx.filter_2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item_query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.item_query == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table table-striped table-bordered table-sm  ", ctx.filter_2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.filter_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cd-filter ", ctx.filter_3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("input-group col-3 ", ctx.filter_3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.machine_query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.machine_query == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table table-striped table-bordered table-sm  ", ctx.filter_3, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.machines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.machines);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting[_ngcontent-%COMP%]:after, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting[_ngcontent-%COMP%]:before, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc[_ngcontent-%COMP%]:after, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc[_ngcontent-%COMP%]:before, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc_disabled[_ngcontent-%COMP%]:after, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc_disabled[_ngcontent-%COMP%]:before, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc[_ngcontent-%COMP%]:after, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc[_ngcontent-%COMP%]:before, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc_disabled[_ngcontent-%COMP%]:after, table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc_disabled[_ngcontent-%COMP%]:before {\r\n  bottom: .5em;\r\n}\r\n\r\n.one[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n}\r\n\r\n.two[_ngcontent-%COMP%]{\r\n\r\n  margin: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 650px) {\r\ntable[_ngcontent-%COMP%] {\r\n  display: block;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF0ZS9mYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFVRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBOztFQUVFLFlBQVk7O0FBRWQ7O0FBRUE7O0dBRUc7O0FBRUg7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9mYXRlL2ZhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZzphZnRlcixcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSxcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzphZnRlcixcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YmVmb3JlLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlcixcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YmVmb3JlLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDphZnRlcixcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YmVmb3JlIHtcclxuICBib3R0b206IC41ZW07XHJcbn1cclxuXHJcbi5vbmV7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLnR3b3tcclxuXHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLyogdGFibGV7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG50YWJsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fate',
                templateUrl: './fate.component.html',
                styleUrls: ['./fate.component.css'],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]]
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HomeComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login With SSO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Logged in as ", ctx_r1.user_data.roll_number, " ");
} }
class HomeComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].loginUrl;
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/vanta.waves.min.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript2Element = document.createElement("script");
        this.myScript2Element.src = "assets/js/script.js";
        document.body.appendChild(this.myScript2Element);
        this.myScript3Element = document.createElement("script");
        this.myScript3Element.src = "assets/js/home.js";
        document.body.appendChild(this.myScript3Element);
        this.myScript4Element = document.createElement("script");
        this.myScript4Element.src = "assets/js/text-auto.js";
        document.body.appendChild(this.myScript4Element);
        this.myScript5Element = document.createElement("script");
        this.myScript5Element.src = "assets/js/three.min.js";
        document.body.appendChild(this.myScript5Element);
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ngOnInit() {
        VanillaTilt.init(document.querySelectorAll(".logo"), { max: 25, speed: 400 });
        var testimonials = document.querySelector('.main-carousel');
        var flkty = new flickity__WEBPACK_IMPORTED_MODULE_2__(testimonials, {
            autoPlay: 5000,
            wrapAround: true,
            groupCells: true,
        });
        var projects = document.querySelector('.project-carousel');
        var flkty2 = new flickity__WEBPACK_IMPORTED_MODULE_2__(projects, {
            autoPlay: 5000,
            wrapAround: true,
            groupCells: false,
            adaptiveHeight: false
        });
        //authentication code to be copied
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jdataKey));
            console.log(this.user_data);
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
            this.api.getCustomer(this.user_data.roll_number)
                .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
        }
        else {
            this.router.navigate(['']);
        }
        //authentication code end
        $(document).ready(function () {
            //  overlay start
            $(".card").mouseover(function () {
                $(".card").css("cursor", "pointer");
            });
            $(".card-body").click(function () {
                $(this).siblings(".overlay").slideDown(400);
            });
            $(".overlay").click(function () {
                $(".overlay").slideUp(400);
            });
            // overlay end
            // funFacts start
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            var a = 0;
            $(window).scroll(function () {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function () {
                        var $this = $(this), countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(parseInt(this.countNum)));
                            },
                            complete: function () {
                                $this.text(numberWithCommas(this.countNum) + "+");
                                //alert('finished');
                            }
                        });
                    });
                    a = 1;
                }
            });
            // funFacts end
            $("#myCarousel").carousel({
                interval: 2500
            });
            // Enable Carousel Indicators
            $(".item1").click(function () {
                $("#myCarousel").carousel(0);
            });
            $(".item2").click(function () {
                $("#myCarousel").carousel(1);
            });
            $(".item3").click(function () {
                $("#myCarousel").carousel(2);
            });
            $(".item4").click(function () {
                $("#myCarousel").carousel(3);
            });
            // Enable Carousel Controls
            $(".carousel-control-prev").click(function () {
                $("#myCarousel").carousel("prev");
            });
            $(".carousel-control-next").click(function () {
                $("#myCarousel").carousel("next");
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 171, vars: 2, consts: [[1, "home1"], [1, "logo"], ["src", "assets\\Images\\TL2.png", "height", "500", "width", "500", 1, "navbar-logo"], ["data-aos", "fade-up"], [1, "title", 2, "position", "relative"], [1, "dynamic-title", "cd-headline", "clip", "is-full-width"], [1, "text-primary"], [1, "cd-words-wrapper"], [1, "is-visible"], [1, "gold-title"], ["id", "start"], ["data-aos", "fade-up", "id", "st", 3, "href", 4, "ngIf"], ["data-aos", "fade-up", "id", "st", "href", "", 4, "ngIf"], [1, "resources"], ["id", "container"], ["id", "text1"], ["id", "text2"], ["data-aos", "fade-up", 2, "color", "#fff", "font-size", "50px", "font-family", "'Courier New', Courier, monospace", "margin-left", "500px"], ["data-aos", "fade-up", 2, "color", "#fff", "font-size", "large", "margin-left", "500px", "font-family", "Verdana, Geneva, Tahoma, sans-serif"], ["controls", "", "preload", "metadeta", "width", "465", "height", "240", "data-aos", "fade-up", 2, "margin-top", "-800px"], ["src", "https://billwurtz.com/backwards-hangman.mp4", "type", "video/mp4"], ["id", "filters"], ["id", "threshold"], ["in", "SourceGraphic", "type", "matrix", "values", "1 0 0 0 0\n\t\t\t\t\t\t\t\t\t0 1 0 0 0\n\t\t\t\t\t\t\t\t\t0 0 1 0 0\n\t\t\t\t\t\t\t\t\t0 0 0 255 -140"], [1, "projects"], ["data-aos", "fade-left", 1, "my-4"], ["data-aos", "fade-right", 1, "container-fluid", "my-5"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "card", 2, "width", "80%", "background", "black", "color", "rgb(255, 254, 254)"], ["height", "300px", "src", "assets/Images/par.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "carousel-item"], [1, "card", 2, "width", "80%"], [1, "card-body", 2, "background", "black", "color", "rgb(255, 254, 254)"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["src", "assets/Images/net.png", "alt", "patternImg", 1, "Image__ImageWrapper-sc-1lwf601-0", "liulOm", "patternImg"], [1, "counter"], [1, "parallax"], ["id", "funFacts", 1, "container"], ["data-aos", "fade-up", 1, "display-3", 2, "text-align", "center", "color", "#fff"], [1, "row", "p-4", "m-4"], [1, "container"], ["id", "counter", 1, "row"], [1, "col-md-1", "col-3"], [1, "col-md-10", "col-6"], [1, "row"], ["data-aos", "fade-up", 1, "col-md-3"], ["data-count", "1500", 1, "counter-value"], ["data-count", "100", 1, "counter-value"], ["data-count", "50000", 1, "counter-value"], ["data-count", "1000", 1, "counter-value"], [1, "testimonials"], ["alt", "dots", "src", "assets/Images/dots-group-v.png", 1, "dotV"], ["alt", "dots", "src", "assets/Images/dots-group-sm.png", 1, "dotX"], [1, "my-4"], [1, "container", "testimonials-container", "my-5"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "testimonial-card"], [1, "quote"], [1, "fa", "fa-quote-right"], ["alt", "Image placeholder", "height", "80", "src", "http://lorempixel.com/g/600/420/", 1, "avatar", "avatar-xl", "rounded-circle", "my-3"], [1, "font-weight-bolder", "my-2", "text-muted"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "scrollBtn", "title", "Go to top"], [1, "fas", "fa-angle-double-up"], ["data-aos", "fade-up", "id", "st", 3, "href"], ["data-aos", "fade-up", "id", "st", "href", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tinkerers' Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Think ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tinker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_a_30_Template, 2, 1, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_a_31_Template, 2, 1, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "What we are, what we can, an overview.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "skjdbvkjsnkrjvnsrbvsjnfvksjdnrkubhsvkndkjbrkjbsjvjcbvsrbksjvfjnv kjrsjkbvskjbnrkjbvkfjf scn, zendlwnievnskjdbvkjsnkrjvnsrbvsjnfvksjdnrkubhsvkndkjbrkjbsjvjcbvsrbksjvfjnv kjrsjkbvskjbnrkjbvkfjf scn,zendlwnievnskjdbvkjsnkrjvnsrbvsjnfvksjdskjdbvkjsnkrjvnsrbvsjnfvksjdnrkubhsvkndkj brkjbsjvjcbvsrbksjvfjnv kjrsjkbvskjbnrkjbvkfjf scn,zendlwnievnnrkubhsvkndkjbrkjbsjvjcbvsrbksjvfjnv kjrsjkbvskjbnrkjbvkfjf scn,zendlwnievn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "video", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "source", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "filter", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "feColorMatrix", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Braile Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " When Shyam Shah built his first simple prototype at Tinkerer\u2019s Lab he was perhaps unaware that one day his Braille reading device will become the world\u2019s most affordable, multi-language Digital Braille display. Even today 12 million Indians, the worlds largest blind population, are almost completely dependent on the braille script perforated on hard paper. Yet, in the modern world, most of the resources available are in digital form. Put simply, Braille Me is an input and output device wherein the content can be read and typed. You could insert a USB drive and this Braille device can read the files. You can pair it via Bluetooth to a Smartphone, computer, or tablet. You can also Whatsapp, send emails by typing messages in Braille Me which would then get converted into visual English (or another language) characters. The USP of BrailleMe is its unique magnetic operated actuators technology that enables them to offer the product at a 10x price advantage over competitors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Braile Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " When Shyam Shah built his first simple prototype at Tinkerer\u2019s Lab he was perhaps unaware that one day his Braille reading device will become the world\u2019s most affordable, multi-language Digital Braille display. Even today 12 million Indians, the worlds largest blind population, are almost completely dependent on the braille script perforated on hard paper. Yet, in the modern world, most of the resources available are in digital form. Put simply, Braille Me is an input and output device wherein the content can be read and typed. You could insert a USB drive and this Braille device can read the files. You can pair it via Bluetooth to a Smartphone, computer, or tablet. You can also Whatsapp, send emails by typing messages in Braille Me which would then get converted into visual English (or another language) characters. The USP of BrailleMe is its unique magnetic operated actuators technology that enables them to offer the product at a 10x price advantage over competitors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Braile Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " When Shyam Shah built his first simple prototype at Tinkerer\u2019s Lab he was perhaps unaware that one day his Braille reading device will become the world\u2019s most affordable, multi-language Digital Braille display. Even today 12 million Indians, the worlds largest blind population, are almost completely dependent on the braille script perforated on hard paper. Yet, in the modern world, most of the resources available are in digital form. Put simply, Braille Me is an input and output device wherein the content can be read and typed. You could insert a USB drive and this Braille device can read the files. You can pair it via Bluetooth to a Smartphone, computer, or tablet. You can also Whatsapp, send emails by typing messages in Braille Me which would then get converted into visual English (or another language) characters. The USP of BrailleMe is its unique magnetic operated actuators technology that enables them to offer the product at a 10x price advantage over competitors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Some Fun Facts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "sq. ft. of space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Projects Made every year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "man-hours of work done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Students work in this Lab yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ol", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Many of my finest memories as an engineer in the institute were made here. Be it pulling out all-nighters for XLR8, RC Plane or designing a life follower in my freshmen year, every experience is etched very deep in my heart. It\u2019s the closest to a place that allows you to realize that Tinkerer\u2019s image one has in his/her mind before setting afoot at IIT Bombay. I have been privileged enough to get an opportunity to serve as the secretary for Tinkerers\u2019 Lab and I still cherish the feeling of enabling others to realize the Tinkerer within oneself. Tinkerer\u2019s Lab has always played some part in every project be it hobby or academic that I have done. It was always fun to have a lab open 24 hours to work on your ideas and I would say Tinkerers\u2019 lab has played a key role in my journey to becoming an engineer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Mookund ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Many of my finest memories as an engineer in the institute were made here. Be it pulling out all-nighters for XLR8, RC Plane or designing a life follower in my freshmen year, every experience is etched very deep in my heart. It\u2019s the closest to a place that allows you to realize that Tinkerer\u2019s image one has in his/her mind before setting afoot at IIT Bombay. I have been privileged enough to get an opportunity to serve as the secretary for Tinkerers\u2019 Lab and I still cherish the feeling of enabling others to realize the Tinkerer within oneself. Tinkerer\u2019s Lab has always played some part in every project be it hobby or academic that I have done. It was always fun to have a lab open 24 hours to work on your ideas and I would say Tinkerers\u2019 lab has played a key role in my journey to becoming an engineer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Mookund ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Many of my finest memories as an engineer in the institute were made here. Be it pulling out all-nighters for XLR8, RC Plane or designing a life follower in my freshmen year, every experience is etched very deep in my heart. It\u2019s the closest to a place that allows you to realize that Tinkerer\u2019s image one has in his/her mind before setting afoot at IIT Bombay. I have been privileged enough to get an opportunity to serve as the secretary for Tinkerers\u2019 Lab and I still cherish the feeling of enabling others to realize the Tinkerer within oneself. Tinkerer\u2019s Lab has always played some part in every project be it hobby or academic that I have done. It was always fun to have a lab open 24 hours to work on your ideas and I would say Tinkerers\u2019 lab has played a key role in my journey to becoming an engineer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Mookund ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".home1[_ngcontent-%COMP%]{\r\n  height:100vh;\r\n  width:100%;\r\n \r\n\r\n}\r\n\r\n\r\n.home1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 10%;\r\n  top:45%;\r\n  text-align: left !important;\r\n\r\n}\r\n\r\n\r\n.home1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  \r\n  white-space: nowrap;\r\n  left: 0;\r\n  top: 0;\r\n  font-style: normal\r\n}\r\n\r\n\r\n.title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\ncolor: #999\r\n}\r\n\r\n\r\n.white[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\ncolor: #fff\r\n}\r\n\r\n\r\n.dynamic-title[_ngcontent-%COMP%] {\r\nfloat: none;\r\nmargin: 0 auto;\r\ndisplay: table;\r\nwidth: auto;\r\nfont-family: 'Roboto Slab', serif;\r\nfont-size: 50px;\r\nline-height: 20px;\r\nfont-weight: 700;\r\nmargin-bottom: 20px;\r\ntext-transform: uppercase;\r\n}\r\n\r\n\r\n@media screen and (max-width:600px){\r\n  .dynamic-title[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin: 0 auto;\r\n    display: table;\r\n    width: auto;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 40px;\r\n    line-height: 20px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n    }\r\n    \r\n}\r\n\r\n\r\ndiv#text-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\nposition: absolute;\r\ndisplay: inline-block;\r\ntop: 200px;\r\nwidth: 40px;\r\nheight: 40px;\r\nborder-radius: 50%;\r\ncolor: #fff;\r\noverflow: hidden;\r\ntransition-delay: 0.2s;\r\ntransition: .3s background;\r\noutline: none;\r\nfont-size: 15px;\r\nfont-family: 'Roboto Black','Helvetica',sans-serif;\r\nfont-weight: 300;\r\n}\r\n\r\n\r\nspan.gold-title[_ngcontent-%COMP%] {\r\n  font-size: 40px !important;\r\n  \r\n  color: #FFC11F;\r\n}\r\n\r\n\r\n#st[_ngcontent-%COMP%]:after, .mess-us[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: linear-gradient(50deg, rgba(0, 0, 0, 0.699), rgb(175, 2, 2));\r\n  transition: width 0.8s linear;\r\n  z-index: -1;\r\n}\r\n\r\n\r\n#st[_ngcontent-%COMP%]:hover::after, .mess-us[_ngcontent-%COMP%]:hover::after {\r\n  -webkit-animation: animate;\r\n          animation: animate;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n  width: 100%;\r\n}\r\n\r\n\r\n#st[_ngcontent-%COMP%]:hover, .mess-us[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n@-webkit-keyframes animate {\r\n  0% {\r\n    width: 20%;\r\n  }\r\n\r\n  20% {\r\n    width: 40%;\r\n  }\r\n\r\n  40% {\r\n    width: 60%;\r\n  }\r\n\r\n  70% {\r\n    width: 80%;\r\n  }\r\n\r\n  98% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n@keyframes animate {\r\n  0% {\r\n    width: 20%;\r\n  }\r\n\r\n  20% {\r\n    width: 40%;\r\n  }\r\n\r\n  40% {\r\n    width: 60%;\r\n  }\r\n\r\n  70% {\r\n    width: 80%;\r\n  }\r\n\r\n  98% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n#start[_ngcontent-%COMP%]   #st[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 160px;\r\n  text-align: center;\r\n  background: linear-gradient(45deg, rgb(151, 148, 148), rgb(4, 4, 94));\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#start[_ngcontent-%COMP%]   .mess-us[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background: linear-gradient(45deg, black, blue);\r\n  color: white;\r\n  outline: none;\r\n  border: none;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  height: 40px;\r\n  width: 40px;\r\n  margin-left: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#start[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:nth-child(1) {\r\n  color: #f6f8fa;\r\n}\r\n\r\n\r\n#start[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:nth-child(2) {\r\n  color: #f6f8fa;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nposition: relative;\r\ntext-align: left;\r\n}\r\n\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nposition: absolute;\r\nwhite-space: nowrap;\r\nleft: 0;\r\ntop: 0;\r\nfont-style: normal;\r\n}\r\n\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nfont-style: normal;\r\n}\r\n\r\n\r\n.cd-words-wrapper[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nposition: relative;\r\n}\r\n\r\n\r\n.no-js[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n\r\n.no-js[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\ntransform-origin: 50% 100%;\r\ntransform: rotateX(180deg);\r\n}\r\n\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\ntransform: rotateX(0deg);\r\n-webkit-animation: cd-rotate-1-in 1.2s;\r\nanimation: cd-rotate-1-in 1.2s;\r\n}\r\n\r\n\r\n.cd-headline.rotate-1[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\ntransform: rotateX(180deg);\r\n-webkit-animation: cd-rotate-1-out 1.2s;\r\nanimation: cd-rotate-1-out 1.2s;\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-1-in {\r\n0% {\r\n  -webkit-transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n35% {\r\n  -webkit-transform: rotateX(120deg);\r\n  opacity: 0;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-1-in {\r\n0% {\r\n  transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n35% {\r\n  transform: rotateX(120deg);\r\n  opacity: 0;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: rotateX(360deg);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-1-out {\r\n0% {\r\n  -webkit-transform: rotateX(0deg);\r\n  opacity: 1;\r\n}\r\n35% {\r\n  -webkit-transform: rotateX(-40deg);\r\n  opacity: 1;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-1-out {\r\n0% {\r\n  transform: rotateX(0deg);\r\n  opacity: 1;\r\n}\r\n35% {\r\n  transform: rotateX(-40deg);\r\n  opacity: 1;\r\n}\r\n65% {\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: rotateX(180deg);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nvertical-align: top;\r\noverflow: hidden;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\nright: 0;\r\ntop: 50%;\r\nbottom: auto;\r\ntransform: translateY(-50%);\r\nheight: 90%;\r\nwidth: 1px;\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.waiting[_ngcontent-%COMP%]::after {\r\n-webkit-animation: cd-pulse 1s infinite;\r\nanimation: cd-pulse 1s infinite;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%] {\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%]::after {\r\nvisibility: hidden;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   .cd-words-wrapper.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ncolor: #0d0d0d;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nvisibility: hidden;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nvisibility: visible;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nvisibility: hidden;\r\n}\r\n\r\n\r\n.cd-headline.type[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\nposition: relative;\r\nvisibility: visible;\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-pulse {\r\n0% {\r\n  -webkit-transform: translateY(-50%) scale(1);\r\n  opacity: 1;\r\n}\r\n40% {\r\n  -webkit-transform: translateY(-50%) scale(0.9);\r\n  opacity: 0;\r\n}\r\n100% {\r\n  -webkit-transform: translateY(-50%) scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-pulse {\r\n0% {\r\n  transform: translateY(-50%) scale(1);\r\n  opacity: 1;\r\n}\r\n40% {\r\n  transform: translateY(-50%) scale(0.9);\r\n  opacity: 0;\r\n}\r\n100% {\r\n  transform: translateY(-50%) scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .cd-headline.rotate-2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\n}\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform-style: preserve-3d;\r\ntransform: translateZ(-20px) rotateX(90deg);\r\nopacity: 0;\r\n}\r\n\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-2-in 0.4s forwards;\r\nanimation: cd-rotate-2-in 0.4s forwards;\r\n}\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-2-out 0.4s forwards;\r\nanimation: cd-rotate-2-out 0.4s forwards;\r\n}\r\n\r\n\r\n.cd-headline.rotate-2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ntransform: translateZ(20px);\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateX(0deg);\r\nopacity: 0;\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\ntransform: scale(1);\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-2[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-2-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(90deg);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(-10deg);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(0deg);\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-2-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(90deg);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(-10deg);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(0deg);\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-2-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(-20px) rotateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(-100deg);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-20px) rotateX(-90deg);\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-2-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateZ(-20px) rotateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(-100deg);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateZ(-20px) rotateX(-90deg);\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\nleft: 0;\r\nbottom: 0;\r\nheight: 3px;\r\nwidth: 0;\r\nbackground: #0096a7;\r\nz-index: 2;\r\ntransition: width 0.3s -0.1s;\r\n}\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   .cd-words-wrapper.is-loading[_ngcontent-%COMP%]::after {\r\nwidth: 100%;\r\ntransition: width 3s;\r\n}\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\ntop: .2em;\r\nopacity: 0;\r\ntransition: opacity 0.3s;\r\n}\r\n\r\n\r\n.cd-headline.loading-bar[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\ntop: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\ntop: .2em;\r\n}\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\ntop: 0;\r\nopacity: 1;\r\n-webkit-animation: slide-in 0.6s;\r\nanimation: slide-in 0.6s;\r\n}\r\n\r\n\r\n.cd-headline.slide[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: slide-out 0.6s;\r\nanimation: slide-out 0.6s;\r\n}\r\n\r\n\r\n@-webkit-keyframes slide-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(20%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(0);\r\n}\r\n}\r\n\r\n\r\n@keyframes slide-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateY(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateY(20%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes slide-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(120%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(100%);\r\n}\r\n}\r\n\r\n\r\n@keyframes slide-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateY(120%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateY(100%);\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\npadding: .2em 0;\r\n}\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nvertical-align: top;\r\n}\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%]::after {\r\n\r\ncontent: '';\r\nposition: absolute;\r\ntop: 0;\r\nright: 0;\r\nwidth: 2px;\r\nheight: 100%;\r\nbackground-color: #aebcb9;\r\n}\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n\r\n.cd-headline.clip[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n-webkit-animation: zoom-in 0.8s;\r\nanimation: zoom-in 0.8s;\r\n}\r\n\r\n\r\n.cd-headline.zoom[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: zoom-out 0.8s;\r\nanimation: zoom-out 0.8s;\r\n}\r\n\r\n\r\n@-webkit-keyframes zoom-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(100px);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(0);\r\n}\r\n}\r\n\r\n\r\n@keyframes zoom-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateZ(100px);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateZ(0);\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes zoom-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateZ(0);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(-100px);\r\n}\r\n}\r\n\r\n\r\n@keyframes zoom-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateZ(0);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateZ(-100px);\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   .cd-words-wrapper[_ngcontent-%COMP%] {\r\nperspective: 300px;\r\n}\r\n\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\ntransform: rotateY(180deg);\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\n}\r\n\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateY(0deg);\r\n}\r\n\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-3-in 0.6s forwards;\r\nanimation: cd-rotate-3-in 0.6s forwards;\r\n}\r\n\r\n\r\n.cd-headline.rotate-3[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: cd-rotate-3-out 0.6s forwards;\r\nanimation: cd-rotate-3-out 0.6s forwards;\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: rotateY(0deg);\r\nopacity: 0;\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.rotate-3[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-3-in {\r\n0% {\r\n  -webkit-transform: rotateY(180deg);\r\n}\r\n100% {\r\n  -webkit-transform: rotateY(0deg);\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-3-in {\r\n0% {\r\n  transform: rotateY(180deg);\r\n}\r\n100% {\r\n  transform: rotateY(0deg);\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes cd-rotate-3-out {\r\n0% {\r\n  -webkit-transform: rotateY(0);\r\n}\r\n100% {\r\n  -webkit-transform: rotateY(-180deg);\r\n}\r\n}\r\n\r\n\r\n@keyframes cd-rotate-3-out {\r\n0% {\r\n  transform: rotateY(0);\r\n}\r\n100% {\r\n  transform: rotateY(-180deg);\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\nopacity: 0;\r\ntransform: scale(0);\r\n}\r\n\r\n\r\n.is-visible[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i.in[_ngcontent-%COMP%] {\r\n-webkit-animation: scale-up 0.6s forwards;\r\nanimation: scale-up 0.6s forwards;\r\n}\r\n\r\n\r\n.cd-headline.scale[_ngcontent-%COMP%]   i.out[_ngcontent-%COMP%] {\r\n-webkit-animation: scale-down 0.6s forwards;\r\nanimation: scale-down 0.6s forwards;\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\ntransform: scale(1);\r\nopacity: 0;\r\n}\r\n\r\n\r\n.no-csstransitions[_ngcontent-%COMP%]   .cd-headline.scale[_ngcontent-%COMP%]   .is-visible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n}\r\n\r\n\r\n@-webkit-keyframes scale-up {\r\n0% {\r\n  -webkit-transform: scale(0);\r\n  opacity: 0;\r\n}\r\n60% {\r\n  -webkit-transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  -webkit-transform: scale(1);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n\r\n@keyframes scale-up {\r\n0% {\r\n  transform: scale(0);\r\n  opacity: 0;\r\n}\r\n60% {\r\n  transform: scale(1.2);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes scale-down {\r\n0% {\r\n  -webkit-transform: scale(1);\r\n  opacity: 1;\r\n}\r\n60% {\r\n  -webkit-transform: scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n@keyframes scale-down {\r\n0% {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n60% {\r\n  transform: scale(0);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nopacity: 0;\r\n}\r\n\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b.is-visible[_ngcontent-%COMP%] {\r\nopacity: 1;\r\n-webkit-animation: push-in 0.6s;\r\nanimation: push-in 0.6s;\r\n}\r\n\r\n\r\n.cd-headline.push[_ngcontent-%COMP%]   b.is-hidden[_ngcontent-%COMP%] {\r\n-webkit-animation: push-out 0.6s;\r\nanimation: push-out 0.6s;\r\n}\r\n\r\n\r\n@-webkit-keyframes push-in {\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(10%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(0);\r\n}\r\n}\r\n\r\n\r\n@keyframes push-in {\r\n0% {\r\n  opacity: 0;\r\n  transform: translateX(-100%);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  transform: translateX(10%);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n}\r\n\r\n\r\n@-webkit-keyframes push-out {\r\n0% {\r\n  opacity: 1;\r\n  -webkit-transform: translateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(110%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  -webkit-transform: translateX(100%);\r\n}\r\n}\r\n\r\n\r\n@keyframes push-out {\r\n0% {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n60% {\r\n  opacity: 0;\r\n  transform: translateX(110%);\r\n}\r\n100% {\r\n  opacity: 0;\r\n  transform: translateX(100%);\r\n}\r\n}\r\n\r\n\r\n.resources[_ngcontent-%COMP%]{\r\n  margin:0px;\r\n  padding:50px 50px;\r\n  position: relative;\r\n  background-image: url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\r\n  background-color: rgb(3, 16, 59);\r\n  background-size:10%;\r\n  -webkit-animation: bgScroll 20s linear infinite;\r\n          animation: bgScroll 20s linear infinite;\r\n}\r\n\r\n\r\n@-webkit-keyframes bgScroll {\r\n  0% {\r\n    background-position : 0px 0px\r\n  }\r\n  100% {\r\n    background-position : 0px -808px\r\n  }\r\n}\r\n\r\n\r\n@keyframes bgScroll {\r\n  0% {\r\n    background-position : 0px 0px\r\n  }\r\n  100% {\r\n    background-position : 0px -808px\r\n  }\r\n}\r\n\r\n\r\n#container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  width: 100vw;\r\n  height: 80pt;\r\n  top: 0;\r\n  bottom: 0;\r\n\r\n  -webkit-filter: url(#threshold) blur(0.6px);\r\n\r\n          filter: url(#threshold) blur(0.6px);\r\n}\r\n\r\n\r\n#text1[_ngcontent-%COMP%], #text2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  display: inline-block;\r\n\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-size: 80pt;\r\n  color: rgb(3, 250, 217);\r\n  text-align: center;\r\n\r\n  -webkit-user-select: none;\r\n\r\n     -moz-user-select: none;\r\n\r\n      -ms-user-select: none;\r\n\r\n          user-select: none;\r\n}\r\n\r\n\r\nvideo[_ngcontent-%COMP%] {\r\n\tborder: 4px groove olive;\r\n\tdisplay: inline-block;\r\n\tborder-radius: 15px;\r\n\tbackground: black;\r\n\tpadding: 2%;\r\n  \r\n}\r\n\r\n\r\n.patternImg[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: -20%;\r\n  top: 10%;\r\n  width: 50%;\r\n  z-index:-1;\r\n\r\n}\r\n\r\n\r\n.liulOm[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%]{\r\n\r\n  margin-left:140px;\r\n}\r\n\r\n\r\n.fnBntZ[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin-left: 25px;\r\n  margin-bottom: 27px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out 0s;\r\n  background-image: linear-gradient(\r\n      0deg,\r\n      rgba(32, 8, 77, 0.87),\r\n      rgba(6, 4, 90, 0.562)\r\n    ),\r\n    url(\"/assets/Images/J4o.gif\");\r\n  cursor: pointer;\r\n  height: 200px;\r\n  z-index: 1;\r\n  transform: scale(0.8);\r\n}\r\n\r\n\r\n.imjKNo[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: rgb(0 0 0 / 5%) 0px 20px 35px;\r\n}\r\n\r\n\r\n.fnBntZ[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: rgba(142, 199, 255, 0.5);\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n\r\n.fnBntZ[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n  background-color: #1d7dcb98;\r\n  transition: all 0.2s ease;\r\n  box-shadow: 2px 2px 2px #1d7dcb9a;\r\n  transform: scale(0.85);\r\n}\r\n\r\n\r\n.projects[_ngcontent-%COMP%]{\r\n  \r\n  padding:50px 50px;\r\n  position: relative;\r\n  background-image: url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');\r\n  background-color: rgb(3, 16, 59);\r\n  background-size:10%;\r\n  -webkit-animation: bgScroll 20s linear infinite;\r\n          animation: bgScroll 20s linear infinite;\r\n}\r\n\r\n\r\n.projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n \r\n  color: rgb(255, 255, 255);\r\n  font-size: 70px;\r\n  line-height: 1.2;\r\n  font-weight: 300;\r\n  font-family: Brush Script MT, Brush Script Std, cursive;\r\n  letter-spacing: -0.025em;\r\n  margin-bottom: 27px;\r\n  margin-left: 600px;\r\n  max-width: 370px;\r\n\r\n  \r\n}\r\n\r\n\r\n.projects[_ngcontent-%COMP%]   .patternImg[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: -20% !important;\r\n  top: 15%;\r\n  width: 40%;\r\n  z-index:-1;\r\n\r\n}\r\n\r\n\r\n.projects[_ngcontent-%COMP%]   .liulOm[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.parallax[_ngcontent-%COMP%] {\r\n  \r\n  background-image: linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.87),\r\n      rgba(0, 0, 0, 0.562)\r\n    ),\r\n    url(\"/assets/Images/par.jpg\");\r\n\r\n  \r\n  min-height: 500px;\r\n  color: #fff;\r\n  \r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n#funFacts[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\r\n  font-size: 5vw;\r\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  padding: 50px 50px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n  font-size: 100px;\r\n  font-family: Brush Script MT, Brush Script Std, cursive;\r\n  line-height: 1.2;\r\n  font-weight: 300;\r\n  letter-spacing: -0.025em;\r\n  margin-bottom: 27px;\r\n  margin-left: 550px;\r\n  max-width: 370px;\r\n}\r\n\r\n\r\n.testimonial-card[_ngcontent-%COMP%] {\r\n  background-color: rgba(21, 33, 73, 0.644);\r\n  background-image: linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.87),\r\n      rgba(0, 0, 0, 0.562)\r\n    ),\r\n    url(\"/assets/Images/VJi.gif\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: rgb(0 0 0 / 5%) 0px 20px 35px;\r\n  color: #fff;\r\n  max-width: 700px;\r\n  margin-left: 200px;\r\n}\r\n\r\n\r\n.quote[_ngcontent-%COMP%] {\r\n  font-size: 45px;\r\n}\r\n\r\n\r\n.testimonials-container[_ngcontent-%COMP%] {\r\n  background-image: url(\"/assets/Images/map.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n\r\n\r\n.dotV[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50px;\r\n  top: -50px;\r\n}\r\n\r\n\r\n.dotX[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 50px;\r\n  top: 50%;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  --footer-background: linear-gradient(rgb(56, 25, 128), rgb(12, 4, 30));\r\n  display: grid;\r\n  position: relative;\r\n  grid-area: footer;\r\n  min-height: 12rem;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1rem;\r\n  background: var(--footer-background);\r\n  -webkit-filter: url(\"#blob\");\r\n          filter: url(\"#blob\");\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bubbles[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: var(--position, 50%);\r\n  background: var(--footer-background);\r\n  border-radius: 100%;\r\n  -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n          animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);\r\n  transform: translate(-50%, 100%);\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  grid-gap: 4rem;\r\n  padding: 2rem;\r\n  background: var(--footer-background);\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #f5f7fa;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin: 0.25rem 0;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  margin: 0.25rem 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n\r\n@-webkit-keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 2rem);\r\n    height: var(--size, 2rem);\r\n }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n }\r\n}\r\n\r\n\r\n@keyframes bubble-size {\r\n  0%, 75% {\r\n    width: var(--size, 2rem);\r\n    height: var(--size, 2rem);\r\n }\r\n  100% {\r\n    width: 0rem;\r\n    height: 0rem;\r\n }\r\n}\r\n\r\n\r\n@-webkit-keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n }\r\n}\r\n\r\n\r\n@keyframes bubble-move {\r\n  0% {\r\n    bottom: -4rem;\r\n }\r\n  100% {\r\n    bottom: var(--distance, 10rem);\r\n }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  background: rgb(3, 16, 59);\r\n  background-image: linear-gradient(\r\n    135deg,\r\n    rgba(64, 219, 216, 0.15) 0%,\r\n    rgba(3, 16, 59, 0.15) 35%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\nhtml[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], a[_ngcontent-%COMP%], p[_ngcontent-%COMP%], li[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], th[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], span[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\r\n  -webkit-font-smoothing: antialiased;\r\n  text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;\r\n}\r\n\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\r\n    monospace;\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n\r\nmargin-left: 800px;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7Q0FDWCx1QkFBdUI7O0FBRXhCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDJCQUEyQjs7QUFFN0I7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxNQUFNO0VBQ047QUFDRjs7O0FBR0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVztBQUNYLGNBQWM7QUFDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLGlDQUFpQztBQUNqQyxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCOzs7QUFHQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCOztBQUVKOzs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsVUFBVTtBQUNWLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsZUFBZTtBQUNmLGtEQUFrRDtBQUNsRCxnQkFBZ0I7QUFDaEI7OztBQUdBO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOzs7QUFJQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLHdFQUF3RTtFQUN4RSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOzs7QUFFQTs7RUFFRSwwQkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOzs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7O0FBcEJBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxRUFBcUU7RUFDckUsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFJQTs7OztrQ0FJa0M7OztBQUNsQztBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCOzs7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLE9BQU87QUFDUCxNQUFNO0FBQ04sa0JBQWtCO0FBQ2xCOzs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7OztBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBRUE7Ozs7a0NBSWtDOzs7QUFDbEM7QUFHQSxrQkFBa0I7QUFDbEI7OztBQUNBO0FBQ0EsVUFBVTtBQUtWLDBCQUEwQjtBQUsxQiwwQkFBMEI7QUFDMUI7OztBQUNBO0FBQ0EsVUFBVTtBQUtWLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFFdEMsOEJBQThCO0FBQzlCOzs7QUFDQTtBQUtBLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFFdkMsK0JBQStCO0FBQy9COzs7QUFFQTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaO0FBQ0E7OztBQWtCQTtBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFLRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7OztBQUNBO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7QUFDQTs7O0FBa0JBO0FBQ0E7RUFLRSx3QkFBd0I7RUFDeEIsVUFBVTtBQUNaO0FBQ0E7RUFLRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUtFLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7QUFDQTs7O0FBQ0E7Ozs7a0NBSWtDOzs7QUFDbEM7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCOzs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixRQUFRO0FBQ1IsWUFBWTtBQUtaLDJCQUEyQjtBQUMzQixXQUFXO0FBQ1gsVUFBVTtBQUNWLHlCQUF5QjtBQUN6Qjs7O0FBQ0E7QUFDQSx1Q0FBdUM7QUFFdkMsK0JBQStCO0FBQy9COzs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7OztBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7O0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7OztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25COzs7QUFFQTtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUNBOzs7QUFlQTtBQUNBO0VBS0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjtBQUNBO0VBS0Usc0NBQXNDO0VBQ3RDLFVBQVU7QUFDWjtBQUNBO0VBS0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjtBQUNBOzs7QUFDQTs7OztrQ0FJa0M7OztBQUNsQztBQUdBLGtCQUFrQjtBQUNsQjs7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQjs7O0FBQ0E7QUFLQSw0QkFBNEI7QUFLNUIsMkNBQTJDO0FBQzNDLFVBQVU7QUFDVjs7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7OztBQUNBO0FBQ0EsK0NBQStDO0FBRS9DLHVDQUF1QztBQUN2Qzs7O0FBQ0E7QUFDQSxnREFBZ0Q7QUFFaEQsd0NBQXdDO0FBQ3hDOzs7QUFDQTtBQUtBLDJCQUEyQjtBQUMzQjs7O0FBRUE7QUFLQSx3QkFBd0I7QUFDeEIsVUFBVTtBQUNWOzs7QUFDQTtBQUtBLG1CQUFtQjtBQUNuQjs7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7OztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0RBQWtEO0FBQ3BEO0FBQ0E7OztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMENBQTBDO0FBQzVDO0FBQ0E7OztBQUNBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0RBQW9EO0FBQ3REO0FBQ0E7OztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNENBQTRDO0FBQzlDO0FBQ0E7OztBQUNBOzs7O2tDQUlrQzs7O0FBQ2xDO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjs7O0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25COzs7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxTQUFTO0FBQ1QsV0FBVztBQUNYLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsVUFBVTtBQUdWLDRCQUE0QjtBQUM1Qjs7O0FBQ0E7QUFDQSxXQUFXO0FBR1gsb0JBQW9CO0FBQ3BCOzs7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBR1Ysd0JBQXdCO0FBQ3hCOzs7QUFDQTtBQUNBLFVBQVU7QUFDVixNQUFNO0FBQ047OztBQUVBOzs7O2tDQUlrQzs7O0FBQ2xDO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjs7O0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25COzs7QUFDQTtBQUNBLFVBQVU7QUFDVixTQUFTO0FBQ1Q7OztBQUNBO0FBQ0EsTUFBTTtBQUNOLFVBQVU7QUFDVixnQ0FBZ0M7QUFFaEMsd0JBQXdCO0FBQ3hCOzs7QUFDQTtBQUNBLGlDQUFpQztBQUVqQyx5QkFBeUI7QUFDekI7OztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDO0FBQ0E7OztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7OztBQUNBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUNBQW1DO0FBQ3JDO0FBQ0E7OztBQWVBO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsMkJBQTJCO0FBQzdCO0FBQ0E7OztBQUNBOzs7O2tDQUlrQzs7O0FBQ2xDO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjs7O0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25COzs7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixRQUFRO0FBQ1IsVUFBVTtBQUNWLFlBQVk7QUFDWix5QkFBeUI7QUFDekI7OztBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBRUE7Ozs7a0NBSWtDOzs7QUFDbEM7QUFHQSxrQkFBa0I7QUFDbEI7OztBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7QUFDQTtBQUNBLFVBQVU7QUFDViwrQkFBK0I7QUFFL0IsdUJBQXVCO0FBQ3ZCOzs7QUFDQTtBQUNBLGdDQUFnQztBQUVoQyx3QkFBd0I7QUFDeEI7OztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDO0FBQ0E7OztBQVdBO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7OztBQUNBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUNBQXFDO0FBQ3ZDO0FBQ0E7OztBQVdBO0FBQ0E7RUFDRSxVQUFVO0VBS1Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBS1YsNkJBQTZCO0FBQy9CO0FBQ0E7OztBQUNBOzs7O2tDQUlrQzs7O0FBQ2xDO0FBR0Esa0JBQWtCO0FBQ2xCOzs7QUFDQTtBQUNBLHFCQUFxQjtBQUtyQiwwQkFBMEI7QUFDMUIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQjs7O0FBQ0E7QUFLQSx3QkFBd0I7QUFDeEI7OztBQUNBO0FBQ0EsK0NBQStDO0FBRS9DLHVDQUF1QztBQUN2Qzs7O0FBQ0E7QUFDQSxnREFBZ0Q7QUFFaEQsd0NBQXdDO0FBQ3hDOzs7QUFFQTtBQUtBLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1Y7OztBQUVBO0FBQ0EsVUFBVTtBQUNWOzs7QUFFQTtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTs7O0FBU0E7QUFDQTtFQUtFLDBCQUEwQjtBQUM1QjtBQUNBO0VBS0Usd0JBQXdCO0FBQzFCO0FBQ0E7OztBQUNBO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBOzs7QUFTQTtBQUNBO0VBS0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFLRSwyQkFBMkI7QUFDN0I7QUFDQTs7O0FBQ0E7Ozs7a0NBSWtDOzs7QUFDbEM7QUFDQSxxQkFBcUI7QUFDckIsVUFBVTtBQUtWLG1CQUFtQjtBQUNuQjs7O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7OztBQUNBO0FBQ0EseUNBQXlDO0FBRXpDLGlDQUFpQztBQUNqQzs7O0FBQ0E7QUFDQSwyQ0FBMkM7QUFFM0MsbUNBQW1DO0FBQ25DOzs7QUFFQTtBQUtBLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Y7OztBQUVBO0FBQ0EsVUFBVTtBQUNWOzs7QUFFQTtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBOzs7QUFlQTtBQUNBO0VBS0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBS0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUNBO0VBS0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBOzs7QUFDQTtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBOzs7QUFXQTtBQUNBO0VBS0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBS0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBOzs7QUFDQTs7OztrQ0FJa0M7OztBQUNsQztBQUNBLFVBQVU7QUFDVjs7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsK0JBQStCO0FBRS9CLHVCQUF1QjtBQUN2Qjs7O0FBQ0E7QUFDQSxnQ0FBZ0M7QUFFaEMsd0JBQXdCO0FBQ3hCOzs7QUFFQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBOzs7QUFlQTtBQUNBO0VBQ0UsVUFBVTtFQUtWLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjtBQUNBOzs7QUFDQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1DQUFtQztBQUNyQztBQUNBOzs7QUFlQTtBQUNBO0VBQ0UsVUFBVTtFQUtWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsVUFBVTtFQUtWLDJCQUEyQjtBQUM3QjtBQUNBOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVnQkFBdWdCO0VBQ3ZnQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7OztBQUdBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7OztBQVBBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7OztBQUNBO0VBQ0Usa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTOztFQUVULDJDQUFtQzs7VUFBbkMsbUNBQW1DO0FBQ3JDOzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjs7RUFFckIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQix5QkFBaUI7O0tBQWpCLHNCQUFpQjs7TUFBakIscUJBQWlCOztVQUFqQixpQkFBaUI7QUFDbkI7OztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFdBQVc7O0FBRVo7OztBQU9BO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7O0FBRVo7OztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUV0Qix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQzs7Ozs7aUNBSytCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsc0JBQXNCO0FBQ3hCOzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVnQkFBdWdCO0VBQ3ZnQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7OztBQUdBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCOzs7QUFHbEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7O0FBRVo7OztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7aUNBSytCOztFQUUvQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDOzs7OztpQ0FLK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7O0FBR0E7RUFDRSxVQUFVO0VBQ1Ysc0VBQXNFO0VBQ3RFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQiwrSUFBdUk7VUFBdkksdUlBQXVJO0VBQ3ZJLGdDQUFnQztBQUNsQzs7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOzs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOzs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7OztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0NBQzVCO0VBQ0M7SUFDRSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7OztBQVRBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0NBQzVCO0VBQ0M7SUFDRSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBQ0Q7OztBQUNBO0VBQ0U7SUFDRSxhQUFhO0NBQ2hCO0VBQ0M7SUFDRSw4QkFBOEI7Q0FDakM7QUFDRDs7O0FBUEE7RUFDRTtJQUNFLGFBQWE7Q0FDaEI7RUFDQztJQUNFLDhCQUE4QjtDQUNqQztBQUNEOzs7QUFFQSxnQkFBZ0I7OztBQUVoQjtFQUNFLFNBQVM7RUFDVDs7Y0FFWTtFQUNaLG1DQUFtQztFQUNuQyxrQ0FBa0M7O0VBRWxDLDBCQUEwQjtFQUMxQjs7OztHQUlDO0VBQ0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLG1DQUFtQztFQUNuQyx3Q0FBd0M7QUFDMUM7OztBQUNBO0VBQ0U7YUFDVztBQUNiOzs7QUFFQTs7QUFFQSxrQkFBa0I7OztBQUdsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ob21lMXtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgd2lkdGg6MTAwJTtcclxuIC8qIHBvc2l0aW9uOnJlbGF0aXZlOyAqL1xyXG5cclxufVxyXG5cclxuXHJcbi5ob21lMSBzZWN0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgdG9wOjQ1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaG9tZTEgc2VjdGlvbiAudGFne1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbFxyXG59XHJcblxyXG5cclxuLnRpdGxlIGg1IHtcclxuY29sb3I6ICM5OTlcclxufVxyXG4ud2hpdGUgLnRpdGxlIGg1IHtcclxuY29sb3I6ICNmZmZcclxufVxyXG5cclxuXHJcbi5keW5hbWljLXRpdGxlIHtcclxuZmxvYXQ6IG5vbmU7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5kaXNwbGF5OiB0YWJsZTtcclxud2lkdGg6IGF1dG87XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcclxuZm9udC1zaXplOiA1MHB4O1xyXG5saW5lLWhlaWdodDogMjBweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gIC5keW5hbWljLXRpdGxlIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5kaXYjdGV4dC1idG4gYnV0dG9uIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnRvcDogMjAwcHg7XHJcbndpZHRoOiA0MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuY29sb3I6ICNmZmY7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbnRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kO1xyXG5vdXRsaW5lOiBub25lO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvIEJsYWNrJywnSGVsdmV0aWNhJyxzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuc3Bhbi5nb2xkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICAvKiBtYXJnaW46IC0xMHB4IDA7ICovXHJcbiAgY29sb3I6ICNGRkMxMUY7XHJcbn1cclxuXHJcblxyXG5cclxuI3N0OmFmdGVyLFxyXG4ubWVzcy11czo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMCwgMCwgMCwgMC42OTkpLCByZ2IoMTc1LCAyLCAyKSk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBsaW5lYXI7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNzdDpob3Zlcjo6YWZ0ZXIsXHJcbi5tZXNzLXVzOmhvdmVyOjphZnRlciB7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3N0OmhvdmVyLFxyXG4ubWVzcy11czpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICA5OCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4jc3RhcnQgI3N0IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNTEsIDE0OCwgMTQ4KSwgcmdiKDQsIDQsIDk0KSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc3RhcnQgLm1lc3MtdXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCBibHVlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdGFydDpob3ZlciBhOm50aC1jaGlsZCgxKSB7XHJcbiAgY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcbiNzdGFydDpob3ZlciBhOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6ICNmNmY4ZmE7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG5QcmltYXJ5IHN0eWxlXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2Qtd29yZHMtd3JhcHBlciB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5jZC13b3Jkcy13cmFwcGVyIGIge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuLmNkLXdvcmRzLXdyYXBwZXIgaSB7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4uY2Qtd29yZHMtd3JhcHBlciBiLmlzLXZpc2libGUge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5vLWpzIC5jZC13b3Jkcy13cmFwcGVyIGIge1xyXG5vcGFjaXR5OiAwO1xyXG59XHJcbi5uby1qcyAuY2Qtd29yZHMtd3JhcHBlciBiLmlzLXZpc2libGUge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbnhyb3RhdGUtMSBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbi13ZWJraXQtcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG4tbW96LXBlcnNwZWN0aXZlOiAzMDBweDtcclxucGVyc3BlY3RpdmU6IDMwMHB4O1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSBiIHtcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4tby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxudHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuLW8tdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMSBiLmlzLXZpc2libGUge1xyXG5vcGFjaXR5OiAxO1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4td2Via2l0LWFuaW1hdGlvbjogY2Qtcm90YXRlLTEtaW4gMS4ycztcclxuLW1vei1hbmltYXRpb246IGNkLXJvdGF0ZS0xLWluIDEuMnM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTEtaW4gMS4ycztcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTEgYi5pcy1oaWRkZW4ge1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4tbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0xLW91dCAxLjJzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTEtb3V0IDEuMnM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTEtb3V0IDEuMnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1pbiB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1pbiB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMzUlIHtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkBrZXlmcmFtZXMgY2Qtcm90YXRlLTEtaW4ge1xyXG4wJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjM1JSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTIwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjY1JSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4xMDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2Qtcm90YXRlLTEtb3V0IHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMS1vdXQge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4zNSUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC00MGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG42NSUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBjZC1yb3RhdGUtMS1vdXQge1xyXG4wJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMzUlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC00MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjUlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxueHR5cGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogdmVydGljYWwgYmFyICovXHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAwO1xyXG50b3A6IDUwJTtcclxuYm90dG9tOiBhdXRvO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5oZWlnaHQ6IDkwJTtcclxud2lkdGg6IDFweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2FlYmNiOTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlci53YWl0aW5nOjphZnRlciB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBjZC1wdWxzZSAxcyBpbmZpbml0ZTtcclxuLW1vei1hbmltYXRpb246IGNkLXB1bHNlIDFzIGluZmluaXRlO1xyXG5hbmltYXRpb246IGNkLXB1bHNlIDFzIGluZmluaXRlO1xyXG59XHJcbi5jZC1oZWFkbGluZS50eXBlIC5jZC13b3Jkcy13cmFwcGVyLnNlbGVjdGVkIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2FlYmNiOTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSAuY2Qtd29yZHMtd3JhcHBlci5zZWxlY3RlZDo6YWZ0ZXIge1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgLmNkLXdvcmRzLXdyYXBwZXIuc2VsZWN0ZWQgYiB7XHJcbmNvbG9yOiAjMGQwZDBkO1xyXG59XHJcbi5jZC1oZWFkbGluZS50eXBlIGIge1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgYi5pcy12aXNpYmxlIHtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4uY2QtaGVhZGxpbmUudHlwZSBpIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG52aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNkLWhlYWRsaW5lLnR5cGUgaS5pbiB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNkLXB1bHNlIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjkpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1wdWxzZSB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjQwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXB1bHNlIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjQwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjkpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cm90YXRlLTIgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUucm90YXRlLTIgLmNkLXdvcmRzLXdyYXBwZXIge1xyXG4td2Via2l0LXBlcnNwZWN0aXZlOiAzMDBweDtcclxuLW1vei1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbnBlcnNwZWN0aXZlOiAzMDBweDtcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTIgaSwgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGVtIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMiBpIHtcclxuLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4tbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbi1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4tby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG50cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmlzLXZpc2libGUgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMiBpLmluIHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0yLWluIDAuNHMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBjZC1yb3RhdGUtMi1pbiAwLjRzIGZvcndhcmRzO1xyXG5hbmltYXRpb246IGNkLXJvdGF0ZS0yLWluIDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkub3V0IHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0yLW91dCAwLjRzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTItb3V0IDAuNHMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTItb3V0IDAuNHMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGVtIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XHJcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xyXG4tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xyXG4tby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcclxufVxyXG5cclxuLm5vLWNzc3RyYW5zaXRpb25zIC5jZC1oZWFkbGluZS5yb3RhdGUtMiBpIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4tby10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxub3BhY2l0eTogMDtcclxufVxyXG4ubm8tY3NzdHJhbnNpdGlvbnMgLmNkLWhlYWRsaW5lLnJvdGF0ZS0yIGkgZW0ge1xyXG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbnRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTIgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMi1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwZGVnKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDBkZWcpO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGNkLXJvdGF0ZS0yLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtMTBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0yLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDkwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCg5MGRlZyk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2Qtcm90YXRlLTItb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTkwZGVnKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMi1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtOTBkZWcpO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBjZC1yb3RhdGUtMi1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC0xMDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCkgcm90YXRlWCgtMTAwZGVnKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpIHJvdGF0ZVgoLTkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbn1cclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbnhsb2FkaW5nLWJhciBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5sb2FkaW5nLWJhciBzcGFuIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nOiAuMmVtIDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmxvYWRpbmctYmFyIC5jZC13b3Jkcy13cmFwcGVyIHtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxudmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uY2QtaGVhZGxpbmUubG9hZGluZy1iYXIgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogbG9hZGluZyBiYXIgKi9cclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxuYm90dG9tOiAwO1xyXG5oZWlnaHQ6IDNweDtcclxud2lkdGg6IDA7XHJcbmJhY2tncm91bmQ6ICMwMDk2YTc7XHJcbnotaW5kZXg6IDI7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcyAtMC4xcztcclxuLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIC0wLjFzO1xyXG50cmFuc2l0aW9uOiB3aWR0aCAwLjNzIC0wLjFzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5sb2FkaW5nLWJhciAuY2Qtd29yZHMtd3JhcHBlci5pcy1sb2FkaW5nOjphZnRlciB7XHJcbndpZHRoOiAxMDAlO1xyXG4td2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDNzO1xyXG4tbW96LXRyYW5zaXRpb246IHdpZHRoIDNzO1xyXG50cmFuc2l0aW9uOiB3aWR0aCAzcztcclxufVxyXG4uY2QtaGVhZGxpbmUubG9hZGluZy1iYXIgYiB7XHJcbnRvcDogLjJlbTtcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbi1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG50cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmxvYWRpbmctYmFyIGIuaXMtdmlzaWJsZSB7XHJcbm9wYWNpdHk6IDE7XHJcbnRvcDogMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54c2xpZGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUuc2xpZGUgc3BhbiB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucGFkZGluZzogLjJlbSAwO1xyXG59XHJcbi5jZC1oZWFkbGluZS5zbGlkZSAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIge1xyXG5vcGFjaXR5OiAwO1xyXG50b3A6IC4yZW07XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIuaXMtdmlzaWJsZSB7XHJcbnRvcDogMDtcclxub3BhY2l0eTogMTtcclxuLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjZzO1xyXG5hbmltYXRpb246IHNsaWRlLWluIDAuNnM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnNsaWRlIGIuaXMtaGlkZGVuIHtcclxuLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAwLjZzO1xyXG4tbW96LWFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNnM7XHJcbmFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54Y2xpcCBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5jbGlwIHNwYW4ge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBhZGRpbmc6IC4yZW0gMDtcclxufVxyXG4uY2QtaGVhZGxpbmUuY2xpcCAuY2Qtd29yZHMtd3JhcHBlciB7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgLmNkLXdvcmRzLXdyYXBwZXI6OmFmdGVyIHtcclxuLyogbGluZSAqL1xyXG5jb250ZW50OiAnJztcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbnJpZ2h0OiAwO1xyXG53aWR0aDogMnB4O1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6ICNhZWJjYjk7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgYiB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLmNsaXAgYi5pcy12aXNpYmxlIHtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54em9vbSBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS56b29tIC5jZC13b3Jkcy13cmFwcGVyIHtcclxuLXdlYmtpdC1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbi1tb3otcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG5wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYiB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYi5pcy12aXNpYmxlIHtcclxub3BhY2l0eTogMTtcclxuLXdlYmtpdC1hbmltYXRpb246IHpvb20taW4gMC44cztcclxuLW1vei1hbmltYXRpb246IHpvb20taW4gMC44cztcclxuYW5pbWF0aW9uOiB6b29tLWluIDAuOHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnpvb20gYi5pcy1oaWRkZW4ge1xyXG4td2Via2l0LWFuaW1hdGlvbjogem9vbS1vdXQgMC44cztcclxuLW1vei1hbmltYXRpb246IHpvb20tb3V0IDAuOHM7XHJcbmFuaW1hdGlvbjogem9vbS1vdXQgMC44cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20taW4ge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyB6b29tLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIHpvb20taW4ge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxufVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyB6b29tLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcclxufVxyXG59XHJcbkBrZXlmcmFtZXMgem9vbS1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cm90YXRlLTMgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUucm90YXRlLTMgLmNkLXdvcmRzLXdyYXBwZXIge1xyXG4td2Via2l0LXBlcnNwZWN0aXZlOiAzMDBweDtcclxuLW1vei1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbnBlcnNwZWN0aXZlOiAzMDBweDtcclxufVxyXG4uY2QtaGVhZGxpbmUucm90YXRlLTMgaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4tby10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbi13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmlzLXZpc2libGUgLmNkLWhlYWRsaW5lLnJvdGF0ZS0zIGkge1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbi5jZC1oZWFkbGluZS5yb3RhdGUtMyBpLmluIHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0zLWluIDAuNnMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBjZC1yb3RhdGUtMy1pbiAwLjZzIGZvcndhcmRzO1xyXG5hbmltYXRpb246IGNkLXJvdGF0ZS0zLWluIDAuNnMgZm9yd2FyZHM7XHJcbn1cclxuLmNkLWhlYWRsaW5lLnJvdGF0ZS0zIGkub3V0IHtcclxuLXdlYmtpdC1hbmltYXRpb246IGNkLXJvdGF0ZS0zLW91dCAwLjZzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogY2Qtcm90YXRlLTMtb3V0IDAuNnMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogY2Qtcm90YXRlLTMtb3V0IDAuNnMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTMgaSB7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4tbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUucm90YXRlLTMgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1yb3RhdGUtMy1pbiB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbjEwMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLWluIHtcclxuMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLWluIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG59XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLW91dCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxufVxyXG4xMDAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1yb3RhdGUtMy1vdXQge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbn1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLXJvdGF0ZS0zLW91dCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54c2NhbGUgXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uY2QtaGVhZGxpbmUuc2NhbGUgaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxub3BhY2l0eTogMDtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4tbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbi1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4tby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG50cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5pcy12aXNpYmxlIC5jZC1oZWFkbGluZS5zY2FsZSBpIHtcclxub3BhY2l0eTogMTtcclxufVxyXG4uY2QtaGVhZGxpbmUuc2NhbGUgaS5pbiB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cCAwLjZzIGZvcndhcmRzO1xyXG4tbW96LWFuaW1hdGlvbjogc2NhbGUtdXAgMC42cyBmb3J3YXJkcztcclxuYW5pbWF0aW9uOiBzY2FsZS11cCAwLjZzIGZvcndhcmRzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5zY2FsZSBpLm91dCB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duIDAuNnMgZm9yd2FyZHM7XHJcbi1tb3otYW5pbWF0aW9uOiBzY2FsZS1kb3duIDAuNnMgZm9yd2FyZHM7XHJcbmFuaW1hdGlvbjogc2NhbGUtZG93biAwLjZzIGZvcndhcmRzO1xyXG59XHJcblxyXG4ubm8tY3NzdHJhbnNpdGlvbnMgLmNkLWhlYWRsaW5lLnNjYWxlIGkge1xyXG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbi1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbnRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5uby1jc3N0cmFuc2l0aW9ucyAuY2QtaGVhZGxpbmUuc2NhbGUgLmlzLXZpc2libGUgaSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS11cCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG42MCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2NhbGUtdXAge1xyXG4wJSB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuNjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjEwMCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS11cCB7XHJcbjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbjYwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuMTAwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbjYwJSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2NhbGUtZG93biB7XHJcbjAlIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG42MCUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZS1kb3duIHtcclxuMCUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuNjAlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG54cHVzaCBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5jZC1oZWFkbGluZS5wdXNoIGIge1xyXG5vcGFjaXR5OiAwO1xyXG59XHJcbi5jZC1oZWFkbGluZS5wdXNoIGIuaXMtdmlzaWJsZSB7XHJcbm9wYWNpdHk6IDE7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBwdXNoLWluIDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBwdXNoLWluIDAuNnM7XHJcbmFuaW1hdGlvbjogcHVzaC1pbiAwLjZzO1xyXG59XHJcbi5jZC1oZWFkbGluZS5wdXNoIGIuaXMtaGlkZGVuIHtcclxuLXdlYmtpdC1hbmltYXRpb246IHB1c2gtb3V0IDAuNnM7XHJcbi1tb3otYW5pbWF0aW9uOiBwdXNoLW91dCAwLjZzO1xyXG5hbmltYXRpb246IHB1c2gtb3V0IDAuNnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdXNoLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgcHVzaC1pbiB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBwdXNoLWluIHtcclxuMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuNjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVzaC1vdXQge1xyXG4wJSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbn1cclxuMTAwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBwdXNoLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbjYwJSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcclxufVxyXG4xMDAlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyBwdXNoLW91dCB7XHJcbjAlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG42MCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xyXG59XHJcbjEwMCUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcbn1cclxuXHJcbi5yZXNvdXJjZXN7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOjUwcHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPVwiNTJcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgNTIgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIlM0UlM0NnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiJTNFJTNDZyBmaWxsPVwiJTIzOUM5MkFDXCIgZmlsbC1vcGFjaXR5PVwiMC40XCIlM0UlM0NwYXRoIGQ9XCJNMTAgMTBjMC0yLjIxLTEuNzktNC00LTQtMy4zMTQgMC02LTIuNjg2LTYtNmgyYzAgMi4yMSAxLjc5IDQgNCA0IDMuMzE0IDAgNiAyLjY4NiA2IDYgMCAyLjIxIDEuNzkgNCA0IDQgMy4zMTQgMCA2IDIuNjg2IDYgNiAwIDIuMjEgMS43OSA0IDQgNHYyYy0zLjMxNCAwLTYtMi42ODYtNi02IDAtMi4yMS0xLjc5LTQtNC00LTMuMzE0IDAtNi0yLjY4Ni02LTZ6bTI1LjQ2NC0xLjk1bDguNDg2IDguNDg2LTEuNDE0IDEuNDE0LTguNDg2LTguNDg2IDEuNDE0LTEuNDE0elwiIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRScpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxNiwgNTkpO1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMCU7XHJcbiAgYW5pbWF0aW9uOiBiZ1Njcm9sbCAyMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBiZ1Njcm9sbCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbiA6IDBweCAwcHhcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDogMHB4IC04MDhweFxyXG4gIH1cclxufVxyXG4jY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogODBwdDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICBmaWx0ZXI6IHVybCgjdGhyZXNob2xkKSBibHVyKDAuNnB4KTtcclxufVxyXG5cclxuI3RleHQxLFxyXG4jdGV4dDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDgwcHQ7XHJcbiAgY29sb3I6IHJnYigzLCAyNTAsIDIxNyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxudmlkZW8ge1xyXG5cdGJvcmRlcjogNHB4IGdyb292ZSBvbGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRwYWRkaW5nOiAyJTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucGF0dGVybkltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTIwJTtcclxuICB0b3A6IDEwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHotaW5kZXg6LTE7XHJcblxyXG59XHJcbi5saXVsT20ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5jYXJke1xyXG5cclxuICBtYXJnaW4tbGVmdDoxNDBweDtcclxufVxyXG5cclxuLmZuQm50WiAuY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAwZGVnLFxyXG4gICAgICByZ2JhKDMyLCA4LCA3NywgMC44NyksXHJcbiAgICAgIHJnYmEoNiwgNCwgOTAsIDAuNTYyKVxyXG4gICAgKSxcclxuICAgIHVybChcIi9hc3NldHMvSW1hZ2VzL0o0by5naWZcIik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5pbWpLTm8ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDIwcHggMzVweDtcclxufVxyXG5cclxuLmZuQm50WiAuY2FyZCBwIHtcclxuICBjb2xvcjogcmdiYSgxNDIsIDE5OSwgMjU1LCAwLjUpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmZuQm50WiAuY2FyZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkN2RjYjk4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzFkN2RjYjlhO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0c3tcclxuICBcclxuICBwYWRkaW5nOjUwcHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPVwiNTJcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgNTIgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIlM0UlM0NnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiJTNFJTNDZyBmaWxsPVwiJTIzOUM5MkFDXCIgZmlsbC1vcGFjaXR5PVwiMC40XCIlM0UlM0NwYXRoIGQ9XCJNMTAgMTBjMC0yLjIxLTEuNzktNC00LTQtMy4zMTQgMC02LTIuNjg2LTYtNmgyYzAgMi4yMSAxLjc5IDQgNCA0IDMuMzE0IDAgNiAyLjY4NiA2IDYgMCAyLjIxIDEuNzkgNCA0IDQgMy4zMTQgMCA2IDIuNjg2IDYgNiAwIDIuMjEgMS43OSA0IDQgNHYyYy0zLjMxNCAwLTYtMi42ODYtNi02IDAtMi4yMS0xLjc5LTQtNC00LTMuMzE0IDAtNi0yLjY4Ni02LTZ6bTI1LjQ2NC0xLjk1bDguNDg2IDguNDg2LTEuNDE0IDEuNDE0LTguNDg2LTguNDg2IDEuNDE0LTEuNDE0elwiIC8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRScpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxNiwgNTkpO1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMCU7XHJcbiAgYW5pbWF0aW9uOiBiZ1Njcm9sbCAyMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLnByb2plY3RzIGgze1xyXG4gXHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIEJydXNoIFNjcmlwdCBTdGQsIGN1cnNpdmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwMHB4O1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcblxyXG4gIFxyXG59XHJcbi5wcm9qZWN0cyAucGF0dGVybkltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0yMCUgIWltcG9ydGFudDtcclxuICB0b3A6IDE1JTtcclxuICB3aWR0aDogNDAlO1xyXG4gIHotaW5kZXg6LTE7XHJcblxyXG59XHJcbi5wcm9qZWN0cyAubGl1bE9tIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAwZGVnLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuODcpLFxyXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNTYyKVxyXG4gICAgKSxcclxuICAgIHVybChcIi9hc3NldHMvSW1hZ2VzL3Bhci5qcGdcIik7XHJcblxyXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2Z1bkZhY3RzID4gaDEge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcblxyXG5cclxuLnRlc3RpbW9uaWFscyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMgaDMge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LWZhbWlseTogQnJ1c2ggU2NyaXB0IE1ULCBCcnVzaCBTY3JpcHQgU3RkLCBjdXJzaXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxuICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzNzBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDMzLCA3MywgMC42NDQpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMGRlZyxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg3KSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjU2MilcclxuICAgICksXHJcbiAgICB1cmwoXCIvYXNzZXRzL0ltYWdlcy9WSmkuZ2lmXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNSUpIDBweCAyMHB4IDM1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuLnF1b3RlIHtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0ltYWdlcy9tYXAucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmRvdFYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIHRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi5kb3RYIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcblxyXG5ib2R5IC5mb290ZXIge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLS1mb290ZXItYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig1NiwgMjUsIDEyOCksIHJnYigxMiwgNCwgMzApKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBncmlkLWFyZWE6IGZvb3RlcjtcclxuICBtaW4taGVpZ2h0OiAxMnJlbTtcclxufVxyXG5ib2R5IC5mb290ZXIgLmJ1YmJsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xyXG4gIGZpbHRlcjogdXJsKFwiI2Jsb2JcIik7XHJcbn1cclxuYm9keSAuZm9vdGVyIC5idWJibGVzIC5idWJibGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiB2YXIoLS1wb3NpdGlvbiwgNTAlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBhbmltYXRpb246IGJ1YmJsZS1zaXplIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyksIGJ1YmJsZS1tb3ZlIHZhcigtLXRpbWUsIDRzKSBlYXNlLWluIGluZmluaXRlIHZhcigtLWRlbGF5LCAwcyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbn1cclxuYm9keSAuZm9vdGVyIC5jb250ZW50IHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICBncmlkLWdhcDogNHJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iYWNrZ3JvdW5kKTtcclxufVxyXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYSwgYm9keSAuZm9vdGVyIC5jb250ZW50IHAge1xyXG4gIGNvbG9yOiAjZjVmN2ZhO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5ib2R5IC5mb290ZXIgLmNvbnRlbnQgYiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJvZHkgLmZvb3RlciAuY29udGVudCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmJvZHkgLmZvb3RlciAuY29udGVudCA+IGRpdiA+IGRpdiB7XHJcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbn1cclxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2ID4gZGl2ID4gKiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuYm9keSAuZm9vdGVyIC5jb250ZW50ID4gZGl2IC5pbWFnZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBtYXJnaW46IDAuMjVyZW0gMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1zaXplIHtcclxuICAwJSwgNzUlIHtcclxuICAgIHdpZHRoOiB2YXIoLS1zaXplLCAycmVtKTtcclxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSwgMnJlbSk7XHJcbiB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMHJlbTtcclxuICAgIGhlaWdodDogMHJlbTtcclxuIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZS1tb3ZlIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IC00cmVtO1xyXG4gfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0YW5jZSwgMTByZW0pO1xyXG4gfVxyXG59XHJcblxyXG4vKiBzdHlsZXMgLmNzcyAqL1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIixcclxuICAgIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcblxyXG4gIGJhY2tncm91bmQ6IHJnYigzLCAxNiwgNTkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEzNWRlZyxcclxuICAgIHJnYmEoNjQsIDIxOSwgMjE2LCAwLjE1KSAwJSxcclxuICAgIHJnYmEoMywgMTYsIDU5LCAwLjE1KSAzNSVcclxuICApO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaHRtbCxcclxuaHRtbCBhLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5hLFxyXG5wLFxyXG5saSxcclxuZGwsXHJcbnRoLFxyXG5kdCxcclxuaW5wdXQsXHJcbnRleHRhcmVhLFxyXG5zcGFuLFxyXG5kaXYge1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIHRleHQtc2hhZG93OiByZ2IoMCAwIDAgLyAwJSkgMXB4IDFweCAxcHg7XHJcbn1cclxuY29kZSB7XHJcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIixcclxuICAgIG1vbm9zcGFjZTtcclxufVxyXG4gXHJcbi5sb2dve1xyXG5cclxubWFyZ2luLWxlZnQ6IDgwMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function InventoryComponent_div_19_tr_20_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_td_38_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.flagItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_19_tr_20_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_19_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_td_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.nameClicked(item_r3.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.overlayClicked(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_a_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r3 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.cartClicked(item_r3.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_19_tr_20_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_button_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r3 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.CreateRequest(item_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_tr_20_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r3 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.reportItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InventoryComponent_div_19_tr_20_td_38_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, InventoryComponent_div_19_tr_20_td_39_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r2.addD(item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.convertBool(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r2.addA(item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r2.addB(item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r2.addC(item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.is_flagged);
} }
function InventoryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.hideSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InventoryComponent_div_19_tr_20_Template, 40, 14, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayItems);
} }
function InventoryComponent_div_20_tr_24_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.nameClicked(item_r30.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.overlayClicked(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r31.addD(item_r30.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r30.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.description);
} }
function InventoryComponent_div_20_tr_24_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.convertBool(item_r30));
} }
function InventoryComponent_div_20_tr_24_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.cartClicked(item_r30.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_24_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.CreateRequest(item_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r33.addA(item_r30.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r33.addB(item_r30.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r33.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r33.addC(item_r30.id));
} }
function InventoryComponent_div_20_tr_24_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.reportItem(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_24_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_24_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.flagItem(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_24_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_24_td_1_Template, 13, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_24_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_24_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_24_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_24_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_24_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category && !item_r30.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.category == ctx_r20.selected_category && item_r30.is_flagged);
} }
function InventoryComponent_div_20_tr_45_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.nameClicked(item_r59.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.overlayClicked(item_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r60.addD(item_r59.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r59.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.description);
} }
function InventoryComponent_div_20_tr_45_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r61.convertBool(item_r59));
} }
function InventoryComponent_div_20_tr_45_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.cartClicked(item_r59.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r75.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_45_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r76.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r77.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.CreateRequest(item_r59, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r62.addA(item_r59.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r62.addB(item_r59.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r62.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r62.addC(item_r59.id));
} }
function InventoryComponent_div_20_tr_45_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.reportItem(item_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_45_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_45_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r84.flagItem(item_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_45_td_1_Template, 13, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_45_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_45_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_45_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_45_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.category == ctx_r21.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.category == ctx_r21.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.category == ctx_r21.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.category == ctx_r21.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r59.category == ctx_r21.selected_category);
} }
function InventoryComponent_div_20_tr_70_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r94.nameClicked(item_r87.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r97.overlayClicked(item_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r88.addD(item_r87.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r87.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r87.description);
} }
function InventoryComponent_div_20_tr_70_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r89.convertBool(item_r87));
} }
function InventoryComponent_div_20_tr_70_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r101.cartClicked(item_r87.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r104.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_70_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r105.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r106.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.CreateRequest(item_r87, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r87.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r90.addA(item_r87.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r90.addB(item_r87.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r90.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r90.addC(item_r87.id));
} }
function InventoryComponent_div_20_tr_70_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.reportItem(item_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_70_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_70_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r113.flagItem(item_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_70_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_70_td_1_Template, 13, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_70_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_70_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_70_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_70_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_70_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r87 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category && !item_r87.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r87.category == ctx_r22.selected_category && item_r87.is_flagged);
} }
function InventoryComponent_div_20_tr_91_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r123.nameClicked(item_r116.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.overlayClicked(item_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r116.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r116.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r117.addD(item_r116.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r116.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r116.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r116.description);
} }
function InventoryComponent_div_20_tr_91_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r118.convertBool(item_r116));
} }
function InventoryComponent_div_20_tr_91_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r130.cartClicked(item_r116.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r133.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_91_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r134.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r135.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r136.CreateRequest(item_r116, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r116.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r119.addA(item_r116.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r119.addB(item_r116.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r119.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r119.addC(item_r116.id));
} }
function InventoryComponent_div_20_tr_91_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r139.reportItem(item_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_91_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_91_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); const item_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r142.flagItem(item_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_91_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_91_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_91_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_91_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_91_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_91_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_91_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r116 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category && !item_r116.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r116.category == ctx_r23.selected_category && item_r116.is_flagged);
} }
function InventoryComponent_div_20_tr_112_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r152.nameClicked(item_r145.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r155.overlayClicked(item_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r145.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r146.addD(item_r145.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r145.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r145.description);
} }
function InventoryComponent_div_20_tr_112_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.convertBool(item_r145));
} }
function InventoryComponent_div_20_tr_112_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r159.cartClicked(item_r145.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r162.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_112_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r163.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r164.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r165.CreateRequest(item_r145, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r145.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r148.addA(item_r145.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r148.addB(item_r145.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r148.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r148.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r148.addC(item_r145.id));
} }
function InventoryComponent_div_20_tr_112_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r168.reportItem(item_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_112_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_112_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173); const item_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r171.flagItem(item_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_112_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_112_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_112_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_112_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_112_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_112_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_112_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r145 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category && !item_r145.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r145.category == ctx_r24.selected_category && item_r145.is_flagged);
} }
function InventoryComponent_div_20_tr_133_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r181.nameClicked(item_r174.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r184.overlayClicked(item_r174); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r174.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r174.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r175.addD(item_r174.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r174.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r174.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r174.description);
} }
function InventoryComponent_div_20_tr_133_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r176.convertBool(item_r174));
} }
function InventoryComponent_div_20_tr_133_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r188.cartClicked(item_r174.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r191.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_133_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r192.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r193.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r194.CreateRequest(item_r174, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r174.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r177.addA(item_r174.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r177.addB(item_r174.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r177.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r177.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r177.addC(item_r174.id));
} }
function InventoryComponent_div_20_tr_133_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r197.reportItem(item_r174); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_133_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_133_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202); const item_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r200.flagItem(item_r174); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_133_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_133_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_133_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_133_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_133_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_133_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_133_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r174 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category && !item_r174.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r174.category == ctx_r25.selected_category && item_r174.is_flagged);
} }
function InventoryComponent_div_20_tr_157_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r209.nameClicked(item_r203.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r212.overlayClicked(item_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r203.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r204.addD(item_r203.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r203.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r203.description);
} }
function InventoryComponent_div_20_tr_157_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r205.convertBool(item_r203));
} }
function InventoryComponent_div_20_tr_157_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r218); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r216.cartClicked(item_r203.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r218); const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r219.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_157_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r218); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r220.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r218); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r221.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r218); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r222.CreateRequest(item_r203, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r203.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r206.addA(item_r203.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r206.addB(item_r203.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r206.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r206.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r206.addC(item_r203.id));
} }
function InventoryComponent_div_20_tr_157_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r225.reportItem(item_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_157_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_157_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); const item_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r228.flagItem(item_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_157_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_157_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_157_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_157_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_157_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r203.category == ctx_r26.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r203.category == ctx_r26.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r203.category == ctx_r26.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r203.category == ctx_r26.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r203.category == ctx_r26.selected_category);
} }
function InventoryComponent_div_20_tr_182_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r238.nameClicked(item_r231.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r241.overlayClicked(item_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r231.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r231.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r232.addD(item_r231.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r231.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r231.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r231.description);
} }
function InventoryComponent_div_20_tr_182_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r233.convertBool(item_r231));
} }
function InventoryComponent_div_20_tr_182_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r245.cartClicked(item_r231.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247); const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r248.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_182_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r249.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r250.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r251.CreateRequest(item_r231, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r231.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r234.addA(item_r231.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r234.addB(item_r231.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r234.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r234.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r234.addC(item_r231.id));
} }
function InventoryComponent_div_20_tr_182_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r254.reportItem(item_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_182_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_182_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r259); const item_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r257.flagItem(item_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_182_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_182_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_182_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_182_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_182_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_182_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_182_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r231 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category && !item_r231.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r231.category == ctx_r27.selected_category && item_r231.is_flagged);
} }
function InventoryComponent_div_20_tr_203_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r267.nameClicked(item_r260.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r270.overlayClicked(item_r260); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r260.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r260.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r261.addD(item_r260.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r260.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r260.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r260.description);
} }
function InventoryComponent_div_20_tr_203_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r262.convertBool(item_r260));
} }
function InventoryComponent_div_20_tr_203_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r274.cartClicked(item_r260.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r277.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_203_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r278.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r279.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r280.CreateRequest(item_r260, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r260.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r263.addA(item_r260.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r263.addB(item_r260.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r263.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r263.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r263.addC(item_r260.id));
} }
function InventoryComponent_div_20_tr_203_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r283.reportItem(item_r260); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_203_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_203_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288); const item_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r286.flagItem(item_r260); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_203_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_203_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_203_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_203_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_203_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_203_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_203_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r260 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category && !item_r260.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r260.category == ctx_r28.selected_category && item_r260.is_flagged);
} }
function InventoryComponent_div_20_tr_224_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r296.nameClicked(item_r289.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r299.overlayClicked(item_r289); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r289.colour_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r289.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r290.addD(item_r289.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r289.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r289.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r289.description);
} }
function InventoryComponent_div_20_tr_224_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r291.convertBool(item_r289));
} }
function InventoryComponent_div_20_tr_224_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r303.cartClicked(item_r289.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r306.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_div_20_tr_224_td_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r307.newRequest.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r308.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_3_Template_button_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r309.CreateRequest(item_r289, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Added To Cart\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r289.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r292.addA(item_r289.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r292.addB(item_r289.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r292.newRequest.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r292.newRequest.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r292.addC(item_r289.id));
} }
function InventoryComponent_div_20_tr_224_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r312.reportItem(item_r289); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Damage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_224_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_tr_224_td_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r317); const item_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r315.flagItem(item_r289); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_224_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventoryComponent_div_20_tr_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InventoryComponent_div_20_tr_224_td_1_Template, 13, 7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InventoryComponent_div_20_tr_224_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_div_20_tr_224_td_3_Template, 18, 6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryComponent_div_20_tr_224_td_4_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryComponent_div_20_tr_224_td_5_Template, 3, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InventoryComponent_div_20_tr_224_td_6_Template, 2, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r289 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category && !item_r289.is_flagged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r289.category == ctx_r29.selected_category && item_r289.is_flagged);
} }
function InventoryComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ELECTRONICS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r318.display_table(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sensors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InventoryComponent_div_20_tr_24_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r320.display_table(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PCB Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, InventoryComponent_div_20_tr_45_Template, 6, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Consumables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r321.display_table(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Capacitors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, InventoryComponent_div_20_tr_70_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r322.display_table(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Resistors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, InventoryComponent_div_20_tr_91_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r323.display_table(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Jumpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, InventoryComponent_div_20_tr_112_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r324.display_table(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "LEDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, InventoryComponent_div_20_tr_133_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "MECHANICAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r325.display_table(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Power Tools ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, InventoryComponent_div_20_tr_157_Template, 6, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Consumables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_164_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r326.display_table(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Screws");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, InventoryComponent_div_20_tr_182_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r327.display_table(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Nuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, InventoryComponent_div_20_tr_203_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_div_20_Template_button_click_206_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r328.display_table(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Bolts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Id Required To Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Damaged items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Flag item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](224, InventoryComponent_div_20_tr_224_Template, 7, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[2], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[5], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[6], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[7], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[8], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r1.displayArray[9], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
class InventoryComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.items = [];
        this.searched = false;
        this.tabledisplay = true;
        this.displayItems = [];
        this.requests = [];
        this.ordered = [];
        this.displaycartbtn = true;
        this.flags = [];
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
        this.displayArray = ['d-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non', 'd-non'];
        this.categoryArray = ['Sensor', 'PCB', 'Resistor', 'Capacitor', 'Jumper', 'LED', 'd-non', 'Screw', 'Nut', 'Bolt', 'Machine'];
        this.selected_category = "none";
        this.selected_value = 100;
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "assets/js/vanta.waves.min.js";
        document.body.appendChild(this.myScriptElement);
        this.myScript2Element = document.createElement("script");
        this.myScript2Element.src = "assets/js/script.js";
        document.body.appendChild(this.myScript2Element);
        this.newRequest = { id: -1, item: -1, roll_number: '123456789', quantity: 1 };
        this.item_query = '';
    }
    ngOnInit() {
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jdataKey));
            this.user_data.roll_number = window.atob(this.user_data.roll_number);
            this.api.getCustomer(this.user_data.roll_number)
                .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
        }
        else {
            this.router.navigate(['']);
        }
        this.api.rollSearch(this.user_data.roll_number).subscribe(data => {
            this.requests = data;
        }, error => {
            console.log(error);
        });
        console.log(this.ordered);
        this.api.getItems().subscribe(data => {
            this.items = data;
            //setcolourcode
            const that = this;
            this.items.forEach(iterate);
            function iterate(item) {
                if (item.is_consumable == true) {
                    if (item.quantity < 0.3 * item.critical_val) {
                        item.colour_code = "red";
                    }
                    else if (item.quantity < 0.75 * item.critical_val) {
                        item.colour_code = "yellow";
                    }
                    else if (item.quantity < item.critical_val) {
                        item.colour_code = "green";
                    }
                    else {
                        item.colour_code = "green";
                    }
                }
                that.api.updateItem(item).subscribe(data => { console.log(data); }, error => { console.log(error); });
            }
            //end setcolourcode
        }, error => {
            console.log(error);
        });
        this.api.getFlags().subscribe(data => {
            this.flags = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
        $(document).ready(function () {
        });
    }
    addA(id) {
        return 'A' + id.toString();
    }
    addB(id) {
        return 'B' + id.toString();
    }
    addC(id) {
        return 'C' + id.toString();
    }
    addD(id) {
        return 'D' + id.toString();
    }
    CreateRequest(item, event) {
        console.log(event);
        this.newRequest.item = item.id;
        this.newRequest.roll_number = this.user_data.roll_number;
        var children = event.srcElement.parentElement.parentElement.children;
        var i = 0;
        this.requests.forEach(iterate);
        function iterate(request) {
            if (request.item == item.id) {
                i++;
            }
        }
        if (i == 0) {
            this.api.createRequest(this.newRequest).subscribe(data => {
                this.requests.push(this.newRequest);
                children[0].style.display = 'none';
                children[1].style.display = 'none';
                children[2].style.display = 'block';
                console.log(data);
            }, error => {
                console.log(error);
            });
        }
        else {
            this.router.navigate(['../cart']);
        }
    }
    convertBool(item) {
        return item.id_required ? 'Yes' : 'No';
    }
    nameClicked(id, event) {
        console.log('heyy');
        console.log(event);
        var target = event.srcElement.parentElement.children[1];
        target.style.display = 'block';
    }
    overlayClicked(item) {
        $('.overlay').slideUp(400);
    }
    cartClicked(id, event) {
        console.log(id.toString());
        var children = event.srcElement.parentElement.children;
        console.log(children);
        const that = this;
        this.requests.forEach(iterate);
        function iterate(request) {
            if (!request.is_sent && request.item == id) {
                that.router.navigate(['../cart']);
            }
        }
        children[0].style.display = 'none';
        children[1].style.display = 'block';
        children[2].style.display = 'none';
    }
    incrementQuantity() { this.newRequest.quantity++; }
    decrementQuantity() { this.newRequest.quantity--; }
    reportItem(item) {
        if (confirm('This will send a mail to the admins. Are you sure you want to continue?')) {
            document.getElementById('super-overlay').style.display = 'block';
            this.mail.roll_number = this.user_data.roll_number;
            this.mail.subject = 'Reporting of ' + item.name;
            this.mail.message = item.name + ' <h1>has been flagged</h1>';
            this.mail.recipient_list = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].technician_mails;
            var date_time = new Date();
            this.mail.html_message = '<strong>' + item.name + '</strong>' + ' has been reported on the website by <strong>' + this.user_data.first_name + ' ' + this.user_data.last_name + '-' + this.user_data.roll_number + '</strong> at ' + date_time + '<br><br>Please check the item.';
            this.api.updateMail(this.mail).subscribe(data => {
                console.log(data);
                this.api.sendMail(this.user_data.roll_number).subscribe(data => { console.log(data); if (data == 'sent') {
                    document.getElementById('super-overlay').style.display = 'none';
                    console.log('mail sent successfully');
                } }, error => { document.getElementById('super-overlay').style.display = 'none'; alert('error'); console.log(error); });
            }, error => { console.log(error); });
        }
    }
    flagItem(item) {
        if (confirm('This will send a mail to the admins. Are you sure you want to continue?')) {
            document.getElementById('super-overlay').style.display = 'block';
            this.mail.roll_number = this.user_data.roll_number;
            this.mail.subject = 'Flagging of ' + item.name;
            this.mail.message = item.name + ' <h1>has been flagged</h1>';
            this.mail.recipient_list = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].technician_mails;
            var date_time = new Date();
            this.mail.html_message = '<strong>' + item.name + '</strong>' + ' has been flagged on the website by <strong>' + this.user_data.first_name + ' ' + this.user_data.last_name + '-' + this.user_data.roll_number + '</strong> at ' + date_time + '<br><br>Please check the item.';
            this.api.updateMail(this.mail).subscribe(data => {
                console.log(data);
                this.api.sendMail(this.user_data.roll_number)
                    .subscribe(data => { console.log(data); if (data == 'sent') {
                    document.getElementById('super-overlay').style.display = 'none';
                    console.log('mail sent successfully');
                } }, error => { document.getElementById('super-overlay').style.display = 'none'; alert('error'); console.log(error); });
            }, error => { console.log(error); });
            var newflg = { item: item.id, roll_number: this.user_data.roll_number };
            this.api.createFlag(newflg).subscribe(data => {
                this.flags.push(newflg);
                console.log(data);
            }, error => {
                console.log(error);
            });
            item.is_flagged = true;
            this.api.updateItem(item).subscribe(data => { console.log(data); }, error => { console.log(error); });
        }
    }
    display_table(chosen) {
        this.selected_category = this.categoryArray[chosen];
        if (this.selected_value == chosen) {
            this.selected_value = 100;
        }
        else {
            this.selected_value = chosen;
        }
        var i;
        for (i = 0; i < 11; i++) {
            this.displayArray[i] = 'd-non';
        }
        this.displayArray[this.selected_value] = 'd-show';
    }
    searchItem() {
        this.searched = true;
        this.api.itemSearch(this.item_query)
            .subscribe(data => {
            this.displayItems = data;
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    hideSearch() {
        this.searched = false;
    }
    searchButton(event) {
        if (event.keyCode == 13 && this.item_query != '') {
            this.searchItem();
        }
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 27, vars: 4, consts: [["id", "super-overlay", 1, "super-overlay"], ["id", "mailSpinner"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [2, "background-color", "rgb(3, 16, 59)"], [1, "home1"], ["claSS", "mrgn"], [1, "input-group", "text-center", "container", "col-md-4", "mt-4"], ["type", "text", "placeholder", "Search for items", 1, "form-control", 3, "ngModel", "keydown", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "container"], [1, "table-responsive"], [1, "table", "table-striped", 2, "color", "white"], [4, "ngFor", "ngForOf"], [1, "itemName", 3, "click"], ["mat-raised-button", "", "color", "accent"], [1, "overlay", 3, "id", "click"], [1, "expanded"], ["alt", "Couldn't load", 3, "src"], [3, "id"], [1, "fas", "fa-shopping-cart", 3, "id", "click"], [1, "specifyQuantity", 3, "id"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["type", "text", 1, "btn", "btn-secondary", "mr-1", "ml-1", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["title", "Add to Cart", 1, "btn", "btn-success", "ml-5", 3, "click"], [1, "addedToCart", 3, "id"], ["routerLink", "../cart", "title", "Go to Cart"], [1, "fas", "fa-shopping-cart"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "click"], [1, "far", "fa-flag"], [1, "far", "fa-flag", 2, "color", "darkgray"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "itemName", 3, "click", 4, "ngIf"], [3, "id", 4, "ngIf"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "warn"], [1, "btn", "btn-warning", "pl-4", "pr-4", "m-1", 3, "click"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InventoryComponent_Template_input_keydown_15_listener($event) { return ctx.searchButton($event); })("ngModelChange", function InventoryComponent_Template_input_ngModelChange_15_listener($event) { return ctx.item_query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_17_listener() { return ctx.searchItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InventoryComponent_div_19_Template, 21, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InventoryComponent_div_20_Template, 225, 40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item_query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.item_query == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.addedToCart[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.specifyQuantity[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.specifyQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 5vw;\r\n  min-width: 50px;\r\n}\r\n\r\n.d-non[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.d-show[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n#super-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  display: none;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  z-index: 300;\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  text-align: center;\r\n}\r\n\r\n#mailSpinner[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 40vw;\r\n  top: 40vh;\r\n}\r\n\r\n#mailSpinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  top: 40vh;\r\n  width: 15vw;\r\n  height: 15vw;\r\n  border-width: 15px;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: fixed;\r\n  display: none;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  z-index: 200;\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n}\r\n\r\n.expanded[_ngcontent-%COMP%] {\r\n  background-color:  rgb(3, 16, 59);\r\n  color: white;\r\n  position: absolute;\r\n  top: 20%;\r\n  width: 50%;\r\n  left: 25%;\r\n  text-align: center;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.expanded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  #decrementQuantity[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.home1[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 0px;\r\n  margin-bottom: -50px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n\r\n  color:white;\r\n  font-family: \"Fantasy\";\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUNBOztFQUVFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBS0E7O0VBRUUsV0FBVztFQUNYLHNCQUFzQjs7QUFFeEIiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYWRkZWRUb0NhcnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNwZWNpZnlRdWFudGl0eSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNwZWNpZnlRdWFudGl0eSBpbnB1dCB7XHJcbiAgd2lkdGg6IDV2dztcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuLmQtbm9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kLXNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jc3VwZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDMwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI21haWxTcGlubmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNDB2dztcclxuICB0b3A6IDQwdmg7XHJcbn1cclxuI21haWxTcGlubmVyIGRpdiB7XHJcbiAgdG9wOiA0MHZoO1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIGhlaWdodDogMTV2dztcclxuICBib3JkZXItd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLmV4cGFuZGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDMsIDE2LCA1OSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZXhwYW5kZWQgaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgI2RlY3JlbWVudFF1YW50aXR5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5ob21lMXtcclxuXHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5oMSxoMyB7XHJcblxyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZhbnRhc3lcIjtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventory',
                templateUrl: './inventory.component.html',
                styleUrls: ['./inventory.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_input_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.username);
} }
function LoginComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Technician Homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.password)("placeholder", ctx_r3.pwd_placeholder);
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_16_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.new_password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.new_password);
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_17_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.new_password_temp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.new_password_temp);
} }
function LoginComponent_input_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_input_19_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.username == "");
} }
function LoginComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r20.password_display = false; ctx_r20.pwd_placeholder = "Old Password..."; ctx_r20.password = ""; return ctx_r20.password_display = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_input_21_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_input_21_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.change_pwd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.username_display = true;
        this.password_display = true;
        this.pwd_placeholder = 'Password...';
        this.logged_in = false;
        this.username = '';
        this.password = '';
    }
    ngOnInit() {
        if (this.api.is_Authenticated() && this.api.check_technician()) {
            this.logged_in = true;
            this.username_display = false;
            this.password_display = false;
        }
        else if (this.api.is_Authenticated()) {
            this.router.navigate(['']);
        }
        else {
            this.logged_in = false;
        }
    }
    login() {
        if (this.password == '') {
            alert('Password Cannot be blank');
        }
        else {
            var login_data = {};
            login_data['username'] = this.username;
            login_data['password'] = this.password;
            const that = this;
            jquery__WEBPACK_IMPORTED_MODULE_1__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'auth_technician/', login_data, function (data) {
                console.log(data);
                if (data == 'True') {
                    that.api.getCustomer(login_data['username'])
                        .subscribe(data => {
                        console.log('hey');
                        that.user_data = data;
                        that.user_data.roll_number = window.btoa(that.user_data.roll_number);
                        console.log(data);
                        that.api.setJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey, JSON.stringify(that.user_data));
                        window.location.reload();
                    }, error => { console.log(error); });
                    // that.router.navigate(['../technician'])
                }
                else {
                    alert('Incorrect Username or Password');
                }
            });
        }
    }
    change_pwd() {
        if (this.password == '' || this.new_password == '' || this.new_password_temp == '') {
            alert('Password Cannot be blank');
        }
        else if (this.new_password != this.new_password_temp) {
            alert("Passwords don't match");
        }
        else {
            var login_data = {};
            login_data['username'] = window.atob(JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey)).roll_number);
            login_data['password'] = this.password;
            const that = this;
            jquery__WEBPACK_IMPORTED_MODULE_1__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'auth_technician/', login_data, function (data) {
                console.log(data);
                if (data == 'True') {
                    var pwd_data = {};
                    pwd_data['username'] = window.atob(JSON.parse(that.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jdataKey)).roll_number);
                    pwd_data['password'] = that.new_password;
                    jquery__WEBPACK_IMPORTED_MODULE_1__["post"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'change_pwd/', pwd_data, function (data) {
                        if (data == 'True') {
                            alert('password changed successfully');
                            window.location.reload();
                        }
                        else {
                            alert('error');
                        }
                    });
                }
                else {
                    alert('Old Password is wrong');
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 10, consts: [[1, "container", "h-100"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center"], ["id", "form-title"], [1, "d-flex", "justify-content-center", "form_container"], ["method", "POST", "action", ""], [1, "input-group", "mb-3"], [1, "input-group-append"], ["class", "input-group-text", 4, "ngIf"], ["type", "text", "name", "username", "placeholder", "Username...", "class", "form-control", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "btn", "style", "background-color: white;border-radius: 30px;color: #20c9c3;font-size: 1.5rem;border-width: 0;", "routerLink", "../technician", 4, "ngIf"], ["class", "input-group mb-2", 4, "ngIf"], ["id", "forgotPassword", "class", "small text-right text-primary", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["class", "btn login_btn mx-1", "type", "submit", "value", "Login", 3, "disabled", "click", 4, "ngIf"], ["class", "btn", "style", "background-color: white;border-radius: 30px;color: #20c9c3;", 3, "click", 4, "ngIf"], ["class", "btn login_btn mx-1", "type", "submit", "value", "Confirm Password Change", 3, "click", 4, "ngIf"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "name", "username", "placeholder", "Username...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["routerLink", "../technician", 1, "btn", 2, "background-color", "white", "border-radius", "30px", "color", "#20c9c3", "font-size", "1.5rem", "border-width", "0"], [1, "fas", "fa-arrow-circle-right", "ml-1"], [1, "input-group", "mb-2"], [1, "fas", "fa-key"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "forgotPassword", 1, "small", "text-right", "text-primary"], ["type", "password", "name", "password", "placeholder", "New Password...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter New Password again...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login", 1, "btn", "login_btn", "mx-1", 3, "disabled", "click"], [1, "btn", 2, "background-color", "white", "border-radius", "30px", "color", "#20c9c3", 3, "click"], ["type", "submit", "value", "Confirm Password Change", 1, "btn", "login_btn", "mx-1", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Technician LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_input_11_Template, 1, 1, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_a_12_Template, 3, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_input_19_Template, 1, 1, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_a_20_Template, 3, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_input_21_Template, 1, 0, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username_display && !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username_display && !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in && !ctx.password_display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password_display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password_display && ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password_display && ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username_display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in && !ctx.password_display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username_display && ctx.password_display);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.user_card[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  margin-top: 20vh;\r\n  margin-bottom: auto;\r\n  background: #20c9c3;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: auto;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 5px;\r\n\r\n}\r\n\r\n.form_container[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n#form-title[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 28px;\r\n  color: #fff;\r\n  font-family: 'Cormorant';\r\n  font-weight: bold;\r\n  padding: 10px 10px 10px 10px;\r\n\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: black !important;\r\n  color: blue;\r\n}\r\n\r\n.login_btn[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n\r\n.login_container[_ngcontent-%COMP%] {\r\n  padding: 0 2rem;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  background: #f7ba5b !important;\r\n  color: white !important;\r\n  border: 0 !important;\r\n  border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n\r\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n\r\n#forgotPassword[_ngcontent-%COMP%]:hover{\r\n\tcolor: red;\r\n\tcursor: pointer;\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDZDQUE2QztBQUMvQzs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUdBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcclxuaHRtbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnVzZXJfY2FyZCB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjMjBjOWMzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Zvcm0tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQnO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4ubG9naW5fYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ubG9naW5fYnRuOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQ6ICNmN2JhNWIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dF91c2VyLFxyXG4uaW5wdXRfcGFzczpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuI2ZvcmdvdFBhc3N3b3JkOmhvdmVye1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1x0XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/machinestatus/machinestatus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/machinestatus/machinestatus.component.ts ***!
  \**********************************************************/
/*! exports provided: MachinestatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinestatusComponent", function() { return MachinestatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MachinestatusComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MachinestatusComponent_ng_container_21_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const machine_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.reportMachine(machine_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const machine_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](machine_r1.status ? "table-success" : "table-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.items[machine_r1.type - 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](machine_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.returnStatus(machine_r1.status));
} }
class MachinestatusComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.machines = [];
        this.items = [];
        this.mail = { 'roll_number': '', 'subject': '', 'message': '', 'html_message': '', 'recipient_list': '' };
    }
    ngOnInit() {
        this.api.getMachines().subscribe(data => {
            this.machines = data;
            console.log(data);
        });
        this.api.getItems().subscribe(data => {
            this.items = data;
            console.log(data);
        });
    }
    returnStatus(x) {
        return x ? 'Working' : 'Not Working';
    }
    reportMachine(machine) {
        this.logged_in = this.api.is_Authenticated();
        console.log(this.logged_in);
        if (this.logged_in == true) {
            if (confirm('This will send a mail to the admins. Are you sure you want to continue?')) {
                this.user_data = JSON.parse(this.api.getJdata(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jdataKey));
                this.user_data.roll_number = window.atob(this.user_data.roll_number);
                this.api.getCustomer(this.user_data.roll_number)
                    .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error); }; });
                this.mail.roll_number = this.user_data.roll_number;
                this.mail.subject = 'Reporting of Machine ' + machine.name + ' - ' + this.items[machine.type - 1].name;
                this.mail.message = machine.name + ' - ' + this.items[machine.type - 1].name + ' <h1>has been reported</h1>';
                this.mail.recipient_list = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].technician_mails;
                var date_time = new Date();
                this.mail.html_message = '<strong>' + machine.name + ' - ' + this.items[machine.type - 1].name + '</strong>' + ' has been reported on the website by <strong>' + this.user_data.first_name + ' ' + this.user_data.last_name + '-' + this.user_data.roll_number + '</strong> at ' + date_time + '<br><br>Please check the item.';
                this.api.updateMail(this.mail).subscribe(data => {
                    console.log(data);
                    this.api.sendMail(this.user_data.roll_number).subscribe(data => { console.log(data); if (data == 'sent') {
                        console.log('mail sent successfully');
                    } }, error => { alert('error'); console.log(error); });
                }, error => { console.log(error); });
            }
        }
        else {
            alert("You need to be logged in to Report");
            this.router.navigate(['']);
        }
    }
}
MachinestatusComponent.ɵfac = function MachinestatusComponent_Factory(t) { return new (t || MachinestatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MachinestatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MachinestatusComponent, selectors: [["app-machinestatus"]], decls: 26, vars: 1, consts: [[1, "container", "table-responsive"], ["id", "tabletext", 1, "table", "table-striped", "mt-5"], [1, "table-primary", 2, "background-color", "black"], [2, "background-color", "black", "color", "cornsilk"], [4, "ngFor", "ngForOf"], [2, "background-color", "black"], [1, "btn", "btn-danger", 3, "click"]], template: function MachinestatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Machine Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Machine Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Working Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MachinestatusComponent_ng_container_21_Template, 11, 5, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.machines);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#tabletext[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: black;\r\n}\r\n#report[_ngcontent-%COMP%]{\r\n    margin-left: 82%;\r\n    margin-top: 0.5vh;\r\n    margin-bottom: 0px;\r\n}\r\n#table[_ngcontent-%COMP%]{\r\n    margin-top: 0px;\r\n    background-color: black;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    margin-top: -100px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n      \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n      sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  \r\n    background: rgb(3, 16, 59);\r\n    background-image: linear-gradient(\r\n      135deg,\r\n      rgba(64, 219, 216, 0.15) 0%,\r\n      rgba(3, 16, 59, 0.15) 35%\r\n    );\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjaGluZXN0YXR1cy9tYWNoaW5lc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCOztnQkFFWTtJQUNaLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0lBRWxDLDBCQUEwQjtJQUMxQjs7OztLQUlDO0lBQ0QsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWNoaW5lc3RhdHVzL21hY2hpbmVzdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4jcmVwb3J0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgyJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbiN0YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmJvZHkge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxyXG4gICAgICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxyXG4gICAgICBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDMsIDE2LCA1OSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDEzNWRlZyxcclxuICAgICAgcmdiYSg2NCwgMjE5LCAyMTYsIDAuMTUpIDAlLFxyXG4gICAgICByZ2JhKDMsIDE2LCA1OSwgMC4xNSkgMzUlXHJcbiAgICApO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MachinestatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-machinestatus',
                templateUrl: './machinestatus.component.html',
                styleUrls: ['./machinestatus.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/machinetut/machinetut.component.ts":
/*!****************************************************!*\
  !*** ./src/app/machinetut/machinetut.component.ts ***!
  \****************************************************/
/*! exports provided: MachinetutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinetutComponent", function() { return MachinetutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");





function MachinetutComponent_body_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wise Words");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "youtube-player", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", item_r1.vidlink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 50)("width", 50)("startSeconds", 0);
} }
class MachinetutComponent {
    constructor(api) {
        this.api = api;
        this.items = [];
        this.tutorials = [];
        this.lis = [];
    }
    ngOnInit() {
        //Code for front
        //code for api
        this.api.getMachinetut().subscribe(data => {
            this.tutorials = data;
            let tut = this.tutorials;
            this.api.getItems().subscribe(items => {
                this.items = items;
                let itemlist = this.items;
                for (let i = 0; i < tut.length; i++) {
                    let link = tut[i].videoLink;
                    link = link.split('/');
                    link = link[link.length - 1];
                    let description = tut[i].description;
                    let pk = tut[i].machineName;
                    let machinename = itemlist.filter(item => item.id == pk)[0];
                    let name = machinename.name;
                    this.lis.push({ 'name': name, 'desc': description, 'vidlink': link });
                }
                console.log(this.lis);
            });
        });
    }
}
MachinetutComponent.ɵfac = function MachinetutComponent_Factory(t) { return new (t || MachinetutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
MachinetutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MachinetutComponent, selectors: [["app-machinetut"]], decls: 2, vars: 1, consts: [[2, "background-color", "black"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-left", 1, "card"], [1, "card__content"], [1, "card__front"], [1, "card__title"], [1, "card__subtitle"], [1, "card__back"], [1, "card__body"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds"]], template: function MachinetutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MachinetutComponent_body_1_Template, 15, 6, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayer"]], styles: [".cards[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n.video[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.card-header[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n    font:bold;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background:url(\"/assets/Images/TL2.png\") no-repeat       center fixed;\r\n    background-size: cover;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    text-align: center;\r\n    position: relative; \r\n    \r\n}\r\n.card__content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 15em 5em;\r\n    transition: transform 3s;\r\n    transform-style: preserve-3d;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .card__content[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n}\r\n.card__front[_ngcontent-%COMP%], .card__back[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 2em;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    transform-style: preserve-3d;\r\n    display: grid;\r\n    align-content: center; \r\n}\r\n.card__front[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    background-size: cover;\r\n    background-blend-mode: overlay;\r\n    color: #333;\r\n    transform: translateY(.25turn);\r\n}\r\n.card__title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-family: 'Dancing Script', cursive;\r\n    color: orange;\r\n    transform: translateZ(6rem);\r\n    transform-style: preserve-3d;\r\n}\r\n.card__front[_ngcontent-%COMP%]::before {\r\n    content:'';\r\n    position: absolute;\r\n    --spacer: 1em;\r\n    top: var(--spacer);\r\n    bottom: var(--spacer);\r\n    left: var(--spacer);\r\n    right: var(--spacer);\r\n    border: 3px solid white;\r\n    transform: var(--level-one);\r\n    grid-row: 0/4;\r\n    transform: translateZ(6rem);\r\n}\r\n.card__subtitle[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-family: 'Dancing Script', cursive;\r\n    color: orange;\r\n    transform: translateZ(4rem);\r\n}\r\n.card__body[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: orange;\r\n    transform: translateZ(3rem);\r\n}\r\n.card__back[_ngcontent-%COMP%] {\r\n    transform: rotateY(.5turn);\r\n    background: black;\r\n}\r\n.card__back[_ngcontent-%COMP%]::before {\r\n    content:'';\r\n    position: absolute;\r\n    --spacer: 1em;\r\n    top: var(--spacer);\r\n    bottom: var(--spacer);\r\n    left: var(--spacer);\r\n    right: var(--spacer);\r\n    border: 3px solid white;\r\n    transform: var(--level-one);\r\n    grid-row: 0/4;\r\n    transform: translateZ(6rem);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjaGluZXR1dC9tYWNoaW5ldHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUVBQXFFO0lBQ3JFLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixxR0FBcUc7SUFDckcsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmV0dXQvbWFjaGluZXR1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4udmlkZW97XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQ6Ym9sZDtcclxufUBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuYm9keSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6dXJsKFwiL2Fzc2V0cy9JbWFnZXMvVEwyLnBuZ1wiKSBuby1yZXBlYXQgICAgICAgY2VudGVyIGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZF9fY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNWVtIDVlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkX19jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSguNXR1cm4pO1xyXG59XHJcblxyXG4uY2FyZF9fZnJvbnQsXHJcbi5jYXJkX19iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyBcclxufVxyXG5cclxuLmNhcmRfX2Zyb250IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4yNXR1cm4pO1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDZyZW0pO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNhcmRfX2Zyb250OjpiZWZvcmUge1xyXG4gICAgY29udGVudDonJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC0tc3BhY2VyOiAxZW07XHJcbiAgICB0b3A6IHZhcigtLXNwYWNlcik7XHJcbiAgICBib3R0b206IHZhcigtLXNwYWNlcik7XHJcbiAgICBsZWZ0OiB2YXIoLS1zcGFjZXIpO1xyXG4gICAgcmlnaHQ6IHZhcigtLXNwYWNlcik7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogdmFyKC0tbGV2ZWwtb25lKTtcclxuICAgIGdyaWQtcm93OiAwLzQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNnJlbSk7XHJcbn1cclxuXHJcbi5jYXJkX19zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNHJlbSk7XHJcbn1cclxuXHJcbi5jYXJkX19ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzcmVtKTtcclxufVxyXG5cclxuLmNhcmRfX2JhY2sge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC41dHVybik7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLmNhcmRfX2JhY2s6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1zcGFjZXI6IDFlbTtcclxuICAgIHRvcDogdmFyKC0tc3BhY2VyKTtcclxuICAgIGJvdHRvbTogdmFyKC0tc3BhY2VyKTtcclxuICAgIGxlZnQ6IHZhcigtLXNwYWNlcik7XHJcbiAgICByaWdodDogdmFyKC0tc3BhY2VyKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB2YXIoLS1sZXZlbC1vbmUpO1xyXG4gICAgZ3JpZC1yb3c6IDAvNDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2cmVtKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MachinetutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-machinetut',
                templateUrl: './machinetut.component.html',
                styleUrls: ['./machinetut.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    technician_mails: "['tanmay.v.hiremath@gmail.com','gakshat2207@gmail.com']",
    production: false,
    serverUrl: 'https://itc.gymkhana.iitb.ac.in/tl/',
    loginUrl: 'https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=4IIH8kT8qmBRLQnmrjwauuos60vC9xJrXZD33tIV&response_type=code&scope=basic',
    jdataKey: 'Kb8VUT3E9q7vshw21',
    technicians: ['tanmay', 'Technician2', 'Technician3', '20D170037'] //store the username of django use(which in turn should be the roll number of a customer in customers model)
    //store roll no as 20Dxxxxxx, not as 20dxxxxxx
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ITC-TL\TL-Website-master\TL-Website-master\TLfront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map