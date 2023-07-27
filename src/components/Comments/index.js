import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component{
  state = {
    nameInput: "",
    commentInput: "",
    commentList: []
  }

  deleteComment = (id) => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachComment => {
        if (id !== eachComment.id){
          return {eachComment}
        }
        
      })
    }))
  }

  toggleIsFavorite = (id) => {
      this.setState(prevState => ({
         commentList: prevState.commentList.map(eachComment => {
          if (id === eachComment.id){
            return {...eachComment, isLiked: !eachComment.isLiked}
          }
          return eachComment
         }),
      }))
  }

  onChangeInput = (event) => {
    this.setState({nameInput: event.target.value})
  }

  onChangeTextArea = (event) => {
    this.setState({commentInput: event.target.value})

  }

  onSubmitForm = (event) => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const backgroundColorClassNameIndex = Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)
    const backgroundColorClassName = initialContainerBackgroundClassNames[backgroundColorClassNameIndex]

    
      const newComment = {
        id: v4(),
        name: nameInput,
        comment: commentInput,
        isLiked: false,
        backgroundColorClassName: backgroundColorClassName,
        date: formatDistanceToNow(new Date())
        }
      

    if(nameInput !== "" && commentInput !== ""){
      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        nameInput: "",
        commentInput: ""
      }))
    }
  }


  render(){
    const {commentInput, nameInput, commentList} = this.state
    

    return(
      <div className="bg-container">
        <div className="content-container">
          <div className="comments-container">
            <h1 className="heading"> Comments</h1>
            <img className="comments-medium-device-img" alt="comments" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>

            <p className="description"> Say something about 4.0 Technologies</p>

            <form onSubmit={this.onSubmitForm} className="form-container">
              <input value={nameInput} onChange={this.onChangeInput} placeholder="Your Name" className="input" type="text"/>
              <textarea value={commentInput} onChange={this.onChangeTextArea} placeholder="Your Comment" className="input-textarea" type="textarea" rows="6" col="30">
              </textarea>
              <button type="submit" className="add-comment-btn"> Add Comment</button>
            </form>

          </div>

          <img className="comments-img" alt="comments" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>
        </div>
        <hr className="horizontal-line"/>

        
        <div className="comments">
          <p className="comments-count"> <span className="comments-count-span"> {commentList.length}</span>  Comments</p>
          <ul className="comments-list">
            {commentList.map(eachComment => <CommentItem toggleIsFavorite={this.toggleIsFavorite} 
              deleteComment={this.deleteComment} key={eachComment.id} commentItem={eachComment}/>) }
          </ul>
        </div>

      </div>
    )
  }
}


export default Comments


