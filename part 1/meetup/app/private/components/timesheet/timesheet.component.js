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
var timesheet_model_1 = require('../../../shared/models/timesheet.model');
var TimesheetComponent = (function () {
    function TimesheetComponent() {
        this.times = [];
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var days = new Date(year, month + 1, 0).getDate();
        for (var i = 1; i <= days; i++) {
            var item = new timesheet_model_1.TimesheetModel();
            item.date = new Date(year, month + 1, i);
            item.time = 0;
            item.observaton = "";
            this.times.push(item);
        }
    };
    TimesheetComponent = __decorate([
        core_1.Component({
            templateUrl: './app/private/components/timesheet/timesheet.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
exports.TimesheetComponent = TimesheetComponent;
//# sourceMappingURL=timesheet.component.js.map