import gql from 'graphql-tag';

export default gql`
  type GoalSet {
    phone: String
    text: String
    beer: String
  }

  input GoalSetInput {
    phone: String
    text: String
    beer: String
  }

  input TargetGoalValues {
    phone: String
    text: String
    beer: String
    cadence: String
  }

  type GoalSetCollection {
    currentGoals: GoalSet
    targetGoals: GoalSet
    cadence: String
  }

  input GoalSetCollectionInput {
    targetGoals: GoalSetInput
    cadence: String
  }

  input FriendInput {
    name: String!
    icon: String
    friendScore: Int
    description: String
    goalSetCollection: GoalSetCollectionInput
    username: String!
  }

  type Friend {
    username: String
    name: String
    icon: String
    description: String
    friendScore: Int
    goalSetCollection: GoalSetCollection
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input RegistrationInput {
    username: String!
    password: String!
  }

  type User {
    username: String!
    name: String
    friends: [Friend]
  }

  type AuthResponse {
    message: String
    username: String
    token: String
  }

  type Query {
    user(username: String!): User
    users: [User]
    friend(username: String!, name: String!): Friend
    friends: [Friend]
  }

  type Mutation {
    updateFriendTargetGoals(name: String!, targetGoalValues: TargetGoalValues): String

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(name: String): String
    removeFriends(ignoreString: String): String

    removeUser(username: String): String
    registerUser(registrationInput: RegistrationInput!): AuthResponse
    removeUsers(ignoreString: String): String
    loginUser(loginInput: LoginInput!): AuthResponse
  }
`;
