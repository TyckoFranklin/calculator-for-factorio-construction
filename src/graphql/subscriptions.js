// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEntity = `subscription OnCreateEntity {
  onCreateEntity {
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
export const onUpdateEntity = `subscription OnUpdateEntity {
  onUpdateEntity {
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
export const onDeleteEntity = `subscription OnDeleteEntity {
  onDeleteEntity {
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
export const onCreateRecipe = `subscription OnCreateRecipe {
  onCreateRecipe {
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
export const onUpdateRecipe = `subscription OnUpdateRecipe {
  onUpdateRecipe {
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
export const onDeleteRecipe = `subscription OnDeleteRecipe {
  onDeleteRecipe {
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
export const onCreateIngredient = `subscription OnCreateIngredient {
  onCreateIngredient {
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
export const onUpdateIngredient = `subscription OnUpdateIngredient {
  onUpdateIngredient {
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
export const onDeleteIngredient = `subscription OnDeleteIngredient {
  onDeleteIngredient {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateGameItemType = `subscription OnCreateGameItemType {
  onCreateGameItemType {
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
export const onUpdateGameItemType = `subscription OnUpdateGameItemType {
  onUpdateGameItemType {
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
export const onDeleteGameItemType = `subscription OnDeleteGameItemType {
  onDeleteGameItemType {
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
