import { connect } from "react-redux";
import App from './App';
import * as actions from '../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        slideshows : state.slideshows,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // demo: (payload) => {
        //     dispatch({type: actions.UPDATE_SLIDE, payload})
        // }
        // createSlideshow: (payload)=>{
        //     dispatch({type: actions.CREATE_SLIDESHOW, payload});
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);