import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Auth = () => {
  return (
    <section className="bg-white text-black flex w-full min-h-screen">
      <Toaster position="top-right" gutter={12} />
      <div className="lg:w-1/2 w-full h-screen p-10">
        <Link href="/">
          <h2 className="text-2xl font-semibold">PaperAdda</h2>
        </Link>
        <div className="flex flex-col lg:flex-row mt-8 w-[80%] mx-auto items-center justify-between">
          <SocialButton image="/google.svg" text="Sign In With Google" />
          <SocialButton image="/facebook.svg" text="Sign In With Google" />
        </div>

        <div className="h-[2px] w-[90%] mx-auto bg-gray-100 mt-8" />
        <RegisterForm />
      </div>
      <div className="w-1/2 hidden lg:block h-screen relative bg-gradient-to-br from-pink-500 via-orange-500 to-indigo-600">
        <div className="absolute bottom-20 left-10 text-white">
          <h2 className="text-2xl font-semibold">PaperAdda</h2>
          <p className="text-xs text-slate-100 mt-2 w-[60%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            at cupiditate! Eveniet possimus consectetur id quia.
          </p>
        </div>
        <div className="absolute h-full w-full bg-white/20 bg- blur-md"></div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ text: string; image: string }> = ({
  image,
  text,
}) => {
  return (
    <button className="flex border ring-1  ring-gray-100 ring-offset-4 rounded-lg px-6 py-2 items-center space-x-3">
      <Image src={image} alt="" width={40} height={40} />
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default Auth;
