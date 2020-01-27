import { connect } from "react-redux";
import Control from './Control';
import * as actions from '../../../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        recipes : state.recipes,
        entities : state.entities,
        perSecond : state.perSecond,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStepsShown: (payload)=>{
            dispatch({type: actions.SET_STEPS_SHOWN, payload});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);