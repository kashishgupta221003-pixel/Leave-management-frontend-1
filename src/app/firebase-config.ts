import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "__apiKey__",
//   authDomain: "__authDomain__",
//   projectId: "__projectId__",
//   storageBucket: "__storageBucket__",
//   messagingSenderId: "__messagingSenderId__",
//   appId: "__appId__"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDhg39RSx8_GKF9VNIrkGIUqNtghe1xP_A",
  authDomain: "kasishgupta-project.firebaseapp.com",
  projectId: "kasishgupta-project",
  storageBucket: "kasishgupta-project.firebasestorage.app",
  messagingSenderId: "427919814652",
  appId: "1:427919814652:web:a2fc43c49bdada39bbcc79"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);