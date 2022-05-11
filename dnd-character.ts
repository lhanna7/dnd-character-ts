export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
    }

    static generateAbilityScore() {
        let topThree = this.topThreeDiceRolls
        const sum = 0;
        return topThree().reduce((prevValue, currValue) => prevValue + currValue, sum)
    }

    static topThreeDiceRolls() {
        let diceRoll = []
        while (diceRoll.length < 4) {
            diceRoll.push(this.randomNumberGenerator())
        }
        const smallestRoll = Math.min(...diceRoll);
        return diceRoll.filter(roll => roll != smallestRoll);
    }

    static randomNumberGenerator() {
        return Math.ceil(Math.random() * 6)
    }
}
