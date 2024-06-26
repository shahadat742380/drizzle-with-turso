// import hooks
import useAxios from "@/utils/useAxios";

// User Data types
interface Messages {
  id: number;
  name: string;
  message: string;
  subject: string;
  email: string;
}

const Messages = async () => {
  const axios = useAxios();

  const response = await axios.get("/messages");
  const messages = response.data;
  // console.log(messages);

  return (
    <main className="mb-10">
      <h1 className="text-center text-3xl font-bold text-green-500 my-10">
        All Messages {messages.length}
      </h1>
      <hr className="" />
      <div className="max-w-7xl mx-auto px-5 my-5">
        <table className="mx-auto">
          <thead>
            <tr className="border-b  ">
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Subject</th>
              <th className="py-3 px-5">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message: Messages, idx: number) => (
              <tr key={message.id} className="border-b ">
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="py-3 px-5">{message.name}</td>
                <td className="py-3 px-5">{message?.email}</td>
                <td className="py-3 px-5">{message?.subject}</td>
                <td className="py-3 px-5">{message?.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Messages;
