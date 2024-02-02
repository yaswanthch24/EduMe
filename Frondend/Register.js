
import axios from 'axios'
import React, { Component } from 'react'
import "./Register.css"



export default class Register extends Component {

    render() {
        return (
            <div>
                <div className='login_form_container'>
                    <div className='  login_form'>
                        <h2>REGISTER HERE</h2>

                        <div className='inputs'>
                            <input type="text" ref="userName" placeholder="UserName" class="input2" /><br />
                        </div> <br />
                        <div className='inputs2'>

                            <input type="text" ref="age" placeholder="Age" class="input2" /><br />
                        </div> <br />
                        <div className='inputs3'>

                            <input type="text" ref="emailId" placeholder="EmailId" class="input2" /><br />
                        </div> <br />
                        <div className='inputs4' >
                            <input type="education" ref="education" placeholder="Education" class="input2" /><br />
                        </div> <br />
                        <div className='inputs5'>
+
                            <input type="password" ref="password" placeholder="Password" class="input2" /><br />
                        </div> <br />
                        <div className="login_button">
                            <button class="btn bg-transparent" onClick={this.register}><h1>SignUp</h1></button>/
                            <button className='but' ><a href='./' style={{textDecoration:'none'}}><h1>Login</h1></a></button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    register = () => {
        const Studentregistration = {

            userName: this.refs.userName.value,
            age: this.refs.age.value,
            emailId: this.refs.emailId.value,
            education: this.refs.education.value,
            password: this.refs.password.value,


        }

        axios.post('http://localhost:3001/register', Studentregistration)
            .then(data => {
                console.log("student registered");
                alert("your are registered");
            })
    }

}