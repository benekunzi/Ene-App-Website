"use client";

import * as animationData from "@/lottie/robot.json";
import { useLottie } from "lottie-react";

const MyLottieComponent = () => {
    const defaultOptions = {
        animationData: animationData,
        loop: true,
    };

    const { View } = useLottie(defaultOptions);

    return (
        <>
            <div className="">
                <div className="w-4/12 mx-auto">{View}</div>
            </div>
        </>
    );
};

export default MyLottieComponent;