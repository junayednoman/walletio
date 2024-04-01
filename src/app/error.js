"use client"

import PrimaryBtn from "./components/PrimaryBtn";

const ErrorPage = () => {
    return (
        <div className="flex  flex-col justify-center items-center h-screen mx-4">
            <h3 className="text-5xl text-center mb-12">Oops! Something went wrong!</h3>
            <div onClick={() => location.reload()}>
                <PrimaryBtn big={true} text="try again" />
            </div>
        </div>
    );
};

export default ErrorPage;