import './Birthday.css'

const Details = (props) => {
  return (
    <div className='Details'>
        <img src={props.img} alt="" height={'50px'} width={'50px'} style={{borderRadius:'50%'}} ></img>
        <div className='name'>
            <h3>{props.name}</h3>
            <p>{props.age}</p>

        </div>
    </div>
  )
}

export default Details