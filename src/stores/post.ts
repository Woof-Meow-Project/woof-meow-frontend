import { create } from 'zustand';

const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

// 한번에 여러 개의 store 업데이트
export const createBearFishSlice = (set, get) => ({
  addBearAndFish: () => {
    get().addBear();
    get().addFish();
  },
});

// 방법 2. 여러 개의 slice & 스토어
export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createBearFishSlice(...a),
}));
