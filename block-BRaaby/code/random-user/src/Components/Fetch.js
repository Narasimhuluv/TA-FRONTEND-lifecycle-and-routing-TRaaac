import React from 'react';
import Card from './Card'

class Fetch extends React.Component{
    constructor(props){
        super();
        this.state = {
            data : "",
            title : "",
            titleValue : "",
            value : ""
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data : data.results[0]
                })
            })
    }

    randomUser = () => {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data : data.results[0]
                })
            })
    }

    handleChange=(valueString) => {
        var fullName = this.state.data.name.title + " " + this.state.data.name.first + " " + this.state.data.name.last;
        if(valueString === "user"){
            this.setState({
                title : 'My Name is ',
                titleValue : fullName,
            })
        }else if(valueString === "email"){
            this.setState({
                title : "My Email is",
                titleValue : this.state.data.email
            })
        }else if(valueString === "dob"){
            this.setState({
                title : "My Email is",
                titleValue : this.state.data.dob.date,
                value :"Age : " + this.state.data.dob.age
            })
        }else if(valueString === "location"){
            this.setState({
                title : "My Address is",
                titleValue : this.state.data.location.street.number + this.state.data.location.street.name,
                value : this.state.data.location.city + ", " + this.state.data.location.state + ", " + this.state.data.location.country  + " - " + this.state.data.location.postcode
            })
        }else if(valueString === "contact"){
            this.setState({
                title : "My Contact Number is",
                titleValue :"Phone : " + this.state.data.phone,
                value :"Cell" + this.state.data.cell
            })
        }
        // switch (valueString) {
        //     case "user":
        //         this.setState({
        //             title : 'My Name is ',
        //             titleValue : fullName,
        //         })
        //         break;
        //     case "email" :
        //         this.setState({
        //             title : "My Email is",
        //             titleValue : this.state.data.email
        //         })
        //         break;
        //     case "dob" :
        //         this.setState({
        //             title : "My Email is",
        //             titleValue : this.state.data.dob.date,
        //             value :"Age : " + this.state.data.dob.age
        //         })
        //         break;
                
        //     case "location" :
        //         this.setState({
        //             title : "My Address is",
        //             titleValue : this.state.data.location.street.number + this.state.data.location.street.name,
        //             value : this.state.data.location.city + ", " + this.state.data.location.state + ", " + this.state.data.location.country  + " - " + this.state.data.location.postcode
        //         })
        //         break;
        //     case "contact" :
        //         this.setState({
        //             title : "My Contact Number is",
        //             titleValue :"Phone : " + this.state.data.phone,
        //             value :"Cell" + this.state.data.cell
        //         })
        //         break;
        //     default:
        //         break;
        // }
    }


    render(){
        var userData = this.state.data
        // console.log(userData)
        
        return(
            <div>
                <Card user={userData} 
                randomUser={this.randomUser} 
                title = {this.state.title} 
                titleValue = {this.state.titleValue}
                value = {this.state.value}
                handleChange={this.handleChange}/>
            </div>
        )
    }
}


  
export default Fetch;