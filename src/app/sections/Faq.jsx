import BodyContainer from "../components/BodyContainer";
import SectionTitle from "../components/SectionTitle";

const Faq = () => {

    return (
        <div className="lg:mt-[130px] md:mt-[80px] mt-[50px] lg:mb-20 md:mb-12 mb-10">
            <BodyContainer>
                <SectionTitle title="Frequently Asked questions(FAQ)" subtitle="Answers to Your Common Queries" />
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is Walletio?
                    </div>
                    <div className="collapse-content">
                        <p>Walletio is an intuitive expense management web app designed to help individuals and businesses efficiently track, categorize, and analyze their expenses. It provides powerful tools for budgeting, expense tracking, and generating insightful reports to better manage finances.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How secure is Walletio for storing my financial data?
                    </div>
                    <div className="collapse-content">
                        <p>Walletio prioritizes the security and privacy of your financial data. We utilize industry-standard encryption protocols to secure all data transmitted between your device and our servers. Additionally, our servers are hosted in secure data centers with robust security measures to safeguard your data against unauthorized access.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I access Walletio on my mobile device?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, Walletio is fully optimized for mobile devices, allowing you to access your expense data anytime, anywhere. Whether you are using a smartphone or tablet, you can conveniently manage your expenses on the go through responsive web interface of Walletio.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How does Walletio categorize expenses?
                    </div>
                    <div className="collapse-content">
                        <p>Walletio offers a customizable categorization system that enables you to categorize expenses according to your preferences. You can create custom categories tailored to your specific needs and easily assign expenses to these categories. Walletio also provides intelligent categorization suggestions to streamline the process.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is there a free trial available for Walletio?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, Walletio offers a free trial period for new users to experience the full functionality of the app. During the trial period, you will have access to all features, including budgeting tools, expense tracking, and reporting capabilities. At the end of the trial, you will have the option to subscribe to a paid plan to continue using Walletio.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is Walletio compliant with Bangladeshi financial regulations and data privacy laws?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely, Walletio prioritizes compliance with Bangladeshi financial regulations and data privacy laws to ensure the security and confidentiality of your financial information. Our platform adheres to strict data protection standards and employs robust encryption measures to safeguard your sensitive data. You can trust Walletio to handle your financial information with the utmost care and compliance with Bangladeshi laws and regulations.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-secondaryColor rounded-md">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I export my expense data from Walletio?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, Walletio provides the option to export your expense data for further analysis or backup purposes. You can easily export your expenses in various formats, such as CSV (Comma-Separated Values) or PDF, making it convenient to share reports with accountants, import data into other financial software, or maintain your own records offline.</p>
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
};

export default Faq;