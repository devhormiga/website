import React, { Component } from 'react'

class Usuarios extends Component {
  constructor (props) {
    super(props)
    this.state = { users: [] ,}

    this.componentDidMount = this.componentDidMount.bind(this);

  }
  
  componentDidMount(){
    
    fetch('http://localhost:3000/api/usuarios')
    .then((response) => {
      console.log(response)
    })
    .then((users) => {
      console.log(`SEGUNDA PROMESA${users}`)

      this.setState({users: users})
    })
    
  }
  

  render() {
    return (
      <section className='users-section' id='users'>
        <h2 className='section-title'>Usuarios</h2>
        <div className='posts-container' ref='carousel'>
          {console.log(this.state.users)}
        </div>

        <style jsx>{`
          .users-section {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 85px;
            overflow-x: hidden;
            margin:auto;
            background-color:var(--dark-accent);
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