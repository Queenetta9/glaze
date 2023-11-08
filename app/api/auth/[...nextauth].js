// auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: {  label: "Password",  type: "password" }
      },
      authorize: async (credentials) => {
        // Add your own logic to validate user credentials here
        const user = { id: 1, name: 'John Doe' }

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  // Add session configuration here (e.g., JWT)
})
