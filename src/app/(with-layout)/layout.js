import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

export default function WithHeaderLayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}