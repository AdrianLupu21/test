import React ,{Component} from 'react';


class FirstPage extends Component{
  render(){
    return(
      <div>
        <div  id ="containers">
          <div class="col-4" id ="panel">
            <h1>Lorem Ipsum Lorem Ipsum Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend ante quis pretium pulvinar.
             Donec eleifend maximus vehicula. Pellentesque malesuada ac est non elementum. Aenean ultricies nec lectus
             vitae pretium. Ut eu rhoncus nibh, nec gravida nisi. Praesent sagittis erat at ante malesuada blandit.
             Cras tincidunt aliquet finibus. Donec tristique condimentum ultricies. Suspendisse dapibus pellentesque
              elit quis condimentum. Nam felis nisl, dignissim a pulvinar at, ultricies non nibh. Vestibulum nunc nisi,
               egestas eget mattis vel, rutrum tempor lorem. Morbi vehicula massa nec mi suscipit interdum. Integer aliquam
                elementum nisl, vitae auctor enim sodales ut.</p>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
        </div>
        <div id = "message">
          <p>"Nam felis nisl, dignissim a pulvinar at, ultricies non nibh. Vestibulum nunc nisi,
           egestas eget mattis vel, rutrum tempor lorem. Morbi vehicula massa nec mi suscipit interdum. Integer aliquam
            elementum nisl, vitae auctor enim sodales ut." -Traian Basescu
          </p>
          <a href ="/joinform"><button class = "join btn btn-primary">Join now</button></a>
        </div>
        <div id="social-media">
          <h5>Follow us on:</h5>
          <i class="fab fa-facebook icon">Facebook</i>
          <i class="fab fa-twitter-square icon">Twitter</i>
          <i class="fab fa-linkedin icon">LinkedIn</i>
        </div>
      </div>
    );
  }
}

export default FirstPage;
