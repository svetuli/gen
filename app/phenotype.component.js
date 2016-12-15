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
var PhenotypeComponent = (function () {
    function PhenotypeComponent() {
        var _this = this;
        this.allCtrl = new Control();
        this.allCtrl.valueChanges.subscribe(function (val) {
            _this.projectdata.LoginResponse.ProjectVM.forEach(function (project) {
                project.isChecked = val;
            });
        });
    }
    PhenotypeComponent.prototype.checkAll = function () {
        console.log('pressed all button!');
        //console.log('are all checked: ', this.isChecked);
    };
    PhenotypeComponent.prototype.checkNone = function () {
        console.log('pressed none button!');
    };
    PhenotypeComponent = __decorate([
        core_1.Component({
            selector: 'phenotype',
            templateUrl: 'app/templates/phenotype.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PhenotypeComponent);
    return PhenotypeComponent;
}());
exports.PhenotypeComponent = PhenotypeComponent;
//# sourceMappingURL=phenotype.component.js.map