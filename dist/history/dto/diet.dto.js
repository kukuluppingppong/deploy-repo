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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class DietDto {
    getDescripion() {
        return `${this.title}/${this.amount}/${this.score}`;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DietDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.Length)(4, 4),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DietDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DietDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', required: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DietDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', required: true }),
    __metadata("design:type", Object)
], DietDto.prototype, "file", void 0);
exports.DietDto = DietDto;
//# sourceMappingURL=diet.dto.js.map