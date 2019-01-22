import React, { Component } from 'react'
import HouseTile from './houseTile'



class houses extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          houses: [],
          isLoading: false
        };
      }
 


    componentDidMount() {
        // Call our fetch function below once the component mounts
            this.setState({ houses:[],isLoading: true });

      this.callBackendAPI()
        .then(res => this.setState({ houses:res, isLoading:false }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/houses');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  



  render() {

    const {isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }


    //let allhouses=[  {"ratings":{"stars":[],"comments":[]},"overallrating":0,"_id":"5b971f6e8a865b21e2439a10","name":"S.A college hostel ","location":"avadi-poonamalle high road,chennai","rate":1000,"__v":0},{"ratings":{"stars":[],"comments":[]},"overallrating":0,"_id":"5b971fa98a865b21e2439a11","name":"ashwin's resting place","location":" mogappair, chennai","rate":3500,"__v":0}];
let allhouses=this.state.houses;
    let houses = allhouses.map(house => {
      return (
        <div className="house__item col-lg-3 col-sm-6" key={house._id}>
          <HouseTile house={house} />
        </div>
      )
    })

    return (
      
      <div className="container-fluid">
      
          <div className="houses row">{houses}</div>
          
      </div>
      
    )




  }
}

export default houses;
