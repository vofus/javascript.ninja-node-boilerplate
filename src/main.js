// @flow

type UserType = {
  name: string
};

function sayHello(user: UserType) {
  global.console.log(`Hello ${user.name}`);
}

sayHello({ name: "Vofus" });
