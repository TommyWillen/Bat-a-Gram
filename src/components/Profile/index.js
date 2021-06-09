import {useReducer, useEffect} from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Photos from "./Photos"
import {getUserPhotosByUserId} from "../../services/firebase"



const Profile = ({user}) => {
    const reducer = (state, newState) => ({...state, ...newState});
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
}

    const [{profile, photosCollection, followerCount}, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        const getProfileInfoAndPhotos = async () => {
            const photos = await getUserPhotosByUserId(user.userId);
            dispatch({profile: user, photosCollection: photos, followerCount: user.followers.length}) 
        }
        getProfileInfoAndPhotos()
    }, [user.username])

    return (
        <>
           <Header
           photosCount={photosCollection ? photosCollection.length : 0}
           profile={profile}
           followerCount={followerCount}
           setFollowerCount={dispatch}
           />
           <Photos photos={photosCollection} />
        </>
    )
}

export default Profile
