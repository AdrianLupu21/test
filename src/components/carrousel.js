import React,{Component} from 'react';

const Image = (props)=>{
  return <img className="carrs" alt="" src = {props.url} />;
};

class Carrousel extends Component{
  state = {
    url : ["https://www.fast-growing-trees.com/images/P/Live-Oak-Tree-450w.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5NExylnxOHhtSEHethvbWqmAme9BoBxuIAg2tAhDFM713nrp",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDwj1WMyMo9R78dk9dAv9VR0OoeqIMPX9pQYM7_rHbsgJtv5m"
        ],
     i:0
  }
    carr = () =>{
      return <Image url = {this.state.url[this.state.i]} />;
    }
    update = ()=>{setInterval(() =>{
                  if(this.state.i<this.state.url.length-1){
                    this.setState((prevState)=>({i:prevState.i +1}));
                  }else{
                    this.setState({i : 0});
                  }
                  console.log(this.state.i);

                },4000)};
  render(){
    return(
      <div>
        {this.carr()}
        {this.update()}
      </div>
    );
  }
}

export default Carrousel;
