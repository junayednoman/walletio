


const SecondaryBtn = ({ text, big }) => {
    return (
        <>
            <button style={{ fontSize: big && '16px', padding: big && "12px 26px" , fontWeight: big && "600"}} className="px-4 py-[6px] border-[#ccc] hover:border-primaryColor duration-200 border text-primaryColor rounded-md font-medium capitalize">{text}</button>
        </>
    );
};

export default SecondaryBtn;