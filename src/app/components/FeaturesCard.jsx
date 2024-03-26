import Image from "next/image";

const FeaturesCard = ({ img, title, text }) => {
    return (
        <div className="border xl:p-8 p-5 xl:px-9 xl:min-h-[280px] lg:min-h-[310px] px-7 rounded-md duration-200 border-[#ccc] hover:border-primaryColor flex flex-col justify-between">
            <Image className="w-[60px]" src={img} alt="feature icon" width={undefined} height={undefined}></Image>
            <div>
                <h5 className="text-xl font-semibold mb-2 mt-7">{title}</h5>
                <p className="text-[15px]">{text}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;