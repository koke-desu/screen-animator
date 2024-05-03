// runした後の描画とかに必要なstate

import { atom } from "jotai";

export const renderPortalRef = atom<HTMLDivElement | null>(null);
