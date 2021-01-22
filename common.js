(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3Jyy":
/*!**********************************************************************!*\
  !*** ./apps/sim/src/app/modules/clients/services/clients.service.ts ***!
  \**********************************************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "goK7");





class ClientsService {
    constructor(http) {
        this.http = http;
    }
    getClients() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + 'clients');
    }
    addClient(client) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + 'clients', client);
    }
    editClient(client) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + `clients/${client.id}`, client);
    }
    deleteClient(client) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + `clients/${client.id}`);
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClientsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "SgUq":
/*!************************************************************************************!*\
  !*** ./apps/sim/src/app/modules/countries/services/countries/countries.service.ts ***!
  \************************************************************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "goK7");





class CountriesService {
    constructor(http) {
        this.http = http;
    }
    getCountries() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + 'country');
    }
    addCountry(country) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + 'country', country);
    }
    updateCountry(country) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + `country/${country.id}`, country);
    }
    deleteCountry(country) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_prefix + `country/${country.id}`);
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map