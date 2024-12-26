# Grand Chase Manager

Motivation:
The game contains multiple characters and multiple composition to achive its objective.
![](/asset/hero_inventory.png)
It also contains some statics that builds the Meta.
![](/asset/wb_meta.png)
But it is not easy to track the evolution of all characters and have a better view of the current composition with the Meta.

So the main goal for this app is to enable a better view of the big picture and compare the current status with the meta.
And if possible, also provide some tools to help the player manage its resources.

Another objective is that this app has as goal to be cheap to maintain, so for initial version it should work offline, but with possibility to upgrade into a online version, meaning that instead of inputing the META manually, the meta would be based on what everyone's comp.


## Planning
Each character contains
- Level
- Chaser
- Soul Imprint
- Transcendence Awakening
- Equipment
- Hero Exclusive Weapon
- Artifact
- Accessories

Which is detailed below.

So for the user, it needs to have 2 sections.
One section contains its current status, equipments, accessories, etc
And the other section is the goal, which by default would be filled with the `META`
Note that there are couple of data that there is no need to set as goal.
For example, an accessory there is a need to know which ring and set it is being used,
but there is no need to say that it needs to maxmized into Tier 3 +9, because it will alway be the goal.

Also, the system will track all the challenges/events to help build the comps, and compare if the user's comp is in the meta.


![](/asset/character_attribute.png)
### Level
![](/asset/level_trait.png)
- Current Max level 230
- Enable a point for every 10 levels
- Max trait level is 5
- Traits 
    - Crit Chance
    - Skill Cooldown Reduction
    - Basic Attack Speed Increase
    - Basic Attack Damage Reduction
    - Skill Attack Damage Reduction
    - Basic Attack Damage Increase
    - Skill Attack Damage Increase
    - True Damage Increase
    - Increase Received Healing Amount


### Chaser
![](/asset/chaser_trait.png)
- Current Max level 25
- TODO: You need resources to upgrade (Growth Essence and Growth Cube), needs to check how many resource is needed for each level.
- From Rank 15 and below, they all have max level 5
- Traits
    - Rank 5
        - Elevated Power
        - Long Life
        - Helper
        - Prayer of Blessing
    - Rank 10
        - Invisible Hand
        - Divine Protection
        - Pure Luck
        - Breath of Life
    - Rank 15
        - Connection
        - Impulse
        - Persistent Executioner
        - Soul Healer
    - Rank 20
        - Different for each character (max 3)
        - Different for each character (max 2)


### Soul Imprint
![](/asset/soul_imprint_trait.png)
- Current Max Level 15
- Every node has a max level of 5
- You need to max Memory Core to enable Body Core
- You need to max Body Core to enable Soul Core
- Memory Core
    - TODO: check the necessary amoutn of Growth Essence to upgrade
    - Power Imprinted on the Soul
        - Critical Damage Defense
            - Boss Hunt
    - Hero's Talent 1
        - Swelling Breath
            - Seasoned Adventurer Open
            - Prepared Mind
                - Hero's Talent 1
                    - Imprint of Memory

- Body Core
    - TODO: check the necessary amoutn of Growth Essence and Growth Cube to upgrade
    - United Will Open
        - Escape Danger Open
            - Pact of Blood Battle Open
    - Breakthrough
        - Maximize Link
            - Advanced Concentration
            - Activate Maximize
                - Hero's Talent 2
                    - Body Imprint

- Soul Core
    - TODO: check the necessary amoutn of Growth Essence and Growth Cube to upgrade
    - Hints of the Chase 1
        - Crash the Castle Walls
            - Hints of the Chase 2
    - Hero's Talent 2
        - Sense of Balance
            - Advanced Concentration
            - Resistance
                - Charged Soul
                    - Soul Imprint

### Transcendence Awakening
![](/asset//transcendence_trait.png)
- Current Max Level 6
- You need duplicates to upgrade this
- You have 3 options
    - Executioner
    - Guardin
    - Helper
    - TODO: Add more details of the sub-options to be selected by each option, but it may be different for each class.

### Equipment
![](/asset/equipment.png)
Equipments have the following sets:
- Gaze of Focus
- Power of Doom
- Ribbon of Life
- Aura of Passion
- Support of Protection

Each set has buffs if used with 2/4 equipments together.

- Primary Attribute
    - Max Health
    - Physical Damage
    - Magical Damage
    - TODO: other attributes, all tho usually the above are the most commons in meta

- Secondary Attributes
    - Weapon
        - True Damage Chance
        - Debuff duration to enemy increase
        - Debuff duration decrease
        - Critical Damage Defense Chance
    - Support Weapon
        - PVP Damage Increase
        - PVP Received Damage Decrease
        - Increase Damage Given to Boss
    - Armor
        - Crit Chance
        - Critical Damage Defense Chance
        - Increase Received Healing Amount
    - Support Armor
        - Critical Damage
        - Decrease Received Crit Damage
        - Increase Received Healing Amount

- Magic Enchantment
    - Slots:
        - Weapon: 1 Gray + 2 Red
        - Support Weapon: 1 Gray + 2 Red
        - Armor: 2 Gray
        - Support Armor: 1 Gray + 1 Blue
    - Blue Dimension Residue
        - Basic Attack Damage Reduction
        - Skill Attack Damage Reduction
        - Basic Attack Damage Increase
        - Skill Attack Damage Increase
    - Red Dimension Residue
        - Crit Chance
        - Skill Cooldown Reduction
        - Basic Attack Speed Increase
        - Sepecial Skill Cooldown Reduction
    - Gray Dimension Residue
        - Max Health
        - Physical Defense
        - Magic Defense
        - Physical Attack / Magical Attack
    
### Hero Exclusive Weapon
- Current Max Level 10
- Needs 300 `Aernas Three Goddesses' Grace` to craft
- TODO: Need to research on how much resource need for each level

### Artifacts
- Have 4 types
    - Common
    - Cursed (Purple)
    - Frozen (Blue)
    - Burning (Yellow)
- Have tier from 1 to 4
- TODO: Research max level

### Accessories
![](/asset//accessories.png)
- Max level 9
- Max Tier 3
- Sets
    - Bloody Oath (Orange)
    - Determined Strike (Purple)
    - Protection of Life (Blue)
- Ring
    - Glacial
    - Solar
    - Gale
    - Sapling
- Necklace
    - Chasm
    - Tank's
    - Lava
    - Lifeblood
- Earrings
    - Gust
    - Order
    - Frost
    - Resistance

### META
- For a initial phase, the meta will be inputed manually based on the info gathered on `Hero Statics`
- It should store the following:
    - Challenges/Event
        - Challenge/Event name - string
        - comps? - { characters[], pet }[]
        - Can repeat a character? - boolean
        - challenges?: Challenge
    Note: this structure allow a challenge/event to be single or groups, for example PVP, is single and would looke like { name: pvp, comp: [...] }
    A group like world boss would look like: {name: WB, canRepeat: false, challenges:  [{ name: wb1, comp: [...] }] }

## Planning - Tech
