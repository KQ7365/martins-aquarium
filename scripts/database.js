const database = {
  fish: [
    {
      image:
        "https://thumbs.dreamstime.com/b/ai-generated-stunning-image-colorful-fish-was-created-using-power-generative-intricate-patterns-vibrant-hues-273478251.jpg",
      Species: "Fake1",
      Length: 5,
      Nickname: "Frodo",
      Harvest: "Fiji",
      Diet: "Fish Food",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/fish-that-is-floating-water-generative-ai_791316-18211.jpg?w=2000",
      Species: "Fake2",
      Length: 10,
      Nickname: "Gandalf",
      Harvest: "Aruba",
      Diet: "Worms",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/vibrant-clown-fish-colorful-coral-reef-generated-artificial-intelligence-vibrant-clown-fish-colorful-coral-reef-generated-274156446.jpg",
      Species: "Fake3",
      Length: 18,
      Nickname: "Sam",
      Harvest: "Aqaba",
      Diet: "Bugs",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/023/184/222/large_2x/eye-of-a-fish-in-the-water-3d-illustration-3d-rendering-ai-generative-image-free-photo.jpg",
      Species: "Fake4",
      Length: 9,
      Nickname: "Pip",
      Harvest: "Jamaica",
      Diet: "Humans",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bua5O-pBFbES5k6Tovn8Wl23a-EoqV9KXA&usqp=CAU",
      Species: "Fake5",
      Length: 5,
      Nickname: "Johnny",
      Harvest: "Lake Michigan",
      Diet: "Worms",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/05/54/54/24/1000_F_554542461_swlrgzepN6U1ddhGJmG1FrjmOBm30XYQ.jpg",
      Species: "Fake6",
      Length: 7,
      Nickname: "Timmy",
      Harvest: "Kentucky Lake",
      Diet: "Seaweed",
    },
    {
      image:
        "https://images.nightcafe.studio/jobs/xpZlXsjx6jORI6BnxtxH/xpZlXsjx6jORI6BnxtxH_4x.jpg?tr=w-1600,c-at_max",
      Species: "Fake7",
      Length: 15,
      Nickname: "Tigger",
      Harvest: "Atlantic Ocean",
      Diet: "Sharks",
    },
    {
      image:
        "https://storage.googleapis.com/pai-images/fd7d31b38669416c8dcb773a093af8b2.jpeg",
      Species: "Fake8",
      Length: 6,
      Nickname: "Took",
      Harvest: "Caspian Sea",
      Diet: "Aliens",
    },
  ],

  Tips: [
    {
      image:
        "https://images.nightcafe.studio/jobs/uS6UVgWIWBHHiKNYEib1/uS6UVgWIWBHHiKNYEib1_2x.jpg?tr=w-1600,c-at_max",
      cleaner: "Clean with windex",
      watertemp: "Keep water at 80 degrees",
      thoughts: "Best tank ever!",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
export const getTips = () => {
  return database.Tips.map((Tips) => ({ ...Tips }));
};
