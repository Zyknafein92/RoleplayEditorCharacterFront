export class NewCharacter {
  fullName: string;
  nickName: string;
  age: number;
  rank: string;


  constructor(fullName: string, nickName: string, age: number, rank: string) {
    this.fullName = fullName;
    this.nickName = nickName;
    this.age = age;
    this.rank = rank;
  }
}
