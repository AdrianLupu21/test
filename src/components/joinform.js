import React,{Component} from 'react';

class Card extends Component{
  render(){
    return(
      <div className = "container">
        <h1>Join our cool blue team</h1>
        <form action = "join.php" method = "POST">
          <div className = "form-group">
            <label for="first-name">First Name</label>
            <input id="first-name" class="form-control" type ="text" name="first_name" aria-describedby="more-info" required />
            <small id="more-info" class="form-text text-muted">Bll bllb bll</small>
          </div>
          <div className ="form-group">
            <label for="last-name">Last Name</label>
            <input id="last-name" class="form-control" type = "text" name = "last_name" required />
          </div>
          <div className = "form-group">
            <label for="mail-address">Email address</label>
            <input id="mail-address" class="form-control" type = "text" name = "mail-address" required />
          </div>
          <div className = "form-group">
            <label for="date-of-birth">Date of birth</label>
            <input id="date-of-birth" class="form-control" type="datetime-local" name="date" required />
          </div>
          <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Card;
