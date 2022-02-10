import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  // make sure we wait for everything to load
  if (isLoading) return <div>Loading...</div>;

  // if theres an error, show that
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Profile</h1>
      <Head>
        <title>Profile | YoshiB.se</title>
      </Head>

      {/* show the user information */}
      {user && (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
        )}
        {!user && [
            <>
            <h1>Why are you here, you are not logged in!</h1>
            </>
        ]}
    </div>
  );
}