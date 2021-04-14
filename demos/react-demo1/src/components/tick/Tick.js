// # create Tick component with function
function Tick(props){
    return (
        <div>
            <h6>Now is : {props.date.toLocaleTimeString()}</h6>
        </div>
    )
}
export default Tick;