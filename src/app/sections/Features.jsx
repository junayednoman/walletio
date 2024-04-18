import BodyContainer from "../components/BodyContainer";
import FeaturesCard from "../components/FeaturesCard";
import SectionTitle from "../components/SectionTitle";
import track from "@/media/receipt.png"
import budget from "@/media/budget.png"
import forecast from "@/media/forecast.png"

const Features = () => {
    return (
        <div id="features" className="lg:mt-[130px] md:mt-[80px] mt-[50px] lg:mb-20 md:mb-12 mb-10">
            <BodyContainer>
                <SectionTitle title="Our Features" subtitle="Explore Powerful Features of Walletio" />
                <div className="grid lg:grid-cols-3 xl:gap-8 gap-6 grid-cols-1">
                    <div>
                        <FeaturesCard img={track} title="Intuitive Expense Tracking" text=" Effortlessly log your expenses with user-friendly interface of Walletio. Easily add, edit, and categorize transactions to stay organized." />
                    </div>
                    <div>
                        <FeaturesCard img={budget} title="Smart Budget Management" text="Set personalized budgets for different expense categories and track your spending in real-time. Receive alerts when nearing budget limits to stay on track." />
                    </div>
                    <div>
                        <FeaturesCard img={forecast} title="Insightful Analytics" text="Gain valuable insights into your spending habits with detailed reports and visual analytics. Identify and make informed financial decisions." />
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
};

export default Features;