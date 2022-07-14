import React, { useState } from "react";
import {Comment} from "./Comment";

export const Replies = (props) => {
    const {replies} = props;
    const showReplies = () => {
        if (replies && replies.length > 0) {
            return replies.map((reply) => {
                return <Comment comment={reply} key={reply.id} classType="mt-4" />;
            });
        } else {
            return <div className="text-center">No replies found</div>;
        }
    };
    return {showReplies}
};
