import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { SignUpModel } from '../models/sign-up-model.model';
import { SignInModel } from '../models/sign-in-model.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;

  constructor() { }

  get User() {
    return this.currentUser || JSON.parse(localStorage.getItem("currentUser")) as User;
  }

  set User(value) {
    this.currentUser = value;
  }

  public signUp(userModel: SignUpModel): Observable<void> {
    return this.addMockUser(userModel.email, userModel.password);

  }

  public signIn(userModel: SignInModel): Observable<User> {
    return this.getUser(userModel.email, userModel.password);
  }

  public async logOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.currentUser = null;
      localStorage.setItem("currentUser", null);
      resolve(null);
    });
  }

  private addMockUser(email: string, password): Observable<void> {
    const promise = new Promise<void>((resolve, reject) => {
      const name = email.split("@")[0];
      if (users.filter(u => u.email == email))
        reject(`Such user with ${email} email already exists!`);
      users.push({ name: name, email: email, password: password, token: "" });
      resolve();
    });
    return from(promise);

  }

  private getUser(email: string, password): Observable<User> {
    const promise = new Promise<User>((resolve, reject) => {
      const user = users.filter(u => u.email == email && u.password == password)[0];
      if (!user) {
        reject("Wrong email or paassword!")
      }
      resolve({ name: user.name });
    });
    return from(promise);
  }
}

const users = [
  {
    name: "TestUser",
    email: "ffv438@gmail.com",
    password: "test123",
    token: "token"
  }
]
