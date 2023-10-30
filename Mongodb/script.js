import mongoose from "mongoose";
import user from "./model.js"
mongoose.connect("mongodb://0.0.0.0:27017/testDB")
.then(()=>console.log("DB Connected"))
.catch((e)=>console.error(e))

const createUser = async()=>{
        try {
        const newUser = new user({name:"Agnes",age:21,email:"agnes@gmail.com",hobbies:["Bowling", "Swimming"],address:{street:"Main St",city:"New York"}})
        await newUser.save()
        console.log(newUser)                
        } catch (error) {
                console.log(error.message)
        }
}
// createUser()

const queryUser = async() => {
        try {
                // const queriedUser = await user.where("age")
                // .gt(10)
                // .where("name")
                // .equals("Agnes")
                // .limit(1)
                const queriedUser = await user.findById("6534d8937a9ba7a2bdad42b4").populate("bestFriend")
                // queriedUser.bestFriend = "6534d77b5f830337274864eb"
                // queriedUser.populate("bestFriend")
                // queriedUser.save()
                console.log(queriedUser.sayHi())
                console.log(await user.findByName("Agnes"))
                console.log(await user.find().byName("Agnes"))
                console.log(queriedUser.namedEmail)
        } catch (error) {
                console.error(error.message)
        }
}
queryUser()