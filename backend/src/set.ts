import { all, compose, equals, length, pluck, times, uniq } from 'ramda';

export type Shape = 'oval' | 'diamond' | 'squiggle';
export type Color = 'red' | 'green' | 'purple';
export type Number = 1 | 2 | 3;
export type Filling = 'solid' | 'striped' | 'empty';

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
    return length(cards) === 3 ? all(compose(equals(true), hasEqualOrDifferentValues), properties) : false;
};


export const createCard = (): Card => {

    const shape: Shape[] = ['oval', 'diamond', 'squiggle'];
    const color: Color[] = ['red', 'green', 'purple'];
    const number: Number[] = [1, 2, 3];
    const filling: Filling[] = ['solid', 'striped', 'empty'];
    const randomCard = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

    return {
        shape: randomCard(shape),
        color: randomCard(color),
        number: randomCard(number),
        filling: randomCard(filling)
    };
};

export const cardsDeck = (numberOfCards: number = 3): Card[] => {
    return times(createCard, numberOfCards);
};