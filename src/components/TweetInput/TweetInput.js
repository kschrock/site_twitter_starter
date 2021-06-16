import { useState } from "react"
import "./TweetInput.css"



export default function TweetInput({addTweet}) {
  const [tweet, setTweet] = useState("")

  const [hidden, setHidden] = useState("False")


  const handleOnTweetTextChange = (event) => {
    setTweet(event.target.value);
  }

  const handleClassChange = (e) => {
    setHidden("True");
    e.target.classList.add("expanded");
  }

  const handleCharacterClassColoring = (e) =>{
    console.log(e.value)
    if(e.value>140){
      
    }
  }

  const handleBlur = (e) => {
    if(tweet === ""){
    setHidden("False");
    e.target.classList.remove("expanded");
    }
  }

  const submitDisabled = tweet.length === 0

  const handleOnSubmit = () => {
    // { ...newTweet, id: oldTweets.length, name: userProfile.name, handle: userProfile.handle }
    addTweet({
      id: tweet.id,
      name: `Kordell`,
      handle: `Hello world`,
      text: tweet,
      comments: 1,
      retweets: 1,
      likes: 1,
    })
    // alert(tweet)
    setTweet("")
  }

  console.log(tweet.length)
  return (
    <div className="tweet-container">
      <div className="tweet-box-top row">
        <span className="tweet-avatar fa-stack">
          <i className="fas fa-circle fa-stack-2x">
            <i className="fas fa-user fa-stack-1x"></i>
          </i>
        </span>

        <textarea onBlur={handleBlur} className={hidden === 'True'? "expanded" : ""} onFocus={handleClassChange} onChange={handleOnTweetTextChange} name="new-tweet" value={tweet} type="text" placeholder="What's Happening?"></textarea>
        {/* This is the input text to change */}
  
        <i className={hidden === 'True'? "fas fa-smile" : "fas fa-image"}></i>
      </div>
      <div className=" row tweet-extras">
        <div className="icon-set">
          <i className="fas fa-image"></i>
          <i className="icon-gif">GIF</i>
          <i className="far fa-chart-bar"></i>
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <span value={tweet.length} onChange={handleCharacterClassColoring} className={`tweet-length`}>&nbsp; {140 - tweet.length} characters</span>

        <div className="submit">
          <i className="fas fa-plus-circle"></i>
          <button disabled={submitDisabled} onClick={handleOnSubmit} className="submit-button">Tweet</button>
        </div>
      </div>
    </div>
  )
}
