import { connect } from "react-redux";
import Recipe from './Recipe';
import * as actions from '../../../../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        recipes : state.recipes,
        entities : state.entities,
        perSecond : state.perSecond,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPerSecond: (payload)=>{
            dispatch({type: actions.SET_PER_SECOND, payload});
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);