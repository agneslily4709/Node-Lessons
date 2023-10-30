import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
        name:String,
        age:{
                type:Number,
                min:1,
                max:100,
                validate:{
                        validator: v => v%2 ===1,
                        message:props => `${props.value} is not odd`
                }
        },
        email:{
                type:String,
                required:true,
                lowercase:true,
                minLength:10,
        },
        createdAt:{
                type:Date,
                default:()=>Date.now(),
                immutable:true
        },
        updatedAt:{
                type:Date,
                default:()=>Date.now()
        },
        bestFriend:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"User"
        },
        hobbies:[String],
        address:{
                street:String,
                city:String
        }
})

userSchema.methods.sayHi = function(){
        return `Hi, This is ${this.name}`
}
userSchema.statics.findByName = function(name){
        return this.find({name:new RegExp(name,"i")})
}
userSchema.query.byName = function(name){
        return this.where({name:new RegExp(name,"i")})
}
userSchema.virtual("namedEmail").get(function(){
        return `${this.name}<${this.email}>`
})
userSchema.pre('save',function(next){
        this.updatedAt = Date.now()
        next()
})
userSchema.post('save',function(next){
        doc.sayHi()
        next()
})
const user = mongoose.model("User",userSchema)

export default user