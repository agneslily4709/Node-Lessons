import express from "express"
import { getAllSubscribers,getSubscriber,createSubscriber,editSubscriber,removeSubscriber } from "./controller.js"

const router = express.Router()

//1. GET all subscribers
router.get("/subscribers",getAllSubscribers)

//2. GET one subscriber using ID
router.get("/subscribers/:id",getSubscriber)

//3. POST new subscriber
router.post("/newSubscriber",createSubscriber)

//4. UPDATE existing subscriber using ID
router.patch("/updateSubscriber/:id",editSubscriber)

//5. DELETE subscriber using ID
router.delete("/deleteSubscriber/:id",removeSubscriber)

export default router