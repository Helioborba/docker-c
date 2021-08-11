import {useEffect} from 'react'
import axios from 'axios'
const conectaPOST = () => {
    useEffect(() => {
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
      });
    return(
        <div>
            <div>
                
            </div>
        </div>
        )
}

export default conectaPOST;