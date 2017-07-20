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
var modify_service_1 = require('./modify.service');
var router_1 = require('@angular/router');
var ModifyComponent = (function () {
    function ModifyComponent(router, modifyService) {
        this.router = router;
        this.modifyService = modifyService;
        this.email = "";
        this.text = "";
    }
    ModifyComponent.prototype.modify = function () {
        this.modifyService.modify(this.email, this.text)
            .subscribe(function (response) {
            alert("Done!");
        });
    };
    ModifyComponent = __decorate([
        core_1.Component({
            selector: 'modify',
            templateUrl: './app/components/modifyFile/modify.component.html',
            providers: [modify_service_1.ModifyService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, modify_service_1.ModifyService])
    ], ModifyComponent);
    return ModifyComponent;
}());
exports.ModifyComponent = ModifyComponent;
//# sourceMappingURL=modify.component.js.map