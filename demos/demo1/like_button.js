// React.createElement(
//     type,
//     [props],
//     [...children]
//   )

const e = React.createElement;

class LikeButton extends React.Component{

    constructor(){
        super();
        this.state = {liked:false};
    }

    render(){
        return e('button',{ className:"btn btn-primary", onClick: () => this.setState(this.state.liked?{ liked: false }:{ liked: true })},this.state.liked?"true":"false");
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);