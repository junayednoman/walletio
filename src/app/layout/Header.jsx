
"use client"
import Link from "next/link";
import BodyContainer from "../components/BodyContainer";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";


const Header = () => {
    const [isLoginModalShow, setIsLoginModalShow] = useState(false);
    const [isSignUpModalShow, setIsSignUpModalShow] = useState(false);

    const handleSignIn = () => {
        document.getElementById('login_modal').showModal();
        setIsLoginModalShow(true);
    }
    const handleSignUp = () => {
        document.getElementById('signup_modal').showModal();
        setIsSignUpModalShow(true);
    }
    return (
        <header className="py-4">
            <BodyContainer>
                <div className="flex items-center">
                    <div>
                        <Link href='/'>
                            <h3 className="text-[32px] font-bold text-primaryColor">Walletio</h3>
                        </Link>
                    </div>
                    <div className="items-center gap-8 ml-20 md:flex hidden">
                        {
                            menuItems.map(item => <Link className="capitalize font-medium hover:text-primaryColor text-textColor" key={item.label} href={item.link}>{item.label}</Link>)
                        }
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <div onClick={handleSignIn}>
                            <SecondaryBtn text='Login' />
                        </div>
                        <div onClick={handleSignUp}>
                            <PrimaryBtn text='Sign Up' />
                        </div>
                    </div>
                </div>
                {/* Login modal */}
                <dialog id="login_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setIsLoginModalShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {
                            isLoginModalShow &&
                            <>
                                <h3 className="font-bold text-2xl">Please login!</h3>
                                <div className="mt-6 ">
                                    <LoginForm setIsLoginModalShow={setIsLoginModalShow} />
                                </div>
                            </>
                        }
                    </div>
                </dialog>
                {/* Sign Up modal*/}
                <dialog id="signup_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setIsSignUpModalShow(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {
                            isSignUpModalShow && <>
                                <h3 className="font-bold text-2xl">Please Sign up!</h3>
                                <div className="mt-6 ">
                                    <RegisterForm setIsSignUpModalShow={setIsSignUpModalShow} />
                                </div>
                            </>
                        }
                    </div>
                </dialog>
            </BodyContainer>
        </header>
    );
};

export default Header;

const menuItems = [
    { label: "home", link: "/" },
    { label: "about", link: "/about" },
    { label: "contact", link: "/contact" },
]