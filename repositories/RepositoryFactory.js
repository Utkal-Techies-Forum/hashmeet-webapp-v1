import Users from './Users'

const repositories = {
  users: Users
}

export const RepositoryFactoryV2 = {
  get: name => repositories[name]
}
