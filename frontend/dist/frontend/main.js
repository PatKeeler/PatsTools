(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/math.component */ 8167);
/* harmony import */ var _passwords_passwords_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwords/passwords.component */ 8837);
/* harmony import */ var _poker_poker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poker/poker.component */ 7003);
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sql/sql.component */ 3610);
/* harmony import */ var _xml_xml_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xml/xml.component */ 9329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: '', component: _math_math_component__WEBPACK_IMPORTED_MODULE_0__.MathComponent },
    { path: 'passwords', component: _passwords_passwords_component__WEBPACK_IMPORTED_MODULE_1__.PasswordsComponent },
    { path: 'poker', component: _poker_poker_component__WEBPACK_IMPORTED_MODULE_2__.PokerComponent },
    { path: 'sql', component: _sql_sql_component__WEBPACK_IMPORTED_MODULE_3__.SqlComponent },
    { path: 'xml', component: _xml_xml_component__WEBPACK_IMPORTED_MODULE_4__.XmlComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 31, vars: 0, consts: [[1, "container"], ["href", "a", 1, "logo"], [2, "font-size", "16px"], ["href", "#", "routerLink", "/"], ["href", "#", "routerLink", "/passwords"], ["href", "#", "routerLink", "/poker"], ["href", "#", "routerLink", "/sql"], ["href", "#", "routerLink", "/xml"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pat's Frontend Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Math Tutor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Poker Worksheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pat's Full Stack Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SQL Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "XML Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _passwords_passwords_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwords/passwords.component */ 8837);
/* harmony import */ var _poker_poker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poker/poker.component */ 7003);
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/math.component */ 8167);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sql/sql.component */ 3610);
/* harmony import */ var _xml_xml_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xml/xml.component */ 9329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__.PlatformModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _passwords_passwords_component__WEBPACK_IMPORTED_MODULE_2__.PasswordsComponent,
        _poker_poker_component__WEBPACK_IMPORTED_MODULE_3__.PokerComponent,
        _math_math_component__WEBPACK_IMPORTED_MODULE_4__.MathComponent,
        _sql_sql_component__WEBPACK_IMPORTED_MODULE_5__.SqlComponent,
        _xml_xml_component__WEBPACK_IMPORTED_MODULE_6__.XmlComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__.PlatformModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule] }); })();


/***/ }),

/***/ 8167:
/*!****************************************!*\
  !*** ./src/app/math/math.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathComponent": () => (/* binding */ MathComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




const _c0 = ["answerInput"];
const _c1 = ["divideInput"];
class MathComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.invalidNumber = "You must enter valid numbers for your answer, please try again!";
        this.notStarted = "You must select a number and a math function and then click " +
            "on the \"Start\" button to start the tutor.";
        this.responseText = '';
        this.rightCount = 0;
        this.wrongCount = 0;
        this.repetition = 1;
        this.numberRight = 0;
        this.numberWrong = 0;
        this.percentage = 0;
        this.remainder = 0;
        this.answer = 'other';
        this.otherHide = false;
        this.divideHide = true;
        this.hintHide = true;
    }
    ngOnInit() {
    }
    /**
     * Get the selected number.
     */
    numberRadioHandler(event) {
        this.tempNumber = event.target.value;
    }
    /**
     * Get the selected operation.
     */
    functionRadioHandler(event) {
        this.tempFunction = event.target.value;
    }
    /**
     * Validate radio buttons and start.
     */
    startTutor() {
        if (this.tempNumber == null) {
            alert(this.notStarted);
            return false;
        }
        this.selectedNumber = this.tempNumber;
        if (this.tempFunction == null) {
            alert(this.notStarted);
            return false;
        }
        this.selectedMathFunction = this.tempFunction;
        //Holder for divide or other "answer" display
        // answer = other - default for add, subtract and multiply.
        switch (this.selectedMathFunction) {
            //Add
            case '1': {
                this.operator = "+";
                this.answer = "other";
                this.otherHide = false;
                this.divideHide = true;
                this.randomNumber = this.getRandomInteger(12);
                break;
            }
            //Subtract
            case '2': {
                this.operator = "-";
                this.answer = "other";
                this.otherHide = false;
                this.divideHide = true;
                this.randomNumber = this.getRandomInteger(this.selectedNumber);
                break;
            }
            //Multiply
            case '3': {
                this.operator = "x";
                this.answer = "other";
                this.otherHide = false;
                this.divideHide = true;
                this.randomNumber = this.getRandomInteger(12);
                break;
            }
            //Divide
            case '4': {
                this.operator = "/";
                this.otherHide = true;
                this.divideHide = false;
                this.randomNumber = this.getRandomInteger(this.selectedNumber);
                this.answer = "divide";
                break;
            }
            default: {
                alert("Number Doh!");
                break;
            }
        }
        // blank responseText and background color to white.
        this.responseText = '';
        //set scores to zero if counts are zero
        if (Number(this.rightCount) == 0 && Number(this.wrongCount) == 0) {
            this.numberRight = 0;
            this.numberWrong = 0;
            this.percentage = 0;
            // $("[name=percentage]").css("background", "#FFFFFF");
        }
        this.answerDisplay(this.answer);
        this.hintHide = true;
    }
    /**
     * Check Answer function.
     *
     * Verifies the answer is correct, records the result and
     * resets for the next challenge.
     */
    checkAnswer() {
        let guess = -1;
        //Make sure the tutor has been started correctly first.
        if (this.selectedNumber == null || this.selectedMathFunction == null) {
            alert(this.notStarted);
            return false;
        }
        //Make sure there is an answer to check.
        if (this.selectedMathFunction != 4) {
            if (!this.verifyNumber(this.otherAnswer)) {
                return false;
            }
        }
        else {
            if (!this.verifyNumber(this.divideAnswer)) {
                alert(this.invalidNumber);
                return false;
            }
        }
        //Make sure remainder is blank or a number
        if (!this.remainder) {
            if (!this.verifyNumber(this.remainder)) {
                alert(this.invalidNumber);
                return false;
            }
        }
        //Compute answer based on math function
        //Addition
        if (this.selectedMathFunction == 1) {
            guess = Number(this.selectedNumber) + Number(this.randomNumber);
            if (guess == this.otherAnswer) {
                this.correctAnswer();
                //Reset random number
                this.randomNumber = this.getRandomInteger(12);
            }
            else {
                this.wrongAnswer();
            }
        }
        //Subtraction
        else if (this.selectedMathFunction == 2) {
            guess = Number(this.selectedNumber) - Number(this.randomNumber);
            if (guess == this.otherAnswer) {
                this.correctAnswer();
                //Reset random number
                this.randomNumber = this.getRandomInteger(this.selectedNumber);
            }
            else {
                this.wrongAnswer();
            }
        }
        //Multiplication
        else if (this.selectedMathFunction == 3) {
            guess = Number(this.selectedNumber) * Number(this.randomNumber);
            if (guess == this.otherAnswer) {
                this.correctAnswer();
                //Reset random number
                this.randomNumber = this.getRandomInteger(12);
            }
            else {
                this.wrongAnswer();
            }
        }
        //Division
        else if (this.selectedMathFunction == 4) {
            let remainder;
            let mod;
            if (this.remainder == null) {
                remainder = Number(0);
            }
            else {
                remainder = Number(this.remainder);
            }
            guess = Number(this.selectedNumber) / Number(this.randomNumber);
            guess = Math.floor(guess);
            mod = Number(this.selectedNumber) % Number(this.randomNumber);
            if (guess == this.divideAnswer && mod == this.remainder) {
                this.correctAnswer();
                //For division get a number that gives mod zero
                this.randomNumber = this.getRandomInteger(Number(this.selectedNumber));
            }
            else {
                this.wrongAnswer();
            }
        }
    }
    /**
     * Set focus on the desired input field.
     */
    setFocus(element) {
        setTimeout(() => { element.nativeElement.focus(); }, 50);
    }
    /**
     * Determine the correct answer display
     *
     * @param display
     */
    answerDisplay(display) {
        //Display for all but divide
        if (display == "other") {
            //blank answer, set focus
            this.otherAnswer = '';
            //Show other and hide divide
            this.otherHide = false;
            this.divideHide = true;
            // this.setOtherFocus();
            this.setFocus(this.answerIn);
        }
        //Display divide answer boxes
        else if (display == "divide") {
            //blank answer, set focus
            this.divideAnswer = '';
            this.remainder = 0;
            this.otherHide = true;
            this.divideHide = false;
            // this.setDivideFocus();
            this.setFocus(this.divideIn);
        }
        //Doh!
        else {
            alert("invalid answer display: " + display);
        }
    }
    /**
     * Reset the score
     */
    resetScore() {
        //set score to blanks.
        this.numberWrong = 0;
        this.numberRight = 0;
        this.percentage = 0;
        //set counts to zero
        this.wrongCount = 0;
        this.rightCount = 0;
        if (this.selectedMathFunction == 4) {
            this.setFocus(this.divideIn);
        }
        else {
            this.setFocus(this.answerIn);
        }
        //Reset background color to white
        // this.percentage.css("background", "#FFFFFF");
    }
    setResponseBackground() {
        let bgColor = {
            white: this.responseText == '',
            green: this.responseText == "Correct",
            yellow: this.responseText == "Try again",
            red: this.responseText == "Wrong"
        };
        return bgColor;
    }
    setPercentBackground() {
        let myColor = {
            white: this.percentage == 0,
            red: this.percentage < 70 && this.percentage > 1,
            orange: this.percentage >= 70 && this.percentage < 80,
            yellow: this.percentage >= 80 && this.percentage < 90,
            green: this.percentage >= 90,
        };
        return myColor;
    }
    /**
     * Correct answer.
     */
    correctAnswer() {
        //Signal correct
        this.responseText = "Correct";
        // this.responseText.css("background", "#40FF00");
        if (this.selectedMathFunction != 4) {
            //Set otherAnswer to blank and focus
            this.otherAnswer = '';
            this.setFocus(this.answerIn);
        }
        else {
            //Set divideAnswer to blank and focus
            this.divideAnswer = '';
            this.setFocus(this.divideIn);
            this.remainder = 0;
        }
        //Increment number correct
        this.rightCount += 1;
        this.numberRight = this.rightCount;
        //Compute new percentage
        this.computePercentage();
        //reset
        this.repetition = 1;
        //hide hint button
        this.hintHide = true;
    }
    /**
     * Wrong answer.
     */
    wrongAnswer() {
        if (this.repetition == 2) {
            //Signal wrong answer
            this.responseText = "Wrong";
            // this.responseText]").css("background", "#FF0000");
            if (this.selectedMathFunction != 4) {
                this.otherAnswer = '';
                this.setFocus(this.answerIn);
            }
            else {
                this.divideAnswer = '';
                this.remainder = 0;
                this.setFocus(this.divideIn);
            }
            this.wrongCount += 1;
            this.numberWrong = this.wrongCount;
            this.repetition = 1;
            //hide hint button
            this.hintHide = true;
        }
        else {
            //bump by one
            this.repetition += 1;
            //Signal wrong answer
            this.responseText = 'Try again';
            // this.responseText]").css("background", "#FFFF00");
            //hide hint button
            this.hintHide = false;
        }
        //Compute new percentage
        this.computePercentage();
    }
    /**
     * Compute percentage
     */
    computePercentage() {
        let percent;
        let total;
        if (this.rightCount == 0) {
            percent = 0;
        }
        else {
            total = Number(this.rightCount) + Number(this.wrongCount);
            //Get percent
            percent = Number(this.rightCount) / total;
            //Move decimal 2 positions to make percent
            percent = percent * 100;
            //Get whole number
            percent = Math.round(percent);
        }
        //show percentage
        this.percentage = percent;
        //Set color for score
        if (percent >= 90) {
            //Green
            // this.percentage]").css("background", "#40FF00");
        }
        else if (percent >= 80) {
            //Yellow
            // this.percentage]").css("background", "#FFFF00");
        }
        else if (percent >= 70) {
            //Orange
            // this.percentage]").css("background", "#FF6600");
        }
        else if (percent >= 1) {
            //Red
            // this.percentage]").css("background", "#FF0000");
        }
        else {
            //White
            // this.percentage]").css("background", "#FFFFFF");
        }
    }
    /**
     * Random number generator, a java script function.
     *
     * Uses an input parameter to create the random integer for flexibility.
     */
    getRandomInteger(range) {
        return this.randomNumber = Math.floor(Math.random() * range + 1);
    }
    /**
     * Verify that number passed in is a valid integer.
     *
     * @param a
     */
    verifyNumber(num) {
        if (num >= 0 && num <= 999) {
            return true;
        }
        return false;
    }
    /**
     * Hint - shows the possible correct answers from minimum to maximum.
     */
    getHint() {
        if (this.selectedNumber == null || this.selectedMathFunction == null) {
            alert(this.notStarted);
            return false;
        }
        //Addition
        if (this.selectedMathFunction == 1) {
            this.getAdditionHints();
            //Set focus on answer
            this.setFocus(this.answerIn);
        }
        //Subtraction
        else if (this.selectedMathFunction == 2) {
            this.getSubtractionHints();
            //Set focus on answer
            this.setFocus(this.answerIn);
        }
        //Multiplication
        else if (this.selectedMathFunction == 3) {
            this.getMultiplicationHints();
            //Set focus on answer
            this.setFocus(this.answerIn);
        }
        //Division
        else if (this.selectedMathFunction == 4) {
            this.getDivisionHints();
            //Set focus on answer
            this.setFocus(this.divideIn);
        }
        //Set focus on answer
        this.setFocus(this.answerIn);
    }
    /**
     * Get addition possibilities.
     */
    getAdditionHints() {
        var display = "";
        var newLine = "\n";
        for (var i = 0; i < 12; i++) {
            display += newLine + this.selectedNumber + " + " + Number(i + 1) + " = " +
                (Number(this.selectedNumber) + Number(i + 1));
        }
        alert("Hint: " + display);
    }
    /**
     * Get division possibilities.
     */
    getDivisionHints() {
        var display = "";
        var newLine = "\n";
        for (var i = 0; i < this.selectedNumber; i++) {
            var mod = Number(this.selectedNumber) % Number(i + 1);
            var number = Number(this.selectedNumber) / Number(i + 1);
            number = Math.floor(number);
            display += newLine + this.selectedNumber + " / " + Number(i + 1) + " = " +
                number + ", remainder: " + mod;
        }
        alert("Hint: " + display);
    }
    /**
     * Get multiplication possibilities.
     */
    getMultiplicationHints() {
        var display = "";
        var newLine = "\n";
        for (var i = 0; i < 12; i++) {
            display += newLine + this.selectedNumber + " x " + Number(i + 1) + " = " +
                (Number(this.selectedNumber) * Number(i + 1));
        }
        alert("Hint: " + display);
    }
    /**
     * Get subtraction possibilities.
     */
    getSubtractionHints() {
        var display = "";
        var newLine = "\n";
        for (var i = 0; i < this.selectedNumber; i++) {
            display += newLine + this.selectedNumber + " - " + Number(i + 1) + " = " +
                (Number(this.selectedNumber) - Number(i + 1));
        }
        alert("Hint: " + display);
    }
    /**
     * This is the about information for the Math Tutor.
     */
    getMathAbout() {
        alert("This Elementary Math Tutor helps teach the basic math skills through the use of repetition. "
            + "The tutor uses random \nnumber generation to repetitively challenge the user for answers "
            + "to the selected number and a randomly generated number."
            + "\n\nFollow these steps to get started:"
            + "\n\n\t 1. Select the radio button by the number you want to practice."
            + "\n\t 2. Select the radio button by the math function you want to practice."
            + "\n\t 3. Press the \"Start\" button to begin the training."
            + "\n\t 4. Enter the answer for the generated problem."
            + "\n\nThe tutor will count each time you get the answer correct. You will get 2 chances "
            + "to enter the correct number, if you \nget them both wrong it will count as a wrong answer. "
            + "If you want to change the answer you have entered, use the \nbackspace button on your keyboard "
            + "to erase the answer."
            + "\n\nYou can check your answer by pressing the \"Check Answer\" button or by pressing the \"Enter\" key."
            + "\n\nThe problems are randomly generated so sometimes you might get the same problem 2 or 3 times "
            + "in a row."
            + "\n\nYou can change the number and/or math function at any time by selecting the new values and "
            + "pressing the \"Start\" button again. "
            + "\n\nWhen you select \"Divide\" the remainder is set to \"0\" "
            + " so you only need to change it if the remainder is not zero. "
            + "\n\nThis tool only keeps score for the current session. It shows the number correct, the number "
            + "wrong and the percentage correct."
            + "\n\nNeed help with the answer?  Press the \"Hint\" button for help anytime you can see it. "
            + "The \"Hint\" button will help you \nlearn the right answers.  But, when you use hints, study them so "
            + "you don't have to look at hints so often."
            + "\n\nIf you have suggestions for enhancements or encounter errors, send an email "
            + "to keelerpl@gmail.com and I'll look into it. ");
        return true;
    }
}
MathComponent.ɵfac = function MathComponent_Factory(t) { return new (t || MathComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID)); };
MathComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathComponent, selectors: [["app-math"]], viewQuery: function MathComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.answerIn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divideIn = _t.first);
    } }, decls: 196, vars: 15, consts: [[2, "background", "#f4f4f4"], ["bgcolor", "#98edb4", "border", "0", "width", "100%", "cellpadding", "10"], ["align", "center"], ["border", "0", "width", "100%", "cellpadding", "10"], ["width", "15%"], [3, "click"], ["width", "55%"], ["href", "mailto:keelerpl@gmail.com"], ["width", "30%"], ["border", "0", "width", "100%"], ["width", "40%"], ["id", "numberRadio"], ["width", "20%"], ["type", "radio", "name", "numberRadio", "value", "1", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "2", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "3", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "4", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "5", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "6", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "7", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "8", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "9", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "10", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "11", 3, "change"], ["type", "radio", "name", "numberRadio", "value", "12", 3, "change"], ["width", "60%"], ["type", "radio", "name", "functionRadio", "value", "1", 3, "change"], ["type", "radio", "name", "functionRadio", "value", "2", 3, "change"], ["type", "radio", "name", "functionRadio", "value", "3", 3, "change"], ["type", "radio", "name", "functionRadio", "value", "4", 3, "change"], ["width", "25%"], ["width", "75%"], ["type", "text", "readonly", "readonly", 2, "font-size", "2em", "text-align", "center", "width", "1.5em", "height", "1.5em", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "randomNumber", "readonly", "readonly", 2, "font-size", "2em", "text-align", "center", "width", "1.5em", "height", "1.5em", 3, "ngModel", "ngModelChange"], ["width", "15%", "readonly", "readonly", 2, "font-size", "3em", "text-align", "center", "width", "1.5em", "height", "1.5em"], ["id", "otherDiv", 3, "hidden"], [2, "font-size", "1em"], [2, "font-size", "2em", "-wap-input-format", "N", "text-align", "center", "; width", "3.5em", "height", "1.5em", 3, "ngModel", "ngModelChange", "keyup.enter"], ["answerInput", ""], ["id", "divideDiv", 3, "hidden"], [2, "font-size", "2em", "-wap-input-format", "N", "text-align", "center", "; width", "2.5em", "height", "1.5em", 3, "ngModel", "ngModelChange", "keyup.enter"], ["divideInput", ""], ["type", "text", 2, "font-size", "2em", "-wap-input-format", "N", "text-align", "center", "; width", "2em", "height", "1.5em", 3, "ngModel", "ngModelChange", "keyup.enter"], ["width", "50%"], ["readonly", "readonly", 2, "font-size", "1em", "text-align", "center", "vertical-align", "9px", "width", "4.4em", "height", "1em", 3, "ngClass", "ngModel", "ngModelChange"], ["id", "hintDiv", 3, "hidden"], [1, "yellow", 3, "click"], ["type", "text", 2, "font-size", "2em", "-wap-input-format", "N", "text-align", "center", "; width", "1.5em", "height", "1.5em", 3, "ngModel", "ngModelChange"], [2, "font-size", "2em", "-wap-input-format", "N", "text-align", "center", "; width", "2em", "height", "1.5em", 3, "ngClass", "ngModel", "ngModelChange"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "encrypted", "value", "-----BEGIN PKCS7-----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-----END PKCS7-----"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "alt", "PayPal - The safer, easier way to pay online!"], ["alt", "", "border", "0", "src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"]], template: function MathComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Elementary Math Tutor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathComponent_Template_button_click_10_listener() { return ctx.getMathAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email errors, comments or suggestions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keelerpl@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Pick number to learn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_31_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_34_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_37_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_40_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_44_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_47_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_50_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_53_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_57_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_60_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_63_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_66_listener($event) { return ctx.numberRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Math function:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Pick math function.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_78_listener($event) { return ctx.functionRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_81_listener($event) { return ctx.functionRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Subtract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_84_listener($event) { return ctx.functionRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Multiply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MathComponent_Template_input_change_87_listener($event) { return ctx.functionRadioHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Divide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathComponent_Template_button_click_94_listener() { return ctx.startTutor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Start Tutor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " The problem:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_105_listener($event) { return ctx.selectedNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_107_listener($event) { return ctx.operator = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_109_listener($event) { return ctx.randomNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_121_listener($event) { return ctx.otherAnswer = $event; })("keyup.enter", function MathComponent_Template_input_keyup_enter_121_listener() { return ctx.checkAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_131_listener($event) { return ctx.divideAnswer = $event; })("keyup.enter", function MathComponent_Template_input_keyup_enter_131_listener() { return ctx.checkAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Remainder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_138_listener($event) { return ctx.remainder = $event; })("keyup.enter", function MathComponent_Template_input_keyup_enter_138_listener() { return ctx.checkAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_143_listener($event) { return ctx.responseText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathComponent_Template_button_click_146_listener() { return ctx.checkAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Check Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathComponent_Template_button_click_153_listener() { return ctx.getHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Score:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Wrong:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_168_listener($event) { return ctx.numberWrong = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Right:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_174_listener($event) { return ctx.numberRight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Percent:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MathComponent_Template_input_ngModelChange_181_listener($event) { return ctx.percentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathComponent_Template_button_click_183_listener() { return ctx.resetScore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Reset Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Donations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.randomNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.otherHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otherAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.divideHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.divideAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remainder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setResponseBackground())("ngModel", ctx.responseText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hintHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numberWrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numberRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setPercentBackground())("ngModel", ctx.percentage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["body[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n.white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #98edb4;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.orange[_ngcontent-%COMP%] {\n  background-color: orange;\n}\n\n.purple[_ngcontent-%COMP%] {\n  background-color: mediumpurple;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxjQUFBO0FBRU47O0FBQUE7RUFBVSx1QkFBQTtBQUlWOztBQUhBO0VBQVUseUJBQUE7QUFPVjs7QUFOQTtFQUFVLHdCQUFBO0FBVVY7O0FBVEE7RUFBVSx3QkFBQTtBQWFWOztBQVpBO0VBQVUsOEJBQUE7QUFnQlY7O0FBZkE7RUFBVSxxQkFBQTtBQW1CVjs7QUFqQkE7RUFFRSxxQkFBQTtFQUNBLFVBQUE7RUFBVyxTQUFBO0FBb0JiIiwiZmlsZSI6Im1hdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LXNpemU6IDgwJTt9XHJcblxyXG4ud2hpdGUgIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgfVxyXG4uZ3JlZW4gIHsgYmFja2dyb3VuZC1jb2xvcjogIzk4ZWRiNCB9XHJcbi55ZWxsb3cgeyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgfVxyXG4ub3JhbmdlIHsgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlIH1cclxuLnB1cnBsZSB7IGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZX1cclxuLnJlZCAgICB7IGJhY2tncm91bmQtY29sb3I6IHJlZCB9XHJcblxyXG51bFxyXG57XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6MDsgbWFyZ2luOjA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8837:
/*!**************************************************!*\
  !*** ./src/app/passwords/passwords.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordsComponent": () => (/* binding */ PasswordsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class PasswordsComponent {
    constructor() {
        /**
         * The range of characters to make up the passwords.
         */
        this.passwordImage = [
            // 16 chars - Hex
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "A", "B", "C", "D", "E", "F",
            // 62 chars - all but special characters
            "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
            "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            // 74 chars - all.
            "!", "@", "#", "$", "%", "^", "*", "(", ")", "_", "+", "="
        ];
        this.pwdLength = 16;
        this.excludeChars = '';
        this.hexOnly = '';
        this.hexUpperLower = '';
        this.hexAllSpecial = '';
    }
    ngOnInit() {
    }
    getPasswords() {
        let pwdLen = Number(this.pwdLength);
        let range = 0;
        let pwds = ['', '', '', ''];
        //Loop and generate a password for each depth level.
        for (let n = 0; n < 3; n++) {
            switch (n) {
                case 0:
                    range = 15;
                    break;
                case 1:
                    range = 61;
                    break;
                default:
                    range = 73;
            }
            let buffer = "";
            for (let i = 0; buffer.length < pwdLen; i++) {
                let karacter = this.passwordImage[this.getRandomInteger(range)];
                if (this.excludeChars.includes(karacter)) {
                    continue;
                }
                buffer += karacter;
            }
            pwds[n] = buffer;
        }
        this.setPassowrdsOnPage(pwds);
    }
    /**
     * Insure password length is numeric.
     */
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        return pattern.test(event.key);
    }
    /**
     * Random number generator.
     */
    getRandomInteger(range) {
        return Math.floor(Math.random() * range + 1);
    }
    /**
     * Load the passwords onto the page forms.
     */
    setPassowrdsOnPage(pwds) {
        this.hexOnly = pwds[0];
        this.hexUpperLower = pwds[1];
        this.hexAllSpecial = pwds[2];
    }
    /*
   * This is the user information for Password Generator.
   */
    getPasswordAbout() {
        alert("This Password Generator creates 3 levels of password strength "
            + "\n   which are defined in the table under the \"Generate\" button. "
            + "\n"
            + "\n  First - enter the password length you want. "
            + "\n     The default is 16, you can change it to any length less "
            + "\n     than 100. "
            + "\n"
            + "\n  Next - Add in any characters you do not want in the passwords. "
            + "\n     This space is used if some of the special characters are not "
            + "\n     allowed in passwords for the system you are logging into."
            + "\n"
            + "\n  Next - Select the \"Generate\" button to generate the passwords, "
            + "\n     you can select this button as many times as you want until "
            + "\n     you get a password you like. "
            + "\n"
            + "\n  Finally - Select the password you want and paste it into your "
            + "\n     systems new password settings. "
            + "\n"
            + "\n  Have fun! ");
        return true;
    }
}
PasswordsComponent.ɵfac = function PasswordsComponent_Factory(t) { return new (t || PasswordsComponent)(); };
PasswordsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordsComponent, selectors: [["app-passwords"]], decls: 93, vars: 5, consts: [[2, "background", "#f4f4f4"], ["bgcolor", "#98edb4", "border", "0", "width", "100%", "cellpadding", "10"], ["align", "center"], ["border", "0", "width", "100%", "cellpadding", "10"], ["width", "15%"], [3, "click"], ["width", "55%"], ["href", "mailto:keelerpl@gmail.com"], ["width", "30%"], ["border", "0", "width", "100%"], ["width", "25%"], ["type", "text", "maxlength", "2", "size", "2", 3, "ngModel", "ngModelChange", "keypress"], ["type", "text", "maxlength", "12", "size", "12", "value", "", 3, "ngModel", "ngModelChange"], ["width", "75%"], ["type", "text", "size", "45", 3, "ngModel"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "encrypted", "value", "-----BEGIN PKCS7-----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-----END PKCS7-----"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "alt", "PayPal - The safer, easier way to pay online!"], ["alt", "", "border", "0", "src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"]], template: function PasswordsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Random Password Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordsComponent_Template_button_click_10_listener() { return ctx.getPasswordAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email errors, comments or suggestions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keelerpl@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Password Length:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Enter desired password length:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordsComponent_Template_input_ngModelChange_31_listener($event) { return ctx.pwdLength = $event; })("keypress", function PasswordsComponent_Template_input_keypress_31_listener($event) { return ctx.numericOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Special Characters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " These 12 special characters are used:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "! @ # $ % ^ * ( ) _ + =");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " You can enter characters to EXCLUDE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordsComponent_Template_input_ngModelChange_50_listener($event) { return ctx.excludeChars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordsComponent_Template_button_click_55_listener() { return ctx.getPasswords(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Generate Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Select password with desired strength:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "All numbers and upper A-F (Hex):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "All numbers with upper and lower A-Z:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "All numbers, letters and special characters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Donations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pwdLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.excludeChars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexUpperLower);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hexAllSpecial);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7003:
/*!******************************************!*\
  !*** ./src/app/poker/poker.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokerComponent": () => (/* binding */ PokerComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 2604);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);










const _c0 = ["playerTextEl"];
const _c1 = ["winnerTextEl"];
function PokerComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_td_71_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PokerComponent_td_71_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r24 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r27.selection.toggle(element_r24) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(element_r24))("aria-label", ctx_r2.checkboxLabel(element_r24));
} }
function PokerComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Player Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.name, " ");
} }
function PokerComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Buy In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r31.buyIn, "1.2-2"), " ");
} }
function PokerComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bounty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r33.bounty, "1.2-2"), " ");
} }
function PokerComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r35.fee, "1.2-2"), " ");
} }
function PokerComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Man");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r37.lastMan, "1.2-2"), " ");
} }
function PokerComponent_th_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r39.addOn, "1.2-2"), " ");
} }
function PokerComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 67);
} }
function PokerComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_tr_91_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const row_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.selection.toggle(row_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_th_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Winner position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r44.position, " ");
} }
function PokerComponent_th_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Winner Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokerComponent_td_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r46.amount, "1.2-2"), " ");
} }
function PokerComponent_tr_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 67);
} }
function PokerComponent_tr_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 69);
} }
class PokerComponent {
    // private platformId: object;
    constructor() {
        this.playerData = [
        // {name: 'Pat', buyIn: 10.00, bounty: 0.00, fee: 0.00, lastMan: 0.00, addOn: 5.00},
        ];
        this.winnerData = [];
        this.displayedColumns = ['select', 'name', 'buyIn', 'bounty', 'fee', 'lastMan', 'addOn'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        this.winnerColumns = ['position', 'amount'];
    }
    ngOnInit() {
        this.loadData();
        this.dataSource.sort = this.sort;
        this.winnerData = [];
        this.setFocus();
    }
    loadData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
        if (this.playerData.length === 0) {
            this.playersHide = true;
        }
        if (this.winnerData.length === 0) {
            this.winnersHide = true;
        }
    }
    setAmountsToFixed() {
        const buyIn = parseFloat(this.buyInAmount);
        const bounty = parseFloat(this.bountyAmount);
        const fee = parseFloat(this.feeAmount);
        const lastMan = parseFloat(this.lastManAmount);
        const addOn = parseFloat(this.addOnAmount);
        this.buyInAmount = (buyIn ? buyIn.toFixed(2) : '0.00');
        this.bountyAmount = (bounty ? bounty.toFixed(2) : '0.00');
        this.feeAmount = (fee ? fee.toFixed(2) : '0.00');
        this.lastManAmount = (lastMan ? lastMan.toFixed(2) : '0.00');
        this.addOnAmount = (addOn ? addOn.toFixed(2) : '0.00');
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = !!this.dataSource && this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        // alert(row.name);
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
    }
    /**
     * Set focus on the desired input field.
     */
    setFocus() {
        setTimeout(() => { this.playerText.nativeElement.focus(); }, 500);
    }
    /**
     * Set focus on the desired input field.
     */
    setWinnerFocus() {
        setTimeout(() => { this.winnerText.nativeElement.focus(); }, 500);
    }
    savePlayer() {
        this.playersHide = false;
        this.setAmountsToFixed();
        this.dataSource.data.push({ name: this.playerName, buyIn: this.buyInAmount, bounty: this.bountyAmount,
            fee: this.feeAmount, lastMan: this.lastManAmount, addOn: '0.00' });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
        this.dataSource.sort = this.sort;
        this.playerName = '';
        this.computeTotals();
        this.setFocus();
    }
    // Accumulate table columns
    computeTotals() {
        let playerTotals = 0;
        let totalBuyIn = 0;
        let totalBounty = 0;
        let totalFee = 0;
        let totalLastMan = 0;
        let totalAddOn = 0;
        this.dataSource.data.forEach(item => {
            playerTotals += 1;
            totalBuyIn += parseFloat(item.buyIn);
            totalBounty += parseFloat(item.bounty);
            totalFee += parseFloat(item.fee);
            totalLastMan += parseFloat(item.lastMan);
            totalAddOn += parseFloat(item.addOn);
        });
        this.totalPlayers = playerTotals;
        this.buyInTotal = totalBuyIn.toFixed(2);
        this.bountyTotal = totalBounty.toFixed(2);
        this.feeTotal = totalFee.toFixed(2);
        this.lastManTotal = totalLastMan.toFixed(2);
        this.addOnTotal = totalAddOn.toFixed(2);
    }
    selectAll() {
        this.dataSource.data.forEach(r => this.selection.select(r));
    }
    unSelectAll() {
        this.dataSource.data.forEach(r => this.selection.deselect(r));
    }
    addRebuy() {
        this.selection.selected.forEach(item => {
            item.buyIn = (parseFloat(item.buyIn) + parseFloat(this.buyInAmount)).toFixed(2);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
            this.dataSource.sort = this.sort;
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        this.computeTotals();
    }
    addAddOn() {
        this.selection.selected.forEach(item => {
            if (parseFloat(item.addOn) >= parseFloat(this.addOnAmount)) {
                alert('Add On Rejected - ' + item.name + ' has already done an Add On.');
            }
            else {
                item.addOn = parseFloat(this.addOnAmount).toFixed(2);
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
            this.dataSource.sort = this.sort;
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        this.computeTotals();
    }
    minusRebuy() {
        this.selection.selected.forEach(item => {
            if (item.buyIn <= this.buyInAmount) {
                alert('Minus Rebuy Rejected - ' + item.name + ' has not done a ReBuy!');
            }
            else {
                item.buyIn = (parseFloat(item.buyIn) - parseFloat(this.buyInAmount)).toFixed(2);
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
            this.dataSource.sort = this.sort;
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        this.computeTotals();
    }
    minusAddOn() {
        this.selection.selected.forEach(item => {
            if (parseFloat(item.addOn) < parseFloat(this.addOnAmount)) {
                alert('Minus AddOn Rejected - ' + item.name + ' has not done an AddOn!');
            }
            else {
                item.addOn = (parseFloat(item.addOn) - parseFloat(this.addOnAmount)).toFixed(2);
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
            this.dataSource.sort = this.sort;
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        this.computeTotals();
    }
    deletePlayer() {
        this.selection.selected.forEach(item => {
            const index = this.playerData.findIndex(d => d === item);
            this.playerData.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.playerData);
            this.dataSource.sort = this.sort;
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.SelectionModel(true, []);
        if (this.playerData.length < 1) {
            this.playersHide = true;
        }
        else {
            this.computeTotals();
        }
    }
    //Compute chop amount
    chopBtn() {
        let players = this.chopPlayers;
        let buyInAmount = this.buyInTotal;
        let addOnAmount = this.addOnTotal;
        let total = parseFloat(buyInAmount) + parseFloat(addOnAmount);
        let each = total / players;
        this.chopAmount = each.toFixed(2);
    }
    //Compute BuyIn AddOn and LastMan amount
    chopAllBtn() {
        let players = this.chopPlayers;
        let buyInAmount = this.buyInTotal;
        let addOnAmount = this.addOnTotal;
        let lastManAmount = this.lastManTotal;
        let total = parseFloat(buyInAmount) +
            parseFloat(addOnAmount) +
            parseFloat(lastManAmount);
        let each = total / players;
        this.chopAmount = each.toFixed(2);
    }
    //Compute last man chop amount
    chopLastManBtn() {
        let players = this.lastManPlayers;
        if (players > 0) {
            let lastManAmount = this.lastManTotal;
            let total = parseFloat(lastManAmount);
            let each = total / players;
            this.lastManChopAmount = each.toFixed(2);
        }
        else {
            this.lastManChopAmount = (0.00.toFixed(2));
        }
    }
    //Compute winner amounts
    computeWinnerBtn() {
        this.winnerData = [];
        let buyInTotal = this.buyInTotal;
        let addOnTotal = this.addOnTotal;
        let total = Number(buyInTotal) + Number(addOnTotal);
        let each = Number(total / 100);
        this.showWinnerTable(each);
    }
    // Compute Winners + LastMan amounts
    computeWinnerLastManBtn() {
        this.winnerData = [];
        let buyInTotal = this.buyInTotal;
        let addOnTotal = this.addOnTotal;
        let lastManTotal = this.lastManTotal;
        let total = Number(buyInTotal) + Number(addOnTotal) + Number(lastManTotal);
        let each = Number(total / 100);
        this.showWinnerTable(each);
    }
    // Show winner table
    showWinnerTable(each) {
        let str = this.percentages.replace(/\D+/, ' ').trim();
        if (str == null || str == '' || str.split(/\D+/).length == 0) {
            alert('You must add percentages for each winner, i.e. for 3 winners 50 33 17.');
            this.winnersHide = true;
            this.percentages = '';
            this.setWinnerFocus();
        }
        else {
            let str = this.percentages.replace(/\D+/, ' ').trim();
            let percentArray = str.split(/\D+/);
            let count = percentArray.length;
            for (let i = 0; i < count; i++) {
                this.winnerData.push({ position: i + 1, amount: (Number(percentArray[i]) * each).toFixed(2) });
            }
            this.winnersHide = false;
        }
    }
    /**
     * This is user information for the Poker app.
     */
    getPokerAbout() {
        alert("This Poker app was written to help keep up with the numbers for poker tournaments. "
            + "It is generic and will be useful for most tournaments, hopefully yours."
            + "\n\n\tFollow these steps to get started:"
            + "\n\t1. The cursor will be focused on the name textbox, type in the first player\'s name."
            + "\n\t2. Tab to each amount box and enter the amount for that column, or leave at 0.00."
            + "\n\t3. Tab one more time to the \"Save Player\" button and hit enter, the first player is saved."
            + "\n\t4. Now for each entrant type in the players name, change amounts if needed, and hit enter. "
            + "The amounts you entered last will be the defaults for the next player. "
            + "\n\n\tThe app will keep totals of rebuys and addons as you play by using the buttons for rebuys and addons."
            + "\n\tPlay around with the Chop and Winner sections to view the different results "
            + "depending on the default amounts, totals and number of chops or winners. "
            + "\n\tFor winners, add rows and enter the percentage for each winning position. "
            + "The percentages should be entered without decimals, i.e. 50, 33, 17 or 40, 30, 20, 10, etc, totaling 100."
            + "\n\nHave Fun!");
        return true;
    }
}
PokerComponent.ɵfac = function PokerComponent_Factory(t) { return new (t || PokerComponent)(); };
PokerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokerComponent, selectors: [["app-poker"]], viewQuery: function PokerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerText = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.winnerText = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 223, vars: 25, consts: [[2, "background", "#f4f4f4"], ["bgcolor", "#98edb4", "border", "0", "width", "100%", "cellpadding", "10"], ["align", "center"], ["border", "0", "width", "100%", "cellpadding", "10"], ["width", "15%"], [3, "click"], ["width", "55%"], ["href", "mailto:keelerpl@gmail.com"], ["width", "30%"], ["align", "left", "width", "50%", 1, "f-17"], [1, "player-tip"], [1, "full-width-table"], ["align", "left"], ["size", "12", "width", "10", 3, "ngModel", "ngModelChange", "keyup.enter"], ["playerTextEl", ""], ["size", "6", 3, "ngModel", "ngModelChange"], [1, "ml-3", 3, "click"], [3, "hidden"], ["mat-table", "", "matSort", "", "border", "0", 1, "table-width-80", "mt-10", 3, "dataSource"], ["matColumnDef", "select"], ["class", "w-80 f-15", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "w-80 f-15", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "f-15", 4, "matCellDef"], ["matColumnDef", "buyIn"], ["matColumnDef", "bounty"], ["matColumnDef", "fee"], ["matColumnDef", "lastMan"], ["matColumnDef", "addOn"], ["mat-header-row", "", "style", "background-color:lightgray;", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "row", "push-right"], ["type", "button", "value", "Select All", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "value", "Unselect All", 1, "btn", "btn-danger", "ml-5", 3, "click"], ["type", "button", "value", "+ Rebuy", 1, "btn", "btn-danger", "ml-15", 3, "click"], ["type", "button", "value", "+ AddOn", 1, "btn", "btn-danger", "ml-5", 3, "click"], [1, "mt-5", "ml-10"], ["type", "button", "value", "Delete Player", 1, "btn", "btn-danger", "ml-5", "mt-5", 3, "click"], ["type", "button", "value", "- Rebuy", 1, "btn", "btn-danger", "ml-5", "mt-5", 3, "click"], ["type", "button", "value", "- AddOn", 1, "btn", "btn-danger", "ml-8", "mt-10", 3, "click"], ["align", "left", 1, "f-15"], ["size", "7", "maxwidth", "10", "type", "text", 3, "ngModel", "ngModelChange"], ["align", "left", "width", "50%"], ["border", "0", "width", "100%", "cellpadding", "5"], ["align", "left", "width", "25%"], ["align", "left", "width", "20%"], ["align", "left", "width", "30%"], ["size", "7", "maxwidth", "10", 3, "ngModel", "ngModelChange"], ["align", "left", "width", "60%"], ["type", "text", 3, "ngModel", "ngModelChange"], ["winnerTextEl", ""], ["type", "button", 1, "ml-3", 3, "click"], ["mat-table", "", "matSort", "", "border", "0", 1, "table-width-93", "mt-10", 3, "dataSource"], ["matColumnDef", "position"], ["matColumnDef", "amount"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "encrypted", "value", "-----BEGIN PKCS7-----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-----END PKCS7-----"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "alt", "PayPal - The safer, easier way to pay online!"], ["alt", "", "border", "0", "src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"], ["mat-header-cell", "", 1, "w-80", "f-15"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-cell", "", "mat-sort-header", "", 1, "w-80", "f-15"], ["mat-cell", "", 1, "f-15"], ["mat-header-row", "", 2, "background-color", "lightgray"], ["mat-row", "", 3, "click"], ["mat-row", ""]], template: function PokerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Poker Tournament Worksheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_10_listener() { return ctx.getPokerAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email errors, comments or suggestions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keelerpl@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter first player name, set amounts for game, and click 'Save Player'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 \u00A0 After first player:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Enter next player name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 \u00A0 if amounts are the same, hit \"Enter\",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 \u00A0 if not the same, enter changes and click 'Save Player'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Repeat for each additional player.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Player Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "BuyIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bounty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Last Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "AddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_51_listener($event) { return ctx.playerName = $event; })("keyup.enter", function PokerComponent_Template_input_keyup_enter_51_listener() { return ctx.savePlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_54_listener($event) { return ctx.buyInAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_56_listener($event) { return ctx.bountyAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_58_listener($event) { return ctx.feeAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_60_listener($event) { return ctx.lastManAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_62_listener($event) { return ctx.addOnAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_63_listener() { return ctx.savePlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Save Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, PokerComponent_th_70_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PokerComponent_td_71_Template, 2, 2, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, PokerComponent_th_73_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, PokerComponent_td_74_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, PokerComponent_th_76_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, PokerComponent_td_77_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PokerComponent_th_79_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PokerComponent_td_80_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, PokerComponent_th_82_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PokerComponent_td_83_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, PokerComponent_th_85_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, PokerComponent_td_86_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, PokerComponent_th_88_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, PokerComponent_td_89_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, PokerComponent_tr_90_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, PokerComponent_tr_91_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " These buttons are all about the checkboxes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_95_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_96_listener() { return ctx.unSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_97_listener() { return ctx.addRebuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_98_listener() { return ctx.addAddOn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Mistakes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_102_listener() { return ctx.deletePlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_103_listener() { return ctx.minusRebuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_input_click_104_listener() { return ctx.minusAddOn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Running Totals:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "BuyIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Bounty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Last Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "AddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_127_listener($event) { return ctx.totalPlayers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_129_listener($event) { return ctx.buyInTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_131_listener($event) { return ctx.bountyTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_133_listener($event) { return ctx.feeTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_135_listener($event) { return ctx.lastManTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_137_listener($event) { return ctx.addOnTotal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Chops:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Player Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Chop Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Last Man Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Chop Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_155_listener($event) { return ctx.chopPlayers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_157_listener($event) { return ctx.chopAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_159_listener($event) { return ctx.lastManPlayers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_161_listener($event) { return ctx.lastManChopAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_169_listener() { return ctx.chopBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "BuyIn & AddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_172_listener() { return ctx.chopAllBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "+ Last Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_175_listener() { return ctx.chopLastManBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Last Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Winners:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Enter percentages, seperated by spaces, commas, dashes, whatever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokerComponent_Template_input_ngModelChange_191_listener($event) { return ctx.percentages = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Compute: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_195_listener() { return ctx.computeWinnerBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "BuyIn & AddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_197_listener() { return ctx.computeWinnerLastManBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "+ Last Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "table", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](202, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, PokerComponent_th_203_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, PokerComponent_td_204_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](205, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, PokerComponent_th_206_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, PokerComponent_td_207_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, PokerComponent_tr_208_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, PokerComponent_tr_209_Template, 1, 0, "tr", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Donations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "form", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buyInAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bountyAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.feeAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastManAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addOnAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.playersHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buyInTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bountyTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.feeTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastManTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addOnTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chopPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chopAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastManPlayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastManChopAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.percentages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.winnersHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.winnerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.winnerColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.winnerColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: [".container[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: auto;\n  padding: 10px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n}\n\n.al[_ngcontent-%COMP%] {\n  text-align-last: auto;\n}\n\n.ml-3[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n\n.ml-5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.ml-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.ml-8[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.ml-15[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.mr-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.w-80[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.w-150[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.f-10[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.f-15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.f-17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.table-width-80[_ngcontent-%COMP%] {\n  width: 93%;\n}\n\n.full-width-table[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.player-tip[_ngcontent-%COMP%] {\n  position: relative;\n  top: 18px;\n  right: 0px;\n  text-align: center;\n  background-color: #BCDBEA;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  font-size: 14px;\n  line-height: 26px;\n  cursor: default;\n}\n\n.player-tip[_ngcontent-%COMP%]:before {\n  content: \"?\";\n  font-weight: bold;\n  color: #fff;\n}\n\n.player-tip[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  display: block;\n  transform-origin: 100% 0%;\n  animation: fadeIn 0.3s ease-in-out;\n}\n\n.player-tip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  display: none;\n  text-align: left;\n  background-color: #5aa364;\n  padding: 20px;\n  width: 400px;\n  position: static;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  right: -4px;\n  color: #FFF;\n  font-size: 13px;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFHQSxrQ0FBQTtBQUFGOztBQUlBO0VBQWtCLGdCQUFBO0VBQ2hCLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InBva2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbHtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYWwge1xyXG4gIHRleHQtYWxpZ24tbGFzdDogYXV0bztcclxufVxyXG5cclxuLm1sLTMge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5tbC01IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ubWwtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWwtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1sLTE1IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm10LTMge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm10LTUge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLm10LTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubXItNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5tci0xMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udy04MCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4udy0xNTAge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmYtMTAge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmYtMTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmYtMTcge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRhYmxlLXdpZHRoLTgwIHtcclxuICB3aWR0aDogOTMlO1xyXG59XHJcbi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogOTglO1xyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5wbGF5ZXItdGlwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE4cHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JDREJFQTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5wbGF5ZXItdGlwOmJlZm9yZXtcclxuICBjb250ZW50Oic/JztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG4ucGxheWVyLXRpcDpob3ZlciBwe1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcblxyXG4ucGxheWVyLXRpcCBweyAgICAvKiBUaGUgdG9vbHRpcCAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFhMzY0O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICByaWdodDogLTRweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3610:
/*!**************************************!*\
  !*** ./src/app/sql/sql.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlComponent": () => (/* binding */ SqlComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);




const _c0 = ["indentCheckBox"];
const _c1 = ["addQuotesReformat"];
const _c2 = ["addQuotesOnly"];
const _c3 = ["removeQuotesReformat"];
const _c4 = ["removeQuotesOnly"];
class SqlComponent {
    constructor(http) {
        this.http = http;
        this.title = 'PatsWebtools';
        this.indentAmount = '2';
        this.styleRadio = 'block';
    }
    ngOnInit() {
        this.http.get("/message/").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(result => console.log("Message from server: ", result)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => this.message = result.message)).subscribe();
    }
    // public getHeaders(): HttpHeaders {
    //   const headers = new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Allow-Origin': `http://localhost/ReformatSql`
    //   });
    //   return headers;
    // }
    checkIndentAmountEnabled() {
        if (this.indentCheckBox.nativeElement.checked) {
            // Add code here
        }
    }
    setAddQuotesReformat() {
        this.addQuotesOnly.nativeElement.checked = false;
        this.removeQuotesReformat.nativeElement.checked = false;
        this.removeQuotesOnly.nativeElement.checked = false;
    }
    setAddQuotesOnly() {
        this.addQuotesReformat.nativeElement.checked = false;
        this.removeQuotesReformat.nativeElement.checked = false;
        this.removeQuotesOnly.nativeElement.checked = false;
    }
    setRemoveQuotesReformat() {
        this.addQuotesOnly.nativeElement.checked = false;
        this.addQuotesReformat.nativeElement.checked = false;
        this.removeQuotesOnly.nativeElement.checked = false;
    }
    setRemoveQuotesOnly() {
        this.addQuotesOnly.nativeElement.checked = false;
        this.addQuotesReformat.nativeElement.checked = false;
        this.removeQuotesReformat.nativeElement.checked = false;
    }
    getFormattedSql() {
        let testString = "select this as dis, that as dat where you != me";
        let parameters = {
            inputSQL: testString,
            indent: true,
            indentAmount: '2',
            selectedStyle: 'block',
            addQuotesAndReformat: true,
            addQuotesOnly: false,
            removeQuotesAndReformat: false,
            removeQuotesOnly: false
        };
        this.http.post('http://localhost/angular/message', { parameters }).subscribe(data => {
            this.outputSQL = data.toString();
            console.log('response: ' + this.outputSQL);
        });
    }
    /*
     * This is the about information for the SQL formatter.
     */
    getSqlAbout() {
        alert("This SQL formatter will format most generic sql commands but may not include all the "
            + "most common commands at this point."
            + "\n\nThis formatter is not a validator, it will format generic sql statements that are "
            + "properly structured."
            + "\n\nThis formatter will format a single line command: \n\t select this as "
            + "that from something where you = me\nor a multi line command: \n\t select this as that"
            + "\n\t from something \n\t where you = me"
            + "\n\nThe \"Indent options\" are self evident: \n\t indent or not. \n\t indent amount. "
            + "\n\nThe Java String \"Quote\" options can be used when you need to paste the results into a Java "
            + "program as a String:"
            + "\n\t The first option will format the input sql and add quotes for use as a Java String. "
            + "\n\t The second option will quote any data you paste into the input box, without "
            + "formatting. "
            + "\n\nThe Java String \"Remove Quote\" options can be used when you need to cut a string from a "
            + "java program and \nremove the quotes for use elsewhere, as follows: "
            + "\n\t The first option will remove quotes and reformat the input sql. "
            + "\n\t The second option will remove quotes only (any input), without formatting. "
            + "\n\n**NOTE - For the remove quotes to work please note things like:"
            + "\n\t For java Strings on multiple lines the \" and + should be on the same line."
            + "\n\t All java Strings end with a semi-colon, so the last line should end with \" and ;."
            + "\n\nIf you have suggestions for enhancements or encounter errors send an email "
            + "to keelerpl@gmail.com and I'll look into it. ");
        // return true;
    }
}
SqlComponent.ɵfac = function SqlComponent_Factory(t) { return new (t || SqlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
SqlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SqlComponent, selectors: [["app-sql"]], viewQuery: function SqlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.indentCheckBox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addQuotesReformat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addQuotesOnly = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.removeQuotesReformat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.removeQuotesOnly = _t.first);
    } }, decls: 104, vars: 5, consts: [[2, "background", "#f4f4f4"], ["bgcolor", "#98edb4", "border", "0", "width", "100%", "cellpadding", "10"], ["align", "center"], ["border", "0", "width", "100%", "cellpadding", "10"], ["width", "15%"], [3, "click"], ["width", "55%"], ["href", "mailto:keelerpl@gmail.com"], ["width", "30%"], ["width", "25%"], [2, "color", "red"], ["width", "75%"], ["rows", "7", "cols", "60", "wrap", "off", 3, "ngModel", "ngModelChange"], ["width", "25%", "align", "right"], ["type", "radio", "value", "block", "checked", "", 3, "ngModel", "ngModelChange"], ["width", "50%"], ["type", "radio", "value", "expanded", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "checked", ""], ["indentCheckBox", ""], ["type", "text", "maxlength", "1", "size", "1", 3, "ngModel", "ngModelChange"], ["align", "right"], ["type", "checkbox", 3, "click"], ["addQuotesReformat", ""], ["type", "checkbox", "name", "addQuotesOnlyCheckBox", "id", "addQuotesOnlyCheckBox", 3, "click"], ["addQuotesOnly", ""], ["removeQuotesReformat", ""], ["removeQuotesOnly", ""], ["type", "button", "name", "Submit", "value", "Process", 3, "click"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "encrypted", "value", "-----BEGIN PKCS7-----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-----END PKCS7-----"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "alt", "PayPal - The safer, easier way to pay online!"], ["alt", "", "border", "0", "src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"]], template: function SqlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "SQL Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_button_click_10_listener() { return ctx.getSqlAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "User Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Email errors, comments or suggestions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "keelerpl@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Paste your SQL in the text box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "**");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Embedded comments will be removed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SqlComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx.inputSQL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Output options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Select format style: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SqlComponent_Template_input_ngModelChange_40_listener($event) { return ctx.styleRadio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Block style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SqlComponent_Template_input_ngModelChange_44_listener($event) { return ctx.styleRadio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Expanded style ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Indent options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Indent elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Indent amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SqlComponent_Template_input_ngModelChange_56_listener($event) { return ctx.indentAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Java String quote options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_input_click_61_listener() { return ctx.setAddQuotesReformat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Add quotes and Re-format. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_input_click_65_listener() { return ctx.setAddQuotesOnly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Add quotes only (any input). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "input", 21, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_input_click_71_listener() { return ctx.setRemoveQuotesReformat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Remove quotes and Re-format. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 21, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_input_click_75_listener() { return ctx.setRemoveQuotesOnly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Remove quotes only (any input). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SqlComponent_Template_input_click_82_listener() { return ctx.getFormattedSql(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " Get your formatted SQL here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " Formatted SQL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SqlComponent_Template_textarea_ngModelChange_91_listener($event) { return ctx.outputSQL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, " Donations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inputSQL);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.styleRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.styleRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.indentAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.outputSQL);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["legend[_ngcontent-%COMP%] {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNxbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9329:
/*!**************************************!*\
  !*** ./src/app/xml/xml.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XmlComponent": () => (/* binding */ XmlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class XmlComponent {
    constructor() { }
    ngOnInit() {
    }
    /*
     * This is the about information for the XML formatter.
     */
    getXmlAbout() {
        alert("This XML formatter was created to remove invalid character errors during SoapUI "
            + "processing that normally \noccur when you cut a SOAP message from a log and try "
            + "to run it in SOAP UI (or any SOAP tool).\n\nThis formatter takes in an XML string, "
            + "removes all white space and special characters and re-formats the XML."
            + "\nThe output should run in SoapUI, error free."
            + "\n\nThe \"Indent options\" are self evident: \n    indent or not. \n    indent amount. "
            + "\n\nIf you have suggestions for enhancements or encounter errors send an email "
            + "to keelerpl@gmail.com and I'll \nlook into it.");
    }
}
XmlComponent.ɵfac = function XmlComponent_Factory(t) { return new (t || XmlComponent)(); };
XmlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XmlComponent, selectors: [["app-xml"]], decls: 74, vars: 0, consts: [[2, "background", "#f4f4f4"], ["bgcolor", "#98edb4", "border", "0", "width", "100%", "cellpadding", "10"], ["align", "center"], ["border", "0", "width", "100%", "cellpadding", "10"], ["width", "15%"], [3, "click"], ["width", "55%"], ["href", "mailto:keelerpl@gmail.com"], ["width", "30%"], ["width", "25%"], ["for", "inputXML"], ["color", "red"], ["width", "75%"], ["name", "inputXML", "id", "inputXML", "rows", "7", "cols", "75", "wrap", "off"], ["width", "25%", "align", "right"], ["for", "indentCheckBox"], ["type", "checkbox", "name", "indentCheckBox", "id", "indentCheckBox", "onclick", "checkIndentAmountEnabled()", "checked", ""], ["width", "50%"], ["type", "text", "name", "indentAmount", "id", "indentAmount", "maxlength", "1", "size", "1", "value", "3", "onchange", "verifyIndent(this)"], ["type", "button", "name", "Submit", "value", "Process", "onClick", "getFormattedXml(this)"], ["for", "xmlOut"], ["name", "xmlOut", "id", "xmlOut", "rows", "7", "cols", "75", "wrap", "off"], ["action", "https://www.paypal.com/cgi-bin/webscr", "method", "post"], ["type", "hidden", "name", "cmd", "value", "_s-xclick"], ["type", "hidden", "name", "encrypted", "value", "-----BEGIN PKCS7-----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-----END PKCS7-----"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "alt", "PayPal - The safer, easier way to pay online!"], ["alt", "", "border", "0", "src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"]], template: function XmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "XML Formatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XmlComponent_Template_button_click_10_listener() { return ctx.getXmlAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email errors, comments or suggestions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keelerpl@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Paste your XML in the text box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "**");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Beginning prolog will be removed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Output options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Indent options:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Indent elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Indent amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Get your formatted XML here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Formatted XML (SoapUI friendly):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Donations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["legend[_ngcontent-%COMP%] {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoieG1sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map