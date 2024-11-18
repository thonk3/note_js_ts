"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sample_1 = __importDefault(require("../controller/sample"));
var router = express_1.default.Router();
router.get('/ping', sample_1.default.sampleHealthCheck);
exports.default = router;
