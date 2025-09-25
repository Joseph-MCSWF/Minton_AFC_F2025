function UserCard({name,age}){
    return(
        <div style={{border:"solid 3px",marginBottom:"10px",padding:"10px"}} >
            <h2>Hello {name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}
export default UserCard;