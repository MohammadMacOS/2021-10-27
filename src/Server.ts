import cors from 'cors'
import express from 'express'
import Logger from "./utils/Logger";
import MorganMiddleware from "./middlewares/MorganWiddleware";


const app = express()
const frontendPort = 3000
const port = 3001

const allowedOrigins = [` http://localhost:${ frontendPort }`]
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
}

app.use(cors(options))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(MorganMiddleware)

app.get('/', (req, res) => {
    res.send('API is Alive with Typescript!')
})

app.listen(port, () => {
    Logger.info(`Server started at http://localhost:${port}`)
})

let num1: number = 5
let num2: any = 6
const num3 = 4
Logger.debug(num1)
Logger.debug(num2)
Logger.debug(num3)

const data: any = {
    name: 'Adam',
    age: num1,
    gender: true
}

Logger.debug(data)

interface User {
    name: string;
    age: number;
    gender: boolean;
    height?: number; // optional
}

let adam: User = {
    name: 'Adam',
    age: 5,
    gender: false
}

Logger.debug(adam)

let myArray: Array<User> = [
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
]

Logger.warn(myArray)
Logger.warn(myArray[0])
Logger.warn(myArray[0].name)