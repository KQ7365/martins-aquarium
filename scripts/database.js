const database = {
  fish: [
    {
      Species: "Fake1",
      Length: "1 foot",
      Nickname: "Frodo",
      Harvest: "Fiji",
      Diet: "Fish Food",
    },
    {
      Species: "Fake2",
      Length: "2 feet",
      Nickname: "Gandalf",
      Harvest: "Aruba",
      Diet: "Worms",
    },
    {
      Species: "Fake3",
      Length: "3 feet",
      Nickname: "Sam",
      Harvest: "Aqaba",
      Diet: "Bugs",
    },
    {
      Species: "Fake4",
      Length: "4 feet",
      Nickname: "Pip",
      Harvest: "Jamaica",
      Diet: "Humans",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
