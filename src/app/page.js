import Image from "next/image";
import Logo from "../assets/images/Logo_Oryx.png";
import LogoFacebook from "../assets/icons/Facebook.png";
import LogoInstagram from "../assets/icons/Instagram.png";
import LogoTwitter from "../assets/icons/Twitter.png";
import LogoYoutube from "../assets/icons/Youtube.png";
import Countdown from "./countdown";

export default function Home() {
  return (
    <div className="grid w-full h-full min-h-screen grid-rows-1 lg:grid-cols-2">
      <div className="px-[61px] grid grid-rows-4 bg-white #gap-[50px] items-center order-2 py-[40px]  xl:py-[0]">
        <div className="flex items-center justify-center w-full h-full">
          <Image src={Logo} alt="Oryx" className="object-contain"></Image>
        </div>
        <div className="row-span-2 flex flex-col items-center justify-center space-y-[60px]">
          <div className="flex flex-col items-center justify-center space-y-[15px]">
            <p className="text-[18px] text-[rgba(0,_0,_0,_0.70)] font-josefin">
              STAY TUNED
            </p>
            <div className="space-y-[5px] flex flex-col items-center justify-center">
              <p className="text-[48px] xl:text-[64px]  text-black text-center font-imFeel">
                We Will Launch Soon
              </p>
              <p className="text-[#00000080] text-[14px] font-chivo">
                subscribe to get notification as soon as we launch!
              </p>
            </div>
          </div>

          <div className="flex space-x-[25px] items-center">
            <input
              type="text"
              className="border-black focus:shadow-md font-chivo border-[1px] rounded-[15px] text-[#00000066] text-[16px] xl:text-[24px]"
              placeholder="Enter your e-mail"
            />
            <button className="rounded-[15px] bg-[#2F2013] border-black font-chivo border-[1px] shadow p-[10px] hover:opacity-[0.9] active:opacity-[0.8] active:scale-95 text-[14px] xl:text-[16px]">
              NOTIFY ME
            </button>
          </div>
        </div>

        <div className="flex flex-col self-end mb-[15px] justify-center items-center space-y-[17px]">
          <div className="flex items-center space-x-[30px]">
            <Image
              src={LogoFacebook}
              className="cursor-pointer hover:scale-95"
              alt="logo-facebook"
            />
            <Image
              src={LogoInstagram}
              className="cursor-pointer hover:scale-95"
              alt="logo-instagram"
            />
            <Image
              src={LogoTwitter}
              className="cursor-pointer hover:scale-95"
              alt="logo-twitter"
            />
            <Image
              src={LogoYoutube}
              className="cursor-pointer hover:scale-95"
              alt="logo-youtube"
            />
          </div>
          <a
            href="mailto:storyx.id@gmail.com"
            className="text-[16px] text-black font-chivo"
          >
            Our E-mail :{" "}
            <span className="text-[#00000080] cursor-pointer">
              storyx.id@gmail.com
            </span>
          </a>
        </div>
      </div>
      <div className="bg-cover bg-[url(../assets/images/background.png)] lg:order-[3] bg-no-repeat flex items-center justify-center space-x-[30px] xl:py-[0] py-[24px]">
        {/* <div className="flex items-center justify-center space-x-[30px] w-full">
          {["30", "15", "40", "05"].map((value) => (
            <p key={value} className="text-[45px] text-white">
              {value}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-[30px] w-full">
          {["DAY", "HOURS", "MINUTES", "SECONDS"].map((value) => (
            <p key={value} className="text-[24px] text-white">
              {value}
            </p>
          ))}
        </div> */}

        <Countdown />
      </div>
    </div>
  );
}
