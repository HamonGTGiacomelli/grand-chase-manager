
type UserCharacter = {
    userId: number
    characterId: number
    level: Level,
    chaser: Chaser,
    soulImprint: SoulImprint,
    transcendence: Transcendence
    equipments: Equipments
    herosExclusiveWeapon: HerosExclusiveWeapon
    artifact: Artifact
    ring: Accessory<'ring'>
    necklace: Accessory<'necklace'>
    earrings: Accessory<'earring'>
}
 

type Level = {
    value: number,
    traits: {
        critChance: number
        skillCooldownReduction: number
        basicAttackSpeedIncrease: number
        basicAttackDamageReduction: number
        skillAttackDamageReduction: number
        basicAttackDamageIncrease: number
        skillAttackDamageIncrease: number
        trueDamageIncrease: number
        increaseReceivedHealingAmount: number
    }
}


type Chaser = {
    value: number,
    trait: {
        // rank 5
        elevatedPower: number
        longLife: number
        helper: number
        prayerofBlessing: number
        // rank 10   
        invisibleHand: number
        divineProtection: number
        pureLuck: number
        breathofLife: number
        // rank 15
        connection: number
        impulse: number
        persistentExecutioner: number
        soulHealer: number
        // rank 20    
        chaserSkill1: number
        chaserSkill2: number
    }
}


type SoulImprint = {
    memoryCore: Core
    bodyCore: Core
    soulCore: Core
}

type Core = {
    level: number
    nodeValues: { [key: string]: number }
}


type Transcendence = {
  level: number,
  // traits only for levels 3 and 6
  trait: { level: number, name: string }[]
}



type Equipments = {
    weapon: Equipment & { graySlot1: string, redSlot1: string, redSlot2: string }
    supportWeapon: Equipment & { graySlot1: string, redSlot1: string, redSlot2: string }
    armor: Equipment & { graySlot1: string, graySlot2: string }
    supportArmor1: Equipment & { graySlot1: string, blueSlot1: string, blueSlot2: string }
    supportArmor2: Equipment & { graySlot1: string, blueSlot1: string, blueSlot2: string }
}

type Equipment = {
    set: 'Gaze of Focus' | 'Power of Doom' | 'Ribbon of Life' | 'Aura of Passion' | 'Support of Protection'
    primaryAttribute: string
    secondaryAttribute: string
}


type HerosExclusiveWeapon = {
    level: number
}


type Artifact = {
    level: number
    tier: number
    type: "common" | "frozen" | "burning" | "cursed"
}


type Accessory <T extends 'ring' | 'necklace' | 'earring'>= {
    type: T,
    tier: number,
    level: number,
    set: 'Bloody Oath' | 'Determined Strike' | 'Protection of Life'
    attribute: string
}

