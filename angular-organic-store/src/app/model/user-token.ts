export class UserToken {
  id: number;
  username: string;
  admin: boolean;
  exp: number;

  constructor(id: number, sub: string, admin: boolean, exp: number) {
    this.id = id;
    this.username = sub;
    this.admin = admin;
    this.exp = exp;
  }
}
