// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { createOrUpdateUser } from '../Api'
import message from '../Utils/message'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2-5FAY77t7eAUbPY1JoV6h2Jkh8xEnzk',
  authDomain: 'sophiaiai.firebaseapp.com',
  projectId: 'sophiaiai',
  storageBucket: 'sophiaiai.appspot.com',
  messagingSenderId: '864346948380',
  appId: '1:864346948380:web:cad7548888a1ca337c30d9',
  measurementId: 'G-T27CN66EKD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const providerMap = {
  google: {
    instance: googleProvider,
    class: GoogleAuthProvider,
  },
  github: {
    instance: githubProvider,
    class: GithubAuthProvider,
  },
}
export default () => {
  const navigate = useNavigate()

  const saveUserInfo = async(user) => {
    return createOrUpdateUser({
      id: user.uid,
      email: user.email || user.providerData?.[0]?.email,
      info: {
        signInMethod: user.signInMethod,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
      },
    })
  }
  const loginWithEmailAndPassword = async({ email, password }) => {
    try {
      await setPersistence(auth, browserSessionPersistence)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      if (!userCredential.user.emailVerified) {
        message.success('Please check your email to verify your account')
        await sendEmailVerification(userCredential.user)
      } else {
        message.success('Login successfully')
        navigate('/')
      }
    } catch (error) {
      const errorCode = error.code
      console.log(errorCode)
    }

  }

  const resetPassword = async({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email)
      message.success('Please check your email')
    } catch (error) {
      message.error('Something went wrong')
    }
  }
  const signInWithEmail = async({ email, password }) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      await saveUserInfo({
        ...credential.user,
        signInMethod: 'emailAndPassword',
      })
      await loginWithEmailAndPassword({ email, password })
    } catch (error) {
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        await loginWithEmailAndPassword({ email, password })
      }
    }

  }

  const signInWithType = async(type) => {

    try {
      const provider = providerMap[type]
      console.log(providerMap, type, providerMap[type])
      if (!provider) {
        throw new Error('Invalid provider')
      }
      await setPersistence(auth, browserSessionPersistence)

      const result = await signInWithPopup(auth, provider.instance)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.class.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      result._tokenResponse.isNewUser && await saveUserInfo({
        ...user,
        signInMethod: credential.signInMethod,
      })
      message.success('Login successfully')
      navigate('/')
    } catch (error) {
      console.log(error)
      message.error('Something went wrong')
    }

  }

  const logout = async() => {
    await auth.signOut()
  }
  //Google
  //Facebook
  return {
    signInWithEmail,
    signInWithType,
    resetPassword,
    logout,
  }
}
