import React from "react";
import Topaz_1 from "../../images/wishing-well/Topaz_1.jpg";
import Topaz_2 from "../../images/wishing-well/Topaz_3.jpg";
import Topaz_3 from "../../images/wishing-well/Topaz_4.jpg";

export default function TextWishingWell() {
  return (
    <>
      <p className=" fw-bold">Attention Mercenaries,</p>
      <p>
        We have exciting news! The Black Market has just been updated with a new
        addition that offers even better chances of obtaining your desired
        weapons.
      </p>
      <p>
        Try your luck from May 10 to June 14 by opening Citrine crates and
        increase your chances with the Wishing Well!
      </p>
      <img src={Topaz_1} alt="Topaz-1" />
      <p>
        Under the Citrine Well tab, you will find a selection of brand-new Noble
        weapons, as well as some of your favorite weapons that were previously
        released. cenary Pass!
      </p>
      <p>Here are the new weapons available:</p>
      <ul>
        <li>M4A1-S-Cumulus Demon</li>
        <li>Gatling Gun-Cumulus Dragon </li>
        <li>AWM-Verdure Ironhawk</li>
        <li>Shovel-Cumulus Demon</li>
        <li>Kukri-Beast-Noble Jade</li>
      </ul>
      <p>You can also win these popular weapons:</p>
      <ul>
        <li>Kar 98K-Noble Electric Beast</li>
        <li>9A-91-Noble Wild Eagle </li>
        <li>QBZ-03-Noble Jewelry</li>
        <li>Dao-Astral Dragon</li>
      </ul>
      <p>
        If you don't win a weapon, you will still gain a random amount of
        exchange coins from opening Citrine crates, which you can use to redeem
        each weapon once.
      </p>
      <img src={Topaz_2} alt="Topaz_2" />
      <p>
        But wait, there's more! Each Citrine crate you open also gives you a
        Wishing Ticket with a random amount of Wishing EXP. The Wishing Well
        will grant your favorite weapons once you have accumulated enough
        Wishing EXP.
      </p>
      <p>
        Once you have earned enough Wishing EXP, you can redeem your prize and
        switch to another wish. However,
        <span className="text-danger fw-bold">
          be careful not to switch while you have already placed EXP, or your
          progress will be reset.
        </span>
      </p>
      <img src={Topaz_3} alt="Topaz_3" />

      <p>
        May all your wishes come true, and may the Wishing Well never run dry!
      </p>
      <p>Best fishes,</p>

      <p className="text-warning fw-bold fst-italic">-GOODGAME Team.</p>
    </>
  );
}
