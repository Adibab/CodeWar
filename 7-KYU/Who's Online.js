// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

Input = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const whosOnline = (friends) => {
  if (!friends.length) return {};
  const online = [];
  const offline = [];
  const away = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online" && friends[i].lastActivity <= 10) {
      online.push(friends[i].username);
    }
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "offline") {
      offline.push(friends[i].username);
    }
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online" && friends[i].lastActivity > 10) {
      away.push(friends[i].username);
    }
  }

  return {
    ...(online.length && { online }),
    ...(offline.length && { offline }),
    ...(away.length && { away }),
  };
};

console.log(whosOnline(Input));
// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript