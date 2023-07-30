
// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-[90%] md:w-4/12 mx-auto text-center mb-12 my-">
            <p className="text-[#D99904] italic mb-4 mt-24">{subHeading}</p>
            <h2 className="text-[40px] border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;