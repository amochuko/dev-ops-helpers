const users = {
  '4': { name: 'Mark' },
  '5': { name: 'Paul' },
};

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userId = parseInt(url.slice('/users/'.length), 10);
    console.log('userId:', userId);

    process.nextTick(() =>
      users[userId]
        ? resolve(users[userId])
        : reject({ error: `User with ${userId} not found.` }),
    );
  });
}
