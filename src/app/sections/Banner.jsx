import Link from "next/link";
import BodyContainer from "../components/BodyContainer";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

const Banner = () => {
    return (
        <div className="xl:py-[150px] lg:py-[100px] md:py-20 py-16 text-center bg-secondaryColor">
            <BodyContainer>
                <div className="xl:space-y-20 md:space-y-14 space-y-12">
                    <h1 className="font-extrabold xl:text-7xl lg:text-[55px] text-[44px] leading-[50px]">Your Expenses, in Your Control</h1>
                    <p className="md:text-xl text-base md:w-[700px] mx-auto text-textColor">Stay on top of your finances with Walletio. Take control of your expenses and manage them with ease. Start now for a clearer financial future.</p>
                    <div className="flex items-center gap-4 justify-center">
                        <Link href='/login'>
                            <PrimaryBtn big={true} text='get started' />
                        </Link>
                        <a href='#features'>
                            <SecondaryBtn big={true} text='learn more' />
                        </a>
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
};

export default Banner;