import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDeatails,setUserDetails]=useState()
  const {postDetails} =useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
 useEffect(()=>{
  const {userId}=postDetails
  firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
    res.forEach(doc=>{
    setUserDetails(doc.data())
    })
  })
 })

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDeatails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeatails.username}</p>
          <p>{userDeatails.phone}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
