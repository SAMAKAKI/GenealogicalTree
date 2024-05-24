/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../config/genealogicaltree-6e0e2-firebase-adminsdk-74kt0-e5f4045782.json';

@Injectable()
export class AdminService implements OnModuleInit {
  private firestore: FirebaseFirestore.Firestore;
  private auth: admin.auth.Auth;
  
  onModuleInit() {
    if (!admin.apps.length) {
      const firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      });

      this.firestore = firebaseApp.firestore();
      this.auth = firebaseApp.auth();
    } else {
      const firebaseApp = admin.app(); // reuse the existing app
      this.firestore = firebaseApp.firestore();
      this.auth = firebaseApp.auth();
    }
  }

  getFirestore(): admin.firestore.Firestore {
    return this.firestore;
  }

  getAuth(): admin.auth.Auth {
    return this.auth;
  }
}
