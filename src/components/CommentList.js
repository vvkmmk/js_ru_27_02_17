import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    render() {
        const {comments=[]} = this.props;
        const {isOpen} = this.state;

        let body = '';
        let buttonName = 'Show';
        if (isOpen) {
            buttonName = 'Hide';
            body = this.getComments(comments);
        }

        return (
            <div>
                <a href="#" onClick={this.commentClickHandler}>{buttonName} comments</a>
                <ul>{body}</ul>
            </div>
        );
    };

    getComments(comments) { // @todo-q: почему IDE тут показывает что method can be static?
        if (!comments) {
            return '';
        }
        return comments.map(comment => {
            return <li key={comment.id}><Comment comment={comment} /></li>;
        });
    };

    commentClickHandler = (e) => {
      this.setState({
          isOpen: !this.state.isOpen
      });
    };

}

export default CommentList;