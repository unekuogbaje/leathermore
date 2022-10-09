import { initializeApp  } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
  } from 'firebase/auth';

  import {
    getFirestore,
    doc,
    getDoc,
    setDoc,

  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNR7g5RV56Lp1IqueVciCfSym9ssYO-FQ",
    authDomain: "so-clean-cd12b.firebaseapp.com",
    projectId: "so-clean-cd12b",
    storageBucket: "so-clean-cd12b.appspot.com",
    messagingSenderId: "413427791357",
    appId: "1:413427791357:web:8b36857577a0616460d594"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid );

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // user data does not exist
    // create / set the documen with the data from userAuth in my collection

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    // user data exists
    // return userDocRef

    return userDocRef;
  };