"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const page = () => {
  const logouthandler = () => {
    signOut({ callbackUrl: "/" });
  };
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data);
  if (status === "loading") {
    return;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  if (status === "authenticated") {
    return (
      <div className=" min-h-screen flex flex-col bg-blue-400 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl m-10 text-white  font-sans ">
            Welcome, <span className=" text-red-700">{data?.user?.name}</span>!
            <div className="flex-col flex justify-center items-center">
            <Image
          className="rounded-lg mt-10"
          src={data?.user?.image}
          alt={`${data?.user?.name}'s profile`}
          height={100}
          width={100}
        /></div>
          </p>
          <p className="text-xl text-white font-sans">
            Verified Email :{" "}
            <span className=" text-red-700"> {data?.user?.email}</span>
          </p>
          <Image
            className="p-10"
            src={"/dash.png"}
            alt="image"
            width={400}
            height={400}
          />
          <button
            className=" text-3xl border-2 border-black rounded-md bg-red-500 p-2 text-white hover:bg-red-400 shadow-2xl"
            onClick={logouthandler}>
            Logout
          </button>
        </div>
      </div>
    );
  }
};

export default page;
