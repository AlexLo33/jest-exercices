// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

// getPersonnalInformations()
export const getPersonnalInformations = (login, property) => {
  const findUser = users.find((user) => user.login === login);
  if (!findUser) {
    throw new Error("Could not find user");
  }

  if (!findUser[property]) {
    throw new Error("Could not find property");
  }

  return findUser[property];
};
