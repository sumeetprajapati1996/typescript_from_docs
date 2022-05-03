// Declring 'this' in a function

/**
 * TypeScript will infer what the this should be in a function via code flow analysis
 */
const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

/**
 * there are a lot of cases where you need more control over what object this represents.
 * The JavaScript specification states that you cannot have a parameter called this,
 * and so TypeScript uses that syntax space to let you declare the type for this in the function body.
 */
interface User {
  id: number;
  admin: boolean;
}

declare const getDB: () => DB;

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

/**
 * This pattern is common with callback-style APIs,
 * where another object typically controls when your function is called.
 * Note that you need to use function and not arrow functions to get this behavior
 */
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
const db1 = getDB();
const admins1 = db.filterUsers(() => this.admin);
