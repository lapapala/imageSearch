import React, { Component } from 'react';

import API from "./API";

class App extends Component {

    constructor() {
      super();
      this.state ={
        title: 'React Image Search',
        searchTerm: '',
        loading: false,
        images: []
      };
    }

    async formSubmitted(event) {
      event.preventDefault();

      // this.setState = ({loading: true});

      const images = await API.search(this.state.searchTerm);

      this.setState({
          loading: false,
          images: images.photo
        })
    }

    searchTermChanged(event) {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm: searchTerm
        });
    }

  render() {
    const { title, searchTerm, loading, images } = this.state;

    return (
      <div>
         <h1>{title}</h1>
          <form onSubmit={(event) => {
              this.setState({loading: true});
              this.formSubmitted(event)
          }}>
              <label htmlFor="searchTerm">Search Term</label>
              <input
                onChange={(event) => this.searchTermChanged(event)}
                value={searchTerm}
                className="u-full-width"
                type="text"
                id="searchTerm"
                name="searchTerm"/>
              <button type="submit">Search</button>
          </form>

          {loading ? <img alt="Loading" src="https://i.imgur.com/LVHmLnb.gif"/> : ''}

          <section className="images" >
              {images.map(image => {
                  return <div key={image.id}>
                      <p>{image.title}</p>
                      <img src={image.url_s}  alt={image.title}/>
                  </div>
              })}
          </section>

      </div>
    );

  }

}

export default App;