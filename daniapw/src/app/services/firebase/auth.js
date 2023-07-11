import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


function registrer(email, password){
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=> {
    // Signed in
    const user = userCredential.user;
    console.log(UserCredential)
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage =error.message;
    console.log(errorCode, errorMessage)
    // .. 
  });
}

export { login, registrer }
