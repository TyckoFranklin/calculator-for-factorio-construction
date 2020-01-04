// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEntity = `mutation CreateEntity($input: CreateEntityInput!) {
  createEntity(input: $input) {
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
export const updateEntity = `mutation UpdateEntity($input: UpdateEntityInput!) {
  updateEntity(input: $input) {
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
export const deleteEntity = `mutation DeleteEntity($input: DeleteEntityInput!) {
  deleteEntity(input: $input) {
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
export const createRecipe = `mutation CreateRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
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
export const updateRecipe = `mutation UpdateRecipe($input: UpdateRecipeInput!) {
  updateRecipe(input: $input) {
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
export const deleteRecipe = `mutation DeleteRecipe($input: DeleteRecipeInput!) {
  deleteRecipe(input: $input) {
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
export const createIngredient = `mutation CreateIngredient($input: CreateIngredientInput!) {
  createIngredient(input: $input) {
    id
    gameId
    amount
    entity {
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
    owner
  }
}
`;
export const updateIngredient = `mutation UpdateIngredient($input: UpdateIngredientInput!) {
  updateIngredient(input: $input) {
    id
    gameId
    amount
    entity {
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
    owner
  }
}
`;
export const deleteIngredient = `mutation DeleteIngredient($input: DeleteIngredientInput!) {
  deleteIngredient(input: $input) {
    id
    gameId
    amount
    entity {
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
    owner
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
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
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
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
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
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
export const createGameItemType = `mutation CreateGameItemType($input: CreateGameItemTypeInput!) {
  createGameItemType(input: $input) {
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
export const updateGameItemType = `mutation UpdateGameItemType($input: UpdateGameItemTypeInput!) {
  updateGameItemType(input: $input) {
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
export const deleteGameItemType = `mutation DeleteGameItemType($input: DeleteGameItemTypeInput!) {
  deleteGameItemType(input: $input) {
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
