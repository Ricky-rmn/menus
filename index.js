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
  "Gratin de crozet (50g par personne) aux brocolis + escalope de volaille",
  "Risotto (50g cru par personne) de légumes + poulet",
  "Frites de patates douces (200g cru) et poulet rôti",
  "Tagliatelles (150g cuits) au saumon + légumes",
  "Butternut, lentilles corail (100g cru) et lait de coco",
  "Gnocchis (150g à 200g crus) à la sauce tomate et paupiette de veau",
  "Chou fleur et pomme de terre (200g cru + rôti",
  "Tomates farcies + viande hachée + riz (50g cru",
  "Pois chiches (150g en boite) aux légumes + poulet",
  "4 falafels, sauce tomate et salade",
  "Chili con carne (100g de haricot rouge et 30g de riz cru)",
  "Epinard, galettes de pomme de terre et oeufs durs",
  "Jardinière de légumes (300g) et lapin",
  "Blanquette de veau avec riz (500g cru)",
  "Steak de veau et semoule (50g cru) et ratatouille",
  "Lentilles (150g) à la carotte et escalope de dinde à la moutarde",
  "Oeuf cocotte aux champignons et jambon + 2 tartines de pain",
  "Flageolets (150g) à la tomate + filet",
  "Omelette + pomme de terre (200g) + salade",
  "Gratin de courgettes au bacon",
  "Steak végétal + crudités",
  "Blé + carottes + brocolis + sauce soja + poulet mariné",
  "Galette de sarasin (x2) + tomate + jambon ",
  "Fondue de poireaux + crevettes + riz (50g)",
  "Wraps de légumes (x2)",
  "Veloutés de petits pois + escalope",
  "Purée de pois cassé + cuisse de poulet",
  "Salade de riz à l'avocat + poivrons + tomates + thon",
  "Velouté de butternut + bacon grillé + pain",
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
