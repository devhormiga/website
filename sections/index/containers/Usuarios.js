import React, { Component } from 'react'
import Users from '../components/Users'

class Usuarios extends Component {
  constructor (props) {
    super(props)
    this.state = { users: [] ,}

  }
  
  componentDidMount(){
    
    fetch('http://localhost:3000/api/usuarios')
    .then(response => response.json())
      .then((users) => {
        this.setState({users: users})
      
    })
    
  }
  

  render() {
    return (
      <section className='users-section' id='users'>
        <h2 className='section-title'>Usuarios</h2>
        
        
          {this.state.users.map((user, i)=>
              <Users
                title={user.title}
                body={user.body}
                id={user.id}
              />

            )}
          
       

        <style jsx>{`
          .users-section {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 85px;
            overflow-x: hidden;
            margin:auto;
            background-color:var(--white);
          }
          .section-title{
            color:#000;
          }
          .posts-container {
            margin-top: 43px;
            width: 100%;
          }
          .btn-container {
            display: none;
          }
          @media (max-width: 1024px) {
            .case-studies-section {
              padding-bottom: 42px;
            }
            .posts-container {
              margin: 24px 0 33px;
              display: block;
              overflow: hidden;
              width: 100%;
              height: 229px;
            }
          }
          @media (max-width: 475px) {
          .case-studies-section {
            padding-right: 0px;
            padding-bottom: 42px;
          }
          .posts-container {
            margin-right: -24px;
          }
        }
        `}</style>
      </section>
    )
  }
}

export default Usuarios