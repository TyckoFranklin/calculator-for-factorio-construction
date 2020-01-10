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
            dispatch({type: actions.FETCH_GAME_TYPES})
            dispatch({type: actions.FETCH_CATEGORIES})
            dispatch({type: actions.FETCH_ENTITIES})
            dispatch({type: actions.FETCH_RECIPES})
            dispatch({type: actions.FETCH_INGREDIENTS})
        }
        // createSlideshow: (payload)=>{
        //     dispatch({type: actions.CREATE_SLIDESHOW, payload});
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);