// import hooks
import useAxios from "@/utils/useAxios";

// User Data types
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const User = async () => {
  const axios = useAxios();

  const response = await axios.get("/users");
  const users = response.data;

  // console.log(users);
  return (
    <main>
      <h1 className="text-center text-3xl font-bold text-green-500 my-10">
        All users {users.length}
      </h1>
      <hr className="" />
      <div className="max-w-7xl mx-auto px-5 my-5">
        <table className="mx-auto">
          <thead>
            <tr className="border-b  ">
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">First Name</th>
              <th className="py-3 px-5">Last Name</th>
              <th className="py-3 px-5">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User, idx: number) => (
              <tr key={user.id} className="border-b ">
                <td className="py-3 px-5">{idx + 1}</td>
                <td className="py-3 px-5">{user.first_name}</td>
                <td className="py-3 px-5">{user.last_name}</td>
                <td className="py-3 px-5">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default User;
