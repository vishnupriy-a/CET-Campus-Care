import {db} from "../connect.js"
export const getPosts =(req,res)=>{
    const q=`SELECT p.*, u.id AS userId, name, profilePic from posts AS p JOIN users As u ON (u.id = p.userId)`

    db.query(q, (err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}