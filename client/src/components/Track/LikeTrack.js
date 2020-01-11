import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Mutation } from "react-apollo";
import {gql} from 'apollo-boost'

import {UserContext} from '../../Root'
import {ME_QUERY} from '../../Root'

const LikeTrack = ({ classes,trackId,likeCount }) => {
  const currentUser = useContext(UserContext)
  
  const handleDisableLikedTrack=()=>{
    let trackBool = false
    const userLikes =  currentUser.likeSet

    const isTrackLiked = userLikes.map(({track})=>{
      
      if(track.id == trackId){
        trackBool = true
      }
    })
    
    return trackBool
  }
  
  return (
    <Mutation
      mutation={CREATE_LIKE_MUTATION}
      variables={{trackId:trackId}}
      refetchQueries={()=>[{query: ME_QUERY }]}
      >
        {(createLike)=>(
          <IconButton
            disabled={handleDisableLikedTrack()} 
            onClick={event=>{
              event.stopPropagation()
              createLike()
            }}
            className={classes.iconButton}>
            {likeCount}
            <ThumbUpIcon className={classes.icon}/>
          </IconButton>
        )}
      </Mutation>
  )
};

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId:Int!){
    createLike(trackId:$trackId){
      track{
        id
        likes{
          id
        }
      }
    }
  }
`

const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(LikeTrack);