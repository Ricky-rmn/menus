"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

const menu = [
  "Gratin de crozet (50g par personne) aux brocolis et escalope de volaille",
  "Risotto (50g cru par personne) de légumes + poulet",
  "Frites de patates douces (200g cru) et poulet rôti",
  "Gnocchis (150g à 200g crusà à la sauce tomate et paupiette de veau",
  "Butternut, lentilles corail (100g cru) et lait de coco",
  "Chou fleur et pomme de terre (200g cru + rôti",
  "Pois chiches (150g en boite) aux légumes + poulet",
  "4 falafels, sauce tomate et salade",
  "Chili con carne (100g de haricot rouge et 30g de riz cru",
  "Epinard, galettes de pomme de terre et oeufs durs",
  "Jardinière de légumes (300g) et lapin",
  "Blanquette de veau avec riz (500g cru)",
];

const jours = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

let generated_menu = (document.getElementById("my_menu").onclick = function () {
  menu_final.innerHTML = "";

  for (let i = 0; i < jours.length; i++) {
    var monMenu = menu[Math.floor(Math.random() * menu.length)];
    document.getElementById("menu_final").innerHTML +=
      "<p>" +
      "<span style='text-decoration:underline'>" +
      jours[i] +
      "</span>" +
      " : " +
      monMenu +
      "</p>";
  }
});
