import { connect } from "react-redux"

function Counter(props) {
    return <>{`Count : ${props.count}`}</>
}
const mapStateToProps=(state,ownProps)=>{
    return{
        ...ownProps,
        count:state.counter.count,
    }
}
export default connect(mapStateToProps)(Counter)  