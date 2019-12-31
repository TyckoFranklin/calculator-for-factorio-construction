import { connect } from "react-redux";
import App from './App';
import * as actions from 'store/redux/actions'



const mapStateToProps = (state) => {
    return {
        slideshows : state.slideshows,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => {
            dispatch({type: actions.FETCH_RECIPES})
        }
        // createSlideshow: (payload)=>{
        //     dispatch({type: actions.CREATE_SLIDESHOW, payload});
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);