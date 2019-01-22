import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';




class newHouse extends Component {
  
  
  constructor(props){


    super(props);
    this.state={

       is_created:false,
       id:""
    }
  }
  


handleSubmit(){


    var my_name=document.getElementById('new_name').value;
    var my_location=document.getElementById('new_location').value;
    var my_rate=document.getElementById('new_rate').value;

    fetch("/houses/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: my_name,
          location: my_location,
          rate: my_rate

        })
      })
      .then((response) => response.json() )
      .then( (response) => { 
          //if(response.status === 200){
        console.log(response._id)
        this.setState({ is_created: true ,id:response._id});
          //}
        
      });


}

  render() {

    const {is_created,id} = this.state;

    if(is_created){
        return <Redirect to={"/house/"+id}/>
    }

    return (
    <div id="new_house">
     <center>
     <input id="new_name" type="text" className="mt-20" placeholder="name"/>
     </center>
     <center>
     <input id="new_location" type="text" className="mt-20" placeholder="location"/>
     </center>
     <center>
     <input id="new_rate" type="text" className="mt-20" placeholder="rate"/>
     </center>
     <center>
     <input type="button" value="submit" onClick={this.handleSubmit.bind(this)} className="mt-20"/>
     </center>

    </div> 
    );
  }
}

export default newHouse;
