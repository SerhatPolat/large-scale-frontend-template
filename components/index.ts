import dynamic from "next/dynamic";

const BaseComponent = dynamic(() => import("./BaseComponent/BaseComponent"));

export { BaseComponent };
