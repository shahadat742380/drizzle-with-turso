// import hooks
import useAxios from "@/utils/useAxios";

// User Data types
interface Chat {
  id: number;
  email: string;
  subject: string;
  title: string;
  description: string;
}

const Chats = async () => {
  const axios = useAxios();

  const response = await axios.get("/chats");
  const chats = response.data;
  //   console.log(chats);

  return (
    <main className="mb-10">
      <h1 className="text-center text-3xl font-bold text-green-500 my-10">
        All Chats {chats.length}
      </h1>
      <hr className="" />
      <div className="max-w-7xl mx-auto px-5 my-5">
        <table className="mx-auto">
          <thead>
            <tr className="border-b  ">
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Subject</th>
              <th className="py-3 px-5">Title</th>
              <th className="py-3 px-5">Description</th>
            </tr>
          </thead>
          <tbody>
            {chats.map((chat: Chat, idx: number) => (
              <tr key={chat.id} className="border-b ">
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="py-3 px-5">{chat.email}</td>
                <td className="py-3 px-5">{chat.subject}</td>
                <td className="py-3 px-5">{chat.title}</td>
                <td className="py-3 px-5">{chat.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Chats;
