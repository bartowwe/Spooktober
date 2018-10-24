import React from 'react';
import axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : [],
            story : {},

        };
        this.fetchReddits = this.fetchReddits.bind(this);
        this.changeStory = this.changeStory.bind(this);
    }

    componentDidMount() {
        this.fetchReddits();
      }
    
      //gets top 25 reddit nosleep story of the day
      fetchReddits() {
         axios.get("https://www.reddit.com/r/NoSleep/top.json?limit=25")
          .then(data => {
            let posts = []
            for (var i = 0; i < data.data.data.children.length; i++){
                posts.push({title: data.data.data.children[i].data.title, text: data.data.data.children[i].data.selftext, url: data.data.data.children[i].data.url});
            }
            this.setState({ posts: posts, story: posts[0] });
            console.log(this.state.posts);
          })
          .catch(res => {
            if(res instanceof Error) {
              console.log("Error is: ", res.message);
            } else {
              console.log("Other error: ", res.data);
            }
          })
      }

      changeStory() {
          var sto = this.state.posts[Math.floor(Math.random() * 25)];
          this.setState({story : sto});
      }
    

    render () {
        return (
            <div>
                <div id="name">
                    Spooktober
                </div>
                <br></br>
                <div className="container">
                    <div id="subtitle">
                        {this.state.story.title}   
                    </div>  
                    <br></br>
                    <div id="story">
                        {this.state.story.text}
                        {console.log(this.state.story.text)}
                    </div>
                    <div id="header">
                    <br></br>
                    <nav>
                        <ul id="description">
                            <li><a href={this.state.story.url}>Source</a></li>
                            <li><a href="#name" onClick={this.changeStory}>New Story</a></li>
                        </ul>
                    </nav>    
                    </div>
                </div>
            </div>
        )
    }   
}

export default App;