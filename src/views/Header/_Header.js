import { connect } from "react-redux";
import Header from './Header';
import * as actions from '../../store/redux/actions'



const mapStateToProps = (state) => {
    return {
        slideshows : state.slideshows,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createSlideshow: (payload)=>{
        //     dispatch({type: actions.CREATE_SLIDESHOW, payload});
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);