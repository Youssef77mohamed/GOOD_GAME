import React from "react";
import ButtonLog from "../../components/navbar/login&signInBtn/Button";
import MainNavBar from "../../components/navbar";
import FooterBtn from "../../components/footer/FooterBtn";
import IconsSocial from "../../components/footer/Icons-Social";
import RankingsData from "../../components/Rankings";
import BackToTopButton from "../../components/back to top/BackToTop";

export default function RankingsPage() {
  return (
        <>
        <ButtonLog />
        <MainNavBar />
        <RankingsData/>
        <BackToTopButton/>
        <IconsSocial/>
        <FooterBtn/>
        </>
  );
}
