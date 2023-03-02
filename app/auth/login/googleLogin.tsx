import Image from "next/image";
import GoogleLogo from "@/assets/other/googleicon.png";
import { auth, signInWithGoogle } from "@/function/firebase/auth";
import React from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { Circles } from "react-loader-spinner";

export default function GoogleSignIn() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <button
      className="border-buttonPrimary text-buttonPrimary mt-4 border-2 w-full pl-5 font-semibold py-4 flex-center rounded-full"
      onClick={() => signInWithGoogle()}
    >
      <Image
        src={GoogleLogo}
        width={20}
        height={20}
        alt={""}
        className="mr-7"
      />
      {isLoading ? (
        <div className="text-white">
          <Circles color="white" height={16} />
        </div>
      ) : (
        "Lanjutkan dengan Google"
      )}
    </button>
  );
}
