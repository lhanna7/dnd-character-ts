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
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }

    static generateAbilityScore() {
        const topThree = this.topThreeDiceRolls();
        return topThree.reduce(
            (runningTotal: number, nextNumber: number) => runningTotal + nextNumber, 0
        )
    }

    static topThreeDiceRolls() {
        const diceRoll: number[] = [];
        while (diceRoll.length < 4) {
            diceRoll.push(this.randomNumberGenerator())
        }
        const smallestRoll = Math.min(...diceRoll);
        return diceRoll.filter(roll => roll != smallestRoll);
    }

    static randomNumberGenerator() {
        return Math.ceil(Math.random() * 6)
    }

    static getModifierFor(constitution: number) {
        return Math.floor((constitution - 10) / 2)
    }
}
