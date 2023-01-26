import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function cart() {
  const { t, lang } = useTranslation("common");
  return <div>{t("variable-example", { count: "zzz" })}</div>;
}
