import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link"

const nav = () => {
    const { user, error, isLoading } = useUser();

    // make sure we wait for everything to load
    if (isLoading) return <div>Loading...</div>;
  
    // if theres an error, show that
    if (error) return <div>{error.message}</div>;
    return (
     <nav>
       <div className="logo">
        <h1>YoshiB.se</h1>


       </div>
        {/* user is not logged in */}
        {/* show login button */}
        {!user && <Link href="/api/auth/login"><a>Login</a></Link>}
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>

        {/* user is logged in */}
        {/* show user info and logout button */}
        {user && (
          <>
            <Link href="/api/auth/logout"><a>Logout</a></Link>
            <Link href='/profile'><a>Profile</a></Link>
            <name>{user.name}</name>
            <img src={user.picture} alt={user.name}/> 
          </>
        )}
     </nav>
    )
}

export default nav