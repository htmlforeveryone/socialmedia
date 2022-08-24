import express from "express";
// import { getAllUser } from "../../client/src/api/UserRequest.js";
import { deleteUser, followUser, getAllUsers, getUser, UnfollowUser, UpdateUser } from "../Controllers/UserController.js";
const router = express.Router();
import authMiddleWare from "../MiddleWare/authMiddleWare.js"


// router.get('/' , async(req,res)=>{res.send("User Route")})

router.get("/" ,getAllUsers)
router.get("/:id" ,getUser)
router.put("/:id", authMiddleWare ,UpdateUser )
router.delete("/:id", authMiddleWare, deleteUser )
router.put("/:id/follow" , authMiddleWare , followUser)
router.put("/:id/unfollow" , authMiddleWare ,UnfollowUser)
export default router;
