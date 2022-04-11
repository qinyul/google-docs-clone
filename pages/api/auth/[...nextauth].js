import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { collection,query,getDocs,where,limit,doc,getDoc,addDoc,updateDoc,deleteDoc,runTransaction,serverTimestamp, setDoc } from "firebase/firestore";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../firebase";
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  adapter:FirebaseAdapter({db,collection,query,getDocs,where,limit,doc,getDoc,addDoc,updateDoc,deleteDoc,runTransaction,serverTimestamp,setDoc}),
  events:{
    async createUser({user}){
        // verified email because emailVerified is null to begin with
        const dbRef = doc(db,'users',user.id)
        
        try{
          await updateDoc(dbRef,{
            emailVerified:serverTimestamp()
          })
        }catch(err){
          console.error(err)
        }
    }
  },
  secret:'this is secret',

})