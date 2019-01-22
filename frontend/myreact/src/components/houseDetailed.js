import React, { Component } from 'react';
import logo from './../logo.svg';
import Redirect from 'react-router-dom/Redirect';






class houseDetailed extends Component {





  constructor(props) {
    super(props);

    this.state = {
      house:this.props.house,
      isLoading: this.props.isLoading,
      show_overlay:this.props.show_overlay,
      isDeleted: this.props.isDeleted
    };


  }


houseDetailed_changeState(mystate){

  this.setState(mystate);
}




houseDetailed_deleteHouse(){

  this.callBackendApiDelete()
  .then(res => this.setState({show_overlay:false, isDeleted: true}))
  .catch(err => console.log(err));

}



  componentDidMount(){

    this.setState({ house:[],isLoading: true, show_overlay: false });

    this.callBackendApiGet()
      .then(res => this.setState({ house:res, isLoading:false, show_overlay: false }))
      .catch(err => console.log(err));
  }

//for reading data
  callBackendApiGet = async () => {
    const response = await fetch('/houses/'+this.props.match.params.id);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


//for deleting data
callBackendApiDelete = async () => {
  const response = await fetch('/houses/'+this.props.match.params.id,{method:"delete"});
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};






  handle_delete(){


    this.setState({ show_overlay: true})
  }

  render() {



    const {isLoading,isDeleted } = this.state;


    if(isDeleted){
      return <Redirect to={"/"}/>
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }


    return (
      <div className="houseDetailed">
       <div id="house_img_large" style={{backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> 
          <div id="house_content">  
            <div id="house_name"><span>{this.state.house.name}</span></div><div id="house_tools"><button id="house_delete" onClick={this.handle_delete.bind(this)}>DELETE</button></div>
            <div id="house_rate"><span>Rs.{this.state.house.rate} per night</span></div>
            <div><p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.vvvontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p></div>
            <br/>
            <div><p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.vvvontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p></div>

          </div>
          
          { this.state.show_overlay ? <Results parent={this.houseDetailed_changeState.bind(this)} parentDelete={this.houseDetailed_deleteHouse.bind(this)} /> : null }
         
      </div>
    );
  }
}



//default 
houseDetailed.defaultProps = {
  house:[],
 isLoading: false,
 show_overlay:false,
 isDeleted:false
};





class Results extends Component {
  

  constructor(props){

    super(props);
    this.state={
      yesClicked:true
    }
  }

  

  handleClickNo(){


    var parent_state={
      show_overlay: false
    }
    this.props.parent(parent_state);
  }


  handleClickYes(){

    this.props.parentDelete();

  }


  render() {

      //  if(this.state.noClicked){
      //    return <houseDetailed/>
      //  }

        return (



          <div className="overlay">
          <div className="popup">
          <p>Are you sure you want to delete?</p>
          <div className="text-right">
          <button className="btn btn-cancel" onClick={this.handleClickNo.bind(this)}>no</button>
          <button className="btn btn-primary" onClick={this.handleClickYes.bind(this)}>yes</button>
          </div>
          </div>
          { this.state.noClicked ? <houseDetailed/> : null }

          </div> 
        );
    }
}

export default houseDetailed;
