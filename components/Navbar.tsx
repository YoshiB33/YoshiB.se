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
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        {!user && <Link href="/api/auth/login"><a>Login</a></Link>}
        {user && <Link href="/api/auth/logout"><a>Logout</a></Link>}
        {user && <Link href="/profile"><a>Profile</a></Link>}
        <a className="Name">{user?.name}</a>

     </nav>
    )
}

export default nav