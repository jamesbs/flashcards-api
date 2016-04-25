import * as fs from 'fs';
import { resolve } from 'path';

export interface LangItem {
    id: string;
    chinese: string;
    pinyin: string;
    english: string;
}

const db: LangItem[] = JSON.parse(fs.readFileSync(resolve(__dirname, './cards.json'), 'utf8'));

export const data: { [key: string]: LangItem } = db.reduce(
    (set, unit) => {
        set[unit.id] = unit;
        return set;
    }, 
    <{ [key: string]: LangItem }>{});