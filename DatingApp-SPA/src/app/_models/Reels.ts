import { Photo } from './photo2';

export interface Reels {
    id: number;
    cMnf: string;
    qty: number;
    photoUrl2: string;
    photos?: Photo[];
}