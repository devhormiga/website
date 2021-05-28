
/*Use this component for show the post of users with reference API TRAE-USUARIOS
 */
const Users = (props) =>(
    <div className= 'usr-container'>
        <div className='encabezado'>
            <h3 >{props.title}</h3>
        </div>
        
        <p>{props.body}
        <div><h3 className='usrID'>ID: {props.id}</h3></div></p>
        

    <style jsx>{`
        .usr-container{
            display:flex;
            flex-direction: column;
            widht:100%;
            color:#000;
            padding:0px;
            margin-bottom:20px;
            border-radius: 20px 20px 20px 20px;
            -webkit-box-shadow: 5px 5px 7px -2px rgba(0,0,0,0.85); 
            box-shadow: 5px 5px 7px -2px rgba(0,0,0,0.85);


        }
        .encabezado{
            display:block;
            flex-direction:row;
            widht:100%;
            padding:20px;
            margin-botton:0px;
            background-color:var(--dark-accent);
            -webkit-border-radius: 19px 21px 0px 0px;
            -moz-border-radius: 19px 21px 0px 0px;
            border-radius: 19px 21px 0px 0px;
        }
        .encabezado h3{
            font-size:30px;
        }
        p{ 
            font-size:30px;
            color:#000;
            padding:20px;
            border: 1px solid var(--dark-accent);
            -webkit-border-radius: 0px 0px 20px 20px;
            -moz-border-radius: 0px 0px 20px 20px;
            border-radius: 0px 0px 20px 20px;
            margin-top:0px;

        }
        .usrID{
            text-align:right;
        }
        `}</style>
    </div>
   
)

export default  Users
