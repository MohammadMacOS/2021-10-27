"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const MorganWiddleware_1 = __importDefault(require("./middlewares/MorganWiddleware"));
const app = (0, express_1.default)();
const frontendPort = 3000;
const port = 3001;
const allowedOrigins = [` http://localhost:${frontendPort}`];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const options = {
    origin: allowedOrigins,
    methods: allowedMethods
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(MorganWiddleware_1.default);
app.get('/', (req, res) => {
    res.send('API is Alive with Typescript!');
});
app.listen(port, () => {
    Logger_1.default.info(`Server started at http://localhost:${port}`);
});
let num1 = 5;
let num2 = 6;
const num3 = 4;
Logger_1.default.debug(num1);
Logger_1.default.debug(num2);
Logger_1.default.debug(num3);
const data = {
    name: 'Adam',
    age: num1,
    gender: true
};
Logger_1.default.debug(data);
let adam = {
    name: 'Adam',
    age: 5,
    gender: false
};
Logger_1.default.debug(adam);
let myArray = [
    {
        name: 'Adam',
        age: 5,
        gender: false
    },
    {
        name: 'Bengt',
        age: 6,
        gender: true,
        height: 110
    }
];
Logger_1.default.warn(myArray);
Logger_1.default.warn(myArray[0]);
Logger_1.default.warn(myArray[0].name);
//# sourceMappingURL=Server.js.map