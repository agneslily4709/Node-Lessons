import subscriberModel from "./model.js"

//1. GET all subscribers
export const getAllSubscribers = async(req,res) => {
        try {
                const allSubscribers = await subscriberModel.find()
                res.status(200).json(allSubscribers)
        } catch (error) {
                res.status(500).json({message:error.message})
        }
}
//2. GET one subscriber using ID
export const getSubscriber = async(req,res) => {
        try {
                const {id} = req.params
                console.log(id)
                const subscriber= await subscriberModel.findById(id)
                res.status(200).json(subscriber)
        } catch (error) {
                res.status(500).json({message:error.message})
        }
}

//3. POST new subscriber
export const  createSubscriber = async(req,res) => {
        try {
                const {name,subscribedTo} = req.body
                const subscriber= new subscriberModel({name,subscribedTo})
                const newSubscriber = await subscriber.save()
                res.status(200).json(newSubscriber)
        } catch (error) {
                res.status(500).json({message:error})
        }
}
//4. UPDATE existing subscriber using ID
export const editSubscriber = async(req,res) => {
        try {
                const {id} = req.params
                const subscriber= await subscriberModel.findByIdAndUpdate({_id:id},req.body)
                res.status(200).json(subscriber)
        } catch (error) {
                res.status(500).json({message:error.message})
        }
}
//5. DELETE subscriber using ID
export const removeSubscriber = async(req,res) => {
        try {
                const {id} = req.params
                await subscriberModel.findByIdAndDelete({_id:id})
                res.status(200).json({message:"Subscriber Deleted"})
        } catch (error) {
                res.status(500).json({message:error.message})
        }
}
