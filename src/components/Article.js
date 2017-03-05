import React, {Component} from 'react'
import CommentList from './CommentList';

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const body = isOpen ? this.getContent(article) : '';

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </div>
        );
    };

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getContent = (article) => {
        return (
            <section>
                <div>{article.text}</div>
                <CommentList comments={article.comments}/>
            </section>
        );
    };
}

export default Article