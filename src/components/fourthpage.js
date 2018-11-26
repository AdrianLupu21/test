import React,{Component} from 'react';

class FourthPage extends Component{
  render(){
    return(
      <div className ="container">
        <form action="getdata.php" method="GET">
          <div className="form-group">
            <label for="what-name">Name of the club</label>
            <input id="what-name" class="form-control" type="text" required />
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default FourthPage;
