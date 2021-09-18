import React from 'react'
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        if(!this.props.user){
            return(
                <div className='w-4/12 m-auto mt-20'>
                    <img className="w-3/12 m-auto" src="/images/loading.gif" alt="" />
                </div>
            )
        }
        var userData = this.props.user
        console.log(userData.name)
        var fullName = userData.name.title + " " + userData.name.first + " " + userData.name.last
        console.log(fullName)

        return(
            <div className="">
                <div className="flex justify-center items-start border">
                    <img className="absolute top-12 rounded-full" src={userData.picture.large} alt="" />
                </div>

                <div className="my-10 display">
                    <h4 className="text-center my-2 display">{this.props.title}</h4>
                    <h1 className="text-center my-2 font-extrabold text-2xl display">{this.props.titleValue}</h1>
                    <h2 className="text-center my-2 font-extrabold display">{this.props.value}</h2>
                </div>


                <div className="w-full my-6">
                    <div className="w-4/12  m-auto flex justify-between py-2 px-4">
                        <i className="fas fa-user-alt  text-3xl text-gray-700 cursor-pointer" onClick={() => this.props.handleChange("user")}></i> 



                        <i className="far fa-envelope-open text-3xl text-gray-700 cursor-pointer" onClick={() => this.props.handleChange("email")}></i>


                        <i className="fas fa-calendar-minus text-3xl text-gray-700 cursor-pointer" onClick={() => this.props.handleChange("dob")}></i>


                        <i className="fas fa-map-marked-alt text-3xl text-gray-700 cursor-pointer" onClick={() => this.props.handleChange("location")}></i>


                        <i className="fas fa-phone text-3xl text-gray-700 cursor-pointer" onClick={() => this.props.handleChange("contact")}></i>


                    </div>
                </div>


                <button className="border rounded-xl px-4 bg-gray-500 hover:bg-gray-700 font-bold transition-all text-white py-2 block m-auto my-8"  onClick={this.props.randomUser}>Get Random User</button>
            </div>
        )
    }
}
export default Card;