// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEntity = `query GetEntity($id: ID!) {
  getEntity(id: $id) {
    id
    gameId
    name
    wiki_link
    gameItemType {
      id
      gameId
      entities {
        nextToken
      }
      owner
    }
    category {
      id
      gameId
      entities {
        nextToken
      }
      owner
    }
    recipes {
      items {
        id
        time
        yield
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listEntitys = `query ListEntitys(
  $filter: ModelentityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gameId
      name
      wiki_link
      gameItemType {
        id
        gameId
        owner
      }
      category {
        id
        gameId
        owner
      }
      recipes {
        items {
            id
            time
            yield
        }
      }
      owner
    }
    nextToken
  }
}
`;
export const getRecipe = `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
    id
    time
    yield
    ingredients {
      items {
        id
        gameId
        amount
        owner
      }
      nextToken
    }
    entity {
      id
      gameId
      name
      wiki_link
      gameItemType {
        id
        gameId
        owner
      }
      category {
        id
        gameId
        owner
      }
      recipes {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const listRecipes = `query ListRecipes(
  $filter: ModelrecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      time
      yield
      ingredients {
        nextToken
      }
      entity {
        id
        gameId
        name
        wiki_link
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getIngredient = `query GetIngredient($id: ID!) {
  getIngredient(id: $id) {
    id
    gameId
    amount
    recipe {
      id
      time
      yield
      ingredients {
        nextToken
      }
      entity {
        id
        gameId
        name
        wiki_link
        owner
      }
      owner
    }
    entity {
      id
      gameId
      name
      wiki_link
      gameItemType {
        id
        gameId
        owner
      }
      category {
        id
        gameId
        owner
      }
      recipes {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const listIngredients = `query ListIngredients(
  $filter: ModelingredientFilterInput
  $limit: Int
  $nextToken: String
) {
  listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gameId
      amount
      recipe {
        id
        time
        yield
        owner
      }
      entity {
        id
        gameId
        name
        wiki_link
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    gameId
    entities {
      items {
        id
        gameId
        name
        wiki_link
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listCategorys = `query ListCategorys(
  $filter: ModelcategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gameId
      entities {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getGameItemType = `query GetGameItemType($id: ID!) {
  getGameItemType(id: $id) {
    id
    gameId
    entities {
      items {
        id
        gameId
        name
        wiki_link
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listGameItemTypes = `query ListGameItemTypes(
  $filter: ModelgameItemTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameItemTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gameId
      entities {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
