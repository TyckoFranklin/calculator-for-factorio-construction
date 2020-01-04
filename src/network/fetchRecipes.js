import stubbedJson from "./stubs/recipes";

/**
 * gets json data of the recipes
 */

// export const fetchRecipes = () => {
//     return fetch(
//         "https://raw.githubusercontent.com/kevinta893/factorio-recipes-json/master/recipes.json",
//         {method:"Get"}
//     )
//     .then(r=>r.json())
//     .then(j=>j)

    // return new Promise.resolve(stubbedJson)
// }
export const fetchRecipes = () => {
    return stubbedJson;
}