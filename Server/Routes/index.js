"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
const movie_1 = require("../Controllers/movie");
const auth_1 = require("../Controllers/auth");
router.post('/register', (req, res, next) => { (0, auth_1.ProcessRegistration)(req, res, next); });
router.post('/login', (req, res, next) => { (0, auth_1.ProcessLogin)(req, res, next); });
router.get('/logout', (req, res, next) => { (0, auth_1.ProcessLogout)(req, res, next); });
router.get('/', (req, res, next) => { (0, movie_1.DisplayMovieList)(req, res, next); });
router.get('/find/:id', (req, res, next) => { (0, movie_1.DisplayMovieById)(req, res, next); });
router.post('/add', (req, res, next) => { (0, movie_1.AddMovie)(req, res, next); });
router.put('/update/:id', (req, res, next) => { (0, movie_1.UpdateMovie)(req, res, next); });
router.delete('/delete/:id', (req, res, next) => { (0, movie_1.DeleteMovie)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map