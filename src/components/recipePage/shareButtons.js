import React from 'react';

import { useStylesShareButtons } from '../styles/recipePage/shareButtons'

import { EmailIcon, FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";


const ShareButtons = (props) => {
  const classes = useStylesShareButtons()

  const recipeId = props.recipeInformation.id
  const emailSubject = props.recipeInformation.title
  const pinterestImage = props.recipeInformation.image

  return (
    <div className={classes.general}>
      <div className={classes.shareButtons}>
        <EmailShareButton
          url={`http://localhost:3000/recipePage/${recipeId}`}
          children="React node"
          subject={emailSubject}
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>
      <div className={classes.shareButtons}>
        <FacebookShareButton
          url={`http://localhost:3000/recipePage/${recipeId}`}
          children="React node"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </div>
      <div className={classes.shareButtons}>
        <PinterestShareButton
          url={`http://localhost:3000/recipePage/${recipeId}`}
          children="React node"
          media={pinterestImage}
        >
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
      </div>
      <div className={classes.shareButtons}>
        <TwitterShareButton
          url={`http://localhost:3000/recipePage/${recipeId}`}
          children="React node"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
}

export default ShareButtons;