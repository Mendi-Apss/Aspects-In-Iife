import { all, compose, equals, length, map, pluck, times, uniq } from 'ramda';

export type Shape = 'oval' | 'diamond' | 'squiggle';
export type Color = 'red' | 'green' | 'purple';
export type Number = 1 | 2 | 3;
export type Filling = 'solid' | 'striped' | 'empty';

const SHAPE: Shape[] = ['oval', 'diamond', 'squiggle'];
const COLOR: Color[] = ['red', 'green', 'purple'];
const NUMBER: Number[] = [1, 2, 3];
const FILLING: Filling[] = ['solid', 'striped', 'empty'];

export interface Card {
    shape: Shape;
    color: Color;
    number: Number;
    filling: Filling;
}

export const isSet = (cards: Card[]): boolean => {
    const shapeValues = pluck('shape', cards);
    const colorValues = pluck('color', cards);
    const numberValues = pluck('number', cards);
    const fillingValues = pluck('filling', cards);

    const hasEqualOrDifferentValues = (values: any[]): boolean => {
        const uniqValues = uniq(values);
        return length(uniqValues) === 1 || length(uniqValues) === 3;
    };
    const properties = [shapeValues, colorValues, numberValues, fillingValues];
    return all(compose(equals(true), hasEqualOrDifferentValues), properties);
};

export const createDeck = (): Card[] => {

    const generateCard = ([shape, color, number, filling]: [Shape, Color, Number, Filling]): Card =>
    ({
        shape,
        color,
        number,
        filling,
    });

    const allCombinations: [Shape, Color, Number, Filling][] = [];
    SHAPE.forEach((shape) => {
        COLOR.forEach((color) => {
            NUMBER.forEach((number) => {
                FILLING.forEach((filling) => {
                    allCombinations.push([shape, color, number, filling]);
                });
            });
        });
    });
    return map(generateCard, allCombinations);
};

const drawCards = (numberOfCards: number = 12): Card[] => {
    const deck = createDeck();
    const randomIndex = times(() => Math.floor(Math.random() * deck.length), numberOfCards);
    const cards = randomIndex.map(i => deck[i]);
    if (uniq(randomIndex).length < 12 && isSet(cards)) {
        drawCards();
    }
    return cards;
};