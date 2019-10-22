import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(public db: AngularFirestore) {}

  createUser(value) {
    return this.db.collection('user').add({
      userId: value.userId,
      userName: value.userName,
      useremail: value.userEmail.toLowerCase(),
      userPhoto: value.userPhoto
    });
  }
  getUser(userKey) {
    return this.db.collection('user').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('user').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('user').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('user').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('user', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

}
