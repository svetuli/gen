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
var form_service_1 = require('./services/form.service');
var form_control_1 = require('./form.control');
var EffectTypesFormComponent = (function () {
    function EffectTypesFormComponent(formService) {
        this.formService = formService;
        this.formControl = new form_control_1.FormControl;
        console.log('EffectTypesFormComponent loaded');
    }
    EffectTypesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getEffectTypes().subscribe(function (data) { return _this.formControl.checkboxes = data; });
    };
    EffectTypesFormComponent = __decorate([
        core_1.Component({
            selector: 'effect-types-form',
            templateUrl: 'app/templates/effect.types.component.html',
            styleUrls: ['app/css/form.component.css']
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], EffectTypesFormComponent);
    return EffectTypesFormComponent;
}());
exports.EffectTypesFormComponent = EffectTypesFormComponent;
//# sourceMappingURL=effect.types.component.js.map