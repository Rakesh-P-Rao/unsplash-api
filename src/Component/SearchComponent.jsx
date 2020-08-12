import React, { Component, Fragment } from 'react';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
      this.state = {
        term: "",
      };
        this.fullstack = React.createRef(); // "ref" allows direct access to dom element or node
    }

    componentDidMount() {
        this.fullstack.current.style.background = "#eee";
        this.fullstack.current.focus();
    }

    handleChange = (e) => {
        this.setState({ term: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.Submit(this.state.term);
    }
    
    render() { 
        return (
          <Fragment>
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <input
                    ref={this.fullstack}
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Images"
                    value={this.state.term}
                    onChange={this.handleChange}
                  />

                  <button>Search</button>
                </form>
              </div>
            </div>
          </Fragment>
        );
    }
}
 
export default SearchComponent;