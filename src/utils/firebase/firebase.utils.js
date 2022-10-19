import { initializeApp  } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
  ) => {
  if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid );

    const userSnapshot = await getDoc(userDocRef);
    // user data does not exist
    // create / set the documen with the data from userAuth in my collection

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    // user data exists
    // return userDocRef

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  };