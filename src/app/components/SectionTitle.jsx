
const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className='text-center mb-10'>
            <h3 className='font-bold md:text-[35px] text-3xl mb-2'>{title}</h3>
            <p className="text-lg">{subtitle}</p>
        </div>
    );
};

export default SectionTitle;