import { Schema } from 'mongoose'
export const BurgerSchema = new Schema({
  name: { type: String, required: true }

})
