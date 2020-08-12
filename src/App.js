import React, { Component,Fragment } from 'react';
import SearchComponent from './Component/SearchComponent';
import unsplash from "./Api/unsplash-api";
import ImageList from './Component/ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(term) {
    // connect unsplash api
    let responseFromunsplashApi = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: responseFromunsplashApi.data.results,loading:true, });
  }

  render() { 
    return ( 
      <Fragment>
        <SearchComponent Submit={this.handleSubmit} />
        <ImageList Images={this.state} />
        </Fragment>
     );
  }
}
 
export default App;