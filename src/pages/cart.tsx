import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function cart() {
    const { t, lang } = useTranslation("what");
    return <div>cart</div>;
}
