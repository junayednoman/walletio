
import Link from "next/link";
import BodyContainer from "../components/BodyContainer";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const Header = () => {
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
                            menuItems.map(item => <Link className="capitalize font-medium text-textColor" key={item.label} href={item.link}>{item.label}</Link>)
                        }
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <div>
                            <Link href='/login'><SecondaryBtn text='Login' /></Link>
                        </div>
                        <div>
                            <Link href='/sign-up'><PrimaryBtn text='Sign Up' /></Link>
                        </div>
                    </div>
                </div>
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