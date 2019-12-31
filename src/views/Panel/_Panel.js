import { connect } from "react-redux";
import Panel from './Panel';
import * as actions from '../../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        recipes : state.recipes,
        entities : state.entities,
        selectedEntity : state.selectedEntity,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedEntity: (payload)=>{
            dispatch({type: actions.SET_SELECTED_ENTITY, payload});
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);