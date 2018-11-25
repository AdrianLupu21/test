import React ,{Component} from 'react';

const Image = (props) =>{
  return(
    <img alt="" src={props.name} />
  );
}
class FirstPage extends Component{
  render(){
    return(
        <div class ="row" id ="containers">
          <div class="col-4" id ="panel">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <button class = "btn btn-primary">Join now </button>
            </ul>
          </div>
        </div>
    );
  }
}

export default FirstPage;
