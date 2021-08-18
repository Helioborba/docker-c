import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'
class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchIndexes();
  }

  

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    console.log(seenIndexes)
    this.setState({
      seenIndexes: seenIndexes.data
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      indice: this.state.index,
    }).then((res)=>{
      console.log("todos: ",res.data)
    });
    
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ indice }) => indice).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
            <div className='novos-cardapio__controls'>
                <div className='novos-cardapio__control'>
                    <label>Enter your index:</label>
                    <input value={this.state.index} onChange={(event) => this.setState({ index: event.target.value })}/>
                </div>
            </div>
            <div className='novos-cardapio__actions'>
            <button>Submit</button>
            </div>
        </form>
        <div>
            <h3>Indexes I have seen:</h3>
            {this.renderSeenIndexes()}
        </div>
      </div>
    );
  }
}

export default Fib;
