import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Prisma } from "../../../libs/prisma";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        const userFound = await prisma.usuarios.findFirst({
            where: {
                email: credentials.email
            }
        })

        if (!userFound) throw new Error('No user found')

        console.log(userFound)

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error('Wrong password')

        return {
            id: userFound.id,
            name: userFound.username,
            email: userFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  }
};

export async function loginIsRequiredServer(){
  const session = await getServerSession(authOptions)
  console.log(session)

  if(!session) return redirect("/auth/login")
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
