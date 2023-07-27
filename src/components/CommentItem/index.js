// Write your code here
import './index.css'


const like_img_url = "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
const liked_img_url = "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"


const CommentItem = (props) => {
    const {commentItem, toggleIsFavorite, deleteComment} = props
    const {id, name, comment, backgroundColorClassName, date, isLiked} = commentItem

    const initial = name[0]
    const likeImage = isLiked? liked_img_url: like_img_url
    const likedTextClassName = isLiked ? "liked-text" : ""

    const toDeleteComment = () => {
        deleteComment(id)
    }

    const onClickLike = () => {
        toggleIsFavorite(id)
    }

    return(
        <li>
            <div className="comment-item-container">
                <div className="comment-item">
                    <div className={`initial-icon ${backgroundColorClassName}`}>
                        <p> {initial} </p>
                    </div>
                    <div className="name-comment-container">
                        <div className="name-date-container">
                            <p className="name"> {name}</p>
                            <p className="date"> {date} </p>
                        </div>
                        <p className="comment"> {comment}</p>
                    </div>
                </div>
                <div className="like-and-delete-container">
                    <button onClick={onClickLike} className="like-button">
                        <img alt="like" src={likeImage}/>
                        <p className={`like-text ${likedTextClassName}`}> Like</p>
                    </button>
                    <button onClick={toDeleteComment} data-testid="delete">
                        <img className="delete-icon" alt="delete" src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"/>
                    </button>
                </div>
            </div>
            <hr/>
        </li>
    )
}

export default CommentItem