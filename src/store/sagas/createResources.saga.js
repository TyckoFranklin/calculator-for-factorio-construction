import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import { addLoading, removeLoading } from './loadingUtilities';
import { watchFetchAllCategories } from './catagories.saga';
import { watchFetchAllGameTypes } from './gameTypes.saga';
import { watchFetchAllEntities } from './entities.saga';

function* createCategoriesAndTypes(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    const example = {
        "id": "accumulator",
        "name": "Accumulator",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Accumulator",
        "category": "Production",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    }
    try {
        /* get list of all categories and list of all types */
        const entities = yield select(state => state.entitiesJSON);
        const categories = new Set();
        const types = new Set();
        for (const [key, value] of entities) {
            categories.add(value.category);
            types.add(value.type);
        }
        console.log({ categories, types });
        for (const gameId of categories) {
            const result = yield API.graphql(graphqlOperation(mutations.createCategory, { input: { gameId } }));
            console.log(result)
        }
        for (const gameId of types) {
            const result = yield API.graphql(graphqlOperation(mutations.createGameItemType, { input: { gameId } }));
            console.log(result)
        }
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchCreateCategoriesAndTypes() {
    yield takeEvery(actions.SEND_CATEGORIES_TYPES, createCategoriesAndTypes);
}


function* createEntities(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);

    try {
        /* get list of all categories and list of all types */
        // yield call(watchFetchAllGameTypes, actions.FETCH_GAME_TYPES);
        const gameTypes = yield select(state => state.gameTypes);
        // yield call(watchFetchAllCategories, actions.FETCH_CATEGORIES);
        const categories = yield select(state => state.categories);

        console.log(gameTypes, categories);
        /* create lookup maps for gameIds */
        const gameTypesLookup = new Map();
        const categoriesLookup = new Map();

        for (const [key, value] of gameTypes) {
            gameTypesLookup.set(value.gameId, key);
        }

        for (const [key, value] of categories) {
            categoriesLookup.set(value.gameId, key);
        }

        console.log({ gameTypes, gameTypesLookup, categories, categoriesLookup });

        /* Bring in local JSON data (in a Map) to start working on */
        const entitiesJSON = yield select(state => state.entitiesJSON);

        const example = {
            "id": "accumulator",
            "name": "Accumulator",
            "wiki_link": "https://wiki.factorio.com/Accumulator",
            "type": "Machinery",
            "category": "Production",
            "recipe": {
                "time": 10,
                "yield": 1,
                "ingredients": [
                    {
                        "id": "battery",
                        "amount": 5
                    },
                    {
                        "id": "iron-plate",
                        "amount": 2
                    }
                ]
            }
        }
        /* Pseudo code */
        /* whole process needs logging and ways to figure out what elements had issues. Logging needs to reveal how to fix any loose ends, or orphaned resources. */
        /*  #1 Loop through JSON entity objects  */
        /*  #2 Send create statement to graphql for entity and save the resulting dynamoDB id. */
        /*  #3 Nested Loop through recipes (This might just be an object and not an array with the data we have been given) */
        /*  #4 Inside #3, send create statement to graphql for recipe(s), including entity ids, save recipe DynamoDB id(s). */
        /*  #5 Inside #3 Nested Nested Loop through ingredients  */
        /*  #6 Inside #5 send create statements to graphql for each ingredient element, including recipe id, and save the resulting dynamoDB id.  */
        /*  #7 ....  */
        /*  #8 profit  */

        const loggingObject = { successes: [], errors: [], started: [] }
        let currentKeyForError;
        try {
            /* #1 */
            for (const [key, value] of entitiesJSON) {
                currentKeyForError = key;
                loggingObject.started.push(key);
                /* Create new object */
                const formattedEntity = {
                    gameId: value.id,
                    name: value.name,
                    wiki_link: value.wiki_link,
                    entityGameItemTypeId: gameTypesLookup.get(value.type),
                    entityCategoryId: categoriesLookup.get(value.category),
                }
                /* #2 */
                const entityResult = yield API.graphql(graphqlOperation(mutations.createEntity, { input: formattedEntity }));
                loggingObject.successes.push(key);
            }
        } catch (e) {
            loggingObject.errors.push(currentKeyForError);
            console.error({ Error: e })
        }
        console.log(loggingObject);


        // const categories = new Set();
        // const types = new Set();
        // for(const [key,value] of entities){
        //     categories.add(value.category);
        //     types.add(value.type);
        // }
        // console.log({categories, types});
        // for(const gameId of categories){
        //     const result = yield API.graphql(graphqlOperation(mutations.createCategory,{input:{gameId}}));
        //     console.log(result)
        // }
        // for(const gameId of types){
        //     const result = yield API.graphql(graphqlOperation(mutations.createGameItemType,{input:{gameId}}));
        //     console.log(result)
        // }
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchCreateEntities() {
    yield takeEvery(actions.CREATE_ENTITIES, createEntities);
}


function* createRecipes(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);

    try {
        /* get list of all entities */
        const entities = yield select(state => state.entities);

        console.log(entities);
        /* create lookup maps for gameIds */
        const entitiesLookup = new Map();

        for (const [key, value] of entities) {
            entitiesLookup.set(value.gameId, key);
        }


        console.log({ entities, entitiesLookup });

        /* Bring in local JSON data (in a Map) to start working on */
        const entitiesJSON = yield select(state => state.entitiesJSON);

        const example = {
            "id": "accumulator",
            "name": "Accumulator",
            "wiki_link": "https://wiki.factorio.com/Accumulator",
            "type": "Machinery",
            "category": "Production",
            "recipe": {
                "time": 10,
                "yield": 1,
                "ingredients": [
                    {
                        "id": "battery",
                        "amount": 5
                    },
                    {
                        "id": "iron-plate",
                        "amount": 2
                    }
                ]
            }
        }
        /* Pseudo code */
        /* whole process needs logging and ways to figure out what elements had issues. Logging needs to reveal how to fix any loose ends, or orphaned resources. */
        /*  #1 Loop through JSON entity objects  */
        /*  #2 Send create statement to graphql for entity and save the resulting dynamoDB id. */
        /*  #3 Nested Loop through recipes (This might just be an object and not an array with the data we have been given) */
        /*  #4 Inside #3, send create statement to graphql for recipe(s), including entity ids, save recipe DynamoDB id(s). */
        /*  #5 Inside #3 Nested Nested Loop through ingredients  */
        /*  #6 Inside #5 send create statements to graphql for each ingredient element, including recipe id, and save the resulting dynamoDB id.  */
        /*  #7 ....  */
        /*  #8 profit  */

        const loggingObject = { successes: [], errors: [], started: [] }
        for (const [key, value] of entitiesJSON) {
            try {
                /* #1 */
                loggingObject.started.push(key);

                if (value.recipe) {
                    const formattedRecipe = {
                        time: value.recipe.time,
                        "yield": value.recipe.yield,
                        recipeEntityId: entitiesLookup.get(key),
                    };
                    const recipeResult = yield API.graphql(graphqlOperation(mutations.createRecipe, { input: formattedRecipe }));
                    if (value.recipe.ingredients) {
                        for (const ingredient of value.recipe.ingredients) {
                            const formattedIngredient = {
                                gameId: ingredient.id,
                                amount: ingredient.amount,
                                ingredientRecipeId: recipeResult.data.createRecipe.id,
                                ingredientEntityId: entitiesLookup.get(key),
                            };
                            const ingredientResult = yield API.graphql(graphqlOperation(mutations.createIngredient, { input: formattedIngredient }));
                        }
                    }
                }
                loggingObject.successes.push(key);

            } catch (e) {
                loggingObject.errors.push(key);
                console.error({ Error: e })
            }
        }
        console.log(loggingObject);


        // const categories = new Set();
        // const types = new Set();
        // for(const [key,value] of entities){
        //     categories.add(value.category);
        //     types.add(value.type);
        // }
        // console.log({categories, types});
        // for(const gameId of categories){
        //     const result = yield API.graphql(graphqlOperation(mutations.createCategory,{input:{gameId}}));
        //     console.log(result)
        // }
        // for(const gameId of types){
        //     const result = yield API.graphql(graphqlOperation(mutations.createGameItemType,{input:{gameId}}));
        //     console.log(result)
        // }
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchCreateRecipes() {
    yield takeEvery(actions.CREATE_RECIPES, createRecipes);
}

