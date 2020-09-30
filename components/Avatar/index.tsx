import React from 'react'
import AvatarModel from "../../models/avatarModel"
import {AvatarHolder} from "./styled" 

const Avatar = ({image, size,  onClick}:AvatarModel) => {
    return (
        <AvatarHolder src={image} size={size} onClick={()=>onClick()} /> 
    )
}

export default Avatar
