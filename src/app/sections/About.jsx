import BodyContainer from "../components/BodyContainer";
import SectionTitle from "../components/SectionTitle";

const About = () => {
    return (
        <div id="features" className="lg:mt-[130px] md:mt-[80px] mt-[50px] lg:mb-20 md:mb-12 mb-10">
            <BodyContainer>
                <SectionTitle title="About Walletio" subtitle="Empowering Your Financial Journey" />
                <div className="">
                    <iframe
                        className="w-full xl:h-[620px] lg:h-[500px] md:h-[400px] h-[210px]"
                        src="https://www.youtube.com/embed/fNxjNFiwxiA?si=RDWBZj6VQBDW1WcD"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </BodyContainer>
        </div>
    );
};

export default About;