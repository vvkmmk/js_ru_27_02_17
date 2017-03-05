import React, {Component} from 'react';

class Comment extends Component {

    constructor() {
        super(); // todo-q: нужно ли вызывать конструктор родителя в этом месте, если мы ничего не делаем здесь?
    }

    render() {
        const {comment} = this.props;

        return this.getComment(comment);
    }

    getComment = (comment) => {
        return (
            <div className="comment-container">
                <div className="comment-container__user-name">{comment.user}</div>
                <div className="comment-container__text">{comment.text}</div>
            </div>
        );
    }
}

export default Comment;