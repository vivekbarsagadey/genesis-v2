import NextAuth,{NextAuthOptions} from 'next-auth';
import CreadentialsProvider from 'next-auth/providers/creadentials';

const authOptions : NextAuthOptions ={
    session:{
        strategy:'jwt'
    },
    providers:[
        CreadentialsProvider({
            type:'creadentials',
            creadentials:{},
            authorize(creadentials,req){
                const {email,password} = creadentials as{
                    email:string;
                    password:string;
                };
                if (email !== "mailto:piraji@gmail.com" || password !== "1234") {
                    throw new Error("invalid credentials");
                  }
                  return {
                    id: "1234",
                    name: "Piraji survase",
                    email: "mailto:piraji@gmail.com",
                    role: "admin",
                  };

            },
        }),
    ],
    Pages: {
        signIn: "/login",
        
    }
    session: { strategy: "jwt" },

}
export default NextAuth