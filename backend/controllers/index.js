import express from 'express';
import weddingData from './WeddingData.js'
import bridesmaid from './Bridesmaids.js'
import category from './Categories.js'
import groomsman from './Groomsmen.js'
import guest from './Guest.js'
import guestlist from './Guestlist.js'
import authentication from './authentication.js';
import user from './users.js'

const api = express.Router();

api.use('/weddingdata', weddingData)
api.use('/bridesmaids', bridesmaid)
api.use('/categories', category)
api.use('/groomsmen', groomsman)
api.use('/guests', guest)
api.use('/guestlist', guestlist)
api.use('/authentication', authentication)
api.use('/users', user)

export default api