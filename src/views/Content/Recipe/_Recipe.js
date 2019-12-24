import { connect } from "react-redux";
import Recipe from './Recipe';
import * as actions from '../../../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        slideshows : state.slideshows,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        demo: (payload) => {
            dispatch({type: actions.UPDATE_SLIDE, payload})
        }
        // createSlideshow: (payload)=>{
        //     dispatch({type: actions.CREATE_SLIDESHOW, payload});
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);