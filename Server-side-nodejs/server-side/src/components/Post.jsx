import React from 'react';
import Comments from './Comments';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { text: 'Incrível, tô achando demais!' }
            ]
        };
    }

    handlesubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" name="" id="" />
                    <button type="submit">Comentar</button>
                </form>
                {this.state.comments.map((comments, index) => {
                    return <Comments key={index} text={comments.text} />
                })}
            </div>
        )
    }
}