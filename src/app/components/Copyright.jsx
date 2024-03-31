import Link from "next/link";
import BodyContainer from "./BodyContainer";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";



const Copyright = () => {
    return (
        <div className="">
            <BodyContainer>
                <div className="flex md:flex-row flex-col gap-7 md:text-left text-center items-center justify-between">
                    <div className="flex md:flex-row flex-col items-center gap-7 text-[15px] text-textColor">
                        <div>
                            <p>Copyright © 2024 Walletio. Made with love by <strong>Junayed Noman</strong></p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href='/privacy-policy'>Privacy Policy</Link>
                            <Link href='/terms-conditions'>Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="p-2 border-primaryColor hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white duration-200 border rounded-full" href="#" target="_blank"><BiLogoFacebook className="text-lg" /></a>
                        <a className="p-2 hover:border-[#EE2E79] border-primaryColor instaIcon hover:text-white duration-200 border rounded-full" href="#" target="_blank"><FaInstagram className="text-lg" /></a>
                        <a className="p-2 border-primaryColor hover:border-[#000] hover:bg-[#000] hover:text-white duration-200 border rounded-full" href="#" target="_blank"><FaXTwitter className="text-base" /></a>
                        <a className="p-2 border-primaryColor hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white duration-200 border rounded-full" href="#" target="_blank"><FaLinkedinIn className="text-base" /></a>
                        <a className="p-2 border-primaryColor hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white duration-200 border rounded-full" href="#" target="_blank"><FaYoutube className="text-base" /></a>
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
}

export default Copyright;