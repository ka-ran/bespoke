import Member from "./Member";

let members: Member[] = [
  {
    id: "123",
    name: "Daniel Heath",
    age: 35,
    rating: 3.3,
    activities: ["Hiking", "Swimming", "Rafting", "Walking"],
  },
  {
    id: "2imw",
    name: "Elizabeth Hurley",
    age: 24,
    rating: 4.0,
    activities: ["Camping", "Hunting", "Rafting", "Walking"],
  },

  {
    id: "1smaasm3",
    name: "Hugo Burnett",
    age: 29,
    rating: 4.2,
    activities: ["Fishing", "Swimming", "Rock Climbing", "Biking"],
  },

  {
    id: "1ssslma3",
    name: "Broderick Higgins",
    age: 22,
    rating: 4.7,
    activities: ["Biking", "Horseback riding", "Canoeing", "Fishing"],
  },

  {
    id: "1ssslckmd3",
    name: "John",
    age: 21,
    rating: 2.5,
    activities: ["Sailing", "Motorboating", "Skiing"],
  },
  {
    id: "1ssiei3",
    name: "Isis Burton",
    age: 45,
    rating: 3.6,
    activities: ["Canoeing", "Rock Climbing", "Rafting"],
  },

  {
    id: "1sssl2o3",
    name: "Matteo Cook",
    age: 29,
    rating: 3.9,
    activities: ["Hiking", "Camping", "Kayaking"],
  },

  {
    id: "1ss11ma3",
    name: "Baron Copeland",
    age: 31,
    rating: 4.3,
    activities: ["Sailing", "Motorboating", "Biking"],
  },
  {
    id: "12o3sslma3",
    name: "John Carpenter",
    age: 25,
    rating: 4.1,
    activities: ["Swimming", "Rafting", "Walking"],
  },
];

let fetchMembers = () => {
  return members;
};

export { fetchMembers };
