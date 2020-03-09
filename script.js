const { ko } = window;

var viewModel = {
  Foods: ko.observableArray([
    { emoji: "🍏", name: "Grüner Apfel" },
    { emoji: "🍎", name: "Roter Apfel" },
    { emoji: "🍐", name: "Birne" },
    { emoji: "🍊", name: "Mandarine" },
    { emoji: "🍋", name: "Zitrone" },
    { emoji: "🍌", name: "Banane" },
    { emoji: "🍉", name: "Wassermelone" },
    { emoji: "🍇", name: "Trauben" },
    { emoji: "🍓", name: "Erdbeere" },
    { emoji: "🍈", name: "Melone" },
    { emoji: "🍒", name: "Kirschen" },
    { emoji: "🍑", name: "Pfirsich" },
    { emoji: "🍍", name: "Ananas" },
    { emoji: "🥥", name: "Kokosnuss" },
    { emoji: "🥝", name: "Kiwi" },
    { emoji: "🍅", name: "Tomate" },
    { emoji: "🥑", name: "Avocado" },
    { emoji: "🍆", name: "Aubergine" },
    { emoji: "🌶", name: "Chili" },
    { emoji: "🥒", name: "Gurke" },
    { emoji: "🥦", name: "Brokkoli" },
    { emoji: "🌽", name: "Maiskolben" },
    { emoji: "🥕", name: "Karotte" },
    { emoji: "🥗", name: "Grüner Salat" },
    { emoji: "🥔", name: "Kartoffel" },
    { emoji: "🍠", name: "Geröstete Süßkartoffel" },
    { emoji: "🥜", name: "Erdnüsse" },
    { emoji: "🍯", name: "Honigtopf" },
    { emoji: "🍞", name: "Brot" },
    { emoji: "🥐", name: "Croissant" },
    { emoji: "🥖", name: "Baguette" },
    { emoji: "🥨", name: "Brezel" },
    { emoji: "🥞", name: "Pfannkuchen" },
    { emoji: "🧀", name: "Käsestück" },
    { emoji: "🍗", name: "Geflügelschenkel" },
    { emoji: "🍖", name: "Fleisch am Knochen" },
    { emoji: "🥩", name: "Stück Fleisch" },
    { emoji: "🍤", name: "Frittierte Garnele" },
    { emoji: "🥚", name: "Ei" },
    { emoji: "🍳", name: "Kochen" },
    { emoji: "🥓", name: "Speck" },
    { emoji: "🍔", name: "Hamburger" },
    { emoji: "🍟", name: "Pommes frites" },
    { emoji: "🌭", name: "Hot Dog" },
    { emoji: "🍕", name: "Pizzastück" },
    { emoji: "🍝", name: "Spaghetti" },
    { emoji: "🥪", name: "Sandwich" },
    { emoji: "🥙", name: "Gefülltes Fladenbrot" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🌯", name: "Burrito" },
    { emoji: "🍜", name: "Dampfende Schüssel" },
    { emoji: "🥘", name: "Flache Pfanne mit Essen" },
    { emoji: "🍲", name: "Schale mit Essen" },
    { emoji: "🥫", name: "Dosen-Fraß" },
    { emoji: "🍥", name: "Fischfrikadelle mit Wirbelverzierung" },
    { emoji: "🍣", name: "Sushi" },
    { emoji: "🍱", name: "Bento-Box" },
    { emoji: "🍛", name: "Reis mit Curry" },
    { emoji: "🍙", name: "Reisbällchen" },
    { emoji: "🍚", name: "Gekochter Reis" },
    { emoji: "🍘", name: "Reiscracker" },
    { emoji: "🥟", name: "Teigtasche" },
    { emoji: "🍢", name: "Oden" },
    { emoji: "🍡", name: "Dango" },
    { emoji: "🍧", name: "Shaved Ice" },
    { emoji: "🍨", name: "Eiscreme" },
    { emoji: "🍦", name: "Softeis" },
    { emoji: "🍰", name: "Shortcake" },
    { emoji: "🎂", name: "Geburtstagstorte" },
    { emoji: "🥧", name: "Kuchen" },
    { emoji: "🍮", name: "Vanillepudding/Eiercreme" },
    { emoji: "🍭", name: "Lutscher" },
    { emoji: "🍬", name: "Bonbon" },
    { emoji: "🍫", name: "Schokoladentafel" },
    { emoji: "🍿", name: "Popcorn" },
    { emoji: "🍩", name: "Donut" },
    { emoji: "🍪", name: "Cookie" },
    { emoji: "🥠", name: "Glückskeks" },
    { emoji: "☕", name: "Heißgetränk" },
    { emoji: "🍵", name: "Teetasse ohne Henkel" },
    { emoji: "🥣", name: "Schüssel mit Löffel" },
    { emoji: "🍼", name: "Babyfläschchen" },
    { emoji: "🥤", name: "Becher mit Strohhalm" },
    { emoji: "🥛", name: "Glas Milch" },
    { emoji: "🍺", name: "Bierkrug" },
    { emoji: "🍻", name: "Anstoßende Bierkrüge" },
    { emoji: "🍷", name: "Weinglas" },
    { emoji: "🥂", name: "Anstoßende Gläser" },
    { emoji: "🥃", name: "Tumblerglas" },
    { emoji: "🍸", name: "Cocktailglas" },
    { emoji: "🍹", name: "Cocktail" },
    { emoji: "🍾", name: "Flasche mit knallendem Korken" },
    { emoji: "🍶", name: "Sake-Flasche und -Tasse" },
    { emoji: "🥄", name: "Löffel" },
    { emoji: "🍴", name: "Messer und Gabel" },
    { emoji: "🍽", name: "Gabel und Messer mit Teller" },
    { emoji: "🥢", name: "Stäbchen" },
    { emoji: "🥡", name: "Essen to go" }
  ]),
  fusion: ko.observable()
};

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

ko.applyBindings(viewModel);

{
  const food1 = viewModel.Foods().sample();
  const food2 = viewModel.Foods().sample();

  viewModel.fusion(`&nbsp;
      <food-fusion>
        <food>${food1.emoji}</food>
        <food>${food2.emoji}</food>
       <info>(${food1.name}-${food2.name}</info>)
      </food-fusion>
     `);
}