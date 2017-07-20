"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.list = function () {
        return this.http.get("/mocks/users.json")
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res.users;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error.json().error || 'Server error');
        });
    };
    UserService.prototype.get = function (id) {
        return this.http.get("/mocks/users.json")
            .map(function (res) { return res.json(); })
            .map(function (res) {
            var user = res.users.filter(function (user) { return user.id == id; });
            return user[0];
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error.json().error || 'Server error');
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map