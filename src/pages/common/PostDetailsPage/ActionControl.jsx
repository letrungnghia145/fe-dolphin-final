import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { postService, userService } from "../../../apis";

export const ActionControl = (props) => {
  const [canShare, setCanShare] = useState(false);
  const [canVote, setCanVote] = useState(false);
  const auth = useSelector((state) => state.auth);
  const sharers = useSelector((state) => state.page.sharers);
  const voters = useSelector((state) => state.page.voters);
  const onHandleShare = (option) => {
    if (option === true) {
      userService.addSharedPost(auth.id, props.post).then((response) => {
        setCanShare(false);
      })
    }else {
      userService.removeSharedPost(auth.id, props.post).then((response) => {
        setCanShare(true);
      })
    }
  }

  const onHandleVote = (option) => {
    if (option === true) {
      postService.addVoter(props.post.id, auth).then((response) => {
        setCanVote(false);
      })
    }else {
      postService.removeVoter(props.post.id, auth).then((response) => {
        setCanVote(true);
      })
    }
  }
  useEffect(() => {
    if (sharers && voters) {
      if (auth) {
        const checkShare = sharers.data.filter(sharer=>sharer.id === auth.id).length > 0;
        setCanShare(!checkShare);
        const checkVote = voters.data.filter(voter=>voter.id === auth.id).length > 0;
        setCanVote(!checkVote);
      }else{
        setCanShare(true);
        setCanVote(true);
      }
    }
  }, [auth, sharers]);
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <span className={`btn btn-primary btn-round btn-sm mr-2`}
        onClick={()=>onHandleVote(canVote)}>
        <i className="fa fa-heart-o mr-1" aria-hidden="true"></i>
        {canVote ? "Vote" : "Voted"}
      </span>
      <span className={`btn btn-primary btn-round btn-sm`}
        onClick={()=>onHandleShare(canShare)}>
        <i className="fa fa-bookmark-o mr-1" aria-hidden="true"
        ></i>
        {canShare ? "Shared to profile" : "Shared"}
      </span>
    </div>
  );
};
