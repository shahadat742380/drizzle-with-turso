// import components
import Chats from "@/sections/Chats";
import Messages from "@/sections/Messages";
import User from "@/sections/User";

export default async function Home() {
  return (
    <main>
      <User />
      <Chats />
      <Messages />
    </main>
  );
}
