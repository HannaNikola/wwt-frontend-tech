import { create } from 'zustand'

interface FilterState {
	selected: string[]
	setSelected: (filter: string[]) => void
	clearFilters: () => void
}

export const useFilterStore = create<FilterState>(set => ({
	selected: [],
	setSelected: filters => set({ selected: filters }),
	clearFilters: () => set({ selected: [] })
}))
