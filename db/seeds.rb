# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.find_or_create_by([{ name: 'Star Wars' }, { name: 'Lord of the Rings')
#   Character.create(name: 'Luke', movie: movies.first)

events_data = [
  {
    title: 'Aragorn II Elessar is crowned the King of Gondor',
    snippet: 'Aragorn II, the son of Arathorn II and Gilraen, also known as Elessar as well as Strider. 16th Chieftain of the Dúnedain of the North; he was later crowned King Elessar Telcontar (March 1, 2931 - FO 120 or SR 1541), the 26th King of Arnor, and the 35th King of Gondor and first High King of Gondor and Arnor, since the short reign of Isildur.',
    body: 'Upon Sauron\'s defeat, Aragorn was crowned as King Elessar, a name given to him by Galadriel. He became the twenty-sixth King of Arnor, thirty-fifth King of Gondor and the first High King of the Reunited Kingdom, though it would be several years before his authority was firmly reestablished in Arnor. His line was referred to as the House of Telcontar (Telcontar being Quenya for "Strider"). Aragorn married Arwen shortly afterwards, and ruled the Kingdom of Gondor and Arnor until 120 of the Fourth Age. His reign was marked by great harmony and prosperity within Gondor and Arnor, and by a great renewal of cooperation and communication between Men, Elves, and Dwarves, fostered by his vigorous rebuilding campaign following the war. Aragorn led the forces of the Reunited Kingdom on military campaigns against some Easterlings and Haradrim, re-establishing rule over much territory that Gondor had lost in previous centuries. ',
    date: Date.new(2017,3,1),
    location: 'Minas Tirith'
  },
  {
    title: 'The Battle at the Black Gate',
    snippet: 'The Black Gate was the site of the last valiant battle of the War of the Ring, in the East.',
    body: 'The Black Gate was the site of the last valiant battle of the War of the Ring, in the East. In March 3019, the Army of the West commanded by Aragorn Elessar and numbering some 6,000 men (plus one Elf, one Dwarf, and a Wizard and one Hobbit) arrived at the Black Gate and challenged the many remaining armies of Mordor. Their intention was to draw the watchful Eye of Sauron away from Mount Doom, to allow Frodo the Ring-bearer to cast the One Ring into the Crack of Doom and destroy it. The delay worked and the Ring was destroyed in the fires of Mount Doom, following which the Black Gate and the Towers of the Teeth immediately collapsed.',
    date: Date.new(2016,3,12),
    location: 'The Black Gate'
  },
  {
    title: 'Battle of the Pelennor Fields',
    snippet: 'The Battle of the Pelennor Fields was a battle for the city of Minas Tirith, and ultimately for Gondor, during the War of the Ring. It was the greatest battle of the War of the Ring, and indeed the largest of the entire Third Age. Major casualties resulted from this battle - including the deaths of King Théoden and the Witch-king of Angmar.',
    body: 'On the morning of March 10, 3019, the "Dawnless Day" began. Sauron sent forth a large mass of dark and foul clouds to cover the lands of Gondor (Possibly parts of Rohan as well, though it is never indicated in the book or the movie). Sauron\'s purpose was to spread fear and uncertainty among his enemies, as well as to aid his dark servants; it was said that dread was one of his greatest weapons. The forces of Mordor arrived on two fronts: the army of the Lord of The Nazgûl came forth from Minas Morgul (through the Morgul Vale), and the other up the river Anduin from Umbar; mainly the ships of the Corsairs with Haradrim and Easterlings. On March 14, 3019, the Siege of Gondor began, and on the morning of March 15, the Army of Rohan arrived with 6000 riders. While this was not enough for a decisive turn of the battle, it held the enemy off until the Umbar ships arrived, carrying, instead of corsairs: Aragorn and Halbarad, Gimli and Legolas, the Sons of Elrond, and the rest of the Grey Company.',
    date: Date.new(2016,3,10),
    location: 'Minas Tirith'
  },
  {
    title: 'Fall of Osgiliath',
    snippet: 'The Battle of Osgiliath was a battle during the War of the Ring at the ruined city of Osgiliath - and a prelude to the Battle of the Pelennor Fields.',
    body: 'On March 9, Faramir sent his forces to reinforce the garrison at Osgiliath, expecting a large blow from the enemy. After giving a report to Denethor, he left on March 11 to command the garrison. That night, they were attacked. On March 12, Faramir retreated to the Causeway Forts. Once there, he did his best to hold the rearguard, lest the retreat turn into a rout. However, he was wounded on the approach back to Minas Tirith by a foul dart of the enemy.',
    date: Date.new(2016,3,9),
    location: 'Osgiliath'
  },
  {
    title: 'The Founding of Gondor',
    snippet: 'Before the Downfall of Númenor, the region that would become Gondor was home to many Númenórean colonists, who either mingled with the indigenous Middle Men if they were friendly, or dispersed them into Ras Morthil, Dunland, and Drúadan Forest. The land on which Gondor was founded was more fertile than the more northerly areas of Middle-earth, and therefore it already had a fairly large population and settlements, including a well-established haven, Pelargir founded by the Faithful Númenóreans in the year 2350 of the Second Age.',
    body: 'Before the Downfall of Númenor, the region that would become Gondor was home to many Númenórean colonists, who either mingled with the indigenous Middle Men if they were friendly, or dispersed them into Ras Morthil, Dunland, and Drúadan Forest. The land on which Gondor was founded was more fertile than the more northerly areas of Middle-earth, and therefore it already had a fairly large population and settlements, including a well-established haven, Pelargir founded by the Faithful Númenóreans in the year 2350 of the Second Age.

    The refugees from Númenor led by Isildur and Anárion were given a warm reception upon their arrival by those Númenórean colonists. Those north of the river Anduin accepted Elendil\'s claim to kingship over them, being a heir of the Faithful Lords of Andúnie. South of the Great River, however, there were also-newly-exiled Black Númenóreans, descendants of the King\'s Men of Númenor, who opposed the Faithful, and therefore did not recognize Elendil\'s claim. Much of Gondor\'s early history was marked by conflict with the Black Númenóreans.

    After their arrival and acceptance by the people, Isildur and Anárion put themselves to the task of ordering their realm. Isildur took the area then known as Arnen (later Ithilien) and built the tower of Minas Ithil near Mordor as a threat to the Black Land, and within its walls he planted a seedling of the White Tree of Númenor that he had taken before its burning. Anárion raised the tower of Minas Anor on the other side of Anduin\'s floodplain as a bulwark against the Wild Men. In between their cities, the brothers founded Osgiliath, their capital, from which they jointly reigned; these three cities also housed three of the palantíri, the Seeing Stones that the Faithful had taken with them from Númenor, to maintain contact with Elendil and the other areas under their control.',
    date: Date.new(1000,1,1),
    location: 'Middle-earth'
  },
  {
    title: 'War of the Last Alliance',
    snippet: 'The War of the Last Alliance was the war late in the Second Age in which the Last Alliance of Elves and Men marched against the fortress of Sauron, Barad-dûr in Mordor. Against all hope, they were victorious, but when the One Ring was not destroyed, Sauron rose again during the long years of the Third Age.',
    body: 'Perceiving that his enemies of old had escaped the downfall, Sauron\'s wrath was great and in 3429 he launched an attack upon Isildur\'s fortress, Minas Ithil. Believing that Sauron had perished in the Downfall of Númenor, they were completely taken by surprise, Minas Ithil was taken, and the White Tree of Gondor that Isildur had planted there was burned. Nevertheless Isildur, his wife and children escaped, saving a seedling of the tree, too, and sailing down Anduin journeyed to Elendil\'s realm in Arnor. There Elendil and Gil-galad, High King of the Noldor forged the Last Alliance of Elves and Men in 3430, to defeat Sauron ultimately. Meanwhile Anárion held out in Gondor, defending Osgiliath and Minas Anor.

    In S.A. 3431 the Elves of Lindon led by Gil-galad and Círdan marched eastward and where awaited by Elendil at Amon Sûl. The combined host marched towards Imladris, where they joined with Lord Elrond, who was Gil-galad\'s herald, and acted as his second-in-command in the coming campaign.

    The united host rested for about three years in Imladris, forging weapons and making plans. They crossed the Misty Mountains over many passes and marched down Anduin where they were joined by Dwarves from Khazad-dûm, Elves from Greenwood the Great led by Oropher and his son Thranduil, and Lothlórien Elves under Amdír. At the southern eaves of Eryn Galen the host turned south-east and marched through desolate areas that had once been the Entwives\' gardens. They, and probably the Entwives themselves, had been destroyed by Sauron to deprive the Alliance\'s forces of supplies.

    The Alliance entered the vast plain outside Mordor where they were joined by Anárion\'s forces. There Sauron\'s host awaited them from the north-west.',
    date: Date.new(1500,1,1),
    location: 'Mount Doom'
  },
  {
    title: 'The Battle of Dagorlad',
    snippet: 'The Battle of Dagorlad was the major battle of the War of the Last Alliance during the late Second Age.',
    body: 'The battle took place in the year SA 3434. It was fought between the army of the Last Alliance under Gil-galad and Elendil against an army of Orcs and other creatures loyal to Sauron, on the plains of Dagorlad just outside Mordor between Emyn Muil and Cirith Gorgor. The Last Alliance met with the Anarion\'s Numenorean army which was holding Osgiliath and Minas Ithil, they marched to Dagorlad. Oropher and Amdír, annoyed by Gil-galad\'s command, prematurely charged at the enemy and were driven back, and Amdír along with many Galadhrim Warriors died in the Dead Marshes. Eventually, the Alliance was able to drive back the the enemy forces and the army of the Last Alliance won the battle and was able to attack the Black Gate and proceeded to Udûn.

    Later, in the Third Age of Middle-earth, the Dagorlad was the site of many battles between Gondor and various Easterlings armies. Many of the bodies of those slain in the battle on both sides came to occupy the marshes at the foot of Emyn Muil, and were preserved nearly intact for several millennia. The area had long been known as the Dead Marshes by the time Frodo crossed it on March 1 and 2, 3019.',
    date: Date.new(1511,3,2),
    location: 'Dagorlad'
  },
  {
    title: 'Isildur plants a seedling of the White Tree at Minas Anor',
    snippet: 'The White Tree of Gondor was the symbol of the realm of Gondor, growing in the Court of the Fountain at Minas Tirith. The White Tree was also the motif of Gondor\'s flag.',
    body: 'The first White Tree of Gondor came from a fruit that Isildur, at great personal risk, managed to steal from Nimloth the Fair, the White Tree of Númenor, before that one was destroyed at Sauron\'s insistence. He suffered many wounds at this mission, and he came near death, but when the first leaf opened in the spring, Isildur was healed of his wounds.

    This sapling was brought to Middle-earth on Isildur\'s ship, and it was eventually planted in Minas Ithil before the house of Isildur. But when Sauron returned to Middle-earth, he launched a sudden attack that captured Minas Ithil, and he destroyed the White Tree. Isildur escaped taking with him again a sapling.

    In the Year 2 of the Third Age, Isildur plants the seedling of the White Tree in Minas Anor.
    This White Tree lasts until TA 1636, when the Great Plague hits Gondor, killing among many others King Telemnar and his children.',
    date: Date.new(1643,11,5),
    location: 'Minas Anor'
  },
  {
    title: 'Isildur dies and looses the Ring of Power',
    snippet: 'Isildur was killed by Orcs and the Ring was lost in the Disaster of the Gladden Fields for nearly 2,500 years. His refusal to destroy the Ring allowed Sauron\'s spirit to endure and ensured that he would remain a threat to Middle-earth for years to come.',
    body: 'Isildur\'s son Aratan was mortally wounded, and his son Ciryon was killed. His eldest son Elendur begged him to flee in order to prevent the Orcs from capturing the Ring. Isildur agreed and parted with great sorrow from Elendur, who was slain leading the remaining Dúnedain.

    Isildur put on the Ring though it pained him and headed for the Anduin. He removed his armor and waded into the River intending to try to cross it. The current was strong and despite his great strength, it pulled him toward the marshes of the Gladden Fields. Then the Ring left Isildur\'s finger and was lost in the waters. Isildur initially felt an overwhelming sense of loss, but was then relieved as if a great burden had been lifted from him. He rose out of the water, but at that moment, he was spotted by orcs who shot him with arrows through the throat and heart.[9

    The One Ring remained in the Gladden Fields until Déagol found it in TA 2463.[6 Isildur\'s body also lay in the waters, undiscovered by his kin.',
    date: Date.new(1667,8,10),
    location: 'Gladden Fields'
  },
  {
    title: 'Kin-strife in Gondor',
    snippet: 'The Kin-strife was a disastrous civil war in Gondor.

    The unrest that created the Kin-strife began when Valacar, the son of the Gondorian king Rómendacil II, married a woman of the Northmen of Rhovanion, Vidunavi. She bore him a son Eldacar, but many Gondorians of Númenórean blood were angered by this mixing of blood of Middle Men and Númenóreans, and the coastal provinces rebelled when Valacar grew old.',
    body: 'The Kin-strife was a disastrous civil war in Gondor.

    The unrest that created the Kin-strife began when Valacar, the son of the Gondorian king Rómendacil II, married a woman of the Northmen of Rhovanion, Vidunavi. She bore him a son Eldacar, but many Gondorians of Númenórean blood were angered by this mixing of blood of Middle Men and Númenóreans, and the coastal provinces rebelled when Valacar grew old.

    When in TA 1432 Eldacar succeeded his father the unrest grew into open rebellion, as many Gondorians saw Eldacar as a half-breed who had no right to rule. The chief of them was his distant relative Castamir the Usurper, Lord of Ships, who in TA 1437 usurped the throne, forcing Eldacar into exile. Castamir was supported by the people of the realm of Umbar, who seeked revenge against Gondor. During the rebellion Osgiliath was burned, and the great Dome of Stars was lost, together with its Palantír. Castamir also murdered Eldacar\'s son and heir Ornendil. Eldacar fled to Rhovanion, and Castamir ruled in his stead.

    A full decade later, in TA 1447, Eldacar returned with Rhovanion troops; at the same time a rebellion against Castamir\'s cruel rule took place. Eldacar managed to kill Castamir at the Battle of Erui, but Castamir\'s sons and many of their supporters fled south to Umbar. Eldacar could not follow them, as the fleet was under Castamir\'s control.

    Not only did Gondor lose the city of Umbar for four centuries and gain a new enemy in the Corsairs of Umbar, descendants of Castamir\'s sons, but also many of the Númenóreans of purest blood were killed during the civil war, leaving Gondor weakened.

    The Kin-strife was, along with the Great Plague and sheer laziness one of the chief reasons for the abandonment of the fortresses in and surrounding Mordor.',
    date: Date.new(1671,5,22),
    location: 'Osigiliath'
  },
  {
    title: 'The Great Plague strikes Gondor',
    snippet: 'The infectious epidemic that spread out of Rhovanion into Gondor and Eriador in Third Age 1636; also known as the Dark Plague.',
    body: 'The Great Plague began in the east beyond Mordor, reaching Osgiliath in TA 1636 just a year after King Minardil of Gondor had been killed at Pelargir by the Corsairs of Umbar, and only two centuries after the Kin-strife of Gondor. The new king, Telemnar was killed together with his kin, as well as many others of the Dúnedain. Together these events served to further destroy the people of Gondor.

    The Plague had first hit Rhûn and Rhovanion, and after the plague had passed more than half the folk of the Kingdom of Rhovanion had been killed. From Osgiliath the plague spread west and then north. Enedwaith and Dunland were scarcely affected, but the Plague regained strength as it went north, and Minhiriath (the southern part of Cardolan) was especially hit hard. The last of the Dúnedain of Cardolan died on the Barrowdowns, and evil spirits from Angmar and Rhudaur entered the realm.

    Arthedain further to the north was scarcely affected, while the Shire was hit harder, with the Hobbits suffering great losses. Arthedain still defended Fornost to the north.

    The city of Osgiliath was especially hit hard, suffering the highest casualties outside of Rhovanion. Many fled the city and re-located to Ithilien and Anórien, and Minas Anor became the King\'s seat there.',
    date: Date.new(1673,10,12),
    location: 'Osigiliath'
  },
  {
    title: 'The Fall of Minas Ithil',
    snippet: 'As the easternmost fortification in the kingdom of Gondor, and a sister city to Minas Anor (now known as Minas Tirith), Minas Ithil safeguarded the eastern borders of the Kingdom of Gondor and protected the capital Osgiliath from the forces of Mordor during the early part of the Third Age. As Gondor\'s armies weakened, it was then taken by the forces of Mordor, and used as a base to attack Gondor and in the process, decayed into the dark and demonic fortress that gave the city its new name.

    Minas Morgul was located in an upland valley at the feet of the Mountains of Shadow. It overlooked the region of Ithilien and controlled the only easily accessible pass through the mountains that led into Mordor, the pass of Cirith Ungol.',
    body: 'In its heyday, Minas Ithil was described as a beautiful sight, with moonlight filling its inner courts with silver light and causing its walls to gleam silver and white. It was a walled city of white marble built on a high shelf of rock. Within the walls, there were white houses and a tall tower. The walls and the tower had many windows, and the top of the tower revolved slowly back and forth. A road ran from Osgiliath on the Anduin through Ithilien to the city and crossed the Mountains of Shadow into Mordor via the pass.

    The Nazgûl, led by the Witch-king of Angmar, the most fearsome of Sauron\'s minions, returned to Mordor in 1980 to prepare for Sauron\'s return. Meanwhile, Gondor had been devastated by many attacks of Mordor\'s allies, the Wainriders, Variags, and Haradrim, who gained two devastating victories, killed two kings, and conquered almost all the provinces east of the Anduin. Soon Mordor started to attack and conquer parts of Gondor. In TA 2000, the forces of the nine Nazgûl laid siege to Minas Ithil. In TA 2002 after a long siege, the city fell and was transformed into a bastion of evil. As a result, it came to be called Minas Morgul, which in Sindarin means Tower of Dark Sorcery. Minas Morgul stood upon the Morgulduin, a polluted tributary of the Anduin.

    The Palantír\'s (Ithil-stone\'s) fate was unknown. Many Men of Gondor believed the guards of the city had destroyed it, but by the nature of the Palantíri, this was impossible. Others believed that it was taken to Barad-dûr, which became known as the real seat of power in Mordor.',
    date: Date.new(1903,1,17),
    location: 'Osigiliath'
  }
]

events_data.each do |event|
  created_event = Event.find_or_create_by(event)
  EventTimeline.find_or_create_by(event: created_event, timeline_id: 51)
end
