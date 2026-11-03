/* .js files add interaction to your website */

var factList = [
  "Sexual harassment can be verbal, visual, physical, or technology-facilitated. It can occur in workplaces, public spaces, educational settings, and online.",
  
"Article 28 of the Convention on the Rights of the Child recognizes every child's right to education.",

"According to UNICEF's April 30, 2026 report, about 700,000 children aged 4–17 in Gaza had missed formal in-person schooling for almost three school years.",

"Misinformation is false information shared without the intention to deceive, while disinformation is deliberately spread to mislead others.",

   "According to UNICEF's April 30, 2026 report, nearly 98% of school buildings in Gaza were damaged."
,

 "International humanitarian law requires parties to armed conflicts to distinguish between civilians and combatants. Attacks must not be directed against civilians.",

  "risoners of war must be treated humanely. Torture and cruel treatment are prohibited under the Geneva Conventions.",

"A 2024 UNESCO survey found that 62% of digital content creators do not carry out rigorous and systematic fact-checking before sharing information.",

  "According to UN Women, 151 countries have laws prohibiting sexual harassment in the workplace, but only 39 have laws prohibiting it in public spaces."
  ];

var fact = document.getElementById("fact");
var factbtn = document.getElementById("factbtn");
var count =0;


if (factbtn) {
factbtn.addEventListener("click",display);
}

function display () {
  fact.innerHTML = factList[count];
  count++;
  if(count== factList.length){
    count = 0;
  }
}












