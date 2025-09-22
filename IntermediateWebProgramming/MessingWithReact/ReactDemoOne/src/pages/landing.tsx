export default function Landing() {
    return(
    <div style={{
        display:'grid',
        gridTemplateColumns:'1fr auto 1fr',
        alignItems: 'center',
        gridGap:'8',
        padding:'10px 14px',
        color:"rgb(48,255,0)",
        fontWeight:"bold",
        backgroundColor:"rgba(0,50,255,0.55)"}}>
        <span style={{justifySelf:'start'}}>This will be the Logo and Company name</span>
        <span style={{justifySelf:'center',fontSize:50}}>Welcome to React Demo One</span>
        <span style={{justifySelf:'end'}}>This will be the hamburger menu</span>
    </div>
        )
}