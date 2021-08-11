import { Component } from 'react'
import axios from 'axios'
class Conecta extends Component {
    // props values
    constructor(props) {
      super(props);
      this.state = { contacts: [] }
    }
  
    componentDidMount() {
      axios({
              method: 'post',
              url: 'http://localhost:9000/',
              data: {
                  type: "",
                  limit: 10
              }
          })
          .then(res => {
            console.log(res);
            console.log(res.data); 
          })
    }

    // componentDidMount() {
    //   const data = new FormData();
    //   send('http://localhost:9000/', {
    //     method: 'POST',
    //     body: data
    //   })
    //   .then(res => res.json())
    //   .then((data) => {
    //     console.log('this is data', data);
    //     this.setState({ contacts: data })
    //   })
    //   .catch(console.log)
    // }
    
  // render() {
  //   return ();
  //   }
}
  