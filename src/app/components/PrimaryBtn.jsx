


const PrimaryBtn = ({ text, big }) => {
    return (
        <>
            <button style={{ fontSize: big && '16px', padding: big && "12px 26px", fontWeight: big && "600" }} className="px-4 py-[6px] bg-primaryColor border border-primaryColor hover:bg-textColor text-white rounded-md font-medium capitalize">{text}</button>
        </>
    );
};

export default PrimaryBtn;