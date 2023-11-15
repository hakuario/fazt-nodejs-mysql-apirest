import api from './api.js'
import {PORT} from '../config.js'
//
api.listen(PORT);
console.log("Api online at ", PORT);
