import { getServerSession } from "next-auth";
import LoginButton from "../components/LoginButton";
import { authOptions } from "../lib/auth";
import LogoutButton from "../components/LogoutButton";

export default async function Page() {
  const session: {
    status: string;
    user: { email: string; name: string; image: string };
  } | null = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="grid min-h-screen place-items-center">
        <LoginButton />
      </main>
    );
  }
  // const { data: session } = useSession();
  // debugger;

  return (
    <main className="min-h-screen flex justify-center flex-col items-center">
      <img
        alt="avatar"
        src={session?.user?.image}
        width={80}
        className="rounded-full"
      />
      <h2>Hola {session?.user?.name}</h2>
      <LogoutButton />
    </main>
  );
}
